import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

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

function ScrollReactiveShape({ 
  position, 
  color, 
  scrollY, 
  shape = 'box' 
}: { 
  position: [number, number, number]; 
  color: string; 
  scrollY: number;
  shape?: 'box' | 'sphere' | 'torus' | 'cone';
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      const scrollFactor = scrollY * 0.0005;
      meshRef.current.rotation.x += 0.01 + scrollFactor;
      meshRef.current.rotation.y += 0.01 + scrollFactor;
      meshRef.current.position.y = position[1] + Math.sin(scrollY * 0.01 + position[0]) * 0.8;
      meshRef.current.position.z = position[2] + Math.cos(scrollY * 0.008) * 0.5;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollY * 0.005) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const geometryProps = {
    box: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.6, 32, 32]} />,
    torus: <torusGeometry args={[0.5, 0.2, 16, 32]} />,
    cone: <coneGeometry args={[0.5, 1, 32]} />,
  };

  return (
    <mesh ref={meshRef} position={position}>
      {geometryProps[shape]}
      <meshStandardMaterial 
        color={color} 
        opacity={0.35} 
        transparent 
        metalness={0.7} 
        roughness={0.2}
      />
    </mesh>
  );
}

function ScrollReactiveGroup({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      const parallaxY = scrollY * 0.0003;
      groupRef.current.position.y = parallaxY;
    }
  });

  return (
    <group ref={groupRef}>
      <ScrollReactiveShape position={[-4, 2, -3]} color="#3b82f6" scrollY={scrollY} shape="box" />
      <ScrollReactiveShape position={[4, -1, -2]} color="#14b8a6" scrollY={scrollY} shape="sphere" />
      <ScrollReactiveShape position={[-3, -2, -1]} color="#f97316" scrollY={scrollY} shape="torus" />
      <ScrollReactiveShape position={[3, 1.5, -2]} color="#3b82f6" scrollY={scrollY} shape="cone" />
      <ScrollReactiveShape position={[0, 0, -2]} color="#14b8a6" scrollY={scrollY} shape="box" />
      <ScrollReactiveShape position={[-2, 1, 1]} color="#f97316" scrollY={scrollY} shape="sphere" />
      <ScrollReactiveShape position={[2, -1.5, 1]} color="#3b82f6" scrollY={scrollY} shape="torus" />
    </group>
  );
}

export default function ScrollParallax() {
  const scrollY = useScrollPosition();

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.2 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <spotLight position={[0, 10, 0]} angle={0.4} penumbra={1} intensity={0.7} />
        
        <ScrollReactiveGroup scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
