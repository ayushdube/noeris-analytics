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
    <div className="flex h-20 min-w-0 w-full items-end gap-0.5 sm:h-24 sm:gap-1 md:h-32 md:gap-1.5">
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
    <div className="relative h-20 min-w-0 w-full sm:h-24 md:h-32">
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
    <div className="flex h-20 min-w-0 w-full items-end gap-0.5 sm:h-24 sm:gap-1 md:h-32 md:gap-1.5">
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
    <div className="relative w-full min-w-0 overflow-hidden">
      <div className="pointer-events-none absolute -inset-4 rounded-sm bg-white/[0.04] blur-2xl md:-inset-8" />

      <div className="relative w-full min-w-0 overflow-hidden bg-[#161615] shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:aspect-[16/10]">
        <div className="flex flex-col gap-3 border-b border-white/[0.06] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-5 md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/10" />
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/10" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTab.id}
                className="ml-2 min-w-0 truncate text-label sm:ml-3"
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
            className="flex w-full min-w-0 gap-0.5 overflow-x-auto rounded-full border border-white/[0.06] bg-white/[0.02] p-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:w-auto sm:shrink-0 [&::-webkit-scrollbar]:hidden"
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
                  "shrink-0 rounded-full px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.08em] transition-all duration-300 sm:px-3 sm:text-label sm:text-label-sm",
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
            className="flex flex-col gap-4 p-3 sm:gap-5 sm:p-5 md:h-[calc(100%-3.25rem)] md:justify-between md:p-7"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid min-w-0 grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
              {currentTab.kpis.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="min-w-0 bg-white/[0.04] px-2 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="truncate text-[0.5625rem] font-medium uppercase tracking-[0.06em] text-muted sm:text-label sm:text-label-sm">
                    {kpi.label}
                  </p>
                  <p className="mt-1 font-display text-sm font-medium text-foreground/90 sm:mt-1.5 sm:text-lg md:text-xl">
                    {kpi.value}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[0.6875rem] font-medium text-accent sm:mt-1 sm:text-sm">
                    {kpi.delta}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="min-w-0 md:mt-2 md:flex md:flex-1 md:flex-col md:justify-end">
              <div className="mb-2 flex flex-col gap-1 sm:mb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                <span className="min-w-0 text-[0.625rem] font-medium uppercase leading-snug tracking-[0.08em] text-muted sm:text-label sm:text-label-sm">
                  {currentTab.chart.title}
                </span>
                <span className="shrink-0 text-[0.625rem] font-medium uppercase tracking-[0.08em] text-muted opacity-80 sm:text-label sm:text-label-sm">
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
    <section className="relative overflow-hidden">
      <div className="chapter-glow-bottom pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="grid w-full min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            className="min-w-0 w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <DashboardPreview />
          </motion.div>

          <div className="min-w-0 w-full max-w-full">
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
              <p className="text-balance font-display text-2xl font-medium tracking-[-0.02em] text-muted sm:text-3xl md:text-4xl">
                From monthly reporting cycles
              </p>
              <p className="mt-4 max-w-full text-balance font-display text-[clamp(1.75rem,7vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
                to daily P&amp;L visibility.
              </p>
              {study.impact[0] && (
                <p className="mt-8 max-w-full text-balance font-mono text-xs uppercase tracking-[0.1em] text-accent sm:text-sm sm:tracking-[0.15em]">
                  {study.impact[0].metric} {study.impact[0].label.toLowerCase()}
                </p>
              )}
            </motion.div>

            <motion.p
              className="mt-10 max-w-full text-sm leading-[1.85] text-muted-foreground md:max-w-md md:text-base"
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
