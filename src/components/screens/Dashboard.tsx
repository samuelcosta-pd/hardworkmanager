import { AlertTriangle, ArrowRight, Mail, MessageSquare, Ticket } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { SoftCard } from "@/components/ui/SoftCard";
import { Chip } from "@/components/game/Chip";
import { DecisionDetails } from "@/components/game/DilemmaDrawer";
import { DetailsPopover } from "@/components/game/Disclosure";
import { GameScreen } from "@/components/game/GameScreen";
import { decisionForTitle, findEvent } from "@/lib/history";
import { ResponsibleBadge } from "@/components/game/ResponsibleBadge";
import { TeamBar } from "@/components/game/TeamBar";
import { useGameStore } from "@/store/gameStore";
import { shortTitle } from "@/lib/text";

const CHANNEL = {
  email: { label: "Novo e-mail", icon: <Mail className="h-4 w-4" /> },
  slack: { label: "Nova mensagem no chat", icon: <MessageSquare className="h-4 w-4" /> },
  ticket: { label: "Novo chamado", icon: <Ticket className="h-4 w-4" /> },
} as const;

/** Sala de comando: o próximo dilema em destaque e o radar de consequências pendentes. */
export function Dashboard() {
  const {
    matchDeck,
    decisions,
    currentEventIndex,
    currentSprint,
    beginEvent,
    pendingDelayedImpacts,
    goTo,
  } = useGameStore();
  const currentEvent = matchDeck[currentEventIndex];

  if (!currentEvent) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <SoftCard className="w-full p-8">
          <h2 className="text-2xl font-black">Nenhuma partida ativa</h2>
          <p className="mt-2 text-lg text-muted-foreground">Monte a equipe para começar.</p>
          <SoftButton className="mt-6" size="lg" onClick={() => goTo("setup")}>
            Montar a equipe
          </SoftButton>
        </SoftCard>
      </div>
    );
  }

  const channel = CHANNEL[currentEvent.communicationType];
  const imminent = pendingDelayedImpacts.filter((p) => p.remainingEvents === 1).length;

  return (
    <GameScreen
      footer={<TeamBar responsibleRole={currentEvent.responsibleRole} />}
      className="justify-center"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <section className="flex flex-col gap-6 rounded-[2rem] border border-border bg-card p-6 sm:p-10 animate-float-in">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="accent">
              Ciclo {currentSprint} · Dilema {currentEventIndex + 1}
            </Chip>
            <Chip>
              {channel.icon}
              {channel.label}
            </Chip>
          </div>
          <h1 className="m-0 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {shortTitle(currentEvent.title)}
          </h1>
          <ResponsibleBadge role={currentEvent.responsibleRole} />
          <div>
            <SoftButton size="lg" onClick={beginEvent}>
              Abrir dilema <ArrowRight className="h-5 w-5" />
            </SoftButton>
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-5">
            <span className="flex items-center gap-2 text-lg font-black">
              <AlertTriangle className="h-5 w-5 text-warning" /> Radar
            </span>
            {pendingDelayedImpacts.length === 0 ? (
              <span className="text-base font-semibold text-muted-foreground">
                Nenhuma consequência pendente.
              </span>
            ) : (
              <div className="flex flex-col gap-2">
                {pendingDelayedImpacts.map((p) => {
                  const src = decisionForTitle(decisions, p.sourceEventTitle);
                  return (
                    <DetailsPopover
                      key={p.id}
                      summary={
                        <span className="text-base font-bold leading-snug">
                          {shortTitle(p.sourceEventTitle)}
                          <span
                            className={
                              p.remainingEvents === 1
                                ? "mt-0.5 block text-sm text-critical"
                                : "mt-0.5 block text-sm text-warning"
                            }
                          >
                            {p.remainingEvents === 1
                              ? "volta no fim deste dilema"
                              : `volta em ${p.remainingEvents} dilemas`}
                          </span>
                        </span>
                      }
                    >
                      {src && (
                        <DecisionDetails
                          event={findEvent(matchDeck, src.eventId)}
                          chosenKey={src.chosenAlternative}
                          chosenText={src.chosenText}
                        />
                      )}
                    </DetailsPopover>
                  );
                })}
              </div>
            )}
            {imminent > 0 && (
              <span className="sr-only">{imminent} consequência(s) iminente(s)</span>
            )}
          </div>
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-5">
            <span className="text-lg font-black">Como funciona</span>
            <span className="text-base font-semibold text-muted-foreground">
              2 min para discutir · voto secreto · debate se houver divergência.
            </span>
          </div>
        </aside>
      </div>
    </GameScreen>
  );
}
