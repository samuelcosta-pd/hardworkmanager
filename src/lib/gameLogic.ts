import type {
  Alternative,
  AlternativeKey,
  MetricLevel,
  Metrics,
  Vote,
  GameEvent,
  DelayedImpact,
} from "@/types";
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

/**
 * Embaralhamento uniforme (Fisher-Yates). Substitui `sort(() => Math.random() - 0.5)`,
 * que é enviesado: com ele a alternativa recomendada caía na posição A em ~44% das vezes
 * e alguns dilemas apareciam em até 24% das partidas (em vez de 12%).
 */
export function shuffle<T>(arr: readonly T[], random: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
        "A capacidade de entrega colapsou. Gargalos crônicos e lentidão inviabilizaram a continuidade do projeto.",
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
    if (v.alternative === "abstain") {
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
  // Regra: só é unânime se todos votaram (nenhuma abstenção) e na mesma alternativa.
  // Uma abstenção indica dúvida e abre o debate, no qual quem se absteve fala primeiro.
  const unanimous =
    abstentions === 0 &&
    validVotesCount > 0 &&
    topAlternatives.length === 1 &&
    max === validVotesCount;

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
  const keys: AlternativeKey[] = ["a", "b", "c"];
  const shuffledAlts = shuffle(event.alternatives).map((alt, idx) => ({
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
  const sampleRandom = (arr: GameEvent[], count: number = 1): GameEvent[] =>
    shuffle(arr).slice(0, count);

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
  ];

  const round2 = [
    poolTailoring[1],
    poolLeadership[1],
    poolSystems[1],
    poolChange[1],
    poolQuality[1],
  ];

  // Cinco dilemas (um de cada módulo) em ordem aleatória + o sexto, de um módulo sorteado.
  const selectedDeck = [...shuffle(round1), ...shuffle(round2)].slice(0, MATCH_DILEMMA_COUNT);
  return selectedDeck.map(shuffleEventAlternatives);
}

/**
 * Escolhe a alternativa vencedora a partir dos votos.
 * - Usa a 2ª votação quando existir; senão, a 1ª.
 * - Empate: prevalece o voto do GP (que não pode se abster na 2ª votação).
 * - Salvaguarda: se ainda houver empate sem voto do GP entre as empatadas,
 *   usa a contagem da 1ª votação entre as empatadas e, persistindo, a primeira delas.
 */
export function decideWinner(
  votes: Vote[],
  pmPlayerId: string | undefined,
  fallbackKey: AlternativeKey,
): { chosenKey: AlternativeKey; tally: VoteTally } {
  const round1 = votes.filter((v) => v.round === 1);
  const round2 = votes.filter((v) => v.round === 2);
  const decisive = round2.length > 0 ? round2 : round1;
  const tally = tallyVotes(decisive);

  if (!tally.tied) return { chosenKey: tally.winner, tally };

  const candidates =
    tally.counts.a + tally.counts.b + tally.counts.c === 0
      ? (["a", "b", "c"] as AlternativeKey[])
      : tally.topAlternatives;

  const pmVote = decisive.find((v) => v.playerId === pmPlayerId);
  if (pmVote && pmVote.alternative !== "abstain" && candidates.includes(pmVote.alternative)) {
    return { chosenKey: pmVote.alternative, tally };
  }

  if (round2.length > 0) {
    const r1 = tallyVotes(round1);
    const best = [...candidates].sort((x, y) => r1.counts[y] - r1.counts[x]);
    if (best.length > 0 && (best.length === 1 || r1.counts[best[0]] > r1.counts[best[1]])) {
      return { chosenKey: best[0], tally };
    }
  }

  return { chosenKey: candidates[0] ?? fallbackKey, tally };
}

export interface PendingImpact {
  id: string;
  remainingEvents: number;
  impact: DelayedImpact;
  sourceEventTitle: string;
}

export interface TriggeredImpact {
  narrative: string;
  metricsDelta: Partial<Metrics>;
  sourceEventTitle: string;
}

export interface TurnResult {
  metrics: Metrics;
  pending: PendingImpact[];
  triggered: TriggeredImpact[];
  /** Variação real causada pela decisão (após penalidade e limites 0–100). */
  immediateDelta: Metrics;
  /** true se a perda de Capacidade foi dobrada por Conhecimento < 20. */
  penaltyApplied: boolean;
}

function diff(after: Metrics, before: Metrics): Metrics {
  return {
    capacidadeEntrega: after.capacidadeEntrega - before.capacidadeEntrega,
    qualidadeProduto: after.qualidadeProduto - before.qualidadeProduto,
    saudeEquipe: after.saudeEquipe - before.saudeEquipe,
    conhecimentoOrganizacional:
      after.conhecimentoOrganizacional - before.conhecimentoOrganizacional,
  };
}

/**
 * Regra única de avanço de um dilema, usada pelo jogo e pelo simulador:
 * 1) dispara consequências tardias vencidas; 2) aplica a decisão; 3) agenda as novas.
 * O fim de jogo é verificado depois dos dois passos.
 */
export function resolveTurn(
  metrics: Metrics,
  pending: PendingImpact[],
  event: GameEvent,
  alt: Alternative,
  idSuffix = "",
): TurnResult {
  let current = { ...metrics };
  const triggered: TriggeredImpact[] = [];
  const remaining: PendingImpact[] = [];

  for (const item of pending) {
    const left = item.remainingEvents - 1;
    if (left <= 0) {
      if (evaluateCondition(current, item.impact.condition)) {
        const before = current;
        current = applyImpacts(current, item.impact.impacts);
        triggered.push({
          narrative: item.impact.narrative,
          metricsDelta: diff(current, before),
          sourceEventTitle: item.sourceEventTitle,
        });
      }
    } else {
      remaining.push({ ...item, remainingEvents: left });
    }
  }

  const before = current;
  const after = applyImpacts(before, alt.impacts);
  const penaltyApplied =
    before.conhecimentoOrganizacional < 20 && (alt.impacts.capacidadeEntrega ?? 0) < 0;

  (alt.delayedImpacts ?? []).forEach((di, idx) => {
    remaining.push({
      id: `${event.id}_di_${idx}${idSuffix}`,
      remainingEvents: di.triggerAfterEvents,
      impact: di,
      sourceEventTitle: event.title,
    });
  });

  return {
    metrics: after,
    pending: remaining,
    triggered,
    immediateDelta: diff(after, before),
    penaltyApplied,
  };
}
