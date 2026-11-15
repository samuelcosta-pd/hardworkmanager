import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  INITIAL_METRICS,
  isGameOver,
  decideWinner,
  resolveTurn,
  generateMatchDeck,
  MATCH_DILEMMA_COUNT,
  type PendingImpact,
  type TriggeredImpact,
} from '@/lib/gameLogic';
import type {
  Decision,
  GameEvent,
  GamePhase,
  Metrics,
  Player,
  PlayerRole,
  Vote,
  VoteChoice,
  TimerPreset,
  TimerSettings,
} from '@/types';

export const TIMER_PRESETS: Record<TimerPreset, { readingSeconds: number; votingSeconds: number; enabled: boolean }> = {
  short: { readingSeconds: 120, votingSeconds: 45, enabled: true },
  standard: { readingSeconds: 120, votingSeconds: 45, enabled: true },
  long: { readingSeconds: 120, votingSeconds: 45, enabled: true },
  none: { readingSeconds: 120, votingSeconds: 45, enabled: true },
};

interface PlayerDraft {
  name: string;
  role: PlayerRole;
  avatarId?: string;
  avatarName?: string;
  avatarImage?: string;
}

export type PendingDelayedImpact = PendingImpact;
export type AppliedImpactHistory = TriggeredImpact;

interface GameState {
  phase: GamePhase;
  players: Player[];
  metrics: Metrics;
  matchDeck: GameEvent[];
  events: GameEvent[];
  currentEventIndex: number;
  votes: Vote[];
  decisions: Decision[];
  currentVoterIndex: number;
  gameOverReason?: string;
  timerSettings: TimerSettings;
  
  // Propriedades de fluxo e impactos diferidos
  currentSprint: number;
  playedEventsIds: string[];
  pendingDelayedImpacts: PendingDelayedImpact[];
  appliedDelayedImpactsHistory: AppliedImpactHistory[];
  delayedImpactsTriggeredThisRound: AppliedImpactHistory[];

  setupPlayers: (drafts: PlayerDraft[], preset?: TimerPreset) => void;
  setTimerSettings: (settings: TimerSettings) => void;
  setTimerPreset: (preset: TimerPreset) => void;
  goTo: (phase: GamePhase) => void;
  startGame: () => void;
  beginEvent: () => void;
  castVote: (alt: VoteChoice) => void;
  finalizeRound1: () => void;
  startDebate: () => void;
  beginRound2: () => void;
  finalizeRound2: () => void;
  resolveDecision: () => void;
  nextEvent: () => void;
  startNextSprint: () => void;
  reset: () => void;
  quitGame: () => void;
}

const initialState = {
  phase: 'intro' as GamePhase,
  players: [] as Player[],
  metrics: INITIAL_METRICS,
  matchDeck: [] as GameEvent[],
  events: [] as GameEvent[],
  currentEventIndex: 0,
  votes: [] as Vote[],
  decisions: [] as Decision[],
  currentVoterIndex: 0,
  gameOverReason: undefined as string | undefined,
  timerSettings: {
    preset: 'standard' as TimerPreset,
    readingSeconds: 120,
    votingSeconds: 45,
    enabled: true,
  },
  currentSprint: 1,
  playedEventsIds: [] as string[],
  pendingDelayedImpacts: [] as PendingDelayedImpact[],
  appliedDelayedImpactsHistory: [] as AppliedImpactHistory[],
  delayedImpactsTriggeredThisRound: [] as AppliedImpactHistory[],
};


