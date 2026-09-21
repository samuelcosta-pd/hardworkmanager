import { SoftCard } from "@/components/ui/SoftCard";
import { SoftButton } from "@/components/ui/SoftButton";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS } from "@/types";
import { EmailView, SlackView, TicketView } from "@/components/comms/CommViews";
import { Sparkles, Users, AlertTriangle } from "lucide-react";

export function EventDisplay() {
  const { events, matchDeck, currentEventIndex, pendingDelayedImpacts, goTo } = useGameStore();
  const event = events && events.length > 0 ? events[currentEventIndex] || events[0] : null;

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

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      {/* Cabeçalho e Ação de Voltar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 animate-float-in">
        <button
          type="button"
          onClick={() => goTo("dashboard")}
          className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-lg">←</span> Voltar ao Painel
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
          <Sparkles className="h-3.5 w-3.5" />
          <span>
            Dilema {currentEventIndex + 1} de {matchDeck?.length || 10}
          </span>
        </div>
      </div>

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

      <div className="mb-6 animate-float-in">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{event.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Liderança responsável:{" "}
          <span className="font-semibold text-foreground">
            {ROLE_LABELS[event.responsibleRole]}
          </span>{" "}
          · <span className="text-xs">{event.domainTag}</span>
        </p>
      </div>

      {/* Visualização do Canal Corporativo */}
      {event.communicationType === "email" && <EmailView event={event} />}
      {event.communicationType === "slack" && <SlackView event={event} />}
      {event.communicationType === "ticket" && <TicketView event={event} />}

      {/* Dica da Mentora para o 1º Dilema (Modo Aprenda Jogando) */}
      {currentEventIndex === 0 ? (
        <SoftCard className="mt-6 animate-float-in border-l-4 border-l-primary" variant="inset">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Dica da Mentora Helena
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                Discutam a situação em equipe. Em seguida, cliquem abaixo e passem o dispositivo de
                mão em mão para cada um registrar seu voto secreto.
              </p>
            </div>
          </div>
        </SoftCard>
      ) : (
        <SoftCard className="mt-6 animate-float-in text-center" variant="inset">
          <p className="text-sm text-muted-foreground">
            Discutam brevemente as opções. Cada jogador passará o dispositivo para registrar seu
            voto secreto.
          </p>
        </SoftCard>
      )}

      <div className="mt-6 flex justify-end">
        <SoftButton size="lg" onClick={() => goTo("voting_round_1")}>
          Iniciar votação secreta
        </SoftButton>
      </div>
    </div>
  );
}
