import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8) - Tailoring, Operações de Equipe e Eficiência de Recursos
 * Total: 10 Dilemas
 */
export const tailoringEvents: GameEvent[] = [
  {
    "id": "tailoring_1_lean_desperdicio_adm",
    "title": "Excesso de Burocracia Administrativa (Lean)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "burocracia",
      "lean",
      "processos",
      "recursos_humanos"
    ],
    "learningObjective": "Identificar e mitigar processos burocráticos que causam desperdício de tempo e esforço da equipe.",
    "communicationType": "email",
    "senderRole": "PMO Universitário",
    "description": "Assunto: Relatórios Diários em PDF. A diretoria exige relatórios de status em PDF com 20 páginas todos os dias de cada desenvolvedor. O time está gastando quase 2 horas diárias preenchendo tabelas duplicadas, reduzindo a eficiência e o tempo útil dos recursos humanos.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "PMO Universitário",
    "senderInitials": "PM",
    "avatarImage": "/Personagens/Lívia.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Substituir os relatórios manuais por dashboards integrados com radiadores de informação e métricas em tempo real.",
        "impacts": {
          "capacidadeEntrega": 20,
          "qualidadeProduto": 0,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "A diretoria adorou a transparência em tempo real. A equipe recuperou quase 10 horas semanais de desenvolvimento focado sem desperdício burocrático.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Desperdícios de tempo da equipe que não agregam valor ao produto devem ser eliminados com radiadores de informação e transparência."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Burnout burocrático e queda de produtividade"
        ],
        "otherConsequences": [
          "Maior alinhamento com a diretoria por meio de métricas transparentes"
        ]
      },
      {
        "key": "b",
        "text": "Cumprir a exigência criando um turno administrativo onde todos param de programar às 16h para redigir relatórios.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": 0,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": 0
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -5,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A rotina de relatórios manuais drenou a energia da equipe e atrasou entregas prioritárias da release."
          }
        ],
        "feedbackNarrative": "A moral despencou. A esteira de entregas foi paralisada pela sobrecarga burocrática imposta sobre as horas de trabalho do time.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Submissão passiva a processos burocráticos suga a capacidade produtiva e desengaja a equipe de desenvolvimento técnica."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conflito imediato com o PMO"
        ],
        "otherConsequences": [
          "Perda drástica de ritmo produtivo e entregas atrasadas"
        ]
      },
      {
        "key": "c",
        "text": "Alocar um analista administrativo exclusivamente para entrevistar a equipe o dia todo e consolidar planilhas para a gestão.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -5,
          "saudeEquipe": -5,
          "conhecimentoOrganizacional": -5
        },
        "feedbackNarrative": "O analista passou o dia interrompendo os desenvolvedores no meio das tarefas. Os relatórios gerados ficaram inconsistentes.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Adicionar intermediários sem simplificar a causa-raiz apenas adiciona ruído de comunicação e desperdício de esforço humano."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho manual direto dos seniores"
        ],
        "otherConsequences": [
          "Gastos desnecessários e interrupções frequentes da equipe"
        ]
      }
    ]
  },
  {
    "id": "tailoring_2_trabalho_pmo",
    "title": "Controle Administrativo Excessivo de Horas",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "processos",
      "desperdicio",
      "recursos_humanos",
      "produtividade"
    ],
    "learningObjective": "Adaptar processos de controle gerencial sem gerar sobrecarga administrativa desnecessária sobre a equipe.",
    "communicationType": "email",
    "senderRole": "Diretor de TI",
    "description": "Assunto: Diretriz de Apontamento de Horas. O novo Diretor de TI envia portaria obrigando o time técnico a preencher planilhas com 15 categorias de horas manuais para \"aumentar o controle financeiro\", gerando atrito e desperdício de tempo produtivo.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "humano",
    "resourceProcess": "monitorar",
    "senderName": "Prof. Cláudio TI",
    "senderInitials": "PC",
    "avatarImage": "/Personagens/Professor.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Automatizar o acompanhamento do esforço através dos registros de tarefas concluídas no sistema de gestão, eliminando planilhas manuais da rotina da equipe.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 10,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "A diretoria obteve métricas precisas sem exigir trabalho braçal repetitivo dos desenvolvedores. A equipe manteve o foco na construção das funcionalidades.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "A adaptação contínua de processos deve focar em reduzir desperdícios e proteger a capacidade produtiva das pessoas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Revolta da equipe e falsificação de dados em planilhas"
        ],
        "otherConsequences": [
          "Visibilidade confiável sobre o esforço real gasto"
        ]
      },
      {
        "key": "b",
        "text": "Acatar integralmente a portaria e penalizar membros da equipe que esquecerem de registrar frações diárias de 15 minutos.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -10,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": 0
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -10,
              "qualidadeProduto": -10,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "O clima de desconfiança generalizou-se e dois desenvolvedores seniores começaram a procurar vagas externas."
          }
        ],
        "feedbackNarrative": "Os desenvolvedores passaram a inventar categorias de horas só para cumprir a burocracia. O clima virou de desconfiança e vigilância contínua.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Impor microgerenciamento de horas eleva o estresse da equipe sem gerar ganhos reais de produtividade."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Confronto com a nova diretoria"
        ],
        "otherConsequences": [
          "Queda profunda de moral e perda de produtividade"
        ]
      },
      {
        "key": "c",
        "text": "Ignorar solenemente o comunicado da diretoria e instruir a equipe a não responder aos e-mails de cobrança da chefia.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": 0,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A diretoria congelou a liberação de bolsas para novos integrantes por considerar o time insubordinado e desalinhado com a universidade.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "Ignorar governança institucional gera retaliações orçamentárias que impactam diretamente a alocação de recursos da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Burocracia no curto prazo"
        ],
        "otherConsequences": [
          "Bloqueio orçamentário de novas bolsas de desenvolvimento"
        ]
      }
    ]
  },
  {
    "id": "tailoring_3_estimativa_bottomup_vs_analogia",
    "title": "Estimativa Bottom-Up vs. por Analogia na Migração",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "estimativa",
      "bottom_up",
      "analogia",
      "recursos_humanos"
    ],
    "learningObjective": "Selecionar técnicas adequadas de estimativa de esforço e recursos técnicos para migração crítica.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Canal #planejamento-sigaa - A diretoria exige uma estimativa de esforço em 2 horas para migrar o módulo legado de notas, sugerindo usar dados por analogia do vestibular. A equipe técnica defende uma estimativa bottom-up para decompor as dependências e evitar surpresas.",
    "domainTag": "Recursos › Estimar Recursos",
    "resourceType": "humano",
    "resourceProcess": "estimar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Negociar um spike técnico de 1 dia para estimativa bottom-up detalhada, identificando esforço real e dependências.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "O spike revelou dezenas de procedimentos legados ocultos. A estimativa resultante foi realista e evitou que a equipe fosse pega de surpresa.",
        "pmbokConcept": "Estimativa bottom-up de recursos",
        "learnings": [
          "Estimativas bottom-up decompõem atividades complexas, assegurando dimensionamento correto de capacidade e menos surpresas operacionais."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Subdimensionamento de esforço e sobrecarga oculta"
        ],
        "otherConsequences": [
          "Alinhamento técnico sólido e base confiável para o cronograma"
        ]
      },
      {
        "key": "b",
        "text": "Entregar a estimativa superficial por analogia em 30 minutos para agradar a diretoria sem investigar o código.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": -20,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -15,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A migração subestimada estourou em dezenas de tabelas não mapeadas, exigindo horas extras forçadas de todo o time."
          }
        ],
        "feedbackNarrative": "A diretoria adorou a rapidez inicial, mas no meio da execução descobriu-se que o módulo de notas era quatro vezes mais complexo que o vestibular.",
        "pmbokConcept": "Estimativa análoga e paramétrica",
        "learnings": [
          "Aplicar analogia superficial a componentes arquiteturais distintos gera distorções graves de estimativa e esgotamento da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pressão imediata da diretoria por respostas rápidas"
        ],
        "otherConsequences": [
          "Retrabalho severo e estouro inevitável de prazos"
        ]
      },
      {
        "key": "c",
        "text": "Travar todo o desenvolvimento por três semanas para montar uma planilha exaustiva de cada linha de código legado.",
        "impacts": {
          "capacidadeEntrega": -30,
          "qualidadeProduto": 10,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": 5
        },
        "feedbackNarrative": "O time gastou semanas refinando linhas teóricas enquanto as entregas urgentes pararam completamente. A diretoria questionou a paralisia do projeto.",
        "pmbokConcept": "Análise de alternativas na estimativa",
        "learnings": [
          "Paralisar a esteira inteira por preciosismo de estimativa consome recursos preciosos sem antecipar entregas concretas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Incertezas microscópicas no planejamento"
        ],
        "otherConsequences": [
          "Paralisia por análise e desperdício de capacidade de entrega"
        ]
      }
    ]
  },
  {
    "id": "tailoring_4_reunioes_excessivas",
    "title": "Excesso de Reuniões e Sobrecarga de Comunicação",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "reunioes",
      "comunicacao",
      "recursos_humanos",
      "foco"
    ],
    "learningObjective": "Otimizar canais de comunicação e acordos de trabalho para proteger o tempo de foco da equipe.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Canal #geral - Desenvolvedores relatam que têm mais de 4 horas de reuniões diárias síncronas entre alinhamentos e comitês. Ninguém consegue focar em desenvolver código, e a capacidade de entrega da equipe está desabando por fragmentação da atenção.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Adotar comunicação assíncrona, fixar bloco livre de reuniões e restringir rituais síncronos a 15 minutos diários.",
        "impacts": {
          "capacidadeEntrega": 20,
          "qualidadeProduto": 10,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "Com blocos de foco contínuo e rituais objetivos, a produtividade dobrou e a sensação de exaustão mental diminuiu radicalmente.",
        "pmbokConcept": "Team charter e operações da equipe",
        "learnings": [
          "Acordos de equipe e canais assíncronos protegem o tempo de dedicação profunda e previnem o esgotamento por excesso de reuniões."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Fadiga de reuniões e perda de prazos técnicos"
        ],
        "otherConsequences": [
          "Fluxo de desenvolvimento contínuo e maior satisfação"
        ]
      },
      {
        "key": "b",
        "text": "Manter todas as reuniões e solicitar que o time compense as horas de desenvolvimento à noite em regime extraordinário.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -10,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": 0
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
            "narrative": "A sobrecarga crônica de reuniões somada a noites extras provocou estafa e licenças médicas."
          }
        ],
        "feedbackNarrative": "Os desenvolvedores ficaram esgotados. A taxa de erros no código disparou e duas pessoas ameaçaram abandonar o projeto.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Compensar ineficiências de gestão com horas extras noturnas destrói o bem-estar e a sustentabilidade da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Confronto com gestores que adoram reuniões"
        ],
        "otherConsequences": [
          "Burnout acelerado e aumento exponencial de defeitos"
        ]
      },
      {
        "key": "c",
        "text": "Cancelar sumariamente todas as reuniões e alinhamentos técnicos, deixando cada desenvolvedor trabalhar isolado.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -20,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -25
        },
        "feedbackNarrative": "Sem alinhamentos, cada pessoa seguiu em uma direção oposta. Surgiram componentes duplicados e incompatíveis no repositório.",
        "pmbokConcept": "Visão e objetivos compartilhados",
        "learnings": [
          "Eliminar alinhamentos por completo destrói o entendimento compartilhado e fragmenta os objetivos da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo gasto em conversas de alinhamento"
        ],
        "otherConsequences": [
          "Perda de visão compartilhada e integrações quebradas"
        ]
      }
    ]
  },
  {
    "id": "tailoring_5_team_charter_silos",
    "title": "Equipe em Silos: Team Charter e Acordos de Convivência",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "silos",
      "team_charter",
      "colaboracao",
      "ux_dev"
    ],
    "learningObjective": "Construir propriedade compartilhada e acordos de trabalho entre equipes de design e engenharia.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "Canal #design-dev - Os responsáveis pela lógica interna do sistema e a equipe de design de telas estão trabalhando isolados em áreas separadas. Modelos de tela são desenhados sem avaliar a viabilidade prática e o sistema final fica diferente do planejado, gerando disputas e retrabalho constante.",
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
        "text": "Facilitar workshop conjunto para criar um Team Charter com acordos de trabalho e definição de pronto compartilhada.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "O Team Charter definiu cerimônias de pareamento semanal e critérios claros de transição. As equipes passaram a colaborar como um único time.",
        "pmbokConcept": "Team charter e operações da equipe",
        "learnings": [
          "Acordos de trabalho explícitos (Team Charter) alinham expectativas, dissolvem silos e estabelecem colaboração efetiva entre papéis multidisciplinares."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Atritos interpessoais crônicos e retrabalho de telas"
        ],
        "otherConsequences": [
          "Cultura de respeito mútuo e integração fluida entre design e código"
        ]
      },
      {
        "key": "b",
        "text": "Estabelecer que o time de UX só passa especificações via chamados formais sem reuniões diretas com desenvolvedores.",
        "impacts": {
          "capacidadeEntrega": -15,
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
            "narrative": "A formalização burocrática aumentou a distância entre UX e dev, duplicando o número de tickets de ajuste."
          }
        ],
        "feedbackNarrative": "A burocratização formal aprofundou a divisão entre as equipes. Tickets passaram a ser respondidos com frieza e lentidão.",
        "pmbokConcept": "Resolução de problemas e conflitos",
        "learnings": [
          "Isolar áreas em canais de chamados formais cristaliza silos e impede a resolução colaborativa de problemas da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Discussões acaloradas no canal aberto"
        ],
        "otherConsequences": [
          "Aprofundamento de barreiras culturais e hostilidade velada"
        ]
      },
      {
        "key": "c",
        "text": "Instruir os desenvolvedores a ignorarem o protótipo de UX e codificarem a interface conforme conveniência do banco.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "A interface ficou confusa para os usuários finais e os designers se sentiram desrespeitados e desmotivados no projeto.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Desconsiderar contribuições especializadas destrói a propriedade compartilhada e afeta a integridade do produto final."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de alinhar código com o protótipo visual"
        ],
        "otherConsequences": [
          "Desengajamento profundo da equipe de design e experiência do usuário deficiente"
        ]
      }
    ]
  },
  {
    "id": "tailoring_6_homologacao_design",
    "title": "Ociosidade Forçada por Homologação Centralizada de UX",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "fluxo",
      "gargalo",
      "ux",
      "ociosidade"
    ],
    "learningObjective": "Mitigar gargalos e inatividade de desenvolvedores capacitando a equipe com padrões e delegação.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "Canal #design - Toda entrega de tela precisa da validação formal individual da coordenadora de design. Três profissionais de interface estão com tarefas prontas paradas e sem novas atribuições, gerando ociosidade involuntária da equipe.",
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
        "text": "Capacitar a equipe em um padrão visual comum com critérios claros de autoavaliação, liberando a coordenadora para os casos mais complexos.",
        "impacts": {
          "capacidadeEntrega": 20,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A fila de aprovação zerou. Os desenvolvedores aprenderam os princípios do Design System e a coordenadora focou em melhorias estruturais.",
        "pmbokConcept": "Empoderamento, delegação e autonomia",
        "learnings": [
          "Delegar validações rotineiras por meio de diretrizes claras elimina tempo ocioso e desenvolve as competências técnicas da equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Bloqueios no fluxo de trabalho e atraso nas entregas"
        ],
        "otherConsequences": [
          "Agilidade no fluxo de homologação e maturidade compartilhada"
        ]
      },
      {
        "key": "b",
        "text": "Manter a fila centralizada de aprovação e mandar os profissionais adiantarem tarefas aleatórias sem desenho definido.",
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
              "capacidadeEntrega": -15,
              "qualidadeProduto": -10,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "O código adiantado sem aprovação gerou telas fora de padrão que precisaram ser reconstruídas do zero."
          }
        ],
        "feedbackNarrative": "Os desenvolvedores criaram componentes improvisados que violavam a acessibilidade. A fila de revisão duplicou de tamanho.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Ocupar pessoas com trabalho sem direção para disfarçar ociosidade gera retrabalho massivo e desperdício de esforço."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Aparência imediata de time parado"
        ],
        "otherConsequences": [
          "Retrabalho severo e despadronização de interface"
        ]
      },
      {
        "key": "c",
        "text": "Eliminar qualquer validação de design e publicar telas diretamente em produção sem critérios de consistência.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -30,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "Telas com botões sobrepostos e fontes ilegíveis foram para o ar, gerando avalanche de reclamações de estudantes e professores.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Eliminar controles de qualidade sem maturidade processual resulta em refugo de código e retrabalho desastroso."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de revisão"
        ],
        "otherConsequences": [
          "Reclamações públicas e retrabalho emergencial"
        ]
      }
    ]
  },
  {
    "id": "tailoring_7_deploy_manual",
    "title": "Atualização Manual Noturna vs Automação de Publicação",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "ci_cd",
      "automacao",
      "recursos_virtuais",
      "burnout"
    ],
    "learningObjective": "Adquirir e implementar recursos virtuais automatizados para liberar a equipe de tarefas exaustivas.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1042 - As atualizações do novo SIGAA são feitas manualmente às 23h de sexta-feira, exigindo três profissionais acordados de madrugada. Erros manuais de digitação travam o sistema todo fim de semana e geram exaustão crônica da equipe.",
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
        "text": "Implantar uma ferramenta automatizada de publicação com testes e retorno automático à versão anterior em caso de erro, eliminando o trabalho manual noturno.",
        "impacts": {
          "capacidadeEntrega": 20,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "As atualizações passaram a durar 4 minutos em horário normal de trabalho com zero intervenção manual desgastante. A equipe dorme tranquila nos fins de semana.",
        "pmbokConcept": "Melhoria contínua",
        "learnings": [
          "Substituir intervenções manuais exaustivas por ferramentas virtuais automatizadas eleva a confiabilidade e preserva a saúde da equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Erros humanos noturnos e esgotamento da equipe de infraestrutura"
        ],
        "otherConsequences": [
          "Processo de entrega previsível e fim do trabalho extraordinário aos fins de semana"
        ]
      },
      {
        "key": "b",
        "text": "Manter as atualizações manuais noturnas e instituir escala rotativa obrigatória para que ninguém reclame sozinho das madrugadas.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -10,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": 0
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -10,
              "qualidadeProduto": -15,
              "saudeEquipe": -15,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "Um erro de digitação na atualização manual de sexta corrompeu o cadastro de turmas e manteve três pessoas trabalhando no domingo."
          }
        ],
        "feedbackNarrative": "A rotação apenas distribuiu a insatisfação igualmente entre todos. Erros manuais continuaram derrubando os servidores.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Rotacionar tarefas degradantes e propensas a falhas não soluciona a causa-raiz e espalha a desmotivação pelo time."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo inicial de configurar ferramenta de automação"
        ],
        "otherConsequences": [
          "Permanência de falhas críticas e descontentamento generalizado"
        ]
      },
      {
        "key": "c",
        "text": "Fazer as atualizações manuais diretamente no meio do expediente comercial na segunda-feira sem servidor de testes prévio.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -25,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "O servidor reiniciou durante o horário de pico e derrubou o sistema de matrículas. A Reitoria exigiu explicações imediatas.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Ignorar processos seguros de atualização do sistema gera indisponibilidade crítica e retrabalho de suporte em larga escala."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho noturno na sexta-feira"
        ],
        "otherConsequences": [
          "Indisponibilidade pública e crise institucional com usuários"
        ]
      }
    ]
  },
  {
    "id": "tailoring_8_equipe_virtual_colaboracao",
    "title": "Equipe Virtual Distribuída e Baixa Colaboração",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "equipes_virtuais",
      "colaboracao",
      "engajamento",
      "comunicacao"
    ],
    "learningObjective": "Fortalecer a colaboração e o sentimento de pertencimento em equipes distribuídas e remotas.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "Canal #geral - Metade dos desenvolvedores e especialistas trabalha remotamente em cidades do interior do Ceará. A comunicação síncrona ruiu, tarefas ficam paradas por falta de resposta no chat e a sensação de isolamento está derrubando a moral do time.",
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
        "text": "Estruturar rituais assíncronos transparentes, coworking virtual semanal e canal aberto de suporte entre pares.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 15,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "O espaço de colaboração virtual recriou o senso de comunidade. Desenvolvedores do interior passaram a colaborar ativamente e destravar dúvidas com rapidez.",
        "pmbokConcept": "Equipes virtuais",
        "learnings": [
          "Equipes virtuais requerem acordos claros de colaboração assíncrona e espaços intencionais de convivência para manter o engajamento e a produtividade."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Desengajamento e evasão de talentos remotos"
        ],
        "otherConsequences": [
          "Coesão da equipe e fortalecimento do sentimento de pertencimento coletivo"
        ]
      },
      {
        "key": "b",
        "text": "Exigir presença física diária obrigatória no campus de Fortaleza sob ameaça de cancelamento imediato de bolsas.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -10,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -15
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
            "narrative": "Dois desenvolvedores seniores do interior pediram desligamento definitivo por incapacidade de custear transporte diário até a capital."
          }
        ],
        "feedbackNarrative": "A medida gerou revolta. Vários desenvolvedores que moravam a mais de 100 km do campus não tinham como arcar com deslocamento diário.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Impor presencialismo inflexível a equipes remotas destrói a retenção de talentos e ignora limitações reais das pessoas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Desafio de gerenciar tarefas remotas"
        ],
        "otherConsequences": [
          "Evasão de desenvolvedores experientes e perda de conhecimento técnico"
        ]
      },
      {
        "key": "c",
        "text": "Instalar aplicativo de monitoramento de cliques e webcam ativa para vigiar a jornada remota dos desenvolvedores.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -15,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A equipe sentiu-se vigiada e humilhada. A confiança foi pulverizada e as pessoas passaram a simular atividade para bater metas de cliques.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Vigilância invasiva destrói a segurança psicológica e estimula comportamentos artificiais em vez de resultados autênticos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Suposta ociosidade não comprovada"
        ],
        "otherConsequences": [
          "Clima tóxico de desconfiança e queda drástica no engajamento"
        ]
      }
    ]
  },
  {
    "id": "tailoring_9_estimativas_excessivas",
    "title": "Estimativa Excessiva vs Entrega de Valor",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "estimativa",
      "lean",
      "planejamento",
      "recursos_humanos"
    ],
    "learningObjective": "Equilibrar a precisão das técnicas de estimativa com a capacidade real de execução da equipe.",
    "communicationType": "email",
    "senderRole": "Líder Técnico",
    "description": "Mensagem do Líder Técnico: O time está gastando três dias inteiros de cada período de trabalho preenchendo planilhas de estimativas minuciosas de minutos antes de iniciar qualquer atividade prática, gerando ociosidade e atraso nas entregas reais.",
    "domainTag": "Recursos › Estimar Recursos",
    "resourceType": "humano",
    "resourceProcess": "estimar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Adotar estimativa relativa com Planning Poker e focar o esforço técnico em prototipação rápida de valor.",
        "impacts": {
          "capacidadeEntrega": 20,
          "qualidadeProduto": 10,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "A estimativa simplificada reduziu o tempo de planejamento para 2 horas por período. O time começou a produzir mais cedo com estimativas precisas o suficiente.",
        "pmbokConcept": "Análise de alternativas na estimativa",
        "learnings": [
          "Técnicas de estimativa relativa proporcionam precisão adequada sem desperdiçar dias preciosos de desenvolvimento técnico."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Paralisia por análise e desperdício de tempo da equipe"
        ],
        "otherConsequences": [
          "Maior agilidade de planejamento e foco em entregas funcionais"
        ]
      },
      {
        "key": "b",
        "text": "Aumentar a exigência para estimativas em segundos com aprovação formal de cada subtarefa antes do desenvolvimento.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -5,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": 0
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -5,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A burocracia de estimativas excessivas paralisou dois períodos consecutivos de trabalho e a liderança perdeu o controle das entregas."
          }
        ],
        "feedbackNarrative": "O tempo gasto discutindo minutos foi maior do que o tempo necessário para implementar as funcionalidades. Os desenvolvedores ficaram frustrados.",
        "pmbokConcept": "Estimativa bottom-up de recursos",
        "learnings": [
          "Levar a decomposição a níveis microscópicos além do necessário transforma estimativas em burocracia paralisante."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pequenas variações de escopo"
        ],
        "otherConsequences": [
          "Queda acentuada na capacidade de entrega e desmotivação"
        ]
      },
      {
        "key": "c",
        "text": "Abolir qualquer tipo de estimativa e deixar cada desenvolvedor escolher tarefas sem acompanhamento de capacidade.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -15,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "Sem qualquer parâmetro de esforço, o projeto ficou sem previsão de entrega e funcionalidades críticas foram deixadas para o final.",
        "pmbokConcept": "Antecipação de escassez ou excedente",
        "learnings": [
          "Abandonar completamente estimativas impede a gestão de antecipar escassez de recursos e dimensionar cronogramas com segurança."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Discussões sobre prazos na equipe"
        ],
        "otherConsequences": [
          "Incapacidade de prever datas de entrega e desorientação de escopo"
        ]
      }
    ]
  },
  {
    "id": "tailoring_10_auditoria_adaptativa",
    "title": "Auditoria de Recursos Públicos vs Agilidade da Equipe",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "auditoria",
      "compliance",
      "recursos",
      "governanca"
    ],
    "learningObjective": "Atender aos requisitos de auditoria pública adaptando evidências digitais transparentes de uso de recursos.",
    "communicationType": "email",
    "senderRole": "Auditoria Interna da UFC",
    "description": "Assunto: Notificação de Auditoria de TI. A Auditoria Interna exige relatórios impressos de uso de servidores e alocação horária dos desenvolvedores dos últimos 3 meses, ameaçando congelar o orçamento caso não receba os relatórios em 48 horas.",
    "domainTag": "Recursos › Planejar o Gerenciamento dos Recursos",
    "resourceType": "humano",
    "resourceProcess": "planejar",
    "senderName": "Geraldo (Auditoria)",
    "senderInitials": "GA",
    "avatarImage": "/Personagens/Geraldo.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Apresentar dashboards digitais de alocação de recursos e relatórios automáticos de auditoria gerados pelas ferramentas.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "Os auditores ficaram impressionados com a rastreabilidade digital moderna. A auditoria aprovou o processo e o modelo virou referência institucional.",
        "pmbokConcept": "Abordagem de recursos adaptada ao projeto (tailoring)",
        "learnings": [
          "Auditorias buscam integridade e transparência; adaptar a comprovação por meio de trilhas digitais atende aos órgãos de controle sem desperdiçar tempo humano."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Bloqueio de verbas e perda de semanas imprimindo formulários físicos"
        ],
        "otherConsequences": [
          "Modernização da governança institucional e maior respeito ao projeto"
        ]
      },
      {
        "key": "b",
        "text": "Parar todo o time de tecnologia por 4 dias para redigir planilhas retroativas e imprimir milhares de folhas.",
        "impacts": {
          "capacidadeEntrega": -30,
          "qualidadeProduto": -10,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -5
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -10,
              "saudeEquipe": -10,
              "conhecimentoOrganizacional": 0
            },
            "narrative": "A perda de 4 dias de trabalho paralisou o cronograma e gerou estresse generalizado na equipe."
          }
        ],
        "feedbackNarrative": "Milhares de folhas foram impressas às pressas. O período de entregas foi completamente perdido e os profissionais ficaram desmotivados com a tarefa burocrática.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Ceder a práticas retrógradas sem negociar soluções digitais consome a capacidade da equipe em tarefas sem valor agregado."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atrito imediato com auditores"
        ],
        "otherConsequences": [
          "Atrasos graves no cronograma e desmotivação geral"
        ]
      },
      {
        "key": "c",
        "text": "Ignorar a auditoria e responder com ironia afirmando que gestão moderna de recursos não deve explicações a órgãos de controle.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 0,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "A Auditoria Interna abriu processo administrativo e congelou as contas do projeto. O reitor precisou intervir e o comitê foi advertido formalmente.",
        "pmbokConcept": "Coordenação entre Recursos, Cronograma, Finanças e Risco",
        "learnings": [
          "A gestão de recursos em órgãos públicos exige coordenação e transparência com finanças e governança; ignorá-las compromete todo o projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho imediato de prestar contas"
        ],
        "otherConsequences": [
          "Processo administrativo e bloqueio total de recursos financeiros"
        ]
      }
    ]
  }
];
