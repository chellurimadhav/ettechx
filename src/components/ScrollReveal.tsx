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

  // Reduce movement distance on mobile for smoother animations
  const movementDistance = isMobile ? 20 : 60;

  const variants = {
    up: {
      hidden: { opacity: 0, y: movementDistance },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -movementDistance },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -movementDistance },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: movementDistance },
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
      transition={
        isMobile
          ? {
              duration: duration * 0.6, // Faster on mobile
              delay: delay * 0.5, // Less delay on mobile
              ease: [0.25, 0.1, 0.25, 1], // Simpler easing, no spring
            }
          : {
              duration,
              delay,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 100,
              damping: 20,
            }
      }
      className={className}
      style={{
        willChange: isInView ? "transform, opacity" : "auto",
        transform: "translateZ(0)", // GPU acceleration
        contain: "layout style paint", // Prevent reflows
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
