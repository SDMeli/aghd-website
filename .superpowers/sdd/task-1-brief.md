### Task 1: Project Scaffolding

**Files:**
- Create: `aghd-website/package.json`
- Create: `aghd-website/tsconfig.json`
- Create: `aghd-website/next.config.ts`
- Create: `aghd-website/tailwind.config.ts`
- Create: `aghd-website/postcss.config.mjs`
- Create: `aghd-website/app/globals.css`
- Create: `aghd-website/app/layout.tsx`
- Create: `aghd-website/.gitignore`

**Interfaces:**
- Consumes: Nothing (first task)
- Produces: Working Next.js dev server with Persian RTL, Tailwind, fonts configured

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/blue/Desktop
npx create-next-app@latest aghd-website --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd aghd-website
npm install framer-motion
npm install -D @tailwindcss/forms
```

- [ ] **Step 2: Configure Tailwind for Persian theme**

Edit `tailwind.config.ts`:
```ts
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
```

- [ ] **Step 3: Set up global CSS with RTL and fonts**

Edit `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Vazirmatn";
  src: url("/fonts/Vazirmatn-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Vazirmatn";
  src: url("/fonts/Vazirmatn-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IranNastaligh";
  src: url("/fonts/IranNastaligh.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --background: #f5f0e8;
  --foreground: #1a1a1a;
}

html {
  direction: rtl;
}

body {
  font-family: "Vazirmatn", sans-serif;
  background-color: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 4: Set up root layout**

Edit `app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import "./globals.css";
import MusicToggle from "@/components/MusicToggle";

export const metadata: Metadata = {
  title: "دعوت عقد",
  description: "به مراسم عقد ما خوش آمدید",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-cream text-gray-900">
        {children}
        <MusicToggle />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Download Persian fonts**

Download Vazirmatn from Google Fonts and IranNastaligh (or a suitable Persian calligraphy font), place in `public/fonts/`.

Alternatively, use next/font:
```ts
// In layout.tsx, add:
import localFont from "next/font/local";

const vazir = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2",
  variable: "--font-vazir",
});

const nastaligh = localFont({
  src: "../public/fonts/IranNastaligh.woff2",
  variable: "--font-nastaligh",
});
```

- [ ] **Step 6: Verify dev server works**

```bash
cd aghd-website && npm run dev
```
Expected: Server starts on localhost:3000, page renders with RTL and cream background.

- [ ] **Step 7: Commit**

```bash
git init && git add . && git commit -m "feat: initial Next.js project with Persian RTL setup"
```

---

