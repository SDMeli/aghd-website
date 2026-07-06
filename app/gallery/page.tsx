import Link from "next/link";
import PersianGallery from "@/components/PersianGallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-traditional-firoozeh mb-8 block">
          ← بازگشت
        </Link>
        <h1 className="font-nastaligh text-4xl text-traditional-gold mb-12 md:mb-8 text-center leading-relaxed">
          گالری خاطرات
        </h1>
        <PersianGallery />
      </div>
    </div>
  );
}
