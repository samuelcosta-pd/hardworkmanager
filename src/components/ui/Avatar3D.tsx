import { cn } from '@/lib/utils';
import type { PlayerRole } from '@/types';

interface Props {
  initials: string;
  role?: PlayerRole | 'sender';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  imageUrl?: string;
}

const ROLE_BG: Record<PlayerRole | 'sender', string> = {
  pm: 'bg-[var(--pm)]',
  techLead: 'bg-[var(--tech)]',
  uxLead: 'bg-[var(--ux)]',
  sender: 'bg-accent',
};

export function Avatar3D({ initials, role = 'sender', size = 'md', className, imageUrl }: Props) {
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
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={initials} 
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Fallback to initials if image fails
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
      ) : null}
      <span className={`drop-shadow-sm ${imageUrl ? 'hidden' : ''}`}>{initials.toUpperCase()}</span>
    </div>
  );
}
