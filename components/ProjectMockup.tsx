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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectMockupProps {
  project: Project;
  customImageSrc?: string;
}

export default function ProjectMockup({
  project,
  customImageSrc,
}: ProjectMockupProps) {
  const images = useMemo(
    () =>
      project.images ||
      (project.image ? [project.image] : undefined) ||
      (customImageSrc ? [customImageSrc] : undefined),
    [project.images, project.image, customImageSrc]
  );

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images, isPaused]);

  const handleNext = () => {
    if (!images) return;
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (!images) return;
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  // Frameless Slideable Carousel (Request #1: For Zenius or direct carousel projects)
  if (project.mockType === "carousel" && images && images.length > 0) {
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black shadow-xl aspect-video sm:aspect-[16/10] group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIdx]}
              alt={`${project.title} Screenshot ${currentIdx + 1}`}
              fill
              className="object-contain bg-black"
              priority={currentIdx === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Overlay Header Pill */}
        <div className="absolute top-3 left-3 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-2 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Slide {currentIdx + 1} of {images.length}</span>
        </div>

        {/* Left/Right Slide Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all shadow-md"
              aria-label="Previous Screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all shadow-md"
              aria-label="Next Screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Slide Indicators */}
            <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-1.5 px-4">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIdx(dotIdx)}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIdx === currentIdx
                      ? "bg-emerald-400 w-5"
                      : "bg-white/40 hover:bg-white/80 w-1.5"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Smartphone Mockup Frame
  if (project.mockType === "mobile") {
    return (
      <div className="py-2 flex justify-center">
        <div className="w-full max-w-[280px] sm:max-w-[310px] rounded-[36px] p-3 bg-zinc-900 border-2 border-zinc-700/80 shadow-2xl flex flex-col font-sans">
          <div
            className="w-full rounded-[26px] bg-[#0c0c10] border border-zinc-800 p-3 space-y-3 flex flex-col justify-between overflow-hidden relative min-h-[350px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="z-20 bg-[#0c0c10]/90 backdrop-blur-sm pb-1">
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

            {images && images.length > 0 ? (
              <div className="relative w-full h-[290px] rounded-lg overflow-hidden border border-zinc-800/60 bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentIdx]}
                      alt={`${project.title} Screenshot ${currentIdx + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-xs transition-colors"
                      aria-label="Previous Screenshot"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-xs transition-colors"
                      aria-label="Next Screenshot"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-2 left-0 right-0 z-30 flex items-center justify-center gap-1.5">
                      {images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setCurrentIdx(dotIdx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            dotIdx === currentIdx
                              ? "bg-emerald-400 w-4"
                              : "bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
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

            <div className="pt-1 flex items-center justify-around text-zinc-400">
              <div className="w-8 h-1 bg-zinc-600 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Web Browser Mockup
  if (project.mockType === "browser") {
    return (
      <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl flex flex-col font-sans">
        <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-3.5 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block" />
          </div>
          <div className="flex-1 max-w-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-md px-3 py-1 flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span className="truncate">https://{project.id}.dev/app</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-xs">
            <Globe className="w-3.5 h-3.5" />
          </div>
        </div>

        {images && images.length > 0 ? (
          <div className="relative w-full aspect-video">
            <Image src={images[0]} alt={project.title} fill className="object-cover" />
          </div>
        ) : (
          <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-[#0d0d11] space-y-4 text-xs font-mono text-zinc-700 dark:text-zinc-300 min-h-[260px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">System Dashboard</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 flex items-center gap-1 text-[11px]">
                  <Play className="w-3 h-3 text-emerald-500" /> Run Pipeline
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 my-2">
              <div className="p-3 rounded-md bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-[11px]">
                  <span>Status</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 font-semibold">Active</div>
              </div>

              <div className="p-3 rounded-md bg-white dark:bg-zinc-900/90 border border-blue-500/30 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-[11px]">
                  <span>Execution</span>
                  <Activity className="w-3 h-3 text-blue-500 animate-pulse" />
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 font-semibold">Native Node</div>
              </div>

              <div className="p-3 rounded-md bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 text-[11px]">
                  <span>Availability</span>
                  <Zap className="w-3 h-3 text-amber-500" />
                </div>
                <div className="text-zinc-900 dark:text-zinc-100 font-semibold">99.9% Uptime</div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px]">
              <div className="text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">[SYSTEM LOG]</span>
                <span>Services operational.</span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Status: 200 OK</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback Systems Terminal Mockup
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
