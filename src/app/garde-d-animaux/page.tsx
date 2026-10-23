import type { Metadata } from "next";
import Annotation from "@/components/Annotation";
import { Epi, Patte } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import {
  BandeauRdv,
  Bouton,
  CartePrestation,
  EntetePage,
  PhotoArche,
  TitreSection,
} from "@/components/Ui";
import { gardeDeroule, photos, prestationsGarde } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garde d'animaux à domicile (35)",
  description:
    "Visites, promenades et séjours pour chiens, chats et NAC à votre domicile, autour de Vignoc et de Rennes. Nouvelles et photos à chaque passage.",
  alternates: { canonical: "/garde-d-animaux" },
  openGraph: openGraph({
    title: "Garde d'animaux à domicile en Ille-et-Vilaine | Les Gambadeurs",
    description:
      "Visites, promenades et séjours pour chiens, chats et NAC, dans leurs repères. Ille-et-Vilaine.",
    url: "/garde-d-animaux",
  }),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garde d'animaux à domicile",
  serviceType: "Garde d'animaux de compagnie",
  provider: { "@id": `${site.url}/#entreprise` },
  areaServed: { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
  audience: { "@type": "Audience", audienceType: "Propriétaires de chiens, chats et NAC" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations de garde",
    itemListElement: prestationsGarde.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.nom, description: p.detail },
    })),
  },
};

export default function GardeAnimaux() {
  return (
    <>
      <EntetePage
        surtitre="En votre absence"
        titre="Garde d'animaux"
        href="/garde-d-animaux"
        intro="Votre animal reste chez lui, dans ses odeurs, avec ses horaires et ses habitudes. Je passe, je m'occupe de tout, et vous savez exactement comment il va, sans avoir à demander."
        photo={photos.suzettePorte.src}
        photoAlt={photos.suzettePorte.alt}
        photoPosition="60% 50%"
      />

      {/* ============================================================ */}
      {/* PRESTATIONS                                                  */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 pt-16 sm:px-8 sm:pt-24">
        <TitreSection
          surtitre="Les prestations"
          titre="Ce que je propose."
          intro="Chaque formule s'adapte à l'espèce, à l'âge et au caractère de votre animal. La fréquence, la durée et le tarif se calent lors du premier échange, qui est offert."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prestationsGarde.map((p, i) => (
            <CartePrestation key={p.id} p={p} index={i} />
          ))}
        </div>

        <Reveal delai={120}>
          <div className="mt-10 flex flex-col items-start gap-6 rounded-[26px] border border-dashed border-sable/50 bg-creme/50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[15px] leading-relaxed text-encre/75">
              En cas de demande particulière ou de récurrence,{" "}
              <strong className="font-medium text-brun">les tarifs pourront être établis sur mesure</strong>{" "}
              selon le nombre de passages, la durée et les particularités de votre animal (traitement,
              convalescence, plusieurs animaux au foyer). Un devis clair vous est envoyé avant toute
              réservation.
            </p>
            {/* Coordonnées directes à la place du bouton « Demander un devis » */}
            <div className="shrink-0 space-y-1.5 sm:text-right">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="titre block text-[24px] transition-colors hover:text-terre"
              >
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="block text-[14.5px] text-terre underline-offset-4 hover:underline"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/* DÉROULÉ                                                      */}
      {/* ============================================================ */}
      <section className="relative mt-28 overflow-hidden bg-creme py-24 sm:py-28">
        <Epi className="absolute -bottom-6 left-[4%] h-40 w-14 text-sable/50" seed={4} />
        <Epi className="absolute -bottom-4 right-[6%] h-32 w-12 text-olive/50" seed={9} />

        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <TitreSection surtitre="Comment ça se passe" titre="Quatre temps, aucune surprise." align="center" />

          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {gardeDeroule.map((e, i) => (
              <Reveal key={e.titre} delai={i * 110} as="li" className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brun/20 font-hand text-[22px] text-terre">
                  {i + 1}
                </span>
                <h3 className="titre mt-5 text-[21px]">{e.titre}</h3>
                <p className="prose-gambadeurs mt-3 text-[15px]">{e.texte}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CE QUI EST INCLUS / PHOTO                                    */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <TitreSection
              surtitre="Toujours compris"
              titre="Les choyer, mais aussi les observer."
              intro="Nourrir et sortir un animal, c'est le minimum. Le reste du temps, j'observe : appétit, démarche, propreté, humeur. Ce sont ces détails qui permettent de repérer tôt si quelque chose cloche."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Surveillance de l'appétit et du transit",
                "Vérification du pelage après sorties (tique, épillet, etc.)",
                "Évaluation du comportement global",
              ].map((i) => (
                <Reveal key={i} as="li" className="flex items-start gap-3 text-[15px] text-encre/80">
                  <Patte className="mt-1 h-4 w-4 shrink-0 text-olive" />
                  {i}
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delai={150} className="relative">
            <PhotoArche
              src={photos.suzette.src}
              alt={photos.suzette.alt}
              className="aspect-[4/5] w-full"
              position="52% 42%"
              sizes="(max-width: 1024px) 88vw, 440px"
            />
            <Annotation direction="haut-gauche" className="mt-6 ml-4 max-w-[240px]" rotation={-2}>
              {"Chez lui, il garde\nson rythme et ses repères"}
            </Annotation>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RENVOI VERS LA FAQ                                           */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start gap-7 rounded-[28px] border border-brun/12 bg-creme/60 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="surtitre">Questions fréquentes</p>
            <h2 className="titre mt-3 text-[26px]">
              Traitements, délais de réservation&nbsp;?
            </h2>
            <p className="prose-gambadeurs mt-3 max-w-xl text-[15.5px]">
              Les réponses aux questions les plus posées sur la garde sont regroupées dans la FAQ.
            </p>
          </div>
          <Bouton href="/faq" variante="ligne" className="shrink-0">
            Voir la FAQ
          </Bouton>
        </Reveal>
      </section>

      <BandeauRdv
        titre="Vous partez bientôt ?"
        texte="Parlez-moi de vos besoins et de votre animal. Vous pouvez m'appeler. Un simple échange téléphonique ne vous engage à rien !"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
