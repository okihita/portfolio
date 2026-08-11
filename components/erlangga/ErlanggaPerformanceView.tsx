"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import ErlanggaFooter from "./ErlanggaFooter";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import {
  CheckCircle2,
  Mail,
  Search,
  Filter
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

// --- TYPES ---
type Lang = "id" | "en";
type MatrixCategory = "all" | "credentials" | "tech" | "leadership" | "operations" | "budgeting";

interface BenchmarkItem {
  metric: string;
  label: string;
  detail: string;
}

interface QualificationItem {
  id: string;
  category: MatrixCategory;
  requirement: {
    id: string;
    en: string;
  };
  candidateMatch: {
    id: string;
    en: string;
  };
  evidence: {
    id: string;
    en: string;
  };
  status: {
    id: string;
    en: string;
  };
}

// --- DATA ---

const TRANSLATIONS = {
  id: {
    targetBadge: "Kualifikasi & Tolok Ukur Kinerja TI",
    heroTitle: "Matriks Keselarasan Kualifikasi Manajer TI Erlangga",
    heroDesc: "Analisis komprehensif memetakan 17 persyaratan utama posisi Manajer TI PT Penerbit Erlangga terhadap rekam jejak, kapabilitas teknis, dan kepemimpinan Okihita H. Sihaloho.",
    authorMeta: "Disiapkan oleh Okihita H. Sihaloho — Berbasis Data Rekam Jejak Enterprise",
    benchmarksTag: "Tolok Ukur Kinerja Utama",
    benchmarksTitle: "Target Kinerja TI & Imbal Hasil Investasi (ROI)",
    matrixTag: "Evaluasi Keselarasan Lowongan Kerja",
    matrixTitle: "Matriks Evaluasi 17 Persyaratan Kualifikasi Manajer TI",
    filterLabel: "Filter Kategori Persyaratan:",
    searchPlaceholder: "Cari persyaratan, teknologi, atau rekam jejak kandidat...",
    ctaTitle: "Diskusikan Kualifikasi & Strategi Eksekusi TI",
    ctaDesc: "Siap memberikan paparan teknis dan mendalam mengenai implementasi strategi TI untuk PT Penerbit Erlangga.",
    btnEmail: "Kirim Email Diskusi",
    btnLinkedin: "Profil LinkedIn",
    footerTitle: "PT. Penerbit Erlangga — Manajer Teknologi Informasi",
    footerBranch: "Cabang Git: erlangga"
  },
  en: {
    targetBadge: "IT Performance & Qualifications Benchmark",
    heroTitle: "Erlangga IT Manager Qualification Alignment Matrix",
    heroDesc: "A comprehensive analysis mapping all 17 key requirements from the PT Penerbit Erlangga IT Manager job description against Okihita H. Sihaloho's technical track record and enterprise leadership.",
    authorMeta: "Prepared by Okihita H. Sihaloho — Powered by Enterprise Engineering Data",
    benchmarksTag: "Key Performance Benchmarks",
    benchmarksTitle: "Target IT Operational Benchmarks & ROI Metrics",
    matrixTag: "Job Vacancy Alignment Evaluation",
    matrixTitle: "17-Point IT Manager Qualification & Capability Matrix",
    filterLabel: "Filter Requirement Category:",
    searchPlaceholder: "Search requirements, tech stack, or candidate credentials...",
    ctaTitle: "Discuss Qualifications & IT Execution Plan",
    ctaDesc: "Ready for an in-depth technical discussion and strategic alignment interview for PT Penerbit Erlangga.",
    btnEmail: "Send Discussion Email",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "PT. Penerbit Erlangga — Information Technology Manager",
    footerBranch: "Git Branch: erlangga"
  }
};

