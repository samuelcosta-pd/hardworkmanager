export type GamePhase =
  | 'intro'
  | 'setup'
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
  | 'sprint_review'
  | 'gameover'
  | 'debriefing'
  | 'completed';

export enum EventCategory {
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  PEOPLE = 'PEOPLE',
  KNOWLEDGE = 'KNOWLEDGE',
  EXECUTION = 'EXECUTION',
  EXTERNAL_PRESSURE = 'EXTERNAL_PRESSURE',
}

export enum EventDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type PlayerRole = 'pm' | 'techLead' | 'uxLead';
export type AlternativeKey = 'a' | 'b' | 'c';
export type MetricLevel = 'stable' | 'warning' | 'critical';
export type CommunicationType = 'email' | 'slack' | 'ticket';

export interface Avatar {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  isMentor?: boolean;
  preferredRoles?: PlayerRole[];
}

export interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  isReady: boolean;
  avatarId: string;
  avatarName: string;
  avatarImage: string;
}

export interface Metrics {
  capacidadeEntrega: number;
  qualidadeProduto: number;
  saudeEquipe: number;
  conhecimentoOrganizacional: number;
}

export interface DelayedImpact {
  triggerAfterEvents: number;
  impacts: Partial<Metrics>;
  narrative: string;
  condition?: {
    metric: keyof Metrics;
    operator: '<' | '>' | '===' | '<=' | '>=';
    value: number;
  };
}

export interface Alternative {
  key: AlternativeKey;
  text: string;
  impacts: Partial<Metrics>;
  delayedImpacts?: DelayedImpact[];
  feedbackNarrative: string;
  pmbokConcept: string;
  learnings: string[];
  goodBad: string;
  risksEvaded: string[];
  otherConsequences: string[];
}

export interface GameEvent {
  id: string;
  title: string;
  category: EventCategory;
  difficulty: EventDifficulty;
  probabilityWeight: number;
  tags: string[];
  learningObjective: string;
  communicationType: CommunicationType;
  senderName: string;
  senderInitials: string;
  avatarImage?: string;
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
  avatarImage?: string;
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
