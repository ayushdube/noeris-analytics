import {
  caseStudies,
  industries,
  services,
} from "@/modules/content/site-content";

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
    children: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
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
