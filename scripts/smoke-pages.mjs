const base = process.env.SMOKE_BASE_URL ?? "http://localhost:3000";

const paths = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/business-intelligence",
  "/services/data-engineering",
  "/services/analytics-modernization",
  "/services/ai-powered-analytics",
  "/services/agentic-ai-autonomous-analytics",
  "/industries",
  "/industries/oil-gas",
  "/industries/healthcare",
  "/industries/financial-services",
  "/case-studies",
  "/case-studies/oil-gas-production-compliance",
  "/case-studies/oil-gas-upstream-voc",
  "/case-studies/life-sciences-clinical-trial-analytics",
  "/case-studies/financial-services-risk-intelligence",
  "/case-studies/healthcare-equipment-services-analytics",
  "/case-studies/supply-chain-operations-dashboard",
  "/case-studies/saas-customer-analytics-api",
  "/case-studies/hr-survey-workforce-analytics",
  "/case-studies/spotfire-powerbi-migration",
  "/resources",
  "/resources/blog",
  "/resources/whitepapers",
  "/resources/architecture-guides",
  "/resources/bi-maturity-assessment",
  "/resources/dashboard-examples",
];

const failures = [];

for (const path of paths) {
  try {
    const res = await fetch(`${base}${path}`);
    const html = await res.text();
    const hasCss = html.includes("layout.css");
    const hasRuntimeError =
      html.includes("Runtime TypeError") ||
      html.includes("Application error") ||
      html.includes("Cannot read properties");

    if (!res.ok || !hasCss || hasRuntimeError) {
      failures.push({ path, status: res.status, hasCss, hasRuntimeError });
    }
  } catch (error) {
    failures.push({ path, error: error.message });
  }
}

if (failures.length > 0) {
  console.error(`Smoke test failed (${failures.length}/${paths.length}):`);
  for (const failure of failures) {
    console.error(failure);
  }
  process.exit(1);
}

console.log(`Smoke test passed: ${paths.length} pages OK at ${base}`);
