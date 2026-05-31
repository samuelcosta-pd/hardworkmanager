import { CheckCircle2, Users2 } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { tallyVotes } from '@/lib/gameLogic';
import { ROLE_LABELS, type AlternativeKey } from '@/types';

export function VoteReveal() {
  const { votes, players, events, currentEventIndex, startDebate, resolveDecision } = useGameStore();
  const event = events[currentEventIndex];
  const round1 = votes.filter((v) => v.round === 1);
  const tally = tallyVotes(round1);

  const votersByAlt: Record<AlternativeKey, typeof players> = { a: [], b: [], c: [] };
  round1.forEach((v) => {
    const p = players.find((pp) => pp.id === v.playerId);
    if (p) votersByAlt[v.alternative].push(p);
  });

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      <div className="mb-6 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Revelação dos votos</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">{event.title}</h1>
      </div>

      <SoftCard
        className={`mb-6 animate-pop-in ${
          tally.unanimous ? 'shadow-[var(--shadow-success)]' : 'shadow-[var(--shadow-warning)]'
        }`}
      >
        <div className="flex items-center gap-3">
          {tally.unanimous ? (
            <CheckCircle2 className="h-6 w-6 text-success-foreground" />
          ) : (
            <Users2 className="h-6 w-6 text-warning-foreground" />
          )}
          <div>
            <p className="font-semibold">
              {tally.unanimous ? 'Decisão unânime!' : 'A equipe divergiu'}
            </p>
            <p className="text-sm text-muted-foreground">
              {tally.unanimous
                ? `Todos escolheram a alternativa ${tally.winner.toUpperCase()}.`
                : 'Será necessário um debate estruturado antes da segunda votação.'}
            </p>
          </div>
        </div>
      </SoftCard>

      <div className="space-y-3">
        {event.alternatives.map((alt) => {
          const voters = votersByAlt[alt.key];
          return (
            <SoftCard key={alt.key} className="animate-float-in" variant={voters.length === 0 ? 'muted' : 'default'}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-sm font-bold uppercase text-accent-foreground">
                  {alt.key}
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{alt.text}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {voters.length === 0 ? (
                      <span className="text-xs text-muted-foreground">Sem votos</span>
                    ) : (
                      voters.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs"
                        >
                          <Avatar3D initials={p.name.slice(0, 2)} role={p.role} size="sm" />
                          <span className="font-medium">{p.name}</span>
                          <span className="text-muted-foreground">· {ROLE_LABELS[p.role]}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </SoftCard>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        {tally.unanimous ? (
          <SoftButton size="lg" onClick={resolveDecision}>
            Aplicar decisão
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={startDebate}>
            Iniciar debate estruturado
          </SoftButton>
        )}
      </div>
    </div>
  );
}
