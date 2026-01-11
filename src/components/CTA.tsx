import { motion } from "framer-motion";
import { ArrowRight, Ticket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden section-divider">
      {/* Premium Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(221 83% 53% / 0.1), hsl(262 83% 58% / 0.1), hsl(173 80% 40% / 0.1), hsl(16 85% 57% / 0.1))'
        }}
      />
      
      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(221 83% 53% / 0.3), transparent)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(173 80% 40% / 0.3), transparent)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest mb-6"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53% / 0.2), hsl(262 83% 58% / 0.2))',
                border: '1px solid hsl(221 83% 53% / 0.3)'
              }}
            >
              Join Us Now
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Join ET TECH <span className="gradient-text">X</span> 2025
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Be part of India's leading summit on educational equipment and solutions. Register as a visitor or book your exhibition space today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Visitor Registration */}
            <motion.div 
              className="relative p-8 rounded-3xl group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.05))',
                border: '2px solid hsl(221 83% 53% / 0.2)',
                boxShadow: '0 20px 60px hsl(221 83% 53% / 0.2)'
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div 
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
                  boxShadow: '0 10px 30px hsl(221 83% 53% / 0.4)'
                }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Ticket className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Visitor Registration
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Free entry for educators, students, and professionals. Get access to
                all exhibition halls, conferences, and networking sessions.
              </p>
              <Button 
                onClick={() => {
                  const event = new CustomEvent('openRegistration');
                  window.dispatchEvent(event);
                }}
                className="w-full group h-12 text-base font-semibold shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
                  boxShadow: '0 10px 30px hsl(221 83% 53% / 0.4)'
                }}
              >
                Visitor Registration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            {/* Exhibitor Booking */}
            <motion.div 
              className="relative p-8 rounded-3xl group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(173 80% 40% / 0.05))',
                border: '2px solid hsl(173 80% 40% / 0.2)',
                boxShadow: '0 20px 60px hsl(173 80% 40% / 0.2)'
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div 
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))',
                  boxShadow: '0 10px 30px hsl(173 80% 40% / 0.4)'
                }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Book A Stall
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Showcase your products to 8,000+ trade professionals. Premium booth
                locations available with early bird discounts.
              </p>
              <Button 
                variant="outline" 
                className="w-full group h-12 text-base font-semibold border-2 shadow-xl"
                style={{
                  borderColor: 'hsl(173 80% 40%)',
                  color: 'hsl(173 80% 40%)',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'hsl(173 80% 40%)';
                  e.currentTarget.style.borderColor = 'hsl(173 80% 40%)';
                }}
              >
                Book A Stall
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;