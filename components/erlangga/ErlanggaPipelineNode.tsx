"use client";

import React, { memo } from "react";
import { Handle, Position, NodeProps, Node } from "@xyflow/react";
import {
  Printer,
  Truck,
  Cloud,
  GraduationCap,
  Database,
  Cpu,
  BarChart3,
  Layers,
  Network,
  CheckCircle2,
  Activity
} from "lucide-react";

export interface ErlanggaPipelineNodeData {
  label: { id: string; en: string } | string;
  layerTag: { id: string; en: string } | string;
  entity: string;
  metric: string;
  layer: 1 | 2 | 3 | 4;
  iconType: "printer" | "truck" | "cloud" | "grad" | "db" | "crm" | "hrms" | "gateway" | "powerbi";
  badgeColor: string;
  lang?: "id" | "en";
  handles?: {
    sources?: { id: string; position: Position; style?: React.CSSProperties }[];
    targets?: { id: string; position: Position; style?: React.CSSProperties }[];
  };
  [key: string]: unknown;
}

export type ErlanggaPipelineNodeObjectType = Node<ErlanggaPipelineNodeData, "pipelineNode">;

const ICON_MAP = {
  printer: Printer,
  truck: Truck,
  cloud: Cloud,
  grad: GraduationCap,
  db: Database,
  crm: Network,
  hrms: Layers,
  gateway: Cpu,
  powerbi: BarChart3
};

function ErlanggaPipelineNodeComponent({ data, selected }: NodeProps<ErlanggaPipelineNodeObjectType>) {
  const { label, layerTag, entity, metric, layer, iconType, lang, handles } = data;
  const IconComp = ICON_MAP[iconType] || Database;
  const displayLang = lang || "en";

  const displayLabel = typeof label === "object" && label !== null ? (label[displayLang] || label.en) : label;
  const displayLayerTag = typeof layerTag === "object" && layerTag !== null ? (layerTag[displayLang] || layerTag.en) : layerTag;

  // Layer-based card styling with 3-color Risograph system
  const layerBorders = {
    1: "border-amber-500/40 hover:border-amber-500/80 bg-zinc-900/95 shadow-amber-500/5",
    2: "border-blue-500/40 hover:border-blue-500/80 bg-zinc-900/95 shadow-blue-500/5",
    3: "border-indigo-500/50 hover:border-indigo-400 bg-slate-900/95 shadow-indigo-500/15",
    4: "border-emerald-500/60 hover:border-emerald-400 bg-slate-950 shadow-emerald-500/20 ring-1 ring-emerald-500/30"
  };

  const layerTagStyles = {
    1: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    2: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    3: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    4: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
  };

  const layerIconColors = {
    1: "text-amber-400",
    2: "text-blue-400",
    3: "text-indigo-400",
    4: "text-emerald-400"
  };

  return (
    <div
      className={`relative w-72 rounded-2xl border p-4 shadow-xl backdrop-blur-md transition-all duration-300 ${
        layerBorders[layer]
      } ${selected ? "ring-2 ring-blue-500 border-blue-400" : ""}`}
    >
      {/* TARGET HANDLES */}
      {handles?.targets ? (
        handles.targets.map((h) => (
          <Handle
            key={h.id}
            id={h.id}
            type="target"
            position={h.position}
            style={{
              background: "#3b82f6",
              width: 10,
              height: 10,
              border: "2px solid #0f172a",
              ...h.style
            }}
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
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-zinc-800/90 text-white border border-zinc-700/60 shadow-xs">
            <IconComp className={`w-4 h-4 ${layerIconColors[layer]}`} />
          </div>
          <div>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-mono border ${layerTagStyles[layer]}`}
            >
              {displayLayerTag}
            </span>
            <p className="text-[11px] font-mono text-zinc-400 mt-0.5">{entity}</p>
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
        <h4 className="text-xs font-bold text-zinc-100 leading-snug">
          {displayLabel}
        </h4>

        {/* Metric Callout Pill */}
        <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/90 flex items-center justify-between gap-2">
          <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider flex items-center gap-1">
            <Activity className={`w-3 h-3 ${layerIconColors[layer]}`} />
            {displayLang === "id" ? "Telemetri" : "Telemetry"}
          </span>
          <span className="text-[11px] font-bold text-emerald-400 font-mono">{metric}</span>
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
            style={{
              background: "#f59e0b",
              width: 10,
              height: 10,
              border: "2px solid #0f172a",
              ...h.style
            }}
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

export default memo(ErlanggaPipelineNodeComponent);
