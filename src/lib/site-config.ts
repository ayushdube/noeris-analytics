export const siteConfig = {
  name: "Noeris Analytics",
  domain: "noeris.io",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noeris.io",
  tagline: "Modern Business Intelligence for Growing Companies",
  description:
    "Turn fragmented business data into trusted insights for business teams and executive leadership.",
  email: "hello@noeris.io",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
