import React from 'react';
import { getJourneyByType } from '@/config/content';
import { Briefcase, Users } from 'lucide-react';

export const metadata = {
  title: 'Experience | Vishwani Bhagya',
  description: 'My professional experience and volunteer work.',
};

export default function ExperiencePage() {
  const experience = getJourneyByType('experience');
  const volunteering = getJourneyByType('volunteering');

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="section-container mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            Experience
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-3xl">
            My professional journey and contributions to the tech community through work and volunteer activities.
          </p>
        </div>

        <div className="section-container max-w-4xl space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-green-400" />
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-8 pb-8 border-l-2 border-green-500/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-green-500 border-4 border-slate-950" />

                  {/* Content Card */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                          <Briefcase className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-100">
                            {item.title}
                          </h3>
                          <p className="text-green-400 font-semibold">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-semibold rounded-full">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering Experience Section */}
          <section>
            <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-yellow-400" />
              Volunteering Experience
            </h2>
            
            <div className="space-y-8">
              {volunteering.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-8 pb-8 border-l-2 border-yellow-500/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-yellow-500 border-4 border-slate-950" />

                  {/* Content Card */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                          <Users className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-100">
                            {item.title}
                          </h3>
                          <p className="text-yellow-400 font-semibold">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm font-semibold rounded-full">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
