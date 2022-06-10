import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Blog } from './Blog';
import { Newsletter } from './Newsletter';
import { Stack, Container } from '@mui/material';

export const Content = () => {
  return (
    <main>
      <Container>
        <Stack spacing={3} justifyContent='space-between'>
          <Hero />
          <Features />
          <Blog />
          <Newsletter />
        </Stack>
      </Container>
    </main>
  );
};
