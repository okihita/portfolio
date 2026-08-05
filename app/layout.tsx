import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Okihita | Superstack Engineer",
  description: "Portfolio of Okihita H. Sihaloho, Tech Lead & Senior Software Engineer specializing in React Native, Next.js, AI/LLM agentic workflows, Android super-apps, and low-latency systems.",
  keywords: ["Okihita H. Sihaloho", "Tech Lead", "Software Engineer", "React Native", "Next.js", "Kotlin", "TypeScript", "AI Engineer", "Android Super-App"],
  authors: [{ name: "Okihita H. Sihaloho" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Okihita | Superstack Engineer",
    description: "Architecting resilient web platforms, React Native mobile apps, and agentic AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-200 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
