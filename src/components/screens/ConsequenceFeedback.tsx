import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Lightbulb,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { SoftButton } from "@/components/ui/SoftButton";
import { SoftCard } from "@/components/ui/SoftCard";
import { AltBadge } from "@/components/game/AltShape";
import { Chip } from "@/components/game/Chip";
import { DecisionDetails, DilemmaDrawer } from "@/components/game/DilemmaDrawer";
import { DetailsPopover } from "@/components/game/Disclosure";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <div className="flex items-center gap-2.5 rounded-2xl bg-muted px-4 py-3">
      <span className={up ? "text-success" : "text-critical"}>{icon}</span>
      <span className="flex-1 truncate text-base font-extrabold">{label}</span>
      <span
        className={cn(
          "flex items-center gap-1 text-2xl font-black tabular-nums",
          up ? "text-success" : "text-critical",
        )}
      >
        {up ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
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
          className="flex items-start gap-3 rounded-3xl bg-critical p-4 text-[#0e1633] animate-pop-in"
          role="alert"
        >
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <p className="m-0 text-lg font-black">Limite crítico atingido</p>
            <p className="m-0 text-base font-bold">{gameOverReason}</p>
          </div>
        </div>
      )}

      {/* Duas consequências no mesmo turno ficam lado a lado (cabe sem rolagem em 1366×768) */}
      {delayedImpactsTriggeredThisRound.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-1 gap-3",
            delayedImpactsTriggeredThisRound.length > 1 && "lg:grid-cols-2",
          )}
        >
          {delayedImpactsTriggeredThisRound.map((impact, i) => {
            const source = decisionForTitle(decisions, impact.sourceEventTitle);
            return (
              <div
                key={i}
                className="flex items-start gap-3 rounded-3xl border-2 border-critical bg-card p-4 animate-pop-in"
              >
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-critical" />
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="text-base font-extrabold text-critical">
                    Consequência de "{shortTitle(impact.sourceEventTitle)}"
                  </span>
                  <p className="m-0 text-base font-bold leading-relaxed">{impact.narrative}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {METRIC_META.filter((m) => impact.metricsDelta?.[m.key]).map((m) => (
                      <Chip key={m.key} tone="critical">
                        {m.label} {(impact.metricsDelta[m.key] ?? 0) > 0 ? "+" : ""}
                        {impact.metricsDelta[m.key]}
                      </Chip>
                    ))}
                    {source && (
                      <DetailsPopover
                        summary={
                          <span className="text-sm font-extrabold">
                            Ver a decisão que causou isso
                          </span>
                        }
                        className="w-auto py-1.5"
                      >
                        <DecisionDetails
                          event={findEvent(matchDeck, source.eventId)}
                          chosenKey={source.chosenAlternative}
                          chosenText={source.chosenText}
                        />
                      </DetailsPopover>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <section className="flex flex-col gap-5 rounded-[2rem] border border-border bg-card p-5 sm:flex-row sm:p-6 animate-float-in">
        <img
          src={MENTOR.imagePath}
          alt="Helena"
          className="h-20 w-20 shrink-0 rounded-full bg-[#dce3f5] object-cover"
        />
        <div className="flex flex-col gap-2">
          <span className="text-base font-extrabold text-muted-foreground">Helena, consultora</span>
          <p className="m-0 text-xl font-extrabold leading-snug sm:text-2xl">
            {decision.feedbackNarrative}
          </p>
          <span className="text-lg font-extrabold text-primary">Conceito: {alt.pmbokConcept}</span>
        </div>
      </section>

      {changed.length > 0 && (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {changed.map((m) => (
            <DeltaCard key={m.key} label={m.label} icon={m.icon} value={delta[m.key] ?? 0} />
          ))}
        </div>
      )}
      {decision.penaltyApplied && (
        <p className="m-0 rounded-2xl border border-critical/60 p-4 text-base font-bold">
          Penalidade cruzada: com o Conhecimento Organizacional abaixo de 20, a perda de Capacidade
          de Entrega desta decisão dobrou.
        </p>
      )}
      {/* No fim da partida (último dilema ou fim de jogo) o aviso de radar não se aplica */}
      {!gameOverReason && !isLast && alt.delayedImpacts && alt.delayedImpacts.length > 0 && (
        <p className="m-0 flex items-center gap-2 text-base font-bold text-warning">
          <Clock className="h-5 w-5 shrink-0" />
          Esta escolha deixou uma consequência para depois. Ela aparece no radar.
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <SoftButton variant="ghost">
              <Lightbulb className="h-5 w-5" />
              Lições e riscos
            </SoftButton>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full flex-col gap-5 overflow-y-auto border-border bg-card p-6 sm:max-w-xl"
          >
            <SheetTitle className="pr-12 text-3xl font-black text-foreground">
              Lições e riscos
            </SheetTitle>
            <SheetDescription className="sr-only">
              Lições da decisão tomada e riscos do cenário
            </SheetDescription>
            <span className="text-lg font-extrabold text-primary">
              Conceito: {alt.pmbokConcept}
            </span>
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
            {alt.risksEvaded.length > 0 && (
              <div className="rounded-3xl bg-muted p-5">
                <p className="m-0 mb-2 flex items-center gap-2 text-lg font-black">
                  <ShieldCheck className="h-5 w-5 text-success" /> Riscos evitados
                </p>
                <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-lg font-semibold leading-relaxed">
                  {alt.risksEvaded.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {alt.otherConsequences.length > 0 && (
              <div className="rounded-3xl bg-muted p-5">
                <p className="m-0 mb-2 flex items-center gap-2 text-lg font-black">
                  <AlertTriangle className="h-5 w-5 text-warning" /> Outras consequências
                </p>
                <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-lg font-semibold leading-relaxed">
                  {alt.otherConsequences.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </SheetContent>
        </Sheet>
        <SoftButton size="lg" onClick={nextEvent}>
          {cta} <ArrowRight className="h-5 w-5" />
        </SoftButton>
      </div>
    </GameScreen>
  );
}
