import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ALL_DYNAMIC_EVENTS } from '@/data/dynamicEvents';
import { AVAILABLE_AVATARES } from '@/data/avatars';
import {
  INITIAL_METRICS,
  applyImpacts,
  isGameOver,
  tallyVotes,
  drawNextEvent,
  evaluateCondition,
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
  DelayedImpact,
  GameDifficulty,
} from '@/types';

interface PlayerDraft {
  name: string;
  role: PlayerRole;
  avatarId?: string;
  avatarName?: string;
  avatarImage?: string;
}

export interface PendingDelayedImpact {
  id: string;
  remainingEvents: number;
  impact: DelayedImpact;
  sourceEventTitle: string;
}

export interface AppliedImpactHistory {
  narrative: string;
  metricsDelta: Partial<Metrics>;
  sourceEventTitle: string;
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
  
  // New properties for dynamic events
  currentSprint: number;
  gameDifficulty: GameDifficulty;
  playedEventsIds: string[];
  pendingDelayedImpacts: PendingDelayedImpact[];
  appliedDelayedImpactsHistory: AppliedImpactHistory[];
  delayedImpactsTriggeredThisRound: AppliedImpactHistory[]; // To show in UI

  setGameDifficulty: (diff: GameDifficulty) => void;
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
  startNextSprint: () => void;
  reset: () => void;
  quitGame: () => void;
}

const initialState = {
  phase: 'intro' as GamePhase,
  players: [] as Player[],
  metrics: INITIAL_METRICS,
  events: [] as GameEvent[],
  currentEventIndex: 0,
  votes: [] as Vote[],
  decisions: [] as Decision[],
  currentVoterIndex: 0,
  gameOverReason: undefined as string | undefined,
  currentSprint: 1,
  gameDifficulty: 'medium' as GameDifficulty,
  playedEventsIds: [] as string[],
  pendingDelayedImpacts: [] as PendingDelayedImpact[],
  appliedDelayedImpactsHistory: [] as AppliedImpactHistory[],
  delayedImpactsTriggeredThisRound: [] as AppliedImpactHistory[],
};

