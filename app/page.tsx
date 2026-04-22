import React from 'react';
import { Hero, StatsBar, CTA, Gallery, ProjectsGrid } from '@/components/sections';

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

      <section id="featured-projects">
        <ProjectsGrid sectionIds={['featured-projects']} />
      </section>

      <section id="contact">
        <CTA />
      </section>
    </>
  );
}
