import { useState, useEffect, useRef, useCallback } from "react";

interface UseCountdownOptions {
  durationSeconds: number;
  /** Segundos restantes ao montar (padrão: durationSeconds), para retomar um tempo já em curso. */
  initialSeconds?: number;
  enabled?: boolean;
  onExpire?: () => void;
}

export function useCountdown({
  durationSeconds,
  initialSeconds,
  enabled = true,
  onExpire,
}: UseCountdownOptions) {
  const startSeconds = initialSeconds ?? durationSeconds;
  const [secondsLeft, setSecondsLeft] = useState(startSeconds);
  const [isRunning, setIsRunning] = useState(enabled);
  const hasExpiredRef = useRef(false);

  useEffect(() => {
    setSecondsLeft(startSeconds);
    setIsRunning(enabled);
    hasExpiredRef.current = false;
  }, [startSeconds, enabled]);

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

  const reset = useCallback(
    (newDuration?: number) => {
      setSecondsLeft(newDuration ?? durationSeconds);
      setIsRunning(enabled);
      hasExpiredRef.current = false;
    },
    [durationSeconds, enabled],
  );

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const formatted = `${mm}:${ss}`;
  const progressPercent = durationSeconds > 0 ? (secondsLeft / durationSeconds) * 100 : 0;
  const isExpired = secondsLeft <= 0;
  const isUrgent =
    secondsLeft > 0 && secondsLeft <= Math.max(10, Math.floor(durationSeconds * 0.2));

  return {
    secondsLeft,
    formatted,
    progressPercent,
    isRunning,
    isExpired,
    isUrgent,
    reset,
  };
}
