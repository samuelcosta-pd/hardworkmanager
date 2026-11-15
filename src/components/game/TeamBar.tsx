import { Check, Mic, UserX } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { useGameStore } from "@/store/gameStore";
import type { PlayerRole } from "@/types";
import { cn } from "@/lib/utils";

export const ROLE_SHORT: Record<PlayerRole, string> = {
  pm: "GP",
  techLead: "Líder Técnico",
  uxLead: "Design e Telas",
};

export type PlayerStatus = "votou" | "absteve" | "falando" | "responsavel" | "vez" | "aguarda";

const STATUS: Record<
  PlayerStatus,
  { label: string; className: string; icon?: ReactNode; ring?: boolean }
> = {
  votou: {
    label: "votou",
    className: "text-success",
    icon: <Check className="h-3.5 w-3.5" strokeWidth={3} />,
  },
  absteve: {
    label: "absteve-se",
    className: "text-muted-foreground",
    icon: <UserX className="h-3.5 w-3.5" />,
  },
  falando: {
    label: "falando",
    className: "text-primary",
    icon: <Mic className="h-3.5 w-3.5" />,
    ring: true,
  },
  responsavel: { label: "responsável", className: "text-primary", ring: true },
  vez: { label: "sua vez", className: "text-primary", ring: true },
  aguarda: { label: "aguardando", className: "text-muted-foreground" },
};

/** Barra fixa de baixo com a equipe (inspirada na barra de presença do Gather). */
export function TeamBar({
  status = {},
  responsibleRole,
  note,
}: {
  status?: Record<string, PlayerStatus | undefined>;
  responsibleRole?: PlayerRole;
  note?: ReactNode;
}) {
  const players = useGameStore((s) => s.players);
  return (
    <footer className="mt-auto flex flex-wrap items-center gap-2.5 border-t border-border bg-card px-4 py-3 sm:px-6">
      {players.map((p) => {
        const st =
          status[p.id] ??
          (responsibleRole && p.role === responsibleRole ? "responsavel" : undefined);
        const meta = st ? STATUS[st] : undefined;
        return (
          <div
            key={p.id}
            className="flex items-center gap-2.5 rounded-full bg-muted py-1.5 pl-1.5 pr-4"
          >
            <div className={cn("rounded-full", meta?.ring && "ring-[3px] ring-primary")}>
              <Avatar3D
                initials={p.name.slice(0, 2)}
                role={p.role}
                imageUrl={p.avatarImage}
                size="sm"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-extrabold">{p.name}</span>
              <span className="text-xs font-bold text-muted-foreground">{ROLE_SHORT[p.role]}</span>
            </div>
            {meta && (
              <span
                className={cn(
                  "ml-1 flex items-center gap-1 text-xs font-extrabold",
                  meta.className,
                )}
              >
                {meta.icon}
                {meta.label}
              </span>
            )}
          </div>
        );
      })}
      {note && (
        <>
          <div className="flex-1" />
          <span className="text-sm font-bold text-muted-foreground">{note}</span>
        </>
      )}
    </footer>
  );
}
