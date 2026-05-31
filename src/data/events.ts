import type { GameEvent } from '@/types';

export const GAME_EVENTS: GameEvent[] = [
  {
    id: 'speaker_accident',
    title: 'Emergência na Abertura',
    communicationType: 'email',
    senderName: 'Assessoria Débora Valentim',
    senderInitials: 'AD',
    senderRole: 'Assessoria da Palestrante',
    domainTag: 'Gestão de Riscos e Resposta a Incidentes',
    responsibleRole: 'pm',
    description:
      'Assunto: Cancelamento de Participação por Força Maior. Prezados, informamos que a palestrante Débora Valentim sofreu um leve acidente de trânsito na manhã de hoje. Ela está bem e em recuperação, mas sob ordens médicas não poderá viajar para Quixadá. Lamentamos informar que sua participação no evento, programado para daqui a dois dias, está cancelada.',
    alternatives: [
      {
        key: 'a',
        text: 'Comunicar o cancelamento nas redes sociais imediatamente e alocar o orçamento que seria do hotel dela para estender e melhorar o Coffee Break da abertura.',
        impacts: { budget: 10, quality: -20, morale: -10 },
        feedbackNarrative:
          'A transparência foi rápida, mas o público ficou decepcionado com a falta da palestra principal. O evento começou com uma energia baixa e a equipe sentiu o peso da frustração dos participantes, apesar da comida farta.',
      },
      {
        key: 'b',
        text: 'Visão de dono: Mobilizar a equipe para encontrar um professor local do campus Quixadá que seja especialista e possa assumir uma palestra sobre IA de última hora.',
        impacts: { budget: 0, quality: 15, morale: 5 },
        feedbackNarrative:
          'O professor convidado salvou a abertura do evento. A equipe precisou correr muito para alinhar os temas e testar os slides a tempo, mas a atitude proativa manteve a qualidade do workshop e impressionou muito a tutora do grupo.',
      },
      {
        key: 'c',
        text: 'Propor à assessoria uma palestra virtual mais curta da Débora, alugando e montando uma estrutura de transmissão ao vivo de alta qualidade no auditório.',
        impacts: { budget: -20, quality: 15, morale: -5 },
        feedbackNarrative:
          'A palestra remota exigiu o aluguel de equipamentos caros e testes exaustivos de internet. A qualidade do conteúdo foi excelente e o público adorou, mas o caixa do evento sofreu um impacto e a equipe de operações terminou o dia esgotada.',
      },
    ],
  },
  {
    id: 'coffee_crisis',
    title: 'O Preço do Coffee Break',
    communicationType: 'email',
    senderName: 'TechSponsor IT',
    senderInitials: 'TS',
    senderRole: 'Patrocinador Master',
    domainTag: 'Gestão de Recursos',
    responsibleRole: 'opsManager',
    description:
      'Assunto: Ajuste na cota de patrocínio do WTISC. Prezados, confirmamos o patrocínio master que cobrirá o Coffee Break dos dias 20 e 21 de maio. Porém, exigimos uma contrapartida não prevista: queremos 30 minutos de fala institucional da nossa empresa logo na abertura oficial.',
    alternatives: [
      {
        key: 'a',
        text: 'Aceitar a exigência para garantir o dinheiro, permitindo o discurso de vendas antes da primeira palestra acadêmica.',
        impacts: { budget: 15, quality: -15, morale: -5 },
        feedbackNarrative:
          'A empresa fez uma apresentação comercial longa e muito cansativa. Os palestrantes seguintes tiveram que encurtar suas falas, gerando frustração geral no público acadêmico. O coffe break foi pago, mas o clima ficou tenso.',
      },
      {
        key: 'b',
        text: 'Proatividade na negociação: Ligar para o patrocinador e deslocar a fala deles para o momento exato do Coffee Break, integrando a marca da empresa ao Karaokê de forma criativa.',
        impacts: { budget: 10, quality: 15, morale: 10 },
        feedbackNarrative:
          'Excelente saída estratégica. O patrocinador adorou a ideia de ter um momento descontraído com os alunos. A qualidade acadêmica do evento subiu pela dinâmica e a equipe sentiu grande orgulho da negociação.',
      },
      {
        key: 'c',
        text: 'Recusar a exigência para proteger o tom acadêmico da abertura, correndo atrás de um fornecedor mais barato com o pouco dinheiro em caixa.',
        impacts: { budget: -25, quality: 5, morale: -15 },
        feedbackNarrative:
          'O tom acadêmico foi salvo, mas o desgaste da equipe foi extremo. Os bolsistas tiveram que tirar dinheiro do próprio bolso e correr em padarias locais de Quixadá. O coffee break foi muito simples e a equipe ficou exausta.',
      },
    ],
  },
];
