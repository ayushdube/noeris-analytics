"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  caseStudies,
  getCaseStudyIndustryFilters,
  type CaseStudy,
} from "@/modules/content/site-content";
import { cn } from "@/lib/utils";

function stackPills(study: CaseStudy) {
  return study.architecture
    .filter((item) => item !== "Your data warehouse")
    .slice(-2);
}

export function CaseStudyFilterList() {
  const filters = useMemo(() => getCaseStudyIndustryFilters(), []);
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.industryTag === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2 md:mb-12">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={cn(
            "rounded-full border px-3.5 py-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300",
            active === "All"
              ? "border-accent/40 bg-accent-muted text-accent-foreground"
              : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground",
          )}
        >
          All
        </button>
        {filters.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300",
              active === tag
                ? "border-accent/40 bg-accent-muted text-accent-foreground"
                : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-10 md:space-y-12">
        {visible.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group grid gap-3 border-b border-white/[0.06] pb-10 md:grid-cols-[1fr_auto] md:items-start md:gap-16 md:pb-12"
          >
            <div>
              <p className="text-label">
                {study.industry} · {study.client}
              </p>
              <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                {study.title}
              </h2>
              {study.impact[0] && (
                <p className="mt-3 font-mono text-sm text-accent">
                  {study.impact[0].metric} · {study.impact[0].label}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {stackPills(study).map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-muted-foreground"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <span
              className="font-mono text-sm text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
