import { siteConfig } from "@/lib/site-config";
import { founders } from "@/modules/content/founders-content";

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
  founder: Object.values(founders).map((founder) => {
    const profiles = [founder.linkedinUrl, founder.upworkUrl].filter(Boolean);
    return {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.principalTitle,
      ...(profiles.length > 0 ? { sameAs: profiles } : {}),
    };
  }),
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
    "Managed Power BI Services",
    "Enterprise Automation",
    "Insurance Analytics",
    "Portfolio Intelligence",
  ],
};
