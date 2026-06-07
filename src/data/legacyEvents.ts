import type { GameEvent } from '@/types';
import { EventCategory, EventDifficulty } from '@/types';

export const GAME_EVENTS: GameEvent[] = [
  {
    id: 'code_chaos',
    title: 'A Dívida Técnica Acumulada',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 5,
    tags: ['legacy', 'tech-debt'],
    learningObjective: 'Gestão de legado',
    communicationType: 'ticket',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    senderRole: 'Desenvolvedor Sênior',
    domainTag: 'Trabalho do Projeto',
    responsibleRole: 'techLead',
    description:
      'Ticket #1042 - Prioridade Crítica. Os módulos centrais estão com alto acoplamento devido a entregas rápidas no passado. A diretoria exige uma integração urgente com o novo sistema de pagamentos. Estimar o esforço está impossível e integrar agora sem refatorar tem risco altíssimo de gerar falhas graves em produção.',
    alternatives: [
      {
        key: 'a',
        text: 'Entregar a integração rápido conforme exigido, assumindo conscientemente a dívida técnica e torcendo para o sistema aguentar.',
        impacts: { eficiencia: 0, qualidade: -20, saudeEquipe: -10 },
        feedbackNarrative:
          'A integração foi entregue no prazo, mas semanas depois surgiram bugs severos. Estudantes não conseguiram gerar boletos e a equipe precisou virar noites em modo de correção emergencial, esgotando o time e prejudicando a confiança.',
        pmbokConcept: 'Adequação de Processos (Trabalho do Projeto)',
        learnings: ['Acelerar entregas pulando etapas de qualidade de software resulta em dívida técnica.'],
        goodBad: 'Foi uma escolha ruim. Vocês ganharam tempo no curto prazo, mas pagaram um preço altíssimo em qualidade e desgaste da equipe na manutenção reativa.',
        risksEvaded: ['Vocês evitaram o atrito imediato com a diretoria por atrasos na entrega inicial.'],
        otherConsequences: ['Se tivessem negociado uma refatoração (Opção B), teriam consumido mais recursos agora, mas garantiriam estabilidade futura.'],
      },
      {
        key: 'b',
        text: 'Atitude de Dono: Parar a esteira de features e negociar a refatoração completa dos módulos críticos antes de fazer a integração.',
        impacts: { eficiencia: -15, qualidade: 20, saudeEquipe: 10 },
        feedbackNarrative:
          'A refatoração consumiu parte da eficiência operacional e causou atrito inicial, mas a integração ocorreu sem quedas. O código ficou mais limpo, a performance melhorou e os devs agradeceram a decisão técnica madura.',
        pmbokConcept: 'Gerenciar Processos e Melhoria Contínua',
        learnings: ['Negociar o pagamento de dívida técnica protege o valor do produto a longo prazo.'],
        goodBad: 'Foi uma decisão excelente. Vocês demonstraram maturidade e protegeram a sustentabilidade do projeto, mesmo enfrentando pressão externa.',
        risksEvaded: ['Evitaram falhas críticas em produção que teriam destruído a reputação do projeto.'],
        otherConsequences: ['Caso tivessem feito a entrega parcial (Opção C), estariam lidando com confusão de branch e desgaste contínuo da equipe de desenvolvimento.'],
      },
      {
        key: 'c',
        text: 'Entregar uma versão parcial cobrindo apenas 60% dos casos de uso para ganhar tempo e refatorar o restante em paralelo.',
        impacts: { eficiencia: -10, qualidade: -5, saudeEquipe: -15 },
        feedbackNarrative:
          'Estratégia confusa. A versão parcial gerou dezenas de chamados no suporte. A refatoração paralela causou conflitos de merge diários, estressando os desenvolvedores e prejudicando a qualidade do que estava sendo feito.',
        pmbokConcept: 'Eficácia na Gestão de Escopo Técnico',
        learnings: ['Tentar fazer refatoração estrutural em paralelo com entrega de feature na mesma base de código raramente funciona.'],
        goodBad: 'Foi uma escolha mediana para ruim. A divisão de foco causou ineficiência e não resolveu nem a dívida, nem a entrega.',
        risksEvaded: ['Vocês tentaram evitar o desgaste completo com a diretoria, entregando algo, mas geraram frustração técnica.'],
        otherConsequences: ['Se tivessem parado para refatorar tudo (Opção B), a dor seria apenas uma vez, em vez de um desgaste prolongado.'],
      },
    ],
  },
  {
    id: 'ai_fever',
    title: 'Mudança de Rumo Iminente',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 5,
    tags: ['legacy', 'scope-creep'],
    learningObjective: 'Gestão de demandas',
    communicationType: 'email',
    senderName: 'Gabinete da Reitoria',
    senderInitials: 'GR',
    senderRole: 'Reitor',
    domainTag: 'Trabalho do Projeto',
    responsibleRole: 'pm',
    description:
      'Assunto: Inovação Imediata. Prezados, a Reitoria exige que o novo Sistema Acadêmico inclua um assistente virtual inteligente (chatbot) para a apresentação institucional no mês que vem. É essencial para a nossa imagem. Parem o que for necessário na esteira atual para focar nisso.',
    alternatives: [
      {
        key: 'a',
        text: 'Mindset estratégico: Solicitar uma reunião com a Reitoria, explicando o impacto na esteira atual e apresentando um roadmap estruturado para inserir o chatbot apenas em versões futuras.',
        impacts: { eficiencia: 0, qualidade: 15, saudeEquipe: 15 },
        feedbackNarrative:
          'A reunião revelou profissionalismo. A Reitoria entendeu os riscos operacionais e aprovou o roadmap futuro. A equipe de desenvolvimento pôde manter o foco, e a arquitetura central do sistema não foi comprometida.',
        pmbokConcept: 'Comunicação e Engajamento de Stakeholders',
        learnings: ['A comunicação adequada blinda a equipe de interrupções abruptas de fluxo de trabalho.'],
        goodBad: 'Foi a melhor decisão. Vocês protegeram a eficiência operacional do time gerenciando ativamente as expectativas do patrocinador.',
        risksEvaded: ['Evitaram a quebra de processos e o desenvolvimento de soluções improvisadas que se tornariam código legado rapidamente.'],
        otherConsequences: ['Se tivessem acatado imediatamente (Opção B), a entrega principal do sistema estaria agora comprometida e cheia de falhas de qualidade.'],
      },
      {
        key: 'b',
        text: 'Acatar a ordem imediatamente e realocar a equipe de UX e os devs para fazer um protótipo de chatbot às pressas, interrompendo as entregas planejadas.',
        impacts: { eficiencia: -20, qualidade: -15, saudeEquipe: -15 },
        feedbackNarrative:
          'O chatbot consumiu tempo e eficiência. O código gerado foi descartável e a tela principal de login continuou com problemas. A equipe ficou altamente frustrada com a quebra de processos e mudança brusca de foco.',
        pmbokConcept: 'Desempenho Eficiente e Efetivo',
        learnings: ['Interrupções de fluxo destroem a produtividade e geram retrabalho imediato.'],
        goodBad: 'Foi uma decisão ruim. Ao dizer "sim" sem avaliar o impacto no Trabalho do Projeto, vocês desorganizaram a equipe.',
        risksEvaded: ['Vocês evitaram o conflito político imediato com a Reitoria, satisfazendo a demanda de curto prazo.'],
        otherConsequences: ['Se tivessem negociado com a diretoria (Opção A), teriam mantido o fluxo da equipe intacto e planejado o recurso para o momento correto.'],
      },
      {
        key: 'c',
        text: 'Terceirizar a criação do chatbot usando parte crítica do orçamento (recursos) de infraestrutura, sem envolver a equipe interna de devs para não atrapalhar a esteira.',
        impacts: { eficiencia: -30, qualidade: 5, saudeEquipe: -5 },
        feedbackNarrative:
          'A terceirizada entregou um bot genérico em tempo recorde. No entanto, o orçamento ficou comprometido e a integração com o sistema foi frágil, prejudicando a eficiência geral dos recursos.',
        pmbokConcept: 'Gestão de Aquisições e Recursos Físicos',
        learnings: ['Terceirizar não resolve problemas de escopo se consome recursos críticos destinados a outras partes essenciais do projeto.'],
        goodBad: 'Foi uma escolha arriscada. Vocês preservaram o foco do time interno, mas sacrificaram gravemente os recursos financeiros e a integração técnica.',
        risksEvaded: ['Evitaram interromper o trabalho da equipe interna de desenvolvimento.'],
        otherConsequences: ['Se tivessem alinhado as expectativas (Opção A), os recursos críticos não teriam sido desperdiçados em uma aquisição reativa.'],
      },
    ],
  },
];
