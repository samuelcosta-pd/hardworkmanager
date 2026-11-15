import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
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
