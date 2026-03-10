'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/ui';
import { getAllProjects, Project } from '@/config/content';

export const ProjectsGrid: React.FC = () => {
  const allProjects = getAllProjects();

  // Categorize projects
  const featuredProjects = allProjects.filter(p => p.featured);
  
  const aiMlProjects = allProjects.filter(p => 
    p.categories.some(cat => ['AI', 'ML', 'Computer Vision', 'SLM', 'Fine Tunning'].includes(cat))
  );
  
  const hardwareProjects = allProjects.filter(p => 
    p.categories.some(cat => ['Hardware', 'IoT'].includes(cat))
  );
  
  const researchProjects = allProjects.filter(p => 
    p.categories.some(cat => ['Research', 'Robotics'].includes(cat))
  );
  
  const softwareProjects = allProjects.filter(p => 
    p.categories.some(cat => ['Full Stack', 'Web', 'Enterprise', 'E-commerce', 'Microservices', 'Community', 'Corporate', 'Security'].includes(cat))
  );

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

  const CategorySection = ({ title, projects, gradientFrom, gradientTo }: { 
    title: string; 
    projects: Project[]; 
    gradientFrom: string; 
    gradientTo: string; 
  }) => {
    if (projects.length === 0) return null;

    return (
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            {title}
          </h2>
          <div className={`h-1 w-20 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`} />
        </div>
        
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
      </div>
    );
  };

  return (
    <section className="section-container">
      <CategorySection 
        title="Featured Projects" 
        projects={featuredProjects} 
        gradientFrom="from-yellow-500" 
        gradientTo="to-orange-500" 
      />
      
      <CategorySection 
        title="AI & Machine Learning" 
        projects={aiMlProjects} 
        gradientFrom="from-blue-500" 
        gradientTo="to-cyan-500" 
      />
      
      <CategorySection 
        title="Hardware & IoT" 
        projects={hardwareProjects} 
        gradientFrom="from-green-500" 
        gradientTo="to-emerald-500" 
      />
      
      <CategorySection 
        title="Research" 
        projects={researchProjects} 
        gradientFrom="from-purple-500" 
        gradientTo="to-pink-500" 
      />
      
      <CategorySection 
        title="Software Development" 
        projects={softwareProjects} 
        gradientFrom="from-indigo-500" 
        gradientTo="to-blue-500" 
      />
    </section>
  );
};
