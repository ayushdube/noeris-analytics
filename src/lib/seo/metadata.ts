import { siteConfig } from "@/lib/site-config";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
