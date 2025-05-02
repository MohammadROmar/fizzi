'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { Environment, Scroll } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FloatingCan from '../floating-can';
import { useModelsLoadStateContext } from '@/store/hooks';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FLOAT_SPEED = 1.5;

export default function Scene() {
  const { setLoaded } = useModelsLoadStateContext();

  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    setLoaded(true);

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: 'back.out(1.25)',
      },
    });
    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2.5,
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -5, x: 1 })
        .from(can1GroupRef.current.rotation, { z: 3 }, 0)
        .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(can2GroupRef.current.rotation, { z: 3 }, 0);
    }

    scrollTl
      .to(groupRef.current.position, { x: 1 })
      .to(groupRef.current.rotation, { y: Math.PI * 2 }, 0)

      .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(can1Ref.current.rotation, { z: 0.3 }, 0)

      .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(can2Ref.current.rotation, { z: 0 }, 0)

      .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(can5Ref.current.rotation, { z: -0.25 }, 0);
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
          position={[-1.75, 0, 0]}
          rotation={[0, 0, -0.3]}
        />
      </group>

      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="grape"
          floatSpeed={FLOAT_SPEED}
          position={[1.75, 0, 0]}
          rotation={[0, 0, 0.3]}
        />
      </group>

      <FloatingCan
        ref={can3Ref}
        flavor="lemonLime"
        floatSpeed={FLOAT_SPEED}
        position={[0, 5, 2]}
      />

      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
        position={[2, 4, 2]}
      />

      <FloatingCan
        ref={can5Ref}
        flavor="watermelon"
        floatSpeed={FLOAT_SPEED}
        position={[0, -5, 0]}
      />

      <Environment files="/hdr/lobby.hdr" />
    </group>
  );
}
