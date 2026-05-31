export type GamePhase =
  | 'onboarding'
  | 'role_explanation'
  | 'briefing'
  | 'dashboard'
  | 'event_display'
  | 'voting_round_1'
  | 'vote_reveal'
  | 'debate_structured'
  | 'voting_round_2'
  | 'decision_resolved'
  | 'feedback_narrative'
  | 'gameover'
  | 'completed';

export type PlayerRole = 'pm' | 'techLead' | 'uxLead';
export type AlternativeKey = 'a' | 'b' | 'c';
export type MetricLevel = 'stable' | 'warning' | 'critical';
export type CommunicationType = 'email' | 'slack' | 'ticket';

export interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  isReady: boolean;
}

export interface Metrics {
  budget: number;
  quality: number;
  morale: number;
}

export interface Alternative {
  key: AlternativeKey;
  text: string;
  impacts: Partial<Metrics>;
  feedbackNarrative: string;
}

export interface GameEvent {
  id: string;
  title: string;
  communicationType: CommunicationType;
  senderName: string;
  senderInitials: string;
  senderRole: string;
  domainTag: string;
  responsibleRole: PlayerRole;
  description: string;
  alternatives: Alternative[];
}

export interface Vote {
  playerId: string;
  alternative: AlternativeKey;
  round: 1 | 2;
}

export interface DebateSpeaker {
  playerId: string;
  playerName: string;
  playerRole: PlayerRole;
  durationSeconds: number;
  order: 1 | 2 | 3 | 4;
}

export interface Decision {
  eventId: string;
  eventTitle: string;
  chosenAlternative: AlternativeKey;
  chosenText: string;
  wasUnanimous: boolean;
  dissentingPlayer?: Player;
  dissentingAlternative?: AlternativeKey;
  feedbackNarrative: string;
  metricsAfter: Metrics;
}

export const ROLE_LABELS: Record<PlayerRole, string> = {
  pm: 'Gerente de Projetos',
  techLead: 'Líder Técnico',
  uxLead: 'Líder de Design/UX',
};
