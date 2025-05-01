import { useRef, useMemo } from 'react';
import { InstancedMesh, Object3D } from 'three';
import { useFrame } from '@react-three/fiber';

import { useBubble } from '@/hooks/use-bubble';

const COUNT = 150;
const SPEED = 75;
const BUBBLE_SIZE = 0.085;
const OPACITY = 0.35;

export default function Bubbles() {
  const meshRef = useRef<InstancedMesh>(null);
  const { bubbles, bubbleSpeed } = useBubble({ count: COUNT, speed: SPEED });

  const sphere = useMemo(() => new Object3D(), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;

      bubbles[i3 + 1] += bubbleSpeed[i] * delta;

      if (bubbles[i3 + 1] > 5) {
        bubbles[i3 + 1] = -5;
      }

      sphere.position.set(bubbles[i3], bubbles[i3 + 1], bubbles[i3 + 2]);
      sphere.updateMatrix();

      meshRef.current.setMatrixAt(i, sphere.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[BUBBLE_SIZE, 16, 16]} />
      <meshStandardMaterial color="white" transparent opacity={OPACITY} />
    </instancedMesh>
  );
}
