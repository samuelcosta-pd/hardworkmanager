import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Carrossel simples para conteúdo que não cabe na tela (sem rolagem em telas a partir de 1280×720).
 * Setas, bolinhas de posição, "2 de 5" e teclas ← → quando o carrossel está em foco.
 */
export function Carousel({
  items,
  perPage = 1,
  label,
  className,
}: {
  items: ReactNode[];
  perPage?: 1 | 2 | 3;
  label: string;
  className?: string;
}) {
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const current = Math.min(page, pages - 1);
  const visible = items.slice(current * perPage, current * perPage + perPage);

  const go = (n: number) => setPage(Math.max(0, Math.min(pages - 1, n)));
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") go(current + 1);
    if (e.key === "ArrowLeft") go(current - 1);
  };

  return (
    <section
      aria-roledescription="carrossel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKey}
      className={cn(
        "flex min-h-0 flex-col gap-3 rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
        className,
      )}
    >
      <div
        className={cn(
          "grid min-h-0 flex-1 gap-4",
          perPage === 2 && "lg:grid-cols-2",
          perPage === 3 && "lg:grid-cols-3",
        )}
        aria-live="polite"
      >
        {visible.map((item, i) => (
          <div
            key={current * perPage + i}
            className="min-w-0 animate-float-in"
            role="group"
            aria-roledescription="item"
            aria-label={`${current * perPage + i + 1} de ${items.length}`}
          >
            {item}
          </div>
        ))}
      </div>
      {pages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Anterior"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-muted disabled:opacity-40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2" aria-hidden="true">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onClick={() => go(i)}
                className={cn(
                  "h-3 rounded-full transition-all",
                  i === current ? "w-7 bg-primary" : "w-3 bg-muted hover:bg-border",
                )}
              />
            ))}
          </div>
          <span className="min-w-14 text-center text-base font-extrabold text-muted-foreground">
            {current + 1} de {pages}
          </span>
          <button
            type="button"
            onClick={() => go(current + 1)}
            disabled={current === pages - 1}
            aria-label="Próximo"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-muted disabled:opacity-40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
