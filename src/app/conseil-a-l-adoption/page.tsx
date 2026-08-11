import type { Metadata } from "next";
import Annotation from "@/components/Annotation";
import { Champ, Epi, Tournesol } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import {
  BandeauRdv,
  Bouton,
  CartePrestation,
  EntetePage,
  PhotoArche,
  TitreSection,
} from "@/components/Ui";
import {
  adoptionPourquoi,
  communes,
  offreLancement,
  photos,
  prestationsAdoption,
} from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conseil à l'adoption d'un animal (35)",
  description:
    "Avant d'adopter un chien, un chat ou un NAC : entretien à domicile, livret sur mesure et guide d'accueil. Ille-et-Vilaine, dès 48 €.",
  alternates: { canonical: "/conseil-a-l-adoption" },
  openGraph: openGraph({
    title: "Conseil à l'adoption — Les Gambadeurs",
    description:
      "Choisir un animal qui correspond vraiment à votre vie. Entretien à domicile, livret sur mesure, guide d'accueil.",
    url: "/conseil-a-l-adoption",
  }),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conseil à l'adoption",
  serviceType: "Conseil avant adoption d'un animal de compagnie",
  provider: { "@id": `${site.url}/#entreprise` },
  areaServed: { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations de conseil à l'adoption",
    itemListElement: prestationsAdoption.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.nom, description: p.detail },
      ...(p.prixPromo || (p.prix && p.prix !== "Offert")
        ? {
            price: (p.prixPromo ?? p.prix ?? "").replace(/[^\d]/g, ""),
            priceCurrency: "EUR",
          }
        : {}),
    })),
  },
};

