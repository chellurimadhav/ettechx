import { motion } from "framer-motion";
import { 
  Presentation, 
  Users, 
  Building2, 
  Mic2, 
  Trophy, 
  GraduationCap 
} from "lucide-react";

const actions = [
  {
    icon: Presentation,
    title: "Conference",
    description: "50+ Sessions & Keynotes",
    color: "from-primary to-neon-blue",
  },
  {
    icon: Users,
    title: "Visitors",
    description: "Free Registration",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: Building2,
    title: "Exhibitors",
    description: "500+ Brands Showcase",
    color: "from-neon-purple to-pink-500",
  },
  {
    icon: Mic2,
    title: "Speakers",
    description: "Industry Leaders",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Trophy,
    title: "Awards",
    description: "Excellence Recognition",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: GraduationCap,
    title: "Workshops",
    description: "Hands-on Learning",
    color: "from-yellow-500 to-accent",
  },
];

const QuickActions = () => {
  return (
    <section className="py-8 relative -mt-16 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={`#${action.title.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-5 flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}
              >
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;