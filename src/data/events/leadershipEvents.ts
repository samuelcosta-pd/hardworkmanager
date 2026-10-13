import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8): Liderar a Equipe
 * Foco Pedagógico: Liderança de equipe, clima seguro, desenvolvimento de competências e sustentabilidade.
 * Total: 10 Dilemas
 */
export const leadershipEvents: GameEvent[] = [
  {
    "id": "leadership_1_escudo_suporte",
    "title": "O Escudo de Desvios (Capacidade da Equipe em Risco)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "capacidade",
      "suporte",
      "aquisicao_recursos",
      "blindagem"
    ],
    "learningObjective": "Proteger a capacidade da equipe de desenvolvimento ao obter recursos alternativos para o suporte operacional.",
    "communicationType": "email",
    "senderRole": "Pró-Reitoria de Graduação",
    "description": "Assunto: Chamados de Matrícula. A Pró-Reitoria de Graduação exige que a equipe do novo SIGAA pare o desenvolvimento imediatamente para atender chamados telefônicos de alunos com dúvidas de login e redefinição de senhas.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "humano",
    "resourceProcess": "adquirir",
    "senderName": "Pró-Reitor Adjunto",
    "senderInitials": "PR",
    "avatarImage": "/Personagens/Geraldo.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Negociar a alocação emergencial de uma equipe de suporte operacional e criar um FAQ automático, blindando os desenvolvedores.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 15,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "Consumimos um pouco de esforço gerencial para estruturar o suporte, mas mantivemos o time 100% focado no código central. A moral da equipe subiu expressivamente.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Quando falta capacidade, obter recursos alternativos com riscos reconhecidos protege quem constrói o sistema e preserva o cronograma."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Burnout dos engenheiros e atraso no módulo crítico de matrículas"
        ],
        "otherConsequences": [
          "Estruturação de suporte sustentável para a universidade"
        ]
      },
      {
        "key": "b",
        "text": "Determinar que os desenvolvedores atendam os telefones ao mesmo tempo em que programam o novo sistema.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -20,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": 0
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 1,
            "impacts": {
              "capacidadeEntrega": -15,
              "qualidadeProduto": -15
            },
            "narrative": "As falhas operacionais inseridas pelos membros sobrecarregados com telefonemas de suporte na rodada anterior começaram a estourar no sistema oficial. O time precisou parar entregas para conter os problemas."
          }
        ],
        "feedbackNarrative": "A troca de contexto contínua destruiu a concentração do time. Falhas graves foram inseridas no sistema e dois profissionais experientes pediram demissão.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Interromper desenvolvedores com demandas operacionais fragmenta o foco e gera erros críticos de programação."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atrito inicial com a pró-reitoria"
        ],
        "otherConsequences": [
          "Exaustão da equipe e quebra de prazos"
        ]
      },
      {
        "key": "c",
        "text": "O Gerente de Projetos tenta atender sozinho todos os telefonemas nas madrugadas para poupar a equipe.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 0,
          "saudeEquipe": 10,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O time ficou grato, mas o Gerente entrou em colapso por exaustão e o projeto ficou sem liderança estratégica na semana mais crítica.",
        "pmbokConcept": "Liderança distribuída e centralizada",
        "learnings": [
          "Liderança heroica que centraliza esforço em vez de estruturar processos gera gargalos institucionais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Interrupção direta dos desenvolvedores"
        ],
        "otherConsequences": [
          "Desgaste pessoal insustentável do líder"
        ]
      }
    ]
  },
  {
    "id": "leadership_2_sobrecarga_burnout",
    "title": "Pressão por Horas Extras e Risco de Burnout",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "burnout",
      "sobrecarga",
      "lideranca",
      "sustentabilidade"
    ],
    "learningObjective": "Garantir ritmo sustentável de trabalho protegendo a saúde e retenção do time.",
    "communicationType": "slack",
    "senderRole": "Diretoria de TI",
    "description": "A Diretoria de TI exige que toda a equipe trabalhe 12 horas por dia, incluindo sábados e domingos no próximo mês, para compensar um atraso causado por lentidão de compras de servidores pela universidade.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Diretor de TI",
    "senderInitials": "DT",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Negociar com dados de capacidade e fatiar o escopo do lançamento, recusando horas extras predatórias e mantendo ritmo sustentável.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": 15,
          "saudeEquipe": 25,
          "conhecimentoOrganizacional": 10
        },
        "feedbackNarrative": "A liderança usou dados do burndown para provar que horas extras gerariam defeitos e retrabalho. A diretoria aceitou fatiar o escopo e o time trabalhou motivado.",
        "pmbokConcept": "Sustentabilidade na gestão de recursos",
        "learnings": [
          "Manter ritmo sustentável de trabalho protege a qualidade a longo prazo e evita rotatividade voluntária (turnover)."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Demissões em massa por burnout e código de má qualidade"
        ],
        "otherConsequences": [
          "Atrito político momentâneo com a diretoria"
        ]
      },
      {
        "key": "b",
        "text": "Acatar a ordem da diretoria e exigir que todos trabalhem nos finais de semana sob ameaça de corte de bolsas.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -25,
          "saudeEquipe": -35,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "Nas primeiras duas semanas o volume de tarefas concluídas subiu, mas logo o cansaço cobrou o preço: falhas críticas chegaram ao sistema oficial e o clima ficou insuportável.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Horas extras crônicas geram mais defeitos do que entregas reais de valor."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Confronto com a diretoria de TI"
        ],
        "otherConsequences": [
          "Colapso da saúde mental da equipe"
        ]
      },
      {
        "key": "c",
        "text": "Prometer à diretoria que o time fará as horas extras, mas orientar os desenvolvedores a fingirem que estão logados sem trabalhar.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A mentira foi descoberta quando a entrega atrasou do mesmo jeito. A credibilidade de toda a liderança foi aniquilada.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Liderança sem coragem e sem transparência destrói a confiança da equipe e dos patrocinadores."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conflito no curto prazo"
        ],
        "otherConsequences": [
          "Demissão da liderança por quebra de confiança"
        ]
      }
    ]
  },
  {
    "id": "leadership_3_saida_arquiteto_senior",
    "title": "Demissão Repentina do Arquiteto Sênior",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "turnover",
      "conhecimento",
      "lideranca",
      "gestao_crise"
    ],
    "learningObjective": "Conduzir a transição de membros-chave sem desestabilizar a equipe.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "O principal arquiteto do sistema de matrículas recebeu uma proposta irrecusável do exterior e sairá em 10 dias. Todo o conhecimento de autenticação segura e concorrência está concentrado na cabeça dele.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Instituir 10 dias de trabalho em duplas e gravação de orientações com os demais profissionais da equipe.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 15,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 30
        },
        "feedbackNarrative": "A transferência de conhecimento foi um sucesso. Os desenvolvedores pleno assumiram o módulo com confiança e a saída do sênior não parou o projeto.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Líderes transformam crises de perda de talentos em oportunidades de crescimento para os demais membros da equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Silo de conhecimento perdido e paralisação do módulo"
        ],
        "otherConsequences": [
          "Empoderamento dos desenvolvedores mais jovens"
        ]
      },
      {
        "key": "b",
        "text": "Exigir que o arquiteto programe sozinho o máximo de código possível nas madrugadas antes de ir embora.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": -20,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "Ele entregou muito código sem testes e sem documentação. No dia seguinte à sua saída, o sistema caiu e ninguém soube como reiniciar os serviços.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Código sem compartilhamento de contexto se torna dívida técnica inoperável quando o autor vai embora."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Perda de tempo ensinando outros"
        ],
        "otherConsequences": [
          "Caos na manutenção pós-saída do profissional"
        ]
      },
      {
        "key": "c",
        "text": "Tentar reter o profissional criando atritos contratuais e ameaçando reter seus certificados.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -10,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A atitude antiética gerou revolta generalizada. Toda a equipe se solidarizou com o colega e o clima de trabalho ficou tóxico.",
        "pmbokConcept": "Negociação e influência para obter recursos",
        "learnings": [
          "Relações profissionais devem ser pautadas por respeito e ética; coerção destrói a cultura organizacional."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Saída imediata"
        ],
        "otherConsequences": [
          "Processos trabalhistas e greve informal da equipe"
        ]
      }
    ]
  },
  {
    "id": "leadership_4_conflito_dev_ux",
    "title": "Guerra de Egos: Desenvolvedores vs Designers",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "conflito",
      "mediacao",
      "lideranca",
      "colaboracao"
    ],
    "learningObjective": "Mediar conflitos interdisciplinares alinhando a equipe ao propósito comum.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "A equipe de programação está ignorando os modelos de acessibilidade criados pelo time de design, alegando que \"desenho de telas é secundário e o que importa é o processamento interno rodar rápido\". O time de design ameaça parar de desenhar as telas.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Marina (Design de Telas)",
    "senderInitials": "MD",
    "avatarImage": "/Personagens/Leonara.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Conduzir um workshop conjunto com testes de usabilidade com alunos cegos e de baixa visão, estabelecendo um Design System unificado.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "Ver os alunos reais com dificuldades comoveu os desenvolvedores. Engenharia e Design uniram forças para construir um dos sistemas mais acessíveis do país.",
        "pmbokConcept": "Visão e objetivos compartilhados",
        "learnings": [
          "Conflitos entre áreas são superados conectando a equipe ao impacto real do produto na vida dos usuários."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Ruptura interna e retrabalho de interface"
        ],
        "otherConsequences": [
          "Fortalecimento da empatia e colaboração interfuncional"
        ]
      },
      {
        "key": "b",
        "text": "Dar razão total aos desenvolvedores e cortar o time de UX para acabar com as discussões.",
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
              "qualidadeProduto": -20,
              "saudeEquipe": -10
            },
            "narrative": "A notificação formal do Ministério Público e as reclamações massivas de estudantes sobre a inacessibilidade da interface forçaram um congelamento nas homologações."
          }
        ],
        "feedbackNarrative": "A interface virou uma réplica do sistema de 1995. O Ministério Público notificou a UFC por falta de acessibilidade para pessoas com deficiência.",
        "pmbokConcept": "Resolução de problemas e conflitos",
        "learnings": [
          "Descartar disciplinas vitais como design e acessibilidade cria vulnerabilidades legais e funcionais severas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Discussões em reuniões"
        ],
        "otherConsequences": [
          "Ação civil pública e rejeição dos usuários"
        ]
      },
      {
        "key": "c",
        "text": "Obrigar os desenvolvedores a implementarem 100% das ideias do UX sem direito a contestar viabilidade técnica.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": 0,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": 0
        },
        "feedbackNarrative": "Animações pesadas travaram os servidores da universidade. Os desenvolvedores ficaram ressentidos por terem seus avisos técnicos ignorados.",
        "pmbokConcept": "Team charter e operações da equipe",
        "learnings": [
          "Design excelente precisa respeitar as restrições físicas de arquitetura e infraestrutura."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Reclamação do time de design"
        ],
        "otherConsequences": [
          "Queda de performance e ressentimento técnico"
        ]
      }
    ]
  },
  {
    "id": "leadership_5_microgerenciamento_diretoria",
    "title": "Diretor no Grupo dos Desenvolvedores",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "comunicacao",
      "lideranca",
      "blindagem",
      "gestao_stakeholder"
    ],
    "learningObjective": "Estabelecer canais claros de comunicação protegendo a equipe de cobranças indevidas.",
    "communicationType": "slack",
    "senderRole": "Desenvolvedor Júnior",
    "description": "O Diretor de Administração entrou no canal informal dos desenvolvedores júnior no chat e começou a cobrar prazos de forma ríspida diretamente aos novos profissionais, gerando pânico na equipe.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Paulyne (Qualidade)",
    "senderInitials": "PQ",
    "avatarImage": "/Personagens/Paulyne.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Chamar o diretor para uma reunião individual, alinhar que as cobranças devem ser feitas via PM e criar um canal executivo de transparência.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 10,
          "saudeEquipe": 25,
          "conhecimentoOrganizacional": 5
        },
        "feedbackNarrative": "A liderança blindou os júniores com firmeza e elegância. O diretor passou a receber boletins semanais objetivos e os desenvolvedores voltaram a trabalhar em paz.",
        "pmbokConcept": "Empoderamento, delegação e autonomia",
        "learnings": [
          "Líderes de projeto estabelecem a governança de comunicação, impedindo o assédio e o desvio de hierarquia sobre membros vulneráveis."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Pânico, insegurança psicológica e demissão de júniores"
        ],
        "otherConsequences": [
          "Canal formalizado de prestação de contas com o diretor"
        ]
      },
      {
        "key": "b",
        "text": "Não fazer nada para não criar atrito com o diretor e dizer aos desenvolvedores mais jovens que \"faz parte da vida corporativa\".",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -15,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "Dois desenvolvedores talentosos pediram demissão por ansiedade. A equipe perdeu a confiança no gerente por omissão.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "A omissão do líder diante de abusos externos destrói a segurança psicológica e o engajamento da equipe."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conversa difícil com o diretor"
        ],
        "otherConsequences": [
          "Perda de talentos e clima de medo"
        ]
      },
      {
        "key": "c",
        "text": "Discutir agressivamente com o diretor publicamente no canal geral do Slack na frente de todos.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 0,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "O escândalo público virou caso de ouvidoria. O projeto foi paralisado para averiguação de conduta disciplinar.",
        "pmbokConcept": "Liderança servidora",
        "learnings": [
          "Conflitos com stakeholders devem ser resolvidos em privado com profissionalismo e dados, nunca em arenas públicas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Passividade"
        ],
        "otherConsequences": [
          "Processo administrativo disciplinar"
        ]
      }
    ]
  },
  {
    "id": "leadership_6_post_mortem_sem_culpa",
    "title": "Incidente em Produção: A \"Caça às Bruxas\"",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "cultura",
      "qualidade",
      "lideranca",
      "post_mortem"
    ],
    "learningObjective": "Promover cultura de aprendizado contínuo através de Blameless Post-Mortem.",
    "communicationType": "ticket",
    "senderRole": "Desenvolvedor Pleno",
    "description": "Ticket #1190 - Queda do Portal. Uma configuração errada subida por um desenvolvedor novato derrubou o portal de matrículas por 20 minutos. A Diretoria de TI exige o nome do responsável para aplicar punição administrativa.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Proteger o profissional, assumir a falha como sistêmica e implementar verificações automáticas no sistema para impedir que o erro se repita.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A diretoria aceitou o relatório técnico que focou no processo e não na pessoa. As travas criadas impediram 5 novos incidentes parecidos nos meses seguintes.",
        "pmbokConcept": "Retrospectivas",
        "learnings": [
          "Erros humanos são sintomas de falhas nos processos e ferramentas; culpar indivíduos esconde os problemas em vez de corrigi-los."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Cultura de medo onde a equipe esconde erros operacionais"
        ],
        "otherConsequences": [
          "Fortalecimento das travas de qualidade e testes automatizados"
        ]
      },
      {
        "key": "b",
        "text": "Entregar o nome do desenvolvedor novato para a diretoria punir e afastar o profissional.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -20,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O novato foi suspenso. Com medo de punição, toda a equipe começou a esconder erros e empurrar tarefas arriscadas uns para os outros.",
        "pmbokConcept": "Ambiente seguro e transparência sobre vieses",
        "learnings": [
          "Ambientes punitivos incentivam a ocultação de falhas, tornando o sistema muito mais frágil a longo prazo."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Desagradar a diretoria que queria um culpado"
        ],
        "otherConsequences": [
          "Ocultação crônica de falhas e desconfiança geral"
        ]
      },
      {
        "key": "c",
        "text": "Mentir dizendo que a culpa foi de uma invasão de hackers externos para não admitir o erro da equipe.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -10,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A Polícia Federal foi acionada para investigar o suposto ataque cibernético e descobriu o erro banal de configuração. A vergonha foi nacional.",
        "pmbokConcept": "Resolução de problemas e conflitos",
        "learnings": [
          "A transparência profissional é pilar inegociável da gestão ética de projetos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Admissão de erro imediato"
        ],
        "otherConsequences": [
          "Escândalo institucional e investigação policial"
        ]
      }
    ]
  },
  {
    "id": "leadership_7_reconhecimento_time",
    "title": "Apropriação de Créditos da Entrega",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "reconhecimento",
      "moral",
      "lideranca",
      "motivacao"
    ],
    "learningObjective": "Garantir visibilidade e valorização aos esforços dos membros da equipe.",
    "communicationType": "email",
    "senderRole": "Gabinete da Reitoria",
    "description": "Assunto: Lançamento do Portal. A Reitoria publicou matéria no jornal institucional comemorando o sucesso da primeira fase do SGA, mas atribuiu todos os louros exclusivamente aos diretores, omitindo o time técnico.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Reitoria da UFC",
    "senderInitials": "RE",
    "avatarImage": "/Personagens/Rainara.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Organizar uma sessão solene de encerramento com demonstração técnica aberta onde os próprios desenvolvedores e designers apresentam seu trabalho à comunidade.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 10,
          "saudeEquipe": 25,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "Os aplausos dos professores e alunos emocionaram a equipe. O reconhecimento público autêntico restaurou o orgulho e o senso de dono dos desenvolvedores.",
        "pmbokConcept": "Reconhecimento e recompensas",
        "learnings": [
          "Líderes garantem que o valor produzido pela equipe seja reconhecido, construindo senso de pertencimento e motivação intrínseca."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Ressentimento e desengajamento da equipe técnica"
        ],
        "otherConsequences": [
          "Visibilidade positiva para os talentos da universidade"
        ]
      },
      {
        "key": "b",
        "text": "Dizer aos desenvolvedores que \"é assim mesmo no serviço público\" e que não devem esperar elogios.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -5,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": 0
        },
        "feedbackNarrative": "A apatia se instalou. A equipe passou a fazer apenas o mínimo estrito do horário, sem qualquer entusiasmo ou iniciativa própria.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Desconsiderar a necessidade humana de reconhecimento gera conformismo e mediocridade na entrega."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de organizar eventos"
        ],
        "otherConsequences": [
          "Apatia crônica e perda de proatividade"
        ]
      },
      {
        "key": "c",
        "text": "Ameaçar parar o sistema caso o Reitor não publique uma retratação no jornal no dia seguinte.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -10,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "A chantagem foi vista como insubordinação grave. A liderança do projeto foi afastada temporariamente.",
        "pmbokConcept": "Visão e objetivos compartilhados",
        "learnings": [
          "Reconhecimento se constrói com pontes e visibilidade profissional, não com chantagem política."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Passividade"
        ],
        "otherConsequences": [
          "Afastamento da liderança e crise de governança"
        ]
      }
    ]
  },
  {
    "id": "leadership_8_isolamento_silos",
    "title": "Silos de Conhecimento e o \"Dev Estrela\"",
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "silos",
      "colaboracao",
      "lideranca",
      "cultura"
    ],
    "learningObjective": "Desmontar silos técnicos e incentivar a propriedade coletiva do código.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Um dos desenvolvedores mais experientes se recusa a comentar o código, não deixa ninguém revisar seus Pull Requests e diz que \"se os outros não entendem, o problema é deles\".",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Roberto (Arquitetura)",
    "senderInitials": "RA",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Estabelecer revisão conjunta obrigatória de tarefas por duas pessoas e trabalho em duplas rotativo, alinhando que a qualidade do trabalho é uma responsabilidade coletiva.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "O desenvolvedor resistiu no início, mas com a ajuda do time, o conhecimento se espalhou. O sistema deixou de ser refém de uma única pessoa.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Nenhum talento individual compensa o risco de silos de conhecimento e arrogância técnica em projetos colaborativos."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Dependência crítica de um único indivíduo (Bus Factor 1)"
        ],
        "otherConsequences": [
          "Elevação do nível técnico médio de toda a equipe"
        ]
      },
      {
        "key": "b",
        "text": "Deixar o desenvolvedor fazer tudo do jeito dele porque ele é \"rápido demais para ser atrapalhado pelos outros\".",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -20,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "O sistema virou uma caixa-preta que ninguém entendia. Quando ele tirou férias, ninguém conseguiu corrigir uma falha simples de acesso que durou 4 dias.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Permitir heróis individuais sem governança técnica cria bombas-relógio de manutenção futura."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Conflito com o desenvolvedor experiente"
        ],
        "otherConsequences": [
          "Paralisação do projeto durante a ausência do profissional"
        ]
      },
      {
        "key": "c",
        "text": "Demitir o desenvolvedor sumariamente no mesmo dia sem planejar a absorção das tarefas.",
        "impacts": {
          "capacidadeEntrega": -30,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -25
        },
        "feedbackNarrative": "A demissão sem transição deixou o módulo de notas inacabado e sem ninguém capaz de assumir de imediato.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Decisões de pessoal drásticas exigem planejamento de contingência e mitigação de impacto no projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Mau comportamento do desenvolvedor"
        ],
        "otherConsequences": [
          "Vazio técnico e atraso severo nas entregas"
        ]
      }
    ]
  },
  {
    "id": "leadership_9_capacitacao_vs_pressao",
    "title": "Capacitação Técnica vs Velocidade Imediata",
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "capacitacao",
      "lideranca",
      "longo_prazo",
      "tecnologia"
    ],
    "learningObjective": "Investir no desenvolvimento contínuo da equipe para sustentar entregas futuras.",
    "communicationType": "email",
    "senderRole": "Líder de UX",
    "description": "Assunto: Treinamento em Padrões Visuais. A equipe de telas e design pediu 1 dia de capacitação em componentes padronizados e acessíveis, mas há entregas agendadas para o fim do ciclo de trabalho.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Leonara (Design de Telas)",
    "senderInitials": "LU",
    "avatarImage": "/Personagens/Leonara.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Aprovar o dia de capacitação, ajustando a meta do ciclo e tratando o aprendizado como investimento de alto retorno.",
        "impacts": {
          "capacidadeEntrega": -5,
          "qualidadeProduto": 25,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "Com o treinamento, a equipe passou a produzir telas 40% mais rápido e sem falhas de acessibilidade nos ciclos seguintes. O investimento se pagou com folga.",
        "pmbokConcept": "Treinamento, mentoria e coaching",
        "learnings": [
          "Capacitar a equipe aumenta a velocidade e a qualidade das entregas futuras, combatendo a obsolescência técnica."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Erros primários por falta de domínio das ferramentas"
        ],
        "otherConsequences": [
          "Aumento sustentável da produtividade nos próximos ciclos de trabalho"
        ]
      },
      {
        "key": "b",
        "text": "Proibir qualquer treinamento durante o projeto, dizendo que \"quem quiser aprender deve estudar nas madrugadas em casa\".",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -20,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O time continuou usando código obsoleto e cometendo erros básicos. A sensação de desvalorização profissional desengajou a equipe.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Negar capacitação em projetos de inovação gera código antiquado e equipes desmotivadas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pausa no ciclo de trabalho atual"
        ],
        "otherConsequences": [
          "Código repleto de más práticas e evasão de desenvolvedores"
        ]
      },
      {
        "key": "c",
        "text": "Parar o projeto inteiro por 2 meses para que todos façam pós-graduação antes de continuar o sistema.",
        "impacts": {
          "capacidadeEntrega": -40,
          "qualidadeProduto": 10,
          "saudeEquipe": 0,
          "conhecimentoOrganizacional": 30
        },
        "feedbackNarrative": "A reitoria cancelou o orçamento do projeto devido à paralisação injustificável do cronograma institucional.",
        "pmbokConcept": "Escassez e excedente de recursos",
        "learnings": [
          "O aprendizado em projetos deve ser contínuo e em doses equilibradas com as entregas de valor."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Falta de conhecimento acadêmico"
        ],
        "otherConsequences": [
          "Cancelamento do contrato do projeto"
        ]
      }
    ]
  },
  {
    "id": "leadership_10_protecao_estagiarios",
    "title": "Desvio de Função dos Profissionais de Tecnologia",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    "probabilityWeight": 2,
    "tags": [
      "profissionais_ti",
      "etica",
      "lideranca",
      "mentoria"
    ],
    "learningObjective": "Proteger a alocação dos profissionais de tecnologia contra desvios de função para garantir o foco no projeto.",
    "communicationType": "slack",
    "senderRole": "Desenvolvedora Júnior",
    "description": "Vários setores da administração da universidade descobriram que o projeto conta com desenvolvedores talentosos e começaram a enviar tarefas paralelas de conserto de impressoras e suporte administrativo genérico para a equipe técnica.",
    "domainTag": "Recursos › Liderar a Equipe",
    "resourceType": "humano",
    "resourceProcess": "liderar",
    "senderName": "Paulyne QA",
    "senderInitials": "PQ",
    "avatarImage": "/Personagens/Paulyne.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Notificar formalmente os setores que os desenvolvedores têm plano de trabalho estrito no projeto e orientar a equipe a reportar desvios.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 10,
          "saudeEquipe": 20,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "Os desenvolvedores se sentiram respeitados e valorizados. Seu rendimento no desenvolvimento do sistema acadêmico dobrou e o foco nas metas prioritárias foi mantido.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Líderes de projeto têm responsabilidade com a alocação de sua equipe; proteger os profissionais de tecnologia garante a entrega das metas e o alto desempenho."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Desvio de finalidade e desmotivação dos estudantes"
        ],
        "otherConsequences": [
          "Formação de excelentes novos profissionais para o mercado"
        ]
      },
      {
        "key": "b",
        "text": "Permitir que os desenvolvedores façam tudo o que os outros setores pedirem para \"fazer política de boa vizinhança\" no campus.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -15,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "Os estudantes passaram os dias carregando caixas e formatando PCs antigos. O código do SIGAA ficou abandonado e os prazos estouraram.",
        "pmbokConcept": "Bem-estar e prevenção de burnout",
        "learnings": [
          "Permitir desvio de função de recursos do projeto drena a capacidade produtiva e fere o propósito do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atrito com outros departamentos"
        ],
        "otherConsequences": [
          "Abandono do projeto pelos profissionais de tecnologia"
        ]
      },
      {
        "key": "c",
        "text": "Proibir os desenvolvedores de conversarem com qualquer pessoa fora da sala do projeto sob ameaça de desligamento.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -5,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O ambiente virou um regime carcerário. O clima ficou opressivo e a universidade abriu uma sindicância interna.",
        "pmbokConcept": "Liderança servidora",
        "learnings": [
          "Governança e limites profissionais se estabelecem com diálogo institucional, nunca com autoritarismo paranoico."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Desvio de função"
        ],
        "otherConsequences": [
          "Sindicância e denúncia na comissão de ética"
        ]
      }
    ]
  }
];
