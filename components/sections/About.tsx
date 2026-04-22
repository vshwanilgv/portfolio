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

          <div className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-100">
            Who I Am
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            I am a Final Year Software Engineering student at the <span className="text-blue-400 font-semibold">University of Moratuwa</span> with 4 years of experience building across the technical spectrum, dedicated to <span className="text-blue-400 font-semibold">building impactful solutions that bridge the gap between innovation and real world applications.</span> From architecting full-stack systems to researching AI driven robotics, I focus on turning complex academic concepts into tangible, scalable tools.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-100">
            What I Work On
          </h2>
          <div className="text-lg text-slate-300 leading-relaxed font-light space-y-5">
            <p>
              My technical foundation is built on <span className="text-cyan-400 font-semibold">Full Stack Development, AI, and Machine Learning</span>. I don't just build interfaces; I engineer intelligent, end to end ecosystems that solve practical problems.
            </p>
            
            <div className="space-y-4 pl-4 md:pl-6 border-l border-slate-800/60">
              <div>
                <span className="text-cyan-400 font-semibold block mb-1">AI & Robotics:</span> 
                I have worked extensively with <span className="text-white">RAG, LLMs, and AI Agents</span> to build autonomous systems. This includes developing a <span className="text-white">Hierarchical Vision Language Action (VLA) framework</span> for robotics (presented at <span className="italic text-slate-400">ICIPRoP 2026</span>), engineering UAV navigation systems via Reinforcement Learning, and building predictive maintenance systems that forestall failures through data driven insights.
              </div>

              <div>
                <span className="text-cyan-400 font-semibold block mb-1">IoT & Full Stack Systems:</span> 
                I specialize in building robust, developer centric platforms. I am the creator of <span className="text-white">DataCanvas</span>—a full IoT monitoring platform with a public API and developer tooling that has been live and operational since 2024. My full stack work focuses on creating seamless, high performance architectures that handle real time data at scale.
              </div>

              <div>
                <span className="text-cyan-400 font-semibold block mb-1">Enterprise Solutions:</span> 
                I also have experience in <span className="text-white">ServiceNow Development</span>, leveraging the platform to streamline enterprise workflows and integrate complex business logic into automated, userfriendly digital experiences.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-100">
            Beyond Code
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            I believe technology is most powerful when it's inclusive. As the <span className="text-yellow-400 font-semibold">Chairwoman of the IEEE WIE Affinity Group</span>, I lead initiatives to empower women in engineering and foster a culture of mentorship. Whether I'm optimizing a neural network or leading a community project, I'm driven by the desire to push boundaries and build for the future.
          </p>
        </div>
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
            className="sticky top-32"
          >
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent rounded-2xl blur-2xl" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                <Image
                  // src="/images/about/about-me.jpeg"
                  src="/images/about/profile2.jpg"
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