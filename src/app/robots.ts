import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
