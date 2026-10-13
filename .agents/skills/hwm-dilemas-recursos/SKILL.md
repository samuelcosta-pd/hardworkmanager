# hwm-dilemas-recursos

Skill única para todo o trabalho sobre o catálogo de 50 dilemas do Hard Work Manager durante a migração PMBOK 7 → PMBOK 8 (domínio Recursos). Ela tem três modos. O modo vem no pedido do usuário; se não vier, pergunte qual deles.

## Antes de qualquer modo

Leia, nesta ordem:

1. `references/regras-do-jogo.md`: schema, invariantes e mecânica. O que está lá não pode quebrar.
2. `references/pmbok8-recursos.md`: vocabulário permitido para `pmbokConcept`, os 5 processos e os 7 resultados esperados.
3. `references/tom-e-personagens.md`: voz institucional (SIGAA/UFC) e personagens.
4. `references/exemplo-antes-depois.md`: um dilema real adaptado, como modelo de saída.
5. `references/plano-dilemas-novos.md`: só nos modos **criar** e **reescrever** de dilemas substitutos.

## Regras que valem sempre

- **Não inventar PMBOK.** Todo `pmbokConcept` vem do vocabulário de `pmbok8-recursos.md`. Se um conceito necessário não estiver lá, sinalize e pergunte; não crie por conta própria. Não cite número de seção ou de página.
- **Não tocar** em `generateMatchDeck()`, na contagem de 10 dilemas por arquivo, nas 4 métricas nem nos limites de Game Over.
- **Manter os `id`s** dos dilemas reescritos (partidas salvas no `localStorage` os referenciam). Dilema novo segue a convenção de id de `regras-do-jogo.md`.
- **Lotes de no máximo 5 dilemas.** Mostre diff e tabela antes/depois e **aguarde aprovação** antes de gravar. Nunca faça commit.
- Português do Brasil, sem emojis nos textos do jogo.
- Depois de qualquer alteração em arquivos, rode `npx tsx .agents/skills/hwm-dilemas-recursos/scripts/validar-dilemas.ts` e `npm run build`, e relate o resultado em tabela pass/fail.

## Modo 1: auditar

**Entrada:** um arquivo de eventos (ex.: `leadershipEvents.ts`). **Não edita nada.**

Para cada dilema, avalie e marque PASS/FAIL:

| Critério | Pergunta |
|---|---|
| C1 Recursos | A situação trata de recursos humanos ou físicos/virtuais? |
| C2 Processo | Dá para apontar um dos 5 processos do domínio? Qual? |
| C3 Resultado | Qual dos 7 resultados esperados a decisão afeta? |
| C4 Conceito | Os 3 `pmbokConcept` estão no vocabulário? |
| C5 Resíduos | Há "PMBOK 7", "Trabalho do Projeto" ou jargão da edição anterior em qualquer campo de texto? |
| C6 Estrutura | 3 alternativas (a, b, c), 1 `good` e 2 `bad`, schema íntegro? |
| C7 Coerência | Os `impacts` e `delayedImpacts` condizem com a narrativa? |
| C8 Tom | Voz institucional e verossímil, tamanhos dentro do padrão? |

**Classificação:**
- **leve**: só C4, C5 ou C8 falham (ajuste de texto e conceito).
- **profunda**: C1, C2 ou C3 falham, mas o tema é recuperável (reescrever a situação).
- **substituir**: o tema está fora de Recursos e não é recuperável sem virar outro dilema.

**Saída (nesta ordem):**
1. Tabela por dilema: id, C1..C8, classificação, uma linha de justificativa.
2. Resumo: contagem leve / profunda / substituir.
3. Matriz de cobertura do arquivo: processo × tipo de recurso × `responsibleRole`, apontando lacunas.
4. Candidatos a substituição, ordenados do mais fraco ao menos fraco.

## Modo 2: reescrever

**Entrada:** ids dos dilemas (lote ≤ 5) e a auditoria aprovada.

1. Mantenha: `id`, `key` das alternativas, a estrutura `delayedImpacts` e, por padrão, os valores de `impacts`. Se alterar algum valor numérico, liste cada mudança e o motivo (o equilíbrio do jogo afeta a comparabilidade dos dados do TCC).
2. Reescreva a situação e as alternativas para que o dilema trate de um problema concreto de recursos, dentro do cenário SIGAA/UFC.
3. Atualize: `title` (se necessário), `description`, `learningObjective`, `domainTag`, `text`, `feedbackNarrative`, `pmbokConcept`, `learnings`, `risksEvaded`, `otherConsequences` e a `narrative` dos `delayedImpacts`.
4. Se os campos `resourceType` e `resourceProcess` já existirem no tipo, preencha-os. Se não existirem, **pare e avise** que a Fase 1 (tipos) precisa vir antes.
5. Entregue: diff, tabela antes/depois por campo alterado e o resultado da validação.

## Modo 3: criar

**Entrada:** um tema de `references/plano-dilemas-novos.md` (ou outro tema do usuário) e o `id` do dilema que ele substitui.

1. O novo dilema ocupa a posição do substituído no mesmo arquivo, mantendo 10 por arquivo.
2. Siga o formato exato dos exemplos de `exemplo-antes-depois.md` e o schema de `regras-do-jogo.md`.
3. Desenho das alternativas: 1 `good` e 2 `bad`. A `good` costuma pagar um custo de curto prazo (ex.: `capacidadeEntrega` entre −10 e −15) e protege o futuro. Use `delayedImpacts` em uma `bad` quando o tema tiver um "eco" natural (atalho que cobra depois); não é obrigatório. Evite que a `good` seja óbvia pelo texto: as `bad` devem ser tentadoras (atalho, heroísmo, ganho imediato).
4. Escolha `responsibleRole` coerente com o tema e verifique o equilíbrio entre `pm`, `techLead` e `uxLead` no arquivo.
5. Entregue o objeto TypeScript completo, a tabela de conferência (processo, tipo de recurso, resultado afetado, métricas) e o resultado da validação.

## Se algo não se encaixar

Se um pedido exigir mudar tipos, lógica do jogo ou telas, isso **não** é desta skill: diga que é trabalho de Fase 1 (tipos) ou Fase 3 (interface e Helena) e proponha o prompt avulso correspondente.
