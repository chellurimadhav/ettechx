import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} opacity={0.3} transparent />
    </mesh>
  );
}

function FloatingSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} opacity={0.2} transparent />
    </mesh>
  );
}

function ConnectedNodes() {
  const nodes = useRef<(Mesh | null)[]>([]);
  
  useFrame(() => {
    nodes.current.forEach((node, i) => {
      if (node) {
        node.rotation.y += 0.01;
        node.position.y = Math.sin(Date.now() * 0.001 + i) * 0.2;
      }
    });
  });

  const positions: [number, number, number][] = [
    [-2, 0, 0],
    [2, 0, 0],
    [0, 1.5, 0],
    [-1, -1, 0],
    [1, -1, 0],
  ];

  return (
    <group>
      {positions.map((pos, i) => (
        <mesh key={i} ref={(el) => { if (el) nodes.current[i] = el; }} position={pos}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" opacity={0.4} transparent />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingCube position={[-3, 1, 0]} color="#3b82f6" />
        <FloatingCube position={[3, -1, 0]} color="#14b8a6" />
        <FloatingSphere position={[-2, -1.5, 1]} color="#f97316" />
        <FloatingSphere position={[2, 1.5, -1]} color="#3b82f6" />
        
        <ConnectedNodes />
      </Canvas>
    </div>
  );
}
