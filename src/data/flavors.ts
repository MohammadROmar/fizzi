import type { SodaCanProps } from '@/components/soda-can';

export const FLAVORS: {
  flavor: SodaCanProps['flavor'];
  color: string;
  name: string;
}[] = [
  { flavor: 'blackCherry', color: '#710523', name: 'Black Cherry' },
  { flavor: 'grape', color: '#572981', name: 'Grape Goodness' },
  { flavor: 'lemonLime', color: '#164405', name: 'Lemon Lime' },
  {
    flavor: 'strawberryLemonade',
    color: '#690B3D',
    name: 'Strawberry Lemonade',
  },
  { flavor: 'watermelon', color: '#4B7002', name: 'Watermelon Crush' },
];
