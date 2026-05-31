import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'muted' | 'inset';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export const SoftCard = forwardRef<HTMLDivElement, Props>(function SoftCard(
  { className, variant = 'default', ...rest },
  ref,
) {
  const base = 'rounded-3xl p-6 transition-all duration-300';
  const variants: Record<Variant, string> = {
    default: 'bg-card shadow-[var(--shadow-soft)]',
    muted: 'bg-muted',
    inset: 'bg-muted shadow-[var(--shadow-inset-soft)]',
  };
  return <div ref={ref} className={cn(base, variants[variant], className)} {...rest} />;
});