function injectNPC(event: GameEvent, players: Player[]): GameEvent {
  const npcRoles = [
    'Marina Design', 
    'Desenvolvedor Pleno', 
    'Novo Desenvolvedor', 
    'Suporte Nível 2', 
    'Líder Técnico Adjunto', 
    'Líder Técnico', 
    'Vice-Reitor',
    'RH',
    'Atendimento',
    'Consultoria Externa',
    'Equipe de Análise',
    'QA Team'
  ];

  if (!npcRoles.includes(event.senderName)) {
    return event;
  }

  const usedAvatarIds = players.map(p => p.avatarId);
  const unusedAvatars = AVAILABLE_AVATARES.filter(a => !usedAvatarIds.includes(a.id));
  
  if (unusedAvatars.length === 0) return event;
  
  const randomIndex = Math.floor(Math.random() * unusedAvatars.length);
  const npc = unusedAvatars[randomIndex];

  return {
    ...event,
    senderName: npc.name,
    senderInitials: npc.name.substring(0, 2).toUpperCase(),
    avatarImage: npc.imagePath,
  };
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setGameDifficulty: (diff) => set({ gameDifficulty: diff }),

      setupPlayers: (drafts) => {
        const players: Player[] = drafts.map((d, i) => ({
          id: `p${i + 1}`,
          name: d.name.trim(),
          role: d.role,
          avatarId: d.avatarId || '',
          avatarName: d.avatarName || '',
          avatarImage: d.avatarImage || '',
          isReady: false,
        }));
        set({ players, phase: 'role_explanation' });
      },

      goTo: (phase) => set({ phase }),

      startGame: () => {
        // Draw the first event dynamically
        let firstEvent = drawNextEvent(ALL_DYNAMIC_EVENTS, [], 1, get().gameDifficulty);
        if (!firstEvent) {
          console.error("No events available!");
          return;
        }
        firstEvent = injectNPC(firstEvent, get().players);
        
        set({ 
          phase: 'briefing',
          events: [firstEvent],
          playedEventsIds: [firstEvent.id],
          currentSprint: 1,
          currentEventIndex: 0,
        });
      },

      beginEvent: () => set({ 
        phase: 'event_display', 
        votes: [], 
        currentVoterIndex: 0,
        delayedImpactsTriggeredThisRound: [], // Reset this round's notifications
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

      beginRound2: () => set({ phase: 'voting_round_2', currentVoterIndex: 0 }),

      finalizeRound2: () => {
        get().resolveDecision();
      },

      resolveDecision: () => {
        const { events, currentEventIndex, votes, players, metrics, decisions, pendingDelayedImpacts, appliedDelayedImpactsHistory } = get();
        const event = events[currentEventIndex];
        const round = votes.some((v) => v.round === 2) ? 2 : 1;
        const roundVotes = votes.filter((v) => v.round === round);
        const tally = tallyVotes(roundVotes);

        let chosen: AlternativeKey;
        if (tally.tied) {
          const pm = players.find((p) => p.role === 'pm')!;
          const pmVote = roundVotes.find((v) => v.playerId === pm.id);
          chosen = pmVote ? pmVote.alternative : tally.topAlternatives[0];
        } else {
          chosen = tally.winner;
        }

        const alt = event.alternatives.find((a) => a.key === chosen)!;
        let newMetrics = applyImpacts(metrics, alt.impacts);
        
        // Register new delayed impacts
        let newPendingImpacts = [...pendingDelayedImpacts];
        if (alt.delayedImpacts) {
          alt.delayedImpacts.forEach(di => {
            newPendingImpacts.push({
              id: Math.random().toString(36).substr(2, 9),
              remainingEvents: di.triggerAfterEvents,
              impact: di,
              sourceEventTitle: event.title,
            });
          });
        }

        // Process existing delayed impacts (decrement and trigger)
        const newlyTriggered: AppliedImpactHistory[] = [];
        newPendingImpacts = newPendingImpacts.map(p => ({
          ...p,
          remainingEvents: p.remainingEvents - 1
        }));

        const toTrigger = newPendingImpacts.filter(p => p.remainingEvents <= 0);
        newPendingImpacts = newPendingImpacts.filter(p => p.remainingEvents > 0);

        toTrigger.forEach(p => {
          if (evaluateCondition(newMetrics, p.impact.condition)) {
            newMetrics = applyImpacts(newMetrics, p.impact.impacts);
            newlyTriggered.push({
              narrative: p.impact.narrative,
              metricsDelta: p.impact.impacts,
              sourceEventTitle: p.sourceEventTitle,
            });
          }
        });

        const newAppliedHistory = [...appliedDelayedImpactsHistory, ...newlyTriggered];

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
          pendingDelayedImpacts: newPendingImpacts,
          appliedDelayedImpactsHistory: newAppliedHistory,
          delayedImpactsTriggeredThisRound: newlyTriggered,
          phase: 'feedback_narrative',
          gameOverReason: gameOver.over ? gameOver.reason : undefined,
        });
      },

      nextEvent: () => {
        const { currentEventIndex, gameOverReason } = get();
        if (gameOverReason) {
          set({ phase: 'debriefing' });
          return;
        }

        const next = currentEventIndex + 1;
        
        // 12 events total (4 sprints of 3 events)
        if (next >= 12) {
          set({ phase: 'debriefing' });
        } else if (next > 0 && next % 3 === 0) {
          // Acabou a sprint
          set({ phase: 'sprint_review' });
        } else {
          get().startNextSprint();
        }
      },

      startNextSprint: () => {
        const { currentEventIndex, events, playedEventsIds } = get();
        // Se vier de sprint_review, currentEventIndex é do último evento da sprint.
        // Precisamos avançar +1.
        const next = currentEventIndex + 1;
        const newSprint = Math.floor(next / 3) + 1;
        
        let newEvent = drawNextEvent(ALL_DYNAMIC_EVENTS, playedEventsIds, newSprint, get().gameDifficulty);
        if (!newEvent) {
          set({ phase: 'debriefing' });
          return;
        }
        newEvent = injectNPC(newEvent, get().players);

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
    }
  )
);
