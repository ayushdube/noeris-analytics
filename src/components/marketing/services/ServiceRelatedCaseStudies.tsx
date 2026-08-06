import Link from "next/link";

import { AnimateIn } from "@/components/visuals/AnimateIn";
import type { ServiceRelatedCaseStudy } from "@/modules/content/service-related-case-studies";

interface ServiceRelatedCaseStudiesProps {
  studies: ServiceRelatedCaseStudy[];
}

export function ServiceRelatedCaseStudies({ studies }: ServiceRelatedCaseStudiesProps) {
  if (studies.length === 0) return null;

  return (
    <AnimateIn>
      <p className="mb-6 text-label">Related case studies</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {studies.map((study) => (
          <article
            key={`${study.href}-${study.title}`}
            className="flex h-full flex-col rounded-sm border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
          >
            <p className="text-label text-label-sm">{study.industry}</p>
            <h3 className="mt-3 font-display text-lg font-medium leading-snug tracking-[-0.01em] text-foreground">
              {study.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {study.outcome}
            </p>
            <Link
              href={study.href}
              className="mt-5 text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
            >
              View case study →
            </Link>
          </article>
        ))}
      </div>
    </AnimateIn>
  );
}
