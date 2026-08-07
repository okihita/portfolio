"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Printer,
  Truck,
  Smartphone,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Zap,
  Building2,
  CheckCircle2
} from "lucide-react";

interface ErlanggaHistoricalTimelineProps {
  lang: "id" | "en";
}

interface TimelineEvent {
  year: string;
  eraBadge: { id: string; en: string };
  title: { id: string; en: string };
  entity: { id: string; en: string };
  description: { id: string; en: string };
  icon: React.ComponentType<{ className?: string }>;
  highlights: { id: string; en: string }[];
  itImpact: { id: string; en: string };
  color: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1952",
    eraBadge: { id: "Era Pendirian & Penerbitan Utama", en: "Founding & Core Publishing Era" },
    title: {
      id: "Penerbitan Buku Pelajaran & Hak Cipta Kurikulum Nasional",
      en: "K-12 Textbook Publishing & National Curriculum Rights"
    },
    entity: {
      id: "PT Penerbit Erlangga · M. Hutauruk",
      en: "PT Penerbit Erlangga · Founded by M. Hutauruk"
    },
    description: {
      id: "Didirikan pada 30 April 1952 oleh M. Hutauruk, Erlangga memulai perjalanannya dengan menerbitkan buku pelajaran sekolah dasar hingga perguruan tinggi. Menjadi fondasi kekayaan intelektual (IP) pendidikan terbesar di Indonesia.",
      en: "Founded on April 30, 1952 by M. Hutauruk, Erlangga began its journey publishing textbooks for elementary schools through higher education, establishing Indonesia's largest educational IP portfolio."
    },
    icon: BookOpen,
    highlights: [
      { id: "Penerbitan Buku Pelajaran K-12 / ESPS", en: "K-12 & ESPS Textbook Publishing" },
      { id: "Fondasi Hak Cipta & Editor Nasional", en: "National Author & Editor Copyright Vault" },
      { id: "Jaringan Distribusi Sekolah Pertama", en: "First Nationwide School Sales Network" }
    ],
    itImpact: {
      id: "Master Katalog Produk & Hak Cipta IP Buku",
      en: "Master Product Catalog & Publishing IP Rights"
    },
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: "1987",
    eraBadge: { id: "Era Manufaktur Cetak Industri Massal", en: "Mass Industrial Offset Print Era" },
    title: {
      id: "Pendirian Pabrik Percetakan Massal GAP Print",
      en: "Industrial Print Manufacturing Plant Launch (GAP Print)"
    },
    entity: {
      id: "PT Gelora Aksara Pratama (GAP) · Ciracas",
      en: "PT Gelora Aksara Pratama (GAP) · Ciracas Factory"
    },
    description: {
      id: "Peresmian pabrik percetakan offset massal di Ciracas untuk menjamin kapasitas produksi cetak jutaan buku pelajaran per tahun secara mandiri (captive market) serta melayani pesanan percetakan komersial B2B.",
      en: "Launch of the mass offset printing manufacturing plant in Ciracas to secure internal production capacity for millions of textbooks annually (captive market) while servicing B2B commercial contracts."
    },
    icon: Printer,
    highlights: [
      { id: "Mesin Offset Industrial Kapasitas Tinggi", en: "High-Capacity Industrial Offset Presses" },
      { id: "Fasilitas Penjilidan Hardcover & Softcover", en: "Hardcover & Softcover Binding Lines" },
      { id: "Kontrak Cetak B2B & Kemasan Komersial", en: "B2B Packaging & Commercial Printing" }
    ],
    itImpact: {
      id: "Integrasi Sistem Telemetri MES & IoT Mesin Cetak",
      en: "IoT Press Telemetry & MES Integration"
    },
    color: "from-amber-500 to-orange-600"
  },
  {
    year: "2006",
    eraBadge: { id: "Era Retail Toko Buku & E-Commerce", en: "Bookstore Retail & E-Commerce Era" },
    title: {
      id: "Ekspansi Jaringan Retail Eureka Book House",
      en: "Eureka Book House Retail Bookstore Network Expansion"
    },
    entity: {
      id: "Eureka Book House · Omnichannel Retail",
      en: "Eureka Book House · Omnichannel Retail"
    },
    description: {
      id: "Peluncuran jaringan toko buku fisik Eureka Book House dan platform e-commerce (eurekabookhouse.co.id) untuk menjangkau konsumen ritel, sekolah, dan perguruan tinggi secara langsung.",
      en: "Launch of Eureka Book House physical bookstore chain and e-commerce portal (eurekabookhouse.co.id) providing direct omnichannel access for schools, students, and academic institutions."
    },
    icon: Building2,
    highlights: [
      { id: "Jaringan Toko Buku Fisik Retail", en: "Physical Retail Bookstore Outlets" },
      { id: "Portal E-Commerce Eurekabookhouse.co.id", en: "Eurekabookhouse.co.id E-Commerce" },
      { id: "Pengadaan Sekolah B2B SIPLah", en: "SIPLah B2B School Procurement" }
    ],
    itImpact: {
      id: "Pipa Otomatisasi Pengadaan BOS SIPLah",
      en: "Automated SIPLah BOS Procurement Pipeline"
    },
    color: "from-emerald-500 to-teal-600"
  },
  {
    year: "2007",
    eraBadge: { id: "Era Rantai Pasok Logistik 40+ Cabang", en: "40+ Branch Supply Chain & 3PL Era" },
    title: {
      id: "Pergudangan 3PL & Fulfillment Logistik Nasional",
      en: "Nationwide 3PL Logistics & Branch Warehouse Fulfillment"
    },
    entity: {
      id: "Eureka Logistics · 40+ Gudang Cabang",
      en: "Eureka Logistics · 40+ Branch Warehouses"
    },
    description: {
      id: "Pembentukan unit logistik pergudangan 3PL dengan 40+ cabang di seluruh pulau Indonesia, menjamin distribusi buku ke sekolah-sekolah di pelosok daerah dengan latensi fulfillment yang terkontrol.",
      en: "Establishment of 3PL logistics warehousing infrastructure across 40+ branch hubs in Indonesia, ensuring rapid textbook delivery to remote regional schools with controlled fulfillment latency."
    },
    icon: Truck,
    highlights: [
      { id: "Jaringan 40+ Gudang Cabang Regional", en: "40+ Regional Branch Warehouse Hubs" },
      { id: "Armada Pengiriman Last-Mile Darat/Laut/Udara", en: "Last-Mile Land/Sea/Air Logistics Fleet" },
      { id: "Sistem Manajemen Gudang WMS Offline-First", en: "Offline-First Branch WMS Operations" }
    ],
    itImpact: {
      id: "99.9% Uptime WMS Gudang Cabang & Batching Rute",
      en: "99.9% Branch WMS Uptime & Algorithmic Route Batching"
    },
    color: "from-cyan-500 to-blue-600"
  },
  {
    year: "2010",
    eraBadge: { id: "Era Pelatihan Guru & Pengembangan Profesi", en: "Teacher Training & Professional Development" },
    title: {
      id: "Pendirian Pusat Sertifikasi Erlass Institute",
      en: "Erlass Institute Professional Certification Hub"
    },
    entity: {
      id: "Erlass Institute (PT Erlass) · Jakarta",
      en: "Erlass Institute (PT Erlass) · Jakarta HQ"
    },
    description: {
      id: "Peresmian lembaga pelatihan profesional guru, sertifikasi kompetensi pendidik, lokakarya kepemimpinan sekolah, dan konsultasi implementasi Kurikulum Merdeka bagi para tenaga pengajar.",
      en: "Establishment of Erlass Institute for certified teacher professional development, educator workshops, school leadership consulting, and Kurikulum Merdeka implementation seminars."
    },
    icon: GraduationCap,
    highlights: [
      { id: "Pelatihan & Sertifikasi Guru Bersertifikat", en: "Certified Teacher Training Programs" },
      { id: "Lokakarya Kepemimpinan Kurikulum Merdeka", en: "Kurikulum Merdeka Leadership Workshops" },
      { id: "Portal Belajar Hybrid Self-Paced LMS", en: "Hybrid Self-Paced LMS Learning Portal" }
    ],
    itImpact: {
      id: "Portal LMS Hybrid & Verifikasi QR Sertifikat Digital",
      en: "Hybrid LMS Portal & QR Digital Credential Hash"
    },
    color: "from-purple-500 to-pink-600"
  },
  {
    year: "2026+",
    eraBadge: { id: "Era Transformasi EdTech Cloud & AI", en: "Cloud EdTech & AI Transformation Era" },
    title: {
      id: "Platform SaaS Cloud, AI Penilaian & CBT Exam Engine",
      en: "Cloud SaaS Platforms, AI Assessment & CBT Exam Infrastructure"
    },
    entity: {
      id: "Erlangga Digital & Enterprise AI Unit",
      en: "Erlangga Digital & Enterprise AI Unit"
    },
    description: {
      id: "Transformasi Erlangga Group menjadi perusahaan EdTech berbasis AI: meluncurkan E-Library cloud, engine ujian CBT skala 100k+ siswa, peramalan stok AutoML, dan model penilaian AI otomatis.",
      en: "Transformation of Erlangga Group into an AI-powered EdTech enterprise: launching cloud E-Libraries, 100k+ concurrent CBT exam engines, AutoML inventory forecasting, and AI automated grading."
    },
    icon: Smartphone,
    highlights: [
      { id: "Platform Cloud E-Library & Erklika Video", en: "Cloud E-Library & Erklika Video SaaS" },
      { id: "Engine Ujian CBT Multi-Tenant 100k+ Siswa", en: "100k+ Concurrency CBT Exam Engine" },
      { id: "Model AI AutoML Demand Forecasting ERP", en: "AutoML ERP Demand Forecasting Model" }
    ],
    itImpact: {
      id: "-45% Biaya Cloud Idle · 100% Uptime Ujian CBT",
      en: "-45% Cloud Idle Cost · 100% CBT Exam Uptime"
    },
    color: "from-blue-600 via-indigo-600 to-purple-600"
  }
];

