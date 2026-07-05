import OnboardingSlider from "@/components/OnboardingSlider";

export default function Home() {
  return (
    <main>
      <OnboardingSlider />
      {/* ParallaxPostcard will go here in Task 4 */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">در حال آماده‌سازی...</p>
      </div>
    </main>
  );
}
