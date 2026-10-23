import type { NextConfig } from "next";

/**
 * En-têtes de sécurité appliqués à toutes les pages.
 *
 * La politique de sécurité du contenu (CSP) autorise exactement ce dont le site
 * a besoin : ses propres ressources et les images optimisées par Next. Toute autre origine est refusée par le
 * navigateur, ce qui limite fortement l'impact d'une injection de script.
 *
 * ⚠️ Si vous ajoutez un outil tiers (mesure d'audience, chat, pixel publicitaire),
 * il faut ajouter son domaine dans la directive correspondante, sinon le
 * navigateur le bloquera silencieusement.
 */
const csp = [
  "default-src 'self'",
  // 'unsafe-inline' reste nécessaire aux styles et au bootstrap de Next.js
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const enTetes = [
  { key: "Content-Security-Policy", value: csp },
  // Empêche l'affichage du site dans une iframe tierce (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Empêche le navigateur de deviner un type MIME différent de celui annoncé
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Ne transmet l'URL complète qu'aux pages du site
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Le site n'a besoin ni de la caméra, ni du micro, ni de la géolocalisation
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // Force le HTTPS pendant deux ans, sous-domaines compris
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: enTetes }];
  },
};

export default nextConfig;
