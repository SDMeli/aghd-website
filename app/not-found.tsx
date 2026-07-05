import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6">
      <h1 className="font-nastaligh text-6xl text-traditional-gold mb-4">۴۰۴</h1>
      <p className="text-gray-600 mb-8">صفحه‌ای که دنبالش هستید پیدا نشد!</p>
      <Link href="/" className="bg-traditional-gold text-white px-8 py-3 rounded-full font-bold">
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}
