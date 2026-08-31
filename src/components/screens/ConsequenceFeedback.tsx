import { Gauge, Heart, Sparkle, TrendingDown, TrendingUp, BookOpen, AlertTriangle, Lightbulb, ShieldCheck, Clock } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MENTOR } from '@/data/avatars';
import type { Metrics } from '@/types';

export function ConsequenceFeedback() {
  const { decisions, metrics, nextEvent, gameOverReason, events, currentEventIndex, delayedImpactsTriggeredThisRound } = useGameStore();
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

      {delayedImpactsTriggeredThisRound.length > 0 && (
        <div className="mb-6 space-y-3 animate-pop-in">
          {delayedImpactsTriggeredThisRound.map((impact, i) => (
            <div key={i} className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-200">
              <Clock className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-red-800">Consequência de: {impact.sourceEventTitle}</p>
                <p className="text-sm text-red-700">{impact.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {alt.delayedImpacts && alt.delayedImpacts.length > 0 && (
        <div className="mb-6 flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200 animate-pop-in">
          <Clock className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-amber-800">Aviso</p>
            <p className="text-sm text-amber-700">Esta decisão gerou um impacto sistêmico que retornará no futuro.</p>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100 mb-6 animate-float-in">
        <Avatar className="h-14 w-14 border-2 border-primary/20 shrink-0">
          <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
          <AvatarFallback>HE</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">{MENTOR.name} : Análise da Decisão</p>
          <p className="text-sm leading-relaxed text-slate-600">{alt.goodBad}</p>
        </div>
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

      {/* Metric Deltas */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <SoftCard className="text-center" variant="muted">
          <Gauge className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Capacidade de Entrega</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('capacidadeEntrega')}</div>
        </SoftCard>
        <SoftCard className="text-center" variant="muted">
          <Sparkle className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Qualidade do Produto</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('qualidadeProduto')}</div>
        </SoftCard>
        <SoftCard className="text-center" variant="muted">
          <Heart className="mx-auto h-5 w-5 text-primary" />
          <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Saúde da Equipe</p>
          <div className="mt-1 flex items-center justify-center">{renderDelta('saudeEquipe')}</div>
        </SoftCard>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mb-6">
        <MetricBar label="Capacidade de Entrega (Velocity)" value={metrics.capacidadeEntrega} icon={<Gauge className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade do Produto" value={metrics.qualidadeProduto} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Saúde da Equipe" value={metrics.saudeEquipe} icon={<Heart className="h-5 w-5 text-primary" />} />
      </div>

      {/* Risks & Other Consequences */}
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <SoftCard className="animate-float-in">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <p className="text-xs font-semibold uppercase tracking-wider text-green-700">Riscos Evitados / Criados</p>
          </div>
          <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
            {alt.risksEvaded.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">E se outra opção fosse escolhida?</p>
          </div>
          <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
            {alt.otherConsequences.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </SoftCard>
      </div>

      {/* PMBOK Learning Section */}
      <SoftCard className="mb-6 animate-float-in border-t-4 border-t-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-800">O que aprendemos?</h2>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">Conceito PMBOK 7</p>
          <p className="text-sm font-medium text-blue-900">{alt.pmbokConcept}</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Aprendizado Prático</p>
          </div>
          <ul className="text-sm text-slate-700 leading-relaxed list-disc list-inside space-y-1">
            {alt.learnings.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </SoftCard>

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

