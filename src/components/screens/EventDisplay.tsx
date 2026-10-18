import { useState, useEffect } from "react";
import { SoftCard } from "@/components/ui/SoftCard";
import { SoftButton } from "@/components/ui/SoftButton";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { useCountdown } from "@/hooks/useCountdown";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS } from "@/types";
import { EmailView, SlackView, TicketView } from "@/components/comms/CommViews";
import { Sparkles, Users, AlertTriangle, Layers, ArrowRight, HelpCircle } from "lucide-react";
import { detectTechTerms } from "@/data/glossary";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function EventDisplay() {
  const { events, matchDeck, currentEventIndex, pendingDelayedImpacts, timerSettings, goTo } = useGameStore();
  const event = events && events.length > 0 ? events[currentEventIndex] || events[0] : null;

  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState<number | null>(null);

  const countdown = useCountdown({
    durationSeconds: timerSettings.readingSeconds,
    enabled: timerSettings.enabled && timerSettings.readingSeconds > 0,
    onExpire: () => {
      // Inicia contagem regressiva de 5 segundos para transição automática
      setAutoAdvanceCountdown(5);
    },
  });

  useEffect(() => {
    if (autoAdvanceCountdown === null) return;
    if (autoAdvanceCountdown <= 0) {
      goTo("voting_round_1");
      return;
    }

    const timer = setInterval(() => {
      setAutoAdvanceCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [autoAdvanceCountdown, goTo]);

  if (!event) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
        <SoftCard className="w-full p-8 text-center animate-pop-in">
          <h2 className="text-xl font-bold text-foreground">Dilema não disponível</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Retorne ao painel executivo para abrir o próximo dilema da partida.
          </p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo("dashboard")}>
              Voltar ao Painel
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  const imminentEco = pendingDelayedImpacts?.find((p) => p.remainingEvents === 1);
  const descriptionTechTerms = detectTechTerms(event.description, 4);

  const processName = event.resourceProcess
    ? event.resourceProcess === 'planejar'
      ? 'Planejar o Gerenciamento dos Recursos'
      : event.resourceProcess === 'estimar'
        ? 'Estimar Recursos'
        : event.resourceProcess === 'adquirir'
          ? 'Adquirir Recursos'
          : event.resourceProcess === 'liderar'
            ? 'Liderar a Equipe'
            : 'Monitorar e Controlar Recursos'
    : null;

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      {/* Cabeçalho, Cronômetro de Discussão e Ação de Voltar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 animate-float-in">
        <button
          type="button"
          onClick={() => goTo("dashboard")}
          className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-lg">←</span> Voltar ao Painel
        </button>

        <div className="flex items-center gap-2.5">
          {timerSettings.enabled && timerSettings.readingSeconds > 0 && (
            <CountdownTimer
              formatted={countdown.formatted}
              progressPercent={countdown.progressPercent}
              isUrgent={countdown.isUrgent}
              isExpired={countdown.isExpired}
              isRunning={countdown.isRunning}
              label="Discussão em Equipe"
              onToggle={countdown.toggle}
              showControls
              size="sm"
            />
          )}

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5 rounded-2xl">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              Dilema {currentEventIndex + 1} de {matchDeck?.length || 10}
            </span>
          </div>
        </div>
      </div>

      {/* Banner de Tempo de Leitura Expirado com Auto-Avanço em 5 segundos */}
      {autoAdvanceCountdown !== null && (
        <div className="mb-6 flex items-center justify-between gap-3 p-4 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 animate-pop-in shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white font-extrabold text-sm">
              {autoAdvanceCountdown}s
            </span>
            <div>
              <p className="font-bold text-sm">Tempo de discussão coletiva encerrado!</p>
              <p className="text-xs text-amber-900">Iniciando a votação secreta automaticamente...</p>
            </div>
          </div>
          <SoftButton size="sm" onClick={() => goTo("voting_round_1")}>
            Votar Agora <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </SoftButton>
        </div>
      )}

      {/* Alerta de Radar se houver Eco Iminente */}
      {pendingDelayedImpacts && pendingDelayedImpacts.length > 0 && (
        <div
          className={`mb-6 flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm animate-pop-in ${
            imminentEco
              ? "bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-200"
              : "bg-amber-50 border-amber-200 text-amber-900"
          }`}
        >
          <AlertTriangle
            className={`w-4 h-4 shrink-0 ${imminentEco ? "text-rose-600" : "text-amber-600"}`}
          />
          <span className="font-semibold">
            {imminentEco
              ? `Atenção: O eco de "${imminentEco.sourceEventTitle}" detonará no término deste dilema!`
              : `Radar Ativo: Há ${pendingDelayedImpacts.length} risco(s) sistêmico(s) pendente(s) em contagem no radar.`}
          </span>
        </div>
      )}

      {/* Identificação Pedagógica do Dilema sob o PMBOK 8 */}
      <div className="mb-6 animate-float-in">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {processName && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
              <Layers className="w-3 h-3 text-blue-700" />
              Processo PMBOK 8: {processName}
            </span>
          )}
          {event.resourceType && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {event.resourceType === 'humano' ? 'Recurso Humano' : 'Recurso Físico/Virtual'}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">{event.title}</h1>
        <p className="mt-1.5 text-base sm:text-lg text-muted-foreground">
          Liderança responsável:{" "}
          <span className="font-bold text-foreground">
            {ROLE_LABELS[event.responsibleRole]}
          </span>{" "}
          · <span className="text-sm font-medium">{event.domainTag}</span>
        </p>
      </div>

      {/* Visualização do Canal Corporativo */}
      {event.communicationType === "email" && <EmailView event={event} />}
      {event.communicationType === "slack" && <SlackView event={event} />}
      {event.communicationType === "ticket" && <TicketView event={event} />}

      {/* Glossário rápido da descrição se termos técnicos foram detectados */}
      {descriptionTechTerms.length > 0 && (
        <TooltipProvider delayDuration={200}>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground bg-muted/40 p-2.5 rounded-2xl border border-slate-200/60">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <HelpCircle className="h-3.5 w-3.5 text-primary" /> Termos de Recursos identificados:
            </span>
            {descriptionTechTerms.map(({ term, definition }) => (
              <Tooltip key={term}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="underline decoration-dotted font-semibold text-primary hover:text-primary/80 transition-colors cursor-help"
                  >
                    {term}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs rounded-xl bg-slate-900 text-white p-2.5 text-xs">
                  <p className="font-bold text-primary capitalize mb-1">{term}</p>
                  <p className="text-slate-300 leading-relaxed">{definition}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      )}

      {/* Dica da Mentora para o 1º Dilema (Modo Aprenda Jogando) */}
      {currentEventIndex === 0 ? (
        <SoftCard className="mt-6 animate-float-in border-l-4 border-l-primary" variant="inset">
          <div className="flex items-start gap-3.5">
            <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                Dica da Mentora Helena
              </p>
              <p className="mt-1.5 text-base sm:text-lg leading-relaxed text-slate-700">
                Discutam a situação em equipe considerando as restrições de cada papel. Em seguida, iniciem a votação secreta passando o dispositivo de mão em mão.
              </p>
            </div>
          </div>
        </SoftCard>
      ) : (
        <SoftCard className="mt-6 animate-float-in text-center" variant="inset">
          <p className="text-base text-muted-foreground">
            Discutam as alternativas em grupo. Quando estiverem prontos, passem o dispositivo para cada líder votar em sigilo.
          </p>
        </SoftCard>
      )}

      <div className="mt-6 flex justify-end">
        <SoftButton size="lg" onClick={() => goTo("voting_round_1")}>
          Iniciar votação secreta <ArrowRight className="ml-2 h-4 w-4" />
        </SoftButton>
      </div>
    </div>
  );
}
