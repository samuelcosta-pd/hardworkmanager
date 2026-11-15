import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Lightbulb,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { SoftButton } from "@/components/ui/SoftButton";
import { SoftCard } from "@/components/ui/SoftCard";
import { AltBadge } from "@/components/game/AltShape";
import { Chip } from "@/components/game/Chip";
import { DecisionDetails, DilemmaDrawer } from "@/components/game/DilemmaDrawer";
import { Disclosure } from "@/components/game/Disclosure";
import { GameScreen } from "@/components/game/GameScreen";
import { decisionForTitle, findEvent } from "@/lib/history";
import { METRIC_META } from "@/components/game/GameHud";
import { useGameStore } from "@/store/gameStore";
import { MENTOR } from "@/data/avatars";
import { shortTitle } from "@/lib/text";
import type { Metrics } from "@/types";
import { cn } from "@/lib/utils";

function DeltaCard({ label, icon, value }: { label: string; icon: ReactNode; value: number }) {
  const up = value > 0;
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-muted px-5 py-4">
      <span className={up ? "text-success" : "text-critical"}>{icon}</span>
      <span className="flex-1 text-lg font-extrabold">{label}</span>
      <span
        className={cn(
          "flex items-center gap-1 text-3xl font-black tabular-nums",
          up ? "text-success" : "text-critical",
        )}
      >
        {up ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
        {up ? `+${value}` : value}
      </span>
    </div>
  );
}

