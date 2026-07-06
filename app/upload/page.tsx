import BackButton from "@/components/BackButton";
import EslimiDivider from "@/components/EslimiDivider";
import ClientUploadZone from "@/components/ClientUploadZone";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-cream">
      <BackButton />
      <div className="max-w-lg mx-auto px-6 py-20">
        <h1 className="font-markazi text-4xl text-espresso mb-6 text-center">
          آپلود خاطرات
        </h1>
        <p className="text-center text-espresso/50 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          عکس و فیلم‌هایی که از این شب گرفتید رو برامون بفرستید تا برای همیشه بمونه
        </p>
        <ClientUploadZone />
      </div>
      <EslimiDivider />
    </div>
  );
}
