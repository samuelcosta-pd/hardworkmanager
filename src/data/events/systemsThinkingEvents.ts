import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Domínio de Recursos (PMBOK 8): Infraestrutura e Recursos Virtuais
 * Foco Pedagógico: Infraestrutura em nuvem, bancos de dados, licenças de software e ambientes de testes.
 * Total: 10 Dilemas
 */
export const systemsThinkingEvents: GameEvent[] = [
  {
    "id": "systems_1_gambiarra_matriculas",
    "title": "Gargalo Crítico de Banco no Período de Matrículas",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "recursos_virtuais",
      "banco_dados",
      "gargalo",
      "capacidade"
    ],
    "learningObjective": "Reconhecer como atalhos em recursos virtuais e consultas sobrecarregam a capacidade da equipe.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1088 - Faltam 10 dias para a abertura das matrículas. O novo algoritmo de ranqueamento está sobrecarregando o banco de dados. Um programador sugere uma consulta direta improvisada no banco que alivia o servidor no momento, mas consumirá o triplo de esforço futuro.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "monitorar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Aprovar o atalho no banco temporariamente para cumprir o prazo imediato.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": -25,
          "saudeEquipe": -15,
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
            "narrative": "A consulta improvisada travou o banco de dados no segundo dia de matrículas. A equipe precisou varar a noite corrigindo registros corrompidos e reprocessando filas."
          }
        ],
        "feedbackNarrative": "Entregamos na data e a Reitoria comemorou inicialmente. Porém, a sobrecarga gerada nas instâncias de banco explodiu semanas depois em produção.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Comprometer a integridade de recursos virtuais para cumprir prazos imediatos multiplica o retrabalho futuro."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atraso imediato nas matrículas"
        ],
        "otherConsequences": [
          "Colapso sistêmico diferido e retrabalho exaustivo"
        ]
      },
      {
        "key": "b",
        "text": "Adiar o lançamento da funcionalidade em 5 dias, utilizar contingência segura e otimizar os índices do banco de dados.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 20,
          "saudeEquipe": 10,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "Houve atrito político inicial pelo pequeno adiamento, mas o banco foi indexado corretamente. O período de matrículas processou 50 mil requisições sem nenhuma queda.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Garantir a operação estável de recursos virtuais protege a produtividade contínua e a saúde do time."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Queda catastrófica de servidores e corrupção de matrículas"
        ],
        "otherConsequences": [
          "Desgaste político momentâneo com a gestão"
        ]
      },
      {
        "key": "c",
        "text": "Contratar consultoria externa emergencial para reescrever as queries na madrugada gastando verba crítica de infraestrutura.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": 5,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "A consultoria cobrou uma fortuna do orçamento. As queries funcionaram, mas a equipe interna não entendeu a lógica proprietária deixada por eles.",
        "pmbokConcept": "Aquisição de recursos físicos ou virtuais",
        "learnings": [
          "Aquisições reativas de emergência frequentemente geram dependências externas e drenam recursos financeiros."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atraso no prazo"
        ],
        "otherConsequences": [
          "Dreno financeiro e perda de domínio do código"
        ]
      }
    ]
  },
  {
    "id": "systems_2_aquisicoes_nuvem",
    "title": "Migração para Nuvem vs Servidores Físicos",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "nuvem",
      "infraestrutura",
      "recursos_virtuais",
      "capacidade"
    ],
    "learningObjective": "Avaliar os impactos operacionais e a elasticidade de recursos físicos versus virtuais em nuvem.",
    "communicationType": "email",
    "senderRole": "Líder Técnico",
    "description": "Assunto: Crise de Infraestrutura. O centro de processamento de dados físico da UFC está com servidores superaquecendo e sem capacidade de expansão para o novo portal. Temos que decidir se migramos para servidores em nuvem com capacidade elástica sob demanda ou compramos novos equipamentos físicos via licitação demorada.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "adquirir",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Conduzir migração para servidores em nuvem com capacidade elástica sob demanda, pagando pelo uso nos períodos de pico.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A escalabilidade automática suportou os picos de matrícula sem quedas e sem custos fixos gigantescos durante as férias acadêmicas. O time aprendeu tecnologias modernas de nuvem.",
        "pmbokConcept": "Aquisição de recursos físicos ou virtuais",
        "learnings": [
          "Adquirir recursos virtuais elásticos sob demanda viabiliza flexibilidade operacional e evita compras físicas obsoletas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Queda física de servidores e demora de licitação"
        ],
        "otherConsequences": [
          "Necessidade de monitoramento contínuo de custos em nuvem"
        ]
      },
      {
        "key": "b",
        "text": "Insistir na compra de servidores físicos locais via processo licitatório tradicional de 8 meses.",
        "impacts": {
          "capacidadeEntrega": -30,
          "qualidadeProduto": -15,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": 0
        },
        "feedbackNarrative": "A licitação travou em recursos jurídicos. O sistema foi lançado nos servidores antigos superaquecidos e queimou três placas de rede durante as matrículas.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "A indisponibilidade de infraestrutura no momento adequado compromete diretamente os prazos e a qualidade da entrega."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo de nuvem em dólar"
        ],
        "otherConsequences": [
          "Queima de hardware e indisponibilidade total"
        ]
      },
      {
        "key": "c",
        "text": "Desligar a metade dos módulos do sistema acadêmico para que o servidor velho aguente rodar.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -25,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "Os módulos de bolsas e notas foram desativados. Alunos perderam prazos de formatura e professores não conseguiram lançar frequências.",
        "pmbokConcept": "Escassez e excedente de recursos",
        "learnings": [
          "Desativar serviços essenciais para compensar carência de infraestrutura destrói o valor do projeto para os usuários."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Investimento financeiro"
        ],
        "otherConsequences": [
          "Paralisação de serviços acadêmicos essenciais"
        ]
      }
    ]
  },
  {
    "id": "systems_3_conhecimento_legado",
    "title": "Conhecimento Tácito Preso no Código Legado",
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "legado",
      "conhecimento",
      "capacidade",
      "pessoal"
    ],
    "learningObjective": "Compreender o impacto da retenção e compartilhamento de conhecimento na produtividade da equipe.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "O cálculo das regras de desligamento acadêmico de estudantes está em instruções antigas e complexas de 2.000 linhas sem documentação. O único funcionário que as entendia se aposentou. Reformar esse módulo exigirá 1 semana sem entregar novas telas.",
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
        "text": "Pausar novas telas por 5 dias para decodificar, documentar e reescrever o cálculo com testes unitários abrangentes.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 25,
          "saudeEquipe": 10,
          "conhecimentoOrganizacional": 35
        },
        "feedbackNarrative": "Foi um sacrifício temporário, mas o conhecimento tácito virou explícito. Quando as regras mudaram, a alteração foi feita em 30 minutos por qualquer desenvolvedor.",
        "pmbokConcept": "Propriedade compartilhada do projeto",
        "learnings": [
          "Disseminar conhecimento tácito entre os membros da equipe elimina dependências críticas e protege a continuidade das entregas."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Cálculos errôneos de jubilamento e processos judiciais"
        ],
        "otherConsequences": [
          "Pequena desaceleração temporária nas entregas"
        ]
      },
      {
        "key": "b",
        "text": "Não mexer no script de jeito nenhum e continuar implementando novas telas por cima sem entender a base.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": -15,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": -25
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 3,
            "impacts": {
              "capacidadeEntrega": -25,
              "qualidadeProduto": -20,
              "saudeEquipe": -20,
              "conhecimentoOrganizacional": -10
            },
            "narrative": "O script arcaico gerou uma falha silenciosa que jubilou 450 estudantes incorretamente. O time parou por duas semanas para fazer correções manuais."
          }
        ],
        "feedbackNarrative": "Ganhamos prazo imediato, mas deixamos uma mina terrestre armada na base de dados.",
        "pmbokConcept": "Papéis, responsabilidades e lacunas de conhecimento",
        "learnings": [
          "Ignorar lacunas de conhecimento na equipe cria gargalos operacionais graves quando falhas silenciosas eclodem."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Atraso nas entregas atuais"
        ],
        "otherConsequences": [
          "Jubilamento indevido de centenas de estudantes e ações judiciais"
        ]
      },
      {
        "key": "c",
        "text": "Apagar o script antigo e criar um cálculo simplificado qualquer sem validar com a comissão acadêmica.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -30,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A simplificação arbitrária feriu o regimento geral da universidade, gerando invalidade jurídica em todos os históricos escolares.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "A gestão de recursos exige calibrar o esforço técnico com os padrões de conformidade institucionais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Tempo de análise"
        ],
        "otherConsequences": [
          "Anulação de históricos escolares pela Reitoria"
        ]
      }
    ]
  },
  {
    "id": "systems_4_integracao_banco_dados",
    "title": "Sobrecarga no Banco de Dados Central",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "database",
      "performance",
      "infraestrutura",
      "recursos_virtuais"
    ],
    "learningObjective": "Monitorar o consumo de recursos virtuais compartilhados e mitigar restrições de infraestrutura.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1142 - Lock de Banco de Dados. As novas telas de consulta de histórico estão disparando consultas pesadas sem cache, travando o banco de dados central e derrubando outros serviços compartilhados da universidade.",
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
        "text": "Implementar camada de cache em memória (Redis) e replicar o banco em modo somente-leitura (Read-Replica) para relatórios.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": 25,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A separação de leitura e escrita reduziu a carga no banco principal em 80%. Os sistemas voltaram a rodar liso e as consultas dos alunos ficaram instantâneas.",
        "pmbokConcept": "Teoria das restrições e gargalos",
        "learnings": [
          "Identificar e aliviar o gargalo em recursos virtuais compartilhados preserva o desempenho global de toda a organização."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Queda do sistema de pagamentos e travamento institucional"
        ],
        "otherConsequences": [
          "Custo de configuração de réplicas e cache"
        ]
      },
      {
        "key": "b",
        "text": "Aumentar a memória do servidor antigo temporariamente e torcer para o banco aguentar a pressão.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -15,
          "saudeEquipe": -10,
          "conhecimentoOrganizacional": 0
        },
        "feedbackNarrative": "O aumento de memória adiou o problema por 3 dias, mas na segunda-feira as consultas consumiram toda a RAM nova e o banco travou novamente.",
        "pmbokConcept": "Utilização e inatividade de recursos",
        "learnings": [
          "Alocar mais capacidade bruta sem otimizar a utilização do recurso virtual é um paliativo caro que não resolve o gargalo."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de modernização estrutural"
        ],
        "otherConsequences": [
          "Novo travamento e prejuízo financeiro"
        ]
      },
      {
        "key": "c",
        "text": "Limitar o acesso dos alunos ao histórico para apenas 5 minutos por dia por turma.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -30,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "A restrição absurda revoltou o corpo discente, gerando protestos na reitoria e manchetes negativas na imprensa local.",
        "pmbokConcept": "Escassez e excedente de recursos",
        "learnings": [
          "Racionar o uso de serviços finais para esconder limitações de infraestrutura degrada severamente a percepção de valor."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho técnico de banco"
        ],
        "otherConsequences": [
          "Crise pública de relações institucionais"
        ]
      }
    ]
  },
  {
    "id": "systems_5_licenca_banco_proprietario",
    "title": "Licenciamento de Software: Banco Proprietário vs Gratuito Aberto",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "licencas",
      "custo",
      "recursos_virtuais",
      "aquisicoes"
    ],
    "learningObjective": "Equilibrar custos de licenças comerciais com o esforço de migração para ferramentas de código aberto.",
    "communicationType": "email",
    "senderRole": "Diretor de TI",
    "description": "Assunto: Renovação de Licença. A licença anual do banco de dados comercial antigo custará R$ 400.000 para renovar. A alternativa é investir 2 semanas para migrar o sistema para um banco de dados gratuito de código aberto e usar a economia na equipe e em equipamentos do projeto.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "monitorar",
    "senderName": "Geraldo (Auditoria)",
    "senderInitials": "GA",
    "avatarImage": "/Personagens/Geraldo.png",
    "responsibleRole": "pm",
    "alternatives": [
      {
        "key": "a",
        "text": "Migrar para o banco de dados gratuito de código aberto, economizando R$ 400.000 anuais e investindo na capacitação da equipe interna.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 25
        },
        "feedbackNarrative": "A migração exigiu testes intensos, mas foi impecável. A universidade se livrou de licenças caras e a verba poupada garantiu bolsas e infraestrutura por 2 anos.",
        "pmbokConcept": "Análise de custo-benefício e de tendências",
        "learnings": [
          "Monitorar despesas e substituir recursos virtuais onerosos por soluções sustentáveis libera orçamento para a equipe."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Gasto recorrente de centenas de milhares de reais"
        ],
        "otherConsequences": [
          "Esforço temporário de migração de queries"
        ]
      },
      {
        "key": "b",
        "text": "Pagar a renovação milionária de R$ 400.000 e cortar o orçamento de bolsas e contratações de suporte.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": 0,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "As bolsas de desenvolvimento foram canceladas para pagar a licença. Três desenvolvedores saíram do projeto por falta de remuneração.",
        "pmbokConcept": "Escassez e excedente de recursos",
        "learnings": [
          "Sacrificar recursos humanos para sustentar licenças virtuais superdimensionadas fragiliza a capacidade do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho de migração de banco"
        ],
        "otherConsequences": [
          "Evasão de talentos e descontinuidade"
        ]
      },
      {
        "key": "c",
        "text": "Continuar usando o banco proprietário sem licença de forma irregular na esperança de não ser auditado.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -10,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "A fornecedora auditou a universidade e aplicou multa pesada. O comitê gestor respondeu a processo administrativo por irregularidade.",
        "pmbokConcept": "Liberação de recursos conforme o plano",
        "learnings": [
          "Manter recursos sem autorização contratual formal gera passivos regulatórios gravíssimos."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo de licença"
        ],
        "otherConsequences": [
          "Multa milionária e processo judicial"
        ]
      }
    ]
  },
  {
    "id": "systems_6_ambiente_staging_testes",
    "title": "Servidor Exclusivo de Testes vs Redução de Gastos",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "servidor_testes",
      "qualidade",
      "infraestrutura",
      "recursos_virtuais"
    ],
    "learningObjective": "Garantir ambientes de teste adequados para evitar contaminação e retrabalho em produção.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico",
    "description": "Para economizar recursos de servidores, a diretoria propôs desativar o servidor exclusivo de testes da equipe e fazer com que todos testem as alterações direto no sistema oficial em horários de menor movimento.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "adquirir",
    "senderName": "Kendrick (Infraestrutura)",
    "senderInitials": "KD",
    "avatarImage": "/Personagens/Kendrick.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Otimizar o servidor de testes usando ambientes virtuais leves e dados simulados, provando que testar direto no sistema oficial gerará custos muito maiores.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "Com ambientes virtuais e dados simulados, o custo dos servidores de teste caiu 70%. O time manteve a segurança de testar antes e nenhuma falha chegou aos usuários finais.",
        "pmbokConcept": "Aquisição de recursos físicos ou virtuais",
        "learnings": [
          "Disponibilizar ambientes de teste virtuais eficientes previne retrabalho massivo e protege os serviços em produção."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Testes em produção que corrompem dados reais de alunos"
        ],
        "otherConsequences": [
          "Modernização dos ambientes de testes com dados simulados"
        ]
      },
      {
        "key": "b",
        "text": "Aceitar o fim do servidor de testes e começar a testar funcionalidades direto na base de dados do sistema oficial.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -30,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "No primeiro teste direto em produção, um comando de limpeza de teste apagou o cadastro de 3.000 alunos reais. O pânico foi generalizado.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "A indisponibilidade de um ambiente de testes adequado força práticas de risco que destroem a confiabilidade do produto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo de servidor de testes"
        ],
        "otherConsequences": [
          "Perda irreparável de dados de estudantes"
        ]
      },
      {
        "key": "c",
        "text": "Fazer testes apenas na máquina pessoal de um único desenvolvedor sem documentar os passos.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -20,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "O clássico problema de compatibilidade: o sistema funcionou no computador pessoal, mas travou completamente nos servidores oficiais da universidade.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Recursos improvisados de teste que não espelham a infraestrutura de produção geram inconsistências graves de implantação."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Configuração de servidores"
        ],
        "otherConsequences": [
          "Falhas recorrentes na publicação de novas versões"
        ]
      }
    ]
  },
  {
    "id": "systems_7_backup_politica_retencao",
    "title": "Capacidade de Armazenamento e Backups",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "backup",
      "storage",
      "recursos_virtuais",
      "continuidade"
    ],
    "learningObjective": "Gerenciar a capacidade de armazenamento e políticas de ciclo de vida de recursos de dados.",
    "communicationType": "ticket",
    "senderRole": "Líder Técnico",
    "description": "Ticket #1160 - Storage Cheio. O storage de backups atingiu 98% de ocupação. Para não comprar mais espaço agora, um desenvolvedor sugeriu apagar os backups históricos dos últimos 5 anos e manter apenas o backup do dia anterior.",
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
        "text": "Implementar política de arquivamento frio comprimido (Cold Storage) de baixo custo para dados históricos e backups incrementais.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 20
        },
        "feedbackNarrative": "A compressão e o tiering automático reduziram o custo em 85% e mantiveram a conformidade legal de guarda de históricos escolares por 50 anos.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "Monitorar e escalonar o uso de armazenamento em camadas garante conformidade e otimiza despesas de infraestrutura."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Perda irrecuperável de registros acadêmicos e penalidades legais"
        ],
        "otherConsequences": [
          "Conformidade total com as normas do MEC e Arquivo Nacional"
        ]
      },
      {
        "key": "b",
        "text": "Apagar todos os backups antigos e torcer para o banco de dados nunca corromper tabelas históricas.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -30
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -30,
              "qualidadeProduto": -30,
              "saudeEquipe": -25,
              "conhecimentoOrganizacional": -30
            },
            "narrative": "Um ransomware criptografou o banco de dados. Como não havia backups históricos, o histórico de notas de 10 anos da universidade foi perdido para sempre."
          }
        ],
        "feedbackNarrative": "Ganhamos espaço no disco no curto prazo, mas deixamos a universidade desprotegida contra desastres.",
        "pmbokConcept": "Retrabalho e desperdício como indicadores de eficiência",
        "learnings": [
          "Descartar recursos de contingência para mascarar falta de espaço gera perdas catastróficas e retrabalho irreversível."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Custo de storage no mês atual"
        ],
        "otherConsequences": [
          "Perda definitiva de dados históricos"
        ]
      },
      {
        "key": "c",
        "text": "Desativar a criação de novos backups diários para parar de ocupar espaço no disco.",
        "impacts": {
          "capacidadeEntrega": 0,
          "qualidadeProduto": -35,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -30
        },
        "feedbackNarrative": "Três dias depois uma queda de energia corrompeu as tabelas e o trabalho de semanas foi perdido.",
        "pmbokConcept": "Liberação de recursos conforme o plano",
        "learnings": [
          "Desativar rotinas essenciais de salvaguarda de recursos operacionais viola as diretrizes básicas de engenharia."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Alerta de disco cheio"
        ],
        "otherConsequences": [
          "Perda de dias de trabalho e retrabalho massivo"
        ]
      }
    ]
  },
  {
    "id": "systems_8_terceirizacao_vs_interno",
    "title": "Terceirização de Módulo Crítico vs Time Interno",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    "probabilityWeight": 2,
    "tags": [
      "terceirizacao",
      "aquisicoes",
      "equipe_externa",
      "gestao_matricial"
    ],
    "learningObjective": "Gerenciar a aquisição de recursos externos e fiscalizar critérios de qualidade na integração.",
    "communicationType": "email",
    "senderRole": "Pró-Reitor de Planejamento",
    "description": "Assunto: Aceleração do Módulo Financeiro. A pró-reitoria propõe contratar uma fábrica de software externa para construir o módulo de boletos em 30 dias por R$ 80.000, mas a equipe interna terá que fiscalizar a entrega e integrar os serviços.",
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
        "text": "Definir critérios rigorosos de aceitação da entrega (testes completos comprovados e documentação padronizada) antes de autorizar o contrato.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 15,
          "saudeEquipe": 10,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "O contrato com critérios técnicos estritos impediu entregas defeituosas. A fábrica entregou o módulo testado e a integração ocorreu suavemente.",
        "pmbokConcept": "Negociação e influência para obter recursos",
        "learnings": [
          "Contratar recursos humanos externos requer negociação formal de padrões técnicos de qualidade para garantir alinhamento com a equipe interna."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Recebimento de código de baixa qualidade e retrabalho interno"
        ],
        "otherConsequences": [
          "Consumo de verba financeira com entrega efetiva de valor"
        ]
      },
      {
        "key": "b",
        "text": "Contratar a fábrica sem nenhuma especificação técnica e aceitar qualquer código que eles entregarem no final dos 30 dias.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "A fábrica entregou um código ilegível e sem documentação. O módulo não conversava com nosso banco e os desenvolvedores internos gastaram 2 meses consertando os erros.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Adquirir recursos de desenvolvimento sem critérios formais transfere sobrecarga crônica de retrabalho para o time interno."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de fiscalização inicial"
        ],
        "otherConsequences": [
          "Prejuízo financeiro e meses de retrabalho"
        ]
      },
      {
        "key": "c",
        "text": "Recusar a verba de R$ 80.000 e sobrecarregar os desenvolvedores internos para fazerem o módulo nas madrugadas.",
        "impacts": {
          "capacidadeEntrega": -10,
          "qualidadeProduto": -15,
          "saudeEquipe": -30,
          "conhecimentoOrganizacional": 5
        },
        "feedbackNarrative": "A equipe interna entrou em colapso de estresse tentando abraçar o mundo e o projeto atrasou.",
        "pmbokConcept": "Gerente de recursos e ambiente matricial",
        "learnings": [
          "Recusar apoio de recursos adicionais quando a equipe está no limite de capacidade gera esgotamento e atrasos evitáveis."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Contratação de terceiros"
        ],
        "otherConsequences": [
          "Burnout e atraso no cronograma"
        ]
      }
    ]
  },
  {
    "id": "systems_9_licencas_subutilizadas",
    "title": "Licenças de Software Proprietário Subutilizadas",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "licencas",
      "recursos_virtuais",
      "monitoramento",
      "custos"
    ],
    "learningObjective": "Monitorar a taxa de utilização de licenças de software e realocar recursos ociosos onde há demanda.",
    "communicationType": "slack",
    "senderRole": "Líder Técnico Adjunto",
    "description": "Uma auditoria técnica apontou que 40% das licenças contratadas de banco de dados corporativo estão ociosas, enquanto a equipe de telas e design sofre com a falta de licenças de ferramentas profissionais de criação visual.",
    "domainTag": "Recursos › Monitorar e Controlar Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "monitorar",
    "senderName": "Carlos Silva",
    "senderInitials": "CS",
    "avatarImage": "/Personagens/Roberto.png",
    "responsibleRole": "techLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Realocar as licenças ociosas, cancelar os excedentes contratuais e adquirir as ferramentas de prototipação necessárias para o time.",
        "impacts": {
          "capacidadeEntrega": 15,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A realocação foi elogiada pela pró-reitoria. O cancelamento do excedente economizou recursos e a equipe de design aumentou expressivamente a velocidade de entrega.",
        "pmbokConcept": "Análise de custo-benefício e de tendências",
        "learnings": [
          "Monitorar periodicamente o uso real versus planejado de licenças permite reequilibrar recursos virtuais e eliminar desperdícios financeiros."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Desperdício financeiro contínuo e bloqueio da equipe de design"
        ],
        "otherConsequences": [
          "Equilíbrio de ferramentas entre todas as disciplinas"
        ]
      },
      {
        "key": "b",
        "text": "Manter todas as licenças ociosas ativas pagando a anuidade completa para evitar o trabalho administrativo de renegociação.",
        "impacts": {
          "capacidadeEntrega": -15,
          "qualidadeProduto": -10,
          "saudeEquipe": -15,
          "conhecimentoOrganizacional": -10
        },
        "feedbackNarrative": "A despesa com licenças continuou sangrando o orçamento do projeto, enquanto a equipe de UX seguiu improvisando ferramentas gratuitas instáveis.",
        "pmbokConcept": "Uso planejado vs. real de recursos",
        "learnings": [
          "A passividade diante da subutilização de recursos virtuais drena recursos orçamentários vitais para outras áreas do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Trabalho burocrático de renegociação contratual"
        ],
        "otherConsequences": [
          "Frustração do time de design e despesas desnecessárias"
        ]
      },
      {
        "key": "c",
        "text": "Cancelar unilateralmente 100% das licenças de banco de dados sem verificar quem de fato ainda depende delas.",
        "impacts": {
          "capacidadeEntrega": -25,
          "qualidadeProduto": -20,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "feedbackNarrative": "O corte precipitado derrubou o acesso de profissionais experientes a bancos de dados essenciais, paralisando atualizações críticas da semana.",
        "pmbokConcept": "Liberação de recursos conforme o plano",
        "learnings": [
          "A liberação ou desativação de recursos deve seguir critérios planejados para não desestabilizar quem depende das ferramentas."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Pagamento imediato de licenças"
        ],
        "otherConsequences": [
          "Paralisação do desenvolvimento e retrabalho de reativação"
        ]
      }
    ]
  },
  {
    "id": "systems_10_staging_indisponivel",
    "title": "Servidor de Testes Indisponível no Dia da Avaliação",
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    "probabilityWeight": 2,
    "tags": [
      "servidor_testes",
      "ambiente_teste",
      "recursos_virtuais",
      "usabilidade"
    ],
    "learningObjective": "Obter ambientes de teste alternativos para assegurar a continuidade das validações com usuários.",
    "communicationType": "slack",
    "senderRole": "Líder de UX",
    "description": "O servidor de testes da universidade caiu devido a manutenção não programada justamente no dia marcado para a sessão de testes de usabilidade do novo fluxo de matrícula com 30 estudantes voluntários.",
    "domainTag": "Recursos › Adquirir Recursos",
    "resourceType": "fisico_virtual",
    "resourceProcess": "adquirir",
    "senderName": "Marina (Design de Telas)",
    "senderInitials": "MD",
    "avatarImage": "/Personagens/Leonara.png",
    "responsibleRole": "uxLead",
    "alternatives": [
      {
        "key": "a",
        "text": "Contratar rapidamente um servidor temporário em nuvem com dados simulados e executar a sessão de testes conforme agendado.",
        "impacts": {
          "capacidadeEntrega": 10,
          "qualidadeProduto": 20,
          "saudeEquipe": 15,
          "conhecimentoOrganizacional": 15
        },
        "feedbackNarrative": "A rápida obtenção do ambiente virtual em nuvem salvou o dia de testes. Identificamos 12 pontos de atrito antes do lançamento oficial.",
        "pmbokConcept": "Aquisição de recursos físicos ou virtuais",
        "learnings": [
          "Obter recursos virtuais alternativos sob demanda evita o cancelamento de validações críticas e protege o cronograma de entrega."
        ],
        "goodBad": "good",
        "risksEvaded": [
          "Perda da janela de testes com alunos e retrabalho futuro"
        ],
        "otherConsequences": [
          "Custo marginal de poucas horas de instância de nuvem"
        ]
      },
      {
        "key": "b",
        "text": "Cancelar a sessão com os alunos voluntários e liberar as telas diretamente para o sistema oficial sem nenhum teste com usuários.",
        "impacts": {
          "capacidadeEntrega": 5,
          "qualidadeProduto": -25,
          "saudeEquipe": -20,
          "conhecimentoOrganizacional": -15
        },
        "delayedImpacts": [
          {
            "triggerAfterEvents": 2,
            "impacts": {
              "capacidadeEntrega": -20,
              "qualidadeProduto": -20
            },
            "narrative": "A ausência de validação de usabilidade provocou milhares de chamados de dúvidas e desistências no primeiro dia de matrículas."
          }
        ],
        "feedbackNarrative": "A dispensa dos estudantes gerou frustração e o lançamento às cegas resultou em uma avalanche de críticas nas redes sociais da universidade.",
        "pmbokConcept": "Impacto da indisponibilidade de recursos nos demais planos",
        "learnings": [
          "A indisponibilidade não gerenciada de recursos de teste transfere o custo do erro diretamente para a experiência dos usuários finais."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Esforço de ativar servidor alternativo"
        ],
        "otherConsequences": [
          "Rejeição pública do sistema e retrabalho massivo de telas"
        ]
      },
      {
        "key": "c",
        "text": "Convidar os 30 estudantes para testarem diretamente no banco de dados de produção durante o expediente acadêmico.",
        "impacts": {
          "capacidadeEntrega": -20,
          "qualidadeProduto": -35,
          "saudeEquipe": -25,
          "conhecimentoOrganizacional": -20
        },
        "feedbackNarrative": "Os testes em produção geraram dados fictícios misturados com cadastros reais, forçando o cancelamento de matrículas do semestre.",
        "pmbokConcept": "Recursos alternativos com riscos reconhecidos",
        "learnings": [
          "Improvisar recursos operacionais sem avaliar riscos críticos viola a segurança e corrompe dados essenciais do projeto."
        ],
        "goodBad": "bad",
        "risksEvaded": [
          "Cancelamento da sessão com alunos"
        ],
        "otherConsequences": [
          "Corrupção de base de dados e sindicância administrativa"
        ]
      }
    ]
  }
];
