"use client";

import { useState } from "react";

import type { ShowcaseDashboard } from "@/modules/content/showcase/dashboards";

/**
 * Power BI "Publish to web" report. The iframe loads only when the visitor asks for it,
 * so the page stays fast and Power BI is not contacted for people who never look.
 */
export function LiveDashboard({ dashboard }: { dashboard: ShowcaseDashboard }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* 16:9 report plus the Power BI page bar underneath */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]" style={{ paddingTop: "calc(56.25% + 36px)" }}>
        {open ? (
          <iframe
            title={dashboard.title}
            src={dashboard.url}
            className="absolute inset-0 h-full w-full border-0 bg-white"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
          >
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">Live Power BI report · {dashboard.pages.length} pages</span>
            <span className="font-display text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">{dashboard.title}</span>
            <span className="max-w-xl text-sm leading-[1.7] text-muted-foreground">{dashboard.pages.join(" · ")}</span>
            <span className="mt-2 rounded-sm border border-accent/50 px-4 py-2 text-sm text-accent-foreground transition-colors duration-500 group-hover:bg-accent/10">
              Load the dashboard
            </span>
          </button>
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <p>Use the page arrows at the bottom of the report to move between tabs. Hosted by Microsoft Power BI.</p>
        <div className="flex flex-wrap items-center gap-5">
          {dashboard.claudeUrl && (
            <a href={dashboard.claudeUrl} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-accent-foreground">
              Same dashboard, built in Claude ↗
            </a>
          )}
          <a href={dashboard.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-accent-foreground">
            Open full screen ↗
          </a>
        </div>
      </div>
    </div>
  );
}
