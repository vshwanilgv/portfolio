'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface DiagramTabsProps {
  architectureDiagrams: {
    system?: string;
    logical?: string;
    deployment?: string;
  };
  projectTitle: string;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

export default function DiagramTabs({ architectureDiagrams, projectTitle, colors }: DiagramTabsProps) {
  const diagrams = [
    { key: 'logical' as const, label: 'Logical Architecture', path: architectureDiagrams?.logical },
    { key: 'system' as const, label: 'System Architecture', path: architectureDiagrams?.system },
    { key: 'deployment' as const, label: 'Deployment Architecture', path: architectureDiagrams?.deployment },
  ].filter(d => d.path);

  const [activeTab, setActiveTab] = useState<'system' | 'logical' | 'deployment'>(
    diagrams[0]?.key || 'system'
  );

  if (diagrams.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className={`w-1 h-8 rounded-full ${colors.bg}`} />
        Architecture Diagrams
      </h2>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {diagrams.map((diagram) => (
          <button
            key={diagram.key}
            onClick={() => setActiveTab(diagram.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === diagram.key
                ? `${colors.bg} ${colors.text} border-2 ${colors.border}`
                : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border-2 border-transparent'
            }`}
          >
            {diagram.label}
          </button>
        ))}
      </div>

      {/* Diagram Display */}
      <div className={`relative aspect-video w-full rounded-xl overflow-hidden border-2 ${colors.border} bg-slate-900/50`}>
        {diagrams.map((diagram) => (
          diagram.key === activeTab && (
            <Image
              key={diagram.key}
              src={diagram.path!}
              alt={`${projectTitle} - ${diagram.label}`}
              fill
              className="object-contain p-4"
            />
          )
        ))}
      </div>
    </section>
  );
}
