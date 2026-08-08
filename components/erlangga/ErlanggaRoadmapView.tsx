"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import { 
  Award, 
  Mail, 
  Layers, 
  Search, 
  Filter,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { 
  COMPREHENSIVE_ROADMAP_CHECKLIST, 
  MonthChecklistData, 
  ChecklistItem 
} from "./roadmapChecklistData";

// --- TYPES ---
type Lang = "id" | "en";
type FrameworkGroupKey = "all" | "togaf" | "dmbok" | "secops" | "kimball_powerbi" | "itil" | "mlops_finops";

// --- FRAMEWORK GROUPS DEFINITION ---
const FRAMEWORK_GROUPS: { key: FrameworkGroupKey; label: { id: string; en: string } }[] = [
  { key: "all", label: { id: "Semua Standard", en: "All Standards" } },
  { key: "togaf", label: { id: "TOGAF ADM (Arsitektur)", en: "TOGAF ADM (Architecture)" } },
  { key: "dmbok", label: { id: "DAMA-DMBOK (Tata Kelola Data)", en: "DAMA-DMBOK (Data Governance)" } },
  { key: "secops", label: { id: "NIST / ISO 27001 (SecOps & WAN)", en: "NIST / ISO 27001 (SecOps & WAN)" } },
  { key: "kimball_powerbi", label: { id: "Kimball & PowerBI (BI & Pipeline)", en: "Kimball & PowerBI (BI & ETL)" } },
  { key: "itil", label: { id: "ITIL v4 (Layanan ITSM & Cabang)", en: "ITIL v4 (ITSM & Branch SLA)" } },
  { key: "mlops_finops", label: { id: "MLOps & FinOps (AI & Cloud)", en: "MLOps & FinOps (AI & Cloud)" } }
];

// --- TRANSLATIONS DICTIONARY ---

