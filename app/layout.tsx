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
