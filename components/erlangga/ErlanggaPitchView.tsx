"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import {
  CheckCircle2,
  Award,
  AlertTriangle,
  Flame,
  Zap,
  Mail,
  Globe,
  BarChart2,
  Cpu,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS DICTIONARY ---

const TRANSLATIONS = {
  id: {
    targetBadge: "PT. Penerbit Erlangga — Rencana Strategis Kandidat IT Manager",
    heroTitle: "Arsitektur Ketahanan Operasional & Akselerasi Digital",
    heroHook: "“Jika saya dipercaya memimpin divisi TI PT. Penerbit Erlangga, misi utama saya adalah memastikan infrastruktur penerbitan, distribusi 40+ cabang, dan platform digital beroperasi dengan uptime 99.9%, sembari mentransformasi TI menjadi penggerak pertumbuhan bisnis yang proaktif.”",
    authorMeta: "Okihita H. Sihaloho, S.T. (ITB) · Calon IT Manager",
    
    linkTechSpecs: "Spesifikasi Teknis",

    // Section Titles
    storyTag: "Peta Jalan 3 Bulan",
    storyTitle: "Rencana Kepemimpinan TI Eksekutif",
    
    unitsTag: "Akselerator Pendapatan Bisnis",
    unitsTitle: "Transformasi TI Erlangga: Dari Pusat Biaya Menjadi Penggerak Profitabilitas",

    scenarioTag: "Simulasi Penanganan Risiko",
    scenarioTitle: "Penyelesaian Masalah Operasional Berisiko Tinggi",
    
    riskTag: "Tata Kelola Risiko",
    riskTitle: "Antisipasi & Mitigasi Risiko Perusahaan",
    
    roiTag: "Kinerja Kunci",
    roiTitle: "Target Indikator Kinerja (KPIs)",
    
    fitTag: "Evaluasi Kualifikasi",
    sec4Title: "Matriks Kesesuaian Kandidat",

    sec5Title: "Siap Memimpin Transformasi Teknologi Erlangga",
    sec5Desc: "Saya siap mendiskusikan rencana strategis ini dan mengeksplorasi bagaimana pengalaman saya dapat mendukung pencapaian target PT. Penerbit Erlangga.",

    thReq: "Persyaratan Jobstreet",
    thMatch: "Rekam Jejak Okihita",
    thStatus: "Kesesuaian",
    thRisk: "Potensi Risiko Perusahaan",
    thImpact: "Dampak Terhadap Bisnis",
    thMitigation: "Strategi Mitigasi TI",

    btnEmail: "Kirim Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    btnPortfolio: "okihita.com",
    footerTitle: "Proposal Strategis TI — PT. Penerbit Erlangga",
    footerBranch: "Branch: erlangga"
  },
  en: {
    targetBadge: "PT. Penerbit Erlangga — IT Manager Candidate Strategy",
    heroTitle: "Architecting Operational Resilience & Digital Growth",
    heroHook: "“If trusted to lead PT. Penerbit Erlangga's IT division, my mission is clear: to ensure our publishing, 40+ branch logistics, and digital platforms operate with 99.9% uptime, while transforming IT into a proactive business enabler.”",
    authorMeta: "Okihita H. Sihaloho, B.Eng. (ITB) · IT Manager Candidate",

    linkTechSpecs: "Technical Specs",

    // Section Titles
    storyTag: "3-Month Plan",
    storyTitle: "Executive IT Leadership Roadmap",

    unitsTag: "Business Revenue Enabler",
    unitsTitle: "Erlangga IT Transformation: From Cost Center to Profit Enabler",

    scenarioTag: "Risk Simulations",
    scenarioTitle: "High-Stakes Operational Problem Solving",

    riskTag: "Risk Governance",
    riskTitle: "Enterprise IT Risk Mitigation",

    roiTag: "Key Benchmarks",
    roiTitle: "Core Performance Targets (KPIs)",

    fitTag: "Qualification Fit",
    sec4Title: "Candidate Alignment Matrix",

    sec5Title: "Ready to Drive Technical Leadership for Erlangga",
    sec5Desc: "I welcome the opportunity to discuss this strategic roadmap and explore how my engineering background supports PT. Penerbit Erlangga.",

    thReq: "Jobstreet Requirement",
    thMatch: "Okihita's Background",
    thStatus: "Fit Status",
    thRisk: "Potential Enterprise Risk",
    thImpact: "Business Impact",
    thMitigation: "IT Mitigation Strategy",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    btnPortfolio: "okihita.com",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

// --- STORY CHAPTERS ---

const EXECUTIVE_STORY_DATA = {
  id: [
    {
      chapter: 1,
      month: "Bulan 1 (Hari 1–30)",
      title: "Audit Data, Pemetaan Infra & Alignment Bisnis",
      narrative: "Di bulan pertama, saya berfokus mewawancarai kepala cabang regional dan mengaudit integritas skema data di Microsoft Dynamics ERP, Qontak CRM, dan Darwinbox HRMS untuk memastikan keselarasan penuh.",
      whyRationale: "Mengapa: Membangun dasbor otomatis di atas data yang belum diaudit menciptakan laporan menyesatkan yang merusak kepercayaan Direksi. Kualitas data harus diverifikasi terlebih dahulu.",
      actions: [
        "Audit skema & kesehatan data komprehensif di Microsoft Dynamics ERP, Qontak CRM, dan Darwinbox HRMS.",
        "Wawancara penemuan terstruktur 1-on-1 dengan 40+ kepala cabang regional dan jajaran Direksi (CFO/COO).",
        "Evaluasi ketahanan jaringan WAN cabang, kesiapan Pemulihan Bencana (DRP), dan posisi SecOps."
      ],
      milestones: [
        "Laporan Evaluasi Kesehatan TI Hari ke-30",
        "Cetak Biru Metrik Dasbor Eksekutif",
        "Audit Skema Basis Data Dynamics ERP 100%",
        "Visibilitas Jaringan 40+ Cabang & Cetak Biru DRP"
      ],
      image: "/images/erlangga/month1_risograph.jpg"
    },
    {
      chapter: 2,
      month: "Bulan 2 (Hari 31–60)",
      title: "Integrasi Pipa Data & Peluncuran Dasbor Eksekutif Real-Time",
      narrative: "Setelah skema data diverifikasi dan indikator utama (KPI) disepakati bersama Direksi, saya membangun pipa data ETL otomatis yang menghubungkan gudang cabang dan node POS/WMS ke data warehouse terpusat, lalu meluncurkan versi awal Dasbor Eksekutif PowerBI.",
      whyRationale: "Mengapa: Direksi membutuhkan transparansi real-time atas pergerakan stok cabang dan SLA sistem untuk menggeser operasional Erlangga dari sekadar merespons masalah secara reaktif menjadi mengambil keputusan bisnis berbasis data presisi.",
      actions: [
        "Membangun pipa data ETL otomatis dari node gudang cabang ke data warehouse terpusat.",
        "Meluncurkan versi awal Dasbor Eksekutif PowerBI dengan Sistem Penilaian Kesehatan Group.",
        "Menyusun proyeksi anggaran tahunan TI DevOps & SecOps yang selaras dengan kapasitas sistem."
      ],
      milestones: [
        "Dasbor Eksekutif PowerBI Live (Single Source of Truth)",
        "MVP Sistem Penilaian Otomatis Erlangga Group",
        "Pipa Data ETL Otomatis Gudang-Ke-Warehouse",
        "Proyeksi Anggaran TI 1-Tahun (DevOps & SecOps)"
      ],
      image: "/images/erlangga/month2_risograph.jpg"
    },
    {
      chapter: 3,
      month: "Bulan 3 (Hari 61–90)",
      title: "Penguatan Operasional Cabang & Persiapan Inovasi Masa Depan",
      narrative: "Dengan dasbor real-time yang sudah aktif, saya mengidentifikasi dan mengurai hambatan operasional di cabang-cabang yang kurang efisien, menerapkan protokol keamanan SecOps di seluruh Indonesia, serta memulai proyek percontohan otomatisasi AI/AutoML internal.",
      whyRationale: "Mengapa: Menyeragamkan tata kelola TI cabang menjamin mutu layanan yang konsisten di seluruh Indonesia, sementara uji coba AI memastikan divisi TI Erlangga siap menyongsong inovasi pembelajaran digital masa depan.",
      actions: [
        "Mengidentifikasi dan mengurai hambatan operasional di cabang-cabang yang kurang efisien.",
        "Menyeragamkan protokol keamanan SecOps dan alur kerja dukungan TI (ITSM) di seluruh Indonesia.",
        "Memfinalisasi Master Plan Strategis TI 2026–2027 dan memulai proyek percontohan AI/AutoML internal."
      ],
      milestones: [
        "Master Plan Strategis TI Erlangga Group (2026–2027)",
        "Laporan Optimasi SLA 40+ Cabang Regional",
        "Standarisasi Protokol Jaringan & SecOps Indonesia",
        "Pilot Otomatisasi AI/AutoML Internal"
      ],
      image: "/images/erlangga/month3_risograph.jpg"
    }
  ],
  en: [
    {
      chapter: 1,
      month: "Month 1 (Days 1–30)",
      title: "Data Audit, Infra Mapping & Business Alignment",
      narrative: "In my first month, I focus on interviewing regional branch leads and auditing data schema integrity across Microsoft Dynamics ERP, Qontak CRM, and Darwinbox HRMS.",
      whyRationale: "Why: Building automated dashboards on top of unaudited data creates misleading reports that destroy executive trust. Data quality must be verified first.",
      actions: [
        "Conduct a full schema & data health audit across Microsoft Dynamics ERP, Qontak CRM, and Darwinbox HRMS.",
        "Hold structured 1-on-1 discovery interviews with 40+ regional branch leads and C-Level executives (CFO/COO).",
        "Evaluate branch WAN network resilience, Disaster Recovery Plan (DRP) readiness, and endpoint SecOps posture."
      ],
      milestones: [
        "Day 30 IT Health Assessment Report",
        "Executive Dashboard Metrics Blueprint",
        "100% Dynamics ERP Database Schema Audit",
        "40+ Branch Network Visibility & DRP Blueprint"
      ],
      image: "/images/erlangga/month1_risograph.jpg"
    },
    {
      chapter: 2,
      month: "Month 2 (Days 31–60)",
      title: "Data Pipeline Integration & Live Executive Dashboard",
      narrative: "With data schemas audited and C-level KPIs agreed upon, I construct automated ETL pipelines connecting branch nodes to a central data warehouse and launch the PowerBI Executive Dashboard.",
      whyRationale: "Why: Executive leadership needs real-time visibility into branch inventory velocity and system SLAs to shift Erlangga from reactive firefighting to data-driven decision-making.",
      actions: [
        "Construct automated ETL data pipelines connecting regional warehouse nodes to a central data warehouse.",
        "Deploy MVP Live PowerBI Executive Dashboard featuring automated Group Health Scoring.",
        "Formulate 1-year DevOps & SecOps budget projections aligned with system capacity needs."
      ],
      milestones: [
        "Live PowerBI Executive Dashboard (Single Source of Truth)",
        "Automated Erlangga Group Scoring System MVP",
        "Automated Warehouse-to-Data Warehouse ETL Pipelines",
        "1-Year DevOps & SecOps IT Budget Projections"
      ],
      image: "/images/erlangga/month2_risograph.jpg"
    },
    {
      chapter: 3,
      month: "Month 3 (Days 61–90)",
      title: "Branch Optimization & Next-Gen Innovation",
      narrative: "Using real-time dashboard scores, I target operational bottlenecks in branch fulfillment, standardize SecOps security protocols across 40+ branches, and pilot AI/AutoML internal tools.",
      whyRationale: "Why: Standardizing regional IT operations ensures consistent service quality nationwide, while piloting AI prepares Erlangga for its next decade of educational leadership.",
      actions: [
        "Target and resolve operational bottlenecks in underperforming regional branch fulfillment workflows.",
        "Roll out standardized ITSM support workflows and SecOps protocols across all regional branches.",
        "Finalize Erlangga IT Strategic Master Plan (2026–2027) and initiate internal AI/AutoML pilots."
      ],
      milestones: [
        "Erlangga Group IT Strategic Master Plan (2026–2027)",
        "40+ Regional Branch SLA Optimization Report",
        "Standardized Nationwide SecOps & Network Protocols",
        "Internal AI/AutoML Automation Pilot"
      ],
      image: "/images/erlangga/month3_risograph.jpg"
    }
  ]
};

// --- ERLANGGA BUSINESS UNITS & IT VALUE ENABLER DATA ---

const ERLANGGA_BUSINESS_UNITS_DATA = {
  id: [
    {
      id: "publishing",
      unit: "Penerbitan Buku Edukasi & Cetak",
      subTitle: "Erlangga Educational Publishing",
      traditionalView: "Pusat Biaya: Stok naskah menumpuk, biaya cetak ulang berlebih, dan tenggat waktu penyuntingan manual.",
      enablerValue: "Penggerak Profitabilitas: Prediksi Permintaan Berbasis ML & Print-On-Demand (POD) Presisi.",
      impact: "Memangkas pemborosan stok berlebih 35% & mempercepat siklus cetak ulang dari 14 hari menjadi 48 jam.",
      badge: "Efisiensi Cetak & Kecepatan",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "edtech",
      unit: "Erlangga Online & Platform EdTech",
      subTitle: "Digital Learning & Online Exams (CBT)",
      traditionalView: "Pusat Biaya: Tagihan server cloud berlebih dan pengeluaran beban trafik ujian nasional.",
      enablerValue: "Penggerak Profitabilitas: Paket Lisensi SaaS B2B Sekolah & Konten Digital Berlangganan.",
      impact: "Membuka arus pendapatan berulang (Recurring Revenue) dari 5.000+ sekolah mitra di seluruh Indonesia.",
      badge: "Pendapatan Digital Berulang (B2B SaaS)",
      image: "/images/erlangga/risk_cbt_surge_risograph.jpg"
    },
    {
      id: "logistics",
      unit: "Rantai Pasok & Distribusi 40+ Cabang",
      subTitle: "National Supply Chain & Regional WMS",
      traditionalView: "Pusat Biaya: Sewa gudang regional, pemeliharaan armada, dan biaya pemeliharaan TI cabang.",
      enablerValue: "Penggerak Profitabilitas: Routing Stok Presisi WMS/POS Real-Time & Pemenuhan Langsung ke Sekolah.",
      impact: "Memangkas siklus pengiriman 50% & menghilangkan potensi kerugian penjualan akibat stok habis.",
      badge: "Percepatan Perputaran Stok Cabang",
      image: "/images/erlangga/subsidiary_ebh_risograph.jpg"
    },
    {
      id: "commercial",
      unit: "Penerbitan Komersial & Imprint Group",
      subTitle: "Commercial Imprints (Esensi, Phibeta, Emira)",
      traditionalView: "Pusat Biaya: Biaya pajangan toko buku fisik dan diskon konsinyasi ritel.",
      enablerValue: "Penggerak Profitabilitas: Integrasi Multi-Channel E-Commerce D2C & Otomatisasi Penjualan 24/7.",
      impact: "Menghubungkan katalog ke Tokopedia, Shopee, dan TikTok Shop secara otomatis dengan rekonsiliasi instan.",
      badge: "Penjualan Langsung D2C 24/7",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    },
    {
      id: "higher-ed",
      unit: "Buku Perguruan Tinggi & Jurnal Ilmiah",
      subTitle: "Higher Education & Professional Reference",
      traditionalView: "Pusat Biaya: Distribusi fisik terbatas ke perpustakaan kampus dan biaya cetak edisi khusus.",
      enablerValue: "Penggerak Profitabilitas: Portal Library Digital (e-Book License) & Berlangganan Kampus SaaS.",
      impact: "Monetisasi lisensi perpustakaan digital kampus & penetrasi pasar 4.500+ perguruan tinggi secara langsung.",
      badge: "Lisensi Perpustakaan Digital B2B",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "training-center",
      unit: "Erlangga Training Center & Sertifikasi Guru",
      subTitle: "Teacher Professional Development & Workshops",
      traditionalView: "Pusat Biaya: Biaya sewa aula seminar lokal dan logistik pengoperasian pelatihan tatap muka.",
      enablerValue: "Penggerak Profitabilitas: Platform Event Hybrid & LMS Sertifikasi Guru Terintegrasi Payment Gateway.",
      impact: "Menciptakan pendapatan baru dari biaya pendaftaran webinar/pelatihan guru berlisensi nasional (100k+ peserta).",
      badge: "Pendapatan Pelatihan Hybrid",
      image: "/images/erlangga/subsidiary_erlass_risograph.jpg"
    },
    {
      id: "printing-hub",
      unit: "Percetakan Komersial & Erlangga Print Hub",
      subTitle: "Industrial Printing Services & Third-Party Contracts",
      traditionalView: "Pusat Biaya: Kapasitas pabrik cetak idle saat di luar musim puncak pendaftaran sekolah.",
      enablerValue: "Penggerak Profitabilitas: Portal B2B Job Tracking & Marketplace Kapasitas Cetak Pihak Ketiga.",
      impact: "Mengubah kapasitas idle mesin cetak pabrik menjadi pendapatan tambahan dari klien komersial eksternal.",
      badge: "Monetisasi Kapasitas Mesin Cetak",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    }
  ],
  en: [
    {
      id: "publishing",
      unit: "Educational Publishing & Print",
      subTitle: "Erlangga Educational Publishing",
      traditionalView: "Cost Center View: Paper inventory holding costs, re-printing overhead, and manual proofreading bottlenecks.",
      enablerValue: "Profit Enabler: ML Demand Forecasting & Precision Print-On-Demand (POD).",
      impact: "Cuts overprinting inventory waste by 35% & accelerates reprint turnarounds from 14 days to 48 hours.",
      badge: "Print Efficiency & Speed",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "edtech",
      unit: "Erlangga Online & EdTech Platforms",
      subTitle: "Digital Learning & Online Exams (CBT)",
      traditionalView: "Cost Center View: Hosting server bills and peak exam CDN bandwidth expenses.",
      enablerValue: "Profit Enabler: B2B School SaaS Licensing & Subscription Digital Content.",
      impact: "Generates recurring B2B digital revenue streams across 5,000+ partner schools nationwide.",
      badge: "B2B SaaS Recurring Revenue",
      image: "/images/erlangga/risk_cbt_surge_risograph.jpg"
    },
    {
      id: "logistics",
      unit: "National Supply Chain & 40+ Hubs",
      subTitle: "Regional WMS & Branch Logistics",
      traditionalView: "Cost Center View: Warehouse leases, fleet logistics, and local branch IT maintenance.",
      enablerValue: "Profit Enabler: Real-Time WMS/POS Inventory Routing & Direct School Fulfillment.",
      impact: "Cuts delivery lead time by 50% & eliminates stockout revenue leakage across 40+ regional hubs.",
      badge: "Inventory Velocity Enabler",
      image: "/images/erlangga/subsidiary_ebh_risograph.jpg"
    },
    {
      id: "commercial",
      unit: "Commercial Imprints & Trade Books",
      subTitle: "Commercial Imprints (Esensi, Phibeta, Emira)",
      traditionalView: "Cost Center View: Bookstore shelf placement fees and consignment retail discounts.",
      enablerValue: "Profit Enabler: Multi-Channel D2C E-Commerce Integration & Automated Sales.",
      impact: "Syncs inventory to Tokopedia, Shopee, and TikTok Shop with automated real-time invoice reconciliation.",
      badge: "24/7 Direct-to-Consumer Growth",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    },
    {
      id: "higher-ed",
      unit: "Higher Education & Academic Journals",
      subTitle: "University Textbooks & Reference Portal",
      traditionalView: "Cost Center View: Limited physical distribution to campus libraries and low-volume print runs.",
      enablerValue: "Profit Enabler: Digital Library Portal (e-Book Licensing) & Campus SaaS Subscriptions.",
      impact: "Monetizes campus digital library licenses & directly reaches 4,500+ universities nationwide.",
      badge: "B2B Digital Campus Licensing",
      image: "/images/erlangga/subsidiary_pe_risograph.jpg"
    },
    {
      id: "training-center",
      unit: "Erlangga Training Center & Certification",
      subTitle: "Teacher Professional Seminars & Workshops",
      traditionalView: "Cost Center View: Local seminar hall rental fees and physical workshop logistics overhead.",
      enablerValue: "Profit Enabler: Hybrid Event Platform & Teacher Certification LMS with Payment Gateways.",
      impact: "Creates new recurring revenues from certified teacher national training programs (100k+ attendees).",
      badge: "Hybrid Training Monetization",
      image: "/images/erlangga/subsidiary_erlass_risograph.jpg"
    },
    {
      id: "printing-hub",
      unit: "Industrial Printing & Erlangga Print Hub",
      subTitle: "Commercial Printing & Packaging Contracts",
      traditionalView: "Cost Center View: Idle printing press factory capacity during off-peak school seasons.",
      enablerValue: "Profit Enabler: B2B Job Tracking Portal & Third-Party Printing Capacity Marketplace.",
      impact: "Converts off-peak idle printing press capacity into high-margin revenue from external commercial clients.",
      badge: "Press Capacity Monetization",
      image: "/images/erlangga/subsidiary_gap_risograph.jpg"
    }
  ]
};

// --- SIMULATION SCENARIOS ---

const CASE_SCENARIOS_DATA = {
  id: [
    {
      id: "school-opening",
      icon: Flame,
      tag: "Puncak Juli",
      title: "Lonjakan Pesanan Masuk Sekolah",
      context: "Jutaan pesanan buku pelajaran membanjiri ERP Dynamics dan gudang cabang secara bersamaan.",
      action: "Menerapkan load balancing, pemrosesan antrean pesanan, scaling read-replica basis data, dan frozen code window agar sistem tidak pernah crash.",
      result: "Pemenuhan pesanan berjalan lancar dengan visibilitas stok real-time.",
      image: "/images/erlangga/risk_july_spike_risograph.jpg"
    },
    {
      id: "exam-season",
      icon: Zap,
      tag: "Erlangga Digital",
      title: "Lonjakan Ujian Online Nasional (CBT)",
      context: "Ratusan ribu siswa mengakses platform Erlangga Digital secara bersamaan untuk ujian nasional.",
      action: "Mengembangkan microservices cloud auto-scaling di GCP/AWS dengan CDN edge caching, terpisah dari basis data ERP transaksional.",
      result: "Uptime 100% selama ujian nasional dengan biaya cloud terkendali.",
      image: "/images/erlangga/risk_cbt_surge_risograph.jpg"
    },
    {
      id: "branch-outage",
      icon: AlertTriangle,
      tag: "Jaringan Cabang",
      title: "Putusnya Fiber Optik Cabang Regional",
      context: "Kabel fiber optik terputus di cabang regional (e.g. Kupang / Medan), memutuskan koneksi internet gudang ke HQ.",
      action: "Menggunakan arsitektur WMS/POS offline-first berbasis edge caching lokal. Data tersinkronisasi otomatis saat internet pulih.",
      result: "Pengiriman buku cabang tetap berjalan tanpa hambatan meski jaringan publik terputus.",
      image: "/images/erlangga/risk_wan_outage_risograph.jpg"
    }
  ],
  en: [
    {
      id: "school-opening",
      icon: Flame,
      tag: "July Peak",
      title: "School Opening Season Order Spike",
      context: "Millions of textbook orders flood ERP Dynamics and branch warehouses simultaneously.",
      action: "Implement load balancing, queue-based order processing, database read-replica scaling, and peak-season frozen code windows.",
      result: "Order fulfillment runs uninterrupted with real-time stock visibility.",
      image: "/images/erlangga/risk_july_spike_risograph.jpg"
    },
    {
      id: "exam-season",
      icon: Zap,
      tag: "National Exam Traffic Spike (CBT)",
      title: "National Exam Traffic Spike (CBT)",
      context: "Hundreds of thousands of students take online exams on Erlangga Digital simultaneously.",
      action: "Deploy auto-scaling cloud microservices on GCP/AWS with CDN edge caching, decoupled from transactional ERP backends.",
      result: "100% uptime during national exam windows with optimized cloud expenditure.",
      image: "/images/erlangga/risk_cbt_surge_risograph.jpg"
    },
    {
      id: "branch-outage",
      icon: AlertTriangle,
      tag: "Branch Network",
      title: "Regional Branch Fiber Cut",
      context: "A major fiber cut disconnects a regional branch warehouse from HQ servers.",
      action: "Utilize offline-first WMS/POS local caching so warehouse staff continue scanning and shipping books, auto-syncing transactions once online.",
      result: "Zero disruption to warehouse shipments despite network outages.",
      image: "/images/erlangga/risk_wan_outage_risograph.jpg"
    }
  ]
};

// --- RISK MITIGATION MATRIX ---

const RISK_MATRIX_DATA = {
  id: [
    {
      risk: "Resistensi Karyawan terhadap Sistem Komputerisasi Baru",
      impact: "Adopsi sistem lambat dan timbul kesalahan pemrosesan manual.",
      mitigation: "Pelatihan terstruktur di cabang, panduan pengguna intuitif, dan peluncuran bertahap (phased rollout)."
    },
    {
      risk: "Vendor Lock-in & Inflasi Biaya Lisensi SaaS/ERP",
      impact: "Ketergantungan biaya lisensi tahunan yang membengkak.",
      mitigation: "Membangun lapisan middleware API-first sehingga logika bisnis tetap dimiliki Erlangga."
    },
    {
      risk: "Ancaman Keamanan Siber & Kebocoran Data Perusahaan",
      impact: "Kerusakan reputasi brand dan risiko regulasi data.",
      mitigation: "Menerapkan keamanan Zero Trust, proteksi EDR di seluruh endpoint cabang, dan kontrol akses RBAC."
    }
  ],
  en: [
    {
      risk: "Employee Resistance to New Computerized Workflows",
      impact: "Slow system adoption and manual operational errors.",
      mitigation: "Conduct hands-on branch training, create simple user guides, and implement gradual phased rollouts."
    },
    {
      risk: "SaaS & ERP Vendor Lock-in & Licensing Inflation",
      impact: "Uncontrolled growth in annual software licensing costs.",
      mitigation: "Build API-first middleware abstractions so business logic remains owned by Erlangga."
    },
    {
      risk: "Cyber Security Threats & Corporate Data Leaks",
      impact: "Reputational damage and regulatory non-compliance.",
      mitigation: "Enforce Zero Trust network access, endpoint EDR protection, and strict role-based access control."
    }
  ]
};

// --- ROI METRICS ---

const ROI_BENCHMARKS_DATA = {
  id: [
    { metric: "99.9%", label: "Uptime Sistem ERP & Pemrosesan Pesanan Utama" },
    { metric: "< 2 Jam", label: "Target Pemulihan Bencana RTO (Disaster Recovery)" },
    { metric: "30% Lebih Cepat", label: "Resolusi Tiket Dukungan TI Cabang" },
    { metric: "< 1 Detik", label: "Waktu Respon Konten Erlangga Digital" }
  ],
  en: [
    { metric: "99.9%", label: "Core ERP & Order Processing Uptime" },
    { metric: "< 2 Hours", label: "Disaster Recovery Target RTO" },
    { metric: "30% Faster", label: "Branch IT Support Resolution Time" },
    { metric: "Sub-Second", label: "Erlangga Digital Content Delivery Speed" }
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

export default function ErlanggaPitchView() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryLang = params.get("lang");
      if (queryLang === "en" || queryLang === "id") {
        return queryLang as Lang;
      }
      const saved = localStorage.getItem("erlangga_lang");
      if (saved === "en" || saved === "id") {
        return saved as Lang;
      }
    }
    return "en";
  });
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  const toggleLang = () => {
    const nextLang: Lang = lang === "id" ? "en" : "id";
    setLang(nextLang);
    localStorage.setItem("erlangga_lang", nextLang);
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -560 : 560;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const t = TRANSLATIONS[lang];
  const storyChapters = EXECUTIVE_STORY_DATA[lang];
  const businessUnits = ERLANGGA_BUSINESS_UNITS_DATA[lang];
  const caseScenarios = CASE_SCENARIOS_DATA[lang];
  const riskMatrix = RISK_MATRIX_DATA[lang];
  const roiBenchmarks = ROI_BENCHMARKS_DATA[lang];
  const alignmentMatrix = ALIGNMENT_MATRIX_DATA[lang];

  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <Header navItems={ERLANGGA_NAV_ITEMS} lang={lang} onToggleLang={toggleLang} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-28">
        {/* --- HERO SECTION --- */}
        <section className="space-y-10 pb-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>{t.targetBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              {t.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {t.heroHook}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{t.authorMeta}</span>
              </div>
            </div>
          </div>

          {/* Unsplash Hero Dashboard Illustration */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl dark:shadow-2xl">
            <div className="h-9 bg-zinc-100 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
              <span className="text-sm text-zinc-400 ml-2">Erlangga Group — Executive Command Center (PowerBI Live Preview)</span>
            </div>
            <div className="relative aspect-[16/9] w-full bg-[#f8f6f0] dark:bg-[#090d14] overflow-hidden">
              <img
                src="/images/erlangga/hero_risograph.jpg"
                alt="Erlangga Group Digital Transformation Blueprint"
                className="w-full h-full object-contain object-center transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* === STORY MODE: 3 CHAPTER ROADMAP (EXECUTIVE SUMMARY) === */}
        <section className="w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1500px] mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
                  {t.storyTag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t.storyTitle}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {storyChapters.map((ch) => (
                <div
                  key={ch.chapter}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square w-full bg-[#f8f6f0] dark:bg-zinc-900 overflow-hidden">
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="p-6 sm:p-7 space-y-5">
                      <div className="space-y-3">
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                          {lang === "id" ? `Bulan ${ch.chapter}` : `Month ${ch.chapter}`}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                          {ch.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {ch.narrative}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 font-bold">
                      <Award className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>{lang === "id" ? "Capaian Utama:" : "Key Milestones:"}</span>
                    </div>
                    <ul className="space-y-1 pl-6 list-disc text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                      {ch.milestones.map((ms, idx) => (
                        <li key={idx}>{ms}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-center">
              <Link
                href="/erlangga/roadmap"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold transition-all shadow-xs cursor-pointer hover:gap-3"
              >
                <span>{lang === "id" ? "Buka Peta Jalan 3-Bulan & Rencana Eksekusi Lengkap" : "Open Full 3-Month Roadmap & Execution Plan"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* === WEBFLOW-STYLE EDITORIAL NARRATIVE BREAK BLOCK === */}
        <section className="py-4">
          <div className="w-full md:w-[60%] mx-auto space-y-6 text-left">
            <p className="text-xl sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {lang === "id"
                ? "Divisi TI di Penerbit Erlangga tidak sekadar menjaga server beroperasi. TI adalah katalis utama yang memangkas biaya pemborosan cetak hingga 35%, mengotomatiskan perputaran stok di 40+ cabang regional, dan membuka arus pendapatan berulang (Recurring Revenue) dari platform EdTech B2B SaaS."
                : "IT at Penerbit Erlangga goes far beyond maintaining server uptime. It is the core catalyst cutting overprinting inventory waste by 35%, accelerating stock velocity across 40+ regional hubs, and unlocking B2B SaaS recurring digital revenue."}
            </p>
          </div>
        </section>

        {/* === ERLANGGA BUSINESS UNITS & IT PROFIT ENABLER CAROUSEL (WEBFLOW STYLE) === */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
                {t.unitsTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {t.unitsTitle}
              </h2>
            </div>

            {/* Webflow Style Left / Right Navigation Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="w-screen relative left-1/2 -translate-x-1/2 flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 px-4 sm:px-6 lg:px-[calc((100vw-1280px)/2+1.5rem)] scroll-smooth scrollbar-none"
          >
            {businessUnits.map((bu) => (
              <div
                key={bu.id}
                className="w-[88vw] max-w-[580px] sm:w-[580px] shrink-0 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-sm flex flex-col sm:flex-row justify-between"
              >
                {/* Left Portrait Image Container (Aspect 3:4 Original Artwork Ratio) */}
                <div className="relative w-full sm:w-[220px] aspect-[3/4] shrink-0 bg-[#f8f6f0] dark:bg-zinc-950 overflow-hidden border-b sm:border-b-0 sm:border-r border-zinc-200/80 dark:border-zinc-800">
                  <img src={bu.image} alt={bu.unit} className="w-full h-full object-cover object-center" />
                </div>

                {/* Right Details Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                        {bu.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">{bu.unit}</h3>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{bu.subTitle}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                      <span className="font-semibold block text-emerald-700 dark:text-emerald-400 mb-1">
                        {lang === "id" ? "Transformasi Akselerasi TI:" : "IT Acceleration Enabler:"}
                      </span>
                      {bu.enablerValue}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2.5 text-sm text-blue-700 dark:text-blue-400 font-semibold border-t border-zinc-100 dark:border-zinc-800/80">
                    <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{lang === "id" ? "Dampak Bisnis:" : "Business Impact:"} {bu.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === SIMULATION CASE SCENARIOS === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.scenarioTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.scenarioTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseScenarios.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden space-y-0 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] w-full bg-white dark:bg-zinc-950 overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="px-6 space-y-3 pt-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                          {item.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{item.title}</h3>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.context}
                      </p>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-700/60 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {item.action}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4 flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{item.result}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See All Risk Simulations Button */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/erlangga/risk-simulations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold transition-all shadow-xs cursor-pointer hover:gap-3"
            >
              <span>{lang === "id" ? "Lihat Semua Simulasi Risiko (6)" : "See All Risk Simulations (6)"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* --- RISK MITIGATION MATRIX --- */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.riskTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.riskTitle}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 text-sm text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
                    <th className="py-4 px-5 font-semibold">{t.thRisk}</th>
                    <th className="py-4 px-5 font-semibold">{t.thImpact}</th>
                    <th className="py-4 px-5 font-semibold">{t.thMitigation}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                  {riskMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors">
                      <td className="py-4 px-5 font-medium text-zinc-900 dark:text-zinc-100 max-w-xs">{row.risk}</td>
                      <td className="py-4 px-5 text-zinc-600 dark:text-zinc-400 max-w-xs">{row.impact}</td>
                      <td className="py-4 px-5 text-zinc-700 dark:text-zinc-300 max-w-md">{row.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- ROI BENCHMARKS --- */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.roiTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.roiTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roiBenchmarks.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 block tracking-tight">
                  {item.metric}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 block font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- CANDIDATE FIT MATRIX --- */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.fitTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.sec4Title}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 text-sm text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
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
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
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
              {t.sec5Title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.sec5Desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:okihita@gmail.com?subject=Diskusi%20IT%20Manager%20-%20PT.%20Penerbit%20Erlangga"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.btnEmail}</span>
            </a>

            <a
              href="https://linkedin.com/in/okihita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-colors cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>{t.btnLinkedin}</span>
            </a>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 bg-white dark:bg-[#09090b]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
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
