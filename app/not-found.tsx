import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <h1 className="font-markazi text-7xl text-gold mb-4">۴۰۴</h1>
      <p className="text-espresso/60 mb-8">صفحه‌ای که دنبالش هستید پیدا نشد!</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
      >
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}
