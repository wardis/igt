import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Blog } from './Blog';
import { Newsletter } from './Newsletter';

export const Content = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Blog />
      <Newsletter />
    </main>
  );
};
