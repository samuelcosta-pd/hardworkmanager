import { BookOpen } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

/** Ajuda sempre à mão (heurística 10): o resumo de "Como se joga" num toque, sem sair da partida. */
export function RulesButton() {
  return (
    <Popover>
      <PopoverTrigger
        aria-label="Regras do jogo"
        title="Regras do jogo"
        className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-xl border border-border px-3 text-base font-extrabold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
      >
        <BookOpen className="h-5 w-5" />
        <span className="hidden xl:inline">Regras</span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[min(440px,92vw)] rounded-2xl border-0 bg-white p-5 text-[#0e1633] shadow-2xl"
      >
        <p className="m-0 mb-3 text-lg font-black">Como se joga</p>
        <ol className="m-0 flex list-decimal flex-col gap-1.5 pl-5 text-base font-semibold leading-snug">
          <li>Leiam o dilema juntos (2 min).</li>
          <li>Cada um vota em segredo (45 s). Pode se abster.</li>
          <li>
            Se houver divergência: debate, com a minoria primeiro (30 s cada) e o Gerente de
            Projetos (GP) por último (20 s).
          </li>
          <li>Votação final. Empate: decide o GP, que não pode se abster nessa rodada.</li>
        </ol>
        <p className="m-0 mb-1 mt-4 text-lg font-black">Métricas</p>
        <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-base font-semibold leading-snug">
          <li>Entrega, Qualidade ou Equipe abaixo de 40: fim de jogo.</li>
          <li>Conhecimento abaixo de 20: as perdas de Entrega dobram.</li>
          <li>Algumas escolhas voltam como consequência nos dilemas seguintes.</li>
        </ul>
        <p className="m-0 mt-4 hidden text-sm font-bold text-[#3a4670] sm:block">
          Tecla D: rever o dilema atual.
        </p>
      </PopoverContent>
    </Popover>
  );
}
