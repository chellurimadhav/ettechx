import { motion } from "framer-motion";
import { ArrowRight, Ticket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-section-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
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
            <div className="bg-card p-8 group hover:shadow-xl transition-all duration-300 rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Ticket className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                Register as Visitor
              </h3>
              <p className="text-muted-foreground mb-6">
                Free entry for educators, students, and professionals. Get access to
                all exhibition halls and networking sessions.
              </p>
              <Button className="w-full group bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg">
                Register Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Exhibitor Booking */}
            <div className="bg-card p-8 group hover:shadow-xl transition-all duration-300 rounded-2xl border border-border">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                Book Exhibition Space
              </h3>
              <p className="text-muted-foreground mb-6">
                Showcase your products to 10,000+ potential customers. Premium booth
                locations available with early bird discounts.
              </p>
              <Button variant="outline" className="w-full group border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
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