import {
  caseStudies,
  industries,
} from "@/modules/content/site-content";

// AI-powered Analytics and Agentic AI stay live (and linked from the AI practice
// on /services); the menu lists one AI entry so buyers are not asked to choose
// between three overlapping AI pages.
const serviceNav = [
  { href: "/services/data-engineering", label: "Data Engineering" },
  { href: "/services/business-intelligence", label: "Business Intelligence" },
  { href: "/services/ai-analytics-agents", label: "AI Analytics & Automation" },
  { href: "/services/managed-analytics", label: "Managed Analytics" },
  { href: "/services/analytics-modernization", label: "Analytics Modernization" },
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
  { href: "/examples", label: "Examples" },
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
