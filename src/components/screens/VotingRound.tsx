import { useState } from 'react';
import { EyeOff, Lock } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type AlternativeKey } from '@/types';

interface Props {
  round: 1 | 2;
}

export function VotingRound({ round }: Props) {
  const { players, events, currentEventIndex, currentVoterIndex, castVote, finalizeRound1, finalizeRound2 } =
    useGameStore();
  const event = events[currentEventIndex];
  const [handoff, setHandoff] = useState(true);

  const allVoted = currentVoterIndex >= players.length;
  const player = players[currentVoterIndex];

  if (allVoted) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6">
        <SoftCard className="w-full text-center animate-pop-in">
          <Lock className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">Todos os votos registrados</h2>
          <p className="mt-2 text-muted-foreground">
            {round === 1
              ? 'Reúna a equipe ao redor do dispositivo para a revelação.'
              : 'Hora de aplicar a decisão final.'}
          </p>
          <div className="mt-6">
            <SoftButton size="lg" onClick={round === 1 ? finalizeRound1 : finalizeRound2}>
              {round === 1 ? 'Revelar votos' : 'Aplicar decisão'}
            </SoftButton>
          </div>
        </SoftCard>
      </div>
    );
  }

  if (handoff) {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6">
        <SoftCard className="w-full text-center animate-pop-in">
          <EyeOff className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
            Passe o dispositivo para
          </p>
          <h2 className="mt-2 text-3xl font-bold">{player.name}</h2>
          <p className="text-sm text-muted-foreground">{ROLE_LABELS[player.role]}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Os demais jogadores devem desviar o olhar.
          </p>
          <div className="mt-6">
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
      <div className="mb-6 flex items-center gap-3 animate-float-in">
        <Avatar3D initials={player.name.slice(0, 2)} role={player.role} imageUrl={player.avatarImage} />
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Voto secreto · Rodada {round}
          </p>
          <p className="font-semibold">{player.name}</p>
        </div>
      </div>

      <SoftCard className="mb-4 animate-float-in" variant="inset">
        <p className="text-sm font-medium text-foreground">{event.title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{event.domainTag}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
      </SoftCard>

      <div className="space-y-3">
        {event.alternatives.map((alt, i) => (
          <button
            key={alt.key}
            onClick={() => handleVote(alt.key)}
            className="group block w-full rounded-3xl bg-card p-5 text-left shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-lg)] animate-float-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-base font-bold text-accent-foreground uppercase">
                {alt.key}
              </div>
              <p className="text-sm leading-relaxed">{alt.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
