import type { AlternativeKey, MetricLevel, Metrics, Vote } from '@/types';

export const INITIAL_METRICS: Metrics = { budget: 100, quality: 100, morale: 100 };

export function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

export function applyImpacts(current: Metrics, impacts: Partial<Metrics>): Metrics {
  return {
    budget: clamp(current.budget + (impacts.budget ?? 0)),
    quality: clamp(current.quality + (impacts.quality ?? 0)),
    morale: clamp(current.morale + (impacts.morale ?? 0)),
  };
}

export function metricLevel(value: number): MetricLevel {
  if (value < 40) return 'critical';
  if (value < 70) return 'warning';
  return 'stable';
}

export function isGameOver(m: Metrics): { over: boolean; reason?: string } {
  if (m.budget <= 0) return { over: true, reason: 'O orçamento se esgotou. Sem caixa, o projeto de modernização do SIGAA não pode mais avançar.' };
  if (m.quality < 40) return { over: true, reason: 'A qualidade do software despencou. A reitoria e a PROGRAD interromperam a modernização do SIGAA devido a falhas operacionais críticas.' };
  if (m.morale < 40) return { over: true, reason: 'A moral da equipe de desenvolvimento foi destruída. Os desenvolvedores pediram demissão coletiva diante da pressão e dívida técnica acumulada.' };
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
