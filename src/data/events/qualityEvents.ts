import { GameEvent, EventCategory, EventDifficulty } from '@/types';

/**
 * Princípio 5: Inclua qualidade nos processos e nas entregas
 * Fundamentação: Seção 2.5.1 (Processos do projeto) - Qualidade nos processos, eficácia técnica e prevenção de defeitos.
 * Objetivo Pedagógico: A Proteção Contra a Dívida Técnica.
 * Total: 10 Dilemas
 */
export const qualityEvents: GameEvent[] = [
  {
    id: 'quality_1_code_chaos_legado',
    title: 'A Dívida Técnica Acumulada no Módulo Central',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['debito_tecnico', 'qualidade', 'refatoracao', 'processos'],
    learningObjective: 'Resistir à pressão de acelerar entregas pulando refatoração e pagamento de dívida técnica.',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1042 - Prioridade Crítica. Os módulos centrais de matrícula e autenticação estão com altíssimo acoplamento devido a entregas apressadas no passado. A diretoria exige uma integração urgente com o novo sistema de pagamentos. Integrar agora sem refatorar tem risco extremo de quedas em produção.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Atitude de Dono e Foco em Qualidade: Pausar a esteira de novas features por 1 sprint e refatorar os módulos críticos antes de realizar a integração.',
        impacts: { capacidadeEntrega: -15, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A refatoração limpou a base de código e aumentou a cobertura de testes. A integração ocorreu sem nenhuma queda e os desenvolvedores agradeceram a decisão madura.',
        pmbokConcept: 'Qualidade no Processo e Pagamento Proativo de Dívida Técnica',
        learnings: ['Pagar a dívida técnica proativamente protege a sustentabilidade do software e reduz custos futuros de manutenção.'],
        goodBad: 'good',
        risksEvaded: ['Falhas críticas em produção e corrupção de banco de dados'],
        otherConsequences: ['Consumo de tempo imediato com ganhos permanentes de velocidade']
      },
      {
        key: 'b',
        text: 'Entregar a integração rápido conforme exigido, assumindo conscientemente a dívida técnica e torcendo para o sistema aguentar.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -25, qualidadeProduto: -20, saudeEquipe: -25, conhecimentoOrganizacional: 0 },
            narrative: 'A integração apressada sem refatoração gerou bugs severos em produção. Estudantes não conseguiram gerar boletos e a equipe precisou virar noites em correção emergencial.'
          }
        ],
        feedbackNarrative: 'Ganhamos aplausos na primeira semana, mas o sistema colapsou logo depois.',
        pmbokConcept: 'Acúmulo Tóxico de Dívida Técnica',
        learnings: ['Acelerar entregas pulando qualidade gera dívida técnica com juros impagáveis no médio prazo.'],
        goodBad: 'bad',
        risksEvaded: ['Atrito inicial com a diretoria por atraso'],
        otherConsequences: ['Colapso em produção e exaustão da equipe']
      },
      {
        key: 'c',
        text: 'Entregar uma versão parcial cobrindo apenas 50% dos casos de uso para ganhar tempo e refatorar o restante em paralelo.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'A versão parcial gerou dezenas de chamados no suporte e a refatoração paralela causou conflitos diários de merge no Git.',
        pmbokConcept: 'Divisão de Foco e Ineficiência de Processo',
        learnings: ['Refatorar o mesmo código em paralelo com novas entregas sem isolamento gera atrito e retrabalho contínuo.'],
        goodBad: 'bad',
        risksEvaded: ['Parar totalmente a esteira'],
        otherConsequences: ['Conflitos de branch e desgaste técnico']
      }
    ]
  },
  {
    id: 'quality_2_lean_gargalo_qa_swarming',
    title: 'Gargalo no Fluxo de Valor e Swarming de QA',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['lean', 'swarming', 'qa', 'qualidade'],
    learningObjective: 'Aplicar a Teoria das Restrições e Swarming para desbloquear o fluxo de testes de qualidade.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'A esteira de QA está com 45 histórias paradas aguardando testes. Os desenvolvedores continuam codificando novas tarefas a toda velocidade, gerando um estoque gigantesco de código não validado.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Paulyne QA',
    senderInitials: 'PQ',
    avatarImage: '/Personagens/Paulyne.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Prática Lean de Swarming: Parar o desenvolvimento de novas tarefas e alocar todos os desenvolvedores para ajudarem o time de QA a testar e automatizar a esteira parada.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'O gargalo foi desfeito em 3 dias. Os desenvolvedores aprenderam a escrever testes automatizados melhores e o fluxo voltou a correr livremente.',
        pmbokConcept: 'Teoria das Restrições e Swarming (Lean)',
        learnings: ['Em fluxo de valor, um recurso não-gargalo trabalhando em velocidade máxima apenas gera desperdício de estoque; o time deve focar em resolver a restrição.'],
        goodBad: 'good',
        risksEvaded: ['Estoque de software com bugs ocultos e sobrecarga de QA'],
        otherConsequences: ['Devs ganham empatia e habilidades de teste']
      },
      {
        key: 'b',
        text: 'Manter os desenvolvedores codificando novas tarefas para não baixar a métrica de "Velocity" de código e cobrar horas extras do time de QA.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: -25, saudeEquipe: -30, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O time de QA entrou em burnout. Sob pressão extrema, testes passaram batidos e 12 bugs críticos foram para produção.',
        pmbokConcept: 'Métricas de Vaidade e Otimização Local Danosa',
        learnings: ['Velocity de código sem validação de qualidade é uma métrica de vaidade que destrói a saúde do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Queda na métrica aparente de commits'],
        otherConsequences: ['Burnout de QA e bugs críticos em produção']
      },
      {
        key: 'c',
        text: 'Contratar 5 freelancers às pressas sem processo de integração para testarem o sistema no fim de semana.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -15, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'Sem entender as regras de negócio da universidade, os freelancers aprovaram fluxos quebrados e gastaram o orçamento do projeto.',
        pmbokConcept: 'Aplicação da Lei de Brooks ao Teste',
        learnings: ['Adicionar pessoas sem contexto a um processo atrasado gera mais atrasos e falhas de validação.'],
        goodBad: 'bad',
        risksEvaded: ['Alocar desenvolvedores internos em testes'],
        otherConsequences: ['Desperdício financeiro e testes ineficazes']
      }
    ]
  },
  {
    id: 'quality_3_bug_critico_inscricao_dupla',
    title: 'Bug Crítico de Inscrição Dupla em Disciplinas',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['bug', 'qualidade', 'hotfix', 'processos'],
    learningObjective: 'Conduzir a correção de incidentes graves através de processos controlados de garantia da qualidade.',
    communicationType: 'ticket',
    senderRole: 'Suporte Acadêmico',
    description: 'Ticket #1180 - URGENTE. Uma condição de corrida (Race Condition) no banco de dados está permitindo que estudantes se matriculem na mesma vaga de disciplina simultaneamente, ultrapassando o limite das salas físicas.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Carlos Silva',
    senderInitials: 'CS',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Processo Rigoroso de Hotfix: Ativar bloqueio otimista de transação (Pessimistic/Optimistic Lock), criar testes automatizados de estresse reproduzindo a concorrência e homologar em Staging antes de subir.',
        impacts: { capacidadeEntrega: -5, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A correção com travas transacionais resolveu a falha na raiz. Os testes de concorrência garantiram que nenhuma vaga fantasma fosse criada novamente.',
        pmbokConcept: 'Garantia de Qualidade em Gestão de Incidentes Críticos',
        learnings: ['Erros de concorrência exigem rigor técnico e testes reproduzíveis, não palpites de código rápidos.'],
        goodBad: 'good',
        risksEvaded: ['Superlotação de turmas e brigas judiciais por vagas'],
        otherConsequences: ['Base de dados íntegra e blindada contra concorrência']
      },
      {
        key: 'b',
        text: 'Executar um script SQL rápido direto no banco de dados de produção sem testar em homologação.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O script manual apagou todas as matrículas de 80 turmas válidas por engano. O semestre letivo teve que ser reiniciado.',
        pmbokConcept: 'Intervenção Manual Temerária sem Qualidade Processual',
        learnings: ['Alterar dados diretamente em produção sem validação de scripts é uma violação gravíssima de integridade.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de homologação'],
        otherConsequences: ['Corrupção massiva de dados acadêmicos']
      },
      {
        key: 'c',
        text: 'Ignorar o bug e deixar os professores resolverem a superlotação manualmente colocando cadeiras no corredor.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -35, saudeEquipe: -25, conhecimentoOrganizacional: -25 },
        feedbackNarrative: 'Salas com 40 lugares receberam 90 alunos. O Corpo de Bombeiros interditou o bloco de aulas por risco de segurança física.',
        pmbokConcept: 'Negligência Operacional e Risco Físico',
        learnings: ['Falhas de software geram impactos físicos e de segurança no mundo real quando ignoradas.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho de correção imediato'],
        otherConsequences: ['Interdição de prédios universitários e escândalo']
      }
    ]
  },
  {
    id: 'quality_4_sonarqube_debito_tecnico',
    title: 'A Bola de Neve: SonarQube no Vermelho',
    category: EventCategory.KNOWLEDGE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['sonarqube', 'qualidade', 'ci_cd', 'processos'],
    learningObjective: 'Implementar Quality Gates contínuos para conter a degradação da qualidade interna do código.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'O relatório do SonarQube apontou mais de 300 vulnerabilidades de segurança e 45 dias de dívida técnica acumulada. Desenvolvedores pedem autorização para configurar Quality Gates automáticos no GitHub que barrem códigos de má qualidade.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Instituir Quality Gates Contínuos: Travar merges de código que não atinjam cobertura mínima de 80% de testes e 0 vulnerabilidades críticas, dedicando 20% de cada sprint para pagar o débito.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'A qualidade do repositório virou para o verde em 4 semanas. O número de bugs reportados por usuários caiu 60% e a manutenção ficou simples.',
        pmbokConcept: 'Quality Gates e Prevenção Contínua de Defeitos',
        learnings: ['Definir padrões de qualidade automatizados impede a degradação da base de código e reduz o custo total do ciclo de vida.'],
        goodBad: 'good',
        risksEvaded: ['Degradação contínua do sistema até se tornar inalterável'],
        otherConsequences: ['Cultura de excelência técnica consolidada']
      },
      {
        key: 'b',
        text: 'Desativar o SonarQube para "parar de ver alertas vermelhos chatos que atrapalham as entregas".',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -25 },
        delayedImpacts: [
          {
            triggerAfterEvents: 2,
            impacts: { capacidadeEntrega: -30, qualidadeProduto: -25, saudeEquipe: -25, conhecimentoOrganizacional: -10 },
            narrative: 'As vulnerabilidades ignoradas facilitaram um ataque que sequestrou a base de dados do SIGAA. O projeto foi paralisado para auditoria externa.'
          }
        ],
        feedbackNarrative: 'Desligar o alarme de incêndio não apaga o fogo. A segurança do sistema foi destruída.',
        pmbokConcept: 'Cegueira Voluntária e Risco Crítico',
        learnings: ['Ignorar ferramentas de auditoria de qualidade acumula vulnerabilidades graves que fatalmente serão exploradas.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo corrigindo alertas de qualidade'],
        otherConsequences: ['Sequestro de dados e paralisação do projeto']
      },
      {
        key: 'c',
        text: 'Parar todo o desenvolvimento por 3 meses para corrigir 100% dos alertas do SonarQube de uma só vez.',
        impacts: { capacidadeEntrega: -35, qualidadeProduto: 15, saudeEquipe: -10, conhecimentoOrganizacional: 10 },
        feedbackNarrative: 'A universidade cancelou o contrato por falta de entregas funcionais durante o trimestre.',
        pmbokConcept: 'Perfeccionismo Desbalanceado com as Metas de Negócio',
        learnings: ['Qualidade deve ser integrada de forma contínua e incremental, nunca em pausas absolutas que anulam o valor do negócio.'],
        goodBad: 'bad',
        risksEvaded: ['Alertas de código'],
        otherConsequences: ['Cancelamento por falta de entregas funcionais']
      }
    ]
  },
  {
    id: 'quality_5_requisitos_ambiguos_ira',
    title: 'Requisitos Ambíguos no Cálculo de IRA',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['requisitos', 'qualidade', 'bdd', 'alinhamento'],
    learningObjective: 'Garantir qualidade na fase de requisitos prevenindo retrabalho estrutural.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'A regra enviada pela PROGRAD para o cálculo do Índice de Rendimento Acadêmico (IRA) é ambígua em relação a disciplinas trancadas e reprovações por falta. A equipe está dividida sobre como programar a fórmula.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Roberto Arquiteto',
    senderInitials: 'RA',
    avatarImage: '/Personagens/Roberto.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Qualidade no Processo de Requisitos (Specification by Example): Conduzir reunião de 1 hora com o comitê de graduação, desenhar 5 cenários com tabelas de exemplos reais e criar testes automatizados de aceitação antes de codificar.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: 25, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'Os exemplos reais eliminaram todas as dúvidas. O cálculo foi codificado de primeira e validado com precisão matemática em 100% dos históricos.',
        pmbokConcept: 'Prevenção de Defeitos e Especificação por Exemplo',
        learnings: ['Validar requisitos com exemplos concretos antes da codificação é 10 vezes mais barato do que corrigir bugs após a entrega.'],
        goodBad: 'good',
        risksEvaded: ['Cálculos errôneos de IRA e retrabalho em massa'],
        otherConsequences: ['Alinhamento perfeito entre equipe técnica e setor acadêmico']
      },
      {
        key: 'b',
        text: 'Cada desenvolvedor programa a fórmula do jeito que achar melhor e o sistema tira a média dos resultados.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'Alunos do mesmo curso tiveram IRAs calculados de formas totalmente divergentes, gerando recursos administrativos e denúncias de favorecimento.',
        pmbokConcept: 'Ambiguidade Não Tratada e Caos Lógico',
        learnings: ['Programar sob ambiguidade sem alinhamento com o cliente gera produtos inconsistentes e injustiças de negócio.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de reunião de alinhamento'],
        otherConsequences: ['Inconsistência de médias e processos judiciais']
      },
      {
        key: 'c',
        text: 'Remover o cálculo do IRA do sistema e obrigar os professores a calcularem à mão na calculadora.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'Milhares de professores cometeram erros de conta e a seleção de bolsas de pós-graduação foi invalidada.',
        pmbokConcept: 'Transferência Indevida de Responsabilidade do Sistema',
        learnings: ['Sistemas de software existem para automatizar regras complexas com confiabilidade matemática.'],
        goodBad: 'bad',
        risksEvaded: ['Dúvidas de codificação'],
        otherConsequences: ['Erros manuais massivos e invalidação de editais']
      }
    ]
  },
  {
    id: 'quality_6_retrabalho_historicos',
    title: 'Retrabalho Crônico no Gerador de Históricos',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['retrabalho', 'testes', 'qualidade', 'automacao'],
    learningObjective: 'Eliminar retrabalho crônico através de suítes de testes de regressão automatizados.',
    communicationType: 'ticket',
    senderRole: 'Desenvolvedor Pleno',
    description: 'Ticket #1195 - Retrabalho Recorrente. O gerador de PDFs de históricos escolares já quebrou pela 4ª vez neste mês após pequenas alterações no layout de disciplinas. A equipe gasta 2 dias a cada sprint consertando o mesmo módulo.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Kenedy Backend',
    senderInitials: 'KB',
    avatarImage: '/Personagens/Kenedy.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Qualidade Estrutural e Testes de Regressão: Refatorar o gerador de PDF desacoplando o modelo de dados do layout visual e implementar testes visuais de regressão automatizados no CI/CD.',
        impacts: { capacidadeEntrega: 15, qualidadeProduto: 25, saudeEquipe: 20, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'A refatoração com testes automáticos eliminou o retrabalho em 100%. O módulo nunca mais quebrou e a equipe economizou 4 dias de trabalho por mês.',
        pmbokConcept: 'Custo da Não-Conformidade e Testes de Regressão',
        learnings: ['Erros recorrentes devem ser combatidos com testes de regressão automatizados para estancar o dreno contínuo de capacidade.'],
        goodBad: 'good',
        risksEvaded: ['Dreno contínuo de tempo com correções repetitivas'],
        otherConsequences: ['Estabilidade permanente na emissão de documentos oficiais']
      },
      {
        key: 'b',
        text: 'Continuar fazendo remendos manuais a cada sprint sempre que o PDF quebrar.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -20, saudeEquipe: -20, conhecimentoOrganizacional: -10 },
        feedbackNarrative: 'O módulo continuou consumindo 20% de toda a capacidade da equipe com retrabalho inútil e o estresse aumentou.',
        pmbokConcept: 'Aceitação Passiva de Retrabalho (Waste/Muda)',
        learnings: ['Aceitar retrabalho recorrente sem tratar a causa-raiz é uma das maiores fontes de ineficiência operacional.'],
        goodBad: 'bad',
        risksEvaded: ['Investimento em refatoração'],
        otherConsequences: ['Desperdício crônico de horas da equipe']
      },
      {
        key: 'c',
        text: 'Desativar a emissão de PDF e fazer o sistema enviar apenas um texto não formatado por e-mail.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -30, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'Instituições estrangeiras recusaram os históricos por falta de autenticidade visual, prejudicando alunos em programas de intercâmbio.',
        pmbokConcept: 'Degradação da Qualidade do Entregável Final',
        learnings: ['Entregáveis oficiais devem cumprir padrões de qualidade e formalidade esperados pela sociedade.'],
        goodBad: 'bad',
        risksEvaded: ['Trabalho com bibliotecas de PDF'],
        otherConsequences: ['Prejuízo a estudantes em intercâmbios internacionais']
      }
    ]
  },
  {
    id: 'quality_7_corte_testes_fim_sprint',
    title: 'Fim de Sprint: Cortar Testes para Bater Metas?',
    category: EventCategory.EXECUTION,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['testes', 'sprint', 'qualidade', 'etica'],
    learningObjective: 'Manter a integridade da Definition of Done (DoD) mesmo sob pressão de encerramento de ciclos.',
    communicationType: 'slack',
    senderRole: 'Desenvolvedor Pleno',
    description: 'Faltam 2 dias para o fim da sprint e a funcionalidade de trancamento de matrícula está pronta no código, mas nenhum teste unitário ou de integração foi escrito. O time debate se deve pular os testes para fechar 100% da meta da sprint.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Paulyne QA',
    senderInitials: 'PQ',
    avatarImage: '/Personagens/Paulyne.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Honrar a Definition of Done: Manter o rigor de qualidade, não dar a tarefa como pronta sem testes completos e mover o item não testado de forma transparente para a sprint seguinte.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 20, saudeEquipe: 15, conhecimentoOrganizacional: 15 },
        feedbackNarrative: 'A transparência fortaleceu a cultura de engenharia. Na sprint seguinte os testes foram concluídos e a funcionalidade foi lançada com zero bugs.',
        pmbokConcept: 'Critérios Rígidos de Conclusão (Definition of Done) e Integridade',
        learnings: ['Dar uma tarefa como "pronta" sem testes é uma ilusão que gera débitos imediatos; a Definition of Done protege a qualidade do produto.'],
        goodBad: 'good',
        risksEvaded: ['Lançamento de funcionalidade defeituosa e corrupção de matrículas'],
        otherConsequences: ['Previsibilidade real e honesta das entregas']
      },
      {
        key: 'b',
        text: 'Marcar a tarefa como concluída sem testes para bater a meta aparente do burndown chart.',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -25, saudeEquipe: -20, conhecimentoOrganizacional: -15 },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: { capacidadeEntrega: -20, qualidadeProduto: -20, saudeEquipe: -20, conhecimentoOrganizacional: 0 },
            narrative: 'O trancamento de matrícula sem testes permitiu que alunos trancassem o curso inteiro por engano sem confirmação, gerando pânico acadêmico.'
          }
        ],
        feedbackNarrative: 'Bater a métrica artificial escondeu a falta de qualidade e causou falhas graves logo em seguida.',
        pmbokConcept: 'Métricas Manipuladas e Falsa Sensação de Progresso',
        learnings: ['Enganar as métricas de projeto fechando tarefas incompletas destrói a governança técnica.'],
        goodBad: 'bad',
        risksEvaded: ['Mostrar burndown incompleto'],
        otherConsequences: ['Trancamentos indevidos e crise institucional']
      },
      {
        key: 'c',
        text: 'Escrever testes vazios que sempre passam (assert true == true) apenas para enganar o relatório automatizado.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -35, saudeEquipe: -25, conhecimentoOrganizacional: -30 },
        feedbackNarrative: 'A fraude nos testes foi descoberta na revisão técnica. A equipe perdeu totalmente a credibilidade profissional.',
        pmbokConcept: 'Fraude Processual e Quebra Ética',
        learnings: ['Fraudar processos de garantia de qualidade é conduta inaceitável em qualquer projeto de engenharia.'],
        goodBad: 'bad',
        risksEvaded: ['Cobrança por testes'],
        otherConsequences: ['Demissão por fraude e código vulnerável']
      }
    ]
  },
  {
    id: 'quality_8_acessibilidade_wcag',
    title: 'Acessibilidade Digital: Conformidade com WCAG 2.1',
    category: EventCategory.PEOPLE,
    difficulty: EventDifficulty.MEDIUM,
    probabilityWeight: 2,
    tags: ['acessibilidade', 'wcag', 'inclusao', 'qualidade'],
    learningObjective: 'Garantir que a qualidade do produto contemple acessibilidade e conformidade legal inclusiva.',
    communicationType: 'email',
    senderRole: 'Comitê de Acessibilidade da UFC',
    description: 'Assunto: Laudo de Acessibilidade Digital. O Comitê de Acessibilidade emitiu laudo apontando que os novos formulários não possuem tags semânticas ARIA, impedindo que estudantes cegos utilizem leitores de tela para realizar a matrícula.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Marina Design',
    senderInitials: 'MD',
    avatarImage: '/Personagens/Leonara.png',
    responsibleRole: 'uxLead',
    alternatives: [
      {
        key: 'a',
        text: 'Qualidade Inclusiva: Adequar a biblioteca de componentes ao padrão WCAG 2.1 AA, incluindo testes automáticos com a ferramenta axe-core e validação com estudantes com deficiência.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 25, saudeEquipe: 20, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'O portal se tornou referência nacional de acessibilidade universitária. Estudantes com deficiência conseguiram se matricular de forma 100% autônoma pela primeira vez na história.',
        pmbokConcept: 'Qualidade Inclusiva e Cumprimento de Requisitos Legais e Sociais',
        learnings: ['Acessibilidade não é opcional nem acessório; é um requisito de qualidade essencial e dever legal do serviço público.'],
        goodBad: 'good',
        risksEvaded: ['Processos por discriminação e exclusão de estudantes com deficiência'],
        otherConsequences: ['Premiação em inovação e inclusão digital']
      },
      {
        key: 'b',
        text: 'Ignorar o laudo e dizer que "estudantes com deficiência devem ir presencialmente na reitoria para alguém digitar por eles".',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: -35, saudeEquipe: -30, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'A declaração capacitista gerou revolta no campus e o Ministério Público Federal ajuizou ação civil pública com multa diária contra a universidade.',
        pmbokConcept: 'Discriminação Institucional e Falha Grave de Qualidade',
        learnings: ['Negar acessibilidade em sistemas públicos é infração legal gravíssima e exclusão social inaceitável.'],
        goodBad: 'bad',
        risksEvaded: ['Tempo de ajuste de HTML semântico'],
        otherConsequences: ['Ação do Ministério Público Federal e crise institucional']
      },
      {
        key: 'c',
        text: 'Colocar apenas um botão genérico de "alto contraste" que só inverte as cores e não resolve os leitores de tela.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -20, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A falsa acessibilidade (Accessi-washing) foi desmascarada pelo comitê técnico no primeiro teste com deficientes visuais.',
        pmbokConcept: 'Qualidade Superficial (Cosmética)',
        learnings: ['Acessibilidade real exige semântica de código estruturada (HTML/ARIA), não remendos cosméticos superficiais.'],
        goodBad: 'bad',
        risksEvaded: ['Ajuste profundo nos componentes'],
        otherConsequences: ['Reprovação técnica e frustração dos usuários']
      }
    ]
  },
  {
    id: 'quality_9_testes_carga_estresse',
    title: 'Testes de Carga para o "Pico das Matrículas"',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['performance', 'testes_carga', 'qualidade', 'resiliencia'],
    learningObjective: 'Garantir a confiabilidade e robustez técnica através de testes de carga e estresse realistas.',
    communicationType: 'slack',
    senderRole: 'Líder Técnico',
    description: 'Faltam 3 semanas para o dia da matrícula e esperamos 35.000 requisições simultâneas no primeiro minuto. A equipe debate se deve gastar 4 dias executando testes de carga com o k6/JMeter ou apenas confiar que a infraestrutura aguenta.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Kendrick DevOps',
    senderInitials: 'KD',
    avatarImage: '/Personagens/Kendrick.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Garantia de Qualidade Proativa: Realizar simulações de carga com k6 para 50.000 usuários simultâneos, identificando gargalos de conexão e ajustando o pool de threads e cache.',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: 25, saudeEquipe: 20, conhecimentoOrganizacional: 20 },
        feedbackNarrative: 'O teste de carga revelou um gargalo crítico de conexões que teria derrubado o sistema em 2 minutos. Com o ajuste prévio, o dia da matrícula foi o mais calmo da história da UFC.',
        pmbokConcept: 'Validação de Desempenho e Engenharia de Resiliência',
        learnings: ['Testar o comportamento sob estresse antes do evento crítico é a única garantia real de estabilidade em sistemas de alta concorrência.'],
        goodBad: 'good',
        risksEvaded: ['Queda vexatória do sistema no momento mais visível do ano'],
        otherConsequences: ['Tranquilidade operacional no dia do lançamento']
      },
      {
        key: 'b',
        text: 'Não fazer testes de carga para não gastar tempo e "torcer com pensamento positivo no dia".',
        impacts: { capacidadeEntrega: 10, qualidadeProduto: -35, saudeEquipe: -30, conhecimentoOrganizacional: -25 },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: { capacidadeEntrega: -35, qualidadeProduto: -35, saudeEquipe: -35, conhecimentoOrganizacional: 0 },
            narrative: 'No primeiro minuto das matrículas, 30.000 alunos acessaram ao mesmo tempo e o banco travou completamente. As matrículas foram canceladas e adiadas por 1 semana.'
          }
        ],
        feedbackNarrative: 'A falta de testes preventivos transformou o lançamento em um desastre público.',
        pmbokConcept: 'Esperança Não é Estratégia de Engenharia',
        learnings: ['Confiar em sorte em vez de testes empíricos de engenharia é negligência com a qualidade do projeto.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de script de teste de carga'],
        otherConsequences: ['Colapso em rede nacional e adiamento de matrículas']
      },
      {
        key: 'c',
        text: 'Fazer o teste de carga rodando diretamente contra o banco de produção durante o horário de expediente.',
        impacts: { capacidadeEntrega: -20, qualidadeProduto: -30, saudeEquipe: -20, conhecimentoOrganizacional: -20 },
        feedbackNarrative: 'O teste de carga derrubou o sistema que professores e alunos estavam usando para lançar notas naquele momento.',
        pmbokConcept: 'Execução Inadequada de Testes de Estresse',
        learnings: ['Testes de carga devem ser executados em ambientes isolados de teste ou em janelas noturnas estritamente controladas.'],
        goodBad: 'bad',
        risksEvaded: ['Configurar ambiente de teste'],
        otherConsequences: ['Queda em horário comercial e perda de dados']
      }
    ]
  },
  {
    id: 'quality_10_vulnerabilidade_sql_injection',
    title: 'Vulnerabilidade Crítica: Injeção SQL no Módulo de Busca',
    category: EventCategory.INFRASTRUCTURE,
    difficulty: EventDifficulty.HARD,
    probabilityWeight: 2,
    tags: ['seguranca', 'sql_injection', 'qualidade', 'owasp'],
    learningObjective: 'Aplicar práticas de segurança e qualidade técnica imediata diante de vulnerabilidades de segurança (OWASP Top 10).',
    communicationType: 'ticket',
    senderRole: 'Líder Técnico',
    description: 'Ticket #1250 - Alerta de Segurança (OWASP). Um teste automatizado de segurança identificou uma brecha grave de SQL Injection na barra de busca de turmas que permite a qualquer visitante visualizar as senhas e dados bancários de todos os servidores da universidade.',
    domainTag: 'Inclua qualidade nos processos e nas entregas',
    senderName: 'Geraldo Auditor',
    senderInitials: 'GA',
    avatarImage: '/Personagens/Geraldo.png',
    responsibleRole: 'techLead',
    alternatives: [
      {
        key: 'a',
        text: 'Qualidade e Segurança Imediata: Parar a esteira imediatamente para aplicar consultas parametrizadas (Prepared Statements / ORM seguro) e realizar varredura completa em todos os endpoints com ferramentas SAST/DAST.',
        impacts: { capacidadeEntrega: 0, qualidadeProduto: 30, saudeEquipe: 15, conhecimentoOrganizacional: 25 },
        feedbackNarrative: 'A correção foi rápida e cirúrgica. A varredura de segurança blindou o sistema contra as 10 principais ameaças da OWASP e o laudo de segurança foi aprovado com nota máxima.',
        pmbokConcept: 'Segurança como Pilar Inegociável da Qualidade de Software',
        learnings: ['Vulnerabilidades críticas de segurança exigem priorização imediata e tratamento da causa-raiz em todo o código.'],
        goodBad: 'good',
        risksEvaded: ['Vazamento em massa de senhas e dados bancários institucionais'],
        otherConsequences: ['Sistema seguro e aprovado em testes de invasão (Pentest)']
      },
      {
        key: 'b',
        text: 'Adiar a correção da vulnerabilidade para o próximo semestre porque "ninguém vai tentar hackear a universidade agora".',
        impacts: { capacidadeEntrega: 5, qualidadeProduto: -35, saudeEquipe: -30, conhecimentoOrganizacional: -30 },
        delayedImpacts: [
          {
            triggerAfterEvents: 1,
            impacts: { capacidadeEntrega: -35, qualidadeProduto: -35, saudeEquipe: -35, conhecimentoOrganizacional: -30 },
            narrative: 'A brecha de SQL Injection foi explorada por hackers e todos os dados de servidores da UFC foram vazados na dark web. O comitê gestor respondeu criminalmente.'
          }
        ],
        feedbackNarrative: 'A negligência com segurança resultou no maior vazamento de dados da história da universidade.',
        pmbokConcept: 'Negligência Temerária em Segurança de Software',
        learnings: ['Deixar vulnerabilidades conhecidas em produção é negligência técnica inaceitável com consequências criminais.'],
        goodBad: 'bad',
        risksEvaded: ['Pausa na sprint atual'],
        otherConsequences: ['Vazamento de dados na dark web e processos criminais']
      },
      {
        key: 'c',
        text: 'Desativar a barra de busca permanentemente e obrigar os alunos a rolarem uma lista com 4.000 disciplinas manualmente.',
        impacts: { capacidadeEntrega: -10, qualidadeProduto: -25, saudeEquipe: -15, conhecimentoOrganizacional: -15 },
        feedbackNarrative: 'A remoção da busca tornou o sistema inútil na prática e os estudantes levaram horas para encontrar suas matérias.',
        pmbokConcept: 'Destruição de Usabilidade por Incapacidade Técnica',
        learnings: ['Remover funcionalidades essenciais em vez de corrigir vulnerabilidades demonstra imaturidade de engenharia.'],
        goodBad: 'bad',
        risksEvaded: ['Esforço de parametrização de queries'],
        otherConsequences: ['Péssima usabilidade e revolta dos usuários']
      }
    ]
  }
];
