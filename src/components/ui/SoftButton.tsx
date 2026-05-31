import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'critical' | 'success';
type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const SoftButton = forwardRef<HTMLButtonElement, Props>(function SoftButton(
  { className, variant = 'primary', size = 'md', ...rest },
  ref,
) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none';
  const sizes: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  };
  const variants: Record<Variant, string> = {
    primary:
      'bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-soft-lg)] hover:-translate-y-0.5',
    ghost:
      'bg-card text-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-soft-lg)] hover:-translate-y-0.5',
    critical:
      'bg-card text-critical-foreground shadow-[var(--shadow-critical)] hover:-translate-y-0.5',
    success:
      'bg-card text-success-foreground shadow-[var(--shadow-success)] hover:-translate-y-0.5',
  };
  return <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...rest} />;
});
