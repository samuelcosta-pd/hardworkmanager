import { cn } from '@/lib/utils';
import type { PlayerRole } from '@/types';

interface Props {
  initials: string;
  role?: PlayerRole | 'sender';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ROLE_BG: Record<PlayerRole | 'sender', string> = {
  pm: 'bg-[var(--pm)]',
  techLead: 'bg-[var(--tech)]',
  uxLead: 'bg-[var(--ux)]',
  sender: 'bg-accent',
};

export function Avatar3D({ initials, role = 'sender', size = 'md', className }: Props) {
  const dims = size === 'sm' ? 'h-9 w-9 text-xs' : size === 'lg' ? 'h-16 w-16 text-lg' : 'h-12 w-12 text-sm';
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center rounded-full font-bold text-white shadow-[var(--shadow-soft)]',
        'bg-gradient-to-br from-white/30 to-transparent',
        ROLE_BG[role],
        dims,
        className,
      )}
    >
      <span className="drop-shadow-sm">{initials.toUpperCase()}</span>
    </div>
  );
}
