import React from 'react';
import { Hero, StatsBar, JourneyGrid, ProjectsGrid, CTA, About, Gallery} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <StatsBar />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>    

      <section id="contact">
        <CTA />
      </section>
    </>
  );
}
