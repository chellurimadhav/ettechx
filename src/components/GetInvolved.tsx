import { motion } from "framer-motion";
import { Building2, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section3D from "./3d/Section3D";

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      <Section3D sectionId="get-involved" color="#f97316" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            Get Involved
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Join ET TECH <span className="gradient-text">X</span> 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Be part of India's premier education technology summit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Exhibit */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="card-elevated p-8 group smooth-transition"
          >
            <motion.div 
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%), hsl(330 81% 60%))'
              }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Building2 className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              EXHIBIT AT ET TECH X 2025
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Showcase, digitally or in-person, your innovations, solutions and open innovation initiatives. Sponsor and add your brand to an incredible zone. There's many ways to get involved!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="text-white shadow-md hover:shadow-xl transition-all duration-500 animate-gradient"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%), hsl(330 81% 60%), hsl(16 85% 57%))',
                  backgroundSize: '200% 200%'
                }}
              >
                Contact Us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Partner */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="card-elevated p-8 group smooth-transition"
          >
            <motion.div 
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%), hsl(330 81% 60%))'
              }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Handshake className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Partner at ET TECH X 2025
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Each year 200+ journalists, representing over 15 nationalities, attend ET TECH X Expo to share news of top-level speakers and immersive innovations to the rest of the world.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-gradient-to-r hover:from-secondary hover:via-accent hover:to-primary hover:text-white hover:border-transparent transition-all duration-500">
                Contact Us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
