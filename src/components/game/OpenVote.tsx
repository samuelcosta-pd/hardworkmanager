import { useState } from "react";
import { ArrowRight, Users } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { ALT_BG, AltShape } from "@/components/game/AltShape";
import { DilemmaDrawer } from "@/components/game/DilemmaDrawer";
import { GameScreen } from "@/components/game/GameScreen";
import { TeamBar, type PlayerStatus } from "@/components/game/TeamBar";
import { TimerRing } from "@/components/game/TimerRing";
import { useCountdown } from "@/hooks/useCountdown";
import { useGameStore } from "@/store/gameStore";
import { cn } from "@/lib/utils";
import { ROLE_LABELS, type GameEvent, type VoteChoice } from "@/types";

/**
 * Votação final aberta: depois do debate as posições já são públicas, então cada pessoa marca
 * a sua escolha na própria linha, numa só tela. O GP não pode se abster e desempata.
 */
export function OpenVote({ event }: { event: GameEvent }) {
  const { players, timerSettings, submitOpenVote } = useGameStore();
  const [choices, setChoices] = useState<Record<string, VoteChoice>>({});
  const timerOn = timerSettings.enabled && timerSettings.votingSeconds > 0;

  const countdown = useCountdown({
    durationSeconds: timerSettings.votingSeconds,
    enabled: timerOn,
    // Tempo esgotado: quem não marcou se abstém (menos o GP, que precisa votar).
    onExpire: () =>
      setChoices((c) => {
        const next = { ...c };
        players.forEach((p) => {
          if (!next[p.id] && p.role !== "pm") next[p.id] = "abstain";
        });
        return next;
      }),
  });

  const pm = players.find((p) => p.role === "pm");
  const ready = players.every((p) => choices[p.id]);
  const pmMissing = pm && !choices[pm.id];

  const status: Record<string, PlayerStatus> = {};
  players.forEach((p) => {
    const c = choices[p.id];
    status[p.id] = c ? (c === "abstain" ? "absteve" : "votou") : "aguarda";
  });

  return (
    <GameScreen
      footer={<TeamBar status={status} />}
      hudAction={
        <DilemmaDrawer
          event={event}
          showAlternatives
          timer={
            timerOn
              ? {
                  secondsLeft: countdown.secondsLeft,
                  totalSeconds: timerSettings.votingSeconds,
                  label: "Votação final",
                }
              : undefined
          }
        />
      }
      className="max-w-6xl"
    >
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="flex items-center gap-2 text-base font-extrabold text-primary">
            <Users className="h-5 w-5" /> Votação final · aberta
          </span>
          <span className="text-2xl font-black sm:text-3xl">
            Depois do debate, cada um marca a sua escolha
          </span>
          <span className="text-base font-bold text-muted-foreground">
            Sem passar o computador. Em empate, vale a escolha do Gerente de Projetos (GP).
          </span>
        </div>
        {timerOn && (
          <TimerRing
            secondsLeft={countdown.secondsLeft}
            totalSeconds={timerSettings.votingSeconds}
            label="Equipe"
            size={96}
          />
        )}
      </div>

      <div className="flex flex-col gap-3">
        {players.map((p) => {
          const isPm = p.role === "pm";
          const c = choices[p.id];
          return (
            <div
              key={p.id}
              className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3"
            >
              <Avatar3D
                initials={p.name.slice(0, 2)}
                role={p.role}
                imageUrl={p.avatarImage}
                size="sm"
              />
              <div className="flex min-w-0 flex-1 flex-col leading-tight">
                <span className="truncate text-xl font-black">{p.name}</span>
                <span className="text-sm font-bold text-muted-foreground">
                  {isPm ? "Gerente de Projetos (GP) · desempata" : ROLE_LABELS[p.role]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {event.alternatives.map((alt) => (
                  <button
                    key={alt.key}
                    type="button"
                    aria-pressed={c === alt.key}
                    aria-label={`${p.name} vota ${alt.key.toUpperCase()}`}
                    onClick={() => setChoices({ ...choices, [p.id]: alt.key })}
                    className={cn(
                      ALT_BG[alt.key],
                      "flex h-14 w-24 items-center justify-center gap-2 rounded-xl text-2xl font-black text-white transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary",
                      c && c !== alt.key && "opacity-30",
                      c === alt.key && "ring-4 ring-white",
                    )}
                  >
                    <AltShape k={alt.key} size={18} /> {alt.key.toUpperCase()}
                  </button>
                ))}
                {!isPm && (
                  <button
                    type="button"
                    aria-pressed={c === "abstain"}
                    onClick={() => setChoices({ ...choices, [p.id]: "abstain" })}
                    className={cn(
                      "h-14 rounded-xl border-2 border-border px-4 text-base font-extrabold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary",
                      c === "abstain" && "border-white text-foreground",
                    )}
                  >
                    Abster-me
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {countdown.isExpired && pmMissing && (
          <span className="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-base font-extrabold text-primary">
            Tempo esgotado. O GP precisa marcar uma alternativa.
          </span>
        )}
        <SoftButton size="lg" disabled={!ready} onClick={() => submitOpenVote(choices)}>
          Aplicar decisão <ArrowRight className="h-5 w-5" />
        </SoftButton>
      </div>
    </GameScreen>
  );
}
