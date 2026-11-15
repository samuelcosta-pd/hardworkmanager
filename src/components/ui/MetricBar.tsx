import { metricLevel } from '@/lib/gameLogic';
import { cn } from '@/lib/utils';

interface Props {
  label: string;
  value: number;
  icon: React.ReactNode;
  /** Limiares próprios (o Conhecimento Organizacional usa 20 como nível crítico). */
  criticalBelow?: number;
  warningBelow?: number;
  hint?: string;
}

export const KNOWLEDGE_BAR_PROPS = {
  label: 'Conhecimento Organizacional',
  criticalBelow: 20,
  warningBelow: 35,
  hint: 'Abaixo de 20, as perdas de Capacidade de Entrega dobram.',
} as const;

export function MetricBar({ label, value, icon, criticalBelow, warningBelow, hint }: Props) {
  const level =
    criticalBelow === undefined
      ? metricLevel(value)
      : value < criticalBelow
        ? 'critical'
        : value < (warningBelow ?? criticalBelow + 20)
          ? 'warning'
          : 'stable';
  const color =
    level === 'critical' ? 'bg-critical' : level === 'warning' ? 'bg-warning' : 'bg-success';
  const shadow =
    level === 'critical'
      ? 'shadow-[var(--shadow-critical)]'
      : level === 'warning'
        ? 'shadow-[var(--shadow-warning)]'
        : 'shadow-[var(--shadow-success)]';
  const labelColor =
    level === 'critical'
      ? 'text-critical-foreground'
      : level === 'warning'
        ? 'text-warning-foreground'
        : 'text-success-foreground';

  return (
    <div className={cn('rounded-3xl bg-card p-5 transition-all duration-500', shadow)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted">
            {icon}
          </div>
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        </div>
        <span className={cn('text-2xl font-bold tabular-nums', labelColor)}>{value}</span>
      </div>
      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn('h-full rounded-full transition-all duration-700 ease-out', color)}
          style={{ width: `${value}%` }}
        />
      </div>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
