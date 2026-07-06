"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio("/music/background.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    audio.addEventListener("error", () => setIsAvailable(false));
    audioRef.current = audio;

    const play = async () => {
      try { await audio.play(); setIsPlaying(true); } catch {}
    };
    play();

    const retryPlay = () => {
      if (audio.paused) audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    document.addEventListener("scroll", retryPlay, { once: true });
    document.addEventListener("touchstart", retryPlay, { once: true });
    document.addEventListener("click", retryPlay, { once: true });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && audio.paused)
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
    });

    return () => {
      audio.pause();
      audioRef.current = null;
      document.removeEventListener("scroll", retryPlay);
      document.removeEventListener("touchstart", retryPlay);
      document.removeEventListener("click", retryPlay);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (!isAvailable) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors text-espresso/60 hover:text-espresso"
      aria-label={isPlaying ? "قطع موسیقی" : "پخش موسیقی"}
    >
      {isPlaying ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M19.07 4.93a10 10 0 010 14.14" />
          <path d="M15.54 8.46a5 5 0 010 7.07" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
