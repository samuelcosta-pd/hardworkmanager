import { ArrowRight, LayoutGrid, Target } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Chip } from "@/components/game/Chip";
import { METRIC_META } from "@/components/game/GameHud";
import { INITIAL_METRICS, MATCH_DILEMMA_COUNT } from "@/lib/gameLogic";
import { useGameStore } from "@/store/gameStore";
import { MENTOR } from "@/data/avatars";

const RULE: Record<string, string> = {
  capacidadeEntrega: "abaixo de 40: fim de jogo",
  qualidadeProduto: "abaixo de 40: fim de jogo",
  saudeEquipe: "abaixo de 40: fim de jogo",
  conhecimentoOrganizacional: "abaixo de 20: perdas de Entrega dobram",
};

/** Missão do projeto em uma tela: o que entregar, como é a partida e as métricas iniciais. */
export function ProjectBriefing() {
  const goTo = useGameStore((s) => s.goTo);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-8">
      <main className="flex flex-1 flex-col justify-center gap-6 animate-float-in">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <img
            src={MENTOR.imagePath}
            alt="Helena"
            className="h-20 w-20 shrink-0 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary"
          />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-extrabold text-primary">A missão de vocês</span>
            <h1 className="m-0 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Modernizar o sistema acadêmico sem quebrar a equipe
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <section className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card p-6">
            <span className="flex items-center gap-2.5 text-xl font-black">
              <Target className="h-6 w-6 text-primary" /> O que entregar
            </span>
            <div className="flex flex-wrap gap-2">
              <Chip className="bg-muted text-foreground">Matrícula online</Chip>
              <Chip className="bg-muted text-foreground">Histórico mais rápido</Chip>
              <Chip className="bg-muted text-foreground">Integração com bolsas</Chip>
            </div>
          </section>
          <section className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-6 md:w-96">
            <span className="flex items-center gap-2.5 text-xl font-black">
              <LayoutGrid className="h-6 w-6 text-primary" /> A partida
            </span>
            <span className="text-lg font-bold text-muted-foreground">
              {MATCH_DILEMMA_COUNT} dilemas em 2 ciclos de 3, com revisão ao fim de cada ciclo.
            </span>
          </section>
        </div>

        <section className="flex flex-col gap-3">
          <span className="text-xl font-black">Vocês começam assim</span>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METRIC_META.map((m) => (
              <div key={m.key} className="flex flex-col gap-1 rounded-2xl bg-muted p-4">
                <span className="flex items-center gap-2 text-base font-extrabold text-muted-foreground">
                  <span className="text-success">{m.icon}</span>
                  {m.label}
                </span>
                <span className="text-3xl font-black tabular-nums">{INITIAL_METRICS[m.key]}</span>
                <span className="text-sm font-bold text-muted-foreground">{RULE[m.key]}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="mt-8 flex justify-end">
        <SoftButton size="lg" onClick={() => goTo("dashboard")}>
          Ir para a sala de comando <ArrowRight className="h-5 w-5" />
        </SoftButton>
      </div>
    </div>
  );
}
