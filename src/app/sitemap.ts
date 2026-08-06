import type { MetadataRoute } from "next";

import {
  caseStudies,
  industries,
  services,
} from "@/modules/content/site-content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...caseStudyPages];
}
