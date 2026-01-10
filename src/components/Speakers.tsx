import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Dr. Ramesh Kumar",
    role: "CEO, EdTech Solutions",
    topic: "Future of AI in Education",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Director, Digital Learning",
    topic: "Transforming K-12 Education",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Arun Mehta",
    role: "CTO, LearnTech Inc",
    topic: "VR in Classrooms",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kavita Nair",
    role: "VP, Global Education",
    topic: "Inclusive Learning Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden bg-section-gradient">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Featured Speakers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Learn From The <span className="gradient-text">Best</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry leaders and innovators sharing their vision for the future of education
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card overflow-hidden group rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                  {speaker.name}
                </h3>
                <p className="text-sm text-primary mb-2 font-medium">{speaker.role}</p>
                <p className="text-sm text-muted-foreground">{speaker.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Speakers
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;