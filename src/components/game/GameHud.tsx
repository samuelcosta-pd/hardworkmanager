import { BookOpen, Gauge, Heart, Sparkle } from "lucide-react";
import type { ReactNode } from "react";
import { useGameStore } from "@/store/gameStore";
import type { Metrics } from "@/types";
import { cn } from "@/lib/utils";
import { RulesButton } from "./RulesButton";

type Level = "stable" | "warning" | "critical";

/** Limiares de cor: Conhecimento usa 20 (penalidade) como nível crítico. */
export function levelOf(key: keyof Metrics, value: number): Level {
  if (key === "conhecimentoOrganizacional") {
    if (value < 20) return "critical";
    if (value < 35) return "warning";
    return "stable";
  }
  if (value < 40) return "critical";
  if (value < 70) return "warning";
  return "stable";
}

export const LEVEL_TEXT: Record<Level, string> = {
  stable: "text-success",
  warning: "text-warning",
  critical: "text-critical",
};
export const LEVEL_BG: Record<Level, string> = {
  stable: "bg-success",
  warning: "bg-warning",
  critical: "bg-critical",
};
export const LEVEL_LABEL: Record<Level, string> = {
  stable: "estável",
  warning: "atenção",
  critical: "crítico",
};

export const METRIC_META: { key: keyof Metrics; label: string; long: string; icon: ReactNode }[] = [
  {
    key: "capacidadeEntrega",
    label: "Entrega",
    long: "Capacidade de Entrega",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    key: "qualidadeProduto",
    label: "Qualidade",
    long: "Qualidade do Produto",
    icon: <Sparkle className="h-5 w-5" />,
  },
  {
    key: "saudeEquipe",
    label: "Equipe",
    long: "Saúde da Equipe",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    key: "conhecimentoOrganizacional",
    label: "Conhecimento",
    long: "Conhecimento Organizacional",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

function HudMetric({
  metricKey,
  label,
  icon,
  value,
  delta,
}: {
  metricKey: keyof Metrics;
  label: string;
  icon: ReactNode;
  value: number;
  delta?: number;
}) {
  const level = levelOf(metricKey, value);
  return (
    <div
      className="flex min-w-0 items-center gap-1.5 sm:gap-2.5"
      title={`${label}: ${value} (${LEVEL_LABEL[level]})`}
    >
      <div
        className={cn(
          "hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted sm:flex",
          LEVEL_TEXT[level],
        )}
      >
        {icon}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-baseline justify-between gap-1.5">
          <span className="truncate text-xs font-bold text-muted-foreground sm:text-sm">
            {label}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-lg font-black tabular-nums leading-none sm:text-xl">{value}</span>
            {delta ? (
              <span
                className={cn(
                  "rounded-full bg-white/10 px-1.5 text-xs font-extrabold tabular-nums",
                  delta > 0 ? "text-success" : "text-critical",
                )}
              >
                {delta > 0 ? `+${delta}` : delta}
              </span>
            ) : null}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn("h-full rounded-full transition-all duration-700", LEVEL_BG[level])}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ProgressDots({ total, done, current }: { total: number; done: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && i % 3 === 0 && <span className="mx-1 h-4 w-0.5 rounded bg-border" />}
          <span
            className={cn(
              "h-3.5 w-3.5 rounded-full",
              i < done
                ? "bg-primary"
                : i === current
                  ? "ring-[3px] ring-inset ring-primary"
                  : "bg-muted",
            )}
          />
        </span>
      ))}
    </div>
  );
}

/** Barra fixa do topo: 4 métricas compactas e progresso da partida. */
export function GameHud({ deltas, action }: { deltas?: Partial<Metrics>; action?: ReactNode }) {
  const metrics = useGameStore((s) => s.metrics);
  const matchDeck = useGameStore((s) => s.matchDeck);
  const decisions = useGameStore((s) => s.decisions);
  const currentEventIndex = useGameStore((s) => s.currentEventIndex);
  const total = matchDeck.length || 6;
  const done = decisions.length;
  const current = currentEventIndex;

  return (
    <header className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border bg-card px-4 py-3 pr-20 sm:px-6 sm:pr-20">
      <div className="hidden whitespace-nowrap text-lg font-black tracking-tight 2xl:block">
        Hard<span className="text-primary">Work</span>Manager
      </div>
      <div className="order-last grid w-full min-w-0 grid-cols-2 gap-x-4 gap-y-2 sm:order-none sm:w-auto sm:flex-1 md:grid-cols-4">
        {METRIC_META.map((m) => (
          <HudMetric
            key={m.key}
            metricKey={m.key}
            label={m.label}
            icon={m.icon}
            value={metrics[m.key]}
            delta={deltas?.[m.key] || undefined}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <RulesButton />
        {action}
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <span className="whitespace-nowrap text-sm font-bold text-muted-foreground">
          Dilema {Math.min(current + 1, total)} de {total}
        </span>
        <ProgressDots total={total} done={done} current={current} />
      </div>
    </header>
  );
}
