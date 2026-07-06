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
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="text-2xl font-bold mb-2">سپاسگزاریم!</h2>
        <p className="text-gray-600">عکس‌هاتون با موفقیت آپلود شد.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        capture="environment"
        className="hidden"
        onChange={handleFile}
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="bg-traditional-gold text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-traditional-gold/80 transition disabled:opacity-50"
      >
        {uploading ? "در حال آپلود..." : "📸 انتخاب عکس"}
      </button>
      <p className="text-gray-500 mt-4 text-sm">عکس یا فیلم مورد نظرت رو انتخاب کن</p>
    </div>
  );
}
