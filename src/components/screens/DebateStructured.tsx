import { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, SkipForward, Timer } from 'lucide-react';
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
    durationSeconds: 30,
    order: (i + 1) as 1 | 2 | 3,
  }));
  list.push({
    playerId: pm.id,
    playerName: pm.name,
    playerRole: pm.role,
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
      <div className="mb-6 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Debate estruturado</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">Cada voz tem seu tempo</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Minoria fala primeiro · Maioria responde · PM arbitra por último
        </p>
      </div>

      <SoftCard className="mb-6 animate-pop-in">
        <div className="flex flex-col items-center text-center">
          <Avatar3D initials={speaker.playerName.slice(0, 2)} role={speaker.playerRole} size="lg" />
          <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
            Falante {speaker.order} de {speakers.length}
          </p>
          <p className="text-2xl font-bold">{speaker.playerName}</p>
          <p className="text-sm text-muted-foreground">{ROLE_LABELS[speaker.playerRole]}</p>

          <div className="mt-6 flex items-center gap-2 text-muted-foreground">
            <Timer className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wider">Tempo</span>
          </div>
          <p className="mt-2 font-mono text-7xl font-bold tabular-nums text-primary">
            {mm}:{ss}
          </p>
          <div className="mt-4 h-2 w-full max-w-xs overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                secondsLeft === 0 ? 'bg-critical' : 'bg-primary'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-6 flex gap-2">
            <SoftButton variant="ghost" onClick={() => setRunning((r) => !r)}>
              {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {running ? 'Pausar' : 'Retomar'}
            </SoftButton>
            {!isLast ? (
              <SoftButton onClick={next}>
                <SkipForward className="h-4 w-4" /> Próximo falante
              </SoftButton>
            ) : (
              <SoftButton variant="success" onClick={beginRound2}>
                Encerrar debate · Rodada 2
              </SoftButton>
            )}
          </div>
        </div>
      </SoftCard>

      <SoftCard variant="inset">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Ordem completa
        </p>
        <div className="space-y-2">
          {speakers.map((s, i) => (
            <div
              key={s.playerId + i}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-all ${
                i === idx
                  ? 'bg-card font-semibold shadow-[var(--shadow-soft)]'
                  : i < idx
                    ? 'text-muted-foreground line-through'
                    : 'text-muted-foreground'
              }`}
            >
              <span className="w-5 text-xs">{s.order}.</span>
              <Avatar3D initials={s.playerName.slice(0, 2)} role={s.playerRole} size="sm" />
              <span className="flex-1">{s.playerName}</span>
              <span className="text-xs">{s.durationSeconds}s</span>
            </div>
          ))}
        </div>
      </SoftCard>
    </div>
  );
}
