import { tailoringEvents } from './events/tailoringEvents';
import { leadershipEvents } from './events/leadershipEvents';
import { systemsThinkingEvents } from './events/systemsThinkingEvents';
import { changeManagementEvents } from './events/changeManagementEvents';
import { qualityEvents } from './events/qualityEvents';
import type { GameEvent } from '@/types';

/**
 * Catálogo Completo dos 50 Dilemas do Hard Work Manager
 * 10 Dilemas por Princípio do PMBOK 7 (Domínio Trabalho do Projeto):
 * 1. Faça a adaptação de acordo com o contexto (Tailoring) - 10 dilemas
 * 2. Demonstre comportamentos de liderança - 10 dilemas
 * 3. Reconheça, avalie e reaja às interações do sistema (Pensamento Sistêmico) - 10 dilemas
 * 4. Aceite a mudança para alcançar o futuro estado previsto - 10 dilemas
 * 5. Inclua qualidade nos processos e nas entregas - 10 dilemas
 */
export const ALL_DYNAMIC_EVENTS: GameEvent[] = [
  ...tailoringEvents,
  ...leadershipEvents,
  ...systemsThinkingEvents,
  ...changeManagementEvents,
  ...qualityEvents,
];
