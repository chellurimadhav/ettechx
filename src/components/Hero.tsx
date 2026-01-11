import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <motion.section 
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-hero-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
      >
        {/* Colorful Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[100px]"
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
          className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full blur-[80px]"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px]"
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
        <motion.div
          className="absolute top-40 right-[30%] w-[250px] h-[250px] rounded-full blur-[60px]"
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
        
        {/* Colorful Decorative Shapes */}
        <motion.div
          className="absolute top-32 right-[30%] w-16 h-16 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
            opacity: 0.3
          }}
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-[20%] w-8 h-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, hsl(330 81% 60%), hsl(16 85% 57%))',
            opacity: 0.4
          }}
          animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-60 left-[15%] w-12 h-12 rounded-full"
          style={{
            background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(45 93% 58%))',
            opacity: 0.3
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-60 left-[25%] w-10 h-10 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, hsl(262 83% 58%), hsl(330 81% 60%))',
            opacity: 0.35
          }}
          animate={{ rotate: [0, -180, -360], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-[10]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl relative z-[20]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="professional-badge mb-8"
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
              transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-foreground"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                ET TECH
              </motion.span>
              <motion.span 
                className="gradient-text animate-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
              >
                {" "}X
              </motion.span>
              <br />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mt-2 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Where Business Meets Innovation
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              ET TECH X encourages innovations by connecting StartUps, Educational and Technology Leaders, major corporations and Investors responding to our World's Biggest Challenges.
            </motion.p>

            {/* Event Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.div 
                className="card-elevated flex items-center gap-3 px-5 py-4 border-2 border-transparent hover:border-primary/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.05))'
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))'
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Calendar className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                  <p className="font-bold text-foreground">11-12-13 Dec 2025</p>
                </div>
              </motion.div>
              <motion.div 
                className="card-elevated flex items-center gap-3 px-5 py-4 border-2 border-transparent hover:border-secondary/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(173 80% 40% / 0.05))'
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))'
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Venue</p>
                  <p className="font-bold text-foreground">HITEX, Hyderabad</p>
                </div>
              </motion.div>
              <motion.div 
                className="card-elevated flex items-center gap-3 px-5 py-4 border-2 border-transparent hover:border-accent/30"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(16 85% 57% / 0.05))'
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(16 85% 57%), hsl(330 81% 60%))'
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Expected</p>
                  <p className="font-bold text-foreground">8,000+ Attendees</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4"
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
                  className="text-white shadow-lg hover:shadow-2xl transition-all duration-500 font-semibold animate-gradient group"
                >
                  I want to attend
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
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