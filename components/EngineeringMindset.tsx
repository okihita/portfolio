"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Compass } from "lucide-react";

export default function EngineeringMindset() {
  return (
    <section id="principles" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <Compass className="w-3.5 h-3.5" /> Core Philosophy
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Engineering Mindset & Architectural Values.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Building software requires more than technical syntax; it demands deliberate trade-off decisions, product empathy, and long-term maintainability.
          </p>
        </div>

        {/* 2x2 Grid of Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.principles.map((item, idx) => (
            <div
              key={idx}
              className="craft-card rounded-xl p-6 space-y-3 border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700/80 flex items-center justify-center font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
