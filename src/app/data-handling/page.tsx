import type { Metadata } from "next";

import { Section } from "@/components/layout/Container";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { SplitHero } from "@/components/visuals/SplitHero";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "How We Handle Your Data",
  description:
    "How Noeris handles client data, system access, AI models, confidentiality, and regulated data across data engineering, analytics, and AI engagements.",
  path: "/data-handling",
});

const commitments = [
  {
    title: "Your data stays in your environment",
    description:
      "Wherever possible we work inside your cloud tenant, warehouse, and BI workspace, using accounts you create and can revoke. We avoid copying production data to our own machines. Where a local extract is unavoidable, it is agreed in advance, kept to the minimum needed, and deleted when the work ends.",
  },
  {
    title: "Access you control",
    description:
      "Named individual accounts, least-privilege roles, and multi-factor authentication wherever your platforms support it. No shared logins. You can see who has access at any time, and we ask you to remove it when the engagement closes.",
  },
  {
    title: "AI models and your data",
    description:
      "We use model providers' commercial API or enterprise terms, which by default exclude your inputs from model training, and we confirm the current terms for the provider you approve. Where your platform supports it, processing can stay inside your own cloud tenant. Client data never goes into consumer AI chat tools.",
  },
  {
    title: "Numbers come from your data, not the model",
    description:
      "Figures are calculated in your warehouse or semantic model. A language model interprets the question and explains the result. Consequential output is reviewed by a person before it circulates, with a record of the query behind it.",
  },
  {
    title: "Confidentiality and ownership",
    description:
      "We sign your NDA, or provide ours, before any data is shared. Pipelines, models, code, documentation, and reports built for you belong to you, unless we agree otherwise in writing.",
  },
  {
    title: "Regulated and personal data",
    description:
      "For health, financial, or personal data we work to the obligations you carry and the policies you already have. We use masked or de-identified data during development where possible, document data flows for your compliance team, and complete your vendor security questionnaire.",
  },
  {
    title: "When the engagement ends",
    description:
      "Access is removed, any agreed local extracts are deleted, and you receive the documentation needed to operate what we built without us.",
  },
];

function DataHandlingVisual() {
  const layers = [
    { label: "Your environment", detail: "Tenant · warehouse · BI workspace" },
    { label: "Approved datasets", detail: "Least-privilege access" },
    { label: "Model provider", detail: "Commercial terms · no training" },
    { label: "Human review", detail: "Before output circulates" },
  ];
  return (
    <VisualFrame aspect="video">
      <p className="mb-4 text-label">Where your data goes</p>
      <div className="flex flex-1 flex-col justify-center gap-2.5 md:gap-3">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="flex items-baseline justify-between gap-4 rounded-sm border border-white/[0.08] bg-white/[0.03] px-4 py-3"
          >
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground md:text-xs">
              {layer.label}
            </span>
            <span className="text-right text-xs text-muted">{layer.detail}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export default function DataHandlingPage() {
  return (
    <>
      <SplitHero
        eyebrow="Trust"
        title="How we handle your data"
        description="What happens to your data, your systems, and AI output when you work with Noeris. If your security team has a question this page does not answer, we will answer it in writing before work starts."
        visual={<DataHandlingVisual />}
      />

      <Section eyebrow="Commitments" title="The way every engagement runs" wide>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {commitments.map((item, i) => (
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

      <FinalCTA
        supportingLine="Send your security questionnaire or data-handling requirements with your first message."
        secondaryLink={{ href: "/diagnostic", label: "See the diagnostic →" }}
      />
    </>
  );
}
