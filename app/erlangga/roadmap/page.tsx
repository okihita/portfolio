import type { Metadata } from "next";
import ErlanggaRoadmapView from "@/components/erlangga/ErlanggaRoadmapView";

export const metadata: Metadata = {
  title: "PT. Penerbit Erlangga — 3-Month IT Execution Roadmap | Okihita H. Sihaloho",
  description: "A concrete 3-month IT leadership roadmap for PT. Penerbit Erlangga by Okihita H. Sihaloho, B.Eng. (ITB): foundation audit, EdTech platform stabilization, and AI-led growth transformation.",
  keywords: [
    "PT Penerbit Erlangga",
    "IT Manager Roadmap",
    "Okihita H. Sihaloho",
    "3 Month Execution Plan",
    "IT Leadership Action Plan",
    "Bandung Institute of Technology"
  ],
  authors: [{ name: "Okihita H. Sihaloho" }],
  openGraph: {
    title: "PT. Penerbit Erlangga — 3-Month IT Execution Roadmap | Okihita H. Sihaloho",
    description: "3-month IT leadership execution roadmap for PT. Penerbit Erlangga: from foundation audit to AI-led growth.",
    type: "website",
  },
};

export default function ErlanggaRoadmapPage() {
  return <ErlanggaRoadmapView />;
}
