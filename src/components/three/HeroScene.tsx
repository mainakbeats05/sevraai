import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group>
        {/* Core */}
        <Sphere ref={meshRef} args={[1.1, 64, 64]}>
          <MeshDistortMaterial
            color="#0891b2"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={1.6}
          />
        </Sphere>

        {/* Inner halo */}
        <Sphere args={[1.35, 32, 32]}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.06} />
        </Sphere>

        {/* Orbital rings */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.012, 16, 128]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
          </mesh>
          <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
            <torusGeometry args={[2.7, 0.008, 16, 128]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.55} />
          </mesh>
          <mesh rotation={[Math.PI / 1.7, -Math.PI / 6, 0]}>
            <torusGeometry args={[3.2, 0.006, 16, 128]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

function DataStreams() {
  const group = useRef<THREE.Group>(null);
  const streams = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      angle: (i / 6) * Math.PI * 2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={group}>
      {streams.map((s, i) => (
        <mesh key={i} rotation={[0, s.angle, 0]}>
          <torusGeometry args={[3.6 + i * 0.15, 0.003, 8, 128]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#22d3ee" : "#a855f7"} transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

export const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#a855f7" />
      <CoreOrb />
      <DataStreams />
      <ParticleField count={1200} />
    </Canvas>
  );
};

export default HeroScene;
