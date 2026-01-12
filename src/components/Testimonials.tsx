import { motion } from "framer-motion";
import { Quote, Star, Play, Youtube } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

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
        <div className="text-center mb-16">
          <span className="professional-badge mb-4">
            Guest Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What Our <span className="gradient-text">Attendees</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from educators, exhibitors, and industry leaders who have experienced ET TECH X
          </p>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
            Video <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => openVideo(video.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      width={640}
                      height={360}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ 
                        contentVisibility: "auto",
                        containIntrinsicSize: "640px 360px"
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/640x360/3b82f6/ffffff?text=ET+TECH+X+Testimonial";
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/95 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    
                    {/* YouTube Badge */}
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 relative z-10">
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials Section */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
            Written <span className="gradient-text">Testimonials</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
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
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ 
                        contentVisibility: "auto",
                        containIntrinsicSize: "56px 56px"
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/56x56/3b82f6/ffffff?text=User";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <div
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white text-lg font-semibold flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <span>✕</span>
                <span>Close</span>
              </button>
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
