"use client";

import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export default function UploadZone() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const handleSuccess = () => {
    setDone(true);
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
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
        options={{
          folder: "wedding_aghd",
          tags: ["wedding_aghd", name].filter(Boolean),
          clientAllowedFormats: ["image", "video"],
          maxFileSize: 10000000,
          multiple: true,
        }}
        onSuccess={handleSuccess}
      >
        {({ open }) => (
          <div>
            <div
              onClick={() => open()}
              className="border-2 border-dashed border-traditional-gold rounded-2xl p-12 text-center cursor-pointer hover:bg-gold/5 transition"
            >
              <div className="text-4xl mb-4">📸</div>
              <p className="text-gray-600">برای آپلود کلیک کنید</p>
              <p className="text-sm text-gray-400 mt-1">عکس و فیلم می‌تونید آپلود کنید</p>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="اسمتون (اختیاری)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-200"
              />
            </div>
          </div>
        )}
      </CldUploadWidget>
    </div>
  );
}
