import Link from "next/link";

import { AnimateIn } from "@/components/visuals/AnimateIn";
import type { ServiceEarlyAccessCallout } from "@/modules/content/service-related-case-studies";

interface ServiceEarlyAccessCalloutBoxProps {
  callout: ServiceEarlyAccessCallout;
}

export function ServiceEarlyAccessCalloutBox({ callout }: ServiceEarlyAccessCalloutBoxProps) {
  return (
    <AnimateIn delay={0.08}>
      <aside className="mt-6 rounded-sm border border-white/[0.08] border-l-2 border-l-accent/60 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
        <p className="text-label text-label-sm">{callout.label}</p>
        <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{callout.text}</p>
        <Link
          href="/contact"
          className="mt-4 inline-flex text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
        >
          Book a call →
        </Link>
      </aside>
    </AnimateIn>
  );
}