/** Consequência: veredito da Helena e variação real das métricas; lições abrem só quando pedidas. */
export function ConsequenceFeedback() {
  const {
    decisions,
    nextEvent,
    gameOverReason,
    events,
    matchDeck,
    currentEventIndex,
    delayedImpactsTriggeredThisRound,
    goTo,
  } = useGameStore();
  const [showLessons, setShowLessons] = useState(false);

  const decision = decisions[decisions.length - 1];
  const event = events[currentEventIndex] ?? events[0];
  const alt =
    event && decision
      ? event.alternatives.find((a) => a.key === decision.chosenAlternative)
      : undefined;

  if (!decision || !event || !alt) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <SoftCard className="w-full p-8">
          <h2 className="text-2xl font-black">Nenhuma decisão para mostrar</h2>
          <SoftButton className="mt-6" size="lg" onClick={() => goTo("dashboard")}>
            Ir ao painel
          </SoftButton>
        </SoftCard>
      </div>
    );
  }

  const isLast = currentEventIndex >= matchDeck.length - 1;
  const isCycleEnd = (currentEventIndex + 1) % 3 === 0;
  const cta = gameOverReason
    ? "Ver desfecho do projeto"
    : isLast || isCycleEnd
      ? "Revisão do ciclo"
      : "Próximo dilema";

  // Variação real (inclui a penalidade cruzada e os limites 0–100); partidas antigas usam o valor nominal.
  const delta: Partial<Metrics> = decision.immediateDelta ?? alt.impacts;
  const changed = METRIC_META.filter((m) => (delta[m.key] ?? 0) !== 0);
  const good = alt.goodBad === "good";

  return (
    <GameScreen
      deltas={delta}
      hudAction={
        <DilemmaDrawer event={event} showAlternatives chosenKey={decision.chosenAlternative} />
      }
    >
      <div className="flex flex-wrap items-center gap-2 animate-float-in">
        <Chip tone={good ? "success" : "warning"}>
          {good ? "Decisão recomendada" : "Decisão arriscada"}
        </Chip>
        <Chip>
          Escolha da equipe: <AltBadge k={decision.chosenAlternative} size="sm" />
        </Chip>
        <span className="text-base font-bold text-muted-foreground">
          {shortTitle(decision.eventTitle)}
        </span>
      </div>

      {gameOverReason && (
        <div
          className="flex items-start gap-3 rounded-3xl bg-critical p-5 text-[#0e1633] animate-pop-in"
          role="alert"
        >
          <AlertTriangle className="mt-1 h-7 w-7 shrink-0" />
          <div>
            <p className="m-0 text-xl font-black">Limite crítico atingido</p>
            <p className="m-0 text-lg font-bold">{gameOverReason}</p>
          </div>
        </div>
      )}

      {delayedImpactsTriggeredThisRound.map((impact, i) => {
        const source = decisionForTitle(decisions, impact.sourceEventTitle);
        return (
          <div
            key={i}
            className="flex items-start gap-3 rounded-3xl border-2 border-critical bg-card p-5 animate-pop-in"
          >
            <AlertTriangle className="mt-1 h-7 w-7 shrink-0 text-critical" />
            <div className="flex flex-col gap-1.5">
              <span className="text-base font-extrabold text-critical">
                Consequência de "{shortTitle(impact.sourceEventTitle)}"
              </span>
              <p className="m-0 text-lg font-bold leading-relaxed">{impact.narrative}</p>
              <div className="flex flex-wrap gap-2">
                {METRIC_META.filter((m) => impact.metricsDelta?.[m.key]).map((m) => (
                  <Chip key={m.key} tone="critical">
                    {m.label} {(impact.metricsDelta[m.key] ?? 0) > 0 ? "+" : ""}
                    {impact.metricsDelta[m.key]}
                  </Chip>
                ))}
              </div>
              {source && (
                <Disclosure
                  summary={
                    <span className="text-base font-extrabold">Ver a decisão que causou isso</span>
                  }
                  className="mt-1"
                >
                  <DecisionDetails
                    event={findEvent(matchDeck, source.eventId)}
                    chosenKey={source.chosenAlternative}
                    chosenText={source.chosenText}
                  />
                </Disclosure>
              )}
            </div>
          </div>
        );
      })}

      <section className="flex flex-col gap-5 rounded-[2rem] border border-border bg-card p-6 sm:flex-row sm:p-8 animate-float-in">
        <img
          src={MENTOR.imagePath}
          alt="Helena"
          className="h-24 w-24 shrink-0 rounded-full bg-[#dce3f5] object-cover"
        />
        <div className="flex flex-col gap-3">
          <span className="text-base font-extrabold text-muted-foreground">Helena, consultora</span>
          <p className="m-0 text-2xl font-extrabold leading-snug sm:text-3xl">
            {decision.feedbackNarrative}
          </p>
          <span className="text-lg font-extrabold text-primary">Conceito: {alt.pmbokConcept}</span>
        </div>
      </section>

      {changed.length > 0 && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {changed.map((m) => (
            <DeltaCard key={m.key} label={m.long} icon={m.icon} value={delta[m.key] ?? 0} />
          ))}
        </div>
      )}
      {decision.penaltyApplied && (
        <p className="m-0 rounded-2xl border border-critical/60 p-4 text-base font-bold">
          Penalidade cruzada: com o Conhecimento Organizacional abaixo de 20, a perda de Capacidade
          de Entrega desta decisão dobrou.
        </p>
      )}
      {alt.delayedImpacts && alt.delayedImpacts.length > 0 && (
        <p className="m-0 flex items-center gap-2 text-base font-bold text-warning">
          <Clock className="h-5 w-5 shrink-0" />
          Esta escolha deixou uma consequência para depois. Ela aparece no radar.
        </p>
      )}

      {showLessons && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 animate-float-in">
          <div className="rounded-3xl bg-muted p-5">
            <p className="m-0 mb-2 flex items-center gap-2 text-lg font-black">
              <Lightbulb className="h-5 w-5 text-primary" /> Lições
            </p>
            <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-lg font-semibold leading-relaxed">
              {alt.learnings.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
          {(alt.risksEvaded.length > 0 || alt.otherConsequences.length > 0) && (
            <div className="rounded-3xl bg-muted p-5">
              <p className="m-0 mb-2 flex items-center gap-2 text-lg font-black">
                <ShieldCheck className="h-5 w-5 text-success" />{" "}
                {alt.risksEvaded.length > 0 ? "Riscos evitados" : "Outras consequências"}
              </p>
              <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-lg font-semibold leading-relaxed">
                {(alt.risksEvaded.length > 0 ? alt.risksEvaded : alt.otherConsequences).map(
                  (r, i) => (
                    <li key={i}>{r}</li>
                  ),
                )}
              </ul>
            </div>
          )}
        </section>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <SoftButton
          variant="ghost"
          onClick={() => setShowLessons((v) => !v)}
          aria-expanded={showLessons}
        >
          <Lightbulb className="h-5 w-5" />
          {showLessons ? "Esconder lições" : "Lições e riscos"}
          {showLessons ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </SoftButton>
        <SoftButton size="lg" onClick={nextEvent}>
          {cta} <ArrowRight className="h-5 w-5" />
        </SoftButton>
      </div>
    </GameScreen>
  );
}
