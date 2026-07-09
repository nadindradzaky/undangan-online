'use client';

import { useState, useRef, useCallback } from 'react';

export function useMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setError(null);
      }).catch(() => {
        setError('Gagal memutar audio');
      });
    }
  }, [isPlaying]);

  const startPlaying = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.play().then(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
      setError('Gagal memutar audio');
    });
  }, []);

  return {
    isPlaying,
    isLoading,
    error,
    audioRef,
    togglePlay,
    startPlaying,
    setIsLoading,
    setError,
  };
}
