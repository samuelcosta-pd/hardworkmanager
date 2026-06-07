import type { Avatar } from '@/types';

export const MENTOR: Avatar = {
  id: 'helena',
  name: 'Helena',
  imagePath: '/Personagens/Helena.png',
  description: 'Mentora responsável por orientar a equipe durante a modernização do sistema.',
  isMentor: true,
};

export const AVAILABLE_AVATARES: Avatar[] = [
  {
    id: 'geraldo',
    name: 'Geraldo',
    imagePath: '/Personagens/Geraldo.png',
    description: 'Especialista focado em segurança da informação e auditoria estrutural.',
    preferredRoles: ['pm', 'techLead'],
  },
  {
    id: 'kendrick',
    name: 'Kendrick',
    imagePath: '/Personagens/Kendrick.png',
    description: 'Focado em processos operacionais e integração contínua (DevOps).',
    preferredRoles: ['techLead'],
  },
  {
    id: 'kenedy',
    name: 'Kenedy',
    imagePath: '/Personagens/Kenedy.png',
    description: 'Analista de sistemas com forte perfil de backend e gerenciamento de banco de dados.',
    preferredRoles: ['techLead'],
  },
  {
    id: 'leonara',
    name: 'Leonara',
    imagePath: '/Personagens/Leonara.png',
    description: 'Designer focada na jornada do usuário e na facilidade de uso do produto.',
    preferredRoles: ['uxLead'],
  },
  {
    id: 'livia',
    name: 'Lívia',
    imagePath: '/Personagens/Lívia.png',
    description: 'Gestora com visão estratégica, focada no alinhamento de stakeholders e prazos.',
    preferredRoles: ['pm'],
  },
  {
    id: 'paulyne',
    name: 'Paulyne',
    imagePath: '/Personagens/Paulyne.png',
    description: 'Especialista em métricas de qualidade e testes automatizados.',
    preferredRoles: ['uxLead', 'techLead'],
  },
  {
    id: 'rainara',
    name: 'Rainara',
    imagePath: '/Personagens/Rainara.png',
    description: 'Forte comunicadora, sempre negociando as expectativas entre a equipe técnica e clientes.',
    preferredRoles: ['pm', 'uxLead'],
  },
  {
    id: 'roberto',
    name: 'Roberto',
    imagePath: '/Personagens/Roberto.png',
    description: 'Especialista em arquitetura de software e sistemas legados complexos.',
    preferredRoles: ['techLead'],
  },
];
