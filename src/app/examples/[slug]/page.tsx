import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AutomationReplay } from "@/components/marketing/examples/AutomationReplay";
import { ExampleChart } from "@/components/marketing/examples/ExampleChart";
import { LiveDashboard } from "@/components/marketing/examples/LiveDashboard";
import { NoteMarkdown } from "@/components/marketing/examples/NoteMarkdown";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { SplitHero } from "@/components/visuals/SplitHero";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getAutomation, getShowcaseExample, showcaseExamples } from "@/modules/content/showcase";
import { getDashboard } from "@/modules/content/showcase/dashboards";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return showcaseExamples.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ex = getShowcaseExample(slug);
  if (!ex) return {};
  return createPageMetadata({
    title: `${ex.title} (Example)`,
    description: `${ex.summary} Illustrative example on ${ex.dataLabel}.`,
    path: `/examples/${slug}`,
  });
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <p className="mb-8 text-label">{label}</p>
        </AnimateIn>
        {children}
      </div>
    </section>
  );
}

export default async function ExamplePage({ params }: Props) {
  const { slug } = await params;
  const ex = getShowcaseExample(slug);
  if (!ex) notFound();
  const automation = getAutomation(ex.slug);
  const dashboard = getDashboard(ex.slug);

  return (
    <>
      <SplitHero
        eyebrow={`Worked example · ${ex.dataLabel}`}
        title={ex.title}
        description={ex.summary}
        visual={
          <VisualFrame aspect="auto">
            <p className="mb-4 text-label">{ex.company}</p>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {ex.kpis.map((k) => (
                <div key={k.label} className="min-w-0 bg-white/[0.04] px-3 py-3 md:px-4 md:py-4">
                  <p className="text-[0.625rem] font-medium uppercase leading-snug tracking-[0.06em] text-muted md:text-label-sm">{k.label}</p>
                  <p className="mt-1.5 font-display text-lg font-medium text-foreground md:text-xl">{k.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{k.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.6875rem] text-muted">Illustrative · {ex.dataLabel}</p>
          </VisualFrame>
        }
      />

      <section className="pb-4">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="rounded-sm border border-white/[0.08] border-l-2 border-l-accent/60 bg-white/[0.03] px-5 py-4 text-sm leading-[1.7] text-muted-foreground">
            {ex.disclaimer} Built for: {ex.buyer}.
          </p>
        </div>
      </section>

      <Block label="The question">
        <AnimateIn>
          <p className="max-w-4xl text-balance font-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-foreground md:text-4xl">
            {ex.question}
          </p>
        </AnimateIn>
      </Block>

      <Block label="What the data shows">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          <AnimateIn>
            <VisualFrame aspect="auto" glow={false}>
              <ExampleChart chart={ex.chart} />
            </VisualFrame>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <VisualFrame aspect="auto" glow={false}>
              <p className="mb-4 text-label">{ex.table.title}</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead>
                    <tr>
                      {ex.table.columns.map((c) => (
                        <th key={c} className="border-b border-white/10 py-2 pr-4 font-mono text-[0.6875rem] font-normal uppercase tracking-[0.06em] text-muted">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ex.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`border-b border-white/[0.05] py-2.5 pr-4 ${ci === 0 ? "text-foreground/90" : "text-muted-foreground"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </VisualFrame>
          </AnimateIn>
        </div>
      </Block>

      {dashboard ? (
        <Block label="The dashboard, live">
          <AnimateIn>
            <LiveDashboard dashboard={dashboard} />
          </AnimateIn>
        </Block>
      ) : null}

      <Block label="The AI workflow">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ex.workflow.map((step, i) => (
            <AnimateIn key={step} delay={i * 0.04}>
              <li className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted-foreground">{step}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </Block>

      {automation ? (
        <Block label={automation.engine === "n8n" ? "The workflow, running" : "The agent, running"}>
          <AnimateIn>
            <div className="mb-8 max-w-4xl">
              <h2 className="font-display text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">{automation.title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted-foreground">{automation.summary}</p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.04}>
            <AutomationReplay automation={automation} />
          </AnimateIn>
        </Block>
      ) : null}

      <Block label={ex.note.title}>
        <AnimateIn>
          <article className="max-w-4xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10">
            <p className="mb-6 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
              Drafted by AI from computed figures · every number checked against the data · reviewed before circulation
            </p>
            <NoteMarkdown markdown={ex.note.markdown} />
          </article>
        </AnimateIn>
        {ex.documents && ex.documents.length > 0 ? (
          <AnimateIn delay={0.06}>
            <div className="mt-8 max-w-4xl">
              <p className="mb-3 text-sm text-muted-foreground">The sample submissions the workflow read (synthetic PDFs):</p>
              <div className="flex flex-wrap gap-2">
                {ex.documents.map((d) => (
                  <a key={d} href={d} target="_blank" rel="noopener noreferrer"
                     className="rounded-sm border border-white/10 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-500 hover:text-accent-foreground">
                    {d.split("/").pop()?.replace(".pdf", "")} ↗
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>
        ) : null}
      </Block>

      <Block label="How it is built">
        <div className="grid gap-10 md:grid-cols-3">
          <AnimateIn>
            <p className="mb-4 text-sm text-foreground">Source systems simulated</p>
            <ul className="space-y-2">{ex.sources.map((s) => <li key={s} className="text-sm text-muted-foreground">{s}</li>)}</ul>
          </AnimateIn>
          <AnimateIn delay={0.04}>
            <p className="mb-4 text-sm text-foreground">Data models</p>
            <ul className="space-y-2">{ex.models.map((m) => <li key={m} className="font-mono text-xs text-muted-foreground">{m}</li>)}</ul>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <p className="mb-4 text-sm text-foreground">Checks</p>
            <ul className="space-y-2">{ex.checks.map((c) => <li key={c} className="text-sm text-muted-foreground">{c}</li>)}</ul>
          </AnimateIn>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link href={`/industries/${ex.industrySlug}`} className="text-muted transition-colors duration-500 hover:text-accent-foreground">Industry page →</Link>
          <Link href="/data-handling" className="text-muted transition-colors duration-500 hover:text-accent-foreground">How we handle your data →</Link>
          <Link href="/examples" className="text-muted transition-colors duration-500 hover:text-accent-foreground">← All examples</Link>
        </div>
      </Block>

      <FinalCTA
        supportingLine="Want this built on your own data? It usually starts with a fixed-scope diagnostic."
        secondaryLink={{ href: "/diagnostic", label: "See the diagnostic →" }}
      />
    </>
  );
}
