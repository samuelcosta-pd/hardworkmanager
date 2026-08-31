import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Princípio 2: Demonstre comportamentos de liderança
 * Fundamentação: Seção 2.5.3 (Mantendo o foco da equipe do projeto) - Liderança servidora e blindagem da capacidade produtiva.
 * Objetivo Pedagógico: A Liderança Servidora (Blindagem da Equipe).
 * Total: 10 Dilemas
 */
export const leadershipEvents: GameEvent[] = [
  {
    id: 'leadership_1_escudo_suporte',
    title: 'O Escudo de Desvios (Sobrecarga de Suporte)',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['foco', 'suporte', 'lideranca', 'blindagem'],
    learningObjective: 'Manter o foco da equipe de projeto atuando como escudo contra interrupções operacionais.',
    communicationType: 'email',
    senderRole: 'Pró-Reitoria de Graduação',
    description: 'Assunto: Chamados de Matrícula. A Pró-Reitoria de Graduação exige que a equipe do novo SIGAA pare o desenvolvimento imediatamente para atender chamados telefônicos de alunos com dúvidas de login e redefinição de senhas.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Pró-Reitor Adjunto',
    senderInitials: 'PR',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Negociar a alocação emergencial de estagiários de suporte N1 e criar um FAQ automático, blindando os desenvolvedores.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 15, saudeEquipe: 20, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'Consumimos um pouco de esforço gerencial para estruturar o suporte, mas mantivemos o time 100% focado no código central. A moral da equipe subiu expressivamente.',
        pmbokConcept: 'Liderança Servidora e Proteção da Capacidade de Produção',
        learnings: ['Líderes devem proteger a equipe contra ruídos operacionais para preservar a capacidade produtiva do projeto.'],
        goodBad: 'good',
        risksEvaded: ['Burnout dos engenheiros e atraso no módulo crítico de matrículas'],
        otherConsequences: ['Estruturação de suporte sustentável para a universidade']
      },
      {
        key: 'b',
        text: 'Determinar que os desenvolvedores atendam os telefones ao mesmo tempo em que programam o novo sistema.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -20, saudeEquipe: -25, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'A troca de contexto contínua destruiu a concentração do time. Bugs graves foram inseridos no código e dois desenvolvedores seniores pediram demissão.',
        pmbokConcept: 'Sobrecarga de Contexto e Perda de Foco',
        learnings: ['Interromper desenvolvedores com demandas operacionais fragmenta o foco e gera erros críticos de programação.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito inicial com a pró-reitoria'],
        otherConsequences: ['Exaustão da equipe e quebra de prazos']
      },
      {
        key: 'c',
        text: 'O Gerente de Projetos tenta atender sozinho todos os telefonemas nas madrugadas para poupar a equipe.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: 10, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O time ficou grato, mas o Gerente entrou em colapso por exaustão e o projeto ficou sem liderança estratégica na semana mais crítica.',
        pmbokConcept: 'Gargalo Gerencial e Liderança Heroica Inviável',
        learnings: ['Liderança heroica que centraliza esforço em vez de estruturar processos gera gargalos institucionais.'],
        goodBad: 'bad',
        risksEvaded: ['Interrupção direta dos desenvolvedores'],
        otherConsequences: ['Desgaste pessoal insustentável do líder']
      }
    ]
  },
  {
    id: 'leadership_2_sobrecarga_burnout',
    title: 'Pressão por Horas Extras e Risco de Burnout',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['burnout', 'sobrecarga', 'lideranca', 'sustentabilidade'],
    learningObjective: 'Garantir ritmo sustentável de trabalho protegendo a saúde e retenção do time.',
    communicationType: 'slack',
    senderRole: 'Diretoria de TI',
    description: 'A Diretoria de TI exige que toda a equipe trabalhe 12 horas por dia, incluindo sábados e domingos no próximo mês, para compensar um atraso causado por lentidão de compras de servidores pela universidade.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Diretor de TI',
    senderInitials: 'DT',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Negociar com dados de capacidade e fatiar o escopo do lançamento, recusando horas extras predatórias e mantendo ritmo sustentável.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: 15, saudeEquipe: 25, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'A liderança usou dados do burndown para provar que horas extras gerariam defeitos e retrabalho. A diretoria aceitou fatiar o escopo e o time trabalhou motivado.',
        pmbokConcept: 'Ritmo Sustentável e Proteção da Saúde da Equipe',
        learnings: ['Manter ritmo sustentável de trabalho protege a qualidade a longo prazo e evita rotatividade voluntária (turnover).'],
        goodBad: 'good',
        risksEvaded: ['Demissões em massa por burnout e código de má qualidade'],
        otherConsequences: ['Atrito político momentâneo com a diretoria']
      },
      {
        key: 'b',
        text: 'Acatar a ordem da diretoria e exigir que todos trabalhem nos finais de semana sob ameaça de corte de bolsas.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -25, saudeEquipe: -35, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Nas primeiras duas semanas o volume de commits subiu, mas logo o cansaço cobrou o preço: bugs críticos foram para produção e o clima ficou insuportável.',
        pmbokConcept: 'Falsa Produtividade por Exaustão',
        learnings: ['Horas extras crônicas geram mais defeitos do que entregas reais de valor.'],
        goodBad: 'bad',
        risksEvaded: ['Confronto com a diretoria de TI'],
        otherConsequences: ['Colapso da saúde mental da equipe']
      },
      {
        key: 'c',
        text: 'Prometer à diretoria que o time fará as horas extras, mas orientar os desenvolvedores a fingirem que estão logados sem trabalhar.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A mentira foi descoberta quando a entrega atrasou do mesmo jeito. A credibilidade de toda a liderança foi aniquilada.',
        pmbokConcept: 'Falta de Integridade e Liderança Evasiva',
        learnings: ['Liderança sem coragem e sem transparência destrói a confiança da equipe e dos patrocinadores.'],
        goodBad: 'bad',
        risksEvaded: ['Conflito no curto prazo'],
        otherConsequences: ['Demissão da liderança por quebra de confiança']
      }
    ]
  },
  {
    id: 'leadership_3_saida_arquiteto_senior',
    title: 'Demissão Repentina do Arquiteto Sênior',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['turnover', 'conhecimento', 'lideranca', 'gestao_crise'],
    learningObjective: 'Conduzir a transição de membros-chave sem desestabilizar a equipe.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'O principal arquiteto do sistema de matrículas recebeu uma proposta irrecusável do exterior e sairá em 10 dias. Todo o conhecimento de autenticação segura e concorrência está concentrado na cabeça dele.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Instituir 10 dias de Pair Programming intensivo e documentação gravada com os desenvolvedores pleno.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 15, saudeEquipe: 15, conhecimentoOrganizacional: 30 },
        feedbackNarrative: 'A transferência de conhecimento foi um sucesso. Os desenvolvedores pleno assumiram o módulo com confiança e a saída do sênior não parou o projeto.',
        pmbokConcept: 'Disseminação de Conhecimento e Continuidade Operacional',
        learnings: ['Líderes transformam crises de perda de talentos em oportunidades de crescimento para os demais membros da equipe.'],
        goodBad: 'good',
        risksEvaded: ['Silo de conhecimento perdido e paralisação do módulo'],
        otherConsequences: ['Empoderamento dos desenvolvedores mais jovens']
      },
      {
        key: 'b',
        text: 'Exigir que o arquiteto programe sozinho o máximo de código possível nas madrugadas antes de ir embora.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -20, saudeEquipe: -10, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'Ele entregou muito código sem testes e sem documentação. No dia seguinte à sua saída, o sistema caiu e ninguém soube como reiniciar os serviços.',
        pmbokConcept: 'Agravamento de Silos de Conhecimento',
        learnings: ['Código sem compartilhamento de contexto se torna dívida técnica inoperável quando o autor vai embora.'],
        goodBad: 'bad',
        risksEvaded: ['Perda de tempo ensinando outros'],
        otherConsequences: ['Caos na manutenção pós-saída do profissional']
      },
      {
        key: 'c',
        text: 'Tentar reter o profissional criando atritos contratuais e ameaçando reter seus certificados.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -10, saudeEquipe: -30, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A atitude antiética gerou revolta generalizada. Toda a equipe se solidarizou com o colega e o clima de trabalho ficou tóxico.',
        pmbokConcept: 'Comportamento Antiético e Destruição de Clima',
        learnings: ['Relações profissionais devem ser pautadas por respeito e ética; coerção destrói a cultura organizacional.'],
        goodBad: 'bad',
        risksEvaded: ['Saída imediata'],
        otherConsequences: ['Processos trabalhistas e greve informal da equipe']
      }
    ]
  },
  {
    id: 'leadership_4_conflito_dev_ux',
    title: 'Guerra de Egos: Desenvolvedores vs Designers',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['conflito', 'mediacao', 'lideranca', 'colaboracao'],
    learningObjective: 'Mediar conflitos interdisciplinares alinhando a equipe ao propósito comum.',
    communicationType: 'slack',
    senderRole: 'Líder de UX',
    description: 'Os desenvolvedores estão ignorando os protótipos de acessibilidade criados pelo time de UX, alegando que "design é frescura e o que importa é o backend rodar rápido". O time de UX ameaça parar de desenhar as telas.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Marina Design',
    senderInitials: 'MD',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Conduzir um workshop conjunto com testes de usabilidade com alunos cegos e de baixa visão, estabelecendo um Design System unificado.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 20, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'Ver os alunos reais com dificuldades comoveu os desenvolvedores. Engenharia e Design uniram forças para construir um dos sistemas mais acessíveis do país.',
        pmbokConcept: 'Criação de Propósito Compartilhado e Resolução Construtiva de Conflitos',
        learnings: ['Conflitos entre áreas são superados conectando a equipe ao impacto real do produto na vida dos usuários.'],
        goodBad: 'good',
        risksEvaded: ['Ruptura interna e retrabalho de interface'],
        otherConsequences: ['Fortalecimento da empatia e colaboração interfuncional']
      },
      {
        key: 'b',
        text: 'Dar razão total aos desenvolvedores e cortar o time de UX para acabar com as discussões.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A interface virou uma réplica do sistema de 1995. O Ministério Público notificou a UFC por falta de acessibilidade para pessoas com deficiência.',
        pmbokConcept: 'Violação de Inclusão e Descarte de Competências',
        learnings: ['Descartar disciplinas vitais como design e acessibilidade cria vulnerabilidades legais e funcionais severas.'],
        goodBad: 'bad',
        risksEvaded: ['Discussões em reuniões'],
        otherConsequences: ['Ação civil pública e rejeição dos usuários']
      },
      {
        key: 'c',
        text: 'Obrigar os desenvolvedores a implementarem 100% das ideias do UX sem direito a contestar viabilidade técnica.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: 0, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'Animações pesadas travaram os servidores da universidade. Os desenvolvedores ficaram ressentidos por terem seus avisos técnicos ignorados.',
        pmbokConcept: 'Imposição Autoritária e Ignorância de Viabilidade Técnica',
        learnings: ['Design excelente precisa respeitar as restrições físicas de arquitetura e infraestrutura.'],
        goodBad: 'bad',
        risksEvaded: ['Reclamação do time de design'],
        otherConsequences: ['Queda de performance e ressentimento técnico']
      }
    ]
  },
  {
    id: 'leadership_5_microgerenciamento_diretoria',
    title: 'Diretor no Grupo dos Desenvolvedores',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['comunicacao', 'lideranca', 'blindagem', 'gestao_stakeholder'],
    learningObjective: 'Estabelecer canais claros de comunicação protegendo a equipe de cobranças indevidas.',
    communicationType: 'slack',
    senderRole: 'Desenvolvedor Júnior',
    description: 'O Diretor de Administração entrou no canal informal dos desenvolvedores júnior no Slack e começou a cobrar prazos de forma ríspida diretamente para os estagiários, gerando pânico na equipe.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Paulyne QA',
    senderInitials: 'PQ',
    avatarImage: '/Personagens/Paulyne.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Chamar o diretor para uma reunião individual, alinhar que as cobranças devem ser feitas via PM e criar um canal executivo de transparência.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 10, saudeEquipe: 25, conhecimentoOrganizacional: 5 },
        feedbackNarrative: 'A liderança blindou os júniores com firmeza e elegância. O diretor passou a receber boletins semanais objetivos e os desenvolvedores voltaram a trabalhar em paz.',
        pmbokConcept: 'Comunicação Estruturada e Proteção Psicológica',
        learnings: ['Líderes de projeto estabelecem a governança de comunicação, impedindo o assédio e o desvio de hierarquia sobre membros vulneráveis.'],
        goodBad: 'good',
        risksEvaded: ['Pânico, insegurança psicológica e demissão de júniores'],
        otherConsequences: ['Canal formalizado de prestação de contas com o diretor']
      },
      {
        key: 'b',
        text: 'Não fazer nada para não criar atrito com o diretor e dizer aos estagiários que "faz parte da vida corporativa".',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -15, saudeEquipe: -30, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Dois estagiários brilhantes pediram para sair da bolsa por ansiedade. A equipe perdeu a confiança no gerente por omissão.',
        pmbokConcept: 'Omissão de Liderança e Falta de Segurança Psicológica',
        learnings: ['A omissão do líder diante de abusos externos destrói a segurança psicológica e o engajamento da equipe.'],
        goodBad: 'bad',
        risksEvaded: ['Conversa difícil com o diretor'],
        otherConsequences: ['Perda de talentos e clima de medo']
      },
      {
        key: 'c',
        text: 'Discutir agressivamente com o diretor publicamente no canal geral do Slack na frente de todos.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: -15, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O escândalo público virou caso de ouvidoria. O projeto foi paralisado para averiguação de conduta disciplinar.',
        pmbokConcept: 'Descontrole Emocional e Falta de Inteligência Política',
        learnings: ['Conflitos com stakeholders devem ser resolvidos em privado com profissionalismo e dados, nunca em arenas públicas.'],
        goodBad: 'bad',
        risksEvaded: ['Passividade'],
        otherConsequences: ['Processo administrativo disciplinar']
      }
    ]
  },
  {
    id: 'leadership_6_post_mortem_sem_culpa',
    title: 'Incidente em Produção: A "Caça às Bruxas"',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['cultura', 'qualidade', 'lideranca', 'post_mortem'],
    learningObjective: 'Promover cultura de aprendizado contínuo através de Blameless Post-Mortem.',
    communicationType: 'ticket',
    senderRole: 'Desenvolvedor Pleno',
    description: 'Ticket #1190 - Queda do Portal. Uma configuração errada subida por um desenvolvedor novato derrubou o portal de matrículas por 20 minutos. A Diretoria de TI exige o nome do responsável para aplicar punição administrativa.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Proteger o desenvolvedor, assumir a falha como sistêmica e implementar travas automatizadas no CI/CD para impedir que o erro se repita.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 20, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'A diretoria aceitou o relatório técnico que focou no processo e não na pessoa. As travas criadas impediram 5 novos incidentes parecidos nos meses seguintes.',
        pmbokConcept: 'Cultura de Aprendizado Contínuo e Segurança Sistêmica',
        learnings: ['Erros humanos são sintomas de falhas nos processos e ferramentas; culpar indivíduos esconde os problemas em vez de corrigi-los.'],
        goodBad: 'good',
        risksEvaded: ['Cultura de medo onde desenvolvedores escondem bugs'],
        otherConsequences: ['Fortalecimento das travas de qualidade e testes automatizados']
      },
      {
        key: 'b',
        text: 'Entregar o nome do desenvolvedor novato para a diretoria punir e suspender o estagiário.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -20, saudeEquipe: -30, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O novato foi suspenso. Com medo de punição, toda a equipe começou a esconder erros e empurrar tarefas arriscadas uns para os outros.',
        pmbokConcept: 'Cultura do Medo e Ocultação de Erros',
        learnings: ['Ambientes punitivos incentivam a ocultação de falhas, tornando o sistema muito mais frágil a longo prazo.'],
        goodBad: 'bad',
        risksEvaded: ['Desagradar a diretoria que queria um culpado'],
        otherConsequences: ['Ocultação crônica de bugs e desconfiança geral']
      },
      {
        key: 'c',
        text: 'Mentir dizendo que a culpa foi de uma invasão de hackers externos para não admitir o erro da equipe.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -10, saudeEquipe: -15, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A Polícia Federal foi acionada para investigar o suposto ataque cibernético e descobriu o erro banal de configuração. A vergonha foi nacional.',
        pmbokConcept: 'Falta de Ética e Transparência',
        learnings: ['A transparência profissional é pilar inegociável da gestão ética de projetos.'],
        goodBad: 'bad',
        risksEvaded: ['Admissão de erro imediato'],
        otherConsequences: ['Escândalo institucional e investigação policial']
      }
    ]
  },
  {
    id: 'leadership_7_reconhecimento_time',
    title: 'Apropriação de Créditos da Entrega',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['reconhecimento', 'moral', 'lideranca', 'motivacao'],
    learningObjective: 'Garantir visibilidade e valorização aos esforços dos membros da equipe.',
    communicationType: 'email',
    senderRole: 'Gabinete da Reitoria',
    description: 'Assunto: Lançamento do Portal. A Reitoria publicou matéria no jornal institucional comemorando o sucesso da primeira fase do SGA, mas atribuiu todos os louros exclusivamente aos diretores, omitindo o time técnico.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Reitoria da UFC',
    senderInitials: 'RE',
    avatarImage: '/Personagens/Rainara.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Organizar uma sessão solene de encerramento com demonstração técnica aberta onde os próprios desenvolvedores e designers apresentam seu trabalho à comunidade.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 10, saudeEquipe: 25, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Os aplausos dos professores e alunos emocionaram a equipe. O reconhecimento público autêntico restaurou o orgulho e o senso de dono dos desenvolvedores.',
        pmbokConcept: 'Reconhecimento e Empoderamento da Equipe',
        learnings: ['Líderes garantem que o valor produzido pela equipe seja reconhecido, construindo senso de pertencimento e motivação intrínseca.'],
        goodBad: 'good',
        risksEvaded: ['Ressentimento e desengajamento da equipe técnica'],
        otherConsequences: ['Visibilidade positiva para os talentos da universidade']
      },
      {
        key: 'b',
        text: 'Dizer aos desenvolvedores que "é assim mesmo no serviço público" e que não devem esperar elogios.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -5, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'A apatia se instalou. A equipe passou a fazer apenas o mínimo estrito do horário, sem qualquer entusiasmo ou iniciativa própria.',
        pmbokConcept: 'Desmotivação e Perda de Engajamento',
        learnings: ['Desconsiderar a necessidade humana de reconhecimento gera conformismo e mediocridade na entrega.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de organizar eventos'],
        otherConsequences: ['Apatia crônica e perda de proatividade']
      },
      {
        key: 'c',
        text: 'Ameaçar parar o sistema caso o Reitor não publique uma retratação no jornal no dia seguinte.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -10, saudeEquipe: -15, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'A chantagem foi vista como insubordinação grave. A liderança do projeto foi afastada temporariamente.',
        pmbokConcept: 'Insubordinação e Conflito Destrutivo',
        learnings: ['Reconhecimento se constrói com pontes e visibilidade profissional, não com chantagem política.'],
        goodBad: 'bad',
        risksEvaded: ['Passividade'],
        otherConsequences: ['Afastamento da liderança e crise de governança']
      }
    ]
  },
  {
    id: 'leadership_8_isolamento_silos',
    title: 'Silos de Conhecimento e o "Dev Estrela"',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['silos', 'colaboracao', 'lideranca', 'cultura'],
    learningObjective: 'Desmontar silos técnicos e incentivar a propriedade coletiva do código.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'Um dos desenvolvedores mais experientes se recusa a comentar o código, não deixa ninguém revisar seus Pull Requests e diz que "se os outros não entendem, o problema é deles".',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Roberto Arquiteto',
    senderInitials: 'RA',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Estabelecer Code Review obrigatório com 2 aprovadores e pareamento rotativo, alinhando que qualidade de software é um esporte coletivo.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'O desenvolvedor resistiu no início, mas com a ajuda do time, o conhecimento se espalhou. O sistema deixou de ser refém de uma única pessoa.',
        pmbokConcept: 'Propriedade Coletiva de Código e Mentoria Mútua',
        learnings: ['Nenhum talento individual compensa o risco de silos de conhecimento e arrogância técnica em projetos colaborativos.'],
        goodBad: 'good',
        risksEvaded: ['Dependência crítica de um único indivíduo (Bus Factor 1)'],
        otherConsequences: ['Elevação do nível técnico médio de toda a equipe']
      },
      {
        key: 'b',
        text: 'Deixar o desenvolvedor fazer tudo do jeito dele porque ele é "rápido demais para ser atrapalhado pelos outros".',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -20, saudeEquipe: -20, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'O código virou uma caixa-preta ilegível. Quando ele tirou férias, ninguém conseguiu corrigir um bug simples de login que durou 4 dias.',
        pmbokConcept: 'Bus Factor Perigoso e Dependência Tóxica',
        learnings: ['Permitir heróis individuais sem governança técnica cria bombas-relógio de manutenção futura.'],
        goodBad: 'bad',
        risksEvaded: ['Conflito com o desenvolvedor experiente'],
        otherConsequences: ['Paralisação do projeto durante a ausência do profissional']
      },
      {
        key: 'c',
        text: 'Demitir o desenvolvedor sumariamente no mesmo dia sem planejar a absorção das tarefas.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -25 },
        feedbackNarrative: 'A demissão sem transição deixou o módulo de notas inacabado e sem ninguém capaz de assumir de imediato.',
        pmbokConcept: 'Reação Intempestiva sem Mitigação de Riscos',
        learnings: ['Decisões de pessoal drásticas exigem planejamento de contingência e mitigação de impacto no projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Mau comportamento do desenvolvedor'],
        otherConsequences: ['Vazio técnico e atraso severo nas entregas']
      }
    ]
  },
  {
    id: 'leadership_9_capacitacao_vs_pressao',
    title: 'Capacitação Técnica vs Velocidade Imediata',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['capacitacao', 'lideranca', 'longo_prazo', 'tecnologia'],
    learningObjective: 'Investir no desenvolvimento contínuo da equipe para sustentar entregas futuras.',
    communicationType: 'email',
    senderRole: 'Líder de UX',
    description: 'Assunto: Treinamento em Design System. A equipe de frontend e design pediu 1 dia de treinamento em componentes acessíveis e TypeScript moderno, mas há entregas agendadas para o fim da sprint.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Leonara UX',
    senderInitials: 'LU',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Aprovar o dia de capacitação, ajustando a meta da sprint e tratando o aprendizado como investimento de alto retorno.',
        impacts: { capacidadeEntrega: -5, qualidadeProduto: 25, saudeEquipe: 20, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'Com o treinamento, a equipe passou a codificar telas 40% mais rápido e sem bugs de acessibilidade nas sprints seguintes. O investimento se pagou com folga.',
        pmbokConcept: 'Desenvolvimento de Competências e Melhoria Contínua',
        learnings: ['Capacitar a equipe aumenta a velocidade e a qualidade das entregas futuras, combatendo a obsolescência técnica.'],
        goodBad: 'good',
        risksEvaded: ['Erros primários por falta de domínio das ferramentas'],
        otherConsequences: ['Aumento sustentável da velocidade nas próximas sprints']
      },
      {
        key: 'b',
        text: 'Proibir qualquer treinamento durante o projeto, dizendo que "quem quiser aprender deve estudar nas madrugadas em casa".',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -20, saudeEquipe: -25, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O time continuou usando código obsoleto e cometendo erros básicos. A sensação de desvalorização profissional desengajou a equipe.',
        pmbokConcept: 'Visão Imediatista e Sucateamento Intelectual',
        learnings: ['Negar capacitação em projetos de inovação gera código antiquado e equipes desmotivadas.'],
        goodBad: 'bad',
        risksEvaded: ['Pausa na sprint atual'],
        otherConsequences: ['Código repleto de más práticas e evasão de desenvolvedores']
      },
      {
        key: 'c',
        text: 'Parar o projeto inteiro por 2 meses para que todos façam pós-graduação antes de continuar o sistema.',
        impacts: { capacidadeEntrega: -40, qualidadeProduto: 10, saudeEquipe: 0, conhecimentoOrganizacional: 30 },
        feedbackNarrative: 'A reitoria cancelou o orçamento do projeto devido à paralisação injustificável do cronograma institucional.',
        pmbokConcept: 'Desproporção de Investimento e Perda de Foco em Entrega',
        learnings: ['O aprendizado em projetos deve ser contínuo e em doses equilibradas com as entregas de valor.'],
        goodBad: 'bad',
        risksEvaded: ['Falta de conhecimento acadêmico'],
        otherConsequences: ['Cancelamento do contrato do projeto']
      }
    ]
  },
  {
    id: 'leadership_10_protecao_estagiarios',
    title: 'Desvio de Função dos Bolsistas da UFC',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['bolsistas', 'etica', 'lideranca', 'mentoria'],
    learningObjective: 'Honrar o compromisso pedagógico e ético com a formação dos estagiários e bolsistas universitários.',
    communicationType: 'slack',
    senderRole: 'Desenvolvedora Júnior',
    description: 'Vários setores da administração da universidade descobriram que o projeto tem bolsistas talentosos e começaram a mandar tarefas paralelas de conserto de impressoras e digitação de contratos para os estudantes.',
    domainTag: 'Demonstre comportamentos de liderança',
    senderName: 'Paulyne QA',
    senderInitials: 'PQ',
    avatarImage: '/Personagens/Paulyne.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Notificar formalmente os setores que os bolsistas têm plano de trabalho estrito em engenharia de software e mentorar os estudantes a reportarem desvios.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 10, saudeEquipe: 20, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Os bolsistas se sentiram respeitados e valorizados. Seu rendimento no desenvolvimento do sistema acadêmico dobrou e eles aprenderam boas práticas de engenharia.',
        pmbokConcept: 'Mentoria Ética e Proteção do Escopo de Pessoal',
        learnings: ['Líderes em ambiente universitário têm responsabilidade formativa; proteger os bolsistas garante o sucesso do projeto e da formação acadêmica.'],
        goodBad: 'good',
        risksEvaded: ['Desvio de finalidade e desmotivação dos estudantes'],
        otherConsequences: ['Formação de excelentes novos profissionais para o mercado']
      },
      {
        key: 'b',
        text: 'Permitir que os bolsistas façam tudo o que os outros setores pedirem para "fazer política de boa vizinhança" no campus.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -15, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Os estudantes passaram os dias carregando caixas e formatando PCs antigos. O código do SIGAA ficou abandonado e os prazos estouraram.',
        pmbokConcept: 'Desvio de Escopo de Recursos Humanos',
        learnings: ['Permitir desvio de função de recursos do projeto drena a capacidade produtiva e fere o propósito do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito com outros departamentos'],
        otherConsequences: ['Abandono do projeto pelos bolsistas']
      },
      {
        key: 'c',
        text: 'Proibir os bolsistas de conversarem com qualquer pessoa fora da sala do projeto sob ameaça de desligamento.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -5, saudeEquipe: -25, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O ambiente virou um regime carcerário. O clima ficou opressivo e a universidade abriu uma sindicância interna.',
        pmbokConcept: 'Autoritarismo e Clima Tóxico',
        learnings: ['Governança e limites profissionais se estabelecem com diálogo institucional, nunca com autoritarismo paranoico.'],
        goodBad: 'bad',
        risksEvaded: ['Desvio de função'],
        otherConsequences: ['Sindicância e denúncia na comissão de ética']
      }
    ]
  }
];
