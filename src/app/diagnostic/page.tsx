import type { Metadata } from "next";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { SplitHero } from "@/components/visuals/SplitHero";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Analytics & AI Diagnostic",
  description:
    "A fixed-scope assessment of your data, reporting, and AI opportunities. You receive a prioritized roadmap you can act on with or without Noeris.",
  path: "/diagnostic",
});

const deliverables = [
  {
    title: "Current-state map",
    description:
      "The systems that hold your data, the reports built on them, and the places where the numbers disagree.",
  },
  {
    title: "Data and architecture assessment",
    description:
      "Data quality, integration gaps, and whether your platform can support the reporting and AI work you want.",
  },
  {
    title: "Automation and AI opportunities",
    description:
      "A shortlist of workflows worth automating or augmenting with AI, ranked by business value and feasibility. Including the ones we think you should not do yet.",
  },
  {
    title: "Risk and feasibility review",
    description:
      "Data access, security, validation, and running-cost considerations for each opportunity, before anything is built.",
  },
  {
    title: "Prioritized roadmap",
    description:
      "Sequenced next steps with effort ranges, dependencies, and the decisions your team needs to make.",
  },
  {
    title: "Leadership readout",
    description:
      "A working session with the people who own the outcome, to walk through findings and agree what happens next.",
  },
];

const steps = [
  {
    step: "01",
    title: "Scope",
    description:
      "Agree the business questions, the systems in scope, and the people we should speak to. Scope and fee are fixed in writing before work starts.",
  },
  {
    step: "02",
    title: "Access and interviews",
    description:
      "Read-only access to the agreed systems and short conversations with finance, operations, and data owners.",
  },
  {
    step: "03",
    title: "Assess",
    description:
      "Review data, models, reports, and workflows against the questions agreed in scope.",
  },
  {
    step: "04",
    title: "Readout",
    description:
      "Written findings and roadmap, presented to leadership. You keep everything.",
  },
];

function DiagnosticVisual() {
  return (
    <VisualFrame aspect="video">
      <p className="mb-4 text-label">You receive</p>
      <ul className="flex flex-1 flex-col justify-center gap-2.5 md:gap-3">
        {deliverables.map((item) => (
          <li
            key={item.title}
            className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground md:text-xs"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </VisualFrame>
  );
}

export default function DiagnosticPage() {
  return (
    <>
      <SplitHero
        eyebrow="First engagement"
        title="Analytics & AI Diagnostic"
        description="A fixed-scope assessment of your data, your reporting, and the AI uses worth pursuing. You leave with a written roadmap you can act on with us, with another partner, or on your own."
        visual={<DiagnosticVisual />}
      />

      <Section eyebrow="Deliverables" title="What you get" wide>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {deliverables.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.05}>
              <article>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-[1.8] text-muted">{item.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="How it runs" wide>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4 lg:gap-x-10">
          {steps.map((item, i) => (
            <AnimateIn key={item.step} delay={i * 0.05}>
              <article>
                <p className="font-mono text-xs text-accent">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.01em] text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.8] text-muted md:text-base">{item.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Section>

      <FinalCTA
        supportingLine="Tell us the decision your current numbers cannot support. We will reply with a proposed scope."
        secondaryLink={{ href: "/data-handling", label: "How we handle your data →" }}
      />
    </>
  );
}
