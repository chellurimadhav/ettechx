import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import AboutSection from "@/components/AboutSection";
import Statistics from "@/components/Statistics";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuickActions />
      <AboutSection />
      <Statistics />
      <Speakers />
      <Highlights />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;