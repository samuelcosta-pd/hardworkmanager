import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Princípio 3: Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)
 * Fundamentação: Seção 2.5.2 (Balanceamento de restrições concorrentes) - Restrições interconectadas e gestão de trade-offs.
 * Objetivo Pedagógico: Gestão de Concessões (Trade-offs e Efeito Dominó).
 * Total: 10 Dilemas
 */
export const systemsThinkingEvents: GameEvent[] = [
  {
    id: 'systems_1_gambiarra_matriculas',
    title: 'A "Gambiarra" no Sistema de Matrículas',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['gambiarra', 'debito_tecnico', 'pensamento_sistemico', 'tradeoffs'],
    learningObjective: 'Reconhecer que concessões de curto prazo em qualidade geram efeito dominó desastroso no futuro.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1088 - Faltam 10 dias para a abertura das matrículas. O novo algoritmo de ranqueamento de vagas está lento. O desenvolvedor sugere fazer uma "gambiarra" (hardcode temporário com SQL direto) que funciona para a data, mas deixará um débito técnico enorme para o semestre seguinte.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Aprovar a gambiarra imediatamente para entregar no prazo fixado.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -25, saudeEquipe: -15, conhecimentoOrganizacional: -10 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -20, qualidadeProduto: -15, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
            narrative: 'A gambiarra aprovada no passado colapsou durante o processamento da segunda fase de matrículas. O sistema travou por 6 horas e a equipe precisou varar a noite corrigindo dados corrompidos.'
          }
        ],
        feedbackNarrative: 'Entregamos na data e a Reitoria comemorou inicialmente. Porém, o efeito dominó da dívida técnica oculta explodiu semanas depois em produção.',
        pmbokConcept: 'Pensamento Sistêmico e Consequências de Segunda Ordem',
        learnings: ['Comprometer a integridade estrutural para cumprir cronograma gera dívidas sistêmicas que cobram juros altíssimos no futuro.'],
        goodBad: 'bad',
        risksEvaded: ['Atraso imediato nas matrículas'],
        otherConsequences: ['Colapso sistêmico diferido e retrabalho exaustivo']
      },
      {
        key: 'b',
        text: 'Pensamento Sistêmico e Qualidade: Adiar o lançamento da funcionalidade automática em 5 dias, utilizar escalonamento manual temporário seguro e corrigir a causa-raiz do código.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 20, saudeEquipe: 10, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Houve atrito político inicial pelo pequeno adiamento, mas o algoritmo foi corrigido de forma limpa. O período de matrículas processou 50 mil requisições sem nenhuma queda.',
        pmbokConcept: 'Balanceamento de Restrições Concorrentes e Sustentabilidade',
        learnings: ['O verdadeiro valor não está em entregar rápido qualquer solução, mas sim software robusto e sustentável no tempo.'],
        goodBad: 'good',
        risksEvaded: ['Queda catastrófica de servidores e corrupção de matrículas'],
        otherConsequences: ['Desgaste político momentâneo com a gestão']
      },
      {
        key: 'c',
        text: 'Contratar consultoria externa emergencial para reescrever o algoritmo na madrugada gastando verba crítica de infraestrutura.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: 5, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A consultoria cobrou uma fortuna do orçamento. O código funcionou, mas a equipe interna não entendeu a lógica proprietária deixada por eles, criando um novo gargalo.',
        pmbokConcept: 'Impacto Sistêmico de Terceirizações Reativas',
        learnings: ['Soluções financeiras de curto prazo frequentemente criam dependências técnicas e dreno orçamentário não planejado.'],
        goodBad: 'bad',
        risksEvaded: ['Atraso no prazo'],
        otherConsequences: ['Dreno financeiro e perda de domínio do código']
      }
    ]
  },
  {
    id: 'systems_2_aquisicoes_nuvem',
    title: 'Migração para Nuvem vs Servidores Físicos',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['nuvem', 'infraestrutura', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Avaliar os impactos sistêmicos e orçamentários de modelos de infraestrutura (Capex vs Opex).',
    communicationType: 'email',
    senderRole: 'Líder Técnico',
    description: 'Assunto: Crise de Infraestrutura. O datacenter físico da UFC está com servidores superaquecendo e sem capacidade de expansão para o novo portal. Temos que decidir se migramos para nuvem pública (AWS/Azure) ou compramos novos servidores físicos via licitação demorada.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Pensamento Sistêmico de Nuvem: Conduzir migração em nuvem híbrida com arquitetura elástica (autoscaling), pagando sob demanda nos períodos de pico.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A escalabilidade automática suportou os picos de matrícula sem quedas e sem custos fixos gigantescos durante as férias acadêmicas. O time aprendeu tecnologias modernas de nuvem.',
        pmbokConcept: 'Interação de Sistemas e Gestão Flexível de Recursos',
        learnings: ['Entender a interação entre arquitetura de software e modelos de custo de infraestrutura viabiliza resiliência e sustentabilidade.'],
        goodBad: 'good',
        risksEvaded: ['Queda física de servidores e demora de licitação'],
        otherConsequences: ['Necessidade de monitoramento contínuo de custos em nuvem']
      },
      {
        key: 'b',
        text: 'Insistir na compra de servidores físicos locais via processo licitatório tradicional de 8 meses.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'A licitação travou em recursos jurídicos. O sistema foi lançado nos servidores antigos superaquecidos e queimou três placas de rede durante as matrículas.',
        pmbokConcept: 'Inflexibilidade em Restrições de Aquisição',
        learnings: ['Processos de compras rígidos e demorados não atendem a demandas críticas de sistemas com prazos inadiáveis.'],
        goodBad: 'bad',
        risksEvaded: ['Custo de nuvem em dólar'],
        otherConsequences: ['Queima de hardware e indisponibilidade total']
      },
      {
        key: 'c',
        text: 'Desligar a metade dos módulos do sistema acadêmico para que o servidor velho aguente rodar.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -25, saudeEquipe: -10, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Os módulos de bolsas e notas foram desativados. Alunos perderam prazos de formatura e professores não conseguiram lançar frequências.',
        pmbokConcept: 'Sacrifício Destrutivo de Escopo de Negócio',
        learnings: ['Canibalizar funcionalidades essenciais do negócio para acomodar falhas de infraestrutura destrói o valor do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Investimento financeiro'],
        otherConsequences: ['Paralisação de serviços acadêmicos essenciais']
      }
    ]
  },
  {
    id: 'systems_3_conhecimento_legado',
    title: 'Conhecimento Tácito Preso no Código Legado',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['legado', 'conhecimento', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Compreender o impacto da gestão do conhecimento na velocidade futura de resolução de problemas.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'O algoritmo de cálculo de jubilação e jubilamento de estudantes está codificado em scripts SQL arcaicos de 2.000 linhas sem nenhum comentário. O único programador que o entendia se aposentou. Reformar esse módulo levará 1 semana inteira sem entregar novas telas.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Roberto Arquiteto',
    senderInitials: 'RA',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Pensamento Sistêmico: Pausar a esteira de novas telas por 5 dias para decodificar, documentar e reescrever o cálculo com testes unitários abrangentes.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 25, saudeEquipe: 10, conhecimentoOrganizacional: 35 },
        feedbackNarrative: 'Foi um sacrifício de velocidade temporário, mas o conhecimento tácito virou explícito. Meses depois, quando o MEC mudou as regras, a alteração foi feita em 30 minutos.',
        pmbokConcept: 'Conversão de Conhecimento Tácito em Explícito e Resiliência',
        learnings: ['Investir em transformar código obscuro em conhecimento explícito protege o sistema contra paralisias futuras.'],
        goodBad: 'good',
        risksEvaded: ['Cálculos errôneos de jubilamento e processos judiciais'],
        otherConsequences: ['Pequena desaceleração temporária na sprint']
      },
      {
        key: 'b',
        text: 'Não mexer no script de jeito nenhum ("em time que está ganhando não se mexe") e continuar empurrando novas telas por cima.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -15, saudeEquipe: -10, conhecimentoOrganizacional: -25 },
        delayedImpacts: [
          {
            triggerAfterEvents: 3,
            impacts: { capacidadeEntrega: -25, qualidadeProduto: -20, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
            narrative: 'O script arcaico gerou uma falha silenciosa que jubilou 450 estudantes incorretamente. O comitê teve que parar tudo por duas semanas para fazer correções manuais sob pressão jurídica.'
          }
        ],
        feedbackNarrative: 'Ganhamos prazo imediato, mas deixamos uma mina terrestre armada na base de dados.',
        pmbokConcept: 'Dívida Oculta de Conhecimento',
        learnings: ['Ignorar módulos obscuros gera efeito dominó desastroso quando as inconsistências silenciosas emergem.'],
        goodBad: 'bad',
        risksEvaded: ['Atraso na sprint atual'],
        otherConsequences: ['Jubilamento indevido de centenas de estudantes e ações judiciais']
      },
      {
        key: 'c',
        text: 'Apagar o script antigo e criar um cálculo simplificado qualquer sem validar com a comissão de graduação.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -30, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A simplificação arbitrária feriu o regimento geral da universidade, gerando invalidade jurídica em todos os históricos escolares.',
        pmbokConcept: 'Quebra de Regras de Negócio e Falta de Alinhamento',
        learnings: ['Pensamento sistêmico exige compreender as implicações legais e de negócio antes de alterar componentes centrais.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de análise'],
        otherConsequences: ['Anulação de históricos escolares pela Reitoria']
      }
    ]
  },
  {
    id: 'systems_4_integracao_banco_dados',
    title: 'Sobrecarga no Banco de Dados Central',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['database', 'performance', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Reconhecer como decisões em uma camada (backend) afetam diretamente a experiência de usuário e os recursos físicos.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1142 - Lock de Banco de Dados. As novas telas bonitas de consulta de histórico de alunos estão disparando consultas pesadas com múltiplos JOINs sem cache, travando o banco de dados central e derrubando até o sistema de folhas de pagamento da universidade.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Kenedy Backend',
    senderInitials: 'KB',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Pensamento Sistêmico de Arquitetura: Implementar camada de cache em memória (Redis) e replicar o banco em modo somente-leitura (Read-Replica) para relatórios.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A separação de leitura e escrita reduziu a carga no banco principal em 80%. O sistema de folhas voltou a rodar liso e as consultas dos alunos ficaram instantâneas.',
        pmbokConcept: 'Isolamento de Cargas e Resiliência Sistêmica',
        learnings: ['Em sistemas complexos, componentes compartilham recursos; isolar cargas de trabalho protege o ecossistema corporativo.'],
        goodBad: 'good',
        risksEvaded: ['Queda do sistema de pagamentos e travamento institucional'],
        otherConsequences: ['Custo de configuração de réplicas e cache']
      },
      {
        key: 'b',
        text: 'Aumentar a memória do servidor antigo temporariamente e torcer para o banco aguentar a pressão.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -15, saudeEquipe: -10, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'O aumento de memória adiou o problema por 3 dias, mas na segunda-feira as consultas consumiram toda a RAM nova e o banco travou novamente.',
        pmbokConcept: 'Solução Superficial de Causa-Raiz',
        learnings: ['Adicionar hardware sem corrigir ineficiências arquiteturais é desperdício financeiro que não resolve a restrição sistêmica.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de refatoração'],
        otherConsequences: ['Novo travamento e prejuízo financeiro']
      },
      {
        key: 'c',
        text: 'Limitar o acesso dos alunos ao histórico para apenas 5 minutos por dia por turma.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'A restrição absurda revoltou o corpo discente, gerando protestos na reitoria e manchetes negativas na imprensa local.',
        pmbokConcept: 'Degradação Inaceitável da Experiência do Usuário',
        learnings: ['Restringir o acesso dos clientes para mascarar limitações técnicas destrói a proposta de valor do produto.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho técnico de banco'],
        otherConsequences: ['Crise pública de relações institucionais']
      }
    ]
  },
  {
    id: 'systems_5_licenca_banco_proprietario',
    title: 'Licenciamento de Software: Oracle vs PostgreSQL',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['licencas', 'custo', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Equilibrar custos recorrentes de licenças comerciais com esforço técnico de migração para software livre.',
    communicationType: 'email',
    senderRole: 'Diretor de TI',
    description: 'Assunto: Renovação de Licença. A licença do banco de dados proprietário antigo custará R$ 400.000 para renovar este ano. A alternativa é investir 2 semanas para migrar o backend para o PostgreSQL open-source e usar o dinheiro economizado na infraestrutura do projeto.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Geraldo Auditor',
    senderInitials: 'GA',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Visão Sistêmica de Longo Prazo: Migrar para PostgreSQL, economizando R$ 400.000 anuais e investindo na capacitação da equipe interna.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'A migração exigiu testes intensos, mas foi impecável. A universidade se livrou do aprisionamento tecnológico (Vendor Lock-in) e a verba poupada garantiu bolsas por 2 anos.',
        pmbokConcept: 'Independência Tecnológica e Otimização de Custos de Ciclo de Vida',
        learnings: ['Pensamento sistêmico avalia o Custo Total de Propriedade (TCO) ao longo dos anos, não apenas a conveniência do mês atual.'],
        goodBad: 'good',
        risksEvaded: ['Gasto recorrente de centenas de milhares de reais'],
        otherConsequences: ['Esforço temporário de migração de queries']
      },
      {
        key: 'b',
        text: 'Pagar a renovação milionária de R$ 400.000 e cortar o orçamento de bolsas e contratações de suporte.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: 0, saudeEquipe: -25, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'As bolsas de desenvolvimento foram canceladas para pagar a licença. Três desenvolvedores saíram do projeto por falta de pagamento.',
        pmbokConcept: 'Canibalização de Recursos Humanos por Custos de Licença',
        learnings: ['Sacrificar pessoas para manter licenças proprietárias caras drena o capital intelectual do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de migração de banco'],
        otherConsequences: ['Evasão de talentos e descontinuidade']
      },
      {
        key: 'c',
        text: 'Continuar usando o banco proprietário sem licença de forma pirata na esperança de não ser auditado.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -10, saudeEquipe: -30, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'A multinacional auditou a universidade e aplicou multa de R$ 2 milhões. O reitor e o comitê gestor foram processados por improbidade.',
        pmbokConcept: 'Violação Crítica de Compliance e Risco Legal Catastrófico',
        learnings: ['Ilegalidades de conformidade técnica geram riscos existenciais para qualquer instituição.'],
        goodBad: 'bad',
        risksEvaded: ['Custo de licença'],
        otherConsequences: ['Multa milionária e processo judicial']
      }
    ]
  },
  {
    id: 'systems_6_ambiente_staging_testes',
    title: 'Ambiente de Testes (Staging) vs Redução de Gastos',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['staging', 'qualidade', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Compreender a necessidade de espelhamento de ambientes para evitar contaminação de produção.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'Para economizar recursos de servidores, a diretoria propôs desativar o ambiente de Staging (Homologação) e fazer com que a equipe teste as alterações direto em produção em horários de menor movimento.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Manter Staging Estruturado: Otimizar o ambiente de testes usando containers leves (Docker) e dados mockados, provando que testar em produção gerará custos muito maiores.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Com containers locais e dados simulados, o custo de staging caiu 70%. O time manteve a segurança de testar antes de subir e nenhum bug vazou para produção.',
        pmbokConcept: 'Mitigação de Riscos de Ambiente e Eficiência de Recursos',
        learnings: ['Economizar desativando ambientes de teste é uma falsa economia que transfere o custo do erro para o cliente final.'],
        goodBad: 'good',
        risksEvaded: ['Testes em produção que corrompem dados reais de alunos'],
        otherConsequences: ['Modernização do ecossistema de testes em containers']
      },
      {
        key: 'b',
        text: 'Aceitar o fim do Staging e começar a testar funcionalidades direto na base de dados de produção.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'No primeiro teste direto em produção, um comando de limpeza de teste apagou o cadastro de 3.000 alunos reais. O pânico foi generalizado.',
        pmbokConcept: 'Anti-padrão de Teste em Produção e Destruição de Dados',
        learnings: ['Produção é ambiente sagrado; utilizá-lo como laboratório resulta invariavelmente em desastres de dados.'],
        goodBad: 'bad',
        risksEvaded: ['Custo de servidor de staging'],
        otherConsequences: ['Perda irreparável de dados de estudantes']
      },
      {
        key: 'c',
        text: 'Fazer testes apenas na máquina pessoal de um único estagiário sem documentar os passos.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -20, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O clássico "na minha máquina funciona": o código rodou no notebook do estagiário, mas travou completamente nos servidores Linux de produção.',
        pmbokConcept: 'Divergência de Ambientes (Environment Drift)',
        learnings: ['Ambientes de desenvolvimento locais não reproduzem a complexidade de redes e permissões de produção.'],
        goodBad: 'bad',
        risksEvaded: ['Configuração de servidores'],
        otherConsequences: ['Falhas recorrentes de deploy']
      }
    ]
  },
  {
    id: 'systems_7_backup_politica_retencao',
    title: 'Capacidade de Armazenamento e Backups',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['backup', 'dados', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Reconhecer que planos de contingência e retenção de dados são partes inegociáveis do trabalho de projeto.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1160 - Storage Cheio. O storage de backups atingiu 98% de ocupação. Para não comprar mais espaço agora, um desenvolvedor sugeriu apagar os backups históricos dos últimos 5 anos e manter apenas o backup do dia anterior.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Kenedy Backend',
    senderInitials: 'KB',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Pensamento Sistêmico de Dados: Implementar política de arquivamento frio comprimido (Cold Storage/Glacier) de baixo custo para dados históricos e backups incrementais.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A compressão e o tiering automático reduziram o custo em 85% e mantiveram a conformidade legal de guarda de históricos escolares por 50 anos.',
        pmbokConcept: 'Gestão do Ciclo de Vida dos Dados e Continuidade de Negócios',
        learnings: ['Dados históricos de instituições de ensino possuem valor legal inestimável; políticas de retenção inteligente resolvem espaço sem risco de perda.'],
        goodBad: 'good',
        risksEvaded: ['Perda irrecuperável de registros acadêmicos e penalidades legais'],
        otherConsequences: ['Conformidade total com as normas do MEC e Arquivo Nacional']
      },
      {
        key: 'b',
        text: 'Apagar todos os backups antigos e torcer para o banco de dados nunca corromper tabelas históricas.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -30 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -30, qualidadeProduto: -30, saudeEquipe: -25, conhecimentoOrganizacional: -30 },
            narrative: 'Um ransomware criptografou o banco de dados. Como não havia backups históricos, o histórico de notas de 10 anos da universidade foi perdido para sempre.'
          }
        ],
        feedbackNarrative: 'Ganhamos espaço no disco no curto prazo, mas deixamos a universidade desprotegida contra desastres.',
        pmbokConcept: 'Negligência em Gestão de Riscos Catastróficos',
        learnings: ['Economizar em redundância e segurança de dados é convidar a catástrofe institucional.'],
        goodBad: 'bad',
        risksEvaded: ['Custo de storage no mês atual'],
        otherConsequences: ['Perda definitiva de dados históricos']
      },
      {
        key: 'c',
        text: 'Desativar a criação de novos backups diários para parar de ocupar espaço no disco.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -35, saudeEquipe: -25, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'Três dias depois uma queda de energia corrompeu as tabelas e o trabalho de semanas foi perdido.',
        pmbokConcept: 'Violação de Boas Práticas Operacionais',
        learnings: ['Trabalhar sem rotinas automáticas de backup é inaceitável em qualquer padrão de engenharia de software.'],
        goodBad: 'bad',
        risksEvaded: ['Alerta de disco cheio'],
        otherConsequences: ['Perda de dias de trabalho e retrabalho massivo']
      }
    ]
  },
  {
    id: 'systems_8_terceirizacao_vs_interno',
    title: 'Terceirização de Módulo Crítico vs Time Interno',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['terceirizacao', 'aquisicoes', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Avaliar os custos ocultos de coordenação e transferência de conhecimento em aquisições externas.',
    communicationType: 'email',
    senderRole: 'Pró-Reitor de Planejamento',
    description: 'Assunto: Aceleração do Módulo Financeiro. A pró-reitoria propõe contratar uma fábrica de software externa para construir o módulo de emissão de boletos em 30 dias por R$ 80.000, mas a equipe interna terá que fiscalizar o contrato e integrar as APIs.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Lívia Gestora',
    senderInitials: 'LG',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Pensamento Sistêmico de Aquisição: Definir critérios rigorosos de aceitação técnica (Definition of Done com cobertura de testes > 80% e documentação de OpenAPI) antes de autorizar o contrato.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 10, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'O contrato com critérios técnicos estritos impediu entregas de "código espaguete". A fábrica entregou o módulo testado e a integração ocorreu suavemente.',
        pmbokConcept: 'Gestão Integrada de Aquisições e Critérios de Aceitação',
        learnings: ['Terceirizar só funciona quando a equipe compradora estabelece padrões técnicos rigorosos e auditoria de qualidade na entrega.'],
        goodBad: 'good',
        risksEvaded: ['Recebimento de código lixo e retrabalho interno'],
        otherConsequences: ['Consumo de verba financeira com entrega efetiva de valor']
      },
      {
        key: 'b',
        text: 'Contratar a fábrica sem nenhuma especificação técnica e aceitar qualquer código que eles entregarem no final dos 30 dias.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A fábrica entregou um código ilegível e sem documentação. O módulo não conversava com nosso banco e os desenvolvedores internos gastaram 2 meses consertando os erros.',
        pmbokConcept: 'Custo Oculto de Má Qualidade em Terceirizações',
        learnings: ['Terceirizações sem governança técnica transferem custos ocultos gigantescos para a equipe de manutenção interna.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de fiscalização inicial'],
        otherConsequences: ['Prejuízo financeiro e meses de retrabalho']
      },
      {
        key: 'c',
        text: 'Recusar a verba de R$ 80.000 e sobrecarregar os desenvolvedores internos para fazerem o módulo nas madrugadas.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -15, saudeEquipe: -30, conhecimentoOrganizacional: 5 },
        feedbackNarrative: 'A equipe interna entrou em colapso de estresse tentando abraçar o mundo e o projeto atrasou.',
        pmbokConcept: 'Recusa Dogmática de Recursos Complementares',
        learnings: ['Recursos externos podem ser úteis quando gerenciados com planejamento e controle de qualidade adequados.'],
        goodBad: 'bad',
        risksEvaded: ['Contratação de terceiros'],
        otherConsequences: ['Burnout e atraso no cronograma']
      }
    ]
  },
  {
    id: 'systems_9_monolito_vs_microsservicos',
    title: 'Monólito vs Microsserviços na Arquitetura',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['arquitetura', 'microsservicos', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Compreender a complexidade operacional e de rede que novas escolhas arquiteturais trazem ao ecossistema.',
    communicationType: 'slack',
    senderRole: 'Desenvolvedor Pleno',
    description: 'Um desenvolvedor empolgado com tendências quer quebrar o novo SIGAA em 18 microsserviços independentes com Kubernetes, mas a equipe atual só tem 3 programadores e pouca experiência em observabilidade distribuída.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Kenedy Backend',
    senderInitials: 'KB',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Decisão Sistêmica (Monólito Modular): Adotar arquitetura de "Monólito Modular" bem desacoplado, deixando a migração para microsserviços para quando a equipe crescer.',
        impacts: { capacidadeEntrega: 20, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A arquitetura modular permitiu velocidade de desenvolvimento alta, deploys simples e zero dores de cabeça com tracing distribuído. O foco ficou nas regras de negócio.',
        pmbokConcept: 'Adequação Arquitetural à Capacidade da Equipe',
        learnings: ['A arquitetura de software deve ser proporcional ao tamanho da equipe e ao contexto operacional; complexidade prematura é desperdício.'],
        goodBad: 'good',
        risksEvaded: ['Complexidade operacional gigantesca e falhas de rede entre serviços'],
        otherConsequences: ['Desenvolvimento rápido e manutenível']
      },
      {
        key: 'b',
        text: 'Aprovar a criação dos 18 microsserviços imediatamente para "ficar moderno no currículo".',
        impacts: { capacidadeEntrega: -35, qualidadeProduto: -20, saudeEquipe: -25, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A equipe passou 3 meses configurando Kubernetes, Service Meshes e autenticação entre serviços sem entregar uma única tela útil. O projeto quase foi cancelado.',
        pmbokConcept: 'Complexidade Acidental e Hype Tecnológico',
        learnings: ['Adotar arquiteturas complexas sem necessidade real destrói a produtividade e afasta a equipe da entrega de valor.'],
        goodBad: 'bad',
        risksEvaded: ['Sentimento de tecnologia defasada'],
        otherConsequences: ['Meses perdidos em infraestrutura sem funcionalidades']
      },
      {
        key: 'c',
        text: 'Escrever todo o sistema em um único arquivo de 50.000 linhas de PHP sem nenhuma separação de camadas.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -35, saudeEquipe: -20, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'O código virou um macarrão ininteligível. Qualquer alteração em notas quebrava o login de todos os usuários.',
        pmbokConcept: 'Anti-padrão Big Ball of Mud',
        learnings: ['Ausência total de arquitetura gera código descartável de altíssimo risco.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de estruturação de arquitetura'],
        otherConsequences: ['Acoplamento destrutivo e instabilidade total']
      }
    ]
  },
  {
    id: 'systems_10_seguranca_2fa_vs_suporte',
    title: 'Autenticação em Dois Fatores (2FA) vs Adoção',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['seguranca', '2fa', 'usabilidade', 'tradeoffs', 'pensamento_sistemico'],
    learningObjective: 'Compreender a tensão sistêmica entre segurança da informação, usabilidade e capacidade de suporte.',
    communicationType: 'slack',
    senderRole: 'Líder de UX',
    description: 'A equipe de segurança quer forçar autenticação em duas etapas (2FA via app) para todos os 40.000 estudantes no primeiro dia de aula. O time de suporte alerta que milhares de alunos não possuem smartphone compatível ou esquecerão o código, gerando colapso na central.',
    domainTag: 'Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico)',
    senderName: 'Leonara UX',
    senderInitials: 'LU',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Abordagem Sistêmica Gradual: Implementar 2FA obrigatório para professores e administradores com acesso a dados sensíveis, e disponibilizar 2FA opcional e simplificado (e-mail/SMS) com campanha educativa para alunos.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Os dados mais críticos foram blindados de imediato e os estudantes adotaram a segurança gradualmente sem sobrecarregar a central de suporte.',
        pmbokConcept: 'Segurança Baseada em Risco e Gestão de Impacto no Usuário',
        learnings: ['Mudanças sistêmicas de segurança devem calibrar o nível de risco com a capacidade operacional de absorção dos usuários.'],
        goodBad: 'good',
        risksEvaded: ['Colapso da central de atendimento no primeiro dia de aula'],
        otherConsequences: ['Adoção consciente e sustentável de segurança digital']
      },
      {
        key: 'b',
        text: 'Bloquear o acesso de todos os estudantes que não ativarem o 2FA via aplicativo no primeiro minuto.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: 0, saudeEquipe: -30, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Mais de 15.000 alunos não conseguiram acessar as salas de aula virtuais. Filas quilométricas se formaram na porta do suporte e as aulas foram suspensas.',
        pmbokConcept: 'Falta de Avaliação de Impacto Sistêmico no Usuário',
        learnings: ['Impor controles de segurança sem avaliar a viabilidade operacional do público gera caos institucional.'],
        goodBad: 'bad',
        risksEvaded: ['Vazamento de contas'],
        otherConsequences: ['Suspensão do início das aulas e protestos estudantis']
      },
      {
        key: 'c',
        text: 'Desativar todas as senhas e deixar o sistema com login livre sem nenhuma proteção.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -40, saudeEquipe: -25, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'Contas de professores foram invadidas e notas foram adulteradas em massa por pessoas não autorizadas.',
        pmbokConcept: 'Negligência Total de Segurança da Informação',
        learnings: ['Facilidade de uso nunca pode justificar a anulação da segurança de dados acadêmicos.'],
        goodBad: 'bad',
        risksEvaded: ['Chamados de suporte de senha'],
        otherConsequences: ['Fraude em massa de notas acadêmicas']
      }
    ]
  }
];
