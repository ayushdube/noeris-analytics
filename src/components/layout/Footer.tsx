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
    { href: "/services/agentic-ai-autonomous-analytics", label: "Agentic AI" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};

function FooterLogoLockup() {
  return <Wordmark size="md" layout="inline" className="max-w-full" />;
}

export function Footer() {
  return (
    <footer className="overflow-x-clip border-t border-white/[0.08] bg-[#111111] py-10 md:py-12">
      <Container wide className="min-w-0">
        <div className="grid min-w-0 grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <div className="max-w-full overflow-hidden">
              <FooterLogoLockup />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-[1.8] text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-8 break-all font-mono text-sm text-muted md:mt-10">{siteConfig.email}</p>
          </div>

          <div className="min-w-0">
            <p className="mb-5 text-label md:mb-6">{footerFounders.label}</p>
            <p className="text-sm text-muted-foreground">{founders.ankita.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{founders.ayush.name}</p>
            <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.08em] text-muted">
              {footerFounders.tagline}
            </p>
          </div>

          <div className="min-w-0">
            <p className="mb-5 text-label md:mb-8">Services</p>
            <ul className="space-y-4 md:space-y-5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-snug text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="mb-5 text-label md:mb-8">Company</p>
            <ul className="space-y-4 md:space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-snug text-muted-foreground transition-colors duration-500 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center font-mono text-[10px] tracking-[0.08em] text-white/25 md:text-[11px]">
          69 projects · 4.9★ · $200K+ delivered · Top Rated Plus on Upwork
        </p>

        <div className="mt-10 flex min-w-0 flex-col gap-6 border-t border-white/[0.06] pt-8 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p className="shrink-0">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <nav
            className="grid min-w-0 max-w-full grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
            aria-label="Footer navigation"
          >
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
