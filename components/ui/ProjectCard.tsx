'use client';

import React from 'react';
import Image from 'next/image';
import type { Project } from '@/config/content';

interface ProjectCardProps {
  project: Project;
}

const colorClasses: Record<string, string> = {
  blue: 'from-blue-400/30 to-blue-300/20',
  green: 'from-green-400/30 to-green-300/20',
  yellow: 'from-yellow-400/30 to-yellow-300/20',
  cyan: 'from-cyan-400/30 to-cyan-300/20',
};

const borderColors: Record<string, string> = {
  blue: 'group-hover:border-blue-400/60',
  green: 'group-hover:border-green-400/60',
  yellow: 'group-hover:border-yellow-400/60',
  cyan: 'group-hover:border-cyan-400/60',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const gradientClass = colorClasses[project.color] || colorClasses.blue;
  const borderClass = borderColors[project.color] || borderColors.blue;

  const allTechnologies = [
    ...(project.techStack.backend || []),
    ...(project.techStack.frontend || []),
    ...(project.techStack.database || []),
    ...(project.techStack.tools || []),
  ];

  return (
    <div className={`group relative h-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden ${borderClass} transition-all duration-300 cursor-pointer`}>
      <div className={`relative p-6 bg-gradient-to-br ${gradientClass}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span key={category} className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs font-semibold rounded-full">
                {category}
              </span>
            ))}
          </div>
          <span className="px-3 py-1 bg-slate-800/80 text-slate-300 text-sm font-semibold rounded-full">
            {project.year}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      
      </div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
          <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div>
          <p className="text-xs text-slate-500 font-semibold uppercase mb-3">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.slice(0, 5).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                {tech}
              </span>
            ))}
            {allTechnologies.length > 5 && (
              <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-md">
                +{allTechnologies.length - 5}
              </span>
            )}
          </div>
        </div>
              {/* Project Image */}

        <div className="pt-4 border-t border-slate-800">
          <span className="text-sm text-slate-500 group-hover:text-blue-400 transition-colors flex items-center gap-2">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
