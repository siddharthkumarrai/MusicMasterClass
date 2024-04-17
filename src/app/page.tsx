import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChoseUs />
    <MusicSchoolTestimonial />
    <UpcomingWebinars />
    <Instructor/>
    <Footer />
    </main>
  );
}
