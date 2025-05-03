'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { Cloud, Clouds, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FloatingCan from '../floating-can';
import SkyDiveText from './text';
import {
  getXPosition,
  getXYPositions,
  getYPosition,
} from '@/utils/get-distance';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scene() {
  const groupRef = useRef<Group>(null);
  const canRef = useRef<Group>(null);
  const cloud1Ref = useRef<Group>(null);
  const cloud2Ref = useRef<Group>(null);
  const cloudsRef = useRef<Group>(null);
  const wordsRef = useRef<Group>(null);

  useGSAP(() => {
    if (
      !groupRef.current ||
      !canRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current ||
      !cloudsRef.current ||
      !wordsRef.current
    )
      return;

    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      repeat: -1,
      duration: 2,
      ease: 'none',
    });

    const DISTANCE = 15;
    const DURATION = 6;

    gsap.to(cloud1Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: 'none',
      repeat: -1,
      duration: DURATION,
    });

    gsap.to(cloud2Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: 'none',
      repeat: -1,
      delay: DURATION / 2,
      duration: DURATION,
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skydive',
        pin: true,
        start: 'top top',
        end: '+=2000',
        scrub: 1.5,
      },
    });

    scrollTl
      .to('body', {
        backgroundColor: '#c0f0f5',
        overwrite: 'auto',
        duration: 0.1,
      })
      .to(cloudsRef.current.position, { z: 0, duration: 0.3 }, 0)
      .to(
        canRef.current.position,
        { x: 0, y: 0, duration: 0.3, ease: 'back.out(1.7)' },
        0,
      )
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { ...getXYPositions(-7), z: -7 },
          ],
          stagger: 0.3,
        },
        0,
      )
      .to(canRef.current.position, {
        ...getXYPositions(4),
        duration: 0.5,
        ease: 'back.in(1.7)',
      })
      .to(cloudsRef.current.position, { z: 7, duration: 0.5 });
  });

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          position={[getXPosition(-4), getYPosition(4), 0]}
        >
          <pointLight intensity={100} color="#8c0413" />
        </FloatingCan>
      </group>

      <Clouds ref={cloudsRef} position={[0, 0, 10]}>
        <Cloud
          ref={cloud1Ref}
          bounds={[10, 10, 2]}
          position={[getXPosition(15), getYPosition(-15), 0]}
        />
        <Cloud
          ref={cloud2Ref}
          bounds={[10, 10, 2]}
          position={[getXPosition(15), getYPosition(-15), 0]}
        />
      </Clouds>

      <group ref={wordsRef}>
        <SkyDiveText />
      </group>

      <ambientLight intensity={2} color="#9ddefa" />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}
