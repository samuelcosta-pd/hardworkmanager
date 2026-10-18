import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountdownOptions {
  durationSeconds: number;
  enabled?: boolean;
  onExpire?: () => void;
}

export function useCountdown({
  durationSeconds,
  enabled = true,
  onExpire,
}: UseCountdownOptions) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(enabled);
  const hasExpiredRef = useRef(false);

  useEffect(() => {
    setSecondsLeft(durationSeconds);
    setIsRunning(enabled);
    hasExpiredRef.current = false;
  }, [durationSeconds, enabled]);

  useEffect(() => {
    if (!isRunning || !enabled || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!hasExpiredRef.current) {
            hasExpiredRef.current = true;
            onExpire?.();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, enabled, secondsLeft, onExpire]);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => setIsRunning(true), []);
  const toggle = useCallback(() => setIsRunning((r) => !r), []);
  const reset = useCallback(
    (newDuration?: number) => {
      setSecondsLeft(newDuration ?? durationSeconds);
      setIsRunning(enabled);
      hasExpiredRef.current = false;
    },
    [durationSeconds, enabled]
  );

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const formatted = `${mm}:${ss}`;
  const progressPercent = durationSeconds > 0 ? (secondsLeft / durationSeconds) * 100 : 0;
  const isExpired = secondsLeft <= 0;
  const isUrgent = secondsLeft > 0 && secondsLeft <= Math.max(10, Math.floor(durationSeconds * 0.2));

  return {
    secondsLeft,
    formatted,
    progressPercent,
    isRunning,
    isExpired,
    isUrgent,
    pause,
    resume,
    toggle,
    reset,
  };
}
