import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-50px" : "-100px" });

  // On mobile, just show content without animation
  if (isMobile) {
    return (
      <div ref={ref} className={className} style={{ opacity: isInView ? 1 : 1 }}>
        {children}
      </div>
    );
  }

  // Desktop animations
  const variants = {
    up: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
      style={{
        willChange: isInView ? "transform, opacity" : "auto",
        transform: "translateZ(0)",
        contain: "layout style paint",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
