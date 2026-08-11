#set page(
  paper: "a4",
  margin: (x: 1.6cm, y: 1.5cm)
)
#set text(
  font: ("Inter", "Helvetica", "Arial", "Liberation Sans"),
  size: 9.5pt,
  fill: rgb("#111827")
)
#set par(justify: false, leading: 0.55em)

// Name & Contact Header
#align(center)[
  #text(size: 18pt, weight: "bold", fill: rgb("#0f172a"))[Okihita H. Sihaloho, S.T.] \
  #v(-4pt)
  #text(size: 9.5pt, weight: "bold", fill: rgb("#2563eb"))[AI-Supercharged Tech Lead & Product Architect] \
  #v(-2pt)
  #text(size: 8.5pt, fill: rgb("#475569"))[
    Jakarta, Indonesia | okihita\@gmail.com | okihita.com | linkedin.com/in/okihita | github.com/okihita
  ]
]

#v(4pt)

// Section Macro
#let section(title) = {
  v(6pt)
  text(size: 10pt, weight: "bold", fill: rgb("#1e40af"))[#upper(title)]
  v(-5pt)
  line(length: 100%, stroke: 0.6pt + rgb("#cbd5e1"))
  v(3pt)
}

#section("Professional Summary")
Results-driven *Tech Lead & Product Architect* with *10+ years of hands-on software engineering leadership*—from scaling mobile banking super-apps serving *25M+ users* to architecting enterprise portals for *170,000+ employees*, solo-building React Native mobile apps, and engineering offline-first desktop suites (Rust/Tauri) and AI/LLM platforms. Combines deep technical execution (Kotlin/Android, Next.js 16, TypeScript, Rust, Python, AWS/GCP) with C-suite strategic consulting experience from *Accenture*. B.Eng. in Computer Science from *Institut Teknologi Bandung (ITB)*.

#section("Technical Skills")
- *Core Languages:* Kotlin, TypeScript, Rust, Python, Go, C++, Swift, SQL
- *Mobile Engineering:* React Native (iOS & Android), Android Native (Jetpack Compose, Hilt, Clean Architecture), iOS (Swift), ExoPlayer
- *Web & Desktop:* Next.js 16 (App Router), React 19, Tauri 2.0 (Rust + React), Astro, TailwindCSS v4, D3-geo
- *Cloud & Infrastructure:* GCP (Cloud Architect in progress), AWS (EC2, Lambda, S3, ECS), Azure Functions, Supabase (`pgvector`), Docker, CI/CD
- *AI & LLM Integration:* Vercel AI SDK v4, RAG Architecture, Vector DBs, Gemini API, OpenAI API, Vision OCR, AutoML
- *Enterprise Software:* Microsoft Dynamics ERP, Qontak CRM, Darwinbox HRMS, PowerBI, SDLC Governance, SecOps

#section("Work Experience")

#grid(
  columns: (1fr, auto),
  [*Indie Engineer & AI Tech Consultant* --- *Fullstack & Mobile Lead*], [Jan 2025 – Present],
  [#text(fill: rgb("#475569"))[Jakarta, Indonesia]], []
)
#v(1pt)
- *Zenius EdTech Mobile App:* Solo-architected and launched the brand-new cross-platform React Native mobile app (`net.zenius.mobile.android`) from greenfield codebase to production on Google Play Store, reducing cold-start latency to sub-second on entry-level mobile devices via Hermes engine tuning and bundle splitting.
- *PAKDE (Solo Creator):* Built a gamified, 100% offline-first cooperative productivity suite for Indonesian village cooperatives using Tauri 2.0 (Rust + React 19), automating SAK EP double-entry accounting for cross-platform Windows/macOS desktop apps (`pakde.vercel.app`).
- *D.R.O.N.E. (EngageMedia):* Spearheaded technical architecture for Southeast Asia’s 11-nation digital rights policy observatory utilizing Next.js 16, Supabase `pgvector` semantic search, Vercel AI SDK v4, and D3 cartographic maps (`drone.engagemedia.org`).
- *Competitive AI Engineering:* Ranked *Top 15 / ~150 engineers* in RedAI Triathlon 2025 (Red Asia x AWS AI competition) and *Top 5 / ~100 teams* in Amartha x GDG Jakarta Hackathon (building an AI WhatsApp financial coach for micro-entrepreneurs).

#v(4pt)

#grid(
  columns: (1fr, auto),
  [*Business Integration Lead --- Accenture* --- *Tech Lead & Consultant*], [Aug 2022 – Dec 2024],
  [#text(fill: rgb("#475569"))[Jakarta, Indonesia]], []
)
#v(1pt)
- *Mobile Banking Super-App (Squad Lead #1):* Led mobile squad deploying 6 mission-critical features—including NFC Tap-to-Pay, QRIS payments, and digital KYC verification—to *25M+ Android users* while ensuring 100% backward compatibility across legacy Android OS versions.
- *Mobile Banking Super-App (Squad Lead #2):* Architected and delivered next-gen banking app from greenfield conception to production release using modern Android stack (Jetpack Compose, Hilt, MVVM, Clean Architecture).
- *FMCG MNC Corporate Portal (Engineering Lead):* Managed a 3-engineer squad building an enterprise management portal for an MNC with *170,000+ corporate employees*, leveraging Azure Cloud Functions, serverless APIs, and microservices architecture.
- *Global NGO Digital Transformation:* Served as sole technical consultant for the Indonesian branch of a 100+ year old global NGO, translating operational bottlenecks into technical blueprints and presenting directly to C-level steering committees.

#v(4pt)

#grid(
  columns: (1fr, auto),
  [*Android Lead --- Zenius* --- *Engineering Manager & Mobile Lead*], [Oct 2021 – May 2022],
  [#text(fill: rgb("#475569"))[Jakarta, Indonesia]], []
)
#v(1pt)
- *Interactive Live-Streaming Engine:* Hands-on architected and deployed mission-critical interactive live-streaming feature (Agora.io SDK), powering real-time tutoring for *10M+ active students* during peak national exam surges.
- *Team Management & Mentorship:* Managed and coached 7 direct Android engineers, enforcing clean code standards, unit testing (Mockito/Espresso), and reducing overall APK bundle size by *25%*.

#v(4pt)

#grid(
  columns: (1fr, auto),
  [*Android Lead & Product Owner --- MusigPro* --- *Mobile Lead*], [May 2020 – Aug 2021],
  [#text(fill: rgb("#475569"))[Remote, Singapore]], []
)
#v(1pt)
- *Karaoke Super-App:* Single-handedly built a mobile karaoke Android application from greenfield codebase to production release, engineering offline audio storage, ExoPlayer2 media manipulation, and real-time pitch detection algorithms.

#section("Education")
#grid(
  columns: (1fr, auto),
  [*B.Eng. Computer Science — Bandung Institute of Technology (STEI ITB)*], [Graduated 2015],
  [#text(fill: rgb("#475569"))[Top Technology Institute in Indonesia | GPA > 3.00]], []
)

#section("Notable High-Impact Projects")
- *CineRadar* (`cineradar-id.vercel.app`): Full-stack cinema intelligence platform aggregating showtimes across 496 theatres and 83 cities from 3 major cinema chains, delivering 99.9% daily data availability via resilient web scrapers.
- *Erlangga Group Strategic Proposal* (`okihita.com/erlangga`): Full-stack executive pitch site featuring a 17-point qualification alignment matrix, 90-day IT strategy, 6 risk simulation case studies, and interactive enterprise data pipeline flowcharts.
