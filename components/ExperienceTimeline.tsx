"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Track Record & Engineering Impact.
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            A history of technical leadership, performance engineering, and cross-functional product execution.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

              <div className="craft-card rounded-xl p-6 space-y-4 border border-zinc-800/80">
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
                    <div className="text-sm font-semibold text-blue-400 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      {item.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Key Deliverables & Metrics
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
