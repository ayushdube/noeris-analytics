import { siteConfig } from "@/lib/site-config";

export function serviceJsonLd(service: { title: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/noeris-logo.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  foundingDate: "2024",
  areaServed: "Worldwide",
  sameAs: ["https://www.upwork.com/freelancers/ankitajaiswal"],
  serviceType: [
    "Business Intelligence Consulting",
    "Data Engineering",
    "Analytics Modernization",
    "Power BI Consulting",
    "TIBCO Spotfire Consulting",
    "Agentic AI Consulting",
    "AI Analytics Consulting",
    "Conversational Analytics",
    "Managed Analytics",
  ],
};
