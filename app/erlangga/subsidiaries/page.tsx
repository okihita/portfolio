import type { Metadata } from "next";
import ErlanggaSubsidiariesView from "@/components/erlangga/ErlanggaSubsidiariesView";

export const metadata: Metadata = {
  title: "PT. Penerbit Erlangga — Business Ecosystem & Subsidiary Architecture | Okihita H. Sihaloho",
  description: "Comprehensive business model analysis, 74-year transformation timeline (1952-2026+), and IT profit enablement strategies across all Erlangga Group subsidiaries by Okihita H. Sihaloho, B.Eng. (ITB).",
  keywords: [
    "PT Penerbit Erlangga",
    "Erlangga Group Subsidiaries",
    "GAP Print",
    "Eureka Book House",
    "Eureka Logistics",
    "Erlangga Digital",
    "Erlass Institute",
    "IT Manager Strategy",
    "Okihita H. Sihaloho",
    "Bandung Institute of Technology"
  ],
  authors: [{ name: "Okihita H. Sihaloho" }],
  openGraph: {
    title: "PT. Penerbit Erlangga — Business Ecosystem & Subsidiary Architecture | Okihita H. Sihaloho",
    description: "Business model analysis, historical transformation timeline, and IT profit enablement strategy across all Erlangga Group subsidiaries.",
    type: "website",
  },
};

export default function ErlanggaSubsidiariesPage() {
  return <ErlanggaSubsidiariesView />;
}
