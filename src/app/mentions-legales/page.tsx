import type { Metadata } from "next";
import PageTexte, { BlocTexte, ListeInfos } from "@/components/PageTexte";
import { entreprise, hebergeur, mediateur, ou } from "@/lib/legal";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, hébergeur, immatriculation, assurance et médiation de la consommation : les mentions légales du site Les Gambadeurs.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: openGraph({
    title: "Mentions légales | Les Gambadeurs",
    description: "Informations légales sur l'éditeur du site Les Gambadeurs.",
    url: "/mentions-legales",
  }),
};

export default function MentionsLegales() {
  return (
    <PageTexte
      titre="Mentions légales"
      href="/mentions-legales"
      chapo="Informations relatives à l'éditeur et à l'hébergeur de ce site, conformément à l'article 6 III de la loi pour la confiance dans l'économie numérique."
      maj="août 2026"
    >
      <BlocTexte titre="Éditeur du site">
        <ListeInfos
          lignes={[
            ["Dénomination", entreprise.raisonSociale],
            ["Forme juridique", ou(entreprise.formeJuridique)],
            ["Siège social", ou(entreprise.adresse, `${site.zone.ville} (35), ${site.zone.departement}`)],
            ["SIRET", ou(entreprise.siret)],
            ["Immatriculation", ou(entreprise.immatriculation)],
            ["TVA", entreprise.tva.trim() || entreprise.mentionFranchiseTva],
            ["Téléphone", site.contact.phone],
            ["E-mail", site.contact.email],
            ["Responsable de la publication", ou(entreprise.responsablePublication)],
          ]}
        />
      </BlocTexte>

      <BlocTexte titre="Activité et qualifications">
        <ListeInfos
          lignes={[
            [
              "ACACED",
              ou(
                entreprise.acaced,
                "Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques (numéro à compléter)",
              ),
            ],
            ["Déclaration DDPP", ou(entreprise.declarationDdpp)],
            ["Assurance responsabilité civile professionnelle", ou(entreprise.assurance)],
          ]}
        />
        <p className="mt-5">
          L&apos;activité de garde d&apos;animaux de compagnie est soumise à déclaration auprès de la
          Direction départementale de la protection des populations, conformément à l&apos;article
          L214-6-1 du code rural et de la pêche maritime.
        </p>
      </BlocTexte>

      <BlocTexte titre="Hébergement">
        <ListeInfos
          lignes={[
            ["Hébergeur", hebergeur.nom],
            ["Adresse", hebergeur.adresse],
            ["Site", hebergeur.site],
          ]}
        />
      </BlocTexte>

      <BlocTexte titre="Médiation de la consommation">
        <p>
          Conformément à l&apos;article L616-1 du code de la consommation, tout client particulier
          peut recourir gratuitement à un médiateur de la consommation en vue de la résolution
          amiable d&apos;un litige, après avoir tenté de le résoudre directement par une réclamation
          écrite.
        </p>
        <ListeInfos
          lignes={[
            ["Médiateur", ou(mediateur.nom)],
            ["Adresse", ou(mediateur.adresse)],
            ["Site", ou(mediateur.site)],
          ]}
        />
        <p className="mt-5">
          La plateforme européenne de règlement en ligne des litiges est également accessible à
          l&apos;adresse{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terre underline underline-offset-4"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </BlocTexte>

      <BlocTexte titre="Propriété intellectuelle">
        <p>
          L&apos;identité visuelle, les textes, les illustrations et les photographies présents sur
          ce site sont la propriété des Gambadeurs ou de leurs auteurs respectifs. Toute
          reproduction, représentation ou adaptation, même partielle, est interdite sans
          autorisation écrite préalable.
        </p>
        <p>
          Les photographies d&apos;animaux publiées sur ce site le sont avec l&apos;accord de leurs
          propriétaires.
        </p>
      </BlocTexte>

      <BlocTexte titre="Données personnelles et cookies">
        <p>
          Le traitement des données personnelles est détaillé dans la{" "}
          <a href="/politique-de-confidentialite" className="text-terre underline underline-offset-4">
            politique de confidentialité
          </a>
          .
        </p>
      </BlocTexte>

      <BlocTexte titre="Signaler un contenu">
        <p>
          Pour toute question ou demande relative à ce site, écrivez à{" "}
          <a href={`mailto:${site.contact.email}`} className="text-terre underline underline-offset-4">
            {site.contact.email}
          </a>{" "}
          ou appelez le {site.contact.phone}.
        </p>
      </BlocTexte>
    </PageTexte>
  );
}
