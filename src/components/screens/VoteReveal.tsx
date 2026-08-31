import { CheckCircle2, Users2, ArrowRight } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { tallyVotes } from '@/lib/gameLogic';
import { ROLE_LABELS, type AlternativeKey } from '@/types';

function parseAlternativeText(text: string): { title: string; subtitle: string } {
  const parts = text.split(': ');
  if (parts.length > 1) {
    return { title: parts[0].trim(), subtitle: parts.slice(1).join(': ').trim() };
  }
  return { title: text, subtitle: '' };
}

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
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Apuração da Rodada 1</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">{event.title}</h1>
      </div>

      {/* Banner de Status de Consenso */}
      <SoftCard
        className={`mb-6 animate-pop-in border-2 ${
          tally.unanimous ? 'border-emerald-500/40 bg-emerald-50/40 shadow-sm' : 'border-amber-500/40 bg-amber-50/40 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            tally.unanimous ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {tally.unanimous ? (
              <CheckCircle2 className="h-7 w-7" />
            ) : (
              <Users2 className="h-7 w-7" />
            )}
          </div>
          <div>
            <p className="font-bold text-lg text-foreground">
              {tally.unanimous ? 'Decisão 100% Unânime!' : 'A equipe divergiu nos votos!'}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tally.unanimous
                ? `Todos concordaram com a Alternativa ${tally.winner.toUpperCase()}. A decisão será aplicada de imediato.`
                : 'É hora de abrir o debate estruturado para alinhar as visões antes da votação final.'}
            </p>
          </div>
        </div>
      </SoftCard>

      {/* Opções com os Avatares dos Jogadores Agrupados */}
      <div className="space-y-3.5">
        {event.alternatives.map((alt) => {
          const voters = votersByAlt[alt.key];
          const hasVotes = voters.length > 0;
          const { title, subtitle } = parseAlternativeText(alt.text);

          return (
            <SoftCard 
              key={alt.key} 
              className={`animate-float-in transition-all ${
                hasVotes ? 'ring-2 ring-primary/30 shadow-md' : 'opacity-60 bg-muted/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-base font-extrabold uppercase ${
                  hasVotes ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {alt.key}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-base leading-relaxed">{alt.text}</p>

                  {/* Avatares dos Votantes nesta opção */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                    {voters.length === 0 ? (
                      <span className="text-xs text-muted-foreground italic">Nenhum voto</span>
                    ) : (
                      voters.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold shadow-sm border border-slate-200"
                        >
                          <Avatar3D initials={p.name.slice(0, 2)} role={p.role} imageUrl={p.avatarImage} size="sm" />
                          <span className="text-foreground">{p.name}</span>
                          <span className="text-muted-foreground font-normal">({ROLE_LABELS[p.role].split(' ')[0]})</span>
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

      {/* Ação de Avanço */}
      <div className="mt-8 flex justify-end">
        {tally.unanimous ? (
          <SoftButton size="lg" onClick={resolveDecision}>
            Aplicar decisão agora <ArrowRight className="ml-1.5 h-4 w-4" />
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={startDebate}>
            Iniciar debate estruturado <ArrowRight className="ml-1.5 h-4 w-4" />
          </SoftButton>
        )}
      </div>
    </div>
  );
}
