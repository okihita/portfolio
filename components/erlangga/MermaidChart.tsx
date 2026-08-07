"use client";

import React, { useEffect, useRef, useState } from "react";

interface MermaidChartProps {
  chart: string | { id?: string; en?: string };
  className?: string;
}

export default function MermaidChart({ chart, className = "" }: MermaidChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const chartString = typeof chart === "string" ? chart : (chart?.en || chart?.id || "");

  useEffect(() => {
    let isMounted = true;
    const chartId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;

    async function renderChart() {
      try {
        if (!chartString) return;

        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          themeVariables: {
            darkMode: true,
            background: "#0B0F17",
            primaryColor: "#2563EB",
            primaryTextColor: "#F8FAFC",
            primaryBorderColor: "#3B82F6",
            lineColor: "#475569",
            secondaryColor: "#7C3AED",
            tertiaryColor: "#059669",
            fontFamily: "ui-sans-serif, system-ui, sans-serif"
          }
        });

        const { svg } = await mermaid.render(chartId, chartString);
        if (isMounted) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Mermaid rendering error:", err);
          setError(err?.message || "Failed to render diagram");
        }
      }
    }

    if (chartString) {
      renderChart();
    }

    return () => {
      isMounted = false;
    };
  }, [chartString]);

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/50 text-red-300 text-xs font-mono">
        Error rendering diagram: {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-x-auto flex justify-center items-center py-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
