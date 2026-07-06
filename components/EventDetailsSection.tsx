import Link from "next/link";

export default function EventDetailsSection() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-markazi text-gold text-lg mb-2 tracking-widest">دعوت</p>
        <h2 className="font-markazi text-3xl md:text-4xl text-espresso mb-10">
          جزئیات مراسم
        </h2>

        <div className="space-y-8">
          <div>
            <div className="flex justify-center mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-espresso font-medium">تاریخ و ساعت</p>
            <p className="text-espresso/60 text-sm mt-1">۸ شهریور ۱۴۰۵، ساعت ۱۸:۰۰</p>
          </div>

          <div className="w-12 h-px bg-gold/20 mx-auto" />

          <div>
            <div className="flex justify-center mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-gold">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-espresso font-medium">مکان</p>
            <p className="text-espresso/60 text-sm mt-1">هتل بوتیک آلان، شیراز</p>
          </div>
        </div>

        <div className="flex gap-3 justify-center mt-10">
          <Link
            href="/map"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            مشاهده نقشه
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 border border-espresso/20 text-espresso px-6 py-3 rounded-full text-sm font-medium hover:bg-espresso/5 transition-colors"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </section>
  );
}
