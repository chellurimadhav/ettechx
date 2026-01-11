import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Section3D from "./3d/Section3D";

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
    <section id="speakers" className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <Section3D sectionId="speakers" color="#3b82f6" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="card-elevated overflow-hidden group smooth-transition border-2 border-transparent hover:border-primary/30"
              style={{
                background: index % 4 === 0 
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(221 83% 53% / 0.05))'
                  : index % 4 === 1
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(262 83% 58% / 0.05))'
                  : index % 4 === 2
                  ? 'linear-gradient(135deg, hsl(0 0% 100%), hsl(330 81% 60% / 0.05))'
                  : 'linear-gradient(135deg, hsl(0 0% 100%), hsl(16 85% 57% / 0.05))'
              }}
            >
              <div className="relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: index % 4 === 0 
                      ? 'linear-gradient(to top, hsl(221 83% 53% / 0.9), hsl(262 83% 58% / 0.7), transparent)'
                      : index % 4 === 1
                      ? 'linear-gradient(to top, hsl(262 83% 58% / 0.9), hsl(330 81% 60% / 0.7), transparent)'
                      : index % 4 === 2
                      ? 'linear-gradient(to top, hsl(330 81% 60% / 0.9), hsl(16 85% 57% / 0.7), transparent)'
                      : 'linear-gradient(to top, hsl(16 85% 57% / 0.9), hsl(173 80% 40% / 0.7), transparent)'
                  }}
                />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))'
                    }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))'
                    }}
                  >
                    <Twitter className="w-5 h-5 text-white" />
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