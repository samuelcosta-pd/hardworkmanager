import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8) - Gestão Matricial, Aquisição e Adaptação de Recursos
 * Total: 10 Dilemas
 */
export const changeManagementEvents: GameEvent[] = [
  {
    "id": "change_1_ideia_reitor",
    "title": "A \"Pequena\" Ideia do Reitor (Chatbot com IA)",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "recursos_humanos",
      "planejamento",
      "capacidade",
      "stakeholders"
    ],
    "learningObjective": "Proteger a capacidade planejada da equipe contra desvios de alocação motivados por demandas externas.",
    "communicationType": "slack",
    "senderRole": "Gabinete da Reitoria",
    "description": "O Reitor envia mensagem pedindo a inclusão imediata de um chatbot com Inteligência Artificial para dúvidas de matrícula na próxima semana. A demanda não planejada exigiria desviar 100% da equipe de desenvolvimento e paralisar as entregas críticas.",
    "domainTag": "Recursos › Planejar o Gerenciamento dos Recursos",
    "resourceType": "humano",
    "resourceProcess": "planejar",
    "senderName": "Gabinete da Reitoria",
    "senderInitials": "GR",
    "avatarImage": "/Personagens/Rainara.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Demonstrar o impacto na alocação da equipe, preservar o foco atual e planejar os recursos para o chatbot na Fase 2.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A transparência impressionou o Reitor. Ele compreendeu que a capacidade atual estava comprometida e aprovou o planejamento de recursos para o próximo ciclo.",
        "pmbokConcept": "Planejamento de recursos sob escassez e competição entre projetos",
        "learnings": [
          "Gerenciar recursos requer proteger a equipe contra sobrecargas repentinas, negociando alocações futuras com base em capacidade real."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Sobrecarga descontrolada e colapso das entregas centrais"
        ],
        "otherConsequences": [
          "Planejamento estruturado e respeito institucional pela capacidade do time"
        ]
      },
      {
        "key": "b",
        "text": "Acatar a ordem imediatamente e desviar todo o time técnico para construir o protótipo de chatbot às pressas.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -20,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "O abandono das tarefas essenciais fez o sistema de matrículas travar na abertura do semestre acadêmico."
          }
        ],
        "feedbackNarrative": "O chatbot consumiu todo o esforço do time. O protótipo ficou instável e a tela de matrícula não foi entregue, gerando crise com a Reitoria.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "Desviar recursos sem planejamento desestabiliza todos os outros planos e compromete a sustentabilidade do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atrito político imediato com o patrocinador"
        ],
        "otherConsequences": [
          "Atraso geral no cronograma e esgotamento do time"
        ]
      },
      {
        "key": "c",
        "text": "Fingir concordância e exibir uma gravação de vídeo simulada na coletiva para aparentar que a equipe construiu a IA.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -15,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -25
        },
        "feedbackNarrative": "A farsa foi desmascarada por estudantes na coletiva de imprensa. A credibilidade da gestão e da equipe foi destruída.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Simulações fraudulentas quebram a confiança, violam a integridade e destroem a reputação profissional do time."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pressão imediata de autoridades"
        ],
        "otherConsequences": [
          "Escândalo público e perda total de patrocínio institucional"
        ]
      }
    ]
  },
  {
    "id": "change_2_negociacao_gerente_funcional",
    "title": "Resistência do Gerente Funcional na Liberação de Devs",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "ambiente_matricial",
      "negociacao",
      "recursos_humanos",
      "alocacao"
    ],
    "learningObjective": "Negociar e influenciar gestores funcionais para assegurar a alocação de recursos em ambiente matricial.",
    "communicationType": "email",
    "senderRole": "Gerente de TI Departamental",
    "description": "Assunto: Retenção de Desenvolvedores. O gerente funcional da TI central recusa ceder dois desenvolvedores seniores alocados ao projeto durante o período de matrículas, alegando que precisa deles para chamados rotineiros do departamento.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "humano",
    "resourceProcess": "adquirir",
    "senderName": "Prof. Cláudio TI",
    "senderInitials": "PC",
    "avatarImage": "/Personagens/Professor.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Negociar dedicação compartilhada com escala de horas definida e apoio na automação dos chamados departamentais.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A negociação matricial funcionou. O gerente funcional liberou os seniores em meio período e a equipe manteve o ritmo das entregas estratégicas.",
        "pmbokConcept": "Gerente de recursos e ambiente matricial",
        "learnings": [
          "Em estruturas matriciais, obter recursos exige negociar benefícios mútuos com os gerentes funcionais, evitando confrontos estéreis."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Perda total de desenvolvedores seniores na reta final"
        ],
        "otherConsequences": [
          "Aliança estratégica estabelecida entre o projeto e o departamento"
        ]
      },
      {
        "key": "b",
        "text": "Aceitar a recusa passivamente e deixar o projeto sem nenhum profissional experiente durante o ciclo crítico de entregas.",
        "impacts": {
          "capacidadeEntrega": -30,
          "qualidadeProduto": -20,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A ausência dos seniores sobrecarregou os desenvolvedores menos experientes e gerou falhas na estrutura do módulo acadêmico."
          }
        ],
        "feedbackNarrative": "Os membros menos experientes ficaram desorientados sem suporte técnico. O ciclo atrasou duas semanas e a qualidade despencou.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "A indisponibilidade imprevista de competências críticas inviabiliza as estimativas e compromete todas as metas do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conversa difícil de negociação com a chefia"
        ],
        "otherConsequences": [
          "Desorientação técnica e atraso massivo nas entregas"
        ]
      },
      {
        "key": "c",
        "text": "Enviar e-mail hostil para o Reitor acusando o gerente departamental de sabotar o projeto institucional da UFC.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 0,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O Reitor repreendeu o comitê pela postura combativa. O clima político azedou e o departamento cortou qualquer colaboração técnica futura.",
        "pmbokConcept": "Resolução de problemas e conflitos",
        "learnings": [
          "Escalar conflitos com hostilidade destrói pontes institucionais e agrava a escassez de recursos humanos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de conciliação"
        ],
        "otherConsequences": [
          "Bloqueio de cooperação e isolamento político do time"
        ]
      }
    ]
  },
  {
    "id": "change_3_saida_dev_onboarding",
    "title": "Saída Repentina de Dev Sênior e Onboarding Sob Pressão",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "onboarding",
      "mentoria",
      "recursos_humanos",
      "rotatividade"
    ],
    "learningObjective": "Conduzir transição de recursos humanos e mentoria sob pressão de prazo mantendo a sustentabilidade do time.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Canal #equipe - O principal especialista em lógica do sistema aceitou proposta no setor privado a 3 semanas do lançamento. A liderança precisa decidir como absorver a perda sem sobrecarregar os membros restantes.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Promover pareamento intensivo de 5 dias do sênior com um pleno e redistribuir o backlog com escopo ajustado.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A mentoria acelerada transferiu o conhecimento tácito. O pleno assumiu as tarefas com segurança e a equipe não sofreu paralisia.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Programas de mentoria e transição estruturada de conhecimento preservam as competências da equipe mesmo com saídas repentinas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Perda de conhecimento crítico e choque de produtividade"
        ],
        "otherConsequences": [
          "Empoderamento do desenvolvedor pleno e retenção de know-how"
        ]
      },
      {
        "key": "b",
        "text": "Obrigar os outros desenvolvedores a cumprirem 4 horas extras diárias para cobrir a cota do sênior que saiu.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -20,
          "saudeEquipe": -35,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -15,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A sobrecarga desumana gerou pedidos de demissão em cascata e o time perdeu outro desenvolvedor."
          }
        ],
        "feedbackNarrative": "O time entrou em colapso por estafa. Erros grosseiros foram introduzidos no código e outro engenheiro pediu desligamento.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Compensar rotatividade forçando horas extras contínuas induz burnout e agrava a perda de recursos humanos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Negociação de prazos com patrocinadores"
        ],
        "otherConsequences": [
          "Evasão em cadeia e ambiente tóxico de trabalho"
        ]
      },
      {
        "key": "c",
        "text": "Alocar um desenvolvedor recém-chegado para assumir sozinho toda a estrutura central do sistema sem mentoria prévia.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -30,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O desenvolvedor recém-chegado entrou em pânico e cometeu falhas que paralisaram o banco de dados. O módulo teve que ser reescrito.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Atribuir responsabilidades complexas a iniciantes sem mentoria gera desespero pessoal e defeitos críticos no produto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo de transição dos mais experientes"
        ],
        "otherConsequences": [
          "Falhas arquiteturais graves e desmotivação de novatos"
        ]
      }
    ]
  },
  {
    "id": "change_4_recurso_alternativo_risco",
    "title": "Recurso Alternativo com Risco Regulatório",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "recursos_alternativos",
      "conformidade",
      "aquisicao",
      "riscos"
    ],
    "learningObjective": "Avaliar os riscos e restrições regulatórias na obtenção de recursos alternativos para o projeto.",
    "communicationType": "email",
    "senderRole": "Pró-Reitoria de Graduação",
    "description": "Assunto: Reforço Emergencial. Para suprir a carência urgente de testes antes do lançamento, o patrocinador sugere alocar desenvolvedores de outro contrato de tecnologia sem termo aditivo regularizado, contornando regras jurídicas para iniciar na mesma tarde.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "humano",
    "resourceProcess": "adquirir",
    "senderName": "Lívia (Gerência)",
    "senderInitials": "LG",
    "avatarImage": "/Personagens/Lívia.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Formalizar termo aditivo emergencial com a procuradoria jurídica antes de integrar os novos profissionais ao projeto.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A procuradoria aprovou o aditivo em 48 horas. Os novos desenvolvedores foram integrados legalmente com segurança jurídica e apoiaram os testes com sucesso.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Adquirir recursos alternativos exige reconhecer e tratar os riscos associados antes de alocar pessoas nas atividades do projeto."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Processos jurídicos e nulidade das atividades dos novos profissionais"
        ],
        "otherConsequences": [
          "Conformidade regulatória e reforço legítimo da equipe"
        ]
      },
      {
        "key": "b",
        "text": "Aceitar a alocação irregular imediatamente sem qualquer documento para economizar tempo burocrático.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -20,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -25
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -15,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A auditoria barrou os contratos irregulares e os desenvolvedores tiveram que interromper suas atividades abruptamente."
          }
        ],
        "feedbackNarrative": "A auditoria interna identificou desvio de finalidade nas bolsas. O projeto foi multado e os estudantes tiveram que devolver recursos recebidos.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "Ignorar a coordenação entre recursos e normas financeiras expõe a equipe e os profissionais a penalidades severas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Espera pela tramitação de documentos"
        ],
        "otherConsequences": [
          "Sanções administrativas e cancelamento forçado de bolsas"
        ]
      },
      {
        "key": "c",
        "text": "Recusar veementemente o apoio e afirmar que o projeto prefere atrasar dois meses do que receber ajuda externa.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -10,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "A recusa intransigente atrasou a entrega e causou mal-estar com a Pró-Reitoria, que suspendeu novos apoios à equipe.",
        "pmbokConcept": "Negociação e influência para obter recursos",
        "learnings": [
          "A postura de fechamento a recursos alternativos priva o projeto de opções viáveis e enfraquece alianças institucionais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trâmite burocrático"
        ],
        "otherConsequences": [
          "Atraso nas entregas e desgaste na relação com o patrocinador"
        ]
      }
    ]
  },
  {
    "id": "change_5_demanda_urgente_prograd",
    "title": "Demanda \"Prioridade Zero\" da Pró-Reitoria",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "capacidade",
      "negociacao",
      "recursos_humanos",
      "priorizacao"
    ],
    "learningObjective": "Negociar alocação de esforço da equipe com base em dados transparentes de capacidade finita.",
    "communicationType": "email",
    "senderRole": "Pró-Reitoria de Graduação",
    "description": "Assunto: URGENTE - Módulo de Avaliação Docente. A pró-reitoria exige a inclusão imediata de um formulário de 50 perguntas para avaliação de professores no ciclo de trabalho em andamento, sem abrir mão de nenhuma outra entrega já planejada da equipe.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "humano",
    "resourceProcess": "adquirir",
    "senderName": "Pró-Reitor de Graduação",
    "senderInitials": "PR",
    "avatarImage": "/Personagens/Rainara.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Apresentar a capacidade finita do time e negociar realocação de entregas com trade-offs transparentes.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A pró-reitoria visualizou a balança de esforço e compreendeu que a matrícula era prioridade máxima, aceitando agendar a avaliação para o mês seguinte.",
        "pmbokConcept": "Negociação e influência para obter recursos",
        "learnings": [
          "Apresentar limites de capacidade de pessoas com dados concretos permite negociar prioridades reais sem comprometer o time."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Sobrecarga desumana e entregas incompletas"
        ],
        "otherConsequences": [
          "Respeito institucional pela gestão profissional do projeto"
        ]
      },
      {
        "key": "b",
        "text": "Aceitar tudo sem negociar e forçar a equipe a programar as duas coisas em paralelo na mesma semana.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -25,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A sobrecarga duplicada paralisou testes de homologação e atrasou a abertura do semestre."
          }
        ],
        "feedbackNarrative": "Nenhuma das duas tarefas ficou pronta. O formulário travava e a matrícula abriu com defeitos críticos. O time ficou exausto.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "Assumir compromissos sem capacidade técnica disponível fragmenta o esforço e compromete a execução de todos os planos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conversa difícil de alinhamento com a autoridade"
        ],
        "otherConsequences": [
          "Fracasso duplo nas entregas e exaustão generalizada"
        ]
      },
      {
        "key": "c",
        "text": "Rejeitar o pedido de forma ríspida dizendo que a pró-reitoria desconhece desenvolvimento de software.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 0,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O pró-reitor sentiu-se desrespeitado e retirou recursos financeiros de apoio ao projeto acadêmico.",
        "pmbokConcept": "Resolução de problemas e conflitos",
        "learnings": [
          "Defender limites de equipe exige empatia e clareza analítica, nunca arrogância ou confronto pessoal desnecessário."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho adicional de negociação"
        ],
        "otherConsequences": [
          "Corte orçamentário e rompimento institucional"
        ]
      }
    ]
  },
  {
    "id": "change_6_demo_conselho_universitario",
    "title": "Apresentação Antecipada para o Conselho",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "stakeholders",
      "transparencia",
      "recursos_humanos",
      "alinhamento"
    ],
    "learningObjective": "Manter a propriedade compartilhada e transparência sobre o estado real dos recursos do projeto.",
    "communicationType": "email",
    "senderRole": "Secretaria dos Órgãos Colegiados",
    "description": "Assunto: Reunião do Conselho Universitário. O Conselho Universitário convocou a liderança para demonstrar o novo sistema. A diretoria quer que o time pare de desenvolver e monte um protótipo visual fictício simulando que tudo já está concluído.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Lívia (Gerência)",
    "senderInitials": "LG",
    "avatarImage": "/Personagens/Lívia.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Demonstrar as telas e módulos reais no servidor de testes e o cronograma de recursos, mantendo a equipe focada na construção real.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "O Conselho aplaudiu a seriedade técnica e a honestidade na prestação de contas sobre o trabalho e a capacidade da equipe.",
        "pmbokConcept": "Visão e objetivos compartilhados",
        "learnings": [
          "Demonstrar progresso autêntico alinha expectativas e reforça a visão compartilhada entre equipe e alta governança."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Expectativas falsas e desperdício de tempo da equipe"
        ],
        "otherConsequences": [
          "Credibilidade sólida conquistada junto ao Conselho"
        ]
      },
      {
        "key": "b",
        "text": "Parar todo o time por uma semana para criar uma demonstração visual improvisada e descartável que não funciona na prática.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -10,
              "qualidadeProduto": -10,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A semana gasta em maquetes atrasou o módulo de segurança e obrigou o time a correr dobrado."
          }
        ],
        "feedbackNarrative": "O Conselho acreditou que o sistema estava pronto e antecipou o lançamento. A frustração foi enorme ao descobrirem que era encenação.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Gastar esforço de desenvolvedores em entregáveis descartáveis gera retrabalho e desperdiça a capacidade produtiva."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Mostrar que o produto ainda está em desenvolvimento"
        ],
        "otherConsequences": [
          "Cobranças antecipadas irreais e quebra de credibilidade"
        ]
      },
      {
        "key": "c",
        "text": "Recusar-se a comparecer à reunião do Conselho alegando que engenharia não deve prestar esclarecimentos políticos.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -10,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A ausência foi considerada descaso grave. O conselho instaurou comissão para auditar o emprego das verbas do projeto.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Prestar contas da utilização dos recursos é essencial para manter a legitimidade e o patrocínio do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Nervosismo da apresentação"
        ],
        "otherConsequences": [
          "Auditoria especial e perda de apoio político institucional"
        ]
      }
    ]
  },
  {
    "id": "change_7_mudanca_api_governo",
    "title": "Governo Federal Muda Conexão Digital de Bolsas e CPFs",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "integracao",
      "monitoramento",
      "adaptabilidade"
    ],
    "learningObjective": "Monitorar recursos virtuais externos e responder com melhorias contínuas de arquitetura.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1230 - Mudança de Integração do Gov.br. O Ministério da Educação alterou o canal digital de validação de CPFs e contas bancárias dos alunos beneficiários de auxílios com prazo de 7 dias antes do desligamento do sistema antigo, ameaçando travar o pagamento dos estudantes.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "monitorar",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Implementar camada isolada de integração atualizando o conector virtual em 48 horas com testes de contrato.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "O conector atualizado funcionou com precisão. Nenhuma outra tela do sistema quebrou e as bolsas foram pagas rigorosamente no prazo.",
        "pmbokConcept": "Melhoria contínua",
        "learnings": [
          "Monitorar recursos virtuais e atualizar pontos de integração de forma controlada assegura resiliência operacional contínua."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Atraso no pagamento de bolsas a milhares de estudantes"
        ],
        "otherConsequences": [
          "Arquitetura robusta contra futuras alterações governamentais"
        ]
      },
      {
        "key": "b",
        "text": "Ignorar a notificação e aguardar o desligamento do sistema antigo para verificar se a integração realmente vai falhar.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -20
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -30,
              "qualidadeProduto": -25,
              "saudeEquipe": -25,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A conexão com o sistema do governo falhou e os pagamentos de bolsas da UFC foram interrompidos."
          }
        ],
        "feedbackNarrative": "A inação resultou na paralisação dos pagamentos de bolsas. Alunos protestaram e o comitê foi advertido formalmente.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Descuidar do monitoramento de recursos externos críticos transforma variações previsíveis em emergências operacionais graves."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de desenvolvimento no ciclo atual"
        ],
        "otherConsequences": [
          "Bolsas atrasadas e protestos no campus universitário"
        ]
      },
      {
        "key": "c",
        "text": "Desistir da integração de software e contratar uma equipe temporária de digitação para registrar os CPFs manualmente no portal.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -20,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A digitação manual provocou dezenas de CPFs incorretos e pagamentos para contas erradas, gerando prejuízos.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Substituir automações tecnológicas por esforço manual repetitivo gera erros em escala e retrabalho financeiro."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço técnico de atualizar a conexão com o governo"
        ],
        "otherConsequences": [
          "Pagamentos indevidos e necessidade de auditoria financeira"
        ]
      }
    ]
  },
  {
    "id": "change_8_feedback_piloto_estudantes",
    "title": "Resultado Negativo no Piloto com Estudantes",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "piloto",
      "retrospectiva",
      "equipe",
      "aprendizado"
    ],
    "learningObjective": "Utilizar ciclos de aprendizado e retrospectivas com a equipe para adaptar o produto antes do lançamento.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "O teste piloto do novo fluxo de matrícula com 300 estudantes revelou que 75% dos alunos acharam a seleção de turmas confusa e não conseguiram visualizar choque de horários, gerando frustração nos usuários.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Marina (Design de Telas)",
    "senderInitials": "MD",
    "avatarImage": "/Personagens/Beatriz.png",
    "responsibleRole": "uxLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Realizar uma reunião de alinhamento com toda a equipe para repensar o desenho das telas em uma força-tarefa rápida de 3 dias.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A retrospectiva alinhou o time. A nova grade visual teve 98% de aprovação no teste seguinte, prevenindo falha massiva no lançamento.",
        "pmbokConcept": "Retrospectivas",
        "learnings": [
          "Retrospectivas baseadas em dados de uso permitem à equipe identificar lacunas e reorientar seu esforço coletivo para soluções eficazes."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Lançamento de sistema confuso para 40.000 alunos"
        ],
        "otherConsequences": [
          "Interface amigável e fortalecimento da maturidade de equipe"
        ]
      },
      {
        "key": "b",
        "text": "Desconsiderar o feedback dos alunos e lançar a tela inalterada para todos os 40.000 estudantes da UFC.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -35,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -20,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "Milhares de alunos matricularam-se em turmas com choque de horários, exigindo cancelamento geral."
          }
        ],
        "feedbackNarrative": "No primeiro dia de matrícula geral, milhares de alunos tiveram choque de disciplinas e o sistema precisou ser suspenso às pressas.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Ignorar defeitos apontados em testes gera refugo sistêmico e retrabalho emergencial com custos multiplicados."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo de redesign da interface"
        ],
        "otherConsequences": [
          "Cancelamento da matrícula e desgaste de imagem pública"
        ]
      },
      {
        "key": "c",
        "text": "Publicar cartilha de 60 páginas culpando os estudantes pela falta de leitura atenta das instruções de tela.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "Os estudantes criaram memes ridicularizando a equipe técnica e a cartilha foi rejeitada por toda a comunidade acadêmica.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Transferir a responsabilidade para os usuários reflete falta de transparência e mina o respeito pelo trabalho da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Ajuste no código"
        ],
        "otherConsequences": [
          "Chacota nas redes sociais e perda de confiança pública"
        ]
      }
    ]
  },
  {
    "id": "change_9_integracao_restaurante_universitario",
    "title": "Integração com Catracas do Restaurante Universitário",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "planejamento",
      "escassez",
      "competicao_projetos",
      "recursos"
    ],
    "learningObjective": "Planejar o uso de recursos técnicos sob competição de prioridades e escassez de equipe.",
    "communicationType": "email",
    "senderRole": "Pró-Reitoria de Assistência Estudantil",
    "description": "Assunto: Integração do Cartão do RU. A Pró-Reitoria de Assistência Estudantil solicita que o portal acadêmico assuma o controle de acesso e saldo das catracas do Restaurante Universitário (RU) já na próxima semana, competindo por desenvolvedores do módulo de matrículas.",
    "domainTag": "Recursos › Planejar o Gerenciamento dos Recursos",
    "resourceType": "humano",
    "resourceProcess": "planejar",
    "senderName": "Lívia (Gerência)",
    "senderInitials": "LG",
    "avatarImage": "/Personagens/Lívia.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Documentar a dependência arquitetural e agendar a integração do RU para o próximo ciclo após a entrega de matrículas.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A gestão compreendeu a necessidade de estabilizar as matrículas primeiro. A integração foi realizada posteriormente sem sobrecarregar ninguém.",
        "pmbokConcept": "Planejamento de recursos sob escassez e competição entre projetos",
        "learnings": [
          "Gerenciar recursos em múltiplos projetos exige escalonar demandas concorrentes para evitar sobrecarga simultânea da equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Instabilidade nas catracas do RU e atraso no módulo acadêmico"
        ],
        "otherConsequences": [
          "Integração segura planejada para o momento apropriado"
        ]
      },
      {
        "key": "b",
        "text": "Improvisar conexão direta em 48 horas ligando o banco de dados do SIGAA aos leitores físicos das catracas.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "O tráfego de milhares de alunos nas catracas travou o banco do sistema acadêmico no meio de provas."
          }
        ],
        "feedbackNarrative": "No horário do almoço, o tráfego das catracas derrubou o servidor central de matrículas no meio de uma prova online.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "Integrar recursos físicos de alta intensidade sem dimensionamento adequado compromete a estabilidade de todos os demais sistemas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Demora na entrega da solicitação"
        ],
        "otherConsequences": [
          "Queda do servidor acadêmico e interrupção de aulas"
        ]
      },
      {
        "key": "c",
        "text": "Rejeitar a integração em definitivo declarando que sistemas acadêmicos não têm qualquer relação com refeições.",
        "impacts": {
          "capacidadeEntrega": -5,
          "qualidadeProduto": 0,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A recusa hostil bloqueou a evolução dos serviços digitais da universidade e gerou atrito permanente com a assistência estudantil.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "Falta de alinhamento com outras áreas institucionais enfraquece o valor estratégico e o suporte orçamentário ao projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho de planejamento de integração"
        ],
        "otherConsequences": [
          "Isolamento do portal e atrito com outros setores"
        ]
      }
    ]
  },
  {
    "id": "change_10_novo_manual_marca_ufc",
    "title": "Novo Manual de Identidade Visual da Universidade",
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "retrabalho",
      "design_system",
      "eficiencia"
    ],
    "learningObjective": "Utilizar recursos compartilhados como Design Systems para minimizar retrabalho em mudanças visuais.",
    "communicationType": "email",
    "senderRole": "Coordenadoria de Comunicação (UFC)",
    "description": "Assunto: Nova Identidade Visual Oficial. A reitoria aprovou um novo manual de marca com novas cores e fontes, exigindo atualização imediata em mais de 80 telas do novo sistema acadêmico, o que pode consumir semanas de esforço da equipe.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "Rainara (Comunicação)",
    "senderInitials": "RN",
    "avatarImage": "/Personagens/Rainara.png",
    "responsibleRole": "uxLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Atualizar tokens no Design System centralizado propagando as novas diretrizes automaticamente em todas as telas.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "O Design System propagou a nova identidade em 20 minutos com zero retrabalho manual. A equipe economizou semanas de esforço repetitivo.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Estruturar recursos virtuais reutilizáveis como Design Systems reduz o retrabalho e preserva a capacidade produtiva das equipes."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Semanas de alteração manual repetitiva tela por tela"
        ],
        "otherConsequences": [
          "Agilidade na resposta a mudanças de marca e padronização"
        ]
      },
      {
        "key": "b",
        "text": "Obrigar os desenvolvedores a abrirem centenas de arquivos para alterar códigos de cores manualmente um por um.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -15,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -10
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -10,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A tarefa manual monótona gerou inconsistências de layout e atrasou a homologação de turmas."
          }
        ],
        "feedbackNarrative": "A troca manual consumiu duas semanas inteiras, gerou telas com cores divergentes e paralisou o desenvolvimento de funcionalidades.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Desperdiçar tempo de engenharia em tarefas manuais repetitivas reduz a produtividade e esgota a motivação da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo de configurar tokens centralizados"
        ],
        "otherConsequences": [
          "Retrabalho extensivo e inconsistência visual no produto"
        ]
      },
      {
        "key": "c",
        "text": "Ignorar a portaria oficial e comunicar à Reitoria que o projeto acadêmico manterá as cores antigas indefinidamente.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "A Comunicação da UFC vetou o lançamento do portal por descumprimento das normas institucionais de publicidade.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "Recusar alinhamento com a identidade institucional compromete a coordenação com a governança e inviabiliza o lançamento."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de adaptação visual"
        ],
        "otherConsequences": [
          "Veto institucional ao lançamento e crise de governança"
        ]
      }
    ]
  }
];
