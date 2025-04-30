import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';

import Header from '@/components/header';
import './globals.css';
import SodaCanvas from '@/components/canvas';

const alpinoFont = localFont({
  src: '../assets/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino',
});

export const metadata: Metadata = {
  title: 'Fizzi - Soda for Gutsy People',
  description:
    'Discover the refreshing taste of Fizzi, focused on gut health, featuring low-calorie, big-flavor drinks made with natural ingredients.',
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${alpinoFont.variable} font-alpino overflow-x-hidden bg-yellow-300 antialiased`}
      >
        <Header />
        <main>
          {children}
          <SodaCanvas />
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
