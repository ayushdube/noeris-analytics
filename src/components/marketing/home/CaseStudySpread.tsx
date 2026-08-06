"use client";

import Link from "next/link";
import { useState } from "react";

import { EngagementLead } from "@/components/marketing/founders/EngagementLead";
import { caseStudies } from "@/modules/content/site-content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type ChartType = "bar" | "line" | "area";

interface DashboardTab {
  id: string;
  label: string;
  title: string;
  kpis: { label: string; value: string; delta: string }[];
  chart: {
    title: string;
    subtitle: string;
    type: ChartType;
    data: number[];
  };
}

const dashboardTabs: DashboardTab[] = [
  {
    id: "pnl",
    label: "P&L",
    title: "Executive P&L · Live",
    kpis: [
      { label: "Revenue", value: "$4.2M", delta: "+12%" },
      { label: "Margin", value: "34.8%", delta: "+2.1pt" },
      { label: "Channels", value: "6", delta: "Unified" },
    ],
    chart: {
      title: "Contribution margin by channel",
      subtitle: "Last 12 weeks",
      type: "bar",
      data: [42, 58, 35, 72, 48, 65, 52, 78, 44, 68, 55, 82],
    },
  },
  {
    id: "ops",
    label: "Ops",
    title: "Operations · Live",
    kpis: [
      { label: "Inventory turns", value: "8.4×", delta: "+1.2×" },
      { label: "Fulfillment SLA", value: "97.2%", delta: "+3.4pt" },
      { label: "CAC", value: "$38", delta: "−11%" },
    ],
    chart: {
      title: "Order fulfillment rate",
      subtitle: "Daily · 30 days",
      type: "line",
      data: [88, 90, 89, 92, 91, 94, 93, 95, 94, 96, 95, 97, 96, 97, 98, 97, 96, 97, 98, 97, 98, 99, 97, 98, 97, 98, 99, 98, 97, 98],
    },
  },
  {
    id: "growth",
    label: "Growth",
    title: "Growth metrics · Live",
    kpis: [
      { label: "LTV", value: "$284", delta: "+18%" },
      { label: "LTV : CAC", value: "7.5×", delta: "+0.9×" },
      { label: "Repeat rate", value: "41%", delta: "+6pt" },
    ],
    chart: {
      title: "New vs. returning revenue",
      subtitle: "Weekly split",
      type: "area",
      data: [28, 32, 30, 38, 35, 42, 40, 48, 44, 52, 50, 58],
    },
  },
];

function BarChart({ data }: { data: number[] }) {
  return (
    <div className="flex h-24 items-end gap-1 md:h-32 md:gap-1.5">
      {data.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gradient-to-t from-accent/20 to-accent/45"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

function LineChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 100;
  const height = 100;
  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 8) + 4;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative h-24 md:h-32">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <polyline
          points={points}
          fill="none"
          stroke="rgba(255, 2, 52, 0.75)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points={`0,${height} ${points} ${width},${height}`}
          fill="url(#lineFill)"
          stroke="none"
        />
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 2, 52, 0.25)" />
            <stop offset="100%" stopColor="rgba(255, 2, 52, 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AreaChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const secondary = data.map((v) => Math.round(v * 0.55));

  return (
    <div className="flex h-24 items-end gap-1 md:h-32 md:gap-1.5">
      {data.map((h, i) => (
        <div key={i} className="relative flex flex-1 flex-col justify-end" style={{ height: "100%" }}>
          <motion.div
            className="w-full bg-gradient-to-t from-white/5 to-white/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: `${(h / max) * 100}%`, transformOrigin: "bottom" }}
          />
          <motion.div
            className="absolute bottom-0 w-full bg-gradient-to-t from-accent/15 to-accent/40"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.08 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: `${(secondary[i] / max) * 100}%`, transformOrigin: "bottom" }}
          />
        </div>
      ))}
    </div>
  );
}

function DashboardChart({ tab }: { tab: DashboardTab }) {
  switch (tab.chart.type) {
    case "line":
      return <LineChart data={tab.chart.data} />;
    case "area":
      return <AreaChart data={tab.chart.data} />;
    default:
      return <BarChart data={tab.chart.data} />;
  }
}

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(dashboardTabs[0].id);
  const currentTab = dashboardTabs.find((tab) => tab.id === activeTab) ?? dashboardTabs[0];

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -inset-4 rounded-sm bg-white/[0.04] blur-2xl md:-inset-8" />

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161615] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3 md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/10" />
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/10" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTab.id}
                className="ml-3 truncate text-label"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {currentTab.title}
              </motion.span>
            </AnimatePresence>
          </div>

          <div
            className="flex shrink-0 gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.02] p-0.5"
            role="tablist"
            aria-label="Dashboard views"
          >
            {dashboardTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`dashboard-panel-${tab.id}`}
                id={`dashboard-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-label text-label-sm transition-all duration-300 md:px-3",
                  activeTab === tab.id
                    ? "bg-surface-raised text-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            id={`dashboard-panel-${currentTab.id}`}
            role="tabpanel"
            aria-labelledby={`dashboard-tab-${currentTab.id}`}
            className="flex h-[calc(100%-2.5rem)] flex-col justify-between p-5 md:p-7"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {currentTab.kpis.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="bg-white/[0.04] px-3 py-3 md:px-4 md:py-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="text-label text-label-sm">
                    {kpi.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-medium text-foreground/90 md:text-xl">
                    {kpi.value}
                  </p>
                  <p className="mt-1 font-mono text-sm font-medium text-accent">{kpi.delta}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex flex-1 flex-col justify-end md:mt-6">
              <div className="mb-3 flex items-baseline justify-between gap-2">
                <span className="text-label text-label-sm">{currentTab.chart.title}</span>
                <span className="shrink-0 text-label text-label-sm opacity-80">
                  {currentTab.chart.subtitle}
                </span>
              </div>
              <DashboardChart tab={currentTab} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
      </div>
    </div>
  );
}

export function CaseStudySpread() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="relative">
      <div className="chapter-glow-bottom pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <DashboardPreview />
          </motion.div>

          <div>
            <motion.p
              className="text-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {study.industry}
            </motion.p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="font-display text-3xl font-medium tracking-[-0.02em] text-muted md:text-4xl">
                From monthly reporting cycles
              </p>
              <p className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
                to daily P&amp;L visibility.
              </p>
              {study.impact[0] && (
                <p className="mt-8 font-mono text-sm uppercase tracking-[0.15em] text-accent">
                  {study.impact[0].metric} {study.impact[0].label.toLowerCase()}
                </p>
              )}
            </motion.div>

            <motion.p
              className="mt-10 max-w-md text-sm leading-[1.85] text-muted-foreground md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {study.challenge}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/case-studies"
                className="mt-6 inline-flex text-sm text-accent transition-colors duration-500 hover:text-accent-foreground"
              >
                Read case study →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85 }}
            >
              <EngagementLead founderId={study.engagementLead} className="mt-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
