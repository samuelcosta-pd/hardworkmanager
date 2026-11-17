import { ArrowRight, Flag, OctagonX } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { LEVEL_BG, LEVEL_TEXT, METRIC_META, levelOf } from "@/components/game/GameHud";
import { useGameStore } from "@/store/gameStore";
import { cn } from "@/lib/utils";

/**
 * Tela de encerramento: deixa claro que a partida acabou, por ter chegado ao fim dos dilemas
 * ou por uma métrica crítica ter caído abaixo de 40. Depois vem a revisão final e o debriefing.
 */
export function GameEnd() {
  const { decisions, matchDeck, metrics, gameOverReason, goTo } = useGameStore();
  const success = !gameOverReason;
  const recommended = decisions.filter((d) => {
    const ev = matchDeck.find((e) => e.id === d.eventId);
    return ev?.alternatives.find((a) => a.key === d.chosenAlternative)?.goodBad === "good";
  }).length;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 py-8 text-center sm:px-8">
      <div className="flex flex-col items-center gap-4 animate-pop-in">
        <span
          className={cn(
            "flex h-24 w-24 items-center justify-center rounded-full",
            success ? "bg-success text-[#0e1633]" : "bg-critical text-[#0e1633]",
          )}
        >
          {success ? <Flag className="h-12 w-12" /> : <OctagonX className="h-12 w-12" />}
        </span>
        <span className="text-xl font-black tracking-[0.3em] text-primary">FIM DE JOGO</span>
        <h1 className="m-0 text-5xl font-black tracking-tight sm:text-6xl">
          {success ? "Projeto concluído!" : "O projeto parou"}
        </h1>
        <p className="m-0 max-w-2xl text-xl font-bold text-muted-foreground">
          {success
            ? `A equipe decidiu os ${decisions.length} dilemas sem deixar nenhuma métrica crítica cair abaixo de 40.`
            : gameOverReason}
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-3 animate-float-in lg:grid-cols-4">
        {METRIC_META.map((m) => {
          const v = metrics[m.key];
          const level = levelOf(m.key, v);
          return (
            <div
              key={m.key}
              className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card p-4 text-left"
            >
              <span
                className={cn(
                  "flex items-center gap-1.5 text-sm font-extrabold",
                  LEVEL_TEXT[level],
                )}
              >
                {m.icon}
                <span className="truncate text-muted-foreground">{m.label}</span>
              </span>
              <span className="text-4xl font-black tabular-nums">{v}</span>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn("h-full rounded-full", LEVEL_BG[level])}
                  style={{ width: `${v}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="m-0 text-lg font-extrabold">
        {decisions.length} de {matchDeck.length} dilemas decididos · {recommended} escolha(s)
        recomendada(s)
      </p>

      <SoftButton
        size="lg"
        onClick={() => goTo(success ? "sprint_review" : "debriefing")}
        className="animate-float-in"
      >
        {success ? "Ver a revisão final" : "Ver o debriefing"} <ArrowRight className="h-5 w-5" />
      </SoftButton>
    </div>
  );
}
