import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Github, ExternalLink } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/config/content';
import DiagramTabs from '@/components/DiagramTabs';
import ScreenshotsGallery from '@/components/ScreenshotsGallery';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Vishwani Bhagya`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const colors = colorClasses[project.color] || colorClasses.blue;

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="section-container max-w-6xl">
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.categories.map((category) => (
                <span key={category} className={`px-4 py-2 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                  {category}
                </span>
              ))}
              <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-slate-800 text-slate-300`}>
                {project.year}
              </span>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full text-sm font-semibold transition-all group"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-400">
              {project.description}
            </p>
          </div>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className={`w-1 h-8 rounded-full ${colors.bg}`} />
              Project Overview
            </h2>
            <div className={`p-8 bg-slate-900/50 border ${colors.border} rounded-xl`}>
              <p className="text-lg text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>

          {/* Architecture Diagrams */}
          {project.architectureDiagrams && (
            <DiagramTabs 
              architectureDiagrams={project.architectureDiagrams}
              projectTitle={project.title}
              colors={colors}
            />
          )}

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className={`w-1 h-8 rounded-full ${colors.bg}`} />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotsGallery 
              screenshots={project.screenshots}
              projectTitle={project.title}
              colors={colors}
            />
          )}

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className={`w-1 h-8 rounded-full ${colors.bg}`} />
              Technology Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backend */}
              {project.techStack.backend && project.techStack.backend.length > 0 && (
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Frontend */}
              {project.techStack.frontend && project.techStack.frontend.length > 0 && (
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Database */}
              {project.techStack.database && project.techStack.database.length > 0 && (
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    Database
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {project.techStack.tools && project.techStack.tools.length > 0 && (
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.tools.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
