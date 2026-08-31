import { infrastructureEvents } from './events/infrastructureEvents';
import { peopleEvents } from './events/peopleEvents';
import { knowledgeEvents } from './events/knowledgeEvents';
import { executionEvents } from './events/executionEvents';
import { externalPressureEvents } from './events/externalPressureEvents';
import { pmbok7Events } from './events/pmbok7Events';
import { GameEvent } from '@/types';

export const ALL_DYNAMIC_EVENTS: GameEvent[] = [
  ...infrastructureEvents,
  ...peopleEvents,
  ...knowledgeEvents,
  ...executionEvents,
  ...externalPressureEvents,
  ...pmbok7Events,
];
