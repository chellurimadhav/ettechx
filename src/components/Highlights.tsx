import { motion } from "framer-motion";
import { BookOpen, Microscope, Cpu, Headphones, Palette, Code2 } from "lucide-react";

const categories = [
  { icon: BookOpen, name: "K-12 Education", color: "from-blue-500 to-cyan-500" },
  { icon: Microscope, name: "Higher Education", color: "from-purple-500 to-pink-500" },
  { icon: Cpu, name: "Ed-Tech Solutions", color: "from-green-500 to-emerald-500" },
  { icon: Headphones, name: "E-Learning Platforms", color: "from-orange-500 to-red-500" },
  { icon: Palette, name: "STEAM Education", color: "from-yellow-500 to-orange-500" },
  { icon: Code2, name: "Skill Development", color: "from-indigo-500 to-purple-500" },
];

const Highlights = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Exhibition Categories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
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
              className="glass-card p-8 flex items-center gap-6 cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
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