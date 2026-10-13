# Plano dos dilemas novos (domínio Recursos)

Os 10 dilemas novos **substituem os 10 mais fracos** do catálogo, mantendo 10 por arquivo e a regra de 2 por arquivo no baralho. Quais dilemas são substituídos sai da **auditoria** (modo auditar): use a coluna "Substitui" para registrar a decisão.

## Candidatos

| # | Tema | Processo | Tipo | Papel | Arquivo sugerido | Substitui |
|---|---|---|---|---|---|---|
| 1 | Gerente funcional resiste a liberar desenvolvedores na alta temporada de matrículas | adquirir | humano | pm | changeManagementEvents | (definir na auditoria) |
| 2 | Licenças proprietárias subutilizadas: redistribuir, treinar ou cancelar | monitorar | fisico_virtual | techLead | systemsThinkingEvents | (definir) |
| 3 | Ambiente de homologação indisponível para testes de usabilidade com alunos: improvisar ou esperar | adquirir | fisico_virtual | uxLead | systemsThinkingEvents | (definir) |
| 4 | Estimativa bottom-up vs. por analogia para a migração do módulo de matrícula | estimar | humano | techLead | tailoringEvents | (definir) |
| 5 | Equipe em silos entre backend e UX: team charter e retrospectivas | liderar | humano | uxLead | leadershipEvents | (definir) |
| 6 | Dev sênior sai para o mercado privado: onboarding sob pressão | liderar | humano | pm | leadershipEvents | (definir) |
| 7 | Capacidade de nuvem insuficiente no pico de matrícula | planejar | fisico_virtual | techLead | systemsThinkingEvents | (definir) |
| 8 | Recurso alternativo (estagiário/terceirizado) com risco regulatório | adquirir | humano | pm | changeManagementEvents | (definir) |
| 9 | Equipe virtual distribuída e baixa colaboração | liderar | humano | uxLead | tailoringEvents | (definir) |
| 10 | Designer único como gargalo de todas as telas: teoria das restrições | monitorar | humano | uxLead | qualityEvents | (definir) |

Distribuição de papéis nos novos: `pm` 3 (#1, #6, #8), `techLead` 3 (#2, #4, #7), `uxLead` 4 (#3, #5, #9, #10). A base atual tem `techLead` 25, `pm` 18 e `uxLead` 7; reavalie depois da auditoria, porque os dilemas substituídos também mudam a conta.

## Cobertura alvo

| Processo | Quantidade nos novos |
|---|---|
| planejar | 1 |
| estimar | 1 |
| adquirir | 3 |
| liderar | 3 |
| monitorar | 2 |

| Tipo de recurso | Quantidade |
|---|---|
| humano | 7 |
| fisico_virtual | 3 |

Os arquivos sugeridos podem mudar para respeitar a rotação de temas e o equilíbrio de `responsibleRole` por arquivo. A cobertura final deve ser recalculada depois da auditoria dos 50 dilemas existentes.

## Briefing por tema (insumo para o modo criar)

Para cada tema, o modo criar deve produzir: situação concreta no SIGAA, remetente e canal, uma alternativa `good` que paga custo de curto prazo, duas `bad` tentadoras, um `delayedImpacts` em ao menos uma `bad`, conceitos do vocabulário e as métricas mais afetadas conforme o mapeamento de `pmbok8-recursos.md`.
