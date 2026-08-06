export const pageSideLabels: Record<string, string> = {
  "/services": "SERVICES",
  "/services/business-intelligence": "BUSINESS INTELLIGENCE",
  "/services/data-engineering": "DATA ENGINEERING",
  "/services/analytics-modernization": "ANALYTICS MODERNIZATION",
  "/services/ai-powered-analytics": "AI-POWERED ANALYTICS",
  "/services/agentic-ai-autonomous-analytics": "AGENTIC AI",
  "/industries": "INDUSTRIES",
  "/industries/oil-gas": "OIL & GAS",
  "/industries/manufacturing": "MANUFACTURING",
  "/industries/shopify-ecommerce": "ECOMMERCE",
  "/industries/saas": "SAAS",
  "/industries/healthcare": "HEALTHCARE",
  "/industries/financial-services": "FINANCIAL SERVICES",
  "/industries/logistics": "LOGISTICS",
  "/industries/private-equity": "PRIVATE EQUITY",
  "/case-studies": "CASE STUDIES",
};

export function getPageSideLabel(pathname: string): string | undefined {
  return pageSideLabels[pathname];
}
