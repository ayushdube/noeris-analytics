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

export const showcaseExamples = [shopify, pe, monthEnd, plant, saas, freight, insurance] as unknown as ShowcaseExample[];

export function getShowcaseExample(slug: string) {
  return showcaseExamples.find((e) => e.slug === slug);
}

export function getExampleForIndustry(industrySlug: string) {
  return showcaseExamples.find((e) => e.industrySlug === industrySlug);
}
