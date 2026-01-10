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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8 group"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              EXHIBIT AT ET TECH X 2025
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Showcase, digitally or in-person, your innovations, solutions and open innovation initiatives. Sponsor and add your brand to an incredible zone. There's many ways to get involved!
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Partner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8 group"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Partner at ET TECH X 2025
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Each year 200+ journalists, representing over 15 nationalities, attend ET TECH X Expo to share news of top-level speakers and immersive innovations to the rest of the world.
            </p>
            <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
