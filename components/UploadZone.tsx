"use client";

import { useState, useRef } from "react";
import { uploadToGooglePhotos } from "@/lib/google-photos";

export default function UploadZone() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    try {
      for (const file of files) {
        await uploadToGooglePhotos(file, name || undefined);
      }
      setDone(true);
    } catch (err) {
      alert("مشکلی پیش اومد. دوباره تلاش کنید.");
    } finally {
      setUploading(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="text-2xl font-bold mb-2">سپاسگزاریم!</h2>
        <p className="text-gray-600">عکس‌هاتون با موفقیت آپلود شد. خاطره‌ای شد برای همیشه.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-traditional-gold rounded-2xl p-12 text-center cursor-pointer hover:bg-gold/5 transition"
      >
        <div className="text-4xl mb-4">📸</div>
        <p className="text-gray-600">برای آپلود کلیک کنید</p>
        <p className="text-sm text-gray-400 mt-1">عکس و فیلم می‌تونید آپلود کنید</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">{files.length} فایل انتخاب شد</p>
          <input
            type="text"
            placeholder="اسمتون (اختیاری)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-3 p-3 rounded-xl border border-gray-200"
          />
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full mt-3 bg-traditional-gold text-white py-3 rounded-xl font-bold disabled:opacity-50"
          >
            {uploading ? "در حال آپلود..." : "آپلود"}
          </button>
        </div>
      )}
    </div>
  );
}
