import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const slides = [
  {
    title: "Discover India's Leading Summit on Educational Equipment and education Solutions",
  },
  {
    title: "Discover India's Leading Summit on Educational Equipment and education Solutions",
  },
  {
    title: "Discover India's Leading Summit on Educational Equipment and education Solutions",
  },
  {
    title: "Discover India's Leading Summit on Educational Equipment and education Solutions",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden" style={{ contain: "layout style paint" }}>
      {isMobile ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {slides[currentSlide].title}
            </h2>
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {slides[currentSlide].title}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
