import Link from "next/link";

export default function MapPage() {
  const address = encodeURIComponent("[آدرس محل برگزاری مراسم]");

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-lg mx-auto px-6 py-16">
        <Link href="/" className="text-traditional-firoozeh mb-8 block">
          ← بازگشت
        </Link>

        <h1 className="font-nastaligh text-4xl text-traditional-gold mb-2 text-center">
          مسیریابی
        </h1>
        <p className="text-center text-gray-500 mb-8">محل برگزاری مراسم عقد</p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_MAPS_API_KEY&q=${address}&language=fa`}
            className="w-full h-80"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <p className="font-bold text-lg">آدرس:</p>
          <p className="text-gray-600 mt-1">[آدرس کامل محل برگزاری]</p>
        </div>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href={`https://maps.google.com/?q=${address}`}
            target="_blank"
            className="bg-traditional-firoozeh text-white px-6 py-3 rounded-full font-bold"
          >
            باز کردن در Google Maps
          </a>
          <a
            href={`https://maps.apple.com/?q=${address}`}
            target="_blank"
            className="border border-traditional-firoozeh text-traditional-firoozeh px-6 py-3 rounded-full font-bold"
          >
            Apple Maps
          </a>
        </div>
      </div>
    </div>
  );
}
