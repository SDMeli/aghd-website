"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

interface GalleryItem {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function PersianGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => setItems(data.items))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>هیچ خاطره‌ای آپلود نشده است.</p>
        <p className="text-sm mt-2">اولین خاطره را شما ثبت کنید!</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item.id)}
            className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition"
          >
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

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <CldImage
            src={selected}
            alt=""
            width={1200}
            height={900}
            crop="fit"
            className="max-w-full max-h-full rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
