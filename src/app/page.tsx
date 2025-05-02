import { ModelsLoadStateContextProvider } from '@/store/wrappers';
import Hero from '@/components/hero';
import SodaCanvas from '@/components/canvas';

export default function HomePage() {
  return (
    <ModelsLoadStateContextProvider>
      <Hero />
      <SodaCanvas />
    </ModelsLoadStateContextProvider>
  );
}
