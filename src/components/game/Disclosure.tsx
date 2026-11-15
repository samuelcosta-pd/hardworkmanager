import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * Item que abre e fecha (dropdown), usado onde o jogo cita um dilema ou uma decisão anterior.
 * Usa <details>/<summary>: funciona com toque, mouse e teclado sem código extra.
 */
export function Disclosure({
  summary,
  children,
  className,
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details className={cn("group rounded-2xl bg-muted", className)}>
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl p-3 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 [&::-webkit-details-marker]:hidden">
        <div className="flex min-w-0 flex-1 items-center gap-3">{summary}</div>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="flex flex-col gap-3 px-4 pb-4 pt-1">{children}</div>
    </details>
  );
}

/** Rótulo pequeno + conteúdo, para o corpo dos itens abertos. */
export function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-black tracking-wide text-muted-foreground">{label}</span>
      <div className="text-base font-semibold leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * Como o Disclosure, mas o conteúdo abre numa janela flutuante sobre a tela,
 * sem empurrar o resto para baixo (evita rolagem em telas a partir de 1280×720).
 */
export function DetailsPopover({
  summary,
  children,
  className,
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "flex w-full items-center gap-3 rounded-2xl bg-muted p-3 text-left transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50",
          className,
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">{summary}</div>
        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        collisionPadding={16}
        className="flex max-h-[75vh] w-[min(520px,92vw)] flex-col gap-3 overflow-y-auto rounded-2xl border border-border bg-card p-4 text-foreground shadow-2xl"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
