import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Les déploiements de prévisualisation Vercel ne doivent jamais être indexés :
 * ils dupliqueraient le contenu du site de production.
 */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
