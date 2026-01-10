import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// Prominent 3D Object - Tech Innovation Symbol
function TechInnovationSymbol() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Continuous rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core - Octahedron */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.95} 
          roughness={0.05}
          emissive="#3b82f6"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#14b8a6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#14b8a6"
          emissiveIntensity={0.7}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Rotating Rings */}
      <RotatingRing radius={2} speed={0.6} color="#3b82f6" axis="x" />
      <RotatingRing radius={2.3} speed={-0.4} color="#14b8a6" axis="y" />
      <RotatingRing radius={2.6} speed={0.5} color="#f97316" axis="z" />

      {/* Orbiting Spheres */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 3;
        return (
          <OrbitingSphere
            key={i}
            angle={angle}
            radius={radius}
            delay={i * 0.2}
            color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#14b8a6" : "#f97316"}
          />
        );
      })}

      {/* Energy Particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 20;
        const radius = 3.5 + Math.random() * 0.5;
        return (
          <EnergyParticle
            key={i}
            angle={angle}
            radius={radius}
            delay={i * 0.15}
          />
        );
      })}
    </group>
  );
}

function RotatingRing({ radius, speed, color, axis }: { radius: number; speed: number; color: string; axis: 'x' | 'y' | 'z' }) {
  const ringRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      if (axis === 'x') {
        ringRef.current.rotation.x = state.clock.elapsedTime * speed;
      } else if (axis === 'y') {
        ringRef.current.rotation.y = state.clock.elapsedTime * speed;
      } else {
        ringRef.current.rotation.z = state.clock.elapsedTime * speed;
      }
    }
  });

  const rotation = axis === 'x' ? [Math.PI / 2, 0, 0] : axis === 'y' ? [0, Math.PI / 2, 0] : [0, 0, Math.PI / 2];

  return (
    <group ref={ringRef}>
      <mesh rotation={rotation as [number, number, number]}>
        <torusGeometry args={[radius, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

function OrbitingSphere({ angle, radius, delay, color }: { angle: number; radius: number; delay: number; color: string }) {
  const sphereRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      const time = state.clock.elapsedTime;
      const x = Math.cos(angle + time * 0.5) * radius;
      const y = Math.sin(angle * 2 + time * 0.3) * 0.8;
      const z = Math.sin(angle + time * 0.5) * radius;
      
      sphereRef.current.position.set(x, y, z);
      sphereRef.current.rotation.x += 0.02;
      sphereRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.95} 
        roughness={0.05}
        emissive={color}
        emissiveIntensity={0.9}
      />
    </mesh>
  );
}

function EnergyParticle({ angle, radius, delay }: { angle: number; radius: number; delay: number }) {
  const particleRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime;
      const x = Math.cos(angle + time * 0.3) * radius;
      const y = Math.sin(angle * 3 + time * 0.4) * 1.2;
      const z = Math.sin(angle + time * 0.3) * radius;
      
      particleRef.current.position.set(x, y, z);
      particleRef.current.rotation.x += 0.03;
      particleRef.current.rotation.y += 0.03;
      
      // Pulsing scale
      const scale = 0.5 + Math.sin(time * 2 + delay) * 0.3;
      particleRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#3b82f6"
        emissiveIntensity={1}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

export default function Hero3DProminent() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[700px] pointer-events-none z-[8]">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }} 
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        <pointLight position={[0, 10, 0]} intensity={1.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2.5} />
        <spotLight position={[0, -10, 0]} angle={0.5} penumbra={1} intensity={1.5} />
        
        <TechInnovationSymbol />
      </Canvas>
    </div>
  );
}
