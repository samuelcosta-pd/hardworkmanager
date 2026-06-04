import { create } from 'zustand';
import { GAME_EVENTS } from '@/data/events';
import {
  INITIAL_METRICS,
  applyImpacts,
  isGameOver,
  tallyVotes,
} from '@/lib/gameLogic';
import type {
  AlternativeKey,
  Decision,
  GameEvent,
  GamePhase,
  Metrics,
  Player,
  PlayerRole,
  Vote,
} from '@/types';

interface PlayerDraft {
  name: string;
  role: PlayerRole;
}

interface GameState {
  phase: GamePhase;
  players: Player[];
  metrics: Metrics;
  events: GameEvent[];
  currentEventIndex: number;
  votes: Vote[];
  decisions: Decision[];
  currentVoterIndex: number;
  gameOverReason?: string;

  setupPlayers: (drafts: PlayerDraft[]) => void;
  goTo: (phase: GamePhase) => void;
  startGame: () => void;
  beginEvent: () => void;
  castVote: (alt: AlternativeKey) => void;
  finalizeRound1: () => void;
  startDebate: () => void;
  beginRound2: () => void;
  finalizeRound2: () => void;
  resolveDecision: () => void;
  nextEvent: () => void;
  reset: () => void;
  quitGame: () => void;
}

const initialState = {
  phase: 'intro' as GamePhase,
  players: [] as Player[],
  metrics: INITIAL_METRICS,
  events: GAME_EVENTS,
  currentEventIndex: 0,
  votes: [] as Vote[],
  decisions: [] as Decision[],
  currentVoterIndex: 0,
  gameOverReason: undefined as string | undefined,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  setupPlayers: (drafts) => {
    const players: Player[] = drafts.map((d, i) => ({
      id: `p${i + 1}`,
      name: d.name.trim(),
      role: d.role,
      isReady: false,
    }));
    set({ players, phase: 'role_explanation' });
  },

  goTo: (phase) => set({ phase }),

  startGame: () => set({ phase: 'briefing' }),

  beginEvent: () => set({ phase: 'event_display', votes: [], currentVoterIndex: 0 }),

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

  beginRound2: () => set({ phase: 'voting_round_2', currentVoterIndex: 0 }),

  finalizeRound2: () => {
    get().resolveDecision();
  },

  resolveDecision: () => {
    const { events, currentEventIndex, votes, players, metrics, decisions } = get();
    const event = events[currentEventIndex];
    const round = votes.some((v) => v.round === 2) ? 2 : 1;
    const roundVotes = votes.filter((v) => v.round === round);
    const tally = tallyVotes(roundVotes);

    let chosen: AlternativeKey;
    if (tally.tied) {
      // PM tie-break
      const pm = players.find((p) => p.role === 'pm')!;
      const pmVote = roundVotes.find((v) => v.playerId === pm.id);
      chosen = pmVote ? pmVote.alternative : tally.topAlternatives[0];
    } else {
      chosen = tally.winner;
    }

    const alt = event.alternatives.find((a) => a.key === chosen)!;
    const newMetrics = applyImpacts(metrics, alt.impacts);
    const round1Tally = tallyVotes(votes.filter((v) => v.round === 1));
    const wasUnanimous = round1Tally.unanimous;
    let dissentingPlayer: Player | undefined;
    let dissentingAlternative: AlternativeKey | undefined;
    if (!wasUnanimous) {
      const counts = round1Tally.counts;
      const minorityKey = (Object.entries(counts) as [AlternativeKey, number][])
        .filter(([, n]) => n > 0)
        .sort((a, b) => a[1] - b[1])[0][0];
      const dissentVote = votes.find((v) => v.round === 1 && v.alternative === minorityKey);
      if (dissentVote) {
        dissentingPlayer = players.find((p) => p.id === dissentVote.playerId);
        dissentingAlternative = minorityKey;
      }
    }

    const decision: Decision = {
      eventId: event.id,
      eventTitle: event.title,
      chosenAlternative: chosen,
      chosenText: alt.text,
      wasUnanimous,
      dissentingPlayer,
      dissentingAlternative,
      feedbackNarrative: alt.feedbackNarrative,
      metricsAfter: newMetrics,
    };

    const gameOver = isGameOver(newMetrics);
    set({
      metrics: newMetrics,
      decisions: [...decisions, decision],
      phase: 'feedback_narrative',
      gameOverReason: gameOver.over ? gameOver.reason : undefined,
    });
  },

  nextEvent: () => {
    const { currentEventIndex, events, gameOverReason } = get();
    if (gameOverReason) {
      set({ phase: 'debriefing' });
      return;
    }
    const next = currentEventIndex + 1;
    if (next >= events.length) {
      set({ phase: 'debriefing' });
    } else {
      set({
        currentEventIndex: next,
        votes: [],
        currentVoterIndex: 0,
        phase: 'dashboard',
      });
    }
  },

  reset: () => set({ ...initialState }),
  quitGame: () => set({ ...initialState, phase: 'intro' }),
}));
