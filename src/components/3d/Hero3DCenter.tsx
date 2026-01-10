import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// Central Innovation Hub - A sophisticated 3D structure
function InnovationHub() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      
      // Floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core - Dodecahedron */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.95} 
          roughness={0.05}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Inner Glow Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color="#14b8a6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#14b8a6"
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Orbiting Rings */}
      <OrbitingRing radius={1.8} speed={0.5} color="#3b82f6" />
      <OrbitingRing radius={2.2} speed={-0.3} color="#14b8a6" />
      <OrbitingRing radius={2.6} speed={0.4} color="#f97316" />

      {/* Floating Orbs */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 8;
        const radius = 2.8;
        return (
          <FloatingOrb
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.8,
              Math.sin(angle) * radius
            ]}
            delay={i * 0.2}
            color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#14b8a6" : "#f97316"}
          />
        );
      })}

      {/* Energy Beams */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6;
        return (
          <EnergyBeam
            key={i}
            angle={angle}
            delay={i * 0.3}
          />
        );
      })}
    </group>
  );
}

function OrbitingRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ringRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.08, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function FloatingOrb({ position, delay, color }: { position: [number, number, number]; delay: number; color: string }) {
  const orbRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x += 0.02;
      orbRef.current.rotation.y += 0.02;
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.4;
    }
  });

  return (
    <mesh ref={orbRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.95} 
        roughness={0.05}
        emissive={color}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

function EnergyBeam({ angle, delay }: { angle: number; delay: number }) {
  const beamRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (beamRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.5 + 0.5;
      beamRef.current.scale.y = 0.5 + pulse * 0.5;
    }
  });

  const radius = 1.5;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  return (
    <group ref={beamRef} position={[x, 0, z]} rotation={[0, angle, 0]}>
      <mesh>
        <cylinderGeometry args={[0.03, 0.03, 1.5, 8]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function Hero3DCenter() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[600px] pointer-events-none z-[5] opacity-100">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} />
        <spotLight position={[0, 10, 0]} angle={0.4} penumbra={1} intensity={2} />
        <spotLight position={[0, -10, 0]} angle={0.4} penumbra={1} intensity={1.2} />
        
        <InnovationHub />
      </Canvas>
    </div>
  );
}
