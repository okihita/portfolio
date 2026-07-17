"use client";

import { ArrowRight, Terminal, ShieldCheck, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-zinc-700 dark:text-zinc-400 bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            AI Systems, Mobile Platforms & Technical Leadership
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
            Architecting Android super-apps, React Native platforms, and AI workflows.
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Hands-on Tech Lead with 10+ years shipping production software—from Android banking engines serving 25M+ active users to solo-building brand new React Native mobile apps, and agentic LLM systems.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Dedicated to producing SOLID, maintainable, strictly linted, and observed clean code. Highly aligned with business value, and able to produce the highest results with minimum supervision and direction.
            </p>
          </div>

          {/* Core Technical Highlights Pills */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> React Native & Kotlin
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Next.js
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Agentic AI & LLMs
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> 25M+ Scale Resilience
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs"
            >
              Explore Featured Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-2xs"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Metric Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white/70 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">10+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Years Software Engineering</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">25M+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Active Mobile Bank Users</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">100% Solo</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Zenius React Native App</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">Top 5 / 15</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">GDG & RedAI Competition Standing</div>
          </div>
        </div>
      </div>
    </section>
  );
}
