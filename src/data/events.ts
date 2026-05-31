import type { GameEvent } from '@/types';

export const GAME_EVENTS: GameEvent[] = [
  {
    id: 'code_chaos',
    title: 'O Caos do Código Legado',
    communicationType: 'ticket',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    senderRole: 'Desenvolvedor Sênior',
    domainTag: 'Qualidade Técnica',
    responsibleRole: 'techLead',
    description:
      'Ticket #1042 - Prioridade Crítica. Os módulos centrais de matrícula e emissão de histórico estão com alto acoplamento. A PROGRAD exigiu uma integração urgente com o novo sistema de bolsas. Estimar o esforço está impossível e integrar agora sem refatorar tem risco altíssimo de derrubar o banco de dados.',
    alternatives: [
      {
        key: 'a',
        text: 'Entregar a integração rápido conforme exigido, assumindo conscientemente a dívida técnica e torcendo para o sistema aguentar.',
        impacts: { budget: 0, quality: -20, morale: -10 },
        feedbackNarrative:
          'A integração foi entregue, mas semanas depois surgiram bugs severos. Estudantes ficaram sem histórico e a equipe precisou virar noites em modo de correção emergencial, esgotando o time.',
      },
      {
        key: 'b',
        text: 'Atitude de Dono: Parar a esteira de features e negociar a refatoração completa dos módulos críticos antes de fazer a integração.',
        impacts: { budget: -15, quality: 20, morale: 10 },
        feedbackNarrative:
          'A refatoração consumiu parte da verba com horas extras, mas a integração ocorreu sem quedas. O código ficou mais limpo, a performance melhorou e os devs agradeceram a decisão técnica madura.',
      },
      {
        key: 'c',
        text: 'Entregar uma versão parcial cobrindo apenas 60% dos casos de uso para ganhar tempo e refatorar o restante em paralelo.',
        impacts: { budget: -10, quality: -5, morale: -15 },
        feedbackNarrative:
          'Estratégia confusa. A versão parcial gerou dezenas de chamados no suporte. A refatoração paralela causou conflitos de merge diários, estressando os desenvolvedores e prejudicando a qualidade.',
      },
    ],
  },
  {
    id: 'ai_fever',
    title: 'A Febre da IA',
    communicationType: 'email',
    senderName: 'Gabinete da Reitoria',
    senderInitials: 'GR',
    senderRole: 'Reitor',
    domainTag: 'Gestão de Escopo',
    responsibleRole: 'pm',
    description:
      'Assunto: Inovação e Inteligência Artificial. Prezados, li uma matéria sobre IA na educação e exijo que o novo SIGAA inclua um assistente virtual inteligente para a apresentação ao MEC no mês que vem. É essencial para a imagem da universidade. Parem o que for necessário.',
    alternatives: [
      {
        key: 'a',
        text: 'Mindset estratégico: Solicitar uma reunião de alinhamento com a Reitoria, apresentando um roadmap estruturado para inserir a IA apenas em versões futuras.',
        impacts: { budget: 0, quality: 15, morale: 15 },
        feedbackNarrative:
          'A reunião revelou profissionalismo. O Reitor entendeu os riscos operacionais e aprovou o roadmap futuro. O projeto manteve o ritmo, blindou os desenvolvedores e a interface do sistema continuou sendo a prioridade.',
      },
      {
        key: 'b',
        text: 'Acatar a ordem imediatamente e realocar a equipe de UX e os devs para fazer um protótipo de chatbot às pressas.',
        impacts: { budget: -20, quality: -15, morale: -15 },
        feedbackNarrative:
          'O chatbot consumiu tempo e orçamento. O código gerado foi descartável e a tela de login do SIGAA continuou quebrada. A equipe ficou altamente frustrada com a mudança brusca de escopo.',
      },
      {
        key: 'c',
        text: 'Terceirizar a criação do chatbot usando parte crítica do orçamento de infraestrutura, sem envolver a equipe de devs.',
        impacts: { budget: -30, quality: 5, morale: -5 },
        feedbackNarrative:
          'A terceirizada entregou um bot genérico. O orçamento da nuvem ficou comprometido e a integração com o SIGAA foi malfeita, pesando as páginas, mas a exigência do Reitor foi cumprida.',
      },
    ],
  },
];
