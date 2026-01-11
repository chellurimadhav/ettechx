import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export function Effects() {
  const { gl } = useThree();

  useEffect(() => {
    // Optimize for smooth rendering
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    return () => {
      // Cleanup if needed
    };
  }, [gl]);

  return null;
}
