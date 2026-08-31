import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Princípio 1: Faça a adaptação de acordo com o contexto (Tailoring)
 * Fundamentação: Seção 2.5.1 (Processos do projeto) - Métodos Lean e eliminação de desperdícios operacionais.
 * Objetivo Pedagógico: Combate ao Desperdício Burocrático.
 * Total: 10 Dilemas
 */
export const tailoringEvents: GameEvent[] = [
  {
    id: 'tailoring_1_lean_desperdicio_adm',
    title: 'Excesso de Burocracia Administrativa (Lean)',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['burocracia', 'lean', 'processos', 'tailoring'],
    learningObjective: 'Identificar e mitigar processos burocráticos que causam desperdícios operacionais (Muda).',
    communicationType: 'email',
    senderRole: 'PMO Universitário',
    description: 'Assunto: Relatórios Diários em PDF. A diretoria exige relatórios de status em PDF com 20 páginas todos os dias de cada desenvolvedor. O time está gastando quase 2 horas diárias preenchendo tabelas duplicadas, reduzindo a eficiência global da equipe.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'PMO Universitário',
    senderInitials: 'PM',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Negociar o Tailoring do Processo: Substituir os relatórios manuais em PDF por acesso direto aos dashboards do Jira em tempo real.',
        impacts: { capacidadeEntrega: 20, qualidadeProduto: 0, saudeEquipe: 15, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'A diretoria resistiu no início, mas adorou a transparência em tempo real com radiadores de informação. A equipe recuperou quase 10 horas semanais de desenvolvimento focado.',
        pmbokConcept: 'Eliminação de Desperdícios (Muda) e Radiadores de Informação',
        learnings: ['Desperdícios de atividades que não agregam valor ao produto devem ser eliminados usando transparência e radiadores de informação.'],
        goodBad: 'good',
        risksEvaded: ['Burnout burocrático e queda de produtividade'],
        otherConsequences: ['Maior alinhamento com a diretoria por meio de métricas transparentes']
      },
      {
        key: 'b',
        text: 'Cumprir a exigência criando um turno administrativo onde todos param de codificar às 16h para redigir relatórios.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: 0, saudeEquipe: -15, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'A moral despencou. "Somos engenheiros ou digitadores de relatório?", questionou a equipe. A esteira de entregas foi paralisada pela burocracia.',
        pmbokConcept: 'Ineficiência e Rigidez de Processos',
        learnings: ['Submissão passiva a processos burocráticos suga a capacidade produtiva e desengaja a equipe de desenvolvimento técnica.'],
        goodBad: 'bad',
        risksEvaded: ['Conflito imediato com o PMO'],
        otherConsequences: ['Perda drástica de ritmo produtivo e entregas atrasadas']
      },
      {
        key: 'c',
        text: 'Contratar um estagiário apenas para entrevistar os desenvolvedores o dia todo e preencher as planilhas para a diretoria.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -5, saudeEquipe: -5, conhecimentoOrganizacional: -5 },
        feedbackNarrative: 'O estagiário passou o dia interrompendo os desenvolvedores no meio do raciocínio lógico. Os relatórios gerados ficaram cheios de inconsistências técnicas.',
        pmbokConcept: 'Aumento da Complexidade de Coordenação',
        learnings: ['Adicionar intermediários sem simplificar a causa-raiz apenas adiciona ruído de comunicação e desperdício de recursos.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho manual direto dos seniores'],
        otherConsequences: ['Gastos desnecessários e interrupções frequentes']
      }
    ]
  },
  {
    id: 'tailoring_2_trabalho_pmo',
    title: 'O "Trabalho Sem Valor Agregado" do PMO',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['processos', 'desperdicio', 'tailoring', 'timesheet'],
    learningObjective: 'Adaptar processos de controle gerencial sem gerar sobrecarga administrativa desnecessária.',
    communicationType: 'email',
    senderRole: 'Diretor de TI',
    description: 'Assunto: Diretriz de Timesheets. O novo Diretor de TI envia uma portaria obrigando desenvolvedores e designers a preencherem planilhas manuais diárias com 15 categorias de horas, com a justificativa de "aumentar o controle financeiro".',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Diretor de TI',
    senderInitials: 'DT',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Impor a regra à equipe estritamente como foi pedido, cobrando o preenchimento diário sob pena de advertência.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 0, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'Criou-se um clima de microgerenciamento sufocante. O tempo gasto preenchendo códigos tomou horas produtivas e desmotivou os melhores desenvolvedores.',
        pmbokConcept: 'Desperdício e Falta de Tailoring',
        learnings: ['Processos devem servir ao projeto, não o contrário. Burocracia extrema desengaja times de alta performance.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito hierárquico com o Diretor de TI'],
        otherConsequences: ['Microgerenciamento e evasão de talentos']
      },
      {
        key: 'b',
        text: 'Realizar o Tailoring do Processo: Propor e automatizar a extração das métricas a partir dos commits do Git e cards do Jira.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 15, saudeEquipe: 15, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'Exigiu esforço inicial de 3 dias para configurar o script de telemetria, mas a diretoria obteve dados 100% confiáveis sem tomar um minuto sequer da equipe.',
        pmbokConcept: 'Adaptação de Processos (Tailoring) e Automação',
        learnings: ['O PMBOK 7 orienta a adaptação (tailoring) contínua dos processos. Automatizar governança maximiza o fluxo de entrega de valor.'],
        goodBad: 'good',
        risksEvaded: ['Queda crônica de produtividade'],
        otherConsequences: ['Esforço inicial não planejado consumido na automação']
      },
      {
        key: 'c',
        text: 'Ignorar o e-mail do Diretor de TI e instruir a equipe a preencher a planilha no final do mês com estimativas fictícias.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 0, saudeEquipe: -10, conhecimentoOrganizacional: -15 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: 0, qualidadeProduto: 0, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
            narrative: 'A auditoria interna identificou incoerências nas planilhas fictícias. O comitê gestor tomou uma advertência formal da Reitoria.'
          }
        ],
        feedbackNarrative: 'Gerou uma cultura de maquiagem de dados. Quando a auditoria descobriu os dados falsos, a credibilidade do projeto foi destruída.',
        pmbokConcept: 'Integridade dos Dados e Governança Ética',
        learnings: ['Burlar processos em vez de negociar adaptações legítimas destrói a confiança institucional e corrompe a governança.'],
        goodBad: 'bad',
        risksEvaded: ['Perda de tempo imediata com planilhas'],
        otherConsequences: ['Quebra ética e advertência administrativa']
      }
    ]
  },
  {
    id: 'tailoring_3_mudancas_agil_vs_ccb',
    title: 'Burocracia na Gestão de Mudanças',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['mudancas', 'ccb', 'tailoring', 'agil'],
    learningObjective: 'Equilibrar a governança de mudanças formal com a adaptabilidade ágil necessária no dia a dia.',
    communicationType: 'slack',
    senderRole: 'Líder de UX',
    description: 'Detectamos uma falha no fluxo de matrícula onde 40% dos alunos não encontram o botão de confirmação. A correção é simples no CSS, mas o regulamento da universidade exige abrir chamado formal no Comitê de Controle de Mudanças (CCB) que só se reúne a cada 15 dias.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Marina Design',
    senderInitials: 'MD',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Criar um rito de Fast-Track: Aprovar a correção emergencial com o Tech Lead e PM, documentando a mudança no changelog para auditoria posterior.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 10, conhecimentoOrganizacional: 5 },
        feedbackNarrative: 'A interface foi corrigida em 2 horas. As matrículas fluíram sem suporte e o CCB aprovou o rito de exceção retroativamente pela transparência documental.',
        pmbokConcept: 'Tailoring de Governança e Fluxo de Valor',
        learnings: ['Processos de mudança devem ter trilhas diferenciadas para ajustes emergenciais e de baixo risco, garantindo foco no valor ao usuário.'],
        goodBad: 'good',
        risksEvaded: ['Milhares de alunos travados e enxurrada de suporte'],
        otherConsequences: ['Estabelecimento de novo precedente de agilidade na universidade']
      },
      {
        key: 'b',
        text: 'Submeter o formulário ao CCB e aguardar os 15 dias para não contrariar a burocracia da Diretoria de TI.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -10, saudeEquipe: -10, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'Esperamos obedientemente. Durante 15 dias, mais de 2.000 alunos ligaram desesperados para a central de atendimento e o projeto foi duramente criticado.',
        pmbokConcept: 'Rigidez Administrativa e Perda de Foco no Valor',
        learnings: ['Foco cego em compliance procedural rígido prejudica a entrega de valor ao cliente final.'],
        goodBad: 'bad',
        risksEvaded: ['Conflito político com o CCB'],
        otherConsequences: ['Crise de imagem e sobrecarga do suporte']
      },
      {
        key: 'c',
        text: 'Subir a mudança na surdina no servidor de produção, sem documentar nem avisar o CCB para resolver logo o problema.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -20, saudeEquipe: 0, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A alteração sem versionamento sobrescreveu uma variável de sessão crítica, quebrando o módulo financeiro. Fomos autuados por Shadow IT.',
        pmbokConcept: 'Shadow IT e Violação de Integridade de Configuração',
        learnings: ['Mudanças sem rastreabilidade quebram a integridade da baseline de configuração do sistema.'],
        goodBad: 'bad',
        risksEvaded: ['Espera burocrática'],
        otherConsequences: ['Corrupção de dados e perda grave de credibilidade']
      }
    ]
  },
  {
    id: 'tailoring_4_reunioes_excessivas',
    title: 'Reuniões Excessivas e Bloqueio de Foco',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['reunioes', 'foco', 'lean', 'tailoring'],
    learningObjective: 'Otimizar ritos de equipe para proteger o tempo de foco e trabalho profundo (Deep Work).',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'A equipe está participando de 4 reuniões diárias (alinhamento, daily com clientes, checkpoint com suporte e retrospectiva informal), totalizando 3 horas diárias. Os desenvolvedores relatam que não conseguem mais entrar em estado de concentração profunda.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Roberto Arquiteto',
    senderInitials: 'RA',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Fazer o Tailoring dos Ritos: Consolidar em uma única daily de 15 minutos em pé (timeboxed) e migrar os demais alinhamentos para canais assíncronos no Slack.',
        impacts: { capacidadeEntrega: 20, qualidadeProduto: 10, saudeEquipe: 15, conhecimentoOrganizacional: 5 },
        feedbackNarrative: 'A mudança devolveu 2h30 diárias de programação para cada desenvolvedor. O ritmo de commits aumentou e o estresse diminuiu visivelmente.',
        pmbokConcept: 'Comunicação Eficiente e Eliminação de Desperdício de Tempo',
        learnings: ['Ritos ágeis devem ser enxutos e respeitar o timebox. Comunicação assíncrona protege o trabalho focado.'],
        goodBad: 'good',
        risksEvaded: ['Atrasos crônicos por fragmentação do tempo'],
        otherConsequences: ['Maior clareza e síntese na comunicação da equipe']
      },
      {
        key: 'b',
        text: 'Manter todas as reuniões presenciais para garantir que "ninguém fique com dúvidas".',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -5, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'A exaustão tomou conta. Para compensar o tempo perdido em reuniões, o time começou a codificar às pressas à noite, gerando erros primários de lógica.',
        pmbokConcept: 'Fadiga por Reuniões (Zoom/Meeting Fatigue)',
        learnings: ['Excesso de reuniões síncronas fragmenta a atenção e destrói a produtividade técnica.'],
        goodBad: 'bad',
        risksEvaded: ['Risco de desalinhamento verbal'],
        otherConsequences: ['Fadiga mental e queda de rendimento']
      },
      {
        key: 'c',
        text: 'Cancelar todas as reuniões do projeto e proibir qualquer comunicação síncrona.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -15, saudeEquipe: -10, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O time ganhou tempo, mas cada desenvolvedor construiu telas com regras divergentes por falta de alinhamento básico, exigindo retrabalho de integração.',
        pmbokConcept: 'Extremismo de Processo e Isolamento',
        learnings: ['Eliminar ritos necessários sem canais alternativos causa silos e desalinhamento arquitetural.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo gasto em reuniões'],
        otherConsequences: ['Retrabalho por desalinhamento e retrabalho de integração']
      }
    ]
  },
  {
    id: 'tailoring_5_especificacao_excessiva',
    title: 'Especificações Extensas vs Histórias Ágeis',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['especificacao', 'documentacao', 'tailoring', 'agil'],
    learningObjective: 'Adequar o nível de documentação técnica ao contexto de entrega contínua.',
    communicationType: 'email',
    senderRole: 'Analista de Negócios',
    description: 'Assunto: Especificação do Módulo de Bolsas. O setor pedagógico enviou um documento de requisitos em formato DOCX com 180 páginas, exigindo que a equipe de engenharia leia e assine todas as páginas antes de iniciar qualquer linha de código.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Rainara Negócios',
    senderInitials: 'RN',
    avatarImage: '/Personagens/Rainara.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Adaptar o Processo: Fatiar o documento em User Stories incrementais com critérios de aceitação claros (BDD/Gherkin) validados semanalmente com o setor.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: 15, saudeEquipe: 10, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A conversão em histórias permitiu entregas quinzenais de valor. O setor pedagógico adorou poder testar partes funcionais desde a primeira sprint.',
        pmbokConcept: 'Decomposição Progressiva e Foco no Valor Incremental',
        learnings: ['Documentos gigantescos congelam o escopo e criam ilusão de certeza. Histórias de usuário incrementais viabilizam feedback rápido.'],
        goodBad: 'good',
        risksEvaded: ['Trabalho travado por semanas em leitura de documentos estáticos'],
        otherConsequences: ['Parceria mais próxima com o cliente pedagógico']
      },
      {
        key: 'b',
        text: 'Parar todo o time de desenvolvimento por 3 semanas para ler, validar e assinar o documento de 180 páginas.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: -5, saudeEquipe: -15, conhecimentoOrganizacional: 5 },
        feedbackNarrative: 'Após 3 semanas de leitura exaustiva, quando o código começou a ser feito, o setor mudou as regras das bolsas, tornando 60% do documento inútil.',
        pmbokConcept: 'Desperdício de Inventário de Requisitos (Lean Muda)',
        learnings: ['Gerar grandes estoques de documentação antes da implementação gera desperdício quando as necessidades de negócio mudam.'],
        goodBad: 'bad',
        risksEvaded: ['Conflito com o setor de bolsas'],
        otherConsequences: ['Atraso generalizado e retrabalho de documentação']
      },
      {
        key: 'c',
        text: 'Ignorar o documento completamente e programar o módulo de bolsas baseado apenas no que o desenvolvedor acha que é o correto.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -25, saudeEquipe: -10, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'O módulo foi programado rápido, mas calculou os valores de bolsas de forma errônea, violando regras federais e gerando escândalo na pró-reitoria.',
        pmbokConcept: 'Negligência de Regras de Negócio e Falta de Alinhamento',
        learnings: ['Agilidade não significa ausência de requisitos; significa obter requisitos de forma iterativa e estruturada.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de leitura'],
        otherConsequences: ['Violação legal e cálculo indevido de bolsas']
      }
    ]
  },
  {
    id: 'tailoring_6_homologacao_design',
    title: 'Cadeia Lenta de Homologação de Telas',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['ux', 'aprovacao', 'tailoring', 'design'],
    learningObjective: 'Desburocratizar a validação de design focando na experiência real do usuário.',
    communicationType: 'slack',
    senderRole: 'Líder de UX',
    description: 'A Pró-Reitoria de Planejamento instituiu uma comissão de 6 chefes de departamento que exigem assinar um parecer impresso para cada tela nova criada no Figma antes que os desenvolvedores possam codificar.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Leonara UX',
    senderInitials: 'LU',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Tailoring de Validação: Propor testes de usabilidade gravados com 5 alunos e 5 professores reais, apresentando os relatórios objetivos de usabilidade à comissão.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'Os dados concretos dos testes com alunos deixaram a comissão maravilhada. O processo de aprovação passou de 10 dias para 24 horas com base em dados de uso.',
        pmbokConcept: 'Decisões Baseadas em Evidências e Foco no Usuário',
        learnings: ['Substituir opiniões subjetivas de comissões por dados reais de testes de usabilidade acelera o fluxo e melhora o produto.'],
        goodBad: 'good',
        risksEvaded: ['Bloqueio de desenvolvimento aguardando assinaturas'],
        otherConsequences: ['Cultura de design orientada a dados na instituição']
      },
      {
        key: 'b',
        text: 'Aceitar a burocracia e enviar pastas de pareceres impressos para colher assinaturas sala por sala.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -10, saudeEquipe: -15, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'Cada chefe pediu uma cor e um botão diferente, criando uma interface esquizofrênica e atrasando o projeto em semanas.',
        pmbokConcept: 'Design por Comitê e Perda de Coerência',
        learnings: ['Tentar agradar múltiplos stakeholders sem critérios técnicos de UX destrói a usabilidade do sistema.'],
        goodBad: 'bad',
        risksEvaded: ['Desagradar a comissão de planejamento'],
        otherConsequences: ['Interface confusa e lentidão burocrática']
      },
      {
        key: 'c',
        text: 'Remover toda a equipe de design e deixar os desenvolvedores criarem as telas diretamente em HTML sem validação.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -30, saudeEquipe: -5, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O sistema ficou funcionalmente rápido, mas com uma interface hostil e inacessível, gerando milhares de reclamações de estudantes no primeiro dia.',
        pmbokConcept: 'Descarte de Qualidade Visual e Acessibilidade',
        learnings: ['Cortar etapas de design para ganhar velocidade gera produtos de baixíssima adoção e alto custo de suporte.'],
        goodBad: 'bad',
        risksEvaded: ['Espera pela comissão'],
        otherConsequences: ['Rejeição massiva da comunidade acadêmica']
      }
    ]
  },
  {
    id: 'tailoring_7_deploy_manual',
    title: 'Deploy Manual em 14 Etapas Noturnas',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['devops', 'deploy', 'tailoring', 'automacao'],
    learningObjective: 'Substituir procedimentos operacionais manuais suscetíveis a erro humano por pipelines automatizados.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1105 - Operação de Release. O processo atual de publicação em produção exige que 2 engenheiros fiquem acordados na madrugada executando manualmente 14 comandos SQL e cópias de arquivos FTP. Falhas humanas já ocorreram em 3 das últimas 4 publicações.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Tailoring de Engenharia: Investir 1 sprint para implementar pipeline de CI/CD automatizado com rollback automático e testes de fumaça.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 25, saudeEquipe: 20, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'O esforço inicial foi pago em 2 semanas. Os deploys agora ocorrem em 4 minutos durante o horário comercial sem quedas e sem madrugadas perdidas.',
        pmbokConcept: 'Automação de Processos e Excelência Técnica',
        learnings: ['Processos operacionais repetitivos devem ser automatizados para eliminar falhas humanas e proteger a saúde da equipe.'],
        goodBad: 'good',
        risksEvaded: ['Erros manuais graves em produção e exaustão noturna'],
        otherConsequences: ['Confiabilidade extrema nas entregas contínuas']
      },
      {
        key: 'b',
        text: 'Criar um checklist impresso em papel de 30 páginas e exigir que os engenheiros assinem com caneta cada comando executado às 3h da manhã.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -15, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'O cansaço da madrugada continuou causando erros. O checklist burocrático apenas serviu para culpar individualmente os desenvolvedores exaustos.',
        pmbokConcept: 'Ilusão de Controle Burocrático',
        learnings: ['Checklists burocráticos manuais não resolvem problemas estruturais de engenharia de software.'],
        goodBad: 'bad',
        risksEvaded: ['Custo imediato de criação de pipelines'],
        otherConsequences: ['Erros recorrentes e desmotivação crônica']
      },
      {
        key: 'c',
        text: 'Espaçar os deploys para ocorrerem apenas 1 vez a cada 6 meses para diminuir a frequência do sofrimento.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -20, saudeEquipe: -10, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'Acumular 6 meses de alterações em um único deploy gerou um "Big Bang" catastrófico. O sistema ficou fora do ar por 3 dias para estabilização.',
        pmbokConcept: 'Entregas em Lotes Grandes (Large Batch Size)',
        learnings: ['Aumentar o tamanho do lote de entrega aumenta exponencialmente o risco e a complexidade da integração.'],
        goodBad: 'bad',
        risksEvaded: ['Frequência de deploys noturnos'],
        otherConsequences: ['Queda catastrófica do sistema em produção']
      }
    ]
  },
  {
    id: 'tailoring_8_duplicacao_cadastros',
    title: 'Duplicação de Formulários Administrativos',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.EASY,
    probabilityWeight: 2,
    tags: ['desperdicio', 'sistemas', 'tailoring', 'integracao'],
    learningObjective: 'Identificar atividades redundantes e integrar fluxos para poupar capacidade operacional.',
    communicationType: 'slack',
    senderRole: 'Desenvolvedor Pleno',
    description: 'Para cada nova disciplina criada no novo SIGAA, a equipe é obrigada a abrir o sistema contábil legado da universidade e redigitar manualmente os mesmos 25 campos, gastando 4 horas por semana em trabalho duplicado.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Kenedy Backend',
    senderInitials: 'KB',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Desenvolver um script webhook simples de sincronização em segundo plano entre o novo SGA e o banco legado.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: 10, saudeEquipe: 10, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'O script eliminou 100% da digitação manual. Os dados agora sincronizam em tempo real e os desenvolvedores ganharam meio dia útil por semana.',
        pmbokConcept: 'Eliminação de Tarefas Manuais Redundantes (Lean)',
        learnings: ['Integrar sistemas para eliminar redigitação de dados é um dos maiores ganhos de eficiência em modernização de legado.'],
        goodBad: 'good',
        risksEvaded: ['Erros de digitação e inconsistência entre bases de dados'],
        otherConsequences: ['Maior integridade de dados na instituição']
      },
      {
        key: 'b',
        text: 'Determinar que os desenvolvedores continuem redigitando manualmente tudo para não mexer no código legado.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: -5, saudeEquipe: -15, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'Erros de digitação geraram disciplinas com códigos trocados, impedindo centenas de alunos de se formarem no semestre.',
        pmbokConcept: 'Conformismo com Ineficiência Operacional',
        learnings: ['Aceitar processos manuais falhos por medo de tocar no legado cobra um preço altíssimo em qualidade e suporte.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de desenvolvimento do webhook'],
        otherConsequences: ['Inconsistência de dados acadêmicos']
      },
      {
        key: 'c',
        text: 'Parar de cadastrar as disciplinas no sistema contábil e ignorar a exigência da pró-reitoria financeira.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 0, saudeEquipe: -10, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A ausência dos dados contábeis travou o repasse de bolsas dos professores das disciplinas, gerando protestos no campus.',
        pmbokConcept: 'Ruptura Inconsequente de Processo',
        learnings: ['Ignorar processos financeiros sem fornecer alternativa técnica gera impactos regulatórios severos.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de digitação'],
        otherConsequences: ['Paralisação de bolsas e atrito institucional']
      }
    ]
  },
  {
    id: 'tailoring_9_estimativas_excessivas',
    title: 'Estimativas Minuciosas vs Fluxo Contínuo',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['estimativas', 'planejamento', 'tailoring', 'agil'],
    learningObjective: 'Adaptar o planejamento para focar na entrega contínua em vez de previsões excessivamente detalhadas.',
    communicationType: 'email',
    senderRole: 'Gerente de Projetos',
    description: 'Assunto: Cerimônias de Planejamento. O time está gastando toda segunda-feira (8 horas) debatendo se cada tarefa de ajuste tem 3, 5 ou 8 Story Points, gerando discussões exaustivas sobre estimativas que quase nunca se concretizam.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Lívia Gestora',
    senderInitials: 'LG',
    avatarImage: '/Personagens/Lívia.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Tailoring para Fluxo Kanban: Quebrar histórias em itens pequenos e padronizados, medindo o Lead Time e Throughput real em vez de pontuar horas.',
        impacts: { capacidadeEntrega: 20, qualidadeProduto: 10, saudeEquipe: 15, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'A reunião de planejamento passou de 8 horas para 45 minutos. O time focou em puxar trabalho pronto e a cadência de entregas aumentou 30%.',
        pmbokConcept: 'Métricas de Fluxo Contínuo vs Estimativas Tradicionais',
        learnings: ['Em ambientes de alta incerteza, dados históricos de vazão (throughput) são mais precisos e econômicos do que estimativas subjetivas longas.'],
        goodBad: 'good',
        risksEvaded: ['Exaustão em debates infrutíferos sobre pontuação'],
        otherConsequences: ['Previsibilidade baseada em dados reais de entrega']
      },
      {
        key: 'b',
        text: 'Aumentar o rigor e exigir que as tarefas sejam estimadas até o nível de minutos com planilhas de controle diário.',
        impacts: { capacidadeEntrega: -25, qualidadeProduto: -5, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
        feedbackNarrative: 'O time passou a gastar mais tempo estimando e justificando desvios do que desenvolvendo o software. A velocidade real despencou.',
        pmbokConcept: 'Paralisia por Análise e Microestimativa',
        learnings: ['Microestimativas não aumentam a precisão em engenharia de software; apenas aumentam o custo de coordenação.'],
        goodBad: 'bad',
        risksEvaded: ['Risco de não saber o tempo teórico'],
        otherConsequences: ['Frustração da equipe e lentidão generalizada']
      },
      {
        key: 'c',
        text: 'Não planejar nada e deixar cada desenvolvedor escolher livremente o que quiser fazer a cada dia.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -20, saudeEquipe: 5, conhecimentoOrganizacional: -25 },
        feedbackNarrative: 'Cada um trabalhou no que achava divertido. O módulo de login ficou perfeito, mas ninguém fez o banco de dados das matrículas.',
        pmbokConcept: 'Falta de Priorização Estratégica',
        learnings: ['Agilidade requer priorização rigorosa de valor no topo do backlog, mesmo com processos enxutos.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de reunião de planejamento'],
        otherConsequences: ['Desalinhamento completo das prioridades institucionais']
      }
    ]
  },
  {
    id: 'tailoring_10_auditoria_adaptativa',
    title: 'Auditoria de Processos vs Agilidade',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['auditoria', 'compliance', 'tailoring', 'governanca'],
    learningObjective: 'Atender aos requisitos de auditoria pública adaptando evidências digitais transparentes.',
    communicationType: 'email',
    senderRole: 'Auditoria Interna da UFC',
    description: 'Assunto: Notificação de Auditoria. A Auditoria Interna exige cópia impressa e rubricada de todas as atas de reunião e aprovações de código dos últimos 3 meses, ameaçando paralisar o orçamento do projeto caso não receba os papéis em 48 horas.',
    domainTag: 'Faça a adaptação de acordo com o contexto (Tailoring)',
    senderName: 'Geraldo Auditor',
    senderInitials: 'GA',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'pm',
    alternatives: [
      {
        key: 'a',
        text: 'Apresentar Trilha Digital de Auditoria: Convidar os auditores para uma demonstração do Git e Jira, fornecendo relatórios criptografados e logs de aprovação de Pull Requests.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 15, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'Os auditores ficaram impressionados com a rastreabilidade digital moderna. A auditoria foi aprovada com louvor e o modelo virou padrão para a universidade inteira.',
        pmbokConcept: 'Compliance Adaptativo e Evidências Digitais',
        learnings: ['Auditorias públicas buscam rastreabilidade e integridade; apresentar trilhas digitais automatizadas atende ao compliance sem burocracia física.'],
        goodBad: 'good',
        risksEvaded: ['Paralisação financeira e desperdício de semanas imprimindo papéis'],
        otherConsequences: ['Modernização da governança institucional']
      },
      {
        key: 'b',
        text: 'Parar todo o time de tecnologia por 4 dias para redigir atas retroativas e imprimir 5.000 folhas para rubricar.',
        impacts: { capacidadeEntrega: -30, qualidadeProduto: -10, saudeEquipe: -20, conhecimentoOrganizacional: -5 },
        feedbackNarrative: 'Milhares de folhas foram impressas às pressas. A sprint foi perdida e os desenvolvedores ficaram extremamente desmotivados com a tarefa cartorial.',
        pmbokConcept: 'Desperdício Burocrático Passivo',
        learnings: ['Ceder a exigências ultrapassadas sem apresentar alternativas modernas drena os recursos do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito imediato com auditores'],
        otherConsequences: ['Atraso em entregas críticas e desmotivação']
      },
      {
        key: 'c',
        text: 'Burlar a notificação e responder aos auditores com ironia, dizendo que "métodos ágeis não prestam contas à burocracia".',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 0, saudeEquipe: -25, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'A Auditoria Interna abriu processo administrativo e congelou as contas do projeto. O reitor precisou intervir e o comitê foi advertido.',
        pmbokConcept: 'Arrogância Metodológica e Quebra de Governança',
        learnings: ['Metodologias ágeis não isentam projetos públicos de prestar contas e cumprir deveres de transparência governamental.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de prestar contas'],
        otherConsequences: ['Processo administrativo e bloqueio de verbas']
      }
    ]
  }
];
