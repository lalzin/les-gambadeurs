import type { Metadata } from "next";
import { Epi } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import { Bouton, EntetePage, Faq, schemaFaq } from "@/components/Ui";
import { faqAdoption, faqGarde, photos } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Animaux gardés, communes desservies, traitements, tarifs, délais de réservation : les réponses aux questions les plus posées sur la garde et l'adoption.",
  alternates: { canonical: "/faq" },
  openGraph: openGraph({
    title: "Questions fréquentes — Les Gambadeurs",
    description:
      "Les réponses aux questions les plus posées sur la garde d'animaux et le conseil à l'adoption en Ille-et-Vilaine.",
    url: "/faq",
  }),
};

const faqSchema = schemaFaq([...faqGarde, ...faqAdoption]);

export default function FaqPage() {
  return (
    <>
      <EntetePage
        surtitre="Bon à savoir"
        titre="Questions fréquentes"
        href="/faq"
        intro="Tout ce qu'on me demande le plus souvent, rangé en deux temps : la garde de votre animal pendant votre absence, et l'accompagnement avant, pendant et/ou après une adoption. Si votre question n'y est pas, le téléphone reste le plus simple."
        photo={photos.zen.src}
        photoAlt={photos.zen.alt}
        photoPosition="52% 40%"
      />

      {/* ============================================================ */}
      {/* GARDE D'ANIMAUX                                              */}
      {/* ============================================================ */}
      <Faq
        items={faqGarde}
        surtitre="Garde d'animaux"
        titre="Confier son animal pendant son absence."
        className="pt-10 sm:pt-16"
        avecSchema={false}
      />

      {/* ============================================================ */}
      {/* CONSEIL À L'ADOPTION                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-creme">
        <Epi className="absolute -bottom-6 left-[4%] h-40 w-14 text-sable/45" seed={4} />
        <Epi className="absolute right-[5%] -bottom-4 h-32 w-12 text-olive/45" seed={9} />
        <Faq
          items={faqAdoption}
          surtitre="Conseil à l'adoption"
          titre={
            <>
              Se préparer avant d&apos;adopter.
              <span className="mt-3 block text-[0.62em] text-brun/70">
                Se faire accompagner pendant et juste après l&apos;adoption.
              </span>
            </>
          }
          className="relative"
          avecSchema={false}
        />
      </section>

      {/* ============================================================ */}
      {/* RENVOIS                                                      */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="surtitre justify-center">Votre question n&apos;y est pas ?</p>
          <h2 className="titre mt-5 text-[clamp(1.8rem,4vw,2.6rem)]">
            Le plus simple reste d&apos;appeler.
          </h2>
          <p className="prose-gambadeurs mt-5 text-[16.5px]">
            Chaque animal a ses particularités, et aucune FAQ ne remplace deux minutes de
            conversation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="titre text-[26px] text-terre transition-colors hover:text-brun"
            >
              {site.contact.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Bouton href="/garde-d-animaux" variante="ligne">
              Les prestations de garde
            </Bouton>
            <Bouton href="/conseil-a-l-adoption" variante="ligne">
              Le conseil à l&apos;adoption
            </Bouton>
          </div>
        </Reveal>
      </section>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
