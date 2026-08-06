import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IndustrySlug =
  | "oil-gas"
  | "shopify-ecommerce"
  | "manufacturing"
  | "saas"
  | "healthcare"
  | "financial-services"
  | "logistics"
  | "private-equity";

interface IndustryIllustrationProps {
  slug: string;
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IllustrationFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 80 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      {children}
    </svg>
  );
}

const illustrations: Record<IndustrySlug, ReactNode> = {
  "oil-gas": (
    <IllustrationFrame>
      <path d="M40 42V26" {...stroke} opacity="0.5" />
      <path d="M34 42h12" {...stroke} opacity="0.35" />
      <path d="M40 26l-8-10h16l-8 10z" {...stroke} opacity="0.55" />
      <path d="M36 16h8v6H36z" {...stroke} opacity="0.4" />
      <path d="M18 38h10M52 38h10" {...stroke} opacity="0.35" />
      <circle cx="14" cy="38" r="3" {...stroke} opacity="0.45" />
      <circle cx="66" cy="38" r="3" {...stroke} opacity="0.45" />
      <path d="M17 38h54" {...stroke} opacity="0.3" strokeDasharray="4 3" />
      <path d="M24 30c6-4 12-4 16 0" {...stroke} opacity="0.25" />
    </IllustrationFrame>
  ),
  "shopify-ecommerce": (
    <IllustrationFrame>
      <rect x="18" y="14" width="28" height="22" rx="2" {...stroke} opacity="0.55" />
      <path d="M18 18h28" {...stroke} opacity="0.35" />
      <path d="M26 14V10M34 14V10M42 14V10" {...stroke} opacity="0.45" />
      <path d="M24 26h16M24 30h10" {...stroke} opacity="0.35" />
      <circle cx="58" cy="20" r="3" {...stroke} opacity="0.5" />
      <circle cx="66" cy="28" r="3" {...stroke} opacity="0.35" />
      <path d="M46 24h8M54 22l4 2-4 2" {...stroke} opacity="0.4" />
      <path d="M12 38c4-6 8-6 12 0s8 6 12 0" {...stroke} opacity="0.25" />
    </IllustrationFrame>
  ),
  manufacturing: (
    <IllustrationFrame>
      <circle cx="18" cy="28" r="7" {...stroke} opacity="0.45" />
      <path d="M14 28h8M18 24v8" {...stroke} opacity="0.3" />
      <rect x="30" y="22" width="10" height="12" rx="1" {...stroke} opacity="0.5" />
      <rect x="44" y="22" width="10" height="12" rx="1" {...stroke} opacity="0.4" />
      <rect x="58" y="22" width="10" height="12" rx="1" {...stroke} opacity="0.35" />
      <path d="M28 28h2M40 28h4M54 28h4" {...stroke} opacity="0.35" />
      <path d="M30 40h38" {...stroke} opacity="0.25" />
      <path d="M34 40v-4M48 40v-4M62 40v-4" {...stroke} opacity="0.25" />
    </IllustrationFrame>
  ),
  saas: (
    <IllustrationFrame>
      <path d="M14 38L26 30l12 6 18-10" {...stroke} opacity="0.55" />
      <circle cx="26" cy="30" r="2" fill="currentColor" opacity="0.35" />
      <circle cx="38" cy="36" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="56" cy="26" r="2" fill="currentColor" opacity="0.45" />
      <rect x="14" y="40" width="52" height="6" rx="1" {...stroke} opacity="0.25" />
      <rect x="18" y="32" width="44" height="6" rx="1" {...stroke} opacity="0.35" />
      <rect x="22" y="24" width="36" height="6" rx="1" {...stroke} opacity="0.45" />
      <path d="M62 18v-4M62 14h4" {...stroke} opacity="0.3" />
    </IllustrationFrame>
  ),
  healthcare: (
    <IllustrationFrame>
      <rect x="16" y="16" width="48" height="28" rx="3" {...stroke} opacity="0.35" />
      <path
        d="M22 32h8l3-6 4 12 3-8h12"
        {...stroke}
        opacity="0.55"
      />
      <path d="M22 40h36" {...stroke} opacity="0.2" />
      <circle cx="58" cy="20" r="6" {...stroke} opacity="0.4" />
      <path d="M58 17v6M55 20h6" {...stroke} opacity="0.45" />
    </IllustrationFrame>
  ),
  "financial-services": (
    <IllustrationFrame>
      <path d="M16 40V28M26 40V22M36 40V30M46 40V18M56 40V24" {...stroke} opacity="0.45" />
      <path d="M14 40h52" {...stroke} opacity="0.25" />
      <path d="M18 26l12-8 10 6 16-12" {...stroke} opacity="0.5" />
      <path
        d="M54 14l4 2-4 2v-3.5a2 2 0 0 0-2-2h-3"
        {...stroke}
        opacity="0.35"
      />
      <rect x="52" y="12" width="10" height="12" rx="2" {...stroke} opacity="0.3" />
    </IllustrationFrame>
  ),
  logistics: (
    <IllustrationFrame>
      <circle cx="18" cy="38" r="4" {...stroke} opacity="0.45" />
      <circle cx="40" cy="24" r="4" {...stroke} opacity="0.4" />
      <circle cx="62" cy="34" r="4" {...stroke} opacity="0.5" />
      <path
        d="M22 36c8-8 10-8 14-10M44 26c6 2 10 4 14 6"
        {...stroke}
        opacity="0.4"
        strokeDasharray="3 3"
      />
      <rect x="14" y="42" width="8" height="6" rx="1" {...stroke} opacity="0.35" />
      <path d="M58 30h6l2 4h-10z" {...stroke} opacity="0.4" />
      <path d="M12 18h10M14 14h6" {...stroke} opacity="0.25" />
    </IllustrationFrame>
  ),
  "private-equity": (
    <IllustrationFrame>
      <rect x="14" y="34" width="10" height="10" rx="1" {...stroke} opacity="0.35" />
      <rect x="28" y="34" width="10" height="10" rx="1" {...stroke} opacity="0.35" />
      <rect x="14" y="20" width="10" height="10" rx="1" {...stroke} opacity="0.4" />
      <rect x="28" y="20" width="10" height="10" rx="1" {...stroke} opacity="0.4" />
      <rect x="48" y="18" width="18" height="18" rx="2" {...stroke} opacity="0.55" />
      <path d="M38 29h8M42 25v8" {...stroke} opacity="0.35" />
      <path d="M54 12v4M52 14h4" {...stroke} opacity="0.3" />
      <path d="M48 14h18" {...stroke} opacity="0.2" />
    </IllustrationFrame>
  ),
};

export function IndustryIllustration({ slug, className }: IndustryIllustrationProps) {
  const illustration = illustrations[slug as IndustrySlug];

  if (!illustration) return null;

  return <div className={cn("text-muted-foreground", className)}>{illustration}</div>;
}
