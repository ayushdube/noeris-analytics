import type { Metadata } from "next";

import { Section } from "@/components/layout/Container";
import { AboutFounders } from "@/components/marketing/about/AboutFounders";
import { UpworkTrustStrip } from "@/components/marketing/about/UpworkTrustStrip";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { DecisionFoundationVisual } from "@/components/visuals/DecisionFoundationVisual";
import { OutcomesMetricsVisual } from "@/components/visuals/OutcomesMetricsVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Noeris Analytics is an AI-native enterprise intelligence and automation partner, combining data engineering, business intelligence, and AI-powered automation.",
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
      "Certified metrics, documented lineage, and governed access. Where an AI workflow is in scope, the calculation stays in the data platform and a person reviews consequential output.",
  },
  {
    title: "AI-native, human-accountable delivery",
    description:
      "We use modern AI tools, LLMs, and agentic workflows to speed up engineering, testing, and documentation on Snowflake, Databricks, Azure, and Power BI. Architecture, validation, and sign-off stay with experienced people.",
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
      <SplitHero
        eyebrow="About"
        title="Enterprise intelligence for companies that need to decide faster"
        description="We combine enterprise data engineering, business intelligence, and AI-powered automation to help organizations improve visibility, optimize operations, and make better decisions. Noeris builds, integrates, and operates the intelligence infrastructure behind them."
        visual={<OutcomesMetricsVisual />}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div>
              <AnimateIn>
                <p className="mb-5 text-label">Philosophy</p>
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl">
                  We do not sell dashboards
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <div className="mt-10 space-y-6 text-lg leading-[1.8] text-muted-foreground">
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
              </AnimateIn>
            </div>
            <AnimateIn delay={0.12}>
              <DecisionFoundationVisual />
            </AnimateIn>
          </div>
        </div>
      </section>

      <Section eyebrow="Approach" title="Why companies trust Noeris" wide>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {principles.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 0.06}>
              <article>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                  {p.title}
                </h3>
                <p className="mt-5 text-base leading-[1.8] text-muted">{p.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <AboutFounders />

      <UpworkTrustStrip />

      <FinalCTA
        supportingLine="Engagements start with a free 45-minute discovery call. No pitch deck. No sales handoff."
        bookingLabel="Book a discovery call"
      />
    </>
  );
}
