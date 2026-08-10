"use client";

import React from "react";

interface ErlanggaFooterProps {
  lang: "id" | "en";
}

export default function ErlanggaFooter({ lang }: ErlanggaFooterProps) {
  const title =
    lang === "id"
      ? "PT. Penerbit Erlangga — Proposal & Kualifikasi Strategis TI"
      : "PT. Penerbit Erlangga — IT Strategic Proposal & Qualification Matrix";

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 bg-white dark:bg-[#09090b]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <div>
          <span>{title}</span> — <span>Okihita H. Sihaloho</span>
        </div>
      </div>
    </footer>
  );
}
