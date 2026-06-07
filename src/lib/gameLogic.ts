import type { AlternativeKey, MetricLevel, Metrics, Vote, GameEvent, DelayedImpact } from '@/types';
import { EventCategory, EventDifficulty, GameDifficulty } from '@/types';

export const INITIAL_METRICS: Metrics = { eficiencia: 100, qualidade: 100, saudeEquipe: 100 };

export function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

export function applyImpacts(current: Metrics, impacts: Partial<Metrics>): Metrics {
  return {
    eficiencia: clamp(current.eficiencia + (impacts.eficiencia ?? 0)),
    qualidade: clamp(current.qualidade + (impacts.qualidade ?? 0)),
    saudeEquipe: clamp(current.saudeEquipe + (impacts.saudeEquipe ?? 0)),
  };
}

export function metricLevel(value: number): MetricLevel {
  if (value < 40) return 'critical';
  if (value < 70) return 'warning';
  return 'stable';
}

export function isGameOver(m: Metrics): { over: boolean; reason?: string } {
  if (m.eficiencia <= 0) return { over: true, reason: 'A eficiência operacional colapsou. Prazos foram estourados e os recursos esgotados, inviabilizando a continuidade do projeto.' };
  if (m.qualidade < 40) return { over: true, reason: 'A qualidade técnica despencou a níveis inaceitáveis. O sistema apresentou falhas críticas operacionais e o projeto foi cancelado pela diretoria.' };
  if (m.saudeEquipe < 40) return { over: true, reason: 'A saúde da equipe foi destruída. Um ambiente tóxico e alta pressão causaram demissões em massa e burnout, paralisando o trabalho do projeto.' };
  return { over: false };
}

export interface VoteTally {
  counts: Record<AlternativeKey, number>;
  winner: AlternativeKey;
  unanimous: boolean;
  tied: boolean;
  topAlternatives: AlternativeKey[];
}

export function tallyVotes(votes: Vote[]): VoteTally {
  const counts: Record<AlternativeKey, number> = { a: 0, b: 0, c: 0 };
  votes.forEach((v) => (counts[v.alternative] += 1));
  const entries = (Object.entries(counts) as [AlternativeKey, number][]).sort((a, b) => b[1] - a[1]);
  const max = entries[0][1];
  const topAlternatives = entries.filter(([, n]) => n === max).map(([k]) => k);
  return {
    counts,
    winner: topAlternatives[0],
    unanimous: topAlternatives.length === 1 && max === votes.length,
    tied: topAlternatives.length > 1,
    topAlternatives,
  };
}

export function evaluateCondition(currentMetrics: Metrics, condition?: DelayedImpact['condition']): boolean {
  if (!condition) return true; // Se não tem condição, sempre dispara
  const value = currentMetrics[condition.metric];
  switch (condition.operator) {
    case '<': return value < condition.value;
    case '>': return value > condition.value;
    case '<=': return value <= condition.value;
    case '>=': return value >= condition.value;
    case '===': return value === condition.value;
    default: return false;
  }
}

export function drawNextEvent(
  allEvents: GameEvent[],
  playedEventsIds: string[],
  currentSprint: number,
  gameDifficulty: GameDifficulty = GameDifficulty.MEDIUM
): GameEvent | undefined {
  const available = allEvents.filter(e => !playedEventsIds.includes(e.id));
  if (available.length === 0) return undefined;

  const SPRINT_CATEGORIES: Record<number, EventCategory[]> = {
    1: [EventCategory.PEOPLE, EventCategory.EXECUTION],
    2: [EventCategory.INFRASTRUCTURE, EventCategory.KNOWLEDGE],
    3: [EventCategory.EXECUTION, EventCategory.EXTERNAL_PRESSURE],
    4: Object.values(EventCategory),
  };

  const currentCategories = SPRINT_CATEGORIES[currentSprint] || SPRINT_CATEGORIES[4];

  const DIFFICULTY_WEIGHTS = {
    [GameDifficulty.EASY]: { [EventDifficulty.EASY]: 80, [EventDifficulty.MEDIUM]: 20, [EventDifficulty.HARD]: 0 },
    [GameDifficulty.MEDIUM]: { [EventDifficulty.EASY]: 25, [EventDifficulty.MEDIUM]: 50, [EventDifficulty.HARD]: 25 },
    [GameDifficulty.HARD]: { [EventDifficulty.EASY]: 0, [EventDifficulty.MEDIUM]: 20, [EventDifficulty.HARD]: 80 },
  };

  const weights = DIFFICULTY_WEIGHTS[gameDifficulty];

  // Calcular pesos ajustados
  let weightedEvents = available.map(event => {
    let weight = event.probabilityWeight * weights[event.difficulty];
    if (currentCategories.includes(event.category)) weight *= 3;
    return { event, weight };
  });

  // Se o peso total for 0 (ex: acabou os eventos fáceis no modo fácil), 
  // ativamos o fallback e permitimos eventos com peso igual
  let totalWeight = weightedEvents.reduce((sum, item) => sum + item.weight, 0);
  if (totalWeight === 0) {
    weightedEvents = available.map(event => ({ event, weight: 1 }));
    totalWeight = available.length;
  }

  let random = Math.random() * totalWeight;

  for (const item of weightedEvents) {
    random -= item.weight;
    if (random <= 0) {
      return item.event;
    }
  }

  return weightedEvents[0].event;
}

