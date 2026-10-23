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
  "ai-analytics-agents": "ayush",
  "managed-analytics": "ankita",
};

export const whoYouWorkWith = {
  title: "Who you'll work with",
  copy: "Every Noeris engagement is led by a Principal Consultant. From discovery and architecture to implementation and executive handover, you'll work directly with the experts responsible for your solution - not a separate sales team.",
};

export const contactCopy = {
  headline: "Work directly with the consultants who architect and deliver every engagement.",
  bookingHeading: "Scheduling",
  schedulingIntro:
    "Email hello@noeris.io. Tell us the decision you need to make and we will reply to arrange a time.",
  messageHeading: "Send a message",
};

export const processPhases = [
  {
    phase: "Discover",
    detail:
      "Map the decisions, the systems that hold the data, and where numbers disagree. A principal consultant leads this with the people who own the outcome.",
  },
  {
    phase: "Design",
    detail:
      "Specify the data model, the reporting workflow, and—where AI is in scope—the controls: approved datasets, permissions, and what a person must review.",
  },
  {
    phase: "Build",
    detail:
      "Implement pipelines, semantic models, dashboards, or analytical workflows in releases your team can review.",
  },
  {
    phase: "Validate",
    detail:
      "Check calculations, reconciliations, and access against agreed tests. An AI explanation is usable when the figure comes from the underlying data.",
  },
  {
    phase: "Operate",
    detail:
      "Hand over documentation and, where you want it, stay for monitoring, report operations, and a queue of improvements.",
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
