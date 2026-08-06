export const siteConfig = {
  name: "Noeris Analytics",
  domain: "noeris.io",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noeris.io",
  tagline: "Modern Business Intelligence for Growing Companies",
  description:
    "Turn fragmented business data into trusted insights for business teams and executive leadership.",
  email: "hello@noeris.io",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  bookingCtaLabel: "Talk to a Principal Consultant",
  heroProofPoint: {
    metric: "85%",
    label: "reduction in month-end close time for channel reporting",
  },
} as const;

/** @deprecated Import `siteConfig.bookingCtaLabel` instead */
export const bookingCtaLabel = siteConfig.bookingCtaLabel;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
