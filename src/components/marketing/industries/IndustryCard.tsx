import Link from "next/link";

import { IndustryIllustration } from "@/components/marketing/industries/IndustryIllustration";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  slug: string;
  title: string;
  summary: string;
  primaryKpi?: string;
  heading?: "h2" | "h3";
  className?: string;
}

export function IndustryCard({
  slug,
  title,
  summary,
  primaryKpi,
  heading: Heading = "h2",
  className,
}: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className={cn("group mb-16 block break-inside-avoid md:mb-20", className)}
    >
      <div className="flex items-start gap-3.5">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/[0.06] bg-surface/30 transition-colors duration-500 group-hover:border-white/[0.1] group-hover:bg-surface/50">
          <IndustryIllustration
            slug={slug}
            className="h-6 w-6 transition-colors duration-500 group-hover:text-foreground/50"
          />
        </div>

        <div className="min-w-0 flex-1">
          <Heading className="font-display text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-2xl">
            {title}
            <span className="ml-2 inline-block opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100">
              →
            </span>
          </Heading>
          <p className="mt-4 text-sm leading-[1.8] text-muted">{summary}</p>
          {primaryKpi ? (
            <span className="mt-3 inline-flex items-center rounded-full border border-accent/25 bg-accent-muted px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-accent-foreground">
              {primaryKpi}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
