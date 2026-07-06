import HeroSection from "@/components/HeroSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import MemorySection from "@/components/MemorySection";
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
      <section className="snap-start snap-always">
        <MemorySection />
      </section>
      <section className="snap-end">
        <Footer />
      </section>
    </main>
  );
}
