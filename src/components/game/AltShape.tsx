import type { AlternativeKey } from "@/types";

/** Cada alternativa tem cor e forma próprias, para a equipe poder dizer "a azul" no debate. */
export const ALT_BG: Record<AlternativeKey, string> = {
  a: "bg-alt-a",
  b: "bg-alt-b",
  c: "bg-alt-c",
};

export const ALT_NAME: Record<AlternativeKey, string> = {
  a: "vermelha",
  b: "azul",
  c: "verde",
};

export function AltShape({ k, size = 26 }: { k: AlternativeKey; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24">
      {k === "a" && <circle cx="12" cy="12" r="9" fill="#fff" />}
      {k === "b" && <rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" />}
      {k === "c" && <path d="M12 2 22 12 12 22 2 12z" fill="#fff" />}
    </svg>
  );
}

export function AltBadge({ k, size = "md" }: { k: AlternativeKey; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9 text-base" : "h-12 w-12 text-xl";
  return (
    <span
      className={`${ALT_BG[k]} ${box} inline-flex shrink-0 items-center justify-center gap-1 rounded-xl font-black uppercase text-white`}
    >
      <AltShape k={k} size={size === "sm" ? 14 : 18} />
      {k}
    </span>
  );
}
