import { useState } from 'react';
import { EyeOff, Lock, ArrowLeft } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type AlternativeKey } from '@/types';

interface Props {
  round: 1 | 2;
}

export function VotingRound({ round }: Props) {
  const { players, events, matchDeck, currentEventIndex, currentVoterIndex, castVote, finalizeRound1, finalizeRound2, goTo } =
    useGameStore();
  
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
              ? 'Reúna toda a equipe ao redor da tela para ver se houve consenso ou se será necessário um debate estruturado.'
              : 'Votação final concluída. Hora de aplicar a decisão colegiada e conferir o impacto no projeto.'}
          </p>
          <div className="mt-6">
            <SoftButton size="lg" onClick={round === 1 ? finalizeRound1 : finalizeRound2}>
              {round === 1 ? 'Revelar votos da equipe' : 'Aplicar decisão final'}
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
          <p className="mt-2 text-sm text-muted-foreground">Configure os integrantes da equipe para iniciar o jogo.</p>
          <div className="mt-6 flex justify-center">
            <SoftButton size="lg" onClick={() => goTo('setup')}>
              Ir para Configuração
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  // 3. Tela de passagem de dispositivo (Handoff)
  if (handoff) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6">
        <SoftCard className="w-full text-center animate-pop-in p-8">
          <div className="mx-auto mb-3 flex justify-center">
            {player.avatarImage ? (
              <img src={player.avatarImage} alt={player.name} className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-primary/20 bg-slate-100" />
            ) : (
              <EyeOff className="h-12 w-12 text-primary" />
            )}
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
            Passe o dispositivo para
          </p>
          <h2 className="mt-1 text-3xl font-bold text-foreground">{player.name}</h2>
          <span className="mt-2 inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-semibold text-primary">
            {ROLE_LABELS[player.role]}
          </span>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            🔒 Os demais colegas devem desviar o olhar para garantir o sigilo do voto nesta rodada.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <SoftButton variant="ghost" size="md" onClick={() => goTo('event_display')}>
              <ArrowLeft className="h-4 w-4 mr-1.5" /> Reexaminar Dilema
            </SoftButton>
            <SoftButton size="lg" onClick={() => setHandoff(false)}>
              Estou sozinho com a tela
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  const handleVote = (alt: AlternativeKey) => {
    castVote(alt);
    setHandoff(true);
  };

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      {/* Cabeçalho de Navegação e Identificação */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 animate-float-in">
        <button
          type="button"
          onClick={() => setHandoff(true)}
          className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </button>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
          Jogador {currentVoterIndex + 1} de {players.length} · Rodada {round}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-3 animate-float-in">
        <Avatar3D initials={player.name.slice(0, 2)} role={player.role} imageUrl={player.avatarImage} size="md" />
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Voto Secreto de:
          </p>
          <p className="font-bold text-foreground text-lg">{player.name} · <span className="font-normal text-muted-foreground">{ROLE_LABELS[player.role]}</span></p>
        </div>
      </div>

      {/* Resumo do Dilema */}
      <SoftCard className="mb-5 animate-float-in" variant="inset">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Dilema {currentEventIndex + 1} de {matchDeck?.length || 3}</span>
          <span className="text-xs font-semibold text-muted-foreground">{event.domainTag}</span>
        </div>
        <h2 className="mt-1 text-base font-bold text-foreground">{event.title}</h2>
      </SoftCard>

      {/* Cards de Alternativas com Formatação Uniforme */}
      <div className="space-y-3.5">
        {event.alternatives.map((alt, i) => (
          <button
            key={alt.key}
            type="button"
            onClick={() => handleVote(alt.key)}
            className="group block w-full rounded-3xl bg-card p-5 text-left shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-soft-lg)] border-2 border-transparent hover:border-primary/40 animate-float-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-extrabold text-lg uppercase shadow-sm group-hover:scale-105 transition-transform">
                {alt.key}
              </div>
              
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="font-semibold text-foreground text-base leading-relaxed group-hover:text-primary transition-colors">
                  {alt.text}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
