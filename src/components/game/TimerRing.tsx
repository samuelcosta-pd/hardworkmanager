import { cn } from "@/lib/utils";

/** Cronômetro circular grande, legível de longe (padrão de jogos de sala como o Kahoot). */
export function TimerRing({
  secondsLeft,
  totalSeconds,
  label,
  size = 160,
}: {
  secondsLeft: number;
  totalSeconds: number;
  label: string;
  size?: number;
}) {
  const r = 62;
  const c = 2 * Math.PI * r;
  const pct = totalSeconds > 0 ? Math.max(0, Math.min(1, secondsLeft / totalSeconds)) : 0;
  const urgent = secondsLeft > 0 && secondsLeft <= Math.max(10, Math.floor(totalSeconds * 0.2));
  const expired = secondsLeft <= 0;
  const color = expired || urgent ? "var(--critical)" : "var(--primary)";
  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const text = `${mm}:${ss}`;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          role="img"
          aria-label={`${label}: ${text}`}
          width={size}
          height={size}
          viewBox="0 0 140 140"
        >
          <circle cx="70" cy="70" r={r} fill="none" stroke="var(--muted)" strokeWidth="12" />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - pct)}
            transform="rotate(-90 70 70)"
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center font-black tabular-nums",
            (urgent || expired) && "text-critical",
          )}
          style={{ fontSize: Math.round(size * 0.24) }}
        >
          {text}
        </div>
      </div>
      <span className="text-sm font-extrabold text-muted-foreground">{label}</span>
    </div>
  );
}
