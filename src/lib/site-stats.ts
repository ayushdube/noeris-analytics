export const siteStats = {
  regions: ["North America", "Europe", "APAC"],
} as const;

/**
 * Proof points shown in place of project counts and star ratings.
 * Each one must be verifiable: a credential, an industry with delivered
 * case studies, or a region where work was delivered.
 */
export const heroProofStats = [
  "Microsoft-Certified",
  "Oil & gas · Life sciences · Financial services",
  ...siteStats.regions,
] as const;
