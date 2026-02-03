import React from 'react';
import { getJourneyByType } from '@/config/content';
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Education | Vishwani Bhagya',
  description: 'My educational background and academic achievements.',
};

export default function EducationPage() {
  const education = getJourneyByType('education');

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="section-container mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">
            Education
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-3xl">
            My academic journey and continuous pursuit of knowledge in software engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="section-container max-w-4xl">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={item.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-blue-500 border-4 border-slate-950" />

                {/* Content Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

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
        </div>
      </div>
    </main>
  );
}
