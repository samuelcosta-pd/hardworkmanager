import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8): Gestão Matricial, Negociação e Aquisição de Recursos
 * Foco Pedagógico: Negociação em ambiente matricial, competição entre projetos, recursos alternativos,
 * impacto nos demais planos, proteção da capacidade planejada e integridade da liderança.
 * Total: 10 Dilemas reequilibrados segundo o modelo PMBOK 8.
 */
export const changeManagementEvents: GameEvent[] = [
  {
    id: "change_1_ideia_reitor",
    title: "A Demanda da Reitoria (Proteção da Capacidade e Planejamento)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["recursos_humanos", "planejamento", "capacidade", "stakeholders"],
    learningObjective: "Negociar demandas externas não planejadas utilizando dados de capacidade real para proteger o plano de gerenciamento dos recursos.",
    communicationType: "slack",
    senderRole: "Gabinete da Reitoria",
    description: "Canal #institucional: O Gabinete solicita inclusão emergencial de assistente virtual com inteligência artificial para o lançamento, o que exigiria redirecionar toda a equipe técnica e paralisar as entregas do sistema de matrículas.",
    domainTag: "Recursos › Planejar o Gerenciamento dos Recursos",
    resourceType: "humano",
    resourceProcess: "planejar",
    senderName: "Gabinete da Reitoria",
    senderInitials: "GR",
    avatarImage: "/Personagens/Rainara.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Demonstrar a alocação atual da equipe e planejar a aquisição de recursos dedicados para a IA na Fase 2.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A demonstração transparente da capacidade convenceu o Reitor a aprovar recursos específicos para a IA no próximo semestre.",
        pmbokConcept: "Planejamento de recursos sob escassez e competição entre projetos",
        learnings: [
          "O PMBOK 8 estabelece que a capacidade planejada deve ser resguardada por negociação estruturada e visão de longo prazo.",
          "Essa decisão evita a sobrecarga destrutiva do time sem desconsiderar o valor estratégico da inovação solicitada."
        ],
        goodBad: "good",
        risksEvaded: [
          "Desvio generalizado de foco e atraso catastrófico no módulo de matrícula"
        ],
        otherConsequences: [
          "Reconhecimento institucional da maturidade de governança da equipe"
        ]
      },
      {
        key: "b",
        text: "Redirecionar o esforço da equipe técnica para entregar a funcionalidade de IA solicitada pelo Reitor.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -15
            },
            narrative: "A paralisação do módulo central de matrículas impediu o início do semestre acadêmico da universidade."
          }
        ],
        feedbackNarrative: "A tentativa de entregar um protótipo de IA às pressas resultou em código instável e no atraso do calendário acadêmico.",
        pmbokConcept: "Impacto da indisponibilidade de recursos nos demais planos",
        learnings: [
          "O PMBOK 8 alerta que desviar recursos sem plano integrado gera descompasso severo nos prazos e finanças do projeto.",
          "A complacência imediatista gera instabilidade técnica e compromete as entregas prioritárias da organização."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atrito político momentâneo com o gabinete da administração superior"
        ],
        otherConsequences: [
          "Colapso do cronograma de matrículas e revolta de alunos e docentes"
        ]
      },
      {
        key: "c",
        text: "Publicar memorando formal justificando a recusa do chatbot com base no congelamento estrito do termo de abertura.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A resposta agressiva causou crise diplomática interna e isolou o projeto perante os financiadores universitários.",
        pmbokConcept: "Negociação e influência para obter recursos",
        learnings: [
          "O PMBOK 8 enfatiza a habilidade de negociação e influência interpessoal como competência vital do gestor de recursos.",
          "Confrontos destrutivos bloqueiam parcerias futuras e fragilizam o apoio dos patrocinadores do sistema."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de redigir justificativa técnica formal detalhada"
        ],
        otherConsequences: [
          "Perda de patrocínio institucional e ameaça de cancelamento do projeto"
        ]
      }
    ]
  },
  {
    id: "change_2_negociacao_gerente_funcional",
    title: "A Disputa Matricial (Negociação com o Gerente de Recursos)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["matricial", "negociacao", "gerente_recursos", "alocacao"],
    learningObjective: "Negociar a cessão e dedicação de especialistas em estruturas organizacionais matriciais respeitando as atribuições funcionais.",
    communicationType: "email",
    senderRole: "Superintendência de TI",
    description: "Assunto: Remanejamento de Especialista. O chefe do setor de redes quer recolher o especialista em infraestrutura e automação dedicado ao SIGAA para atender suporte de impressoras e switches nos centros acadêmicos.",
    domainTag: "Recursos › Adquirir Recursos",
    resourceType: "humano",
    resourceProcess: "adquirir",
    senderName: "Prof. Alberto Silva",
    senderInitials: "AS",
    avatarImage: "/Personagens/Alberto.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Negociar acordo formal de dedicação compartilhada com calendário prévio e automatizar a infraestrutura de redes.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O pacto estruturado garantiu a presença do engenheiro nas entregas críticas e gerou scripts que aliviaram a operação da STI.",
        pmbokConcept: "Gerente de recursos e ambiente matricial",
        learnings: [
          "O PMBOK 8 orienta o gerente de projetos a pactuar acordos transparentes com os gerentes funcionais em estruturas matriciais.",
          "O alinhamento colaborativo previne a canibalização de especialistas e atende às necessidades dos dois departamentos."
        ],
        goodBad: "good",
        risksEvaded: [
          "Perda repentina do especialista em infraestrutura e travamento da esteira de disponibilização operacional"
        ],
        otherConsequences: [
          "Padronização de protocolo de cessão de mão de obra entre setores da universidade"
        ]
      },
      {
        key: "b",
        text: "Ceder o especialista integralmente de imediato para evitar desavenças políticas com a chefia da informática.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "Sem o especialista em infraestrutura, os ambientes de homologação travaram e ninguém na equipe conseguiu atualizar os serviços."
          }
        ],
        feedbackNarrative: "A renúncia desprotegeu o projeto; as liberações em produção pararam e a equipe gastou dias tentando configurar ambientes computacionais.",
        pmbokConcept: "Competição entre projetos pelos mesmos recursos",
        learnings: [
          "O PMBOK 8 salienta que abrir mão passivamente de competências vitais compromete os compromissos assumidos pelo projeto.",
          "A liderança deve sustentar as necessidades prioritárias pactuadas perante os detentores dos recursos funcionais."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Conflito burocrático inicial com o diretor de informática"
        ],
        otherConsequences: [
          "Desorganização da infraestrutura e sobrecarga nos desenvolvedores"
        ]
      },
      {
        key: "c",
        text: "Designar o novo bolsista de infraestrutura para assumir os scripts de configuração e liberação dos ambientes operacionais.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "Configurações incorretas de firewall expuseram bancos de dados internos a acessos externos não autenticados.",
        pmbokConcept: "Papéis, responsabilidades e lacunas de conhecimento",
        learnings: [
          "O PMBOK 8 alerta que substituir especialistas qualificados por recursos sem capacitação introduz riscos críticos de segurança.",
          "A lacuna de conhecimento técnico em tarefas de infraestrutura coloca em xeque a sustentabilidade do ecossistema."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Tempo despendido em reuniões de conciliação de agendas"
        ],
        otherConsequences: [
          "Incidente grave de segurança cibernética e investigação pericial"
        ]
      }
    ]
  },
  {
    id: "change_3_saida_dev_onboarding",
    title: "O Desfalque Inesperado (Pré-Designação e Integração de Novos Recursos)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["onboarding", "rotatividade", "aquisicao", "conhecimento"],
    learningObjective: "Estruturar o processo de integração e transferência de conhecimento ao incorporar recursos substitutos em meio à execução.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Substituição de Desenvolvedor. O analista responsável pelo módulo financeiro pediu exoneração do cargo público; o substituto concursado acabou de se apresentar na unidade.",
    domainTag: "Recursos › Adquirir Recursos",
    resourceType: "humano",
    resourceProcess: "adquirir",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Designar mentor técnico, fornecer trilha de onboarding documentada e programar tarefas em acompanhamento pareado.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O onboarding estruturado reduziu a curva de aprendizado e o novo analista tornou-se produtivo em poucas semanas.",
        pmbokConcept: "Treinamento, mentoria e coaching",
        learnings: [
          "O PMBOK 8 recomenda processos deliberados de mentoria e assimilação para integrar novos profissionais com agilidade.",
          "Investir na recepção técnica preserva a qualidade do código e transmite os valores e práticas operacionais da equipe."
        ],
        goodBad: "good",
        risksEvaded: [
          "Erros primários em regras de liquidação orçamentária e retrabalho de código"
        ],
        otherConsequences: [
          "Criação de kit institucional permanente de boas-vindas para a STI"
        ]
      },
      {
        key: "b",
        text: "Atribuir as histórias pendentes do módulo financeiro ao novo analista para manter o cronograma de entregas.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              saudeEquipe: -10
            },
            narrative: "Código instável subido pelo novato sem acompanhamento bloqueou a liquidação de bolsas estudantis."
          }
        ],
        feedbackNarrative: "O novato sentiu-se sobrecarregado, cometeu falhas contábeis graves e manifestou desejo de transferir-se de setor.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 aponta que exigir autonomia de novatos sem suporte psicológico ou técnico gera desmotivação e falhas recorrentes.",
          "A pressa em cobrar entregas desconectadas da curva de maturação compromete os resultados da organização."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Tempo dedicado por membros seniores ao acompanhamento inicial"
        ],
        otherConsequences: [
          "Insatisfação funcional e pedido de remoção do funcionário recém-chegado"
        ]
      },
      {
        key: "c",
        text: "Alocar o novo funcionário em período preparatório de leitura das normas e documentação antes de integrá-lo ao código.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: 0
        },
        feedbackNarrative: "O profissional desengajou-se pelo isolamento e a equipe continuou sofrendo com a sobrecarga da falta de braços.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 orienta o aproveitamento tempestivo da capacidade disponível para evitar inatividade desnecessária de recursos.",
          "Manter colaboradores produtivos afastados do trabalho real enfraquece o senso de pertencimento e atrasa as entregas."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de reorganizar as tarefas da ciclo de trabalho corrente"
        ],
        otherConsequences: [
          "Desperdício de capacidade produtiva paga pelo erário público"
        ]
      }
    ]
  },
  {
    id: "change_4_recurso_alternativo_risco",
    title: "O Atalho dos Bolsistas (Recursos Alternativos com Riscos Reconhecidos)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["recursos_alternativos", "riscos", "capacidade", "governanca"],
    learningObjective: "Mobilizar recursos alternativos identificando previamente suas limitações técnicas e registrando os riscos correspondentes.",
    communicationType: "slack",
    senderRole: "Gerente de Projetos",
    description: "Canal #planejamento: Diante do atraso na contratação de engenheiros, surge a oportunidade de convocar dez estudantes voluntários para atuar na codificação dos módulos de matrícula.",
    domainTag: "Recursos › Adquirir Recursos",
    resourceType: "humano",
    resourceProcess: "adquirir",
    senderName: "Você (Gerente de Projetos)",
    senderInitials: "GP",
    avatarImage: "/Personagens/Narrador.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Aceitar os voluntários em tarefas de teste e documentação, mantendo o código central sob supervisão estrita.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O escopo delimitado aproveitou o entusiasmo dos voluntários em testes exaustivos sem expor a arquitetura a riscos.",
        pmbokConcept: "Recursos alternativos com riscos reconhecidos",
        learnings: [
          "O PMBOK 8 prevê a mobilização de recursos alternativos desde que os riscos sejam formalmente reconhecidos e mitigados.",
          "Alocar perfis em tarefas proporcionais à sua capacitação protege a integridade e acelera a validação do produto."
        ],
        goodBad: "good",
        risksEvaded: [
          "Inserção de vulnerabilidades graves no núcleo transacional do sistema"
        ],
        otherConsequences: [
          "Engajamento pedagógico de estudantes em práticas reais de garantia da qualidade"
        ]
      },
      {
        key: "b",
        text: "Distribuir as demandas de regras de transação e notas aos voluntários sob regime de entrega autônoma ágil.",
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
              capacidadeEntrega: -15
            },
            narrative: "Código desprovido de travas de segurança permitiu alteração indevida de coeficientes acadêmicos."
          }
        ],
        feedbackNarrative: "A ilusão de velocidade rápida ruiu quando auditorias apontaram brechas de integridade em cálculos de notas.",
        pmbokConcept: "Maturidade dos membros da equipe",
        learnings: [
          "O PMBOK 8 adverte que atribuir tarefas de alta criticidade a recursos sem maturidade verificada expõe o projeto a desastres.",
          "Ignorar os riscos intrínsecos de alternativas precárias desestrutura a confiabilidade institucional das entregas."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço de revisão minuciosa de pull requests pelos desenvolvedores seniores"
        ],
        otherConsequences: [
          "Comprometimento de dados acadêmicos e auditoria externa investigativa"
        ]
      },
      {
        key: "c",
        text: "Declinar o suporte voluntário discente para restringir o acesso ao repositório aos funcionários com vínculo formal.",
        impacts: {
          capacidadeEntrega: -10,
          qualidadeProduto: 0,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A inflexibilidade gerou protestos de centros acadêmicos e privou o projeto de reforço relevante na fase de homologação.",
        pmbokConcept: "Negociação e influência para obter recursos",
        learnings: [
          "O PMBOK 8 recomenda a abertura para composição criativa de equipes através de diálogo e influência construtiva.",
          "Posturas reativas e intransigentes reduzem as alternativas viáveis para contornar a escassez de pessoal."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de planejar logística e espaço físico para novos membros"
        ],
        otherConsequences: [
          "Desconexão com a comunidade acadêmica e perda de oportunidade de atração de talentos"
        ]
      }
    ]
  },
  {
    id: "change_5_demanda_urgente_prograd",
    title: "A Portaria de Urgência (Coordenação entre Recursos e Cronograma)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["prograd", "regulacao", "cronograma", "coordenacao"],
    learningObjective: "Equilibrar a entrada de novos requisitos legais obrigatórios ajustando o plano de recursos sem gerar colapso na equipe.",
    communicationType: "email",
    senderRole: "Pró-Reitoria de Graduação",
    description: "Assunto: Nova Portaria do MEC sobre Cotas. A universidade precisa implantar novo sistema de validação étnico-racial em 15 dias sob pena de cancelamento das matrículas de novos ingressantes.",
    domainTag: "Recursos › Planejar o Gerenciamento dos Recursos",
    resourceType: "humano",
    resourceProcess: "planejar",
    senderName: "Pró-Reitor Adjunto",
    senderInitials: "PR",
    avatarImage: "/Personagens/Geraldo.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Repactuar o escopo secundário do ciclo de trabalho, realocar analistas e criar força-tarefa multidisciplinar com a PROGRAD.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A redistribuição de metas preservou a saúde da equipe e atendeu pontualmente à exigência federal sem retrabalho.",
        pmbokConcept: "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        learnings: [
          "O PMBOK 8 orienta a harmonização contínua entre recursos, cronograma e riscos perante imprevistos mandatórios.",
          "A flexibilidade controlada atende às imposições regulatórias preservando a sustentabilidade e os compromissos centrais."
        ],
        goodBad: "good",
        risksEvaded: [
          "Cancelamento de matrículas e punições federais por descumprimento legal"
        ],
        otherConsequences: [
          "Fortalecimento da parceria institucional entre a STI e a pró-reitoria"
        ]
      },
      {
        key: "b",
        text: "Autorizar regime extraordinário de horas extras noturnas e plantões de fim de semana para cumprir ambos os escopos.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              saudeEquipe: -15,
              capacidadeEntrega: -15
            },
            narrative: "Exaustão extrema resultou em licenças médicas sucessivas e paralisia operacional no período de matrículas."
          }
        ],
        feedbackNarrative: "A jornada desumana produziu código com defeitos de cálculo de cotas e culminou no esgotamento físico do time.",
        pmbokConcept: "Bem-estar e prevenção de burnout",
        learnings: [
          "O PMBOK 8 adverte que sobrecarregar cronicamente a equipe viola os preceitos de sustentabilidade humana e produtiva.",
          "O imediatismo baseado em jornadas extenuantes gera falhas críticas e desarticula os recursos especializados do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de renegociar entregas de relatórios secundários"
        ],
        otherConsequences: [
          "Afastamentos médicos em cadeia e processo trabalhista perante a justiça federal"
        ]
      },
      {
        key: "c",
        text: "Manter o cronograma aprovado pelo colegiado e protocolar pedido de prorrogação do prazo perante o ministério.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: 0,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A omissão gerou intervenção federal nas matrículas da instituição e afastamento dos responsáveis técnicos do projeto.",
        pmbokConcept: "Impacto da indisponibilidade de recursos nos demais planos",
        learnings: [
          "O PMBOK 8 frisa que o gestor deve calibrar os planos diante de fatores ambientais e legais inegociáveis da organização.",
          "Negligenciar diretrizes legais externas acarreta a nulidade dos atos do projeto e danos institucionais graves."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Alteração no cronograma acordado de desenvolvimento da semana"
        ],
        otherConsequences: [
          "Processo disciplinar da reitoria e paralisação judicial das matrículas de cotistas"
        ]
      }
    ]
  },
  {
    id: "change_6_demo_conselho_universitario",
    title: "A Pressão do Conselho (Comunicação com Stakeholders e Capacidade)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["conselho", "demo", "stakeholders", "capacidade"],
    learningObjective: "Negociar expectativas de partes interessadas e proteger a cadência de entrega contra interrupções de vaidade política.",
    communicationType: "slack",
    senderRole: "Gerente de Projetos",
    description: "Canal #geral: O Conselho Universitário convocou a equipe para apresentar demonstração funcional completa em 48 horas, o que exigiria congelar os testes de homologação em andamento.",
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
        text: "Apresentar protótipo navegável em ambiente controlado conduzido pelo GP e manter o time técnico focado nos testes.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "A demonstração atendeu perfeitamente à expectativa dos conselheiros sem desviar uma única hora dos desenvolvedores.",
        pmbokConcept: "Liderança servidora",
        learnings: [
          "O PMBOK 8 posiciona a liderança servidora como escudo protetor que absorve pressões externas em favor do foco da equipe.",
          "Atender às necessidades dos patrocinadores através de formatos adequados preserva o ritmo produtivo dos especialistas."
        ],
        goodBad: "good",
        risksEvaded: [
          "Interrupção dos testes e atraso na resolução de defeitos críticos da homologação"
        ],
        otherConsequences: [
          "Aprovação unânime do relatório parcial de progresso pelo conselho"
        ]
      },
      {
        key: "b",
        text: "Mobilizar a equipe técnica sênior para montar um ambiente interativo com dados fictícios para os conselheiros.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              capacidadeEntrega: -10
            },
            narrative: "A falta de testes durante os três dias de demo permitiu a passagem de falhas que paralisaram a folha docente."
          }
        ],
        feedbackNarrative: "A apresentação agradou no dia, mas o abandono dos testes gerou falhas graves no sistema durante a semana seguinte.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que interrupções não planejadas multiplicam desperdícios e quebram a eficiência da esteira de valor.",
          "Desviar o time central para encenações de curto prazo sacrifica a robustez e a integridade da entrega final."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Desconforto gerencial de conduzir a apresentação pessoalmente"
        ],
        otherConsequences: [
          "Perda de prazos contratuais e acúmulo de débito de homologação"
        ]
      },
      {
        key: "c",
        text: "Solicitar adiamento da apresentação para a fase de encerramento do semestre alegando foco exclusivo nas entregas.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A afronta institucional levou o Conselho a bloquear a liberação da próxima parcela orçamentária do projeto.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 preconiza a transparência e a construção de objetivos compartilhados com os órgãos de governança superior.",
          "O isolamento arrogante perante a liderança organizacional mina as bases de apoio indispensáveis ao sucesso do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Preparação de qualquer material ou relatório de apresentação"
        ],
        otherConsequences: [
          "Bloqueio de recursos financeiros e crise de governança institucional"
        ]
      }
    ]
  },
  {
    id: "change_7_mudanca_api_governo",
    title: "O Padrão Federal (Adaptação e Competências da Equipe)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["api_governo", "govbr", "integracao", "capacitacao"],
    learningObjective: "Mobilizar recursos e adequar competências técnicas perante alterações compulsórias de plataformas tecnológicas externas.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Migração Compulsória para o Gov.br. O Ministério da Gestão determinou que todas as universidades federais devem unificar o login de seus sistemas ao Gov.br em 20 dias sob risco de desconexão.",
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
        text: "Realizar nivelamento técnico com a equipe de segurança e priorizar a integração via biblioteca padrão do governo.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A rápida assimilação das diretrizes federais permitiu integrar o login sem sobressaltos e modernizou a segurança.",
        pmbokConcept: "Treinamento, mentoria e coaching",
        learnings: [
          "O PMBOK 8 preconiza capacitação e mentoria ágeis para absorver mudanças de diretrizes tecnológicas sem perder o padrão de qualidade.",
          "A conformidade precoce com padrões de interoperabilidade protege a instituição e eleva o nível técnico da equipe."
        ],
        goodBad: "good",
        risksEvaded: [
          "Bloqueio de acessos federados e desconexão do SIGAA das bases do governo federal"
        ],
        otherConsequences: [
          "Modernização do sistema de autenticação com padrões OAuth2/OIDC"
        ]
      },
      {
        key: "b",
        text: "Implementar um proxy reverso simplificado para autenticação básica enquanto se estuda a biblioteca do Gov.br.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -15
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              capacidadeEntrega: -15
            },
            narrative: "Vazamento de tokens gerado pela falha de segurança obrigou a revogação de acessos de todos os usuários do sistema acadêmico."
          }
        ],
        feedbackNarrative: "A solução precária violou diretrizes de segurança da informação da Presidência e expôs dados sigilosos discentes.",
        pmbokConcept: "Integridade e transparência do gerente de projetos",
        learnings: [
          "O PMBOK 8 destaca a observância estrita a normas éticas e de segurança no tratamento dos recursos de dados e sistemas.",
          "Adotar mecanismos frágeis expõe a organização a vulnerabilidades cibernéticas severas e descrédito público."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço inicial de estudo das especificações de segurança do Gov.br"
        ],
        otherConsequences: [
          "Notificação formal da Agência Nacional de Proteção de Dados (ANPD)"
        ]
      },
      {
        key: "c",
        text: "Formalizar solicitação de extensão de prazo fundamentando a complexidade da infraestrutura acadêmica legada.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "O ministério indeferiu o pedido e suspendeu o repasse orçamentário destinado à modernização digital da universidade.",
        pmbokConcept: "Planejamento de recursos sob escassez e competição entre projetos",
        learnings: [
          "O PMBOK 8 alerta contra a postergação inerte de compromissos que dependem de repasses orçamentários estratégicos vinculados.",
          "A inação diante de mandatos legais externos fecha portas de financiamento e enfraquece a governança do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho de replanejamento das tarefas de integração técnica"
        ],
        otherConsequences: [
          "Contingenciamento de recursos financeiros de capital e custeio"
        ]
      }
    ]
  },
  {
    id: "change_8_feedback_piloto_estudantes",
    title: "O Veredito dos Alunos (Melhoria Contínua e Tailoring no Design)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["piloto", "estudantes", "melhoria_continua", "tailoring"],
    learningObjective: "Incorporar o feedback de usuários em ciclos de melhoria contínua equilibrando as demandas de usabilidade com a capacidade da equipe.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #ux: 'O teste piloto com 200 alunos revelou que 75% não entenderam o fluxo de trancamento de matrícula no celular; o time de design quer redesenhar a tela inteira em três dias.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carla Silveira",
    senderInitials: "CS",
    avatarImage: "/Personagens/Carla.png",
    responsibleRole: "uxLead",
    alternatives: [
      {
        key: "a",
        text: "Focar em melhoria contínua pontual nos textos de ajuda e nos componentes de confirmação sem alterar os contratos centrais de integração.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "Ajustes micro-ergonômicos resolveram as dúvidas dos estudantes sem exigir retrabalho no código de retaguarda.",
        pmbokConcept: "Melhoria contínua",
        learnings: [
          "O PMBOK 8 destaca a melhoria contínua e Kaizen para aperfeiçoar processos e produtos sem rupturas desproporcionais.",
          "Intervenções incrementais cirúrgicas elevam a usabilidade com eficiência máxima de esforço e sem desestabilizar o plano."
        ],
        goodBad: "good",
        risksEvaded: [
          "Reestruturação técnica desnecessária de controladores e rotinas já homologadas"
        ],
        otherConsequences: [
          "Redução drástica no volume de chamados de suporte sobre trancamento de curso"
        ]
      },
      {
        key: "b",
        text: "Redesenhar integralmente o fluxo de trancamento de curso para atender ao novo padrão de experiência discente.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "O redesign intempestivo não foi concluído a tempo e o módulo foi retirado do ar no dia da matrícula."
          }
        ],
        feedbackNarrative: "A reconstrução intempestiva estourou o cronograma e deixou o sistema sem módulo de trancamento funcional.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que o perfeccionismo que reinicia processos prontos gera desperdício inaceitável de capacidade.",
          "Decisões radicais descoladas do cronograma viável ameaçam a entrega de valor prometida às partes interessadas."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço analítico de identificar causas raízes pontuais de usabilidade"
        ],
        otherConsequences: [
          "Indisponibilidade do serviço e protestos públicos de estudantes nos campi"
        ]
      },
      {
        key: "c",
        text: "Manter as telas atuais e publicar um guia rápido ilustrado com orientações passo a passo para os estudantes.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A soberba técnica gerou avalanche de trancamentos errôneos e revolta generalizada no diretório acadêmico.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 reforça que os recursos do projeto existem para entregar valor real e compartilhado aos usuários finais.",
          "Desdenhar do feedback da comunidade descaracteriza o propósito de modernização pública e inclusiva do sistema."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Qualquer esforço de ajuste ou melhoria de telas no momento"
        ],
        otherConsequences: [
          "Avalanche de processos administrativos de alunos prejudicados por erros de interface"
        ]
      }
    ]
  },
  {
    id: "change_9_integracao_restaurante_universitario",
    title: "A Integração do RU (Competição entre Projetos e Recursos Compartilhados)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["ru", "assistencia_estudantil", "concorrencia_recursos", "priorizacao"],
    learningObjective: "Gerenciar a concorrência por recursos humanos entre o projeto principal e projetos correlatos da instituição.",
    communicationType: "email",
    senderRole: "Pró-Reitoria de Assistência Estudantil",
    description: "Assunto: Módulo de Subsídio das Refeições. A PRAE solicita que dois programadores do SIGAA sejam destacados por um mês para consertar o sistema de catracas do Restaurante Universitário.",
    domainTag: "Recursos › Planejar o Gerenciamento dos Recursos",
    resourceType: "humano",
    resourceProcess: "planejar",
    senderName: "Pró-Reitor de Assistência",
    senderInitials: "PA",
    avatarImage: "/Personagens/Geraldo.png",
    responsibleRole: "pm",
    alternatives: [
      {
        key: "a",
        text: "Pactuar a inclusão do RU no barramento padronizado do SIGAA fornecendo APIs prontas para a equipe da PRAE.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A disponibilização de APIs conectou o restaurante sem subtrair desenvolvedores da esteira central do novo sistema.",
        pmbokConcept: "Competição entre projetos pelos mesmos recursos",
        learnings: [
          "O PMBOK 8 recomenda soluções estruturantes e interoperáveis para resolver disputas por recursos entre projetos institucionais.",
          "O fornecimento de serviços e interfaces preserva a alocação da equipe e estende o valor da solução a outros setores."
        ],
        goodBad: "good",
        risksEvaded: [
          "Desfalque de 40% da equipe técnica e atraso na entrega das notas acadêmicas"
        ],
        otherConsequences: [
          "Unificação do cadastro estudantil para controle de frequência e alimentação"
        ]
      },
      {
        key: "b",
        text: "Transferir os dois programadores integralmente e assumir o atraso nas entregas prioritárias de matrícula da graduação.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "A saída dos dois desenvolvedores gerou colapso na homologação do portal do estudante da instituição."
          }
        ],
        feedbackNarrative: "O restaurante funcionou, mas a matrícula da universidade atrasou duas semanas, gerando crise com o comitê acadêmico.",
        pmbokConcept: "Impacto da indisponibilidade de recursos nos demais planos",
        learnings: [
          "O PMBOK 8 alerta que abrir mão desordenadamente de capacidade técnica provoca colapso em cascata no cronograma geral.",
          "Ceder a solicitações paralelas sem salvaguardas prejudica o compromisso primordial pactuado com os patrocinadores."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atrito político imediato com a pró-reitoria de assistência discente"
        ],
        otherConsequences: [
          "Atraso crítico na entrega do novo portal discente e descontentamento geral"
        ]
      },
      {
        key: "c",
        text: "Declinar a integração no momento informando que o sistema do restaurante deve operar de forma desacoplada.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A recusa desrespeitosa gerou comoção pública e moção de censura contra o projeto no Conselho Universitário.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 salienta a importância da visão compartilhada e da sensibilidade institucional perante a comunidade universitária.",
          "Ignorar as demandas sociais da universidade pública destrói a legitimidade e a aceitação do software entregue."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho técnico de documentação e exposição de contratos de integração do sistema"
        ],
        otherConsequences: [
          "Hostilidade institucional e desgaste da imagem pública da gerência do projeto"
        ]
      }
    ]
  },
  {
    id: "change_10_novo_manual_marca_institucional",
    title: "O Padrão de Identidade Visual (Maturidade e Alinhamento de Design)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ["marca", "identidade_visual", "design_system", "comunicacao"],
    learningObjective: "Utilizar design systems componentizados para absorver diretrizes de identidade visual sem retrabalho manual generalizado.",
    communicationType: "email",
    senderRole: "Coordenadoria de Comunicação Social",
    description: "Assunto: Novo Manual de Identidade Visual da Instituição. A administração publicou novas diretrizes obrigatórias de tipografia, contraste e brasão oficial que devem ser refletidas em todas as telas.",
    domainTag: "Recursos › Liderar a Equipe",
    resourceType: "humano",
    resourceProcess: "liderar",
    senderName: "Assessoria de Comunicação",
    senderInitials: "AC",
    avatarImage: "/Personagens/Carla.png",
    responsibleRole: "uxLead",
    alternatives: [
      {
        key: "a",
        text: "Atualizar os tokens no Design System central propagando as novas diretrizes automaticamente em todas as telas.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A arquitetura de tokens centralizada absorveu a nova marca em poucas horas sem exigir alteração manual de código.",
        pmbokConcept: "Melhoria contínua",
        learnings: [
          "O PMBOK 8 recomenda ferramentas e ativos padronizados que potencializem a eficiência e a flexibilidade da equipe de criação.",
          "O uso de design systems componentizados elimina o retrabalho artesanal e assegura fidelidade às normas institucionais."
        ],
        goodBad: "good",
        risksEvaded: [
          "Semanas de edição manual repetitiva de folhas de estilo e imagens em dezenas de telas"
        ],
        otherConsequences: [
          "Consolidação de biblioteca institucional reutilizável para futuros sistemas da universidade"
        ]
      },
      {
        key: "b",
        text: "Designar três programadores para alterar manualmente cores e fontes em cada arquivo de código durante duas semanas.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              qualidadeProduto: -10
            },
            narrative: "Erros de digitação em arquivos de estilo manuais quebraram o layout do portal em navegadores móveis."
          }
        ],
        feedbackNarrative: "O esforço manual dispersou a equipe, gerou inconsistências visuais e atrasou a entrega das funcionalidades do ciclo de trabalho.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 aponta que tarefas repetitivas executadas sem automação constituem fonte grave de ineficiência e desperdício.",
          "Submeter talentos a trabalho manual mecânico esgota a energia produtiva e degrada a qualidade dos artefatos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Configuração inicial de infraestrutura de design tokens compartilhados"
        ],
        otherConsequences: [
          "Inconsistências estéticas crônicas e fadiga desnecessária nos desenvolvedores"
        ]
      },
      {
        key: "c",
        text: "Postergar a atualização visual para versões subsequentes, preservando o layout consolidado do sistema legado.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A recusa em atualizar a imagem do sistema provocou veto do conselho de comunicação e suspensão da campanha de lançamento.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 ressalta a responsabilidade do líder em alinhar os produtos entregues à identidade e estratégia da organização.",
          "Desconsiderar a representação institucional do projeto perante o público afasta os patrocinadores e enfraquece sua reputação."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Qualquer trabalho de atualização de bibliotecas gráficas no momento"
        ],
        otherConsequences: [
          "Rejeição pública do sistema pela reitoria e proibição de divulgação oficial"
        ]
      }
    ]
  }
];
