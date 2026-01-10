import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// Single prominent 3D background object - Geometric Network Structure
function GeometricNetwork() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slow, elegant rotation
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Subtle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core Sphere */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.9} 
          roughness={0.1}
          opacity={0.6}
          transparent
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Outer Ring Structure */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#14b8a6" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.7}
          transparent
          emissive="#14b8a6"
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#f97316" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.7}
          transparent
          emissive="#f97316"
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.7}
          transparent
          emissive="#3b82f6"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Connecting Nodes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.cos(angle * 2) * 0.5;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial 
              color="#ffffff" 
              metalness={0.9} 
              roughness={0.1}
              emissive="#ffffff"
              emissiveIntensity={0.4}
            />
          </mesh>
        );
      })}

      {/* Connection Lines from center to nodes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.cos(angle * 2) * 0.5;
        
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([0, 0, 0, x, y, z])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color="#3b82f6" 
              opacity={0.3} 
              transparent 
            />
          </line>
        );
      })}

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 20;
        const radius = 3.5 + Math.random() * 1;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 2;
        
        return (
          <FloatingParticle 
            key={i} 
            position={[x, y, z]} 
            delay={i * 0.1}
          />
        );
      })}
    </group>
  );
}

function FloatingParticle({ 
  position, 
  delay 
}: { 
  position: [number, number, number]; 
  delay: number;
}) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial 
        color="#14b8a6" 
        opacity={0.6} 
        transparent
        emissive="#14b8a6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.4 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={0.7} />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={0.6} />
        
        <GeometricNetwork />
      </Canvas>
    </div>
  );
}
