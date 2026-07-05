import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a6b5a",
        gold: "#c9a94e",
        cream: "#f5f0e8",
        traditional: {
          red: "#8b1a1a",
          firoozeh: "#2ab7ca",
          gold: "#d4a017",
        },
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        nastaligh: ["IranNastaligh", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
