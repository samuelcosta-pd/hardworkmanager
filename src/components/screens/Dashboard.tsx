import { Gauge, Heart, Sparkle, AlertCircle, TrendingDown } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';

export function Dashboard() {
  const { players, metrics, events, currentEventIndex, decisions, beginEvent, currentSprint, appliedDelayedImpactsHistory } = useGameStore();
  const currentEvent = events[currentEventIndex];

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-float-in">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Painel Executivo</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Projeto Sistema de Gerenciamento Acadêmico : Sala de Comando</h1>
        </div>
        <div className="flex -space-x-2">
          {players.map((p) => (
            <Avatar3D key={p.id} initials={p.name.slice(0, 2)} role={p.role} imageUrl={p.avatarImage} className="ring-4 ring-background" />
          ))}
        </div>
      </header>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <MetricBar label="Capacidade de Entrega (Velocity)" value={metrics.capacidadeEntrega} icon={<Gauge className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade do Produto" value={metrics.qualidadeProduto} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Saúde da Equipe" value={metrics.saudeEquipe} icon={<Heart className="h-5 w-5 text-primary" />} />
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <SoftCard className="md:col-span-2 animate-float-in">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Próximo dilema</p>
          <h2 className="mt-2 text-2xl font-bold">{currentEvent?.title || 'Carregando...'}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Princípio PMBOK: <span className="font-medium text-foreground">{currentEvent?.domainTag}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Responsável principal:{' '}
            <span className="font-medium text-foreground">{currentEvent ? ROLE_LABELS[currentEvent.responsibleRole] : ''}</span>
          </p>
          <div className="mt-6 flex justify-end">
            <SoftButton size="lg" onClick={beginEvent}>
              Abrir dilema
            </SoftButton>
          </div>
        </SoftCard>

        <SoftCard className="animate-float-in">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Progresso da Partida</p>
          <p className="mt-2 text-3xl font-bold">
            {decisions.length}
            <span className="text-base font-normal text-muted-foreground"> / 10</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">dilemas concluídos (2 por princípio)</p>
          <div className="mt-5 space-y-2 max-h-[300px] overflow-y-auto pr-2">
            {events.map((ev, i) => (
              <div
                key={ev.id}
                className={`rounded-2xl px-3 py-2 text-xs ${i < decisions.length
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

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <SoftCard className="animate-float-in border-t-4 border-t-indigo-500">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Ciclo de Entrega</p>
          <h2 className="mt-2 text-2xl font-bold">Sprint {currentSprint} / 4</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {Math.max(0, 10 - currentEventIndex)} dilema(s) restantes na partida.
          </p>
        </SoftCard>

        <SoftCard className="animate-float-in border-t-4 border-t-amber-500 max-h-64 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-bold">Consequências que Retornaram</h2>
          </div>
          {appliedDelayedImpactsHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">Nenhuma consequência diferida ocorreu ainda.</p>
          ) : (
            <div className="space-y-4">
              {appliedDelayedImpactsHistory.map((impact, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-3 text-sm text-amber-900 border border-amber-100">
                  <p className="font-semibold mb-1 flex items-center gap-1"><TrendingDown className="w-4 h-4" /> Eco de: {impact.sourceEventTitle}</p>
                  <p>{impact.narrative}</p>
                </div>
              ))}
            </div>
          )}
        </SoftCard>
      </div>
    </div>
  );
}
