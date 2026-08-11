import type { Metadata } from "next";
import Image from "next/image";
import Annotation from "@/components/Annotation";
import { Champ, Patte } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import { BandeauRdv, EntetePage, PhotoArche, TitreSection } from "@/components/Ui";
import { fondatrice, photos, plateforme } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qui suis-je — ACACED & besoins de l'animal",
  description:
    "Titulaire de l'ACACED et formée aux besoins biologiques des animaux de compagnie : le parcours et les convictions derrière Les Gambadeurs (35).",
  alternates: { canonical: "/qui-suis-je" },
  openGraph: openGraph({
    title: "Qui suis-je — Les Gambadeurs",
    description: "Le parcours, l'ACACED et les convictions derrière Les Gambadeurs.",
    url: "/qui-suis-je",
  }),
};

export default function QuiSuisJe() {
  const prenom = fondatrice.prenom.trim();

  /**
   * Balisage Person — activé automatiquement dès que `fondatrice.prenom`
   * est renseigné dans src/lib/content.ts.
   */
  const personneSchema = prenom
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: prenom,
        jobTitle: fondatrice.role,
        worksFor: { "@id": `${site.url}/#entreprise` },
        url: `${site.url}/qui-suis-je`,
        knowsAbout: fondatrice.competences.map((c) => c.titre),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "ACACED",
        },
      }
    : null;

  return (
    <>
      <EntetePage
        surtitre={fondatrice.role}
        titre={prenom ? `Bonjour, moi c'est ${prenom}.` : "Derrière Les Gambadeurs"}
        fil="Qui suis-je"
        href="/qui-suis-je"
        intro={fondatrice.accroche}
        photo={photos.suzetteCanape.src}
        photoAlt={photos.suzetteCanape.alt}
        photoPosition="55% 40%"
      />

      {/* ============================================================ */}
      {/* PRÉSENTATION                                                 */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <TitreSection surtitre="Mon parcours" titre="Comment j'en suis arrivée là." />
            <Reveal delai={100}>
              <div className="prose-gambadeurs mt-8 max-w-xl text-[17px]">
                {fondatrice.paragraphes.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delai={180}>
              <Annotation direction="haut-droite" className="mt-10 max-w-[280px]" rotation={-2}>
                {"Celui qui en sait plus,\nmais qui marche à côté de vous"}
              </Annotation>
            </Reveal>
          </div>

          <Reveal delai={140} className="relative">
            <PhotoArche
              src={photos.joya.src}
              alt={photos.joya.alt}
              className="ml-auto aspect-[4/5] w-full max-w-[400px]"
              position="55% 40%"
              sizes="(max-width: 1024px) 88vw, 400px"
            />
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPÉTENCES                                                  */}
      {/* ============================================================ */}
      <section className="relative mt-28 overflow-hidden bg-creme py-24 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <TitreSection
            surtitre="Mes compétences"
            titre="Ce sur quoi je m'appuie."
            intro="Une certification officielle, et une formation continue sur ce qui compte vraiment au quotidien : ce dont l'animal a besoin, espèce par espèce."
          />

          {/* Bloc ACACED, mis en avant */}
          <Reveal delai={80}>
            <div className="mt-14 flex flex-col gap-7 rounded-[28px] border border-brun/12 bg-papier p-8 sm:flex-row sm:items-center sm:p-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-tendre/60">
                <Patte className="h-9 w-9 text-mousse" />
              </div>
              <div>
                <p className="surtitre">Certification officielle</p>
                <h3 className="titre mt-2 text-[26px]">{fondatrice.competences[0].titre}</h3>
                <p className="prose-gambadeurs mt-3 max-w-2xl text-[15.5px]">
                  {fondatrice.competences[0].detail}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fondatrice.competences.slice(1).map((c, i) => (
              <Reveal
                key={c.titre}
                delai={i * 90}
                className="rounded-[24px] border border-brun/10 bg-papier/70 p-7"
              >
                <h3 className="titre text-[20px]">{c.titre}</h3>
                <p className="prose-gambadeurs mt-3 text-[15px]">{c.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPÉRIENCES                                                  */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <PhotoArche
              src={photos.suzettePortrait.src}
              alt={photos.suzettePortrait.alt}
              className="aspect-[4/5] w-full max-w-[380px]"
              position="50% 30%"
              sizes="(max-width: 1024px) 88vw, 380px"
            />
          </Reveal>

          <div>
            <TitreSection surtitre="Mes expériences" titre="Le terrain, avant tout." />
            <ol className="mt-12 space-y-10">
              {fondatrice.experiences.map((e, i) => (
                <Reveal key={`${e.titre}-${i}`} delai={i * 90} as="li" className="relative pl-8">
                  <span className="absolute top-2 left-0 h-2.5 w-2.5 rounded-full bg-olive" />
                  <span
                    className="absolute top-6 left-[4.5px] h-[calc(100%+1.5rem)] w-px bg-lin last:hidden"
                    aria-hidden
                  />
                  <p className="text-[12px] tracking-[0.2em] text-sable uppercase">{e.periode}</p>
                  <h3 className="titre mt-2 text-[21px]">{e.titre}</h3>
                  <p className="prose-gambadeurs mt-2 text-[15px]">{e.detail}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PLATEFORME DE MARQUE                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-mousse py-28 text-creme">
        <div className="absolute inset-x-0 bottom-0 h-28 opacity-25">
          <Champ className="h-full w-full" densite={22} />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="surtitre text-tendre">Ce qui guide chaque décision</p>
            <h2 className="titre mt-5 text-[clamp(2rem,4.6vw,3.2rem)] text-creme">
              Ma posture : le guide.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-creme/80">{plateforme.posture}</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { t: "Vision", c: plateforme.vision },
              { t: "Mission", c: plateforme.mission },
              { t: "Promesse", c: plateforme.promesse },
            ].map((b, i) => (
              <Reveal
                key={b.t}
                delai={i * 100}
                className="rounded-[24px] border border-creme/15 bg-creme/5 p-7"
              >
                <p className="text-[11px] tracking-[0.24em] text-sable uppercase">{b.t}</p>
                <p className="mt-4 text-[15.5px] leading-relaxed text-creme/85">{b.c}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Reveal>
              <p className="text-[11px] tracking-[0.24em] text-sable uppercase">Personnalité</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {plateforme.personnalite.map((p) => (
                  <li key={p} className="rounded-full border border-creme/20 px-4 py-2 text-[13px]">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delai={100}>
              <p className="text-[11px] tracking-[0.24em] text-sable uppercase">Valeurs</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {plateforme.valeurs.map((p) => (
                  <li key={p} className="rounded-full bg-creme/10 px-4 py-2 text-[13px]">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GALERIE                                                      */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8">
        <TitreSection
          surtitre="Au quotidien"
          titre="Quelques compagnons croisés en chemin."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {[photos.bountyPortrait, photos.suzetteBalcon, photos.udonArbre, photos.zen].map((p, i) => (
            <Reveal
              key={p.src}
              delai={i * 80}
              className={`relative aspect-[3/4] overflow-hidden rounded-[20px] bg-lin ${
                i % 2 === 1 ? "md:mt-8" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {personneSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personneSchema) }}
        />
      )}

      <BandeauRdv
        titre="Une question sur votre animal ?"
        texte="Même sans projet de garde ou d'adoption : si quelque chose vous interroge dans son comportement, appelez, on en parle."
      />
    </>
  );
}
