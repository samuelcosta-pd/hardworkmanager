import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "critical" | "success";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const SoftButton = forwardRef<HTMLButtonElement, Props>(function SoftButton(
  { className, variant = "primary", size = "md", ...rest },
  ref,
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-extrabold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";
  const sizes: Record<Size, string> = {
    sm: "min-h-11 px-4 text-base",
    md: "min-h-12 px-5 text-lg",
    lg: "min-h-14 px-7 text-xl",
  };
  const variants: Record<Variant, string> = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_4px_0_rgba(0,0,0,0.35)] hover:brightness-105 hover:-translate-y-0.5",
    ghost: "border border-border bg-transparent text-foreground hover:bg-muted",
    critical: "bg-critical text-[#0e1633] hover:brightness-105",
    success: "bg-success text-[#0e1633] hover:brightness-105",
  };
  return (
    <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...rest} />
  );
});
