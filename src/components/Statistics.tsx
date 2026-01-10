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
    color: "bg-primary",
  },
  {
    icon: Building,
    number: 500,
    suffix: "+",
    label: "Exhibitors",
    description: "Leading EdTech companies",
    color: "bg-secondary",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Awards",
    description: "Recognizing excellence",
    color: "bg-accent",
  },
  {
    icon: Globe,
    number: 25,
    suffix: "+",
    label: "Countries",
    description: "International participation",
    color: "bg-primary",
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Numbers That <span className="text-white/90">Speak</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
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
              className="bg-white/10 backdrop-blur-sm p-8 text-center rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="font-display font-semibold text-lg mb-1 text-white">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;