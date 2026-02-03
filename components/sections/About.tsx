'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/config/content';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-100">
                Who I Am
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                I'm a passionate software engineer and researcher currently pursuing my final year 
                at the <span className="text-blue-400 font-semibold">Faculty of Information Technology, 
                University of Moratuwa</span>. My journey in technology spans over <span className="text-blue-400 font-semibold">4 years 
                of programming experience</span>, with a deep focus on building impactful solutions that bridge 
                the gap between innovation and real-world applications.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-100">
                My Expertise
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                My core expertise lies in <span className="text-cyan-400 font-semibold">Full Stack Development 
                and Artificial Intelligence</span>, where I've had the privilege of working on cutting-edge projects. 
                These range from <span className="text-cyan-400 font-semibold">IoT data platforms</span> to 
                <span className="text-cyan-400 font-semibold"> Vision-Language-Action models</span> for autonomous 
                robotics. I'm deeply committed to solving complex problems through elegant, scalable solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-100">
                Beyond Code
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Beyond my technical pursuits, I'm passionate about <span className="text-yellow-400 font-semibold">community 
                building and mentorship</span>. As the <span className="text-yellow-400 font-semibold">Chairperson of IEEE WIE 
                Affinity Group</span>, I lead initiatives to empower women in engineering and create inclusive tech communities. 
                I'm always eager to collaborate, learn, and contribute to innovative projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-slate-100">Get in Touch</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">📍</span>
                  <span className="text-slate-300">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">✉️</span>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">📄</span>
                  <a 
                    href={profile.resume}
                    download
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative sticky top-32"
          >
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent rounded-2xl blur-2xl" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                <Image
                  src="/images/about/about-me.jpeg"
                  alt={`${profile.name} - About`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};