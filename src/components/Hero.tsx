import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <motion.section 
      className="relative min-h-[95vh] sm:min-h-[90vh] md:min-h-[95vh] flex items-center overflow-hidden bg-hero-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: isMobile ? 0.3 : 1, ease: [0.4, 0, 0.2, 1], delay: isMobile ? 0.1 : 0.8 }}
      style={{ willChange: "opacity", transform: "translateZ(0)" }}
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0.6 : 1.2, ease: [0.4, 0, 0.2, 1], delay: isMobile ? 0.3 : 0.9 }}
      >
        {/* Colorful Gradient Orbs - Reduced on mobile */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-20 right-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53% / 0.3), hsl(262 83% 58% / 0.25))'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, 40, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 left-[5%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[70px] md:blur-[80px]"
              style={{
                background: 'linear-gradient(135deg, hsl(173 80% 40% / 0.3), hsl(16 85% 57% / 0.25))'
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, -30, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full blur-[50px] sm:blur-[70px] md:blur-[80px]"
              style={{
                background: 'linear-gradient(135deg, hsl(330 81% 60% / 0.25), hsl(45 93% 58% / 0.2))'
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <motion.div
          className="hidden sm:block absolute top-40 right-[30%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full blur-[40px] sm:blur-[50px] md:blur-[60px]"
          style={{
            background: 'linear-gradient(135deg, hsl(262 83% 58% / 0.2), hsl(221 83% 53% / 0.15))'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Colorful Decorative Shapes - Hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-32 right-[30%] w-12 h-12 lg:w-16 lg:h-16 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
            opacity: 0.3
          }}
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-40 right-[20%] w-6 h-6 md:w-8 md:h-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, hsl(330 81% 60%), hsl(16 85% 57%))',
            opacity: 0.4
          }}
          animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="hidden md:block absolute top-60 left-[15%] w-10 h-10 lg:w-12 lg:h-12 rounded-full"
          style={{
            background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(45 93% 58%))',
            opacity: 0.3
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-60 left-[25%] w-8 h-8 md:w-10 md:h-10 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, hsl(262 83% 58%), hsl(330 81% 60%))',
            opacity: 0.35
          }}
          animate={{ rotate: [0, -180, -360], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-[10]" style={{ contain: "layout style" }}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="max-w-2xl relative z-[20]" style={{ contain: "layout" }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: isMobile ? 0.1 : 0.2, duration: isMobile ? 0.4 : 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="professional-badge mb-6 sm:mb-8"
            >
              <motion.span 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold">
                India's Premier Education & Technology Summit
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: isMobile ? 0.15 : 0.3, duration: isMobile ? 0.5 : 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 text-foreground"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: isMobile ? 0.2 : 0.4, duration: isMobile ? 0.3 : 0.6 }}
              >
                ET TECH
              </motion.span>
              <motion.span 
                className="gradient-text animate-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: isMobile ? 0.25 : 0.5, 
                  duration: isMobile ? 0.3 : 0.6, 
                  type: isMobile ? "tween" : "spring", 
                  stiffness: isMobile ? undefined : 200,
                  ease: isMobile ? [0.25, 0.1, 0.25, 1] : undefined
                }}
              >
                {" "}X
              </motion.span>
              <br />
              <motion.span 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-muted-foreground mt-2 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.3 : 0.6, duration: isMobile ? 0.3 : 0.6 }}
              >
                Where Business Meets Innovation
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.35 : 0.7, duration: isMobile ? 0.3 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 sm:px-0"
            >
              ET TECH X encourages innovations by connecting StartUps, Educational and Technology Leaders, major corporations and Investors responding to our World's Biggest Challenges.
            </motion.p>

            {/* Event Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.4 : 0.8, duration: isMobile ? 0.3 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0"
            >
              <motion.div 
                className="card-elevated flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-3 sm:py-4 border-2 border-transparent hover:border-primary/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.05))',
                  willChange: isMobile ? "auto" : "transform",
                  transform: "translateZ(0)"
                }}
                whileHover={isMobile ? {} : { scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
                    willChange: isMobile ? "auto" : "transform",
                    transform: "translateZ(0)"
                  }}
                  whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Date</p>
                  <p className="font-bold text-foreground text-sm sm:text-base">11-12-13 Dec 2025</p>
                </div>
              </motion.div>
              <motion.div 
                className="card-elevated flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-3 sm:py-4 border-2 border-transparent hover:border-secondary/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(173 80% 40% / 0.05))',
                  willChange: isMobile ? "auto" : "transform",
                  transform: "translateZ(0)"
                }}
                whileHover={isMobile ? {} : { scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))',
                    willChange: isMobile ? "auto" : "transform",
                    transform: "translateZ(0)"
                  }}
                  whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Venue</p>
                  <p className="font-bold text-foreground text-sm sm:text-base">HITEX, Hyderabad</p>
                </div>
              </motion.div>
              <motion.div 
                className="card-elevated flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-3 sm:py-4 border-2 border-transparent hover:border-accent/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(16 85% 57% / 0.05))',
                  willChange: isMobile ? "auto" : "transform",
                  transform: "translateZ(0)"
                }}
                whileHover={isMobile ? {} : { scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(16 85% 57%), hsl(330 81% 60%))',
                    willChange: isMobile ? "auto" : "transform",
                    transform: "translateZ(0)"
                  }}
                  whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Expected</p>
                  <p className="font-bold text-foreground text-sm sm:text-base">8,000+ Attendees</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.45 : 0.9, duration: isMobile ? 0.3 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-3 sm:gap-4 px-2 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="xl" 
                  onClick={() => {
                    const event = new CustomEvent('openRegistration');
                    window.dispatchEvent(event);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%), hsl(330 81% 60%), hsl(16 85% 57%))',
                    backgroundSize: '200% 200%'
                  }}
                  className="text-white shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold animate-gradient group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  I want to attend
                  {isMobile ? (
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block" />
                  ) : (
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block" />
                    </motion.span>
                  )}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:text-primary transition-colors" />
                  Watch Highlights
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Countdown Timer - Right Side with 3D Background */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-2xl">
              <CountdownTimer targetDate="2025-12-11T09:00:00" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="lg:hidden absolute bottom-8 left-4 right-4 z-20"
      >
        <CountdownTimer targetDate="2025-12-11T09:00:00" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;