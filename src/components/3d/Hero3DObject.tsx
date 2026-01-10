import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// 3D Education Technology Symbol - Combining book and tech elements
function EducationTechSymbol() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base - Book/Tablet */}
      <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.7} 
          roughness={0.2}
          opacity={0.9}
          transparent
        />
      </mesh>
      
      {/* Screen/Display */}
      <mesh position={[0, 0.1, 0.01]}>
        <boxGeometry args={[1.6, 1, 0.1]} />
        <meshStandardMaterial 
          color="#1e40af" 
          metalness={0.8} 
          roughness={0.1}
          opacity={0.8}
          transparent
        />
      </mesh>
      
      {/* Tech Circuit Pattern */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6;
        const radius = 0.6;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, y, 0.15]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color="#14b8a6" 
              metalness={0.9} 
              roughness={0.1}
              emissive="#14b8a6"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
      
      {/* Connection Lines */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle1 = (Math.PI * 2 * i) / 6;
        const angle2 = (Math.PI * 2 * (i + 1)) / 6;
        const radius = 0.6;
        const x1 = Math.cos(angle1) * radius;
        const y1 = Math.sin(angle1) * radius;
        const x2 = Math.cos(angle2) * radius;
        const y2 = Math.sin(angle2) * radius;
        
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([x1, y1, 0.15, x2, y2, 0.15])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#14b8a6" opacity={0.4} transparent />
          </line>
        );
      })}
      
      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 1.2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 0.5;
        
        return (
          <FloatingParticle key={i} position={[x, y, z]} />
        );
      })}
    </group>
  );
}

function FloatingParticle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial 
        color="#f97316" 
        opacity={0.6} 
        transparent
        emissive="#f97316"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// 3D ET TECH X Logo Representation
function ETLogo3D() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Letter E */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.5, 0.3, 0]}>
        <boxGeometry args={[0.4, 0.15, 0.15]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.35, 0.15, 0.15]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.5, -0.3, 0]}>
        <boxGeometry args={[0.4, 0.15, 0.15]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Letter T */}
      <mesh position={[-0.1, 0.3, 0]}>
        <boxGeometry args={[0.5, 0.15, 0.15]} />
        <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.1, 0, 0]}>
        <boxGeometry args={[0.15, 0.5, 0.15]} />
        <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* X Symbol */}
      <group position={[0.5, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.15, 1, 0.15]} />
          <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.15, 1, 0.15]} />
          <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Glowing center */}
      <mesh position={[0.5, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color="#f97316" 
          emissive="#f97316"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Main 3D Object - Innovation Cube with Tech Elements
function InnovationCube() {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.7}
          transparent
        />
      </mesh>
      
      {/* Inner Tech Core */}
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#14b8a6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#14b8a6"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Corner Accents */}
      {[
        [1, 1, 1], [-1, 1, 1], [1, -1, 1], [-1, -1, 1],
        [1, 1, -1], [-1, 1, -1], [1, -1, -1], [-1, -1, -1]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#f97316" 
            emissive="#f97316"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
      
      {/* Edge Highlights */}
      {Array.from({ length: 12 }).map((_, i) => {
        const edges = [
          [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
          [1, 1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, -1], [0, 1, 1], [0, -1, -1]
        ];
        const pos = edges[i];
        return (
          <mesh key={i} position={pos as [number, number, number]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#ffffff"
              emissiveIntensity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3DObject() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[600px] pointer-events-none opacity-95 z-10 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.8} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <spotLight position={[0, 10, 0]} angle={0.4} penumbra={1} intensity={1.2} />
        
        {/* Main 3D Object - Innovation Cube */}
        <InnovationCube />
        
        {/* Floating Education Tech Symbol */}
        <group position={[2, -1.5, -1]}>
          <EducationTechSymbol />
        </group>
        
        {/* ET Logo 3D */}
        <group position={[-2, 1.5, -1]} scale={0.6}>
          <ETLogo3D />
        </group>
      </Canvas>
    </div>
  );
}
