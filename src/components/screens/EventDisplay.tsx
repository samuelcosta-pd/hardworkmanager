import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';
import { EmailView, SlackView, TicketView } from '@/components/comms/CommViews';

export function EventDisplay() {
  const { events, currentEventIndex, goTo } = useGameStore();
  const event = events[currentEventIndex];

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      <div className="mb-6 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Novo dilema</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">{event.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Princípio PMBOK: <span className="font-medium text-foreground">{event.domainTag}</span> · Liderança: {ROLE_LABELS[event.responsibleRole]}
        </p>
      </div>

      {event.communicationType === 'email' && <EmailView event={event} />}
      {event.communicationType === 'slack' && <SlackView event={event} />}
      {event.communicationType === 'ticket' && <TicketView event={event} />}

      <SoftCard className="mt-6 animate-float-in" variant="inset">
        <p className="text-sm text-muted-foreground">
          Discutam brevemente em equipe. Cada jogador passará o dispositivo para registrar seu voto
          secreto.
        </p>
      </SoftCard>

      <div className="mt-6 flex justify-end">
        <SoftButton size="lg" onClick={() => goTo('voting_round_1')}>
          Iniciar votação secreta
        </SoftButton>
      </div>
    </div>
  );
}
