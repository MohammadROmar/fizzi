'use client';

import { View } from '@react-three/drei';

import Scene from './scene';

export default function SkyDive() {
  return (
    <section className="skydive bounded" aria-label="Soda Can Skydive">
      <View className="h-screen w-screen">
        <Scene />
      </View>
    </section>
  );
}
