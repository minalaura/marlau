import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";
import { getInsightSlugs } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/leistungen",
    "/arbeitsweise",
    "/ueber-marlau",
    "/gruenderin",
    "/insights",
    "/kontakt",
    "/check",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const insightRoutes = getInsightSlugs().map((slug) => ({
    url: `${site.url}/insights/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...insightRoutes];
}
