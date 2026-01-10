import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface Parallax3DProps {
  scrollY: number;
  intensity?: number;
}

function ParallaxCube({ position, color, scrollY, intensity = 0.001 }: { 
  position: [number, number, number]; 
  color: string; 
  scrollY: number;
  intensity?: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const parallaxOffset = scrollY * intensity;
      meshRef.current.position.y = position[1] + parallaxOffset;
      meshRef.current.position.z = position[2] + Math.sin(scrollY * 0.01) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0.3} 
        transparent 
        metalness={0.6} 
        roughness={0.3}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function ParallaxSphere({ position, color, scrollY, intensity = 0.0015 }: { 
  position: [number, number, number]; 
  color: string; 
  scrollY: number;
  intensity?: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      const parallaxOffset = scrollY * intensity;
      meshRef.current.position.y = position[1] + parallaxOffset;
      meshRef.current.scale.setScalar(1 + Math.sin(scrollY * 0.005) * 0.3);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0.25} 
        transparent 
        metalness={0.7} 
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function ParallaxTorus({ position, color, scrollY, intensity = 0.0012 }: { 
  position: [number, number, number]; 
  color: string; 
  scrollY: number;
  intensity?: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.015;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = scrollY * 0.01;
      const parallaxOffset = scrollY * intensity;
      meshRef.current.position.y = position[1] + parallaxOffset;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <meshStandardMaterial 
        color={color} 
        opacity={0.3} 
        transparent 
        metalness={0.8} 
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function ParallaxGroup({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <ParallaxCube position={[-4, 0, -3]} color="#3b82f6" scrollY={scrollY} intensity={0.0008} />
      <ParallaxCube position={[4, 2, -2]} color="#14b8a6" scrollY={scrollY} intensity={0.001} />
      <ParallaxSphere position={[-3, -2, -1]} color="#f97316" scrollY={scrollY} intensity={0.0012} />
      <ParallaxSphere position={[3, 1, -2]} color="#3b82f6" scrollY={scrollY} intensity={0.0009} />
      <ParallaxTorus position={[0, 0, -2]} color="#14b8a6" scrollY={scrollY} intensity={0.001} />
      <ParallaxTorus position={[-2, 1.5, -1]} color="#f97316" scrollY={scrollY} intensity={0.0011} />
      <ParallaxTorus position={[2, -1.5, -1]} color="#3b82f6" scrollY={scrollY} intensity={0.0009} />
    </group>
  );
}

export default function Parallax3D({ scrollY, intensity = 0.3 }: Parallax3DProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: intensity }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
        
        <ParallaxGroup scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
