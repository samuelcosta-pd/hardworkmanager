import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8): Liderar a Equipe
 * Foco Pedagógico: Clima seguro, inteligência emocional, Tuckman, prevenção de burnout,
 * liderança servidora vs. centralizada, resolução construtiva de conflitos e avaliação de desempenho.
 * Total: 10 Dilemas reequilibrados segundo o modelo PMBOK 8.
 */
export const leadershipEvents: GameEvent[] = [
  {
    id: "leadership_1_escudo_suporte",
    title: "O Escudo de Desvios (Capacidade da Equipe em Risco)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["capacidade", "suporte", "aquisicao_recursos", "blindagem"],
    learningObjective: "Proteger a capacidade da equipe ao negociar recursos alternativos para suporte operacional sem fragmentar o desenvolvimento.",
    communicationType: "email",
    senderRole: "Pró-Reitoria de Graduação",
    description: "Assunto: Chamados Críticos de Matrícula. A PROGRAD solicita que a equipe do SIGAA interrompa os sprints para atender chamados telefônicos de alunos com dúvidas de login e senhas durante o pico acadêmico.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Pró-Reitor Adjunto",
    senderInitials: "PR",
    avatarImage: "/Personagens/Geraldo.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Negociar a alocação de recursos alternativos da central de atendimento e blindar a equipe de engenharia.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 10,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A negociação exigiu esforço gerencial imediato, mas preservou o foco cognitivo dos desenvolvedores e manteve a moral elevada.",
        pmbokConcept: "Recursos alternativos com riscos reconhecidos",
        learnings: [
          "O PMBOK 8 recomenda buscar recursos alternativos para demandas operacionais emergenciais, protegendo a equipe central de desvios.",
          "Essa decisão atende ao resultado esperado de manter a equipe focada na entrega de valor sem comprometer o cronograma básico."
        ],
        goodBad: "good",
        risksEvaded: [
          "Fragmentação cognitiva e burnout dos engenheiros de software"
        ],
        otherConsequences: [
          "Consolidação de processo formal de suporte técnico na universidade"
        ]
      },
      {
        key: "b",
        text: "Autorizar atendimento telefônico direto pelos desenvolvedores durante as pausas de compilação de código.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -10,
          conhecimentoOrganizacional: 0
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -10,
              qualidadeProduto: -10
            },
            narrative: "A alternância contínua de contexto gerou defeitos críticos de autenticação que exigiram reestruturação técnica emergencial e não planejada."
          }
        ],
        feedbackNarrative: "A resposta imediata aos alunos pareceu rápida, mas a perda de foco técnico introduziu defeitos severos no módulo de matrícula.",
        pmbokConcept: "Bem-estar e prevenção de burnout",
        learnings: [
          "O PMBOK 8 enfatiza que a sobrecarga e a troca de contexto frequente degradam o bem-estar e elevam drasticamente a taxa de retrabalho.",
          "Essa escolha gera alívio cosmético de curto prazo, mas viola o objetivo de manter a sustentabilidade da capacidade produtiva."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atrito burocrático inicial com a pró-reitoria"
        ],
        otherConsequences: [
          "Queda de produtividade e desgaste emocional entre os engenheiros"
        ]
      },
      {
        key: "c",
        text: "Centralizar todos os atendimentos telefônicos no próprio Gerente de Projetos para poupar a equipe técnica.",
        impacts: {
          capacidadeEntrega: -10,
          qualidadeProduto: 5,
          saudeEquipe: 5,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A liderança heroica protegeu o time temporariamente, mas gerou gargalo decisório e paralisou o alinhamento com os patrocinadores.",
        pmbokConcept: "Liderança distribuída e centralizada",
        learnings: [
          "O PMBOK 8 adverte contra a centralização heroica de tarefas operacionais no líder, o que compromete suas atribuições estratégicas.",
          "Essa medida deixa o projeto sem governança gerencial durante a fase crítica de implantação dos serviços acadêmicos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Interrupções diretas aos desenvolvedores"
        ],
        otherConsequences: [
          "Sobrecarga do gerente e perda de visibilidade das entregas"
        ]
      }
    ]
  },
  {
    id: "leadership_2_sobrecarga_burnout",
    title: "Sinais de Fadiga (Monitoramento do Clima e Bem-Estar)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["burnout", "saude", "sustentabilidade", "ritmo_sustentavel"],
    learningObjective: "Identificar sinais precoces de desengajamento silencioso e intervir mediante gestão de ritmo de trabalho sustentável.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #lideranca: 'Dois desenvolvedores seniores estão em silêncio nas reuniões, enviando tarefas de madrugada e aparentando exaustão antes do lançamento do portal docente.'",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Replanejar a cadência do ciclo de trabalho, redistribuir tarefas críticas e pactuar pausas de recuperação com a equipe.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 10,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A desaceleração pontual recuperou a clareza mental do time e evitou pedidos de demissão em momento decisivo.",
        pmbokConcept: "Bem-estar e prevenção de burnout",
        learnings: [
          "O PMBOK 8 destaca a prevenção de burnout e a manutenção de ritmo sustentável como responsabilidade central na liderança de pessoas.",
          "O ajuste proativo preserva o capital intelectual e assegura estabilidade operacional nas etapas subsequentes da modernização."
        ],
        goodBad: "good",
        risksEvaded: [
          "Evasão de talentos seniores e colapso operacional da arquitetura"
        ],
        otherConsequences: [
          "Fortalecimento da confiança psicológica entre liderança e liderados"
        ]
      },
      {
        key: "b",
        text: "Oferecer bonificação financeira informal por horas extras para motivar o encerramento rápido do módulo.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              saudeEquipe: -10
            },
            narrative: "O cansaço acumulado culminou em licença médica simultânea dos dois engenheiros centrais do portal."
          }
        ],
        feedbackNarrative: "O incentivo financeiro mascarou o esgotamento por poucos dias, acelerando o colapso físico dos profissionais.",
        pmbokConcept: "Desengajamento silencioso (quiet quitting)",
        learnings: [
          "O PMBOK 8 alerta que recompensas monetárias não substituem a recuperação fisiológica e intensificam o desengajamento silencioso.",
          "A medida viola o princípio de sustentabilidade humana, convertendo sobrecarga pontual em afastamento médico imprevisto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Negociação de prazo com o comitê acadêmico"
        ],
        otherConsequences: [
          "Perda de engajamento intrínseco e deterioração do clima interno"
        ]
      },
      {
        key: "c",
        text: "Instituir cobrança diária minuciosa de entregas para impedir que o desânimo contagie os demais membros.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A fiscalização coercitiva agravou o estresse e fez os profissionais reduzirem qualquer iniciativa voluntária de inovação.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 demonstra que a liderança por coação destrói a segurança psicológica e bloqueia a transparência sobre impedimentos reais.",
          "Essa postura compromete a coesão do grupo e desestimula a comunicação de riscos pelos membros da equipe."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Sensação aparente de perda de controle hierárquico"
        ],
        otherConsequences: [
          "Instauração de clima de vigilância e desconfiança mútua"
        ]
      }
    ]
  },
  {
    id: "leadership_3_saida_arquiteto_senior",
    title: "A Transição do Arquiteto (Gestão de Lacunas de Conhecimento)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["conhecimento", "mentoria", "transicao", "papeis_responsabilidades"],
    learningObjective: "Aplicar práticas de mentoria cruzada e documentação pareada para mitigar lacunas de conhecimento decorrentes de rotatividade.",
    communicationType: "email",
    senderRole: "Tech Lead",
    description: "Assunto: Aviso Prévio. O arquiteto de dados principal aceitou proposta da iniciativa privada e deixará a equipe da universidade em três semanas, em pleno redesenho do banco acadêmico.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Pactuar dedicação exclusiva do arquiteto a trabalho conjunto em duplas e mentoria intensiva com dois desenvolvedores plenos.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 10,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A codificação direta desacelerou temporariamente, mas o conhecimento crítico foi assimilado pelos profissionais remanescentes.",
        pmbokConcept: "Treinamento, mentoria e coaching",
        learnings: [
          "O PMBOK 8 estabelece a mentoria e o coaching estruturados como técnicas prioritárias para reter competências institucionais.",
          "A decisão assegura que a capacidade técnica seja sustentada pela equipe após a saída do profissional especializado."
        ],
        goodBad: "good",
        risksEvaded: [
          "Dependência exclusiva de indivíduo e paralisia futura do repositório corporativo de dados"
        ],
        otherConsequences: [
          "Elevação da autonomia técnica dos desenvolvedores plenos"
        ]
      },
      {
        key: "b",
        text: "Exigir que o profissional desenvolva o máximo de código possível até o último dia, postergando documentação.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -5,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "Nenhum membro compreendeu as regras de migração deixadas pelo arquiteto, gerando travamento geral no repositório de dados institucional."
          }
        ],
        feedbackNarrative: "Houve avanço imediato de linhas de código, mas ninguém domina as premissas arquiteturais adotadas.",
        pmbokConcept: "Papéis, responsabilidades e lacunas de conhecimento",
        learnings: [
          "O PMBOK 8 adverte que priorizar volume de tarefas em detrimento da transferência de saber cria silos intransponíveis.",
          "A estratégia expõe o projeto a severa vulnerabilidade operacional ao perder o entendimento sobre a arquitetura implantada."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Redução pontual na velocidade de entrega dos sprints"
        ],
        otherConsequences: [
          "Dívida arquitetural profunda e retrabalho de decodificação"
        ]
      },
      {
        key: "c",
        text: "Contratar consultoria especializada de mercado para assumir diretamente a arquitetura a partir da saída.",
        impacts: {
          capacidadeEntrega: -10,
          qualidadeProduto: -5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A consultoria demorou semanas para obter acessos de segurança da universidade e não transferiu conhecimento ao time público.",
        pmbokConcept: "Recursos internos e externos",
        learnings: [
          "O PMBOK 8 salienta que a contratação externa sem alinhamento interno retarda a assimilação dos processos e desmotiva o time.",
          "Essa conduta descumpre a diretriz de valorizar e amadurecer as competências orgânicas da equipe do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço inicial de mentoria interna"
        ],
        otherConsequences: [
          "Custo orçamentário elevado e alienação técnica dos funcionários públicos efetivos"
        ]
      }
    ]
  },
  {
    id: "leadership_4_conflito_dev_ux",
    title: "A Tensão entre Telas e Prazos (Resolução Construtiva de Conflitos)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["conflitos", "ux", "desenvolvimento", "colaboracao", "tuckman"],
    learningObjective: "Aplicar a técnica dos Seis Chapéus do Pensamento e mediação focada em problemas para solucionar atritos entre a equipe de telas e a de regras do sistema.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #geral: 'Os desenvolvedores dizem que nossos fluxos de acessibilidade são luxo dispensável; já o time de telas afirma que as regras de negócio ignoram os padrões de usabilidade do MEC.'",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Carla Silveira",
    senderInitials: "CS",
    avatarImage: "/Personagens/Carla.png",
    responsibleRole: "uxLead",
    alternatives: [
      {
        key: "a",
        text: "Conduzir dinâmica com os Seis Chapéus do Pensamento para unificar critérios de usabilidade e restrições técnicas.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A técnica estruturada removeu acusações pessoais, permitindo equilibrar a conformidade de acessibilidade com os limites técnicos do sistema.",
        pmbokConcept: "Seis Chapéus do Pensamento",
        learnings: [
          "O PMBOK 8 recomenda ferramentas deliberadas de pensamento coletivo como os Seis Chapéus para superar impasses interdisciplinares.",
          "O resultado fortalece a propriedade compartilhada e harmoniza usabilidade e viabilidade computacional."
        ],
        goodBad: "good",
        risksEvaded: [
          "Polarização destrutiva e sabotagem cruzada entre disciplinas"
        ],
        otherConsequences: [
          "Elaboração de biblioteca compartilhada de componentes acessíveis"
        ]
      },
      {
        key: "b",
        text: "Impor decisão gerencial imediata priorizando regras centrais e relegando testes de acessibilidade para fase posterior.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              saudeEquipe: -10
            },
            narrative: "Notificação do Ministério Público por falta de acessibilidade para deficientes visuais paralisou a homologação do sistema."
          }
        ],
        feedbackNarrative: "O ganho aparente no cronograma resultou em produto excludente e desmotivação profunda na equipe de experiência do usuário.",
        pmbokConcept: "Resolução de problemas e conflitos",
        learnings: [
          "O PMBOK 8 alerta que suprimir pontos de vista por coerção não resolve a causa raiz e gera passivos legais e éticos.",
          "A medida viola os critérios de aceitação essenciais de usabilidade e destrói o alinhamento da equipe com os usuários finais."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Discussões e reuniões adicionais de consenso na semana"
        ],
        otherConsequences: [
          "Risco de sanções institucionais e perda de credibilidade do SIGAA"
        ]
      },
      {
        key: "c",
        text: "Delegar a resolução do impasse a um alinhamento direto autônomo entre as lideranças técnicas e de design.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "A abstenção gerencial transformou a divergência em disputa política, gerando animosidade e retrabalho de código.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 orienta o líder a atuar como facilitador ativo de um ambiente seguro quando atritos entre áreas ameaçam as entregas.",
          "A negligência em mediar conflitos de papéis perpetua insegurança e compromete a qualidade do produto universitário."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Desconforto gerencial imediato de assumir a mediação"
        ],
        otherConsequences: [
          "Fragmentação das equipes em silos corporativos hostis"
        ]
      }
    ]
  },
  {
    id: "leadership_5_microgerenciamento_diretoria",
    title: "O Cerco de Relatórios (Autonomia e Empoderamento da Equipe)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["empoderamento", "autonomia", "lideranca_servidora", "governanca"],
    learningObjective: "Defender a autonomia operacional da equipe estabelecendo acordos claros de trabalho no Team Charter e radiadores visuais de progresso.",
    communicationType: "email",
    senderRole: "Superintendência de TI",
    description: "Assunto: Planilhas Horárias Diárias. A diretoria exige que cada membro preencha formulários a cada duas horas detalhando o progresso individual de linhas de código e chamados resolvidos.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Prof. Alberto Silva",
    senderInitials: "AS",
    avatarImage: "/Personagens/Alberto.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Apresentar o Team Charter e fornecer radiadores de informação transparentes no painel de gestão à vista.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 10,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A governança foi atendida com visibilidade objetiva de métricas, protegendo a autonomia criativa e o foco do time.",
        pmbokConcept: "Team charter e operações da equipe",
        learnings: [
          "O PMBOK 8 recomenda o uso do Team Charter e radiadores visuais de informação para conciliar governança e autonomia operacional.",
          "Essa abordagem assegura transparência sem impor burocracia desnecessária que sufoca o engajamento dos especialistas."
        ],
        goodBad: "good",
        risksEvaded: [
          "Microgerenciamento sufocante e queda no moral produtivo da equipe"
        ],
        otherConsequences: [
          "Instituição de indicadores de fluxo ágil reconhecidos pela diretoria"
        ]
      },
      {
        key: "b",
        text: "Instituir o preenchimento diário dos formulários como protocolo obrigatório de acompanhamento de jornada.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: 5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -10,
              saudeEquipe: -10
            },
            narrative: "Os desenvolvedores passaram a inflar dados nas planilhas e reduziram drasticamente a velocidade de entrega técnica."
          }
        ],
        feedbackNarrative: "O time gastou horas diárias alimentando relatórios fúteis, instaurando uma cultura burocrática de conformismo.",
        pmbokConcept: "Empoderamento, delegação e autonomia",
        learnings: [
          "O PMBOK 8 preconiza o empoderamento e a delegação como motores da alta performance em ambientes de desenvolvimento cognitivo.",
          "O controle coercitivo de micro-tarefas drena energia produtiva e induz o comportamento de cumprimento meramente protocolar."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atrito diplomático com a superintendência da universidade"
        ],
        otherConsequences: [
          "Criação de métricas de vaidade sem correlação com software funcional"
        ]
      },
      {
        key: "c",
        text: "Assumir o envio de estimativas consolidadas pelo GP com base nas métricas históricas para dispensar os desenvolvedores.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A manipulação de dados foi descoberta em auditoria acadêmica, minando a credibilidade do gerenciamento do projeto.",
        pmbokConcept: "Integridade e transparência do gerente de projetos",
        learnings: [
          "O PMBOK 8 estabelece a integridade e transparência como premissas inegociáveis na conduta profissional do líder de projetos.",
          "A falsificação de indicadores fere a ética e desmorona os laços de confiança indispensáveis à sustentabilidade do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Sobrecarga imediata de preenchimento formal de formulários"
        ],
        otherConsequences: [
          "Abertura de apuração disciplinar e desconfiança da reitoria"
        ]
      }
    ]
  },
  {
    id: "leadership_6_post_mortem_sem_culpa",
    title: "A Falha no Lançamento Piloto (Cultura de Aprendizagem e Segurança)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["retrospectivas", "ambiente_seguro", "aprendizado", "qualidade"],
    learningObjective: "Conduzir retrospectivas focadas em causas sistêmicas e melhoria contínua, rejeitando a caça individual a culpados.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #incidentes: 'O primeiro teste de matrícula com 500 alunos derrubou o cluster de banco devido a um índice ausente em script enviado por um desenvolvedor júnior.'",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Conduzir retrospectiva sem culpados para aprimorar os testes automatizados e o checklist de homologação.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O incidente transformou-se em evolução dos rotinas automatizadas de verificação e aumentou a união e a segurança psicológica da equipe.",
        pmbokConcept: "Retrospectivas",
        learnings: [
          "O PMBOK 8 ressalta as retrospectivas como ferramenta de aprimoramento contínuo voltada a processos, não a punições individuais.",
          "O aprendizado com incidentes previne a repetição de falhas sistêmicas e eleva a maturidade técnica coletiva do grupo."
        ],
        goodBad: "good",
        risksEvaded: [
          "Cultura do medo, omissão de incidentes futuros e evasão de novatos"
        ],
        otherConsequences: [
          "Blindagem dos ambientes de liberação operacional contra falhas humanas"
        ]
      },
      {
        key: "b",
        text: "Atribuir a correção do script ao desenvolvedor que enviou a alteração com acompanhamento sênior individual.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -10,
              qualidadeProduto: -10
            },
            narrative: "Com medo de retaliação, desenvolvedores passaram a ocultar defeitos e atrasar entregas para evitar revisões públicas."
          }
        ],
        feedbackNarrative: "A exposição punitiva gerou ambiente tóxico; membros passaram a esconder falhas com receio de humilhação.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 frisa que a punição pública destrói a segurança psicológica e incentiva a dissimulação de riscos críticos.",
          "Essa postura fragiliza a qualidade ao criar incentivos perversos para a ocultação de vulnerabilidades no sistema."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Sensação de condescendência perante a diretoria"
        ],
        otherConsequences: [
          "Bloqueio da cooperação espontânea e evasão de profissionais juniores"
        ]
      },
      {
        key: "c",
        text: "Retirar o desenvolvedor júnior do projeto e solicitar outro profissional com experiência prévia ao setor de TI.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: 0,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "A substituição não resolveu as deficiências na esteira automatizada de verificação e liberação, transmitindo insegurança a toda a equipe.",
        pmbokConcept: "Maturidade dos membros da equipe",
        learnings: [
          "O PMBOK 8 indica que falhas operacionais decorrem comumente de processos frágeis de verificação e não de incompetência individual.",
          "Descartar membros sem diagnosticar causas do sistema desperdiça investimentos prévios de capacitação institucional."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de treinamento específico imediato"
        ],
        otherConsequences: [
          "Perda de continuidade e aumento do tempo de adaptação de pessoal"
        ]
      }
    ]
  },
  {
    id: "leadership_7_reconhecimento_time",
    title: "O Sucesso Silencioso (Reconhecimento e Motivação Sustentável)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ["reconhecimento", "recompensas", "motivacao", "lideranca_servidora"],
    learningObjective: "Aplicar práticas de reconhecimento autêntico alinhadas a entregas de valor sem gerar competitividade predatória interna.",
    communicationType: "email",
    senderRole: "Gerente de Projetos",
    description: "Assunto: Homologação do Módulo de Pós-Graduação. O módulo mais complexo foi entregue sem erros graves após esforço conjunto exemplar entre engenharia, design e analistas da STI.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Você (Gerente de Projetos)",
    senderInitials: "GP",
    avatarImage: "/Personagens/Narrador.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Promover celebração formal destacando contribuições de cada disciplina e emitir menções honrosas no comitê.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 10,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "O reconhecimento coletivo e transparente fortaleceu o sentimento de pertencimento e renovou a disposição do time.",
        pmbokConcept: "Reconhecimento e recompensas",
        learnings: [
          "O PMBOK 8 ressalta que o reconhecimento público genuíno ancora o engajamento e reforça comportamentos colaborativos de valor.",
          "A valorização multidisciplinar assegura sinergia sustentável para as fases vindouras de implantação do sistema acadêmico."
        ],
        goodBad: "good",
        risksEvaded: [
          "Sensação de invisibilidade do esforço técnico perante a cúpula da universidade"
        ],
        otherConsequences: [
          "Consolidação de reputação positiva do projeto perante os órgãos colegiados"
        ]
      },
      {
        key: "b",
        text: "Instituir o prêmio de 'Desenvolvedor do Mês' com destaque individual exclusivo para quem concluiu mais tarefas.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -10,
              saudeEquipe: -10
            },
            narrative: "A disputa individual incentivou entregas fragmentadas sem revisão, gerando atritos internos e quebra de testes."
          }
        ],
        feedbackNarrative: "A premiação individual estimulou competitividade tóxica; profissionais de UX e testes sentiram-se desvalorizados.",
        pmbokConcept: "Propriedade compartilhada do projeto",
        learnings: [
          "O PMBOK 8 alerta contra recompensas que estimulam individualismo em detrimento da propriedade compartilhada das entregas.",
          "Métricas individuais rasas provocam manipulação de indicadores e enfraquecem o espírito de cooperação essencial ao projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Custo de organização de evento coletivo de validação"
        ],
        otherConsequences: [
          "Rivalidade interna e isolamento entre as diferentes áreas técnicas"
        ]
      },
      {
        key: "c",
        text: "Agradecer por e-mail e priorizar a abertura imediata do próximo ciclo de entregas para adiantar o cronograma acadêmico.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 0,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "A falta de fechamento simbólico causou desânimo generalizado e a sensação de que o esforço nunca é notado.",
        pmbokConcept: "Atividades de gestão e de liderança",
        learnings: [
          "O PMBOK 8 distingue gestão mecânica de liderança inspiradora, apontando a celebração de marcos como dever da liderança.",
          "Omitir a etapa de reconhecimento drena a energia da equipe e acelera o desengajamento nas etapas de maior complexidade."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Pausa pontual nas atividades do cronograma"
        ],
        otherConsequences: [
          "Desgaste emocional e perda de comprometimento espontâneo"
        ]
      }
    ]
  },
  {
    id: "leadership_8_isolamento_silos",
    title: "A Barreira dos Silos (Colocação e Comunicação Integrada)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["colocacao", "equipes_virtuais", "comunicacao", "tuckman"],
    learningObjective: "Utilizar estratégias de colocação física ou salas virtuais compartilhadas para romper barreiras entre regras de dados, interfaces e experiência do usuário.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #engenharia: 'A equipe de gestão de dados trabalha no prédio central, o time de telas opera em outro campus e os estagiários ficam remotos, gerando interfaces desconectadas das regras do sistema.'",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Instituir dois dias semanais de colocação física conjunta no laboratório central e war room virtual permanente.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A proximidade física periódica combinada a canais virtuais fluidos alinhou a arquitetura e acelerou integrações complexas.",
        pmbokConcept: "Colocação",
        learnings: [
          "O PMBOK 8 recomenda a colocação física ou virtual deliberada para potencializar a comunicação oscilante e a coesão da equipe.",
          "A integração regular reduz o ciclo de feedback de interfaces e previne incompatibilidades entre dados e experiência do usuário."
        ],
        goodBad: "good",
        risksEvaded: [
          "Retrabalho massivo de integração na fase de homologação geral"
        ],
        otherConsequences: [
          "Criação de identidade compartilhada de time entre diferentes campi"
        ]
      },
      {
        key: "b",
        text: "Padronizar toda a comunicação entre campi exclusivamente via sistema formal de chamados e tickets.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "Chamados burocráticos demoravam dias para resposta, paralisando a montagem das telas integradas ao banco."
          }
        ],
        feedbackNarrative: "A comunicação assíncrona excessivamente formal gerou lentidão, ruído interpretativo e rancor entre as equipes.",
        pmbokConcept: "Equipes virtuais",
        learnings: [
          "O PMBOK 8 alerta que equipes virtuais demandam acordos ativos de colaboração, sob pena de fragmentação em feudos ineficientes.",
          "Burocratizar as interações rompe a agilidade necessária para ajustar requisitos de software em tempo oportuno."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Custos de deslocamento e adaptação física no laboratório"
        ],
        otherConsequences: [
          "Perda de flexibilidade e multiplicação de mal-entendidos técnicos"
        ]
      },
      {
        key: "c",
        text: "Determinar o retorno ao trabalho presencial diário no laboratório do campus para facilitar o contato direto.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: 5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: 0
        },
        feedbackNarrative: "O laboratório não possuía mesas suficientes para todos; a medida unilateral gerou revolta e queda de rendimento.",
        pmbokConcept: "Inteligência emocional",
        learnings: [
          "O PMBOK 8 preconiza o exercício da inteligência emocional ao impor mudanças drásticas nas condições de trabalho da equipe.",
          "Medidas arbitrárias sem o devido suporte de infraestrutura física desestruturam a confiança e elevam o absenteísmo."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de gestão híbrida de canais virtuais"
        ],
        otherConsequences: [
          "Resistência passiva e atritos sindicais com os funcionários da instituição"
        ]
      }
    ]
  },
  {
    id: "leadership_9_capacitacao_vs_pressao",
    title: "A Curva de Aprendizado (Capacitação vs. Prazo de Entrega)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["capacitacao", "treinamento", "competencias", "qualidade"],
    learningObjective: "Investir em treinamento e nivelamento técnico inicial para garantir velocidade sustentável e conformidade arquitetural.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Adoção de Nova Ferramenta Tecnológica. Três desenvolvedores nunca operaram a nova tecnologia adotada pela STI e estão cometendo erros estruturais graves de estado e concorrência.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Reservar dois dias do ciclo de trabalho para workshop técnico imersivo e pareamento estruturado com os desenvolvedores plenos.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O treinamento concentrado eliminou as falhas recorrentes de concorrência e nivelou o domínio tecnológico da equipe.",
        pmbokConcept: "Treinamento, mentoria e coaching",
        learnings: [
          "O PMBOK 8 estabelece que o investimento em treinamento e mentoria é essencial para suprir lacunas de conhecimento e elevar a qualidade.",
          "Essa intervenção assegura padronização técnica e reduz significativamente o retrabalho ao longo de todo o ciclo de vida."
        ],
        goodBad: "good",
        risksEvaded: [
          "Acúmulo de débito arquitetural e falhas de concorrência em produção"
        ],
        otherConsequences: [
          "Autonomia sustentável dos novos desenvolvedores no projeto"
        ]
      },
      {
        key: "b",
        text: "Recomendar que a equipe realize cursos online assíncronos em paralelo à execução das tarefas do ciclo de trabalho.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -10,
              qualidadeProduto: -15
            },
            narrative: "Código instável gerado sem fundamentação quebrou a sincronização em tempo real de matrículas."
          }
        ],
        feedbackNarrative: "A equipe produziu código inseguro e defeituoso sob estresse severo, resultando em retrabalho substancial.",
        pmbokConcept: "Bem-estar e prevenção de burnout",
        learnings: [
          "O PMBOK 8 adverte que transferir a capacitação crítica para as horas de descanso dos membros degrada o bem-estar e amplifica falhas.",
          "A negligência com a formação técnica adequada compromete a integridade do produto e inviabiliza metas de qualidade."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atraso pontual na entrega de entregas programadas da iteração corrente"
        ],
        otherConsequences: [
          "Desgaste físico dos desenvolvedores e vulnerabilidade no sistema"
        ]
      },
      {
        key: "c",
        text: "Reverter a arquitetura para o conjunto tradicional de ferramentas já dominada pela equipe da universidade.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "O sistema foi entregue na data, mas tornou-se obsoleto no ato do lançamento, sem suporte a microsserviços modernos.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 salienta que as decisões de recursos devem sustentar a visão estratégica de longo prazo do produto entregue.",
          "Regredir a padrões defasados sacrifica a longevidade do investimento público em troca de conforto gerencial efêmero."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de aprendizado e adaptação a novas linguagens"
        ],
        otherConsequences: [
          "Dificuldade extrema de manutenção e incompatibilidade tecnológica futura"
        ]
      }
    ]
  },
  {
    id: "leadership_10_protecao_estagiarios",
    title: "O Papel dos Bolsistas (Desenvolvimento de Competências e Ética)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["estagiarios", "etica", "mentoria", "responsabilidades"],
    learningObjective: "Estruturar a alocação de estagiários com foco pedagógico e supervisão sênior, evitando a delegação desregulada de responsabilidades centrais.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #gestao: 'Com a proximidade do prazo final, o departamento sugeriu delegar a entrega de todo o módulo de segurança de dados aos bolsistas da graduação, que ficariam sem supervisão direta.'",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Alocar os bolsistas em tarefas formativas pareadas com desenvolvedores plenos e manter a segurança com especialistas.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "Os estudantes aprenderam práticas sólidas com acompanhamento e os módulos críticos de segurança mantiveram conformidade ética.",
        pmbokConcept: "Papéis, responsabilidades e lacunas de conhecimento",
        learnings: [
          "O PMBOK 8 orienta que os papéis e níveis de responsabilidade devem ser compatíveis com as competências reais de cada recurso.",
          "A supervisão pedagógica cumpre a missão acadêmica de formação sem colocar em risco a governança do sistema universitário."
        ],
        goodBad: "good",
        risksEvaded: [
          "Vazamento de dados institucionais e violação de normativas da LGPD"
        ],
        otherConsequences: [
          "Formação de talentos qualificados aptos a assumir vagas futuras"
        ]
      },
      {
        key: "b",
        text: "Delegar a implementação do módulo de segurança aos bolsistas sob mentoria remota para acelerar a entrega.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              capacidadeEntrega: -10
            },
            narrative: "Brechas graves de autenticação criadas por falta de vivência técnica forçaram o bloqueio emergencial do sistema."
          }
        ],
        feedbackNarrative: "A sobrecarga irresponsável gerou ansiedade nos estudantes e abriu brechas gravíssimas de segurança na base de dados.",
        pmbokConcept: "Maturidade dos membros da equipe",
        learnings: [
          "O PMBOK 8 adverte que atribuir tarefas de alta criticidade a membros em estágio inicial de maturidade técnica desrespeita os limites da equipe.",
          "Essa escolha gera passivos de segurança irreparáveis e desvirtua o papel formador da universidade pública."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de remanejar o cronograma dos módulos de infraestrutura"
        ],
        otherConsequences: [
          "Exposição a sanções regulatórias da ANPD e danos à reputação institucional"
        ]
      },
      {
        key: "c",
        text: "Restringir a atuação dos bolsistas à confecção de manuais de usuário e apoio à documentação funcional.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 0,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "Os estudantes desmotivaram-se com as tarefas servis e procuraram projetos de iniciação científica concorrentes.",
        pmbokConcept: "Treinamento, mentoria e coaching",
        learnings: [
          "O PMBOK 8 preconiza o desenvolvimento progressivo de capacidades práticas através de mentoria orientada a desafios reais.",
          "Subutilizar o potencial dos colaboradores prejudica a retenção e empobrece a formação de competências no ecossistema do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço inicial de acompanhamento e revisão de código júnior"
        ],
        otherConsequences: [
          "Desperdício de recursos de bolsas e frustração acadêmica dos discentes"
        ]
      }
    ]
  }
];
