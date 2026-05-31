import { Coins, Heart, Sparkle, TrendingDown, TrendingUp } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import type { Metrics } from '@/types';

export function ConsequenceFeedback() {
  const { decisions, metrics, nextEvent, gameOverReason, events, currentEventIndex } = useGameStore();
  const decision = decisions[decisions.length - 1];
  if (!decision) return null;

  const event = events[currentEventIndex];
  const alt = event.alternatives.find((a) => a.key === decision.chosenAlternative)!;
  const isLast = currentEventIndex === events.length - 1;
  const ctaLabel = gameOverReason ? 'Ver desfecho' : isLast ? 'Ver desfecho final' : 'Próximo dilema';

  const renderDelta = (key: keyof Metrics) => {
    const v = alt.impacts[key] ?? 0;
    if (v === 0) return <span className="text-muted-foreground">sem variação</span>;
    const Icon = v > 0 ? TrendingUp : TrendingDown;
    const color = v > 0 ? 'text-success-foreground' : 'text-critical-foreground';
    return (
      <span className={`flex items-center gap-1 font-semibold ${color}`}>
        <Icon className="h-4 w-4" />
        {v > 0 ? '+' : ''}
        {v}
      </span>
    );
  };

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      <div className="mb-6 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Consequências</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">{decision.eventTitle}</h1>
      </div>

      <SoftCard className="mb-6 animate-pop-in">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Decisão tomada (Alternativa {decision.chosenAlternative.toUpperCase()})
        </p>
        <p className="mt-2 text-sm leading-relaxed">{decision.chosenText}</p>
        <div className="my-5 h-px bg-border" />
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Narrativa</p>
        <p className="mt-2 text-base leading-relaxed">{decision.feedbackNarrative}</p>
      </SoftCard>

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <SoftCard className="text-center" variant="muted">
          <Coins className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Orçamento</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('budget')}</div>
        </SoftCard>
        <SoftCard className="text-center" variant="muted">
          <Sparkle className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Qualidade</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('quality')}</div>
        </SoftCard>
        <SoftCard className="text-center" variant="muted">
          <Heart className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Moral</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('morale')}</div>
        </SoftCard>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <MetricBar label="Orçamento" value={metrics.budget} icon={<Coins className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade" value={metrics.quality} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Moral" value={metrics.morale} icon={<Heart className="h-5 w-5 text-primary" />} />
      </div>

      {gameOverReason && (
        <SoftCard className="mt-6 shadow-[var(--shadow-critical)]">
          <p className="font-semibold text-critical-foreground">Limite crítico atingido</p>
          <p className="mt-1 text-sm text-muted-foreground">{gameOverReason}</p>
        </SoftCard>
      )}

      <div className="mt-8 flex justify-end">
        <SoftButton size="lg" onClick={nextEvent}>
          {ctaLabel}
        </SoftButton>
      </div>
    </div>
  );
}
