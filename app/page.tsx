import HeroSection from "@/components/HeroSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import EslimiDivider from "@/components/EslimiDivider";
import UploadSection from "@/components/UploadSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventDetailsSection />
      <EslimiDivider />
      <UploadSection />
      <EslimiDivider />
      <GalleryPreviewSection />
      <Footer />
    </main>
  );
}
