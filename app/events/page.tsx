import Link from "next/link";
import BackButton from "@/components/BackButton";
import EslimiDivider from "@/components/EslimiDivider";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <BackButton />
      <div className="max-w-lg mx-auto px-6 py-20">
        <h1 className="font-markazi text-4xl text-espresso mb-12 text-center">
          جزئیات مراسم
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-espresso font-medium">تاریخ و ساعت</p>
            <p className="text-espresso/60 mt-1">۸ شهریور ۱۴۰۵</p>
            <p className="text-espresso/40 text-sm">ساعت ۱۸:۰۰</p>
          </div>

          <div className="w-12 h-px bg-gold/20 mx-auto" />

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-espresso font-medium">مکان</p>
            <p className="text-espresso/60 mt-1">هتل بوتیک آلان</p>
            <p className="text-espresso/40 text-sm">شیراز</p>
          </div>

          <div className="w-12 h-px bg-gold/20 mx-auto" />

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-espresso/60 leading-relaxed">
              سلام. با قدم‌های زیباتون شروع زندگیمون رو جشن می‌گیریم
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3 justify-center">
          <Link
            href="/map"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            نقشه
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-espresso/20 text-espresso px-6 py-3 rounded-full text-sm font-medium hover:bg-espresso/5 transition-colors"
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
      <EslimiDivider />
    </div>
  );
}
