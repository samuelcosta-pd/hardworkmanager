import { Gauge, Heart, Sparkle, AlertCircle, TrendingDown, ArrowRight } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';

export function Dashboard() {
  const { 
    players, 
    metrics, 
    matchDeck, 
    currentEventIndex, 
    decisions, 
    beginEvent, 
    currentSprint, 
    appliedDelayedImpactsHistory,
    goTo
  } = useGameStore();

  const currentEvent = matchDeck && matchDeck.length > 0 ? matchDeck[currentEventIndex] || matchDeck[0] : null;

  if (!currentEvent || matchDeck.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
        <SoftCard className="w-full p-8 text-center animate-pop-in">
          <h2 className="text-2xl font-bold text-foreground">Nenhuma partida ativa</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Configure sua equipe de liderança para iniciar uma nova simulação do Sistema de Gestão Acadêmica.
          </p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo('setup')}>
              Configurar Equipe
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-float-in">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Painel Executivo</p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Projeto Sistema de Gestão Acadêmica : Sala de Comando
          </h1>
        </div>
        <div className="flex -space-x-2">
          {players.map((p) => (
            <Avatar3D key={p.id} initials={p.name.slice(0, 2)} role={p.role} imageUrl={p.avatarImage} className="ring-4 ring-background" />
          ))}
        </div>
      </header>

      {/* 3 Métricas Principais */}
      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <MetricBar label="Capacidade de Entrega" value={metrics.capacidadeEntrega} icon={<Gauge className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade do Produto" value={metrics.qualidadeProduto} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Saúde da Equipe" value={metrics.saudeEquipe} icon={<Heart className="h-5 w-5 text-primary" />} />
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card do Próximo Dilema */}
        <SoftCard className="md:col-span-2 animate-float-in p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Dilema {currentEventIndex + 1} de {matchDeck.length} · Sprint {currentSprint}
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              {currentEvent.domainTag}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-foreground">{currentEvent.title}</h2>
          
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Liderança responsável: <span className="font-semibold text-foreground">{ROLE_LABELS[currentEvent.responsibleRole]}</span>
          </p>

          <div className="mt-6 flex justify-end">
            <SoftButton size="lg" onClick={beginEvent}>
              Abrir dilema <ArrowRight className="ml-1.5 h-4 w-4" />
            </SoftButton>
          </div>
        </SoftCard>

        {/* Card de Progresso com Lista dos Dilemas da Partida */}
        <SoftCard className="animate-float-in p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Progresso da Partida</p>
          <p className="mt-2 text-3xl font-extrabold text-foreground">
            {decisions.length}
            <span className="text-base font-normal text-muted-foreground"> / {matchDeck.length}</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">dilemas concluídos (Sprint {currentSprint})</p>
          
          <div className="mt-4 space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
            {matchDeck.map((ev, i) => {
              const isCompleted = i < decisions.length;
              const isCurrent = i === currentEventIndex;
              return (
                <div
                  key={ev.id || i}
                  className={`rounded-xl p-2.5 text-xs font-medium flex items-center justify-between transition-all ${
                    isCompleted
                      ? 'bg-muted/60 text-muted-foreground line-through'
                      : isCurrent
                        ? 'bg-primary/10 text-primary border border-primary/30 font-bold shadow-sm'
                        : 'bg-muted/30 text-muted-foreground'
                  }`}
                >
                  <span className="truncate mr-2">
                    {i + 1}. {ev.title}
                  </span>
                  <span className="shrink-0 text-xs font-semibold">
                    {isCompleted ? '✓' : isCurrent ? '▶ Atual' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </SoftCard>
      </div>

      {/* Ciclo de Entrega e Consequências Diferidas */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <SoftCard className="animate-float-in border-t-4 border-t-indigo-500 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ciclo de Entrega</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">Sprint {currentSprint}</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {Math.max(0, matchDeck.length - decisions.length)} dilema(s) restantes nesta sprint.
          </p>
        </SoftCard>

        <SoftCard className="animate-float-in border-t-4 border-t-amber-500 max-h-64 overflow-y-auto p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <h2 className="text-base font-bold text-foreground">Consequências que Retornaram</h2>
          </div>
          {appliedDelayedImpactsHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">Nenhum risco sistêmico retornou até o momento.</p>
          ) : (
            <div className="space-y-3">
              {appliedDelayedImpactsHistory.map((impact, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-3 text-xs sm:text-sm text-amber-900 border border-amber-200">
                  <p className="font-bold mb-0.5 flex items-center gap-1"><TrendingDown className="w-4 h-4" /> Eco de: {impact.sourceEventTitle}</p>
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
