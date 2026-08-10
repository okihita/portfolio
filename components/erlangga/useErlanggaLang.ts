"use client";

import { useSyncExternalStore } from "react";

export type Lang = "id" | "en";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getClientSnapshot(): Lang {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang === "en" || queryLang === "id") return queryLang as Lang;
    const saved = localStorage.getItem("erlangga_lang");
    if (saved === "en" || saved === "id") return saved as Lang;
  }
  return "en";
}

function getServerSnapshot(): Lang {
  return "en";
}

export function useErlanggaLang() {
  const lang = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  const toggleLang = () => {
    const nextLang: Lang = lang === "id" ? "en" : "id";
    localStorage.setItem("erlangga_lang", nextLang);
    window.dispatchEvent(new Event("storage"));
  };

  return { lang, toggleLang, mounted };
}
