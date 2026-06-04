import type { AlternativeKey, MetricLevel, Metrics, Vote } from '@/types';

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
