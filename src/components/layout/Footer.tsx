import Link from "next/link";

import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/layout/Container";
import { footerFounders, founders } from "@/modules/content/founders-content";
import { navLinks, siteConfig } from "@/lib/site-config";

const footerLinks = {
  services: [
    { href: "/services/business-intelligence", label: "Business Intelligence" },
    { href: "/services/data-engineering", label: "Data Engineering" },
    { href: "/services/analytics-modernization", label: "Analytics Modernization" },
    { href: "/services/ai-powered-analytics", label: "AI-powered Analytics" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="pb-16 pt-24 md:pb-20 md:pt-32">
      <Container wide>
        <div className="grid gap-20 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div>
            <Wordmark size="lg" />
            <p className="mt-8 max-w-xs text-sm leading-[1.8] text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-10 font-mono text-sm text-muted">{siteConfig.email}</p>
          </div>

          <div>
            <p className="mb-6 text-label">
              {footerFounders.label}
            </p>
            <p className="text-sm text-muted-foreground">{founders.ankita.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{founders.ayush.name}</p>
            <p className="mt-5 max-w-[12rem] text-sm leading-relaxed text-muted">
              {footerFounders.tagline}
            </p>
          </div>

          <div>
            <p className="mb-8 text-label">
              Services
            </p>
            <ul className="space-y-5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-8 text-label">
              Company
            </p>
            <ul className="space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 text-sm text-muted md:mt-32 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-500 hover:text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
