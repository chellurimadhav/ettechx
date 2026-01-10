import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Stats3DProps {
  number: number;
  color?: string;
}

function Number3D({ number, color = '#ffffff' }: { number: number; color: string }) {
  const groupRef = useRef<any>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  // Simple 3D representation of numbers using boxes
  const renderDigit = (digit: number, offset: number) => {
    const segments = [
      [1, 1, 1, 0, 1, 1, 1], // 0
      [0, 0, 1, 0, 0, 1, 0], // 1
      [1, 0, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 1, 0, 1, 1], // 3
      [0, 1, 1, 1, 0, 1, 0], // 4
      [1, 1, 0, 1, 0, 1, 1], // 5
      [1, 1, 0, 1, 1, 1, 1], // 6
      [1, 0, 1, 0, 0, 1, 0], // 7
      [1, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 1, 0, 1, 1], // 9
    ];

    const pattern = segments[digit] || segments[0];
    
    return (
      <group position={[offset, 0, 0]}>
        {/* Top */}
        {pattern[0] === 1 && (
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Top right */}
        {pattern[1] === 1 && (
          <mesh position={[0.1, 0.15, 0]}>
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Top left */}
        {pattern[2] === 1 && (
          <mesh position={[-0.1, 0.15, 0]}>
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Middle */}
        {pattern[3] === 1 && (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Bottom right */}
        {pattern[4] === 1 && (
          <mesh position={[0.1, -0.15, 0]}>
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Bottom left */}
        {pattern[5] === 1 && (
          <mesh position={[-0.1, -0.15, 0]}>
            <boxGeometry args={[0.05, 0.2, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
        {/* Bottom */}
        {pattern[6] === 1 && (
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.05]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )}
      </group>
    );
  };

  const digits = number.toString().split('').map(Number);
  
  return (
    <group ref={groupRef}>
      {digits.map((digit, i) => renderDigit(digit, (i - digits.length / 2) * 0.3))}
    </group>
  );
}

export default function Stats3D({ number, color }: Stats3DProps) {
  return (
    <div className="w-24 h-24 mx-auto">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        <Number3D number={number} color={color || '#ffffff'} />
      </Canvas>
    </div>
  );
}
