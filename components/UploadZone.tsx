"use client";

import { useRef, useState } from "react";

export default function UploadZone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

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
      setDone(true);
    } catch {
      alert("آپلود ناموفق بود. دوباره تلاش کنید.");
    } finally {
      setUploading(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-espresso font-medium">سپاسگزاریم!</h2>
        <p className="text-espresso/50 text-sm mt-1">عکست با موفقیت آپلود شد</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFile}
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors disabled:opacity-50"
      >
        {uploading ? (
          "در حال آپلود..."
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            انتخاب عکس یا فیلم
          </>
        )}
      </button>
      <p className="text-espresso/40 text-sm mt-4">عکس یا فیلم مورد نظرت رو انتخاب کن</p>
    </div>
  );
}
