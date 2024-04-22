import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import Upcommingwebinars from "@/components/Upcommingwebinars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <TestimonialCards />
      <Upcommingwebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
