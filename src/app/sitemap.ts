import type { MetadataRoute } from "next";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

type Entree = {
  path: string;
  priority: number;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** photos affichées sur la page : sitemap d'images pour Google Images */
  images?: { src: string }[];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Entree[] = [
    {
      path: "",
      priority: 1,
      freq: "monthly",
      images: [photos.balade, photos.riviere, photos.chatPelouse, photos.jeuPelouse],
    },
    {
      path: "/garde-d-animaux",
      priority: 0.9,
      freq: "monthly",
      images: [photos.suzettePorte, photos.suzette],
    },
    {
      path: "/conseil-a-l-adoption",
      priority: 0.9,
      freq: "monthly",
      images: [photos.udonArbre, photos.fondatriceCalin],
    },
    {
      path: "/qui-suis-je",
      priority: 0.7,
      freq: "yearly",
      images: [photos.fondatriceJoya, photos.fondatriceChat],
    },
    { path: "/faq", priority: 0.7, freq: "monthly", images: [photos.zen] },
    { path: "/contact", priority: 0.8, freq: "yearly", images: [photos.fondatriceTerrasse] },
    { path: "/mentions-legales", priority: 0.2, freq: "yearly" },
    { path: "/politique-de-confidentialite", priority: 0.2, freq: "yearly" },
    { path: "/conditions-generales", priority: 0.2, freq: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
    ...(p.images ? { images: p.images.map((i) => `${site.url}${i.src}`) } : {}),
  }));
}
