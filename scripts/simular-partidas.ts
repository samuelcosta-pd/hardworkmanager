/**
 * Simulação Monte Carlo de partidas do Hard Work Manager.
 *
 * Usa exatamente o mesmo sorteio (generateMatchDeck) e a mesma regra de avanço
 * de dilema (resolveTurn) do jogo, para que os números reflitam a versão jogada.
 *
 * Uso (na raiz do projeto):
 *   npx tsx scripts/simular-partidas.ts [iterações]
 *
 * Estratégias:
 *   good   – sempre a alternativa recomendada
 *   random – alternativa ao acaso
 *   worst  – a não recomendada com a menor soma dos efeitos imediatos em
 *            Capacidade de Entrega, Qualidade do Produto e Saúde da Equipe
 */
import {
  INITIAL_METRICS,
  MATCH_DILEMMA_COUNT,
  generateMatchDeck,
  isGameOver,
  resolveTurn,
  type PendingImpact,
} from '../src/lib/gameLogic';
import type { Alternative, GameEvent, Metrics } from '../src/types';

type Strategy = 'good' | 'random' | 'worst';

function choose(event: GameEvent, strategy: Strategy): Alternative {
  if (strategy === 'good') {
    return event.alternatives.find((a) => a.goodBad === 'good') ?? event.alternatives[0];
  }
  if (strategy === 'worst') {
    const sum = (a: Alternative) =>
      (a.impacts.capacidadeEntrega ?? 0) + (a.impacts.qualidadeProduto ?? 0) + (a.impacts.saudeEquipe ?? 0);
    const bads = event.alternatives.filter((a) => a.goodBad === 'bad').sort((x, y) => sum(x) - sum(y));
    return bads[0] ?? event.alternatives[0];
  }
  return event.alternatives[Math.floor(Math.random() * event.alternatives.length)];
}

function simulateMatch(strategy: Strategy) {
  const deck = generateMatchDeck();
  let metrics: Metrics = { ...INITIAL_METRICS };
  let pending: PendingImpact[] = [];

  for (let turn = 0; turn < deck.length; turn++) {
    const result = resolveTurn(metrics, pending, deck[turn], choose(deck[turn], strategy));
    metrics = result.metrics;
    pending = result.pending;
    if (isGameOver(metrics).over) {
      return { gameOver: true, endTurn: turn + 1, finalMetrics: metrics };
    }
  }
  return { gameOver: false, endTurn: deck.length, finalMetrics: metrics };
}

export function runSimulation(n = 10000) {
  console.log(`\n======================================================`);
  console.log(`SIMULAÇÃO MONTE CARLO DE PARTIDAS (${n} iterações, ${MATCH_DILEMMA_COUNT} dilemas)`);
  console.log(`======================================================\n`);

  for (const strat of ['good', 'random', 'worst'] as const) {
    let overCount = 0;
    let turnSum = 0;
    const sums: Metrics = { capacidadeEntrega: 0, qualidadeProduto: 0, saudeEquipe: 0, conhecimentoOrganizacional: 0 };

    for (let i = 0; i < n; i++) {
      const res = simulateMatch(strat);
      if (res.gameOver) overCount++;
      turnSum += res.endTurn;
      for (const k of Object.keys(sums) as (keyof Metrics)[]) sums[k] += res.finalMetrics[k];
    }

    const avg = (k: keyof Metrics) => (sums[k] / n).toFixed(1);
    console.log(`Estratégia: [${strat.toUpperCase()}]`);
    console.log(`- Taxa de Game Over: ${((overCount / n) * 100).toFixed(2)}% (${overCount}/${n})`);
    console.log(`- Duração média da partida: ${(turnSum / n).toFixed(2)} dilemas`);
    console.log(
      `- Médias finais: Cap=${avg('capacidadeEntrega')}, Qual=${avg('qualidadeProduto')}, Saúde=${avg('saudeEquipe')}, Conhec=${avg('conhecimentoOrganizacional')}\n`,
    );
  }
}

runSimulation(Number(process.argv[2]) || 10000);
