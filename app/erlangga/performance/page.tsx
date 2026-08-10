import { Metadata } from "next";
import ErlanggaPerformanceView from "@/components/erlangga/ErlanggaPerformanceView";

export const metadata: Metadata = {
  title: "Erlangga IT Performance & Qualification Alignment Matrix | Okihita H. Sihaloho",
  description: "Comprehensive 16-point qualification matrix mapping Okihita H. Sihaloho's enterprise IT background against PT Penerbit Erlangga IT Manager job vacancy requirements.",
  openGraph: {
    title: "Erlangga IT Performance & Qualification Alignment Matrix | Okihita H. Sihaloho",
    description: "16-point qualification matrix and key IT performance benchmarks for PT Penerbit Erlangga IT Manager position.",
    images: ["/images/erlangga/hero_risograph.jpg"]
  }
};

export default function ErlanggaPerformancePage() {
  return <ErlanggaPerformanceView />;
}
