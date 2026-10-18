import { GameEvent, EventCategory, EventDifficulty } from "@/types";

/**
 * Domínio de Recursos (PMBOK 8): Monitoramento de Recursos, Teoria das Restrições e Eficiência
 * Foco Pedagógico: Teoria das restrições (TOC), retrabalho como desperdício de capacidade,
 * mapeamento do fluxo de valor, gráficos de controle, dívida técnica e eficiência produtiva.
 * Total: 10 Dilemas reequilibrados segundo o modelo PMBOK 8.
 */
export const qualityEvents: GameEvent[] = [
  {
    id: "quality_1_code_chaos_legado",
    title: "O Dreno do Código Espaguete (Retrabalho como Indicador de Ineficiência)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["debito_tecnico", "retrabalho", "recursos_humanos", "capacidade"],
    learningObjective: "Tratar a dívida técnica como fator redutor da capacidade útil da equipe aplicando saneamento preventivo e manutenção contínua de ativos.",
    communicationType: "ticket",
    senderRole: "Líder Técnico",
    description: "Ticket #1042 - Prioridade Crítica. O módulo de cálculo de IRA e créditos está tão emaranhado que pequenas correções exigem o triplo de horas de depuração e geram novos defeitos em cascata.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Dedicar esforço planejado no ciclo de trabalho para reorganizar preventivamente o núcleo de cálculo e estancar o desperdício contínuo de esforço.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O saneamento arquitetural preventivo eliminou retrabalhos; o tempo necessário para implementar novas regras caiu pela metade.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 estabelece que o retrabalho excessivo sinaliza ineficiência no uso dos recursos que deve ser estancada na causa raiz.",
          "Sanear o débito técnico recupera a capacidade produtiva útil e preserva a saúde mental da equipe nos ciclos futuros."
        ],
        goodBad: "good",
        risksEvaded: [
          "Paralisia progressiva das entregas por acúmulo de complexidade incontrolável"
        ],
        otherConsequences: [
          "Aceleração sustentável no desenvolvimento dos próximos módulos acadêmicos"
        ]
      },
      {
        key: "b",
        text: "Empilhar novas regras condicionais sobre o código confuso para entregar as demandas do ciclo de trabalho na data prevista.",
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
              capacidadeEntrega: -15,
              qualidadeProduto: -15
            },
            narrative: "A complexidade desordenada quebrou o cálculo de notas de formandos durante a validação da colação de grau."
          }
        ],
        feedbackNarrative: "A entrega imediata foi comemorada, mas a fragilidade gerou enxurrada de chamados que paralisou as semanas seguintes.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 adverte que ignorar a degradação técnica converte capacidade nobre em esforço estéril de correção emergencial.",
          "Adiar saneamento técnico gera juros destrutivos sobre o tempo e a paciência dos profissionais envolvidos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atrito pontual com a comissão acadêmica por adiamento de entrega"
        ],
        otherConsequences: [
          "Multiplicação de chamados de suporte e estresse severo entre programadores"
        ]
      },
      {
        key: "c",
        text: "Determinar que apenas os estagiários trabalhem no saneamento da arquitetura enquanto os seniores continuam criando novas telas.",
        impacts: {
          capacidadeEntrega: -10,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "Sem domínio arquitetural, os novatos introduziram divergências de arredondamento em cálculos contábeis do SIGAA.",
        pmbokConcept: "Papéis, responsabilidades e lacunas de conhecimento",
        learnings: [
          "O PMBOK 8 adverte contra a atribuição de desafios arquiteturais complexos a perfis em fase inicial de formação técnica.",
          "O saneamento de regras essenciais do sistema demanda experiência consolidada para não gerar passivos ocultos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Dedicação de tempo dos desenvolvedores mais experientes"
        ],
        otherConsequences: [
          "Inconsistência de dados acadêmicos e necessidade de auditoria contábil"
        ]
      }
    ]
  },
  {
    id: "quality_2_lean_gargalo_qa_swarming",
    title: "O Gargalo da Homologação (Teoria das Restrições e Mobilização da Equipe)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["toc", "gargalo", "qa", "mobilizacao_equipe", "lean"],
    learningObjective: "Aplicar a Teoria das Restrições para subordinar o ritmo produtivo à capacidade do gargalo de validação através de mobilização concentrada da equipe.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #engenharia: 'Temos 35 histórias de usuário programadas acumuladas na fila de testes; o único analista de QA da equipe está em colapso e o fluxo de liberação está 100% paralisado.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Pausar o início de novos códigos e mobilizar desenvolvedores em força-tarefa conjunta para apoiar nos testes automatizados.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O esforço conjunto eliminou a fila acumulada em dois dias e ampliou a cobertura de suítes automatizadas de teste.",
        pmbokConcept: "Teoria das restrições e gargalos",
        learnings: [
          "O PMBOK 8 recomenda a Teoria das Restrições e a mobilização colaborativa para desafogar o recurso limitante e restabelecer o fluxo de valor.",
          "Subordinar a produção de código à capacidade de validação impede o acúmulo de trabalho em andamento defeituoso."
        ],
        goodBad: "good",
        risksEvaded: [
          "Acúmulo de defeitos não detectados e esgotamento físico do profissional de QA"
        ],
        otherConsequences: [
          "Disseminação de competências de testes automatizados entre todos os programadores"
        ]
      },
      {
        key: "b",
        text: "Acelerar a liberação das 35 entregas em produção para cumprir a meta do ciclo e realizar inspeções posteriores.",
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
              capacidadeEntrega: -15
            },
            narrative: "Defeitos graves não inspecionados paralisaram o portal acadêmico no primeiro dia de aulas."
          }
        ],
        feedbackNarrative: "A liberação cega inflou os números do gráfico de entregas, mas transformou o lançamento em desastre operacional.",
        pmbokConcept: "Mapeamento do fluxo de valor",
        learnings: [
          "O PMBOK 8 alerta que contornar etapas essenciais de inspeção gera desperdício catastrófico quando as falhas chegam ao usuário.",
          "Velocidade sem verificação de qualidade constitui ilusão produtiva que destrói o valor entregue pelo projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Queda aparente nas estatísticas de produtividade do ciclo de entregas"
        ],
        otherConsequences: [
          "Paralisação geral dos serviços acadêmicos e desgaste irreparável da reputação do time"
        ]
      },
      {
        key: "c",
        text: "Solicitar plantão extraordinário de homologação ao analista de QA para concluir as verificações pendentes.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "Exausto, o analista deixou passar erros elementares e pediu demissão logo após o fechamento da iteração de trabalho.",
        pmbokConcept: "Bem-estar e prevenção de burnout",
        learnings: [
          "O PMBOK 8 condena a sobrecarga punitiva de indivíduos como tentativa de compensar desequilíbrios estruturais da equipe.",
          "A gestão de recursos deve calibrar a capacidade do time para manter um ritmo de trabalho saudável e sustentável."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de interromper o trabalho de programação dos desenvolvedores"
        ],
        otherConsequences: [
          "Perda definitiva do único especialista em testes e aumento da vulnerabilidade do sistema"
        ]
      }
    ]
  },
  {
    id: "quality_3_capacidade_nuvem_pico",
    title: "O Teste de Carga de Matrículas (Uso Planejado e Gráficos de Controle)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["nuvem", "graficos_controle", "capacidade", "infraestrutura"],
    learningObjective: "Utilizar gráficos de controle e análise de limites para dimensionar recursos computacionais frente a picos previsíveis de tráfego.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Simulação de 100 Mil Requisições Simultâneas. A análise de tendências aponta que os ambientes computacionais virtuais atingirão o teto de capacidade em 30 segundos durante a abertura do semestre acadêmico.",
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
        text: "Implementar fila assíncrona com controle de vazão e gráficos de controle para gerenciar a vazão dentro da capacidade estável.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A arquitetura em filas suavizou o pico de conexões e o sistema processou todas as matrículas sem quedas.",
        pmbokConcept: "Gráficos de controle",
        learnings: [
          "O PMBOK 8 recomenda gráficos de controle para monitorar a estabilidade de processos e manter a operação dentro de limites seguros.",
          "O controle da variabilidade de recursos virtuais assegura previsibilidade e resiliência nos momentos de maior demanda."
        ],
        goodBad: "good",
        risksEvaded: [
          "Queda do portal universitário e protestos nas redes sociais no dia de abertura de turmas"
        ],
        otherConsequences: [
          "Criação de padrão de arquitetura resiliente para todos os serviços web da universidade"
        ]
      },
      {
        key: "b",
        text: "Preservar as configurações vigentes de capacidade computacional e confiar no balanceamento elástico nativo da nuvem.",
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
              capacidadeEntrega: -15,
              qualidadeProduto: -15
            },
            narrative: "O sistema travou nos primeiros cinco minutos de matrícula; a universidade precisou cancelar o calendário."
          }
        ],
        feedbackNarrative: "O otimismo ingênuo custou caro: os ambientes computacionais entraram em colapso imediatamente e a matrícula precisou ser reiniciada após dias.",
        pmbokConcept: "Análise de custo-benefício e de tendências",
        learnings: [
          "O PMBOK 8 adverte que ignorar tendências históricas de consumo de recursos computacionais conduz a falhas previsíveis.",
          "O dimensionamento negligente de ativos de infraestrutura ameaça a continuidade operacional das instituições públicas."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho de configuração e testes de infraestrutura de mensageria"
        ],
        otherConsequences: [
          "Cancelamento do calendário acadêmico e desgaste público da reitoria"
        ]
      },
      {
        key: "c",
        text: "Contratar o maior pacote de capacidade computacional em nuvem sem ajustar a aplicação, pagando dez vezes mais do que o necessário.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "O sistema aguentou o pico, mas a fatura da nuvem consumiu as verbas de pesquisa e inovação de todo o ano letivo.",
        pmbokConcept: "Uso planejado vs. real de recursos",
        learnings: [
          "O PMBOK 8 preconiza o equilíbrio financeiro e a sustentabilidade no monitoramento de desvios entre consumo previsto e real.",
          "Superdimensionar descontroladamente recursos físicos ou virtuais consome recursos essenciais de outras áreas prioritárias."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço técnico de otimização de queries e filas de processamento"
        ],
        otherConsequences: [
          "Déficit financeiro grave e cortes no custeio dos laboratórios de informática"
        ]
      }
    ]
  },
  {
    id: "quality_4_inspecao_estatica_debito_tecnico",
    title: "O Radar de Qualidade (Mapeamento do Fluxo e Revisões de Desempenho)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["qualidade", "inspecao_estatica", "revisoes", "fluxo_valor"],
    learningObjective: "Integrar ferramentas de análise estática e revisões de desempenho para identificar desperdícios de qualidade precocemente.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #qualidade: 'A ferramenta de análise e inspeção apontou 120 vulnerabilidades e duplicações graves no código novo; a equipe sugere desativar a ferramenta para não bloquear a liberação operacional em produção.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Pactuar critérios rigorosos de inspeção nas rotinas automatizadas e reservar tempo de alinhamento técnico para sanar as falhas críticas.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A barreira de qualidade impediu a entrada de código defeituoso e elevou o rigor técnico de toda a equipe de engenharia.",
        pmbokConcept: "Revisões de desempenho",
        learnings: [
          "O PMBOK 8 recomenda revisões formais de desempenho e critérios objetivos de aceitação para proteger a qualidade dos artefatos.",
          "Garantir padrões rigorosos na esteira técnica reduz os custos de manutenção corretiva durante o ciclo de vida do software."
        ],
        goodBad: "good",
        risksEvaded: [
          "Entrada de código vulnerável a ataques de injeção e estouro de memória em produção"
        ],
        otherConsequences: [
          "Consolidação de cultura de engenharia de software madura na universidade pública"
        ]
      },
      {
        key: "b",
        text: "Flexibilizar as travas da ferramenta de análise estática para avisos informativos, liberando as entregas de tarefas.",
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
              capacidadeEntrega: -15
            },
            narrative: "Vulnerabilidades ignoradas permitiram vazamento de dados de dados remuneratórios de funcionários públicos da instituição."
          }
        ],
        feedbackNarrative: "A velocidade dos merges disparou por duas semanas, até que brechas graves causaram vazamento de dados institucionais.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que ignorar deliberadamente métricas de qualidade transforma a economia aparente em desperdício irreparável.",
          "Remover ferramentas de verificação para acelerar tarefas destrói a confiabilidade e expõe a instituição a riscos legais."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Atraso na liberação de branches de desenvolvimento"
        ],
        otherConsequences: [
          "Vazamento de dados sigilosos e instauração de inquérito civil pela Polícia Federal"
        ]
      },
      {
        key: "c",
        text: "Instituir congelamento de código (code freeze) amplo até a revisão manual de toda a base pelo arquiteto.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: 5,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "O excesso de zelo burocrático paralisou o projeto e desmotivou os programadores, que ficaram sem tarefas úteis.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 enfatiza a necessidade de equilibrar controle de qualidade e fluidez produtiva dos recursos humanos.",
          "Paralisações desproporcionais geram ociosidade prejudicial e comprometem a entrega tempestiva de valor aos usuários."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Passagem de qualquer inconsistência menor de código"
        ],
        otherConsequences: [
          "Perda de prazos institucionais e desengajamento generalizado dos colaboradores"
        ]
      }
    ]
  },
  {
    id: "quality_5_designer_gargalo_toc",
    title: "O Único Designer (Teoria das Restrições e Perfil Generalista-Especialista)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["toc", "gargalo", "designer", "generalista_especialista", "ux"],
    learningObjective: "Aplicar o conceito de recursos generalistas-especialistas para amortecer o gargalo de especialidade no fluxo de trabalho.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #ux: 'Temos 40 telas aguardando desenho de telas e apenas uma designer na equipe; enquanto isso, quatro desenvolvedores estão ociosos esperando especificações de tela.'",
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
        text: "Criar biblioteca de componentes pré-aprovados e capacitar os desenvolvedores de telas em prototipagem básica.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: 15,
          saudeEquipe: 15,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O amadurecimento como generalistas-especialistas descentralizou as telas simples e liberou a designer para fluxos complexos.",
        pmbokConcept: "Generalista-especialista",
        learnings: [
          "O PMBOK 8 recomenda incentivar profissionais com perfil generalista-especialista para aliviar gargalos crônicos de competência.",
          "A autonomia técnica através de padrões compartilhados rompe dependências exclusivas e eleva a resiliência do time."
        ],
        goodBad: "good",
        risksEvaded: [
          "Ociosidade de desenvolvedores de interface e sobrecarga desumana sobre a designer"
        ],
        otherConsequences: [
          "Autonomia do time na criação de interfaces alinhadas ao design system da instituição"
        ]
      },
      {
        key: "b",
        text: "Autorizar que os desenvolvedores de telas construam os componentes diretamente em código para manter a vazão do ciclo de trabalho.",
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
            narrative: "Telas caóticas e sem acessibilidade geraram revolta discente e exigiram redesign total pós-lançamento."
          }
        ],
        feedbackNarrative: "A equipe produziu muito código rapidamente, mas as telas ficaram confusas, despadronizadas e inacessíveis para alunos.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que produzir artefatos desconectados dos requisitos essenciais gera desperdício sob forma de retrabalho.",
          "Substituir governança de design por improvisação descontrolada destrói a usabilidade e a imagem do produto público."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Tempo despendido na elaboração de biblioteca de componentes"
        ],
        otherConsequences: [
          "Rejeição maciça da interface por alunos e necessidade de reconstrução completa"
        ]
      },
      {
        key: "c",
        text: "Aguardar a finalização formal de todos os protótipos de alta fidelidade de telas antes de iniciar a codificação.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: 5,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "A inércia causou atraso de semanas no cronograma e os desenvolvedores desmotivaram-se com a falta de atividade útil.",
        pmbokConcept: "Utilização e inatividade de recursos",
        learnings: [
          "O PMBOK 8 aponta a tolerância com inatividade involuntária de recursos como falha grave no gerenciamento de capacidade.",
          "O gestor deve encontrar caminhos flexíveis de colaboração para manter todos os colaboradores gerando valor contínuo."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Risco de divergência visual mínima em relação aos protótipos ideais"
        ],
        otherConsequences: [
          "Desperdício severo de horas de trabalho e atraso no calendário de implantação"
        ]
      }
    ]
  },
  {
    id: "quality_6_retrabalho_historicos",
    title: "A Especificação Flutuante (Mapeamento do Fluxo e Redução de Desperdícios)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["retrabalho", "especificacao", "desperdicio", "alinhamento"],
    learningObjective: "Mapear o fluxo de valor para diagnosticar causas de retrabalho decorrentes de requisitos ambíguos de negócio.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Módulo de Histórico Escolar Reprovado pela Terceira Vez. A comissão acadêmica rejeitou novamente a emissão do histórico porque as regras de trancamento mudam a cada reunião semanal sem registro formal.",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Mapear o fluxo de valor com a comissão e exigir critérios de aceitação congelados e assinados antes da codificação.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "O alinhamento estruturado estancou o vaivém de requisitos e a nova versão do histórico foi aprovada com louvor.",
        pmbokConcept: "Mapeamento do fluxo de valor",
        learnings: [
          "O PMBOK 8 recomenda o mapeamento do fluxo de valor para identificar onde indefinições de requisitos geram desperdício de tempo.",
          "Pactuar critérios de aceitação precisos protege a equipe contra retrabalhos crônicos e firma compromissos com o cliente."
        ],
        goodBad: "good",
        risksEvaded: [
          "Quarta rodada de descarte completo de código e desmotivação dos programadores"
        ],
        otherConsequences: [
          "Formalização do catálogo oficial de regras acadêmicas da pró-reitoria"
        ]
      },
      {
        key: "b",
        text: "Ajustar o código iterativamente conforme as impressões e sugestões apresentadas nas reuniões semanais da comissão.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              capacidadeEntrega: -15,
              saudeEquipe: -15
            },
            narrative: "O retrabalho contínuo estourou o prazo final e gerou esgotamento físico nos desenvolvedores do módulo."
          }
        ],
        feedbackNarrative: "A equipe trabalhou em círculos por semanas; o estresse explodiu e o módulo acumulou lógicas contraditórias.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 frisa que o retrabalho descontrolado drena a moral e a eficácia das pessoas envolvidas no projeto.",
          "Atender a mudanças caóticas sem processo estruturado de controle destrói a sustentabilidade do cronograma."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Confronto inicial de alinhamento com os membros da comissão docente"
        ],
        otherConsequences: [
          "Código ininteligível com regras colidentes e atraso no encerramento do semestre"
        ]
      },
      {
        key: "c",
        text: "Sustentar a versão original já desenvolvida perante a comissão, justificando o encerramento do prazo contratual.",
        impacts: {
          capacidadeEntrega: 10,
          qualidadeProduto: -15,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "Os históricos emitidos violaram normativas acadêmicas da universidade e geraram anulação de diplomas.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 destaca a necessidade de entrega de valor alinhada aos objetivos estratégicos dos clientes finais.",
          "Impor produtos incompatíveis com as normas regulatórias destrói a legitimidade e a utilidade da solução."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço técnico adicional de reprogramação de rotinas acadêmicas"
        ],
        otherConsequences: [
          "Nulidade de históricos emitidos e processo administrativo contra a gestão"
        ]
      }
    ]
  },
  {
    id: "quality_7_corte_testes_fim_sprint",
    title: "O Corte no Fim do Ciclo de Entregas (Melhoria Contínua vs. Atalho Imediatista)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["testes", "qualidade", "melhoria_continua", "sustentabilidade"],
    learningObjective: "Defender a disciplina de testes automatizados como salvaguarda da capacidade futura em oposição a ganhos efêmeros de prazo.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #dev: 'Faltam 48 horas para a entrega do ciclo e o módulo de rematrícula está pronto, mas sem os testes unitários obrigatórios; a diretoria pede para entregar assim mesmo.'",
    domainTag: "Recursos › Monitorar e Controlar Recursos",
    resourceType: "humano",
    resourceProcess: "monitorar",
    senderName: "Carlos Silva",
    senderInitials: "CS",
    avatarImage: "/Personagens/Roberto.png",
    responsibleRole: "techLead",
    alternatives: [
      {
        key: "a",
        text: "Manter a definição de pronto exigindo testes unitários e negociar o adiamento da história menor para a próxima iteração de trabalho.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A integridade da definição de pronto evitou a entrada de falhas sutis de concorrência e garantiu código estável.",
        pmbokConcept: "Melhoria contínua",
        learnings: [
          "O PMBOK 8 apoia a melhoria contínua e a preservação de padrões rigorosos como salvaguarda da capacidade a longo prazo.",
          "Respeitar os critérios de conclusão evita a degradação silenciosa da base tecnológica e garante sustentabilidade."
        ],
        goodBad: "good",
        risksEvaded: [
          "Erros ocultos de duplicidade de vaga em turmas concorridas de graduação"
        ],
        otherConsequences: [
          "Fortalecimento da disciplina técnica em toda a equipe de desenvolvimento"
        ]
      },
      {
        key: "b",
        text: "Aprovar a entrega funcional do módulo no ciclo de entregas e agendar a cobertura de testes automatizados para o ciclo seguinte.",
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
              capacidadeEntrega: -15
            },
            narrative: "Uma falha de concorrência não testada permitiu matrículas duplicadas acima da lotação de salas físicas."
          }
        ],
        feedbackNarrative: "A comemoração da entrega pontual durou pouco: turmas superlotadas geraram conflitos físicos entre alunos nos campi.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 adverte que suprimir salvaguardas de qualidade transfere o custo do teste para o usuário final com juros exponenciais.",
          "A pressa em bater métricas superficiais de velocidade mina a credibilidade institucional das entregas."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Justificativa formal do adiamento de uma história de usuário"
        ],
        otherConsequences: [
          "Superlotação de turmas e necessidade de cancelamento manual de matrículas"
        ]
      },
      {
        key: "c",
        text: "Designar a confecção dos testes unitários pendentes aos bolsistas de graduação como atividade formativa complementar.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        feedbackNarrative: "Os testes criados às pressas tinham asserções vazias apenas para passar no coverage, gerando falsa sensação de segurança.",
        pmbokConcept: "Integridade e transparência do gerente de projetos",
        learnings: [
          "O PMBOK 8 estabelece a autenticidade e integridade como pilares das medições de desempenho da equipe.",
          "Métricas maquiadas camuflam vulnerabilidades e violam os preceitos éticos da gestão responsável de recursos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Esforço de negociação de escopo com o comitê de usuários"
        ],
        otherConsequences: [
          "Suíte de testes inócua que consome tempo de compilação sem detectar falhas"
        ]
      }
    ]
  },
  {
    id: "quality_8_acessibilidade_wcag",
    title: "O Padrão de Acessibilidade (Sustentabilidade dos Recursos e Inclusão)",
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ["acessibilidade", "wcag", "inclusao", "sustentabilidade"],
    learningObjective: "Integrar requisitos de acessibilidade (WCAG) desde o início do fluxo de design e desenvolvimento para evitar retrabalhos custosos.",
    communicationType: "slack",
    senderRole: "Líder de Design e Telas",
    description: "Canal #design: 'O comitê de acessibilidade da universidade identificou que o novo portal não possui navegação por leitor de tela para deficientes visuais; a liderança debate se ajusta agora ou pós-lançamento.'",
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
        text: "Integrar testes com leitores de tela nos componentes do design system e treinar o time nas diretrizes WCAG 2.1.",
        impacts: {
          capacidadeEntrega: -10,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A conformidade de acessibilidade foi incorporada nativamente nos componentes, garantindo inclusão plena a baixo custo.",
        pmbokConcept: "Sustentabilidade na gestão de recursos",
        learnings: [
          "O PMBOK 8 ressalta a sustentabilidade e a responsabilidade social como dimensões transversais indispensáveis na gestão pública.",
          "Projetar de forma inclusiva desde a origem previne retrabalhos monumentais de reconstrução de interfaces no futuro."
        ],
        goodBad: "good",
        risksEvaded: [
          "Ação civil pública do Ministério Público Federal por desobediência à Lei Brasileira de Inclusão"
        ],
        otherConsequences: [
          "Reconhecimento do novo SIGAA como referência nacional de acessibilidade digital"
        ]
      },
      {
        key: "b",
        text: "Concentrar o lançamento nas funcionalidades centrais e planejar a suíte completa de acessibilidade para o próximo release.",
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
            narrative: "Liminar judicial imposta pelo MPF paralisou a implantação do sistema até a correção integral de acessibilidade."
          }
        ],
        feedbackNarrative: "A omissão resultou em notificação judicial imediata e denúncia de entidades estudantis na imprensa.",
        pmbokConcept: "Visão e objetivos compartilhados",
        learnings: [
          "O PMBOK 8 adverte que ignorar compromissos sociais e éticos da organização rompe o alinhamento com a sociedade.",
          "Entregar produtos excludentes vulnerabiliza o projeto a sanções jurídicas e rejeição comunitária generalizada."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Tempo despendido em ajustes de contraste, tags semânticas e navegação por teclado"
        ],
        otherConsequences: [
          "Paralisação judicial do projeto e danos gravíssimos à imagem da universidade"
        ]
      },
      {
        key: "c",
        text: "Acoplar uma barra externa de acessibilidade automatizada na interface para atender rapidamente aos requisitos de conformidade.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -5,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "O widget atrapalhou os leitores de tela reais de discentes cegos e gerou protestos do comitê de inclusão.",
        pmbokConcept: "Retrabalho e desperdício como indicadores de eficiência",
        learnings: [
          "O PMBOK 8 aponta que soluções paliativas ilusórias geram retrabalho e não resolvem a barreira de acesso real.",
          "A acessibilidade genuína depende de estrutura semântica sólida e não de recursos cosméticos superficiais."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho de revisão semântica das tags HTML de formulários e tabelas"
        ],
        otherConsequences: [
          "Rejeição pública pelas associações de estudantes com deficiência visual"
        ]
      }
    ]
  },
  {
    id: "quality_9_testes_carga_estresse",
    title: "O Dia da Homologação (Uso Planejado vs. Real e Teoria das Restrições)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["testes_carga", "infraestrutura", "gargalos", "toc"],
    learningObjective: "Executar testes de estresse em recursos computacionais para identificar e neutralizar pontos únicos de falha antes da entrega.",
    communicationType: "email",
    senderRole: "Líder Técnico",
    description: "Assunto: Testes de Carga Finais. O teste com 50 mil requisições revelou que o gateway de autenticação trava por exaustão de conexões TCP, inviabilizando qualquer acesso ao sistema.",
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
        text: "Configurar balanceamento de carga com pool de conexões reutilizáveis e otimizar o gateway conforme a TOC.",
        impacts: {
          capacidadeEntrega: 0,
          qualidadeProduto: 15,
          saudeEquipe: 5,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A reconfiguração do gateway eliminou o ponto único de falha e garantiu fluidez no processamento de requisições.",
        pmbokConcept: "Teoria das restrições e gargalos",
        learnings: [
          "O PMBOK 8 preconiza a Teoria das Restrições para atuar no gargalo de fluxo antes que ele interrompa as operações gerais.",
          "Ajustar a arquitetura de conexões preserva a capacidade dos ambientes operacionais e impede colapsos sob carga pesada."
        ],
        goodBad: "good",
        risksEvaded: [
          "Travamento total de logins e tela de erro 504 no lançamento oficial do sistema"
        ],
        otherConsequences: [
          "Estabilidade da infraestrutura de rede para todos os serviços acadêmicos integrados"
        ]
      },
      {
        key: "b",
        text: "Manter o lançamento programado confiando que a distribuição de acessos no primeiro dia ocorrerá de forma gradual.",
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
              capacidadeEntrega: -15,
              qualidadeProduto: -15
            },
            narrative: "O gateway travou na primeira hora de matrícula; 40 mil alunos ficaram impedidos de acessar a plataforma."
          }
        ],
        feedbackNarrative: "O gateway desabou na primeira hora de uso real; a imprensa noticiou a pane e o comitê acadêmico entrou em crise.",
        pmbokConcept: "Uso planejado vs. real de recursos",
        learnings: [
          "O PMBOK 8 alerta que desconsiderar evidências concretas de estresse em recursos virtuais leva a desastres operacionais certos.",
          "A postura negligente diante de gargalos conhecidos viola os deveres de controle e gestão de riscos do projeto."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Horas de testes e calibração de parâmetros de rede e proxies reversos"
        ],
        otherConsequences: [
          "Colapso dos serviços digitais da instituição e abertura de sindicância na STI"
        ]
      },
      {
        key: "c",
        text: "Implementar uma sala de espera virtual que limite a concorrência a lotes controlados de estudantes simultâneos.",
        impacts: {
          capacidadeEntrega: -15,
          qualidadeProduto: -10,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -5
        },
        feedbackNarrative: "A fila virtual demorava quatro horas por estudante, gerando revolta nos centros acadêmicos e protestos nos campi.",
        pmbokConcept: "Mapeamento do fluxo de valor",
        learnings: [
          "O PMBOK 8 demonstra que criar filas de espera desproporcionais restringe o valor entregue e gera insatisfação nos clientes.",
          "Restrições artificiais de capacidade indicam incapacidade do projeto de dimensionar seus recursos adequadamente."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Necessidade de reestruturar as regras de pooling de conexões nas regras centrais de processamento"
        ],
        otherConsequences: [
          "Protestos de estudantes e atraso generalizado na consolidação das matrículas"
        ]
      }
    ]
  },
  {
    id: "quality_10_vulnerabilidade_sql_injection",
    title: "A Brecha no Portal Docente (Ambiente Seguro e Resolução de Problemas)",
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ["seguranca", "vulnerabilidade", "ambiente_seguro", "governanca"],
    learningObjective: "Conduzir a remediação de incidentes de segurança sob postura de colaboração e aprendizado sem punições predatórias.",
    communicationType: "slack",
    senderRole: "Líder Técnico",
    description: "Canal #seguranca: 'Auditoria de segurança encontrou vulnerabilidade de segurança nas consultas do módulo de lançamento de notas digitado por desenvolvedor júnior; a diretoria quer punição imediata.'",
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
        text: "Corrigir a brecha com queries parametrizadas em acompanhamento conjunto e implementar testes de segurança automatizados de integridade.",
        impacts: {
          capacidadeEntrega: -5,
          qualidadeProduto: 15,
          saudeEquipe: 10,
          conhecimentoOrganizacional: 15
        },
        feedbackNarrative: "A correção rápida aliada a automação de testes impediu novas falhas e protegeu o clima de segurança psicológica da equipe.",
        pmbokConcept: "Ambiente seguro e transparência sobre vieses",
        learnings: [
          "O PMBOK 8 destaca que um ambiente seguro e a aprendizagem construtiva com falhas fortalecem a resiliência do time.",
          "Substituir culpabilização por automação de processos fecha brechas de segurança de modo definitivo e sustentável."
        ],
        goodBad: "good",
        risksEvaded: [
          "Invasão maliciosa do repositório de dados institucional e alteração fraudulenta de notas de estudantes"
        ],
        otherConsequences: [
          "Blindagem permanente contra falhas de segurança nas consultas em todos os repositórios da STI"
        ]
      },
      {
        key: "b",
        text: "Instaurar advertência formal e determinar que o autor do script execute a revisão e correção prioritária do módulo.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -10,
          saudeEquipe: -15,
          conhecimentoOrganizacional: -10
        },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: {
              saudeEquipe: -15,
              capacidadeEntrega: -10
            },
            narrative: "O clima de medo fez outros desenvolvedores ocultarem vulnerabilidades conhecidas para não serem humilhados."
          }
        ],
        feedbackNarrative: "A humilhação pública instaurou o pânico na equipe; ninguém mais confessava falhas, multiplicando os riscos ocultos.",
        pmbokConcept: "Liderança servidora",
        learnings: [
          "O PMBOK 8 ensina que a liderança punitiva destrói a confiança mútua e estimula o acobertamento perigoso de defeitos graves.",
          "O líder deve atuar como servidor e mentor, corrigindo falhas de processos em vez de perseguir indivíduos."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Desconforto político de assumir perante a diretoria a responsabilidade coletiva da entrega"
        ],
        otherConsequences: [
          "Cultura do medo, desconfiança mútua e evasão de profissionais juniores"
        ]
      },
      {
        key: "c",
        text: "Postergar a otimização técnica das rotinas de consulta ao repositório para a manutenção programada semestral, mantendo o serviço ativo.",
        impacts: {
          capacidadeEntrega: 5,
          qualidadeProduto: -15,
          saudeEquipe: -10,
          conhecimentoOrganizacional: -15
        },
        feedbackNarrative: "Um estudante explorou a vulnerabilidade pública e alterou notas de cem alunos, gerando escândalo nacional.",
        pmbokConcept: "Integridade e transparência do gerente de projetos",
        learnings: [
          "O PMBOK 8 preconiza a integridade e transparência intransigentes no tratamento de dados e segurança do produto.",
          "A negligência perante riscos de segurança configura omissão grave que destrói a credibilidade da liderança."
        ],
        goodBad: "bad",
        risksEvaded: [
          "Trabalho emergencial de otimização técnica das rotinas de consulta ao repositório do módulo docente"
        ],
        otherConsequences: [
          "Invasão comprovada de dados acadêmicos, escândalo na imprensa e ação do Ministério Público"
        ]
      }
    ]
  }
];
