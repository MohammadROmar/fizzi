'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { View } from '@react-three/drei';

import UpperHeroSection from './upper';
import TextSplitter from './text-splitter';
import allCansImg from '@/assets/images/all-cans-bunched.png';
import Scene from './scene';
import Bubbles from './bubbles';
import { useModelsLoadStateContext } from '@/store/hooks';
import { useMediaQuery } from '@/hooks/use-media-query';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const { loaded } = useModelsLoadStateContext();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useGSAP(() => {
    if (!loaded && isDesktop) return;

    gsap.to('.hero', { opacity: 1 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    scrollTl
      .fromTo(
        'body',
        { backgroundColor: '#ffdf20' },
        { backgroundColor: '#d9f99d', overwrite: 'auto' },
        1,
      )
      .from('.text-side-heading .split-char ', {
        scale: 1.3,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(3)',
        duration: 0.5,
      })
      .from('.text-side-body', { y: 20, opacity: 0 });
  }, [loaded, isDesktop]);

  return (
    <section className="hero bounded opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-40 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles />
        </View>
      )}

      <div className="grid">
        <UpperHeroSection />

        <div className="text-side relative z-50 grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src={allCansImg}
            alt="All of the Fizzi Flavors"
            className="w-full md:hidden"
          />

          <div>
            <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>

            <p className="text-side-body mt-4 max-w-xl text-xl text-balance text-sky-950">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
