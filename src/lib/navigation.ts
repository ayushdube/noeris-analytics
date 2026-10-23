import {
  caseStudies,
  industries,
} from "@/modules/content/site-content";

const serviceNav = [
  { href: "/services/ai-analytics-agents", label: "AI Analytics & Agents" },
  { href: "/services/data-engineering", label: "Data Engineering" },
  { href: "/services/business-intelligence", label: "Business Intelligence" },
  { href: "/services/analytics-modernization", label: "Analytics Modernization" },
  { href: "/services/managed-analytics", label: "Managed Analytics" },
  { href: "/services/ai-powered-analytics", label: "AI-powered Analytics" },
  { href: "/services/agentic-ai-autonomous-analytics", label: "Agentic AI" },
] as const;

export interface NavChild {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
  columns?: 1 | 2;
}

export const navItems: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [...serviceNav],
  },
  { href: "/services/ai-analytics-agents", label: "AI Analytics" },
  {
    href: "/industries",
    label: "Industries",
    children: industries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.title,
    })),
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    columns: 2,
    children: caseStudies.map((study) => ({
      href: `/case-studies/${study.slug}`,
      label: study.title,
    })),
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function isNavItemActive(pathname: string, href: string) {
  const matches = navItems.filter(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
  const best = matches.reduce<NavItem | undefined>((winner, item) => {
    if (!winner || item.href.length > winner.href.length) return item;
    return winner;
  }, undefined);

  return best?.href === href;
}
