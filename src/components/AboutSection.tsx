import { motion } from "framer-motion";
import { Lightbulb, Target, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Discover breakthrough EdTech solutions and cutting-edge learning technologies.",
  },
  {
    icon: Target,
    title: "Strategic Networking",
    description: "Connect with decision-makers from top educational institutions and tech companies.",
  },
  {
    icon: Globe,
    title: "Global Perspectives",
    description: "Learn from international experts shaping the future of education worldwide.",
  },
  {
    icon: Rocket,
    title: "Startup Showcase",
    description: "Explore innovative startups revolutionizing the education landscape.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About ET Tech X
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              This is Where{" "}
              <span className="gradient-text">Business</span> Meets{" "}
              <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ET TECH X encourages innovations by connecting StartUps, Educational
              and Technology Leaders, major corporations and Investors responding
              to our World's Biggest Challenges. Join India's most influential
              gathering of education and technology pioneers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "7th", label: "Edition" },
                { number: "500+", label: "Exhibitors" },
                { number: "50+", label: "Sessions" },
                { number: "10K+", label: "Visitors" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;