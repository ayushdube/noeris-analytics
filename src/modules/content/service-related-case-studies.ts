export interface ServiceRelatedCaseStudy {
  industry: string;
  title: string;
  outcome: string;
  href: string;
}

export interface ServiceEarlyAccessCallout {
  label: string;
  text: string;
}

export const serviceRelatedCaseStudies: Record<string, ServiceRelatedCaseStudy[]> = {
  "business-intelligence": [
    {
      industry: "Oil & Gas · Integrated energy major",
      title: "Production & Environmental Compliance Analytics",
      outcome:
        "Unified production reporting across 12 fields - Air Monitoring System deployed for HSE compliance",
      href: "/case-studies/oil-gas-production-compliance",
    },
    {
      industry: "Financial Services · Wealth management",
      title: "Risk Intelligence & Client Portfolio Dashboard",
      outcome:
        "Single-pane risk view across client portfolios for a multi-family office",
      href: "/case-studies/financial-services-risk-intelligence",
    },
    {
      industry: "Logistics",
      title: "Supply Chain Operations Dashboard",
      outcome: "End-to-end shipment visibility replacing manual Excel reporting",
      href: "/case-studies/supply-chain-operations-dashboard",
    },
  ],
  "data-engineering": [
    {
      industry: "Oil & Gas · E&P operator",
      title: "Upstream Operations & VOC Monitoring Platform",
      outcome:
        "SAP HANA + Spotfire pipeline for real-time production allocation and emissions tracking",
      href: "/case-studies/oil-gas-upstream-voc",
    },
    {
      industry: "SaaS",
      title: "Customer-Facing Analytics & API Integration Platform",
      outcome:
        "Embedded analytics platform with live API data feeds and white-label dashboards",
      href: "/case-studies/saas-customer-analytics-api",
    },
    {
      industry: "Oil & Gas · Integrated energy major",
      title: "Air Monitoring System - Data Pipeline Build",
      outcome: "Automated sensor data ingestion replacing manual environmental data collection",
      href: "/case-studies/oil-gas-production-compliance",
    },
  ],
  "analytics-modernization": [
    {
      industry: "Analytics Modernisation",
      title: "Spotfire to Power BI Platform Migration",
      outcome: "Full BI platform migration with zero disruption to live reporting operations",
      href: "/case-studies/spotfire-powerbi-migration",
    },
    {
      industry: "Life Sciences · Global CRO",
      title: "Clinical Trial Operations Analytics Suite",
      outcome: "SAS to Power BI migration across 5 report types for a global CRO",
      href: "/case-studies/life-sciences-clinical-trial-analytics",
    },
    {
      industry: "Healthcare · Global medtech",
      title: "Equipment Services Financial & Operational Analytics",
      outcome:
        "Spotfire modernisation with parallel data loading - deployed across GE Healthcare service operations",
      href: "/case-studies/healthcare-equipment-services-analytics",
    },
  ],
  "ai-powered-analytics": [
    {
      industry: "SaaS",
      title: "Customer-Facing Analytics & API Integration Platform",
      outcome:
        "Intelligent analytics layer with live data API feeds powering client-facing dashboards",
      href: "/case-studies/saas-customer-analytics-api",
    },
    {
      industry: "Oil & Gas · E&P operator",
      title: "VOC Monitoring & Automated Alerts",
      outcome: "Automated anomaly detection for emissions data across Guyana deepwater operations",
      href: "/case-studies/oil-gas-upstream-voc",
    },
  ],
  "agentic-ai-autonomous-analytics": [
    {
      industry: "SaaS",
      title: "Customer-Facing Analytics & API Integration Platform",
      outcome:
        "Automated data pipeline with live API feeds powering client-facing intelligence layers",
      href: "/case-studies/saas-customer-analytics-api",
    },
    {
      industry: "Oil & Gas · E&P operator",
      title: "VOC Monitoring & Automated Alerting",
      outcome:
        "Automated anomaly detection across emissions sensors - alerts triggered without manual analyst intervention",
      href: "/case-studies/oil-gas-upstream-voc",
    },
  ],
};

export const serviceEarlyAccessCallouts: Record<string, ServiceEarlyAccessCallout> = {
  "agentic-ai-autonomous-analytics": {
    label: "Early access",
    text: "Agentic analytics is an emerging capability. We are selectively taking on pilot engagements with enterprises ready to move from dashboards to autonomous reporting. Book a call to discuss.",
  },
};

export function getServiceRelatedCaseStudies(slug: string) {
  return serviceRelatedCaseStudies[slug] ?? [];
}

export function getServiceEarlyAccessCallout(slug: string) {
  return serviceEarlyAccessCallouts[slug];
}
