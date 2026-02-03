import React from 'react';
import { About } from '@/components/sections';

export const metadata = {
  title: 'About Me | Vishwani Bhagya',
  description: 'Learn more about Vishwani Bhagya - Software Engineer, Researcher, and AI enthusiast.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-20">
        <About />
      </section>
    </main>
  );
}