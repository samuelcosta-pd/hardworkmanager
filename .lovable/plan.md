
## HardWorkManager - Plano de Implementação (v2)

Simulador educacional web (single-device, pass-the-laptop) para ensinar o domínio **Trabalho do Projeto** do PMBOK 7, usando o contexto do XIX WTISC.

### Stack
- React + TypeScript (TanStack Start já existente)
- Tailwind CSS v4 (já configurado em `src/styles.css`)
- Zustand (a instalar)
- lucide-react (a instalar)
- Tudo em memória, sem backend nem persistência

### Estrutura de diretórios

```text
src/
├─ types/index.ts                # Tipos do enunciado
├─ data/events.ts                # 2 eventos completos (speaker_accident, coffee_crisis)
├─ store/gameStore.ts            # Zustand: players, metrics, phase, votes, decisions, history
├─ lib/gameLogic.ts              # Aplicar impactos, tally votes, detectar gameover
├─ components/
│  ├─ ui/
│  │  ├─ SoftCard.tsx            # Card branco rounded-3xl, sombra difusa
│  │  ├─ SoftButton.tsx          # Botão neumórfico (primary/ghost/critical)
│  │  ├─ MetricBar.tsx           # Barra animada com sombra colorida por nível
│  │  └─ Avatar3D.tsx            # Avatar circular pastel com iniciais
│  ├─ screens/
│  │  ├─ PlayerSetup.tsx
│  │  ├─ RoleExplanation.tsx
│  │  ├─ ProjectBriefing.tsx
│  │  ├─ Dashboard.tsx
│  │  ├─ EventDisplay.tsx        # Renderiza email/slack/ticket
│  │  ├─ VotingRound.tsx         # Reusada r1 e r2 (passa o dispositivo)
│  │  ├─ VoteReveal.tsx
│  │  ├─ DebateStructured.tsx    # Cronômetro central, ordem dos falantes
│  │  ├─ ConsequenceFeedback.tsx
│  │  └─ GameOver.tsx
│  └─ comms/
│     ├─ EmailView.tsx
│     ├─ SlackView.tsx
│     └─ TicketView.tsx
└─ routes/index.tsx              # Renderiza a tela conforme phase do store
```

### Fluxo de jogo (máquina de estados via `phase` no store)

```text
onboarding → role_explanation → briefing → dashboard
   ↓
event_display → voting_round_1 → vote_reveal
   ├─ unânime → decision_resolved
   └─ divergente → debate_structured → voting_round_2 → decision_resolved
   ↓
feedback_narrative → dashboard (próximo evento)
   ↓
após 2 eventos → completed
condição crítica atingida → gameover
```

### Regras chave (corrigidas)
- 3 ou 4 jogadores; o 4º é forçado a `opsManager`
- Métricas começam em 100
- Níveis visuais: `critical` < 40, `warning` < 70, `stable` ≥ 70
- **Game Over** acionado se **qualquer** condição abaixo for verdadeira após aplicar impactos:
  - `budget <= 0`
  - `quality < 40`
  - `morale < 40`
- Votação secreta: cada jogador passa o dispositivo, escolhe A/B/C, tela limpa antes do próximo
- Revelação mostra divergência (quem votou em quê)
- **Debate Estruturado** - cronômetro central, tempos ajustados para dinâmica ágil:
  - 1º falante (minoria): **30s**
  - 2º falante (maioria): **30s**
  - PM fala por último para arbitrar: **20s**
  - Com 4 jogadores, o falante extra (não-PM) também recebe 30s; PM permanece como último com 20s
- Empate na rodada 2 → voto do PM decide
- GameOver mostra qual métrica colapsou + narrativa de falha; "completed" mostra histórico completo de decisões

### Design System (Soft UI)
Tokens em `src/styles.css`:
- `--background: oklch(0.98 0.005 250)` (#f7f9fc)
- `--card: oklch(1 0 0)` (#ffffff)
- `--primary`: roxo pastel suave
- `--success / --warning / --critical`: verde menta, amarelo pastel, coral suave (para sombras coloridas das métricas)
- `--radius: 1.5rem` (rounded-3xl padrão)
- Sombras: `--shadow-soft: 0 20px 40px -20px rgba(100,116,139,.15)` + variantes coloridas

Componentes usam exclusivamente tokens semânticos.

### Comunicação visual dos dilemas
- **Email**: layout caixa de entrada - assunto, remetente com avatar+cargo, corpo formal
- **Slack**: avatar 3D pastel + balão macio com cauda + nome+cargo+timestamp
- **Ticket**: card estilo Kanban com tag de domínio PMBOK colorida

### Animações
Transições Tailwind (`transition-all duration-500 ease-out`) nas barras de métricas e nos balões/cards (fade+translate). Sem libs extras.

### Entregáveis
- Jogo 100% jogável do PlayerSetup até GameOver/Completed
- 2 eventos com 3 alternativas cada conforme enunciado (textos verbatim)
- Histórico completo de decisões na tela final
- Reset para nova partida

### Nota técnica
`src/routes/index.tsx` é o único ponto de entrada e renderiza a tela atual baseada em `useGameStore(s => s.phase)`. Sem loaders nem server functions - tudo client-side e em memória.
