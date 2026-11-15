import type { Decision, GameEvent } from "@/types";

/** Procura o dilema da partida (com as alternativas na ordem sorteada). */
export function findEvent(matchDeck: GameEvent[], id: string): GameEvent | undefined {
  return matchDeck.find((e) => e.id === id);
}

/** Decisão que gerou uma consequência tardia (as consequências guardam o título do dilema de origem). */
export function decisionForTitle(decisions: Decision[], title: string): Decision | undefined {
  return decisions.find((d) => d.eventTitle === title);
}
