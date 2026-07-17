"use client";

import { ArrowRight, Terminal, ShieldCheck, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Full-Stack Engineering & System Architecture
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
            Architecting scalable web platforms & resilient mobile systems.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Senior software engineer specializing in high-throughput React & React Native applications, TypeScript microservices, and offline-first data engines. Driven by clean code, p99 latency optimization, and intuitive UX.
          </p>

          {/* Core Technical Highlights Pills */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" /> Next.js 16 App Router
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> React Native (iOS & Android)
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" /> TypeScript & Rust
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> High-Availability Systems
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-all shadow-sm"
            >
              Explore Featured Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800/80 hover:text-zinc-100 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Subtle Metric Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-100">7+</div>
            <div className="text-xs text-zinc-400">Years Industry Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-100">5M+</div>
            <div className="text-xs text-zinc-400">Daily Production Requests</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-100">99.99%</div>
            <div className="text-xs text-zinc-400">Uptime Reliability SLA</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-100">sub-50ms</div>
            <div className="text-xs text-zinc-400">Target p99 API Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
}
