import { useEffect, useState } from "react";
import { FileText, Mail, MessageSquare, Ticket } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { ALT_BG, AltShape } from "@/components/game/AltShape";
import { Chip } from "@/components/game/Chip";
import { ResponsibleBadge } from "@/components/game/ResponsibleBadge";
import { TimerRing } from "@/components/game/TimerRing";
import { detectTechTerms } from "@/data/glossary";
import { parseMessage, processName, shortTitle } from "@/lib/text";
import type { AlternativeKey, GameEvent } from "@/types";
import { cn } from "@/lib/utils";

const CHANNEL_ICON = {
  email: <Mail className="h-4 w-4" />,
  slack: <MessageSquare className="h-4 w-4" />,
  ticket: <Ticket className="h-4 w-4" />,
} as const;

/** A mensagem do dilema (remetente + texto), reaproveitada no painel, no debate e nas listas. */
export function DilemmaMessage({
  event,
  compact = false,
}: {
  event: GameEvent;
  compact?: boolean;
}) {
  const { header, body } = parseMessage(event.description);
  return (
    <div className="flex gap-4">
      <Avatar3D
        initials={event.senderInitials}
        imageUrl={event.avatarImage}
        size={compact ? "sm" : "md"}
      />
      <div className="flex min-w-0 flex-col gap-1.5">
        <span className="flex flex-wrap items-center gap-x-2 text-sm font-extrabold text-muted-foreground">
          {CHANNEL_ICON[event.communicationType]}
          <span className="text-foreground">{event.senderName}</span>
          <span>· {event.senderRole}</span>
          {header && <span>· {header}</span>}
        </span>
        <p className={cn("m-0 font-bold leading-relaxed", compact ? "text-base" : "text-lg")}>
          {body}
        </p>
      </div>
    </div>
  );
}

export function AlternativeLine({
  k,
  text,
  highlight,
}: {
  k: AlternativeKey;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl p-3",
        highlight ? "bg-white/10 ring-2 ring-primary" : "bg-muted",
      )}
    >
      <span
        className={`${ALT_BG[k]} flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white`}
      >
        <AltShape k={k} size={16} />
      </span>
      <span className="text-base font-bold leading-snug">
        <span className="mr-1.5 font-black">{k.toUpperCase()}.</span>
        {text}
      </span>
    </div>
  );
}

interface DrawerProps {
  event: GameEvent;
  /** Mostra as alternativas com cor e forma (apuração, debate, consequência). */
  showAlternatives?: boolean;
  chosenKey?: AlternativeKey;
  /** Cronômetro em andamento: continua contando e aparece dentro do painel. */
  timer?: { secondsLeft: number; totalSeconds: number; label: string };
}

/**
 * Botão "Rever dilema" + painel com o enunciado completo (heurística de Nielsen:
 * reconhecimento em vez de memorização). Atalho: tecla D.
 */
export function DilemmaDrawer({ event, showAlternatives, chosenKey, timer }: DrawerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "d" || e.key === "D") setOpen((o) => !o);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const terms = detectTechTerms(event.description, 4);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-keyshortcuts="D"
        title="Rever dilema (tecla D)"
        className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-primary px-3 text-base font-extrabold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
      >
        <FileText className="h-5 w-5" />
        Rever dilema
      </button>
      <SheetContent
        side="left"
        className="flex w-full flex-col gap-5 overflow-y-auto border-border bg-card p-6 sm:max-w-xl"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 pr-12">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <Chip>{processName(event.domainTag)}</Chip>
            </div>
            <SheetTitle className="text-3xl font-black leading-tight text-foreground">
              {shortTitle(event.title)}
            </SheetTitle>
            <SheetDescription className="sr-only">Enunciado completo do dilema</SheetDescription>
          </div>
          {timer && <TimerRing {...timer} size={96} />}
        </div>
        <ResponsibleBadge role={event.responsibleRole} size="sm" />
        <div className="rounded-3xl border border-border bg-background/60 p-5">
          <DilemmaMessage event={event} />
        </div>
        {showAlternatives && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-black tracking-wide text-muted-foreground">
              ALTERNATIVAS
            </span>
            {event.alternatives.map((a) => (
              <AlternativeLine
                key={a.key}
                k={a.key}
                text={a.text}
                highlight={a.key === chosenKey}
              />
            ))}
          </div>
        )}
        {terms.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-black tracking-wide text-muted-foreground">TERMOS</span>
            {terms.map(({ term, definition }) => (
              <p key={term} className="m-0 text-base font-semibold leading-relaxed">
                <strong className="capitalize">{term}:</strong> {definition}
              </p>
            ))}
          </div>
        )}
        <span className="mt-auto hidden text-sm font-bold text-muted-foreground sm:block">
          Atalho: tecla D abre e fecha este painel.
        </span>
      </SheetContent>
    </Sheet>
  );
}

/** Corpo de um item de histórico: o dilema, a escolha da equipe e o que aconteceu. */
export function DecisionDetails({
  event,
  chosenKey,
  chosenText,
  narrative,
}: {
  event?: GameEvent;
  chosenKey: AlternativeKey;
  chosenText: string;
  narrative?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {event && (
        <div className="rounded-2xl bg-background/60 p-3">
          <DilemmaMessage event={event} compact />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-black tracking-wide text-muted-foreground">
          ESCOLHA DA EQUIPE
        </span>
        <AlternativeLine k={chosenKey} text={chosenText} />
      </div>
      {narrative && (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-black tracking-wide text-muted-foreground">
            O QUE ACONTECEU
          </span>
          <p className="m-0 text-base font-semibold leading-relaxed">{narrative}</p>
        </div>
      )}
    </div>
  );
}
