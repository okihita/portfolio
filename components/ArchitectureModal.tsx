"use client";

import { Project } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";
import { X, CheckCircle2, ArrowUpRight, Code2, Cpu, Smartphone } from "lucide-react";
import { useEffect } from "react";

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ArchitectureModal({
  project,
  onClose,
}: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-[#101014] border border-zinc-800 p-6 shadow-2xl space-y-6 text-zinc-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs text-zinc-500 font-mono">Architecture Deep-Dive</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-100 mt-1">{project.title}</h2>
            <p className="text-sm text-zinc-400 mt-0.5">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* System Architecture Breakdown */}
        <div className="space-y-4 text-sm">
          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-100">
              <Cpu className="w-4 h-4 text-amber-400" /> Core Engineering Problem
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {project.architectureDetails.problem}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-100">
              <Code2 className="w-4 h-4 text-blue-400" /> Implemented Technical Solution
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {project.architectureDetails.solution}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-100">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Key Architectural Trade-off
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {project.architectureDetails.keyTradeoff}
            </p>
          </div>
        </div>

        {/* Engineering Feats */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider font-mono">
            Quantifiable Impact & Feats
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            {project.engineeringFeats.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
          {project.links.playstore && (
            <a
              href={project.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <Smartphone className="w-3.5 h-3.5" /> Google Play Store
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" /> Source Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
            >
              Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
