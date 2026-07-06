import Link from "next/link";
import ClientUploadZone from "@/components/ClientUploadZone";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-cream relative">
      <Link href="/" className="absolute top-4 left-4 z-10 text-traditional-firoozeh bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md">
        ← بازگشت
      </Link>
      <div className="max-w-lg mx-auto px-6 py-16">
        <h1 className="font-nastaligh text-4xl text-traditional-gold mb-6 text-center leading-relaxed">
          آپلود خاطرات
        </h1>
        <p className="text-center text-gray-500 mb-8">
          عکس و فیلم‌هایی که از این شب گرفتید رو برامون بفرستید
        </p>
        <ClientUploadZone />
      </div>
    </div>
  );
}
