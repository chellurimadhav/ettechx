import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import Hero3D from "./3d/Hero3D";
import Hero3DProminent from "./3d/Hero3DProminent";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* 3D Background with Floating Objects */}
      <Hero3D />
      
      {/* Prominent 3D Object */}
      <Hero3DProminent />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[80px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Decorative Shapes */}
        <motion.div
          className="absolute top-32 right-[30%] w-16 h-16 border-2 border-primary/15 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-[20%] w-8 h-8 bg-accent/15 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-60 left-[15%] w-12 h-12 border-2 border-secondary/15 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-[10]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl relative z-[20]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="professional-badge mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold">
                India's Premier Education & Technology Summit
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-foreground"
            >
              ET TECH <span className="gradient-text">X</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mt-2 block">
                Where Business Meets Innovation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              ET TECH X encourages innovations by connecting StartUps, Educational and Technology Leaders, major corporations and Investors responding to our World's Biggest Challenges.
            </motion.p>

            {/* Event Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="card-elevated flex items-center gap-3 px-5 py-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                  <p className="font-bold text-foreground">11-12-13 Dec 2025</p>
                </div>
              </div>
              <div className="card-elevated flex items-center gap-3 px-5 py-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Venue</p>
                  <p className="font-bold text-foreground">HITEX, Hyderabad</p>
                </div>
              </div>
              <div className="card-elevated flex items-center gap-3 px-5 py-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Expected</p>
                  <p className="font-bold text-foreground">8,000+ Attendees</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="xl" 
                onClick={() => {
                  const event = new CustomEvent('openRegistration');
                  window.dispatchEvent(event);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                I want to attend
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group border-2 hover:border-primary/50 hover:bg-primary/5">
                <Play className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Watch Highlights
              </Button>
            </motion.div>
          </div>

          {/* Countdown Timer - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <CountdownTimer targetDate="2025-12-11T09:00:00" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="lg:hidden absolute bottom-8 left-4 right-4"
      >
        <CountdownTimer targetDate="2025-12-11T09:00:00" />
      </motion.div>
    </section>
  );
};

export default Hero;