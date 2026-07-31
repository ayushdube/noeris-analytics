import Link from "next/link";

import { industries } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

export function IndustriesGrid() {
  return (
    <section id="industries" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <FadeIn>
          <p className="mb-20 font-mono text-[11px] uppercase tracking-[0.25em] text-muted md:mb-28">
            Industries
          </p>
        </FadeIn>

        <div className="columns-1 gap-x-20 md:columns-2 lg:columns-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry.slug} delay={i * 0.04}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group mb-16 block break-inside-avoid md:mb-20"
              >
                <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-2xl">
                  {industry.title}
                  <span className="ml-2 inline-block opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100">
                    →
                  </span>
                </h3>
                <p className="mt-4 text-sm leading-[1.8] text-muted">{industry.summary}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
