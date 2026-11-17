import { ArrowRight, CheckCircle2, Users2 } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { ALT_BG, AltShape } from "@/components/game/AltShape";
import { DilemmaDrawer } from "@/components/game/DilemmaDrawer";
import { GameScreen } from "@/components/game/GameScreen";
import { Hint } from "@/components/game/Hint";
import { TeamBar, type PlayerStatus } from "@/components/game/TeamBar";
import { useGameStore } from "@/store/gameStore";
import { tallyVotes } from "@/lib/gameLogic";
import { shortTitle } from "@/lib/text";
import type { AlternativeKey, Player } from "@/types";

/** Apuração em colunas (padrão de resultados do Kahoot), com os avatares de quem votou. */
export function VoteReveal() {
  const { votes, players, events, currentEventIndex, startDebate, resolveDecision } =
    useGameStore();
  const event = events[currentEventIndex];
  const round1 = votes.filter((v) => v.round === 1);
  const tally = tallyVotes(round1);

  const votersByAlt: Record<AlternativeKey, Player[]> = { a: [], b: [], c: [] };
  const abstained: Player[] = [];
  const status: Record<string, PlayerStatus> = {};
  round1.forEach((v) => {
    const p = players.find((pp) => pp.id === v.playerId);
    if (!p) return;
    if (v.alternative === "abstain") {
      abstained.push(p);
      status[p.id] = "absteve";
    } else {
      votersByAlt[v.alternative].push(p);
      status[p.id] = "votou";
    }
  });

  const counts = (["a", "b", "c"] as AlternativeKey[])
    .map((k) => tally.counts[k])
    .sort((x, y) => y - x);
  const score =
    counts.filter((n) => n > 0).join(" × ") +
    (tally.abstentions ? ` · ${tally.abstentions} abstenção(ões)` : "");
  const max = Math.max(1, players.length);

  return (
    <GameScreen
      footer={<TeamBar status={status} />}
      hudAction={<DilemmaDrawer event={event} showAlternatives />}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 animate-float-in">
        <div className="flex flex-col gap-1">
          <span
            className={
              tally.unanimous
                ? "flex items-center gap-2 text-lg font-extrabold text-success"
                : "flex items-center gap-2 text-lg font-extrabold text-warning"
            }
          >
            {tally.unanimous ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <Users2 className="h-5 w-5" />
            )}
            {tally.unanimous ? "Unanimidade" : `Divergência · ${score}`}
          </span>
          <h1 className="m-0 text-3xl font-black tracking-tight sm:text-4xl">
            {tally.unanimous
              ? `Todos escolheram a ${tally.winner.toUpperCase()}`
              : "A equipe não concordou"}
          </h1>
          <span className="text-base font-bold text-muted-foreground">
            {tally.unanimous
              ? shortTitle(event.title)
              : tally.abstentions > 0
                ? "Debate: quem se absteve fala primeiro e conta o que faltou. Depois, cada um tem 30 segundos para defender a sua escolha."
                : "Debate: cada um tem 30 segundos para defender a sua escolha."}
          </span>
        </div>
        {tally.unanimous ? (
          <SoftButton size="lg" onClick={resolveDecision}>
            Aplicar decisão <ArrowRight className="h-5 w-5" />
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={startDebate}>
            Abrir debate <ArrowRight className="h-5 w-5" />
          </SoftButton>
        )}
      </div>

      <div className="grid flex-1 grid-cols-1 items-end gap-6 sm:grid-cols-3">
        {event.alternatives.map((alt) => {
          const voters = votersByAlt[alt.key];
          const n = voters.length;
          return (
            <div
              key={alt.key}
              className={
                n
                  ? "flex flex-col items-center gap-3"
                  : "flex flex-col items-center gap-3 opacity-60"
              }
            >
              <div className="flex min-h-14 flex-wrap justify-center gap-1.5">
                {voters.map((p) => (
                  <Hint key={p.id} text={p.name}>
                    <div
                      className="rounded-full ring-2 ring-white"
                      tabIndex={0}
                      aria-label={p.name}
                    >
                      <Avatar3D
                        initials={p.name.slice(0, 2)}
                        role={p.role}
                        imageUrl={p.avatarImage}
                        size="md"
                      />
                    </div>
                  </Hint>
                ))}
              </div>
              <Hint
                text={
                  <>
                    <b>{alt.key.toUpperCase()}:</b> {alt.text}
                  </>
                }
              >
                <div
                  tabIndex={0}
                  aria-label={`Alternativa ${alt.key.toUpperCase()}: ${alt.text}`}
                  className={`${ALT_BG[alt.key]} flex w-full max-w-64 cursor-help items-start justify-center rounded-t-2xl rounded-b-md pt-3 text-4xl font-black text-white transition-all duration-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary`}
                  style={{ height: n ? 48 + Math.round((220 * n) / max) : 16 }}
                >
                  {n > 0 && n}
                </div>
              </Hint>
              <Hint
                text={
                  <>
                    <b>{alt.key.toUpperCase()}:</b> {alt.text}
                  </>
                }
              >
                <span className="flex cursor-help items-center gap-2 text-2xl font-black">
                  <AltShape k={alt.key} size={22} />
                  {alt.key.toUpperCase()}
                </span>
              </Hint>
            </div>
          );
        })}
      </div>

      {abstained.length > 0 && (
        <p className="m-0 text-center text-base font-bold text-muted-foreground">
          Abstenção: {abstained.map((p) => p.name).join(", ")}
        </p>
      )}
    </GameScreen>
  );
}
