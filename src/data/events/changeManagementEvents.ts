import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Princípio 4: Aceite a mudança para alcançar o futuro estado previsto
 * Fundamentação: Seção 2.5.7 (Monitoramento de trabalho novo e mudanças) - Combate ao aumento descontrolado de escopo e governança de mudanças.
 * Objetivo Pedagógico: Combate à Distorção de Escopo (Scope Creep).
 * Total: 10 Dilemas
 */
export const changeManagementEvents: GameEvent[] = [
  {
    id: 'change_1_ideia_reitor',
    title: 'A "Pequena" Ideia do Reitor (Chatbot com IA)',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['scope_creep', 'mudancas', 'governanca', 'stakeholders'],
    learningObjective: 'Resistir à distorção de escopo não planejada submetendo novas ideias à análise formal de impacto.',
    communicationType: 'slack',
    senderRole: 'Gabinete da Reitoria',
    description: 'O Reitor envia mensagem no Slack pedindo uma "pequena inclusão" não planejada: um chatbot com Inteligência Artificial para responder dúvidas de matrícula no ar na próxima semana para uma coletiva de imprensa.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Gabinete da Reitoria',
    senderInitials: 'GR',
    avatarImage: '/Personagens/Rainara.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Apresentar a análise de impacto, demonstrar que o chatbot no momento comprometeria o fluxo de matrícula e incluí-lo formalmente no roadmap da Fase 2.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 20, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A postura profissional e transparente impressionou o Reitor. Ele compreendeu os riscos operacionais, elogiou a responsabilidade da equipe e aprovou o cronograma da Fase 2.',
        pmbokConcept: 'Gestão de Mudanças Integrada e Controle de Linha de Base',
        learnings: ['Dizer "não agora, mas com planejamento na próxima fase" protege a integridade do escopo sem romper com o patrocinador.'],
        goodBad: 'good',
        risksEvaded: ['Distorção de escopo caótica e descontinuidade das metas principais'],
        otherConsequences: ['Alinhamento estratégico e roadmap sustentável']
      },
      {
        key: 'b',
        text: 'Acatar a ordem imediatamente e parar a equipe de desenvolvimento para criar um protótipo de chatbot às pressas.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -20, saudeEquipe: -25, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O chatbot consumiu todo o esforço do mês. O código gerado foi descartável e a tela principal de matrículas continuou quebrada, gerando caos na imprensa.',
        pmbokConcept: 'Distorção de Escopo (Scope Creep) Desastrosa',
        learnings: ['Acatar pedidos informais de autoridades sem avaliar a viabilidade técnica é uma das maiores causas de fracasso em projetos.'],
        goodBad: 'bad',
        risksEvaded: ['Confrontar o patrocinador no curto prazo'],
        otherConsequences: ['Atraso geral no projeto e produto defeituoso']
      },
      {
        key: 'c',
        text: 'Fingir que vai fazer e no dia da coletiva apresentar um vídeo gravado simulando que a IA funciona.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -15, saudeEquipe: -20, conhecimentoOrganizacional: -25 },
        feedbackNarrative: 'Um jornalista testou o sistema ao vivo e descobriu a farsa. O escândalo de manipulação de dados destruiu a reputação do comitê.',
        pmbokConcept: 'Fraude de Entregáveis e Quebra de Confiança',
        learnings: ['Simular entregas inexistentes destrói a governança e a ética profissional.'],
        goodBad: 'bad',
        risksEvaded: ['Pressão imediata do reitor'],
        otherConsequences: ['Escândalo de imprensa e demissão sumária']
      }
    ]
  },
  {
    id: 'change_2_reclamacao_professores',
    title: 'Resistência Cultural: Reclamação dos Professores',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['gestao_mudanca', 'professores', 'cultura', 'adocao'],
    learningObjective: 'Conduzir a gestão da mudança organizacional e apoiar os usuários na transição para novos processos.',
    communicationType: 'email',
    senderRole: 'Sindicato dos Docentes',
    description: 'Assunto: Insatisfação com o Novo Diário de Notas. Um grupo influente de 50 professores veteranos enviou abaixo-assinado exigindo que a interface do novo SGA seja desfeita e volte a ser exatamente a tela do sistema em tela preta de 20 anos atrás.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Representação Docente',
    senderInitials: 'RD',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Oferecer oficinas práticas de 30 minutos com os docentes, acolher feedbacks de ergonomia e criar um guia passo a passo em vídeo.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'Nas oficinas, os professores perceberam que o novo diário lança notas em 2 cliques em vez de 15. A resistência se transformou em apoio entusiasta.',
        pmbokConcept: 'Gestão da Mudança Organizacional e Empatia com Stakeholders',
        learnings: ['Resistência a novos sistemas geralmente é medo do desconhecido; acolhimento e treinamento transformam críticos em defensores.'],
        goodBad: 'good',
        risksEvaded: ['Boicote docente no lançamento de notas'],
        otherConsequences: ['Adoção voluntária e fluida da nova tecnologia']
      },
      {
        key: 'b',
        text: 'Ceder à pressão e reprogramar todo o sistema para imitar a interface preta e cinza dos anos 2000.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O projeto regrediu 20 anos. Os estudantes e professores mais jovens ficaram indignados com o retrocesso tecnológico.',
        pmbokConcept: 'Retrocesso de Escopo por Acomodação Passiva',
        learnings: ['Ceder a pressões retrógradas sem conduzir a gestão da mudança destrói a modernização tecnológica da instituição.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito com professores veteranos'],
        otherConsequences: ['Perda de meses de trabalho e sistema obsoleto']
      },
      {
        key: 'c',
        text: 'Ignorar as reclamações e publicar um comunicado dizendo que "quem não gostar do novo sistema que aprenda na marra".',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: -25, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'Os professores paralisaram o lançamento de notas do semestre em protesto. O conselho universitário suspendeu o projeto.',
        pmbokConcept: 'Arrogância Tecnológica e Ruptura Institucional',
        learnings: ['Impor sistemas de cima para baixo sem diálogo gera boicote e paralisação institucional.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de suporte'],
        otherConsequences: ['Greve de notas e suspensão do projeto']
      }
    ]
  },
  {
    id: 'change_3_mudanca_regulatoria_mec',
    title: 'Portaria do MEC: Novo Padrão de Diploma Digital',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['compliance', 'mec', 'mudancas', 'legislacao'],
    learningObjective: 'Adaptar o planejamento e o backlog rapidamente diante de imposições regulatórias obrigatórias.',
    communicationType: 'email',
    senderRole: 'Pró-Reitoria de Graduação',
    description: 'Assunto: Portaria MEC nº 1.001. O Ministério da Educação publicou uma portaria obrigatória exigindo que todos os diplomas emitidos a partir do mês que vem contenham assinatura com certificado ICP-Brasil e XML específico sob pena de cassação da autonomia universitária.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Pró-Reitor de Graduação',
    senderInitials: 'PR',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Realizar reunião extraordinária do comitê, mover o Diploma Digital para o topo da sprint atual e adiar funcionalidades não críticas de baixa prioridade.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'A equipe adaptou o foco com agilidade. O módulo de diploma digital foi homologado com 10 dias de antecedência e a UFC foi a primeira universidade do estado a cumprir a portaria.',
        pmbokConcept: 'Adaptabilidade a Mudanças Regulatórias e Repriorização de Backlog',
        learnings: ['Mudanças regulatórias legais têm precedência máxima; adaptar o backlog com velocidade protege a conformidade institucional.'],
        goodBad: 'good',
        risksEvaded: ['Sanções do MEC e invalidação de diplomas de formandos'],
        otherConsequences: ['Destaque institucional em conformidade legal']
      },
      {
        key: 'b',
        text: 'Ignorar a portaria e continuar desenvolvendo funcionalidades cosméticas agendadas na sprint original.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -25 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -30, qualidadeProduto: -30, saudeEquipe: -30, conhecimentoOrganizacional: -30 },
            narrative: 'O MEC auditou a universidade e suspendeu a emissão de diplomas de todos os 4.000 formandos do ano. O reitor demitiu todo o comitê.'
          }
        ],
        feedbackNarrative: 'Seguimos o plano original cegamente, ignorando a realidade legal externa.',
        pmbokConcept: 'Apego Dogmático ao Plano e Cegueira Regulamentar',
        learnings: ['Seguir um plano que se tornou inválido por mudanças externas é a antítese do bom gerenciamento de projetos.'],
        goodBad: 'bad',
        risksEvaded: ['Alteração do plano original'],
        otherConsequences: ['Suspensão institucional pelo MEC e processos']
      },
      {
        key: 'c',
        text: 'Contratar um software proprietário fechado de diploma digital pagando R$ 300.000 sem consultar a arquitetura de segurança.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O software comprado não integrava com nossa base de dados e exigia que estagiários redigitassem 40 campos por diploma manualmente.',
        pmbokConcept: 'Compra Emergencial Desintegrada',
        learnings: ['Compras desesperadas de prateleira sem estudo de integração geram custos astronômicos e ineficiência operacional.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de desenvolvimento interno'],
        otherConsequences: ['Gasto desnecessário e trabalho manual de redigitação']
      }
    ]
  },
  {
    id: 'change_4_auditoria_seguranca_lgpd',
    title: 'Auditoria de Dados Pessoais e Adequação à LGPD',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['lgpd', 'seguranca', 'governanca', 'mudancas'],
    learningObjective: 'Incorporar requisitos não funcionais de conformidade de dados sem travar a evolução do produto.',
    communicationType: 'ticket',
    senderRole: 'Encarregado de Dados (DPO)',
    description: 'Ticket #1204 - Adequação à LGPD. O Encarregado de Dados (DPO) da UFC identificou que relatórios abertos do SIGAA estão exibindo CPF, telefone pessoal e endereço de estudantes sem consentimento nem mascaramento.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Geraldo Auditor',
    senderInitials: 'GA',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Implementar mascaramento automático de dados (Data Masking) nas APIs e registrar termos de consentimento no fluxo de primeiro login.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'Os dados foram protegidos na camada de API. O DPO emitiu parecer favorável de 100% de conformidade com a LGPD e o sistema ganhou maturidade em governança.',
        pmbokConcept: 'Privacidade por Padrão (Privacy by Design) e Conformidade',
        learnings: ['Integrar privacidade e segurança na arquitetura inicial previne vazamentos graves e multas regulatórias.'],
        goodBad: 'good',
        risksEvaded: ['Multas da ANPD e vazamento de dados de estudantes'],
        otherConsequences: ['Arquitetura de dados segura e blindada']
      },
      {
        key: 'b',
        text: 'Não fazer nada alegando que "dados de universidade pública são públicos por definição".',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -25 },
        feedbackNarrative: 'Dados de alunas foram raspados por bots e utilizados em golpes financeiros. A universidade foi multada pela ANPD em R$ 500.000.',
        pmbokConcept: 'Negligência Regulatória e Dano Social',
        learnings: ['Confundir transparência pública com exposição indevida de dados pessoais viola a lei e prejudica os usuários.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de codificação de máscaras de dados'],
        otherConsequences: ['Multa pesada e processos indenizatórios']
      },
      {
        key: 'c',
        text: 'Apagar todos os telefones e endereços da base de dados para não ter o que mascarar.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -30, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A universidade perdeu o contato com todos os alunos. Não foi possível avisar ninguém sobre cancelamento de aulas ou editais de assistência estudantil.',
        pmbokConcept: 'Destruição de Dados em Resposta ao Risco',
        learnings: ['Destruir utilidade do negócio por preguiça de implementar controles técnicos de segurança é inaceitável.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de desenvolvimento'],
        otherConsequences: ['Incomunicabilidade total com o corpo discente']
      }
    ]
  },
  {
    id: 'change_5_demanda_urgente_prograd',
    title: 'Demanda "Prioridade Zero" da Pró-Reitoria',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['scope_creep', 'priorizacao', 'mudancas', 'governanca'],
    learningObjective: 'Filtrar demandas intempestivas através de comitês estruturados de priorização.',
    communicationType: 'email',
    senderRole: 'Pró-Reitoria de Graduação',
    description: 'Assunto: URGENTE - Módulo de Avaliação Docente. A pró-reitoria exige a inclusão imediata de um formulário de 50 perguntas para avaliação de professores na sprint em andamento, sem abrir mão de nenhuma outra entrega já planejada.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Pró-Reitor de Graduação',
    senderInitials: 'PR',
    avatarImage: '/Personagens/Rainara.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Apresentar a capacidade finita do time e negociar: para incluir o formulário agora, qual das funcionalidades atuais a pró-reitoria aceita adiar para a próxima sprint?',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 20, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Ao visualizar as opções na balança, a pró-reitoria percebeu que a matrícula era mais urgente e aceitou agendar o formulário de avaliação para o mês seguinte.',
        pmbokConcept: 'Triângulo de Ferro e Negociação de Escopo Baseada em Capacidade',
        learnings: ['Líderes não dizem apenas "não"; eles mostram os trade-offs concretos e colocam a responsabilidade de escolha nas mãos do cliente.'],
        goodBad: 'good',
        risksEvaded: ['Sobrecarga desumana e entregas incompletas'],
        otherConsequences: ['Respeito institucional pela gestão profissional do projeto']
      },
      {
        key: 'b',
        text: 'Aceitar tudo sem negociar e forçar a equipe a programar as duas coisas em paralelo na mesma semana.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -25, saudeEquipe: -30, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Nenhuma das duas coisas ficou pronta. O formulário travava e a matrícula abriu com bugs graves. O time ficou exausto e decepcionado.',
        pmbokConcept: 'Armadilha do "Dizer Sim para Tudo"',
        learnings: ['Aceitar demandas sem capacidade correspondente resulta invariavelmente em falha em todos os compromissos.'],
        goodBad: 'bad',
        risksEvaded: ['Conversa difícil de negociação'],
        otherConsequences: ['Fracasso duplo nas entregas e exaustão']
      },
      {
        key: 'c',
        text: 'Rejeitar o pedido de forma grosseira dizendo que a pró-reitoria "não entende nada de desenvolvimento de software".',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O pró-reitor se sentiu ofendido e retirou os recursos financeiros de apoio ao projeto.',
        pmbokConcept: 'Falta de Inteligência Emocional e Perda de Patrocínio',
        learnings: ['Defender o escopo exige diplomacia e dados concretos, nunca arrogância verbal.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho adicional'],
        otherConsequences: ['Corte de verbas e crise política']
      }
    ]
  },
  {
    id: 'change_6_demo_conselho_universitario',
    title: 'Apresentação Antecipada para o Conselho',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['stakeholders', 'demo', 'mudancas', 'alinhamento'],
    learningObjective: 'Apresentar incrementos reais de produto sem criar expectativas ilusórias com mocks descartáveis.',
    communicationType: 'email',
    senderRole: 'Secretaria dos Órgãos Colegiados',
    description: 'Assunto: Reunião do Conselho Universitário. O Conselho Universitário convocou o comitê para demonstrar o novo SGA na sexta-feira. A diretoria quer que o time crie um protótipo visual falso com dados simulados para parecer que o sistema já está 100% pronto.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Lívia Gestora',
    senderInitials: 'LG',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Apresentar apenas o que já está 100% funcionando e testado em ambiente de staging, demonstrando o roadmap real das próximas entregas.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 20, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'O Conselho Universitário aplaudiu a seriedade e a honestidade técnica. O projeto ganhou credibilidade sólida por não vender ilusões.',
        pmbokConcept: 'Transparência e Entrega Baseada em Incrementos Reais',
        learnings: ['Demonstrar software real em funcionamento constrói confiança autêntica com patrocinadores de alto escalão.'],
        goodBad: 'good',
        risksEvaded: ['Criar expectativas falsas de lançamento imediato'],
        otherConsequences: ['Credibilidade consolidada junto ao Conselho']
      },
      {
        key: 'b',
        text: 'Gastar toda a semana criando um protótipo visual estático falso com telas de mentira que não se conectam a nenhum banco.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O Conselho achou que o sistema estava pronto e marcou o lançamento para a semana seguinte. Quando descobriram que era maquete, a crise foi inevitável.',
        pmbokConcept: 'Engodo com Mocks e Desperdício de Esforço',
        learnings: ['Criar interfaces falsas apenas para impressionar stakeholders gera expectativas perigosas e atrasa o desenvolvimento real.'],
        goodBad: 'bad',
        risksEvaded: ['Mostrar que o projeto ainda está em andamento'],
        otherConsequences: ['Expectativa irreal e frustração generalizada']
      },
      {
        key: 'c',
        text: 'Recusar-se a comparecer à reunião do Conselho Universitário.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -10, saudeEquipe: -25, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A ausência foi interpretada como descaso e desorganização. O conselho abriu processo de fiscalização sobre os gastos da equipe.',
        pmbokConcept: 'Falta de Engajamento de Stakeholders Chave',
        learnings: ['Prestar contas e manter os patrocinadores informados é dever primário do gerenciamento de projetos.'],
        goodBad: 'bad',
        risksEvaded: ['Nervosismo da apresentação'],
        otherConsequences: ['Auditoria especial e perda de apoio político']
      }
    ]
  },
  {
    id: 'change_7_mudanca_api_governo',
    title: 'Governo Federal Muda API de Bolsas e CPFs',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['integracao', 'governo', 'mudancas', 'adaptabilidade'],
    learningObjective: 'Gerenciar dependências e mudanças contratuais de APIs externas com resiliência arquitetural.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1230 - Mudança de Contrato API Gov.br. O Ministério da Educação alterou de surpresa o endpoint de validação de CPFs e contas bancárias de bolsistas, dando prazo de 7 dias antes de desativar a API antiga.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Implementar um Adapter Pattern que isola a camada de integração governamental, atualizando o conector em 48 horas com testes de contrato.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'Graças ao isolamento arquitetural (Clean Architecture), apenas o conector precisou ser atualizado. Nenhuma outra tela do sistema foi impactada e as bolsas foram pagas em dia.',
        pmbokConcept: 'Isolamento de Dependências Externas e Arquitetura Adaptativa',
        learnings: ['Dependências externas mudam sem aviso; encapsular integrações em adaptadores isolados protege o núcleo do sistema.'],
        goodBad: 'good',
        risksEvaded: ['Paralisação no pagamento de bolsas a milhares de estudantes'],
        otherConsequences: ['Arquitetura robusta contra futuras alterações externas']
      },
      {
        key: 'b',
        text: 'Ignorar a notificação do governo e esperar a API antiga parar de funcionar para ver o que acontece.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: { capacidadeEntrega: -30, qualidadeProduto: -25, saudeEquipe: -25, conhecimentoOrganizacional: 0 },
            narrative: 'A API do governo saiu do ar e todas as transações de pagamento de bolsas da UFC falharam. Os bolsistas ficaram sem receber por 20 dias.'
          }
        ],
        feedbackNarrative: 'A inércia resultou em caos financeiro para estudantes de baixa renda.',
        pmbokConcept: 'Inação Diante de Riscos Conhecidos',
        learnings: ['Ignorar alertas claros de mudanças externas transforma riscos previstos em crises graves.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho na sprint atual'],
        otherConsequences: ['Bolsas atrasadas e protestos no campus']
      },
      {
        key: 'c',
        text: 'Desistir da integração automática e contratar 10 estagiários para digitarem os CPFs no portal do governo manualmente.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -20, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A digitação manual gerou dezenas de CPFs com números trocados e pagamentos para pessoas erradas.',
        pmbokConcept: 'Substituição de Soluções de Engenharia por Trabalho Braçal',
        learnings: ['Processos manuais em grande volume geram erros humanos inaceitáveis em fluxos financeiros.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de desenvolvimento do adaptador'],
        otherConsequences: ['Pagamentos indevidos e prejuízo financeiro']
      }
    ]
  },
  {
    id: 'change_8_feedback_piloto_estudantes',
    title: 'Resultado Negativo no Piloto com Estudantes',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['piloto', 'feedback', 'mudancas', 'usabilidade'],
    learningObjective: 'Abraçar o feedback de testes piloto com humildade e adaptar o produto antes do lançamento geral.',
    communicationType: 'slack',
    senderRole: 'Líder de UX',
    description: 'O teste piloto do novo fluxo de matrícula com 300 estudantes revelou que 75% dos alunos acharam a tela de seleção de turmas confusa e não conseguiram visualizar se havia choque de horários.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Marina Design',
    senderInitials: 'MD',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Conduzir um design sprint rápido de 3 dias para incluir grade visual com detecção automática de conflito de horários.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A nova grade visual foi aclamada em um segundo teste com 98% de aprovação. O piloto cumpriu seu papel perfeito de evitar o desastre antes da escala geral.',
        pmbokConcept: 'Ciclos Rápidos de Feedback e Validação Contínua (Build-Measure-Learn)',
        learnings: ['Testes piloto servem para identificar falhas com segurança; adaptar o escopo com base em dados de uso salva o lançamento do produto.'],
        goodBad: 'good',
        risksEvaded: ['Lançamento de um sistema confuso para 40.000 alunos'],
        otherConsequences: ['Interface amigável e elogiada por toda a universidade']
      },
      {
        key: 'b',
        text: 'Ignorar as reclamações dos 300 alunos do piloto e lançar o sistema exatamente como está para toda a universidade.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -35, saudeEquipe: -30, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'No dia da matrícula geral com 40.000 alunos, milhares matricularam-se em disciplinas no mesmo horário. O sistema teve que ser cancelado no meio do dia.',
        pmbokConcept: 'Arrogância e Desprezo pelo Feedback de Usuários',
        learnings: ['Desconsiderar evidências negativas de testes piloto é garantia de falha catastrófica em ambiente de produção.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de redesign da tela'],
        otherConsequences: ['Cancelamento das matrículas e humilhação institucional']
      },
      {
        key: 'c',
        text: 'Culpar os estudantes e publicar um manual de 60 páginas obrigando os alunos a calcularem os horários em papel antes de abrir o site.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Ninguém leu o manual. Os alunos criaram memes ridicularizando a equipe de desenvolvimento nas redes sociais.',
        pmbokConcept: 'Transferência de Incompetência para o Usuário',
        learnings: ['Sistemas de qualidade adaptam-se aos modelos mentais humanos, em vez de exigir que humanos ajam como computadores.'],
        goodBad: 'bad',
        risksEvaded: ['Reescrever o código'],
        otherConsequences: ['Crise de imagem e chacota nas redes sociais']
      }
    ]
  },
  {
    id: 'change_9_integracao_restaurante_universitario',
    title: 'Integração com Catracas do Restaurante Universitário',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['scope_creep', 'governanca', 'mudancas', 'negociacao'],
    learningObjective: 'Avaliar pedidos de integração não previstos sem comprometer as metas centrais do projeto.',
    communicationType: 'email',
    senderRole: 'Pró-Reitoria de Assistência Estudantil',
    description: 'Assunto: Integração do Cartão do RU. A Pró-Reitoria de Assistência Estudantil solicitou que o novo portal acadêmico passe a controlar o saldo e o acesso às catracas do Restaurante Universitário (RU) já na próxima semana.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Lívia Gestora',
    senderInitials: 'LG',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Explicar a separação de escopo, documentar os endpoints de API necessários e agendar a integração do RU para o próximo ciclo de releases.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A pró-reitoria compreendeu a importância de garantir a estabilidade das matrículas primeiro. A integração do RU foi planejada com calma e funcionou perfeitamente.',
        pmbokConcept: 'Gerenciamento de Escopo e Arquitetura de Integração em Fases',
        learnings: ['Integrar novos domínios corporativos requer planejamento de segurança e contratos de dados claros, não improviso de última hora.'],
        goodBad: 'good',
        risksEvaded: ['Falha nas catracas do RU e atraso no módulo acadêmico'],
        otherConsequences: ['Integração segura e escalável no momento adequado']
      },
      {
        key: 'b',
        text: 'Fazer uma gambiarra em 2 dias conectando o banco de dados do SIGAA diretamente às catracas físicas do RU.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O tráfego de milhares de alunos passando na catraca na hora do almoço travou o banco de dados acadêmico inteiro no meio de uma prova online.',
        pmbokConcept: 'Acoplamento Indevido de Sistemas Críticos',
        learnings: ['Misturar sistemas transacionais de alta frequência (catracas) com sistemas de gestão sem camadas de isolamento gera indisponibilidade sistêmica.'],
        goodBad: 'bad',
        risksEvaded: ['Atraso no pedido da assistência estudantil'],
        otherConsequences: ['Queda do sistema acadêmico durante as aulas']
      },
      {
        key: 'c',
        text: 'Recusar a demanda de forma definitiva, dizendo que "o SIGAA nunca terá nada a ver com comida ou restaurante".',
        impacts: { capacidadeEntrega: -5, qualidadeProduto: 0, saudeEquipe: -10, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A postura intransigente fechou as portas para a digitalização dos serviços estudantis e gerou atrito com a pró-reitoria.',
        pmbokConcept: 'Visão Estreita de Negócio e Isolamento Institucional',
        learnings: ['Gerentes de projetos devem manter visão holística de futuro, planejando integrações que agreguem valor à comunidade.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de integração'],
        otherConsequences: ['Isolamento institucional do portal acadêmico']
      }
    ]
  },
  {
    id: 'change_10_novo_manual_marca_ufc',
    title: 'Novo Manual de Identidade Visual da Universidade',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['design_system', 'marca', 'mudancas', 'tailoring'],
    learningObjective: 'Adaptar mudanças estéticas com uso de Design Tokens sem gerar retrabalho manual em todo o código.',
    communicationType: 'email',
    senderRole: 'Coordenadoria de Comunicação (UFC)',
    description: 'Assunto: Nova Identidade Visual Oficial. A reitoria aprovou um novo manual de marca com paleta de cores e tipografia atualizadas, exigindo que todas as telas do novo sistema acadêmico utilizem a nova identidade visual.',
    domainTag: 'Aceite a mudança para alcançar o futuro estado previsto',
    senderName: 'Rainara Negócios',
    senderInitials: 'RN',
    avatarImage: '/Personagens/Rainara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Atualizar as variáveis de cores e fontes centralizadas no Design System / Tailwind CSS, propagando a nova marca instantaneamente em todo o sistema.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'Por termos usado uma arquitetura limpa com Design Tokens, a mudança de marca de 80 telas foi concluída em apenas 20 minutos. A Reitoria ficou maravilhada.',
        pmbokConcept: 'Excelência Arquitetural e Baixo Custo de Mudança',
        learnings: ['Arquiteturas desacopladas e uso de Design Tokens reduzem drasticamente o custo de adaptação a mudanças visuais e de marca.'],
        goodBad: 'good',
        risksEvaded: ['Semanas de retrabalho manual tela por tela'],
        otherConsequences: ['Demonstração de maturidade técnica para a universidade']
      },
      {
        key: 'b',
        text: 'Obrigar os desenvolvedores a abrirem cada um dos 300 arquivos de código para trocar os códigos hexadecimais de cor manualmente um por um.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -15, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O trabalho manual levou 2 semanas inteiras, gerou dezenas de cores divergentes e parou as entregas de funcionalidades críticas.',
        pmbokConcept: 'Retrabalho por Falta de Abstração',
        learnings: ['Hardcoding de estilos e propriedades visuais torna qualquer mudança simples em um pesadelo de manutenção.'],
        goodBad: 'bad',
        risksEvaded: ['Configurar Design Tokens'],
        otherConsequences: ['Atraso no cronograma e inconsistência visual']
      },
      {
        key: 'c',
        text: 'Ignorar o manual de marca oficial e dizer à Reitoria que o sistema continuará usando as cores antigas.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A Comunicação da UFC vetou o lançamento do portal por violação das normas institucionais de publicidade oficial.',
        pmbokConcept: 'Violação de Diretrizes Institucionais',
        learnings: ['Projetos institucionais devem zelar pela conformidade com a identidade corporativa do patrocinador.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de atualização'],
        otherConsequences: ['Veto institucional ao lançamento do sistema']
      }
    ]
  }
];
