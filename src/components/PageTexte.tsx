import type { ReactNode } from "react";
import { Epi } from "@/components/Botanique";
import { FilAriane } from "@/components/Ui";

/**
 * Gabarit commun aux pages de texte (mentions légales, confidentialité,
 * conditions générales) : colonne étroite, lecture confortable.
 */
export default function PageTexte({
  titre,
  href,
  chapo,
  maj,
  children,
}: {
  titre: string;
  href: string;
  chapo?: string;
  /** date de dernière mise à jour, ex. « août 2026 » */
  maj?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-[128px] pb-4 sm:pt-[152px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_80%_-20%,var(--color-creme),transparent_60%)]"
        />
        <Epi className="absolute top-32 right-[6%] -z-10 hidden h-36 w-12 text-sable/40 lg:block" seed={5} />

        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <FilAriane page={titre} href={href} />
          <h1 className="titre mt-8 text-[clamp(2.2rem,5.4vw,3.4rem)]">{titre}</h1>
          {chapo && <p className="prose-gambadeurs mt-6 text-[17px]">{chapo}</p>}
          {maj && <p className="mt-6 text-[12.5px] text-sable">Dernière mise à jour : {maj}</p>}
          <span className="filet mt-10 block w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-[820px] px-5 pb-28 sm:px-8">{children}</section>
    </>
  );
}

/** Un bloc de texte légal : titre + contenu. */
export function BlocTexte({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="titre text-[24px]">{titre}</h2>
      <div className="prose-gambadeurs mt-4 text-[15.5px]">{children}</div>
    </div>
  );
}

/** Liste « clé : valeur » utilisée pour les informations d'identité. */
export function ListeInfos({ lignes }: { lignes: [string, string][] }) {
  return (
    <dl className="mt-5 divide-y divide-brun/10 border-y border-brun/10">
      {lignes.map(([cle, valeur]) => (
        <div key={cle} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
          <dt className="w-56 shrink-0 text-[13px] tracking-[0.08em] text-sable uppercase">{cle}</dt>
          <dd className="text-[15.5px] text-encre/85">{valeur}</dd>
        </div>
      ))}
    </dl>
  );
}
