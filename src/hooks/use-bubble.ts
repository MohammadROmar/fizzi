import { useMemo } from 'react';

import { getRandomNumber } from '@/utils/get-random-number';

type UseBubbleProps = { count: number; speed: number };

export function useBubble({ count, speed }: UseBubbleProps) {
  const minSpeed = speed * 0.001;
  const maxSpeed = speed * 0.005;

  const { bubbles, bubbleSpeed } = useMemo(() => {
    const bubbles = new Float32Array(count * 3);
    const bubbleSpeed = new Array(count);

    for (let i = 0; i < count; i++) {
      const x = getRandomNumber(-4, 4);
      const y = getRandomNumber(-4, 4);
      const z = getRandomNumber(-4, 4);
      const s = getRandomNumber(minSpeed, maxSpeed);

      bubbles.set([x, y, z], i * 3);
      bubbleSpeed[i] = s;
    }

    return { bubbles, bubbleSpeed };
  }, [count, speed]);

  return { bubbles, bubbleSpeed };
}
