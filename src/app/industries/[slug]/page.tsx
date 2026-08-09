import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { DataSourcesRow } from "@/components/marketing/industries/DataSourcesRow";
import { HowItWorksFlow } from "@/components/marketing/industries/HowItWorksFlow";
import { IndustryComplianceCallout } from "@/components/marketing/industries/IndustryComplianceCallout";
import { IndustryDualCTA } from "@/components/marketing/industries/IndustryDualCTA";
import { IndustryIllustration } from "@/components/marketing/industries/IndustryIllustration";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { KpiChips } from "@/components/visuals/KpiChips";
import { KpiDashboardPreview } from "@/components/visuals/KpiDashboardPreview";
import { SplitHero } from "@/components/visuals/SplitHero";
import { industries, getIndustry } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return createPageMetadata({
    title: `${industry.title} Analytics`,
    description: industry.summary,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const heroDescription = industry.heroDescription ?? industry.summary;
  const heroKpiChips =
    industry.extensions?.heroKpiChips ?? industry.kpis;
  const dashboardPreview = industry.extensions?.dashboardPreview;

  return (
    <>
      <SplitHero
        eyebrow="Industry"
        title={industry.title}
        description={heroDescription}
        meta={<KpiChips items={heroKpiChips} />}
        visual={
          <KpiDashboardPreview
            title={`${industry.title} KPIs`}
            kpis={dashboardPreview ? undefined : industry.kpis}
            metrics={dashboardPreview?.metrics}
            chartType={dashboardPreview?.chartType ?? "bar"}
          />
        }
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <AnimateIn>
              <div className="mb-8 flex items-center gap-4">
                <IndustryIllustration slug={slug} className="h-10 w-14 shrink-0 opacity-60" />
                <p className="text-label">Challenges</p>
              </div>
              <ul className="space-y-5">
                {industry.challenges.map((c) => (
                  <li key={c} className="text-sm leading-[1.8] text-muted-foreground">{c}</li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.06}>
              <p className="mb-8 text-label">Typical KPIs</p>
              <ul className="space-y-4">
                {industry.kpis.map((kpi) => (
                  <li key={kpi} className="text-sm text-muted">{kpi}</li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <p className="mb-8 text-label">Outcomes</p>
              <ul className="space-y-5">
                {industry.outcomes.map((o) => (
                  <li key={o} className="text-sm leading-[1.8] text-muted-foreground">{o}</li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {industry.extensions?.dataSources && (
        <DataSourcesRow sources={industry.extensions.dataSources} />
      )}

      {industry.extensions?.complianceCallout && (
        <IndustryComplianceCallout text={industry.extensions.complianceCallout} />
      )}

      {industry.extensions?.howItWorks && (
        <HowItWorksFlow steps={industry.extensions.howItWorks} />
      )}

      {industry.extensions?.cta ? (
        <IndustryDualCTA
          primary={industry.extensions.cta.primary}
          secondary={industry.extensions.cta.secondary}
          secondaryHref={industry.extensions.cta.secondaryHref}
          secondaryVariant={industry.extensions.cta.secondaryVariant}
        />
      ) : (
        <section className="pt-4 pb-8 md:pt-6 md:pb-10">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
              <BookingButton size="lg" />
              <Link href="/industries" className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
                ← All industries
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
