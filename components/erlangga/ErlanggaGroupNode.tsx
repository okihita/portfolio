"use client";

import React, { memo } from "react";
import { Handle, Position, NodeProps, Node } from "@xyflow/react";
import {
  Building2,
  BookOpen,
  Printer,
  Truck,
  Smartphone,
  GraduationCap,
  Activity,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Globe
} from "lucide-react";

// Mapping string icon names to Lucide Icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  BookOpen,
  Printer,
  Truck,
  Smartphone,
  GraduationCap,
  Activity,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Globe
};

export interface HandleConfig {
  type: "source" | "target";
  position: Position;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

export type ErlanggaNodeData = {
  label: { id: string; en: string };
  subtitle?: { id: string; en: string };
  badge: { id: string; en: string };
  kpi?: { id: string; en: string };
  iconName: string;
  isHq?: boolean;
  lang: "id" | "en";
  handles: HandleConfig[];
  [key: string]: unknown;
};

export type ErlanggaNodeType = Node<ErlanggaNodeData, "erlanggaGroup">;

function ErlanggaGroupNodeComponent({ data, selected }: NodeProps<ErlanggaNodeType>) {
  const { label, subtitle, badge, kpi, iconName, isHq, lang, handles } = data;
  const IconComponent = ICON_MAP[iconName] || Building2;
  const displayLang = lang || "en";

  return (
    <div
      className={`relative min-w-[240px] max-w-[300px] rounded-2xl transition-all duration-200 backdrop-blur-md ${
        isHq
          ? "bg-slate-900/95 dark:bg-slate-950/95 text-white border-2 border-blue-500 shadow-xl shadow-blue-500/20"
          : "bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-100 border border-zinc-200/90 dark:border-zinc-800 shadow-lg hover:shadow-xl"
      } ${selected ? "ring-2 ring-blue-500 border-blue-500" : ""} p-4 space-y-3`}
    >
      {/* Dynamic Handles Rendered from Config */}
      {handles?.map((h) => (
        <Handle
          key={h.id}
          id={h.id}
          type={h.type}
          position={h.position}
          style={h.style}
          className={`!w-3 !h-3 !border-2 ${
            isHq
              ? "!bg-blue-400 !border-slate-950"
              : "!bg-blue-600 !border-white dark:!border-zinc-900"
          } ${h.className || ""}`}
        />
      ))}

      {/* Header Row: Badge & Active Indicator */}
      <div className="flex items-center justify-between gap-2">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isHq
              ? "bg-blue-500/20 text-blue-300 border border-blue-400/40"
              : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
          }`}
        >
          {badge[displayLang]}
        </span>

        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>

      {/* Title Block with Icon */}
      <div className="flex items-start gap-3 pt-0.5">
        <div
          className={`p-2.5 rounded-xl shrink-0 ${
            isHq
              ? "bg-blue-600/30 text-blue-400 border border-blue-400/30"
              : "bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40"
          }`}
        >
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="space-y-0.5">
          <h4 className="text-sm font-bold leading-tight">
            {label[displayLang]}
          </h4>
          {subtitle && (
            <p className="text-[11px] font-normal leading-tight text-zinc-500 dark:text-zinc-400">
              {subtitle[displayLang]}
            </p>
          )}
        </div>
      </div>

      {/* Target KPI Callout Pill */}
      {kpi && (
        <div
          className={`pt-2 border-t text-[11px] font-semibold flex items-center justify-between gap-2 ${
            isHq
              ? "border-slate-800 text-emerald-400"
              : "border-zinc-100 dark:border-zinc-800/80 text-emerald-700 dark:text-emerald-400"
          }`}
        >
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">
            {displayLang === "id" ? "Dampak TI:" : "IT Impact:"}
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 font-bold">
            {kpi[displayLang]}
          </span>
        </div>
      )}
    </div>
  );
}

export const ErlanggaGroupNode = memo(ErlanggaGroupNodeComponent);

