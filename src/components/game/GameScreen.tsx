import type { ReactNode } from "react";
import type { Metrics } from "@/types";
import { cn } from "@/lib/utils";
import { GameHud } from "./GameHud";

/** Moldura das telas da partida: métricas no topo, conteúdo no meio, equipe embaixo. */
export function GameScreen({
  children,
  footer,
  deltas,
  className,
}: {
  children: ReactNode;
  footer?: ReactNode;
  deltas?: Partial<Metrics>;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <GameHud deltas={deltas} />
      <main
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 sm:px-8 sm:py-8",
          className,
        )}
      >
        {children}
      </main>
      {footer}
    </div>
  );
}
