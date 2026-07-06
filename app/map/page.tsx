import BackButton from "@/components/BackButton";
import EslimiDivider from "@/components/EslimiDivider";

export default function MapPage() {
  const lat = 29.61046060982822;
  const lng = 52.54895137987213;
  const address = encodeURIComponent("شیراز، هتل بوتیک آلان");

  return (
    <div className="min-h-screen bg-cream">
      <BackButton />
      <div className="max-w-lg mx-auto px-6 py-20">
        <h1 className="font-markazi text-4xl text-espresso mb-6 text-center">
          مسیریابی
        </h1>
        <p className="text-center text-espresso/50 text-sm mb-8">محل برگزاری مراسم عقد</p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <iframe
            src={`https://www.google.com/maps?q=${lat},${lng}&output=embed`}
            className="w-full h-80"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-espresso font-medium">آدرس:</p>
          <p className="text-espresso/60 mt-1">شیراز، هتل بوتیک آلان</p>
        </div>

        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <a
            href={`https://maps.google.com/?q=${lat},${lng}`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            Google Maps
          </a>
          <a
            href={`https://maps.apple.com/?ll=${lat},${lng}&q=${address}`}
            target="_blank"
            className="inline-flex items-center gap-2 border border-espresso/20 text-espresso px-6 py-3 rounded-full text-sm font-medium hover:bg-espresso/5 transition-colors"
          >
            Apple Maps
          </a>
        </div>
      </div>
      <EslimiDivider />
    </div>
  );
}
