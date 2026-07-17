"use client";

import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectMockup from "./ProjectMockup";
import ArchitectureModal from "./ArchitectureModal";
import { GithubIcon } from "./SocialIcons";
import { ArrowUpRight, Code2, CheckCircle2, Smartphone } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Selected Engineering Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              High-impact Web, Mobile & Distributed Systems.
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md font-normal">
            Production systems engineered for scalability, offline resilience, and low-latency performance. Each project highlights real engineering trade-offs.
          </p>
        </div>

        {/* Projects List with Alternating Zig-Zag Layout */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="craft-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Text & Details Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-200/80 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300">
                        {project.category}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">Project 0{idx + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 py-1">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/80 space-y-0.5"
                      >
                        <div className="text-[10px] font-mono text-zinc-500">{metric.label}</div>
                        <div className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engineering Achievements Preview */}
                  <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                      Key Feats
                    </div>
                    <ul className="space-y-1.5">
                      {project.engineeringFeats.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-xs"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Architecture Deep-Dive
                    </button>
                    {project.links.playstore && (
                      <a
                        href={project.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                        aria-label="View on Google Play Store"
                      >
                        <Smartphone className="w-3.5 h-3.5" /> Play Store
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="View Github Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Mockup Column (Zig-Zag order) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-last" : "lg:order-first"
                  }`}
                >
                  <ProjectMockup project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Architecture Drawer */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
