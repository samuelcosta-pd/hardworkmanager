import { tailoringEvents } from './events/tailoringEvents';
import { leadershipEvents } from './events/leadershipEvents';
import { systemsThinkingEvents } from './events/systemsThinkingEvents';
import { changeManagementEvents } from './events/changeManagementEvents';
import { qualityEvents } from './events/qualityEvents';
import type { GameEvent } from '@/types';

/**
 * Catálogo Completo dos 50 Dilemas do Hard Work Manager
 * 5 Conjuntos de Eventos do Domínio de Recursos (PMBOK 8):
 * 1. tailoringEvents - 10 dilemas (estimativas, fluxo e eliminação de desperdício)
 * 2. leadershipEvents - 10 dilemas (liderança de equipe, clima e bem-estar)
 * 3. systemsThinkingEvents - 10 dilemas (infraestrutura, nuvem, licenças e recursos virtuais)
 * 4. changeManagementEvents - 10 dilemas (aquisição, gestão matricial e negociação de recursos)
 * 5. qualityEvents - 10 dilemas (teoria das restrições, retrabalho e eficiência de ferramentas)
 */
export const ALL_DYNAMIC_EVENTS: GameEvent[] = [
  ...tailoringEvents,
  ...leadershipEvents,
  ...systemsThinkingEvents,
  ...changeManagementEvents,
  ...qualityEvents,
];
