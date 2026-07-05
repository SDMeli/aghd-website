"use client";

import { useState, useEffect } from "react";
import { fetchAlbumMediaItems } from "@/lib/google-photos";

interface MediaItem {
  id: string;
  baseUrl: string;
  filename: string;
  description?: string;
}

export default function PersianGallery() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetchAlbumMediaItems().then(setItems).catch(() => {});
  }, []);

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
            onClick={() => setSelected(item.baseUrl)}
            className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition"
          >
            <img src={`${item.baseUrl}=w400-h400`} alt={item.filename} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <img src={`${selected}=w1200`} alt="" className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </>
  );
}
