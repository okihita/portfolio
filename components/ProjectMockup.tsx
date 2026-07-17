"use client";

import { Project } from "@/data/portfolioData";
import {
  Globe,
  Lock,
  Terminal as TerminalIcon,
  Wifi,
  Battery,
  Signal,
  CheckCircle2,
  Activity,
  Zap,
  Play,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";

interface ProjectMockupProps {
  project: Project;
  customImageSrc?: string; // Slot for future screenshot import
}

export default function ProjectMockup({
  project,
  customImageSrc,
}: ProjectMockupProps) {
  // If custom screenshot image is supplied by user in the future, render it cleanly
  if (customImageSrc) {
    return (
      <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video">
        <Image
          src={customImageSrc}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  // Otherwise, render sleek CSS/SVG mock frame screenshots
  if (project.mockType === "browser") {
    return (
      <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col font-sans">
        {/* Browser Chrome Window Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-3.5 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          </div>
          <div className="flex-1 max-w-md bg-zinc-950 border border-zinc-800/80 rounded-md px-3 py-1 flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span className="truncate">https://{project.id}.dev/app/dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <Globe className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Mock Browser App Dashboard UI Content */}
        <div className="p-4 sm:p-5 bg-[#0d0d11] space-y-4 text-xs font-mono text-zinc-300 min-h-[260px] flex flex-col justify-between">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-zinc-200">Pipeline Execution Engine v2.4</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Active Cluster
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700 flex items-center gap-1 text-[11px]">
                <Play className="w-3 h-3 text-emerald-400" /> Trigger DAG
              </button>
            </div>
          </div>

          {/* Interactive DAG Nodes Mock Canvas */}
          <div className="grid grid-cols-3 gap-3 my-2">
            <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span>1. Ingress Stream</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-zinc-100 font-semibold">12,450 req/sec</div>
              <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[85%]" />
              </div>
            </div>

            <div className="p-3 rounded-md bg-zinc-900/90 border border-blue-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span>2. Edge Function DAG</span>
                <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
              </div>
              <div className="text-zinc-100 font-semibold">3.2ms Execution</div>
              <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
                <div className="bg-blue-400 h-full w-[45%]" />
              </div>
            </div>

            <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span>3. Redis Write WAL</span>
                <Zap className="w-3 h-3 text-amber-400" />
              </div>
              <div className="text-zinc-100 font-semibold">0.8ms Sync</div>
              <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
                <div className="bg-amber-400 h-full w-[25%]" />
              </div>
            </div>
          </div>

          {/* Bottom Live Telemetry Terminal Line */}
          <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-[11px]">
            <div className="text-zinc-400 flex items-center gap-2">
              <span className="text-blue-400 font-bold">[SYS LOG]</span>
              <span>All 10,240 workers operating in optimal bounds.</span>
            </div>
            <span className="text-emerald-400 font-semibold">p99: 42ms</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.mockType === "mobile") {
    return (
      <div className="py-2 flex justify-center">
        {/* Sleek Smartphone Frame */}
        <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-[36px] p-3 bg-zinc-900 border-2 border-zinc-700/80 shadow-2xl flex flex-col font-sans">
          {/* Mobile Inner Screen Screen Container */}
          <div className="w-full rounded-[26px] bg-[#0c0c10] border border-zinc-800 p-4 space-y-4 flex flex-col justify-between min-h-[300px]">
            {/* Top Device Notch & Status Header */}
            <div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono px-1 pb-2 border-b border-zinc-800/60">
                <span>09:41</span>
                <div className="w-16 h-3 rounded-full bg-zinc-800 mx-auto" />
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* React Native App Header Bar */}
              <div className="pt-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Field Sync Engine</div>
                  <div className="text-sm font-bold text-zinc-100">Pulse Field Operational v3</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CRDT Synced
                </span>
              </div>
            </div>

            {/* Offline-First Diagnostics Mock Component */}
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-semibold">Sensor Grid #402</span>
                  <span className="text-zinc-500 text-[10px]">SQLite Local DB</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded bg-zinc-950 text-zinc-300">
                    <div className="text-zinc-500">Pressure</div>
                    <div className="font-bold text-zinc-100">142.4 PSI</div>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 text-zinc-300">
                    <div className="text-zinc-500">Local Queue</div>
                    <div className="font-bold text-emerald-400">0 Pending</div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-blue-300 text-[11px]">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hermes Engine Active</span>
                </div>
                <span className="font-semibold text-zinc-100">60 FPS</span>
              </div>
            </div>

            {/* Mobile Navigation Dock */}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-around text-zinc-400">
              <div className="w-8 h-1 bg-zinc-600 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Systems Terminal Mockup
  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
        </div>
        <div className="text-zinc-400 text-[11px] font-semibold flex items-center gap-1.5">
          <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
          hyperion-daemon --bench --cluster-nodes=8
        </div>
        <span className="text-[10px] text-zinc-500">Rust / Tokio</span>
      </div>

      {/* Terminal Output */}
      <div className="p-4 bg-[#0a0a0d] text-zinc-300 space-y-2 min-h-[250px] font-mono leading-relaxed">
        <div className="text-zinc-500">$ hyperion-cli status --metrics</div>
        <div className="text-emerald-400">✓ Ingress Engine online. Listening on 0.0.0.0:8080 (epoll)</div>
        <div className="text-zinc-400">
          [INFO] Tokio worker pool: 16 threads initialized. Memory: 17.8MB allocated.
        </div>
        <div className="py-2 grid grid-cols-3 gap-2 text-[11px]">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">RPS Benchmark</div>
            <div className="font-bold text-zinc-100 text-sm">124,180 /s</div>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">Allocations</div>
            <div className="font-bold text-emerald-400 text-sm">Zero Alloc</div>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">tail p99</div>
            <div className="font-bold text-blue-400 text-sm">1.12ms</div>
          </div>
        </div>
        <div className="text-zinc-400 flex items-center gap-2 pt-1">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Stream rate limiter active. Token buckets replenished.</span>
        </div>
      </div>
    </div>
  );
}
