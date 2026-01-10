import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface ScrollReveal3DProps {
  triggerId?: string;
  color?: string;
}

function useElementInView(triggerId?: string) {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!triggerId) {
      setIsInView(true);
      return;
    }

    const handleScroll = () => {
      const element = document.getElementById(triggerId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Check if element is in viewport
        const inView = elementTop < windowHeight && elementTop + elementHeight > 0;
        setIsInView(inView);
        
        // Calculate scroll progress
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerId]);

  return { isInView, scrollProgress };
}

function RevealCube({ position, color, isInView, scrollProgress }: { 
  position: [number, number, number]; 
  color: string; 
  isInView: boolean;
  scrollProgress: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current && isInView) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(scrollProgress * Math.PI * 2) * 0.5;
      const scale = 0.5 + scrollProgress * 0.5;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.material.opacity = scrollProgress * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0} 
        transparent 
        metalness={0.7} 
        roughness={0.2}
      />
    </mesh>
  );
}

function RevealSphere({ position, color, isInView, scrollProgress }: { 
  position: [number, number, number]; 
  color: string; 
  isInView: boolean;
  scrollProgress: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current && isInView) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.y = position[1] + Math.cos(scrollProgress * Math.PI * 2) * 0.4;
      const scale = 0.3 + scrollProgress * 0.7;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.material.opacity = scrollProgress * 0.35;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={0}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0} 
        transparent 
        metalness={0.8} 
        roughness={0.1}
      />
    </mesh>
  );
}

export default function ScrollReveal3D({ triggerId, color = '#3b82f6' }: ScrollReveal3DProps) {
  const { isInView, scrollProgress } = useElementInView(triggerId);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        <RevealCube position={[-2, 1, 0]} color={color} isInView={isInView} scrollProgress={scrollProgress} />
        <RevealCube position={[2, -1, 0]} color={color} isInView={isInView} scrollProgress={scrollProgress} />
        <RevealSphere position={[0, 0, -1]} color={color} isInView={isInView} scrollProgress={scrollProgress} />
        <RevealSphere position={[-1.5, -1, 1]} color={color} isInView={isInView} scrollProgress={scrollProgress} />
        <RevealSphere position={[1.5, 1, 1]} color={color} isInView={isInView} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
