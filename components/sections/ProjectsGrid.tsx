'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/ui';
import { getAllProjects } from '@/config/content';

export const ProjectsGrid: React.FC = () => {
  const projects = getAllProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-container">
      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link href={`/projects/${project.slug}`} className="block h-full">
              <ProjectCard project={project} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
