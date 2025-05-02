'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

const Loader = dynamic(
  () => import('@react-three/drei').then((module) => module.Loader),
  { ssr: false },
);

export default function SodaCanvas() {
  return (
    <div className="pointer-events-none fixed top-0 left-1/2 z-30 size-full -translate-x-1/2 overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30 }}
      >
        {/* <Preload all /> */}

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
