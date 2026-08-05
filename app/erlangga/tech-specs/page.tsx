import type { Metadata } from "next";
import ErlanggaTechSpecsView from "@/components/erlangga/ErlanggaTechSpecsView";

export const metadata: Metadata = {
  title: "PT. Penerbit Erlangga — Technical Specs & Architecture | Okihita H. Sihaloho",
  description: "Enterprise integration architecture, GCP/AWS cloud topology, Microsoft Dynamics ERP sync, and 40+ branch WAN network specification for PT. Penerbit Erlangga by Okihita H. Sihaloho, B.Eng. (ITB).",
  keywords: [
    "PT Penerbit Erlangga",
    "IT Systems Architecture",
    "Okihita H. Sihaloho",
    "Microsoft Dynamics ERP Sync",
    "Enterprise Data Pipelines",
    "SecOps WAN Network"
  ],
  authors: [{ name: "Okihita H. Sihaloho" }],
  openGraph: {
    title: "PT. Penerbit Erlangga — Technical Specs & Architecture | Okihita H. Sihaloho",
    description: "Enterprise systems integration architecture and cloud infrastructure specifications for PT. Penerbit Erlangga.",
    type: "website",
  },
};

export default function ErlanggaTechSpecsPage() {
  return <ErlanggaTechSpecsView />;
}
