import React from 'react';
import { ProjectsGrid } from '@/components/sections';

export const metadata = {
  title: 'Projects | Vishwani Bhagya',
  description: 'Explore my portfolio of software engineering and research projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="section-container mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            My Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-3xl">
            A collection of my work in AI, full-stack development, and research.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </main>
  );
}