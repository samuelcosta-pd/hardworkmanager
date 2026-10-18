import { PlayerRole } from '@/types';

export interface RoleDetail {
  role: PlayerRole;
  title: string;
  shortTitle: string;
  badge: string;
  mindset: string;
  summary: string;
  pmbokProcesses: string[];
  responsibilities: string[];
  notResponsibleFor: string[];
  keyQuestion: string;
  exampleScenario: {
    situation: string;
    action: string;
  };
}

export const ROLES_DETAILS: Record<PlayerRole, RoleDetail> = {
  pm: {
    role: 'pm',
    title: 'Gerente de Projetos',
    shortTitle: 'GP',
    badge: 'Liderança e Recursos Humanos',
    mindset: 'Visão Holística e Liderança Servidora',
    summary:
      'Responsável pela formação e operação da equipe como um todo. Adquire, protege, motiva e empodera o time, negociando alocações e gerindo o ambiente de trabalho e os stakeholders.',
    pmbokProcesses: [
      'Planejar o Gerenciamento dos Recursos (RAM, Team Charter)',
      'Adquirir Recursos (negociação com Pró-Reitorias e Gerentes Funcionais)',
      'Liderar a Equipe (clima seguro, prevenção de burnout, resolução de conflitos)',
    ],
    responsibilities: [
      'Negociar recursos e autorizações com patrocinadores, Reitoria e gerentes funcionais.',
      'Garantir ritmo de trabalho sustentável e ambiente psicologicamente seguro (prevenção de burnout).',
      'Desatar impasses da equipe aplicando o Voto de Minerva quando não há consenso.',
      'Facilitar a colaboração interdisciplinar e a eliminação de silos operacionais.',
    ],
    notResponsibleFor: [
      'Definir arquitetura técnica, frameworks ou modelagem do banco de dados.',
      'Decidir detalhes visuais ou design de telas sem consultar a equipe.',
      'Trabalhar como desenvolvedor substituto executando código do sistema.',
    ],
    keyQuestion: 'Temos as pessoas e condições certas no momento oportuno para entregar valor com sustentabilidade?',
    exampleScenario: {
      situation: 'A Reitoria exige o lançamento antecipado impondo trabalho noturno aos desenvolvedores.',
      action: 'O GP intervém institucionalmente, negocia fatiamento de escopo e blinda o time contra horas extras predatórias.',
    },
  },
  techLead: {
    role: 'techLead',
    title: 'Líder Técnico',
    shortTitle: 'Tech Lead',
    badge: 'Arquitetura e Recursos Físicos/Virtuais',
    mindset: 'Guardião da Viabilidade e Eficiência Técnica',
    summary:
      'Responsável pela estabilidade da infraestrutura, ambientes de homologação/teste, dimensionamento de servidores, licenças de software e redução de retrabalho técnico.',
    pmbokProcesses: [
      'Estimar Recursos (estimativas bottom-up e análogas de esforço técnico)',
      'Monitorar e Controlar Recursos (uso de servidores, cloud, licenças e ambientes)',
      'Liderar a Equipe (mentoria técnica e nivelamento de competências da engenharia)',
    ],
    responsibilities: [
      'Acompanhar a capacidade e consumo de recursos físicos e virtuais (banco de dados, nuvem, CI/CD).',
      'Estimar com precisão (bottom-up) o esforço real exigido por integrações e legado.',
      'Identificar gargalos (Teoria das Restrições) e evitar retrabalho causado por ambientes instáveis.',
      'Orientar boas práticas técnicas e apoiar desenvolvedores juniores e bolsistas.',
    ],
    notResponsibleFor: [
      'Negociar liberação de bolsas ou orçamento formal diretamente com a alta administração.',
      'Centralizar tarefas gerenciais de pessoas (turnover, conflitos de RH institucional).',
      'Impor mudanças de produto sem validar a experiência do usuário e o fluxo acadêmico.',
    ],
    keyQuestion: 'Nossos recursos tecnológicos e ambientes atendem às demandas sem desperdício, ociosidade ou retrabalho?',
    exampleScenario: {
      situation: 'O ambiente de testes caiu às vésperas da homologação da matrícula online.',
      action: 'O Tech Lead reconfigura instâncias de contingência e aciona rollback controlado enquanto monitora o consumo de CPU.',
    },
  },
  uxLead: {
    role: 'uxLead',
    title: 'Líder de Design e Telas',
    shortTitle: 'UX Lead',
    badge: 'Experiência do Usuário e Inclusão',
    mindset: 'Defensor dos Usuários e Acessibilidade',
    summary:
      'Garante que o novo sistema seja intuitivo, inclusivo e acessível para milhares de alunos e professores, reduzindo chamados de suporte decorrentes de dúvidas de interface.',
    pmbokProcesses: [
      'Estimar Recursos (tempo de testes com usuários e prototipagem)',
      'Liderar a Equipe (disseminação de empatia e conformidade WCAG/acessibilidade)',
      'Monitorar Recursos (tempo de inatividade dos usuários e fricção de uso)',
    ],
    responsibilities: [
      'Conduzir testes de usabilidade com alunos e servidores públicos antes do lançamento.',
      'Assegurar acessibilidade (WCAG 2.1) em conformidade com as diretrizes do serviço público.',
      'Evitar que fluxos confusos sobrecarreguem o suporte técnico com dúvidas operacionais.',
      'Prototipar fluxos alternativos para diminuir atrito na matrícula e emissão de históricos.',
    ],
    notResponsibleFor: [
      'Administrar servidores, banco de dados ou infraestrutura de nuvem.',
      'Negociar contratos com fornecedores de tecnologia ou servidores públicos.',
      'Substituir a tomada de decisão gerencial sobre prazos finais de calendário acadêmico.',
    ],
    keyQuestion: 'O sistema é utilizável, inclusivo e resolve a necessidade real de alunos e docentes sem gerar ruído operacional?',
    exampleScenario: {
      situation: 'Alunos com deficiência visual relatam que não conseguem submeter documentos no novo portal.',
      action: 'O UX Lead pausa a entrega do formulário não conforme e redesenha a interação seguindo padrões universais de acessibilidade.',
    },
  },
};
