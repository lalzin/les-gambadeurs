import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { communesGarde, fondatrice, formulesGarde, prestationsGarde } from "@/lib/content";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.baseline} en Ille-et-Vilaine`,
    template: `%s | ${site.name}`,
  },
  description:
    "Garde d'animaux (visites, promenades, pension) et conseil à l'adoption pour chiens, chats et NAC, à Vignoc, au nord de Rennes et en Ille-et-Vilaine.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "garde d'animaux Ille-et-Vilaine",
    "pet sitter Rennes",
    "garde de chat à domicile 35",
    "promenade de chien Rennes",
    "conseil à l'adoption animal",
    "garde NAC Bretagne",
    "ACACED Ille-et-Vilaine",
    "Vignoc",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.baseline}`,
    description:
      "Garde d'animaux et conseil à l'adoption au nord de Rennes et en Ille-et-Vilaine. Chiens, chats et NAC.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Les Gambadeurs, garde d'animaux et conseil à l'adoption en Ille-et-Vilaine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.baseline}`,
    description:
      "Garde d'animaux et conseil à l'adoption au nord de Rennes et en Ille-et-Vilaine. Chiens, chats et NAC.",
    images: ["/og.png"],
  },
  robots: {
    index: site.indexable,
    follow: site.indexable,
    googleBot: {
      index: site.indexable,
      follow: site.indexable,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Animaux de compagnie",
  // Vérification de propriété : renseigner les variables sur Vercel, puis redéployer.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F1",
  colorScheme: "light",
};

/** Balisage Schema.org : entreprise locale de services animaliers. */
const donneesStructurees = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#entreprise`,
  name: site.name,
  alternateName: `${site.name} | ${site.baseline}`,
  description:
    "Garde d'animaux (visites à domicile, promenades, pension) et conseil à l'adoption pour chiens, chats et NAC, au nord de Rennes et en Ille-et-Vilaine.",
  url: site.url,
  telephone: `+33${site.contact.phoneHref.slice(3)}`,
  email: site.contact.email,
  image: `${site.url}/brand/logo-lockup.png`,
  logo: `${site.url}/brand/logo-lockup.png`,
  priceRange: "€€",
  slogan: "Il ne s'agit pas juste de les aimer, mais de les comprendre profondément.",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.zone.ville,
    addressRegion: site.zone.region,
    postalCode: "35630",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.zone.lat, longitude: site.zone.lng },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: site.zone.lat, longitude: site.zone.lng },
      geoRadius: site.zone.rayonGardeKm * 1000,
    },
    // Communes nommées une à une : signal fort pour la recherche locale.
    ...communesGarde.map((ville) => ({
      "@type": "City",
      name: ville,
      containedInPlace: { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
    })),
  ],
  founder: {
    "@type": "Person",
    name: fondatrice.prenom,
    jobTitle: fondatrice.poste,
    url: `${site.url}/qui-suis-je`,
  },
  knowsLanguage: "fr",
  ...(Object.values(site.social).some(Boolean)
    ? { sameAs: Object.values(site.social).filter(Boolean) }
    : {}),
  knowsAbout: [
    "Besoins biologiques des animaux de compagnie",
    "Éthologie appliquée",
    "Nutrition animale",
    "Conseil à l'adoption",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certificate",
    name: "ACACED : Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques",
  },
  makesOffer: [
    ...formulesGarde.map((f) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: f.nom,
        description: `${f.visite.titre} (${f.visite.pour}) ou ${f.promenade.titre.toLowerCase()} (${f.promenade.pour}), trajet inclus.`,
        serviceType: "Garde d'animaux",
        url: `${site.url}/garde-d-animaux`,
      },
    })),
    ...prestationsGarde.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.nom.replace(/[«»]/g, "").trim(),
        description: p.detail,
        serviceType: "Garde d'animaux",
        url: `${site.url}/garde-d-animaux`,
      },
    })),
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Conseil à l'adoption",
        serviceType: "Conseil avant, pendant et après l'adoption d'un animal",
        url: `${site.url}/conseil-a-l-adoption`,
      },
    },
  ],
};

/** Balisage du site lui-même — aide les moteurs à relier les pages entre elles. */
const donneesSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#site`,
  name: site.name,
  url: site.url,
  inLanguage: "fr-FR",
  publisher: { "@id": `${site.url}/#entreprise` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${outfit.variable} ${caveat.variable}`}
      // Le script d'amélioration progressive ajoute la classe « anim » avant
      // l'hydratation : écart attendu, sans conséquence.
      suppressHydrationWarning
    >
      <head>
        {/*
          Amélioration progressive. Les apparitions au défilement masquent le
          contenu avant de le révéler : on n'active ce masquage que si le
          navigateur sait effectivement le révéler. Script inline et synchrone
          pour éviter tout clignotement.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if('IntersectionObserver' in window){document.documentElement.classList.add('anim')}}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brun focus:px-5 focus:py-3 focus:text-creme"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        {/* Mesure d'audience et performances réelles : sans cookie, servies par
            le domaine du site, donc compatibles avec la CSP et sans bandeau. */}
        {site.mesureAudience && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesSite) }}
        />
      </body>
    </html>
  );
}
