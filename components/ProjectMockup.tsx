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
  customImageSrc?: string;
}

export default function ProjectMockup({
  project,
  customImageSrc,
}: ProjectMockupProps) {
  const activeImage = customImageSrc || project.image;

  if (project.mockType === "mobile") {
    return (
      <div className="py-2 flex justify-center">
        {/* Sleek Smartphone Frame */}
        <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-[36px] p-3 bg-zinc-900 border-2 border-zinc-700/80 shadow-2xl flex flex-col font-sans">
          {/* Mobile Inner Screen Container */}
          <div className="w-full rounded-[26px] bg-[#0c0c10] border border-zinc-800 p-3 space-y-3 flex flex-col justify-between overflow-hidden relative min-h-[340px]">
            {/* Top Device Notch & Status Header */}
            <div className="z-10 bg-[#0c0c10]/90 backdrop-blur-sm pb-1">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono px-1 pb-1.5 border-b border-zinc-800/60">
                <span>09:41</span>
                <div className="w-16 h-2.5 rounded-full bg-zinc-800 mx-auto" />
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Display Real Screenshot if Available */}
            {activeImage ? (
              <div className="relative w-full h-[280px] rounded-lg overflow-hidden border border-zinc-800/60">
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ) : (
              /* Simulated Dynamic Mobile UI */
              <>
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      React Native Engine
                    </div>
                    <div className="text-sm font-bold text-zinc-100">{project.title}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 font-semibold">Hermes Engine</span>
                      <span className="text-zinc-500 text-[10px]">v1.0.0</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-zinc-950 text-zinc-300">
                        <div className="text-zinc-500">UI Thread</div>
                        <div className="font-bold text-emerald-400">60 FPS</div>
                      </div>
                      <div className="p-2 rounded bg-zinc-950 text-zinc-300">
                        <div className="text-zinc-500">Cold Launch</div>
                        <div className="font-bold text-zinc-100">&lt; 0.8s</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-blue-300 text-[11px]">
                    <div className="flex items-center gap-2">
                      <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                      <span>Play Store Production</span>
                    </div>
                    <span className="font-semibold text-zinc-100">Live</span>
                  </div>
                </div>
              </>
            )}

            {/* Mobile Bottom Home Indicator */}
            <div className="pt-1 flex items-center justify-around text-zinc-400">
              <div className="w-8 h-1 bg-zinc-600 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <span className="truncate">https://{project.id}.dev/app</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <Globe className="w-3.5 h-3.5" />
          </div>
        </div>

        {activeImage ? (
          <div className="relative w-full aspect-video">
            <Image src={activeImage} alt={project.title} fill className="object-cover" />
          </div>
        ) : (
          /* Mock Browser App Dashboard UI Content */
          <div className="p-4 sm:p-5 bg-[#0d0d11] space-y-4 text-xs font-mono text-zinc-300 min-h-[260px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-zinc-200">System Dashboard</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 flex items-center gap-1 text-[11px]">
                  <Play className="w-3 h-3 text-emerald-400" /> Run Pipeline
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 my-2">
              <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span>Theatres Scraped</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-zinc-100 font-semibold">496 Total</div>
              </div>

              <div className="p-3 rounded-md bg-zinc-900/90 border border-blue-500/30 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span>City Index</span>
                  <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
                </div>
                <div className="text-zinc-100 font-semibold">83 Cities</div>
              </div>

              <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span>Scrape Availability</span>
                  <Zap className="w-3 h-3 text-amber-400" />
                </div>
                <div className="text-zinc-100 font-semibold">99.9% Uptime</div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-[11px]">
              <div className="text-zinc-400 flex items-center gap-2">
                <span className="text-blue-400 font-bold">[DATA STREAM]</span>
                <span>All 3 cinema chain crawlers healthy.</span>
              </div>
              <span className="text-emerald-400 font-semibold">Status: 200 OK</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback / Systems Terminal Mockup
  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col font-mono text-xs">
      <div className="bg-zinc-900 border-b border-zinc-800 px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
        </div>
        <div className="text-zinc-400 text-[11px] font-semibold flex items-center gap-1.5">
          <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
          {project.id}-agent --status
        </div>
        <span className="text-[10px] text-zinc-500">Python / LLM</span>
      </div>

      <div className="p-4 bg-[#0a0a0d] text-zinc-300 space-y-2 min-h-[250px] font-mono leading-relaxed">
        <div className="text-zinc-500">$ agentic-cli status --active</div>
        <div className="text-emerald-400">✓ Multimodal LLM Agent Engine online. Listening on Webhooks.</div>
        <div className="text-zinc-400">
          [INFO] WhatsApp Business API connected. Ledger OCR module ready.
        </div>
        <div className="py-2 grid grid-cols-3 gap-2 text-[11px]">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">Amartha x GDG</div>
            <div className="font-bold text-zinc-100 text-sm">Top 5 Team</div>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">RedAI Tri</div>
            <div className="font-bold text-emerald-400 text-sm">Top 15</div>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-500 text-[10px]">Avg Latency</div>
            <div className="font-bold text-blue-400 text-sm">&lt; 1.5s</div>
          </div>
        </div>
        <div className="text-zinc-400 flex items-center gap-2 pt-1">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Agentic routing active. Ledger receipt image OCR ready.</span>
        </div>
      </div>
    </div>
  );
}
