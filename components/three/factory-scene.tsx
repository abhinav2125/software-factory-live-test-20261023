"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

const LAVENDER = "#CBB3E8";
const LAVENDER_DEEP = "#A67FD4";
const LIME = "#D4FF3F";
const VERMILION = "#E34234";
const INK = "#1A1526";

type SceneProps = {
  reducedMotion: boolean;
};

function AssemblyCore({ reducedMotion }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const modules = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return {
          position: [
            Math.cos(angle) * 2.1,
            0,
            Math.sin(angle) * 2.1,
          ] as [number, number, number],
          accent: i === 2 ? VERMILION : i === 4 ? LIME : LAVENDER_DEEP,
          size: 0.34 + (i % 3) * 0.05,
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    if (group.current) {
      const targetX = state.pointer.y * 0.18;
      const targetY = state.pointer.x * 0.32;
      pointer.current.x = THREE.MathUtils.lerp(
        pointer.current.x,
        targetX,
        0.06,
      );
      pointer.current.y = THREE.MathUtils.lerp(
        pointer.current.y,
        targetY,
        0.06,
      );
      group.current.rotation.x = pointer.current.x;
      group.current.rotation.y = pointer.current.y;
    }
    if (orbit.current && !reducedMotion) {
      orbit.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={reducedMotion ? 0 : 1.4}
        rotationIntensity={reducedMotion ? 0 : 0.25}
        floatIntensity={reducedMotion ? 0 : 0.8}
      >
        {/* Stacked assembly platters */}
        <mesh position={[0, -0.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.5, 1.7, 0.28, 48]} />
          <meshStandardMaterial
            color={INK}
            roughness={0.35}
            metalness={0.55}
          />
        </mesh>
        <mesh position={[0, -0.24, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.12, 1.3, 0.34, 48]} />
          <meshStandardMaterial
            color={LAVENDER}
            roughness={0.42}
            metalness={0.25}
          />
        </mesh>
        <mesh position={[0, 0.14, 0]} castShadow>
          <cylinderGeometry args={[0.72, 0.95, 0.42, 48]} />
          <meshStandardMaterial
            color={LAVENDER_DEEP}
            roughness={0.5}
            metalness={0.2}
          />
        </mesh>

        {/* Luminous core */}
        <mesh position={[0, 0.85, 0]} castShadow>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color={LIME}
            emissive={LIME}
            emissiveIntensity={0.55}
            roughness={0.25}
            metalness={0.1}
            flatShading
          />
        </mesh>

        {/* Orbit ring carrying modular work units */}
        <group ref={orbit} position={[0, 0.14, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.1, 0.045, 16, 96]} />
            <meshStandardMaterial
              color={LAVENDER}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
          {modules.map((mod, i) => (
            <mesh key={i} position={mod.position} castShadow>
              <boxGeometry args={[mod.size, mod.size, mod.size]} />
              <meshStandardMaterial
                color={mod.accent}
                roughness={0.45}
                metalness={0.3}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

export default function FactoryScene({ reducedMotion }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      shadows
      camera={{ position: [0, 2.4, 6.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.6}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -2]} intensity={12} color={LIME} />
      <pointLight position={[3, -1, 3]} intensity={10} color={VERMILION} />
      <AssemblyCore reducedMotion={reducedMotion} />
      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.55}
        scale={9}
        blur={2.6}
        far={3.2}
        color="#050308"
      />
    </Canvas>
  );
}
