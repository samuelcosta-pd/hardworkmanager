import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, MessageSquare, SkipForward } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { AltRevealButton, DilemmaDrawer } from "@/components/game/DilemmaDrawer";
import { GameScreen } from "@/components/game/GameScreen";
import { TeamBar } from "@/components/game/TeamBar";
import { TimerRing } from "@/components/game/TimerRing";
import { useGameStore } from "@/store/gameStore";
import { tallyVotes } from "@/lib/gameLogic";
import { ROLE_LABELS, type AlternativeKey, type DebateSpeaker, type Player } from "@/types";

/**
 * Ordem de fala: (1) quem se absteve, (2) quem votou na alternativa menos escolhida,
 * (3) quem votou na mais escolhida e, por último, o GP, que sintetiza. Todos têm 30 s.
 * Quando o tempo acaba, a vez passa sozinha para o próximo: ninguém fala além do tempo.
 */
function buildOrder(players: Player[], voteCountOf: (playerId: string) => number): DebateSpeaker[] {
  const pm = players.find((p) => p.role === "pm");
  const nonPm = players
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.id !== pm?.id)
    // abstenção = 0 votos → fala primeiro; depois, do menos ao mais votado; empate mantém a ordem de cadastro
    .sort((x, y) => voteCountOf(x.p.id) - voteCountOf(y.p.id) || x.i - y.i)
    .map(({ p }) => p);

  const list: DebateSpeaker[] = nonPm.map((p, i) => ({
    playerId: p.id,
    playerName: p.name,
    playerRole: p.role,
    avatarImage: p.avatarImage,
    durationSeconds: 30,
    order: (i + 1) as DebateSpeaker["order"],
  }));
  if (pm) {
    list.push({
      playerId: pm.id,
      playerName: pm.name,
      playerRole: pm.role,
      avatarImage: pm.avatarImage,
      durationSeconds: 30,
      order: (list.length + 1) as DebateSpeaker["order"],
    });
  }
  return list;
}

