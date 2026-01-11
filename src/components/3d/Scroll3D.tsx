import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// Hook to get scroll position with throttling
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

// Floating geometric shapes that respond to scroll
function ScrollCube({ position, color, scrollY }: { position: [number, number, number]; color: string; scrollY: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      const scrollFactor = scrollY * 0.001;
      meshRef.current.rotation.x += 0.01 + scrollFactor;
      meshRef.current.rotation.y += 0.01 + scrollFactor;
      meshRef.current.position.y = position[1] + Math.sin(scrollY * 0.01 + position[0]) * 0.5;
      meshRef.current.position.z = position[2] + Math.cos(scrollY * 0.01) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} opacity={0.4} transparent metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function ScrollSphere({ position, color, scrollY }: { position: [number, number, number]; color: string; scrollY: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      const scrollFactor = scrollY * 0.002;
      meshRef.current.rotation.x += scrollFactor;
      meshRef.current.rotation.y += scrollFactor;
      meshRef.current.position.y = position[1] + Math.sin(scrollY * 0.008 + position[0]) * 0.4;
      meshRef.current.scale.setScalar(1 + Math.sin(scrollY * 0.005) * 0.2);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} opacity={0.35} transparent metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

function ScrollTorus({ position, color, scrollY }: { position: [number, number, number]; color: string; scrollY: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.cos(scrollY * 0.01) * 0.3;
      meshRef.current.rotation.z = scrollY * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.4, 0.15, 16, 32]} />
      <meshStandardMaterial color={color} opacity={0.3} transparent metalness={0.7} roughness={0.1} />
    </mesh>
  );
}

function ScrollCone({ position, color, scrollY }: { position: [number, number, number]; color: string; scrollY: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      meshRef.current.position.y = position[1] + Math.sin(scrollY * 0.012) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.4, 0.8, 32]} />
      <meshStandardMaterial color={color} opacity={0.4} transparent metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function ParallaxGroup({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();
  
  useFrame(() => {
    if (groupRef.current) {
      const parallaxY = scrollY * 0.0005;
      groupRef.current.position.y = parallaxY;
    }
  });

  return (
    <group ref={groupRef}>
      <ScrollCube position={[-3, 2, -2]} color="#3b82f6" scrollY={scrollY} />
      <ScrollCube position={[3, -1, -1]} color="#14b8a6" scrollY={scrollY} />
      <ScrollSphere position={[-2, -2, 0]} color="#f97316" scrollY={scrollY} />
      <ScrollSphere position={[2, 1.5, -1]} color="#3b82f6" scrollY={scrollY} />
      <ScrollTorus position={[0, 0, -2]} color="#14b8a6" scrollY={scrollY} />
      <ScrollCone position={[-1.5, 1, 1]} color="#f97316" scrollY={scrollY} />
      <ScrollCone position={[1.5, -1.5, 1]} color="#3b82f6" scrollY={scrollY} />
    </group>
  );
}

export default function Scroll3D() {
  const scrollY = useScrollPosition();

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.2 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.6} />
        
        <ParallaxGroup scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
