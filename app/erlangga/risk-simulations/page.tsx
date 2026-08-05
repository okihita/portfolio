import type { Metadata } from "next";
import ErlanggaRiskSimulationsView from "@/components/erlangga/ErlanggaRiskSimulationsView";

export const metadata: Metadata = {
  title: "PT. Penerbit Erlangga — Operational Risk Simulations | Okihita H. Sihaloho",
  description: "High-stakes operational risk management simulations, seasonal ERP load balancing, branch WAN resilience, SecOps ransomware defense, and cloud DRP failover for PT. Penerbit Erlangga by Okihita H. Sihaloho, B.Eng. (ITB).",
  keywords: [
    "PT Penerbit Erlangga",
    "IT Risk Management Simulations",
    "Okihita H. Sihaloho",
    "Disaster Recovery DRP",
    "Branch Network Resilience",
    "SecOps Endpoint Protection"
  ],
  authors: [{ name: "Okihita H. Sihaloho" }],
  openGraph: {
    title: "PT. Penerbit Erlangga — Operational Risk Simulations | Okihita H. Sihaloho",
    description: "Real-world operational risk management simulations and system resilience frameworks for PT. Penerbit Erlangga.",
    type: "website",
  },
};

export default function ErlanggaRiskSimulationsPage() {
  return <ErlanggaRiskSimulationsView />;
}
