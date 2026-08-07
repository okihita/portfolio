"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import MermaidChart from "./MermaidChart";
import ErlanggaEcosystemFlow from "./ErlanggaEcosystemFlow";
import ErlanggaHistoricalTimeline from "./ErlanggaHistoricalTimeline";
import {
  BookOpen,
  Printer,
  Truck,
  Smartphone,
  GraduationCap,
  CheckCircle2,
  Clock,
  Building2,
  Cpu,
  Layers,
  ArrowRight,
  Mail,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  BarChart2,
  Globe
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS DICTIONARY ---
const TRANSLATIONS = {
  id: {
    targetBadge: "PT. Penerbit Erlangga — Arsitektur Ekosistem & Unit Bisnis",
    heroTitle: "Pemahaman Bisnis Erlangga & Strategi Profitabilitas TI",
    heroHook: "“Memahami ekosistem bisnis Erlangga secara menyeluruh—dari IP penerbitan, manufaktur percetakan GAP, distribusi logistik 40+ cabang, hingga platform cloud EdTech dan pelatihan Erlass—adalah kunci untuk mentransformasi divisi TI menjadi penggerak margin operasi yang terukur.”",
    authorMeta: "Okihita H. Sihaloho, S.T. (ITB) · Calon IT Manager",

    // Section Tags & Titles
    archTag: "Peta Arsitektur Ekosistem",
    archTitle: "Sinergi 5 Pilar Unit Bisnis Erlangga Group",
    archSubtitle: "Model arsitektur sistem hipotesis yang disintesis dari riset operasional publik, alur kerja rantai pasok penerbitan, dan tolok ukur TI enterprise.",

    timelineTag: "Jejak Rekam 74 Tahun",
    timelineTitle: "Garis Waktu Transformasi & Milestone Sejarah (1952 – 2026+)",

    subsidiaryTag: "Akselerator Pendapatan Bisnis",
    subsidiaryTitle: "Analisis Mendalam 5 Anak Perusahaan & IT Profit Enablers",

    synergyTag: "Integrasi Sistem Enterprise",
    synergyTitle: "Arsitektur Pipa Data Single Source of Truth",

    sec5Title: "Siap Memimpin Transformasi Teknologi Erlangga",
    sec5Desc: "Saya siap mendiskusikan rencana strategis ini dan mengeksplorasi bagaimana pengalaman saya dapat mendukung pencapaian target PT. Penerbit Erlangga.",

    btnEmail: "Kirim Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    btnPortfolio: "okihita.com",
    footerTitle: "Proposal Strategis TI — PT. Penerbit Erlangga",
    footerBranch: "Branch: erlangga"
  },
  en: {
    targetBadge: "PT. Penerbit Erlangga — Business Ecosystem & Subsidiary Architecture",
    heroTitle: "Erlangga Business Alignment & IT Profitability Strategy",
    heroHook: "“Comprehensively understanding Erlangga's business ecosystem—from publishing IP, GAP print manufacturing, 40+ branch logistics distribution, to cloud EdTech platforms and Erlass teacher training—is essential to transforming IT into a measurable operating margin driver.”",
    authorMeta: "Okihita H. Sihaloho, B.Eng. (ITB) · IT Manager Candidate",

    // Section Tags & Titles
    archTag: "Ecosystem Architecture",
    archTitle: "Synergy of Erlangga Group's 5 Business Pillars",
    archSubtitle: "A candidate strategic system topology model synthesized from public operational research, publishing supply chain workflows, and enterprise IT benchmarks.",

    timelineTag: "74-Year Heritage",
    timelineTitle: "Historical Transformation Timeline (1952 – 2026+)",

    subsidiaryTag: "Business Revenue Enablers",
    subsidiaryTitle: "In-Depth Subsidiary Analysis & IT Profit Accelerators",

    synergyTag: "Enterprise System Integration",
    synergyTitle: "Single Source of Truth Data Pipeline Architecture",

    sec5Title: "Ready to Drive Technical Leadership for Erlangga",
    sec5Desc: "I welcome the opportunity to discuss this strategic roadmap and explore how my engineering background supports PT. Penerbit Erlangga.",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    btnPortfolio: "okihita.com",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

// --- MERMAID CHART STRINGS ---

const ECOSYSTEM_MERMAID = `graph TD
    HQ["Erlangga Group HQ (Ciracas Data Center)"] --> PE["PT Penerbit Erlangga<br/>(Core Publishing & 8 Imprints)"]
    HQ --> GAP["PT Gelora Aksara Pratama<br/>(GAP Print Manufacturing)"]
    HQ --> EBH["Eureka Book House & Logistics<br/>(Retail, SIPLah B2B & 3PL)"]
    HQ --> ED["Erlangga Digital & EdTech<br/>(Cloud Platforms & SaaS)"]
    HQ --> EI["Erlass Institute<br/>(Teacher Training & Certification)"]

    PE -- Editorial Master Metadata --> GAP
    GAP -- Printed Book Stock --> EBH
    PE -- Digital Content Assets --> ED
    PE -- School Client Network --> EI
    EBH -- B2B & Retail Sales Data --> HQ
    ED -- Cloud User Analytics --> HQ`;

const TIMELINE_MERMAID = {
  id: `graph LR
    Y1952["<b>1952</b><br/>PT Penerbit Erlangga<br/>Pendirian oleh M. Hutauruk"] --> Y1987["<b>1987</b><br/>GAP Print<br/>Pabrik Percetakan Massal"]
    Y1987 --> Y2006["<b>2006</b><br/>Eureka Book House<br/>Toko Buku Retail"]
    Y2006 --> Y2007["<b>2007</b><br/>Eureka Logistics<br/>Rantai Pasok 3PL"]
    Y2007 --> Y2010["<b>2010</b><br/>Erlass Institute<br/>Pelatihan Guru"]
    Y2010 --> Y2026["<b>2026+</b><br/>Erlangga Digital & AI<br/>Era EdTech Cloud"]`,
  en: `graph LR
    Y1952["<b>1952</b><br/>PT Penerbit Erlangga<br/>Founding by M. Hutauruk"] --> Y1987["<b>1987</b><br/>GAP Print<br/>Mass Offset Plant"]
    Y1987 --> Y2006["<b>2006</b><br/>Eureka Book House<br/>Retail Bookstores"]
    Y2006 --> Y2007["<b>2007</b><br/>Eureka Logistics<br/>3PL Supply Chain"]
    Y2007 --> Y2010["<b>2010</b><br/>Erlass Institute<br/>Teacher Training"]
    Y2010 --> Y2026["<b>2026+</b><br/>Erlangga Digital & AI<br/>Cloud EdTech Era"]`
};

const PIPELINE_MERMAID = {
  id: `graph TD
    subgraph DataSources ["Sumber Data Unit Bisnis"]
        GAP_MES["GAP Print MES & IoT"]
        WMS_NODE["Eureka 40+ Gudang Cabang"]
        ED_CLOUD["Erlangga Digital Cloud Analytics"]
        ERL_LMS["Erlass LMS Workshop Leads"]
    end

    subgraph CoreEnterprise ["Inti Enterprise Terpusat"]
        ERP["Microsoft Dynamics ERP<br/>(Buku Besar & Master Stok)"]
        CRM["Qontak CRM<br/>(Pipa Penjualan Sekolah)"]
        HRMS["Darwinbox HRMS<br/>(Payroll & Staf Terpadu)"]
    end

    GAP_MES --> ERP
    WMS_NODE <--> ERP
    ED_CLOUD --> CRM
    ERL_LMS --> CRM

    ERP --> GW["Unified API Gateway & Middleware"]
    CRM --> GW
    HRMS --> GW

    GW --> DASH["PowerBI Executive Dashboard<br/>(Single Source of Truth Direksi)"]`,
  en: `graph TD
    subgraph DataSources ["Subsidiary Operating Nodes"]
        GAP_MES["GAP Print MES & IoT"]
        WMS_NODE["Eureka 40+ Branch WMS Nodes"]
        ED_CLOUD["Erlangga Digital Cloud Analytics"]
        ERL_LMS["Erlass LMS Workshop Leads"]
    end

    subgraph CoreEnterprise ["Central Enterprise Core"]
        ERP["Microsoft Dynamics ERP<br/>(Financial Ledger & Stock Master)"]
        CRM["Qontak CRM<br/>(School Sales Pipeline)"]
        HRMS["Darwinbox HRMS<br/>(Unified Payroll & Staff)"]
    end

    GAP_MES --> ERP
    WMS_NODE <--> ERP
    ED_CLOUD --> CRM
    ERL_LMS --> CRM

    ERP --> GW["Unified API Gateway & Middleware"]
    CRM --> GW
    HRMS --> GW

    GW --> DASH["PowerBI Executive Dashboard<br/>(Single Source of Truth for Board of Directors)"]`
};

// --- SUBSIDIARY DETAILS DATA ---
const SUBSIDIARIES_DATA = {
  id: [
    {
      id: "publishing",
      name: "PT Penerbit Erlangga",
      tagline: "Core Educational Publishing & 8 Imprints",
      est: "30 April 1952",
      hq: "Ciracas, Jakarta Timur",
      icon: BookOpen,
      badge: "Induk Penerbitan",
      businessModel: "Penerbitan buku pelajaran kurikulum nasional (K-12/ESPS), referensi perguruan tinggi, dan buku bacaan umum lintas 8 lini imprint.",
      imprints: ["Penerbit Erlangga (K-12/ESPS)", "ESIS", "Esensi", "Erlangga for Kids (EFK)", "Emir", "Phibeta", "Ilma", "Majalah Bravo"],
      costDrivers: ["Biaya kertas & bahan baku (COGS)", "Royalti penulis & editor (10-15%)", "Depresiasi stok saat perubahan kurikulum"],
      itEnablers: [
        "Peramalan Demand AI di Microsoft Dynamics ERP untuk mengurangi overprinting stok hingga 15-20%.",
        "QR Code Media Interaktif pada buku fisik yang mengonversi pembeli menjadi pelanggan digital (+25% upsell).",
        "Digital Asset Management (DAM) berbasis Cloud di GCP yang mempercepat editorial time-to-market sebesar 40%."
      ],
      kpiImpact: "-15% Biaya Cetak Berlebih · +25% Konversi Lead Digital",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "gap-print",
      name: "PT Gelora Aksara Pratama (GAP Print)",
      tagline: "Manufaktur & Offset Industrial",
      est: "1 Juni 1987",
      hq: "Pabrik Ciracas, Jakarta Timur",
      icon: Printer,
      badge: "Manufaktur & Cetak",
      businessModel: "Percetakan offset industri massal untuk buku pelajaran grup Erlangga (captive market) serta jasa cetak komersial B2B (kemasan, laporan tahunan, majalah).",
      imprints: ["Cetak Offset Cetakan Tinggi", "Penjilidan Hardcover & Softcover", "Kemasan Komersial B2B", "Digital Print-on-Demand (POD)"],
      costDrivers: ["Kertas & Tinta (60-65% COGS)", "Downtime mesin cetak & penggantian plat", "Limbah buangan kertas setup"],
      itEnablers: [
        "IoT Press Telemetry & MES untuk mengoptimalkan Overall Equipment Effectiveness (OEE mesin naik +12-15%).",
        "Otomatisasi Pre-Press CIP4 yang mengurangi limbah kertas setup cetak hingga 10-12%.",
        "API Web-to-Print Print-on-Demand (POD) untuk cetak edisi terbatas/niche tanpa persediaan gudang (Margin 40%+)."
      ],
      kpiImpact: "+15% Kapasitas Mesin (OEE) · -12% Kertas Terbuang",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    },
    {
      id: "eureka",
      name: "Eureka Book House & Eureka Logistics",
      tagline: "Retail, SIPLah B2B & 3PL Supply Chain",
      est: "2006 (Retail) / 2007 (Logistik)",
      hq: "40+ Jaringan Cabang Indonesia",
      icon: Truck,
      badge: "Rantai Pasok & Fulfillment",
      businessModel: "Pengadaan B2B sekolah via portal SIPLah Kemendikbudristek, toko buku retail/e-commerce (eurekabookhouse.co.id), serta jasa logistik pergudangan 3PL.",
      imprints: ["Pengadaan Sekolah SIPLah (Dana BOS)", "Toko Buku Eureka Retail & Online", "Gudang Cabang 40+ Wilayah", "Armada Logistik 3PL Darat/Laut/Udara"],
      costDrivers: ["Sewa & operasional 40+ gudang cabang", "Biaya pengiriman last-mile antar pulau", "Depresiasi & kerusakan barang transit"],
      itEnablers: [
        "WMS & POS Offline-First (SQLite/PWA) di 40+ gudang cabang agar operasional scan barang tidak pernah terhenti saat internet mati.",
        "Pipa Otomatisasi SIPLah yang mempercepat order-to-dispatch dari 3 hari menjadi < 6 jam (mempercepat cairnya Dana BOS).",
        "Algoritma Batching Rute Armada Logistik yang memangkas biaya bahan bakar last-mile sebesar 18%."
      ],
      kpiImpact: "99.9% Uptime Gudang Cabang · -18% Biaya Pengiriman Last-Mile",
      image: "/images/erlangga/subsidiary_ebh_risograph.jpg"
    },
    {
      id: "digital",
      name: "Erlangga Digital & EdTech Unit",
      tagline: "Platform Cloud, Aplikasi & CBT Exam",
      est: "Era Inovasi Digital",
      hq: "Ciracas Cloud Datacenter",
      icon: Smartphone,
      badge: "Cloud & EdTech SaaS",
      businessModel: "Pengembangan produk aplikasi pembelajaran digital, sistem perpustakaan sekolah (E-Library Erlangga), portal Erlangga Online / Erklika, dan engine ujian CBT.",
      imprints: ["E-Library Erlangga (Perpustakaan Digital)", "Aplikasi Video Belajar Erklika", "Erklika Lab (Laboratorium STEAM)", "Engine Ujian CBT (Server 100k+ Siswa)"],
      costDrivers: ["Bandwidth & compute cloud AWS/GCP", "Lonjakan trafik server saat musim ujian nasional", "Gaji tim software engineer"],
      itEnablers: [
        "Arsitektur Serverless Cloud Auto-Scaling (AWS ECS / GCP Cloud Run) yang menjamin uptime 100% saat ujian sekaligus memangkas biaya cloud idle off-peak hingga 45%.",
        "Engine AI Penilaian Esai Otomatis (AutoML NLP) sebagai fitur add-on SaaS berbayar premium untuk sekolah (+25% ARR).",
        "Edge CDN Video Streaming yang mempercepat loading video belajar < 0.8 detik di daerah minim sinyal."
      ],
      kpiImpact: "-45% Biaya Cloud Off-Peak · 100% Uptime Ujian CBT",
      image: "/images/erlangga/subsidiary_logistics_risograph.jpg"
    },
    {
      id: "erlass",
      name: "Erlass Institute (PT Erlass)",
      tagline: "Pelatihan Guru & Konsultasi Edukasi",
      est: "Tahun 2010",
      hq: "Jakarta & Jaringan Regional",
      icon: GraduationCap,
      badge: "Pengembangan Profesi",
      businessModel: "Penyelenggaraan pelatihan guru bersertifikat, lokakarya kepemimpinan sekolah, konsultasi implementasi Kurikulum Merdeka, dan event edukasi.",
      imprints: ["Sertifikasi Kompetensi Guru", "Konsultasi Akreditasi Sekolah", "Workshop Kurikulum Merdeka", "Manajemen Event Edukasi CSR"],
      costDrivers: ["Honorarium narasumber / instruktur", "Sewa gedung ballroom & konsumsi acara", "Biaya cetak & pengiriman sertifikat"],
      itEnablers: [
        "Portal LMS Hybrid Self-Paced yang meningkatkan kapasitas peserta 10x lipat tanpa biaya sewa tempat (Margin naik dari 25% ke 75%+).",
        "Otomatisasi Verifikasi Sertifikat Digital QR Hash yang menghemat biaya cetak & kurir hingga 90%.",
        "Integrasi Data Peserta ke Qontak CRM untuk meneruskan warm leads ke tim sales buku Penerbit Erlangga (+20% win rate)."
      ],
      kpiImpact: "10x Kapasitas Peserta · -90% Biaya Cetak Sertifikat",
      image: "/images/erlangga/subsidiary_erlass_risograph.jpg"
    }
  ],
  en: [
    {
      id: "publishing",
      name: "PT Penerbit Erlangga",
      tagline: "Core Educational Publishing & 8 Imprints",
      est: "April 30, 1952",
      hq: "Ciracas, East Jakarta",
      icon: BookOpen,
      badge: "Parent Publishing Entity",
      businessModel: "National curriculum textbook publishing (K-12/ESPS), higher education reference books, and trade books across 8 active imprints.",
      imprints: ["Penerbit Erlangga (K-12/ESPS)", "ESIS", "Esensi", "Erlangga for Kids (EFK)", "Emir", "Phibeta", "Ilma", "Majalah Bravo"],
      costDrivers: ["Paper raw materials (COGS)", "Author & editor royalties (10-15%)", "Stock depreciation during curriculum shifts"],
      itEnablers: [
        "AI Demand Forecasting on Microsoft Dynamics ERP to reduce overprint warehouse stock by 15-20%.",
        "Interactive Media QR Codes in physical textbooks converting readers into digital subscribers (+25% upsell).",
        "Cloud-Native Digital Asset Management (DAM) on GCP reducing editorial time-to-market by 40%."
      ],
      kpiImpact: "-15% Overprint Costs · +25% Digital Lead Conversion",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "gap-print",
      name: "PT Gelora Aksara Pratama (GAP Print)",
      tagline: "Industrial Manufacturing & Offset Printing",
      est: "June 1, 1987",
      hq: "Ciracas Factory, East Jakarta",
      icon: Printer,
      badge: "Print Manufacturing",
      businessModel: "High-volume industrial offset printing for Erlangga Group books (captive market) and external B2B commercial printing contracts (packaging, catalogs, annual reports).",
      imprints: ["Mass Offset Printing Press", "Hardcover & Softcover Binding", "B2B Commercial Packaging", "Digital Print-on-Demand (POD)"],
      costDrivers: ["Paper & Ink (60-65% COGS)", "Press downtime & plate changeover", "Setup paper scrap"],
      itEnablers: [
        "IoT Press Telemetry & MES to optimize Overall Equipment Effectiveness (+15% machine OEE throughput).",
        "CIP4 Pre-Press Automation reducing paper setup scrap by 10-12%.",
        "Web-to-Print Print-on-Demand (POD) API for zero-inventory niche titles (40%+ gross margins)."
      ],
      kpiImpact: "+15% Machine Throughput (OEE) · -12% Paper Setup Scrap",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    },
    {
      id: "eureka",
      name: "Eureka Book House & Eureka Logistics",
      tagline: "Retail, SIPLah B2B & 3PL Supply Chain",
      est: "2006 (Retail) / 2007 (Logistics)",
      hq: "40+ Branch Network Nationwide",
      icon: Truck,
      badge: "Supply Chain & Fulfillment",
      businessModel: "B2B school procurement via government SIPLah BOS portal, bookstore retail/e-commerce (eurekabookhouse.co.id), and 3PL freight & warehousing services.",
      imprints: ["SIPLah B2B School Procurement", "Eureka Retail Bookstores & E-Commerce", "40+ Branch Warehouse Nodes", "3PL Freight (Land/Sea/Air)"],
      costDrivers: ["Lease & facility overhead for 40+ branch warehouses", "Inter-island last-mile shipping freight", "Transit inventory damage & shrinkage"],
      itEnablers: [
        "Offline-First WMS & POS Edge Nodes (SQLite/PWA) across 40+ branch warehouses ensuring zero scan downtime during WAN drops.",
        "Automated SIPLah Procurement Pipeline reducing order-to-dispatch from 3 days to < 6 hours.",
        "Algorithmic Fleet Route Batching cutting last-mile delivery costs by 18%."
      ],
      kpiImpact: "99.9% Branch Warehouse Uptime · -18% Last-Mile Freight Cost",
      image: "/images/erlangga/subsidiary_ebh_risograph.jpg"
    },
    {
      id: "digital",
      name: "Erlangga Digital & EdTech Unit",
      tagline: "Cloud Platforms, Apps & CBT Exam Infrastructure",
      est: "Digital Innovation Era",
      hq: "Ciracas Cloud Datacenter",
      icon: Smartphone,
      badge: "Cloud & EdTech SaaS",
      businessModel: "Software engineering for e-learning platforms, institutional digital libraries (E-Library Erlangga), Erlangga Online / Erklika portals, and CBT exam engine licensing.",
      imprints: ["E-Library Erlangga (Digital Libraries)", "Erklika Mobile Learning App", "Erklika Lab (STEAM Virtual Lab)", "CBT Exam Engine (100k+ Concurrency)"],
      costDrivers: ["AWS/GCP Cloud compute & bandwidth egress", "Server traffic spikes during national exam seasons", "Software engineering team payroll"],
      itEnablers: [
        "Serverless Cloud Auto-Scaling Architecture (AWS ECS / GCP Cloud Run) ensuring 100% exam uptime while cutting off-peak idle cloud costs by 45%.",
        "AI Automated Essay Assessment Engine (AutoML NLP) sold as a premium school SaaS add-on (+25% ARR).",
        "Localized Edge CDN Video Streaming achieving sub-0.8s media loading across regional schools."
      ],
      kpiImpact: "-45% Off-Peak Cloud Spend · 100% CBT Exam Uptime",
      image: "/images/erlangga/subsidiary_logistics_risograph.jpg"
    },
    {
      id: "erlass",
      name: "Erlass Institute (PT Erlass)",
      tagline: "Teacher Professional Development & Consulting",
      est: "Year 2010",
      hq: "Jakarta & Regional Network",
      icon: GraduationCap,
      badge: "Professional Development",
      businessModel: "Certified teacher training workshops, school principal leadership seminars, curriculum consulting, and corporate CSR educational event management.",
      imprints: ["Teacher Credential Certification", "School Accreditation Consulting", "Curriculum Implementation Workshops", "CSR Educational Event Management"],
      costDrivers: ["Keynote speaker & trainer honorariums", "Hotel ballroom venue rentals & catering", "Physical certificate printing & courier delivery"],
      itEnablers: [
        "Self-Paced Hybrid LMS Portal expanding participant capacity 10x without venue costs (Operating margin rises from 25% to 75%+).",
        "Automated QR Hash Digital Credential Verification cutting certificate printing & mailing costs by 90%.",
        "Qontak CRM Attendee Data Sync auto-routing warm sales leads to Erlangga textbook representatives (+20% win rate)."
      ],
      kpiImpact: "10x Participant Capacity · -90% Certificate Printing Cost",
      image: "/images/erlangga/subsidiary_erlass_risograph.jpg"
    }
  ]
};

export default function ErlanggaSubsidiariesView() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");

    if (queryLang === "en" || queryLang === "id") {
      setLang(queryLang as Lang);
      localStorage.setItem("erlangga_lang", queryLang);
    } else {
      setLang("en");
    }
    setMounted(true);
  }, []);

  const toggleLang = () => {
    const nextLang: Lang = lang === "id" ? "en" : "id";
    setLang(nextLang);
    localStorage.setItem("erlangga_lang", nextLang);
  };

  const t = TRANSLATIONS[lang];
  const subsidiaries = SUBSIDIARIES_DATA[lang];

  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {/* GLOBAL HEADER WITH NAVIGATION & LANG TOGGLE */}
      <Header navItems={ERLANGGA_NAV_ITEMS} lang={lang} onToggleLang={toggleLang} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-28">
        {/* HERO SECTION MATCHING ERLANGGAPITCHVIEW */}
        <section className="space-y-10 pb-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{t.targetBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {t.heroHook}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{t.authorMeta}</span>
              </div>
            </div>
          </div>

          {/* Master 16:9 Subsidiaries Banner */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
            <div className="h-9 bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
              <span className="text-xs text-zinc-400 ml-2">Erlangga Group — Integrated Ecosystem & Subsidiary Architecture</span>
            </div>
            <div className="relative aspect-[16/9] w-full bg-[#f8f6f0] dark:bg-[#090d14] overflow-hidden">
              <img
                src="/images/erlangga/subsidiaries_hero_risograph.jpg"
                alt="Erlangga Group Integrated Ecosystem & Subsidiary Architecture Blueprint"
                className="w-full h-full object-contain object-center transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* SECTION 1: INTERACTIVE XYFLOW ECOSYSTEM ARCHITECTURE */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
              {t.archTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.archTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {t.archSubtitle}
            </p>
          </div>

          <ErlanggaEcosystemFlow lang={lang} />
        </section>

        {/* SECTION 2: 74-YEAR HISTORICAL TIMELINE (AWWWARDS STEPPER RAIL) */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
              {t.timelineTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.timelineTitle}
            </h2>
          </div>

          <ErlanggaHistoricalTimeline lang={lang} />
        </section>

        {/* SECTION 3: 5 CORE SUBSIDIARY PILLARS & PROFIT ENABLEMENT */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
              {t.subsidiaryTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.subsidiaryTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {subsidiaries.map((sub) => {
              const IconComp = sub.icon;
              return (
                <div
                  key={sub.id}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs flex flex-col lg:flex-row lg:min-h-[420px] items-stretch"
                >
                  {/* LEFT IMAGE (100% Clean Risograph Artwork) */}
                  <div className="relative h-72 lg:h-auto lg:w-80 bg-slate-950 shrink-0 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* RIGHT DETAILS CONTENT */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-600 text-white shadow-xs">
                            {sub.badge}
                          </span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                            • {sub.est} · {sub.hq}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                          {sub.name}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                          {sub.tagline}
                        </p>
                      </div>

                      {/* KPI HIGHLIGHT */}
                      <div className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 shrink-0">
                        <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400">
                          {lang === "id" ? "Target Impact ROI TI" : "Target IT ROI Impact"}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 mt-0.5">
                          {sub.kpiImpact}
                        </p>
                      </div>
                    </div>

                    {/* 3-COLUMN CONTENT GRID (Equal Baseline Heights) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-stretch">
                      {/* MODEL & PRODUCTS */}
                      <div className="space-y-2 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-blue-500" />
                            {lang === "id" ? "Model Bisnis & Imprint" : "Business Model & Portfolio"}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {sub.businessModel}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-2">
                          {sub.imprints.map((imp, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                            >
                              {imp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* COST DRIVERS */}
                      <div className="space-y-2 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-500" />
                            {lang === "id" ? "Struktur Biaya Utama" : "Key Cost Drivers"}
                          </h4>
                          <ul className="space-y-1.5">
                            {sub.costDrivers.map((cd, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                <span>{cd}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* IT PROFIT ENABLEMENT */}
                      <div className="space-y-2 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            {lang === "id" ? "Pemampu Profit Berbasis TI" : "IT Profit Enablers"}
                          </h4>
                          <ul className="space-y-1.5">
                            {sub.itEnablers.map((it, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: ENTERPRISE DATA PIPELINE MERMAID CHART */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
              {t.synergyTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.synergyTitle}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 shadow-xs overflow-hidden">
            <MermaidChart chart={PIPELINE_MERMAID[lang]} />
          </div>
        </section>

        {/* CTA FOOTER SECTION */}
        <section className="pt-10">
          <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-blue-950/20 dark:via-zinc-900 dark:to-indigo-950/20 p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              {t.sec5Title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base">
              {t.sec5Desc}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="mailto:okihita@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>{t.btnEmail}</span>
              </a>
              <a
                href="https://linkedin.com/in/okihita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>{t.btnLinkedin}</span>
              </a>
              <a
                href="https://okihita.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <Globe className="w-4 h-4" />
                <span>{t.btnPortfolio}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <p>{t.footerTitle}</p>
              <p className="font-mono">{t.footerBranch}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
