import Link from "next/link";

import { services } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

export function ServicesGrid() {
  return (
    <section id="services" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <FadeIn>
          <div className="mb-24 max-w-3xl md:mb-32">
            <p className="mb-5 text-label">
              Services
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
              We do not sell dashboards.
            </h2>
            <p className="mt-8 text-lg leading-[1.75] text-muted-foreground md:text-xl">
              We help businesses make faster, better decisions.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16 md:space-y-20">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-4 md:grid-cols-[1.2fr_1.8fr_auto] md:items-baseline md:gap-16"
              >
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-base leading-[1.8] text-muted-foreground">{service.summary}</p>
                <span
                  className="font-mono text-sm text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
