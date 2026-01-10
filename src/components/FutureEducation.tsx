import { motion } from "framer-motion";
import { Rocket, Users, Handshake } from "lucide-react";
import Background3D from "./3d/Background3D";

const cards = [
  {
    icon: Rocket,
    title: "LEAD THE FUTURE",
    description: "Plunge into the latest tech trends, test the newest in AI, cyber security, metaverse and more; meet the world's leading hardware and software developers, and source the newest innovations.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "STARTUP PARADISE",
    description: "Meet 50+ startups (from early-stage to unicorns) and 500+ Investors (from VC's, Investment Funds and Angels).",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Handshake,
    title: "GET BUSINESS DONE",
    description: "Network with the trailblazers and game-changers leading the future of technology. Get inspired, share ideas, and meet your next business partner as we reshape the education industry.",
    gradient: "from-accent to-primary",
  },
];

const FutureEducation = () => {
  return (
    <section id="mission" className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      <Background3D />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Building the Future of <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover how we're transforming education through innovation and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="card-elevated overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${card.gradient}`} />
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureEducation;
