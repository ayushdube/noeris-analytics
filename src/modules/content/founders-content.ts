import { siteStats } from "@/lib/site-stats";

export type FounderId = "ankita" | "ayush";

export interface Founder {
  id: FounderId;
  name: string;
  principalTitle: string;
  contactFocus: string[];
}

const regionCopy = `${siteStats.regions.slice(0, -1).join(", ")}, and ${siteStats.regions[siteStats.regions.length - 1]}`;

export const heroCredibility =
  `Built by consultants who have delivered enterprise analytics solutions across ${regionCopy}.`;

export const credibilityStrip = [
  "Microsoft-Certified",
  "Expert-Vetted (Top Rated Plus, Upwork)",
  `Delivered across ${siteStats.regions.length} continents`,
  "Principal-led on every engagement",
];

export const founders: Record<FounderId, Founder> = {
  ankita: {
    id: "ankita",
    name: "Ankita Jaiswal",
    principalTitle: "Principal Analytics Consultant",
    contactFocus: [
      "Business Intelligence",
      "Executive Reporting",
      "Power BI",
      "TIBCO Spotfire",
    ],
  },
  ayush: {
    id: "ayush",
    name: "Ayush Dubey",
    principalTitle: "Principal Data Platform & AI Consultant",
    contactFocus: [
      "Cloud Architecture",
      "Data Engineering",
      "Modern Analytics Platforms",
      "AI",
    ],
  },
};

export const serviceLeads: Record<string, FounderId> = {
  "business-intelligence": "ankita",
  "data-engineering": "ayush",
  "analytics-modernization": "ankita",
  "ai-powered-analytics": "ayush",
  "agentic-ai-autonomous-analytics": "ayush",
};

export const whoYouWorkWith = {
  title: "Who you'll work with",
  copy: "Every Noeris engagement is led by a Principal Consultant. From discovery and architecture to implementation and executive handover, you'll work directly with the experts responsible for your solution - not a separate sales team.",
};

export const contactCopy = {
  headline: "Work directly with the consultants who architect and deliver every engagement.",
  bookingHeading: "Scheduling",
  schedulingIntro: "Book a 45-minute discovery call directly:",
  messageHeading: "Send a message",
};

export const processPhases = [
  {
    phase: "Principal-led Discovery",
    detail:
      "Map decision workflows, data sources, and KPI gaps with leadership before touching architecture.",
  },
  {
    phase: "Principal-led Solution Architecture",
    detail:
      "Design the platform, semantic model, and integration patterns against security and compliance requirements.",
  },
  {
    phase: "Build",
    detail:
      "Deliver pipelines, certified datasets, and dashboards in phased releases with parallel-run validation.",
  },
  {
    phase: "Adopt",
    detail: "Train business teams, assign KPI ownership, and establish refresh monitoring.",
  },
  {
    phase: "Founder-led Executive Handover",
    detail:
      "Transition to managed operations with executive sign-off, documentation, and ongoing optimization ownership.",
  },
];

export const footerFounders = {
  label: "Founded by",
  tagline: "Principal Consultants, Noeris Analytics",
};

export function getFounder(id: FounderId): Founder {
  return founders[id];
}

export function getServiceLead(serviceSlug: string): FounderId | undefined {
  return serviceLeads[serviceSlug];
}
