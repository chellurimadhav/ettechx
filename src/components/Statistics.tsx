import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Building, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 10000,
    suffix: "+",
    label: "Visitors",
    description: "Expected attendees from across India",
  },
  {
    icon: Building,
    number: 500,
    suffix: "+",
    label: "Exhibitors",
    description: "Leading EdTech companies",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Awards",
    description: "Recognizing excellence",
  },
  {
    icon: Globe,
    number: 25,
    suffix: "+",
    label: "Countries",
    description: "International participation",
  },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join India's largest gathering of education and technology leaders
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:neon-border transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="font-display font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;