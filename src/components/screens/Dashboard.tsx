import { useState } from "react";
import {
  Gauge,
  Heart,
  Sparkle,
  AlertCircle,
  AlertTriangle,
  TrendingDown,
  ArrowRight,
  Clock,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react";
import { SoftCard } from "@/components/ui/SoftCard";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { MetricBar } from "@/components/ui/MetricBar";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS } from "@/types";

export function Dashboard() {
  const [page, setPage] = useState<0 | 1>(0);
  const {
    players,
    metrics,
    matchDeck,
    currentEventIndex,
    decisions,
    beginEvent,
    currentSprint,
    appliedDelayedImpactsHistory,
    pendingDelayedImpacts,
    delayedImpactsTriggeredThisRound,
    goTo,
  } = useGameStore();

  const currentEvent =
    matchDeck && matchDeck.length > 0 ? matchDeck[currentEventIndex] || matchDeck[0] : null;

  if (!currentEvent || matchDeck.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
        <SoftCard className="w-full p-8 text-center animate-pop-in">
          <h2 className="text-2xl font-bold text-foreground">Nenhuma partida ativa</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Configure sua equipe de liderança para iniciar uma nova simulação do Sistema de Gestão
            Acadêmica.
          </p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo("setup")}>
              Configurar Equipe
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-6">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-4 animate-float-in">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
            Painel Executivo
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Projeto Sistema de Gestão Acadêmica : Sala de Comando
          </h1>
        </div>
        <div className="flex -space-x-2">
          {players.map((p) => (
            <Avatar3D
              key={p.id}
              initials={p.name.slice(0, 2)}
              role={p.role}
              imageUrl={p.avatarImage}
              className="ring-4 ring-background"
            />
          ))}
        </div>
      </header>

      {/* Alerta de Consequência Imediata (Eco Detonado na Rodada) */}
      {page === 0 && delayedImpactsTriggeredThisRound && delayedImpactsTriggeredThisRound.length > 0 && (
        <div className="mb-5 rounded-2xl bg-rose-50 border-2 border-rose-400 p-5 shadow-sm animate-pop-in">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-rose-200 text-rose-800 shrink-0">
              <AlertTriangle className="w-6 h-6 text-rose-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-black uppercase tracking-wider bg-rose-200 text-rose-900 px-2.5 py-0.5 rounded-full border border-rose-300">
                  💥 Alerta de Sistema: Consequência Detonou Nesta Rodada
                </span>
              </div>
              {delayedImpactsTriggeredThisRound.map((imp, idx) => (
                <div key={idx} className="mt-2">
                  <p className="text-sm font-bold text-rose-950">Eco de: {imp.sourceEventTitle}</p>
                  <p className="text-xs sm:text-sm text-rose-900 mt-0.5 leading-relaxed font-medium">
                    {imp.narrative}
                  </p>
                  {imp.metricsDelta && (
                    <div className="mt-2.5 flex flex-wrap gap-2 pt-2 border-t border-rose-200">
                      <span className="text-xs font-bold text-rose-800">Impacto aplicado:</span>
                      {Object.entries(imp.metricsDelta).map(([k, v]) => {
                        if (!v) return null;
                        const label =
                          k === "capacidadeEntrega"
                            ? "Velocidade"
                            : k === "qualidadeProduto"
                              ? "Qualidade"
                              : k === "saudeEquipe"
                                ? "Saúde"
                                : "Conhecimento";
                        return (
                          <span
                            key={k}
                            className="text-xs font-extrabold bg-white border border-rose-300 px-2 py-0.5 rounded text-rose-800"
                          >
                            {label}: {v > 0 ? `+${v}` : v}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3 Métricas Principais */}
      {page === 0 && (<>
      <section className="mb-5 grid gap-4 md:grid-cols-3">
        <MetricBar
          label="Capacidade de Entrega"
          value={metrics.capacidadeEntrega}
          icon={<Gauge className="h-5 w-5 text-primary" />}
        />
        <MetricBar
          label="Qualidade do Produto"
          value={metrics.qualidadeProduto}
          icon={<Sparkle className="h-5 w-5 text-primary" />}
        />
        <MetricBar
          label="Saúde da Equipe"
          value={metrics.saudeEquipe}
          icon={<Heart className="h-5 w-5 text-primary" />}
        />
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card do Próximo Dilema */}
        <SoftCard className="md:col-span-2 animate-float-in p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Dilema {currentEventIndex + 1} de {matchDeck.length} · Ciclo {currentSprint}
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
              {currentEvent.domainTag}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-foreground">{currentEvent.title}</h2>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Liderança responsável:{" "}
            <span className="font-semibold text-foreground">
              {ROLE_LABELS[currentEvent.responsibleRole]}
            </span>
          </p>

          <div className="mt-6 flex justify-end">
            <SoftButton size="lg" onClick={beginEvent}>
              Abrir dilema <ArrowRight className="ml-1.5 h-4 w-4" />
            </SoftButton>
          </div>
        </SoftCard>

        {/* Card de Progresso com Lista dos Dilemas da Partida */}
        <SoftCard className="animate-float-in p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Progresso da Partida
          </p>
          <p className="mt-2 text-3xl font-extrabold text-foreground">
            {decisions.length}
            <span className="text-base font-normal text-muted-foreground">
              {" "}
              / {matchDeck.length}
            </span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            dilemas concluídos (Ciclo {currentSprint})
          </p>

          <div className="mt-4 space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
            {matchDeck.map((ev, i) => {
              const isCompleted = i < decisions.length;
              const isCurrent = i === currentEventIndex;
              return (
                <div
                  key={ev.id || i}
                  className={`rounded-xl p-2.5 text-xs font-medium flex items-center justify-between transition-all ${
                    isCompleted
                      ? "bg-muted/60 text-muted-foreground line-through"
                      : isCurrent
                        ? "bg-primary/10 text-primary border border-primary/30 font-bold shadow-sm"
                        : "bg-muted/30 text-muted-foreground"
                  }`}
                >
                  <span className="truncate mr-2">
                    {i + 1}. {ev.title}
                  </span>
                  <span className="shrink-0 text-xs font-semibold">
                    {isCompleted ? "✓" : isCurrent ? "▶ Atual" : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </SoftCard>
      </div>
      <div className="mt-5 flex justify-end">
        <SoftButton variant="ghost" onClick={() => setPage(1)}>
          Ver radar de impactos <ArrowRight className="ml-1.5 h-4 w-4" />
        </SoftButton>
      </div>
      </>)}

      {/* Ciclo de Entrega e Radar de Impactos Diferidos */}
      {page === 1 && (<>
      <div className="grid gap-6 md:grid-cols-2">
        <SoftCard className="animate-float-in border-t-4 border-t-indigo-500 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Ciclo de Entrega
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">Ciclo {currentSprint}</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {Math.max(0, matchDeck.length - decisions.length)} dilema(s) restantes no projeto.
          </p>
        </SoftCard>

        {/* Radar Completo de Impactos Diferidos (Ecos) */}
        <SoftCard className="animate-float-in border-t-4 border-t-amber-500 p-6">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-amber-500" />
              <h2 className="text-base font-bold text-foreground">Radar de Impactos Diferidos</h2>
            </div>
            {pendingDelayedImpacts.length > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {pendingDelayedImpacts.length} ativo(s)
              </span>
            )}
          </div>

          <div className="space-y-4">
            {/* Seção 1: Ameaças Pendentes (Ecos em Contagem) */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Ameaças Pendentes no Radar
              </p>
              {pendingDelayedImpacts.length === 0 ? (
                <p className="text-xs text-muted-foreground italic bg-muted/30 p-2.5 rounded-lg border border-dashed border-slate-200">
                  Nenhum débito sistêmico ativo no radar. Decisões sustentáveis protegem o projeto!
                </p>
              ) : (
                <div className="space-y-2">
                  {pendingDelayedImpacts.map((p, i) => {
                    const isImminent = p.remainingEvents === 1;
                    return (
                      <div
                        key={p.id || i}
                        className={`p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                          isImminent
                            ? "bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-200"
                            : "bg-amber-50/80 border-amber-200 text-amber-950"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                          <span className="font-bold">Eco de: {p.sourceEventTitle}</span>
                          <span
                            className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                              isImminent
                                ? "bg-rose-200 text-rose-900 animate-pulse"
                                : "bg-amber-200/80 text-amber-900"
                            }`}
                          >
                            {isImminent
                              ? "⚡ Detona no PRÓXIMO dilema!"
                              : `⏳ Detona em ${p.remainingEvents} turnos`}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {p.impact.narrative}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Seção 2: Consequências que já Retornaram */}
            <div className="pt-3 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <TrendingDown className="w-3.5 h-3.5 text-slate-500" />
                Impactos Sofridos até Aqui ({appliedDelayedImpactsHistory.length})
              </p>
              {appliedDelayedImpactsHistory.length === 0 ? (
                <p className="text-xs text-muted-foreground italic">
                  Nenhum impacto passado retornou ainda.
                </p>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {appliedDelayedImpactsHistory.map((impact, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 rounded-xl p-2.5 text-xs text-slate-800 border border-slate-200"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                        <span className="font-semibold text-slate-900">
                          Eco de: {impact.sourceEventTitle}
                        </span>
                        {impact.metricsDelta && (
                          <div className="flex gap-1">
                            {Object.entries(impact.metricsDelta).map(([k, v]) => {
                              if (!v) return null;
                              const label =
                                k === "capacidadeEntrega"
                                  ? "Vel."
                                  : k === "qualidadeProduto"
                                    ? "Qual."
                                    : "Saúde";
                              return (
                                <span
                                  key={k}
                                  className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800"
                                >
                                  {label}: {v}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                        {impact.narrative}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SoftCard>
      </div>
      <div className="mt-5 flex justify-start">
        <SoftButton variant="ghost" onClick={() => setPage(0)}>
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Voltar ao painel
        </SoftButton>
      </div>
      </>)}
    </div>
  );
}
