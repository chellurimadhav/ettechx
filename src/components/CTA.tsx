import { motion } from "framer-motion";
import { ArrowRight, Ticket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Shape the{" "}
              <span className="gradient-text">Future of Education?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of educators, innovators, and technology leaders at
              India's premier EdTech summit. Register now for early bird access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Visitor Registration */}
            <div className="glass-card p-8 group hover:neon-border transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Ticket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                Register as Visitor
              </h3>
              <p className="text-muted-foreground mb-6">
                Free entry for educators, students, and professionals. Get access to
                all exhibition halls and networking sessions.
              </p>
              <Button variant="neon" className="w-full group">
                Register Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Exhibitor Booking */}
            <div className="glass-card p-8 group hover:neon-border transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Building2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                Book Exhibition Space
              </h3>
              <p className="text-muted-foreground mb-6">
                Showcase your products to 10,000+ potential customers. Premium booth
                locations available with early bird discounts.
              </p>
              <Button variant="outline" className="w-full group">
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;