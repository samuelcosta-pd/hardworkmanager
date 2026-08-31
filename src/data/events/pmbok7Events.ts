import { GameEvent, EventCategory, EventDifficulty } from '@/types';

export const pmbok7Events: GameEvent[] = [
  {
    id: 'lean-gargalo-qa',
    title: 'Gargalo Crítico no Fluxo de Valor (Lean)',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 1,
    tags: ['lean', 'fluxo', 'gargalo'],
    learningObjective: 'Compreender o conceito de Teoria das Restrições e Swarming.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'A equipe de QA está sobrecarregada, e as entregas não estão fluindo. Como proceder?\n\nContexto: Observamos um acúmulo gigante de tickets parados em "Testes". Os desenvolvedores (Devs) continuam puxando novas histórias e codificando rápido, mas a equipe de QA não consegue dar vazão. O fluxo de valor está entupido.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Líder Técnico',
    senderInitials: 'LT',
    avatarImage: '/avatars/tech_lead.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Swarming: Parar o desenvolvimento de novas features e alocar os Devs para ajudar QA a testar e automatizar o que está parado.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 20, saudeEquipe: 10 },
        feedbackNarrative: 'Os desenvolvedores reclamaram no início por terem que testar, mas o gargalo foi desfeito. O fluxo voltou a correr livremente e a entrega global de valor aumentou drasticamente na sprint seguinte.',
        pmbokConcept: 'Otimização de Processos (Lean / Teoria das Restrições)',
        learnings: ['Em Lean, um recurso não gargalo trabalhando em velocidade máxima apenas gera mais desperdício (estoque). O foco deve ser resolver a restrição do fluxo (Swarming).'],
        goodBad: 'good',
        risksEvaded: ['Entregas atrasadas', 'Sobrecarga de QA'],
        otherConsequences: ['Devs ganham mais empatia pelo trabalho de QA']
      },
      {
        key: 'b',
        text: 'Manter os Devs codando novas features para não perder a métrica de "Velocity" de código, e cobrar horas extras do time de QA.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -10, saudeEquipe: -25 },
        feedbackNarrative: 'O código continuou sendo produzido, gerando um estoque gigantesco de software não testado. O time de QA entrou em burnout, cometeu erros sob pressão e bugs críticos foram para produção.',
        pmbokConcept: 'Métricas de Vaidade e Sobrecarga de Capacidade',
        learnings: ['Velocity de código sem validação de QA é ilusão. Otimizar partes locais do fluxo destrói o fluxo global e exaure os times gargalo.'],
        goodBad: 'bad',
        risksEvaded: [],
        otherConsequences: ['Aumento de atrito entre times']
      },
      {
        key: 'c',
        text: 'Aumentar a equipe de QA contratando freelas imediatamente sem integração adequada.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -15, saudeEquipe: -10 },
        feedbackNarrative: 'A integração dos novos freelas tomou tempo dos QAs atuais, piorando o gargalo inicial. Erros de contexto fizeram os testes falharem repetidamente.',
        pmbokConcept: 'Custo de Coordenação e Curva de Aprendizado',
        learnings: ['A Lei de Brooks se aplica: adicionar recursos a um processo já atrasado frequentemente agrava o atraso no curto prazo.'],
        goodBad: 'bad',
        risksEvaded: [],
        otherConsequences: ['Gastos desnecessários', 'Retrabalho de comunicação']
      }
    ]
  },
  {
    id: 'lean-desperdicio-adm',
    title: 'Excesso de Burocracia Administrativa (Lean)',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 1,
    tags: ['burocracia', 'lean', 'processos'],
    learningObjective: 'Identificar e mitigar processos burocráticos que causam desperdícios.',
    communicationType: 'email',
    senderRole: 'PMO Universitário',
    description: 'A diretoria exige relatórios longos diários, prejudicando o fluxo de trabalho.\n\nContexto: A diretoria exige relatórios de status em PDF com 20 páginas todos os dias de cada desenvolvedor. O time está gastando quase 2 horas diárias preenchendo planilhas duplicadas, reduzindo a eficiência global.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'PMO Universitário',
    senderInitials: 'PM',
    avatarImage: '/avatars/pmo.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Negociar com a diretoria: substituir os PDFs por acesso direto aos dashboards do Jira em tempo real.',
        impacts: { capacidadeEntrega: 20, qualidadeProduto: 0, saudeEquipe: 15 },
        feedbackNarrative: 'A diretoria resistiu, mas após o PM ensiná-los a usar o painel, adoraram a transparência em tempo real. A equipe ganhou de volta quase um dia de trabalho na semana.',
        pmbokConcept: 'Eliminação de Desperdícios e Transparência Radiante',
        learnings: ['Desperdício (Muda) de atividades que não agregam valor ao produto final deve ser eliminado usando radiadores de informação.'],
        goodBad: 'good',
        risksEvaded: ['Exaustão burocrática'],
        otherConsequences: ['Maior transparência para stakeholders']
      },
      {
        key: 'b',
        text: 'Cumprir a exigência criando um turno administrativo onde todos param de codificar às 16h para preencher relatórios.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: 0, saudeEquipe: -15 },
        feedbackNarrative: 'A moral despencou. "Somos engenheiros ou digitadores de PDF?", questionaram os devs. O tempo ocioso burocrático minou as entregas do ciclo.',
        pmbokConcept: 'Ineficiência de Processos',
        learnings: ['Submissão passiva a processos burocráticos suga a capacidade produtiva e desengaja a equipe de desenvolvimento técnica.'],
        goodBad: 'bad',
        risksEvaded: ['Desalinhamento imediato com diretoria'],
        otherConsequences: ['Perda drástica de ritmo produtivo']
      },
      {
        key: 'c',
        text: 'Contratar um estagiário apenas para entrevistar os devs o dia todo e preencher as planilhas para a diretoria.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -5, saudeEquipe: -5 },
        feedbackNarrative: 'O estagiário passou o dia interrompendo os devs no meio do trabalho focado. Os relatórios gerados ficaram cheios de inconsistências.',
        pmbokConcept: 'Aumento da Complexidade de Coordenação',
        learnings: ['Adicionar um proxy para gerar documentação frequentemente causa quebra de contexto (context switching) prejudicial ao desenvolvedor.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito direto com diretoria'],
        otherConsequences: ['Risco de burnout de contexto e sobrecarga cognitiva']
      }
    ]
  },
  {
    id: 'aquisicoes-migracao-nuvem',
    title: 'Estratégia de Aquisição: Migração para a Nuvem',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 1,
    tags: ['aquisicoes', 'nuvem', 'riscos'],
    learningObjective: 'Compreender as diferenças entre RFQ, RFI e RFP em compras complexas.',
    communicationType: 'email',
    senderRole: 'Diretor de TI',
    description: 'Decidir como conduzir o processo de aquisição para migração para a nuvem.\n\nContexto: Precisamos migrar o banco do sistema para a nuvem. O escopo é muito incerto, não sabemos o tamanho real da infra. A diretoria sugeriu lançar uma Request for Quote (RFQ) baseada no menor preço para fechar logo.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Diretor de TI',
    senderInitials: 'DT',
    avatarImage: '/avatars/director.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Recusar a RFQ e lançar uma RFI (Request for Information) seguida de RFP (Request for Proposal) focando na solução técnica e não no preço final.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 20, saudeEquipe: 5 },
        feedbackNarrative: 'O processo demorou meses, mas recebemos propostas excelentes que adequaram o escopo corretamente. A migração ocorreu com segurança absoluta e parceiros qualificados.',
        pmbokConcept: 'Gestão de Aquisições: Tipos de Documento (RFI/RFP/RFQ)',
        learnings: ['RFQ (Menor Preço) só funciona para produtos comoditizados (hardware de prateleira). Escopos complexos exigem RFPs focadas em solução técnica.'],
        goodBad: 'good',
        risksEvaded: ['Problemas críticos de performance e downtime futuro'],
        otherConsequences: ['Atraso aceitável nas fases iniciais em prol de segurança']
      },
      {
        key: 'b',
        text: 'Seguir com o RFQ para ganhar tempo, contratando o provedor que enviou a proposta mais barata.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -25, saudeEquipe: -15 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { qualidadeProduto: -20, saudeEquipe: -20, capacidadeEntrega: -20 },
            narrative: 'O fornecedor barato utilizava infraestrutura obsoleta. Tivemos downtime grave de 12 horas. O "barato" saiu caríssimo.'
          }
        ],
        feedbackNarrative: 'A contratação foi rápida. A diretoria comemorou o "corte de custos". Mas a equipe técnica já notou lentidão no novo serviço.',
        pmbokConcept: 'Risco de Aquisições por Custo Irrealista',
        learnings: ['Contratar serviços complexos pelo menor preço (RFQ inadequada) resulta invariavelmente em falhas de qualidade e refação.'],
        goodBad: 'bad',
        risksEvaded: ['Reclamações sobre prazos iniciais de contratação'],
        otherConsequences: ['Criação de dívida de infraestrutura iminente']
      },
      {
        key: 'c',
        text: 'Fazer o processo internamente comprando servidores físicos novos para "ter mais controle" sem nuvem.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -10, saudeEquipe: -15 },
        feedbackNarrative: 'A universidade perdeu meses comprando hardware. O servidor chegou, precisou de instalação manual e não ofereceu a redundância que a nuvem prometia.',
        pmbokConcept: 'Fazer vs Comprar (Make-or-Buy)',
        learnings: ['Decisões de Make-or-Buy erradas prendem a organização a investimentos de capital insustentáveis quando existiam opções ágeis escaláveis.'],
        goodBad: 'bad',
        risksEvaded: ['Risco de vendor lock-in na nuvem'],
        otherConsequences: ['Gasto enorme de CAPEX ao invés de OPEX', 'Falta de escalabilidade']
      }
    ]
  },
  {
    id: 'conhecimento-sistema-legado',
    title: 'Conhecimento Tácito Preso em um Legado',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 1,
    tags: ['conhecimento', 'legado', 'tácito'],
    learningObjective: 'Saber converter conhecimento tácito crítico em explícito.',
    communicationType: 'slack',
    senderRole: 'Líder UX',
    description: 'Um colaborador essencial vai se ausentar e todo o conhecimento não está documentado.\n\nContexto: A única pessoa que entende as regras complexas de repasse financeiro do sistema legado vai tirar 2 meses de licença. Não há nada documentado. Ele se dispôs a dar um treinamento oral para 50 pessoas amanhã.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Líder UX',
    senderInitials: 'UX',
    avatarImage: '/avatars/ux_lead.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Cancelar a palestra genérica e colocá-lo para desenhar fluxogramas visuais interativos das regras (Explicit knowledge) junto à UX.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'As entregas travaram e ele ficou estressado mapeando regras. Mas a documentação visual viva garantiu que o sistema operasse bem durante toda a sua licença.',
        pmbokConcept: 'Conversão de Conhecimento Tácito para Explícito',
        learnings: ['Sessões de conversa (tácito para tácito) evaporam. Informação crítica de sistema precisa ser mapeada em artefatos explícitos permanentes.'],
        goodBad: 'good',
        risksEvaded: ['Perda de conhecimento crítico de domínio'],
        otherConsequences: ['Diminuição de velocidade momentânea']
      },
      {
        key: 'b',
        text: 'Permitir a palestra (treinamento em massa), pedir para alguém gravar o vídeo e deixar no Drive da empresa.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -10, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Um vídeo de 4 horas foi jogado no Drive. Sem indexação, a equipe demorava horas buscando o trecho certo para resolver um erro. Foi caótico.',
        pmbokConcept: 'Falsa Sensação de Retenção de Conhecimento',
        learnings: ['Arquivos brutos de 4 horas não são "documentação". Conhecimento útil precisa ser acessível, pesquisável e arquiteturalmente lógico.'],
        goodBad: 'bad',
        risksEvaded: ['Parar de produzir por um dia'],
        otherConsequences: ['Redução da base real de conhecimento e manutenibilidade']
      },
      {
        key: 'c',
        text: 'Não intervir. Confiar que a equipe é "ágeis o suficiente" para deduzir as lógicas de negócio lendo o código legado.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -25, conhecimentoOrganizacional: -30 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -20, qualidadeProduto: -25, saudeEquipe: -20 },
            narrative: 'Erramos as contas de repasse financeiro. Professores ficaram sem salário por um dia. Crise institucional brutal.'
          }
        ],
        feedbackNarrative: 'Durante 2 semanas foi ótimo. Ninguém perdeu tempo documentando. A velocity explodiu em pontos mágicos de escopo inútil.',
        pmbokConcept: 'Falha Total na Gestão de Riscos do Projeto',
        learnings: ['Atirar pessoas cegas contra um código legado sem curadoria de negócios é o atalho mais rápido para corrupção de dados da corporação.'],
        goodBad: 'bad',
        risksEvaded: ['Perda de velocity de código imediata'],
        otherConsequences: ['Dívida técnica e de negócio crítica']
      }
    ]
  },
  {
    id: 'mudancas-agil-vs-ccb',
    title: 'Burocracia na Gestão de Mudanças',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 1,
    tags: ['mudanças', 'agil', 'ccb'],
    learningObjective: 'Contrastar o modelo tradicional de mudanças com o modelo ágil em um ambiente em rápida evolução.',
    communicationType: 'ticket',
    senderRole: 'Vice-Reitor',
    description: 'Um defeito requer alteração urgente em um fluxo e há um processo burocrático de mudança.\n\nContexto: Descobrimos uma falha de lógica e precisamos alterar um fluxo de tela amanhã. A Diretoria de TI exige preencher formulários e esperar aprovação do Comitê de Controle de Mudanças (CCB) que reúne-se em 15 dias.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Vice-Reitor',
    senderInitials: 'VR',
    avatarImage: '/avatars/vice_rector.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Abraçar a Agilidade: Modificar o processo e instituir o Product Owner (PM) com autoridade para aprovar mudanças rápidas diretamente no Backlog.',
        impacts: { capacidadeEntrega: 25, qualidadeProduto: 10, saudeEquipe: 15 },
        feedbackNarrative: 'Houve briga feia com o CCB antigo, mas ganhamos autonomia. A correção foi para o ar em 2 dias e o time agora trabalha num fluxo moderno e contínuo.',
        pmbokConcept: 'Adaptação de Processos (Tailoring) e Agilidade Organizacional',
        learnings: ['Projetos ágeis precisam de controle de mudanças descentralizado focado no valor (Backlog dinâmico), não em comitês burocráticos pesados.'],
        goodBad: 'good',
        risksEvaded: ['Sistema instável e insatisfação no uso por 15 dias'],
        otherConsequences: ['Processos organizacionais são modernizados na marra']
      },
      {
        key: 'b',
        text: 'Submeter o formulário ao CCB e aguardar os 15 dias para não irritar a Diretoria de TI e seguir as regras (Compliance).',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: 0, saudeEquipe: -10 },
        feedbackNarrative: 'Esperamos obedientemente. O sistema ficou 15 dias com o fluxo ruim. Perdemos prazo e todos os estudantes sofreram.',
        pmbokConcept: 'Rigidez Administrativa Fatal',
        learnings: ['Foco excessivo em compliance procedural cego quebra a adequação ao valor do produto final (Loss of Value Stream Focus).'],
        goodBad: 'bad',
        risksEvaded: ['Briga política com Diretoria de TI'],
        otherConsequences: ['Impacto severo no fluxo e na percepção do usuário']
      },
      {
        key: 'c',
        text: 'Subir a mudança na calada da noite, de forma furtiva, sem documentar nem avisar o CCB para resolver logo o problema.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'Resolveu rápido, mas um processo noturno rodou e apagou os dados baseados na estrutura antiga, pois não houve rastreio. Fomos pegos no flagra.',
        pmbokConcept: 'Shadow IT e Violação de Integridade',
        learnings: ['Mudanças não documentadas destróem a integridade da linha de base de configuração e geram caos sistêmico (Shadow Process).'],
        goodBad: 'bad',
        risksEvaded: ['Espera de 15 dias'],
        otherConsequences: ['Perda de credibilidade e corrupção de dados']
      }
    ]
  },
  {
    id: 'pmbok7-gambiarra-matriculas',
    title: 'A "Gambiarra" no Sistema de Matrículas',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 1,
    tags: ['gambiarra', 'debito-tecnico', 'qualidade', 'cronograma'],
    learningObjective: 'Balanceamento de Restrições Concorrentes (Qualidade vs. Cronograma).',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Faltam 10 dias para a abertura das matrículas. O novo algoritmo de ranqueamento de vagas está lento. O desenvolvedor sugere fazer uma "gambiarra" (hardcode temporário) que funciona, mas deixará um débito técnico enorme para o semestre que vem.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    avatarImage: '/avatars/tech_lead.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Aprovar a gambiarra imediatamente para entregar no prazo (Anti-padrão).',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -25, saudeEquipe: -15 },
        feedbackNarrative: 'Ganhamos pontos com a Reitoria por entregar no prazo e poupamos esforço agora. Porém, a qualidade estrutural oculta foi comprometida; no médio prazo, isso causou o colapso do sistema e o Moral da equipe despencou devido ao retrabalho.',
        pmbokConcept: 'Balanceamento de Restrições Concorrentes',
        learnings: ['Comprometer a qualidade estrutural para cumprir cronograma gera dívida técnica que se acumula de forma exponencial.'],
        goodBad: 'bad',
        risksEvaded: ['Atraso no cronograma imediato'],
        otherConsequences: ['Colapso sistêmico futuro e desmotivação']
      },
      {
        key: 'b',
        text: 'Adiar o lançamento da funcionalidade de ranqueamento automático e investir tempo para corrigir o novo código (Prática Recomendada).',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: 20, saudeEquipe: 5 },
        feedbackNarrative: 'Protegemos a Qualidade e o Pensamento Sistêmico. Gastamos recursos e tempo focados na causa-raiz, o que gerou atrito político com a Reitoria, mas garantiu a estabilidade a longo prazo.',
        pmbokConcept: 'Pensamento Sistêmico e Qualidade',
        learnings: ['O verdadeiro valor não está em entregar rápido qualquer coisa, mas sim software de qualidade que se mantém no tempo.'],
        goodBad: 'good',
        risksEvaded: ['Falhas críticas durante as matrículas'],
        otherConsequences: ['Atrito político com stakeholders ansiosos']
      },
      {
        key: 'c',
        text: 'Contratar emergencialmente consultores externos para arrumar o algoritmo na madrugada.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: 5, saudeEquipe: -10 },
        feedbackNarrative: 'A contratação de última hora custou uma fortuna do nosso orçamento. Eles arrumaram a tempo, mas a equipe se sentiu desvalorizada por não confiarem na capacidade deles de resolver após o prazo.',
        pmbokConcept: 'Gerenciamento de Recursos',
        learnings: ['Jogar dinheiro no problema de última hora fere a sustentabilidade do projeto (burn rate).'],
        goodBad: 'bad',
        risksEvaded: ['Atraso imediato'],
        otherConsequences: ['Dreno financeiro severo']
      }
    ]
  },
  {
    id: 'pmbok7-escudo-desvios',
    title: 'O Escudo de Desvios (Sobrecarga de Suporte)',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 1,
    tags: ['foco', 'suporte', 'lideranca', 'burnout'],
    learningObjective: 'Manutenção do Foco da Equipe (Produção vs. Capacidade de Produção).',
    communicationType: 'email',
    senderRole: 'Pró-Reitoria de Graduação',
    description: 'A Pró-Reitoria de Graduação exige que a equipe de projeto (focada na inovação do SIGAA) pare tudo para consertar planilhas legadas e responder a tickets rotineiros de alunos com erro de senha.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Pró-Reitoria',
    senderInitials: 'PR',
    avatarImage: '/avatars/director.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Determinar que a equipe atenda os tickets de suporte junto com o desenvolvimento do novo módulo (Anti-padrão).',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -10, saudeEquipe: -25 },
        feedbackNarrative: 'Pareceu pró-ativo para a PROGRAD, mas destruiu o Foco. A falta de blindagem gerou burnout e gargalos nos processos do projeto principal.',
        pmbokConcept: 'Foco da Equipe e Distrações',
        learnings: ['Não atuar como escudo contra o trabalho operacional destrói a capacidade de produção do projeto de inovação.'],
        goodBad: 'bad',
        risksEvaded: ['Reclamações imediatas de suporte'],
        otherConsequences: ['Exaustão da equipe e atraso nas inovações']
      },
      {
        key: 'b',
        text: 'Atuar como "Escudo". O PM negocia a alocação de estagiários ou suporte N1 para tickets operacionais, blindando os desenvolvedores (Prática Recomendada).',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 10, saudeEquipe: 20 },
        feedbackNarrative: 'Consumimos Orçamento imediatamente para treinar os estagiários, mas mantivemos o Foco da equipe de engenharia no Valor final e protegemos o Moral consideravelmente.',
        pmbokConcept: 'Liderança Servidora',
        learnings: ['Líderes de projeto devem proteger a equipe de ruídos e distrações (shielding the team) para preservar a capacidade produtiva.'],
        goodBad: 'good',
        risksEvaded: ['Burnout da equipe técnica'],
        otherConsequences: ['Gasto de recursos não planejados para estruturar suporte']
      },
      {
        key: 'c',
        text: 'O Gerente de Projetos tenta responder sozinho aos tickets operacionais nas madrugadas para salvar o time e agradar a PROGRAD.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: 10 },
        feedbackNarrative: 'O time ficou grato, mas o Gerente entrou em colapso por estresse. Na semana seguinte, o gerenciamento crítico do projeto ficou abandonado por falta de líder ativo.',
        pmbokConcept: 'Sustentabilidade Pessoal e Gargalo Gerencial',
        learnings: ['Um PM herói que absorve trabalho técnico vira um gargalo e perde a visão sistêmica do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Interrupção dos desenvolvedores'],
        otherConsequences: ['Risco de projeto acéfalo devido à exaustão do gerente']
      }
    ]
  },
  {
    id: 'pmbok7-ideia-reitor',
    title: 'A "Pequena" Ideia do Reitor',
    category: EventCategory.EXTERNAL_PRESSURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 1,
    tags: ['scope-creep', 'stakeholders', 'mudancas'],
    learningObjective: 'Monitoramento de Trabalho Novo e Combate à Distorção de Escopo (Scope Creep).',
    communicationType: 'slack',
    senderRole: 'Gabinete da Reitoria',
    description: 'O Reitor manda uma mensagem pedindo uma "pequena inclusão" não planejada: um painel de gráficos interativos com inteligência artificial para mostrar evasão de alunos. Ele quer isso no ar semana que vem.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Reitor',
    senderInitials: 'R',
    avatarImage: '/avatars/vice_rector.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Pedir para a equipe colocar o painel rapidamente no ar para agradar o patrocinador (Anti-padrão).',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -15, saudeEquipe: -15 },
        feedbackNarrative: 'Ignoramos a governança e causamos Distorção de Escopo maciça. O painel ficou bugado, a equipe surtou com as madrugadas e o projeto principal atrasou severamente.',
        pmbokConcept: 'Distorção de Escopo (Scope Creep)',
        learnings: ['Dizer sim para agradar stakeholders sem avaliar impacto técnico é a causa número um do fracasso de projetos.'],
        goodBad: 'bad',
        risksEvaded: ['Desagradar o patrocinador mais forte'],
        otherConsequences: ['Caos no cronograma e produto defeituoso']
      },
      {
        key: 'b',
        text: 'Registrar o pedido, submetê-lo a análise de impacto formal e colocá-lo no Comitê de Mudanças para a próxima fase (Prática Recomendada).',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 15, saudeEquipe: 10 },
        feedbackNarrative: 'Desgastou a relação política com o Reitor no momento do "não agora", mas garantiu processos eficientes e previsibilidade para a equipe, que entregou o que foi acordado com excelência.',
        pmbokConcept: 'Controle de Mudanças Integrado',
        learnings: ['Boas ideias precisam passar pelo fluxo de valor adequado. Processos protegem o produto.'],
        goodBad: 'good',
        risksEvaded: ['Caos técnico e exaustão'],
        otherConsequences: ['Frustração política inicial do patrocinador']
      },
      {
        key: 'c',
        text: 'Fingir que vai fazer e atrasar propositalmente, entregando algo estático sem IA na esperança dele esquecer o resto.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -10, saudeEquipe: -15 },
        feedbackNarrative: 'A Reitoria percebeu a embromação. O Reitor ficou furioso com a falta de transparência e o comitê de tecnologia perdeu totalmente a credibilidade institucional.',
        pmbokConcept: 'Transparência e Governança',
        learnings: ['Esconder informações ou mentir sobre entregas destrói o princípio da Administração/Stewardship.'],
        goodBad: 'bad',
        risksEvaded: ['Ter que dizer um NÃO direto'],
        otherConsequences: ['Perda irrecuperável de confiança']
      }
    ]
  },
  {
    id: 'pmbok7-trabalho-pmo',
    title: 'O "Trabalho Sem Valor Agregado" do PMO',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 1,
    tags: ['processos', 'desperdicio', 'tailoring', 'burocracia'],
    learningObjective: 'Processos do Projeto (Produção Lean) e Adaptação (Tailoring).',
    communicationType: 'email',
    senderRole: 'Diretor de TI',
    description: 'Um novo Diretor de TI envia uma diretriz obrigando os desenvolvedores e designers a preencherem timesheets diárias manuais de 15 categorias, para "aumentar o controle" gerencial.',
    domainTag: 'Trabalho do Projeto',
    senderName: 'Diretor de TI',
    senderInitials: 'DT',
    avatarImage: '/avatars/director.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Impor a regra à equipe do projeto estritamente como foi pedido (Anti-padrão).',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 0, saudeEquipe: -20 },
        feedbackNarrative: 'Geramos trabalho sem valor agregado. O tempo gasto categorizando tomou horas de codificação e irritou imensamente a equipe. A produtividade técnica despencou.',
        pmbokConcept: 'Desperdício e Falta de Tailoring',
        learnings: ['Processos devem servir ao projeto, não o contrário. Burocracia extrema desengaja times ágeis.'],
        goodBad: 'bad',
        risksEvaded: ['Briga hierárquica com o novo diretor'],
        otherConsequences: ['Microgerenciamento sufocante']
      },
      {
        key: 'b',
        text: 'Realizar o Tailoring do Processo: Negociar e criar uma automação que extrai o tempo do Jira diretamente (Prática Recomendada).',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 15, saudeEquipe: 15 },
        feedbackNarrative: 'Exigiu um sacrifício inicial de esforço para criar a automação e negociar politicamente a exceção, mas a produtividade a longo prazo e a saúde da equipe foram blindadas.',
        pmbokConcept: 'Adaptação de Processos (Tailoring)',
        learnings: ['O PMBOK 7 orienta a adaptação (tailoring) dos processos ao contexto. Automação de governança maximiza o fluxo.'],
        goodBad: 'good',
        risksEvaded: ['Queda crônica de produtividade'],
        otherConsequences: ['Esforço inicial não planejado consumido']
      },
      {
        key: 'c',
        text: 'Ignorar o e-mail do Diretor de TI e pedir que a equipe apenas preencha a planilha no último dia do mês com valores genéricos.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 0, saudeEquipe: -10 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: 0, qualidadeProduto: 0, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
            narrative: 'A fraude nos relatórios foi descoberta na auditoria mensal. A equipe inteira tomou uma advertência formal.'
          }
        ],
        feedbackNarrative: 'Isso gerou uma cultura de falsificação de métricas ("Melancia": verde por fora, vermelho por dentro). Quando descobriram, a confiança na equipe sumiu.',
        pmbokConcept: 'Integridade dos Dados e Conformidade',
        learnings: ['Burla de processos gera dados de projeto corrompidos e destrói o princípio da Governança.'],
        goodBad: 'bad',
        risksEvaded: ['Perda de tempo preenchendo diário'],
        otherConsequences: ['Quebra ética e administrativa']
      }
    ]
  }
];
