/**
 * Glossário pedagógico voltado ao Domínio de Recursos do PMBOK 8.
 * Apresenta definições claras e acessíveis para estudantes de graduação,
 * sem depender de termos ou jargões prévios de programação.
 */
export const TECH_GLOSSARY: Record<string, string> = {
  // PMBOK 8 - Processos e Conceitos de Recursos
  'team charter': 'Documento formal e colaborativo que define as regras de convivência, valores, canais de comunicação e acordos operacionais da equipe.',
  'liderança servidora': 'Abordagem de liderança em que o gestor atua para apoiar a equipe, remover impedimentos e fornecer as condições para o alto desempenho.',
  'segurança psicológica': 'Clima de confiança mútua onde os membros sentem liberdade para expressar dúvidas, propor ideias e admitir erros sem medo de punição.',
  'ambiente seguro': 'Ambiente de trabalho transparente e protegido contra perseguições, onde falhas são tratadas como oportunidades de aprendizado do sistema.',
  'transparência sobre vieses': 'Reconhecimento aberto de preferências e limitações da equipe para tomar decisões mais justas e equilibradas.',
  'blameless post-mortem': 'Reunião de análise após um incidente focada em descobrir falhas nos processos e no sistema, sem apontar culpados individuais.',
  'matriz de responsabilidades': 'Quadro visual (como a matriz RAM ou RACI) que define com clareza quem faz, quem aprova e quem apoia cada entrega do projeto.',
  'ram': 'Matriz de Atribuição de Responsabilidades: ferramenta que esclarece os papéis de cada membro em relação às tarefas do projeto.',
  'estimativa bottom-up': 'Técnica de estimativa em que cada tarefa detalhada é calculada individualmente e somada para formar o total com máxima precisão.',
  'estimativa análoga': 'Técnica de estimativa rápida baseada na comparação com projetos ou atividades semelhantes executados no passado.',
  'estimativa paramétrica': 'Técnica de estimativa que utiliza dados históricos e relações estatísticas ou matemáticas para calcular prazos e recursos.',
  'teoria das restrições': 'Filosofia de gestão focada em identificar o gargalo (o ponto mais lento do processo) e otimizá-lo para aumentar a capacidade total.',
  'gargalo': 'Etapa ou recurso com menor capacidade no fluxo de trabalho que limita a velocidade de entrega de toda a equipe.',
  'desperdício': 'Qualquer atividade que consome tempo e recursos sem agregar valor real ao resultado final do projeto (conceito Lean / Muda).',
  'muda': 'Termo da filosofia Lean que designa desperdícios no processo produtivo que devem ser sistematicamente eliminados.',
  'retrabalho': 'Esforço gasto para refazer tarefas que apresentaram defeitos devido à falta de planejamento, testes ou comunicação.',
  'burnout': 'Estado de esgotamento físico e mental gerado por sobrecarga de trabalho e pressão contínua, reduzindo o bem-estar e a produtividade.',
  'ociosidade': 'Período em que profissionais ou equipamentos ficam parados sem produzir, geralmente aguardando aprovações ou desbloqueios.',
  'propriedade compartilhada': 'Sentimento coletivo de responsabilidade em que todos os membros cuidam do projeto como um todo, superando silos individuais.',
  'recursos físicos e virtuais': 'Todos os recursos materiais ou tecnológicos necessários ao projeto: servidores, computadores, licenças de software e laboratórios.',
  'retrospectiva': 'Reunião periódica da equipe para inspecionar o processo de trabalho recente e pactuar melhorias contínuas para as próximas etapas.',
  'tailoring': 'Adaptação consciente e intencional dos processos e ferramentas de gerenciamento para atender à realidade específica do projeto.',
  'gestão de conflitos': 'Mediação construtiva de divergências na equipe, transformando opiniões diferentes em soluções inovadoras.',
  'partes interessadas': 'Pessoas, grupos ou instituições que podem afetar ou ser afetados pelas decisões e entregas do projeto (stakeholders).',
  'capacidade de entrega': 'Volume de trabalho útil que a equipe consegue concluir em um determinado período sem comprometer a sustentabilidade.',
  'qualidade do produto': 'Grau em que as entregas atendem aos requisitos combinados, normas de acessibilidade e expectativas dos usuários.',
  'saúde da equipe': 'Nível de motivação, energia, confiança e bem-estar físico e emocional dos profissionais envolvidos no projeto.',
  'conhecimento organizacional': 'Patrimônio de saberes, documentações e competências acumuladas e compartilhadas pela equipe ao longo do projeto.',
  'silos': 'Isolamento entre profissionais ou departamentos que não se comunicam, prejudicando o fluxo de trabalho e gerando retrabalho.',
  'horas extras': 'Extensão da jornada de trabalho além do horário normal; seu uso crônico causa exaustão, erros e desmotivação.',
};

/**
 * Detecta quais termos do glossário estão presentes em um texto.
 * Retorna até 3 termos para não sobrecarregar o tooltip.
 */
export function detectTechTerms(text: string): Array<{ term: string; definition: string }> {
  const lowerText = text.toLowerCase();
  const found: Array<{ term: string; definition: string }> = [];

  for (const [term, definition] of Object.entries(TECH_GLOSSARY)) {
    if (lowerText.includes(term)) {
      found.push({ term, definition });
      if (found.length >= 3) break;
    }
  }

  return found;
}
