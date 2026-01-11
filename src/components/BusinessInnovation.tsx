import { motion } from "framer-motion";
import { Award, Users, Presentation, Building2 } from "lucide-react";
import Background3D from "./3d/Background3D";
import Icon3D from "./3d/Icon3D";

const features = [
  {
    icon: Award,
    icon3D: 'award' as const,
    title: "Awards",
    description: "Recognizing excellence in education and technology",
    color3D: "#3b82f6",
  },
  {
    icon: Users,
    icon3D: 'users' as const,
    title: "Workshops",
    description: "Interactive learning sessions with industry experts",
    color3D: "#14b8a6",
  },
  {
    icon: Presentation,
    icon3D: 'presentation' as const,
    title: "Conference",
    description: "Thought-provoking discussions and keynotes",
    color3D: "#3b82f6",
  },
  {
    icon: Building2,
    icon3D: 'building' as const,
    title: "Exhibition",
    description: "Showcase of cutting-edge educational solutions",
    color3D: "#f97316",
  },
];

const BusinessInnovation = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      <Background3D />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            About ET TECH X
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            ET TECH <span className="gradient-text">X</span>
          </h2>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            This is where Business meets Innovation
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ET TECH X encourages innovations by connecting StartUps, Educational and Technology Leaders, major corporations and Investors responding to our World's Biggest Challenges.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="card-elevated p-8 text-center group cursor-pointer smooth-transition border-2 border-transparent hover:border-primary/30"
              style={{
                background: index % 4 === 0 
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.06), hsl(262 83% 58% / 0.04))'
                  : index % 4 === 1
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(173 80% 40% / 0.06), hsl(16 85% 57% / 0.04))'
                  : index % 4 === 2
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(262 83% 58% / 0.06), hsl(330 81% 60% / 0.04))'
                  : 'linear-gradient(135deg, hsl(0 0% 100%), hsl(16 85% 57% / 0.06), hsl(330 81% 60% / 0.04))'
              }}
            >
              <div 
                className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden"
                style={{
                  background: index % 4 === 0 
                    ? 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%), hsl(330 81% 60%))'
                    : index % 4 === 1
                    ? 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%), hsl(45 93% 58%))'
                    : index % 4 === 2
                    ? 'linear-gradient(135deg, hsl(262 83% 58%), hsl(330 81% 60%), hsl(16 85% 57%))'
                    : 'linear-gradient(135deg, hsl(16 85% 57%), hsl(330 81% 60%), hsl(262 83% 58%))'
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon3D type={feature.icon3D} color={feature.color3D} />
                </div>
                <feature.icon className="w-8 h-8 text-white relative z-10 group-hover:opacity-0 transition-opacity" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInnovation;
