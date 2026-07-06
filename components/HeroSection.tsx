"use client";

import { useState } from "react";
import Countdown from "./Countdown";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0">
        {!imgError && (
          <img
            src="/images/couple.jpg"
            alt="Sadegh & Melika"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-white/40" />
        {imgError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gold/60 via-gold/30 to-espresso/80" />
        )}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-nastaligh text-5xl md:text-7xl lg:text-8xl text-gold mb-3 leading-relaxed">
          صادق و ملیکا
        </h1>
        <div className="w-16 h-px bg-gold/40 mb-6" />
        <p className="font-amiri text-espresso/80 text-lg md:text-xl max-w-md leading-relaxed">
          سلام. با قدم‌های زیباتون شروع زندگیمون رو جشن می‌گیریم
        </p>
        <div className="mt-10">
          <Countdown targetDate="2026-08-30T18:00:00" />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C4913A"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </div>
  );
}
