import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    default: `${site.name} — ${site.baseline} en Ille-et-Vilaine`,
    template: `%s — ${site.name}`,
  },
  description:
    "Garde d'animaux à domicile et conseil à l'adoption en Ille-et-Vilaine : chiens, chats et NAC. Une approche fondée sur les besoins biologiques de votre animal, à Vignoc et autour de Rennes.",
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
    title: `${site.name} — ${site.baseline}`,
    description:
      "Garde d'animaux à domicile et conseil à l'adoption en Ille-et-Vilaine. Chiens, chats et NAC.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Les Gambadeurs — garde d'animaux et conseil à l'adoption en Ille-et-Vilaine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.baseline}`,
    description:
      "Garde d'animaux à domicile et conseil à l'adoption en Ille-et-Vilaine. Chiens, chats et NAC.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Animaux de compagnie",
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
  alternateName: `${site.name} — ${site.baseline}`,
  description:
    "Garde d'animaux à domicile (chiens, chats, NAC) et conseil à l'adoption en Ille-et-Vilaine.",
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
  ],
  knowsAbout: [
    "Besoins biologiques des animaux de compagnie",
    "Éthologie appliquée",
    "Nutrition animale",
    "Conseil à l'adoption",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certificate",
    name: "ACACED — Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garde d'animaux à domicile" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visites et promenades" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conseil à l'adoption" } },
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
