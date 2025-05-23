import { ModelsLoadStateContextProvider } from '@/store/wrappers';
import Hero from '@/components/hero';
import SodaCanvas from '@/components/canvas';
import SkyDive from '@/components/sky-dive';
import Carousel from '@/components/carousel';
import AlternatingText from '@/components/alternating-text';

export default function HomePage() {
  return (
    <>
      <ModelsLoadStateContextProvider>
        <Hero />
        <SodaCanvas />
      </ModelsLoadStateContextProvider>
      <SkyDive />
      <Carousel />
      <AlternatingText />
    </>
  );
}
