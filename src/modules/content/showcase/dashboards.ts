/**
 * Live Power BI reports for the examples, published with Power BI "Publish to web".
 * These are public links: only synthetic or public sample data may sit behind them.
 * The reports are generated in noeris-client-showcase (powerbi/) and published from
 * the Power BI service; re-publishing a report keeps its link.
 */
export interface ShowcaseDashboard {
  /** Publish-to-web URL (https://app.powerbi.com/view?r=...) */
  url: string;
  /** Report name in Power BI */
  title: string;
  /** Report tabs, in order */
  pages: string[];
}

const dashboards: Record<string, ShowcaseDashboard> = {
  "shopify-weekly-review": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiZWJjODcxYmMtZWY0NC00YzVmLTg5MjAtYTEyZmQ4MWY1NTZmIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Weekly Trading Dashboard",
    pages: ["Weekly review", "Returns and stock", "Customers", "Paid media"],
  },
  "pe-portfolio-pack": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiMzgyMDFkN2ItYzA3Yy00ZjEzLTlkZmItYzA5YjQ5MzQ3ZjA3IiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Portfolio KPI Dashboard",
    pages: ["Portfolio overview", "Company trends", "Data quality", "Working capital", "Growth and margins"],
  },
  "month-end-cfo-pack": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiYWZlMTQ2NWYtZTEwNC00MGQ1LTkzN2EtNjY4NjEyZjFlNTkxIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Month-End Management Dashboard",
    pages: ["Budget vs actual", "Revenue and margin", "Month vs YTD"],
  },
  "plant-scorecard": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiYmMxNGQxYTUtYjE4Zi00MjljLWIxM2QtNTZlMzUxYWUxM2UwIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Plant Performance Dashboard",
    pages: ["Scorecard", "Losses", "Delivery", "Operator voice", "Scrap and quality", "Shift comparison"],
  },
  "saas-revenue-retention": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiMDQxNjIxZTktOGE3MS00MTcyLWI4M2ItY2ExNzcyMDY4MjEyIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Revenue & Retention Dashboard",
    pages: ["ARR and retention", "Exceptions and renewals", "MRR movements", "Segments"],
  },
  "freight-invoice-audit": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDE3MTFkOWMtYmZhYy00NTI1LWFhMTItODkwNzliODY1OTkyIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Freight Audit & Control Tower",
    pages: ["Audit summary", "Control tower", "Fuel and accessorials", "Lane cost"],
  },
  "insurance-submission-intake": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiNmZiNjYzY2YtZjRjNi00MWYzLWE5YmMtZTc4Y2YyNmVkNjlkIiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Book of Business Dashboard",
    pages: ["Loss ratio", "Retention and claims", "Premium", "Producers and claims"],
  },
  "retail-analytics-at-scale": {
    url: "https://app.powerbi.com/view?r=eyJrIjoiNzJmNzA2ZTUtMjk0Ny00YWJkLTllZmYtMWEwNGUxMWI0YTQ0IiwidCI6IjE4NDJlNjJlLWRmNDQtNDAzZi1hMzAzLWRjMWMwNjZlYmY1ZCJ9",
    title: "Retail Performance Dashboard",
    pages: ["Executive overview", "Sales trend", "Products", "Brands", "Customers", "Geography", "Stores and channel", "Customer cohorts"],
  },
};

/** Live Power BI report for an example, if one is published. */
export function getDashboard(exampleSlug: string) {
  return dashboards[exampleSlug];
}
