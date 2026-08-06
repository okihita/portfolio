"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import { CheckCircle2, Award, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS DICTIONARY ---

const TRANSLATIONS = {
  id: {
    targetBadge: "PT. Penerbit Erlangga — Rencana Eksekusi Kandidat IT Manager",
    heroTitle: "Peta Jalan Eksekusi 3 Bulan: TI sebagai Mesin Pertumbuhan",
    heroDesc: "Rencana aksi 30-60-90 hari yang konkret: audit fondasi data & ERP, stabilisasi platform EdTech dan jaringan 40+ cabang, hingga transformasi AI yang mengubah TI dari pusat biaya menjadi pendorong profitabilitas.",

    bannerCaption: "Peta Jalan Eksekusi 3 Bulan — Rencana Aksi IT Manager",
    bannerLabel: "Fase Eksekusi",
    bannerSubtitle: "Fase 01 Audit Fondasi · Fase 02 Stabilisasi · Fase 03 Transformasi AI",

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
    heroDesc: "A concrete 30-60-90 day action plan: data & ERP foundation audit, EdTech platform and 40+ branch network stabilization, and AI-led transformation turning IT from a cost center into a profitability driver.",

    bannerCaption: "3-Month Execution Roadmap — IT Manager Action Plan",
    bannerLabel: "Execution Phases",
    bannerSubtitle: "Phase 01 Foundation Audit · Phase 02 Stabilization · Phase 03 AI Transformation",

    ctaTitle: "Let's Discuss the 3-Month Execution Plan",
    ctaDesc: "I'm ready to walk through per-phase initiatives, resource requirements, and success metrics for this execution plan.",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

// --- DETAILED 90-DAY TACTICAL ROADMAP DATA ---

const ROADMAP_DATA = {
  id: [
    {
      phase: "01",
      month: "30 Hari Pertama",
      title: "Audit Fondasi TI, Keamanan & Efisiensi Lisensi ERP",
      narrative: "Konsolidasi data 40+ cabang, pembersihan skema basis data ERP Microsoft Dynamics, dan audit efisiensi biaya infrastruktur cloud GCP/AWS.",
      image: "/images/erlangga/month1_risograph.jpg",
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
      image: "/images/erlangga/month2_risograph.jpg",
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
      image: "/images/erlangga/month3_risograph.jpg",
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
      image: "/images/erlangga/month1_risograph.jpg",
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
      image: "/images/erlangga/month2_risograph.jpg",
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
      image: "/images/erlangga/month3_risograph.jpg",
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

export default function ErlanggaRoadmapView() {
  const [lang, setLang] = useState<Lang>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    const savedLang = localStorage.getItem("erlangga_lang");

    if (queryLang === "en" || queryLang === "id") {
      setLang(queryLang as Lang);
      localStorage.setItem("erlangga_lang", queryLang);
    } else if (savedLang === "en" || savedLang === "id") {
      setLang(savedLang as Lang);
    }
    setMounted(true);
  }, []);

  const toggleLang = () => {
    const nextLang: Lang = lang === "id" ? "en" : "id";
    setLang(nextLang);
    localStorage.setItem("erlangga_lang", nextLang);
  };

  const t = TRANSLATIONS[lang];
  const detailedRoadmap = ROADMAP_DATA[lang];

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

          {/* Unsplash Roadmap Banner */}
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

        {/* === DETAILED 90-DAY TACTICAL ROADMAP (ULTRA-RICH BREAKDOWN) === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider font-bold">
              {lang === "id" ? "Peta Jalan Taktis 3-Bulan (Deep-Dive)" : "3-Month Tactical Execution Plan"}
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
