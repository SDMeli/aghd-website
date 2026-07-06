import HeroSection from "@/components/HeroSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import UploadSection from "@/components/UploadSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-dvh overflow-y-auto snap-y snap-mandatory">
      <section className="snap-start snap-always h-dvh">
        <HeroSection />
      </section>
      <section className="snap-start snap-always h-dvh">
        <EventDetailsSection />
      </section>
      <section className="snap-start snap-always h-dvh">
        <UploadSection />
      </section>
      <section className="snap-start snap-always h-dvh">
        <GalleryPreviewSection />
      </section>
      <section className="snap-end">
        <Footer />
      </section>
    </main>
  );
}
