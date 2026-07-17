import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Rivers | Senior Full-Stack & Systems Engineer",
  description: "Portfolio of Alex Rivers, Senior Full-Stack & Systems Engineer specializing in React Native, Next.js, high-throughput distributed systems, and modern web application architecture.",
  keywords: ["Software Engineer", "Full-Stack Developer", "React Native", "Next.js", "TypeScript", "Systems Engineering", "Distributed Systems"],
  authors: [{ name: "Alex Rivers" }],
  openGraph: {
    title: "Alex Rivers | Senior Full-Stack & Systems Engineer",
    description: "Architecting resilient web applications, mobile apps, and distributed backend services.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
