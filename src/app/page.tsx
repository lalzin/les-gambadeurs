import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Annotation from "@/components/Annotation";
import { Champ, Collines, Epi, Tournesol } from "@/components/Botanique";
import Reveal from "@/components/Reveal";
import { Bouton, PhotoArche, TitreSection } from "@/components/Ui";
import { introAccueil, manifeste, manifesteChute, photos, piliers } from "@/lib/content";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Garde d'animaux en Ille-et-Vilaine`,
  description:
    "Garde de chiens, chats et NAC à domicile et conseil à l'adoption, à Vignoc et autour de Rennes (35). Premier échange téléphonique offert.",
  alternates: { canonical: "/" },
  openGraph: openGraph({
    title: `${site.name} — Garde d'animaux & conseil à l'adoption`,
    description:
      "Garde de chiens, chats et NAC à domicile et conseil à l'adoption en Ille-et-Vilaine. Premier échange offert.",
    url: "/",
  }),
};

const paragraphesIntro = introAccueil.split("\n");

export default function Accueil() {
  return (
    <>
      {/* ============================================================ */}
      {/* BANNIÈRE                                                     */}
      {/* ============================================================ */}
      <section className="relative min-h-[92svh] overflow-hidden pt-[112px] pb-40 sm:pt-[136px]">
        {/* ciel */}
        <div
          aria-hidden
          className="absolute inset-0 -z-30 bg-[radial-gradient(130%_105%_at_72%_-8%,#fdf5e6_0%,#fbf6ee_42%,var(--color-papier)_100%)]"
        />
        {/* soleil bas */}
        <div
          aria-hidden
          className="absolute top-[8%] right-[6%] -z-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(215,225,177,0.55),transparent_66%)] blur-2xl"
        />

        {/* vidéo d'ambiance optionnelle (voir site.heroVideo) */}
        {site.heroVideo && (
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            poster={photos.suzetteBalcon.src}
          >
            <source src={site.heroVideo} type="video/mp4" />
          </video>
        )}

        {/* collines + champ */}
        <Collines className="absolute inset-x-0 bottom-0 -z-10 h-[34vh] w-full" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-2 -z-10 h-44">
          <Champ className="h-full w-full" densite={24} />
        </div>

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <p className="surtitre flex items-center gap-3">
                Ille-et-Vilaine · Vignoc &amp; alentours
                <span className="filet hidden w-14 sm:block" />
              </p>
            </Reveal>

            <Reveal delai={90}>
              <h1 className="mt-7">
                <span className="titre block text-[clamp(3.2rem,9vw,6.6rem)]">
                  Les Gambadeurs
                </span>
                <span className="mt-6 block max-w-lg font-sans text-[clamp(1.05rem,2.3vw,1.5rem)] leading-snug font-light text-encre/80">
                  Garde d&apos;animaux &amp; conseil à l&apos;adoption
                  <span className="mt-1 block text-encre/45">pour les chiens, les chats et les NAC</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delai={260}>
              <div className="mt-11 flex flex-wrap items-center gap-4">
                <Bouton href={site.contact.calendly} externe>
                  Prendre rendez-vous
                </Bouton>
                <Bouton href="/garde-d-animaux" variante="ligne">
                  Découvrir les prestations
                </Bouton>
              </div>
            </Reveal>

            <Reveal delai={360}>
              <Annotation direction="haut-droite" className="mt-10 max-w-xs" rotation={-2}>
                {"Le premier échange\ntéléphonique est offert"}
              </Annotation>
            </Reveal>
          </div>

          {/* photo principale */}
          <Reveal delai={220} className="relative">
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="arche relative aspect-[4/5] w-full overflow-hidden bg-lin shadow-[0_60px_100px_-60px_var(--color-brun)]">
                <Image
                  src={photos.suzetteBalcon.src}
                  alt={photos.suzetteBalcon.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 88vw, 440px"
                  className="derive object-cover"
                  style={{ objectPosition: "50% 62%" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brun/30 via-transparent to-transparent" />
              </div>

              {/* épi décoratif qui déborde */}
              <Epi
                className="tige absolute -bottom-6 -left-10 h-40 w-14 text-sable"
                seed={12}
                grains={7}
                opacite={0.9}
              />
              <Tournesol
                className="absolute -top-6 -right-4 h-16 w-16 rotate-12"
                couleurPetale="var(--color-sable)"
                couleurCoeur="var(--color-brun)"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTRODUCTION                                                 */}
      {/* ============================================================ */}
      <section className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative">
            <div className="relative">
              <PhotoArche
                src={photos.joya.src}
                alt={photos.joya.alt}
                className="aspect-[4/5] w-full max-w-[400px]"
                sizes="(max-width: 1024px) 88vw, 400px"
              />
              <div className="absolute -right-4 -bottom-8 hidden max-w-[210px] rounded-[22px] border border-brun/12 bg-papier p-5 shadow-[0_24px_48px_-32px_var(--color-brun)] sm:block">
                <p className="font-hand text-[22px] leading-tight text-terre">
                  « Il ne s&apos;agit pas juste de les aimer, mais de les comprendre profondément. »
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:pt-8">
            <TitreSection
              surtitre="Une mission"
              titre={
                <>
                  Améliorer le quotidien de nos animaux, <span className="souligne">et le vôtre</span>.
                </>
              }
            />
            <Reveal delai={120}>
              <div className="prose-gambadeurs mt-8 text-[17px]">
                {paragraphesIntro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delai={200}>
              <div className="mt-10">
                <Bouton href="/qui-suis-je" variante="ligne">
                  Qui est derrière Les Gambadeurs
                </Bouton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LES DEUX MÉTIERS                                             */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <TitreSection
          surtitre="Deux façons de vous accompagner"
          titre="Pendant votre absence, et bien avant."
          align="center"
          intro="Garder un animal, c'est veiller sur lui. Vous accompagner, c'est faire en sorte que sa vie entière réponde à ses besoins. Les Gambadeurs fait les deux."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              href: "/garde-d-animaux",
              surtitre: "En votre absence",
              titre: "Garde d'animaux",
              texte:
                "Visites à domicile, promenades, séjours en pension. Votre animal reste dans ses repères, garde ses habitudes, et vous recevez des nouvelles régulières en temps réel.",
              photo: photos.zen,
              position: "50% 40%",
            },
            {
              href: "/conseil-a-l-adoption",
              surtitre: "Avant l'adoption",
              titre: "Conseil à l'adoption",
              texte:
                "Avant de choisir, on regarde votre vie en face : logement, rythme, budget, environnement. Pour que l'animal qui arrive dans votre vie soit le bon, et qu'il reste.",
              photo: photos.udonRepos,
              position: "55% 45%",
            },
          ].map((c, i) => (
            <Reveal key={c.href} delai={i * 130}>
              <Link
                href={c.href}
                className="group relative block overflow-hidden rounded-[30px] border border-brun/12 bg-papier transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_44px_80px_-50px_var(--color-brun)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={c.photo.src}
                    alt={c.photo.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 46vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    style={{ objectPosition: c.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brun/55 via-brun/5 to-transparent" />
                  <span className="absolute bottom-5 left-6 text-[11px] tracking-[0.24em] text-creme/80 uppercase">
                    {c.surtitre}
                  </span>
                </div>
                <div className="p-7 sm:p-9">
                  <h3 className="titre text-[28px]">{c.titre}</h3>
                  <p className="prose-gambadeurs mt-4 text-[15.5px]">{c.texte}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-terre">
                    Voir les prestations &amp; tarifs
                    <span className="transition-transform duration-400 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* PILIERS                                                      */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-32">
        <TitreSection surtitre="Notre façon de faire" titre="Trois convictions, appliquées tous les jours." />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {piliers.map((p, i) => (
            <Reveal key={p.titre} delai={i * 110} className="relative">
              <span className="titre block text-[46px] text-lin">0{i + 1}</span>
              <h3 className="titre mt-3 text-[22px]">{p.titre}</h3>
              <p className="prose-gambadeurs mt-4 text-[15.5px]">{p.texte}</p>
              <span className="filet mt-8 block w-16" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* GALERIE                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-creme py-28 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <TitreSection
            surtitre="Nos gambadeurs"
            titre="Ceux dont on prend soin."
            align="center"
            intro="Suzette, Joya, Zen, Udon, Bounty… chacun avec ses manies, ses horaires et ses coins préférés."
          />
        </div>

        <div className="mt-14 flex gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:thin]">
          {[
            photos.suzettePortrait,
            photos.udonArbre,
            photos.bountyPortrait,
            photos.suzetteCanape,
            photos.zen,
            photos.bountyMarche,
            photos.joya,
          ].map((p, i) => (
            <Reveal
              key={p.src}
              delai={i * 60}
              className={`relative aspect-[3/4] w-[230px] shrink-0 overflow-hidden rounded-[22px] bg-lin shadow-[0_28px_54px_-40px_var(--color-brun)] sm:w-[270px] ${
                i % 2 === 1 ? "sm:mt-10" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="270px"
                className="object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* MANIFESTE                                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-mousse py-28 text-creme sm:py-36">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-28 opacity-25">
          <Champ className="h-full w-full" densite={24} />
        </div>

        <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="surtitre text-tendre">Notre manifeste</p>
            <h2 className="titre mt-6 text-[clamp(2.2rem,5vw,3.4rem)] text-creme">
              Aimer ne signifie pas toujours comprendre.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-9">
            {manifeste.map((strophe, i) => (
              <Reveal key={i} delai={i * 70}>
                <p className="text-[16.5px] leading-[1.85] text-creme/78 sm:text-[17.5px]">
                  {strophe.map((ligne, j) => (
                    <span key={j} className="block text-balance">
                      {ligne}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delai={200}>
            <p className="mt-16 font-hand text-[clamp(1.7rem,3.6vw,2.5rem)] leading-tight text-tendre">
              {manifesteChute}
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