export function DebateStructured() {
  const { players, votes, beginRound2, events, currentEventIndex } = useGameStore();
  const event = events[currentEventIndex];
  const round1 = useMemo(() => votes.filter((v) => v.round === 1), [votes]);
  const tally = useMemo(() => tallyVotes(round1), [round1]);

  const speakers = useMemo(() => {
    const voteCountOf = (playerId: string) => {
      const v = round1.find((x) => x.playerId === playerId);
      if (!v || v.alternative === "abstain") return 0;
      return tally.counts[v.alternative];
    };
    return buildOrder(players, voteCountOf);
  }, [players, round1, tally]);

  const voteOf = (playerId: string): AlternativeKey | "abstain" | undefined =>
    round1.find((v) => v.playerId === playerId)?.alternative;

  const [idx, setIdx] = useState(0);
  const speaker = speakers[idx];
  const [secondsLeft, setSecondsLeft] = useState(speaker?.durationSeconds ?? 30);

  useEffect(() => {
    setSecondsLeft(speakers[idx]?.durationSeconds ?? 30);
  }, [idx, speakers]);

  // O tempo de fala não pode ser pausado: a pressão do tempo faz parte da dinâmica.
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  const isLast = idx === speakers.length - 1;
  const timeUp = secondsLeft <= 0;

  // Tempo esgotado: a vez passa automaticamente. No último orador (o GP), avisa e segue
  // sozinho para a votação final depois de 3 s.
  useEffect(() => {
    if (!timeUp) return;
    if (!isLast) {
      setIdx((i) => i + 1);
      return;
    }
    const t = setTimeout(beginRound2, 3000);
    return () => clearTimeout(t);
  }, [timeUp, isLast, beginRound2]);

  if (!speaker) return null;
  const isPm = speaker.playerRole === "pm";
  const spVote = voteOf(speaker.playerId);

  return (
    <GameScreen
      footer={<TeamBar status={{ [speaker.playerId]: "falando" }} />}
      hudAction={
        event ? (
          <DilemmaDrawer
            event={event}
            showAlternatives
            timer={{ secondsLeft, totalSeconds: speaker.durationSeconds, label: "Tempo de fala" }}
          />
        ) : undefined
      }
    >
      <div className="grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_400px]">
        <section
          className="flex flex-col items-center gap-4 text-center animate-pop-in"
          key={speaker.playerId}
        >
          <span className="flex items-center gap-2 text-lg font-extrabold text-primary">
            <MessageSquare className="h-5 w-5" />
            {isPm ? "Síntese do Gerente de Projetos" : "Debate · a minoria fala primeiro"}
          </span>
          <div className="rounded-full ring-4 ring-primary">
            <Avatar3D
              initials={speaker.playerName.slice(0, 2)}
              role={speaker.playerRole}
              imageUrl={speaker.avatarImage}
              size="lg"
              className="h-36 w-36 text-4xl"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-4xl font-black">{speaker.playerName}</span>
            <span className="text-lg font-extrabold text-muted-foreground">
              {ROLE_LABELS[speaker.playerRole]}
            </span>
            {spVote && spVote !== "abstain" && event && (
              <span className="mt-1 flex items-center gap-2 text-lg font-extrabold text-muted-foreground">
                Defende
                <AltRevealButton
                  k={spVote}
                  text={event.alternatives.find((a) => a.key === spVote)?.text ?? ""}
                />
              </span>
            )}
            {spVote === "abstain" && (
              <span className="mt-1 text-lg font-extrabold text-muted-foreground">
                Absteve-se: conte o que faltou para decidir
              </span>
            )}
          </div>
          <TimerRing
            secondsLeft={secondsLeft}
            totalSeconds={speaker.durationSeconds}
            label="Tempo de fala"
            size={140}
          />
          {timeUp && isLast && (
            <span
              role="status"
              className="rounded-2xl bg-primary px-5 py-2.5 text-lg font-black text-primary-foreground animate-pop-in"
            >
              Tempo esgotado. Indo para a votação final…
            </span>
          )}
        </section>

        <aside className="flex flex-col gap-3">
          <span className="text-sm font-black tracking-wide text-muted-foreground">
            ORDEM DE FALA
          </span>
          {speakers.map((s, i) => {
            const v = voteOf(s.playerId);
            const active = i === idx;
            return (
              <div
                key={s.playerId + i}
                className={
                  active
                    ? "flex items-center gap-3 rounded-2xl border-2 border-primary bg-muted px-4 py-3"
                    : "flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                }
              >
                <span
                  className={
                    i < idx
                      ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success text-[#0e1633]"
                      : active
                        ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-black text-primary-foreground"
                        : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-base font-black text-muted-foreground"
                  }
                >
                  {i < idx ? <Check className="h-4 w-4" strokeWidth={3} /> : s.order}
                </span>
                <Avatar3D
                  initials={s.playerName.slice(0, 2)}
                  role={s.playerRole}
                  imageUrl={s.avatarImage}
                  size="sm"
                />
                <div className="flex min-w-0 flex-1 flex-col leading-tight">
                  <span className="truncate text-lg font-black">{s.playerName}</span>
                  <span className="text-sm font-bold text-muted-foreground">
                    {s.playerRole === "pm"
                      ? "GP · síntese"
                      : v === "abstain"
                        ? "Absteve-se"
                        : v
                          ? `Votou ${v.toUpperCase()}`
                          : ""}
                  </span>
                </div>
                <span
                  className={
                    active
                      ? "text-sm font-extrabold text-primary"
                      : "text-sm font-bold text-muted-foreground"
                  }
                >
                  {s.durationSeconds} s
                </span>
              </div>
            );
          })}
          <div className="mt-2 flex gap-3">
            {!isLast ? (
              <SoftButton className="flex-1" onClick={() => setIdx(idx + 1)}>
                Terminei de falar <SkipForward className="h-5 w-5" />
              </SoftButton>
            ) : (
              <SoftButton className="flex-1" onClick={beginRound2}>
                Votação final <ArrowRight className="h-5 w-5" />
              </SoftButton>
            )}
          </div>
        </aside>
      </div>
    </GameScreen>
  );
}
