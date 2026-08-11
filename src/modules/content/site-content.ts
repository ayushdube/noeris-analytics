export const technologies = [
  "Power BI",
  "TIBCO Spotfire",
  "Snowflake",
  "Databricks",
  "Azure",
  "AWS",
  "SQL Server",
  "PostgreSQL",
  "BigQuery",
  "Shopify",
  "HubSpot",
  "Salesforce",
  "NetSuite",
  "Dynamics 365",
  "SAP",
  "Python",
  "dbt",
];

export const problems = [
  {
    title: "Fragmented data across systems",
    description:
      "Sales, finance, operations, and marketing each maintain separate sources of truth. Leadership spends more time reconciling numbers than acting on them.",
  },
  {
    title: "Reports that arrive too late",
    description:
      "Monthly close cycles and manual spreadsheet workflows delay visibility. By the time insights surface, the decision window has closed.",
  },
  {
    title: "Dashboards without decision context",
    description:
      "Teams inherit BI tools filled with charts but no clear KPI hierarchy, ownership model, or path from metric to action.",
  },
  {
    title: "Legacy analytics holding back growth",
    description:
      "On-prem warehouses, outdated BI platforms, and brittle ETL pipelines cannot scale with transaction volume or executive expectations.",
  },
];

export const outcomes = [
  { metric: "40%", label: "Faster executive reporting cycles" },
  { metric: "3x", label: "Increase in self-service adoption" },
  { metric: "60%", label: "Reduction in manual reconciliation" },
  { metric: "24h", label: "Data freshness for critical KPIs" },
];

export const services = [
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    summary:
      "Executive and operational dashboards aligned to how your business actually makes decisions.",
    whatsIncluded: [
      "Custom dashboard design & development",
      "KPI framework alignment",
      "Executive & operational reporting layers",
    ],
    audienceTag: "Ops, Finance & Executive teams",
    deliverables: [
      "Executive dashboards",
      "Operational dashboards",
      "KPI strategy",
      "Self-service reporting",
    ],
    challenges: [
      "Inconsistent KPI definitions across departments",
      "Leadership lacks a single view of performance",
      "Analyst teams buried in ad-hoc report requests",
    ],
    outcomes: [
      "Unified KPI framework owned by business stakeholders",
      "Executive-ready dashboards refreshed on schedule",
      "Self-service layer that reduces analyst backlog",
    ],
    timeline: "8–14 weeks",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    summary:
      "Reliable pipelines and modern warehouses that make analytics trustworthy at scale.",
    whatsIncluded: [
      "Source system integration & pipeline build",
      "Data warehouse / lakehouse architecture",
      "Data quality monitoring & alerting",
    ],
    audienceTag: "Data & Engineering teams",
    deliverables: [
      "ETL pipelines",
      "Data warehouses",
      "Snowflake / Databricks",
      "Snowflake",
      "Databricks",
    ],
    challenges: [
      "Siloed source systems with no reliable integration layer",
      "Batch jobs that fail silently or deliver stale data",
      "No governed path from raw data to certified metrics",
    ],
    outcomes: [
      "Documented, monitored ingestion from critical systems",
      "Warehouse architecture designed for analytics workloads",
      "Certified datasets ready for BI and AI consumption",
    ],
    timeline: "10–16 weeks",
  },
  {
    slug: "analytics-modernization",
    title: "Analytics Modernization",
    summary:
      "Migrate legacy BI and reporting stacks without disrupting business operations.",
    whatsIncluded: [
      "Legacy BI stack audit & migration roadmap",
      "Parallel run & cutover strategy",
      "Platform consolidation (Power BI, Spotfire, or cloud-native)",
    ],
    audienceTag: "Teams migrating from Excel, Crystal Reports, or legacy BI tools",
    deliverables: [
      "Tableau migration",
      "Qlik migration",
      "Legacy BI modernization",
      "Reporting optimization",
    ],
    challenges: [
      "Expensive legacy licenses with declining user satisfaction",
      "Report sprawl with no lineage or ownership",
      "Migration risk perceived as too high to start",
    ],
    outcomes: [
      "Phased migration plan with parallel-run validation",
      "Consolidated report catalog with clear owners",
      "Lower total cost and faster time-to-insight",
    ],
    timeline: "12–20 weeks",
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-powered Analytics",
    summary:
      "Natural language access and intelligent summaries built on trusted data foundations.",
    whatsIncluded: [
      "Natural language query layer over your data",
      "Intelligent anomaly detection & alerts",
      "Automated narrative summaries for exec reporting",
    ],
    audienceTag: "Teams with clean data wanting AI narrative layers",
    deliverables: [
      "Executive summaries",
      "Forecasting",
      "Natural language querying",
      "Intelligent reporting assistants",
    ],
    challenges: [
      "AI initiatives launched on ungoverned data",
      "Executives want answers, not another tool to learn",
      "Forecasting models disconnected from operational reality",
    ],
    outcomes: [
      "AI layer grounded in certified metrics and lineage",
      "Automated narrative summaries for leadership reviews",
      "Forecasting workflows integrated into planning cycles",
    ],
    timeline: "6–12 weeks",
  },
  {
    slug: "agentic-ai-autonomous-analytics",
    title: "Agentic AI & Autonomous Analytics",
    summary:
      "AI agents that query your data, surface anomalies, and deliver narrative summaries - without manual reporting workflows.",
    whatsIncluded: [
      "End-to-end agentic pipeline architecture",
      "Autonomous data monitoring agents",
      "LLM integration with production-grade guardrails",
    ],
    audienceTag: "Enterprises automating reporting & monitoring workflows",
    deliverables: [
      "Agentic monitoring pipelines",
      "Autonomous anomaly agents",
      "LLM guardrails & evaluation",
      "Executive narrative automation",
    ],
    challenges: [
      "Reporting workflows still depend on manual analyst intervention",
      "AI pilots lack production monitoring and guardrails",
      "Anomaly detection disconnected from business context",
    ],
    outcomes: [
      "Autonomous agents monitoring critical metrics around the clock",
      "Narrative summaries delivered without manual report assembly",
      "Production-grade LLM integration with audit trails",
    ],
    timeline: "8–16 weeks",
  },
];

