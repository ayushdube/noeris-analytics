export type FounderId = "ankita" | "ayush";

export interface Founder {
  id: FounderId;
  name: string;
  principalTitle: string;
  contactFocus: string[];
}

export const heroCredibility =
  "Built by consultants who have delivered enterprise analytics solutions across North America, Europe, and APAC.";

export const bookingLabel = "Book a strategy session with a principal consultant";

export const credibilityStrip = [
  "Microsoft Certified",
  "Expert-Vetted Consultant",
  "Global Delivery Experience",
  "Enterprise Analytics",
  "Cloud Data Platforms",
];

export const founders: Record<FounderId, Founder> = {
  ankita: {
    id: "ankita",
    name: "Ankita Jaiswal",
    principalTitle: "Principal Analytics Consultant",
    contactFocus: [
      "Business Intelligence",
      "Executive Reporting",
      "Microsoft Fabric",
      "Power BI",
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
};

export const whoYouWorkWith = {
  title: "Who you'll work with",
  copy: "Every Noeris engagement is led by a principal consultant. From discovery and architecture to implementation and executive handover, you'll work directly with the experts responsible for your solution - not a separate sales team.",
};

export const contactCopy = {
  headline: "Work directly with the consultants who architect and deliver every engagement.",
  bookingHeading: "Book a strategy session",
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
  tagline: "Modern Business Intelligence & Data Platform Consultants",
};

export function getFounder(id: FounderId): Founder {
  return founders[id];
}

export function getServiceLead(serviceSlug: string): FounderId | undefined {
  return serviceLeads[serviceSlug];
}
