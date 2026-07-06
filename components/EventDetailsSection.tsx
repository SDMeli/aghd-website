import Link from "next/link";

export default function EventDetailsSection() {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/alan-hotel.jpg"
          alt="هتل بوتیک آلان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-markazi text-gold text-lg mb-2 tracking-widest">مکان مراسم</p>
        <h2 className="font-markazi text-3xl md:text-4xl text-amber-dark mb-10">
          هتل بوتیک آلان
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-center mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4913A" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-espresso font-amiri text-lg">تاریخ و ساعت</p>
            <p className="text-espresso/70 text-sm mt-1">۸ شهریور ۱۴۰۵، ساعت ۱۸:۰۰</p>
          </div>

          <div className="w-12 h-px bg-gold/30 mx-auto" />

          <div>
            <div className="flex justify-center mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4913A" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-espresso font-amiri text-lg">مکان</p>
            <p className="text-espresso/70 text-sm mt-1">شیراز، هتل بوتیک آلان</p>
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </div>
  );
}
