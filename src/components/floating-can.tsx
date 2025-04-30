import { forwardRef, JSX, type PropsWithChildren } from 'react';
import { Group } from 'three';
import { Float } from '@react-three/drei';

import SodaCan, { type SodaCanProps } from './soda-can';

type FloatingCanProps = {
  flavor?: SodaCanProps['flavor'];
  floatSpeed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  floatingRange?: [number, number];
} & PropsWithChildren &
  JSX.IntrinsicElements['group'];

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = 'blackCherry',
      floatSpeed = 1.5,
      floatIntensity = 1,
      rotationIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    }: FloatingCanProps,
    ref,
  ) => {
    <Float />;
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          floatIntensity={floatIntensity}
          rotationIntensity={rotationIntensity}
          floatingRange={floatingRange}
        >
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

export default FloatingCan;
