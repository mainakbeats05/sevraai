import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function ServerRack() {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = s.clock.elapsedTime * 0.25;
      group.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  const slots = Array.from({ length: 6 });

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={group}>
        {/* Chassis */}
        <mesh>
          <boxGeometry args={[2.4, 3.2, 1.2]} />
          <meshStandardMaterial color="#0a1220" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Front bezel */}
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[2.3, 3.1]} />
          <meshStandardMaterial color="#050a14" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Slots */}
        {slots.map((_, i) => {
          const y = 1.25 - i * 0.5;
          return (
            <group key={i} position={[0, y, 0.62]}>
              <mesh>
                <planeGeometry args={[2.0, 0.36]} />
                <meshStandardMaterial color="#0c1830" metalness={0.7} roughness={0.3} />
              </mesh>
              {/* LED indicators */}
              <mesh position={[-0.85, 0, 0.01]}>
                <circleGeometry args={[0.035, 16]} />
                <meshBasicMaterial color="#22d3ee" />
              </mesh>
              <mesh position={[-0.75, 0, 0.01]}>
                <circleGeometry args={[0.025, 16]} />
                <meshBasicMaterial color={i % 2 === 0 ? "#a855f7" : "#22d3ee"} />
              </mesh>
              {/* Vent lines */}
              {Array.from({ length: 8 }).map((_, j) => (
                <mesh key={j} position={[0.1 + j * 0.1, 0, 0.005]}>
                  <planeGeometry args={[0.04, 0.22]} />
                  <meshBasicMaterial color="#020610" />
                </mesh>
              ))}
            </group>
          );
        })}
        {/* Glow edge */}
        <mesh position={[0, 0, 0.62]}>
          <ringGeometry args={[1.7, 1.75, 64]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

export const ImcsScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 4, 5]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={0.9} color="#a855f7" />
      <spotLight position={[0, 5, 5]} intensity={0.6} color="#ffffff" angle={0.5} />
      <ServerRack />
    </Canvas>
  );
};

export default ImcsScene;
