"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { ERLANGGA_NAV_ITEMS } from "./erlanggaNav";
import {
  CheckCircle2,
  Mail,
  ShieldCheck
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

// --- TYPES ---
type Lang = "id" | "en";

// --- TRANSLATIONS ---

const TRANSLATIONS = {
  id: {
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

// --- 6 EXPANDED RISK SIMULATIONS DATA WITH INCIDENT RESPONSE TIMELINES ---

const ALL_RISK_SIMULATIONS_DATA = {
  id: [
    {
      id: "school-opening",
      tag: "Puncak Musim Juli",
      title: "1. Lonjakan Pesanan Musim Masuk Sekolah (Puncak Juli)",
      context: "Jutaan pesanan buku pelajaran dari toko buku dan sekolah membanjiri ERP Dynamics dan gudang cabang secara bersamaan.",
      action: "Menerapkan load balancing, pemrosesan antrean pesanan asynchronous, scaling read-replica basis data, dan frozen code window agar sistem tidak mengalami crash.",
      result: "Pemenuhan pesanan berjalan 100% lancar dengan visibilitas stok real-time.",
      prevention: "Kapasitas server otomatis dinaikkan 3x lipat 2 minggu sebelum puncak Juli.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Senin, 14 Juli 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [06:30 WIB]",
          stepTitle: "Peringatan Telemetri CPU ERP 94%",
          desc: "Telemetri basis data mendeteksi lonjakan pesanan EDI bersamaan sebanyak 45.000 pesanan buku dari toko buku nasional.",
          badge: "ALERT"
        },
        {
          time: "T+00:15 [06:45 WIB]",
          stepTitle: "Pengalihan Antrean Pesanan Asynchronous",
          desc: "IT Manager mengaktifkan Incident Command & memindahkan pipeline pemrosesan pesanan ke antrean RabbitMQ/Kafka.",
          badge: "ACTION"
        },
        {
          time: "T+00:45 [07:15 WIB]",
          stepTitle: "Provisi Read-Replica Cloud (4x Node)",
          desc: "Menambah 4 node read-replica basis data SQL di cloud AWS untuk mengalihkan trafik query pencarian stok gudang cabang.",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [08:30 WIB]",
          stepTitle: "Kebijakan Frozen Code Window WMS",
          desc: "Memberlakukan pembekuan pembaruan kode pada 40+ endpoint WMS cabang untuk mencegah konflik perubahan skema.",
          badge: "MITIGATION"
        },
        {
          time: "T+06:00 [12:30 WIB]",
          stepTitle: "Stabilitas Pemenuhan Pesanan 120k/Jam",
          desc: "Throughput pesanan puncak stabil pada 120.000 pesanan/jam dengan akurasi pemenuhan stok 100% dan zero downtime.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "exam-season",
      tag: "Erlangga Digital",
      title: "2. Lonjakan Trafik Ujian Online Nasional (CBT)",
      context: "Ratusan ribu siswa mengakses platform Erlangga Digital secara bersamaan untuk ujian online nasional.",
      action: "Mengembangkan microservices cloud auto-scaling di GCP/AWS dengan CDN edge caching, terpisah dari basis data ERP transaksional.",
      result: "Uptime 100% selama ujian nasional dengan biaya cloud terkendali.",
      prevention: "Stress-testing beban 500k pengguna bersamaan dilakukan setiap kuartal.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Rabu, 14 Mei 2025",
      incidentTimeline: [
        {
          time: "T-01:00 [06:00 WIB]",
          stepTitle: "Verifikasi Caching CDN Edge Ujian",
          desc: "Pemeriksaan otomatis pra-ujian mengonfirmasi node CDN edge caching aktif di 34 provinsi Indonesia.",
          badge: "ALERT"
        },
        {
          time: "T+00:00 [07:00 WIB]",
          stepTitle: "Lonjakan 280.000 Siswa Login Bersamaan",
          desc: "Sesi pertama ujian online nasional dimulai; trafik portal CBT melonjak 600% dalam 10 menit.",
          badge: "ACTION"
        },
        {
          time: "T+00:10 [07:10 WIB]",
          stepTitle: "Auto-scaling 80 Pod Kubernetes GCP",
          desc: "Cluster Kubernetes otomatis memprovisi 80 pod microservices tambahan di GCP region asia-southeast2 (Jakarta).",
          badge: "MITIGATION"
        },
        {
          time: "T+00:30 [07:30 WIB]",
          stepTitle: "Penyimpanan Lembar Jawaban ke Redis Cache",
          desc: "Mengalihkan pengiriman lembar jawaban ke in-memory Redis cache untuk memisahkan ujian real-time dari DB transaksional.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:30 [10:30 WIB]",
          stepTitle: "Selesai Ujian Nasional Uptime 100%",
          desc: "Sesi ujian nasional berakhir tanpa hambatan dengan latensi rata-rata < 100ms dan uptime 100%.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "branch-outage",
      tag: "Ketahanan Jaringan",
      title: "3. Putusnya Jaringan Fiber Optik Cabang Regional (e.g. Kupang / Medan)",
      context: "Kabel fiber optik terputus di cabang regional, memutuskan koneksi internet gudang ke Kantor Pusat.",
      action: "Menggunakan arsitektur WMS/POS offline-first berbasis edge caching lokal. Data tersinkronisasi otomatis saat internet pulih.",
      result: "Pengiriman buku cabang tetap berjalan tanpa hambatan meski jaringan publik terputus.",
      prevention: "Koneksi cadangan 4G/5G LTE otomatis aktif saat jalur fiber optik terputus.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Kamis, 20 November 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [09:12 WITA]",
          stepTitle: "Terputusnya Koneksi Fiber Cabang Kupang",
          desc: "Monitoring WAN mendeteksi kegagalan total link fiber utama akibat galian infrastruktur daerah.",
          badge: "ALERT"
        },
        {
          time: "T+00:02 [09:14 WITA]",
          stepTitle: "Failover Otomatis SD-WAN ke LTE 5G",
          desc: "Pengontrol SD-WAN otomatis memindahkan koneksi ke jalur seluler cadangan 4G/5G LTE dalam 1,8 detik.",
          badge: "ACTION"
        },
        {
          time: "T+00:10 [09:22 WITA]",
          stepTitle: "Mode Offline-First WMS Edge Aktif",
          desc: "Peladen lokal cabang mengaktifkan penyimpan data SQLite lokal untuk transaksi pemindaian dan pengiriman buku.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:30 [12:42 WITA]",
          stepTitle: "Penyambungan Kabel Fiber Selesai",
          desc: "Tim teknisi penyedia jaringan menyelesaikan penyambungan kabel; SD-WAN mengembalikan jalur ke fiber utama.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:35 [12:47 WITA]",
          stepTitle: "Sinkronisasi 1.420 Transaksi Offline Selesai",
          desc: "Engine sinkronisasi latar belakang mengirimkan 1.420 transaksi pengiriman buku ke HQ Ciracas dengan 0 data hilang.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "data-conflict",
      tag: "Integrasi ERP & CRM",
      title: "4. Konflik Sinkronisasi Data Penjualan CRM & Inventaris ERP",
      context: "Sales reps di lapangan memperbarui pesanan di Qontak CRM saat stok di Microsoft Dynamics ERP sedang terbatas.",
      action: "Menerapkan lapisan API gateway dua arah dengan mekanisme pessimistic locking stok sementara selama proses transaksi.",
      result: "Mencegah kesalahan penjualan ganda (double-booking) dan menjaga ketepatan alokasi stok.",
      prevention: "Pemberitahuan sisa stok otomatis dikirim ke ponsel sales reps secara real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Selasa, 9 September 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [14:15 WIB]",
          stepTitle: "Deteksi Mismatch 340 Reservasi Stok",
          desc: "Pipa integrasi mendeteksi ketidakcocokan reservasi stok antara Qontak CRM dan Dynamics ERP.",
          badge: "ALERT"
        },
        {
          time: "T+00:05 [14:20 WIB]",
          stepTitle: "Pessimistic Locking API Gateway",
          desc: "API Gateway mengunci sementara 1.200 judul buku favorit agar tidak dapat di-checkout ganda.",
          badge: "ACTION"
        },
        {
          time: "T+00:20 [14:35 WIB]",
          stepTitle: "Rekonsiliasi Keranjang Offline Sales Rep",
          desc: "Worker sinkronisasi dua arah membandingkan draft pesanan sales rep dengan stok fisik gudang.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:00 [15:15 WIB]",
          stepTitle: "Notifikasi Real-time Seluler Sales Rep",
          desc: "Mengirimkan notifikasi pembaruan sisa stok ke 350+ aplikasi seluler sales reps di lapangan.",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [16:15 WIB]",
          stepTitle: "Akurasi Alokasi Stok 100%",
          desc: "Rekonsiliasi data selesai dengan akurasi alokasi 100% dan zero kesalahan double-booking.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "security-threat",
      tag: "Keamanan SecOps",
      title: "5. Percobaan Serangan Ransomware / Zero-Day Endpoint Cabang",
      context: "Perangkat komputer cabang terdeteksi mengunduh berkas mencurigakan yang berpotensi menyebarkan malware.",
      action: "Agent EDR otomatis mengisolasi perangkat dari jaringan internal cabang dalam kurun waktu kurang dari 30 detik.",
      result: "Serangan berhasil dicegah sepenuhnya tanpa menyebar ke peladen pusat HQ Ciracas.",
      prevention: "Kebijakan Zero Trust Network Access (ZTNA) dan pembaruan patch keamanan otomatis.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Jumat, 24 Oktober 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [23:04 WIB]",
          stepTitle: "Deteksi Eksekusi PowerShell mencurigakan",
          desc: "EDR CrowdStrike mendeteksi skrip enkripsi berkas pada komputer kerja cabang Surabaya.",
          badge: "ALERT"
        },
        {
          time: "T+00:00.15 [23:04:15 WIB]",
          stepTitle: "Isolasi Perangkat EDR Otomatis (<15s)",
          desc: "Agent EDR secara otomatis memutuskan antarmuka jaringan perangkat dari LAN cabang dalam 15 detik.",
          badge: "ACTION"
        },
        {
          time: "T+00:15 [23:19 WIB]",
          stepTitle: "Revokasi Kredensial & Isolasi VLAN SecOps",
          desc: "Tim SecOps merenovasi kredensial Active Directory yang terkompromikan & mengisolasi segmen VLAN.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:00 [00:04 WIB]",
          stepTitle: "Verifikasi Forensik Zero Lateral Movement",
          desc: "Analisis forensik mengonfirmasi tidak ada penyebaran malware ke peladen pusat HQ Ciracas atau berkas cabang.",
          badge: "MITIGATION"
        },
        {
          time: "T+04:00 [03:04 WIB]",
          stepTitle: "Re-image Endpoint & Pemulihan Cloud Backup",
          desc: "Perangkat di-image ulang dari baseline image resmi dan berkas pengguna dipulihkan dari cadangan cloud.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "drp-failover",
      tag: "Pemulihan Bencana DRP",
      title: "6. Uji Pengalihan Pemulihan Bencana (DRC Cloud Failover)",
      context: "Peladen utama Data Center HQ Ciracas mengalami gangguan total akibat kegagalan daya atau krisis lokal.",
      action: "Sistem DNS failover otomatis mengarahkan lalu lintas data ke Disaster Recovery Center cloud di AWS/GCP (RTO < 2 jam, RPO < 15 menit).",
      result: "Seluruh layanan penerbitan dan platform digital dapat diakses kembali tanpa kehilangan data transaksi.",
      prevention: "Simulasi pengalihan bencana (DRP Failover Test) wajib dijalankan setiap 6 bulan.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Minggu, 15 Maret 2026",
      incidentTimeline: [
        {
          time: "T+00:00 [01:05 WIB]",
          stepTitle: "Kegagalan Total Listrik Data Center HQ",
          desc: "Gangguan jaringan listrik regional menyebabkan tripped pada dual UPS HQ Ciracas; genset cadangan gagal menyala.",
          badge: "ALERT"
        },
        {
          time: "T+00:05 [01:10 WIB]",
          stepTitle: "Peringatan Insiden Sev-1 Kepada Manajemen TI",
          desc: "Monitor heartbeat otomatis memicu peringatan darurat insiden Severity-1 ke pimpinan TI.",
          badge: "ACTION"
        },
        {
          time: "T+00:15 [01:20 WIB]",
          stepTitle: "Otorisasi Eksekusi Rencana Bencana DRP",
          desc: "IT Manager memberikan otorisasi eksekusi pengalihan bencana Disaster Recovery Plan (DRP).",
          badge: "ACTION"
        },
        {
          time: "T+00:35 [01:40 WIB]",
          stepTitle: "Pengalihan DNS Route53 ke DRC Cloud AWS",
          desc: "Pemeriksaan kesehatan DNS otomatis memperbarui record A ke Disaster Recovery Center cloud AWS Jakarta.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:15 [02:20 WIB]",
          stepTitle: "Promosi DB Utama DRC Cloud (RTO 1j 15m)",
          desc: "Basis data PostgreSQL primary di-promote pada lingkungan DRC cloud (RTO: 1 jam 15 menit, RPO: < 2 menit).",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [03:05 WIB]",
          stepTitle: "Layanan Digital & ERP 100% Pulih",
          desc: "100% platform digital Erlangga, ERP, dan E-Library kembali beroperasi penuh pada infrastruktur DRC cloud.",
          badge: "STABILIZED"
        }
      ]
    }
  ],
  en: [
    {
      id: "school-opening",
      tag: "Peak July Season",
      title: "1. School Opening Season Order Spike (July Peak)",
      context: "Millions of textbook orders from bookstores and schools flood ERP Dynamics and branch warehouses simultaneously.",
      action: "Implement load balancing, queue-based order processing, database read-replica scaling, and peak-season frozen code windows.",
      result: "100% order fulfillment uninterrupted with real-time stock visibility.",
      prevention: "Auto-scaling capacity increased 3x 2 weeks prior to peak July season.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Monday, July 14, 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [06:30 AM]",
          stepTitle: "ERP Database CPU Telemetry Alert 94%",
          desc: "Database telemetry flags sudden influx of 45,000 concurrent EDI book orders from national retail accounts.",
          badge: "ALERT"
        },
        {
          time: "T+00:15 [06:45 AM]",
          stepTitle: "Asynchronous Queue Pipeline Shift",
          desc: "IT Manager activates Incident Command & shifts Order Processing pipeline to async RabbitMQ/Kafka queues.",
          badge: "ACTION"
        },
        {
          time: "T+00:45 [07:15 AM]",
          stepTitle: "Cloud Read-Replica Provisioning (4x Nodes)",
          desc: "Provision 4x SQL database read-replicas in AWS Cloud to offload branch warehouse stock lookup traffic.",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [08:30 AM]",
          stepTitle: "WMS Frozen Code Window Enforcement",
          desc: "Enforce code freeze across 40+ branch WMS endpoints to block non-critical schema modifications.",
          badge: "MITIGATION"
        },
        {
          time: "T+06:00 [12:30 PM]",
          stepTitle: "120k/Hr Peak Throughput Stabilization",
          desc: "Peak order throughput stabilizes at 120,000 orders/hr with 100% fulfillment accuracy and zero downtime.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "exam-season",
      tag: "Erlangga Digital",
      title: "2. National Exam Traffic Spike (CBT)",
      context: "Hundreds of thousands of students take online exams on Erlangga Digital simultaneously.",
      action: "Deploy auto-scaling cloud microservices on GCP/AWS with CDN edge caching, decoupled from transactional ERP backends.",
      result: "100% uptime during national exam windows with optimized cloud expenditure.",
      prevention: "Quarterly stress testing simulating 500k concurrent exam takers.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Wednesday, May 14, 2025",
      incidentTimeline: [
        {
          time: "T-01:00 [06:00 AM]",
          stepTitle: "Exam CDN Edge Cache Verification",
          desc: "Pre-exam automated load checks confirm CDN edge caching active across 34 Indonesian provinces.",
          badge: "ALERT"
        },
        {
          time: "T+00:00 [07:00 AM]",
          stepTitle: "Concurrent Login Surge of 280,000 Students",
          desc: "First national exam window opens; CBT portal traffic spikes 600% within 10 minutes.",
          badge: "ACTION"
        },
        {
          time: "T+00:10 [07:10 AM]",
          stepTitle: "GCP Kubernetes Auto-Scaling (80 Pods)",
          desc: "Kubernetes cluster automatically provisions 80 additional microservices pods in GCP region asia-southeast2 (Jakarta).",
          badge: "MITIGATION"
        },
        {
          time: "T+00:30 [07:30 AM]",
          stepTitle: "Answer Sheet Ingestion to Redis Cache",
          desc: "Offload student answer sheet submissions to Redis in-memory cache, decoupling real-time CBT from transactional DB.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:30 [10:30 AM]",
          stepTitle: "National Exam Completion (100% Uptime)",
          desc: "National exam session completes without disruption, maintaining < 100ms latency and 100% uptime.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "branch-outage",
      tag: "Network Resilience",
      title: "3. Regional Branch Fiber Cut (e.g. Kupang / Medan Warehouse)",
      context: "A major fiber cut disconnects a regional branch warehouse from HQ servers.",
      action: "Utilize offline-first WMS/POS local caching so warehouse staff continue scanning and shipping books, auto-syncing transactions once online.",
      result: "Zero disruption to warehouse shipments despite network outages.",
      prevention: "Automatic 4G/5G LTE failover links configured for all 40+ branch nodes.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Thursday, November 20, 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [09:12 AM]",
          stepTitle: "Kupang Branch Primary Fiber Severance",
          desc: "WAN monitoring flags total link failure at Kupang Regional Branch due to municipal infrastructure digging.",
          badge: "ALERT"
        },
        {
          time: "T+00:02 [09:14 AM]",
          stepTitle: "Automatic SD-WAN 5G LTE Failover",
          desc: "SD-WAN controller automatically shifts link traffic to backup 4G/5G LTE cellular backhaul in 1.8 seconds.",
          badge: "ACTION"
        },
        {
          time: "T+00:10 [09:22 AM]",
          stepTitle: "Offline-First WMS Edge Logging Active",
          desc: "Local branch edge servers activate SQLite local transaction logging for book scanning and shipping operations.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:30 [12:42 PM]",
          stepTitle: "Telco Fiber Splicing Complete",
          desc: "Network provider completes physical fiber line splicing; SD-WAN restores primary fiber channel.",
          badge: "MITIGATION"
        },
        {
          time: "T+03:35 [12:47 PM]",
          stepTitle: "1,420 Offline Transactions Synced",
          desc: "Background sync engine pushes 1,420 offline warehouse dispatch records to Ciracas HQ with 0 data loss.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "data-conflict",
      tag: "ERP & CRM Integration",
      title: "4. CRM Sales & ERP Inventory Sync Conflict",
      context: "Field sales reps update bulk orders in Qontak CRM while ERP inventory levels are low.",
      action: "Implement bidirectional API gateway with pessimistic inventory locking during active checkout flows.",
      result: "Eliminates double-booking errors and ensures accurate stock allocation.",
      prevention: "Real-time stock threshold alerts sent directly to sales reps' mobile devices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Tuesday, September 9, 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [02:15 PM]",
          stepTitle: "340 Stock Reservation Mismatches Detected",
          desc: "Integration pipeline flags inventory reservation discrepancies between Qontak CRM and Dynamics ERP.",
          badge: "ALERT"
        },
        {
          time: "T+00:05 [02:20 PM]",
          stepTitle: "API Gateway Pessimistic Inventory Lock",
          desc: "API Gateway triggers temporary lock on 1,200 high-demand textbook titles to prevent double-booking.",
          badge: "ACTION"
        },
        {
          time: "T+00:20 [02:35 PM]",
          stepTitle: "Sales Rep Offline Cart Reconciliation",
          desc: "Bidirectional sync worker reconciles sales reps' offline cart drafts against physical warehouse stock.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:00 [03:15 PM]",
          stepTitle: "Mobile Device Real-Time Push Notifications",
          desc: "Push live stock threshold alerts to 350+ field sales reps' mobile applications.",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [04:15 PM]",
          stepTitle: "100% Stock Allocation Accuracy Restored",
          desc: "Data reconciliation complete with 100% stock allocation accuracy and 0 double-booking errors.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "security-threat",
      tag: "SecOps Security",
      title: "5. Ransomware / Zero-Day Branch Endpoint Intrusion Attempt",
      context: "A branch workstation detects an unauthorized file download attempting to spread internal malware.",
      action: "Endpoint EDR agent isolates the workstation from the branch LAN within 30 seconds.",
      result: "Threat completely contained without affecting central Ciracas HQ servers.",
      prevention: "Zero Trust Network Access (ZTNA) and automated security patch management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Friday, October 24, 2025",
      incidentTimeline: [
        {
          time: "T+00:00 [11:04 PM]",
          stepTitle: "Suspicious PowerShell Execution Detected",
          desc: "CrowdStrike EDR flags file encryption script attempt on Surabaya branch workstation.",
          badge: "ALERT"
        },
        {
          time: "T+00:00.15 [11:04:15 PM]",
          stepTitle: "Automated Host Isolation (< 15s)",
          desc: "EDR agent automatically severs host network interface from branch LAN in under 15 seconds.",
          badge: "ACTION"
        },
        {
          time: "T+00:15 [11:19 PM]",
          stepTitle: "Active Directory Credentials Revocation",
          desc: "SecOps responder revokes compromised Active Directory credentials and isolates VLAN segment.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:00 [12:04 AM]",
          stepTitle: "Forensic Audit Confirms Zero Lateral Movement",
          desc: "Forensics confirm zero malware movement to central Ciracas HQ DC or branch file shares.",
          badge: "MITIGATION"
        },
        {
          time: "T+04:00 [03:04 AM]",
          stepTitle: "Endpoint Golden Image Restore",
          desc: "Re-image endpoint from official baseline golden image & restore user files from immutable backup.",
          badge: "STABILIZED"
        }
      ]
    },
    {
      id: "drp-failover",
      tag: "DRP Disaster Recovery",
      title: "6. Primary Data Center Failover Test (DRC Cloud Switch)",
      context: "Primary HQ Ciracas data center experiences a total power or catastrophic hardware outage.",
      action: "Automated DNS failover routes all enterprise traffic to AWS/GCP Cloud DRC (RTO < 2 hrs, RPO < 15 mins).",
      result: "All publishing and digital learning services restored with zero transaction data loss.",
      prevention: "Bi-annual automated Disaster Recovery (DRP) failover simulation drills.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      timelineDate: "Sunday, March 15, 2026",
      incidentTimeline: [
        {
          time: "T+00:00 [01:05 AM]",
          stepTitle: "Total Power Failure at Primary HQ DC",
          desc: "Regional power blackout causes dual UPS trip at Ciracas HQ DC; backup generator fails to engage.",
          badge: "ALERT"
        },
        {
          time: "T+00:05 [01:10 AM]",
          stepTitle: "Sev-1 Emergency Alert to IT Leadership",
          desc: "Heartbeat monitor fires Sev-1 emergency incident alert to IT leadership team.",
          badge: "ACTION"
        },
        {
          time: "T+00:15 [01:20 AM]",
          stepTitle: "Disaster Recovery Authorization",
          desc: "IT Manager authorizes automated Disaster Recovery Plan (DRP) execution.",
          badge: "ACTION"
        },
        {
          time: "T+00:35 [01:40 AM]",
          stepTitle: "Route53 DNS Switch to AWS Cloud DRC",
          desc: "DNS health checks automatically update A-records to point enterprise traffic to AWS Jakarta DRC.",
          badge: "MITIGATION"
        },
        {
          time: "T+01:15 [02:20 AM]",
          stepTitle: "DRC Cloud Primary DB Promotion (RTO 1h 15m)",
          desc: "Promote PostgreSQL primary DB in DRC cloud environment (RTO: 1 hr 15 mins, RPO: < 2 mins).",
          badge: "MITIGATION"
        },
        {
          time: "T+02:00 [03:05 AM]",
          stepTitle: "100% Digital & ERP Services Operational",
          desc: "100% of Erlangga digital learning, ERP, and E-Library platforms fully operational on DRC cloud.",
          badge: "STABILIZED"
        }
      ]
    }
  ]
};

export default function ErlanggaRiskSimulationsView() {
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
  const allSimulations = ALL_RISK_SIMULATIONS_DATA[lang];

  return (
    <div className={`min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-opacity duration-150 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <Header navItems={ERLANGGA_NAV_ITEMS} lang={lang} onToggleLang={toggleLang} />

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
            {allSimulations.map((item, index) => {
              const caseStudyNum = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 overflow-hidden flex flex-col justify-between shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <div className="space-y-6">
                    {/* Illustration Header Image */}
                    <div className="relative h-48 w-full bg-zinc-900 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-zinc-950/80 text-zinc-200 border border-white/20 backdrop-blur-xs">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-600 text-white shadow-xs">
                          CASE STUDY #{caseStudyNum}
                        </span>
                      </div>
                    </div>

                    <div className="px-6 space-y-5">
                      {/* Case Study Title */}
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                        {item.title}
                      </h3>

                      {/* Block 1: Business Problem Context (Red) */}
                      <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">
                          {lang === "id" ? "Konteks Masalah & Kebutuhan Bisnis:" : "Business Problem Context:"}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                          {item.context}
                        </p>
                      </div>

                      {/* Block 2: IT Managerial Response Action Timeline (Blue) */}
                      <div className="p-4 sm:p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-4">
                        <div className="flex items-center justify-between border-b border-blue-200/60 dark:border-blue-900/40 pb-2.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                            {lang === "id" ? "Garis Waktu Respon Insiden TI (Incident Response Timeline):" : "IT Incident Response Action Timeline:"}
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {item.timelineDate}
                          </span>
                        </div>

                        {/* Vertical Timeline Steps */}
                        <div className="relative pl-4 space-y-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-800/60">
                          {item.incidentTimeline.map((step, sIdx) => (
                            <div key={sIdx} className="relative flex items-start gap-3">
                              {/* Timeline Bullet Node */}
                              <div className={`absolute -left-[18px] top-1 w-3 h-3 rounded-full border-2 bg-white dark:bg-zinc-900 ${
                                step.badge === "ALERT"
                                  ? "border-red-500 shadow-xs shadow-red-500/50"
                                  : step.badge === "ACTION"
                                  ? "border-blue-600"
                                  : step.badge === "MITIGATION"
                                  ? "border-amber-500"
                                  : "border-emerald-500 shadow-xs shadow-emerald-500/50"
                              }`} />

                              <div className="space-y-1 flex-1">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                    {step.stepTitle}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-1.5 py-0.5 rounded border border-blue-200/80 dark:border-blue-800/60">
                                    {step.time}
                                  </span>
                                </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Block 3: Long-Term Prevention Protocol (Amber) */}
                      <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                          {lang === "id" ? "Protokol Pencegahan Jangka Panjang:" : "Long-Term Prevention Protocol:"}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                          {item.prevention}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Block 4: System Resolution Benchmark (Emerald Footer) */}
                  <div className="p-5 mx-6 mb-6 mt-6 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{lang === "id" ? "Hasil Capaian Sistem:" : "System Resolution Benchmark:"}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed pl-6">
                      {item.result}
                    </p>
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
