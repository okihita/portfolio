"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  NodeTypes,
  Edge,
  Position,
  BackgroundVariant,
  useNodesState,
  useEdgesState
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ErlanggaPipelineNodeComponent, { ErlanggaPipelineNodeObjectType } from "./ErlanggaPipelineNode";

interface ErlanggaDataPipelineFlowProps {
  lang: "id" | "en";
}

const nodeTypes: NodeTypes = {
  pipelineNode: ErlanggaPipelineNodeComponent
};

export default function ErlanggaDataPipelineFlow({ lang }: ErlanggaDataPipelineFlowProps) {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Dynamic Theme Mode Observer (Light vs Dark)
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const initialNodes: ErlanggaPipelineNodeObjectType[] = useMemo(() => {
    return [
      // --- LAYER 1: SUBSIDIARY OPERATING DATA SOURCES (y: 50) ---
      {
        id: "GAP_MES",
        type: "pipelineNode",
        position: { x: 30, y: 50 },
        data: {
          layer: 1,
          iconType: "printer",
          layerTag: { id: "Sumber Data Pabrik", en: "Factory Data Source" },
          entity: "PT GAP Print (Ciracas)",
          label: {
            id: "GAP Print MES & Telemetri IoT",
            en: "GAP Print MES & IoT Telemetry"
          },
          metric: "+15% OEE Press",
          badgeColor: "amber",
          handles: {
            sources: [{ id: "gap-out", position: Position.Bottom }]
          }
        }
      },
      {
        id: "WMS_NODE",
        type: "pipelineNode",
        position: { x: 340, y: 50 },
        data: {
          layer: 1,
          iconType: "truck",
          layerTag: { id: "Rantai Pasok Logistik", en: "Logistics Supply Chain" },
          entity: "Eureka Logistics (40+ Cabang)",
          label: {
            id: "WMS & POS 40+ Gudang Cabang",
            en: "Branch WMS & POS Edge Nodes"
          },
          metric: "99.9% WMS Uptime",
          badgeColor: "amber",
          handles: {
            sources: [{ id: "wms-out", position: Position.Bottom }]
          }
        }
      },
      {
        id: "ED_CLOUD",
        type: "pipelineNode",
        position: { x: 650, y: 50 },
        data: {
          layer: 1,
          iconType: "cloud",
          layerTag: { id: "Platform EdTech Cloud", en: "Cloud EdTech SaaS" },
          entity: "Erlangga Digital",
          label: {
            id: "Telemetri Cloud SaaS & Log CBT",
            en: "Cloud SaaS Telemetry & CBT Logs"
          },
          metric: "100k+ Concurrency",
          badgeColor: "blue",
          handles: {
            sources: [{ id: "ed-out", position: Position.Bottom }]
          }
        }
      },
      {
        id: "ERL_LMS",
        type: "pipelineNode",
        position: { x: 960, y: 50 },
        data: {
          layer: 1,
          iconType: "grad",
          layerTag: { id: "Pengembangan Guru", en: "Teacher Development" },
          entity: "Erlass Institute",
          label: {
            id: "LMS Pelatihan & Lead Workshop",
            en: "LMS Workshop Leads & QR Hashes"
          },
          metric: "10x LMS Scale",
          badgeColor: "amber",
          handles: {
            sources: [{ id: "erlass-out", position: Position.Bottom }]
          }
        }
      },

      // --- LAYER 2: CENTRAL ENTERPRISE CORE SYSTEMS (y: 320) ---
      {
        id: "ERP",
        type: "pipelineNode",
        position: { x: 180, y: 320 },
        data: {
          layer: 2,
          iconType: "db",
          layerTag: { id: "Inti Keuangan & Stok", en: "Finance & Inventory Core" },
          entity: "Microsoft Dynamics ERP",
          label: {
            id: "Buku Besar & Master Persediaan",
            en: "General Ledger & Inventory Master"
          },
          metric: "-15% Overprint",
          badgeColor: "blue",
          handles: {
            targets: [
              { id: "erp-in-left", position: Position.Top, style: { left: "30%", background: "#3b82f6" } },
              { id: "erp-in-right", position: Position.Top, style: { left: "70%", background: "#f59e0b" } }
            ],
            sources: [{ id: "erp-out", position: Position.Bottom }]
          }
        }
      },
      {
        id: "CRM",
        type: "pipelineNode",
        position: { x: 500, y: 320 },
        data: {
          layer: 2,
          iconType: "crm",
          layerTag: { id: "Pipa Penjualan Sekolah", en: "School Sales Pipeline" },
          entity: "Qontak CRM Enterprise",
          label: {
            id: "Manajemen Akun Sekolah & Leads",
            en: "School Accounts & Lead Conversion"
          },
          metric: "+25% Lead Upsell",
          badgeColor: "blue",
          handles: {
            targets: [
              { id: "crm-in-left", position: Position.Top, style: { left: "30%", background: "#3b82f6" } },
              { id: "crm-in-right", position: Position.Top, style: { left: "70%", background: "#f59e0b" } }
            ],
            sources: [{ id: "crm-out", position: Position.Bottom }]
          }
        }
      },
      {
        id: "HRMS",
        type: "pipelineNode",
        position: { x: 820, y: 320 },
        data: {
          layer: 2,
          iconType: "hrms",
          layerTag: { id: "SDM & Penggajian", en: "HR & Payroll Ops" },
          entity: "Darwinbox HRMS",
          label: {
            id: "Penggajian Terpadu & Staf Cabang",
            en: "Unified Payroll & Branch Ops"
          },
          metric: "40+ Branches HR",
          badgeColor: "blue",
          handles: {
            sources: [{ id: "hrms-out", position: Position.Bottom }]
          }
        }
      },

      // --- LAYER 3: UNIFIED MIDDLEWARE & API GATEWAY (y: 590) ---
      {
        id: "GW",
        type: "pipelineNode",
        position: { x: 500, y: 590 },
        data: {
          layer: 3,
          iconType: "gateway",
          layerTag: { id: "Middleware Enterprise", en: "Enterprise Middleware" },
          entity: "Unified API Gateway",
          label: {
            id: "Broker Data & Event Stream gRPC",
            en: "Unified API Gateway & Event Broker"
          },
          metric: "gRPC & REST Router",
          badgeColor: "indigo",
          handles: {
            targets: [
              { id: "gw-in-left", position: Position.Top, style: { left: "20%", background: "#3b82f6" } },
              { id: "gw-in-center", position: Position.Top, style: { left: "50%", background: "#6366f1" } },
              { id: "gw-in-right", position: Position.Top, style: { left: "80%", background: "#3b82f6" } }
            ],
            sources: [{ id: "gw-out", position: Position.Bottom }]
          }
        }
      },

      // --- LAYER 4: EXECUTIVE BI SCORECARD (y: 840) ---
      {
        id: "DASH",
        type: "pipelineNode",
        position: { x: 500, y: 840 },
        data: {
          layer: 4,
          iconType: "powerbi",
          layerTag: { id: "Single Source of Truth", en: "Single Source of Truth" },
          entity: "PowerBI Executive Scorecard",
          label: {
            id: "Dashboard Eksekutif Direksi Erlangga",
            en: "PowerBI Executive Board Dashboard"
          },
          metric: "Real-Time C-Suite BI",
          badgeColor: "emerald",
          handles: {
            targets: [{ id: "dash-in", position: Position.Top, style: { background: "#10b981", width: 12, height: 12 } }]
          }
        }
      }
    ];
  }, [lang]);

  // Edges with Dynamic Light / Dark Mode Color Palette
  const initialEdges: Edge[] = useMemo(() => {
    const bgFill = isDark ? "#0f172a" : "#ffffff";
    const textFill = isDark ? "#93c5fd" : "#1e40af";
    const amberTextFill = isDark ? "#fcd34d" : "#92400e";
    const emeraldTextFill = isDark ? "#6ee7b7" : "#065f46";

    return [
      // 1. GAP Print ➔ ERP (Terracotta Ochre / MES Press IoT)
      {
        id: "edge-gap-erp",
        source: "GAP_MES",
        sourceHandle: "gap-out",
        target: "ERP",
        targetHandle: "erp-in-left",
        animated: true,
        label: lang === "id" ? "Telemetri MES & IoT Cetak" : "MES IoT Press Telemetry",
        style: { stroke: "#f59e0b", strokeWidth: 2.5, strokeDasharray: "5 5" },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 2. WMS Branch ➔ ERP (Terracotta Ochre / CDC Batch Sync)
      {
        id: "edge-wms-erp",
        source: "WMS_NODE",
        sourceHandle: "wms-out",
        target: "ERP",
        targetHandle: "erp-in-right",
        animated: true,
        label: lang === "id" ? "Sync CDC Stok Gudang Cabang" : "WMS Branch CDC Stock Sync",
        style: { stroke: "#f59e0b", strokeWidth: 2.5, strokeDasharray: "5 5" },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 3. Erlangga Digital ➔ CRM (Electric Cobalt Blue / Cloud SaaS Egress)
      {
        id: "edge-ed-crm",
        source: "ED_CLOUD",
        sourceHandle: "ed-out",
        target: "CRM",
        targetHandle: "crm-in-left",
        animated: true,
        label: lang === "id" ? "Log User E-Library & CBT" : "Cloud SaaS Analytics Egress",
        style: { stroke: "#3b82f6", strokeWidth: 2.5 },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 4. Erlass LMS ➔ CRM (Terracotta Ochre / Teacher Leads)
      {
        id: "edge-erlass-crm",
        source: "ERL_LMS",
        sourceHandle: "erlass-out",
        target: "CRM",
        targetHandle: "crm-in-right",
        animated: true,
        label: lang === "id" ? "Lead Pelatihan Guru & LMS" : "Teacher Workshop Leads",
        style: { stroke: "#f59e0b", strokeWidth: 2.5, strokeDasharray: "5 5" },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 5. ERP ➔ Gateway (Electric Cobalt Blue / Financial Stream)
      {
        id: "edge-erp-gw",
        source: "ERP",
        sourceHandle: "erp-out",
        target: "GW",
        targetHandle: "gw-in-left",
        animated: true,
        label: lang === "id" ? "Payload Keuangan & Ledger gRPC" : "Financial Ledger gRPC Payload",
        style: { stroke: "#3b82f6", strokeWidth: 2.5 },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 6. CRM ➔ Gateway (Electric Cobalt Blue / Sales Pipeline)
      {
        id: "edge-crm-gw",
        source: "CRM",
        sourceHandle: "crm-out",
        target: "GW",
        targetHandle: "gw-in-center",
        animated: true,
        label: lang === "id" ? "Event Penjualan & Pipa CRM" : "CRM Sales Pipeline Events",
        style: { stroke: "#6366f1", strokeWidth: 2.5 },
        labelStyle: { fill: isDark ? "#a5b4fc" : "#4338ca", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#6366f1", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 7. HRMS ➔ Gateway (Electric Cobalt Blue / Payroll & Ops)
      {
        id: "edge-hrms-gw",
        source: "HRMS",
        sourceHandle: "hrms-out",
        target: "GW",
        targetHandle: "gw-in-right",
        animated: true,
        label: lang === "id" ? "Feed Penggajian & Staf REST" : "HR Payroll REST Feed",
        style: { stroke: "#3b82f6", strokeWidth: 2.5 },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 8. Gateway ➔ PowerBI (Executive Emerald / Single Source Payload)
      {
        id: "edge-gw-dash",
        source: "GW",
        sourceHandle: "gw-out",
        target: "DASH",
        targetHandle: "dash-in",
        animated: true,
        label: lang === "id" ? "Payload Single Source of Truth" : "Single Source of Truth BI Stream",
        style: { stroke: "#10b981", strokeWidth: 3.5 },
        labelStyle: { fill: emeraldTextFill, fontWeight: 800, fontSize: 11 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.98, stroke: "#10b981", strokeWidth: 2, rx: 8, ry: 8 },
        labelBgPadding: [10, 5]
      }
    ];
  }, [lang, isDark]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Sync state when initialNodes or initialEdges change (lang / theme)
  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes, setNodes]);

  useEffect(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  return (
    <div
      className={`w-full h-[900px] sm:h-[1100px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 transition-colors duration-300 overflow-hidden shadow-2xl relative ${
        isDark ? "bg-slate-950" : "bg-[#f8f6f1]"
      }`}
    >
      {/* Top Legend Bar */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-zinc-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider font-mono">
          {lang === "id" ? "Pipeline Data Enterprise Real-Time" : "Real-Time Enterprise Data Pipeline"}
        </span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={true}
        panOnDrag={true}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.5}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color={isDark ? "#334155" : "#cbd5e1"}
        />
        <Controls
          showInteractive={false}
          className="!bg-white/90 dark:!bg-slate-900/90 !border-zinc-200 dark:!border-slate-800 !text-zinc-800 dark:!text-zinc-200 !rounded-xl overflow-hidden shadow-lg"
        />
      </ReactFlow>
    </div>
  );
}
