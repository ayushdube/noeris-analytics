import type { ReactNode } from "react";

import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { BarChart } from "@/components/visuals/charts/BarChart";
import { LineChart } from "@/components/visuals/charts/LineChart";

type ResourceSlug =
  | "blog"
  | "whitepapers"
  | "architecture-guides"
  | "bi-maturity-assessment"
  | "dashboard-examples";

interface ResourceTypeVisualProps {
  slug: ResourceSlug | string;
}

const maturityDimensions = [
  { label: "Data foundation", value: 72 },
  { label: "KPI governance", value: 58 },
  { label: "Self-service", value: 65 },
  { label: "AI readiness", value: 45 },
  { label: "Enablement", value: 80 },
];

function BlogVisual() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-3">
        {[85, 70, 55].map((width, i) => (
          <AnimateIn key={i} delay={i * 0.1}>
            <div className="space-y-2">
              <div className="h-2 rounded-sm bg-white/15" style={{ width: `${width}%` }} />
              <div className="h-1.5 rounded-sm bg-white/8" style={{ width: `${width - 15}%` }} />
              <div className="h-1.5 rounded-sm bg-white/5" style={{ width: `${width - 30}%` }} />
            </div>
          </AnimateIn>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">Analytics strategy & platform perspectives</p>
    </div>
  );
}

function WhitepaperVisual() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <AnimateIn className="relative">
        <div className="h-36 w-28 rounded border border-white/10 bg-white/[0.03] p-4 shadow-lg">
          <div className="h-2 w-3/4 bg-white/15" />
          <div className="mt-3 space-y-1.5">
            {[100, 90, 85, 70].map((w, i) => (
              <div key={i} className="h-1 bg-white/8" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="mt-4 h-8 w-full border border-white/10 bg-white/[0.02]" />
        </div>
        <div className="absolute -right-3 top-3 h-36 w-28 rounded border border-white/5 bg-white/[0.02] p-4 opacity-50" />
      </AnimateIn>
    </div>
  );
}

function ArchitectureVisual() {
  const nodes = ["Sources", "Platform", "Semantic", "BI", "Teams"];
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {nodes.map((node, i) => (
          <AnimateIn key={node} delay={i * 0.08}>
            <div className="flex items-center gap-2">
              <div className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-muted-foreground">
                {node}
              </div>
              {i < nodes.length - 1 && <span className="text-muted/40">→</span>}
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

function MaturityVisual() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-3">
        {maturityDimensions.map((dim, i) => (
          <AnimateIn key={dim.label} delay={i * 0.06}>
            <div>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted">{dim.label}</span>
                <span className="font-mono text-accent">{dim.value}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.04]">
                <div
                  className="animate-in-fade h-full bg-gradient-to-r from-accent/30 to-accent/60"
                  style={{ width: `${dim.value}%`, animationDelay: `${i * 0.08}s` }}
                />
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="grid grid-cols-3 gap-2">
        {["Revenue", "Margin", "Growth"].map((kpi, i) => (
          <div key={kpi} className="bg-white/[0.04] px-2 py-2">
            <p className="text-label-sm text-muted">{kpi}</p>
            <p className="font-display text-sm text-foreground">{["$4.2M", "34%", "+12%"][i]}</p>
          </div>
        ))}
      </div>
      <BarChart data={[42, 58, 35, 72, 48, 65, 52, 78]} className="mt-3 flex h-16 items-end gap-1" />
    </div>
  );
}

function ResourcesIndexVisual() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <LineChart data={[30, 42, 38, 55, 48, 62, 58, 70, 65, 78]} gradientId="resourcesIndex" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Guides", "Assessments", "Examples"].map((label) => (
          <div key={label} className="bg-white/[0.03] px-2 py-2 text-center">
            <p className="text-label-sm text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const visualMap: Record<string, ReactNode> = {
  blog: <BlogVisual />,
  whitepapers: <WhitepaperVisual />,
  "architecture-guides": <ArchitectureVisual />,
  "bi-maturity-assessment": <MaturityVisual />,
  "dashboard-examples": <DashboardVisual />,
  index: <ResourcesIndexVisual />,
};

export function ResourceTypeVisual({ slug }: ResourceTypeVisualProps) {
  const content = visualMap[slug] ?? visualMap.index;

  return (
    <VisualFrame aspect="video">
      <p className="mb-4 text-label">Preview</p>
      {content}
    </VisualFrame>
  );
}
