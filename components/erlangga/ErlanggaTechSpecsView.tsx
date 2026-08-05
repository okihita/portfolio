"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Database,
  ShieldCheck,
  Cpu,
  Mail,
  Printer,
  Server,
  Sun,
  Moon,
  Languages,
  ChevronRight,
  Layers,
  Network,
  BarChart2,
  Award
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { ErlanggaHeaderNav } from "./ErlanggaHeaderNav";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS DICTIONARY ---

const TRANSLATIONS = {
  id: {
    backToStory: "Narasi Eksekutif",
    exportPdf: "PDF",
    targetBadge: "PT. Penerbit Erlangga — Spesifikasi Teknis Kandidat IT Manager",
    heroTitle: "Arsitektur Integrasi Enterprise & Infrastruktur Cloud",
    heroDesc: "Audit teknis mendalam atas integrasi Microsoft Dynamics ERP, Qontak CRM, Darwinbox HRMS, infrastruktur WAN 40+ cabang, dan jaringan SecOps Erlangga Group.",
    
    ecosystemTag: "Cakupan Ekosistem",
    ecosystemTitle: "Pemetaan Ekosistem Bisnis Erlangga Group",

    techFocusTag: "Arsitektur & DevOps",
    techFocusTitle: "Inisiatif Teknis & Integrasi Cloud",
    
    archDiagramTag: "Topologi Integrasi",
    archDiagramTitle: "Arsitektur Pipa Data Enterprise & PowerBI",
    
    sec4Title: "Matriks Kesesuaian Kualifikasi Teknis",
    thReq: "Persyaratan Jobstreet",
    thMatch: "Rekam Jejak Okihita",
    thStatus: "Kesesuaian",

    btnEmail: "Kirim Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "Proposal Strategis TI — PT. Penerbit Erlangga",
    footerBranch: "Branch: erlangga"
  },
  en: {
    backToStory: "Executive Story",
    exportPdf: "PDF",
    targetBadge: "PT. Penerbit Erlangga — IT Manager Candidate Tech Specs",
    heroTitle: "Enterprise Integration Architecture & Cloud Infrastructure",
    heroDesc: "In-depth technical audit covering Microsoft Dynamics ERP, Qontak CRM, Darwinbox HRMS integration, 40+ branch WAN network, and SecOps posture.",

    ecosystemTag: "Ecosystem Scope",
    ecosystemTitle: "Erlangga Group Business Ecosystem",

    techFocusTag: "Architecture & DevOps",
    techFocusTitle: "Technical Focus & Integration Initiatives",

    archDiagramTag: "Integration Topology",
    archDiagramTitle: "Enterprise Data Pipeline Architecture & PowerBI",

    sec4Title: "Technical Qualification Alignment Matrix",
    thReq: "Jobstreet Requirement",
    thMatch: "Okihita's Background",
    thStatus: "Fit Status",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

const ECOSYSTEM_PULLS_DATA = {
  id: [
    {
      id: "publishing",
      title: "Penerbitan Edukasi & Rantai Pasok Logistik",
      description: "Menerbitkan dan mendistribusikan jutaan buku pendidikan ke sekolah dan toko buku di seluruh Indonesia.",
      techStack: ["Microsoft Dynamics ERP", "Sinkronisasi Gudang", "API Logistik"],
      priorities: [
        "Visibilitas stok real-time di seluruh cabang regional",
        "Arsitektur basis data berkeandalan tinggi untuk puncak distribusi"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "edtech",
      title: "Platform Pembelajaran Digital & EdTech",
      description: "Buku digital, konten e-learning, portal interaktif siswa & guru, serta sistem asesmen ujian online.",
      techStack: ["GCP & AWS Cloud", "CDN Streaming", "Aplikasi Mobile"],
      priorities: [
        "Pengiriman konten cepat (<1 detik) & optimasi aset",
        "Infrastruktur cloud auto-scaling untuk beban ujian nasional"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "enterprise",
      title: "Operasional Perusahaan & Tata Kelola SDM",
      description: "Koordinasi tenaga kerja lintas cabang, manajemen penjualan, tata kelola perusahaan, dan pelaporan eksekutif.",
      techStack: ["Darwinbox HRMS", "Qontak CRM", "PowerBI Analytics"],
      priorities: [
        "Dasbor pelaporan eksekutif terpadu via PowerBI",
        "Protokol SecOps Zero Trust & rencana pemulihan bencana (DRP)"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ],
  en: [
    {
      id: "publishing",
      title: "Educational Publishing & Distribution",
      description: "Publishing and supplying millions of educational books to schools and bookstores across Indonesia.",
      techStack: ["Microsoft Dynamics ERP", "Warehouse Sync", "Logistics APIs"],
      priorities: [
        "Real-time inventory visibility across regional branches",
        "High-availability database architecture for peak distribution cycles"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "edtech",
      title: "Digital Learning & EdTech Platforms",
      description: "Digital textbooks, e-learning content, student/teacher interactive portals, and online assessment systems.",
      techStack: ["GCP & AWS Cloud", "CDN Streaming", "Mobile Apps"],
      priorities: [
        "Sub-second content delivery and asset optimization",
        "Auto-scaling cloud infrastructure for nationwide exam traffic"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "enterprise",
      title: "Enterprise Operations & Human Capital",
      description: "Multi-branch workforce coordination, sales management, corporate governance, and executive reporting.",
      techStack: ["Darwinbox HRMS", "Qontak CRM", "PowerBI Analytics"],
      priorities: [
        "Single-source-of-truth executive reporting via PowerBI",
        "Zero Trust SecOps and robust backup/disaster recovery protocols"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const STRATEGIC_FOCUS_DATA = {
  id: [
    {
      id: "data-pipeline",
      number: "01",
      title: "Pipa Data Terintegrasi & Analitik Terpadu",
      icon: Database,
      problem: "Data terisolasi di ERP, CRM, dan HRMS menghambat pengambilan keputusan eksekutif.",
      solution: "Membangun pipa data ETL otomatis ke data warehouse terpusat untuk dasbor PowerBI dan estimasi stok barang."
    },
    {
      id: "cloud-infra",
      number: "02",
      title: "Ketahanan Infrastruktur Cloud & SecOps",
      icon: Server,
      problem: "Mengelola infrastruktur hibrida (Data Center + GCP/AWS) membutuhkan SLA waktu aktif yang ketat.",
      solution: "Menerapkan Infrastructure as Code (IaC), protokol pemulihan bencana (RTO < 2 jam), dan keamanan endpoint."
    },
    {
      id: "branch-sync",
      number: "03",
      title: "Standardisasi Layanan TI Cabang Regional",
      icon: ShieldCheck,
      problem: "Variasi waktu respon dukungan TI dan praktik keamanan di cabang regional.",
      solution: "Menyelaraskan Tata Kelola Layanan TI (ITSM), sistem tiket terpusat, dan kebijakan SecOps seragam."
    },
    {
      id: "ai-automation",
      number: "04",
      title: "Otomatisasi Alur Kerja Berbasis AI",
      icon: Cpu,
      problem: "Proses manual dalam penyuntingan naskah dan kategorisasi data memperlambat operasional.",
      solution: "Mengembangkan alur kerja berbasis AutoML dan LLM untuk asisten penyuntingan internal dan kategorisasi katalog."
    }
  ],
  en: [
    {
      id: "data-pipeline",
      number: "01",
      title: "Unified Data Pipelines & Analytics",
      icon: Database,
      problem: "Siloed data across ERP, CRM, and HRMS limits real-time executive decision-making.",
      solution: "Build automated ETL pipelines feeding a central data warehouse for unified PowerBI executive dashboards."
    },
    {
      id: "cloud-infra",
      number: "02",
      title: "Cloud Infrastructure Resilience & SecOps",
      icon: Server,
      problem: "Managing hybrid infrastructure across data centers and GCP/AWS requires strict uptime SLAs.",
      solution: "Implement Infrastructure as Code (IaC), automated disaster recovery (RTO < 2 hrs), and endpoint SecOps."
    },
    {
      id: "branch-sync",
      number: "03",
      title: "Regional Branch IT Standardization",
      icon: ShieldCheck,
      problem: "Variations in IT support response times and security practices across regional branches.",
      solution: "Standardize IT Service Management (ITSM), deploy central ticketing, and unified IT policies."
    },
    {
      id: "ai-automation",
      number: "04",
      title: "AI & Next-Gen Workflow Automation",
      icon: Cpu,
      problem: "Manual processes in editorial proofreading and data categorization slow down velocity.",
      solution: "Deploy targeted AutoML and LLM-assisted workflows for internal proofreading and catalog tagging."
    }
  ]
};

const ALIGNMENT_MATRIX_DATA = {
  id: [
    {
      requirement: "Min. S1/S2 Teknik Informatika / TI (Min. IPK 3.00)",
      candidateMatch: "S.T. Teknik Informatika — Institut Teknologi Bandung (ITB)",
      status: "Sangat Sesuai"
    },
    {
      requirement: "Pengalaman Pengelolaan TI 5–10 Tahun",
      candidateMatch: "10+ Tahun rekayasa perangkat lunak, super-app mobile, dan konsultasi enterprise",
      status: "Memenuhi Syarat"
    },
    {
      requirement: "Kepemimpinan, Manajemen & Public Speaking",
      candidateMatch: "Business Integration Lead di Accenture, Lead Engineer di Zenius (7 tim langsung)",
      status: "Sangat Sesuai"
    },
    {
      requirement: "Skala Enterprise & Operasional Lintas Cabang",
      candidateMatch: "Memimpin squad super-app perbankan (25Juta+ user) dan portal FMCG (170rb+ karyawan)",
      status: "Sangat Sesuai"
    },
    {
      requirement: "Cloud & Infrastruktur (GCP, AWS, Backup, SecOps)",
      candidateMatch: "AWS, GCP Cloud Architect (proses), Docker, Kubernetes, IaC, CI/CD",
      status: "Sangat Sesuai"
    }
  ],
  en: [
    {
      requirement: "Min. S1/S2 Computer Science / IT (Min. GPA 3.00)",
      candidateMatch: "B.Eng. Computer Science — Bandung Institute of Technology (ITB)",
      status: "Exceeds Requirement"
    },
    {
      requirement: "5–10 Years Professional IT Experience",
      candidateMatch: "10+ Years in software engineering, mobile super-apps, and enterprise consultancy",
      status: "Fully Meets"
    },
    {
      requirement: "Leadership, Management & Public Speaking",
      candidateMatch: "Business Integration Lead at Accenture, Android Lead at Zenius (7 direct reports)",
      status: "Strong Match"
    },
    {
      requirement: "Enterprise Scale & Multi-Branch Operations",
      candidateMatch: "Led bank super-app (25M+ users) and FMCG portal (170k+ employees)",
      status: "Strong Match"
    },
    {
      requirement: "Cloud & Infrastructure (GCP, AWS, Backup, SecOps)",
      candidateMatch: "AWS, GCP Cloud Architect (in progress), Docker, Kubernetes, IaC, CI/CD",
      status: "Strong Match"
    }
  ]
};

// --- DETAILED 90-DAY TACTICAL ROADMAP DATA ---

const DETAILED_ROADMAP_DATA = {
  id: [
    {
      phase: "01",
      month: "30 Hari Pertama",
      title: "Audit Fondasi TI, Keamanan & Efisiensi Lisensi ERP",
      narrative: "Konsolidasi data 40+ cabang, pembersihan skema basis data ERP Microsoft Dynamics, dan audit efisiensi biaya infrastruktur cloud GCP/AWS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      actions: [
        "Audit skema basis data Dynamics ERP & pembersihan rekonsiliasi POS cabang.",
        "Implementasi PowerBI Executive Dashboard Live MVP untuk Single Source of Truth.",
        "Audit lisensi cloud & penghematan biaya GCP/AWS hingga 20% tanpa menurunkan SLA.",
        "Pemetaan titik rawan keamanan jaringan WAN 40+ cabang regional.",
        "Wawancara mendalam dengan kepala cabang & kepala departemen operasional."
      ],
      whyRationale: "Mengapa 30 Hari?: Tanpa audit fondasi basis data dan kestabilan ERP, setiap peluncuran fitur baru di atasnya akan rentan terhadap kegagalan data dan pemborosan biaya.",
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
      month: "60 Hari",
      title: "Stabilisasi Platform EdTech, Integrasi CRM & SD-WAN",
      narrative: "Mengakselerasi kecepatan perputaran stok gudang cabang melalui integrasi WMS real-time dan memastikan platform ujian online CBT mampu menangani puncak trafik tanpa crash.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      actions: [
        "Auto-scaling server CBT Erlangga Online siap menangani 100.000+ siswa bersamaan.",
        "Integrasi Qontak CRM & Dynamics ERP untuk visibilitas tim sales sekolah.",
        "Penerapan SD-WAN redundancy 40+ cabang regional untuk mencegah outage fiber optic.",
        "Integrasi Darwinbox HRMS untuk otomatisasi presensi & payroll 10.000+ karyawan.",
        "Deployment endpoint agent EDR Ransomware Defense ke seluruh server & laptop cabang."
      ],
      whyRationale: "Mengapa 60 Hari?: Bulan kedua memprioritaskan stabilitas sistem yang langsung menyentuh kepuasan pengguna (sekolah mitra & tim sales lapangan).",
      milestones: [
        "Platform Ujian CBT Auto-Scaling Zero-Downtime (100.000+ Siswa)",
        "Otomatisasi Lead Sales Pipa Data CRM-ERP",
        "Redundansi Jaringan SD-WAN 40+ Cabang Regional (Zero Outage)",
        "Deployment Agent EDR Ransomware Defense 100% Endpoint"
      ]
    },
    {
      phase: "03",
      month: "90 Hari",
      title: "Prediksi Stok AI, Otomatisasi D2C & Modernisasi Arsitektur",
      narrative: "Transformasi total divisi TI menjadi enabler pertumbuhan bisnis melalui Machine Learning demand forecasting dan rekonsiliasi otomatis multi-channel e-commerce.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      actions: [
        "Model ML Demand Forecasting untuk memprediksi volume cetak ulang presisi (POD).",
        "Otomatisasi rekonsiliasi penjualan marketplace (Tokopedia, Shopee, TikTok Shop).",
        "Penyusunan Disaster Recovery Plan (DRP) Multi-Region Cloud Failover.",
        "Modernisasi arsitektur microservices untuk API marketplace & LMS B2B.",
        "Finalisasi Rencana Strategis TI 1-Tahun & Framework Tata Kelola TI ITILv4."
      ],
      whyRationale: "Mengapa 90 Hari?: Pada tahap ini, TI telah bertransformasi dari pusat biaya (cost center) menjadi mesin pendorong profitabilitas dan efisiensi perusahaan.",
      milestones: [
        "Model Prediksi Cetak ML Beroperasi (Penghematan Stok Cetak 35%)",
        "Rekonsiliasi Otomatis Penjualan Marketplace D2C 24/7",
        "Failover Cloud DRP Multi-Region Aktif",
        "Master Plan Strategis TI 1-Tahun Disetujui Board"
      ]
    }
  ],
  en: [
    {
      phase: "01",
      month: "First 30 Days",
      title: "IT Foundation Audit, Security & ERP License Optimization",
      narrative: "Data consolidation across 40+ regional hubs, Microsoft Dynamics ERP schema cleanup, and GCP/AWS cloud infrastructure cost optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      actions: [
        "Dynamics ERP database schema audit & branch POS reconciliation cleanup.",
        "Live PowerBI Executive Dashboard MVP deployment for Single Source of Truth.",
        "Cloud licensing audit cutting GCP/AWS expenses by 20% while maintaining SLA.",
        "Vulnerability mapping across 40+ regional branch WAN network nodes.",
        "In-depth interviews with regional branch heads and key department leaders."
      ],
      whyRationale: "Why 30 Days?: Without auditing the database foundation and ERP stability, any feature launched on top remains vulnerable to data corruption and cost inflation.",
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
      month: "60 Days",
      title: "EdTech Platform Scaling, CRM Integration & SD-WAN",
      narrative: "Accelerating branch warehouse inventory velocity via real-time WMS routing and ensuring online CBT exam platforms seamlessly handle peak loads without crashes.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      actions: [
        "Auto-scaling CBT servers ready to handle 100,000+ concurrent students.",
        "Qontak CRM & Dynamics ERP integration for school sales rep visibility.",
        "SD-WAN redundancy across 40+ regional branches preventing fiber cut outages.",
        "Darwinbox HRMS integration automating attendance & payroll for 10,000+ staff.",
        "Ransomware Defense EDR endpoint agent deployment to all server & branch laptops."
      ],
      whyRationale: "Why 60 Days?: The second month prioritizes system stability directly impacting customer satisfaction (partner schools & field sales reps).",
      milestones: [
        "Zero-Downtime Peak CBT Exams (100k Concurrent Students)",
        "Automated CRM-ERP Sales Lead Pipeline",
        "40+ Regional Branch SD-WAN Redundancy (Zero Outage)",
        "100% Ransomware EDR Endpoint Deployment"
      ]
    },
    {
      phase: "03",
      month: "90 Days",
      title: "AI Demand Forecasting, D2C Automation & Architecture Modernization",
      narrative: "Full transformation of IT into a core business growth enabler through Machine Learning demand forecasting and automated multi-channel e-commerce reconciliation.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      actions: [
        "ML Demand Forecasting model to accurately predict print-on-demand (POD) runs.",
        "Automated marketplace sales reconciliation (Tokopedia, Shopee, TikTok Shop).",
        "Multi-Region Cloud Failover Disaster Recovery Plan (DRP) implementation.",
        "Microservices architecture modernization for marketplace APIs & B2B LMS.",
        "Finalizing 1-Year IT Strategic Master Plan & ITILv4 Governance Framework."
      ],
      whyRationale: "Why 90 Days?: By this phase, IT has completely evolved from a traditional cost center into an active profit and operational velocity multiplier.",
      milestones: [
        "ML Demand Forecasting Operational (35% Overprinting Waste Reduction)",
        "24/7 D2C Marketplace Automated Sales Reconciliation",
        "Active Multi-Region DRP Cloud Failover",
        "1-Year IT Strategic Master Plan Approved by Board"
      ]
    }
  ]
};

export default function ErlanggaTechSpecsView() {
  const [lang, setLang] = useState<Lang>("id");
  const [activeTab, setActiveTab] = useState("data-pipeline");
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    const savedLang = localStorage.getItem("erlangga_lang");

    if (queryLang === "en" || queryLang === "id") {
      setLang(queryLang as Lang);
      localStorage.setItem("erlangga_lang", queryLang);
    } else if (savedLang === "en" || savedLang === "id") {
      setLang(savedLang as Lang);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          setIsDark(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDark(false);
        }
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const toggleLang = () => {
    const nextLang: Lang = lang === "id" ? "en" : "id";
    setLang(nextLang);
    localStorage.setItem("erlangga_lang", nextLang);
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const t = TRANSLATIONS[lang];
  const detailedRoadmap = DETAILED_ROADMAP_DATA[lang];
  const ecosystemPulls = ECOSYSTEM_PULLS_DATA[lang];
  const strategicFocus = STRATEGIC_FOCUS_DATA[lang];
  const alignmentMatrix = ALIGNMENT_MATRIX_DATA[lang];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      <ErlanggaHeaderNav
        lang={lang}
        activeRoute="/erlangga/tech-specs"
        toggleLang={toggleLang}
        toggleTheme={toggleTheme}
        mounted={mounted}
        isDark={isDark}
        handlePrint={handlePrint}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-28">
        {/* --- HERO SECTION --- */}
        <section className="space-y-8 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-20">
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

          {/* Unsplash Technical Data Center Banner */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
            <div className="h-9 bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
              <span className="text-xs text-zinc-400 ml-2">Erlangga Systems Architecture — Hybrid Cloud Topology & GCP/AWS Nodes</span>
            </div>
            <div className="relative h-[280px] sm:h-[380px] w-full bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Cloud Infrastructure & Servers"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-400 block font-semibold">Enterprise Core</span>
                  <span className="text-base font-bold">Dynamics ERP · Qontak CRM · Darwinbox HRMS · BigQuery Data Lake</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === DETAILED 90-DAY TACTICAL ROADMAP (ULTRA-RICH BREAKDOWN) === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
              {lang === "id" ? "Peta Jalan Taktis 90-Hari (Deep-Dive)" : "90-Day Tactical Execution Plan"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {lang === "id" ? "Fase Eksekusi Taktis & Rencana Aksi Kandidat IT Manager" : "Tactical Execution Phases & IT Manager Action Plan"}
            </h2>
          </div>

          <div className="space-y-8">
            {detailedRoadmap.map((ch) => (
              <div
                key={ch.phase}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-zinc-900">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/20 lg:to-transparent"></div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {lang === "id" ? `Bulan ${parseInt(ch.phase, 10)}` : `Month ${parseInt(ch.phase, 10)}`}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {ch.title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {ch.narrative}
                      </p>

                      {/* Detailed Execution Action Checklist */}
                      <div className="space-y-2.5 pt-3">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                          {lang === "id" ? "5 Inisiatif Eksekusi Taktis Utama:" : "5 Primary Tactical Initiatives:"}
                        </span>
                        <ul className="space-y-2">
                          {ch.actions.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why Rationale Box */}
                      <div className="p-4 sm:p-5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                        {ch.whyRationale}
                      </div>
                    </div>

                    <div className="p-6 pt-4 space-y-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 font-bold">
                        <Award className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>{lang === "id" ? "Capaian Utama:" : "Key Milestones:"}</span>
                      </div>
                      <ul className="space-y-1 pl-6 list-disc text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                        {ch.milestones.map((ms, idx) => (
                          <li key={idx}>{ms}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === ECOSYSTEM MAPPING === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.ecosystemTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.ecosystemTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecosystemPulls.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="relative h-40 w-full bg-zinc-900">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      {item.priorities.map((priority, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{priority}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === TECHNICAL FOCUS INITIATIVES === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.techFocusTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.techFocusTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-2">
              {strategicFocus.map((item) => {
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "border-blue-600 dark:border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 text-zinc-900 dark:text-zinc-50 font-semibold shadow-xs"
                        : "border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{item.number}</span>
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? "text-blue-600 dark:text-blue-400" : "text-zinc-400"}`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              {strategicFocus.filter((f) => f.id === activeTab).map((item) => (
                <div
                  key={item.id}
                  className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="font-bold block mb-1 text-red-700 dark:text-red-400">Tantangan Teridentifikasi</span>
                        {item.problem}
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="font-bold block mb-1 text-emerald-700 dark:text-emerald-400">Solusi Arsitektur</span>
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECHNICAL QUALIFICATION MATRIX --- */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.sec4Title}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 text-xs text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                    <th className="py-4 px-5 font-semibold">{t.thReq}</th>
                    <th className="py-4 px-5 font-semibold">{t.thMatch}</th>
                    <th className="py-4 px-5 font-semibold">{t.thStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                  {alignmentMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors">
                      <td className="py-4 px-5 font-medium text-zinc-900 dark:text-zinc-100 max-w-xs">{row.requirement}</td>
                      <td className="py-4 px-5 text-zinc-600 dark:text-zinc-300 max-w-md">{row.candidateMatch}</td>
                      <td className="py-4 px-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                          <CheckCircle2 className="w-3 h-3" />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Diskusi Arsitektur Sistem Erlangga
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Saya siap meninjau arsitektur sistem, skema basis data, dan pipa data integrasi secara lebih mendalam.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:okihita@gmail.com?subject=Diskusi%20Spesifikasi%20Teknis%20-%20PT.%20Penerbit%20Erlangga"
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