const KEY_BENCHMARKS_DATA: Record<Lang, BenchmarkItem[]> = {
  id: [
    {
      metric: "99.9%",
      label: "Uptime Sistem ERP & Transaksi Pesanan",
      detail: "Menjamin ketersediaan sistem Microsoft Dynamics ERP & portal pemrosesan pesanan cabang tanpa hambatan."
    },
    {
      metric: "< 15 Menit",
      label: "Target RTO Pemulihan Bencana (Disaster Recovery)",
      detail: "Arsitektur multi-region failover memastikan RTO < 15m dan RPO < 5m saat terjadi gangguan darurat."
    },
    {
      metric: "30% Lebih Cepat",
      label: "Resolusi Tiket Dukungan TI Cabang",
      detail: "Standardisasi SOP & otomatisasi antrean memangkas waktu penanganan masalah TI di 40+ cabang regional."
    },
    {
      metric: "< 1 Detik",
      label: "Kecepatan Akses Platform Erlangga Digital",
      detail: "Cloud auto-scaling & CDN edge caching menjamin ujian CBT nasional tetap responsif di puncak Juli."
    }
  ],
  en: [
    {
      metric: "99.9%",
      label: "Core ERP & Order Processing Uptime",
      detail: "Guarantees continuous availability for Microsoft Dynamics ERP & regional branch order portals."
    },
    {
      metric: "< 15 Mins",
      label: "Disaster Recovery Target RTO",
      detail: "Multi-region failover architecture ensuring RTO < 15m and RPO < 5m during emergency outages."
    },
    {
      metric: "30% Faster",
      label: "Branch IT Ticket Resolution Time",
      detail: "Standardized SOPs & automated ticketing cut issue resolution times across 40+ regional hubs."
    },
    {
      metric: "Sub-Second",
      label: "Erlangga Digital Platform Speed",
      detail: "Cloud auto-scaling & CDN edge caching keeping CBT national exams lightning fast during peak surges."
    }
  ]
};

const QUALIFICATION_CATEGORIES = [
  { key: "all", label: { id: "Semua Persyaratan (17)", en: "All Requirements (17)" } },
  { key: "credentials", label: { id: "Pendidikan & Pengalaman", en: "Education & Tenure" } },
  { key: "tech", label: { id: "Stak Teknologi & Infrastruktur", en: "Tech Stack & Infra" } },
  { key: "leadership", label: { id: "Kepemimpinan & Komunikasi", en: "Leadership & Soft Skills" } },
  { key: "operations", label: { id: "Operasional & Darurat", en: "Operations & Emergency" } },
  { key: "budgeting", label: { id: "Perencanaan & Anggaran", en: "Budgeting & Strategy" } }
];

