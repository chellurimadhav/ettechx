import { motion } from "framer-motion";
import { Lightbulb, Target, Globe, Rocket, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Discover breakthrough EdTech solutions and cutting-edge learning technologies.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "Strategic Networking",
    description: "Connect with decision-makers from top educational institutions and tech companies.",
    color: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Global Perspectives",
    description: "Learn from international experts shaping the future of education worldwide.",
    color: "bg-accent",
  },
  {
    icon: Rocket,
    title: "Startup Showcase",
    description: "Explore innovative startups revolutionizing the education landscape.",
    color: "bg-primary",
  },
];

const highlights = [
  "500+ EdTech exhibitors from across the globe",
  "50+ curated conference sessions & workshops",
  "Exclusive networking opportunities with industry leaders",
  "Live product demonstrations and hands-on experiences",
  "Awards ceremony recognizing excellence in education",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-section-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/4 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="professional-badge mb-4">
              About ET Tech X
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
              ET TECH <span className="gradient-text">X</span>
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              This is where Business meets Innovation
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ET TECH X encourages innovations by connecting StartUps, Educational
              and Technology Leaders, major corporations and Investors responding
              to our World's Biggest Challenges.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

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
                  className="text-center p-4 bg-card rounded-xl border border-border"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1">
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
                className="bg-card p-6 group cursor-pointer rounded-xl border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
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