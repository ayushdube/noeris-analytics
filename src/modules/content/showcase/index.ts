/**
 * Illustrative examples built in the private noeris-client-showcase repository.
 * The JSON bundles are generated there (scripts/build_site_bundle.py) from synthetic
 * data and copied here; every page must show the disclaimer.
 */
import freight from "./freight-invoice-audit.json";
import insurance from "./insurance-submission-intake.json";
import monthEnd from "./month-end-cfo-pack.json";
import pe from "./pe-portfolio-pack.json";
import plant from "./plant-scorecard.json";
import saas from "./saas-revenue-retention.json";
import shopify from "./shopify-weekly-review.json";
import autoFreight from "./automation/freight-invoice-audit.json";
import autoInsurance from "./automation/insurance-submission-intake.json";
import autoSaas from "./automation/saas-revenue-retention.json";
import autoShopify from "./automation/shopify-weekly-review.json";

export interface ShowcaseKpi {
  label: string;
  value: string;
  sub: string;
}

export interface ShowcaseChart {
  title: string;
  subtitle: string;
  type: "bar" | "line";
  format: "percent" | "currency" | "multiple";
  labels: string[];
  values: number[];
}

export interface ShowcaseExample {
  slug: string;
  industrySlug: string;
  title: string;
  company: string;
  buyer: string;
  question: string;
  summary: string;
  kpis: ShowcaseKpi[];
  chart: ShowcaseChart;
  table: { title: string; columns: string[]; rows: string[][] };
  workflow: string[];
  note: { title: string; markdown: string };
  sources: string[];
  models: string[];
  checks: string[];
  disclaimer: string;
  documents?: string[];
}

export interface ShowcaseAutomation {
  example: string;
  engine: "n8n" | "langgraph";
  engineDetail: string;
  title: string;
  summary: string;
  disclaimer: string;
  diagram: {
    nodes: { id: string; label: string; kind: string; x: number; y: number }[];
    edges: { from: string; to: string; label: string }[];
  };
  runs: { title: string; outcome: string; steps: { node: string; ms: number; summary: string; pause: boolean }[] }[];
}

const automations = [autoShopify, autoFreight, autoSaas, autoInsurance] as unknown as ShowcaseAutomation[];

/** Recorded n8n workflow or LangGraph agent run for an example, if one exists. */
export function getAutomation(exampleSlug: string) {
  return automations.find((a) => a.example === exampleSlug);
}

export const showcaseExamples = [shopify, pe, monthEnd, plant, saas, freight, insurance] as unknown as ShowcaseExample[];

export function getShowcaseExample(slug: string) {
  return showcaseExamples.find((e) => e.slug === slug);
}

export function getExampleForIndustry(industrySlug: string) {
  return showcaseExamples.find((e) => e.industrySlug === industrySlug);
}
