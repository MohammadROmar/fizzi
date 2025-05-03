'use client';

import { useRef, useState } from 'react';
import { Group } from 'three';
import { View } from '@react-three/drei';
import gsap from 'gsap';

import Scene from './scene';
import Button from './button';
import WavyCircles from '@/assets/icons/wavy-circles';
import { FLAVORS } from '@/data/flavors';

export default function Carousel() {
  const [flavorIndex, setFlavorIndex] = useState(0);
  const canRef = useRef<Group>(null);

  function changeFlavor(index: number) {
    if (!canRef.current) return;

    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();

    tl.to(
      canRef.current.rotation,
      {
        y:
          index > flavorIndex ? `-=${Math.PI * 2 * 4}` : `+=${Math.PI * 2 * 4}`,
        ease: 'power2.inOut',
        duration: 1,
      },
      0,
    )
      .to(
        '.background, .wavy-circles-outer, .wavy-circles-inner',
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: 'power2.inOut',
          duration: 1,
        },
        0,
      )
      .to('.text-wrapper', { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setFlavorIndex(nextIndex) }, 0.5)
      .to('.text-wrapper', { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto_4fr_auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <WavyCircles className="absolute top-1/2 left-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />

      <h2 className="relative h-auto text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>

      <div className="grid grid-cols-[auto_auto_auto] items-center">
        <Button
          direction="left"
          label="Previous Falvor"
          onClick={() => changeFlavor(flavorIndex - 1)}
        />

        <View className="aspect-square h-[70vmin] min-h-40">
          <Scene ref={canRef} flavorIndex={flavorIndex} />
        </View>

        <Button
          direction="right"
          label="Next Falvor"
          onClick={() => changeFlavor(flavorIndex + 1)}
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <p className="text-wrapper text-4xl font-medium">
          {FLAVORS[flavorIndex].name}
        </p>

        <p className="mt-2 text-2xl opacity-80">12 cans - $35.99</p>
      </div>
    </section>
  );
}
