import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-lg mx-auto px-6 py-16">
        <Link href="/" className="text-traditional-firoozeh mb-8 block">
          ← بازگشت
        </Link>

        <h1 className="font-nastaligh text-4xl text-traditional-gold mb-8 text-center">
          مراسم عقد
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📅</div>
            <h2 className="font-bold text-lg">تاریخ</h2>
            <p className="text-gray-600">۱۵ شهریور ۱۴۰۵</p>
            <p className="text-gray-500 text-sm">ساعت ۱۸:۰۰</p>
          </div>

          <div className="border-t border-gray-100 pt-6 text-center">
            <div className="text-3xl mb-2">📍</div>
            <h2 className="font-bold text-lg">مکان</h2>
            <p className="text-gray-600">[نام تالار یا حسینیه]</p>
            <p className="text-gray-500 text-sm">[آدرس کامل]</p>
          </div>

          <div className="border-t border-gray-100 pt-6 text-center">
            <div className="text-3xl mb-2">💍</div>
            <h2 className="font-bold text-lg">توضیحات</h2>
            <p className="text-gray-600 leading-relaxed">
              مراسم عقد در یک فضای سنتی و صمیمی برگزار می‌شود. از حضور شما در این روز ویژه بسیار خوشحالیم.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8 justify-center">
          <Link href="/map" className="bg-traditional-firoozeh text-white px-6 py-3 rounded-full font-bold">
            مشاهده نقشه
          </Link>
          <Link href="/" className="border border-traditional-firoozeh text-traditional-firoozeh px-6 py-3 rounded-full font-bold">
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
