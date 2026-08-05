"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Printer,
  Sun,
  Moon,
  Languages,
  AlertTriangle,
  Flame,
  Zap,
  Mail,
  ShieldAlert,
  Server,
  RefreshCw,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { ErlanggaHeaderNav } from "./ErlanggaHeaderNav";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS ---

const TRANSLATIONS = {
  id: {
    exportPdf: "PDF",
    targetBadge: "PT. Penerbit Erlangga — Simulasi Penanganan Risiko TI",
    heroTitle: "Simulasi & Manajemen Risiko Operasional Berisiko Tinggi",
    heroDesc: "Kumpulan skenario studi kasus nyata penanganan krisis infrastruktur, lonjakan trafik musiman, ketahanan jaringan cabang, dan pemulihan bencana Erlangga Group.",

    scenarioTag: "Studi Kasus Penanganan Risiko",
    scenarioTitle: "6 Simulasi Penanganan Risiko Operasional Utama Erlangga",
    
    sec5Title: "Siap Memimpin Manajemen Risiko & Keandalan Teknologi Erlangga",
    sec5Desc: "Saya siap mendiskusikan strategi mitigasi risiko ini dan memperagakan kerangka kerja ketahanan sistem Erlangga Group.",

    btnEmail: "Kirim Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "Proposal Strategis TI — PT. Penerbit Erlangga",
    footerBranch: "Branch: erlangga"
  },
  en: {
    exportPdf: "PDF",
    targetBadge: "PT. Penerbit Erlangga — IT Operational Risk Simulations",
    heroTitle: "High-Stakes Operational Risk Management Simulations",
    heroDesc: "Comprehensive real-world case studies detailing crisis response, seasonal traffic spikes, branch WAN resilience, and disaster recovery for Erlangga Group.",

    scenarioTag: "Risk Management Case Studies",
    scenarioTitle: "6 Core Erlangga Operational Risk Simulations",

    sec5Title: "Ready to Drive Technical Risk Management for Erlangga",
    sec5Desc: "I welcome the opportunity to discuss these risk mitigation strategies and demonstrate system resilience frameworks for Erlangga Group.",

    btnEmail: "Email (okihita@gmail.com)",
    btnLinkedin: "LinkedIn Profile",
    footerTitle: "PT. Penerbit Erlangga IT Strategic Proposal",
    footerBranch: "Branch: erlangga"
  }
};

// --- 6 EXPANDED RISK SIMULATIONS DATA ---

