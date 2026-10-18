/**
 * Glossário pedagógico voltado ao Domínio de Recursos do PMBOK 8.
 * Apresenta definições claras e acessíveis para estudantes de graduação,
 * sem depender de termos ou jargões prévios de programação.
 *
 * Os termos marcados como "PMBOK 8" seguem as ferramentas, técnicas e artefatos
 * descritos na Seção 2.6 do Guia (Domínio de Desempenho de Recursos).
 */
export const TECH_GLOSSARY: Record<string, string> = {
  // PMBOK 8 - Processos do Domínio de Recursos
  'planejar o gerenciamento dos recursos': 'Processo do PMBOK 8 que define como os recursos (pessoas, equipamentos, licenças, ambientes) serão estimados, adquiridos, liderados e utilizados no projeto.',
  'estimar recursos': 'Processo do PMBOK 8 que identifica tipo, quantidade e características dos recursos necessários, antecipando escassez ou excedente.',
  'adquirir recursos': 'Processo do PMBOK 8 de obter pessoas e recursos físicos ou virtuais e atribuí-los às atividades, negociando com quem os fornece.',
  'liderar a equipe': 'Processo do PMBOK 8 de desenvolver, motivar e orientar a equipe, dar feedback, resolver conflitos e gerenciar mudanças na equipe.',
  'monitorar e controlar recursos': 'Processo contínuo do PMBOK 8 que compara o uso planejado e o real de recursos físicos e virtuais e aplica ações corretivas.',

  // PMBOK 8 - Artefatos e papéis
  'plano de gerenciamento dos recursos': 'Documento que registra como a equipe vai estimar, obter, liderar, usar e liberar os recursos do projeto.',
  'calendário de recursos': 'Registro de quando cada pessoa ou recurso está disponível (férias, outros projetos, janelas de manutenção, cotas de nuvem).',
  'calendários de recursos': 'Registros de quando cada pessoa ou recurso está disponível (férias, outros projetos, janelas de manutenção, cotas de nuvem).',
  'requisitos de recursos': 'Lista do tipo e da quantidade de recursos que cada atividade exige; é a principal saída de Estimar Recursos.',
  'base das estimativas': 'Registro das premissas, fontes e cálculos usados para chegar a uma estimativa, permitindo revisá-la depois.',
  'estrutura analítica dos recursos': 'Representação hierárquica dos recursos do projeto por categoria e tipo (pessoas, servidores, licenças, ambientes).',
  'gerente de recursos': 'Pessoa com autoridade sobre um ou mais recursos (por exemplo, a chefia de um setor que cede servidores ou pessoas ao projeto).',
  'gerente funcional': 'Chefia de um setor da organização que detém autoridade sobre as pessoas ou recursos que o projeto precisa usar.',
  'ambiente matricial': 'Estrutura em que as pessoas respondem ao mesmo tempo à chefia do seu setor e ao gerente do projeto, exigindo negociação de alocação.',
  'pré-designação': 'Quando um recurso já é definido antes do processo normal de aquisição (por exemplo, por exigência do patrocinador ou de um edital).',
  'recursos alternativos': 'Recursos com competências, características ou custos diferentes dos planejados; aceitáveis se os riscos forem reconhecidos e registrados.',
  'análise de decisão multicritério': 'Técnica que compara opções com critérios ponderados (custo, prazo, risco, competência) para escolher de forma transparente.',
  'avaliação de desempenho da equipe': 'Avaliação formal ou informal da eficácia da equipe; é a saída do processo Liderar a Equipe.',

  // PMBOK 8 - Técnicas de planejamento e estimativa
  'matriz de responsabilidades': 'Quadro visual (como a matriz RAM ou RACI) que define com clareza quem faz, quem aprova e quem apoia cada entrega do projeto.',
  'ram': 'Matriz de Atribuição de Responsabilidades: ferramenta que esclarece os papéis de cada membro em relação às tarefas do projeto.',
  'raci': 'Tipo de matriz de responsabilidades que indica quem é Responsável, quem Aprova, quem é Consultado e quem é Informado.',
  'análise swot': 'Análise de Forças, Fraquezas, Oportunidades e Ameaças; no domínio Recursos, ajuda a enxergar competências e lacunas da equipe.',
  'swot': 'Análise de Forças, Fraquezas, Oportunidades e Ameaças; no domínio Recursos, ajuda a enxergar competências e lacunas da equipe.',
  'visão baseada em recursos': 'Abordagem que trata as competências e ativos únicos da organização como fonte de vantagem para o projeto.',
  'gestão verde de recursos humanos': 'Práticas de gestão de pessoas que consideram o impacto ambiental, como trabalho remoto para reduzir deslocamentos.',
  'teoria organizacional': 'Conhecimento sobre como pessoas, equipes e unidades se comportam, usado para definir a estrutura e os papéis do projeto.',
  'estimativa bottom-up': 'Técnica de estimativa em que cada tarefa detalhada é calculada individualmente e somada para formar o total com máxima precisão.',
  'bottom-up': 'Estimativa feita de baixo para cima: cada pacote de trabalho é estimado por quem o executa e os valores são somados.',
  'estimativa análoga': 'Técnica de estimativa rápida baseada na comparação com projetos ou atividades semelhantes executados no passado.',
  'estimativa paramétrica': 'Técnica de estimativa que utiliza dados históricos e relações estatísticas ou matemáticas para calcular prazos e recursos.',
  'análise de alternativas': 'Comparação de diferentes formas de executar o trabalho (fazer internamente, terceirizar, automatizar) antes de decidir os recursos.',
  'opinião especializada': 'Consulta a pessoas com experiência no assunto para validar estimativas e decisões sobre recursos.',

  // PMBOK 8 - Liderar a Equipe
  'team charter': 'Documento formal e colaborativo que define as regras de convivência, valores, canais de comunicação e acordos operacionais da equipe.',
  'liderança servidora': 'Abordagem de liderança em que o gestor atua para apoiar a equipe, remover impedimentos e fornecer as condições para o alto desempenho.',
  'liderança distribuída': 'Autoridade e decisões compartilhadas entre os membros da equipe, comum em equipes maduras e auto-organizadas.',
  'liderança centralizada': 'Decisões concentradas em uma ou poucas pessoas; útil em crises ou com equipes novas, mas cria gargalos se usada sempre.',
  'colocação': 'Reunir os membros da equipe no mesmo espaço físico para aumentar a comunicação e a colaboração.',
  'equipe virtual': 'Equipe que trabalha distribuída, conectada por ferramentas digitais; exige acordos claros de comunicação.',
  'equipes virtuais': 'Equipes que trabalham distribuídas, conectadas por ferramentas digitais; exigem acordos claros de comunicação.',
  'inteligência emocional': 'Capacidade de reconhecer e gerir as próprias emoções e as dos outros, essencial para conduzir conflitos e motivar.',
  'seis chapéus': 'Técnica de resolução de problemas (Six Thinking Hats) em que o grupo analisa a questão por seis perspectivas, uma de cada vez.',
  'tuckman': 'Modelo de estágios de desenvolvimento de equipes: formação, conflito, normatização, desempenho e dissolução.',
  'coaching': 'Apoio individual para que a pessoa desenvolva competências e encontre suas próprias soluções.',
  'mentoria': 'Orientação de uma pessoa mais experiente a outra menos experiente, transferindo conhecimento e acelerando o aprendizado.',
  'quiet quitting': 'Desengajamento silencioso: a pessoa faz apenas o mínimo, deixa de opinar e se voluntariar, sinal de alerta de bem-estar.',
  'generalista-especialista': 'Profissional com uma especialidade principal e habilidades para apoiar outras áreas, comum em equipes adaptativas.',
  'reconhecimento': 'Valorizar publicamente o esforço e os resultados da equipe; reforça comportamentos positivos e o engajamento.',
  'segurança psicológica': 'Clima de confiança mútua onde os membros sentem liberdade para expressar dúvidas, propor ideias e admitir erros sem medo de punição.',
  'ambiente seguro': 'Ambiente de trabalho transparente e protegido contra perseguições, onde falhas são tratadas como oportunidades de aprendizado do sistema.',
  'transparência sobre vieses': 'Reconhecimento aberto de preferências e limitações da equipe para tomar decisões mais justas e equilibradas.',
  'blameless post-mortem': 'Reunião de análise após um incidente focada em descobrir falhas nos processos e no sistema, sem apontar culpados individuais.',
  'retrospectiva': 'Reunião periódica da equipe para inspecionar o processo de trabalho recente e pactuar melhorias contínuas para as próximas etapas.',
  'propriedade compartilhada': 'Sentimento coletivo de responsabilidade em que todos os membros cuidam do projeto como um todo, superando silos individuais.',
  'gestão de conflitos': 'Mediação construtiva de divergências na equipe, transformando opiniões diferentes em soluções inovadoras.',

  // PMBOK 8 - Monitorar e Controlar
  'uso planejado': 'Comparação entre o consumo de recursos previsto no plano e o consumo real, base do processo Monitorar e Controlar Recursos.',
  'liberação de recursos': 'Devolver servidores, licenças ou ambientes assim que deixam de ser necessários, evitando custo e ociosidade.',
  'análise de custo-benefício': 'Comparação entre o custo de uma ação corretiva e o benefício que ela traz, para decidir se vale a pena.',
  'análise de tendências': 'Observação da evolução de um indicador ao longo do tempo para prever problemas antes que aconteçam.',
  'mapeamento do fluxo de valor': 'Técnica lean que desenha todas as etapas de um processo para localizar esperas, gargalos e desperdícios.',
  'gráfico de controle': 'Gráfico que mostra se um processo está estável, destacando valores fora dos limites aceitáveis.',
  'gráficos de controle': 'Gráficos que mostram se um processo está estável, destacando valores fora dos limites aceitáveis.',
  'teoria das restrições': 'Filosofia de gestão focada em identificar o gargalo (o ponto mais lento do processo) e otimizá-lo para aumentar a capacidade total.',
  'gargalo': 'Etapa ou recurso com menor capacidade no fluxo de trabalho que limita a velocidade de entrega de toda a equipe.',
  'kaizen': 'Filosofia de melhoria contínua por meio de pequenas mudanças incrementais feitas pela própria equipe.',
  'melhoria contínua': 'Prática de revisar e aprimorar processos de forma recorrente, em pequenos passos.',
  'desperdício': 'Qualquer atividade que consome tempo e recursos sem agregar valor real ao resultado final do projeto (conceito Lean / Muda).',
  'muda': 'Termo da filosofia Lean que designa desperdícios no processo produtivo que devem ser sistematicamente eliminados.',
  'retrabalho': 'Esforço gasto para refazer tarefas que apresentaram defeitos devido à falta de planejamento, testes ou comunicação.',
  'ociosidade': 'Período em que profissionais ou equipamentos ficam parados sem produzir, geralmente aguardando aprovações ou desbloqueios.',
  'inatividade': 'Tempo em que um recurso alocado não está sendo usado; o PMBOK 8 pede que fique em percentual aceitável.',

  // Conceitos gerais
  'burnout': 'Estado de esgotamento físico e mental gerado por sobrecarga de trabalho e pressão contínua, reduzindo o bem-estar e a produtividade.',
  'recursos físicos e virtuais': 'Todos os recursos materiais ou tecnológicos necessários ao projeto: servidores, computadores, licenças de software e laboratórios.',
  'tailoring': 'Adaptação consciente e intencional dos processos e ferramentas de gerenciamento para atender à realidade específica do projeto.',
  'partes interessadas': 'Pessoas, grupos ou instituições que podem afetar ou ser afetados pelas decisões e entregas do projeto (stakeholders).',
  'capacidade de entrega': 'Volume de trabalho útil que a equipe consegue concluir em um determinado período sem comprometer a sustentabilidade.',
  'qualidade do produto': 'Grau em que as entregas atendem aos requisitos combinados, normas de acessibilidade e expectativas dos usuários.',
  'saúde da equipe': 'Nível de motivação, energia, confiança e bem-estar físico e emocional dos profissionais envolvidos no projeto.',
  'conhecimento organizacional': 'Patrimônio de saberes, documentações e competências acumuladas e compartilhadas pela equipe ao longo do projeto.',
  'silos': 'Isolamento entre profissionais ou departamentos que não se comunicam, prejudicando o fluxo de trabalho e gerando retrabalho.',
  'horas extras': 'Extensão da jornada de trabalho além do horário normal; seu uso crônico causa exaustão, erros e desmotivação.',
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Termos mais longos primeiro, para que "estimativa bottom-up" tenha prioridade sobre "bottom-up".
const GLOSSARY_MATCHERS = Object.entries(TECH_GLOSSARY)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([term, definition]) => ({
    term,
    definition,
    // Fronteira de palavra compatível com acentos (evita "ram" casar com "programar").
    regex: new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegex(term)}(?=$|[^\\p{L}\\p{N}])`, 'iu'),
  }));

/**
 * Detecta quais termos do glossário estão presentes em um texto.
 * Retorna até `max` termos (padrão 3) para não sobrecarregar o tooltip.
 * Termos contidos em outro termo já encontrado são ignorados.
 */
export function detectTechTerms(
  text: string,
  max = 3,
): Array<{ term: string; definition: string }> {
  const found: Array<{ term: string; definition: string }> = [];

  for (const { term, definition, regex } of GLOSSARY_MATCHERS) {
    if (!regex.test(text)) continue;
    if (found.some((f) => f.term.includes(term))) continue;
    found.push({ term, definition });
    if (found.length >= max) break;
  }

  return found;
}
