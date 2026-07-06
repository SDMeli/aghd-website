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

    audio.addEventListener("error", () => {
      setIsAvailable(false);
    });

    audioRef.current = audio;

    const play = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Autoplay blocked — will start on user interaction
      }
    };
    play();

    const handleInteraction = () => {
      if (!audio.paused) return;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      audio.pause();
      audioRef.current = null;
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
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
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-white transition"
      aria-label={isPlaying ? "قطع موسیقی" : "پخش موسیقی"}
    >
      {isPlaying ? "🔊" : "🔇"}
    </button>
  );
}
