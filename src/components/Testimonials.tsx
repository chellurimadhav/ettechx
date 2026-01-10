import { motion } from "framer-motion";
import { Quote, Star, Play, Youtube } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Director of Education Technology",
    organization: "Delhi Public School",
    content: "ET TECH X provided an exceptional platform to discover cutting-edge educational solutions. The networking opportunities were invaluable, and we've implemented several innovations showcased at the expo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO",
    organization: "EdTech Innovations Pvt Ltd",
    content: "As an exhibitor, ET TECH X exceeded our expectations. The quality of attendees and the level of engagement was outstanding. We secured multiple partnerships and generated significant leads.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Principal",
    organization: "Modern School",
    content: "The conference sessions were insightful and the exhibition showcased the latest trends in education technology. A must-attend event for anyone serious about transforming education.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
];

// Video testimonials from YouTube
const videoTestimonials = [
  {
    id: "8MPynsojQwI",
    title: "Guest Testimonial",
    thumbnail: "https://img.youtube.com/vi/8MPynsojQwI/maxresdefault.jpg",
    description: "Hear from our attendees about their experience at ET TECH X",
  },
  {
    id: "xoQyJ5uZPSE",
    title: "Guest Testimonial",
    thumbnail: "https://img.youtube.com/vi/xoQyJ5uZPSE/maxresdefault.jpg",
    description: "Insights from industry leaders and educators",
  },
  {
    id: "HVinhnbtsd0",
    title: "Guest Testimonial",
    thumbnail: "https://img.youtube.com/vi/HVinhnbtsd0/maxresdefault.jpg",
    description: "Real experiences from ET TECH X participants",
  },
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-section-gradient section-divider">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            Guest Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What Our <span className="gradient-text">Attendees</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from educators, exhibitors, and industry leaders who have experienced ET TECH X
          </p>
        </motion.div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
            Video <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onClick={() => openVideo(video.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30">
                  {/* Animated Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl" />
                  </div>
                  
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <motion.img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/640x360/3b82f6/ffffff?text=ET+TECH+X+Testimonial";
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-black/10 transition-all duration-500" />
                    
                    {/* Play Button Overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-primary/95 group-hover:bg-primary flex items-center justify-center shadow-2xl backdrop-blur-sm"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    {/* YouTube Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.1, x: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </motion.div>
                    
                    {/* Shimmer Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>

                  {/* Video Info */}
                  <motion.div 
                    className="p-6 relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                      {video.description}
                    </p>
                    
                    {/* Animated Arrow on Hover */}
                    <motion.div
                      className="mt-3 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-xs font-semibold">Watch Testimonial</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Play className="w-3 h-3" fill="currentColor" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Written Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
            Written <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card-elevated p-8 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeVideo}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-lg font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <span>✕</span>
                <span>Close</span>
              </motion.button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-full h-full rounded-xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
