import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { useState } from "react";

// YouTube video IDs from ettechx.com
const videos = [
  {
    id: "VIX5VLJ4zTQ",
    title: "ET TECH X Event Highlights",
    thumbnail: "https://img.youtube.com/vi/VIX5VLJ4zTQ/maxresdefault.jpg",
    description: "Experience the highlights and key moments from ET TECH X",
  },
  {
    id: "GYYEU5xS7UA",
    title: "Conference & Innovation Showcase",
    thumbnail: "https://img.youtube.com/vi/GYYEU5xS7UA/maxresdefault.jpg",
    description: "Discover cutting-edge innovations and conference sessions",
  },
  {
    id: "rin9ZUQsl6g",
    title: "ET TECH X Expo Coverage",
    thumbnail: "https://img.youtube.com/vi/rin9ZUQsl6g/maxresdefault.jpg",
    description: "Comprehensive coverage of the ET TECH X exhibition and expo",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-section-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="professional-badge mb-4">
            <Youtube className="w-4 h-4" />
            Video Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Event <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the moments, insights, and innovations from ET TECH X
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
                      e.currentTarget.src = "https://via.placeholder.com/640x360/3b82f6/ffffff?text=ET+TECH+X";
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
                  
                  {/* YouTube Badge with Animation */}
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
                    <span className="text-xs font-semibold">Watch Now</span>
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

        {/* Video Modal with Animation */}
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

export default VideoGallery;
