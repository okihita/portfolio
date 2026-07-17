export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Web App" | "Mobile (React Native)" | "Systems & Cloud";
  tagline: string;
  description: string;
  mockType: "browser" | "mobile" | "terminal" | "carousel";
  image?: string;
  images?: string[];
  metrics: { label: string; value: string }[];
  engineeringFeats: string[];
  techStack: string[];
  architectureDetails: {
    problem: string;
    solution: string;
    keyTradeoff: string;
  };
  links: {
    github?: string;
    live?: string;
    playstore?: string;
    playstores?: ProjectLink[];
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  techUsed: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Okihita H. Sihaloho",
    title: "AI-Supercharged Tech Lead & Full-Stack Systems Engineer",
    location: "Jakarta, Indonesia",
    status: "Open for Tech Lead & Senior/Staff Roles",
    bio: "Hands-on Tech Lead with 10+ years shipping production software—from Android super-apps serving 25M+ users to solo-building brand new React Native mobile apps, offline-first desktop apps (Rust/Tauri), AI-powered platforms, and Web3/IoT systems.",
    contacts: {
      email: "okihita@gmail.com",
      github: "https://github.com/okihita",
      linkedin: "https://linkedin.com/in/okihita",
      twitter: "https://x.com/Okihita",
    },
  },

  projects: [
    {
      id: "zenius-mobile",
      title: "Zenius React Native App (Latest Launch)",
      category: "Mobile (React Native)",
      tagline: "Solo-Created Modern EdTech Platform in React Native (iOS Pending Publication)",
      description:
        "Single-handedly architected, engineered, and launched the brand new cross-platform React Native mobile application for Zenius on Google Play Store from scratch (July 2026 release; iOS build pending App Store publication). Delivers video lessons, practice problem engines, and interactive tutoring to millions of students across Indonesia.",
      mockType: "carousel",
      images: [
        "/images/zenius/shot1.webp",
        "/images/zenius/shot2.webp",
        "/images/zenius/shot3.webp",
        "/images/zenius/shot4.webp",
        "/images/zenius/shot5.webp",
        "/images/zenius/shot6.webp",
        "/images/zenius/shot7.webp",
        "/images/zenius/shot8.webp",
        "/images/zenius/shot9.webp",
        "/images/zenius/shot10.webp",
      ],
      metrics: [
        { label: "Engineering Scope", value: "100% Solo" },
        { label: "Core Framework", value: "React Native" },
        { label: "App Store Status", value: "Android Live / iOS Pending" },
      ],
      engineeringFeats: [
        "Solo-built the entire next-generation cross-platform React Native app (Android live on Google Play, iOS build pending App Store publication) from greenfield codebase to production.",
        "Engineered smooth video streaming playback, interactive quiz engines, and offline content bookmarking.",
        "Optimized JavaScript bundle splitting and Hermes bytecode execution for sub-second cold starts on mid-to-entry-level mobile devices.",
      ],
      techStack: [
        "React Native (iOS/Android)",
        "TypeScript",
        "Hermes Engine",
        "ExoPlayer / AVPlayer",
        "Zustand",
        "REST APIs",
        "Native Bridges",
      ],
      architectureDetails: {
        problem:
          "Rebuilding a complex legacy mobile experience into a clean, modern cross-platform React Native architecture (with iOS pending publication) as a solo engineer within a tight launch deadline.",
        solution:
          "Established a modular TypeScript architecture with strictly typed API contracts, Hermes optimization, cross-platform UI components, and zero-redundancy state management.",
        keyTradeoff:
          "Prioritized core video streaming and practice test performance over non-critical secondary UI animations for the initial v1 launch.",
      },
      links: {
        playstore: "https://play.google.com/store/apps/details?id=net.zenius.mobile.android",
        github: "https://github.com/okihita",
      },
    },
    {
      id: "pakde-tauri",
      title: "PAKDE — Village Coop Suite",
      category: "Systems & Cloud",
      tagline: "Gamified Offline-First Desktop App in Rust & Tauri 2.0",
      description:
        "Offline-first desktop application built for Indonesian village cooperatives (Koperasi Desa) using Rust, Tauri 2.0, React 19, and local SQLite. Gamifies compliance (UU No. 25/1992), double-entry accounting (SAK EP), and inventory management into daily quests—running 100% offline from a 10MB USB drive.",
      mockType: "browser",
      images: [
        "/images/pakde/demo-exploration.webp",
        "/images/pakde/sense-of-direction.webp",
        "/images/pakde/sense-of-progress.webp",
        "/images/pakde/social-competition.webp",
      ],
      metrics: [
        { label: "Tech Stack", value: "Tauri 2 + Rust" },
        { label: "Database", value: "Local SQLite" },
        { label: "Installer", value: "~10MB Portable" },
      ],
      engineeringFeats: [
        "Rejected cloud SaaS boilerplates for an offline-first desktop node handling rural 3G/4G connectivity drops.",
        "Built zero-latency local SQLite persistence with double-entry accounting (SAK EP) and SISA Hasil Usaha (SHU) surplus distribution.",
        "Engineered Duolingo & Habitica inspired gamification questlines translating complex regulations into daily actionable tasks.",
      ],
      techStack: [
        "Tauri 2.0",
        "Rust",
        "React 19",
        "SQLite",
        "TypeScript",
        "Tailwind CSS",
      ],
      architectureDetails: {
        problem:
          "Cloud SaaS portals fail in rural Indonesia under intermittent 3G/4G connectivity, while phone screens are too small for SAK EP double-entry auditing.",
        solution:
          "Built a native lightweight desktop app (~10MB) in Rust & Tauri 2.0 with a local encrypted SQLite database running directly from a USB drive.",
        keyTradeoff:
          "Required custom cross-compilation build pipelines for Windows (.exe), macOS (.dmg), and Linux (.deb) instead of a simple web deployment.",
      },
      links: {
        live: "https://pakde.vercel.app",
        github: "https://github.com/okihita/PAKDE-tauri",
      },
    },
    {
      id: "mmaaii",
      title: "MMAAII — AI Incident Monitor",
      category: "Web App",
      tagline: "Bilingual AI Harm Incident Database & Legal Regulations Explorer",
      description:
        "Open-source bilingual (English & Indonesian) data platform built with EngageMedia to document and analyze publicly reported AI incidents in Indonesia using international risk taxonomies, legal regulation mappers, and automated Internet Archive (Wayback Machine) source preservation.",
      mockType: "browser",
      images: [
        "/images/mmaaii/mmaaii-1.webp",
        "/images/mmaaii/mmaaii-2.webp",
        "/images/mmaaii/mmaaii-3.webp",
        "/images/mmaaii/mmaaii-4.webp",
        "/images/mmaaii/mmaaii-5.webp",
      ],
      metrics: [
        { label: "Languages", value: "Bilingual (EN/ID)" },
        { label: "Architecture", value: "Astro + Functions" },
        { label: "Archival", value: "Wayback Machine" },
      ],
      engineeringFeats: [
        "Architected static-first Astro 7 build on Cloudflare Pages with serverless API functions and KV caching.",
        "Integrated automated Internet Archive (Wayback Machine SPN2) API for source link preservation and verification.",
        "Built deduplicated legal explorer mapping Indonesian regulatory articles (PASAL) to documented AI harm incidents.",
      ],
      techStack: [
        "Astro 7",
        "TypeScript",
        "Tailwind CSS v4",
        "Cloudflare Pages",
        "Airtable API",
        "Wayback Machine API",
      ],
      architectureDetails: {
        problem:
          "Documenting AI harms in Indonesia requires bilingual accessibility, transparent risk taxonomies, and permanent source link preservation against dead links.",
        solution:
          "Deployed Astro static site with Cloudflare Pages Functions fetching cached Airtable API data and checking Wayback Machine API status.",
        keyTradeoff:
          "Used serverless Functions API caching (60s KV TTL) to protect Airtable rate limits while keeping static page load times under 200ms.",
      },
      links: {
        live: "https://mmaaii.engagemedia.org/en/",
        github: "https://gitlab.com/emopentech/mmaaii",
      },
    },
    {
      id: "cineradar",
      title: "CineRadar",
      category: "Web App",
      tagline: "Full-Stack Cinema Intelligence & Showtime Aggregation Platform",
      description:
        "Consumer-facing Next.js movie tracker and admin dashboard aggregating 496 theatres across 83 Indonesian cities from 3 major cinema chains with real-time showtime intelligence.",
      mockType: "browser",
      metrics: [
        { label: "Theatres Tracked", value: "496" },
        { label: "Cities Covered", value: "83" },
        { label: "Data Availability", value: "99.9%" },
      ],
      engineeringFeats: [
        "Engineered a resilient visual web scraping pipeline ensuring 99.9% daily showtime data availability across 3 major cinema chains.",
        "Built consumer-facing Next.js platform with geospatial analytics, cinema network indexing, and instant theatre filtering.",
        "Designed lightweight edge caching layer for instant schedule lookup with zero database thrashing.",
      ],
      techStack: [
        "Next.js 16",
        "TypeScript",
        "React 19",
        "Tailwind CSS v4",
        "Python",
        "Vercel",
        "PostgreSQL",
      ],
      architectureDetails: {
        problem:
          "Fragmented showtime schedules across multiple cinema chain platforms made instant movie tracking across 83 cities difficult for Indonesian moviegoers.",
        solution:
          "Constructed automated Python/Playwright scraping workers feeding a Next.js App Router frontend with incremental static regeneration (ISR) and Redis edge caching.",
        keyTradeoff:
          "Sacrificed sub-second scrape frequency for 15-minute batched interval updates to stay respectful of origin rate limits while maintaining 99.9% availability.",
      },
      links: {
        github: "https://github.com/okihita/cineradar",
        live: "https://cineradar-id.vercel.app",
      },
    },
    {
      id: "bank-super-app",
      title: "BNI wondr & Mandiri Livin' Mobile Super-Apps",
      category: "Mobile (React Native)",
      tagline: "Lead Mobile Engineer for Tier-1 Indonesian Digital Banking Platforms",
      description:
        "Architected and led mobile engineering squads at Accenture for tier-1 national bank flagship super-apps—wondr by BNI (id.bni.wondr) and Livin' by Mandiri (id.bmri.livin). Engineered Android NFC tap-to-pay engines, modern Jetpack Compose UI modules, and cross-platform React Native features serving 25M+ active users.",
      mockType: "carousel",
      images: [
        "/images/bni-wondr/shot1.webp",
        "/images/bni-wondr/shot2.webp",
        "/images/bni-wondr/shot3.webp",
        "/images/bni-wondr/shot4.webp",
        "/images/livin-mandiri/shot1.webp",
        "/images/livin-mandiri/shot2.webp",
        "/images/livin-mandiri/shot3.webp",
        "/images/livin-mandiri/shot4.webp",
        "/images/livin-mandiri/shot5.webp",
      ],
      metrics: [
        { label: "Active Scale", value: "25M+ Users" },
        { label: "Engineering Role", value: "Lead Mobile Engineer" },
        { label: "NFC Uptime", value: "99.99% Reliability" },
      ],
      engineeringFeats: [
        "Lead mobile engineer at Accenture delivering core modules for wondr by BNI and Livin' by Mandiri.",
        "Engineered high-security Android Host Card Emulation (HCE) NFC tap-to-pay payments for millions of daily retail transactions.",
        "Migrated legacy banking architectures to Jetpack Compose, Kotlin Hilt DI, and React Native native modules with strict zero-downtime compliance.",
      ],
      techStack: [
        "React Native",
        "Kotlin",
        "Android NFC / HCE",
        "Jetpack Compose",
        "Hilt",
        "Java",
        "Dagger2",
        "Clean Architecture",
      ],
      architectureDetails: {
        problem:
          "Orchestrating mission-critical banking transactions, biometric authentication, and NFC payment payloads across millions of fragmented devices for BNI and Bank Mandiri without breaking legacy backward compatibility.",
        solution:
          "Designed decoupled feature-module architectures with strict DI boundaries, encrypted local payload persistence, and automated hardware integration test suites.",
        keyTradeoff:
          "Maintained dual-path legacy Dagger + Hilt bridges to allow incremental modern UI migrations without risky full-codebase refactors.",
      },
      links: {
        playstores: [
          { label: "wondr by BNI", url: "https://play.google.com/store/apps/details?id=id.bni.wondr&hl=id" },
          { label: "Livin' by Mandiri", url: "https://play.google.com/store/apps/details?id=id.bmri.livin&hl=id" },
        ],
        github: "https://github.com/okihita",
      },
    },
    {
      id: "ai-financial-coach",
      title: "UMKM AI Financial Coach & BijakMengeluh",
      category: "Systems & Cloud",
      tagline: "Agentic AI Workflows & WhatsApp Assistant for Micro-Entrepreneurs",
      description:
        "Award-winning (Top 5 Amartha x GDG) 24/7 AI WhatsApp financial literacy coach with ledger image processing, risk modeling, and civic AI complaint drafting (BijakMengeluh).",
      mockType: "terminal",
      metrics: [
        { label: "Amartha x GDG", value: "Top 5" },
        { label: "RedAI Triathlon", value: "Top 15" },
        { label: "Agent Response", value: "< 1.5s" },
      ],
      engineeringFeats: [
        "Engineered agentic multimodal AI workflow processing unstructured physical ledger receipts via WhatsApp API.",
        "Built BijakMengeluh civic engagement platform with automated Selenium/Python social scraping for Indonesian government agency contact discovery.",
        "Placed Top 15 in RedAI Triathlon 2025 (AWS AI engineering) solving live debugging and prototype challenges in 4 hours.",
      ],
      techStack: [
        "Python",
        "TypeScript",
        "LLM Agents",
        "Gemini / OpenAI API",
        "Selenium",
        "AWS Lambda",
        "WhatsApp Business API",
      ],
      architectureDetails: {
        problem:
          "Micro-entrepreneurs lack structured accounting tools and financial literacy guidance accessible via low-bandwidth communication channels.",
        solution:
          "Integrated WhatsApp Business Webhooks with an Agentic LLM router, OCR vision model for physical receipts, and risk scoring microservices.",
        keyTradeoff:
          "Leveraged asynchronous webhook queuing over synchronous HTTP streaming to ensure reliable message delivery over flaky mobile connections.",
      },
      links: {
        github: "https://github.com/okihita/umkm-chatbot",
        live: "https://umkm-chatbot.vercel.app",
      },
    },
  ] as Project[],

  skills: [
    {
      title: "Core Languages",
      skills: [
        { name: "Kotlin", level: "Expert", highlight: true },
        { name: "TypeScript", level: "Expert", highlight: true },
        { name: "Python", level: "Expert", highlight: true },
        { name: "Rust", level: "Proficient", highlight: true },
        { name: "Go", level: "Proficient" },
        { name: "C++ (Robotics/IoT)", level: "Proficient" },
        { name: "Swift / iOS", level: "Proficient" },
        { name: "Solidity (Web3)", level: "Competent" },
      ],
    },
    {
      title: "AI / LLM & Agentic Workflows",
      skills: [
        { name: "Agentic AI Workflows", level: "Expert", highlight: true },
        { name: "Prompt Engineering", level: "Expert", highlight: true },
        { name: "Multimodal LLM Integration", level: "Expert", highlight: true },
        { name: "Spec-Driven Development", level: "Expert" },
        { name: "RAG & Vector Embeddings", level: "Proficient" },
        { name: "OpenAI / Gemini API", level: "Expert" },
      ],
    },
    {
      title: "Mobile & Frontend",
      skills: [
        { name: "React Native (iOS/Android)", level: "Expert", highlight: true },
        { name: "Tauri 2.0 (Desktop)", level: "Expert", highlight: true },
        { name: "Next.js 16 / App Router", level: "Expert", highlight: true },
        { name: "Astro 7 Framework", level: "Proficient" },
        { name: "Jetpack Compose (Android)", level: "Expert" },
        { name: "Flutter / Dart", level: "Proficient" },
        { name: "Tailwind CSS v4", level: "Expert" },
      ],
    },
    {
      title: "Cloud, DevOps & Hardware",
      skills: [
        { name: "AWS (EC2, Lambda, S3)", level: "Expert", highlight: true },
        { name: "Cloudflare Pages & KV", level: "Proficient", highlight: true },
        { name: "GCP & Azure Functions", level: "Proficient" },
        { name: "ESP32 & Raspberry Pi", level: "Proficient" },
        { name: "SQLite & PostgreSQL", level: "Expert" },
        { name: "Redis & In-Memory WAL", level: "Expert" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "JAN 2025 — PRESENT",
      role: "Indie Engineer & Tech Consultant",
      company: "Fullstack Development & AI Systems",
      location: "Jakarta, Indonesia",
      summary:
        "Building AI-powered applications, React Native mobile apps, Rust desktop apps, and web intelligence platforms.",
      highlights: [
        "Solo-created and launched the brand new cross-platform Zenius React Native mobile app (net.zenius.mobile.android) on Google Play Store (July 2026; iOS build pending App Store publication).",
        "Engineered PAKDE (pakde.vercel.app), a gamified offline-first village cooperative suite in Rust, Tauri 2.0, and SQLite.",
        "Developed MMAAII (mmaaii.engagemedia.org), a bilingual AI incident monitoring platform with EngageMedia using Astro & Cloudflare Pages.",
        "Founded CineRadar (cineradar-id.vercel.app), a cinema intelligence platform aggregating 496 theatres across 83 cities with 99.9% data availability.",
        "Placed Top 5 (out of ~100 teams) at Amartha x GDG Jakarta for AI WhatsApp Financial Coach with OCR ledger processing.",
        "Placed Top 15 (out of ~150 engineers) at RedAI Triathlon 2025 (Red Asia x AWS AI engineering competition).",
      ],
      techUsed: ["React Native", "Tauri 2.0", "Rust", "Astro", "Next.js", "Python", "LLM Agents", "Cloudflare"],
    },
    {
      period: "AUG 2022 — DEC 2024",
      role: "Business Integration Lead (Tech Lead)",
      company: "Accenture",
      location: "Jakarta, Indonesia",
      summary:
        "Lead Mobile Engineer overseeing enterprise mobile super-apps, corporate portals, and digital transformation for tier-1 banking & FMCG leaders.",
      highlights: [
        "Lead Mobile Engineer delivering core features for flagship digital banking super-apps: wondr by BNI (id.bni.wondr) and Livin' by Mandiri (id.bmri.livin), serving 25M+ active users.",
        "Mobile squad lead delivering 6 banking features including innovative Android HCE NFC tap-to-pay.",
        "Led mobile development for new bank super-apps using Jetpack Compose, Hilt, React Native modules, and modern Jetpack architecture.",
        "Managed engineering team building corporate portal solution for 170,000+ FMCG employees using Azure Functions & Azure DB.",
        "Role breakdown: 60% hands-on coding, 20% product concepts, 10% R&D/innovation, 10% team mentorship.",
      ],
      techUsed: ["Kotlin", "Android NFC", "Jetpack Compose", "Hilt", "React Native", "Azure Functions", "PostgreSQL"],
    },
    {
      period: "OCT 2021 — MAY 2022",
      role: "Android Engineering Lead",
      company: "Zenius",
      location: "Jakarta, Indonesia",
      summary:
        "Led core mobile feature development for Indonesia's premier edtech platform, managing cross-border engineering squads.",
      highlights: [
        "Hands-on lead for mission-critical interactive live-streaming feature serving high-concurrency student classes.",
        "Coached and mentored 7 direct engineering reports across global teams in Chennai, New York, and Jakarta HQ.",
        "Achieved major app size reduction through deep technical refactoring and git workflow enforcement.",
      ],
      techUsed: ["Android", "Kotlin", "ExoPlayer", "Live Streaming RTC", "MVVM", "Git Workflows"],
    },
    {
      period: "MAY 2020 — AUG 2021",
      role: "Android Lead & Product Owner",
      company: "MusigPro",
      location: "Remote, Singapore",
      summary:
        "Single-handedly built karaoke Android mobile application from scratch in close collaboration with CEO and CTO.",
      highlights: [
        "Owned end-to-end ideation, architecture, implementation, store deployment, and product analytics.",
        "Implemented offline audio storage, multi-track playback, and media manipulation using ExoPlayer2.",
      ],
      techUsed: ["Android", "Kotlin", "ExoPlayer2", "Audio Processing", "Mixpanel", "Firebase"],
    },
    {
      period: "MAR 2019 — FEB 2020",
      role: "Android Lead",
      company: "SHOX",
      location: "Jakarta, Indonesia",
      summary:
        "Built AI-powered shoppable fashion mobile platform with user-generated content, managing international engineering squads in China & India.",
      highlights: [
        "Implemented Clean Architecture with MVVM, Dagger, and Data Binding pattern.",
        "Established automated unit testing (Mockito) and UI testing (Espresso) pipelines.",
      ],
      techUsed: ["Kotlin", "Clean Architecture", "Dagger", "Firebase", "Mixpanel", "Espresso"],
    },
  ] as ExperienceItem[],

  principles: [
    {
      title: "Agentic & Spec-Driven Engineering",
      description:
        "Combining 10+ years of software fundamentals with agentic LLM workflows and spec-driven development to build robust production systems at 10x speed.",
    },
    {
      title: "25M+ Scale Production Mindset",
      description:
        "Bulletproof stability, backward compatibility, and strict performance budgets are essential when serving millions of active users.",
    },
    {
      title: "Ground Reality & Offline-First UX",
      description:
        "Building for real-world user conditions—from rural offline desktop nodes (PAKDE) to low-spec Android devices—rather than lazy SaaS defaults.",
    },
    {
      title: "Empathetic Technical Leadership",
      description:
        "Leading by example through hands-on coding (60%+), clear architectural vision, and structured mentorship for growing engineers.",
    },
  ],
};
