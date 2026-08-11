import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Champ, Patte, Tournesol } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import type { Prestation } from "@/lib/content";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Titres de section                                                   */
/* ------------------------------------------------------------------ */

export function TitreSection({
  surtitre,
  titre,
  intro,
  align = "left",
  className = "",
}: {
  surtitre?: string;
  titre: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {surtitre && (
        <p className="surtitre flex items-center gap-3">
          {align === "center" && <span className="filet hidden w-10 sm:block" />}
          {surtitre}
          <span className="filet w-10" />
        </p>
      )}
      <h2 className="titre mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">{titre}</h2>
      {intro && <div className="prose-gambadeurs mt-6 text-[17px]">{intro}</div>}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Boutons                                                             */
/* ------------------------------------------------------------------ */

export function Bouton({
  href,
  children,
  variante = "plein",
  externe = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variante?: "plein" | "ligne" | "clair";
  externe?: boolean;
  className?: string;
}) {
  const styles = {
    plein:
      "bg-terre text-creme hover:bg-brun hover:shadow-[0_16px_38px_-16px_var(--color-brun)] hover:-translate-y-0.5",
    ligne: "border border-brun/25 text-brun hover:border-brun hover:bg-brun hover:text-creme",
    clair: "bg-creme text-brun hover:bg-lin",
  }[variante];

  const cls = `group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[14px] font-medium transition-all duration-400 ${styles} ${className}`;

  const contenu = (
    <>
      {children}
      <span className="inline-block transition-transform duration-400 group-hover:translate-x-1">→</span>
    </>
  );

  if (externe) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {contenu}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {contenu}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Photo en arche                                                      */
/* ------------------------------------------------------------------ */

export function PhotoArche({
  src,
  alt,
  className = "",
  priority = false,
  position = "center",
  sizes = "(max-width: 768px) 90vw, 40vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
  sizes?: string;
}) {
  return (
    <div className={`arche relative bg-lin shadow-[0_40px_80px_-50px_var(--color-brun)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brun/22 via-transparent to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cartes                                                              */
/* ------------------------------------------------------------------ */

export function CartePrestation({
  p,
  index = 0,
  promo = false,
}: {
  p: Prestation;
  index?: number;
  promo?: boolean;
}) {
  const aPromo = promo && p.prixPromo;
  return (
    <Reveal
      delai={index * 90}
      className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-brun/12 bg-papier p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brun/25 hover:shadow-[0_30px_60px_-40px_var(--color-brun)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-tendre/45 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="titre text-[24px] leading-tight">{p.nom}</h3>
          {p.duree && (
            <p className="mt-2 text-[12px] tracking-[0.14em] text-sable uppercase">{p.duree}</p>
          )}
        </div>
        <Patte className="mt-1 h-5 w-5 shrink-0 text-lin transition-colors duration-500 group-hover:text-olive" />
      </div>

      <p className="prose-gambadeurs mt-5 flex-1 text-[15px]">{p.detail}</p>

      {p.inclus && (
        <ul className="mt-6 space-y-2 border-t border-brun/10 pt-5">
          {p.inclus.map((i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] text-encre/72">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
              {i}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 flex items-end justify-between gap-3">
        {p.prix === null ? (
          <span className="text-[15px] text-brun/70 italic">Tarif sur demande</span>
        ) : aPromo ? (
          <span className="flex items-baseline gap-2.5">
            <span className="text-brun/45 line-through">{p.prix}</span>
            <span className="titre text-[30px] text-terre">{p.prixPromo}</span>
          </span>
        ) : (
          <span className="titre text-[30px] text-terre">{p.prix}</span>
        )}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Bandeau d'appel                                                     */
/* ------------------------------------------------------------------ */

export function BandeauRdv({
  titre = "On en parle ?",
  texte = "Le premier échange téléphonique est offert, sans engagement. Racontez-moi votre animal, vos dates, vos doutes.",
}: {
  titre?: string;
  texte?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-mousse py-24 text-creme">
      <div className="absolute inset-x-0 bottom-0 h-28 opacity-30">
        <Champ className="h-full w-full" densite={20} />
      </div>
      <Tournesol
        className="absolute -top-10 -right-10 h-52 w-52 opacity-15"
        couleurPetale="var(--color-tendre)"
        couleurCoeur="var(--color-sable)"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 text-center sm:px-8">
        <Reveal>
          <p className="surtitre text-tendre">Contact</p>
          <h2 className="titre mt-5 text-[clamp(2.2rem,5vw,3.6rem)] text-creme">{titre}</h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-creme/80">{texte}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Bouton href={site.contact.calendly} externe variante="clair">
              Réserver un créneau
            </Bouton>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="rounded-full border border-creme/30 px-6 py-3.5 text-[14px] transition-colors hover:border-creme hover:bg-creme/10"
            >
              {site.contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* En-tête de page intérieure                                          */
/* ------------------------------------------------------------------ */

export function EntetePage({
  surtitre,
  titre,
  intro,
  photo,
  photoAlt,
  photoPosition = "center",
  fil,
  href,
}: {
  surtitre: string;
  titre: string;
  intro: string;
  photo: string;
  photoAlt: string;
  photoPosition?: string;
  /** libellé du fil d'Ariane, si différent du titre */
  fil?: string;
  /** chemin de la page — active le balisage BreadcrumbList */
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-[128px] pb-16 sm:pt-[152px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_78%_-10%,var(--color-creme),transparent_58%)]"
      />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <FilAriane page={fil ?? titre} href={href} />
      </div>
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pt-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="surtitre flex items-center gap-3">
              {surtitre}
              <span className="filet w-12" />
            </p>
            <h1 className="titre mt-6 text-[clamp(2.6rem,6.4vw,4.6rem)]">{titre}</h1>
            <p className="prose-gambadeurs mt-7 max-w-xl text-[18px]">{intro}</p>
          </Reveal>
        </div>
        <Reveal delai={140} className="relative">
          <PhotoArche
            src={photo}
            alt={photoAlt}
            position={photoPosition}
            priority
            className="ml-auto aspect-[3/4] w-full max-w-[380px]"
            sizes="(max-width: 1024px) 80vw, 380px"
          />
        </Reveal>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 -z-10 h-28 opacity-70">
        <Champ className="h-full w-full" densite={18} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ (accordéon + balisage FAQPage)                                  */
/* ------------------------------------------------------------------ */

export function Faq({
  items,
  surtitre = "Questions fréquentes",
  titre = "Ce qu'on me demande le plus souvent.",
  className = "",
  avecSchema = true,
}: {
  items: { q: string; r: string }[];
  surtitre?: string;
  titre?: string;
  className?: string;
  /** À désactiver quand plusieurs FAQ cohabitent : un seul FAQPage par page. */
  avecSchema?: boolean;
}) {
  const schema = avecSchema ? schemaFaq(items) : null;

  return (
    <section className={`mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-32 ${className}`}>
      <TitreSection surtitre={surtitre} titre={titre} align="center" />

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-brun/10 border-y border-brun/10">
        {items.map((f, i) => (
          <Reveal key={f.q} delai={i * 60}>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h3 className="titre text-[20px] transition-colors group-open:text-terre">{f.q}</h3>
                <span className="mt-1 shrink-0 text-lg text-sable transition-transform duration-400 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-gambadeurs mt-4 max-w-2xl text-[15.5px]">{f.r}</p>
            </details>
          </Reveal>
        ))}
      </div>

      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </section>
  );
}

/** Construit un balisage FAQPage à partir d'une liste de questions. */
export function schemaFaq(items: { q: string; r: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.r },
    })),
  };
}

/* ------------------------------------------------------------------ */
/* Fil d'Ariane                                                        */
/* ------------------------------------------------------------------ */

export function FilAriane({ page, href }: { page: string; href?: string }) {
  const schema = href
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
          { "@type": "ListItem", position: 2, name: page, item: `${site.url}${href}` },
        ],
      }
    : null;

  return (
    <nav aria-label="Fil d'Ariane" className="text-[12px]">
      <ol className="flex flex-wrap items-center gap-2 text-encre/50">
        <li>
          <Link href="/" className="hover:text-brun">
            Accueil
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li className="text-brun">{page}</li>
      </ol>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </nav>
  );
}
