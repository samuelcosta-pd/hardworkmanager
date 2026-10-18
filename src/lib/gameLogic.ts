import type { AlternativeKey, MetricLevel, Metrics, Vote, GameEvent, DelayedImpact } from "@/types";
import { tailoringEvents } from "@/data/events/tailoringEvents";
import { leadershipEvents } from "@/data/events/leadershipEvents";
import { systemsThinkingEvents } from "@/data/events/systemsThinkingEvents";
import { changeManagementEvents } from "@/data/events/changeManagementEvents";
import { qualityEvents } from "@/data/events/qualityEvents";

export const INITIAL_METRICS: Metrics = {
  capacidadeEntrega: 100,
  qualidadeProduto: 100,
  saudeEquipe: 100,
  conhecimentoOrganizacional: 50,
};

export function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

export function applyImpacts(current: Metrics, impacts: Partial<Metrics>): Metrics {
  // Mecânica de penalidade: se o conhecimento organizacional estiver criticamente baixo (< 20)
  // e o impacto atual reduzir a capacidade de entrega, dobramos a perda de capacidade
  // para simular que a falta de documentação/silos dobra o tempo de resolução de problemas.
  let capacidadeImpact = impacts.capacidadeEntrega ?? 0;
  if (current.conhecimentoOrganizacional < 20 && capacidadeImpact < 0) {
    capacidadeImpact *= 2;
  }

  return {
    capacidadeEntrega: clamp(current.capacidadeEntrega + capacidadeImpact),
    qualidadeProduto: clamp(current.qualidadeProduto + (impacts.qualidadeProduto ?? 0)),
    saudeEquipe: clamp(current.saudeEquipe + (impacts.saudeEquipe ?? 0)),
    conhecimentoOrganizacional: clamp(
      current.conhecimentoOrganizacional + (impacts.conhecimentoOrganizacional ?? 0),
    ),
  };
}

export function metricLevel(value: number): MetricLevel {
  if (value < 40) return "critical";
  if (value < 70) return "warning";
  return "stable";
}

export function isGameOver(m: Metrics): { over: boolean; reason?: string } {
  if (m.capacidadeEntrega < 40)
    return {
      over: true,
      reason:
        "A capacidade de entrega (Velocity) colapsou. Gargalos crônicos e lentidão inviabilizaram a continuidade do projeto.",
    };
  if (m.qualidadeProduto < 40)
    return {
      over: true,
      reason:
        "A qualidade do produto despencou a níveis inaceitáveis. O alto volume de sucata (scrap) e retrabalho forçou o cancelamento pelo cliente.",
    };
  if (m.saudeEquipe < 40)
    return {
      over: true,
      reason:
        "A saúde da equipe foi destruída. Um ambiente tóxico e alta pressão causaram demissões em massa e burnout crônico, inviabilizando os recursos humanos da equipe.",
    };
  return { over: false };
}

export interface VoteTally {
  counts: Record<AlternativeKey, number>;
  abstentions: number;
  winner: AlternativeKey;
  unanimous: boolean;
  tied: boolean;
  topAlternatives: AlternativeKey[];
}

export function tallyVotes(votes: Vote[]): VoteTally {
  const counts: Record<AlternativeKey, number> = { a: 0, b: 0, c: 0 };
  let abstentions = 0;

  votes.forEach((v) => {
    if (v.alternative === 'abstain') {
      abstentions += 1;
    } else {
      counts[v.alternative] += 1;
    }
  });

  const validVotesCount = votes.length - abstentions;
  const entries = (Object.entries(counts) as [AlternativeKey, number][]).sort(
    (a, b) => b[1] - a[1],
  );
  const max = entries[0][1];
  const topAlternatives = entries.filter(([, n]) => n === max).map(([k]) => k);

  const tied = max === 0 || topAlternatives.length > 1;
  const unanimous = validVotesCount > 0 && topAlternatives.length === 1 && max === validVotesCount;

  return {
    counts,
    abstentions,
    winner: topAlternatives[0],
    unanimous,
    tied,
    topAlternatives,
  };
}

export function evaluateCondition(
  currentMetrics: Metrics,
  condition?: DelayedImpact["condition"],
): boolean {
  if (!condition) return true;
  const value = currentMetrics[condition.metric];
  switch (condition.operator) {
    case "<":
      return value < condition.value;
    case ">":
      return value > condition.value;
    case "<=":
      return value <= condition.value;
    case ">=":
      return value >= condition.value;
    case "===":
      return value === condition.value;
    default:
      return false;
  }
}

/**
 * Embaralha a ordem das alternativas do dilema preservando o conteúdo
 * e reatribuindo as chaves 'a', 'b', 'c', para que a alternativa 'good'
 * não seja sempre a primeira ('a').
 */
export function shuffleEventAlternatives(event: GameEvent): GameEvent {
  const keys: AlternativeKey[] = ['a', 'b', 'c'];
  const shuffledAlts = [...event.alternatives]
    .sort(() => Math.random() - 0.5)
    .map((alt, idx) => ({
      ...alt,
      key: keys[idx],
    }));

  return {
    ...event,
    alternatives: shuffledAlts,
  };
}

/**
 * GERAÇÃO DO BARALHO DA PARTIDA:
 * Sorteia dilemas balanceados e embaralha as alternativas de cada dilema.
 */
export const MATCH_DILEMMA_COUNT = 6;

export function generateMatchDeck(): GameEvent[] {
  const sampleRandom = (arr: GameEvent[], count: number = 1): GameEvent[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const poolTailoring = sampleRandom(tailoringEvents, 2);
  const poolLeadership = sampleRandom(leadershipEvents, 2);
  const poolSystems = sampleRandom(systemsThinkingEvents, 2);
  const poolChange = sampleRandom(changeManagementEvents, 2);
  const poolQuality = sampleRandom(qualityEvents, 2);

  const round1 = [
    poolTailoring[0],
    poolLeadership[0],
    poolSystems[0],
    poolChange[0],
    poolQuality[0],
  ].sort(() => Math.random() - 0.5);

  const round2 = [
    poolTailoring[1],
    poolLeadership[1],
    poolSystems[1],
    poolChange[1],
    poolQuality[1],
  ].sort(() => Math.random() - 0.5);

  const selectedDeck = [...round1, ...round2].slice(0, MATCH_DILEMMA_COUNT);
  return selectedDeck.map(shuffleEventAlternatives);
}

