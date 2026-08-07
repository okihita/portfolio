"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail, Sun, Moon, Languages } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export type HeaderLang = "id" | "en";

export interface HeaderNavItem {
  href: string;
  label: {
    id: string;
    en: string;
  };
}

interface HeaderProps {
  /** When provided, renders as a compact subsite header (nav + lang/theme only). */
  navItems?: HeaderNavItem[];
  /** When provided, renders the language switcher. */
  lang?: HeaderLang;
  onToggleLang?: () => void;
}

const DEFAULT_NAV_ITEMS: HeaderNavItem[] = [
  { href: "#projects", label: { id: "Projects", en: "Projects" } },
  { href: "#skills", label: { id: "Skills", en: "Skills" } },
  { href: "#experience", label: { id: "Experience", en: "Experience" } },
  { href: "#principles", label: { id: "Mindset", en: "Mindset" } },
  { href: "#contact", label: { id: "Contact", en: "Contact" } },
];

export default function Header({ navItems, lang, onToggleLang }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const isSubsite = !!navItems;
  const items = navItems ?? DEFAULT_NAV_ITEMS;
  const displayLang: HeaderLang = lang ?? "en";

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          setIsDark(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDark(false);
        }
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={
        isSubsite
          ? "sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md"
          : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                ? "bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs"
                : "bg-transparent py-5"
            }`
      }
    >
      <div
        className={`mx-auto px-4 sm:px-6 flex items-center justify-between ${
          isSubsite ? "max-w-7xl h-16" : "max-w-[1200px]"
        }`}
      >
        {/* Left: Branding & Status */}
        {!isSubsite && (
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono font-semibold text-xs flex items-center justify-center border border-zinc-300 dark:border-zinc-700/80 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors">
              OS
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-2">
                {PORTFOLIO_DATA.personal.name}
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Navigation Links */}
        <nav
          className={
            isSubsite
              ? "flex items-center gap-1 sm:gap-2"
              : "hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400"
          }
        >
          {items.map((item) => {
            const isActive = item.href === pathname;
            const className = isSubsite
              ? `px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                }`
              : isActive
                ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                : "hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors";
            return item.href.startsWith("#") ? (
              <a key={item.href} href={item.href} className={className}>
                {item.label[displayLang]}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={className}>
                {item.label[displayLang]}
              </Link>
            );
          })}
        </nav>

        {/* Right: Lang Switcher, Theme Toggle & Social Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {lang && (
            <button
              onClick={onToggleLang}
              className={
                isSubsite
                  ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                  : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              }
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              <span className="text-sm leading-none">{lang === "en" ? "🇬🇧" : "🇮🇩"}</span>
              <span>{lang === "en" ? "EN" : "ID"}</span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-normal">
                ({lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"})
              </span>
            </button>
          )}

          {/* Light / Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            className={
              isSubsite
                ? "p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                : "p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 rounded-md transition-colors"
            }
            title={mounted && isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {mounted && isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />}
          </button>

          {!isSubsite && (
            <>
              <a
                href={PORTFOLIO_DATA.personal.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 rounded-md transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 rounded-md transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Get in touch
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
