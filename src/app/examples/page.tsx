import type { Metadata } from "next";
import Link from "next/link";

import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { SplitHero } from "@/components/visuals/SplitHero";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getAutomation, showcaseExamples } from "@/modules/content/showcase";
import { getDashboard } from "@/modules/content/showcase/dashboards";

export const metadata: Metadata = createPageMetadata({
  title: "Worked Examples",
  description:
    "Worked examples of the dashboards and AI workflows Noeris builds: Shopify contribution margin, PE portfolio packs, month-end commentary, plant OEE, SaaS retention, freight audit, insurance submission intake and retail analytics at scale. Built on synthetic and public sample data.",
  path: "/examples",
});

const included = [
  "Data shaped like the real source systems",
  "Tested data models and reconciliations",
  "The dashboard view a leader would use",
  "An AI workflow with every figure checked",
  "A person reviews before anything is sent",
];

export default function ExamplesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Worked examples"
        title="See the work before you commission it"
        description="Eight end-to-end examples of the dashboards and AI workflows we build, on synthetic or public sample data for fictional companies. They show how we model the numbers, where AI helps, and how its output is checked."
        visual={
          <VisualFrame aspect="video">
            <p className="mb-4 text-label">Every example includes</p>
            <ul className="flex flex-1 flex-col justify-center gap-2.5 md:gap-3">
              {included.map((item) => (
                <li key={item} className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-foreground md:text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </VisualFrame>
        }
      />

      <section className="pb-6">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rounded-sm border border-white/[0.08] border-l-2 border-l-accent/60 bg-white/[0.03] px-5 py-4 text-sm leading-[1.7] text-muted-foreground">
            Illustrative examples. Seven are built on synthetic data; the retail example uses the public Contoso sample dataset (SQLBI, MIT licence). Every company, customer and figure on these pages is fictional. They are not client results.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 lg:px-10">
          {showcaseExamples.map((ex, i) => (
            <AnimateIn key={ex.slug} delay={i * 0.04}>
              <Link
                href={`/examples/${ex.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.14] md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">{ex.buyer}</p>
                  <div className="flex flex-wrap gap-2">
                    {getDashboard(ex.slug) ? (
                      <span className="rounded-sm border border-white/15 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.06em] text-muted-foreground">
                        Live Power BI
                      </span>
                    ) : null}
                    {getAutomation(ex.slug) ? (
                      <span className="rounded-sm border border-accent/40 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.06em] text-accent-foreground">
                        {getAutomation(ex.slug)?.engine === "n8n" ? "Runnable n8n workflow" : "LangGraph agent"}
                      </span>
                    ) : null}
                  </div>
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground">
                  {ex.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{ex.question}</p>
                <div className="mt-6 flex items-baseline gap-3 border-t border-white/[0.06] pt-5">
                  <span className="font-display text-xl text-foreground">{ex.kpis[0].value}</span>
                  <span className="text-xs text-muted">{ex.kpis[0].label}</span>
                </div>
                <span className="mt-6 text-sm text-muted transition-colors duration-500 group-hover:text-accent-foreground">View example →</span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <FinalCTA
        supportingLine="Every example started as a question a leadership team could not answer from its current reports. Bring yours."
        secondaryLink={{ href: "/diagnostic", label: "See the diagnostic →" }}
      />
    </>
  );
}
