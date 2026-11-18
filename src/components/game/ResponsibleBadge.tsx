import { HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS, type PlayerRole } from "@/types";

/** Botão "?" amarelo, visível, que abre uma explicação curta (funciona com toque e teclado). */
export function HelpButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger
        aria-label={label}
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_3px_0_rgba(0,0,0,0.35)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
      >
        <HelpCircle className="h-5 w-5" strokeWidth={2.6} />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        className="w-[min(380px,90vw)] rounded-2xl border-0 bg-white p-4 text-base font-semibold leading-relaxed text-[#0e1633] shadow-2xl"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

export const RESPONSIBLE_HELP = (
  <>
    <strong>Responsável</strong> é o papel da área deste problema: quem mais conhece o assunto. Não
    decide sozinho: todos votam com o mesmo peso, e em caso de empate quem decide é o GP.
  </>
);

/** "Responsável: Caio · Líder de Design e Telas [?]" */
export function ResponsibleBadge({ role, size = "md" }: { role: PlayerRole; size?: "sm" | "md" }) {
  const players = useGameStore((s) => s.players);
  const owner = players.find((p) => p.role === role);
  return (
    <div className="flex flex-wrap items-center gap-3">
      {owner && (
        <div className="rounded-full ring-[3px] ring-primary">
          <Avatar3D
            initials={owner.name.slice(0, 2)}
            role={owner.role}
            imageUrl={owner.avatarImage}
            size={size === "sm" ? "sm" : "md"}
          />
        </div>
      )}
      <span className="text-lg font-bold text-muted-foreground">
        Responsável:{" "}
        <strong className="text-foreground">
          {owner ? `${owner.name} · ` : ""}
          {ROLE_LABELS[role]}
        </strong>
        {/* Com 2 jogadores, um papel fica sem dono: o dilema é da equipe toda */}
        {!owner && players.length > 0 && " (sem jogador: decidam juntos)"}
      </span>
      <HelpButton label="O que é o responsável?">{RESPONSIBLE_HELP}</HelpButton>
    </div>
  );
}
