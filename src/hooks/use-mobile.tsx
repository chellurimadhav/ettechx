import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // SSR-safe check
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Check immediately
    checkMobile();
    
    // Use ResizeObserver for better performance than resize event
    const resizeObserver = new ResizeObserver(() => {
      checkMobile();
    });
    
    resizeObserver.observe(document.body);
    
    // Fallback to resize event
    window.addEventListener("resize", checkMobile, { passive: true });
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
