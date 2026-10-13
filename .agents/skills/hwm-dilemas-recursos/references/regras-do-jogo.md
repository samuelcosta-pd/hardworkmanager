# Regras do jogo e schema (não quebrar)

Fonte: diagnóstico do código (`src/types/index.ts`, `src/lib/gameLogic.ts`, `src/store/gameStore.ts`, `src/data/events/`).

## Mecânica

| Item | Valor |
|---|---|
| Métricas | `capacidadeEntrega`, `qualidadeProduto`, `saudeEquipe`, `conhecimentoOrganizacional` |
| Valores iniciais | 100, 100, 100 e 50 (conhecimento) |
| Limites | cada métrica é limitada entre 0 e 100 (`clamp`) |
| Game Over | `capacidadeEntrega < 40`, `qualidadeProduto < 40` ou `saudeEquipe < 40` (conhecimento não encerra o jogo) |
| Partida | 10 dilemas em 4 sprints (3, 3, 3 e 1) |
| Baralho | `generateMatchDeck()` sorteia **2 dilemas de cada um dos 5 arquivos** com `Math.random()` |
| Regra de interdependência | se `conhecimentoOrganizacional < 20` e o impacto reduz `capacidadeEntrega`, a perda é multiplicada por 2 |
| Papéis | `pm` (voto de Minerva), `techLead`, `uxLead` |
| Votação | individual e secreta; divergência leva a debate cronometrado e segunda votação |

## Arquivos e invariantes do catálogo

- 5 arquivos em `src/data/events/`: `tailoringEvents.ts`, `leadershipEvents.ts`, `systemsThinkingEvents.ts`, `changeManagementEvents.ts`, `qualityEvents.ts`. **10 dilemas em cada**, 50 no total.
- Todo dilema tem **exatamente 3 alternativas** com `key` `'a'`, `'b'`, `'c'`.
- **Uma** alternativa tem `goodBad: 'good'` e **duas** têm `'bad'`.
- `id` único em todo o catálogo. Convenção: `<arquivo>_<n>_<slug>` (ex.: `leadership_1_escudo_suporte`, `quality_1_code_chaos_legado`).
- `pmbokConcept` distinto em todas as 150 alternativas.
- `impacts` e `delayedImpacts[].impacts` usam apenas as 4 métricas, com inteiros. Faixa típica: de −25 a +25. O catálogo atual chega a −40 em casos isolados (o validador só alerta acima de 40); em dilemas novos prefira ficar na faixa típica.
- Distribuição atual de `responsibleRole` nos 50 dilemas: `techLead` 25, `pm` 18, `uxLead` 7. Dilemas novos devem favorecer `uxLead` para equilibrar.

## Schema

```typescript
export interface DelayedImpact {
  triggerAfterEvents: number;          // contagem regressiva de dilemas
  impacts: Partial<Metrics>;
  narrative: string;                   // texto que aparece quando estoura
  condition?: {
    metric: keyof Metrics;
    operator: '<' | '>' | '===' | '<=' | '>=';
    value: number;
  };
}

export interface Alternative {
  key: 'a' | 'b' | 'c';
  text: string;                        // 80 a 150 caracteres, ação concreta
  impacts: Partial<Metrics>;
  delayedImpacts?: DelayedImpact[];
  feedbackNarrative: string;           // consequência imediata, narrada
  pmbokConcept: string;                // vocabulário de pmbok8-recursos.md
  learnings: string[];
  goodBad: string;                     // 'good' | 'bad'
  risksEvaded: string[];
  otherConsequences: string[];
}

export interface GameEvent {
  id: string;
  title: string;
  category: EventCategory;             // INFRASTRUCTURE | PEOPLE | KNOWLEDGE | EXECUTION | EXTERNAL_PRESSURE
  difficulty: EventDifficulty;
  probabilityWeight: number;
  tags: string[];
  learningObjective: string;
  communicationType: CommunicationType; // 'email' | 'slack' | 'ticket'
  senderName: string;
  senderInitials: string;
  avatarImage?: string;
  senderRole: string;
  domainTag: string;
  responsibleRole: PlayerRole;         // 'pm' | 'techLead' | 'uxLead'
  description: string;                 // 180 a 350 caracteres
  alternatives: Alternative[];
  // Fase 1 (a criar): resourceType e resourceProcess
}
```

### Campos novos da Fase 1 (quando existirem)

| Campo | Valores |
|---|---|
| `resourceType` | `'humano'` \| `'fisico_virtual'` |
| `resourceProcess` | `'planejar'` \| `'estimar'` \| `'adquirir'` \| `'liderar'` \| `'monitorar'` |

`EventCategory` **não muda**; é independente desses campos.

## Padrões observados nas alternativas

- A `good` costuma ter custo de curto prazo em `capacidadeEntrega` (ex.: −15) e ganhos em saúde, qualidade e conhecimento.
- As `bad` são atalhos (ganho imediato, custo diferido) ou heroísmo (um indivíduo absorve o problema).
- Em parte dos dilemas (não em todos), uma `bad` tem `delayedImpacts` (1 a 2 dilemas depois) com narrativa explícita do "eco". É um recurso de desenho, não uma exigência.
- `goodBad` é usado no Debriefing; nunca apresentar ao jogador qual é a `good` durante a votação.

## Campos de texto onde procurar resíduos do PMBOK 7

`title`, `description`, `learningObjective`, `domainTag`, `tags`, `text`, `feedbackNarrative`, `pmbokConcept`, `learnings`, `risksEvaded`, `otherConsequences` e `delayedImpacts[].narrative`. Termos a caçar: "PMBOK 7", "Trabalho do Projeto", "Work Performance Domain" e rótulos de domínios da edição anterior.

## Atenção ao `domainTag`

Hoje carrega frases como "Demonstre comportamentos de liderança" e "Inclua qualidade nos processos e nas entregas". Por padrão, no PMBOK 8 use o formato `Recursos › <nome do processo>` (ex.: `Recursos › Adquirir Recursos`), a menos que o usuário decida outro formato.
