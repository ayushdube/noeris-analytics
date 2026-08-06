"use client";

import { usePathname } from "next/navigation";

import { PageSideLabel } from "@/components/layout/PageSideLabel";
import { getPageSideLabel } from "@/lib/page-side-labels";

export function PageSideLabelRoute() {
  const pathname = usePathname();
  const label = getPageSideLabel(pathname);

  if (!label) return null;

  return <PageSideLabel label={label} />;
}
