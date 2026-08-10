"use client";

import React, { memo } from "react";
import { Handle, Position, NodeProps, Node } from "@xyflow/react";
import {
  BookOpen,
  Printer,
  Truck,
  Smartphone,
  GraduationCap,
  Building2,
  CheckCircle2
} from "lucide-react";

export interface ErlanggaNodeData {
  label: { id: string; en: string };
  badge: { id: string; en: string };
  entity: string;
  tagline: { id: string; en: string };
  kpiImpact: string;
  isHQ?: boolean;
  iconType: "hq" | "publishing" | "gap" | "ebh" | "digital" | "erlass";
  badgeColor: string;
  handles?: {
    sources?: { id: string; position: Position; style?: React.CSSProperties }[];
    targets?: { id: string; position: Position; style?: React.CSSProperties }[];
  };
  [key: string]: unknown;
}

export type ErlanggaGroupNodeObjectType = Node<ErlanggaNodeData, "erlanggaNode">;

const ICON_MAP = {
  hq: Building2,
  publishing: BookOpen,
  gap: Printer,
  ebh: Truck,
  digital: Smartphone,
  erlass: GraduationCap
};

function ErlanggaGroupNodeComponent({ data }: NodeProps<ErlanggaGroupNodeObjectType>) {
  const { label, badge, entity, tagline, kpiImpact, isHQ, iconType, badgeColor, handles } = data;
  const IconComp = ICON_MAP[iconType] || Building2;

  return (
    <div
      className={`relative w-72 rounded-2xl border p-4 shadow-xl backdrop-blur-md transition-all duration-300 ${
        isHQ
          ? "border-blue-500/80 bg-white/95 dark:bg-slate-950/95 shadow-blue-500/30 ring-2 ring-blue-500/20"
          : "border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/90 hover:border-blue-500/50"
      }`}
    >
      {/* TARGET HANDLES */}
      {handles?.targets ? (
        handles.targets.map((h) => (
          <Handle
            key={h.id}
            id={h.id}
            type="target"
            position={h.position}
            style={h.style || { background: "#3b82f6", width: 10, height: 10, border: "2px solid #0f172a" }}
          />
        ))
      ) : (
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#3b82f6", width: 10, height: 10, border: "2px solid #0f172a" }}
        />
      )}

      {/* NODE HEADER */}
      <div className="flex items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0">
            <IconComp className="w-4 h-4" />
          </div>
          <div>
            <span className="px-2 py-0.5 rounded-full text-sm uppercase font-mono font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {typeof badge === "object" ? badge.en : badge}
            </span>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">{entity}</p>
          </div>
        </div>

        {/* Live Status Pulse */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* NODE BODY */}
      <div className="pt-3 space-y-2">
        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
          {typeof label === "object" ? label.en : label}
        </h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-normal">
          {typeof tagline === "object" ? tagline.en : tagline}
        </p>

        {/* KPI Callout Pill */}
        <div className="p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300 font-mono">
            {kpiImpact}
          </span>
        </div>
      </div>

      {/* SOURCE HANDLES */}
      {handles?.sources ? (
        handles.sources.map((h) => (
          <Handle
            key={h.id}
            id={h.id}
            type="source"
            position={h.position}
            style={h.style || { background: "#f59e0b", width: 10, height: 10, border: "2px solid #0f172a" }}
          />
        ))
      ) : (
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#f59e0b", width: 10, height: 10, border: "2px solid #0f172a" }}
        />
      )}
    </div>
  );
}

export default memo(ErlanggaGroupNodeComponent);
