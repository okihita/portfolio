"use client";

import React, { useMemo, useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Position,
  useNodesState,
  useEdgesState,
  Edge,
  BackgroundVariant
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ErlanggaGroupNode, ErlanggaNodeType } from "./ErlanggaGroupNode";

interface ErlanggaEcosystemFlowProps {
  lang: "id" | "en";
}

// Register custom node types map
const nodeTypes = {
  erlanggaGroup: ErlanggaGroupNode
};

export default function ErlanggaEcosystemFlow({ lang }: ErlanggaEcosystemFlowProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- DEFINE NODES DATA & HANDLES ---
  const initialNodes: ErlanggaNodeType[] = useMemo(() => {
    return [
      // 1. CENTRAL HQ DATACENTER NODE
      {
        id: "HQ",
        type: "erlanggaGroup",
        position: { x: 450, y: 250 },
        data: {
          label: {
            id: "Ciracas Datacenter HQ",
            en: "Ciracas Datacenter HQ"
          },
          subtitle: {
            id: "Erlangga Group Central Data Warehouse",
            en: "Erlangga Group Central Data Warehouse"
          },
          badge: {
            id: "Pusat Data Enterprise",
            en: "Enterprise Data Hub"
          },
          kpi: {
            id: "Single Source of Truth",
            en: "Single Source of Truth"
          },
          iconName: "Building2",
          isHq: true,
          lang,
          handles: [
            { type: "target", position: Position.Top, id: "hq-top-in" },
            { type: "target", position: Position.Bottom, id: "hq-bottom-in" },
            { type: "target", position: Position.Left, id: "hq-left-in" },
            { type: "target", position: Position.Right, id: "hq-right-in" }
          ]
        }
      },

      // 2. CORE PUBLISHING NODE (PE)
      {
        id: "PE",
        type: "erlanggaGroup",
        position: { x: 50, y: 50 },
        data: {
          label: {
            id: "PT Penerbit Erlangga",
            en: "PT Penerbit Erlangga"
          },
          subtitle: {
            id: "Penerbitan Utama & 8 Imprint",
            en: "Core Publishing & 8 Imprints"
          },
          badge: {
            id: "IP & Hak Cipta Buku",
            en: "Publishing IP & Rights"
          },
          kpi: {
            id: "100% Audit Skema Basis Data",
            en: "100% DB Schema Audit"
          },
          iconName: "BookOpen",
          isHq: false,
          lang,
          handles: [
            { type: "source", position: Position.Bottom, id: "pe-bottom-out" },
            { type: "source", position: Position.Right, id: "pe-right-out" }
          ]
        }
      },

      // 3. PRINT MANUFACTURING FACTORY NODE (GAP)
      {
        id: "GAP",
        type: "erlanggaGroup",
        position: { x: 50, y: 440 },
        data: {
          label: {
            id: "PT Gelora Aksara Pratama",
            en: "PT Gelora Aksara Pratama"
          },
          subtitle: {
            id: "Pabrik Percetakan Offset Industri",
            en: "Industrial Print Manufacturing"
          },
          badge: {
            id: "Manufaktur & Cetak",
            en: "Print Manufacturing"
          },
          kpi: {
            id: "+15% OEE Mesin · -12% Kertas",
            en: "+15% Machine OEE · -12% Paper Waste"
          },
          iconName: "Printer",
          isHq: false,
          lang,
          handles: [
            { type: "target", position: Position.Top, id: "gap-top-in" },
            { type: "source", position: Position.Right, id: "gap-right-out" }
          ]
        }
      },

      // 4. LOGISTICS & RETAIL NODE (EBH)
      {
        id: "EBH",
        type: "erlanggaGroup",
        position: { x: 450, y: 500 },
        data: {
          label: {
            id: "Eureka Book House & Logistics",
            en: "Eureka Book House & Logistics"
          },
          subtitle: {
            id: "Pengadaan SIPLah & Logistik 40+ Cabang",
            en: "SIPLah Procurement & 40+ Branch Logistics"
          },
          badge: {
            id: "Rantai Pasok & Retail",
            en: "Supply Chain & Retail"
          },
          kpi: {
            id: "99.9% Uptime · -18% Last-Mile",
            en: "99.9% Uptime · -18% Last-Mile"
          },
          iconName: "Truck",
          isHq: false,
          lang,
          handles: [
            { type: "target", position: Position.Left, id: "ebh-left-in" },
            { type: "source", position: Position.Top, id: "ebh-top-out" }
          ]
        }
      },

      // 5. EDTECH & CLOUD SAAS NODE (ED)
      {
        id: "ED",
        type: "erlanggaGroup",
        position: { x: 850, y: 50 },
        data: {
          label: {
            id: "Erlangga Digital & EdTech",
            en: "Erlangga Digital & EdTech"
          },
          subtitle: {
            id: "Platform SaaS, E-Library & CBT Ujian",
            en: "Cloud SaaS, E-Library & CBT Exam Engine"
          },
          badge: {
            id: "Cloud & EdTech SaaS",
            en: "Cloud & EdTech SaaS"
          },
          kpi: {
            id: "-45% Biaya Cloud Idle",
            en: "-45% Cloud Idle Cost"
          },
          iconName: "Smartphone",
          isHq: false,
          lang,
          handles: [
            { type: "target", position: Position.Left, id: "ed-left-in", style: { top: "35%" } },
            { type: "source", position: Position.Left, id: "ed-left-out", style: { top: "75%" } },
            { type: "source", position: Position.Bottom, id: "ed-bottom-out" }
          ]
        }
      },

      // 6. ERLASS INSTITUTE TEACHER TRAINING NODE (EI)
      {
        id: "EI",
        type: "erlanggaGroup",
        position: { x: 850, y: 440 },
        data: {
          label: {
            id: "Erlass Institute (PT Erlass)",
            en: "Erlass Institute (PT Erlass)"
          },
          subtitle: {
            id: "Pelatihan Guru & Sertifikasi Kompetensi",
            en: "Teacher Training & Certification"
          },
          badge: {
            id: "Pengembangan Profesi",
            en: "Professional Development"
          },
          kpi: {
            id: "10x Kapasitas · -90% Biaya Cetak",
            en: "10x Capacity · -90% Print Cost"
          },
          iconName: "GraduationCap",
          isHq: false,
          lang,
          handles: [
            { type: "target", position: Position.Top, id: "ei-top-in" }
          ]
        }
      }
    ];
  }, [lang]);

  // Sync node data language when lang prop changes
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  useEffect(() => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          lang
        }
      }))
    );
  }, [lang, setNodes]);

  // --- DEFINE EDGES WITH ANIMATIONS ---
  const initialEdges: Edge[] = useMemo(() => {
    return [
      // 1. PE ➔ GAP (Editorial Master Metadata)
      {
        id: "edge-pe-gap",
        source: "PE",
        sourceHandle: "pe-bottom-out",
        target: "GAP",
        targetHandle: "gap-top-in",
        animated: true,
        label: lang === "id" ? "Metadata Master Penerbitan" : "Editorial Master Metadata",
        style: { stroke: "#3b82f6", strokeWidth: 2.5, strokeDasharray: "5 5" },
        labelStyle: { fill: "#93c5fd", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 2. GAP ➔ EBH (Printed Book Inventory Stock)
      {
        id: "edge-gap-ebh",
        source: "GAP",
        sourceHandle: "gap-right-out",
        target: "EBH",
        targetHandle: "ebh-left-in",
        animated: true,
        label: lang === "id" ? "Stok Cetak Buku Fisik" : "Printed Book Stock",
        style: { stroke: "#f59e0b", strokeWidth: 2.5 },
        labelStyle: { fill: "#fcd34d", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 3. PE ➔ ED (Digital Content Assets Stream)
      {
        id: "edge-pe-ed",
        source: "PE",
        sourceHandle: "pe-right-out",
        target: "ED",
        targetHandle: "ed-left-in",
        animated: true,
        label: lang === "id" ? "Aset Konten Digital" : "Digital Asset Stream",
        style: { stroke: "#3b82f6", strokeWidth: 2.5, strokeDasharray: "4 4" },
        labelStyle: { fill: "#93c5fd", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 4. ED ➔ EI (School Client Network)
      {
        id: "edge-ed-ei",
        source: "ED",
        sourceHandle: "ed-bottom-out",
        target: "EI",
        targetHandle: "ei-top-in",
        animated: true,
        label: lang === "id" ? "Jaringan Sekolah & Lead CRM" : "School Leads & LMS Integration",
        style: { stroke: "#f59e0b", strokeWidth: 2.5 },
        labelStyle: { fill: "#fcd34d", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 5. EBH ➔ HQ (B2B & Retail Sales Data Stream)
      {
        id: "edge-ebh-hq",
        source: "EBH",
        sourceHandle: "ebh-top-out",
        target: "HQ",
        targetHandle: "hq-bottom-in",
        animated: true,
        label: lang === "id" ? "Data Penjualan SIPLah & POS" : "SIPLah B2B & POS Sales Data",
        style: { stroke: "#3b82f6", strokeWidth: 2.5 },
        labelStyle: { fill: "#93c5fd", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 6. ED ➔ HQ (Cloud User Analytics Telemetry)
      {
        id: "edge-ed-hq",
        source: "ED",
        sourceHandle: "ed-left-out",
        target: "HQ",
        targetHandle: "hq-right-in",
        animated: true,
        label: lang === "id" ? "Telemetri Cloud & Analitik User" : "Cloud SaaS Telemetry Stream",
        style: { stroke: "#f59e0b", strokeWidth: 2.5, strokeDasharray: "4 4" },
        labelStyle: { fill: "#fcd34d", fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: "#0f172a", fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      }
    ];
  }, [lang]);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  if (!mounted) return null;

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[680px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-slate-900 dark:bg-[#070a12] overflow-hidden shadow-2xl relative">
      {/* Legend Top Bar */}
      <div className="absolute top-4 left-4 z-10 bg-slate-900/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-zinc-700/80 dark:border-zinc-800 text-xs flex items-center gap-3 shadow-md">
        <div className="flex items-center gap-1.5 font-bold text-zinc-100">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>{lang === "id" ? "Integrasi Pipa Data Real-Time" : "Real-Time Data Pipeline Flow"}</span>
        </div>
        <span className="text-zinc-600 dark:text-zinc-700">|</span>
        <span className="text-[11px] text-zinc-400">
          {lang === "id" ? "Gunakan mouse untuk zoom & pan" : "Drag to pan · Scroll to zoom"}
        </span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        minZoom={0.4}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1.5} color="#475569" className="opacity-60" />
        <Controls className="!bg-white dark:!bg-zinc-900 !border-zinc-200 dark:!border-zinc-800 !rounded-xl !shadow-lg !text-zinc-800 dark:!text-zinc-200 [&_button]:!border-zinc-200 dark:[&_button]:!border-zinc-800 [&_button:hover]:!bg-zinc-100 dark:[&_button:hover]:!bg-zinc-800" />
      </ReactFlow>
    </div>
  );
}

