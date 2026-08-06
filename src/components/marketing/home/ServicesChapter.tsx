"use client";

import Link from "next/link";

import { ServiceLeadSignature } from "@/components/marketing/founders/ServiceLeadSignature";
import { getServiceLead } from "@/modules/content/founders-content";
import { services } from "@/modules/content/site-content";
import { motion } from "framer-motion";

export function ServicesChapter() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
        <div className="chapter-glow-left px-6 pt-14 pb-8 md:px-10 md:pt-20 md:pb-10 lg:col-span-4">
          <motion.p
            className="text-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            className="mt-6 font-display text-4xl font-medium leading-[1] tracking-[-0.03em] text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            We do not sell dashboards.
          </motion.h2>
        </div>

        <div className="px-6 pb-12 md:px-10 md:pb-14 lg:col-span-8 lg:pt-20 lg:pl-0 lg:pr-16">
          {services.map((service, i) => {
            const leadId = getServiceLead(service.slug);

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              >
                <Link href={`/services/${service.slug}`} className="group block py-7 md:py-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between md:gap-12">
                    <h3 className="shrink-0 font-display text-2xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-700 group-hover:text-accent-foreground md:w-[14rem] md:text-[1.65rem]">
                      {service.title}
                    </h3>
                    <p className="max-w-lg text-sm leading-[1.85] text-muted-foreground md:text-[15px]">
                      {service.summary}
                    </p>
                  </div>
                  {leadId && <ServiceLeadSignature founderId={leadId} className="mt-5" />}
                  {i < services.length - 1 && (
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-white/[0.06] to-transparent" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
