import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

function FloatingParticle({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} opacity={0.3} transparent />
    </mesh>
  );
}

function Hexagon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
    }
  });

  const shape = new THREE.Shape();
  const radius = 0.3;
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();

  return (
    <mesh ref={meshRef} position={position}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial color={color} opacity={0.15} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

function NetworkNodes() {
  const nodes = useRef<Group>(null);
  
  useFrame(() => {
    if (nodes.current) {
      nodes.current.rotation.y += 0.002;
    }
  });

  const nodePositions: [number, number, number][] = [
    [-2, 1, 0],
    [2, 1, 0],
    [-2, -1, 0],
    [2, -1, 0],
    [0, 0, 0],
  ];

  return (
    <group ref={nodes}>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" opacity={0.2} transparent />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / 8;
          const radius = 2 + Math.random() * 1;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = (Math.random() - 0.5) * 2;
          const colors = ['#3b82f6', '#14b8a6', '#f97316'];
          return (
            <FloatingParticle
              key={i}
              position={[x, y, z]}
              color={colors[i % colors.length]}
            />
          );
        })}
        
        {/* Hexagons */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (Math.PI * 2 * i) / 6;
          const radius = 1.5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <Hexagon
              key={i}
              position={[x, y, -1]}
              color="#3b82f6"
            />
          );
        })}
        
        <NetworkNodes />
      </Canvas>
    </div>
  );
}
