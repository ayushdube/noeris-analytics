import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export function createPageMetadata({
  title,
  description,
  path,
  ogImagePath,
}: {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
}): Metadata {
  const image = ogImagePath ?? "/opengraph-image";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: "Noeris Analytics",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Noeris Analytics`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
