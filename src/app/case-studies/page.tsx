import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FadeIn } from "@/components/marketing/FadeIn";
import { caseStudies } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how Noeris Analytics helps companies build trusted decision systems with modern business intelligence and data engineering.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Case Studies"
        title="Outcomes across industries and platforms"
        description="Real engagements demonstrating architecture, delivery approach, and measurable business impact."
        wide
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study, i) => (
              <FadeIn key={study.slug} delay={i * 0.03}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group grid gap-3 md:grid-cols-[1fr_auto] md:items-baseline md:gap-16"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      {study.industry} · {study.client}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                      {study.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">
                    →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
