import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { ServiceEarlyAccessCalloutBox } from "@/components/marketing/services/ServiceEarlyAccessCalloutBox";
import { ServiceRelatedCaseStudies } from "@/components/marketing/services/ServiceRelatedCaseStudies";
import { ServiceLeadSignature } from "@/components/marketing/founders/ServiceLeadSignature";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { ProcessTimelineVisual } from "@/components/visuals/ProcessTimelineVisual";
import { ServiceDetailVisual } from "@/components/visuals/ServiceDetailVisual";
import { SplitHero } from "@/components/visuals/SplitHero";
import { getServiceLead } from "@/modules/content/founders-content";
import { siteConfig } from "@/lib/site-config";
import { services, getService } from "@/modules/content/site-content";
import {
  getServiceEarlyAccessCallout,
  getServiceRelatedCaseStudies,
} from "@/modules/content/service-related-case-studies";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: `${service.title} Consulting`,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const leadId = getServiceLead(slug);
  const relatedCaseStudies = getServiceRelatedCaseStudies(slug);
  const earlyAccessCallout = getServiceEarlyAccessCallout(slug);

  return (
    <>
      <SplitHero
        compact
        tight
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        meta={
          <p className="mt-8 font-mono text-sm text-muted">
            Typical timeline · {service.timeline}
          </p>
        }
        visual={<ServiceDetailVisual slug={slug} deliverables={service.deliverables} />}
      />

      <section className="overflow-x-hidden py-12 md:py-20">
        <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid w-full min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="grid w-full min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <AnimateIn>
                <p className="mb-8 text-label">Challenges</p>
                <ul className="space-y-6">
                  {service.challenges.map((c) => (
                    <li key={c} className="text-base leading-[1.8] text-muted-foreground">{c}</li>
                  ))}
                </ul>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <p className="mb-8 text-label">Outcomes</p>
                <ul className="space-y-6">
                  {service.outcomes.map((o) => (
                    <li key={o} className="text-base leading-[1.8] text-muted-foreground">{o}</li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.12} className="min-w-0 w-full">
              <ProcessTimelineVisual />
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ServiceRelatedCaseStudies studies={relatedCaseStudies} />
          {earlyAccessCallout ? <ServiceEarlyAccessCalloutBox callout={earlyAccessCallout} /> : null}

          <AnimateIn delay={0.12}>
            <p className="mb-6 mt-10 text-label">Deliverables</p>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((d) => (
                <span
                  key={d}
                  className="inline-flex rounded border border-white/20 bg-transparent px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {d}
                </span>
              ))}
            </div>
          </AnimateIn>

          {leadId && (
            <AnimateIn delay={0.16}>
              <ServiceLeadSignature founderId={leadId} className="mt-10" />
            </AnimateIn>
          )}

          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookingButton size="lg" variant="accent" label={siteConfig.bookingCtaLabel} />
              <Button asChild variant="ghost" size="lg">
                <Link href="/case-studies">View case studies →</Link>
              </Button>
            </div>
            <Link href="/services" className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
              ← All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
