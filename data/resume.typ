#set page(
  paper: "a4",
  margin: (x: 1.6cm, y: 1.5cm)
)

#set text(
  font: ("Helvetica Neue", "Helvetica", "Arial"),
  size: 9.1pt,
  fill: rgb("#1e293b")
)

// Relaxed line height for easy reading & visual elegance
#set par(justify: false, leading: 0.66em)

// Bullet list styling
#set list(spacing: 0.6em, marker: text(fill: rgb("#2563eb"))[•])

// Header
#align(center)[
  #text(size: 19pt, weight: "bold", fill: rgb("#0f172a"))[Okihita H. Sihaloho, S.T.] \
  #v(-1pt)
  #text(size: 10pt, weight: "bold", fill: rgb("#2563eb"))[AI-Supercharged Tech Lead & Product Architect] \
  #v(2pt)
  #text(size: 8.8pt, fill: rgb("#475569"))[
    Jakarta, Indonesia #text(fill: rgb("#cbd5e1"))[|] okihita\@gmail.com #text(fill: rgb("#cbd5e1"))[|] okihita.com #text(fill: rgb("#cbd5e1"))[|] linkedin.com/in/okihita #text(fill: rgb("#cbd5e1"))[|] github.com/okihita
  ]
]

#v(4pt)

// Section Header Macro
#let section(title) = {
  v(8pt)
  text(size: 10.5pt, weight: "bold", fill: rgb("#1e40af"))[#upper(title)]
  v(-4pt)
  line(length: 100%, stroke: 0.8pt + rgb("#cbd5e1"))
  v(4pt)
}

