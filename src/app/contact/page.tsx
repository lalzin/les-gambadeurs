import type { Metadata } from "next";
import Annotation from "@/components/Annotation";
import { Champ, Patte } from "@/components/Botanique";
import FormulaireContact from "@/components/FormulaireContact";
import Reveal from "@/components/Reveal";
import { EntetePage, TitreSection } from "@/components/Ui";
import { communesGarde, photos } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Un échange téléphonique ne vous engage à rien : appelez, écrivez ou envoyez un message. Garde d'animaux et conseil à l'adoption autour de Rennes (35).",
  alternates: { canonical: "/contact" },
  openGraph: openGraph({
    title: "Contact — Les Gambadeurs",
    description: "Par téléphone, par e-mail ou par message : un échange ne vous engage à rien.",
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
        surtitre="Contact"
        titre="On en parle ?"
        fil="Contact"
        href="/contact"
        intro={
          <>
            <p>Un échange téléphonique ne vous engage à rien.</p>
            <p>
              Parlez-moi de votre animal, de vos besoins de garde, de votre projet d&apos;adoption, ou
              tout simplement de ce qui vous fait hésiter (à adopter… ou à me solliciter). On avisera
              ensemble.
            </p>
          </>
        }
        photo={photos.fondatriceTerrasse.src}
        photoAlt={photos.fondatriceTerrasse.alt}
        photoPosition="55% 50%"
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
              // ⚠️ À VALIDER — le texte de cette carte était tronqué dans le document de correctifs.
              label: "Par message",
              valeur: site.contact.phone,
              href: `sms:${site.contact.phoneHref}`,
              note: "Un SMS avec vos dates et votre animal, et je vous recontacte dès que possible.",
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
      <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28">
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
                Au départ de {site.zone.ville}, au nord de Rennes.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-creme/75">
                <strong className="font-medium text-creme">Garde d&apos;animaux</strong> : dans un
                rayon d&apos;environ {site.zone.rayonGardeKm} km autour de {site.zone.ville}.
                <br />
                <strong className="font-medium text-creme">Conseil à l&apos;adoption</strong> : sur
                tout le département {site.zone.departementCode}.
                <br />
                Au-delà de ces rayons, une indemnité kilométrique de {site.zone.indemniteKm}{" "}
                supplémentaire est appliquée.
              </p>
            </div>
            <Reveal delai={100}>
              <p className="mb-4 text-[11px] tracking-[0.24em] text-tendre uppercase">
                Communes desservies pour la garde
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {communesGarde.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-creme/20 px-4 py-2 text-[13px] text-creme/80"
                  >
                    {c}
                  </li>
                ))}
                <li className="rounded-full bg-creme/10 px-4 py-2 text-[13px] text-creme/70">
                  et les communes alentour
                </li>
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
