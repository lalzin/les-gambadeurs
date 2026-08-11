import type { Metadata } from "next";
import Annotation from "@/components/Annotation";
import { Champ, Epi, Patte } from "@/components/Botanique";
import Calendly from "@/components/Calendly";
import FormulaireContact from "@/components/FormulaireContact";
import Reveal from "@/components/Reveal";
import { Bouton, EntetePage, TitreSection } from "@/components/Ui";
import { communes, photos } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & prise de rendez-vous",
  description:
    "Premier échange téléphonique offert : réservez votre créneau en ligne. Garde d'animaux et conseil à l'adoption autour de Rennes (35).",
  alternates: { canonical: "/contact" },
  openGraph: openGraph({
    title: "Contact & prise de rendez-vous — Les Gambadeurs",
    description: "Premier échange téléphonique offert. Réservez votre créneau en ligne.",
    url: "/contact",
  }),
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Les Gambadeurs",
  url: `${site.url}/contact`,
  mainEntity: { "@id": `${site.url}/#entreprise` },
};

export default function Contact() {
  return (
    <>
      <EntetePage
        surtitre="Contact & rendez-vous"
        titre="On en parle ?"
        fil="Contact"
        href="/contact"
        intro="Le premier échange téléphonique est offert et sans engagement. Racontez-moi votre animal, vos dates, ou simplement ce qui vous fait hésiter. On avisera ensemble."
        photo={photos.suzetteBalcon.src}
        photoAlt={photos.suzetteBalcon.alt}
        photoPosition="50% 55%"
      />

      {/* ============================================================ */}
      {/* COORDONNÉES                                                  */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Par téléphone",
              valeur: site.contact.phone,
              href: `tel:${site.contact.phoneHref}`,
              note: "Du lundi au samedi. Si je ne réponds pas, je suis avec un animal. Laissez-moi un message.",
            },
            {
              label: "Par e-mail",
              valeur: site.contact.email,
              href: `mailto:${site.contact.email}`,
              note: "Réponse sous 24 à 48 h. Précisez vos dates et l'espèce concernée, ça fait gagner un aller-retour.",
            },
            {
              label: "En ligne",
              valeur: "Réserver un créneau",
              href: site.contact.calendly,
              externe: true,
              note: "Choisissez directement l'horaire qui vous arrange dans mon agenda.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.label}
              delai={i * 100}
              className="group rounded-[26px] border border-brun/12 bg-papier p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-44px_var(--color-brun)]"
            >
              <div className="flex items-center justify-between">
                <p className="surtitre">{c.label}</p>
                <Patte className="h-5 w-5 text-lin transition-colors duration-500 group-hover:text-olive" />
              </div>
              <a
                href={c.href}
                {...(c.externe ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="titre mt-5 block text-[23px] break-words transition-colors hover:text-terre"
              >
                {c.valeur}
              </a>
              <p className="mt-4 text-[14px] leading-relaxed text-encre/65">{c.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FORMULAIRE                                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 pt-24 sm:px-8 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:pt-4">
            <TitreSection
              surtitre="Écrire un message"
              titre="Vous préférez écrire ?"
              intro="Pas toujours simple d'appeler entre deux réunions. Laissez-moi les grandes lignes, je vous réponds sous 24 à 48 h."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Aucune obligation : écrire n'engage à rien",
                "Vos coordonnées ne servent qu'à vous répondre",
                "Un devis clair avant toute réservation",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-encre/75">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                  {i}
                </li>
              ))}
            </ul>
            <Annotation direction="bas-droite" className="mt-9 max-w-[230px]" rotation={-2}>
              {"Dites-moi tout,\nmême les détails"}
            </Annotation>
          </div>

          <FormulaireContact />
        </div>
      </section>

      {/* ============================================================ */}
      {/* CALENDLY                                                     */}
      {/* ============================================================ */}
      <section className="relative mt-28 overflow-hidden bg-creme py-24 sm:py-28">
        <Epi className="absolute -bottom-6 left-[3%] h-40 w-14 text-sable/45" seed={3} />
        <Epi className="absolute right-[4%] -bottom-4 h-32 w-12 text-olive/45" seed={11} />

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <TitreSection surtitre="Prise de rendez-vous" titre="Choisissez votre créneau." />
              <div className="prose-gambadeurs mt-7 max-w-md text-[16px]">
                <p>
                  Le rendez-vous se fait par téléphone. Prévoyez une quinzaine de minutes au calme :
                  j&apos;aurai quelques questions sur votre animal, son quotidien et vos attentes.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Espèce, âge et particularités de votre animal",
                  "Vos dates ou votre projet d'adoption",
                  "Votre commune",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-encre/75">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                    {i}
                  </li>
                ))}
              </ul>

              <Annotation direction="bas-droite" className="mt-9 max-w-[240px]" rotation={-3}>
                {"Ce premier échange\nest offert"}
              </Annotation>

              <div className="mt-6">
                <Bouton href={site.contact.calendly} externe variante="ligne">
                  Ouvrir dans un nouvel onglet
                </Bouton>
              </div>
            </div>

            <Calendly />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ZONE                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-mousse py-24 text-creme">
        <div className="absolute inset-x-0 bottom-0 h-28 opacity-25">
          <Champ className="h-full w-full" densite={22} />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="surtitre text-tendre">Où j&apos;interviens</p>
              <h2 className="titre mt-5 text-[clamp(2rem,4.4vw,3rem)] text-creme">
                {site.zone.ville}, le pays de Bécherel, le nord de Rennes.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-creme/75">
                Base : {site.zone.ville} ({site.zone.departementCode}) — {site.zone.departement}.
                <br />
                Au-delà de {site.zone.rayonKm} km, une indemnité kilométrique de {site.zone.indemniteKm}{" "}
                supplémentaire est appliquée.
              </p>
            </div>
            <Reveal delai={100}>
              <ul className="flex flex-wrap gap-2.5">
                {communes.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-creme/20 px-4 py-2 text-[13px] text-creme/80"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </>
  );
}
