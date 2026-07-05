"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "سلام! به مراسم عقد ما خوش آمدید",
    desc: "خوشحالیم که در این روز ویژه کنار ما هستید",
    icon: "💍",
  },
  {
    title: "مراسم کجاست؟",
    desc: "تاریخ و مکان مراسم رو براتون آماده کردیم",
    icon: "📍",
  },
  {
    title: "خاطره بسازید",
    desc: "عکس و فیلم‌هاتون رو برامون آپلود کنید تا این لحظات برای همیشه بمونه",
    icon: "📸",
  },
];

export default function OnboardingSlider() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("onboarding-seen");
    if (!seen) setShow(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("onboarding-seen", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-traditional-firoozeh via-traditional-gold to-cream flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="text-center px-8 max-w-md"
        >
          <div className="text-6xl mb-6">{slides[current].icon}</div>
          <h1 className="text-2xl font-bold text-white mb-4">{slides[current].title}</h1>
          <p className="text-lg text-white/80 mb-8">{slides[current].desc}</p>
          <div className="flex gap-2 justify-center mb-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
          {current < slides.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="bg-white text-traditional-firoozeh px-8 py-3 rounded-full font-bold text-lg"
            >
              بعدی
            </button>
          ) : (
            <button
              onClick={dismiss}
              className="bg-white text-traditional-firoozeh px-8 py-3 rounded-full font-bold text-lg"
            >
              بزن بریم!
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
