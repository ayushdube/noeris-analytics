import { industries } from "@/modules/content/site-content";

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
  {
    href: "/industries",
    label: "Industries",
    children: industries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.title,
    })),
  },
  {
    href: "/examples",
    label: "Work",
    children: [
      { href: "/examples", label: "Worked examples, with live dashboards" },
      { href: "/case-studies", label: "Client case studies" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function isNavItemActive(pathname: string, href: string) {
  const under = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const matches = navItems.filter(
    (item) => under(item.href) || (item.children ?? []).some((child) => under(child.href)),
  );
  const best = matches.reduce<NavItem | undefined>((winner, item) => {
    if (!winner || item.href.length > winner.href.length) return item;
    return winner;
  }, undefined);

  return best?.href === href;
}
