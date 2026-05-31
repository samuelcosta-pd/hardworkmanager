import { Mail, MessageSquare, Ticket } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { Avatar3D } from '@/components/ui/Avatar3D';
import type { GameEvent } from '@/types';

interface Props {
  event: GameEvent;
}

export function EmailView({ event }: Props) {
  const subjectMatch = event.description.match(/^Assunto:\s*([^.]+)\./i);
  const subject = subjectMatch ? subjectMatch[1] : event.title;
  const body = subjectMatch ? event.description.replace(subjectMatch[0], '').trim() : event.description;

  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <Mail className="h-4 w-4" /> Caixa de entrada — Projeto SIGAA
      </div>
      <div className="rounded-2xl bg-muted/60 p-5">
        <div className="flex items-start gap-4">
          <Avatar3D initials={event.senderInitials} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">{event.senderName}</p>
              <span className="text-xs text-muted-foreground">agora mesmo</span>
            </div>
            <p className="text-xs text-muted-foreground">{event.senderRole}</p>
            <h2 className="mt-3 text-lg font-bold leading-snug">{subject}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{body}</p>
          </div>
        </div>
      </div>
    </SoftCard>
  );
}

export function SlackView({ event }: Props) {
  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <MessageSquare className="h-4 w-4" /> #sigaa-modernizacao
      </div>
      <div className="flex items-start gap-4">
        <Avatar3D initials={event.senderInitials} size="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="font-semibold">{event.senderName}</p>
            <span className="text-xs text-muted-foreground">{event.senderRole}</span>
            <span className="text-xs text-muted-foreground">· agora</span>
          </div>
          <div className="relative mt-2 inline-block rounded-3xl rounded-tl-md bg-muted px-5 py-4 shadow-[var(--shadow-soft)]">
            <p className="text-sm leading-relaxed">{event.description}</p>
          </div>
        </div>
      </div>
    </SoftCard>
  );
}

export function TicketView({ event }: Props) {
  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-2">
          <Ticket className="h-4 w-4" /> Kanban — SIGAA
        </span>
        <span className="rounded-full bg-warning/30 px-3 py-1 text-warning-foreground">A fazer</span>
      </div>
      <div className="rounded-2xl bg-muted/60 p-5">
        <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {event.domainTag}
        </div>
        <h2 className="text-lg font-bold">{event.title}</h2>
        <div className="mt-2 flex items-center gap-3">
          <Avatar3D initials={event.senderInitials} size="sm" />
          <div>
            <p className="text-sm font-medium">{event.senderName}</p>
            <p className="text-xs text-muted-foreground">{event.senderRole}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/90">{event.description}</p>
      </div>
    </SoftCard>
  );
}
