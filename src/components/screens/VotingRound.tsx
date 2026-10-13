import { useState } from "react";
import { EyeOff, Lock, ArrowLeft, HelpCircle, AlertTriangle } from "lucide-react";
import { SoftCard } from "@/components/ui/SoftCard";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS, type AlternativeKey } from "@/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { detectTechTerms } from "@/data/glossary";

interface Props {
  round: 1 | 2;
}

export function VotingRound({ round }: Props) {
  const {
    players,
    events,
    matchDeck,
    currentEventIndex,
    currentVoterIndex,
    pendingDelayedImpacts,
    castVote,
    finalizeRound1,
    finalizeRound2,
    goTo,
  } = useGameStore();

  const event = events && events.length > 0 ? events[currentEventIndex] || events[0] : null;
  const [handoff, setHandoff] = useState(true);

  const allVoted = currentVoterIndex >= (players?.length || 0) && (players?.length || 0) > 0;
  const player = players && players[currentVoterIndex] ? players[currentVoterIndex] : null;

  // 1. Quando todos já votaram nesta rodada
  if (allVoted) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6">
        <SoftCard className="w-full text-center animate-pop-in p-8">
          <Lock className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">Todos os votos registrados!</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {round === 1
              ? "Reúna toda a equipe ao redor da tela para ver se houve consenso ou se será necessário um debate estruturado."
              : "Votação final concluída. Hora de aplicar a decisão colegiada e conferir o impacto no projeto."}
          </p>
          <div className="mt-6">
            <SoftButton size="lg" onClick={round === 1 ? finalizeRound1 : finalizeRound2}>
              {round === 1 ? "Revelar votos da equipe" : "Aplicar decisão final"}
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  // 2. Proteção caso não haja evento ou jogadores configurados
  if (!event || (!player && !allVoted)) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
        <SoftCard className="w-full p-8 text-center animate-pop-in">
          <h2 className="text-xl font-bold text-foreground">Sessão de votação aguardando dados</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Configure os integrantes da equipe para iniciar o jogo.
          </p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo("setup")}>
              Ir para Configuração
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  const imminentEco = pendingDelayedImpacts?.find((p) => p.remainingEvents === 1);

  const handleVote = (key: AlternativeKey) => {
    castVote(key);
    setHandoff(true);
  };

  // 3. Tela de Bloqueio (Handoff Intermediário para Voto Secreto)
  if (handoff) {
    if (!player) return null;
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
        <SoftCard className="w-full animate-pop-in p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">
            <EyeOff className="h-8 w-8 text-primary" />
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Votação Secreta · Rodada {round}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground">Passe o dispositivo para:</h2>

          <div className="my-6 flex flex-col items-center gap-2 rounded-2xl bg-muted/60 p-4">
            <Avatar3D
              initials={player.name.slice(0, 2)}
              role={player.role}
              imageUrl={player.avatarImage}
              size="lg"
            />
            <p className="text-xl font-bold text-foreground">{player.name}</p>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {ROLE_LABELS[player.role]}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Mantenha seu voto confidencial. Apenas você deve visualizar as opções a seguir.
          </p>

          <div className="mt-6">
            <SoftButton size="lg" className="w-full" onClick={() => setHandoff(false)}>
              Sou {player.name}, estou pronto
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  // 4. Tela Ativa de Votação
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-8">
      {/* Cabeçalho de Navegação e Contexto do Jogador */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setHandoff(true)}
          className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          Jogador {currentVoterIndex + 1} de {players.length} · Rodada {round}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-3 animate-float-in">
        <Avatar3D
          initials={player!.name.slice(0, 2)}
          role={player!.role}
          imageUrl={player!.avatarImage}
          size="md"
        />
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Voto Secreto de:
          </p>
          <p className="font-bold text-foreground text-lg">
            {player!.name} ·{" "}
            <span className="font-normal text-muted-foreground">{ROLE_LABELS[player!.role]}</span>
          </p>
        </div>
      </div>

      {/* Resumo do Dilema */}
      <SoftCard className="mb-4 animate-float-in" variant="inset">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
            Dilema {currentEventIndex + 1} de {matchDeck?.length || 10}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-muted-foreground">{event.domainTag}</span>
        </div>
        <h2 className="mt-1.5 text-lg sm:text-xl font-bold text-foreground">{event.title}</h2>
      </SoftCard>

      {/* Alerta de Radar se houver Eco Iminente na Votação */}
      {pendingDelayedImpacts && pendingDelayedImpacts.length > 0 && (
        <div
          className={`mb-4 flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm animate-pop-in ${
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
              : `Radar: Há ${pendingDelayedImpacts.length} débito(s) sistêmico(s) ativo(s) no radar.`}
          </span>
        </div>
      )}

      {/* Cards de Alternativas com Formatação Uniforme */}
      <TooltipProvider delayDuration={200}>
        <div className="space-y-4">
          {event.alternatives.map((alt, i) => {
            const techTerms = detectTechTerms(alt.text);
            return (
              <button
                key={alt.key}
                type="button"
                onClick={() => handleVote(alt.key)}
                className="group block w-full rounded-3xl bg-card p-5 sm:p-6 text-left shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-soft-lg)] border-2 border-transparent hover:border-primary/40 animate-float-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-black text-xl uppercase shadow-sm group-hover:scale-105 transition-transform">
                    {alt.key}
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="font-semibold text-foreground text-base sm:text-lg leading-relaxed group-hover:text-primary transition-colors">
                      {alt.text}
                    </p>
                  </div>

                  {/* Ícone de ajuda com termos técnicos */}
                  {techTerms.length > 0 && (
                    <Tooltip>
                      <TooltipTrigger
                        type="button"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 mt-0.5 text-muted-foreground/50 hover:text-primary transition-colors"
                        aria-label="Ver termos técnicos"
                      >
                        <HelpCircle className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="end"
                        className="max-w-xs rounded-2xl bg-slate-900 p-3 text-left shadow-xl"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Termos Técnicos
                        </p>
                        <div className="space-y-2">
                          {techTerms.map(({ term, definition }) => (
                            <div key={term}>
                              <p className="text-xs font-semibold text-white capitalize">{term}</p>
                              <p className="text-xs text-slate-300 leading-relaxed">{definition}</p>
                            </div>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}
