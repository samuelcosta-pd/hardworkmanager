import { useEffect, useState } from "react";
import { AlertTriangle, ArrowRight, Mail, MessageSquare, Ticket } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { SoftCard } from "@/components/ui/SoftCard";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { Chip } from "@/components/game/Chip";
import { GameScreen } from "@/components/game/GameScreen";
import { HelpButton, ResponsibleBadge } from "@/components/game/ResponsibleBadge";
import { TeamBar } from "@/components/game/TeamBar";
import { TimerRing } from "@/components/game/TimerRing";
import { useCountdown } from "@/hooks/useCountdown";
import { useGameStore } from "@/store/gameStore";
import { detectTechTerms } from "@/data/glossary";
import { parseMessage, processName, shortTitle } from "@/lib/text";

const CHANNEL_ICON = {
  email: <Mail className="h-4 w-4" />,
  slack: <MessageSquare className="h-4 w-4" />,
  ticket: <Ticket className="h-4 w-4" />,
} as const;

/** Leitura do dilema: uma mensagem grande, o responsável e o cronômetro de discussão. */
export function EventDisplay() {
  const { events, currentEventIndex, pendingDelayedImpacts, timerSettings, readingDeadline, goTo } =
    useGameStore();
  const event = events[currentEventIndex] ?? events[0];
  const readingEnabled = timerSettings.enabled && timerSettings.readingSeconds > 0;

  // Tempo restante calculado a partir do prazo salvo no store: sair da tela ou recarregar a
  // página não reinicia nem pausa a leitura. Calculado só na montagem; depois o cronômetro conta.
  const [initialSeconds] = useState(() =>
    readingDeadline == null
      ? timerSettings.readingSeconds
      : Math.max(0, Math.ceil((readingDeadline - Date.now()) / 1000)),
  );

  // Se o tempo já acabou fora da tela, segue direto para a transição.
  const [autoAdvance, setAutoAdvance] = useState<number | null>(
    readingEnabled && initialSeconds === 0 ? 5 : null,
  );

  const countdown = useCountdown({
    durationSeconds: timerSettings.readingSeconds,
    initialSeconds,
    enabled: readingEnabled,
    onExpire: () => setAutoAdvance(5),
  });

  useEffect(() => {
    if (autoAdvance === null) return;
    if (autoAdvance <= 0) {
      goTo("voting_round_1");
      return;
    }
    const t = setTimeout(() => setAutoAdvance((v) => (v === null ? null : v - 1)), 1000);
    return () => clearTimeout(t);
  }, [autoAdvance, goTo]);

  if (!event) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <SoftCard className="w-full p-8">
          <h2 className="text-2xl font-black">Dilema não disponível</h2>
          <SoftButton className="mt-6" size="lg" onClick={() => goTo("dashboard")}>
            Voltar ao painel
          </SoftButton>
        </SoftCard>
      </div>
    );
  }

  const { header, body } = parseMessage(event.description);
  const terms = detectTechTerms(
    `${event.description} ${event.alternatives.map((a) => a.text).join(" ")}`,
    6,
  );
  const imminent = pendingDelayedImpacts.find((p) => p.remainingEvents === 1);

  return (
    <GameScreen
      footer={
        <TeamBar
          responsibleRole={event.responsibleRole}
          note={currentEventIndex === 0 ? "Discutam juntos antes de votar" : undefined}
        />
      }
    >
      <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <section className="flex min-w-0 flex-col gap-5 animate-float-in">
          <div className="flex flex-wrap gap-2">
            <Chip>{processName(event.domainTag)}</Chip>
            {event.resourceType && (
              <Chip>
                {event.resourceType === "humano" ? "Recurso humano" : "Recurso físico ou virtual"}
              </Chip>
            )}
          </div>
          <h1 className="m-0 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            {shortTitle(event.title)}
          </h1>
          <ResponsibleBadge role={event.responsibleRole} size="sm" />

          <div className="flex gap-4 rounded-3xl border border-border bg-card p-5 sm:p-7">
            <Avatar3D initials={event.senderInitials} imageUrl={event.avatarImage} size="lg" />
            <div className="flex min-w-0 flex-col gap-2">
              <span className="flex flex-wrap items-center gap-x-2 text-base font-extrabold text-muted-foreground">
                {CHANNEL_ICON[event.communicationType]}
                <span className="text-foreground">{event.senderName}</span>
                <span>· {event.senderRole}</span>
                {header && <span>· {header}</span>}
              </span>
              <p className="m-0 text-xl font-bold leading-relaxed sm:text-2xl">{body}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {terms.length > 0 && (
              <span className="flex items-center gap-2 text-base font-bold text-muted-foreground">
                <HelpButton label="Termos técnicos do dilema">
                  <div className="flex flex-col gap-3">
                    {terms.map(({ term, definition }) => (
                      <div key={term}>
                        <p className="m-0 font-extrabold capitalize">{term}</p>
                        <p className="m-0 text-sm font-semibold">{definition}</p>
                      </div>
                    ))}
                  </div>
                </HelpButton>
                Termos: {terms.map((t) => t.term).join(", ")}
              </span>
            )}
            {imminent && (
              <Chip tone="critical">
                <AlertTriangle className="h-4 w-4" />
                Consequência de "{shortTitle(imminent.sourceEventTitle)}" volta no fim deste dilema
              </Chip>
            )}
          </div>
        </section>

        <aside className="flex flex-col items-center justify-center gap-6">
          {timerSettings.enabled && timerSettings.readingSeconds > 0 && (
            <TimerRing
              secondsLeft={countdown.secondsLeft}
              totalSeconds={timerSettings.readingSeconds}
              label="Discussão em equipe"
              size={180}
            />
          )}
          {autoAdvance !== null && (
            <span className="text-center text-base font-extrabold text-warning" role="status">
              Tempo esgotado. Votação em {autoAdvance} s
            </span>
          )}
          <SoftButton
            size="lg"
            className="whitespace-nowrap"
            onClick={() => goTo("voting_round_1")}
          >
            Votar em segredo <ArrowRight className="h-5 w-5" />
          </SoftButton>
        </aside>
      </div>
    </GameScreen>
  );
}
