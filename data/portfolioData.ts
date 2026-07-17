export interface Project {
  id: string;
  title: string;
  category: "Web App" | "Mobile (React Native)" | "Systems & Cloud";
  tagline: string;
  description: string;
  mockType: "browser" | "mobile" | "terminal";
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
    name: "Alex Rivers",
    title: "Senior Full-Stack & Systems Engineer",
    location: "San Francisco, CA / Remote",
    status: "Open to Select Senior / Staff Roles",
    bio: "Passionate full-stack engineer with 7+ years of experience crafting high-performance web platforms, cross-platform mobile apps, and resilient backend systems. Focused on clean architecture, low-latency interfaces, and production reliability.",
    contacts: {
      email: "alex.rivers.dev@gmail.com",
      github: "https://github.com/okihita",
      linkedin: "https://linkedin.com/in/alex-rivers-dev",
      twitter: "https://x.com/alexrivers_dev",
    },
  },

  projects: [
    {
      id: "nexus-flow",
      title: "Nexus Flow",
      category: "Web App",
      tagline: "Real-Time Event-Driven Workflow Automation Engine",
      description:
        "High-throughput enterprise workflow orchestration platform with interactive node graph builder, serverless edge function triggers, and real-time telemetry analytics.",
      mockType: "browser",
      metrics: [
        { label: "p99 Latency", value: "42ms" },
        { label: "DAG Nodes", value: "10k+" },
        { label: "DB Write Reduction", value: "-70%" },
      ],
      engineeringFeats: [
        "Architected optimistic WebSocket state updates, reducing user-perceived workflow step creation latency from 450ms to 42ms.",
        "Implemented custom incremental Directed Acyclic Graph (DAG) cycle detection validator, handling 10k+ nodes without main thread UI freezes.",
        "Engineered Redis write-behind buffer to batch telemetry logs, decreasing PostgreSQL IOPS overhead by 70%.",
      ],
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "WebSockets",
      ],
      architectureDetails: {
        problem:
          "High-volume workflow execution logs caused database IOPS spikes and browser freezing on complex graphs with thousands of nodes.",
        solution:
          "Decoupled state representation into a Canvas virtual grid and used a dual-tier storage strategy (Redis buffer + async PostgreSQL worker pool).",
        keyTradeoff:
          "Traded instantaneous telemetry persistence durability for sub-50ms UI response times, backed by an in-memory Redis WAL.",
      },
      links: {
        github: "https://github.com/okihita/nexus-flow",
        live: "https://nexus-flow-demo.vercel.app",
      },
    },
    {
      id: "pulse-field",
      title: "Pulse Field",
      category: "Mobile (React Native)",
      tagline: "Offline-First Field Operations & Asset Diagnostic App",
      description:
        "Cross-platform iOS and Android application engineered for telemetry gathering and maintenance operations in high-latency or disconnected field environments.",
      mockType: "mobile",
      metrics: [
        { label: "FPS Stability", value: "60 FPS" },
        { label: "Offline Sync Rate", value: "99.9%" },
        { label: "Bundle Overhead", value: "-35%" },
      ],
      engineeringFeats: [
        "Engineered transactional SQLite sync engine using Conflict-free Replicated Data Types (CRDTs) for reliable bi-directional offline data reconciliation.",
        "Customized React Native native C++ module for camera & barcode scanning, guaranteeing stable 60 FPS UI performance on low-end hardware.",
        "Optimized Hermes engine bytecode and asset trees, shrinking production APK and IPA bundle size by 35%.",
      ],
      techStack: [
        "React Native",
        "TypeScript",
        "Expo Bare Workflow",
        "SQLite",
        "Zustand",
        "CRDT Sync Engine",
        "Native C++ Bridge",
      ],
      architectureDetails: {
        problem:
          "Field technicians frequently lost data when submitting complex diagnostic reports in remote locations with intermittent 3G/satellite connections.",
        solution:
          "Implemented local-first SQLite persistence layer with a background sync daemon that automatically queues and resolves optimistic mutations upon network reconnection.",
        keyTradeoff:
          "Increased client-side storage footprint by ~12MB to maintain zero-latency local schema validation offline.",
      },
      links: {
        github: "https://github.com/okihita/pulse-field-mobile",
        live: "https://pulsefield.dev",
      },
    },
    {
      id: "hyperion-proxy",
      title: "Hyperion Proxy",
      category: "Systems & Cloud",
      tagline: "Sub-Millisecond Distributed API Gateway & Traffic Shaper",
      description:
        "High-performance edge proxy service designed for low-latency request routing, zero-allocation token-bucket rate limiting, and real-time distributed tracing.",
      mockType: "terminal",
      metrics: [
        { label: "Throughput", value: "120k RPS/core" },
        { label: "Mem Footprint", value: "< 18MB" },
        { label: "Uptime", value: "99.999%" },
      ],
      engineeringFeats: [
        "Sustained 120,000 requests/second per CPU core while maintaining p99 latency under 1.2ms.",
        "Implemented lock-free ring buffer for zero-allocation telemetry collection without garbage collector pauses.",
        "Integrated dynamic circuit-breaker protocol to prevent cascading microservice downstream failures during traffic spikes.",
      ],
      techStack: [
        "Rust",
        "Tokio Async Engine",
        "gRPC",
        "Redis Cluster",
        "Prometheus",
        "Grafana",
        "Docker",
      ],
      architectureDetails: {
        problem:
          "Legacy monolithic ingress controller suffered from high tail latencies and memory bloat under unexpected DDOS burst traffic.",
        solution:
          "Built a non-blocking asynchronous event loop service utilizing epoll/kqueue abstractions and shared memory ring buffers.",
        keyTradeoff:
          "Prioritized raw throughput and deterministic memory usage over flexible plugin scripting runtimes.",
      },
      links: {
        github: "https://github.com/okihita/hyperion-proxy",
      },
    },
  ] as Project[],

  skills: [
    {
      title: "Core Languages",
      skills: [
        { name: "TypeScript", level: "Expert", highlight: true },
        { name: "JavaScript (ESNext)", level: "Expert" },
        { name: "Rust", level: "Proficient", highlight: true },
        { name: "SQL", level: "Proficient" },
        { name: "HTML5 & Modern CSS", level: "Expert" },
        { name: "Python", level: "Competent" },
      ],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "Next.js 16 / App Router", level: "Expert", highlight: true },
        { name: "React 19 / Server Components", level: "Expert", highlight: true },
        { name: "React Native (iOS & Android)", level: "Expert", highlight: true },
        { name: "Tailwind CSS v4", level: "Expert" },
        { name: "State Management (Zustand/Redux)", level: "Expert" },
        { name: "WebSockets & WebRTC", level: "Proficient" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Bun", level: "Expert", highlight: true },
        { name: "REST & gRPC APIs", level: "Expert" },
        { name: "Event-Driven Architecture", level: "Proficient", highlight: true },
        { name: "PostgreSQL & Query Optimization", level: "Proficient" },
        { name: "Redis & In-Memory Caching", level: "Expert" },
        { name: "Microservices & Serverless", level: "Proficient" },
      ],
    },
    {
      title: "DevOps & Tooling",
      skills: [
        { name: "Docker & Containerization", level: "Proficient", highlight: true },
        { name: "CI/CD (GitHub Actions)", level: "Expert" },
        { name: "Git & Monorepos", level: "Expert" },
        { name: "AWS / Vercel Edge", level: "Proficient" },
        { name: "Prometheus & Observability", level: "Competent" },
        { name: "Jest / Vitest / Playwright", level: "Proficient" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "2023 — PRESENT",
      role: "Senior Full-Stack Engineer",
      company: "Vanguard Tech Systems",
      location: "San Francisco, CA",
      summary:
        "Leading client architecture and mobile/web development for core enterprise products handling over 5M active daily requests.",
      highlights: [
        "Led migration of legacy React SPA to Next.js App Router, boosting Lighthouse Performance score from 58 to 98 and cutting initial payload size by 62%.",
        "Architected cross-platform React Native app with offline synchronization serving 80k active mobile field operators.",
        "Mentored junior and mid-level engineers, enforcing strict TypeScript standards, automated E2E testing, and code review practices.",
      ],
      techUsed: ["Next.js", "React Native", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS"],
    },
    {
      period: "2021 — 2023",
      role: "Software Engineer",
      company: "Aether Labs",
      location: "San Francisco, CA",
      summary:
        "Designed and implemented high-concurrency data processing pipelines and real-time dashboard applications.",
      highlights: [
        "Engineered real-time analytics streaming engine using Node.js & WebSockets, sustaining 25k concurrent WebSocket connections with zero data drops.",
        "Reduced database query times by up to 85% by redesigning relational indexes and introducing Redis caching layers.",
        "Collaborated with product design teams to implement accessible, pixel-perfect design component libraries.",
      ],
      techUsed: ["React", "Node.js", "TypeScript", "Redis", "Docker", "GraphQL"],
    },
    {
      period: "2019 — 2021",
      role: "Full-Stack Developer",
      company: "Apex Digital Solutions",
      location: "San Jose, CA",
      summary:
        "Built responsive customer-facing web applications and backend API integrations for fintech clients.",
      highlights: [
        "Developed full-stack web applications with authentication, payment gateway integrations, and RBAC permissions.",
        "Optimized frontend bundle loading performance and implemented comprehensive Jest unit test suites achieving 88% coverage.",
      ],
      techUsed: ["JavaScript", "React", "Express.js", "PostgreSQL", "CSS Modules"],
    },
  ] as ExperienceItem[],

  principles: [
    {
      title: "Performance Budgets are Non-Negotiable",
      description:
        "Every kilobyte and millisecond counts. High-performing software drives user retention, SEO authority, and lower operational overhead.",
    },
    {
      title: "Simplicity Over Cleverness",
      description:
        "Code is read far more often than it is written. Clear abstractions, explicit typing, and maintainable patterns trump complex micro-optimizations.",
    },
    {
      title: "Resilience in Distrustful Networks",
      description:
        "Networks fail, latency spikes, and devices disconnect. Building offline-first mechanisms and optimistic UI creates unbreakable user experiences.",
    },
    {
      title: "Full-Stack Ownership",
      description:
        "Empowered engineers understand the whole lifecycle — from UI interactions and database queries to infrastructure provisioning and monitoring.",
    },
  ],
};
