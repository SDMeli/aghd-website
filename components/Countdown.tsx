"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    if (isNaN(target)) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return clearInterval(interval);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div dir="ltr" className="flex gap-3 md:gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, val]) => (
        <div key={key} className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-gold min-w-[3rem] md:min-w-[4rem]">
            {String(val).padStart(2, "0")}
          </div>
           <div className="text-[10px] md:text-xs mt-1 text-espresso/50">
            {key === "days" ? "روز" : key === "hours" ? "ساعت" : key === "minutes" ? "دقیقه" : "ثانیه"}
          </div>
        </div>
      ))}
    </div>
  );
}
