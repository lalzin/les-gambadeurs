import { Champ, Epi } from "@/components/Botanique";
import { Bouton } from "@/components/Ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32 pb-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-80">
        <Champ className="h-full w-full" densite={22} />
      </div>
      <Epi className="tige absolute top-24 right-[12%] h-40 w-14 text-sable/50" seed={8} />

      <div className="relative mx-auto max-w-[720px] px-5 text-center sm:px-8">
        <p className="surtitre justify-center">Page introuvable</p>
        <h1 className="titre mt-6 text-[clamp(2.6rem,7vw,4.6rem)]">
          Celle-là a gambadé un peu trop loin.
        </h1>
        <p className="prose-gambadeurs mx-auto mt-6 max-w-md text-[17px]">
          La page que vous cherchez n&apos;existe pas, ou a changé d&apos;adresse. Revenons sur le
          chemin.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Bouton href="/">Retour à l&apos;accueil</Bouton>
          <Bouton href="/contact" variante="ligne">
            Nous contacter
          </Bouton>
        </div>
      </div>
    </section>
  );
}
