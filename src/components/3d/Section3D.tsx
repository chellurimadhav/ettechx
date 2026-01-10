import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface Section3DProps {
  sectionId?: string;
  color?: string;
}

function useElementScroll(sectionId?: string) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionId) {
        setScrollProgress(window.scrollY);
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top + window.scrollY;
        const elementHeight = rect.height;
        const scrollPosition = window.scrollY + windowHeight / 2;
        
        const progress = Math.max(0, Math.min(1, (scrollPosition - elementTop) / elementHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return scrollProgress;
}

function RotatingRing({ color = '#3b82f6', scrollProgress }: { color: string; scrollProgress: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z = scrollProgress * Math.PI * 2;
      meshRef.current.scale.setScalar(0.8 + scrollProgress * 0.4);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.2, 16, 32]} />
      <meshStandardMaterial color={color} opacity={0.3} transparent metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function FloatingPyramid({ position, color, scrollProgress }: { position: [number, number, number]; color: string; scrollProgress: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(scrollProgress * Math.PI * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.6, 1, 4]} />
      <meshStandardMaterial color={color} opacity={0.4} transparent metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function GeometricCluster({ color, scrollProgress }: { color: string; scrollProgress: number }) {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = scrollProgress * Math.PI;
    }
  });

  const positions: [number, number, number][] = [
    [0, 0, 0],
    [0.8, 0, 0],
    [-0.8, 0, 0],
    [0, 0.8, 0],
    [0, -0.8, 0],
  ];

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color={color} opacity={0.35} transparent metalness={0.7} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function Section3D({ sectionId, color = '#3b82f6' }: Section3DProps) {
  const scrollProgress = useElementScroll(sectionId);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        <directionalLight position={[0, 5, 5]} intensity={0.6} />
        
        <RotatingRing color={color} scrollProgress={scrollProgress} />
        <FloatingPyramid position={[-2, 1, -1]} color={color} scrollProgress={scrollProgress} />
        <FloatingPyramid position={[2, -1, -1]} color={color} scrollProgress={scrollProgress} />
        <GeometricCluster color={color} scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
