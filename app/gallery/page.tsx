import Link from "next/link";
import PersianGallery from "@/components/PersianGallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream relative">
      <Link href="/" className="absolute top-4 left-4 z-10 text-traditional-firoozeh bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md">
        ← بازگشت
      </Link>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-nastaligh text-4xl text-traditional-gold mb-12 md:mb-8 text-center leading-relaxed">
          گالری خاطرات
        </h1>
        <PersianGallery />
      </div>
    </div>
  );
}
