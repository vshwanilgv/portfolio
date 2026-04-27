'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Briefcase, Sparkles, ShieldCheck, Cpu, Workflow, Zap, Database, Cog, BookOpen, Users, GitBranch } from 'lucide-react';
import { getProjectBySlug } from '@/config/content';

export default function SyscoLabsPage() {
  const foodStoreProject = getProjectBySlug('food-store-web-app');
  const predictiveMaintenanceProject = getProjectBySlug('predictive-maintenance');

  return (
    <main className="min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.10),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_40%)]" />
      <div className="relative pt-32 pb-20">
        {/* Back Link */}
        <div className="section-container mb-10">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-green-400 hover:text-green-300 hover:border-green-500/40 hover:bg-slate-900 transition-all"
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
          <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/80 p-8 md:p-10 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
                  <Briefcase className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-green-300 mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Sysco Labs Sri Lanka
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-3 leading-tight">
                    Software Engineer Intern
                  </h1>
                  <p className="text-xl text-green-400 font-semibold mb-2">Global Infrastructure Operations</p>
                  <p className="text-slate-400">March 2025 – August 2025</p>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-8" />
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-container max-w-6xl mb-16"
        >
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-7 md:p-8 shadow-xl shadow-black/20">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Overview</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              I contributed to the Enterprise Architecture and Automation team, balancing large-scale ServiceNow development with a rigorous technical training program (Project Summit) where I engineered microservices and AI-driven monitoring systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ITSM', 'ServiceNow', 'Automation', 'Enterprise Operations', 'Full-Stack', 'AI Systems'].map((item) => (
                <span key={item} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Contributions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="section-container max-w-6xl mb-16"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">Key Contributions</h2>
            <p className="text-slate-400">
              Hands-on experience across enterprise infrastructure, automation, and advanced technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-green-500/10 p-2 border border-green-500/20">
                  <Workflow className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">ITSM Modules</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                End-to-end design, configuration, and deployment of Incident, Problem, Change Management, and Service Catalog modules.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-blue-500/10 p-2 border border-blue-500/20">
                  <Cpu className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">Agentic AI & ITSM</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized research into Agentic AI systems for ServiceNow to automate complex ITSM decision-making workflows.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-purple-500/10 p-2 border border-purple-500/20">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">RAG Frameworks</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Worked with Retrieval-Augmented Generation to enhance technical documentation and infrastructure data retrieval.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-orange-500/10 p-2 border border-orange-500/20">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">Enterprise Integrations</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom CMDB Query Builder plug-ins for Datadog and automated Hardware Asset onboarding workflows.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-cyan-500/10 p-2 border border-cyan-500/20">
                  <Cog className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">Process Engineering</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Implemented backend logic, transform maps, and client scripts to automate high-volume infrastructure processes.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-indigo-500/10 p-2 border border-indigo-500/20">
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">System Architecture</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full implementation lifecycle from solution design and configuration to testing and deployment of enterprise modules.
              </p>
            </motion.div>

            {/* Card 7 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-amber-500/10 p-2 border border-amber-500/20">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">Documentation</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-level deployment diagrams, technical guides, and UAT documentation for production-ready catalog items.
              </p>
            </motion.div>

            {/* Card 8 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-rose-500/10 p-2 border border-rose-500/20">
                  <Users className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">Strategic Alignment</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contributed to sprint planning and stakeholder meetings to align technical deliverables with global organizational goals.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-container max-w-6xl"
        >
          <div className="flex items-end justify-between gap-4 mb-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-100 mb-2">Project Summit</h2>
              <p className="text-slate-400">
                Completed the intensive training program of full-stack development, cloud technologies, and modern software engineering practices through hands on projects and mentorship. Delivered two major projects: a microservices-based food store web application and an AI-driven predictive maintenance system, showcasing my ability to design and implement scalable solutions in a collaborative environment.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-400">
              
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Store Project */}
            {foodStoreProject && (
              <Link href={`/projects/${foodStoreProject.slug}`}>
                <div className="group h-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/70 p-7 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-green-500/5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">
                      {foodStoreProject.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-green-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    Built as part of Project Summit, this full-stack application applies  microservices and micro-frontend architecture patterns for scalable product, user, and cart workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {foodStoreProject.categories.map((cat) => (
                      <span key={cat} className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}

            {/* Predictive Maintenance Project */}
            {predictiveMaintenanceProject && (
              <Link href={`/projects/${predictiveMaintenanceProject.slug}`}>
                <div className="group h-full rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/70 p-7 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {predictiveMaintenanceProject.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-blue-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    Designed as an AI-driven monitoring initiative, this solution combines MQTT data ingestion, XGBoost anomaly detection, and a Flask + React stack for real-time machine health insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {predictiveMaintenanceProject.categories.map((cat) => (
                      <span key={cat} className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="section-container max-w-6xl mt-16"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Key Tech Stack</h3>
            <div className="h-px w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Javascript',
              'ServiceNow (ITSM, CMDB)',
              'AWS Cognito',
              'Node.js',
              'Spring Boot',
              'Flask',
              'React',
              'Single-SPA',
              'MQTT',
              'Datadog',
              'CMDB Query Builder',
            ].map((tech) => (
              <span key={tech} className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 shadow-sm shadow-black/10 transition-all hover:border-green-500/30 hover:bg-slate-800/80">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