export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setupPlayers: (drafts, preset) => {
        const players: Player[] = drafts.map((d, i) => ({
          id: `p${i + 1}`,
          name: d.name.trim(),
          role: d.role,
          avatarId: d.avatarId || '',
          avatarName: d.avatarName || '',
          avatarImage: d.avatarImage || '',
          isReady: false,
        }));

        const matchDeck = generateMatchDeck();
        const firstEvent = matchDeck[0];

        const timerSettings = preset
          ? { preset, ...TIMER_PRESETS[preset] }
          : get().timerSettings;

        set({
          players,
          timerSettings,
          phase: 'role_explanation',
          matchDeck,
          events: [firstEvent],
          playedEventsIds: [firstEvent.id],
          currentSprint: 1,
          currentEventIndex: 0,
        });
      },

      setTimerSettings: (timerSettings) => set({ timerSettings }),

      setTimerPreset: (preset) =>
        set({
          timerSettings: {
            preset,
            ...TIMER_PRESETS[preset],
          },
        }),

      goTo: (phase) => set({ phase }),

      startGame: () => {
        const { matchDeck } = get();
        // Se ainda não gerou o deck, inicializa
        if (!matchDeck || matchDeck.length === 0) {
          const deck = generateMatchDeck();
          const firstEvent = deck[0];
          set({
            phase: 'briefing',
            matchDeck: deck,
            events: [firstEvent],
            playedEventsIds: [firstEvent.id],
            currentSprint: 1,
            currentEventIndex: 0,
          });
        } else {
          set({ phase: 'briefing' });
        }
      },

      beginEvent: () => set({ 
        phase: 'event_display', 
        votes: [], 
        currentVoterIndex: 0,
        delayedImpactsTriggeredThisRound: [],
      }),

      castVote: (alt) => {
        const { votes, currentVoterIndex, players, phase } = get();
        const round = phase === 'voting_round_2' ? 2 : 1;
        const player = players[currentVoterIndex];
        if (!player) return;
        const newVotes = [...votes.filter((v) => !(v.playerId === player.id && v.round === round)), {
          playerId: player.id,
          alternative: alt,
          round: round as 1 | 2,
        }];
        const nextIdx = currentVoterIndex + 1;
        set({ votes: newVotes, currentVoterIndex: nextIdx });
      },

      finalizeRound1: () => set({ phase: 'vote_reveal' }),

      startDebate: () => set({ phase: 'debate_structured' }),

      beginRound2: () => set({ 
        phase: 'voting_round_2', 
        currentVoterIndex: 0 
      }),

      finalizeRound2: () => {
        get().resolveDecision();
      },

      resolveDecision: () => {
        const { 
          events, 
          currentEventIndex, 
          votes, 
          metrics, 
          decisions, 
          players, 
          pendingDelayedImpacts, 
          appliedDelayedImpactsHistory 
        } = get();
        
        const event = events[currentEventIndex];
        const round2Votes = votes.filter((v) => v.round === 2);
        const pm = players.find((p) => p.role === 'pm');
        const { chosenKey, tally } = decideWinner(votes, pm?.id, event.alternatives[0].key);
        const chosenAlt = event.alternatives.find((a) => a.key === chosenKey) || event.alternatives[0];

        const turn = resolveTurn(metrics, pendingDelayedImpacts, event, chosenAlt, `_${Date.now()}`);
        const nextMetrics = turn.metrics;

        const decisiveVotes = round2Votes.length > 0 ? round2Votes : votes.filter((v) => v.round === 1);
        const dissentingVote = decisiveVotes.find((v) => v.alternative !== chosenKey);
        const dissentingPlayer = dissentingVote ? players.find((p) => p.id === dissentingVote.playerId) : undefined;

        const decision: Decision = {
          eventId: event.id,
          eventTitle: event.title,
          chosenAlternative: chosenKey,
          chosenText: chosenAlt.text,
          wasUnanimous: tally.unanimous,
          dissentingPlayer,
          dissentingAlternative: dissentingVote?.alternative,
          feedbackNarrative: chosenAlt.feedbackNarrative,
          metricsAfter: nextMetrics,
          immediateDelta: turn.immediateDelta,
          penaltyApplied: turn.penaltyApplied,
        };

        const over = isGameOver(nextMetrics);

        set({
          metrics: nextMetrics,
          decisions: [...decisions, decision],
          gameOverReason: over.over ? over.reason : undefined,
          pendingDelayedImpacts: turn.pending,
          appliedDelayedImpactsHistory: [...appliedDelayedImpactsHistory, ...turn.triggered],
          delayedImpactsTriggeredThisRound: turn.triggered,
          phase: 'feedback_narrative',
        });
      },

      nextEvent: () => {
        const { currentEventIndex, gameOverReason, matchDeck } = get();
        if (gameOverReason) {
          set({ phase: 'debriefing' });
          return;
        }

        const next = currentEventIndex + 1;
        
        // Revisão de ciclo a cada 3 dilemas e ao fim do baralho
        if (next >= matchDeck.length) {
          set({ phase: 'sprint_review' });
        } else if (next % 3 === 0) {
          // Revisão de Sprint a cada 3 dilemas
          set({ phase: 'sprint_review' });
        } else {
          get().startNextSprint();
        }
      },

      startNextSprint: () => {
        const { currentEventIndex, matchDeck, events, playedEventsIds } = get();
        const next = currentEventIndex + 1;
        const newSprint = Math.min(4, Math.floor(next / 3) + 1);
        
        if (next >= matchDeck.length) {
          set({ phase: 'debriefing' });
          return;
        }

        const newEvent = matchDeck[next];

        set({
          currentEventIndex: next,
          currentSprint: newSprint,
          events: [...events, newEvent],
          playedEventsIds: [...playedEventsIds, newEvent.id],
          votes: [],
          currentVoterIndex: 0,
          phase: 'dashboard',
        });
      },

      reset: () => {
        set({ ...initialState });
        localStorage.removeItem('hardwork-manager-storage');
      },
      
      quitGame: () => {
        set({ ...initialState, phase: 'intro' });
        localStorage.removeItem('hardwork-manager-storage');
      },
    }),
    {
      name: 'hardwork-manager-storage',
      // A reidratação é feita no cliente (useHydrateGame) para evitar divergência com o HTML do servidor.
      skipHydration: true,
      // Descarta partida salva com tamanho de baralho diferente de MATCH_DILEMMA_COUNT
      merge: (persisted, current) => {
        const saved = persisted as Partial<GameState> | undefined;
        if (
          saved?.matchDeck &&
          saved.matchDeck.length > 0 &&
          (saved.matchDeck.length !== MATCH_DILEMMA_COUNT ||
            // partida salva sem GP (versão antiga sem validação de papéis) travaria no debate
            !saved.players?.some((p) => p.role === 'pm'))
        ) {
          return current;
        }
        return { ...current, ...(saved ?? {}) };
      },
    }
  )
);
