"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Branding & Status */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-semibold text-xs text-zinc-100 group-hover:border-zinc-500 transition-colors">
            AR
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-100 tracking-tight flex items-center gap-2">
              {PORTFOLIO_DATA.personal.name}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#principles" className="hover:text-zinc-100 transition-colors">
            Mindset
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-md transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-md transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
