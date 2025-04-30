'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, View } from '@react-three/drei';

export default function SodaCanvas() {
  return (
    <div className="pointer-events-none fixed top-0 left-1/2 z-30 size-full -translate-x-1/2 overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30 }}
      >
        <Preload all />

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
    </div>
  );
}
