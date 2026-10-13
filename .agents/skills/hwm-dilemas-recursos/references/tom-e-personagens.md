# Tom, cenário e personagens

## Cenário

Modernização do Sistema de Gestão Acadêmica (SGA/SIGAA) de uma instituição pública de ensino superior inspirada na UFC. Há tensão política e institucional com Reitoria, Pró-Reitorias (PROGRAD), professores e alunos. A equipe tem poucos recursos, prazos fixados por calendário acadêmico (matrícula, semestre letivo) e legado técnico.

## Voz

- Narrativo-institucional, verossímil ao ambiente de TI pública/universitária.
- `description`: 2 a 4 linhas, 180 a 350 caracteres, corporativo e urgente, iniciando pelo "canal" quando for e-mail ("Assunto: ...") ou ticket ("Ticket #1042 - Prioridade Crítica.").
- Alternativa (`text`): 1 a 2 linhas, 80 a 150 caracteres, uma ação concreta no imperativo ou infinitivo.
- `feedbackNarrative`: 1 a 2 frases, consequência imediata, sem dizer "esta era a resposta certa".
- As alternativas `bad` devem ser plausíveis e tentadoras; nada de caricatura.
- Sem emojis nos textos do jogo. Sem moralismo.

## Personagens e canais

| Personagem | Papel | Uso típico | Imagem |
|---|---|---|---|
| Helena | Mentora (Onboarding, Sprint Review, Debriefing) | **Não** envia dilemas | `data/avatars.ts` |
| Carlos Silva | Líder técnico do legado | `ticket` | `/Personagens/Roberto.png` |
| Paulyne | QA | `slack` ou `ticket` | `data/avatars.ts` |
| Geraldo | Auditoria/segurança | `email` | `/Personagens/Geraldo.png` |
| Pró-Reitor Adjunto, Pró-Reitor, Vice-Reitor, Diretores | Demandas institucionais | `email` | usar avatar existente |

Antes de criar novo remetente, confira `src/data/avatars.ts`. Se o emissor for genérico, o jogo injeta um NPC aleatório (`injectNPC`); prefira remetentes já existentes para não depender disso. Não invente caminhos de imagem: use apenas os que existem.

## Canais (`communicationType`)

| Canal | Quando usar |
|---|---|
| `email` | Demandas institucionais, formais, com prazo (Pró-Reitoria, Diretoria) |
| `slack` | Pedidos rápidos e conflitos internos da equipe |
| `ticket` | Problemas técnicos e de infraestrutura |

## Dificuldade (`difficulty`)

Use os valores do enum `EventDifficulty` já existente (ex.: `MEDIUM`, `HARD`); consulte `src/types/index.ts` antes de usar outro.
