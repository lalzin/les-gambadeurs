/**
 * Configuration centrale du site Les Gambadeurs.
 * ------------------------------------------------------------------
 * Tout le contenu éditable se trouve ici (et dans src/lib/content.ts).
 * Les champs marqués « ⚠️ À COMPLÉTER » attendent une validation cliente.
 */

export const site = {
  name: "Les Gambadeurs",
  baseline: "Garde d'animaux & Conseil à l'adoption",
  espaces: "Chiens · Chats · NAC",
  // ⚠️ À COMPLÉTER : remplacer par le domaine définitif une fois acheté / branché sur Vercel.
  url: "https://www.lesgambadeurs.fr",
  locale: "fr_FR",
  contact: {
    phone: "06 72 62 35 75",
    phoneHref: "+33672623575",
    email: "contact@lesgambadeurs.fr",
  },
  zone: {
    ville: "Vignoc",
    departement: "Ille-et-Vilaine",
    departementCode: "35",
    region: "Bretagne",
    // Coordonnées de Vignoc (35630) — utilisées pour le balisage local SEO.
    lat: 48.2436,
    lng: -1.8103,
    /** Conseil à l'adoption : tout le département, indemnité au-delà de ce rayon */
    rayonKm: 30,
    /** Garde d'animaux : périphérie nord de Rennes, indemnité au-delà de ce rayon */
    rayonGardeKm: 15,
    indemniteKm: "0,665 €/km",
  },
  // ⚠️ À COMPLÉTER : réseaux sociaux (laisser vide masque l'entrée dans le pied de page).
  social: {
    instagram: "",
    facebook: "",
  },
  /**
   * Vidéo d'ambiance de la page d'accueil.
   * Déposez un fichier dans public/media/ (ex. "champs.mp4", 6–12 s, muet, boucle,
   * < 4 Mo, 1920×1080) puis renseignez le chemin ci-dessous : la vidéo remplacera
   * automatiquement l'illustration animée de la bannière.
   * Exemple : heroVideo: "/media/champs.mp4"
   */
  heroVideo: null as string | null,
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/garde-d-animaux", label: "Garde d'animaux" },
  { href: "/conseil-a-l-adoption", label: "Conseil à l'adoption" },
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

/** Pages légales — affichées uniquement dans le pied de page. */
export const navLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-generales", label: "Conditions générales" },
] as const;
