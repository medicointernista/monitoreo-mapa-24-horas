import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import BenefitsSection from "@/components/sections/benefits";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA] font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ServicesSection />
        <AboutSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