export interface IndustryExtensions {
  socialProof: {
    quote: string;
    attribution: string;
  };
  dataSources: string[];
  howItWorks: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  cta: {
    primary: string;
    secondary: string;
    secondaryHref: string;
    secondaryVariant?: "secondary" | "ghost";
  };
  complianceCallout?: string;
  heroKpiChips?: string[];
  dashboardPreview?: {
    metrics: Array<{ label: string; value: string }>;
    chartType?: "bar" | "line";
  };
}

export interface Industry {
  slug: string;
  title: string;
  summary: string;
  heroDescription?: string;
  challenges: string[];
  kpis: string[];
  outcomes: string[];
  extensions?: IndustryExtensions;
}

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    summary:
      "Upstream, midstream, and downstream analytics for operators and energy companies.",
    heroDescription:
      "Production, operations, and commercial analytics for upstream, midstream, and downstream.",
    challenges: [
      "Production data locked in historians and SCADA systems - preventing integration with commercial and financial reporting",
      "Lifting cost and production efficiency calculated manually from disparate field and ERP data - introducing 24-48 hour reporting lag",
      "HSE and regulatory reporting assembled under deadline pressure - with no single auditable data trail across assets",
    ],
    kpis: [
      "Production allocation",
      "Production efficiency",
      "Lifting cost per BOE",
      "Well downtime hours",
      "HSE incident rate",
      "Revenue per BOE",
    ],
    outcomes: [
      "Real-time production dashboards by well, pad, and asset",
      "Lifting cost visibility tied to field operations and procurement",
      "Automated HSE and regulatory reporting with full audit trail",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "VP Operations, Upstream E&P Operator",
      },
      dataSources: [
        "OSIsoft PI / AVEVA",
        "AspenTech",
        "SAP PM",
        "Quorum",
        "SCADA / PHDM",
        "Your data warehouse",
      ],
      complianceCallout:
        "All pipelines are built with HSE audit trails, role-based access controls, and regulatory reporting templates - designed to meet FERC, EPA, and internal compliance requirements from day one.",
      heroKpiChips: [
        "Production efficiency",
        "Lifting cost per BOE",
        "Downtime hours",
      ],
      dashboardPreview: {
        chartType: "bar",
        metrics: [
          { label: "Production efficiency", value: "↑ 8%" },
          { label: "Lifting cost / BOE", value: "$14.20" },
          { label: "Well downtime hrs", value: "2.4" },
        ],
      },
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description:
            "Integrate PI historian, SCADA, ERP, and commercial and trading data into a unified operational data platform",
        },
        {
          step: "02",
          title: "Model",
          description:
            "Build production allocation, lifting cost, and HSE models with automated reconciliation checks across measured, allocated, and sales volumes",
        },
        {
          step: "03",
          title: "Deploy",
          description:
            "Go live with initial asset-level dashboards and regulatory reporting packs in 4-6 weeks, expandable by field and business unit",
        },
      ],
      cta: {
        primary: "Request an oil & gas analytics demo",
        secondary: "Get a free asset data assessment",
        secondaryHref: "/contact?topic=asset-data-assessment",
        secondaryVariant: "ghost",
      },
    },
  },
  {
    slug: "shopify-ecommerce",
    title: "Shopify & eCommerce",
    summary: "Unify storefront, marketing, and fulfillment data into one performance view.",
    challenges: [
      "Shopify, ad platforms, and 3PL data in separate silos - forcing analysts to spend 60–70% of their time on data consolidation, not insight",
      "Margin visibility delayed until month-end - leaving 3–4 weeks where ad spend decisions are made without contribution margin data",
      "Inventory and demand signals not connected - causing either stockouts or 30–60 days of excess inventory carrying cost",
    ],
    kpis: ["Revenue & margin by channel", "CAC & LTV", "Inventory turns", "Fulfillment SLA"],
    outcomes: [
      "Daily P&L visibility by product and channel",
      "Marketing spend tied to contribution margin",
      "Inventory planning informed by sell-through trends",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "Head of eCommerce, DTC Brand",
      },
      dataSources: [
        "Shopify",
        "Meta Ads",
        "Google Ads",
        "Klaviyo",
        "Amazon Seller Central",
        "ShipBob / 3PL",
        "Snowflake / Databricks",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Unify Shopify, ad platforms, and 3PL into a unified analytics lakehouse",
        },
        {
          step: "02",
          title: "Model",
          description: "Build contribution margin and LTV models with daily refresh",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with channel-level P&L dashboards in 4–6 weeks",
        },
      ],
      cta: {
        primary: "Request an eCommerce demo",
        secondary: "Get a free margin visibility audit",
        secondaryHref: "/contact?topic=margin-visibility-audit",
      },
    },
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Connect ERP, production, and quality data for operational intelligence.",
    challenges: [
      "OEE and throughput metrics calculated manually - introducing 6–12 hours of decision lag per shift",
      "Quality issues detected after shipment - scrap and rework costs averaging 2–5% of production value",
      "Production planning disconnected from demand signals - forecast accuracy gaps of 15–25% vs. actual demand",
    ],
    kpis: ["OEE", "Scrap rate", "On-time delivery", "Capacity utilization"],
    outcomes: [
      "Real-time production dashboards by line and plant",
      "Quality trend analysis linked to root causes",
      "Demand-driven production planning visibility",
    ],
    extensions: {
      socialProof: {
        quote:
          "She consistently goes above and beyond to deliver outstanding results on any project, regardless of its complexity.",
        attribution: "Analytics Lead, Enterprise Client",
      },
      dataSources: [
        "SAP",
        "OSIsoft PI",
        "Rockwell Automation",
        "Azure Data Factory",
        "Honeywell",
        "MES / SCADA",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Link ERP, MES, and SCADA to a unified analytics lakehouse",
        },
        {
          step: "02",
          title: "Model",
          description: "Build semantic models with automated data quality checks",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with role-specific dashboards in 4–6 weeks",
        },
      ],
      cta: {
        primary: "Request a manufacturing demo",
        secondary: "Get a free OEE readiness assessment",
        secondaryHref: "/contact?topic=oee-readiness",
      },
    },
  },
  {
    slug: "saas",
    title: "SaaS",
    summary: "Build the metrics layer investors and operators both trust.",
    challenges: [
      "Product, billing, and CRM data misaligned on ARR - causing ARR discrepancies of 5–15% that surface only during board or audit prep",
      "Cohort analysis requires manual exports - delaying retention insight by 2–3 weeks and making it a one-time exercise rather than a live signal",
      "Board reporting assembled under deadline pressure - with founders spending 8–12 hours per board cycle reconciling numbers across systems",
    ],
    kpis: ["ARR & NRR", "Logo churn", "CAC payback", "Expansion revenue"],
    outcomes: [
      "Single source of truth for SaaS metrics",
      "Automated board and investor reporting packs",
      "Self-service cohort and funnel analysis",
    ],
    extensions: {
      socialProof: {
        quote:
          "She has exceptional PowerBI skills and delivered a high-quality solution tailored to our needs - her proactive approach made a real impact to our customers.",
        attribution: "Head of Product, B2B SaaS Platform",
      },
      dataSources: [
        "Stripe",
        "HubSpot",
        "Salesforce",
        "ChartMogul",
        "Mixpanel / Amplitude",
        "Snowflake / Databricks",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Unify billing, CRM, and product data into a unified analytics lakehouse",
        },
        {
          step: "02",
          title: "Model",
          description: "Build ARR waterfall, cohort, and funnel models with automated reconciliation",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with investor-ready dashboards and board packs in 4–6 weeks",
        },
      ],
      cta: {
        primary: "Request a SaaS metrics demo",
        secondary: "Get a free ARR reconciliation audit",
        secondaryHref: "/contact?topic=arr-reconciliation",
        secondaryVariant: "ghost",
      },
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Operational and financial analytics with governance built in.",
    challenges: [
      "Claims, scheduling, and clinical systems disconnected - forcing revenue cycle teams to reconcile across 3–5 systems manually, with denial rates averaging 5–10% of billed charges",
      "Compliance requirements slow analytics delivery - adding 4–8 weeks to every reporting project as teams navigate HIPAA data handling restrictions",
      "Leadership lacks timely operational visibility - with site-level performance reports arriving weekly at best, too late to act on staffing or throughput issues",
    ],
    kpis: ["Revenue cycle days", "Utilization rate", "Denial rate", "Patient volume"],
    outcomes: [
      "Governed analytics layer with role-based access",
      "Operational dashboards for site and service line leaders",
      "Financial performance tied to operational drivers",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "CFO, Regional Health System",
      },
      dataSources: [
        "Epic",
        "Cerner",
        "Meditech",
        "Athenahealth",
        "Waystar / Availity",
        "Your data warehouse",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Integrate EHR, RCM, and scheduling data with HIPAA-compliant access controls baked in",
        },
        {
          step: "02",
          title: "Model",
          description: "Build denial, utilization, and margin models with automated quality checks",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with role-specific operational dashboards in 4–6 weeks",
        },
      ],
      complianceCallout:
        "All pipelines and data models are architected with HIPAA-compliant access controls and audit logging from day one.",
      cta: {
        primary: "Request a healthcare analytics demo",
        secondary: "Get a free revenue cycle assessment",
        secondaryHref: "/contact?topic=revenue-cycle-assessment",
        secondaryVariant: "ghost",
      },
    },
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary: "Risk-aware analytics for portfolio and operational performance.",
    challenges: [
      "Regulatory reporting separate from management reporting - forcing teams to maintain two parallel sets of numbers, with reconciliation consuming 2–3 days before every reporting cycle",
      "Data lineage requirements slow new analytics - making every new metric a compliance project, with sign-off cycles averaging 4–6 weeks",
      "Legacy core systems resist modern integration - leaving critical data locked in mainframe or on-premise systems with no API access",
    ],
    kpis: ["NIM", "Cost-to-income", "Portfolio yield", "Operational loss rate"],
    outcomes: [
      "Certified metrics with documented lineage",
      "Management reporting aligned to regulatory definitions",
      "Faster analytics delivery within compliance guardrails",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "Head of FP&A, Mid-Market Bank",
      },
      dataSources: [
        "Temenos",
        "Finastra",
        "FIS / Fiserv",
        "Bloomberg",
        "Snowflake / Databricks",
        "Your data warehouse",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Integrate core banking, risk, and market data with full lineage tracking",
        },
        {
          step: "02",
          title: "Model",
          description: "Build certified metric definitions aligned to both regulatory and management reporting",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with governed dashboards and automated regulatory packs in 4–6 weeks",
        },
      ],
      complianceCallout:
        "All data models are built with documented lineage, role-based access controls, and audit trails - designed to satisfy internal audit and regulatory review from day one.",
      cta: {
        primary: "Request a financial services demo",
        secondary: "Get a free data lineage assessment",
        secondaryHref: "/contact?topic=data-lineage-assessment",
        secondaryVariant: "ghost",
      },
    },
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary: "End-to-end visibility across fleet, warehouse, and customer delivery.",
    challenges: [
      "TMS, WMS, and customer systems not integrated - leaving ops teams to reconcile shipment status across 3–4 systems, with discrepancies only caught at billing close",
      "On-time delivery metrics calculated after the fact - meaning performance issues are visible days after they occur, too late to recover service levels",
      "Cost per shipment opaque until billing close - making lane-level and customer-level margin invisible until it's too late to reprice or reroute",
    ],
    kpis: ["On-time delivery", "Cost per mile", "Dock-to-stock time", "Order accuracy"],
    outcomes: [
      "Unified logistics control tower dashboard",
      "Route and carrier performance benchmarking",
      "Margin analysis by lane and customer segment",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "VP Supply Chain, National 3PL Provider",
      },
      dataSources: [
        "SAP TM",
        "Oracle TMS",
        "Manhattan WMS",
        "Project44",
        "Samsara",
        "EDI / ELD feeds",
        "Your data warehouse",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Integrate TMS, WMS, and telematics data into a unified operational lakehouse",
        },
        {
          step: "02",
          title: "Model",
          description: "Build lane-level cost, on-time, and margin models with real-time refresh",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with a logistics control tower and carrier scorecards in 4–6 weeks",
        },
      ],
      cta: {
        primary: "Request a logistics analytics demo",
        secondary: "Get a free supply chain visibility assessment",
        secondaryHref: "/contact?topic=supply-chain-visibility",
        secondaryVariant: "ghost",
      },
    },
  },
  {
    slug: "private-equity",
    title: "Private Equity",
    summary: "Standardized portfolio analytics across operating companies.",
    challenges: [
      "Each portco runs different ERP and BI stacks - making cross-portfolio comparison impossible without bespoke extraction work before every QBR or LP update",
      "LP reporting requires manual consolidation - consuming 3–5 days of finance team time each quarter and introducing reconciliation risk at the worst possible moment",
      "Value creation metrics inconsistent across holdings - so operating partners cannot tell whether EBITDA improvement is from pricing, cost, or volume - until it's too late to intervene",
    ],
    kpis: ["EBITDA bridge", "Working capital days", "Revenue growth", "Synergy tracking"],
    outcomes: [
      "Standardized KPI framework across portfolio",
      "Automated consolidation for LP and IC reporting",
      "Operating partner dashboards for value creation tracking",
    ],
    extensions: {
      socialProof: {
        quote: "[CLIENT QUOTE]",
        attribution: "Operating Partner, Mid-Market PE Firm",
      },
      dataSources: [
        "SAP",
        "NetSuite",
        "Sage Intacct",
        "Salesforce",
        "Workday",
        "Your data warehouse",
      ],
      howItWorks: [
        {
          step: "01",
          title: "Connect",
          description: "Standardize financial and operational data across all portcos into a single consolidated model",
        },
        {
          step: "02",
          title: "Model",
          description: "Build EBITDA bridge, working capital, and value creation KPIs with consistent definitions across holdings",
        },
        {
          step: "03",
          title: "Deploy",
          description: "Go live with LP-ready reporting and operating partner dashboards in 4–6 weeks",
        },
      ],
      complianceCallout:
        "Clean, auditable analytics infrastructure accelerates due diligence and supports higher exit multiples. We build for the exit from day one.",
      cta: {
        primary: "Request a portfolio analytics demo",
        secondary: "Get a free portco data assessment",
        secondaryHref: "/contact?topic=portco-data-assessment",
        secondaryVariant: "ghost",
      },
    },
  },
];

