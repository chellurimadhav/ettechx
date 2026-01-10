import { motion } from "framer-motion";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";

// Generate partner data for each category
const generatePartners = (count: number, category: string) => {
  return Array.from({ length: count }).map((_, index) => ({
    name: `${category} Partner ${index + 1}`,
    category: category,
    logo: undefined, // Add logo URLs here when available
  }));
};

const Partners = () => {
  const partnerCategories = [
    { 
      title: "Our Knowledge Partners", 
      items: generatePartners(4, "Knowledge"),
      direction: "left" as const,
      speed: "normal" as const,
    },
    { 
      title: "Association Partners", 
      items: generatePartners(4, "Association"),
      direction: "right" as const,
      speed: "normal" as const,
    },
    { 
      title: "K12 Partners", 
      items: generatePartners(4, "K12"),
      direction: "left" as const,
      speed: "fast" as const,
    },
    { 
      title: "Gold Partner", 
      items: generatePartners(1, "Gold"),
      direction: "left" as const,
      speed: "slow" as const,
    },
    { 
      title: "University Partner", 
      items: generatePartners(1, "University"),
      direction: "right" as const,
      speed: "slow" as const,
    },
    { 
      title: "Silver Partners", 
      items: generatePartners(6, "Silver"),
      direction: "left" as const,
      speed: "normal" as const,
    },
    { 
      title: "Our Partners", 
      items: generatePartners(77, "Partner"),
      direction: "right" as const,
      speed: "fast" as const,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're proud to collaborate with leading organizations in education and technology
          </p>
        </motion.div>

        <div className="space-y-16">
          {partnerCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="w-full"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-8 text-center text-foreground">
                {category.title}
              </h3>
              <InfiniteMovingPartners
                items={category.items}
                direction={category.direction}
                speed={category.speed}
                pauseOnHover={true}
                className="[--animation-duration:40s]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            I want to Partner too
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
