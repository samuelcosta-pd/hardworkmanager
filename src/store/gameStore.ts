import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AVAILABLE_AVATARES } from '@/data/avatars';
import {
  INITIAL_METRICS,
  applyImpacts,
  isGameOver,
  tallyVotes,
  evaluateCondition,
  generateMatchDeck,
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
  matchDeck: GameEvent[];
  events: GameEvent[];
  currentEventIndex: number;
  votes: Vote[];
  decisions: Decision[];
  currentVoterIndex: number;
  gameOverReason?: string;
  
  // Propriedades de fluxo e impactos diferidos
  currentSprint: number;
  playedEventsIds: string[];
  pendingDelayedImpacts: PendingDelayedImpact[];
  appliedDelayedImpactsHistory: AppliedImpactHistory[];
  delayedImpactsTriggeredThisRound: AppliedImpactHistory[];

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
  matchDeck: [] as GameEvent[],
  events: [] as GameEvent[],
  currentEventIndex: 0,
  votes: [] as Vote[],
  decisions: [] as Decision[],
  currentVoterIndex: 0,
  gameOverReason: undefined as string | undefined,
  currentSprint: 1,
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
        const rawDeck = generateMatchDeck();
        const players = get().players;
        const matchDeck = rawDeck.map(e => injectNPC(e, players));
        const firstEvent = matchDeck[0];
        
        set({ 
          phase: 'briefing',
          matchDeck,
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

      finalizeRound2: () => set({ phase: 'decision_resolved' }),

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
        const tally = tallyVotes(round2Votes.length > 0 ? round2Votes : votes.filter((v) => v.round === 1));
        
        let chosenKey: AlternativeKey = tally.winner;
        if (tally.tied) {
          const pm = players.find((p) => p.role === 'pm');
          const pmVote = round2Votes.find((v) => v.playerId === pm?.id);
          if (pmVote && tally.topAlternatives.includes(pmVote.alternative)) {
            chosenKey = pmVote.alternative;
          }
        }

        const chosenAlt = event.alternatives.find((a) => a.key === chosenKey) || event.alternatives[0];

        // 1. Processar Delayed Impacts que já estavam pendentes
        let currentMetrics = { ...metrics };
        const newlyAppliedHistory: AppliedImpactHistory[] = [];
        const remainingDelayedImpacts: PendingDelayedImpact[] = [];

        for (const item of pendingDelayedImpacts) {
          const decremented = item.remainingEvents - 1;
          if (decremented <= 0) {
            // Checar se a condição de ativação é satisfeita
            if (evaluateCondition(currentMetrics, item.impact.condition)) {
              currentMetrics = applyImpacts(currentMetrics, item.impact.impacts);
              newlyAppliedHistory.push({
                narrative: item.impact.narrative,
                metricsDelta: item.impact.impacts,
                sourceEventTitle: item.sourceEventTitle,
              });
            }
          } else {
            remainingDelayedImpacts.push({
              ...item,
              remainingEvents: decremented,
            });
          }
        }

        // 2. Aplicar impactos imediatos da alternativa escolhida
        const nextMetrics = applyImpacts(currentMetrics, chosenAlt.impacts);

        // 3. Registrar novos Delayed Impacts gerados pela escolha atual
        if (chosenAlt.delayedImpacts && chosenAlt.delayedImpacts.length > 0) {
          chosenAlt.delayedImpacts.forEach((di, idx) => {
            remainingDelayedImpacts.push({
              id: `${event.id}_di_${idx}_${Date.now()}`,
              remainingEvents: di.triggerAfterEvents,
              impact: di,
              sourceEventTitle: event.title,
            });
          });
        }

        const dissentingVote = round2Votes.find((v) => v.alternative !== chosenKey);
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
        };

        const over = isGameOver(nextMetrics);

        set({
          metrics: nextMetrics,
          decisions: [...decisions, decision],
          gameOverReason: over.over ? over.reason : undefined,
          pendingDelayedImpacts: remainingDelayedImpacts,
          appliedDelayedImpactsHistory: [...appliedDelayedImpactsHistory, ...newlyAppliedHistory],
          delayedImpactsTriggeredThisRound: newlyAppliedHistory,
          phase: 'feedback_narrative',
        });
      },

      nextEvent: () => {
        const { currentEventIndex, gameOverReason } = get();
        if (gameOverReason) {
          set({ phase: 'debriefing' });
          return;
        }

        const next = currentEventIndex + 1;
        
        // Partida completa com 10 dilemas (2 de cada um dos 5 princípios)
        if (next >= 10) {
          set({ phase: 'debriefing' });
        } else if (next === 3 || next === 6 || next === 9) {
          // Revisão de Sprint ao final dos blocos de sprint
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
    }
  )
);
