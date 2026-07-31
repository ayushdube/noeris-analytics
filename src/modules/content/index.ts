/**
 * Content module - extension point for future CMS integration.
 *
 * When implementing a CMS (Sanity, Contentful, etc.):
 * 1. Define ContentRepository interface here
 * 2. Implement StaticContentRepository (current) and CmsContentRepository
 * 3. Swap via CONTENT_PROVIDER env variable
 *
 * Future content types: Post, CaseStudy, Whitepaper, Assessment, LeadMagnet
 */

export type { } from "./site-content";

export interface ContentRepository {
  getPosts(): Promise<unknown[]>;
  getCaseStudies(): Promise<unknown[]>;
  getWhitepapers(): Promise<unknown[]>;
}

export class StaticContentRepository implements ContentRepository {
  async getPosts() {
    return [];
  }

  async getCaseStudies() {
    const { caseStudies } = await import("./site-content");
    return caseStudies;
  }

  async getWhitepapers() {
    return [];
  }
}

export function getContentRepository(): ContentRepository {
  return new StaticContentRepository();
}
