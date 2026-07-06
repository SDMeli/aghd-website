import Link from "next/link";
import ClientUploadZone from "@/components/ClientUploadZone";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-lg mx-auto px-6 py-16">
        <Link href="/" className="text-traditional-firoozeh mb-8 block">
          ← بازگشت
        </Link>
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