// Job Entry Macro
#let entry(title, role, dates, location) = {
  v(4pt)
  grid(
    columns: (1fr, auto),
    row-gutter: 3pt,
    [*#title* #text(fill: rgb("#2563eb"))[-- *#role*]],
    [*#dates*]
  )
  v(-2pt)
  text(size: 8.5pt, fill: rgb("#64748b"))[#location]
  v(3pt)
}

#section("Professional Summary")
Results-driven *Tech Lead & Product Architect* with *10+ years of hands-on software engineering leadership*—from scaling mobile banking super-apps serving *25M+ users* to architecting enterprise portals for *170,000+ employees*, building B2B national cinema intelligence dashboards with high-intensity automated scraping, solo-building React Native apps for iOS and Android, and engineering offline-first desktop suites (Rust/Tauri) and AI/LLM platforms. Combines deep technical execution (Next.js, TypeScript, Rust, Python, Go, AWS/GCP) with C-suite strategic consulting experience from *Accenture*. B.Eng. in Computer Science from Institut Teknologi Bandung (ITB).

#v(4pt)

Leverages self-hosted autonomous AI dev workflows (Hermes running DeepSeek 0731 Ultra on private VPS) and 24/7 agent swarm deployments for continuous task execution and rapid product iteration. Known for clear technical communication, empathetic team leadership, native-level business English, a relentless can-do attitude, and meticulous attention to detail with clean SOLID/DRY architecture standards—bringing technical rigor, operational clarity, and high-energy team culture.

#section("Technical Skills")
- *Core Languages:* TypeScript, Python, Rust, Go, Kotlin, C++, Swift, SQL
- *Mobile Engineering:* React Native (iOS & Android), Android Native (Jetpack Compose, Hilt, Clean Architecture)
- *Web & Desktop:* Next.js, React 19, Tauri 2.0 (Rust + React), Astro, TailwindCSS v4, D3-geo
- *Cloud & Infrastructure:* GCP (Cloud Architect in progress), AWS (EC2, Lambda, S3, ECS), Azure Functions, VPS Orchestration, Cloudflare, Vercel, Supabase (`pgvector`), Docker, CI/CD
- *AI & Agent Swarms:* Self-Hosted AI Agent Swarms (Hermes/VPS + DeepSeek 0731 Ultra), Smartwatch / Telegram Bot Remote Coding Workflows, Vercel AI SDK v4, RAG Architecture, Vector DBs, Gemini API, Vision OCR
- *Enterprise Software:* Microsoft Dynamics ERP, SDLC Governance, SecOps

#section("Work Experience")

#entry("Indie Engineer & AI Tech Consultant", "Fullstack & Mobile Lead", "Jan 2025 – Present", "Jakarta, Indonesia")
- *CineRadar (B2B Platform Architect):* Architected a B2B cinema intelligence platform aggregating *10,000+ daily showtimes* and real-time seating layouts across 496 theatres, reverse-engineering undocumented API endpoints and building high-intensity multi-agent scrapers, ticket purchase heatmaps, and a Supabase enterprise dashboard.
- *Zenius EdTech Mobile App:* Solo-architected and launched the brand-new React Native mobile app (`net.zenius.mobile.android`) for iOS and Android from greenfield to production, achieving *10,000+ downloads*, a *4.8★ Play Store rating*, and an industry-leading *0.19% crash rate* via Hermes engine tuning.
- *AI Agent Productivity Infrastructure:* Deployed a self-hosted autonomous AI agent swarm framework (Hermes + DeepSeek 0731 Ultra on private VPS) integrated with a custom Telegram bot and Smartwatch voice/touch interface for remote 24/7 coding execution, automated build verification, and instant test suite orchestration.
- *EngageMedia Digital Rights Suite:* Architected 2 regional civic-tech AI platforms for Southeast Asia across 11 nations—building *D.R.O.N.E.* (an AI policy observatory with Supabase `pgvector` RAG, Vercel AI SDK v4, and D3 vector mapping) and *MMAAII* (a bilingual AI incident & legal regulations matrix deployed on Cloudflare Pages).
- *PAKDE (Solo Creator):* Built a gamified, 100% offline-first cooperative productivity suite for Indonesian village cooperatives using Tauri 2.0 (Rust + React 19), automating SAK EP double-entry accounting for cross-platform Windows/macOS desktop apps (`pakde.vercel.app`).
- *Competitive AI Engineering:* Ranked *Top 15 / ~150 engineers* in RedAI Triathlon 2025 (Red Asia x AWS AI competition) and *Top 5 / ~100 teams* in Amartha x GDG Jakarta Hackathon (building an AI WhatsApp financial coach for micro-entrepreneurs).
- *Tech Coaching & Product Mentorship:* Mentoring developers and student teams to build and ship production software—coaching *Verlo* (`verlo.id` --- universal gym & nutrition tracker), *Transit Flow* (`transit-flow-fe.vercel.app` --- real-time station congestion & spatial GIS engine), and *Nusa Cipta* (`nusacipta.aprilwang.id` --- one-stop IP & patent management portal).

#v(6pt)

#entry("Business Integration Lead (Accenture)", "Tech Lead & Consultant", "Aug 2022 – Dec 2024", "Jakarta, Indonesia")
- *Mobile Banking Super-App (Squad Lead #1):* Led mobile squad deploying 6 mission-critical features—including NFC Tap-to-Pay, QRIS payments, and digital KYC verification—to *25M+ Android users* while ensuring 100% backward compatibility across legacy Android OS versions.
- *Mobile Banking Super-App (Squad Lead #2):* Architected and delivered next-gen banking app from greenfield conception to production release using modern Android stack (Jetpack Compose, Hilt, MVVM, Clean Architecture).
- *FMCG MNC Corporate Portal (Engineering Lead):* Managed a 3-engineer squad building an enterprise management portal for an MNC with *170,000+ corporate employees*, leveraging Azure Cloud Functions, serverless APIs, and microservices architecture.
- *Global NGO Digital Transformation:* Served as sole technical consultant for the Indonesian branch of a 100+ year old global NGO, translating operational bottlenecks into technical blueprints and presenting directly to C-level steering committees.

#v(6pt)

#entry("Android Lead (Zenius)", "Engineering Manager & Mobile Lead", "Oct 2021 – May 2022", "Jakarta, Indonesia")
- *Interactive Live-Streaming Engine:* Hands-on architected and deployed mission-critical interactive live-streaming feature (Agora.io SDK), powering real-time tutoring for *10M+ active students* during peak national exam surges.
- *Team Management & Mentorship:* Managed and coached 7 direct Android engineers, enforcing clean code standards, unit testing (Mockito/Espresso), and reducing overall APK bundle size by *25%*.

#v(6pt)

#entry("Android Lead & Product Owner (MusigPro)", "Mobile Lead", "May 2020 – Aug 2021", "Remote, Singapore")
- *Karaoke Super-App:* Single-handedly built a mobile karaoke Android application from greenfield codebase to production release, engineering offline audio storage, media manipulation, and real-time pitch detection algorithms.

#v(6pt)

#entry("Android Lead (SHOX)", "Mobile Squad Lead", "Mar 2019 – Feb 2020", "Jakarta, Indonesia")
- *AI-Powered E-Commerce Mobile App:* Architected a shoppable fashion inspiration app with user-generated content, managing cross-border engineering squads in China and India while implementing MVVM, Clean Architecture, and full Firebase/CleverTap analytics observability.

#section("Education")
#grid(
  columns: (1fr, auto),
  [*B.Eng. Computer Science — Bandung Institute of Technology (STEI ITB)*], [*Graduated 2015*]
)
#v(-2pt)
#text(size: 8.5pt, fill: rgb("#64748b"))[Top Technology Institute in Indonesia | STEI ITB]

#section("Notable High-Impact Projects")
- *BijakMengeluh* (`bijakmengeluh.id`): AI-powered civic engagement platform helping citizens draft structured complaint letters and route them to appropriate Indonesian government agencies. Includes DPR members scraper sub-project.
- *Verlo* (`verlo.id`): Universal React Native (Expo 57) offline-first workout logger & 360° BDNF/Longevity tracker featuring 150+ exercise database.

#section("Interests & Certifications")
- *Certifications:* GCP Cloud Architect (In Progress)
- *Passions:* Marathon runner (preparing for international marathons), certified open-water diver, analytical writing, voice actor for major streaming platforms.