export default function ConseilAdoption() {
  return (
    <>
      <EntetePage
        surtitre="Avant d'adopter"
        titre="Conseil à l'adoption"
        href="/conseil-a-l-adoption"
        intro="Adopter, ce n'est pas choisir une race sur une photo : c'est engager dix à quinze ans de quotidien. On regarde votre vie telle qu'elle est, et on cherche ensemble l'animal qui y trouvera sa place."
        photo={photos.udonArbre.src}
        photoAlt={photos.udonArbre.alt}
        photoPosition="62% 45%"
      />

      {/* ============================================================ */}
      {/* POURQUOI                                                     */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 pt-16 sm:px-8 sm:pt-24">
        <TitreSection
          surtitre="Pourquoi se faire accompagner"
          titre="Un coup de cœur ne remplace pas un projet."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {adoptionPourquoi.map((p, i) => (
            <Reveal key={p.titre} delai={i * 110}>
              <span className="filet block w-14" />
              <h3 className="titre mt-6 text-[21px]">{p.titre}</h3>
              <p className="prose-gambadeurs mt-4 text-[15.5px]">{p.texte}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* PARCOURS + TARIFS                                            */}
      {/* ============================================================ */}
      <section className="relative mt-28 overflow-hidden bg-creme py-24 sm:py-28">
        <Tournesol
          className="absolute -top-8 -left-10 h-44 w-44 opacity-25"
          couleurPetale="var(--color-sable)"
          couleurCoeur="var(--color-brun)"
        />
        <Epi className="absolute right-[5%] -bottom-6 h-40 w-14 text-olive/50" seed={6} />

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <TitreSection
              surtitre="Le parcours & les tarifs"
              titre="Quatre étapes, à la carte."
              intro="Chaque étape se prend indépendamment. Vous pouvez vous arrêter après l'entretien, ou aller jusqu'au guide d'accueil : c'est vous qui décidez jusqu'où l'accompagnement va."
            />

            {offreLancement.actif && (
              <Reveal delai={120} className="shrink-0">
                <div className="relative rounded-[24px] bg-sable px-7 py-6 text-brun">
                  <p className="text-[11px] tracking-[0.22em] uppercase">Offre de lancement</p>
                  <p className="titre mt-2 text-[42px] leading-none">{offreLancement.remise}</p>
                  <p className="mt-2 text-[13px] text-brun/75">Jusqu&apos;au {offreLancement.jusquau}</p>
                </div>
              </Reveal>
            )}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {prestationsAdoption.map((p, i) => (
              <CartePrestation key={p.nom} p={p} index={i} promo={offreLancement.actif} />
            ))}
          </div>

          <Reveal delai={140}>
            <div className="mt-10 flex items-start gap-4">
              <Annotation direction="droite" className="max-w-[260px]" rotation={-2}>
                {"Vous êtes accompagné.e\npour vos premiers pas ensemble"}
              </Annotation>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CE QUE VOUS REPARTEZ AVEC                                    */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <PhotoArche
              src={photos.suzettePortrait.src}
              alt={photos.suzettePortrait.alt}
              className="aspect-[4/5] w-full max-w-[420px]"
              position="50% 35%"
              sizes="(max-width: 1024px) 88vw, 420px"
            />
          </Reveal>

          <div>
            <TitreSection
              surtitre="Ce qu'il vous reste après"
              titre="Un livret, un carnet d'adresses, et des repères pour longtemps."
              intro="L'objectif n'est pas que vous ayez besoin de moi. C'est que vous sachiez décider seul.e la prochaine fois, pour ce compagnon-là comme pour les suivants."
            />
            <ul className="mt-10 space-y-5">
              {[
                {
                  t: "Un profil d'animal argumenté",
                  d: "Espèce, race, âge, sexe, origine : ce qui correspond à votre situation, et surtout pourquoi.",
                },
                {
                  t: "Un budget réel",
                  d: "Alimentation, vétérinaire, matériel, garde, imprévus : les chiffres avant l'engagement, pas après.",
                },
                {
                  t: "Une checklist d'arrivée",
                  d: "Le matériel utile, celui dont on peut se passer, et l'aménagement des premiers jours.",
                },
                {
                  t: "Un carnet d'adresses local",
                  d: "Vétérinaire, éducateur, toiletteur, associations sérieuses près de chez vous.",
                },
              ].map((i, k) => (
                <Reveal key={i.t} delai={k * 80} as="li" className="border-l border-lin pl-5">
                  <h3 className="titre text-[19px]">{i.t}</h3>
                  <p className="prose-gambadeurs mt-1.5 text-[15px]">{i.d}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ZONE                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-brun py-24 text-creme">
        <div className="absolute inset-x-0 bottom-0 h-28 opacity-20">
          <Champ className="h-full w-full" densite={22} />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="surtitre text-sable">Communes desservies</p>
              <h2 className="titre mt-5 text-[clamp(2rem,4.4vw,3rem)] text-creme">
                Sur l&apos;ensemble de l&apos;Ille-et-Vilaine.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-creme/75">
                Ces prestations d&apos;accompagnement sont proposées sur tout le département 35. Au-delà
                de {site.zone.rayonKm} km au départ de {site.zone.ville}, une indemnité kilométrique de{" "}
                {site.zone.indemniteKm} supplémentaire est appliquée.
              </p>
              <div className="mt-9">
                <Bouton href={site.contact.calendly} externe variante="clair">
                  Réserver le premier échange
                </Bouton>
              </div>
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
                <li className="rounded-full bg-creme/10 px-4 py-2 text-[13px] text-creme/70">
                  et tout le département 35
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RENVOI VERS LA FAQ                                           */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start gap-7 rounded-[28px] border border-brun/12 bg-creme/60 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="surtitre">Questions fréquentes</p>
            <h2 className="titre mt-3 text-[26px]">Un doute avant de vous lancer&nbsp;?</h2>
            <p className="prose-gambadeurs mt-3 max-w-xl text-[15.5px]">
              Neutralité du conseil, NAC, budget, cohabitation avec un animal déjà présent&nbsp;: les
              questions qui reviennent le plus sont réunies dans la FAQ.
            </p>
          </div>
          <Bouton href="/faq" variante="ligne" className="shrink-0">
            Voir la FAQ
          </Bouton>
        </Reveal>
      </section>

      <BandeauRdv
        titre="Un projet d'adoption ?"
        texte="Le premier échange téléphonique est offert. On fait le point sur votre envie, votre quotidien, et ce qui est réaliste."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
