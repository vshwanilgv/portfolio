'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase } from 'lucide-react';

export default function HyperCubeLabsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        {/* Back Link */}
        <div className="section-container mb-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Experience
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-container mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <Briefcase className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-2">
                HyperCube Labs
              </h1>
              <p className="text-xl text-green-400 font-semibold">Software Developer - Part Time</p>
            </div>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-6" />
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-container max-w-4xl mb-16"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-4">Overview</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                As a part-time software developer at HyperCube Labs from June 2023 to August 2024, I developed end-to-end web product features and contributed to iterative product releases. The role emphasized performant frontends, reliable APIs, and maintainable codebases. Working in a collaborative startup environment, I gained hands-on experience translating business requirements into technical deliverables and working closely with stakeholders throughout the development cycle.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Role & Responsibilities</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Designed and implemented UI features with React and TypeScript based on evolving product requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Developed and integrated backend APIs for data-driven workflows and user-facing functionality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Improved responsiveness and usability across desktop and mobile interfaces for key user journeys</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Worked closely with stakeholders to translate business ideas into incremental technical deliverables</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'JavaScript', 'Node.js', 'REST APIs', 'Web Development', 'Agile', 'Git'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-container max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Key Achievements</h2>
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Full-Stack Feature Development</h3>
              <p className="text-slate-300">
                Delivered multiple end-to-end features from design to production, ensuring seamless integration between frontend and backend components with a focus on code quality and maintainability.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Product Iteration & Release Cycles</h3>
              <p className="text-slate-300">
                Actively contributed to multiple product releases through agile sprints, participating in planning, implementation, testing, and deployment phases. Gained experience in fast-paced startup development.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Cross-Platform Optimization</h3>
              <p className="text-slate-300">
                Optimized user interfaces for both desktop and mobile platforms, ensuring responsive design and consistent user experience across devices—a critical factor in product usability.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Stakeholder Collaboration</h3>
              <p className="text-slate-300">
                Worked directly with product managers and business stakeholders to translate requirements into technical solutions, improving communication between business and engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
