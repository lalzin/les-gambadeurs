import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "monthly" },
    { path: "/garde-d-animaux", priority: 0.9, freq: "monthly" },
    { path: "/conseil-a-l-adoption", priority: 0.9, freq: "monthly" },
    { path: "/qui-suis-je", priority: 0.7, freq: "yearly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/mentions-legales", priority: 0.2, freq: "yearly" },
    { path: "/politique-de-confidentialite", priority: 0.2, freq: "yearly" },
    { path: "/conditions-generales", priority: 0.2, freq: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
