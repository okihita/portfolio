export interface ChecklistItem {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  framework: string;
  kpi: { id: string; en: string };
  status: "completed" | "in_progress" | "planned";
}

export interface ChecklistColumn {
  id: string;
  title: { id: string; en: string };
  framework: string;
  items: ChecklistItem[];
}

export interface MonthChecklistData {
  month: number;
  monthTitle: { id: string; en: string };
  totalItems: number;
  columns: ChecklistColumn[];
}

export const COMPREHENSIVE_ROADMAP_CHECKLIST: MonthChecklistData[] = [
  // ==========================================
  // MONTH 1: Data Audit, Infra Mapping & Business Alignment
  // ==========================================
  {
    month: 1,
    monthTitle: {
      id: "Bulan 1 (Hari 1–30) — Audit Data, Pemetaan Infra & Alignment Bisnis",
      en: "Month 1 (Days 1–30) — Data Audit, Infra Mapping & Business Alignment"
    },
    totalItems: 39,
    columns: [
      {
        id: "m1-c1",
        title: {
          id: "Audit Skema & Tata Kelola Data ERP/CRM/HRMS",
          en: "ERP, CRM & HRMS Data Schema Audit & Governance"
        },
        framework: "DAMA-DMBOK 2.0 & MS Dynamics 365 Audit",
        items: [
          {
            id: "m1-1-1",
            title: {
              id: "Audit Skema Basis Data Dynamics 365 & Field Kustom",
              en: "Core Data Schema Uniformity & Custom Field Audit"
            },
            description: {
              id: "Mengaudit tabel kustomisasi Dynamics 365 ERP untuk mengidentifikasi pergeseran skema, atribut tanpa indeks, dan bidang data redundan.",
              en: "Audit standard and custom extension tables in Microsoft Dynamics 365 ERP to identify schema drift, unindexed attributes, and redundant fields."
            },
            framework: "DAMA-DMBOK 2.0 / D365",
            kpi: { id: "100% Pemetaan Skema ERP", en: "100% ERP Schema Mapping" },
            status: "completed"
          },
          {
            id: "m1-1-2",
            title: {
              id: "Manajemen Data Master (MDM) & Identifikasi Golden Record",
              en: "Master Data Management (MDM) & Golden Record"
            },
            description: {
              id: "Mengevaluasi definisi entitas master utama (Akun Sekolah, Katalog ISBN, Vendor, ID Karyawan) di ERP, CRM, dan HRMS.",
              en: "Evaluate single-source-of-truth definitions for core master entities (School Accounts, ISBN Catalog, Vendor, Employee IDs) across systems."
            },
            framework: "DAMA-DMBOK MDM",
            kpi: { id: "Duplikasi Master < 0.5%", en: "Master Duplicates < 0.5%" },
            status: "completed"
          },
          {
            id: "m1-1-3",
            title: {
              id: "Pemetaan Asal-Usul Data (Data Lineage) & Pipeline Middleware",
              en: "Cross-System Data Lineage & Middleware Discovery"
            },
            description: {
              id: "Memetakan alur integrasi API & data lineage dari ERP Dynamics 365 ↔ Qontak CRM ↔ Darwinbox HRMS ↔ Data Warehouse.",
              en: "Map end-to-end data lineage and API integration flows connecting ERP Dynamics 365 ↔ Qontak CRM ↔ Darwinbox HRMS ↔ Data Warehouse."
            },
            framework: "DAMA-DMBOK Integration",
            kpi: { id: "Diagram DFD Integritas 100%", en: "100% DFD Data Flow Graph" },
            status: "completed"
          },
          {
            id: "m1-1-4",
            title: {
              id: "Pengukuran Higienitas & Kualitas Data 6 Dimensi",
              en: "Multi-Dimensional Data Quality Assessment"
            },
            description: {
              id: "Mengukur kualitas data 40+ cabang penjualan & persediaan gudang berdasarkan 6 dimensi DMBOK (Kelengkapan, Akurasi, Konsistensi, Ketepatan Waktu, Validitas, Keunikan).",
              en: "Benchmark data health across 40+ branch sales & inventory registers using 6 DMBOK quality dimensions."
            },
            framework: "DAMA-DMBOK DQ",
            kpi: { id: "Skor Kualitas Data > 95%", en: "Data Quality Score > 95%" },
            status: "completed"
          },
          {
            id: "m1-1-5",
            title: {
              id: "Audit Indeks Basis Data, Kinerja Kueri & Deadlock SQL",
              en: "Database Indexing, Query Performance & Deadlock Audit"
            },
            description: {
              id: "Menganalisis execution plan basis data SQL, fragmentasi indeks, dan frekuensi deadlock transaksi saat beban puncak ERP.",
              en: "Analyze SQL execution plans, slow-query logs, index fragmentation, and deadlock frequencies during peak ERP load."
            },
            framework: "Dynamics 365 Audit",
            kpi: { id: "Respon Kueri SQL < 500ms", en: "SQL Query Time < 500ms" },
            status: "completed"
          },
          {
            id: "m1-1-6",
            title: {
              id: "Audit Pemisahan Tugas (SoD) & Akses Berbasis Peran (RBAC)",
              en: "Segregation of Duties (SoD) & RBAC Access Audit"
            },
            description: {
              id: "Mengaudit hak akses pengguna pada ERP, CRM, dan HRMS untuk mencegah konflik kewenangan transaksi dan potensi kecurangan keuangan.",
              en: "Audit user roles and administrative privileges across ERP, CRM, and HRMS to enforce strict Segregation of Duties."
            },
            framework: "NIST CSF 2.0 / DMBOK",
            kpi: { id: "0 Konflik Risiko SoD", en: "Zero SoD Conflict Violations" },
            status: "completed"
          },
          {
            id: "m1-1-7",
            title: {
              id: "Rekonsiliasi Penawaran CRM ke Pesanan Penjualan ERP",
              en: "ERP-CRM Sales Order & Stock Reservation Audit"
            },
            description: {
              id: "Mengaudit akurasi konversi penawaran sales dari Qontak CRM menjadi pesanan penjualan resmi dan alokasi stok WMS di Dynamics 365.",
              en: "Audit accuracy of school quotes from Qontak CRM converting into binding Dynamics 365 sales orders and WMS stock reservations."
            },
            framework: "D365 O2C Audit",
            kpi: { id: "Presisi Konversi 100%", en: "100% Quote-to-Order Precision" },
            status: "completed"
          },
          {
            id: "m1-1-8",
            title: {
              id: "Penyelarasan Data Payroll HRMS & Cost Center Cabang",
              en: "HRMS Payroll & Branch Cost-Center Alignment"
            },
            description: {
              id: "Memverifikasi sinkronisasi otomatis struktur HRMS Darwinbox ke General Ledger ERP Dynamics 365 per cost center cabang.",
              en: "Verify automated sync between Darwinbox HRMS organizational units and Dynamics 365 General Ledger branch cost centers."
            },
            framework: "DMBOK / D365 GL Audit",
            kpi: { id: "0 Jurnal Tidak Teralokasi", en: "Zero Unassigned GL Journals" },
            status: "completed"
          },
          {
            id: "m1-1-9",
            title: {
              id: "Strategi Pengarsipan Data Historis & Cold Storage",
              en: "Historical Transaction Data Retention & Archival Strategy"
            },
            description: {
              id: "Menentukan kebijakan penyimpanan dingin (cold-storage) dan partisi data transaksi > 5 tahun untuk menjaga kecepatan ERP.",
              en: "Establish cloud cold-storage partitioning for transactional records older than 5 years to maintain active ERP database speed."
            },
            framework: "DAMA-DMBOK Lifecycle",
            kpi: { id: "Reduksi Beban Basis Data 40%", en: "40% Active DB Size Reduction" },
            status: "completed"
          },
          {
            id: "m1-1-10",
            title: {
              id: "Penyusunan Glosarium Bisnis Terpadu & Kamus Data",
              en: "Enterprise Data Dictionary & Business Glossary"
            },
            description: {
              id: "Mendokumentasikan definisi metrik standar (Penjualan Bersih, Turn-Over Gudang, Lead-Time Cetak) di seluruh unit bisnis.",
              en: "Document baseline enterprise metrics definitions (Net Sales, Inventory Turn, Print Lead Time) across all subsidiaries."
            },
            framework: "DAMA-DMBOK Metadata",
            kpi: { id: "Disetujui Seluruh Direksi Unit", en: "Signed Off by All BU Heads" },
            status: "completed"
          },
          {
            id: "m1-1-11",
            title: {
              id: "Rekonsiliasi Nilai Stok Buku Besar vs Stok Fisik Gudang",
              en: "Financial Ledger vs Inventory Sub-Ledger Reconciliation"
            },
            description: {
              id: "Mengevaluasi keselarasan nilai inventaris buku besar ERP terhadap akumulasi saldo stok fisik pada modul WMS gudang.",
              en: "Evaluate automated reconciliation mechanisms between ERP financial inventory valuation and physical warehouse stock balance."
            },
            framework: "Dynamics 365 Financial Audit",
            kpi: { id: "Variansi Nilai Stok < 0.1%", en: "Stock Value Variance < 0.1%" },
            status: "completed"
          },
          {
            id: "m1-1-12",
            title: {
              id: "Audit Privasi Data Pribadi Siswa & Karyawan (UU PDP)",
              en: "Regulatory Data Privacy & Statutory Audit (UU PDP)"
            },
            description: {
              id: "Menilai kepatuhan enkripsi dan privasi data siswa Erlangga Digital & data karyawan berdasarkan UU Perlindungan Data Pribadi.",
              en: "Assess data privacy compliance across Erlangga Digital EdTech student profiles and employee PII under Indonesia's UU PDP."
            },
            framework: "NIST CSF 2.0 / UU PDP",
            kpi: { id: "Enkripsi AES-256 / TLS 1.3 100%", en: "100% AES-256 & TLS 1.3 Enforced" },
            status: "completed"
          },
          {
            id: "m1-1-13",
            title: {
              id: "Audit Kesehatan Antrean Middleware & Dead-Letter Queue",
              en: "Middleware Queue Health & Dead-Letter Queue Audit"
            },
            description: {
              id: "Mengevaluasi retensi pesan dan penanganan Dead-Letter Queue (DLQ) pada bus data real-time yang menghubungkan POS cabang ke ERP.",
              en: "Evaluate health, message retention, and Dead-Letter Queue (DLQ) processing of real-time event brokers connecting branch POS to ERP."
            },
            framework: "DAMA-DMBOK Interoperability",
            kpi: { id: "Pesan Hilang 0 (Zero Drop)", en: "Zero Message Drop Rate" },
            status: "completed"
          }
        ]
      },
      {
        id: "m1-c2",
        title: {
          id: "Pemetaan Jaringan WAN, Infrastruktur & SecOps 40+ Cabang",
          en: "Branch Network, WAN & Infrastructure Mapping (SD-WAN, DRP, SecOps)"
        },
        framework: "NIST CSF 2.0 & TOGAF ADM Phase D",
        items: [
          {
            id: "m1-2-1",
            title: {
              id: "Inventarisasi Aset Fisik & Virtual 40+ Cabang Regional",
              en: "40+ Regional Branch Physical & Virtual Asset Inventory"
            },
            description: {
              id: "Menjalankan pemindaian otomatis untuk menyusun register aset terpadu (server, switch, router, UPS, PC, scanner barcode) di 40 cabang.",
              en: "Deploy automated scanners to compile an up-to-date asset register (servers, switches, UPS, barcode scanners) across 40+ regional hubs."
            },
            framework: "NIST CSF 2.0 ID.AM",
            kpi: { id: "Akurasi Register Aset 100%", en: "100% Asset Inventory Accuracy" },
            status: "completed"
          },
          {
            id: "m1-2-2",
            title: {
              id: "Pengujian Automatic Failover Dual-ISP SD-WAN Cabang",
              en: "SD-WAN Dual-ISP Automatic Failover Assessment"
            },
            description: {
              id: "Menguji failover dinamis antara link Fiber Optik utama dan cadangan 4G/5G LTE di 40 cabang tanpa pemutusan sesi ERP.",
              en: "Audit SD-WAN setup and test automatic failover between Optical Fiber primary link and 4G/5G LTE backup without ERP session drop."
            },
            framework: "NIST CSF 2.0 PR.IR",
            kpi: { id: "Waktu Failover WAN < 1 Detik", en: "WAN Failover Time < 1s" },
            status: "completed"
          },
          {
            id: "m1-2-3",
            title: {
              id: "Audit Kesiapan Disaster Recovery Plan (DRP) & Cloud DRC",
              en: "Disaster Recovery Plan (DRP) & Cloud DRC Audit"
            },
            description: {
              id: "Meninjau arsitektur DRC Cloud (GCP/AWS), status replikasi dari Data Center HQ Ciracas, serta validasi RTO < 2j dan RPO < 15m.",
              en: "Review Cloud DRC architecture, database replication lag from Ciracas HQ Data Center, and validate target RTO < 2h and RPO < 15m."
            },
            framework: "NIST CSF 2.0 RC.RP",
            kpi: { id: "RTO < 2 Jam & RPO < 15 Menit", en: "RTO < 2h & RPO < 15m Verified" },
            status: "completed"
          },
          {
            id: "m1-2-4",
            title: {
              id: "Audit Cakupan EDR Endpoint Protection Ransomware",
              en: "Endpoint Detection & Response (EDR) Coverage Audit"
            },
            description: {
              id: "Mengaudit penginstalan agen EDR terpusat dan pembaruan aturan keamanan di 1.000+ PC cabang, terminal WMS, dan server HQ.",
              en: "Audit EDR agent installation health and signature updates across 1,000+ branch PCs, WMS handhelds, and HQ servers."
            },
            framework: "NIST CSF 2.0 DE.CM",
            kpi: { id: "Cakupan EDR Aktif > 99%", en: "Active EDR Protection > 99%" },
            status: "completed"
          },
          {
            id: "m1-2-5",
            title: {
              id: "Audit Kebijakan ZTNA & Otentikasi Multi-Faktor (MFA)",
              en: "Zero Trust Network Access (ZTNA) & MFA Health Audit"
            },
            description: {
              id: "Mengevaluasi penerapan ZTNA & MFA via Entra ID untuk staf cabang dan lapangan, serta menghapus akses VPN lama tanpa otentikasi ketat.",
              en: "Evaluate ZTNA & Entra ID MFA enforcement for branch and remote personnel, phasing out legacy unauthenticated VPN tunnels."
            },
            framework: "NIST CSF 2.0 PR.AA",
            kpi: { id: "MFA Admin 100% / Cabang 95%", en: "100% Admin & 95% User MFA" },
            status: "completed"
          },
          {
            id: "m1-2-6",
            title: {
              id: "Segmentasi Jaringan OT Pabrik Cetak GAP vs LAN Korporat",
              en: "Printing Plant OT/IoT Network Segmentation Audit"
            },
            description: {
              id: "Mengaudit isolasi firewall antara jaringan kontrol mesin cetak (OT/PLC) di pabrik GAP dan LAN korporat untuk cegah ransomware.",
              en: "Audit firewall isolation between Industrial Control Systems (OT/PLC) in GAP printing plant and corporate LAN to block lateral attacks."
            },
            framework: "NIST CSF 2.0 PR.IR",
            kpi: { id: "Isolasi OT Mesin Cetak 100%", en: "100% OT Network Isolation" },
            status: "completed"
          },
          {
            id: "m1-2-7",
            title: {
              id: "Uji Resiliensi Edge Node Cabang (Offline-First WMS/POS)",
              en: "Local Edge Server & Offline-First POS/WMS Verification"
            },
            description: {
              id: "Memverifikasi operasional WMS/POS lokal cabang saat WAN putus total, dilanjutkan sinkronisasi otomatis tanpa duplikasi saat koneksi pulih.",
              en: "Verify regional branch edge nodes running local WMS/POS during total WAN outage, followed by automated database resync."
            },
            framework: "TOGAF Phase D / NIST",
            kpi: { id: "Pemindaian Offline 100% Sukses", en: "100% Offline Scan Success" },
            status: "completed"
          },
          {
            id: "m1-2-8",
            title: {
              id: "Pengukuran Latensi WAN & Prioritas QoS Cabang Remot",
              en: "Regional WAN Latency & QoS Bandwidth Benchmarking"
            },
            description: {
              id: "Mengukur latensi paket jaringan dari cabang terluar (Kupang, Jayapura) ke cloud ERP, serta memastikan traffic shaping memprioritaskan ERP.",
              en: "Benchmark WAN latency and QoS priorities from remote eastern branches (Kupang, Jayapura) to central Cloud ERP."
            },
            framework: "TOGAF Phase D Baseline",
            kpi: { id: "Latensi Transaksi ERP < 100ms", en: "ERP Transaction Latency < 100ms" },
            status: "completed"
          },
          {
            id: "m1-2-9",
            title: {
              id: "Audit Siklus Patching & Manajemen Kerentanan Server",
              en: "Vulnerability Scanning & Patch Management Audit"
            },
            description: {
              id: "Mengevaluasi pemindaian kerentanan otomatis di 40 gateway cabang dan memastikan patching CVE Kritis selesai < 14 hari.",
              en: "Evaluate automated vulnerability scanning across 40 branch gateways and verify critical CVE patch cycle is under 14 days."
            },
            framework: "NIST CSF 2.0 ID.RA",
            kpi: { id: "Siklus Patch Kritis < 14 Hari", en: "Critical Patch Cycle < 14 Days" },
            status: "completed"
          },
          {
            id: "m1-2-10",
            title: {
              id: "Audit Dynamic Auto-Scaling & CDN Platform EdTech",
              en: "Cloud Auto-Scaling & CDN Edge Audit (Erlangga Digital)"
            },
            description: {
              id: "Meninjau arsitektur cloud GCP/AWS Erlangga Digital untuk memvalidasi auto-scaling & caching CDN saat lonjakan ujian nasional.",
              en: "Review Cloud infrastructure hosting Erlangga Digital EdTech app to validate auto-scaling rules and CDN caching during exam surges."
            },
            framework: "TOGAF Phase D Capacity",
            kpi: { id: "Cache Hit Ratio CDN > 90%", en: "CDN Cache Hit Ratio > 90%" },
            status: "completed"
          },
          {
            id: "m1-2-11",
            title: {
              id: "Audit Aggregasi Log Keamanan Terpusat (SIEM/SOC)",
              en: "Centralized Security Log Aggregation & SIEM Audit"
            },
            description: {
              id: "Mengaudit pengumpulan log keamanan real-time dari firewall cabang, domain controller, dan basis data ke SIEM terpusat.",
              en: "Audit continuous security log ingestion from branch firewalls, domain controllers, and cloud databases into central SIEM."
            },
            framework: "NIST CSF 2.0 DE.AE",
            kpi: { id: "Pengumpulan Log Cabang 100%", en: "100% Branch Log Retention" },
            status: "completed"
          },
          {
            id: "m1-2-12",
            title: {
              id: "Audit Keamanan Fisik & Lingkungan Ruang Server Cabang",
              en: "Physical Security & Environmental Controls Audit"
            },
            description: {
              id: "Mengaudit akses fisik, CCTV, pemadam kebakaran, dan daya cadangan UPS di ruang server 40 cabang regional.",
              en: "Audit physical access controls, CCTV, fire suppression, and battery UPS runtime in server rooms across 40 regional hubs."
            },
            framework: "NIST CSF 2.0 PR.PS",
            kpi: { id: "Daya UPS Darurat > 30 Menit", en: "UPS Runtime > 30 Minutes" },
            status: "completed"
          },
          {
            id: "m1-2-13",
            title: {
              id: "Audit Resiliensi Anti-Ransomware & Backup Imutabel Air-Gap",
              en: "Ransomware Resilience & Air-Gapped Immutable Backup Audit"
            },
            description: {
              id: "Mengevaluasi imutabilitas cadangan data (WORM/air-gap) dan menguji pemulihan basis data ERP dari backup < 1 jam.",
              en: "Evaluate backup immutability (WORM/air-gap) against ransomware attacks and test ERP database restoration < 1 hour."
            },
            framework: "NIST CSF 2.0 PR.DS",
            kpi: { id: "Uji Pemulihan Backup < 1 Jam", en: "Backup Restore Test < 1h" },
            status: "completed"
          }
        ]
      },
      {
        id: "m1-c3",
        title: {
          id: "Wawancara Direksi (CFO/COO) & Penyelarasan Kepala Cabang",
          en: "C-Suite & Regional Branch Stakeholder Discovery (CFO/COO, 40+ Branch Leads)"
        },
        framework: "TOGAF ADM Phase A & Phase B",
        items: [
          {
            id: "m1-3-1",
            title: {
              id: "Wawancara Visi Strategis Direksi (CEO / CFO / COO)",
              en: "Executive C-Suite Strategic Vision Discovery Interviews"
            },
            description: {
              id: "Melakukan sesi wawancara terstruktur dengan CEO, CFO, dan COO untuk menggali pendorong bisnis strategis & mandat transformasi TI.",
              en: "Conduct structured discovery sessions with CEO, CFO, and COO to capture strategic business objectives & IT transformation mandate."
            },
            framework: "TOGAF ADM Phase A",
            kpi: { id: "Dokumen Visi Disetujui Board", en: "Signed Vision Document" },
            status: "completed"
          },
          {
            id: "m1-3-2",
            title: {
              id: "Survei Hambatan Operasional 40+ Kepala Cabang Regional",
              en: "40+ Regional Branch Managers Operational Survey"
            },
            description: {
              id: "Menyebarkan survei operasional ke 40+ kepala cabang untuk memetakan keterlambatan stok, kelambatan sistem, dan proses manual.",
              en: "Distribute and analyze operational surveys across 40+ regional branch leads to capture fulfillment delays and manual workarounds."
            },
            framework: "TOGAF ADM Phase B",
            kpi: { id: "Respon Survei Cabang 100%", en: "100% Branch Survey Response" },
            status: "completed"
          },
          {
            id: "m1-3-3",
            title: {
              id: "Audit Keuangan TI, Penghematan Lisensi & Kontrak Telko (CFO)",
              en: "CFO Financial Controls, CAPEX/OPEX & License Audit"
            },
            description: {
              id: "Meninjau pengeluaran TI, lisensi ERP/CRM/HRMS/Cloud, dan kontrak telekomunikasi bersama CFO untuk efisiensi biaya 10-15%.",
              en: "Review IT expenditure, ERP/CRM/Cloud software licensing, and telecom contracts with CFO team to identify 10-15% cost savings."
            },
            framework: "TOGAF ADM Phase A Financial",
            kpi: { id: "Target Efisiensi Biaya 15%", en: "15% Cost Savings Identified" },
            status: "completed"
          },
          {
            id: "m1-3-4",
            title: {
              id: "Pemetaan Alur Rantai Pasok Gudang Pusat & Distribusi (COO)",
              en: "COO Supply Chain & Distribution Logistics Mapping"
            },
            description: {
              id: "Memetakan alur rantai pasok dari Cetak GAP → Gudang Pusat Ciracas → 40 Cabang → Sekolah/Toko Buku menggunakan diagram BPMN.",
              en: "Map end-to-end supply chain operational flows from GAP Printing → Central Warehouse → 40 Branches → School fulfillment."
            },
            framework: "TOGAF ADM Phase B Business",
            kpi: { id: "Diagram BPMN Rantai Pasok Live", en: "Live Supply Chain BPMN Map" },
            status: "completed"
          },
          {
            id: "m1-3-5",
            title: {
              id: "Penyelarasan Produk Digital EdTech & Kebutuhan LMS",
              en: "EdTech Product Lead & Digital Unit Roadmap Discovery"
            },
            description: {
              id: "Mewawancarai pimpinan Erlangga Digital untuk memahami kebutuhan integrasi LMS sekolah, langganan siswa, dan trafik ujian.",
              en: "Interview Erlangga Digital EdTech product leaders to align LMS integration requirements, subscriptions, and exam load scaling."
            },
            framework: "TOGAF ADM Phase A/B",
            kpi: { id: "Cetak Biru Arsitektur EdTech", en: "EdTech Architecture Blueprint" },
            status: "completed"
          },
          {
            id: "m1-3-6",
            title: {
              id: "Penjadwalan Produksi Pabrik Cetak GAP & Integrasi ERP",
              en: "GAP Offset Printing Scheduling & ERP Sync Discovery"
            },
            description: {
              id: "Mewawancarai manajer operasional cetak GAP untuk mengevaluasi alur penjadwalan mesin dan visibilitas stok kertas di ERP.",
              en: "Interview GAP printing plant ops managers to evaluate press scheduling workflows and raw paper stock visibility in ERP."
            },
            framework: "TOGAF Phase B Manufacturing",
            kpi: { id: "Sinkronisasi Bahan Baku Otomatis", en: "Auto Paper Stock Sync" },
            status: "completed"
          },
          {
            id: "m1-3-7",
            title: {
              id: "Penyelarasan Alur Kerja POS Toko Buku & Tim Sales Lapangan",
              en: "Retail POS & Sales Field Force Workflow Alignment"
            },
            description: {
              id: "Mengaudit transaksi kasir POS Eureka Book House dan adopsi CRM mobile pada tim sales yang mengunjungi sekolah-sekolah.",
              en: "Audit point-of-sale (POS) checkout workflows and mobile CRM check-in compliance among field sales representatives."
            },
            framework: "TOGAF Phase B Commercial",
            kpi: { id: "Kepatuhan Check-in CRM > 90%", en: "CRM Check-in Compliance > 90%" },
            status: "completed"
          },
          {
            id: "m1-3-8",
            title: {
              id: "Penyelarasan HR & Sinkronisasi Biometrik Presensi Cabang",
              en: "HR Alignment & Multi-Branch Attendance Sync Discovery"
            },
            description: {
              id: "Meninjau kendala sinkronisasi presensi biometrik dari 40 cabang ke Darwinbox HRMS untuk kepastian tanggal cut-off payroll.",
              en: "Review HR pain points regarding biometric attendance sync from 40 regional hubs into Darwinbox HRMS for on-time payroll."
            },
            framework: "TOGAF Phase B Organization",
            kpi: { id: "Presisi Payroll Tepat Waktu 100%", en: "100% On-Time Payroll Cut-Off" },
            status: "completed"
          },
          {
            id: "m1-3-9",
            title: {
              id: "Penilaian Kompetensi Tim TI Internal & Pemetaan Training",
              en: "Internal IT Staff Skill Baseline & Competency Discovery"
            },
            description: {
              id: "Melakukan penilaian kompetensi teknis tim TI internal (jaringan, cloud, DB, helpdesk) untuk menyusun matriks pelatihan.",
              en: "Conduct a technical competency assessment of internal IT personnel across networking, cloud, DB, and support to plan training."
            },
            framework: "TOGAF Capability Assessment",
            kpi: { id: "Matriks Kompetensi TI Terbit", en: "IT Skills Matrix Published" },
            status: "completed"
          },
          {
            id: "m1-3-10",
            title: {
              id: "Audit Baseline Tiket Helpdesk ITSM & MTTR Cabang",
              en: "Branch IT Helpdesk Ticket Baseline & MTTR Audit"
            },
            description: {
              id: "Mengekstrak riwayat tiket helpdesk 6 bulan untuk menghitung baseline MTTR cabang dan mengidentifikasi 3 masalah paling sering.",
              en: "Extract 6-month helpdesk ticket history to calculate baseline MTTR across regional branches and isolate top 3 recurring issues."
            },
            framework: "TOGAF / ITIL Baseline",
            kpi: { id: "Baseline MTTR Terukur", en: "Baseline MTTR Benchmark Active" },
            status: "completed"
          },
          {
            id: "m1-3-11",
            title: {
              id: "Audit Kebutuhan Regulasi e-Faktur Pajak & Registrasi ISBN",
              en: "Statutory E-Tax Invoice & ISBN Regulation Audit"
            },
            description: {
              id: "Memetakan kebutuhan integrasi faktur pajak e-Faktur pada ERP dan registrasi ISBN buku digital untuk kepatuhan hukum.",
              en: "Map e-Faktur automated tax sync in Dynamics 365 ERP and ISBN registry compliance for physical and digital books."
            },
            framework: "TOGAF Compliance Audit",
            kpi: { id: "Sinkronisasi e-Faktur 100% Patuh", en: "100% e-Faktur Tax Compliance" },
            status: "completed"
          },
          {
            id: "m1-3-12",
            title: {
              id: "Lokakarya Konsensus Metrik Dasbor Eksekutif PowerBI",
              en: "Executive PowerBI Dashboard Metric Consensus Workshop"
            },
            description: {
              id: "Memfasilitasi lokakarya bersama Direksi untuk menyepakati 10 KPI utama yang akan ditampilkan pada Dasbor PowerBI Bulan 2.",
              en: "Facilitate C-Suite workshop to secure formal sign-off on 10 standardized KPIs for the Month 2 PowerBI Executive Dashboard."
            },
            framework: "TOGAF Architecture Vision",
            kpi: { id: "10 KPI Utama Disetujui Board", en: "10 Core KPIs C-Suite Approved" },
            status: "completed"
          },
          {
            id: "m1-3-13",
            title: {
              id: "Penilaian Kesiapan Manajemen Perubahan Budaya Organisasi",
              en: "Enterprise Change Readiness & Risk Assessment"
            },
            description: {
              id: "Mengevaluasi kesiapan budaya organisasi & literasi teknologi staf cabang untuk menyusun rencana komunikasi perubahan.",
              en: "Evaluate organizational readiness & branch staff tech literacy to construct targeted change management communication plans."
            },
            framework: "TOGAF Transformation Readiness",
            kpi: { id: "Matriks Kesiapan Perubahan Live", en: "Change Readiness Matrix Live" },
            status: "completed"
          }
        ]
      }
    ]
  },

  // ==========================================
  // MONTH 2: Data Pipeline Integration & Real-Time Executive Dashboard Launch
  // ==========================================
  {
    month: 2,
    monthTitle: {
      id: "Bulan 2 (Hari 31–60) — Integrasi Pipa Data & Peluncuran Dasbor Eksekutif Real-Time",
      en: "Month 2 (Days 31–60) — Data Pipeline Integration & Real-Time Executive Dashboard Launch"
    },
    totalItems: 36,
    columns: [
      {
        id: "m2-c1",
        title: {
          id: "Pipa Data ETL Otomatis & Arsitektur Data Warehouse",
          en: "Automated ETL & Warehouse Pipeline Engineering (GCP / Snowflake, WMS/POS CDC)"
        },
        framework: "Kimball Data Warehousing & Real-Time Streaming",
        items: [
          {
            id: "m2-1-1",
            title: {
              id: "Perancangan Matriks Bus Kimball & Star Schema Enterprise",
              en: "Kimball Bus Matrix & Dimensional Star Schema Design"
            },
            description: {
              id: "Merancang Matriks Bus Enterprise memetakan proses bisnis (Penjualan, Pengiriman, Stok, Retur) terhadap dimensi terkonformasi.",
              en: "Design Enterprise Bus Matrix mapping core business processes (Orders, Shipments, Inventory, Returns) against conformed dimensions."
            },
            framework: "Kimball DW Methodology",
            kpi: { id: "Star Schema Matrix Disetujui", en: "Conformed Star Schema Active" },
            status: "in_progress"
          },
          {
            id: "m2-1-2",
            title: {
              id: "Implementasi Debezium CDC Real-Time dari ERP & POS WMS",
              en: "Log-Based CDC Pipeline Setup for WMS & POS Nodes"
            },
            description: {
              id: "Menggelar Change Data Capture (CDC) berbasis log Debezium/PubSub dari basis data ERP & POS WMS dengan latensi < 5 detik.",
              en: "Deploy log-based CDC via Debezium/PubSub from Dynamics ERP and branch WMS/POS databases with latency strictly < 5s."
            },
            framework: "Real-Time CDC Architecture",
            kpi: { id: "Latensi CDC Stream < 5 Detik", en: "CDC Stream Latency < 5s" },
            status: "in_progress"
          },
          {
            id: "m2-1-3",
            title: {
              id: "Arsitektur Layering Data Warehouse (Staging, ODS, Data Mart)",
              en: "Multi-Tiered Warehouse Layering Architecture"
            },
            description: {
              id: "Membangun 3 lapisan data warehouse cloud (Staging `stg_`, Integration `int_`, dan Data Mart `mart_`) dengan izin terisolasi.",
              en: "Architect cloud data warehouse into Raw Staging, Integration/ODS, and Access Data Mart layers with segregated permissions."
            },
            framework: "Kimball Layering",
            kpi: { id: "Arsitektur 3 Layer Live", en: "3-Tier Warehouse Architecture Live" },
            status: "in_progress"
          },
          {
            id: "m2-1-4",
            title: {
              id: "Otomatisasi Dimensi Berubah Lambat (SCD Type 1 & 2 dbt)",
              en: "Slowly Changing Dimensions (SCD Type 1 & 2) Engine"
            },
            description: {
              id: "Membangun transformasi dbt SCD Type 2 dengan timestamp (`valid_from`, `valid_to`) untuk melacak histori harga buku dan zona gudang.",
              en: "Develop automated dbt transformations for SCD Type 1 overwrites and SCD Type 2 historical tracking across book prices and branch zones."
            },
            framework: "Kimball / dbt Core",
            kpi: { id: "Histori SCD2 Terlacak 100%", en: "100% SCD2 History Tracked" },
            status: "in_progress"
          },
          {
            id: "m2-1-5",
            title: {
              id: "Mesin Streaming Ingestion Parquet/ORC (Dataflow / Snowpipe)",
              en: "Real-Time Ingestion Engine (Dataflow / Snowpipe)"
            },
            description: {
              id: "Menyiapkan pipeline streaming Dataflow/Snowpipe untuk mengubah payload JSON transaksi POS & WMS ke format kolumnar Parquet.",
              en: "Deploy managed streaming ingestion pipelines converting JSON WMS barcode streams to optimized columnar Parquet formats."
            },
            framework: "Cloud Dataflow / Streaming",
            kpi: { id: "Format Kolumnar Parquet Live", en: "Parquet Format Ingestion Active" },
            status: "in_progress"
          },
          {
            id: "m2-1-6",
            title: {
              id: "Penanganan Dead Letter Queue (DLQ) & Schema Evolution",
              en: "Dead Letter Queue (DLQ) & Schema Drift Resilience"
            },
            description: {
              id: "Menerapkan DLQ untuk mengisolasi payload data yang rusak secara otomatis tanpa menghentikan pemrosesan pipeline utama.",
              en: "Implement DLQ isolation for corrupted stream payloads, allowing main data pipeline partitions to process continuously with zero downtime."
            },
            framework: "Resiliency Engineering",
            kpi: { id: "Zero Downtime Pipeline", en: "Zero Pipeline Downtime" },
            status: "in_progress"
          },
          {
            id: "m2-1-7",
            title: {
              id: "Deduplikasi Data & Pemrosesan Exactly-Once (Idempotent)",
              en: "Deterministic Idempotent Ingestion & Deduplication"
            },
            description: {
              id: "Membangun rutin ingest idempoten menggunakan windowing SQL (`ROW_NUMBER()`) untuk menjamin pemrosesan data exactly-once saat retri koneksi.",
              en: "Build idempotent ingestion routines using primary key hashing to guarantee exactly-once semantic processing during network retries."
            },
            framework: "Streaming Data Engineering",
            kpi: { id: "Duplikasi Data 0%", en: "Zero Data Duplication" },
            status: "in_progress"
          },
          {
            id: "m2-1-8",
            title: {
              id: "Rekonsiliasi Batch Otomatis Sync Offline Cabang Remot",
              en: "Offline-First Branch Sync & Reconciliation Engine"
            },
            description: {
              id: "Membuat prosedur rekonsiliasi batch saat koneksi WAN cabang pulih untuk mencocokkan antrean event SQLite ke data warehouse.",
              en: "Establish batch reconciliation routines to ingest offline branch SQLite queues upon WAN link restoration without data mismatch."
            },
            framework: "Logistics Edge Engineering",
            kpi: { id: "Rekonsiliasi Auto Post-WAN", en: "Auto WAN Restoration Sync" },
            status: "in_progress"
          },
          {
            id: "m2-1-9",
            title: {
              id: "Pengujian Kualitas Data Otomatis dbt & Grafik Silsilah Data",
              en: "dbt Automated Data Quality Testing & Lineage Graph"
            },
            description: {
              id: "Mengintegrasikan pengujian data dbt (`not_null`, `unique`, `relationships`) dan menghasilkan grafik data lineage otomatis.",
              en: "Embed automated data quality assertions in dbt build jobs and generate dynamic data lineage graphs from source to data marts."
            },
            framework: "Data Governance / dbt",
            kpi: { id: "Uji Kualitas Data 100% Lulus", en: "100% dbt Quality Tests Passed" },
            status: "in_progress"
          },
          {
            id: "m2-1-10",
            title: {
              id: "Optimasi Partisi Tanggal & Clustering Data Warehouse",
              en: "Warehouse Partitioning & Clustering Strategy"
            },
            description: {
              id: "Mengatur partisi tanggal dan clustering multi-kolom (`branch_id`, `isbn_code`) pada BigQuery untuk menghemat biaya kueri > 70%.",
              en: "Configure date-partitioning and multi-column clustering on BigQuery/Snowflake to reduce bytes scanned per query by > 70%."
            },
            framework: "Cloud DW Optimization",
            kpi: { id: "Biaya Kueri Hemat 70%", en: "70% Query Cost Reduction" },
            status: "in_progress"
          },
          {
            id: "m2-1-11",
            title: {
              id: "Observabilitas Pipeline Terpadu & Alerting PagerDuty/Slack",
              en: "Pipeline Observability, SLA Monitoring & Alerting"
            },
            description: {
              id: "Mengintegrasikan telemetri Airflow/dbt ke Slack & PagerDuty untuk notifikasi instan jika keterlambatan SLA ingest > 15 menit.",
              en: "Integrate Apache Airflow telemetry with PagerDuty and Slack to trigger alerts if pipeline ingestion SLA lag exceeds 15 minutes."
            },
            framework: "DataOps Reliability",
            kpi: { id: "Notifikasi SLA Lag < 15m", en: "SLA Lag Alerts < 15m" },
            status: "in_progress"
          },
          {
            id: "m2-1-12",
            title: {
              id: "Kebijakan Retensi Data Otomatis & Storage Coldline",
              en: "Automated Data Retention & Cold Storage Governance"
            },
            description: {
              id: "Menetapkan kebijakan siklus hidup Cloud Storage yang memindahkan file temporary berusia > 30 hari ke Coldline/Archive otomatis.",
              en: "Establish cloud lifecycle policies automatically moving raw staging files older than 30 days to Coldline storage."
            },
            framework: "Data Governance & FinOps",
            kpi: { id: "Pemindahan Coldline Otomatis", en: "Auto Coldline Migration Active" },
            status: "in_progress"
          }
        ]
      },
      {
        id: "m2-c2",
        title: {
          id: "Dasbor Eksekutif PowerBI Real-Time & Tata Kelola KPI",
          en: "PowerBI Executive Dashboard & KPI Scorecard Deployment (Single Source of Truth)"
        },
        framework: "PowerBI Enterprise Governance & Metric Store",
        items: [
          {
            id: "m2-2-1",
            title: {
              id: "Pengalokasian Kapasitas Dedicated PowerBI Enterprise",
              en: "PowerBI Enterprise Architecture & Dedicated Capacity"
            },
            description: {
              id: "Mengonfigurasi node PowerBI Premium/Fabric F-capacity dengan workspace terpisah per lingkungan (Dev, Test, Prod).",
              en: "Deploy PowerBI Premium / Fabric dedicated capacity nodes with isolated workspaces for Dev, Test, and Production environments."
            },
            framework: "PowerBI Enterprise Admin",
            kpi: { id: "Kapasitas Dedicated Live", en: "Dedicated Capacity Live" },
            status: "in_progress"
          },
          {
            id: "m2-2-2",
            title: {
              id: "Deployment Pipelines Git & ALM Toolkit Format PBIP",
              en: "ALM Toolkit & Git-Integrated Deployment Pipelines"
            },
            description: {
              id: "Menerapkan PowerBI Deployment Pipelines terintegrasi Git (`.pbip`) dan ALM Toolkit untuk migrasi skema metadata terotomatisasi.",
              en: "Implement PowerBI Deployment Pipelines with Git integration using PBIP format and ALM Toolkit for schema migrations."
            },
            framework: "PowerBI ALM / DevOps",
            kpi: { id: "Migrasi Git ALM Otomatis", en: "Git ALM Deployment Active" },
            status: "in_progress"
          },
          {
            id: "m2-2-3",
            title: {
              id: "Penerapan Model Star Schema Rigidus & Sentralisasi DAX",
              en: "Strict Star Schema Enforcement & Centralized DAX"
            },
            description: {
              id: "Memastikan relasi 1-to-many arah tunggal pada model PowerBI dan memusatkan seluruh formulasi kalkulasi ke tabel `_Measures`.",
              en: "Enforce strict 1-to-many single-direction relationships across PowerBI models and centralize DAX logic inside `_Measures` tables."
            },
            framework: "PowerBI Modeling",
            kpi: { id: "100% Relasi Single-Direction", en: "100% Single-Direction Relationships" },
            status: "in_progress"
          },
          {
            id: "m2-2-4",
            title: {
              id: "Arsitektur Model Komposit (DirectQuery + Import Mode)",
              en: "Composite Model Architecture (DirectQuery + Import)"
            },
            description: {
              id: "Membangun model komposit: DirectQuery untuk stok WMS real-time dan Import Mode untuk histori penjualan 5+ tahun.",
              en: "Build Composite Semantic Model: DirectQuery for live WMS stock & POS cards, combined with Import Mode for 5+ years history."
            },
            framework: "PowerBI Hybrid Storage",
            kpi: { id: "Render Dasbor < 2 Detik", en: "Dashboard Render Time < 2s" },
            status: "in_progress"
          },
          {
            id: "m2-2-5",
            title: {
              id: "Optimasi Memori VertiPaq & Audit Profiling DAX Studio",
              en: "VertiPaq Memory Optimization & DAX Profiling"
            },
            description: {
              id: "Melakukan audit DAX Studio untuk memisah kolom datetime kardinalitas tinggi dan memangkas ukuran dataset hingga > 50%.",
              en: "Conduct DAX Studio and VertiPaq Analyzer audits to split high-cardinality fields and optimize dataset memory usage."
            },
            framework: "PowerBI Performance",
            kpi: { id: "Hemat Memori Dataset 50%", en: "50% Dataset Memory Reduction" },
            status: "in_progress"
          },
          {
            id: "m2-2-6",
            title: {
              id: "Keamanan Row-Level Security (RLS) Dinamis & OLS Financial",
              en: "Dynamic Row-Level Security (RLS) & Column Security (OLS)"
            },
            description: {
              id: "Memasang RLS dinamis berbasis Entra ID per wilayah kepala cabang serta mengaktifkan OLS untuk melindungi margin keuangan.",
              en: "Configure dynamic RLS mapped to Active Directory branch roles and apply Column/Object Security (OLS) on margin metrics."
            },
            framework: "PowerBI Security Governance",
            kpi: { id: "RLS Cabang & OLS Marjin Aktif", en: "Dynamic Branch RLS Active" },
            status: "in_progress"
          },
          {
            id: "m2-2-7",
            title: {
              id: "Penyusunan Executive KPI Scorecard (Single Source of Truth)",
              en: "Executive KPI Scorecard & Single Source of Truth"
            },
            description: {
              id: "Membangun PowerBI Scorecard terstandar: Turn-Over Stok, SLA Pengiriman %, Penjualan vs Target, dan Rasio Retur yang disetujui Direksi.",
              en: "Implement PowerBI Scorecards defining standardized Enterprise KPIs formally signed off by Finance, Operations, and Sales Directors."
            },
            framework: "PowerBI Metric Store",
            kpi: { id: "Persetujuan KPI Disahkan Board", en: "C-Suite Signed Off KPIs" },
            status: "in_progress"
          },
          {
            id: "m2-2-8",
            title: {
              id: "Konfigurasi Kebijakan Partisi Refresh Incremental & Hybrid",
              en: "Incremental Refresh & Hybrid Partition Policy"
            },
            description: {
              id: "Mengatur partisi refresh incremental (arsip 3 tahun, partisi harian 10 hari) untuk mempercepat refresh dataset < 3 menit.",
              en: "Configure PowerBI Incremental Refresh policies (3 years archive, 10 days hot partition) shortening dataset refresh to < 3 mins."
            },
            framework: "PowerBI Dataset Refresh",
            kpi: { id: "Durasi Refresh Dataset < 3 Menit", en: "Dataset Refresh Time < 3m" },
            status: "in_progress"
          },
          {
            id: "m2-2-9",
            title: {
              id: "Tampilan Mobile Khusus Direksi & Notifikasi Ambang Kritis",
              en: "Mobile-Optimized Executive Interface & Alerts"
            },
            description: {
              id: "Merancang tampilan mobile PowerBI khusus smartphone Direksi dan notifikasi push MS Teams saat stok gudang di bawah batas kritis.",
              en: "Design dedicated mobile layout viewports for C-Suite smartphones with automated Teams push alerts for critical stockout risks."
            },
            framework: "Mobile BI UX Governance",
            kpi: { id: "Notifikasi Teams Real-Time", en: "Real-Time Teams Push Alerts" },
            status: "in_progress"
          },
          {
            id: "m2-2-10",
            title: {
              id: "Penerapan Label Sensitivitas Microsoft Purview & Tenant Governance",
              en: "PowerBI Tenant Governance & Purview Protection"
            },
            description: {
              id: "Memblokir opsi Publish to Web, membatasi ekspor data mentah, dan menerapkan Label Sensitivitas Purview (`Confidential`).",
              en: "Enforce strict Tenant settings: disable public web publishing, limit raw exports, and apply Purview Sensitivity Labels."
            },
            framework: "Microsoft Purview / Governance",
            kpi: { id: "Label Confidential Terpasang 100%", en: "100% Purview Label Compliance" },
            status: "in_progress"
          },
          {
            id: "m2-2-11",
            title: {
              id: "Uji Penerimaan Pengguna (UAT) & Rekonsiliasi Angka Laporan",
              en: "User Acceptance Testing (UAT) & Financial Sign-Off"
            },
            description: {
              id: "Melakukan UAT bersama tim Keuangan & Operasional untuk memastikan pencocokan angka dasbor 100% presisi terhadap GL Dynamics ERP.",
              en: "Execute structured UAT testing with Finance & Operations, reconciling aggregated PowerBI metrics against ERP General Ledger."
            },
            framework: "Quality Assurance & Control",
            kpi: { id: "Presisi Angka Keuangan 100%", en: "100% Financial Reconciliation" },
            status: "in_progress"
          },
          {
            id: "m2-2-12",
            title: {
              id: "Dasbor Pemantauan Adopsi Pengguna & Kinerja Dasbor",
              en: "Executive Adoption Telemetry & Performance Audit"
            },
            description: {
              id: "Membangun dasbor admin berbasis Activity Logs untuk melacak frekuensi login Direksi, waktu muat laporan, dan adopsi cabang.",
              en: "Deploy custom administrative reports tracking C-suite login frequencies, page load latencies, and active adoption rates."
            },
            framework: "IT Service Management",
            kpi: { id: "Adopsi Direksi > 90%", en: "C-Suite Adoption Rate > 90%" },
            status: "in_progress"
          }
        ]
      },
      {
        id: "m2-c3",
        title: {
          id: "Manajemen Keuangan TI (TBM), FinOps Cloud & Budget SecOps",
          en: "IT Financial Management (TBM), Cloud FinOps & SecOps Budget Projection"
        },
        framework: "TBM Framework & Cloud FinOps Standards",
        items: [
          {
            id: "m2-3-1",
            title: {
              id: "Pemetaan Alokasi Biaya Taksonomi TBM (Cost Pool ke IT Tower)",
              en: "TBM Framework Cost Allocation & IT Tower Taxonomy"
            },
            description: {
              id: "Mengelompokkan pengeluaran data pipeline ke dalam Cost Pool (Cloud Compute, Storage, Lisensi) dan memetakkannya ke IT Tower.",
              en: "Map all Month 2 data pipeline expenses according to standard TBM taxonomy into Cost Pools and specific IT Towers."
            },
            framework: "TBM Taxonomy Standard",
            kpi: { id: "Pemetaan TBM 100% Selesai", en: "100% TBM Taxonomy Mapping" },
            status: "in_progress"
          },
          {
            id: "m2-3-2",
            title: {
              id: "Pelabelan Tagging Aset Cloud & Laporan Showback 40 Cabang",
              en: "Cloud FinOps Resource Tagging & Branch Showback Model"
            },
            description: {
              id: "Menerapkan aturan resource tagging wajib pada seluruh aset cloud dan menyusun laporan Showback bulanan per cabang.",
              en: "Mandate strict cloud resource tagging across GCP/AWS and publish monthly Showback reports detailing costs per branch."
            },
            framework: "Cloud FinOps Principles",
            kpi: { id: "Resource Tagging Akurat 100%", en: "100% Resource Tagging Compliance" },
            status: "in_progress"
          },
          {
            id: "m2-3-3",
            title: {
              id: "Pembatasan Kuota Kueri Harian & Auto-Suspend Cloud DW",
              en: "BigQuery / Snowflake Capacity Procurement & Cost Caps"
            },
            description: {
              id: "Mengatur komitmen kapasitas BigQuery Edition dan batas kuota kueri harian untuk mencegah lonjakan biaya tak terduga.",
              en: "Procure BigQuery capacity commitments and configure daily query spending caps and automated alerts to control costs."
            },
            framework: "Cloud FinOps Governance",
            kpi: { id: "Batas Kuota Anggaran Aktif", en: "Hard Daily Budget Caps Active" },
            status: "in_progress"
          },
          {
            id: "m2-3-4",
            title: {
              id: "Klasifikasi Akuntansi CapEx vs OpEx (Kapitalisasi PSAK 19)",
              en: "CapEx vs OpEx Accounting (IAS 38 / PSAK 19 Compliance)"
            },
            description: {
              id: "Menyusun dokumentasi keuangan yang mengklasifikasikan pembuatan arsitektur pipeline sebagai CapEx (PSAK 19) dan cloud SaaS sebagai OpEx.",
              en: "Formulate formal IT financial documentation categorizing pipeline engineering as CapEx (PSAK 19) and cloud usage as OpEx."
            },
            framework: "PSAK 19 / IAS 38 Compliance",
            kpi: { id: "Dokumen Kapitalisasi Disetujui", en: "Capitalization Document Approved" },
            status: "in_progress"
          },
          {
            id: "m2-3-5",
            title: {
              id: "Otomatisasi Infrastruktur via Code (Terraform) Governance",
              en: "Infrastructure as Code (Terraform) SecOps Governance"
            },
            description: {
              id: "Mengodekan 100% infrastruktur cloud (dataset, PubSub, IAM, workspace) menggunakan modul Terraform di Git.",
              en: "Codify 100% of cloud infrastructure resources (datasets, PubSub, IAM, workspaces) using Terraform modules stored in Git."
            },
            framework: "DevSecOps / Terraform",
            kpi: { id: "Infrastruktur Terraform 100%", en: "100% Infrastructure in Terraform" },
            status: "in_progress"
          },
          {
            id: "m2-3-6",
            title: {
              id: "Penerapan Prinsip Least Privilege & Akses Zero Trust IAM",
              en: "Zero Trust IAM Policy & Principle of Least Privilege"
            },
            description: {
              id: "Membatasi akses pipeline menggunakan Service Account dengan peran IAM minimal dan melarang static service key permanen.",
              en: "Enforce Zero Trust security restricting pipeline access using dedicated Service Accounts with minimal IAM roles."
            },
            framework: "SecOps / Zero Trust",
            kpi: { id: "0 Static Key Permanen", en: "Zero Permanent Static Keys" },
            status: "in_progress"
          },
          {
            id: "m2-3-7",
            title: {
              id: "Enkripsi Key Management Service (KMS) & Rotasi Kredensial",
              en: "Key Management Service (KMS) & Secret Governance"
            },
            description: {
              id: "Memasang kunci enkripsi CMEK via KMS untuk data at-rest serta memusatkan kredensial ke Vault dengan rotasi otomatis 90 hari.",
              en: "Implement Customer-Managed Encryption Keys (CMEK) via KMS and centralize database connection strings inside Secret Manager."
            },
            framework: "SecOps Encryption",
            kpi: { id: "Rotasi Kredensial 90 Hari", en: "90-Day Secret Rotation Active" },
            status: "in_progress"
          },
          {
            id: "m2-3-8",
            title: {
              id: "Pemindaian Keamanan Pipeline CI/CD (SAST & Secret Detector)",
              en: "DevSecOps CI/CD Integration & Automated Security Scan"
            },
            description: {
              id: "Mengintegrasikan pemindaian kode SAST, kerentanan kontainer (Trivy), dan kebocoran kunci (GitGuardian) ke pipeline CI/CD.",
              en: "Embed SAST security scanning, container vulnerability scans, and secret-detection hooks into CI/CD build pipelines."
            },
            framework: "DevSecOps Integration",
            kpi: { id: "Blokir Deployment Otomatis", en: "Auto Block Vulnerable Builds" },
            status: "in_progress"
          },
          {
            id: "m2-3-9",
            title: {
              id: "Pengumpulan Log Audit SIEM & Kepatuhan Audit SOC2",
              en: "Centralized Audit Logging, SIEM Integration & SOC2"
            },
            description: {
              id: "Mengalirkan log audit BigQuery & PowerBI ke SIEM terpusat (Sentinel) dan memasang peringatan eskalasi akses otomatis.",
              en: "Stream BigQuery and PowerBI audit logs into central SIEM with automated alerts for privilege escalation events."
            },
            framework: "SOC2 / ISO 27001 Audit",
            kpi: { id: "100% Log SIEM Terkumpul", en: "100% Log Stream SIEM Retention" },
            status: "in_progress"
          },
          {
            id: "m2-3-10",
            title: {
              id: "Simulasi Uji Coba Pemulihan Bencana (DRP) Cloud Pipeline",
              en: "Disaster Recovery (DRP) & Business Continuity Execution"
            },
            description: {
              id: "Melakukan simulasi failover DRP pada pipeline data untuk memvalidasi pemulihan snapshot dengan target RTO < 2j dan RPO < 15m.",
              en: "Execute simulated Disaster Recovery failover test for the data pipeline, verifying recovery objectives meet RTO < 2h and RPO < 15m."
            },
            framework: "IT Resilience DRP",
            kpi: { id: "Uji Failover DRP Sukses", en: "DRP Failover Test Passed" },
            status: "in_progress"
          },
          {
            id: "m2-3-11",
            title: {
              id: "Audit & Negosiasi Lisensi Perangkat Lunak Data Enterprise",
              en: "Software License & Vendor Contract Optimization"
            },
            description: {
              id: "Melakukan audit kontrak lisensi PowerBI, konektor Dynamics ERP, dan dbt Cloud untuk mengeliminasi alokasi lisensi ganda.",
              en: "Audit software subscription contracts across PowerBI, Dynamics ERP connectors, and dbt Cloud to eliminate redundant seats."
            },
            framework: "IT Financial / Vendor Management",
            kpi: { id: "Eliminasi Lisensi Ganda", en: "Zero Redundant License Seats" },
            status: "in_progress"
          },
          {
            id: "m2-3-12",
            title: {
              id: "Laporan Keuangan TI Bulan 2 & Analisis Variansi Anggaran",
              en: "Month 2 Financial Variance Analysis & Executive ROI"
            },
            description: {
              id: "Menerbitkan Laporan Keuangan TI & Tata Kelola SecOps Bulan 2 untuk Direksi, menampilkan realisasi biaya vs anggaran dan indikator ROI.",
              en: "Publish Month 2 IT Financial & SecOps Governance Report to the Executive Board, showcasing cost controls and ROI indicators."
            },
            framework: "TBM Executive Governance",
            kpi: { id: "Laporan Keuangan Disetujui Board", en: "Executive Financial Report Signed" },
            status: "in_progress"
          }
        ]
      }
    ]
  },

  // ==========================================
  // MONTH 3: Branch Operations Strengthening & Future Innovation Prep
  // ==========================================
  {
    month: 3,
    monthTitle: {
      id: "Bulan 3 (Hari 61–90) — Penguatan Operasional Cabang & Persiapan Inovasi Masa Depan",
      en: "Month 3 (Days 61–90) — Branch Operations Strengthening & Future Innovation Prep"
    },
    totalItems: 33,
    columns: [
      {
        id: "m3-c1",
        title: {
          id: "Standarisasi ITSM & Optimasi SLA Cabang 40+ Regional",
          en: "40+ Regional Branch ITSM & Operational Bottleneck Optimization (SLA Alignment)"
        },
        framework: "ITIL v4 Service Management Standards",
        items: [
          {
            id: "m3-1-1",
            title: {
              id: "Alur Kerja Eskalasi Dukungan ITIL v4 3-Tingkat",
              en: "ITIL v4 Service Desk Tiering & Routing Automation"
            },
            description: {
              id: "Membangun alur eskalasi insiden 3 tingkat (Tier 1 Champion Cabang, Tier 2 Pusat, Tier 3 L3 Engineering) terintegrasi portal ITSM.",
              en: "Establish a 3-tier ITIL v4 incident escalation workflow integrated with automated ticket classification in the ITSM portal."
            },
            framework: "ITIL v4 Incident Mgmt",
            kpi: { id: "First Contact Resolution > 70%", en: "First Contact Resolution > 70%" },
            status: "planned"
          },
          {
            id: "m3-1-2",
            title: {
              id: "Penetapan SLA Ketat Uptime Operasional Cabang & ERP",
              en: "Rigid SLA Definition for Branch Uptime & Core Systems"
            },
            description: {
              id: "Menetapkan SLA ketat untuk 40+ cabang: Pemadaman kritis ERP/WMS P1 MTTR < 2 jam, didukung target uptime edge gateway 99.9%.",
              en: "Formalize rigid SLAs for 40+ branches: P1 Critical ERP/WMS outage MTTR < 2 hours with 99.9% edge gateway uptime target."
            },
            framework: "ITIL v4 Service Level Mgmt",
            kpi: { id: "MTTR P1 < 2 Jam & Uptime 99.9%", en: "P1 MTTR < 2h & 99.9% Uptime" },
            status: "planned"
          },
          {
            id: "m3-1-3",
            title: {
              id: "Manajemen Masalah ITIL v4 & Templat RCA 5-Why",
              en: "ITIL v4 Problem Management & Root Cause Analysis (RCA)"
            },
            description: {
              id: "Menerapkan Manajemen Masalah dengan templat RCA 5-Why & Fishbone wajib untuk menghentikan gangguan berulang pada cabang.",
              en: "Implement systematic Problem Management with mandatory 5-Why and Fishbone RCA templates to permanently eliminate recurring issues."
            },
            framework: "ITIL v4 Problem Mgmt",
            kpi: { id: "Reduksi Insiden Berulang 30%", en: "30% Reduction in Recurring Incidents" },
            status: "planned"
          },
          {
            id: "m3-1-4",
            title: {
              id: "Kebijakan Pembekuan Kode (Code Freeze) Musim Puncak Sekolah",
              en: "Change Control & School Peak Season Code Freeze"
            },
            description: {
              id: "Memberlakukan proses persetujuan Change Advisory Board (CAB) dan pembekuan kode (Code Freeze) selama puncak distribusi Juli.",
              en: "Enforce a formal Change Advisory Board (CAB) approval process and mandatory Code Freeze during peak book distribution in July."
            },
            framework: "ITIL v4 Change Enablement",
            kpi: { id: "0 Outage Selama Musim Puncak", en: "Zero Outages During Peak Season" },
            status: "planned"
          },
          {
            id: "m3-1-5",
            title: {
              id: "Validasi Resiliensi Edge Terminal Pemindai WMS Offline",
              en: "Branch Offline-First POS/WMS Edge Resiliency Verification"
            },
            description: {
              id: "Mengaudit penjelajahan lokal (edge caching SQLite) di terminal pemindai WMS 40 cabang untuk menjamin 100% kontinuitas saat WAN putus.",
              en: "Audit local edge caching across 40 branch WMS scanning terminals to guarantee 100% shipping continuity during WAN outages."
            },
            framework: "ITIL v4 Continuity / Edge",
            kpi: { id: "Pemindaian Offline 100% Aktif", en: "100% Offline Scanning Availability" },
            status: "planned"
          },
          {
            id: "m3-1-6",
            title: {
              id: "Formulir Umpan Balik Kepuasan Pengguna (CSI Register)",
              en: "Continuous Service Improvement (CSI) & Branch NPS"
            },
            description: {
              id: "Meluncurkan survei kepuasan staf cabang (CSAT/NPS) dan mengelola Register CSI untuk memantau penyelesaian hambatan regional.",
              en: "Deploy automated post-incident feedback measuring Branch User Satisfaction (CSAT/NPS) and maintain a dynamic CSI Register."
            },
            framework: "ITIL v4 Continuous Improvement",
            kpi: { id: "Skor CSAT Cabang > 85%", en: "Branch CSAT Score > 85%" },
            status: "planned"
          },
          {
            id: "m3-1-7",
            title: {
              id: "Pelacakan Aset TI Terpadu (ITAM Barcode/RFID 40 Cabang)",
              en: "Multi-Branch IT Asset Management (ITAM) & Lifecycle"
            },
            description: {
              id: "Menerapkan pelacakan ITAM barcode/RFID otomatis untuk PC, scanner, printer termal, dan router SD-WAN di 40 lokasi cabang.",
              en: "Implement automated ITAM barcode/RFID tracking for desktop PCs, scanners, printers, and SD-WAN routers across 40 branch locations."
            },
            framework: "ITIL v4 Asset Management",
            kpi: { id: "Akurasi Pelacakan Aset 99%", en: "99% ITAM Tracking Accuracy" },
            status: "planned"
          },
          {
            id: "m3-1-8",
            title: {
              id: "Dasbor Pemantauan Latensi & Peringatan Pelanggaran SLA",
              en: "Network Latency & SLA Monitoring Dashboard"
            },
            description: {
              id: "Memasang agen pemantauan sintetik di setiap hab regional untuk menayangkan latensi WAN & ERP real-time serta notifikasi insiden.",
              en: "Deploy synthetic monitoring agents at each regional hub broadcasting real-time packet loss, WAN latency, and SLA breach warnings."
            },
            framework: "ITIL v4 Monitoring & Event",
            kpi: { id: "Notifikasi Deteksi Anomali < 2m", en: "Anomaly Alert Time < 2m" },
            status: "planned"
          },
          {
            id: "m3-1-9",
            title: {
              id: "Standarisasi Katalog Layanan ITSM Mandiri (Self-Service)",
              en: "ITSM Service Catalog Standardization for Procurement"
            },
            description: {
              id: "Meluncurkan Katalog Layanan ITSM mandiri bagi manajer cabang untuk pengajuan perangkat keras & akses karyawan baru.",
              en: "Launch a self-service ITSM Service Catalog empowering branch managers to request hardware replacement and access onboarding."
            },
            framework: "ITIL v4 Service Catalog",
            kpi: { id: "Siklus Pemenuhan Aset < 3 Hari", en: "Fulfillment Cycle Time < 3 Days" },
            status: "planned"
          },
          {
            id: "m3-1-10",
            title: {
              id: "SOP Penanganan Masalah L1 & Pelatihan Champion TI Cabang",
              en: "Branch IT Champion Upskilling & Local L1 SOPs"
            },
            description: {
              id: "Menerbitkan SOP troubleshooting L1 terstandar dan menyelenggarakan lokakarya triwulanan wajib untuk Champion TI Cabang.",
              en: "Publish standardized L1 troubleshooting SOPs and conduct mandatory quarterly workshops for designated Branch IT Champions."
            },
            framework: "ITIL v4 Knowledge Mgmt",
            kpi: { id: "Mandiri Penyelesaian L1 > 45%", en: "Branch L1 Self-Resolution > 45%" },
            status: "planned"
          },
          {
            id: "m3-1-11",
            title: {
              id: "Protokol Pemeliharaan Perangkat Keras Preventif Gudang",
              en: "Logistics Hub Hardware Preventative Health Checks"
            },
            description: {
              id: "Wajib pemeliharaan preventif bulanan (printer termal, baterai UPS, scanner) di gudang distribusi regional sebelum musim puncak.",
              en: "Mandate monthly preventative hardware maintenance protocols at major distribution warehouses prior to peak demand surges."
            },
            framework: "ITIL v4 Availability Mgmt",
            kpi: { id: "Downtime Gudang Karena Alat 0%", en: "Zero Hardware Dispatch Outages" },
            status: "planned"
          }
        ]
      },
      {
        id: "m3-c2",
        title: {
          id: "Standarisasi SecOps Enterprise & Tata Kelola Jaringan ISO 27001",
          en: "Enterprise SecOps Standardization & Network Governance (ISO 27001)"
        },
        framework: "ISO/IEC 27001:2022 Controls Framework",
        items: [
          {
            id: "m3-2-1",
            title: {
              id: "Otentikasi ZTNA & Akses Berorientasi Peran (ISO 27001 A.5.15)",
              en: "ISO 27001 ZTNA & Role-Based Access Control (RBAC)"
            },
            description: {
              id: "Menggelar ZTNA & MFA via Entra ID di seluruh 40 cabang, membatasi akses sistem secara ketat berdasarkan identitas & kepatuhan perangkat.",
              en: "Roll out Zero Trust Network Access (ZTNA) with RBAC and MFA via Entra ID across 40+ branches, restricting access by device health."
            },
            framework: "ISO 27001 A.5.15 / A.8.2",
            kpi: { id: "Adopsi MFA 100%", en: "100% Enterprise MFA Adoption" },
            status: "planned"
          },
          {
            id: "m3-2-2",
            title: {
              id: "Terowongan Terenkripsi IPSec AES-256 SD-WAN (ISO 27001 A.8.20)",
              en: "Encrypted IPSec SD-WAN Tunnel Governance"
            },
            description: {
              id: "Menyeragamkan topologi SD-WAN dual-uplink dengan terowongan IPSec AES-256 terenkripsi dari 40 cabang ke Data Center Ciracas.",
              en: "Standardize dual-uplink SD-WAN topology with AES-256 encrypted IPSec tunnels connecting 40+ branch routers to HQ Data Center."
            },
            framework: "ISO 27001 A.8.20 / A.8.24",
            kpi: { id: "Enkripsi Lalu Lintas 100%", en: "100% Encrypted IPSec Tunnels" },
            status: "planned"
          },
          {
            id: "m3-2-3",
            title: {
              id: "Deployment Agen EDR Terpusat & Isolasi Host Otomatis",
              en: "Centralized EDR Deployment & Automated Isolation"
            },
            description: {
              id: "Wajib penggelaran agen EDR terpusat (CrowdStrike/SentinelOne) di seluruh PC cabang & server gudang dengan isolasi ancaman otomatis.",
              en: "Mandate 100% deployment of centralized EDR agents across branch PCs and warehouse servers with automated threat containment."
            },
            framework: "ISO 27001 A.8.7 / A.8.8",
            kpi: { id: "Cakupan EDR Endpoint 100%", en: "100% EDR Endpoint Coverage" },
            status: "planned"
          },
          {
            id: "m3-2-4",
            title: {
              id: "Segmentasi Jaringan VLAN Cabang & Isolasi Wi-Fi Tamu",
              en: "ISO 27001 Branch VLAN Microsegmentation"
            },
            description: {
              id: "Membuat subnet VLAN terisolasi untuk POS/WMS Operasional, Admin, Wi-Fi Tamu, dan CCTV untuk mencegah penyebaran lateral ransomware.",
              en: "Enforce strict VLAN network segregation across all branch sites, isolating POS/WMS subnets from Guest Wi-Fi to block ransomware."
            },
            framework: "ISO 27001 A.8.22",
            kpi: { id: "Isolasi Subnet POS 100%", en: "100% Isolated POS/WMS Subnets" },
            status: "planned"
          },
          {
            id: "m3-2-5",
            title: {
              id: "Pengumpulan Syslog SIEM & Pemantauan Ancaman 24/7",
              en: "Centralized SIEM Log Aggregation & 24/7 SOC"
            },
            description: {
              id: "Mengalirkan log dari firewall SD-WAN, Entra ID, dan EDR ke SIEM terpusat (Sentinel/Wazuh) yang dipantau 24/7 oleh SecOps HQ.",
              en: "Stream syslog feeds from branch SD-WAN firewalls, Entra ID, and EDR to a centralized SIEM monitored 24/7 by HQ SecOps."
            },
            framework: "ISO 27001 A.8.15 / A.8.16",
            kpi: { id: "Deteksi Ancaman MTTD < 15m", en: "Mean Time to Detect < 15m" },
            status: "planned"
          },
          {
            id: "m3-2-6",
            title: {
              id: "Pencegahan Kebocoran Data (DLP - Data Loss Prevention)",
              en: "Data Loss Prevention (DLP) & Leakage Controls"
            },
            description: {
              id: "Menerapkan kebijakan DLP pada cloud & endpoint cabang untuk memblokir penyebaran tanpa izin atas naskah buku digital & bank soal.",
              en: "Implement enterprise DLP policies on cloud drives and branch endpoints to block unauthorized transfer of digital textbook sources."
            },
            framework: "ISO 27001 A.8.12",
            kpi: { id: "Insiden Kebocoran Data 0", en: "Zero Data Exfiltration Incidents" },
            status: "planned"
          },
          {
            id: "m3-2-7",
            title: {
              id: "Pemindaian Kerentanan Dwibulanan & SLA Patching Ketat",
              en: "Vulnerability Management & Patching SLA Governance"
            },
            description: {
              id: "Menjalankan pemindaian kerentanan dwibulanan dan memberlakukan SLA patching (CVE Kritis < 72 jam, Tinggi < 7 hari).",
              en: "Establish bi-monthly vulnerability scans across branch gateways, enforcing patch SLAs (Critical < 72 hours, High < 7 days)."
            },
            framework: "ISO 27001 A.8.8",
            kpi: { id: "CVE Kritis < 72 Jam Selesai", en: "Critical CVE Patched < 72h" },
            status: "planned"
          },
          {
            id: "m3-2-8",
            title: {
              id: "Simulasi Insiden Ransomware & Drill Tanggap Darurat SIRP",
              en: "Security Incident Response Plan (SIRP) Drills"
            },
            description: {
              id: "Menyelenggarakan simulasi tanggap darurat ransomware & pemutusan link cabang dwitahunan bersama Manajer Cabang & SecOps HQ.",
              en: "Formalize the Security Incident Response Plan and conduct bi-annual simulated ransomware drills with Branch Managers."
            },
            framework: "ISO 27001 A.5.24–A.5.28",
            kpi: { id: "2 Uji Simulasi DRP per Tahun", en: "2 DRP Tabletop Drills per Year" },
            status: "planned"
          },
          {
            id: "m3-2-9",
            title: {
              id: "Pembatasan Akses Media USB / Perangkat Peripheral Cabang",
              en: "Branch USB & Peripheral Device Access Governance"
            },
            description: {
              id: "Memberlakukan GPO/MDM terpusat membatasi akses USB mass storage di PC cabang hanya untuk media terenkripsi terdaftar.",
              en: "Deploy centralized GPO/MDM policies restricting mass storage USB read/write access on all branch PCs to whitelisted drives."
            },
            framework: "ISO 27001 A.7.10 / A.8.9",
            kpi: { id: "Kepatuhan GPO USB 100%", en: "100% Branch USB Policy Compliance" },
            status: "planned"
          },
          {
            id: "m3-2-10",
            title: {
              id: "Pelatihan Kesadaran Keamanan Bulanan & Simulasi Phishing",
              en: "Security Awareness Training & Phishing Simulations"
            },
            description: {
              id: "Meluncurkan pembelajaran singkat keamanan bulanan dan uji simulasi email phishing triwulanan bagi seluruh staf cabang.",
              en: "Roll out mandatory monthly security micro-learning modules and quarterly simulated phishing tests for branch staff."
            },
            framework: "ISO 27001 A.7.4",
            kpi: { id: "Tingkat Klik Phishing < 5%", en: "Phishing Click Rate < 5%" },
            status: "planned"
          },
          {
            id: "m3-2-11",
            title: {
              id: "Tata Kelola Risiko Keamanan Vendor 3PL & Percetakan Mitras",
              en: "Vendor & 3PL Logistics Security Risk Governance"
            },
            description: {
              id: "Melakukan penilaian risiko keamanan dan memberlakukan otentikasi API Gateway (OAuth2 + IP whitelisting) untuk mitra logistik 3PL.",
              en: "Conduct security risk assessments and enforce secure API gateway authentication (OAuth2 + IP whitelisting) for 3PL logistics vendors."
            },
            framework: "ISO 27001 A.5.19–A.5.22",
            kpi: { id: "API 3PL Terenkripsi OAuth2 100%", en: "100% 3PL APIs Secured via OAuth2" },
            status: "planned"
          }
        ]
      },
      {
        id: "m3-c3",
        title: {
          id: "Pilot Otomatisasi AI/AutoML & Master Plan TI 2026–2027",
          en: "Internal AI / AutoML Automation Pilot & 2026-2027 Strategic IT Master Plan"
        },
        framework: "MLOps Lifecycle & TOGAF Phase H Governance",
        items: [
          {
            id: "m3-3-1",
            title: {
              id: "Membangun Pipeline MLOps & Feature Store (Vertex AI)",
              en: "MLOps Production Pipeline & Feature Store Setup"
            },
            description: {
              id: "Membuat pipeline MLOps produksi (GCP Vertex AI / SageMaker) terintegrasi MLflow registry untuk pelatihan ulang model otomatis.",
              en: "Architect a production MLOps pipeline using GCP Vertex AI / SageMaker integrated with MLflow registry and automated ETL features."
            },
            framework: "MLOps Lifecycle",
            kpi: { id: "Pipeline MLOps Aktif Live", en: "Production MLOps Pipeline Live" },
            status: "planned"
          },
          {
            id: "m3-3-2",
            title: {
              id: "Pilot AutoML Prediksi Demand Buku per Cabang (POD)",
              en: "AutoML Publishing & Regional Book Demand Forecasting"
            },
            description: {
              id: "Melatih model AutoML regresi menggunakan histori penjualan 40 cabang & kalender sekolah untuk memprediksi demand cetak buku per ISBN.",
              en: "Train AutoML regression models using historical 40+ branch sales data & school calendars to predict demand per book ISBN per branch."
            },
            framework: "MLOps / AutoML Forecasting",
            kpi: { id: "Akurasi Prediksi MAPE < 12%", en: "Forecasting Accuracy MAPE < 12%" },
            status: "planned"
          },
          {
            id: "m3-3-3",
            title: {
              id: "Integrasi Safety Stock Dynamic ERP Dynamics 365",
              en: "Automated ERP/WMS Safety Stock & Reorder Integration"
            },
            description: {
              id: "Menghubungkan hasil prediksi AI ke Dynamics ERP untuk menyesuaikan safety stock cabang dan memicu Purchase Order cetak otomatis.",
              en: "Connect AutoML demand outputs directly to Microsoft Dynamics ERP to dynamically adjust branch safety stock levels & PO triggers."
            },
            framework: "MLOps / ERP Integration",
            kpi: { id: "Reduksi Pemborosan Stok 35%", en: "35% Overprinting Waste Reduction" },
            status: "planned"
          },
          {
            id: "m3-3-4",
            title: {
              id: "Model Prediksi Lonjakan Trafik Ujian EdTech (Erlangga Digital)",
              en: "EdTech Exam Surge Infrastructure Prediction Model"
            },
            description: {
              id: "Menggelar model AI prediktif time-series untuk memprediksi jadwal ujian nasional dan auto-provisioning microservices cloud 48 jam sebelumnya.",
              en: "Deploy time-series predictive AI models analyzing national exam schedules to auto-provision cloud microservices 48 hours prior."
            },
            framework: "MLOps Time-Series / Cloud",
            kpi: { id: "Availability Puncak Ujian 100%", en: "100% Exam Surge Availability" },
            status: "planned"
          },
          {
            id: "m3-3-5",
            title: {
              id: "Pemantauan Model Drift & Anomali Data (Evidently AI)",
              en: "Model Drift, Accuracy Decay & Anomaly Monitoring"
            },
            description: {
              id: "Menerapkan dasbor pemantauan model otomatis yang melacak feature drift & akurasi prediksi (RMSE) untuk pemicu pelatihan ulang otomatis.",
              en: "Implement automated model monitoring dashboards tracking feature drift and accuracy decay (RMSE) to trigger retraining."
            },
            framework: "MLOps Monitoring",
            kpi: { id: "Peringatan Drift < 1 Jam", en: "Drift Alert Triggered < 1h" },
            status: "planned"
          },
          {
            id: "m3-3-6",
            title: {
              id: "Penerapan Tata Kelola TOGAF Phase H (Architecture Change)",
              en: "TOGAF Phase H Architecture Change Management Enactment"
            },
            description: {
              id: "Memberlakukan proses TOGAF Phase H untuk mengelola perubahan arsitektur dari baseline ke target agar selalu sesuai standar enterprise.",
              en: "Enforce TOGAF Phase H governance processes to manage baseline-to-target architecture changes, ensuring enterprise compliance."
            },
            framework: "TOGAF Phase H Governance",
            kpi: { id: "Kepatuhan Arsitektur 100%", en: "100% Architecture Change Compliance" },
            status: "planned"
          },
          {
            id: "m3-3-7",
            title: {
              id: "Pembentukan Architecture Review Board (ARB) Eksekutif",
              en: "Formalization of Executive Architecture Review Board (ARB)"
            },
            description: {
              id: "Membentuk dewan ARB eksekutif (IT Manager, Enterprise Architect, CFO, COO) untuk mengevaluasi investasi teknologi & ROI sebelum rilis.",
              en: "Form an executive Architecture Review Board (ARB) to evaluate technology investments, ROI, and risk profiles before production launch."
            },
            framework: "TOGAF Governance Board",
            kpi: { id: "Rapat ARB Bulanan Rutin", en: "Monthly ARB Governance Active" },
            status: "planned"
          },
          {
            id: "m3-3-8",
            title: {
              id: "Penyusunan Master Plan Strategis TI 2026–2027 Erlangga Group",
              en: "Authoring 2026–2027 Strategic IT Master Plan"
            },
            description: {
              id: "Menyusun dan menerbitkan Master Plan Strategis TI 2-Tahun (2026–2027), menetapkan pilar Hybrid Cloud, Lakehouse, dan Inovasi EdTech.",
              en: "Draft and publish Erlangga Group's 2-Year Strategic IT Master Plan (2026–2027), establishing hybrid cloud and EdTech pillars."
            },
            framework: "TOGAF Strategic Master Plan",
            kpi: { id: "Disahkan Resmi oleh Board", en: "Signed Off by Board of Directors" },
            status: "planned"
          },
          {
            id: "m3-3-9",
            title: {
              id: "Rasionalisasi Utang Teknis (Technical Debt) & Refactoring",
              en: "Technical Debt Rationalization & Refactoring Matrix"
            },
            description: {
              id: "Melakukan audit utang teknis pada skrip sinkronisasi cabang lama dan memprioritaskan refactoring vs sunsetting berdasarkan ROI.",
              en: "Conduct a thorough technical debt audit across legacy branch sync scripts and prioritize application refactoring vs sunsetting."
            },
            framework: "TOGAF Debt Management",
            kpi: { id: "Penataan 5 Legacy Utama Selesai", en: "Top 5 Legacy Debt Items Retired" },
            status: "planned"
          },
          {
            id: "m3-3-10",
            title: {
              id: "Disiplin Cloud FinOps & Savings Plan Cloud EdTech",
              en: "Enterprise Cloud FinOps & Savings Plan Governance"
            },
            description: {
              id: "Membentuk disiplin FinOps menggunakan alokasi biaya tagging GCP/AWS dan optimasi Committed Use Discount untuk beban kerja cloud.",
              en: "Establish a cloud FinOps discipline utilizing automated cost allocation tagging and quarterly Savings Plan optimization."
            },
            framework: "Cloud FinOps Standards",
            kpi: { id: "Penghematan Cloud Infrastructure 15%", en: "15% Cloud Waste Reduction" },
            status: "planned"
          },
          {
            id: "m3-3-11",
            title: {
              id: "Studi Kelayakan Asisten Internal GenAI RAG Katalog Buku",
              en: "Internal GenAI RAG Agent Feasibility Study & PoC"
            },
            description: {
              id: "Menyusun Proof-of-Concept (PoC) asisten GenAI RAG internal yang dilatih dengan katalog buku & SOP Erlangga untuk membantu sales cabang.",
              en: "Conduct a Proof-of-Concept for an internal RAG GenAI assistant trained on Erlangga's book catalog and SOPs to aid sales reps."
            },
            framework: "Enterprise GenAI Architecture",
            kpi: { id: "PoC Sukses & Respon < 3s", en: "PoC Completed (Response < 3s)" },
            status: "planned"
          }
        ]
      }
    ]
  }
];
