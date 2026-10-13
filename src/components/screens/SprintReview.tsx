import { CheckCircle2, TrendingDown, Gauge, Sparkle, Heart } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { MetricBar } from '@/components/ui/MetricBar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useGameStore } from '@/store/gameStore';
import { MENTOR } from '@/data/avatars';

export function SprintReview() {
  const { 
    currentSprint, 
    metrics, 
    decisions, 
    matchDeck,
    pendingDelayedImpacts, 
    appliedDelayedImpactsHistory,
    startNextSprint,
    goTo
  } = useGameStore();

  const sprintDecisions = decisions.slice(-3);
  const isMatchComplete = decisions.length >= matchDeck.length;

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <div className="mb-8 text-center animate-float-in">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-100">
          <CheckCircle2 className="h-8 w-8 text-indigo-600" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Encerramento de Ciclo</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Ciclo de Entregas {currentSprint} Concluído</h1>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 animate-float-in">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
          <AvatarFallback>HE</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Revisão do Ciclo : {MENTOR.name}</h2>
          <p className="text-slate-600">
            "Mais um ciclo fechado. Confiram como ficaram nossas métricas principais após as últimas decisões. Lembrem-se que atalhos tomados hoje podem retornar como dívida no futuro."
          </p>
        </div>
      </div>

      <section className="mb-8 grid gap-4 md:grid-cols-3 animate-pop-in">
        <MetricBar label="Capacidade de Entrega" value={metrics.capacidadeEntrega} icon={<Gauge className="h-5 w-5 text-primary" />} />
        <MetricBar label="Qualidade do Produto" value={metrics.qualidadeProduto} icon={<Sparkle className="h-5 w-5 text-primary" />} />
        <MetricBar label="Saúde da Equipe" value={metrics.saudeEquipe} icon={<Heart className="h-5 w-5 text-primary" />} />
      </section>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <SoftCard className="animate-float-in">
          <h2 className="text-lg font-bold mb-4">Decisões deste Ciclo</h2>
          <div className="space-y-3">
            {sprintDecisions.map((d, i) => (
              <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm">
                <p className="font-semibold text-slate-800">{d.eventTitle}</p>
                <p className="text-slate-600 mt-1 line-clamp-2">{d.chosenText}</p>
              </div>
            ))}
          </div>
        </SoftCard>

        <SoftCard className="animate-float-in">
          <h2 className="text-lg font-bold mb-4">Radar de Impactos Diferidos</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">Ameaças Pendentes</p>
              {pendingDelayedImpacts.length === 0 ? (
                <p className="text-sm text-slate-500 italic">Nenhum risco sistêmico mapeado no radar.</p>
              ) : (
                <div className="space-y-2">
                  {pendingDelayedImpacts.map((p, i) => (
                    <div key={i} className="flex justify-between items-center bg-amber-50 p-2 rounded text-sm text-amber-800 border border-amber-100">
                      <span>Eco de: {p.sourceEventTitle}</span>
                      <span className="font-semibold">Em {p.remainingEvents} turnos</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">Impactos Sofridos até Aqui</p>
              {appliedDelayedImpactsHistory.length === 0 ? (
                <p className="text-sm text-slate-500 italic">Nenhum impacto passado retornou ainda.</p>
              ) : (
                <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                  {appliedDelayedImpactsHistory.map((a, i) => (
                    <div key={i} className="bg-red-50 p-2 rounded text-sm text-red-800 border border-red-100 flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{a.sourceEventTitle}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SoftCard>
      </div>

      <div className="flex justify-center mt-8 animate-float-in">
        {isMatchComplete ? (
          <SoftButton size="lg" onClick={() => goTo('debriefing')}>
            Avançar para o Debriefing Final
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={startNextSprint}>
            Iniciar Ciclo {currentSprint + 1}
          </SoftButton>
        )}
      </div>
    </div>
  );
}
