"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Countdown from "./Countdown";

export default function ParallaxPostcard() {
  const ref = useRef(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className={`absolute inset-0 ${imgError ? "bg-gradient-to-br from-traditional-firoozeh via-traditional-gold to-gold" : ""}`}>
        {!imgError && (
          <img
            src="/images/couple.jpg"
            alt="عقد"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="font-nastaligh text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 text-gold leading-relaxed">
          به مراسم عقد ما خوش آمدید
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-md leading-relaxed">
          سلام. با قدم‌های زیباتون شروع زندگیمون رو جشن می‌گیریم
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-2">
          صادق و ملیکا
        </p>
        <Countdown targetDate="2026-08-30T18:00:00" />
        <div className="flex gap-4 mt-8">
          <Link href="/events" className="bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-gold/80 transition">
            جزئیات مراسم
          </Link>
          <Link href="/upload" className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition">
            آپلود عکس
          </Link>
        </div>
        <div className="mt-4 flex gap-4">
          <Link href="/gallery" className="text-white/70 hover:text-white underline underline-offset-4">
            گالری
          </Link>
          <Link href="/map" className="text-white/70 hover:text-white underline underline-offset-4">
            نقشه
          </Link>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
