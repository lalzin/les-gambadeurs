import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Visuel de partage commun à toutes les pages.
 * Next.js remplace intégralement l'objet `openGraph` du layout dès qu'une page
 * en définit un : sans ce helper, les pages perdent silencieusement leur
 * `og:image` (et donc l'aperçu sur WhatsApp, Facebook, LinkedIn…).
 */
export const imagePartage = [
  {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: `${site.name} — ${site.baseline} en ${site.zone.departement}`,
  },
];

/** Construit un bloc Open Graph complet pour une page. */
export function openGraph({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata["openGraph"] {
  return {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title,
    description,
    url,
    images: imagePartage,
  };
}
