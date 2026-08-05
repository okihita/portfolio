import type { Metadata } from "next";
import ErlanggaPitchView from "@/components/erlangga/ErlanggaPitchView";

export const metadata: Metadata = {
  title: "PT. Penerbit Erlangga — IT Strategic Proposal | Okihita H. Sihaloho",
  description: "A pre-interview technical ecosystem audit, systems integration proposal, and 90-day IT leadership roadmap prepared for PT. Penerbit Erlangga by Okihita H. Sihaloho, B.Eng. (ITB).",
  keywords: [
    "PT Penerbit Erlangga",
    "IT Manager Proposal",
    "Okihita H. Sihaloho",
    "IT Strategy 90 Day Plan",
    "DevOps SecOps Budgeting",
    "Microsoft Dynamics ERP",
    "Bandung Institute of Technology"
  ],
  authors: [{ name: "Okihita H. Sihaloho" }],
  openGraph: {
    title: "PT. Penerbit Erlangga — IT Strategic Proposal | Okihita H. Sihaloho",
    description: "External digital audit and 30-60-90 day IT leadership plan for PT. Penerbit Erlangga.",
    type: "website",
  },
};

export default function ErlanggaPage() {
  return <ErlanggaPitchView />;
}
