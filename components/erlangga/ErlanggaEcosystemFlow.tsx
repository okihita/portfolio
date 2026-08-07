"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  NodeTypes,
  Edge,
  Position,
  BackgroundVariant
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ErlanggaGroupNodeComponent, { ErlanggaGroupNodeObjectType } from "./ErlanggaGroupNode";

interface ErlanggaEcosystemFlowProps {
  lang: "id" | "en";
}

const nodeTypes: NodeTypes = {
  erlanggaNode: ErlanggaGroupNodeComponent
};

export default function ErlanggaEcosystemFlow({ lang }: ErlanggaEcosystemFlowProps) {
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

  const nodes: ErlanggaGroupNodeObjectType[] = useMemo(() => {
    return [
      // 1. HQ - Center Core Node
      {
        id: "HQ",
        type: "erlanggaNode",
        position: { x: 450, y: 260 },
        data: {
          isHQ: true,
          iconType: "hq",
          badge: { id: "Kantor Pusat HQ", en: "Group Headquarters HQ" },
          entity: "Erlangga Group HQ (Ciracas)",
          label: {
            id: "Pusat Komando TI & Data Center Enterprise",
            en: "IT Command Center & Enterprise Data Center"
          },
          tagline: {
            id: "Konsolidasi single source of truth seluruh unit bisnis",
            en: "Consolidates single source of truth across all 5 business pillars"
          },
          kpiImpact: "Single Source of Truth BI",
          badgeColor: "blue",
          handles: {
            targets: [
              { id: "hq-top-in", position: Position.Top, style: { background: "#3b82f6" } },
              { id: "hq-bottom-in", position: Position.Bottom, style: { background: "#3b82f6" } },
              { id: "hq-left-in", position: Position.Left, style: { background: "#3b82f6" } },
              { id: "hq-right-in", position: Position.Right, style: { background: "#3b82f6" } }
            ]
          }
        }
      },

      // 2. PE - PT Penerbit Erlangga (Top Center)
      {
        id: "PE",
        type: "erlanggaNode",
        position: { x: 450, y: 30 },
        data: {
          iconType: "publishing",
          badge: { id: "Induk Penerbitan", en: "Parent Publishing Entity" },
          entity: "PT Penerbit Erlangga",
          label: {
            id: "Penerbitan Buku Pelajaran & 8 Imprint",
            en: "K-12 Textbook Publishing & 8 Imprints"
          },
          tagline: {
            id: "Fondasi hak cipta IP pendidikan terbesar di Indonesia",
            en: "Educational IP & master publishing copyright vault"
          },
          kpiImpact: "-15% Biaya Cetak Berlebih",
          badgeColor: "blue",
          handles: {
            sources: [
              { id: "pe-bottom-out", position: Position.Bottom, style: { left: "30%", background: "#f59e0b" } },
              { id: "pe-right-out", position: Position.Right, style: { background: "#3b82f6" } }
            ]
          }
        }
      },

      // 3. GAP - PT Gelora Aksara Pratama (Bottom Left)
      {
        id: "GAP",
        type: "erlanggaNode",
        position: { x: 50, y: 480 },
        data: {
          iconType: "gap",
          badge: { id: "Manufaktur Cetak", en: "Industrial Manufacturing" },
          entity: "PT Gelora Aksara Pratama (GAP)",
          label: {
            id: "Pabrik Percetakan Offset Industrial",
            en: "Mass Industrial Offset Press Plant"
          },
          tagline: {
            id: "Jaminan kapasitas cetak jutaan buku pelajaran per tahun",
            en: "High-speed captive press & B2B commercial packaging"
          },
          kpiImpact: "+15% OEE Mesin Cetak",
          badgeColor: "amber",
          handles: {
            targets: [
              { id: "gap-top-in", position: Position.Top, style: { background: "#f59e0b" } }
            ],
            sources: [
              { id: "gap-right-out", position: Position.Right, style: { background: "#f59e0b" } }
            ]
          }
        }
      },

      // 4. EBH - Eureka Book House & Logistics (Bottom Right)
      {
        id: "EBH",
        type: "erlanggaNode",
        position: { x: 850, y: 480 },
        data: {
          iconType: "ebh",
          badge: { id: "Rantai Pasok 3PL", en: "Supply Chain & 3PL" },
          entity: "Eureka Book House & Logistics",
          label: {
            id: "Retail, SIPLah BOS & Logistik 40+ Cabang",
            en: "Retail, SIPLah B2B & 40+ Branch 3PL"
          },
          tagline: {
            id: "Pengadaan sekolah BOS & fulfillment logistik nasional",
            en: "Nationwide school procurement & warehouse fulfillment"
          },
          kpiImpact: "99.9% Uptime Gudang Cabang",
          badgeColor: "amber",
          handles: {
            targets: [
              { id: "ebh-left-in", position: Position.Left, style: { background: "#f59e0b" } }
            ],
            sources: [
              { id: "ebh-top-out", position: Position.Top, style: { background: "#3b82f6" } }
            ]
          }
        }
      },

      // 5. ED - Erlangga Digital (Top Right)
      {
        id: "ED",
        type: "erlanggaNode",
        position: { x: 850, y: 30 },
        data: {
          iconType: "digital",
          badge: { id: "Cloud & EdTech SaaS", en: "Cloud & EdTech SaaS" },
          entity: "Erlangga Digital & EdTech Unit",
          label: {
            id: "Platform SaaS, E-Library & CBT Exam Engine",
            en: "Cloud SaaS, E-Library & CBT Exam Infrastructure"
          },
          tagline: {
            id: "Aplikasi pembelajaran & engine ujian skala 100k+ siswa",
            en: "Cloud e-learning & 100k+ concurrency exam engine"
          },
          kpiImpact: "-45% Biaya Cloud Idle",
          badgeColor: "blue",
          handles: {
            targets: [
              { id: "ed-left-in", position: Position.Left, style: { top: "35%", background: "#3b82f6" } }
            ],
            sources: [
              { id: "ed-left-out", position: Position.Left, style: { top: "75%", background: "#3b82f6" } },
              { id: "ed-bottom-out", position: Position.Bottom, style: { background: "#f59e0b" } }
            ]
          }
        }
      },

      // 6. EI - Erlass Institute (Top Left)
      {
        id: "EI",
        type: "erlanggaNode",
        position: { x: 50, y: 30 },
        data: {
          iconType: "erlass",
          badge: { id: "Pengembangan Profesi", en: "Professional Development" },
          entity: "Erlass Institute (PT Erlass)",
          label: {
            id: "Pelatihan Guru & Konsultasi Kurikulum",
            en: "Teacher Professional Certification Hub"
          },
          tagline: {
            id: "Sertifikasi pendidik & workshop Kurikulum Merdeka",
            en: "Certified teacher training & school accreditation workshops"
          },
          kpiImpact: "10x Kapasitas Peserta LMS",
          badgeColor: "purple",
          handles: {
            targets: [
              { id: "ei-top-in", position: Position.Bottom, style: { background: "#f59e0b" } }
            ]
          }
        }
      }
    ];
  }, [lang]);

  // Edges with Dynamic Light / Dark Mode Color Palette
  const edges: Edge[] = useMemo(() => {
    const bgFill = isDark ? "#0f172a" : "#ffffff";
    const textFill = isDark ? "#93c5fd" : "#1e40af";
    const amberTextFill = isDark ? "#fcd34d" : "#92400e";

    return [
      // 1. PE ➔ GAP (Metadata Master Penerbitan)
      {
        id: "edge-pe-gap",
        source: "PE",
        sourceHandle: "pe-bottom-out",
        target: "GAP",
        targetHandle: "gap-top-in",
        animated: true,
        label: lang === "id" ? "Metadata Master Penerbitan" : "Editorial Master Metadata",
        style: { stroke: "#3b82f6", strokeWidth: 2.5, strokeDasharray: "5 5" },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 2. GAP ➔ EBH (Stok Cetak Buku Fisik)
      {
        id: "edge-gap-ebh",
        source: "GAP",
        sourceHandle: "gap-right-out",
        target: "EBH",
        targetHandle: "ebh-left-in",
        animated: true,
        label: lang === "id" ? "Stok Cetak Buku Fisik" : "Printed Book Stock",
        style: { stroke: "#f59e0b", strokeWidth: 2.5 },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 3. PE ➔ ED (Aset Konten Digital)
      {
        id: "edge-pe-ed",
        source: "PE",
        sourceHandle: "pe-right-out",
        target: "ED",
        targetHandle: "ed-left-in",
        animated: true,
        label: lang === "id" ? "Aset Konten Digital" : "Digital Asset Stream",
        style: { stroke: "#3b82f6", strokeWidth: 2.5, strokeDasharray: "4 4" },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 4. ED ➔ EI (Jaringan Sekolah & LMS Leads)
      {
        id: "edge-ed-ei",
        source: "ED",
        sourceHandle: "ed-bottom-out",
        target: "EI",
        targetHandle: "ei-top-in",
        animated: true,
        label: lang === "id" ? "Jaringan Sekolah & Lead CRM" : "School Leads & LMS Integration",
        style: { stroke: "#f59e0b", strokeWidth: 2.5 },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 5. EBH ➔ HQ (Data Penjualan SIPLah & POS)
      {
        id: "edge-ebh-hq",
        source: "EBH",
        sourceHandle: "ebh-top-out",
        target: "HQ",
        targetHandle: "hq-bottom-in",
        animated: true,
        label: lang === "id" ? "Data Penjualan SIPLah & POS" : "SIPLah B2B & POS Sales Data",
        style: { stroke: "#3b82f6", strokeWidth: 2.5 },
        labelStyle: { fill: textFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#3b82f6", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      },

      // 6. ED ➔ HQ (Telemetri Cloud & User Analytics)
      {
        id: "edge-ed-hq",
        source: "ED",
        sourceHandle: "ed-left-out",
        target: "HQ",
        targetHandle: "hq-right-in",
        animated: true,
        label: lang === "id" ? "Telemetri Cloud & Analitik User" : "Cloud SaaS Telemetry Stream",
        style: { stroke: "#f59e0b", strokeWidth: 2.5, strokeDasharray: "4 4" },
        labelStyle: { fill: amberTextFill, fontWeight: 700, fontSize: 10 },
        labelBgStyle: { fill: bgFill, fillOpacity: 0.95, stroke: "#f59e0b", strokeWidth: 1.5, rx: 6, ry: 6 },
        labelBgPadding: [8, 4]
      }
    ];
  }, [lang, isDark]);

  return (
    <div
      className={`w-full h-[580px] sm:h-[680px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 transition-colors duration-300 overflow-hidden shadow-2xl relative ${
        isDark ? "bg-slate-950" : "bg-[#f8f6f1]"
      }`}
    >
      {/* Top Legend Bar */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-zinc-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider font-mono">
          {lang === "id" ? "Peta Integrasi Sinergi 5 Pillar TI" : "5 Pillars IT Synergy Topology"}
        </span>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
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
