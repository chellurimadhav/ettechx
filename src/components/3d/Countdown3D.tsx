import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';

function Countdown3DScene() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      particlesRef.current.children.forEach((particle, i) => {
        if (particle instanceof THREE.Mesh) {
          const time = state.clock.elapsedTime;
          const angle = (i / particlesRef.current!.children.length) * Math.PI * 2;
          particle.position.x = Math.cos(angle + time * 0.5) * 3;
          particle.position.y = Math.sin(angle * 2 + time * 0.3) * 1.5;
          particle.position.z = Math.sin(angle + time * 0.5) * 3;
          particle.rotation.x += 0.02;
          particle.rotation.y += 0.02;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing orb */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          emissive="#3b82f6"
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Inner core */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial 
          color="#14b8a6" 
          emissive="#14b8a6"
          emissiveIntensity={2}
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Rotating rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.15, 16, 100]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6"
            emissiveIntensity={1.2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.3, 0.12, 16, 100]} />
          <meshStandardMaterial 
            color="#14b8a6" 
            emissive="#14b8a6"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.6, 0.1, 16, 100]} />
          <meshStandardMaterial 
            color="#f97316" 
            emissive="#f97316"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Orbiting particles */}
      <group ref={particlesRef}>
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / 24;
          const radius = 3.5;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial 
                color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#14b8a6" : "#f97316"}
                emissive={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#14b8a6" : "#f97316"}
                emissiveIntensity={1.5}
                metalness={0.95}
                roughness={0.05}
              />
            </mesh>
          );
        })}
      </group>

      {/* Energy beams */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 8;
        return (
          <mesh key={i} rotation={[0, angle, 0]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
            <meshStandardMaterial 
              color="#ffffff"
              emissive="#3b82f6"
              emissiveIntensity={1}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Countdown3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        <pointLight position={[0, 10, 0]} intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={3} />
        
        <Countdown3DScene />
      </Canvas>
    </div>
  );
}
