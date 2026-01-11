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
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="card-elevated p-6 flex flex-col items-center text-center cursor-pointer group smooth-transition border-2 border-transparent hover:border-primary/30"
              style={{
                background: index % 6 === 0 
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.08))'
                  : index % 6 === 1
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(173 80% 40% / 0.08))'
                  : index % 6 === 2
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(16 85% 57% / 0.08))'
                  : index % 6 === 3
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(262 83% 58% / 0.08))'
                  : index % 6 === 4
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(330 81% 60% / 0.08))'
                  : 'linear-gradient(135deg, hsl(0 0% 100%), hsl(45 93% 58% / 0.08))'
              }}
            >
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden"
                style={{
                  background: index % 6 === 0 
                    ? 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))'
                    : index % 6 === 1
                    ? 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))'
                    : index % 6 === 2
                    ? 'linear-gradient(135deg, hsl(16 85% 57%), hsl(330 81% 60%))'
                    : index % 6 === 3
                    ? 'linear-gradient(135deg, hsl(262 83% 58%), hsl(221 83% 53%))'
                    : index % 6 === 4
                    ? 'linear-gradient(135deg, hsl(330 81% 60%), hsl(16 85% 57%))'
                    : 'linear-gradient(135deg, hsl(45 93% 58%), hsl(330 81% 60%))'
                }}
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