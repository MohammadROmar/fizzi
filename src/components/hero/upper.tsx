import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '../ui/button';
import TextSplitter from './text-splitter';

export default function UpperHeroSection() {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .from('.hero-header-word', {
        scale: 3,
        opacity: 0,
        ease: 'power4.in',
        delay: 0.25,
        stagger: 1,
      })
      .from('.hero-subheading', { opacity: 0, y: 30 }, '+=0.8')
      .from('.hero-body', { opacity: 0, y: 10 })
      .from('.hero-button', { opacity: 0, y: 10, duration: 0.6 });
  });

  return (
    <div className="grid h-screen place-items-center">
      <div className="grid auto-rows-min place-items-center text-center">
        <h1 className="her0-header text-7xl leading-[0.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
          <TextSplitter
            text="Live Gutsy"
            wordDisplayStyle="block"
            className="hero-header-word"
          />
        </h1>

        <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
          <p>Soda Perfected</p>
        </div>

        <div className="hero-body text-3xl text-sky-950">
          <p className="mb-16">3-5g sugar. 9g fiber. 5 delicious flavors.</p>

          <Button text="Shop Now" link="/" className="hero-button uppercase" />
        </div>
      </div>
    </div>
  );
}
