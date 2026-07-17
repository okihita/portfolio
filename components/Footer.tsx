"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useEffect, useState } from "react";

export default function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-10 border-t border-zinc-800/80 bg-[#070709] text-xs font-mono text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Systems Nominal — Built with Next.js 16 & Tailwind v4</span>
        </div>

        <div className="flex items-center gap-6">
          {timeStr && <span>LOCAL TIME: {timeStr}</span>}
          <span>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}</span>
        </div>
      </div>
    </footer>
  );
}
