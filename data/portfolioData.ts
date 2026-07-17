export interface Project {
  id: string;
  title: string;
  category: "Web App" | "Mobile (React Native)" | "Systems & Cloud";
  tagline: string;
  description: string;
  mockType: "browser" | "mobile" | "terminal";
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
    bio: "Hands-on Tech Lead with 10+ years shipping production software—from Android super-apps serving 25M+ users to solo-building brand new React Native mobile apps, AI-powered platforms, and Web3/IoT systems.",
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
      tagline: "Solo-Created Modern EdTech Platform in React Native",
      description:
        "Single-handedly architected, engineered, and launched the brand new React Native mobile application for Zenius on Google Play Store from scratch (July 2026 release). Delivers video lessons, practice problem engines, and interactive tutoring to millions of students across Indonesia.",
      mockType: "mobile",
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
        { label: "Play Store Status", value: "Live Launch" },
      ],
      engineeringFeats: [
        "Solo-built the entire next-generation React Native Android app from greenfield codebase to Google Play production release in 2026.",
        "Engineered smooth video streaming playback, interactive quiz engines, and offline content bookmarking.",
        "Optimized JavaScript bundle splitting and Hermes bytecode execution for sub-second cold starts on mid-to-entry-level Android devices.",
      ],
      techStack: [
        "React Native",
        "TypeScript",
        "Hermes Engine",
        "ExoPlayer",
        "Zustand",
        "REST APIs",
        "Android Native Bridge",
      ],
      architectureDetails: {
        problem:
          "Rebuilding a complex legacy mobile experience into a clean, modern React Native architecture as a solo engineer within a tight launch deadline.",
        solution:
          "Established a modular TypeScript architecture with strictly typed API contracts, Hermes optimization, and zero-redundancy state management.",
        keyTradeoff:
          "Prioritized core video streaming and practice test performance over non-critical secondary UI animations for the initial v1 launch.",
      },
      links: {
        playstore: "https://play.google.com/store/apps/details?id=net.zenius.mobile.android",
        github: "https://github.com/okihita",
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
      title: "Bank Super-App & NFC Payments",
      category: "Mobile (React Native)",
      tagline: "Mission-Critical Banking & NFC Payment Engine serving 25M+ Users",
      description:
        "Architected and led mobile engineering squads at Accenture delivering 6 core banking features, including innovative Android NFC tap-to-pay and modern Jetpack Compose/React Native modules.",
      mockType: "mobile",
      metrics: [
        { label: "Active Users", value: "25M+" },
        { label: "Squad Features", value: "6 Core" },
        { label: "NFC Reliability", value: "99.99%" },
      ],
      engineeringFeats: [
        "Oversaw mobile squad delivering 6 high-value banking features including Android NFC tap-to-pay deployed to 25M+ active users.",
        "Migrated legacy Android architecture to Jetpack Compose, Hilt, and modern reactive patterns with zero downtime.",
        "Maintained strict backward compatibility across 100+ Android device profiles and legacy dependency trees.",
      ],
      techStack: [
        "React Native",
        "Kotlin",
        "Android NFC",
        "Jetpack Compose",
        "Hilt",
        "Java",
        "Dagger2",
        "Clean Architecture",
      ],
      architectureDetails: {
        problem:
          "Orchestrating mission-critical banking transactions and NFC payment payloads across millions of fragmented Android devices without breaking legacy backward compatibility.",
        solution:
          "Designed a decoupled feature-module architecture with strict DI boundaries and automated hardware integration test suites.",
        keyTradeoff:
          "Maintained dual-path legacy Dagger + Hilt bridges to allow incremental modern UI migrations without risky full-codebase refactors.",
      },
      links: {
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
        { name: "Next.js 16 / App Router", level: "Expert", highlight: true },
        { name: "Jetpack Compose (Android)", level: "Expert", highlight: true },
        { name: "Flutter / Dart", level: "Proficient" },
        { name: "Tailwind CSS v4", level: "Expert" },
        { name: "WebSockets & ExoPlayer", level: "Expert" },
      ],
    },
    {
      title: "Cloud, DevOps & Hardware",
      skills: [
        { name: "AWS (EC2, Lambda, S3)", level: "Expert", highlight: true },
        { name: "GCP & Azure Functions", level: "Proficient" },
        { name: "ESP32 & Raspberry Pi", level: "Proficient", highlight: true },
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "PostgreSQL & Redis", level: "Expert" },
        { name: "CI/CD & Git Workflows", level: "Expert" },
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
        "Building AI-powered applications, React Native mobile apps, and web intelligence platforms.",
      highlights: [
        "Solo-created and launched the brand new Zenius React Native mobile app (net.zenius.mobile.android) on Google Play Store (July 2026).",
        "Founded CineRadar (cineradar-id.vercel.app), a cinema intelligence platform aggregating 496 theatres across 83 cities with 99.9% data availability.",
        "Placed Top 5 (out of ~100 teams) at Amartha x GDG Jakarta for AI WhatsApp Financial Coach with OCR ledger processing.",
        "Placed Top 15 (out of ~150 engineers) at RedAI Triathlon 2025 (Red Asia x AWS AI engineering competition).",
      ],
      techUsed: ["React Native", "Next.js", "Python", "LLM Agents", "AWS", "GCP", "ESP32", "Solidity"],
    },
    {
      period: "AUG 2022 — DEC 2024",
      role: "Business Integration Lead (Tech Lead)",
      company: "Accenture",
      location: "Jakarta, Indonesia",
      summary:
        "Tech Lead overseeing mobile engineering, corporate portal development, and enterprise digital transformation for tier-1 banking & FMCG clients.",
      highlights: [
        "Mobile squad lead delivering 6 banking features (including innovative Android NFC tap-to-pay) deployed to 25M+ active users.",
        "Led mobile development for new bank super-app using Jetpack Compose, Hilt, and modern Jetpack architecture from scratch.",
        "Managed engineering team building corporate portal solution for 170,000+ FMCG employees using Azure Functions & Azure DB.",
        "Role breakdown: 60% hands-on coding, 20% product concepts, 10% R&D/innovation, 10% team mentorship.",
      ],
      techUsed: ["Kotlin", "Android NFC", "Jetpack Compose", "Hilt", "Azure Functions", "React Native", "PostgreSQL"],
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
      title: "Solo Greenfield Execution",
      description:
        "Proven ability to single-handedly architect and ship production mobile apps (like the latest Zenius React Native app) from zero to Play Store launch.",
    },
    {
      title: "Empathetic Technical Leadership",
      description:
        "Leading by example through hands-on coding (60%+), clear architectural vision, and structured mentorship for growing engineers.",
    },
  ],
};
