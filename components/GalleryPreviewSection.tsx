"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

interface GalleryItem {
  id: string;
}

export default function GalleryPreviewSection() {
  const [items, setItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => setItems((data.items as GalleryItem[]).slice(0, 4)))
      .catch(() => {});
  }, []);

  return (
    <section className="bg-cream py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-markazi text-gold text-lg mb-2 tracking-widest">خاطرات</p>
        <h2 className="font-markazi text-3xl md:text-4xl text-espresso mb-10">
          گالری عکس
        </h2>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mb-8">
            {items.map((item) => (
              <div key={item.id} className="aspect-square rounded-lg overflow-hidden bg-muted">
                <CldImage
                  src={item.id}
                  alt=""
                  width={400}
                  height={400}
                  crop="fill"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-espresso/40 text-sm">
            <p>هنوز خاطره‌ای ثبت نشده</p>
          </div>
        )}

        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 border border-espresso/20 text-espresso px-6 py-3 rounded-full text-sm font-medium hover:bg-espresso/5 transition-colors"
        >
          مشاهده همه خاطرات
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
