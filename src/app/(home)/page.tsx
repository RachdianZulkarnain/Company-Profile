import CompanyOverview from "@/components/CompanyOverview";
import Faq from "@/components/Faq";
import Footer from "@/components/footerSection";
import HeroSection from "@/components/HeroSection";
import { Projects } from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <HeroSection/>
      {/* <CompanyOverview/> */}
      <Projects/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </main>
  );
}
