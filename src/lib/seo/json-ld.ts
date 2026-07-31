import { siteConfig } from "@/lib/site-config";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  areaServed: "Worldwide",
  serviceType: [
    "Business Intelligence Consulting",
    "Data Engineering",
    "Analytics Modernization",
    "Power BI Consulting",
    "Microsoft Fabric Consulting",
  ],
};
