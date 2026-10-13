import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8) - Monitoramento de Recursos, Teoria das Restrições e Eficiência
 * Total: 10 Dilemas
 */
export const qualityEvents: GameEvent[] = [
  {
    "id": "quality_1_code_chaos_legado",
    "title": "A Dívida Técnica Acumulada no Módulo Central",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "debito_tecnico",
      "retrabalho",
      "recursos_humanos",
      "capacidade"
    ],
    "learningObjective": "Reconhecer que dívida técnica crônica atua como dreno contínuo sobre a capacidade produtiva da equipe.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1042 - Prioridade Crítica. Os módulos centrais de matrícula e identificação estão desorganizados e misturados. A diretoria exige uma nova integração urgente. A equipe alerta que conectar sem organizar a estrutura causará retrabalho crônico e consumirá o dobro de horas futuras.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Pausar novas entregas por um ciclo de trabalho e reorganizar a estrutura interna dos módulos críticos para estancar o desperdício contínuo de esforço.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A reorganização estrutural saneou o sistema. A nova integração ocorreu de forma limpa e o tempo de trabalho dos próximos ciclos caiu pela metade.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Dedicar esforço para sanear bases de código reduz o retrabalho futuro e restaura a capacidade produtiva das pessoas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Quedas frequentes em produção e consumo excessivo de horas"
        ],
        "otherConsequences": [
          "Capacidade sustentável recuperada para os ciclos seguintes"
        ]
      },
      {
        "key": "b",
        "text": "Entregar a integração apressada sem reorganizar a estrutura interna, assumindo o risco de retrabalho para bater a data imediata.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -25,
              "qualidadeProduto": -20,
              "saudeEquipe": -25,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A integração sem organização estrutural gerou falhas graves no sistema oficial, forçando a equipe a passar semanas apenas corrigindo defeitos."
          }
        ],
        "feedbackNarrative": "A entrega rápida foi elogiada na primeira semana, mas gerou uma enxurrada de chamados que paralisou a equipe nas semanas seguintes.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Ignorar a degradação técnica converte a capacidade produtiva do time em esforço improdutivo de combate a incêndios."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atrito inicial com a diretoria por prazo"
        ],
        "otherConsequences": [
          "Colapso em produção e esgotamento da equipe"
        ]
      },
      {
        "key": "c",
        "text": "Entregar apenas 50% das funcionalidades para cumprir o prazo e reorganizar o restante em paralelo sem isolamento.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "A divisão caótica de esforço gerou conflitos constantes no repositório e sobrecarregou os desenvolvedores seniores.",
        "pmbokConcept": "Melhoria contínua",
        "learnings": [
          "Tentativas desorganizadas de reorganização paralela sem método estruturado elevam o retrabalho em vez de eliminá-lo."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Parada total da esteira"
        ],
        "otherConsequences": [
          "Conflitos no código e desperdício de esforço"
        ]
      }
    ]
  },
  {
    "id": "quality_2_lean_gargalo_qa_swarming",
    "title": "Gargalo no Fluxo de Trabalho: Força-Tarefa para Destravar Testes",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "gargalo",
      "teoria_das_restricoes",
      "forca_tarefa",
      "qa"
    ],
    "learningObjective": "Aplicar a Teoria das Restrições e concentração de esforços da equipe para desbloquear gargalos operacionais.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "A esteira de QA está com 45 histórias acumuladas aguardando validação técnica. Enquanto isso, desenvolvedores continuam codificando novas tarefas, gerando estoque massivo de código parado e sobrecarregando a equipe de testes.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "Paulyne (Qualidade)",
    "senderInitials": "PQ",
    "avatarImage": "/Personagens/Paulyne.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Subordinar o fluxo ao gargalo: pausar novas tarefas e direcionar a equipe em uma força-tarefa conjunta para apoiar na validação e testes.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "O mutirão eliminou o estoque represado em 3 dias. Os desenvolvedores aprenderam a testar melhor e o fluxo da equipe voltou ao normal.",
        "pmbokConcept": "Teoria das restrições e gargalos",
        "learnings": [
          "Na Teoria das Restrições, produzir além da capacidade do gargalo gera desperdício; recursos disponíveis devem ajudar a destravar a restrição."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Estoque invisível de defeitos e colapso do time de QA"
        ],
        "otherConsequences": [
          "Nivelamento de competências e desbloqueio do fluxo"
        ]
      },
      {
        "key": "b",
        "text": "Manter os programadores produzindo novas telas para exibir volume aparente de trabalho e exigir horas extras da equipe de testes.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": -25,
          "saudeEquipe": -30,
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
            "narrative": "A analista de QA adoeceu por estafa e 15 histórias com defeitos graves chegaram aos usuários finais."
          }
        ],
        "feedbackNarrative": "A analista de testes entrou em burnout. Sob pressão extrema, defeitos críticos passaram para o ambiente de produção.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Superutilizar desenvolvedores sem considerar a capacidade do gargalo causa acúmulo de trabalho inacabado e exaustão."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Queda no volume aparente de tarefas entregues"
        ],
        "otherConsequences": [
          "Burnout da equipe de testes e falhas em produção"
        ]
      },
      {
        "key": "c",
        "text": "Contratar 5 freelancers externos avulsos sem onboarding para testarem os pacotes de software durante o fim de semana.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "Sem compreender as regras acadêmicas, os terceirizados aprovaram fluxos incorretos e consumiram verba de infraestrutura.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Inserir recursos externos sem capacitação adequada em processos críticos gera custos extras e retrabalho de validação."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Alocação de desenvolvedores internos em testes"
        ],
        "otherConsequences": [
          "Desperdício financeiro e testes sem eficácia"
        ]
      }
    ]
  },
  {
    "id": "quality_3_capacidade_nuvem_pico",
    "title": "Capacidade de Nuvem Insuficiente no Pico de Matrícula",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "nuvem",
      "planejamento",
      "capacidade_elastica"
    ],
    "learningObjective": "Planejar o dimensionamento e contingenciamento de recursos virtuais sob escassez orçamentária.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1180 - Dimensionamento de Infraestrutura. O dimensionamento de instâncias virtuais em nuvem para a semana de matrículas está no limite orçamentário. Se a demanda superar as previsões, os servidores virtuais cairão, paralisando o acesso de 40 mil alunos.",
    "domainTag": "Recursos › Planejar o Gerenciamento dos Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "planejar",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Configurar aumento automático da capacidade dos servidores nos horários de pico, com limite orçamentário seguro e filas de espera.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A elasticidade controlada absorveu o pico com perfeição. O sistema aguentou 38 mil requisições simultâneas sem extrapolar a verba orçada.",
        "pmbokConcept": "Planejamento de recursos sob escassez e competição entre projetos",
        "learnings": [
          "Planejar recursos virtuais sob restrição financeira exige combinar elasticidade sob demanda com mecanismos seguros de contingência."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Queda de servidores virtuais e estouro de orçamento"
        ],
        "otherConsequences": [
          "Estabilidade com custos previsíveis e controlados"
        ]
      },
      {
        "key": "b",
        "text": "Manter instâncias virtuais estáticas subdimensionadas para não gastar verba e torcer para a demanda ser baixa.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -30,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -30,
              "qualidadeProduto": -30,
              "saudeEquipe": -25,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "No primeiro dia de matrícula, as instâncias estáticas esgotaram memória e os servidores colapsaram por 8 horas."
          }
        ],
        "feedbackNarrative": "Os servidores virtuais caíram em 4 minutos de matrículas. A equipe precisou passar a noite reiniciando containers travados.",
        "pmbokConcept": "Antecipação de escassez ou excedente",
        "learnings": [
          "Falhar na antecipação de escassez de recursos virtuais críticos conduz a interrupções graves e retrabalho emergencial."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Consumo de orçamento com instâncias elásticas"
        ],
        "otherConsequences": [
          "Colapso público do portal acadêmico e desgaste extremo"
        ]
      },
      {
        "key": "c",
        "text": "Contratar instâncias gigantescas de capacidade ilimitada sem teto de gastos estourando toda a verba do ano.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "Os servidores aguentaram, mas a fatura de nuvem consumiu o orçamento de bolsas e contratações do semestre seguinte.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "Provisionar recursos tecnológicos sem coordenação financeira inviabiliza o custeio futuro dos recursos humanos do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Risco técnico de sobrecarga"
        ],
        "otherConsequences": [
          "Rombo orçamentário e cancelamento de bolsas futuras"
        ]
      }
    ]
  },
  {
    "id": "quality_4_sonarqube_debito_tecnico",
    "title": "A Bola de Neve: Acúmulo de Falhas Não Corrigidas",
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "prevencao_falhas",
      "qualidade",
      "retrabalho"
    ],
    "learningObjective": "Utilizar ferramentas virtuais de monitoramento contínuo para conter a degradação e o retrabalho técnico.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "O relatório automatizado de auditoria apontou mais de 300 falhas acumuladas e semanas de retrabalho reprimido. A equipe pede autorização para configurar checagens automáticas que impeçam a entrada de novos erros no sistema.",
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
        "text": "Configurar checagens automáticas de qualidade e destinar 20% de cada ciclo de trabalho para eliminar falhas acumuladas.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A ferramenta de verificação barrou novos defeitos e as falhas acumuladas caíram 60% em um mês. O tempo gasto corrigindo erros reduziu consideravelmente.",
        "pmbokConcept": "Melhoria contínua",
        "learnings": [
          "Integrar ferramentas virtuais de controle de qualidade automatiza a prevenção de falhas e promove melhoria contínua da equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Degradação progressiva da base de código"
        ],
        "otherConsequences": [
          "Cultura de excelência técnica e menos retrabalho futuro"
        ]
      },
      {
        "key": "b",
        "text": "Desativar a ferramenta de análise para parar de ver alertas vermelhos que supostamente atrasam as entregas.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -30,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -25
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -30,
              "qualidadeProduto": -25,
              "saudeEquipe": -25,
              "conhecimentoOrganizacional": -10
            },
            "narrative": "As vulnerabilidades não monitoradas facilitaram invasão externa que paralisou os servidores acadêmicos por dias."
          }
        ],
        "feedbackNarrative": "Desligar o monitoramento escondeu os problemas no curto prazo, mas gerou brechas que foram exploradas pouco tempo depois.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Desativar ferramentas de monitoramento para simular velocidade acumula desperdício oculto que explode adiante em falhas críticas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo corrigindo apontamentos de qualidade"
        ],
        "otherConsequences": [
          "Vulnerabilidades críticas em produção e retrabalho forçado"
        ]
      },
      {
        "key": "c",
        "text": "Paralisar todo o desenvolvimento por 3 meses para zerar 100% dos alertas de qualidade antes de qualquer nova entrega.",
        "impacts": {
          "capacidadeEntrega": -35,
          "qualidadeProduto": 15,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "A universidade congelou o projeto por ausência de entregas funcionais durante todo o trimestre acadêmico.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Desviar o uso planejado dos recursos para correções excessivas sem gerar valor de negócio compromete o patrocínio do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Alertas pendentes no código"
        ],
        "otherConsequences": [
          "Paralisia nas entregas e risco de cancelamento do projeto"
        ]
      }
    ]
  },
  {
    "id": "quality_5_designer_gargalo_toc",
    "title": "Designer Única como Gargalo Central (Teoria das Restrições)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "gargalo",
      "ux",
      "teoria_das_restricoes",
      "recursos_humanos"
    ],
    "learningObjective": "Subordinar e elevar restrições de equipe multidisciplinar aplicando a Teoria das Restrições a papéis escassos.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "Canal #fluxo-trabalho - Todas as telas de 4 módulos simultâneos dependem da validação de uma única designer de telas. Ela está sobrecarregada trabalhando 12 horas por dia, enquanto outros profissionais da equipe ficam parados esperando modelos aprovados.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "Marina (Design de Telas)",
    "senderInitials": "MD",
    "avatarImage": "/Personagens/Beatriz.png",
    "responsibleRole": "uxLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Elevar o gargalo: padronizar componentes no Design System e capacitar desenvolvedores para montar telas padronizadas.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A designer focou apenas nos fluxos novos mais complexos. Os desenvolvedores ganharam autonomia e a sobrecarga individual foi desfeita.",
        "pmbokConcept": "Teoria das restrições e gargalos",
        "learnings": [
          "Na Teoria das Restrições, deve-se elevar a capacidade do recurso restritivo por meio de padrões e capacitação dos demais membros."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Esgotamento da designer e paralisia no desenvolvimento"
        ],
        "otherConsequences": [
          "Autonomia dos desenvolvedores e fluxo de entrega contínuo"
        ]
      },
      {
        "key": "b",
        "text": "Manter a centralização e exigir que a designer trabalhe nos fins de semana para tentar desatar a fila de protótipos.",
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
            "narrative": "A designer pediu licença médica por estafa severa e as telas de 3 módulos ficaram completamente sem direção."
          }
        ],
        "feedbackNarrative": "A designer entrou em licença médica por exaustão. Todo o desenvolvimento de interface foi paralisado por falta de orientação visual.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Sobrecarregar um recurso escasso gera colapso do elemento restritivo e subsequente inatividade de toda a esteira produtiva."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo de criar biblioteca de componentes"
        ],
        "otherConsequences": [
          "Licença médica por burnout e paralisia total das telas"
        ]
      },
      {
        "key": "c",
        "text": "Eliminar o papel de design e autorizar os desenvolvedores a programarem a interface sem qualquer critério visual ou de usabilidade.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -35,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O sistema virou uma colcha de retalhos com menus ilegíveis. Estudantes não conseguiram concluir matrículas sem ligar para o suporte.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Descartar competências essenciais em vez de desenvolvê-las e apoiá-las destrói a usabilidade e o valor do entregável."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de coordenação com design"
        ],
        "otherConsequences": [
          "Interface confusa e enxurrada de chamados no suporte"
        ]
      }
    ]
  },
  {
    "id": "quality_6_retrabalho_historicos",
    "title": "Retrabalho Crônico no Gerador de Históricos",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "retrabalho",
      "recursos_virtuais",
      "automacao",
      "eficiencia"
    ],
    "learningObjective": "Eliminar retrabalho crônico automatizando suítes de testes para proteger a capacidade produtiva da equipe.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1195 - Retrabalho Recorrente. O gerador de relatórios e históricos escolares quebrou pela quarta vez após pequenas alterações de formato. A equipe gasta 2 dias a cada ciclo consertando o mesmo módulo, desperdiçando tempo útil de trabalho.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "monitorar",
    "senderName": "Kenedy (Programador)",
    "senderInitials": "KB",
    "avatarImage": "/Personagens/Kenedy.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Separar o módulo de relatórios e criar testes automáticos que verifiquem o funcionamento a cada alteração, erradicando o retrabalho.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 25,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "Os testes automatizados protegeram o módulo contra regressões. O retrabalho zerou e a equipe economizou 4 dias de desenvolvimento por mês.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "O retrabalho contínuo deve ser monitorado e eliminado com automação para assegurar a utilização eficiente das pessoas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Desperdício crônico de horas com reparos repetitivos"
        ],
        "otherConsequences": [
          "Liberação permanente de tempo da equipe para novas entregas"
        ]
      },
      {
        "key": "b",
        "text": "Continuar fazendo remendos manuais a cada ciclo sempre que o relatório quebrar, tratando o sintoma sem mexer na causa raiz.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -20,
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
            "narrative": "Os remendos manuais acumularam inconsistências e os históricos passaram a omitir notas de formandos."
          }
        ],
        "feedbackNarrative": "O módulo continuou drenando 20% do tempo de dois desenvolvedores a cada ciclo. A frustração com a repetição de tarefas aumentou.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Aceitar retrabalho recorrente sem agir drena a capacidade produtiva e gera inatividade forçada em tarefas inovadoras."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo investido em reestruturar o gerador"
        ],
        "otherConsequences": [
          "Dreno contínuo de esforço e desmotivação dos profissionais"
        ]
      },
      {
        "key": "c",
        "text": "Desativar a geração de PDFs e passar a enviar apenas relatórios em texto sem formatação por e-mail.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -30,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "Universidades do exterior recusaram os documentos por ausência de autenticidade visual, prejudicando discentes em intercâmbio.",
        "pmbokConcept": "Melhoria contínua",
        "learnings": [
          "Degradar entregáveis para evitar retrabalho técnico viola padrões de qualidade e prejudica os usuários finais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho com bibliotecas de renderização visual"
        ],
        "otherConsequences": [
          "Documentos oficiais rejeitados e prejuízo a estudantes"
        ]
      }
    ]
  },
  {
    "id": "quality_7_corte_testes_fim_sprint",
    "title": "Fim do Ciclo de Entregas: Cortar Testes para Bater Metas?",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "ciclo_entregas",
      "compromisso",
      "propriedade_compartilhada",
      "recursos_humanos"
    ],
    "learningObjective": "Manter a propriedade compartilhada da qualidade e proteger a equipe contra dívidas operacionais futuras.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Faltam 2 dias para o fechamento do ciclo de trabalho e o trancamento de matrícula está pronto na lógica, mas sem testes de validação. Alguns membros sugerem marcar a tarefa como concluída para bater a meta aparente, adiando os testes para depois.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Paulyne (Qualidade)",
    "senderInitials": "PQ",
    "avatarImage": "/Personagens/Paulyne.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Assumir com transparência que a tarefa não está totalmente pronta e transferi-la para o próximo ciclo com validação e testes completos.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A postura íntegra fortaleceu o compromisso coletivo. No ciclo seguinte a funcionalidade foi entregue com testes completos e zero falhas no sistema oficial.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Equipes com propriedade compartilhada protegem a integridade do trabalho, recusando atalhos que gerem débitos futuros."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Lançamento de código defeituoso e incidentes em produção"
        ],
        "otherConsequences": [
          "Cultura sólida de responsabilidade e entregas confiáveis"
        ]
      },
      {
        "key": "b",
        "text": "Marcar o item como pronto sem testes para simular 100% de conclusão nas métricas de velocidade da equipe.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -20,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A funcionalidade de trancamento sem validação permitiu que estudantes trancassem cursos acidentalmente."
          }
        ],
        "feedbackNarrative": "A falsa sensação de meta batida escondeu falhas sérias. O módulo travou turmas em produção e exigiu correções de madrugada.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Entregar tarefas incompletas para inflar métricas imediatas gera retrabalho multiplicado e consome a capacidade futura da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Exibir pendências na reunião de fechamento do ciclo"
        ],
        "otherConsequences": [
          "Incidentes críticos em produção e perda de confiabilidade"
        ]
      },
      {
        "key": "c",
        "text": "Inserir testes vazios no código que sempre retornam verdadeiro para burlar o validador automático do repositório.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -35,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "A fraude nos testes foi descoberta na revisão de código. A confiança técnica no time foi severamente abalada.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Burlar verificações de qualidade destrói a transparência, mina a segurança psicológica e viola a integridade profissional."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Cobrança imediata pela escrita de testes"
        ],
        "otherConsequences": [
          "Quebra ética profunda e desmoralização da equipe"
        ]
      }
    ]
  },
  {
    "id": "quality_8_acessibilidade_wcag",
    "title": "Acessibilidade Digital: Capacitação para Inclusão de Usuários com Deficiência",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "acessibilidade",
      "capacitacao",
      "mentoria",
      "competencias"
    ],
    "learningObjective": "Identificar lacunas de conhecimento técnico e desenvolver competências da equipe em acessibilidade digital.",
    "communicationType": "email",
    "senderRole": "Comitê de Acessibilidade da UFC",
    "description": "Assunto: Laudo de Acessibilidade. O comitê identificou que os formulários do sistema não possuem recursos de acessibilidade, impedindo alunos cegos de usarem leitores de tela. A equipe admite que não domina as normas técnicas de acessibilidade digital.",
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
        "text": "Promover oficina prática com especialista em acessibilidade e estabelecer uma lista padrão de verificação para todas as novas telas.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 25,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "O treinamento supriu a lacuna de competência da equipe. O portal se tornou referência nacional e os estudantes com deficiência navegaram com autonomia.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Identificar lacunas de competência e capacitar a equipe técnica assegura produtos inclusivos e desenvolvimento profissional contínuo."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Exclusão de estudantes com deficiência e processos jurídicos"
        ],
        "otherConsequences": [
          "Equipe tecnicamente capacitada e reconhecimento social"
        ]
      },
      {
        "key": "b",
        "text": "Ignorar o laudo alegando que acessibilidade é responsabilidade exclusiva de órgãos de assistência estudantil.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -35,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -20
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "O Ministério Público ajuizou ação civil pública por discriminação e exigiu readequação imediata sob multa."
          }
        ],
        "feedbackNarrative": "A omissão gerou revolta no campus. O Ministério Público ajuizou ação por descumprimento legal de acessibilidade no serviço público.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Negligenciar lacunas de conhecimento e responsabilidades sociais essenciais expõe o projeto a sanções legais severas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo dedicado a aprender novas tecnologias"
        ],
        "otherConsequences": [
          "Ação judicial do Ministério Público e desgaste institucional"
        ]
      },
      {
        "key": "c",
        "text": "Adicionar um botão cosmético de contraste de tela sem alterar a estrutura semântica dos componentes de código.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -20,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O artifício superficial não resolveu os leitores de tela e foi reprovado prontamente no teste com usuários deficientes visuais.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Simulações cosméticas que não tratam a causa-raiz demonstram falta de transparência e desrespeito aos usuários finais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Reformulação profunda de componentes"
        ],
        "otherConsequences": [
          "Reprovação técnica no laudo e frustração da comunidade"
        ]
      }
    ]
  },
  {
    "id": "quality_9_testes_carga_estresse",
    "title": "Testes de Carga para o \"Pico das Matrículas\"",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "estimativa",
      "capacidade",
      "performance"
    ],
    "learningObjective": "Estimar a capacidade necessária de recursos virtuais sob condições extremas de demanda.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Faltam 3 semanas para a abertura de matrículas com previsão de 35.000 requisições simultâneas. A liderança precisa decidir se aloca 4 dias da equipe para estimar e calibrar a capacidade com testes de carga automatizados ou confia nas estimativas teóricas.",
    "domainTag": "Recursos › Estimar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "estimar",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Simular carga com 50.000 acessos virtuais para estimar a capacidade real de banco e dimensionar threads e caches.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 25,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A simulação revelou um estrangulamento de conexões que teria derrubado o sistema. Com a calibração prévia, as matrículas ocorreram com estabilidade absoluta.",
        "pmbokConcept": "Antecipação de escassez ou excedente",
        "learnings": [
          "Estimar empiricamente o comportamento de recursos virtuais sob carga antecipa escassez e protege a integridade operacional."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Queda generalizada do sistema em horário de pico"
        ],
        "otherConsequences": [
          "Estabilidade comprovada e dimensionamento preciso da infraestrutura"
        ]
      },
      {
        "key": "b",
        "text": "Abrir mão de testes de estresse para poupar dias de trabalho e confiar nas estimativas teóricas do fabricante.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -35,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -25
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -35,
              "qualidadeProduto": -35,
              "saudeEquipe": -35,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "No primeiro minuto das matrículas, a infraestrutura travou e as inscrições precisaram ser adiadas em uma semana."
          }
        ],
        "feedbackNarrative": "No momento do pico, a infraestrutura virtual travou com 20% do volume esperado. As matrículas tiveram que ser suspensas por uma semana.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Desvios entre a estimativa teórica e o uso real de recursos em momentos de alta concorrência geram falhas catastróficas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço em preparar roteiros de teste de carga"
        ],
        "otherConsequences": [
          "Paralisação geral e suspensão das matrículas da universidade"
        ]
      },
      {
        "key": "c",
        "text": "Executar a bateria de testes de estresse diretamente contra o banco de produção durante horário de expediente letivo.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -30,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O teste de carga derrubou o servidor onde professores lançavam notas e causou perda de sessões ativas no campus.",
        "pmbokConcept": "Análise de alternativas na estimativa",
        "learnings": [
          "Avaliar alternativas de estimativa de capacidade exige planejar ambientes isolados para não impactar operações reais em andamento."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo de ambiente isolado de homologação"
        ],
        "otherConsequences": [
          "Queda de produção em horário comercial e perda de dados de usuários"
        ]
      }
    ]
  },
  {
    "id": "quality_10_vulnerabilidade_sql_injection",
    "title": "Vulnerabilidade Crítica: Brecha de Segurança no Banco de Dados de Alunos",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "seguranca",
      "treinamento",
      "capacitacao",
      "recursos_humanos"
    ],
    "learningObjective": "Capacitar a equipe em práticas de segurança da informação e mentoria para evitar brechas críticas de acesso a dados.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1250 - Alerta de Segurança. Foi detectada uma brecha crítica de segurança na busca de disciplinas, permitindo que invasores extraiam senhas e dados confidenciais de alunos. O incidente evidenciou que os novos membros da equipe não receberam orientação sobre práticas de segurança.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Geraldo (Auditoria)",
    "senderInitials": "GA",
    "avatarImage": "/Personagens/Geraldo.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Corrigir as consultas com parâmetros e conduzir mentoria de segurança e revisão por pares em todo o código.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": 30,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A mentoria elevou a maturidade técnica da equipe. Consultas seguras foram padronizadas e a varredura subsequente aprovou o sistema com nota máxima.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Investir em mentoria técnica e desenvolvimento de competências previne falhas de segurança recorrentes na base de código."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Vazamento de credenciais e invasão de banco de dados"
        ],
        "otherConsequences": [
          "Equipe capacitada em segurança e software blindado"
        ]
      },
      {
        "key": "b",
        "text": "Adiar a correção e o treinamento para o ano seguinte porque \"ninguém teria interesse em hackear o sistema acadêmico\".",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -35,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -30
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -35,
              "qualidadeProduto": -35,
              "saudeEquipe": -35,
              "conhecimentoOrganizacional": -30
            },
            "narrative": "A falha foi explorada publicamente e dados de servidores vazaram na internet, exigindo auditoria externa."
          }
        ],
        "feedbackNarrative": "A falha foi explorada em menos de 10 dias. Dados de servidores vazaram e o comitê foi submetido a processo administrativo.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Ignorar defeitos conhecidos multiplica o retrabalho emergencial com investigações forenses e reparos desesperados."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pausa técnica no ciclo de entregas"
        ],
        "otherConsequences": [
          "Vazamento massivo de senhas e processos administrativos"
        ]
      },
      {
        "key": "c",
        "text": "Desativar a busca de disciplinas para não ter que treinar a equipe nem corrigir as brechas no banco de dados.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -25,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "A remoção da funcionalidade tornou o sistema impraticável para os estudantes, gerando reclamações generalizadas.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Suprimir funcionalidades em vez de capacitar os responsáveis técnicos denota fuga de responsabilidades e enfraquece o time."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de treinamento técnico"
        ],
        "otherConsequences": [
          "Péssima usabilidade e descontentamento dos usuários"
        ]
      }
    ]
  }
];
