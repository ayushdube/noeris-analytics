export const siteStats = {
  projectsDelivered: 69,
  clientRating: "4.9",
  reviewCount: "40+",
  regions: ["North America", "Europe", "APAC"],
} as const;

export const heroProofStats = [
  `${siteStats.projectsDelivered} projects delivered`,
  `${siteStats.clientRating}★ across ${siteStats.reviewCount} verified reviews`,
  ...siteStats.regions,
] as const;

export const footerStatLine = [
  `${siteStats.projectsDelivered} projects`,
  `${siteStats.clientRating}★ across ${siteStats.reviewCount} reviews`,
  "Microsoft-Certified",
  "Top Rated Plus on Upwork",
].join(" · ");
