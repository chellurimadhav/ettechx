import { motion } from "framer-motion";
import { 
  Presentation, 
  Users, 
  Building2, 
  Mic2, 
  Trophy, 
  GraduationCap 
} from "lucide-react";
import Icon3D from "./3d/Icon3D";

const actions = [
  {
    icon: Presentation,
    icon3D: 'presentation' as const,
    title: "Conference",
    description: "50+ Sessions & Keynotes",
    color: "bg-primary",
    color3D: "#3b82f6",
  },
  {
    icon: Users,
    icon3D: 'users' as const,
    title: "Visitors",
    description: "Free Registration",
    color: "bg-secondary",
    color3D: "#14b8a6",
  },
  {
    icon: Building2,
    icon3D: 'building' as const,
    title: "Exhibitors",
    description: "500+ Brands Showcase",
    color: "bg-accent",
    color3D: "#f97316",
  },
  {
    icon: Mic2,
    icon3D: 'presentation' as const,
    title: "Speakers",
    description: "Industry Leaders",
    color: "bg-primary",
    color3D: "#3b82f6",
  },
  {
    icon: Trophy,
    icon3D: 'trophy' as const,
    title: "Awards",
    description: "Excellence Recognition",
    color: "bg-secondary",
    color3D: "#14b8a6",
  },
  {
    icon: GraduationCap,
    icon3D: 'graduation' as const,
    title: "Workshops",
    description: "Hands-on Learning",
    color: "bg-accent",
    color3D: "#f97316",
  },
];

const QuickActions = () => {
  return (
    <section className="py-16 relative -mt-12 z-20">
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
              whileHover={{ y: -5 }}
              className="card-elevated p-6 flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`w-20 h-20 rounded-xl ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon3D type={action.icon3D} color={action.color3D} />
                </div>
                <action.icon className="w-7 h-7 text-white relative z-10 group-hover:opacity-0 transition-opacity" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors text-foreground">
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