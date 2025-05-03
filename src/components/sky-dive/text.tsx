import { MeshLambertMaterial } from 'three';
import { Text } from '@react-three/drei';

import { useMediaQuery } from '@/hooks/use-media-query';
import { getXPosition, getYPosition } from '@/utils/get-distance';

export default function SkyDiveText() {
  const isDesktop = useMediaQuery('(min-width: 950px)');

  const words = 'Dive into better health'.toUpperCase().split(' ');

  const material = new MeshLambertMaterial();

  return words.map((word, i) => {
    return (
      <Text
        key={`${word}${i}`}
        scale={isDesktop ? 1 : 0.5}
        color="#f97315"
        material={material}
        font="/fonts/Alpino-Variable.woff"
        fontWeight={800}
        anchorX="center"
        anchorY="middle"
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
        position={[getXPosition(7), getYPosition(-7), 2]}
      >
        {word}
      </Text>
    );
  });
}
