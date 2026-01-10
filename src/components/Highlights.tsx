import { motion } from "framer-motion";
import { BookOpen, Microscope, Cpu, Headphones, Palette, Code2 } from "lucide-react";

const categories = [
  { icon: BookOpen, name: "K-12 Education", color: "bg-primary" },
  { icon: Microscope, name: "Higher Education", color: "bg-secondary" },
  { icon: Cpu, name: "Ed-Tech Solutions", color: "bg-accent" },
  { icon: Headphones, name: "E-Learning Platforms", color: "bg-primary" },
  { icon: Palette, name: "STEAM Education", color: "bg-secondary" },
  { icon: Code2, name: "Skill Development", color: "bg-accent" },
];

const Highlights = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Exhibition Categories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Explore <span className="gradient-text">Innovation Zones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover cutting-edge solutions across multiple educational sectors
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 flex items-center gap-6 cursor-pointer group rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore latest innovations
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;