export default function ErlanggaHistoricalTimeline({ lang }: ErlanggaHistoricalTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);

  const activeEvent = TIMELINE_EVENTS[activeIndex];
  const IconComp = activeEvent.icon;

  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % TIMELINE_EVENTS.length);
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev - 1 + TIMELINE_EVENTS.length) % TIMELINE_EVENTS.length);
  };

  return (
    <div className="space-y-8">
      {/* --- ERA SELECTOR NAVIGATOR STEPPER RAIL --- */}
      <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/90 p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
              {lang === "id" ? "Garis Waktu Transformasi 74 Tahun" : "74-Year Heritage Timeline"}
            </span>
          </div>

          {/* Controls (< / > buttons) */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevStep}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
              title="Previous Era"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-zinc-400 font-bold px-1">
              {activeIndex + 1} / {TIMELINE_EVENTS.length}
            </span>
            <button
              onClick={nextStep}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
              title="Next Era"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* STEPPER RAIL WITH GLOWING PROGRESS LINE */}
        <div className="relative pt-2 pb-1 overflow-x-auto scrollbar-none">
          {/* Laser Progress Line Background */}
          <div className="absolute top-[28px] left-6 right-6 h-0.5 bg-zinc-200 dark:bg-zinc-800 z-0" />
          
          {/* Active Animated Laser Line */}
          <div
            className="absolute top-[28px] left-6 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500 z-0 transition-all duration-500"
            style={{
              width: `${(activeIndex / (TIMELINE_EVENTS.length - 1)) * 92}%`
            }}
          />

          <div className="flex items-center justify-between min-w-[650px] relative z-10 px-2">
            {TIMELINE_EVENTS.map((ev, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={ev.year}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110 border-2 border-white dark:border-zinc-900 ring-4 ring-blue-500/20"
                        : isPast
                        ? "bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                    }`}
                  >
                    <span>{ev.year}</span>
                  </div>

                  {/* Year Tag Label */}
                  <span
                    className={`text-[11px] font-bold transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200"
                    }`}
                  >
                    {ev.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- ACTIVE ERA GLASSMORPHISM CARD --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEvent.year}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl"
        >
          {/* Card Header Banner with Dynamic Gradient Accent */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeEvent.color} text-white space-y-3`}>
            <div className="flex items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 tracking-wider uppercase">
                {activeEvent.eraBadge[lang]}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight opacity-90">
                {activeEvent.year}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {activeEvent.title[lang]}
            </h3>

            <p className="text-xs sm:text-sm font-semibold opacity-90 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 shrink-0" />
              <span>{activeEvent.entity[lang]}</span>
            </p>
          </div>

          {/* Card Body Details */}
          <div className="p-6 sm:p-8 space-y-6 bg-white dark:bg-zinc-900">
            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
              {activeEvent.description[lang]}
            </p>

            {/* Highlights Grid */}
            <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{lang === "id" ? "Pencapaian Utama & Pilar Operasional:" : "Key Milestones & Operational Pillars:"}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeEvent.highlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-200 font-medium flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Impact Callout */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-800 dark:text-blue-300">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{lang === "id" ? "Dampak Transformasi TI:" : "IT Transformation Impact:"}</span>
              </div>
              <span className="px-3 py-1 rounded-lg text-xs font-extrabold bg-blue-600 text-white shadow-xs">
                {activeEvent.itImpact[lang]}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
