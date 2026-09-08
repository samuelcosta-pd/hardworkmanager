/**
 * Glossário de termos técnicos utilizados nas alternativas dos dilemas.
 * Cada entrada contém o termo (em minúsculas para matching case-insensitive)
 * e sua definição pedagógica curta.
 */
export const TECH_GLOSSARY: Record<string, string> = {
  // Ágil / Scrum
  'sprint': 'Ciclo curto de desenvolvimento (geralmente 1–4 semanas) onde o time entrega incrementos funcionais do produto.',
  'scrum': 'Framework ágil baseado em sprints, papéis definidos (PO, SM, Dev Team) e cerimônias como Daily e Retrospectiva.',
  'kanban': 'Método visual de gestão de fluxo de trabalho usando colunas (A Fazer, Em Progresso, Concluído) para limitar o trabalho em andamento.',
  'backlog': 'Lista priorizada de funcionalidades, melhorias e correções que o time deve desenvolver ao longo do projeto.',
  'daily': 'Reunião diária curta (até 15 min) onde o time sincroniza progresso, planos e impedimentos.',
  'retrospectiva': 'Cerimônia ao final de cada sprint para inspecionar o processo e criar melhorias concretas.',
  'velocity': 'Quantidade média de trabalho que um time consegue concluir por sprint, usada para planejar futuras entregas.',
  'pair programming': 'Prática onde dois desenvolvedores trabalham juntos no mesmo código: um escreve, o outro revisa em tempo real.',

  // Débito técnico e qualidade
  'débito técnico': 'Custo futuro de retrabalho gerado por atalhos técnicos feitos hoje. Quanto maior o débito, mais lento o time fica.',
  'débito': 'Custo futuro de retrabalho gerado por atalhos técnicos feitos hoje. Quanto maior o débito, mais lento o time fica.',
  'refactoring': 'Processo de reestruturar código existente sem alterar seu comportamento externo, melhorando legibilidade e manutenção.',
  'refatoração': 'Processo de reestruturar código existente sem alterar seu comportamento externo, melhorando legibilidade e manutenção.',
  'code review': 'Revisão sistemática do código por outro desenvolvedor antes de integrá-lo, reduzindo bugs e melhorando a qualidade.',
  'ci/cd': 'Integração Contínua (CI) e Entrega Contínua (CD): automação de testes e deploys para acelerar ciclos de entrega com qualidade.',
  'pipeline': 'Sequência automatizada de etapas (build, teste, deploy) que garante que o software seja entregue de forma confiável.',
  'tdd': 'Test-Driven Development: escrever testes automatizados antes do código de produção, guiando o design do sistema.',
  'bug': 'Defeito no código que causa comportamento inesperado ou incorreto no sistema.',
  'feature flag': 'Mecanismo para ativar/desativar funcionalidades em produção sem fazer novo deploy, reduzindo riscos de lançamento.',

  // PMBOK / Gestão
  'pmbok': 'Guia de Boas Práticas de Gerenciamento de Projetos do PMI. A 7ª edição foca em princípios e domínios de desempenho.',
  'stakeholder': 'Qualquer pessoa ou grupo com interesse ou influência sobre o projeto (clientes, patrocinadores, usuários, equipe).',
  'trade-off': 'Situação em que melhorar um aspecto necessariamente piora outro (ex: qualidade vs. velocidade de entrega).',
  'trade-offs': 'Situações em que melhorar um aspecto necessariamente piora outro (ex: qualidade vs. velocidade de entrega).',
  'risco': 'Evento incerto que, se ocorrer, pode impactar positiva ou negativamente os objetivos do projeto.',
  'escopo': 'Conjunto de todo o trabalho necessário para entregar o produto ou serviço com as características acordadas.',
  'kpi': 'Key Performance Indicator: métrica usada para avaliar o desempenho em relação a um objetivo estratégico.',
  'roadmap': 'Plano visual de alto nível que mostra a direção estratégica e as principais entregas do produto ao longo do tempo.',
  'mvp': 'Minimum Viable Product: versão com o mínimo de funcionalidades para validar hipóteses com usuários reais.',

  // Infraestrutura e ops
  'jira': 'Ferramenta de rastreamento de projetos e bugs amplamente usada em times ágeis para gerenciar backlogs e sprints.',
  'downtime': 'Período em que o sistema está indisponível, causando impacto direto nos usuários e nos negócios.',
  'deploy': 'Processo de disponibilizar uma nova versão do software para o ambiente de produção (ou teste).',
  'hotfix': 'Correção urgente aplicada diretamente em produção para resolver um bug crítico sem esperar o próximo ciclo de release.',
  'rollback': 'Reversão para uma versão anterior do sistema após detectar problemas em um novo deploy.',
  'monitoramento': 'Coleta contínua de métricas do sistema (erros, latência, uso de recursos) para detectar e corrigir problemas rapidamente.',

  // Lean
  'muda': 'Termo japonês para desperdício. Em Lean, identifica atividades que consomem recursos sem agregar valor ao cliente.',
  'lean': 'Filosofia de gestão que busca maximizar valor ao cliente eliminando desperdícios nos processos.',
  'timesheet': 'Registro de horas trabalhadas por cada membro da equipe, usado para controle de custos e produtividade.',

  // Pessoas e cultura
  'burnout': 'Estado de esgotamento físico e mental causado por sobrecarga de trabalho prolongada, reduzindo produtividade e bem-estar.',
  'onboarding': 'Processo de integração de um novo membro à equipe, incluindo ambientação, treinamento e acesso aos sistemas.',
  'feedback': 'Retorno sobre desempenho ou resultados, essencial para aprendizado contínuo e melhoria de processos.',
  'mentoria': 'Relação de desenvolvimento profissional onde um profissional mais experiente orienta outro menos experiente.',
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
