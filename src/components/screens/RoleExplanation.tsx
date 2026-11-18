import { ArrowRight, Check, X } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { HelpButton } from "@/components/game/ResponsibleBadge";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS, type PlayerRole } from "@/types";
import { ROLE_CARDS } from "@/data/roles";

/** "Quem é responsável pelo quê": um resumo de uma linha por papel, para diferenciar GP e Líder Técnico. */
const ROLE_ORDER: PlayerRole[] = ["pm", "techLead", "uxLead"];

export function RoleExplanation() {
  const players = useGameStore((s) => s.players);
  const startGame = useGameStore((s) => s.startGame);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-8">
      <div className="flex flex-col gap-2 animate-float-in">
        <span className="text-lg font-extrabold text-primary">Antes de começar</span>
        <h1 className="m-0 text-4xl font-black tracking-tight sm:text-5xl">
          Quem é responsável pelo quê
        </h1>
        <p className="m-0 text-lg font-bold text-muted-foreground">
          Todos votam com o mesmo peso. O responsável de cada dilema é o papel da área do problema;
          se esse papel ficou sem jogador, a equipe decide junto.
        </p>
      </div>

      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Um cartão por papel sorteado */}
        {ROLE_ORDER.filter((r) => players.some((p) => p.role === r)).map((role, i) => {
          const card = ROLE_CARDS[role];
          const members = players.filter((p) => p.role === role);
          return (
            <article
              key={role}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 animate-float-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 -space-x-3">
                  {members.map((p) => (
                    <div key={p.id} className="rounded-full ring-4 ring-card">
                      <Avatar3D
                        initials={p.name.slice(0, 2)}
                        role={p.role}
                        imageUrl={p.avatarImage}
                        size="lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-2xl font-black">
                    {members.map((p) => p.name).join(" e ")}
                  </span>
                  <span className="text-base font-extrabold text-muted-foreground">
                    {role === "pm" ? "Gerente de Projetos (GP)" : ROLE_LABELS[role]}
                  </span>
                </div>
              </div>
              <div className="text-xl font-black tracking-tight text-primary">{card.headline}</div>
              <p className="m-0 text-lg font-semibold text-muted-foreground">{card.mission}</p>
              <div className="flex flex-col gap-2.5">
                <span className="text-sm font-black tracking-wide text-muted-foreground">
                  DECIDE SOBRE
                </span>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {card.decides.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-lg font-bold leading-snug">
                      <Check className="mt-0.5 h-6 w-6 shrink-0 text-success" strokeWidth={3} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex items-center gap-2 pt-2">
                <span className="text-sm font-bold text-muted-foreground">
                  O que fica fora desse papel
                </span>
                <HelpButton label={`O que não é responsabilidade de ${ROLE_LABELS[role]}`}>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {card.notMine.map((n) => (
                      <li key={n} className="flex items-start gap-2">
                        <X className="mt-1 h-4 w-4 shrink-0 text-[#c8323f]" strokeWidth={3} />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </HelpButton>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <SoftButton size="lg" onClick={startGame}>
          Entendido, ver o projeto <ArrowRight className="h-5 w-5" />
        </SoftButton>
      </div>
    </div>
  );
}