const QUALIFICATIONS_DATA: QualificationItem[] = [
  // 1. Education
  {
    id: "req-1",
    category: "credentials",
    requirement: {
      id: "Pendidikan min. S1/S2 Teknik Informatika, Sistem Informasi, ilmu Komputer, atau bidang terkait (IPK min. 3.00).",
      en: "Minimum Bachelor's or Master's degree (S1/S2) in IT, IS, Computer Science, or related field (Min. GPA 3.00)."
    },
    candidateMatch: {
      id: "S.T. Teknik Informatika — Institut Teknologi Bandung (STEI ITB)",
      en: "B.Eng. Computer Science — Bandung Institute of Technology (STEI ITB)"
    },
    evidence: {
      id: "Lulusan dari institusi teknologi terbaik di Indonesia dengan keahlian mendalam dalam algoritma, arsitektur basis data, dan rekayasa perangkat lunak.",
      en: "Graduated from Indonesia's top technology institute with rigorous background in software engineering, database architecture, and computer science."
    },
    status: {
      id: "Sangat Sesuai (Melampaui Target)",
      en: "Exceeds Requirement"
    }
  },
  // 2. Experience Tenure
  {
    id: "req-2",
    category: "credentials",
    requirement: {
      id: "Memiliki pengalaman profesional 5–10 tahun di bidang Teknologi Informasi, Sistem Informasi, atau Ilmu Komputer.",
      en: "Possess 5–10 years of professional experience in the fields of Information Technology, Information Systems, or Computer Science."
    },
    candidateMatch: {
      id: "10+ Tahun Rekam Jejak Profesional Rekayasa Perangkat Lunak & Konsultasi TI",
      en: "10+ Years Professional Track Record in Software Engineering & IT Consultancy"
    },
    evidence: {
      id: "Pengalaman lebih dari 10 tahun memimpin tim rekayasa perangkat lunak, super-app mobile perbankan, dan solusi TI enterprise lintas industri.",
      en: "Over 10 years experience leading software engineering teams, mobile banking super-apps, and enterprise IT solutions across industries."
    },
    status: {
      id: "Memenuhi Syarat Sepenuhnya",
      en: "Fully Meets Requirement"
    }
  },
  // 2b. Max Age Limit (From Official Graphic Flyer)
  {
    id: "req-age",
    category: "credentials",
    requirement: {
      id: "Usia Maksimal 40 Tahun (Maximum age 40 years).",
      en: "Maximum age 40 years."
    },
    candidateMatch: {
      id: "Usia Kandidat Berada Dalam Rentang Ideal (Senior Leader Bracket)",
      en: "Candidate Age Within Ideal Senior Leadership Range"
    },
    evidence: {
      id: "Memenuhi batasan usia maksimal perusahaan untuk posisi jenjang manajerial strategis.",
      en: "Fully complies with corporate age upper limit for strategic managerial roles."
    },
    status: {
      id: "Memenuhi Syarat Sepenuhnya",
      en: "Fully Meets Requirement"
    }
  },
  // 3. Excellent Communication
  {
    id: "req-3",
    category: "leadership",
    requirement: {
      id: "Keterampilan komunikasi yang sangat baik (Excellent communication skills).",
      en: "Excellent communication skills."
    },
    candidateMatch: {
      id: "Komunikasi Strategis & Presentasi C-Level / Steering Committee",
      en: "Strategic Communication & C-Level / Steering Committee Presentations"
    },
    evidence: {
      id: "Berpengalaman menyelaraskan kebutuhan bisnis non-teknis dari direksi/C-level dengan arsitektur teknis tim pengembang di Accenture dan Zenius.",
      en: "Proven track record aligning non-technical C-level business requirements with core technical architecture at Accenture and Zenius."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 4. Leadership & Public Speaking
  {
    id: "req-4",
    category: "leadership",
    requirement: {
      id: "Kemampuan Kepemimpinan, Manajemen, Komunikasi, dan Public Speaking.",
      en: "Leadership, Management, Communication, Public Speaking."
    },
    candidateMatch: {
      id: "Business Integration Lead di Accenture & Android Lead di Zenius",
      en: "Business Integration Lead at Accenture & Android Lead at Zenius"
    },
    evidence: {
      id: "Memimpin squad 25M+ pengguna aplikasi perbankan, mengelola 7 tim teknis langsung, dan menjadi pembicara dalam summit teknologi internal.",
      en: "Led mobile engineering squads for 25M+ banking users, managed 7 direct reports, and presented keynotes at internal tech summits."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 5. IT Infrastructure
  {
    id: "req-5",
    category: "tech",
    requirement: {
      id: "Infrastruktur TI: GCP, AWS, DataCenters, Keamanan & Antivirus, Backup Management.",
      en: "IT Infrastructure: GCP, AWS, DataCenters, Security & AV, Backup Management."
    },
    candidateMatch: {
      id: "Praktisi AWS & GCP (Sertifikasi GCP Cloud Architect), EDR Security, Backup DR",
      en: "AWS & GCP Practitioner (GCP Cloud Architect in progress), EDR Security, DR Backup"
    },
    evidence: {
      id: "Mengarsitekturkan cloud multi-region di AWS/GCP, otomatisasi backup terenkripsi, proteksi endpoint EDR, dan pengelolaan data center.",
      en: "Architected multi-region cloud infrastructures on AWS/GCP, automated encrypted backups, endpoint EDR security, and data center ops."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 6. Enterprise Software Stack
  {
    id: "req-6",
    category: "tech",
    requirement: {
      id: "Database, SDLC, ERP (Dynamics), CRM (Qontak), Auto ML, Data Science, PowerBI, Db Architecture, Programming, HRMS (Darwinbox).",
      en: "Database, SDLC, ERP (Dynamics), CRM (Qontak), Auto ML, Data Science, PowerBI, Db Architecture, Programming, HRMS (Darwinbox)."
    },
    candidateMatch: {
      id: "Keahlian Stak Lengkap: DB Architecture, Microservices, PowerBI, Integrasi Enterprise",
      en: "Comprehensive Stack Expertise: DB Architecture, Microservices, PowerBI, Enterprise Integrations"
    },
    evidence: {
      id: "Desain basis data terdistribusi, otomatisasi pipeline CI/CD SDLC, dashboard PowerBI executive, serta integrasi ERP Dynamics, CRM Qontak, dan Darwinbox.",
      en: "Distributed database architecture, CI/CD SDLC pipelines, executive PowerBI dashboards, and integration of Dynamics ERP, Qontak CRM, & Darwinbox."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 7. Erlangga Supporting Tools Understanding
  {
    id: "req-7",
    category: "tech",
    requirement: {
      id: "Memiliki pemahaman tentang alat-alat pendukung kerja di Erlangga Group.",
      en: "Have an understanding of the tools that support work at Erlangga Group."
    },
    candidateMatch: {
      id: "Pemahaman Ekosistem Erlangga: WMS, POS, POD, EdTech CBT, D2C E-Commerce",
      en: "Erlangga Ecosystem Blueprint: WMS, POS, POD, EdTech CBT, D2C E-Commerce"
    },
    evidence: {
      id: "Memahami alur kerja percetakan POD, integrasi WMS cabang regional, kasir POS toko buku, platform ujian online CBT, dan konektor e-commerce D2C.",
      en: "In-depth knowledge of POD printing workflows, regional branch WMS routing, retail POS systems, online CBT exam engines, and D2C e-commerce connectors."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 8. Systematic Workflow & Change Management
  {
    id: "req-8",
    category: "operations",
    requirement: {
      id: "Kemampuan mengarahkan sesuai alur kerja sistematis dan meyakinkan pengguna atas perubahan akibat komputerisasi.",
      en: "Ability to direct in accordance with systematic workflow and convince users about changes due to implementation of computerized systems."
    },
    candidateMatch: {
      id: "Manajemen Perubahan & Onboarding Sistem Enterprise (170rb+ Pengguna)",
      en: "Enterprise Change Management & System Onboarding (170k+ Users)"
    },
    evidence: {
      id: "Berhasil mengarahkan transisi digital untuk 170rb+ karyawan FMCG dan staf cabang regional melalui SOP terstruktur, modul pelatihan, dan fasilitasi pengguna.",
      en: "Successfully guided digital transformation for 170k+ FMCG corporate employees and regional branch staff using structured SOPs and training programs."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 9. Emergency Handling
  {
    id: "req-9",
    category: "operations",
    requirement: {
      id: "Memiliki kemampuan untuk menangani kondisi darurat (Emergency handling).",
      en: "Have the ability to deal with emergencies."
    },
    candidateMatch: {
      id: "Respons Insiden Kritis, Mitigasi Ujian CBT Peak July, Failover RTO < 15m",
      en: "Critical Incident Response, Peak July Exam Mitigation, RTO < 15m Failover"
    },
    evidence: {
      id: "Berpengalaman mengelola situasi outage darurat, failover otomatis basis data, mitigasi lonjakan Juli pada sistem CBT, dan prosedur tanggap darurat.",
      en: "Proven track record managing emergency outages, automated DB failovers, July exam peak load surges on CBT platforms, and incident runbooks."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 10. Project Management & Capacity Planning
  {
    id: "req-10",
    category: "budgeting",
    requirement: {
      id: "Keterampilan manajemen proyek yang baik untuk memvalidasi estimasi dan melakukan perencanaan kapasitas (Capacity planning).",
      en: "Good project management skills to validate estimates and carry out capacity planning."
    },
    candidateMatch: {
      id: "Tata Kelola Proyek Agile/Waterfall & Perencanaan Kapasitas Cloud Server",
      en: "Agile/Waterfall Project Governance & Cloud Server Capacity Planning"
    },
    evidence: {
      id: "Memvalidasi estimasi proyek TI, menghitung perkiraan kapasitas server cloud untuk puncak transaksi Juli, dan mengelola alokasi beban kerja tim.",
      en: "Validated project estimates, forecasted cloud server capacity for July peak transaction surges, and managed workload allocation across squads."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 11. Analysis, Planning & Design of Incoming IT Requests
  {
    id: "req-11",
    category: "operations",
    requirement: {
      id: "Melakukan analisis, perencanaan, dan perancangan arsitektur atas permintaan TI yang masuk.",
      en: "Performing analysis, planning and design of incoming IT requests."
    },
    candidateMatch: {
      id: "Matriks Triage Permintaan TI & Penilaian Trade-off Arsitektur",
      en: "IT Request Triage Matrix & Architectural Trade-off Evaluation"
    },
    evidence: {
      id: "Menerapkan alur evaluasi permintaan TI berbasis matriks dampak bisnis vs kompleksitas teknis serta menyusun dokumen spesifikasi arsitektur (RFC).",
      en: "Established structured RFC/PRD review workflows prioritizing incoming IT requests based on business impact vs technical complexity."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 12. 1-Year Planning and Budgeting IT DevOps & SecOps
  {
    id: "req-12",
    category: "budgeting",
    requirement: {
      id: "Merencanakan dan menganggarkan kebutuhan TI DevOps & SecOps untuk periode 1 tahun setiap tahunnya.",
      en: "Planning and budgeting IT DevOps & SecOps for the next 1 year each year."
    },
    candidateMatch: {
      id: "Perencanaan Anggaran TI CAPEX/OPEX Tahunan & Otomatisasi Efisiensi Cloud",
      en: "Annual CAPEX/OPEX IT Budgeting & Cloud Cost Optimization"
    },
    evidence: {
      id: "Penyusunan anggaran tahunan operasional infrastruktur cloud, lisensi SecOps, alat pengujian otomatis, dan optimalisasi biaya cloud (AWS/GCP savings plans).",
      en: "Formulated annual CAPEX/OPEX budgets for cloud infra, SecOps tooling, automated testing, and cloud cost optimization (AWS/GCP savings plans)."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 13. Strategic Prioritization of DevOps & SecOps
  {
    id: "req-13",
    category: "budgeting",
    requirement: {
      id: "Mengelola dan memprioritaskan permintaan DevOps & SecOps sesuai kebutuhan serta memastikan selaras dengan strategi perusahaan.",
      en: "Manage IT DevOps & SecOps requests according to company needs and prioritize. Ensure that every plan is in accordance with company strategy."
    },
    candidateMatch: {
      id: "Penyelarasan Strategis Komite Pengarah TI & Metrik ROI Bisnis",
      en: "IT Steering Committee Strategic Alignment & Business ROI Metrics"
    },
    evidence: {
      id: "Memastikan proyek DevOps/SecOps mendukung target pertumbuhan pendapatan digital dan efisiensi rantai pasok cetak Erlangga Group.",
      en: "Aligned DevOps/SecOps initiatives directly with Erlangga Group's strategic business OKRs: digital revenue expansion & print supply chain efficiency."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 14. Managing Running Infrastructure & Tech Evolution
  {
    id: "req-14",
    category: "tech",
    requirement: {
      id: "Mengelola infrastruktur & aplikasi TI yang berjalan dan mengembangkannya sesuai teknologi terkini.",
      en: "Manage IT infrastructures & applications that are already running and develop according to the latest technology."
    },
    candidateMatch: {
      id: "Modernisasi Sistem Legacy, Arsitektur Microservices & Kontainerisasi",
      en: "Legacy Modernization, Microservices Architecture & Containerization"
    },
    evidence: {
      id: "Pengalaman memodernisasi aplikasi monolith warisan menjadi microservices cloud-native ber-kontainer tanpa mengganggu operasional bisnis yang berjalan.",
      en: "Demonstrated success modernizing legacy monoliths into cloud-native containerized microservices while ensuring zero downtime for running business ops."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 15. Regional IT Branch Coordination
  {
    id: "req-15",
    category: "operations",
    requirement: {
      id: "Mengoordinasikan tugas dan operasional terkait TI dengan seluruh cabang TI di daerah.",
      en: "Coordinate IT-related tasks and operations with all regional IT branches."
    },
    candidateMatch: {
      id: "Koordinasi Operasional TI 40+ Cabang & Hub Logistik Regional",
      en: "Operational IT Coordination Across 40+ Regional Hubs & Branches"
    },
    evidence: {
      id: "Membangun komunikasi operasional harian, standardisasi perangkat lunak POS/WMS cabang, dan koordinasi tanggap insiden dengan penanggung jawab TI daerah.",
      en: "Established daily operational syncs, POS/WMS software standardization, and incident response coordination with 40+ regional IT branch leads."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  },
  // 16. Documentation Excellence
  {
    id: "req-16",
    category: "operations",
    requirement: {
      id: "Memastikan seluruh infrastruktur & aplikasi TI yang ada telah terdokumentasi secara lengkap.",
      en: "Ensure all existing IT infrastructures & applications are fully documented."
    },
    candidateMatch: {
      id: "Standardisasi Dokumentasi Teknis: Blueprint Arsitektur, Runbook & SOP DR",
      en: "Technical Documentation Standard: Architecture Blueprints, Runbooks & DR SOPs"
    },
    evidence: {
      id: "Disiplin tinggi dalam mendokumentasikan diagram arsitektur sistem, kontrak API OpenAPI, panduan pemulihan bencana (DRP), dan SOP pemeliharaan infrastruktur.",
      en: "Strict discipline creating system architecture diagrams, OpenAPI specifications, deployment runbooks, and disaster recovery SOPs."
    },
    status: {
      id: "Sangat Sesuai",
      en: "Strong Match"
    }
  }
];

import { useErlanggaLang } from "./useErlanggaLang";

export default function ErlanggaPerformanceView() {
  const { lang, toggleLang, mounted } = useErlanggaLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MatrixCategory>("all");

  const t = TRANSLATIONS[lang];
  const benchmarks = KEY_BENCHMARKS_DATA[lang];

  // Filter qualifications
  const filteredQualifications = QUALIFICATIONS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.requirement[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.candidateMatch[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.evidence[lang].toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-opacity duration-150 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* GLOBAL HEADER WITH NAVIGATION & LANG TOGGLE */}
      <Header navItems={ERLANGGA_NAV_ITEMS} lang={lang} onToggleLang={toggleLang} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* === SECTION 1: KEY PERFORMANCE BENCHMARKS & TARGET ROI === */}
        <section className="space-y-8">
          <div className="space-y-2 max-w-3xl">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold block">
              {t.benchmarksTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.benchmarksTitle}
            </h2>
          </div>

          {/* 4-Grid Key Benchmarks Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight font-mono">
                    {item.metric}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {item.label}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === SECTION 2: 16-POINT VACANCY ALIGNMENT MATRIX === */}
        <section className="space-y-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold block">
              {t.matrixTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.matrixTitle}
            </h2>
          </div>

          {/* SEARCH & CATEGORY FILTER TOOLBAR */}
          <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm space-y-5">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {t.filterLabel}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {QUALIFICATION_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key as MatrixCategory)}
                      className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {cat.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 16-POINT MATRIX CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredQualifications.map((item, index) => {
              const reqNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 space-y-5 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header Pill & Status */}
                    <div className="flex items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <span className="text-sm font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-600 text-white shadow-xs">
                        REQUIREMENT #{reqNumber}
                      </span>

                      <span className="px-3 py-1 rounded-md text-sm font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
                        {item.status[lang]}
                      </span>
                    </div>

                    {/* Requirement Box (Amber Accent) */}
                    <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-1">
                      <span className="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                        {lang === "id" ? "Persyaratan Kualifikasi Erlangga:" : "Erlangga Job Vacancy Requirement:"}
                      </span>
                      <p className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                        {item.requirement[lang]}
                      </p>
                    </div>

                    {/* Candidate Match Highlight (Blue Accent) */}
                    <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-1">
                      <span className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
                        {lang === "id" ? "Kesesuaian Kandidat (Okihita H. Sihaloho):" : "Candidate Match (Okihita H. Sihaloho):"}
                      </span>
                      <p className="text-sm text-zinc-900 dark:text-zinc-100 font-bold leading-relaxed">
                        {item.candidateMatch[lang]}
                      </p>
                    </div>

                    {/* Evidence & Record (Emerald Accent) */}
                    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 space-y-1">
                      <div className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{lang === "id" ? "Bukti Rekam Jejak & Pengalaman Enterprise:" : "Enterprise Evidence & Track Record:"}</span>
                      </div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed pl-5">
                        {item.evidence[lang]}
                      </p>
                    </div>
                  </div>
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
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.ctaDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:okihita@gmail.com?subject=Diskusi%20Kualifikasi%20TI%20-%20PT.%20Penerbit%20Erlangga"
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
      <ErlanggaFooter lang={lang} />
    </div>
  );
}