export type CaseStudyLead = "ankita" | "ayush";

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  industryTag: string;
  industrySlug: string;
  client: string;
  overview: string;
  challenge: string;
  challengePoints: string[];
  solution: string;
  solutionItems?: string[];
  outcomes: string[];
  tools: string[];
  architecture: string[];
  impact: Array<{ metric: string; label: string }>;
  engagementLead: CaseStudyLead;
  clientFeedback?: string;
  clientFeedbackAttribution?: string;
  engagementSource?: "prior-role" | "upwork";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "oil-gas-production-compliance",
    title: "Production & Environmental Compliance Analytics",
    industry: "Oil & Gas",
    industryTag: "Oil & Gas",
    industrySlug: "oil-gas",
    client: "Integrated energy major",
    overview:
      "A major integrated energy company needed unified visibility across production volumes and environmental compliance metrics from multiple wells. Data lived in disconnected systems with no real-time monitoring, creating regulatory risk and operational blind spots.",
    challenge:
      "A major integrated energy company needed unified visibility across production volumes and environmental compliance metrics from multiple wells. Data lived in disconnected systems with no real-time monitoring, creating regulatory risk and operational blind spots.",
    challengePoints: [
      "Air quality and emissions data tracked manually across well perimeters",
      "Production volumes from multiple wells reported in separate systems",
      "No automated alerting when environmental thresholds were approached",
      "Compliance reporting assembled reactively, creating regulatory exposure",
    ],
    solution:
      "Built an All-in-One Production Reporting Tool and Air Monitoring System (EMS Stream) in Power BI, consolidating data from multiple well sites into a single operational view. The air quality dashboard tracks perimeter readings in real time and flags threshold breaches before they result in regulatory fines.",
    outcomes: [
      "Real-time air quality monitoring across all well perimeters",
      "Unified production tracking by well, with automated data refresh",
      "Regulatory compliance reporting available on demand",
      "Reduced manual data consolidation effort across field and ops teams",
    ],
    tools: ["Power BI", "Multi-source data integration"],
    architecture: ["Power BI", "Multi-source data integration"],
    impact: [
      { metric: "Real-time well monitoring", label: "Across multi-site operations" },
      { metric: "On demand", label: "Regulatory compliance reporting" },
      { metric: "Unified", label: "Production tracking by well" },
    ],
    engagementLead: "ankita",
  },
  {
    slug: "oil-gas-upstream-voc",
    title: "Upstream Operations & VOC Monitoring Platform",
    industry: "Oil & Gas",
    industryTag: "Oil & Gas",
    industrySlug: "oil-gas",
    client: "E&P operator",
    overview:
      "An upstream E&P operator required dashboards for volatile organic compound (VOC) monitoring and deepwater asset operations. Data resided in SAP HANA and required complex multi-parameter queries - previously handled through manual extraction and offline reporting.",
    challenge:
      "An upstream E&P operator required dashboards for volatile organic compound (VOC) monitoring and deepwater asset operations. Data resided in SAP HANA and required complex multi-parameter queries - previously handled through manual extraction and offline reporting.",
    challengePoints: [
      "VOC and environmental data inaccessible without manual SQL exports",
      "Deepwater asset performance tracked in disconnected spreadsheets",
      "Dashboard caching failures caused data staleness under load",
      "No automated notification when fresh data was available",
    ],
    solution:
      "Developed Spotfire dashboards with SAP HANA connectors for the VOC and Guyana Deepwater operations. Implemented Iron Python scripts to pass multi-value parameters to stored procedures for on-demand data pull. Built PowerShell automation to send alerts when latest data loaded, and created Automation Jobs to pre-embed HANA data and eliminate caching failures under load.",
    outcomes: [
      "On-demand data access replacing manual export workflow",
      "Eliminated caching-related data staleness issues",
      "Automated data availability notifications to operations team",
      "End-to-end delivery: requirements through deployment and support",
    ],
    tools: ["TIBCO Spotfire", "SAP HANA", "Iron Python", "PowerShell Automation"],
    architecture: ["TIBCO Spotfire", "SAP HANA", "Iron Python", "PowerShell Automation"],
    impact: [
      { metric: "On-demand data delivery", label: "Replacing manual extraction workflow" },
      { metric: "Automated", label: "Data availability notifications" },
      { metric: "Eliminated", label: "Caching-related data staleness" },
    ],
    engagementLead: "ayush",
  },
  {
    slug: "life-sciences-clinical-trial-analytics",
    title: "Clinical Trial Operations Analytics Suite",
    industry: "Life Sciences",
    industryTag: "Life Sciences",
    industrySlug: "life-sciences",
    client: "Global contract research organisation",
    overview:
      "A global CRO managing hundreds of clinical studies needed analytics across trial operations, data quality, and HR - all sourced from fragmented CRM and HR systems with no single point of truth.",
    challenge:
      "A global CRO managing hundreds of clinical studies needed analytics across trial operations, data quality, and HR - all sourced from fragmented CRM and HR systems with no single point of truth.",
    challengePoints: [
      "Clinical study data (sites, patients, documentation) tracked manually",
      "CRM data completeness and validity had no automated checks",
      "HR metrics (diversity, attrition, promotions) required manual exports",
      "SAS Visual Analytics being decommissioned with no migration plan",
    ],
    solution:
      "Delivered four interconnected Power BI reports and led full migration of SAS Visual Analytics dashboards to Power BI following platform decommission.",
    solutionItems: [
      "Select Life Report - tracks sites finalised, patients enrolled, and study documentation status across the engagement lifecycle",
      "Data Credibility Report - automated completeness, consistency, and validity checks on CRM data",
      "HR Demographics Dashboard - Active employees YoY, hires, promotions, terminations, ethnic diversity, and female leadership by business unit",
      "DRM Audit Dashboard - application access by user, time period, and geography",
    ],
    outcomes: [
      "Single analytics layer across clinical, HR, and data quality functions",
      "Automated data credibility scoring replacing manual validation",
      "SAS VA to Power BI migration completed with no loss of functionality",
      "Complex DAX with dynamic axis switching and bookmark-driven navigation",
    ],
    tools: ["Power BI", "TIBCO Spotfire", "SAS Visual Analytics", "Complex DAX"],
    architecture: ["Power BI", "TIBCO Spotfire", "SAS Visual Analytics", "Complex DAX"],
    impact: [
      { metric: "Unified data quality", label: "And study tracking across CRM systems" },
      { metric: "Automated", label: "Data credibility scoring" },
      { metric: "Full migration", label: "SAS VA to Power BI" },
    ],
    engagementLead: "ankita",
  },
  {
    slug: "financial-services-risk-intelligence",
    title: "Risk Intelligence & Client Portfolio Dashboard",
    industry: "Financial Services",
    industryTag: "Financial Services",
    industrySlug: "financial-services",
    client: "Wealth management firm",
    overview:
      "A wealth management firm lacked real-time visibility into relationship manager activity, client authorisation status, and deal pipeline health. Risk flags were identified reactively, often after client impact had already occurred.",
    challenge:
      "A wealth management firm lacked real-time visibility into relationship manager activity, client authorisation status, and deal pipeline health. Risk flags were identified reactively, often after client impact had already occurred.",
    challengePoints: [
      "Outstanding access requests and missing authorisations tracked manually",
      "Inactive relationship managers not surfaced until client escalations",
      "Deal pipeline had no media coverage tracking",
      "Market summary updates assembled manually before client meetings",
    ],
    solution:
      "Built a Risk Dashboard and Client App in Power BI surfacing five critical KPI categories: Outstanding Access Requests, Persons with Missing Authorisation, Accounts with Inactive Relationship Managers, Deals with No Media, and Market Summary Update status. Enabled relationship managers and leadership to act on risk signals before client impact.",
    outcomes: [
      "Real-time visibility into relationship and authorisation risk",
      "Proactive identification of at-risk client accounts",
      "Reduced time from risk identification to remediation",
      "Client-facing app delivered alongside internal risk dashboard",
    ],
    tools: ["Power BI", "Financial data modelling"],
    architecture: ["Power BI", "Financial data modelling"],
    impact: [
      { metric: "Real-time risk flags", label: "Replacing manual relationship tracking" },
      { metric: "Proactive", label: "Identification of at-risk accounts" },
      { metric: "Client app", label: "Delivered alongside internal dashboard" },
    ],
    engagementLead: "ankita",
  },
  {
    slug: "healthcare-equipment-services-analytics",
    title: "Equipment Services Financial & Operational Analytics",
    industry: "Healthcare",
    industryTag: "Healthcare",
    industrySlug: "healthcare",
    client: "Global medtech company",
    overview:
      "A global medical technology company's CFOs lacked consolidated visibility into their managed equipment service accounts. Financial, operational, and structural data lived in separate systems, making high-risk deals invisible until escalation.",
    challenge:
      "A global medical technology company's CFOs lacked consolidated visibility into their managed equipment service accounts. Financial, operational, and structural data lived in separate systems, making high-risk deals invisible until escalation.",
    challengePoints: [
      "Financial, operational, and structural service data not consolidated",
      "High-risk deals by region had no systematic identification method",
      "Dashboard load times too slow for CFO-level use in executive meetings",
      "Sequential data table loading causing performance bottlenecks",
    ],
    solution:
      "Delivered a Managed Equipment Services (MES) dashboard in Spotfire consolidating financial performance, operational metrics, and structural account data. Implemented Iron Python scripting to load 8 data tables in parallel (replacing sequential loading) and JavaScript accordion filters for improved usability. Enabled regional CFOs to identify deals with highest risk exposure at a glance.",
    outcomes: [
      "Parallel data loading reduced dashboard load time significantly",
      "High-risk deals surfaced by region for CFO review",
      "Unified financial and operational view across service accounts",
      "Adopted as primary tool for executive account reviews",
    ],
    tools: ["TIBCO Spotfire", "Iron Python", "JavaScript", "Financial data modelling"],
    architecture: ["TIBCO Spotfire", "Iron Python", "JavaScript", "Financial data modelling"],
    impact: [
      { metric: "CFO-level deal risk visibility", label: "Across regional service accounts" },
      { metric: "Parallel loading", label: "Reduced dashboard load time" },
      { metric: "Executive adoption", label: "Primary tool for account reviews" },
    ],
    engagementLead: "ayush",
  },
  {
    slug: "supply-chain-operations-dashboard",
    title: "Supply Chain Operations Dashboard",
    industry: "Logistics & Supply Chain",
    industryTag: "Logistics & Supply Chain",
    industrySlug: "logistics",
    client: "Operations team",
    overview:
      "An operations team needed real-time visibility into their supply chain performance. Data was fragmented across systems with no consolidated view for management decision-making.",
    challenge:
      "An operations team needed real-time visibility into their supply chain performance. Data was fragmented across systems with no consolidated view for management decision-making.",
    challengePoints: [],
    solution:
      "Developed a Power BI supply chain operations dashboard consolidating performance data across the supply chain. Enabled management to track operational KPIs and identify bottlenecks in real time.",
    outcomes: [],
    tools: ["Power BI", "Supply chain data modelling"],
    architecture: ["Power BI", "Supply chain data modelling"],
    impact: [
      { metric: "Real-time supply chain visibility", label: "Replacing manual reporting" },
      { metric: "Operational KPIs", label: "Tracked across the supply chain" },
      { metric: "Bottleneck detection", label: "In real time for management" },
    ],
    engagementLead: "ankita",
    clientFeedback:
      "Ankita completed work with efficiency and diligence and helped resolved issues of the project - many thanks!",
    engagementSource: "upwork",
  },
  {
    slug: "saas-customer-analytics-api",
    title: "Customer-Facing Analytics & API Integration Platform",
    industry: "SaaS",
    industryTag: "SaaS",
    industrySlug: "saas",
    client: "Product & customer analytics team",
    overview:
      "A SaaS company needed Power BI dashboards embedded into their customer-facing product. Their existing API layer had performance issues limiting what data could be surfaced, and internal dashboards lacked a coherent visualisation narrative.",
    challenge:
      "A SaaS company needed Power BI dashboards embedded into their customer-facing product. Their existing API layer had performance issues limiting what data could be surfaced, and internal dashboards lacked a coherent visualisation narrative.",
    challengePoints: [],
    solution:
      "Delivered a Power BI integration solution covering both the internal BI layer and customer-facing dashboards. Identified and resolved API bottlenecks as part of the engagement - unblocking data that wasn't previously accessible. Built a visualisation storyboard that structured insights for end customers. Engagement converted to an ongoing retainer.",
    outcomes: [],
    tools: ["Power BI", "REST API integration", "Dashboard design"],
    architecture: ["Power BI", "REST API integration", "Dashboard design"],
    impact: [
      { metric: "Customer-facing dashboards", label: "Shipped with improved API layer" },
      { metric: "API bottlenecks", label: "Resolved during engagement" },
      { metric: "Ongoing retainer", label: "Post-launch support retained" },
    ],
    engagementLead: "ankita",
    clientFeedback:
      "It was a pleasure working with Ankita on our PowerBI integration project. She has exceptional PowerBI skills and delivered a high-quality solution tailored to our needs. Beyond that, she also helped us significantly improve our APIs, which was a huge bonus. Her technical expertise is impressive, and her proactive approach to improve existing dashboards and help build a visualisation storyboard made a real impact to our customers. Communication was smooth, and she kept us updated throughout. Ankita is professional, reliable, and a great collaborator.",
    clientFeedbackAttribution:
      "Client, PowerBI Integration Specialist engagement (Upwork, 5.0 ★)",
    engagementSource: "upwork",
  },
  {
    slug: "hr-survey-workforce-analytics",
    title: "Employee Survey & Workforce Analytics Dashboard",
    industry: "HR & People Analytics",
    industryTag: "HR & People Analytics",
    industrySlug: "hr-people-analytics",
    client: "Enterprise",
    overview:
      "An enterprise team needed Power BI dashboards to analyse employee survey results (S360) and workforce performance data across departments. Data existed but could not be sliced, filtered, or presented in a format usable by HR leadership.",
    challenge:
      "An enterprise team needed Power BI dashboards to analyse employee survey results (S360) and workforce performance data across departments. Data existed but could not be sliced, filtered, or presented in a format usable by HR leadership.",
    challengePoints: [],
    solution:
      "Built a Power BI dashboard for S360 survey data with complex DAX measures, dynamic filtering by department and leadership tier, and visualisations suited for executive HR review. Delivered within the agreed timeframe.",
    outcomes: [],
    tools: ["Power BI", "DAX", "HR data modelling"],
    architecture: ["Power BI", "DAX", "HR data modelling"],
    impact: [
      { metric: "Survey data visualised", label: "Across departments and leadership tiers" },
      { metric: "Complex DAX", label: "Dynamic filtering by tier" },
      { metric: "On time", label: "Delivered in agreed timeframe" },
    ],
    engagementLead: "ankita",
    clientFeedback:
      "Ankita is a seasoned Power BI developer, she is able to deliver quality output in the agreed timeframe.",
    clientFeedbackAttribution: "Client, Power BI dashboard for S360 survey (Upwork, 5.0 ★)",
    engagementSource: "upwork",
  },
  {
    slug: "spotfire-powerbi-migration",
    title: "Spotfire to Power BI Platform Migration",
    industry: "Analytics Modernisation",
    industryTag: "Analytics Modernisation",
    industrySlug: "analytics-modernisation",
    client: "Enterprise",
    overview:
      "A client running legacy Spotfire dashboards needed to migrate to Power BI. Beyond replicating existing functionality, the engagement uncovered opportunities to substantially improve the analytical design - simplifying the user experience and expanding what the dashboards could do.",
    challenge:
      "A client running legacy Spotfire dashboards needed to migrate to Power BI. Beyond replicating existing functionality, the engagement uncovered opportunities to substantially improve the analytical design - simplifying the user experience and expanding what the dashboards could do.",
    challengePoints: [],
    solution:
      "Led full Spotfire-to-Power BI migration across Phase 2 of the programme. Analysed existing Spotfire data models and visualisations, replicated core functionality in Power BI, and introduced improvements to the analytical design that went beyond the original scope. The client received a materially better product than they had planned for.",
    outcomes: [],
    tools: ["TIBCO Spotfire", "Power BI", "Data model migration"],
    architecture: ["TIBCO Spotfire", "Power BI", "Data model migration"],
    impact: [
      { metric: "Beyond the brief", label: "Better solution than originally specified" },
      { metric: "Full migration", label: "Spotfire to Power BI Phase 2" },
      { metric: "Improved design", label: "Simplified user experience" },
    ],
    engagementLead: "ankita",
    clientFeedback:
      "Ankita was a pleasure to work with, and got us to a much better solution than we originally asked for!",
    clientFeedbackAttribution: "Client, Spotfire Development Phase 2 (Upwork, 5.0 ★)",
    engagementSource: "upwork",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Map decision workflows, data sources, and KPI gaps. Align stakeholders on outcomes before architecture.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Design the data platform, integration patterns, and semantic model. Validate against security and compliance requirements.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Deliver pipelines, certified datasets, and dashboards in phased releases. Parallel-run against existing reports where needed.",
  },
  {
    step: "04",
    title: "Enable",
    description:
      "Train business teams, document KPI ownership, and establish refresh monitoring. Transition to managed operations.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ankita is one of the most skilled professionals I have worked with. She has advanced Power BI knowledge along with outstanding communication skills.",
    author: "Verified Upwork client",
    company: "Top Rated Plus · 5★",
  },
  {
    quote:
      "Ankita is a true professional. She understood the requirements perfectly, delivered quality work on time, and communicated clearly throughout. Highly recommend.",
    author: "Verified Client · Upwork · 5★",
    company: "Logistics sector",
  },
  {
    quote:
      "Excellent experience working with Ankita. Went above and beyond to ensure everything was accurate and functional.",
    author: "Verified Client · Upwork · 5★",
    company: "SaaS sector",
  },
];

