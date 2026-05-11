import React from 'react';
import { PublicationsGrid } from '@/components/sections';

export const metadata = {
  title: 'Publications | Vishwani Bhagya',
  description: 'A collection of my publications with abstracts, authors, publishing details, and links.',
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <PublicationsGrid />
      </div>
    </main>
  );
}
