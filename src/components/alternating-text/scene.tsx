'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FloatingCan from '../floating-can';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BACKGROUND_COLORS = ['#ffa6b5', '#e9cff6', '#cdef9a'];

export default function Scene() {
  const canRef = useRef<Group>(null);

  useGSAP(() => {
    if (!canRef.current) return;

    const sections = gsap.utils.toArray('.alternating-section');

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.alternating-text-view',
        endTrigger: '.alternating-text-container',
        pin: true,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    sections.forEach((_, i) => {
      if (!canRef.current || i === 0) return;

      const isOdd = i % 2 !== 0;

      scrollTl
        .to(canRef.current.position, {
          x: isOdd ? -1.25 : 1,
          ease: 'circ.inOut',
          delay: 0.5,
        })
        .to(
          canRef.current.rotation,
          {
            y: isOdd ? 0.4 : -0.4,
            ease: 'back.inOut',
          },
          '<',
        )
        .to('body', {
          backgroundColor: gsap.utils.wrap(BACKGROUND_COLORS, i),
        });
    });
  });

  return (
    <group ref={canRef} position-x={1} rotation-y={-0.3}>
      <FloatingCan flavor="strawberryLemonade" />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
