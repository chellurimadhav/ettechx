import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const isMobile = useIsMobile();

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
    <>
      <PageLoader />
      <motion.div 
        className="min-h-screen bg-background relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Global scroll-based 3D background with parallax - Only on desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          >
            <ScrollParallax />
            <Scroll3D />
          </motion.div>
        )}
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          >
            <Navbar />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.7 }}
          >
            <Hero />
          </motion.div>
        
          <ScrollReveal direction="up" delay={0.2} duration={0.8}>
            <HeroSlider />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <QuickActions />
          </ScrollReveal>
          
          <div className="relative">
            {!isMobile && <Section3D sectionId="about" color="#3b82f6" />}
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <BusinessInnovation />
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <Statistics />
          </ScrollReveal>
          
          <div className="relative">
            {!isMobile && <Section3D sectionId="mission" color="#14b8a6" />}
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <FutureEducation />
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <GetInvolved />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} duration={0.8}>
            <Speakers />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <VideoGallery />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} duration={0.8}>
            <Testimonials />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <Partners />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} duration={0.8}>
            <ContactSection />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <CTA />
          </ScrollReveal>
          
          <ScrollReveal direction="fade" delay={0.1} duration={0.8}>
            <Footer />
          </ScrollReveal>
        </div>
        
        <VisitorRegistration
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
      </motion.div>
    </>
  );
};

export default Index;