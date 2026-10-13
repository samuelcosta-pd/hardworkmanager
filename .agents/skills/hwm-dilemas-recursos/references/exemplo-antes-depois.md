# Exemplo antes/depois (modelo de saída)

Dilema real: `leadership_1_escudo_suporte`, adaptado ao domínio Recursos. Os valores de `impacts` e `delayedImpacts` foram **mantidos** de propósito. **Este exemplo é ilustrativo**: a versão final do texto deve ser aprovada pelo usuário.

## Tabela antes/depois por campo

| Campo | Antes | Depois |
|---|---|---|
| `title` | O Escudo de Desvios (Sobrecarga de Suporte) | O Escudo de Desvios (Capacidade da Equipe em Risco) |
| `learningObjective` | Manter o foco da equipe de projeto atuando como escudo contra interrupções operacionais. | Proteger a capacidade da equipe de desenvolvimento ao obter recursos alternativos para o suporte, em vez de consumir quem constrói o sistema. |
| `domainTag` | Demonstre comportamentos de liderança | Recursos › Adquirir Recursos |
| `resourceType` | (não existe) | `'humano'` |
| `resourceProcess` | (não existe) | `'adquirir'` |
| Alt. a `pmbokConcept` | Liderança Servidora e Proteção da Capacidade de Produção | Recursos alternativos com riscos reconhecidos |
| Alt. b `pmbokConcept` | Sobrecarga de Contexto e Perda de Foco | Bem-estar e prevenção de burnout |
| Alt. c `pmbokConcept` | Gargalo Gerencial e Liderança Heroica Inviável | Liderança distribuída e centralizada |
| Alt. a `learnings[0]` | Líderes devem proteger a equipe contra ruídos operacionais para preservar a capacidade produtiva do projeto. | Quando falta capacidade, obter recursos alternativos com os riscos assumidos às claras protege quem constrói o sistema e preserva o cronograma. |

## O que muda e o que fica

| Muda | Fica |
|---|---|
| Enquadramento (de "foco" para "capacidade e aquisição de recursos") | `id`, `key`, `goodBad` |
| `pmbokConcept` (vocabulário PMBOK 8) | Todos os `impacts` e o `delayedImpacts` da alternativa b |
| `domainTag`, `learningObjective`, `learnings` | Personagem, canal e papel responsável (`pm`) |
| Campos novos `resourceType` e `resourceProcess` | Estrutura de 3 alternativas, 1 `good` e 2 `bad` |

## Dilema depois (trecho do objeto TypeScript)

```typescript
{
  id: "leadership_1_escudo_suporte",
  title: "O Escudo de Desvios (Capacidade da Equipe em Risco)",
  category: EventCategory.PEOPLE,
  difficulty: EventDifficulty.MEDIUM,
  probabilityWeight: 2,
  tags: ["capacidade", "suporte", "aquisicao_recursos", "blindagem"],
  learningObjective: "Proteger a capacidade da equipe de desenvolvimento ao obter recursos alternativos para o suporte, em vez de consumir quem constrói o sistema.",
  communicationType: "email",
  senderRole: "Pró-Reitoria de Graduação",
  description: "Assunto: Chamados de Matrícula. A Pró-Reitoria de Graduação exige que a equipe do novo SIGAA pare o desenvolvimento imediatamente para atender chamados telefônicos de alunos com dúvidas de login e redefinição de senhas.",
  domainTag: "Recursos › Adquirir Recursos",
  resourceType: "humano",
  resourceProcess: "adquirir",
  senderName: "Pró-Reitor Adjunto",
  senderInitials: "PR",
  avatarImage: "/Personagens/Geraldo.png",
  responsibleRole: "pm",
  alternatives: [
    {
      key: "a",
      text: "Negociar a alocação emergencial de estagiários de suporte N1 e criar um FAQ automático, blindando os desenvolvedores.",
      impacts: { capacidadeEntrega: -15, qualidadeProduto: 15, saudeEquipe: 20, conhecimentoOrganizacional: 10 },
      feedbackNarrative: "Consumimos um pouco de esforço gerencial para negociar o apoio, mas mantivemos o time 100% focado no código central. A moral da equipe subiu expressivamente.",
      pmbokConcept: "Recursos alternativos com riscos reconhecidos",
      learnings: ["Quando falta capacidade, obter recursos alternativos com os riscos assumidos às claras protege quem constrói o sistema e preserva o cronograma."],
      goodBad: "good",
      risksEvaded: ["Burnout dos engenheiros e atraso no módulo crítico de matrículas"],
      otherConsequences: ["Estruturação de suporte sustentável para a universidade"],
    },
    // alternativas b e c: mesmos impacts e delayedImpacts; textos e pmbokConcept
    // atualizados conforme a tabela acima.
  ],
}
```
