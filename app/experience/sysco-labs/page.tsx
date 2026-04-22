'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Briefcase } from 'lucide-react';
import { getProjectBySlug } from '@/config/content';

export default function SyscoLabsPage() {
  const foodStoreProject = getProjectBySlug('food-store-web-app');
  const predictiveMaintenanceProject = getProjectBySlug('predictive-maintenance');

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
                Sysco Labs Sri Lanka
              </h1>
              <p className="text-xl text-green-400 font-semibold">Software Engineer Intern</p>
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
                I contributed to the Enterprise Architecture and Automation team, balancing large-scale ServiceNow development with a rigorous technical training program (Project Summit) where I engineered microservices and AI-driven monitoring systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Roles & Responsibilities</h3>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Enterprise ServiceNow Development & ITSM</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Full Lifecycle Implementation:</span> Engaged in the end-to-end design, configuration, and deployment of ITSM modules, including Incident, Problem, Change Management, and Service Catalog.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Workflow Automation:</span> Developed custom client scripts, transform maps, and backend logic to automate manual processes, significantly improving organizational efficiency.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">System Integration:</span> Built integrations with enterprise tools, including developing a specialized CMDB Query Builder plug-in for Datadog log services and assisting with Hardware Asset onboarding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Technical Documentation:</span> Authored comprehensive technical guides, UAT documentation, and deployment diagrams to ensure seamless production transitions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">R&D Initiative:</span> Conducted specialized research on ServiceNow Digital Experience (DEX) Desktop Assistance, identifying high-impact use cases for future adoption.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">Project Summit: Full Stack Development & 4IR</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Microservices Architecture:</span> Designed and developed a full-stack Food Store Application using Spring Boot (backend), React (frontend), and Node.js as a BFF (Backend for Frontend) layer.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Micro-Frontend Orchestration:</span> Implemented micro-frontend principles using Single-SPA to allow for independent scaling and deployment of UI components.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Secure Authentication:</span> Integrated AWS Cognito to manage secure user lifecycles, including signup, sign-in, and verification protocols.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>
                    <span className="font-semibold text-slate-200">Predictive Maintenance System:</span> Developed an end-to-end machine condition monitoring system using MQTT to collect real-time vibration and sensor data.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Trained an XGBoost classifier to detect machinery anomalies with high precision.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">•</span>
                  <span>Built a Flask API and a React dashboard to visualize real-time health trends and machine profiles.</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Key Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-container max-w-4xl"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-8">Project Summit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Store Project */}
            {foodStoreProject && (
              <Link href={`/projects/${foodStoreProject.slug}`}>
                <div className="group h-full bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">
                      {foodStoreProject.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Built as part of Project Summit, this full-stack application applies cloud-native microservices and micro-frontend architecture patterns for scalable product, user, and cart workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {foodStoreProject.categories.map((cat) => (
                      <span key={cat} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
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
                <div className="group h-full bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-green-400 transition-colors">
                      {predictiveMaintenanceProject.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Designed as an AI-driven monitoring initiative, this solution combines MQTT data ingestion, XGBoost anomaly detection, and a Flask + React stack for real-time machine health insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {predictiveMaintenanceProject.categories.map((cat) => (
                      <span key={cat} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
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
          className="section-container max-w-4xl mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Key Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'ServiceNow (ITSM, CMDB, DEX)',
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
              <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
