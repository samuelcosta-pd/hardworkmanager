import { AlertTriangle, ArrowRight, Clock, TrendingDown } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { AltBadge } from "@/components/game/AltShape";
import { Carousel } from "@/components/game/Carousel";
import { Chip } from "@/components/game/Chip";
import { DecisionDetails } from "@/components/game/DilemmaDrawer";
import { DetailsPopover } from "@/components/game/Disclosure";
import { GameScreen } from "@/components/game/GameScreen";
import { METRIC_META } from "@/components/game/GameHud";
import { useGameStore } from "@/store/gameStore";
import { MENTOR } from "@/data/avatars";
import { decisionForTitle, findEvent } from "@/lib/history";
import { shortTitle } from "@/lib/text";

/** Revisão de ciclo: decisões em carrossel; ameaças e consequências abrem em janela flutuante. */
export function SprintReview() {
  const {
    currentSprint,
    decisions,
    matchDeck,
    pendingDelayedImpacts,
    appliedDelayedImpactsHistory,
    startNextSprint,
    goTo,
  } = useGameStore();

  const cycleDecisions = decisions.slice(-3);
  const isMatchComplete = decisions.length >= matchDeck.length;

  const decisionSlides = cycleDecisions.map((d) => (
    <article
      key={d.eventId}
      className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5"
    >
      <div className="flex items-center gap-3">
        <AltBadge k={d.chosenAlternative} size="sm" />
        <span className="text-xl font-black leading-tight">{shortTitle(d.eventTitle)}</span>
      </div>
      <DecisionDetails
        event={findEvent(matchDeck, d.eventId)}
        chosenKey={d.chosenAlternative}
        chosenText={d.chosenText}
        narrative={d.feedbackNarrative}
      />
    </article>
  ));

  return (
    <GameScreen>
      <div className="flex items-center gap-5 animate-float-in">
        <img
          src={MENTOR.imagePath}
          alt="Helena"
          className="h-16 w-16 shrink-0 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary"
        />
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-primary">
            Revisão do ciclo {currentSprint}
          </span>
          <h1 className="m-0 text-3xl font-black tracking-tight">
            {isMatchComplete
              ? "Fim da partida: vejam como o projeto terminou"
              : "Atalhos de hoje podem voltar amanhã"}
          </h1>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 lg:grid-cols-[1fr_360px]">
        <div className="flex min-h-0 flex-col gap-2">
          <span className="text-xl font-black">Decisões do ciclo</span>
          <Carousel items={decisionSlides} label="Decisões do ciclo" className="flex-1" />
        </div>

        <aside className="flex flex-col gap-4">
          <section className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-4">
            <span className="flex items-center gap-2 text-lg font-black">
              <Clock className="h-5 w-5 text-warning" /> Ameaças pendentes
            </span>
            {pendingDelayedImpacts.length === 0 ? (
              <span className="text-base font-semibold text-muted-foreground">
                Nenhuma no radar.
              </span>
            ) : (
              pendingDelayedImpacts.map((p) => {
                const src = decisionForTitle(decisions, p.sourceEventTitle);
                return (
                  <DetailsPopover
                    key={p.id}
                    summary={
                      <span className="flex flex-col">
                        <span className="text-base font-bold leading-snug">
                          {shortTitle(p.sourceEventTitle)}
                        </span>
                        <span className="text-sm font-extrabold text-warning">
                          {isMatchComplete
                            ? "Ficou para depois do projeto"
                            : `Volta em ${p.remainingEvents} ${p.remainingEvents === 1 ? "dilema" : "dilemas"}`}
                        </span>
                      </span>
                    }
                  >
                    {src ? (
                      <DecisionDetails
                        event={findEvent(matchDeck, src.eventId)}
                        chosenKey={src.chosenAlternative}
                        chosenText={src.chosenText}
                      />
                    ) : (
                      <span className="text-base font-semibold text-muted-foreground">
                        Origem não encontrada.
                      </span>
                    )}
                  </DetailsPopover>
                );
              })
            )}
          </section>

          <section className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-4">
            <span className="flex items-center gap-2 text-lg font-black">
              <TrendingDown className="h-5 w-5 text-critical" /> Consequências sofridas
            </span>
            {appliedDelayedImpactsHistory.length === 0 ? (
              <span className="text-base font-semibold text-muted-foreground">
                Nenhuma até agora.
              </span>
            ) : (
              appliedDelayedImpactsHistory.map((a, i) => {
                const src = decisionForTitle(decisions, a.sourceEventTitle);
                return (
                  <DetailsPopover
                    key={i}
                    summary={
                      <>
                        <AlertTriangle className="h-5 w-5 shrink-0 text-critical" />
                        <span className="text-base font-bold leading-snug">
                          {shortTitle(a.sourceEventTitle)}
                        </span>
                      </>
                    }
                  >
                    <p className="m-0 text-base font-bold leading-relaxed">{a.narrative}</p>
                    <div className="flex flex-wrap gap-2">
                      {METRIC_META.filter((m) => a.metricsDelta?.[m.key]).map((m) => (
                        <Chip key={m.key} tone="critical">
                          {m.label} {(a.metricsDelta[m.key] ?? 0) > 0 ? "+" : ""}
                          {a.metricsDelta[m.key]}
                        </Chip>
                      ))}
                    </div>
                    {src && (
                      <DecisionDetails
                        event={findEvent(matchDeck, src.eventId)}
                        chosenKey={src.chosenAlternative}
                        chosenText={src.chosenText}
                      />
                    )}
                  </DetailsPopover>
                );
              })
            )}
          </section>
        </aside>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Chip>
          {decisions.length} de {matchDeck.length} dilemas
        </Chip>
        {isMatchComplete ? (
          <SoftButton size="lg" onClick={() => goTo("debriefing")}>
            Debriefing final <ArrowRight className="h-5 w-5" />
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={startNextSprint}>
            Começar o ciclo {currentSprint + 1} <ArrowRight className="h-5 w-5" />
          </SoftButton>
        )}
      </div>
    </GameScreen>
  );
}
