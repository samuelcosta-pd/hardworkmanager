import { Coins, Heart, Sparkle } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';

export function Dashboard() {
  const { players, metrics, events, currentEventIndex, decisions, beginEvent } = useGameStore();
  const currentEvent = events[currentEventIndex];

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-float-in">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Painel Executivo</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">XIX WTISC — Sala de Comando</h1>
        </div>
        <div className="flex -space-x-2">
          {players.map((p) => (
            <Avatar3D key={p.id} initials={p.name.slice(0, 2)} role={p.role} className="ring-4 ring-background" />
          ))}
        </div>
      </header>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <MetricBar label="Orçamento" value={metrics.budget} icon={<Coins className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade" value={metrics.quality} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Moral" value={metrics.morale} icon={<Heart className="h-5 w-5 text-primary" />} />
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <SoftCard className="md:col-span-2 animate-float-in">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Próximo dilema</p>
          <h2 className="mt-2 text-2xl font-bold">{currentEvent.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Domínio: <span className="font-medium text-foreground">{currentEvent.domainTag}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Responsável principal:{' '}
            <span className="font-medium text-foreground">{ROLE_LABELS[currentEvent.responsibleRole]}</span>
          </p>
          <div className="mt-6 flex justify-end">
            <SoftButton size="lg" onClick={beginEvent}>
              Abrir dilema
            </SoftButton>
          </div>
        </SoftCard>

        <SoftCard className="animate-float-in">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Progresso</p>
          <p className="mt-2 text-3xl font-bold">
            {decisions.length}
            <span className="text-base font-normal text-muted-foreground"> / {events.length}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">decisões registradas</p>
          <div className="mt-5 space-y-2">
            {events.map((ev, i) => (
              <div
                key={ev.id}
                className={`rounded-2xl px-3 py-2 text-xs ${
                  i < decisions.length
                    ? 'bg-muted text-muted-foreground line-through'
                    : i === currentEventIndex
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'bg-muted text-muted-foreground'
                }`}
              >
                {ev.title}
              </div>
            ))}
          </div>
        </SoftCard>
      </div>
    </div>
  );
}
