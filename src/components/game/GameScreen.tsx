import type { ReactNode } from "react";
import type { Metrics } from "@/types";
import { cn } from "@/lib/utils";
import { GameHud } from "./GameHud";

/** Moldura das telas da partida: métricas no topo, conteúdo no meio, equipe embaixo. */
export function GameScreen({
  children,
  footer,
  deltas,
  hudAction,
  className,
}: {
  children: ReactNode;
  footer?: ReactNode;
  deltas?: Partial<Metrics>;
  /** Ação fixa na barra do topo (ex.: botão "Rever dilema"). */
  hudAction?: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <GameHud deltas={deltas} action={hudAction} />
      <main
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-4 py-5 sm:px-8 sm:py-6",
          className,
        )}
      >
        {children}
      </main>
      {footer}
    </div>
  );
}
