import BackButton from "@/components/BackButton";
import EslimiDivider from "@/components/EslimiDivider";
import PersianGallery from "@/components/PersianGallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <BackButton />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-markazi text-4xl text-espresso mb-12 text-center">
          گالری خاطرات
        </h1>
        <PersianGallery />
      </div>
      <EslimiDivider />
    </div>
  );
}
