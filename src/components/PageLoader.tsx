import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for page to be ready, but don't wait too long
    const handleLoad = () => {
      // Minimum display time for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback: hide after max 1.5s even if page isn't fully loaded
      const fallback = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, hsl(222 47% 11%), hsl(221 83% 53% / 0.1))'
          }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 20% 50%, hsl(221 83% 53% / 0.2), transparent 50%), radial-gradient(circle at 80% 80%, hsl(262 83% 58% / 0.2), transparent 50%)'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center relative z-10"
          >
            {/* Logo with Glow Effect */}
            <motion.div
              className="text-5xl md:text-6xl font-display font-bold mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="text-white">ET TECH </span>
              <motion.span
                className="gradient-text inline-block"
                animate={{
                  filter: [
                    'drop-shadow(0 0 10px hsl(221 83% 53%))',
                    'drop-shadow(0 0 20px hsl(221 83% 53%)) drop-shadow(0 0 30px hsl(262 83% 58%))',
                    'drop-shadow(0 0 10px hsl(221 83% 53%))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                X
              </motion.span>
            </motion.div>

            {/* Premium Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(221 83% 53%), hsl(262 83% 58%), hsl(330 81% 60%))',
                  boxShadow: '0 0 20px hsl(221 83% 53% / 0.5)'
                }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              className="mt-6 text-white/60 text-sm uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
