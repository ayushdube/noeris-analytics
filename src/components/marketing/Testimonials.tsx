"use client";

import { useState } from "react";

import { TestimonialCard } from "@/components/marketing/TestimonialCard";
import { testimonials } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  if (!current) return null;

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 md:py-40 lg:py-48">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[120px]"
        aria-hidden="true"
      />

      <Container>
        <FadeIn>
          <p className="mb-20 text-label md:mb-28">
            Client Perspectives
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <blockquote className="max-w-4xl">
            <p className="font-display text-2xl font-medium leading-[1.35] tracking-[-0.02em] text-foreground md:text-3xl lg:text-4xl lg:leading-[1.3]">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-14">
              <cite className="not-italic">
                <span className="block text-sm text-foreground">{current.author}</span>
                <span className="mt-1 block text-sm text-muted">{current.company}</span>
              </cite>
            </footer>
          </blockquote>
        </FadeIn>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((testimonial, i) => (
            <button
              key={`${testimonial.author}-${testimonial.company}`}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "min-w-[85%] shrink-0 text-left transition-opacity duration-300 md:min-w-0",
                i === active ? "opacity-100" : "opacity-70 hover:opacity-90",
              )}
              aria-label={`View testimonial from ${testimonial.author}`}
              aria-current={i === active ? "true" : undefined}
            >
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </button>
          ))}
        </div>

        <div className="mt-8 flex gap-4 md:mt-10">
          {testimonials.map((t, i) => (
            <button
              key={`indicator-${t.author}-${t.company}`}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "h-px flex-1 max-w-12 transition-all duration-700",
                i === active ? "bg-foreground/50" : "bg-white/5 hover:bg-white/10",
              )}
              aria-label={`View testimonial from ${t.author}`}
              aria-current={i === active ? "true" : undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
