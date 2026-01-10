import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface Icon3DProps {
  type: 'award' | 'users' | 'presentation' | 'building' | 'trophy' | 'graduation';
  color?: string;
}

function Award3D({ color = '#3b82f6' }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Trophy base */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.3, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Trophy cup */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.4, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.35, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.15, 0.05, 16, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Users3D({ color = '#14b8a6' }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Person 1 */}
      <mesh position={[-0.3, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.3, -0.25, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Person 2 */}
      <mesh position={[0.3, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.3, -0.25, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Presentation3D({ color = '#3b82f6' }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Screen */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 0.4, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.4, 0.05, 0.4]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Building3D({ color = '#14b8a6' }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Windows */}
      {[-0.15, 0, 0.15].map((x, i) => 
        [-0.2, 0, 0.2].map((y, j) => (
          <mesh key={`${i}-${j}`} position={[x, y, 0.26]}>
            <boxGeometry args={[0.08, 0.08, 0.01]} />
            <meshStandardMaterial color="#1e40af" />
          </mesh>
        ))
      )}
    </group>
  );
}

function Trophy3D({ color = '#f97316' }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Trophy cup */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.3, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function Graduation3D({ color = '#3b82f6' }: { color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Cap */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Top square */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.25, 0.05, 0.25]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Tassel */}
      <mesh position={[0.15, 0.25, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

export default function Icon3D({ type, color }: Icon3DProps) {
  const iconColor = color || '#3b82f6';
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        
        {type === 'award' && <Award3D color={iconColor} />}
        {type === 'users' && <Users3D color={iconColor} />}
        {type === 'presentation' && <Presentation3D color={iconColor} />}
        {type === 'building' && <Building3D color={iconColor} />}
        {type === 'trophy' && <Trophy3D color={iconColor} />}
        {type === 'graduation' && <Graduation3D color={iconColor} />}
      </Canvas>
    </div>
  );
}
