import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import QuickActions from "@/components/QuickActions";
import BusinessInnovation from "@/components/BusinessInnovation";
import Statistics from "@/components/Statistics";
import FutureEducation from "@/components/FutureEducation";
import GetInvolved from "@/components/GetInvolved";
import Speakers from "@/components/Speakers";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import VisitorRegistration from "@/components/VisitorRegistration";
import VideoGallery from "@/components/VideoGallery";
import Scroll3D from "@/components/3d/Scroll3D";
import Section3D from "@/components/3d/Section3D";
import ScrollParallax from "@/components/3d/ScrollParallax";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const handleOpenRegistration = () => {
      setIsRegistrationOpen(true);
    };

    window.addEventListener('openRegistration', handleOpenRegistration);
    return () => {
      window.removeEventListener('openRegistration', handleOpenRegistration);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global scroll-based 3D background with parallax */}
      <ScrollParallax />
      <Scroll3D />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HeroSlider />
        <QuickActions />
        
        <div className="relative">
          <Section3D sectionId="about" color="#3b82f6" />
          <BusinessInnovation />
        </div>
        
        <Statistics />
        
        <div className="relative">
          <Section3D sectionId="mission" color="#14b8a6" />
          <FutureEducation />
        </div>
        
        <GetInvolved />
        <Speakers />
        <VideoGallery />
        <Testimonials />
        <Partners />
        <ContactSection />
        <CTA />
        <Footer />
      </div>
      
      <VisitorRegistration
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
};

export default Index;