const ALL_RISK_SIMULATIONS_DATA = {
  id: [
    {
      id: "school-opening",
      icon: Flame,
      tag: "Puncak Musim Juli",
      title: "1. Lonjakan Pesanan Musim Masuk Sekolah (Puncak Juli)",
      context: "Jutaan pesanan buku pelajaran dari toko buku dan sekolah membanjiri ERP Dynamics dan gudang cabang secara bersamaan.",
      action: "Menerapkan load balancing, pemrosesan antrean pesanan asynchronous, scaling read-replica basis data, dan frozen code window agar sistem tidak mengalami crash.",
      result: "Pemenuhan pesanan berjalan 100% lancar dengan visibilitas stok real-time.",
      prevention: "Kapasitas server otomatis dinaikkan 3x lipat 2 minggu sebelum puncak Juli.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "exam-season",
      icon: Zap,
      tag: "Erlangga Digital",
      title: "2. Lonjakan Trafik Ujian Online Nasional (CBT)",
      context: "Ratusan ribu siswa mengakses platform Erlangga Digital secara bersamaan untuk ujian online nasional.",
      action: "Mengembangkan microservices cloud auto-scaling di GCP/AWS dengan CDN edge caching, terpisah dari basis data ERP transaksional.",
      result: "Uptime 100% selama ujian nasional dengan biaya cloud terkendali.",
      prevention: "Stress-testing beban 500k pengguna bersamaan dilakukan setiap kuartal.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "branch-outage",
      icon: AlertTriangle,
      tag: "Ketahanan Jaringan",
      title: "3. Putusnya Jaringan Fiber Optik Cabang Regional (e.g. Kupang / Medan)",
      context: "Kabel fiber optik terputus di cabang regional, memutuskan koneksi internet gudang ke Kantor Pusat.",
      action: "Menggunakan arsitektur WMS/POS offline-first berbasis edge caching lokal. Data tersinkronisasi otomatis saat internet pulih.",
      result: "Pengiriman buku cabang tetap berjalan tanpa hambatan meski jaringan publik terputus.",
      prevention: "Koneksi cadangan 4G/5G LTE otomatis aktif saat jalur fiber optik terputus.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "data-conflict",
      icon: RefreshCw,
      tag: "Integrasi ERP & CRM",
      title: "4. Konflik Sinkronisasi Data Penjualan CRM & Inventaris ERP",
      context: "Sales reps di lapangan memperbarui pesanan di Qontak CRM saat stok di Microsoft Dynamics ERP sedang terbatas.",
      action: "Menerapkan lapisan API gateway dua arah dengan mekanisme pessimistic locking stok sementara selama proses transaksi.",
      result: "Mencegah kesalahan penjualan ganda (double-booking) dan menjaga ketepatan alokasi stok.",
      prevention: "Pemberitahuan sisa stok otomatis dikirim ke ponsel sales reps secara real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "security-threat",
      icon: ShieldAlert,
      tag: "Keamanan SecOps",
      title: "5. Percobaan Serangan Ransomware / Zero-Day Endpoint Cabang",
      context: "Perangkat komputer cabang terdeteksi mengunduh berkas mencurigakan yang berpotensi menyebarkan malware.",
      action: "Agent EDR otomatis mengisolasi perangkat dari jaringan internal cabang dalam kurun waktu kurang dari 30 detik.",
      result: "Serangan berhasil dicegah sepenuhnya tanpa menyebar ke peladen pusat HQ Ciracas.",
      prevention: "Kebijakan Zero Trust Network Access (ZTNA) dan pembaruan patch keamanan otomatis.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "drp-failover",
      icon: Server,
      tag: "Pemulihan Bencana DRP",
      title: "6. Uji Pengalihan Pemulihan Bencana (DRC Cloud Failover)",
      context: "Peladen utama Data Center HQ Ciracas mengalami gangguan total akibat kegagalan daya atau krisis lokal.",
      action: "Sistem DNS failover otomatis mengarahkan lalu lintas data ke Disaster Recovery Center cloud di AWS/GCP (RTO < 2 jam, RPO < 15 menit).",
      result: "Seluruh layanan penerbitan dan platform digital dapat diakses kembali tanpa kehilangan data transaksi.",
      prevention: "Simulasi pengalihan bencana (DRP Failover Test) wajib dijalankan setiap 6 bulan.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    }
  ],
  en: [
    {
      id: "school-opening",
      icon: Flame,
      tag: "Peak July Season",
      title: "1. School Opening Season Order Spike (July Peak)",
      context: "Millions of textbook orders from bookstores and schools flood ERP Dynamics and branch warehouses simultaneously.",
      action: "Implement load balancing, queue-based order processing, database read-replica scaling, and peak-season frozen code windows.",
      result: "100% order fulfillment uninterrupted with real-time stock visibility.",
      prevention: "Auto-scaling capacity increased 3x 2 weeks prior to peak July season.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "exam-season",
      icon: Zap,
      tag: "Erlangga Digital",
      title: "2. National Exam Traffic Spike (CBT)",
      context: "Hundreds of thousands of students take online exams on Erlangga Digital simultaneously.",
      action: "Deploy auto-scaling cloud microservices on GCP/AWS with CDN edge caching, decoupled from transactional ERP backends.",
      result: "100% uptime during national exam windows with optimized cloud expenditure.",
      prevention: "Quarterly stress testing simulating 500k concurrent exam takers.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "branch-outage",
      icon: AlertTriangle,
      tag: "Network Resilience",
      title: "3. Regional Branch Fiber Cut (e.g. Kupang / Medan Warehouse)",
      context: "A major fiber cut disconnects a regional branch warehouse from HQ servers.",
      action: "Utilize offline-first WMS/POS local caching so warehouse staff continue scanning and shipping books, auto-syncing transactions once online.",
      result: "Zero disruption to warehouse shipments despite network outages.",
      prevention: "Automatic 4G/5G LTE failover links configured for all 40+ branch nodes.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "data-conflict",
      icon: RefreshCw,
      tag: "ERP & CRM Integration",
      title: "4. CRM Sales & ERP Inventory Sync Conflict",
      context: "Field sales reps update bulk orders in Qontak CRM while ERP inventory levels are low.",
      action: "Implement bidirectional API gateway with pessimistic inventory locking during active checkout flows.",
      result: "Eliminates double-booking errors and ensures accurate stock allocation.",
      prevention: "Real-time stock threshold alerts sent directly to sales reps' mobile devices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "security-threat",
      icon: ShieldAlert,
      tag: "SecOps Security",
      title: "5. Ransomware / Zero-Day Branch Endpoint Intrusion Attempt",
      context: "A branch workstation detects an unauthorized file download attempting to spread internal malware.",
      action: "Endpoint EDR agent isolates the workstation from the branch LAN within 30 seconds.",
      result: "Threat completely contained without affecting central Ciracas HQ servers.",
      prevention: "Zero Trust Network Access (ZTNA) and automated security patch management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "drp-failover",
      icon: Server,
      tag: "DRP Disaster Recovery",
      title: "6. Primary Data Center Failover Test (DRC Cloud Switch)",
      context: "Primary HQ Ciracas data center experiences a total power or catastrophic hardware outage.",
      action: "Automated DNS failover routes all enterprise traffic to AWS/GCP Cloud DRC (RTO < 2 hrs, RPO < 15 mins).",
      result: "All publishing and digital learning services restored with zero transaction data loss.",
      prevention: "Bi-annual automated Disaster Recovery (DRP) failover simulation drills.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default function ErlanggaRiskSimulationsView() {
  const [lang, setLang] = useState<Lang>("id");
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
  const allSimulations = ALL_RISK_SIMULATIONS_DATA[lang];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      <ErlanggaHeaderNav
        lang={lang}
        activeRoute="/erlangga/risk-simulations"
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
        </section>

        {/* === 6 EXPANDED RISK SIMULATIONS === */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold">
              {t.scenarioTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {t.scenarioTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allSimulations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden space-y-0 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-5">
                    {/* Illustration Image */}
                    <div className="relative h-48 w-full bg-zinc-900 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                      <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-0.5 rounded bg-zinc-950/80 text-zinc-200 border border-white/20 backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>

                    <div className="px-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{item.title}</h3>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 block">
                          {lang === "id" ? "Konteks Masalah & Kebutuhan Bisnis:" : "Business Problem Context:"}
                        </span>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {item.context}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-700/60 space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                          {lang === "id" ? "Tindakan Respon Manajerial TI:" : "IT Managerial Response Action:"}
                        </span>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          {item.action}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 text-sm text-zinc-800 dark:text-zinc-200 space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                          {lang === "id" ? "Protokol Pencegahan Jangka Panjang:" : "Long-Term Prevention Protocol:"}
                        </span>
                        <p>{item.prevention}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{lang === "id" ? "Hasil Capaian Sistem:" : "System Resolution Benchmark:"} {item.result}</span>
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
              {t.sec5Title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.sec5Desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:okihita@gmail.com?subject=Diskusi%20Manajemen%20Risiko%20-%20PT.%20Penerbit%20Erlangga"
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
