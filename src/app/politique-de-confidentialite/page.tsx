import type { Metadata } from "next";
import PageTexte, { BlocTexte, ListeInfos } from "@/components/PageTexte";
import { entreprise, ou } from "@/lib/legal";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données sont collectées sur ce site, pourquoi, combien de temps elles sont conservées et comment exercer vos droits RGPD auprès des Gambadeurs.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: openGraph({
    title: "Politique de confidentialité | Les Gambadeurs",
    description: "Données collectées, durées de conservation et exercice de vos droits RGPD.",
    url: "/politique-de-confidentialite",
  }),
};

export default function Confidentialite() {
  return (
    <PageTexte
      titre="Politique de confidentialité"
      href="/politique-de-confidentialite"
      chapo="Ce site collecte le strict minimum. Aucune publicité, aucun traçage, aucune revente de données. Voici précisément ce qui est enregistré, pourquoi, et comment le faire supprimer."
      maj="août 2026"
    >
      <BlocTexte titre="Responsable du traitement">
        <ListeInfos
          lignes={[
            ["Responsable", entreprise.raisonSociale],
            ["Adresse", ou(entreprise.adresse, `${site.zone.ville} (35), ${site.zone.departement}`)],
            ["Contact", site.contact.email],
          ]}
        />
      </BlocTexte>

      <BlocTexte titre="Ce qui est collecté, et pourquoi">
        <p>
          <strong>Navigation sur le site.</strong> Aucun cookie de mesure d&apos;audience, aucun
          outil publicitaire, aucun réseau social embarqué. La consultation des pages ne donne lieu à
          aucun profilage.
        </p>
        <p>
          <strong>Formulaire de contact.</strong> Les champs que vous remplissez (nom, e-mail,
          téléphone, commune, animal, message) me sont transmis par e-mail via le service
          d&apos;acheminement Resend, et ne servent qu&apos;à vous répondre. Aucun compte
          n&apos;est créé, aucune inscription à une liste de diffusion n&apos;a lieu. Un champ
          invisible sert uniquement à écarter les robots : il ne collecte aucune donnée sur vous.
          Base légale : votre consentement, recueilli par la case à cocher du formulaire.
        </p>
        <p>
          <strong>Téléphone et e-mail.</strong> Les informations que vous me communiquez directement
          (coordonnées, dates de garde, informations sur votre animal) servent uniquement à répondre
          à votre demande et à réaliser la prestation. Base légale : exécution du contrat ou intérêt
          légitime à répondre à une sollicitation.
        </p>
        <p>
          <strong>Prestations réalisées.</strong> Les éléments nécessaires au suivi (contrat de
          garde, consignes, coordonnées du vétérinaire, traitements en cours) sont conservés le temps
          de la relation commerciale, puis archivés selon les obligations comptables et fiscales.
        </p>
      </BlocTexte>

      <BlocTexte titre="Durées de conservation">
        <ListeInfos
          lignes={[
            ["Demandes sans suite", "12 mois à compter du dernier échange"],
            ["Clients", "Durée de la relation commerciale, puis 3 ans"],
            ["Pièces comptables", "10 ans (obligation légale)"],
            ["Photographies de votre animal", "Supprimées sur simple demande"],
          ]}
        />
      </BlocTexte>

      <BlocTexte titre="Destinataires">
        <p>
          Vos données ne sont ni vendues, ni louées, ni transmises à des tiers à des fins
          commerciales. Les seuls destinataires sont moi-même, Resend (acheminement des messages du
          formulaire), prestataire établi aux États-Unis qui adhère au cadre de protection des
          données UE-États-Unis.
        </p>
        <p>
          En cas d&apos;urgence vétérinaire pendant une garde, les informations strictement
          nécessaires aux soins peuvent être communiquées au vétérinaire que vous aurez désigné.
        </p>
      </BlocTexte>

      <BlocTexte titre="Photographies et comptes rendus">
        <p>
          Les photographies et vidéos réalisées pendant les prestations vous sont envoyées à titre de
          compte rendu. Elles ne sont publiées sur ce site ou sur les réseaux sociaux qu&apos;avec
          votre accord explicite et révocable à tout moment.
        </p>
      </BlocTexte>

      <BlocTexte titre="Vos droits">
        <p>
          Conformément au Règlement général sur la protection des données, vous disposez d&apos;un
          droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et
          de portabilité de vos données. Il suffit d&apos;écrire à{" "}
          <a href={`mailto:${site.contact.email}`} className="text-terre underline underline-offset-4">
            {site.contact.email}
          </a>
          , la réponse intervient sous un mois.
        </p>
        <p>
          Si la réponse ne vous convient pas, vous pouvez introduire une réclamation auprès de la
          CNIL :{" "}
          <a
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terre underline underline-offset-4"
          >
            cnil.fr/fr/plaintes
          </a>
          .
        </p>
      </BlocTexte>

      <BlocTexte titre="Cookies">
        <p>
          Ce site ne dépose aucun cookie de mesure d&apos;audience ni de publicité, aucune bannière
          de consentement n&apos;est donc nécessaire pour le consulter. Aucun service tiers n&apos;est
          chargé lors de la navigation.
        </p>
      </BlocTexte>

      <BlocTexte titre="Hébergement et sécurité">
        <p>
          Le site est hébergé par Vercel Inc. et servi exclusivement en HTTPS. Les polices de
          caractères sont hébergées sur le site lui-même : aucune requête n&apos;est envoyée à un
          service tiers lors du simple affichage d&apos;une page.
        </p>
      </BlocTexte>
    </PageTexte>
  );
}
