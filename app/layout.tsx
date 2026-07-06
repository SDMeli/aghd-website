import type { Metadata } from "next";
import "./globals.css";
import MusicToggle from "@/components/MusicToggle";

export const metadata: Metadata = {
  title: "عقد صادق و ملیکا",
  description: "۸ شهریور ۱۴۰۵ - هتل بوتیک آلان، شیراز",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-cream text-espresso">
        {children}
        <MusicToggle />
      </body>
    </html>
  );
}
