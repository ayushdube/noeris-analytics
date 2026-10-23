"use client";

import { useId, useState } from "react";

import { analyticsDemoScenarios } from "@/modules/content/positioning-content";
import { cn } from "@/lib/utils";

interface AnalyticsConversationDemoProps {
  compact?: boolean;
}

export function AnalyticsConversationDemo({ compact = false }: AnalyticsConversationDemoProps) {
  const [activeId, setActiveId] = useState(analyticsDemoScenarios[0]?.id ?? "margin");
  const [showProvenance, setShowProvenance] = useState(false);
  const answerId = useId();
  const scenario =
    analyticsDemoScenarios.find((entry) => entry.id === activeId) ?? analyticsDemoScenarios[0];

  if (!scenario) return null;

  return (
    <div className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#141413] p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-label text-label-sm">Illustrative sample</p>
        <p className="font-mono text-[0.6875rem] tracking-[0.04em] text-muted">Not a client result</p>
      </div>

      <div
        className={cn("mt-4 flex flex-col gap-2", compact ? "" : "mt-5")}
        role="group"
        aria-label="Sample questions"
      >
        {analyticsDemoScenarios.map((entry) => {
          const selected = entry.id === scenario.id;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setActiveId(entry.id);
                setShowProvenance(false);
              }}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-left text-sm leading-snug transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                selected
                  ? "border-white/20 bg-white/[0.06] text-foreground"
                  : "border-white/[0.06] text-muted-foreground hover:border-white/15 hover:text-foreground",
              )}
            >
              {entry.question}
            </button>
          );
        })}
      </div>

      <div
        id={answerId}
        className="mt-4 border-t border-white/[0.06] pt-4"
        aria-live="polite"
      >
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
          Calculated result
        </p>
        <dl className="mt-3 grid grid-cols-3 gap-2">
          {scenario.metrics.map((metric) => (
            <div key={metric.label} className="min-w-0 bg-white/[0.04] px-2.5 py-2.5">
              <dt className="truncate text-[0.6875rem] uppercase tracking-[0.06em] text-muted">
                {metric.label}
              </dt>
              <dd className="mt-1 truncate font-display text-base font-medium text-foreground md:text-lg">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        {!compact && (
          <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{scenario.narrative}</p>
        )}

        <ul className="mt-4 space-y-2">
          {scenario.factors.map((factor) => (
            <li key={factor} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-0.5 shrink-0 font-mono text-xs text-accent" aria-hidden="true">
                ·
              </span>
              <span>{factor}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          Figures are computed from a sample semantic model. The language model explains the result. It is not the source of the numbers.
        </p>

        <button
          type="button"
          className="mt-3 text-sm text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-expanded={showProvenance}
          aria-controls={`${answerId}-provenance`}
          onClick={() => setShowProvenance((open) => !open)}
        >
          {showProvenance ? "Hide query provenance" : "Inspect query provenance"}
        </button>

        {showProvenance && (
          <div id={`${answerId}-provenance`} className="mt-3 rounded-lg border border-white/[0.06] bg-black/20 p-3">
            <ul className="space-y-1.5">
              {scenario.provenance.map((line) => (
                <li key={line} className="font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
                  {line}
                </li>
              ))}
            </ul>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-[0.6875rem] leading-relaxed text-muted">
              {scenario.query}
            </pre>
            <p className="mt-2 text-[0.6875rem] leading-relaxed text-muted">
              Illustrative query. It is not connected to a database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
