import { useState } from 'react';
import { Gauge, Heart, Sparkle, Clock, ShieldCheck, AlertTriangle, Lightbulb, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { MetricBar } from '@/components/ui/MetricBar';
import { useGameStore } from '@/store/gameStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MENTOR } from '@/data/avatars';
import type { Metrics } from '@/types';

function SvgTrendUp({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function SvgTrendDown({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}

export function ConsequenceFeedback() {
  const { decisions, metrics, nextEvent, gameOverReason, events, currentEventIndex, delayedImpactsTriggeredThisRound, goTo } = useGameStore();
  const [showPedagogicalDetails, setShowPedagogicalDetails] = useState(false);

  const decision = decisions && decisions.length > 0 ? decisions[decisions.length - 1] : null;
  const event = events && events.length > 0 ? events[currentEventIndex] || events[0] : null;
  const alt = (event && decision) ? event.alternatives.find((a) => a.key === decision.chosenAlternative) : null;

  if (!decision || !event || !alt) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
        <SoftCard className="w-full p-8 text-center animate-pop-in">
          <h2 className="text-xl font-bold text-foreground">Nenhuma decisão recente para exibir</h2>
          <p className="mt-2 text-sm text-muted-foreground">Retorne ao painel para prosseguir na simulação.</p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo('dashboard')}>
              Ir ao Painel
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  const isLast = currentEventIndex === (events?.length || 1) - 1;
  const ctaLabel = gameOverReason ? 'Ver desfecho do projeto' : isLast ? 'Ver debriefing final' : 'Avançar no projeto';

  const renderDeltaChip = (key: keyof Metrics, label: string) => {
    const v = alt.impacts[key] ?? 0;
    if (v === 0) return null;
    const isPositive = v > 0;

    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl border ${
        isPositive ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' : 'bg-rose-50/70 border-rose-200 text-rose-800'
      }`}>
        <span className="text-xs font-semibold">{label}</span>
        <span className="flex items-center gap-1 text-sm font-bold">
          {isPositive ? <SvgTrendUp className="w-4 h-4 text-emerald-600" /> : <SvgTrendDown className="w-4 h-4 text-rose-600" />}
          {isPositive ? `+${v}` : v}
        </span>
      </div>
    );
  };

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      {/* Cabeçalho */}
      <div className="mb-6 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Desfecho da Decisão</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">{decision.eventTitle}</h1>
      </div>

      {/* Alertas de Ecos e Impactos Diferidos */}
      {delayedImpactsTriggeredThisRound && delayedImpactsTriggeredThisRound.length > 0 && (
        <div className="mb-5 space-y-2 animate-pop-in">
          {delayedImpactsTriggeredThisRound.map((impact, i) => (
            <div key={i} className="flex items-start gap-3 bg-rose-50 p-4 rounded-2xl border border-rose-200 text-rose-900 shadow-sm">
              <Clock className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-rose-700">Eco do Passado: {impact.sourceEventTitle}</p>
                <p className="text-sm mt-0.5 leading-relaxed">{impact.narrative}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {alt.delayedImpacts && alt.delayedImpacts.length > 0 && (
        <div className="mb-5 flex items-start gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 shadow-sm animate-pop-in">
          <Clock className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Risco Sistêmico Registrado</p>
            <p className="text-sm mt-0.5">Esta escolha gerou um débito futuro que poderá retornar nas próximas sprints.</p>
          </div>
        </div>
      )}

      {/* INSIGHT CARD 1: Análise da Mentora Helena & Conceito PMBOK 7 */}
      <SoftCard className="mb-5 animate-float-in p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14 border-2 border-primary/20 shrink-0 shadow-sm">
            <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-foreground">{MENTOR.name} · Mentoria Ágil</p>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                alt.goodBad === 'good' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {alt.goodBad === 'good' ? 'Decisão Recomendada' : 'Decisão Arriscada'}
              </span>
            </div>
            
            <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
              "{decision.feedbackNarrative}"
            </p>

            {/* Conceito PMBOK 7 em Destaque */}
            <div className="mt-4 rounded-2xl bg-primary/5 p-3.5 border border-primary/20">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Princípio PMBOK 7 em Prática</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">{alt.pmbokConcept}</p>
            </div>
          </div>
        </div>
      </SoftCard>

      {/* INSIGHT CARD 2: Impacto nas Métricas */}
      <SoftCard className="mb-5 animate-pop-in p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
          Impacto Direto nas Barras de Desempenho
        </p>

        {/* Chips de Variação Imediata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
          {renderDeltaChip('capacidadeEntrega', 'Velocidade')}
          {renderDeltaChip('qualidadeProduto', 'Qualidade')}
          {renderDeltaChip('saudeEquipe', 'Saúde do Time')}
        </div>

        {/* Barras de Métricas com Níveis Atualizados */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <MetricBar label="Capacidade de Entrega (Velocity)" value={metrics.capacidadeEntrega} icon={<Gauge className="h-5 w-5 text-primary" />} />
          <MetricBar label="Qualidade do Produto" value={metrics.qualidadeProduto} icon={<Sparkle className="h-5 w-5 text-primary" />} />
          <MetricBar label="Saúde da Equipe" value={metrics.saudeEquipe} icon={<Heart className="h-5 w-5 text-primary" />} />
        </div>
      </SoftCard>

      {/* INSIGHT CARD 3: Sanfona Retrátil para Lições e Riscos Evitados */}
      <SoftCard className="mb-6 animate-float-in p-5">
        <button
          type="button"
          onClick={() => setShowPedagogicalDetails(!showPedagogicalDetails)}
          className="flex w-full items-center justify-between text-left text-sm font-bold text-foreground hover:text-primary transition-colors"
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <span>Lições Aprendidas e Riscos do Cenário</span>
          </div>
          {showPedagogicalDetails ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
        </button>

        {showPedagogicalDetails && (
          <div className="mt-4 space-y-4 pt-4 border-t border-slate-100 animate-in fade-in">
            {/* Lições Práticas */}
            <div className="rounded-2xl bg-muted/60 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Aprendizados Práticos</p>
              <ul className="text-xs text-slate-700 leading-relaxed list-disc list-inside space-y-1">
                {alt.learnings.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </div>

            {/* Riscos Evitados */}
            {alt.risksEvaded.length > 0 && (
              <div className="rounded-2xl bg-emerald-50/60 p-4 border border-emerald-100">
                <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Riscos Evitados</span>
                </div>
                <ul className="text-xs text-emerald-900 leading-relaxed list-disc list-inside space-y-1">
                  {alt.risksEvaded.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}

            {/* Outras Consequências / E se? */}
            {alt.otherConsequences.length > 0 && (
              <div className="rounded-2xl bg-amber-50/60 p-4 border border-amber-100">
                <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span>Cenários e Trade-offs Alternativos</span>
                </div>
                <ul className="text-xs text-amber-900 leading-relaxed list-disc list-inside space-y-1">
                  {alt.otherConsequences.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
      </SoftCard>

      {/* Alerta de Fim de Jogo Crítico */}
      {gameOverReason && (
        <SoftCard className="mb-6 border-2 border-rose-500 bg-rose-50 text-rose-900 shadow-lg animate-pop-in">
          <p className="font-bold text-base">Limite Crítico Atingido!</p>
          <p className="mt-1 text-sm">{gameOverReason}</p>
        </SoftCard>
      )}

      {/* Ação de Avanço */}
      <div className="mt-8 flex justify-end">
        <SoftButton size="lg" onClick={nextEvent}>
          {ctaLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
        </SoftButton>
      </div>
    </div>
  );
}