const TRANSLATIONS = {
  id: {
    targetBadge: "PT. Penerbit Erlangga — Rencana Eksekusi IT Manager Candidate",
    heroTitle: "Peta Jalan Eksekusi 3 Bulan: TI sebagai Mesin Pertumbuhan",
    heroDesc: "Rencana aksi 30-60-90 hari yang konkret: audit fondasi data & ERP, integrasi pipa data & dasbor eksekutif real-time, penguatan operasional cabang, hingga transformasi AI yang mengubah TI menjadi pendorong profitabilitas.",

    bannerCaption: "Peta Jalan Eksekusi 3 Bulan — Rencana Aksi IT Manager",
    
    checklistHeaderBadge: "Checklist Audit & Eksekusi Standar Emas",
    checklistTitle: "Checklist Audit & Inisiatif Eksekusi Terperinci (108 Point Framework)",
    checklistDesc: "Kumpulan inisiatif teknis komprehensif yang diusulkan berdasarkan framework IT global (TOGAF ADM, DAMA-DMBOK 2.0, NIST CSF 2.0, Kimball DW, ITIL v4, ISO 27001, MLOps, FinOps).",

    searchPlaceholder: "Cari inisiatif audit, skema ERP, DRP, SD-WAN, SLA, atau framework...",
    filterGroupLabel: "Filter Menurut Kelompok Standard:",
    
    expandChecklist: "Tampilkan Checklist Terperinci",
    collapseChecklist: "Sembunyikan Checklist Terperinci",

    kpiLabel: "KPI Target:",
    
    ctaTitle: "Diskusi Rencana Eksekusi 3 Bulan",
    ctaDesc: "Saya siap mempresentasikan detail inisiatif per fase, kebutuhan sumber daya, dan metrik keberhasilan dari rencana eksekusi ini.",

    btnEmail: "Kirim Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "Proposal Strategis TI — PT. Penerbit Erlangga",
    footerBranch: "Branch: erlangga"
  },
  en: {
    targetBadge: "PT. Penerbit Erlangga — IT Manager Candidate Execution Plan",
    heroTitle: "3-Month Execution Roadmap: IT as a Growth Engine",
    heroDesc: "A concrete 30-60-90 day action plan: data & ERP foundation audit, data pipeline & live executive dashboard integration, branch operation strengthening, and AI-led transformation turning IT into a profitability driver.",

    bannerCaption: "3-Month Execution Roadmap — IT Manager Action Plan",

    checklistHeaderBadge: "Gold-Standard Audit & Execution Checklist",
    checklistTitle: "Detailed Audit & Execution Checklist (108-Point Enterprise Framework)",
    checklistDesc: "Comprehensive technical initiatives proposed against global enterprise IT standards (TOGAF ADM, DAMA-DMBOK 2.0, NIST CSF 2.0, Kimball DW, ITIL v4, ISO 27001, MLOps, FinOps).",

    searchPlaceholder: "Search audit initiatives, ERP schemas, DRP, SD-WAN, SLAs, or frameworks...",
    filterGroupLabel: "Filter by Standard Group:",

    expandChecklist: "Expand Detailed Checklist",
    collapseChecklist: "Collapse Detailed Checklist",

    kpiLabel: "Target KPI:",

    ctaTitle: "Let's Discuss the 3-Month Execution Plan",
    ctaDesc: "I'm ready to walk through per-phase initiatives, resource requirements, and success metrics for this execution plan.",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

// --- DETAILED 90-DAY TACTICAL ROADMAP DATA (Aligned with Homepage Truth) ---

const ROADMAP_DATA = {
  id: [
    {
      phase: "01",
      month: "Bulan 1 (Hari 1–30)",
      title: "Audit Data, Pemetaan Infra & Alignment Bisnis",
      narrative: "Konsolidasi data 40+ cabang, pembersihan skema basis data ERP Microsoft Dynamics, pemetaan ketahanan infrastruktur jaringan WAN, serta alignment bersama jajaran Direksi (CFO/COO) dan kepala cabang regional.",
      image: "/images/erlangga/month1_risograph.jpg",
      actions: [
        "Audit skema basis data Dynamics ERP, Qontak CRM, dan Darwinbox HRMS.",
        "Implementasi PowerBI Executive Dashboard Live MVP untuk Single Source of Truth.",
        "Audit lisensi cloud & penghematan biaya GCP/AWS hingga 20% tanpa menurunkan SLA.",
        "Pemetaan ketahanan jaringan WAN 40+ cabang regional & kesiapan DRP.",
        "Wawancara penemuan terstruktur 1-on-1 dengan 40+ kepala cabang & Direksi."
      ],
      whyRationale: "Mengapa 30 Hari?: Tanpa audit fondasi basis data dan keselarasan skema ERP, setiap peluncuran fitur baru di atasnya akan rentan terhadap kegagalan data dan pemborosan biaya.",
      milestones: [
        "Laporan Evaluasi Kesehatan TI Hari ke-30",
        "Cetak Biru Metrik Dasbor Eksekutif",
        "Audit Skema Basis Data Dynamics ERP 100%",
        "Visibilitas Jaringan 40+ Cabang & Cetak Biru DRP",
        "Penghematan Biaya Lisensi Cloud GCP/AWS 20%"
      ]
    },
    {
      phase: "02",
      month: "Bulan 2 (Hari 31–60)",
      title: "Integrasi Pipa Data & Peluncuran Dasbor Eksekutif Real-Time",
      narrative: "Membangun pipa data ETL otomatis dari gudang cabang dan node POS/WMS ke data warehouse terpusat, lalu meluncurkan Dasbor Eksekutif PowerBI real-time untuk visibilitas stok dan pergerakan persediaan.",
      image: "/images/erlangga/month2_risograph.jpg",
      actions: [
        "Membangun pipa data ETL terotomatisasi CDC (Debezium/PubSub) latensi < 5 detik.",
        "Peluncuran Dasbor Eksekutif PowerBI Live (Single Source of Truth) berbasis Composite Model.",
        "Integrasi Qontak CRM & Dynamics ERP untuk visibilitas tim sales sekolah.",
        "Penerapan SD-WAN redundancy 40+ cabang regional untuk mencegah outage fiber optic.",
        "Penyusunan proyeksi anggaran tahunan TI DevOps, SecOps & FinOps."
      ],
      whyRationale: "Mengapa 60 Hari?: Direksi membutuhkan transparansi real-time atas pergerakan stok cabang dan SLA sistem untuk menggeser operasional Erlangga dari reaktif menjadi keputusan berbasis data presisi.",
      milestones: [
        "Dasbor Eksekutif PowerBI Live (Single Source of Truth)",
        "Pipa Data ETL Otomatis Gudang-Ke-Warehouse (Latensi < 5s)",
        "Redundansi Jaringan SD-WAN 40+ Cabang Regional (Zero Outage)",
        "Proyeksi Anggaran TI 1-Tahun (DevOps & SecOps)"
      ]
    },
    {
      phase: "03",
      month: "Bulan 3 (Hari 61–90)",
      title: "Penguatan Operasional Cabang & Persiapan Inovasi Masa Depan",
      narrative: "Menyeragamkan protokol tata kelola TI dan SLA dukungan ITSM di 40+ cabang, menerapkan standarisasi keamanan SecOps ISO 27001, serta memulai pilot otomatisasi AI/AutoML demand forecasting.",
      image: "/images/erlangga/month3_risograph.jpg",
      actions: [
        "Standarisasi alur kerja eskalasi dukungan ITSM ITIL v4 di 40+ cabang regional.",
        "Penerapan Zero Trust Network Access (ZTNA) & EDR Ransomware Defense 100% endpoint.",
        "Pengembangan model AutoML Demand Forecasting untuk memprediksi stok cetak ulang buku.",
        "Integrasi otomatisasi safety stock ERP Dynamics 365 mengurangi pemborosan cetak 35%.",
        "Finalisasi Master Plan Strategis TI 2-Tahun (2026–2027) disahkan Board of Directors."
      ],
      whyRationale: "Mengapa 90 Hari?: Menyeragamkan tata kelola TI cabang menjamin mutu layanan yang konsisten di seluruh Indonesia, sementara uji coba AI memastikan divisi TI Erlangga siap menyongsong inovasi masa depan.",
      milestones: [
        "Master Plan Strategis TI Erlangga Group (2026–2027) Disetujui Board",
        "Laporan Optimasi SLA 40+ Cabang Regional (ITIL v4)",
        "Standarisasi Protokol Jaringan & SecOps Indonesia (ISO 27001)",
        "Pilot Otomatisasi AI/AutoML Internal (35% Overprinting Waste Reduction)"
      ]
    }
  ],
  en: [
    {
      phase: "01",
      month: "Month 1 (Days 1–30)",
      title: "Data Audit, Infra Mapping & Business Alignment",
      narrative: "Data consolidation across 40+ regional hubs, Microsoft Dynamics ERP schema cleanup, WAN network infrastructure resilience mapping, and structured alignment with C-Level Executives (CFO/COO) and branch leads.",
      image: "/images/erlangga/month1_risograph.jpg",
      actions: [
        "Dynamics ERP, Qontak CRM, and Darwinbox HRMS database schema audit.",
        "Live PowerBI Executive Dashboard MVP deployment for Single Source of Truth.",
        "Cloud licensing audit cutting GCP/AWS expenses by 20% while maintaining SLA.",
        "Vulnerability mapping across 40+ regional branch WAN network nodes & DRP.",
        "Structured 1-on-1 discovery interviews with 40+ regional branch leads & C-suite."
      ],
      whyRationale: "Why 30 Days?: Without auditing the database foundation and ERP schema stability, any feature launched on top remains vulnerable to data corruption and cost inflation.",
      milestones: [
        "Day 30 IT Health Assessment Report",
        "Executive Dashboard Metrics Blueprint",
        "100% Dynamics ERP Database Schema Audit",
        "40+ Branch Network Visibility & DRP Blueprint",
        "20% GCP/AWS Cloud License Cost Savings"
      ]
    },
    {
      phase: "02",
      month: "Month 2 (Days 31–60)",
      title: "Data Pipeline Integration & Real-Time Executive Dashboard Launch",
      narrative: "Building automated CDC data ETL pipelines from branch warehouse and POS/WMS nodes to central data warehouse, launching live PowerBI Executive Dashboards for real-time stock velocity & SLA visibility.",
      image: "/images/erlangga/month2_risograph.jpg",
      actions: [
        "Build automated CDC (Debezium/PubSub) ETL pipelines with latency < 5 seconds.",
        "Deploy Live PowerBI Executive Dashboard (Single Source of Truth) with Composite Models.",
        "Qontak CRM & Dynamics ERP integration for school sales rep visibility.",
        "SD-WAN redundancy across 40+ regional branches preventing fiber cut outages.",
        "Establish annual DevOps, SecOps & FinOps IT budget projections."
      ],
      whyRationale: "Why 60 Days?: The executive board requires real-time transparency into branch inventory movements and system SLAs to shift Erlangga operations from reactive to data-driven decision making.",
      milestones: [
        "Live PowerBI Executive Dashboard (Single Source of Truth)",
        "Automated Warehouse-to-DW ETL Pipeline (Latency < 5s)",
        "40+ Regional Branch SD-WAN Redundancy (Zero Outage)",
        "1-Year IT Budget Projection (DevOps & SecOps)"
      ]
    },
    {
      phase: "03",
      month: "Month 3 (Days 61–90)",
      title: "Branch Operations Strengthening & Future Innovation Prep",
      narrative: "Standardizing IT governance & ITSM support SLAs across 40+ branches, enforcing ISO 27001 SecOps compliance, and launching internal AutoML AI demand forecasting pilots.",
      image: "/images/erlangga/month3_risograph.jpg",
      actions: [
        "Standardize ITIL v4 ITSM escalation workflows across 40+ regional branches.",
        "Enforce Zero Trust Network Access (ZTNA) & EDR Ransomware Defense across 100% endpoints.",
        "Develop AutoML Demand Forecasting model to predict book reprint volumes.",
        "Integrate Microsoft Dynamics ERP safety stock automation reducing print waste by 35%.",
        "Finalize 2-Year IT Strategic Master Plan (2026–2027) signed off by Board of Directors."
      ],
      whyRationale: "Why 90 Days?: Standardizing branch IT governance guarantees consistent service quality nationwide, while AI pilots ensure Erlangga IT is prepared for future digital learning innovation.",
      milestones: [
        "Erlangga Group 2026–2027 IT Strategic Master Plan Approved by Board",
        "40+ Regional Branch SLA Optimization Report (ITIL v4)",
        "Indonesia Network Protocol & SecOps Standardization (ISO 27001)",
        "Internal AI/AutoML Automation Pilot (35% Overprinting Waste Reduction)"
      ]
    }
  ]
};

export default function ErlanggaRoadmapView() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<FrameworkGroupKey>("all");
  
  // State for collapsible months (Default: all expanded)
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true
  });

  // Persistent Checked Items State (localStorage)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("erlangga_roadmap_checked_v1");
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleItemCheck = (itemId: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      try {
        localStorage.setItem("erlangga_roadmap_checked_v1", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const resetAllProgress = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem("erlangga_roadmap_checked_v1");
    } catch {}
  };

  const checkAllPhase1 = () => {
    const month1Data = COMPREHENSIVE_ROADMAP_CHECKLIST[1];
    if (!month1Data) return;
    const newChecked = { ...checkedItems };
    month1Data.columns.forEach((col) => {
      col.items.forEach((item) => {
        newChecked[item.id] = true;
      });
    });
    setCheckedItems(newChecked);
    try {
      localStorage.setItem("erlangga_roadmap_checked_v1", JSON.stringify(newChecked));
    } catch {}
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  const toggleMonthExpand = (monthNum: number) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [monthNum]: !prev[monthNum]
    }));
  };

  const t = TRANSLATIONS[lang];
  const detailedRoadmap = ROADMAP_DATA[lang];

  // Calculate Progress Metrics
  const totalItemsCount = 108;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalItemsCount) * 100));

  // Helper function to check if an item matches selected framework group
  const isItemInFrameworkGroup = (item: ChecklistItem, groupKey: FrameworkGroupKey): boolean => {
    if (groupKey === "all") return true;

    const fw = item.framework.toUpperCase();
    const title = item.title.en.toUpperCase() + " " + item.title.id.toUpperCase();

    switch (groupKey) {
      case "togaf":
        return fw.includes("TOGAF") || title.includes("TOGAF");
      case "dmbok":
        return fw.includes("DAMA-DMBOK") || fw.includes("DMBOK") || fw.includes("D365") || title.includes("DYNAMICS");
      case "secops":
        return fw.includes("NIST") || fw.includes("ISO 27001") || fw.includes("SECOPS") || fw.includes("UU PDP") || title.includes("SD-WAN") || title.includes("EDR") || title.includes("ZTNA");
      case "kimball_powerbi":
        return fw.includes("KIMBALL") || fw.includes("POWERBI") || fw.includes("STREAMING") || fw.includes("DBT") || title.includes("POWERBI") || title.includes("ETL") || title.includes("CDC");
      case "itil":
        return fw.includes("ITIL") || title.includes("ITSM") || title.includes("SLA") || title.includes("HELP DESK");
      case "mlops_finops":
        return fw.includes("MLOPS") || fw.includes("FINOPS") || fw.includes("TBM") || fw.includes("TERRAFORM") || title.includes("AUTOML") || title.includes("GENAI");
      default:
        return true;
    }
  };

  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <Header navItems={ERLANGGA_NAV_ITEMS} lang={lang} onToggleLang={toggleLang} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-28">
        {/* --- HERO SECTION --- */}
        <section className="space-y-8 pb-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{t.targetBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {t.heroDesc}
            </p>
          </div>

          {/* Master 16:9 Roadmap Banner */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
            <div className="h-9 bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
              <span className="text-xs text-zinc-400 ml-2">{t.bannerCaption}</span>
            </div>
            <div className="relative aspect-[16/9] w-full bg-[#f8f6f0] dark:bg-[#090d14] overflow-hidden">
              <img
                src="/images/erlangga/roadmap_hero_risograph.jpg"
                alt="Erlangga 3-Month IT Execution Roadmap Blueprint"
                className="w-full h-full object-contain object-center transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* === DETAILED 90-DAY TACTICAL ROADMAP SECTION === */}
        <section className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold block">
              {lang === "id" ? "Struktur Eksekusi Taktis" : "Tactical Execution Structure"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {lang === "id" ? "Fase Eksekusi Taktis & Rencana Aksi IT Manager" : "Tactical Execution Phases & IT Manager Action Plan"}
            </h2>
          </div>

          {/* SEARCH & FRAMEWORK GROUP FILTER TOOLBAR */}
          <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm space-y-5">
            {/* REAL-TIME EXECUTION AUDIT PROGRESS BAR (Dual Light/Dark Theme) */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-100/90 dark:bg-slate-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-slate-800 shadow-md space-y-3 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-600 dark:text-blue-300">
                      {lang === "id" ? "Kemajuan Audit Eksekusi Real-Time" : "Real-Time Execution Audit Progress"}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-0.5 font-mono">
                      {completedCount} / {totalItemsCount} {lang === "id" ? "Inisiatif Selesai" : "Initiatives Completed"} ({progressPercent}%)
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={checkAllPhase1}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-600/30 hover:bg-blue-100 dark:hover:bg-blue-600/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 text-xs font-semibold cursor-pointer transition-all"
                  >
                    {lang === "id" ? "Centang Bulan 1" : "Check Month 1"}
                  </button>
                  <button
                    onClick={resetAllProgress}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold cursor-pointer transition-all shadow-2xs"
                  >
                    {lang === "id" ? "Reset" : "Reset"}
                  </button>
                </div>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full bg-zinc-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Framework Group Filter Pills */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {t.filterGroupLabel}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {FRAMEWORK_GROUPS.map((grp) => {
                  const isActive = selectedGroup === grp.key;
                  return (
                    <button
                      key={grp.key}
                      onClick={() => setSelectedGroup(grp.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {grp.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MONTHLY CARDS WITH COLLAPSIBLE 3-COLUMN COMPREHENSIVE CHECKLIST */}
          <div className="space-y-16">
            {detailedRoadmap.map((ch, idx) => {
              const monthNum = idx + 1;
              const checklistMonthData = COMPREHENSIVE_ROADMAP_CHECKLIST.find((m) => m.month === monthNum);
              const isExpanded = expandedMonths[monthNum] !== false; // Default true

              return (
                <div
                  key={ch.phase}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-sm space-y-0"
                >
                  {/* --- CARD HEADER (16:9 ART + EXECUTIVE NARRATIVE) --- */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    {/* Image Container (16:9 Ratio Preserved) */}
                    <div className="lg:col-span-5 relative aspect-[16/9] w-full bg-[#f8f6f0] dark:bg-zinc-950 overflow-hidden">
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Executive Overview */}
                    <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            {lang === "id" ? `Bulan ${parseInt(ch.phase, 10)}` : `Month ${parseInt(ch.phase, 10)}`}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {checklistMonthData?.totalItems || 36} {lang === "id" ? "Inisiatif Terperinci" : "Detailed Initiatives"}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                          {ch.title}
                        </h3>

                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {ch.narrative}
                        </p>

                        {/* Why Rationale Box */}
                        <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                          {ch.whyRationale}
                        </div>
                      </div>

                      {/* Milestones Badge Row */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-bold">
                          <Award className="w-4 h-4 shrink-0 text-emerald-600" />
                          <span>{lang === "id" ? "Capaian Utama Month " + monthNum + ":" : "Key Month " + monthNum + " Milestones:"}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {ch.milestones.map((ms, mIdx) => (
                            <span key={mIdx} className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                              {ms}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- COLLAPSIBLE BAR FOR CHECKLIST --- */}
                  {checklistMonthData && (
                    <div className="bg-zinc-100/70 dark:bg-zinc-950/60 border-b border-zinc-200/80 dark:border-zinc-800/80 px-6 sm:px-10 py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {lang === "id" ? `Checklist Audit & Inisiatif Eksekusi Terperinci (Bulan ${monthNum})` : `Detailed Audit & Execution Checklist (Month ${monthNum})`}
                        </span>
                        <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
                          ({checklistMonthData.totalItems} items)
                        </span>
                      </div>

                      <button
                        onClick={() => toggleMonthExpand(monthNum)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-xs cursor-pointer transition-all"
                      >
                        <span>
                          {isExpanded ? t.collapseChecklist : t.expandChecklist}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* --- COMPREHENSIVE 3-COLUMN CHECKLIST SECTION (COLLAPSIBLE BODY) --- */}
                  {checklistMonthData && isExpanded && (
                    <div className="p-6 sm:p-10 space-y-8 bg-zinc-50/50 dark:bg-zinc-950/30 transition-all">
                      {/* 3-Column Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
                        {checklistMonthData.columns.map((col) => {
                          // Filter items by search query & framework group
                          const filteredItems = col.items.filter((item) => {
                            const matchesSearch =
                              searchQuery === "" ||
                              item.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.description[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.framework.toLowerCase().includes(searchQuery.toLowerCase());

                            const matchesGroup = isItemInFrameworkGroup(item, selectedGroup);

                            return matchesSearch && matchesGroup;
                          });

                          return (
                            <div
                              key={col.id}
                              className="rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-5 space-y-5 shadow-xs flex flex-col justify-between"
                            >
                              {/* Column Header */}
                              <div className="space-y-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                                <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60 inline-block">
                                  {col.framework}
                                </span>
                                <h5 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                                  {col.title[lang]}
                                </h5>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-medium">
                                  {filteredItems.length} {lang === "id" ? "Inisiatif Terdaftar" : "Initiatives Listed"}
                                </span>
                              </div>

                              {/* Checklist Items List */}
                              <div className="space-y-3 divide-y divide-zinc-100 dark:divide-zinc-800/60">
                                {filteredItems.length === 0 ? (
                                  <p className="text-xs text-zinc-400 italic py-4">
                                    {lang === "id" ? "Tidak ada inisiatif yang cocok dengan filter." : "No initiatives match selected filter."}
                                  </p>
                                ) : (
                                  filteredItems.map((item) => {
                                    const isChecked = Boolean(checkedItems[item.id]);

                                    return (
                                      <div
                                        key={item.id}
                                        onClick={() => toggleItemCheck(item.id)}
                                        className={`pt-3 first:pt-0 space-y-2 p-2.5 rounded-xl transition-all cursor-pointer border ${
                                          isChecked
                                            ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300/80 dark:border-emerald-900/60"
                                            : "bg-transparent border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                                        }`}
                                      >
                                        <div className="flex items-start gap-2.5">
                                          <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => {}} // Handled by container onClick
                                            className="mt-1 w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
                                          />
                                          <div className="space-y-1.5 flex-1">
                                            <h6
                                              className={`text-xs sm:text-sm font-bold leading-snug transition-all ${
                                                isChecked
                                                  ? "line-through text-zinc-400 dark:text-zinc-500"
                                                  : "text-zinc-900 dark:text-zinc-100"
                                              }`}
                                            >
                                              {item.title[lang]}
                                            </h6>

                                            <p
                                              className={`text-xs leading-relaxed font-normal transition-all ${
                                                isChecked
                                                  ? "text-zinc-400 dark:text-zinc-500"
                                                  : "text-zinc-600 dark:text-zinc-300"
                                              }`}
                                            >
                                              {item.description[lang]}
                                            </p>

                                            {/* Target KPI Callout Pill */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                                              <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                                                {item.framework}
                                              </span>
                                              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/60">
                                                {item.kpi[lang]}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              {t.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.ctaDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:okihita@gmail.com?subject=Diskusi%20Rencana%20Eksekusi%20-%20PT.%20Penerbit%20Erlangga"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.btnEmail}</span>
            </a>

            <a
              href="https://linkedin.com/in/okihita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>{t.btnLinkedin}</span>
            </a>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 bg-white dark:bg-[#09090b]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            <span>{t.footerTitle}</span> — <span>Okihita H. Sihaloho</span>
          </div>
          <div>
            <span>{t.footerBranch}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
