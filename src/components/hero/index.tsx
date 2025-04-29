import Image from 'next/image';

import UpperHeroSection from './upper';
import TextSplitter from './text-splitter';
import allCansImg from '@/assets/images/all-cans-bunched.png';

export default function Hero() {
  return (
    <section className="hero bounded">
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
