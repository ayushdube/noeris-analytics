import type { Metadata } from "next";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { FadeIn } from "@/components/marketing/FadeIn";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Noeris Analytics helps organizations build trusted decision systems through modern business intelligence, data engineering, and AI-powered analytics.",
  path: "/about",
});

const principles = [
  {
    title: "Business-first thinking",
    description:
      "We start with how decisions get made - not with tools. Every architecture choice maps to a business outcome.",
  },
  {
    title: "Trusted data foundations",
    description:
      "Certified metrics, documented lineage, and governed access. Analytics teams and executives work from the same numbers.",
  },
  {
    title: "Modern platform architecture",
    description:
      "Microsoft Fabric, Snowflake, Databricks, and Power BI deployed with patterns that scale as your business grows.",
  },
  {
    title: "Enablement over dependency",
    description:
      "We train your teams, document KPI ownership, and design for self-service - so you retain capability after we leave.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="statement"
        eyebrow="About"
        title="Modern analytics for companies that need to decide faster"
        description="Noeris helps organizations build a trusted decision system by integrating business data, modernizing analytics platforms, and delivering actionable insights through dashboards, reporting, and AI-powered intelligence."
        wide
      />

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FadeIn>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Philosophy</p>
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl">
              We do not sell dashboards
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-12 space-y-8 text-lg leading-[1.8] text-muted-foreground">
              <p>
                Most companies already own all the data they need. It is fragmented across dozens of systems - 
                Shopify, ERP, CRM, finance, marketing - with no single path from raw data to executive insight.
              </p>
              <p>
                Noeris creates a trusted decision system by connecting that data into one modern analytics platform.
                We work with leadership teams at growing companies who need enterprise-grade intelligence without
                enterprise-grade bureaucracy.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section eyebrow="Approach" title="Why companies trust Noeris" wide>
        <div className="space-y-16 md:space-y-20">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <article>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted">{p.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
