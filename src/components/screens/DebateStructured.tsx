import { useEffect, useMemo, useState } from 'react';
import { Pause, Play, SkipForward, Timer, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { tallyVotes } from '@/lib/gameLogic';
import { ROLE_LABELS, type DebateSpeaker, type Player } from '@/types';

function buildOrder(players: Player[], minorityIds: string[]): DebateSpeaker[] {
  const pm = players.find((p) => p.role === 'pm')!;
  const nonPm = players.filter((p) => p.role !== 'pm');
  const minorityNonPm = nonPm.filter((p) => minorityIds.includes(p.id));
  const majorityNonPm = nonPm.filter((p) => !minorityIds.includes(p.id));
  const ordered = [...minorityNonPm, ...majorityNonPm];
  const list: DebateSpeaker[] = ordered.map((p, i) => ({
    playerId: p.id,
    playerName: p.name,
    playerRole: p.role,
    avatarImage: p.avatarImage,
    durationSeconds: 30,
    order: (i + 1) as 1 | 2 | 3,
  }));
  list.push({
    playerId: pm.id,
    playerName: pm.name,
    playerRole: pm.role,
    avatarImage: pm.avatarImage,
    durationSeconds: 20,
    order: (list.length + 1) as 1 | 2 | 3 | 4,
  });
  return list;
}

export function DebateStructured() {
  const { players, votes, beginRound2 } = useGameStore();
  const round1 = useMemo(() => votes.filter((v) => v.round === 1), [votes]);
  const tally = useMemo(() => tallyVotes(round1), [round1]);

  const speakers = useMemo(() => {
    const minorityKey = tally.tied
      ? tally.topAlternatives[0]
      : (Object.entries(tally.counts) as [string, number][])
          .filter(([, n]) => n > 0 && n < tally.counts[tally.winner])
          .sort((a, b) => a[1] - b[1])[0]?.[0] ?? tally.winner;
    const minorityIds = round1.filter((v) => v.alternative === minorityKey).map((v) => v.playerId);
    return buildOrder(players, minorityIds);
  }, [players, round1, tally]);

  const [idx, setIdx] = useState(0);
  const speaker = speakers[idx];
  const [secondsLeft, setSecondsLeft] = useState(speaker?.durationSeconds ?? 30);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    setSecondsLeft(speakers[idx]?.durationSeconds ?? 30);
    setRunning(true);
  }, [idx, speakers]);

  useEffect(() => {
    if (!running) return;
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running, secondsLeft]);

  const next = () => {
    if (idx < speakers.length - 1) setIdx(idx + 1);
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const isLast = idx === speakers.length - 1;
  const fullDur = speaker?.durationSeconds ?? 30;
  const progress = ((fullDur - secondsLeft) / fullDur) * 100;

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      <div className="mb-6 text-center animate-float-in">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MessageSquare className="h-5 w-5" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Debate Estruturado</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">Defendam seus pontos de vista</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Voz minoritária fala primeiro para evitar o efeito manada (Groupthink).
        </p>
      </div>

      {/* Card do Orador Atual */}
      <SoftCard className="mb-6 animate-pop-in text-center p-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar3D initials={speaker.playerName.slice(0, 2)} role={speaker.playerRole} imageUrl={(speaker as any).avatarImage} size="lg" />
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {speaker.order}
            </span>
          </div>
          
          <p className="mt-3 text-2xl font-bold text-foreground">{speaker.playerName}</p>
          <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
            {ROLE_LABELS[speaker.playerRole]}
          </span>

          {/* Cronômetro */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
              <Timer className="h-4 w-4" />
              <span>Tempo de Fala</span>
            </div>
            
            <p className="mt-1 font-mono text-6xl font-extrabold tabular-nums text-foreground">
              {mm}:{ss}
            </p>

            <div className="mt-4 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-muted shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                  secondsLeft <= 5 ? 'bg-rose-500' : 'bg-primary'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controles de Tempo */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <SoftButton variant="ghost" size="sm" onClick={() => setRunning((r) => !r)}>
              {running ? <Pause className="h-4 w-4 mr-1.5" /> : <Play className="h-4 w-4 mr-1.5" />}
              {running ? 'Pausar' : 'Retomar'}
            </SoftButton>
            
            {!isLast ? (
              <SoftButton size="sm" onClick={next}>
                <SkipForward className="h-4 w-4 mr-1.5" /> Próximo Colega
              </SoftButton>
            ) : (
              <SoftButton variant="success" size="sm" onClick={beginRound2}>
                Encerrar Debate · Votação Final <ArrowRight className="h-4 w-4 ml-1.5" />
              </SoftButton>
            )}
          </div>
        </div>
      </SoftCard>

      {/* Ordem dos Falantes */}
      <SoftCard variant="inset" className="p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Fila de Fala
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {speakers.map((s, i) => (
            <div
              key={s.playerId + i}
              className={`flex items-center gap-2.5 rounded-2xl p-2.5 text-xs transition-all ${
                i === idx
                  ? 'bg-card font-bold text-foreground shadow-sm ring-2 ring-primary/40'
                  : i < idx
                    ? 'bg-muted/40 text-muted-foreground opacity-60'
                    : 'bg-muted/60 text-muted-foreground'
              }`}
            >
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                i < idx ? 'bg-emerald-100 text-emerald-700' : i === idx ? 'bg-primary text-primary-foreground' : 'bg-slate-200 text-slate-600'
              }`}>
                {i < idx ? <Check className="h-3.5 w-3.5" /> : s.order}
              </div>
              <span className="truncate flex-1">{s.playerName}</span>
              <span className="text-xs text-muted-foreground">{s.durationSeconds}s</span>
            </div>
          ))}
        </div>
      </SoftCard>
    </div>
  );
}
