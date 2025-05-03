import { forwardRef } from 'react';
import { Group } from 'three';
import { Center, Environment } from '@react-three/drei';

import FloatingCan from '../floating-can';
import { FLAVORS } from '@/data/flavors';

const Scene = forwardRef<Group, { flavorIndex: number }>(
  ({ flavorIndex }, ref) => (
    <group>
      <Center position={[0, 0, 1.5]}>
        <FloatingCan
          ref={ref}
          flavor={FLAVORS[flavorIndex].flavor}
          floatIntensity={0.3}
        />
      </Center>

      <directionalLight intensity={5} position={[0, 1, 1]} />
      <Environment
        files="/hdr/lobby.hdr"
        environmentIntensity={0.6}
        environmentRotation={[0, 3, 0]}
      />
    </group>
  ),
);

export default Scene;
