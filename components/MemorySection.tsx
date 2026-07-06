"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

interface GalleryItem {
  id: string;
}

export default function MemorySection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [newPhotoId, setNewPhotoId] = useState<string | null>(null);

  const fetchGallery = useCallback(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => setItems((data.items as GalleryItem[]).slice(0, 4)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  useEffect(() => {
    if (!uploading) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [uploading]);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
    formData.append("tags", "wedding_aghd");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
        { method: "POST", body: formData }
      );
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setNewPhotoId(data.public_id);
      setDone(true);
      fetchGallery();
    } catch {
      alert("آپلود ناموفق بود. دوباره تلاش کنید.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-6 py-16">
      <div className="max-w-3xl mx-auto w-full text-center">
        <p className="font-markazi text-gold text-lg mb-2 tracking-widest">خاطره</p>
        <h2 className="font-markazi text-3xl md:text-4xl text-espresso mb-8">
          آپلود عکس و فیلم
        </h2>
        <p className="text-espresso/60 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          اگه از این شب عکس یا فیلمی گرفتی، برامون بفرست تا برای همیشه بمونه
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFile}
        />

        {uploading ? (
          <div className="mb-12">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4913A" strokeWidth="2" strokeLinecap="round" className="animate-spin">
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
            </div>
            <p className="text-espresso font-medium">در حال آپلود...</p>
            <p className="text-espresso/50 text-sm mt-1">لطفاً صفحه رو نبند</p>
          </div>
        ) : done ? (
          <div className="mb-12">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-espresso font-medium">سپاسگزاریم!</p>
            <p className="text-espresso/50 text-sm mt-1">عکست با موفقیت آپلود شد</p>
            <button
              onClick={() => { setDone(false); setNewPhotoId(null); }}
              className="mt-4 inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold/80 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              آپلود یکی دیگه
            </button>
          </div>
        ) : (
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors mb-12"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            انتخاب عکس یا فیلم
          </button>
        )}

        <div className="border-t border-espresso/10 pt-10">
          <p className="font-markazi text-gold text-lg mb-2 tracking-widest">خاطرات</p>
          <h3 className="font-markazi text-2xl md:text-3xl text-espresso mb-8">
            گالری عکس
          </h3>

          {items.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`aspect-square rounded-lg overflow-hidden bg-muted ${
                    item.id === newPhotoId ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : ""
                  }`}
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
          ) : (
            <div className="py-8 text-espresso/40 text-sm">
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
      </div>
    </div>
  );
}
