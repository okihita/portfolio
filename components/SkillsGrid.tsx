"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, Cpu, Layers, Wrench, Sparkles } from "lucide-react";

export default function SkillsGrid() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 1:
        return <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Engineering Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Technical Stack & Expertise Matrix.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            A comprehensive overview of production-tested technologies, frameworks, and low-level system tooling.
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div
              key={cat.title}
              className="craft-card rounded-xl p-6 space-y-5 border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="flex items-center gap-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
                {getCategoryIcon(idx)}
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                      skill.highlight
                        ? "bg-zinc-100 dark:bg-zinc-900/90 border-zinc-300 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100"
                        : "bg-white dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    <span className="font-medium font-sans flex items-center gap-1.5">
                      {skill.highlight && (
                        <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 font-medium">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
