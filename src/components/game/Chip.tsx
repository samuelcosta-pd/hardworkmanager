import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "accent" | "success" | "warning" | "critical";
  className?: string;
}) {
  const tones = {
    muted: "bg-muted text-muted-foreground",
    accent: "bg-primary text-primary-foreground",
    success: "bg-success text-[#0e1633]",
    warning: "bg-warning text-[#0e1633]",
    critical: "bg-critical text-[#0e1633]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-extrabold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
