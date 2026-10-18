import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8): Recursos Físicos e Virtuais
 * Foco Pedagógico: Infraestrutura em nuvem, ambientes de staging, bancos de dados,
 * licenças de software, uso planejado vs. real, teoria das restrições e sustentabilidade técnica.
 * Total: 10 Dilemas reequilibrados segundo o modelo PMBOK 8.
 */
export const systemsThinkingEvents: GameEvent[] = [
  {
    id: "systems_1_gambiarra_matriculas",
    title: "Otimização do Banco Acadêmico (Monitoramento de Recursos Virtuais)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["recursos_virtuais", "banco_dados", "gargalo", "capacidade"],
    learningObjective: "Identificar gargalos em recursos virtuais mediante a Teoria das Restrições e aplicar otimização estrutural em vez de atalhos frágeis.",
    communicationType: "ticket",
    senderRole: "Líder Técnico",
    description: "Ticket #1088 - Faltam dez dias para o início das matrículas da instituição. O algoritmo de alocação de turmas satura a capacidade de processamento do repositório de dados, ameaçando paralisar as instâncias operacionais da instituição.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Otimizar índices relacionais e reestruturar consultas críticas sob a ótica da Teoria das Restrições.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A intervenção focada no gargalo central reduziu o consumo de CPU em 60%, estabilizando o banco para o pico de acessos.",
        pmbokConcept: "Teoria das restrições e gargalos",
        learnings: [
          "O PMBOK 8 preconiza a Teoria das Restrições para atuar no elo mais fraco dos recursos físicos e virtuais do sistema.",
          "Essa decisão assegura a disponibilidade sustentável dos recursos computacionais acadêmicos sem mascarar ineficiências na modelagem."
        ],
        goodBad: "good",
        risksEvaded: [
          "Colapso catastrófico das instâncias de banco no primeiro dia de matrículas"
        ],
        otherConsequences: [
          "Padronização de diretrizes para consultas de alta performance na STI"
        ]
      },
      {
        key: "b",
        text: "Suspender temporariamente as travas de integridade e checagens no banco para acelerar a gravação no pico.",
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
              capacidadeEntrega: -15
            },
            narrative: "A falta de integridade corrompeu o histórico de pré-requisitos, exigindo cancelamento manual de centenas de matrículas."
          }
        ],
        feedbackNarrative: "A gravação ficou rápida por dois dias, mas registros inconsistentes corromperam a base e geraram retrabalho massivo.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que atalhos em recursos virtuais geram desperdício exponencial na forma de retrabalho de correção.",
          "Suprimir mecanismos de proteção dos dados fere a confiabilidade do produto e compromete a sustentabilidade da operação."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atraso imediato no cronograma de homologação"
        ],
        otherConsequences: [
          "Inconsistência de matrículas de estudantes e passivo de auditoria"
        ]
      },
      {
        key: "c",
        text: "Aumentar horizontalmente o cluster de instâncias de banco em nuvem para absorver a carga por hardware.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -5,
          saudeEquipe: 0,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "O custo de hospedagem estourou o orçamento mensal da pró-reitoria e as consultas continuaram lentas por bloqueio de locks.",
        pmbokConcept: "Análise de custo-benefício e de tendências",
        learnings: [
          "O PMBOK 8 recomenda a análise de custo-benefício para evitar o superdimensionamento dispendioso de recursos virtuais.",
          "Aumentar hardware para compensar código defeituoso drena recursos financeiros sem solucionar a causa raiz do problema."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço imediato de otimização técnica preventiva das rotinas de consulta"
        ],
        otherConsequences: [
          "Glosa orçamentária pela administração superior da universidade"
        ]
      }
    ]
  },
  {
    id: "systems_2_aquisicoes_nuvem",
    title: "O Dimensionamento da Nuvem (Uso Planejado vs. Real de Recursos)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["nuvem", "custo_beneficio", "recursos_virtuais", "aquisicao"],
    learningObjective: "Monitorar o desvio entre consumo planejado e real de recursos computacionais e aplicar contratação elástica sob demanda.",
    communicationType: "email",
    senderRole: "Superintendência de TI",
    description: "Assunto: Fatura da Nuvem Governamental. O consumo de recursos computacionais virtuais durante os testes de carga ultrapassou a previsão inicial em 80%, consumindo a dotação de infraestrutura do trimestre.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Prof. Alberto Silva",
    senderInitials: "AS",
    avatarImage: "/Personagens/Alberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Implantar desligamento automático de instâncias ociosas e auto-scaling baseado em análise de tendências.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 10,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O escalonamento automatizado reduziu a ociosidade dos ambientes computacionais em 45%, reequilibrando as despesas contratuais da universidade.",
        pmbokConcept: "Uso planejado vs. real de recursos",
        learnings: [
          "O PMBOK 8 orienta o acompanhamento contínuo da variação entre uso planejado e real de recursos virtuais para evitar desperdícios.",
          "A automação da infraestrutura elástica atende às metas de sustentabilidade financeira sem prejudicar os ambientes de teste."
        ],
        goodBad: "good",
        risksEvaded: [
          "Esgotamento prematuro da verba orçamentária de computação da instituição"
        ],
        otherConsequences: [
          "Criação de cultura de gestão financeira de recursos virtuais na equipe pública"
        ]
      },
      {
        key: "b",
        text: "Desligar imediatamente os ambientes computacionais de homologação e concentrar todos os testes na máquina de produção.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              capacidadeEntrega: -10
            },
            narrative: "Testes automatizados concorrentes no ambiente de produção sobrescreveram notas oficiais do semestre anterior."
          }
        ],
        feedbackNarrative: "A economia na fatura foi ilusória; a mistura de testes em produção causou incidentes gravíssimos e pânico na universidade.",
        pmbokConcept: "Aquisição de recursos físicos ou virtuais",
        learnings: [
          "O PMBOK 8 salienta que a supressão de recursos virtuais essenciais como ambientes de homologação compromete a integridade do produto.",
          "Essa ação viola preceitos básicos de isolamento de infraestrutura e expõe os dados corporativos a risco inaceitável."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de renegociação orçamentária com a pró-reitoria"
        ],
        otherConsequences: [
          "Vulnerabilidade operacional severa e risco de sanções jurídicas"
        ]
      },
      {
        key: "c",
        text: "Manter todas as instâncias ativas em capacidade máxima contínua para assegurar tolerância a falhas.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: 5,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              saudeEquipe: -10
            },
            narrative: "A universidade teve as instâncias bloqueadas por inadimplência contratual, parando todo o desenvolvimento."
          }
        ],
        feedbackNarrative: "O provedor emitiu notificação de bloqueio judicial por estouro de dotação, paralisando os testes por uma semana.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 destaca o controle de inatividade como fator crucial para a gestão eficiente e sustentável de recursos de TI.",
          "A negligência com o consumo de infraestrutura compromete a continuidade do projeto perante os órgãos de controle."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho de configuração e monitoramento de scripts de desligamento"
        ],
        otherConsequences: [
          "Interrupção de serviços e processos administrativos contra a gestão"
        ]
      }
    ]
  },
  {
    id: "systems_3_conhecimento_legado",
    title: "O Enigma do Legado (Estrutura Analítica dos Recursos e Memória Técnica)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["legado", "documentacao", "ear", "migracao"],
    learningObjective: "Mapear dependências tecnológicas usando a Estrutura Analítica dos Recursos (EAR) para viabilizar migração segura de dados.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #dados: 'Ninguém sabe como funciona a rotina legada de emissão de diplomas de 2004 em COBOL/C; o único analista que conhecia as regras se aposentou sem deixar documentação.'",
    domainTag: "Recursos › Estimar os Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "estimar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Mapear as dependências na Estrutura Analítica dos Recursos e contratar o aposentado por parecer pontual.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O parecer estruturado com a EAR documentou as rotinas obscuras e permitiu recriar as validações no novo SIGAA.",
        pmbokConcept: "Estrutura analítica dos recursos (EAR)",
        learnings: [
          "O PMBOK 8 recomenda a EAR para catalogar de forma hierárquica recursos humanos e acervos de conhecimento indispensáveis.",
          "Essa medida garante a continuidade institucional do patrimônio de dados sem paralisar a esteira de desenvolvimento."
        ],
        goodBad: "good",
        risksEvaded: [
          "Bloqueio legal da emissão de diplomas de formandos da graduação"
        ],
        otherConsequences: [
          "Elaboração de repositório documentado de regras de negócio legadas"
        ]
      },
      {
        key: "b",
        text: "Deduzir as regras de negócio a partir do esquema de tabelas do banco legado e reprogramar o módulo em linguagem moderna.",
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
            narrative: "Diplomas emitidos com a nova rotina foram rejeitados pelo MEC por ausência de selos digitais criptográficos previstos em lei."
          }
        ],
        feedbackNarrative: "A entrega foi rápida, mas dezenas de exceções legais foram esquecidas, gerando anulação de certidões acadêmicas.",
        pmbokConcept: "Opinião especializada na estimativa",
        learnings: [
          "O PMBOK 8 adverte que prescindir de opinião especializada qualificada em domínios críticos conduz a estimativas e códigos falhos.",
          "Trabalhar com suposições desinformadas gera passivos regulatórios severos para a instituição de ensino superior."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Despesa pontual com consultoria de transição de conhecimento"
        ],
        otherConsequences: [
          "Paralisação de colações de grau e danos institucionais à universidade"
        ]
      },
      {
        key: "c",
        text: "Isolar o ativo físico computacional legado de 2004 em rede interna dedicada e manter sua operação paralela para diplomas.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A máquina antiga sofreu queima física de disco por obsolescência, corrompendo backups e travando a reitoria.",
        pmbokConcept: "Sustentabilidade na gestão de recursos",
        learnings: [
          "O PMBOK 8 orienta a aposentadoria planejada e sustentável de recursos em fim de ciclo de vida para mitigar riscos catastróficos.",
          "Manter ativos obsoletos sem plano de transição converte dívida técnica em vulnerabilidade de continuidade do negócio."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço técnico de análise do legado nesta fase do projeto"
        ],
        otherConsequences: [
          "Risco iminente de perda irreversível de registros históricos discentes"
        ]
      }
    ]
  },
  {
    id: "systems_4_integracao_banco_dados",
    title: "A Ilusão de Dados Simulados (Uso Planejado e Ambientes de Integração)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["integracao", "testes", "qualidade", "gargalos"],
    learningObjective: "Garantir a integridade do fluxo de entrega através de testes em ambientes integrados reais, evitando o adiamento crônico de validações.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #arquitetura: 'Para manter a meta de histórias entregues no ciclo de trabalho, os membros da equipe usaram dados simulados isolados e não testaram a integração com o barramento real da STI.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Conectar testes contínuos ao barramento de integração real e reajustar a velocidade dos próximos sprints.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A integração revelou vinte conflitos de esquema imediatamente, permitindo corrigi-los antes que virassem bloqueio geral.",
        pmbokConcept: "Mapeamento do fluxo de valor",
        learnings: [
          "O PMBOK 8 preconiza o mapeamento do fluxo de valor para identificar onde desperdícios e estoques invisíveis de defeitos se acumulam.",
          "Validar integrações com recursos reais elimina ilusões de velocidade e assegura software genuinamente pronto."
        ],
        goodBad: "good",
        risksEvaded: [
          "Descobrir centenas de erros de integração na véspera do lançamento público"
        ],
        otherConsequences: [
          "Ambiente de integração contínua robusto para todas as equipes da STI"
        ]
      },
      {
        key: "b",
        text: "Manter os dados de teste simulados até a entrega final e reservar uma semana de correções antes do go-live.",
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
            narrative: "A integração tardia colapsou os serviços; o lançamento precisou ser adiado em dois meses."
          }
        ],
        feedbackNarrative: "As métricas de produtividade do ciclo pareceram ótimas, mas o sistema travou completamente ao ser integrado aos dados reais.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que acumular débitos de integração transfere o custo da validação para o momento de maior vulnerabilidade.",
          "Essa prática camufla o atraso real e viola o compromisso de entregas verificáveis e funcionais."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Queda aparente nos gráficos de desempenho da iteração corrente"
        ],
        otherConsequences: [
          "Atraso no cronograma oficial e desgaste com o conselho universitário"
        ]
      },
      {
        key: "c",
        text: "Excluir o barramento da arquitetura e forçar acesso direto de cada componente ao repositório principal de dados corporativos.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "O acoplamento rígido derrubou o isolamento de segurança e expôs dados sensíveis de folha e notas a acessos indevidos.",
        pmbokConcept: "Teoria das restrições e gargalos",
        learnings: [
          "O PMBOK 8 ensina que romper padrões arquiteturais para aliviar prazos gera gargalos e vulnerabilidades sistêmicas crônicas.",
          "O desrespeito à arquitetura de recursos virtuais destrói a modularidade e inviabiliza a manutenção futura."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Configuração de contratos de interface com o barramento"
        ],
        otherConsequences: [
          "Quebra de conformidade com padrões de governança digital do governo federal"
        ]
      }
    ]
  },
  {
    id: "systems_5_licenca_banco_proprietario",
    title: "O Dilema do Software Livre (Análise de Custo-Benefício e Sustentabilidade)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["licenciamento", "custos", "open_source", "sustentabilidade"],
    learningObjective: "Avaliar o impacto de longo prazo na sustentabilidade de recursos entre plataformas proprietárias e tecnologias abertas.",
    communicationType: "email",
    senderRole: "Superintendência de TI",
    description: "Assunto: Renovação de Licenças Proprietárias. A renovação anual do ativo de software comercial consumirá 70% do orçamento total; a equipe propõe migração para recurso de tecnologia aberta.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Prof. Alberto Silva",
    senderInitials: "AS",
    avatarImage: "/Personagens/Alberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Planejar migração gradativa para plataforma de dados aberta investindo a economia em capacitação e suporte especializado.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A migração libertou a universidade de amarras contratuais e capacitou os desenvolvedores em tecnologias modernas abertas.",
        pmbokConcept: "Análise de custo-benefício e de tendências",
        learnings: [
          "O PMBOK 8 recomenda a análise de custo-benefício e de tendências para sustentar decisões de ciclo de vida de ativos computacionais.",
          "A adoção de padrões abertos assegura sustentabilidade financeira de longo prazo e independência tecnológica do serviço público."
        ],
        goodBad: "good",
        risksEvaded: [
          "Dependência crônica de fornecedor (vendor lock-in) e sequestro orçamentário"
        ],
        otherConsequences: [
          "Autonomia tecnológica e reinvestimento de verbas em bolsas discentes"
        ]
      },
      {
        key: "b",
        text: "Renovar o contrato da plataforma proprietária com aditivo orçamentário para manter a estabilidade do ecossistema.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              saudeEquipe: -10
            },
            narrative: "A reitoria precisou contingenciar bolsas de desenvolvimento para cobrir a fatura da licença de software."
          }
        ],
        feedbackNarrative: "O conforto imediato sacrificou as bolsas de estágio e renovação de computadores físicos dos laboratórios da universidade.",
        pmbokConcept: "Sustentabilidade na gestão de recursos",
        learnings: [
          "O PMBOK 8 posiciona a sustentabilidade como pilar transversal na gestão responsável de recursos escassos em projetos públicos.",
          "Manter custos fixos desproporcionais restringe a capacidade da organização de atender demandas prioritárias da comunidade acadêmica."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho técnico de conversão de dados e rotinas de banco"
        ],
        otherConsequences: [
          "Déficit orçamentário na pró-reitoria e cortes em programas de assistência estudantil"
        ]
      },
      {
        key: "c",
        text: "Migrar para uma edição comunitária não suportada com chaves de teste acadêmicas para dispensar a taxa anual.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A irregularidade foi flagrada pelo Tribunal de Contas, acarretando multas pesadas e responsabilização dos gestores.",
        pmbokConcept: "Integridade e transparência do gerente de projetos",
        learnings: [
          "O PMBOK 8 estabelece a estrita integridade legal e transparência em todas as ações de aquisição e uso de recursos corporativos.",
          "Infringir normas legais acarreta severas consequências institucionais, civis e criminais para a liderança do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Desembolso financeiro inicial para aquisição de licenças legais"
        ],
        otherConsequences: [
          "Processo de improbidade administrativa e paralisação forçada dos sistemas"
        ]
      }
    ]
  },
  {
    id: "systems_6_ambiente_staging_testes",
    title: "O Choque de Ambientes (Calendário e Alocação de Recursos Virtuais)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["staging", "calendario_recursos", "ambientes", "testes"],
    learningObjective: "Gerenciar a concorrência por recursos virtuais compartilhados por meio de calendários de recursos e agendamento planejado.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #testes: 'A equipe de experiência do usuário necessita do ambiente de homologação para testes de acessibilidade, mas a equipe de processamento central executou testes de estresse que derrubaram o ambiente computacional compartilhado.'",
    domainTag: "Recursos › Estimar os Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "estimar",
    senderName: "Carla Silveira",
    senderInitials: "CS",
    avatarImage: "/Personagens/Carla.png",
    responsibleRole: "uxLead",
    alternatives: [
      {
        key: "a",
        text: "Estabelecer calendário formal de uso dos ambientes com janelas exclusivas para usabilidade e testes de estresse.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A coordenação por calendário eliminou a sobreposição destrutiva e assegurou dados confiáveis para as duas disciplinas.",
        pmbokConcept: "Calendários de recursos",
        learnings: [
          "O PMBOK 8 prescreve calendários de recursos para organizar o uso compartilhado de ativos físicos e virtuais sem disputas desordenadas.",
          "O planejamento temporal protege a integridade dos testes de usabilidade e preserva a estabilidade das medições de carga."
        ],
        goodBad: "good",
        risksEvaded: [
          "Cancelamento de sessões com discentes cegos e retrabalho de testes de carga"
        ],
        otherConsequences: [
          "Previsibilidade operacional para todos os times de desenvolvimento da STI"
        ]
      },
      {
        key: "b",
        text: "Dar prioridade irrestrita às rotinas centrais de banco e cancelar os testes com usuários para não atrasar a medição de performance.",
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
              capacidadeEntrega: -10
            },
            narrative: "Telas confusas e inacessíveis causaram avalanche de reclamações e rejeição pública pelos centros acadêmicos."
          }
        ],
        feedbackNarrative: "O processamento atingiu ótima velocidade, mas a interface lançada mostrou-se incompreensível para alunos e professores.",
        pmbokConcept: "Escassez e excedente de recursos",
        learnings: [
          "O PMBOK 8 adverte que privilegiar uma disciplina em detrimento de outra gera desequilíbrio e compromete o valor total do produto.",
          "Suprimir validações com usuários gera produtos computacionalmente rápidos, mas funcionalmente ineficazes para a comunidade."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Negociação de horários e ajustes na agenda de testes de estresse"
        ],
        otherConsequences: [
          "Rejeição da nova interface por alunos e docentes da universidade"
        ]
      },
      {
        key: "c",
        text: "Adotar política de fila dinâmica sob demanda onde as tarefas executam simultaneamente no mesmo ambiente.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "A disputa não regulada corrompeu os dados de homologação e instaurou discórdia aberta entre as lideranças de desenvolvimento.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 frisa que a omissão na alocação de recursos compartilhados gera conflitos destrutivos e corrupção de artefatos.",
          "A governança ativa da liderança é indispensável para criar cooperação ordenada e manter o ambiente seguro de trabalho."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço inicial de alinhamento e gestão do cronograma de infraestrutura"
        ],
        otherConsequences: [
          "Deterioração das relações entre designers e engenheiros de software"
        ]
      }
    ]
  },
  {
    id: "systems_7_backup_politica_retencao",
    title: "O Ponto de Restauração (Segurança e Coordenação com Riscos)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["backup", "riscos", "infraestrutura", "seguranca"],
    learningObjective: "Harmonizar a alocação de recursos de armazenamento com o plano de gerenciamento dos riscos e continuidade de negócios.",
    communicationType: "ticket",
    senderRole: "Líder Técnico",
    description: "Ticket #1102 - O espaço de armazenamento em nuvem está no limite; a equipe desativou os cópias diárias de segurança do repositório para economizar capacidade e evitar aquisição emergencial de ativos físicos de armazenamento.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Alocar armazenamento frio arquival e automatizar a política de retenção de snapshots integrada ao plano de riscos.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O uso de armazenamento econômico de longo prazo garantiu pontos de restauração sem onerar o orçamento da instituição.",
        pmbokConcept: "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        learnings: [
          "O PMBOK 8 destaca a coordenação estreita entre recursos, finanças e gerenciamento de riscos para salvaguardar os ativos críticos.",
          "Garantir redundância através de mídias adequadas preserva a integridade institucional sem inflacionar custos operacionais."
        ],
        goodBad: "good",
        risksEvaded: [
          "Perda irrecuperável de notas e histórico escolar discente por falha de storage"
        ],
        otherConsequences: [
          "Alinhamento dos processos da STI com a política de segurança da informação"
        ]
      },
      {
        key: "b",
        text: "Suspender a replicação cruzada de snapshots e apoiar a resiliência no SLA de alta disponibilidade do provedor de nuvem.",
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
            narrative: "Uma falha de hardware na nuvem corrompeu tabelas e a equipe levou quatro dias para reconstruir dados manualmente."
          }
        ],
        feedbackNarrative: "A economia foi negligente; uma falha de disco subsequente exigiu reconstituição penosa e manual de semanas de trabalho.",
        pmbokConcept: "Impacto da indisponibilidade de recursos nos demais planos",
        learnings: [
          "O PMBOK 8 adverte que ignorar salvaguardas de recursos acarreta paralisia catastrófica em caso de contingência real.",
          "Essa omissão compromete o plano de continuidade operacional e gera custos desmedidos de reparação emergencial."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Contratação imediata de volume adicional de armazenamento de dados"
        ],
        otherConsequences: [
          "Vulnerabilidade institucional extrema a incidentes e ataques virtuais"
        ]
      },
      {
        key: "c",
        text: "Excluir os volumes históricos de homologação e testes antigos para liberar espaço imediato em disco.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "A destruição precipitada de dados históricos eliminou o acervo de testes de regressão, gerando insegurança técnica.",
        pmbokConcept: "Liberação de recursos conforme o plano",
        learnings: [
          "O PMBOK 8 preconiza que a liberação ou descarte de ativos deve obedecer a planejamento criterioso e retenção de memória.",
          "Destruir ativos de conhecimento sem validação empobrece a base técnica e reduz a eficácia de manutenções futuras."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Configuração de rotinas de arquivamento em camadas de baixo custo"
        ],
        otherConsequences: [
          "Perda definitiva de cenários históricos de teste de regressão"
        ]
      }
    ]
  },
  {
    id: "systems_8_terceirizacao_vs_interno",
    title: "O Dilema do Outsourcing (Análise de Decisão Multicritério)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["aquisicao", "multicriterio", "terceirizacao", "estrategia"],
    learningObjective: "Aplicar análise de decisão multicritério para deliberar entre desenvolvimento interno ou contratação externa de pacotes técnicos.",
    communicationType: "email",
    senderRole: "Gerente de Projetos",
    description: "Assunto: Módulo de Reconhecimento Facial para Acesso a Restaurantes Universitários. A reitoria propõe contratar fábrica de software externa por valor milionário em vez de capacitar o time próprio.",
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
        text: "Conduzir Análise de Decisão Multicritério avaliando custo total de posse, segurança e autonomia técnica interna.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A análise formal demonstrou que desenvolver internamente com bibliotecas abertas custava 80% menos e retinha o domínio na universidade.",
        pmbokConcept: "Análise de decisão multicritério",
        learnings: [
          "O PMBOK 8 recomenda a análise de decisão multicritério para selecionar fontes de recursos ponderando fatores técnicos e estratégicos.",
          "A ponderação objetiva assegura o melhor uso do erário e estimula o fortalecimento das capacidades tecnológicas da organização."
        ],
        goodBad: "good",
        risksEvaded: [
          "Contratação de solução externa incompatível e de altíssimo custo de manutenção"
        ],
        otherConsequences: [
          "Domínio institucional de tecnologias biométricas por funcionários públicos efetivos"
        ]
      },
      {
        key: "b",
        text: "Contratar o pacote de reconhecimento facial com o fornecedor líder de mercado para agilizar o lançamento.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -15
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              qualidadeProduto: -15,
              capacidadeEntrega: -15
            },
            narrative: "A empresa entregou código ofuscado e proprietário que não dialogava com a base de dados discente da instituição."
          }
        ],
        feedbackNarrative: "A terceirização custou caro e entregou solução fechada que a equipe interna não consegue adaptar aos novos campi.",
        pmbokConcept: "Recursos internos e externos",
        learnings: [
          "O PMBOK 8 adverte contra a terceirização precipitada que aliena o conhecimento central e cria dependência operacional crônica.",
          "Essa decisão contraria o desenvolvimento sustentável das competências da instituição e expõe dados sensíveis a terceiros."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço inicial de capacitação da equipe em visão computacional"
        ],
        otherConsequences: [
          "Drenagem orçamentária prolongada e perda de domínio sobre o código-fonte"
        ]
      },
      {
        key: "c",
        text: "Declinar formalmente a solicitação de reconhecimento facial justificando que biometria não integra o escopo original.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A recusa sumária gerou crise com a Pró-Reitoria de Assuntos Estudantis e manteve fraudes crônicas nas filas do RU.",
        pmbokConcept: "Negociação e influência para obter recursos",
        learnings: [
          "O PMBOK 8 orienta o gerente a negociar e propor saídas colaborativas com os stakeholders em vez de impor vetos unilaterais.",
          "Ignorar as necessidades essenciais das partes interessadas enfraquece o valor público entregue pelo projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho de elaboração de estudos técnicos e termos de referência"
        ],
        otherConsequences: [
          "Desgaste político severo e persistência de ineficiência operacional nos campi"
        ]
      }
    ]
  },
  {
    id: "systems_9_licencas_subutilizadas",
    title: "Licenças Ociosas (Utilização, Inatividade e Liberação de Recursos)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ["licencas", "inatividade", "custos", "liberacao"],
    learningObjective: "Auditar a taxa de utilização de recursos virtuais e licenças para liberar ativos ociosos e reverter sobras para áreas deficitárias.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #design: 'Descobrimos que a universidade paga 40 licenças de uma suíte cara de modelagem 3D contratada no passado; apenas duas estão em uso ativo pelos designers neste ano.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Carla Silveira",
    senderInitials: "CS",
    avatarImage: "/Personagens/Carla.png",
    responsibleRole: "uxLead",
    alternatives: [
      {
        key: "a",
        text: "Cancelar as licenças inativas conforme o plano e reverter a economia para monitores ergonômicos e testes com usuários.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 10
        },
        feedbackNarrative: "O cancelamento das ferramentas ociosas liberou verba para comprar equipamentos modernos que melhoraram a saúde do time.",
        pmbokConcept: "Liberação de recursos conforme o plano",
        learnings: [
          "O PMBOK 8 recomenda a liberação tempestiva de recursos ociosos para evitar desperdícios e realocar valor onde há necessidade real.",
          "O remanejamento responsável de investimentos virtuais para infraestrutura física melhora o ambiente e o rendimento da equipe."
        ],
        goodBad: "good",
        risksEvaded: [
          "Glosa de despesas ineficientes em auditoria interna da universidade"
        ],
        otherConsequences: [
          "Aquisição de periféricos ergonômicos e elevação do conforto do laboratório"
        ]
      },
      {
        key: "b",
        text: "Preservar a dotação de 40 licenças contratadas para absorver futuras turmas e expansões de cursos de design.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -10,
              qualidadeProduto: -10
            },
            narrative: "Auditoria do Tribunal de Contas apontou dano ao erário por pagamento continuado de licenças sem uso comprovado."
          }
        ],
        feedbackNarrative: "A inércia gerencial desperdiçou verba pública preciosa que fez falta direta para a compra de computadores de trabalho.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 aponta a tolerância com inatividade crônica de recursos como falha grave de governança e monitoramento.",
          "Desperdiçar recursos contratuais por comodismo administrativo viola o dever de sustentabilidade na gestão pública."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Processo burocrático de repactuação de contrato com fornecedor de TI"
        ],
        otherConsequences: [
          "Apontamento de auditoria e contingenciamento de compras prioritárias"
        ]
      },
      {
        key: "c",
        text: "Instituir o uso obrigatório da suíte 3D nas equipes de desenvolvimento de interfaces para padronizar as ferramentas de interface.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: 5
        },
        feedbackNarrative: "Obrigar o uso de software inadequado gerou atrito, perda de tempo de codificação e insatisfação nos desenvolvedores.",
        pmbokConcept: "Mapeamento do fluxo de valor",
        learnings: [
          "O PMBOK 8 adverte que impor etapas desnecessárias no fluxo de trabalho introduz atrito e desperdício cognitivo.",
          "A adequação da ferramenta ao papel é indispensável para preservar o foco e a eficiência operacional dos colaboradores."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Justificativa formal do baixo índice de adesão da ferramenta adquirida"
        ],
        otherConsequences: [
          "Queda de produtividade e desmotivação técnica entre os programadores"
        ]
      }
    ]
  },
  {
    id: "systems_10_staging_indisponivel",
    title: "A Pane do Ambiente de Testes (Plano de Contingência e Recursos Virtuais)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["staging", "contingencia", "recursos_virtuais", "governanca"],
    learningObjective: "Acionar recursos alternativos com riscos reconhecidos quando falhas de infraestrutura virtual impedirem a esteira contínua.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #infra: 'A máquina física que hospeda o ambiente de testes de integração queimou a fonte no datacenter da universidade; a reposição da peça levará cinco dias úteis.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "fisico_virtual",
    resourceProcess: "monitorar",
    senderName: "Mariana Costa",
    senderInitials: "MC",
    avatarImage: "/Personagens/Mariana.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Provisionar cluster temporário na nuvem pública governamental e migrar a esteira de testes com riscos registrados.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A resposta rápida através de infraestrutura como código restabeleceu os testes em poucas horas sem paralisar o ciclo de entregas.",
        pmbokConcept: "Recursos alternativos com riscos reconhecidos",
        learnings: [
          "O PMBOK 8 recomenda a ativação planejada de recursos alternativos com riscos reconhecidos em situações de indisponibilidade.",
          "A adoção de infraestrutura virtual redundante protege a continuidade do projeto e minimiza tempos de inatividade."
        ],
        goodBad: "good",
        risksEvaded: [
          "Paralisia de cinco dias da equipe inteira de engenharia e atraso da versão"
        ],
        otherConsequences: [
          "Modernização dos scripts de automação de ambientes em contêineres"
        ]
      },
      {
        key: "b",
        text: "Adiantar documentação e planejamento técnico enquanto aguarda a substituição da fonte pelo setor de patrimônio.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              saudeEquipe: -10
            },
            narrative: "A paralisação forçada acumulou tarefas e gerou regime exaustivo de horas extras na semana seguinte."
          }
        ],
        feedbackNarrative: "A inércia diante da quebra de hardware consumiu uma semana útil de trabalho e comprimiu perigosamente o calendário final.",
        pmbokConcept: "Impacto da indisponibilidade de recursos nos demais planos",
        learnings: [
          "O PMBOK 8 alerta que a inação perante indisponibilidade de recursos virtuais reverbera de forma destrutiva nos demais planos.",
          "A liderança proativa deve dispor de alternativas de contingência para assegurar a produtividade contínua dos recursos humanos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Custo de consumo temporário de nuvem governamental"
        ],
        otherConsequences: [
          "Atraso crítico na entrega e descontentamento entre os desenvolvedores"
        ]
      },
      {
        key: "c",
        text: "Liberar atualizações pontuais diretamente em produção sob supervisão sênior até o restabelecimento do laboratório.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "Um erro não testado subiu para a produção e travou o sistema de emissão de notas em plena época de fechamento semestral.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 salienta que violar salvaguardas de isolamento técnico sob pressão expõe a instituição a colapso de serviços vitais.",
          "Apressar entregas sem validação em ambiente controlado destrói a segurança operacional e a reputação do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Sensação momentânea de interrupção do ritmo de codificação"
        ],
        otherConsequences: [
          "Indisponibilidade pública do sistema universitário e indignação geral da comunidade"
        ]
      }
    ]
  }
];
