import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.baseline}`,
    short_name: site.name,
    description:
      "Garde d'animaux à domicile et conseil à l'adoption en Ille-et-Vilaine. Chiens, chats et NAC.",
    lang: "fr",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F1",
    theme_color: "#5F4028",
    icons: [
      { src: "/brand/icone-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icone-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icone-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