export const faqs = [
  {
    question: "Do you sell dashboards or build decision systems?",
    answer:
      "We build trusted decision systems. Dashboards are one deliverable within a broader architecture that includes data integration, KPI governance, and enablement. Our goal is faster, better decisions - not more charts.",
  },
  {
    question: "Which platforms do you specialize in?",
    answer:
      "We specialize in Power BI, TIBCO Spotfire, Snowflake, Databricks, and Azure. We also integrate with Shopify, Salesforce, NetSuite, HubSpot, SAP, and other common business systems.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements run 8–16 weeks depending on scope. We deliver in phases so business teams see value early - often within the first four weeks.",
  },
  {
    question: "Can you migrate from Tableau or Qlik?",
    answer:
      "Yes. We run phased migrations with parallel-run validation to eliminate disruption. Most migrations include report catalog consolidation as part of the modernization.",
  },
  {
    question: "Do you work with companies our size?",
    answer:
      "We work with growing companies from 20 to 1,000 employees across eCommerce, manufacturing, SaaS, healthcare, financial services, logistics, and private equity portfolio companies.",
  },
  {
    question: "Who will we work with during the engagement?",
    answer:
      "Every engagement is led by a Principal Consultant - from discovery and architecture through implementation and executive handover. You work directly with the experts responsible for your solution, not a separate sales or delivery team.",
  },
  {
    question: "How do you approach AI-powered analytics?",
    answer:
      "We build the certified metrics foundation first. AI summaries, forecasting, and natural language querying are layered on trusted data - never on ungoverned exports.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseStudyIndustryFilterOrder = [
  "Oil & Gas",
  "Life Sciences",
  "Financial Services",
  "Healthcare",
  "Logistics & Supply Chain",
  "SaaS",
  "HR & People Analytics",
  "Analytics Modernisation",
] as const;

export function getCaseStudyIndustryFilters() {
  const present = new Set(caseStudies.map((study) => study.industryTag));
  return caseStudyIndustryFilterOrder.filter((tag) => present.has(tag));
}

export function getRelatedCaseStudies(slug: string, limit = 2) {
  const current = getCaseStudy(slug);
  if (!current) return [];

  return caseStudies
    .filter(
      (study) =>
        study.slug !== slug && study.industrySlug === current.industrySlug,
    )
    .slice(0, limit);
}
