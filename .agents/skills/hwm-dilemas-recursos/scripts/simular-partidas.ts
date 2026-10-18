import { tailoringEvents } from '../../../../src/data/events/tailoringEvents';
import { leadershipEvents } from '../../../../src/data/events/leadershipEvents';
import { systemsThinkingEvents } from '../../../../src/data/events/systemsThinkingEvents';
import { changeManagementEvents } from '../../../../src/data/events/changeManagementEvents';
import { qualityEvents } from '../../../../src/data/events/qualityEvents';
import { INITIAL_METRICS, applyImpacts, isGameOver, evaluateCondition, MATCH_DILEMMA_COUNT } from '../../../../src/lib/gameLogic';
import type { GameEvent, Metrics, Alternative } from '../../../../src/types';


interface PendingSimImpact {
  remainingEvents: number;
  impacts: Partial<Metrics>;
  condition?: any;
}

function simulateMatch(strategy: 'good' | 'random' | 'worst', dilemmaCount = MATCH_DILEMMA_COUNT): {
  gameOver: boolean;
  reason?: string;
  endTurn: number;
  finalMetrics: Metrics;
} {
  const sampleRandom = (arr: GameEvent[], count = 1): GameEvent[] => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const poolTailoring = sampleRandom(tailoringEvents, 2);
  const poolLeadership = sampleRandom(leadershipEvents, 2);
  const poolSystems = sampleRandom(systemsThinkingEvents, 2);
  const poolChange = sampleRandom(changeManagementEvents, 2);
  const poolQuality = sampleRandom(qualityEvents, 2);

  const round1 = [poolTailoring[0], poolLeadership[0], poolSystems[0], poolChange[0], poolQuality[0]].sort(() => Math.random() - 0.5);
  const round2 = [poolTailoring[1], poolLeadership[1], poolSystems[1], poolChange[1], poolQuality[1]].sort(() => Math.random() - 0.5);
  const deck = [...round1, ...round2].slice(0, dilemmaCount);

  let currentMetrics = { ...INITIAL_METRICS };
  let pendingImpacts: PendingSimImpact[] = [];

  for (let turn = 0; turn < deck.length; turn++) {
    const event = deck[turn];

    // 1. Processar delayed impacts
    const nextPending: PendingSimImpact[] = [];
    for (const item of pendingImpacts) {
      const rem = item.remainingEvents - 1;
      if (rem <= 0) {
        if (evaluateCondition(currentMetrics, item.condition)) {
          currentMetrics = applyImpacts(currentMetrics, item.impacts);
        }
      } else {
        nextPending.push({ ...item, remainingEvents: rem });
      }
    }
    pendingImpacts = nextPending;

    // Verificar Game Over após ecos
    const overAfterEco = isGameOver(currentMetrics);
    if (overAfterEco.over) {
      return { gameOver: true, reason: overAfterEco.reason, endTurn: turn + 1, finalMetrics: currentMetrics };
    }

    // 2. Escolher alternativa conforme estratégia
    let chosen: Alternative;
    if (strategy === 'good') {
      chosen = event.alternatives.find((a) => a.goodBad === 'good') || event.alternatives[0];
    } else if (strategy === 'worst') {
      const bads = event.alternatives.filter((a) => a.goodBad === 'bad');
      // Pior é a com menor soma de impactos
      chosen = bads.sort((b1, b2) => {
        const s1 = (b1.impacts.capacidadeEntrega ?? 0) + (b1.impacts.qualidadeProduto ?? 0) + (b1.impacts.saudeEquipe ?? 0);
        const s2 = (b2.impacts.capacidadeEntrega ?? 0) + (b2.impacts.qualidadeProduto ?? 0) + (b2.impacts.saudeEquipe ?? 0);
        return s1 - s2;
      })[0] || event.alternatives[0];
    } else {
      // Aleatória
      chosen = event.alternatives[Math.floor(Math.random() * event.alternatives.length)];
    }

    // Aplicar impactos imediatos
    currentMetrics = applyImpacts(currentMetrics, chosen.impacts);

    // Enfileirar novos delayed impacts
    if (chosen.delayedImpacts && chosen.delayedImpacts.length > 0) {
      for (const di of chosen.delayedImpacts) {
        pendingImpacts.push({
          remainingEvents: di.triggerAfterEvents,
          impacts: di.impacts,
          condition: di.condition,
        });
      }
    }

    // Verificar Game Over após escolha
    const overAfterChoice = isGameOver(currentMetrics);
    if (overAfterChoice.over) {
      return { gameOver: true, reason: overAfterChoice.reason, endTurn: turn + 1, finalMetrics: currentMetrics };
    }
  }

  return { gameOver: false, endTurn: deck.length, finalMetrics: currentMetrics };
}

export function runSimulation(n = 10000) {
  console.log(`\n======================================================`);
  console.log(`SIMULAÇÃO MONTE CARLO DE PARTIDAS (${n} iterações, ${MATCH_DILEMMA_COUNT} dilemas)`);
  console.log(`======================================================\n`);

  for (const strat of ['good', 'random', 'worst'] as const) {
    let overCount = 0;
    let turnSum = 0;
    const finalMetricsSums = { capacidadeEntrega: 0, qualidadeProduto: 0, saudeEquipe: 0, conhecimentoOrganizacional: 0 };

    for (let i = 0; i < n; i++) {
      const res = simulateMatch(strat);
      if (res.gameOver) overCount++;
      turnSum += res.endTurn;
      finalMetricsSums.capacidadeEntrega += res.finalMetrics.capacidadeEntrega;
      finalMetricsSums.qualidadeProduto += res.finalMetrics.qualidadeProduto;
      finalMetricsSums.saudeEquipe += res.finalMetrics.saudeEquipe;
      finalMetricsSums.conhecimentoOrganizacional += res.finalMetrics.conhecimentoOrganizacional;
    }

    const rate = ((overCount / n) * 100).toFixed(2);
    const avgTurn = (turnSum / n).toFixed(2);
    console.log(`Estratégia: [${strat.toUpperCase()}]`);
    console.log(`- Taxa de Game Over: ${rate}% (${overCount}/${n})`);
    console.log(`- Duração média da partida: ${avgTurn} dilemas`);
    console.log(`- Médias finais: Cap=${(finalMetricsSums.capacidadeEntrega / n).toFixed(1)}, Qual=${(finalMetricsSums.qualidadeProduto / n).toFixed(1)}, Saúde=${(finalMetricsSums.saudeEquipe / n).toFixed(1)}, Conhec=${(finalMetricsSums.conhecimentoOrganizacional / n).toFixed(1)}\n`);
  }
}

runSimulation(10000);

