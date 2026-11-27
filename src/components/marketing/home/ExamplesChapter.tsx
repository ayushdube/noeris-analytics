import Link from "next/link";

import { showcaseExamples } from "@/modules/content/showcase";
import { getDashboard } from "@/modules/content/showcase/dashboards";

// Four of the eight worked examples, each with a live Power BI dashboard.
const featured = ["pe-portfolio-pack", "month-end-cfo-pack", "shopify-weekly-review", "retail-analytics-at-scale"];

export function ExamplesChapter() {
  const examples = featured
    .map((slug) => showcaseExamples.find((ex) => ex.slug === slug))
    .filter((ex): ex is (typeof showcaseExamples)[number] => Boolean(ex));

  return (
    <section id="examples" className="relative">
      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-label">Worked examples</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
              See the work before you commission it.
            </h2>
            <p className="mt-6 text-sm leading-[1.85] text-muted-foreground md:text-base">
              Each example has a live dashboard you can click through, built on synthetic or public sample data for a fictional company.
            </p>
          </div>
          <Link href="/examples" className="text-sm text-muted-foreground transition-colors duration-500 hover:text-accent-foreground">
            All eight examples →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {examples.map((ex) => (
            <Link
              key={ex.slug}
              href={`/examples/${ex.slug}`}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.16] md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">{ex.buyer}</p>
                {getDashboard(ex.slug) ? (
                  <span className="rounded-sm border border-white/15 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.06em] text-muted-foreground">
                    Live dashboard
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground">
                {ex.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{ex.question}</p>
              <span className="mt-6 text-sm text-muted transition-colors duration-500 group-hover:text-accent-foreground">View example →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
