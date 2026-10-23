export type TeamGroup = "founder" | "specialist";

export interface TeamProfile {
  id: string;
  name: string;
  title: string;
  /** Short line for homepage and navigation-adjacent surfaces. */
  summary: string;
  /** Public biography. Keep free of private contact details. */
  bio: string;
  group: TeamGroup;
}

export const teamProfiles: TeamProfile[] = [
  {
    id: "ankita",
    name: "Ankita Jaiswal",
    title: "Principal Consultant, Analytics Delivery",
    summary:
      "Leads analytics delivery across executive reporting, Power BI, and Spotfire, with the business definition of each metric kept in front of the build.",
    bio: "8 years delivering Power BI and Spotfire solutions across oil & gas, life sciences, financial services, and eCommerce. Microsoft Certified Data Analyst. Previously at Syneos Health, Accenture, and TCS - delivering for clients including Chevron and Hess.",
    group: "founder",
  },
  {
    id: "ayush",
    name: "Ayush Dubey",
    title: "Principal Consultant, Architecture & Engineering",
    summary:
      "Leads data platform and AI engineering: cloud architecture, pipelines, and the controls required to run an analytical workflow.",
    bio: "Specialises in data engineering, agentic AI systems, and modern analytics architecture. Leads infrastructure, pipeline design, and DevOps for Noeris engagements.",
    group: "founder",
  },
  {
    id: "shiva",
    name: "Shiva Prakash",
    title: "AI & Analytics Specialist",
    summary:
      "Focuses on enterprise analytics and AI-assisted reporting: semantic models, financial analysis, and workflows that explain a variance from governed data.",
    bio: "Shiva brings 9+ years of experience in enterprise analytics, financial reporting, and data architecture. His work spans Power BI, modern data platforms, Python-based analytics, and AI-powered reporting workflows. He focuses on turning complex business data into reliable reporting systems, automated analysis, and actionable insight.",
    group: "specialist",
  },
];

export function getTeamProfiles(group?: TeamGroup) {
  if (!group) return teamProfiles;
  return teamProfiles.filter((profile) => profile.group === group);
}
