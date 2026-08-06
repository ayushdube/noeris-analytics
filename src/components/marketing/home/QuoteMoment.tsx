"use client";

import { TestimonialCard, TestimonialPlaceholder } from "@/components/marketing/TestimonialCard";
import { testimonials } from "@/modules/content/site-content";
import { motion } from "framer-motion";

export function QuoteMoment() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1, 3);
  const showPlaceholder = supporting.length < 2;

  if (!featured) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="chapter-glow-center pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <TestimonialCard testimonial={featured} variant="featured" />

          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:gap-6">
            {supporting.map((testimonial) => (
              <TestimonialCard key={`${testimonial.author}-${testimonial.company}`} testimonial={testimonial} />
            ))}
            {showPlaceholder && <TestimonialPlaceholder />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
