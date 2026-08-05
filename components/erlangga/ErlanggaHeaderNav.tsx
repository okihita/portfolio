"use client";

import React from "react";
import Link from "next/link";
import { Languages, Sun, Moon, Printer } from "lucide-react";

export type Lang = "id" | "en";

export interface NavItem {
  id: string;
  href: string;
  label: {
    id: string;
    en: string;
  };
}

export const ERLANGGA_NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    href: "/erlangga",
    label: {
      id: "Home",
      en: "Home",
    },
  },
  {
    id: "tech-specs",
    href: "/erlangga/tech-specs",
    label: {
      id: "Tech Specs & Roadmap",
      en: "Tech Specs & Roadmap",
    },
  },
  {
    id: "risk-simulations",
    href: "/erlangga/risk-simulations",
    label: {
      id: "Risk Simulations",
      en: "Risk Simulations",
    },
  },
];

interface ErlanggaHeaderNavProps {
  lang: Lang;
  activeRoute: string;
  toggleLang: () => void;
  toggleTheme: () => void;
  mounted: boolean;
  isDark: boolean;
  handlePrint: () => void;
}

export function ErlanggaHeaderNav({
  lang,
  activeRoute,
  toggleLang,
  toggleTheme,
  mounted,
  isDark,
  handlePrint,
}: ErlanggaHeaderNavProps) {
  const exportPdfText = lang === "id" ? "Cetak PDF" : "Export PDF";

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {ERLANGGA_NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.href;
            const labelText = item.label[lang];

            return (
              <Link
                key={item.id}
                href={`${item.href}?lang=${lang}`}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                }`}
              >
                {labelText}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Lang Switcher, Theme Toggle, PDF Export */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <Languages className="w-4 h-4 text-zinc-500" />
            <span>{lang === "id" ? "ID | EN" : "EN | ID"}</span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            title={mounted && isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {mounted && isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            )}
          </button>

          {/* PDF Export */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">{exportPdfText}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
