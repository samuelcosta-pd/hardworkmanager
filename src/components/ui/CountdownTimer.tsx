import React from 'react';
import { Timer, Pause, Play, AlertCircle } from 'lucide-react';

interface CountdownTimerProps {
  formatted: string;
  progressPercent: number;
  isUrgent: boolean;
  isExpired: boolean;
  isRunning?: boolean;
  label?: string;
  onToggle?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showControls?: boolean;
}

export function CountdownTimer({
  formatted,
  progressPercent,
  isUrgent,
  isExpired,
  isRunning = true,
  label = 'Tempo Restante',
  onToggle,
  size = 'md',
  showControls = false,
}: CountdownTimerProps) {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const containerBg = isExpired
    ? 'bg-rose-100/80 border-rose-300 text-rose-900 ring-1 ring-rose-200'
    : isUrgent
      ? 'bg-amber-100/80 border-amber-300 text-amber-950 animate-pulse ring-1 ring-amber-200'
      : 'bg-card border-slate-200/80 text-foreground';

  const barColor = isExpired
    ? 'bg-rose-500'
    : isUrgent
      ? 'bg-amber-500'
      : 'bg-primary';

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl border px-3.5 py-2 shadow-sm transition-all ${containerBg}`}
    >
      <div className="flex items-center gap-1.5 shrink-0">
        {isExpired ? (
          <AlertCircle className={`text-rose-600 ${isSm ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
        ) : (
          <Timer className={`text-primary ${isSm ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} />
        )}
        <span className={`font-semibold tracking-wider uppercase text-muted-foreground ${isSm ? 'text-[10px]' : 'text-xs'}`}>
          {label}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`font-mono font-extrabold tabular-nums tracking-tight ${
            isSm ? 'text-sm' : isLg ? 'text-2xl' : 'text-base sm:text-lg'
          } ${isExpired ? 'text-rose-700' : isUrgent ? 'text-amber-800' : 'text-foreground'}`}
        >
          {formatted}
        </span>

        {/* Barra de progresso circular ou linear compacta */}
        <div className="h-1.5 w-12 sm:w-16 overflow-hidden rounded-full bg-slate-200/70">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${barColor}`}
            style={{ width: `${Math.min(100, progressPercent)}%` }}
          />
        </div>
      </div>

      {showControls && onToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="ml-1 rounded-lg p-1 text-muted-foreground hover:bg-slate-200/60 hover:text-foreground transition-colors"
          title={isRunning ? 'Pausar cronômetro' : 'Retomar cronômetro'}
        >
          {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
      )}
    </div>
  );
}
