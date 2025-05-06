'use client';

import { View } from '@react-three/drei';
import clsx from 'clsx';

import { useMediaQuery } from '@/hooks/use-media-query';
import Scene from './scene';
import { alternatingTextContent } from '@/data/alternating-text-content';

export default function AlternatingText() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="bounded alternating-text-container relative grid text-sky-950">
      <View className="alternating-text-view absolute top-0 left-0 h-screen w-screen">
        {isDesktop && <Scene />}
      </View>

      {alternatingTextContent.map((content, i) => (
        <div
          key={content.heading}
          className="alternating-section relative z-50 grid h-screen place-items-center gap-x-12 md:grid-cols-2"
        >
          <div
            className={clsx(
              'rounded-lg p-4 backdrop-blur-sm max-md:!col-start-1 max-md:bg-white/20',
              i % 2 === 0 ? 'col-start-1' : 'col-start-2',
            )}
          >
            <h2 className="text-6xl font-bold">{content.heading}</h2>
            <p className="mt-4 text-xl">{content.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
