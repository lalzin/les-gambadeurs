import type { Metadata } from "next";
import PageTexte, { BlocTexte } from "@/components/PageTexte";
import { entreprise, mediateur, ou } from "@/lib/legal";
import { openGraph } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de prestation",
  description:
    "Réservation, tarifs, frais kilométriques, annulation, clés, urgences vétérinaires et responsabilité : les conditions générales des prestations Les Gambadeurs.",
  alternates: { canonical: "/conditions-generales" },
  openGraph: openGraph({
    title: "Conditions générales de prestation — Les Gambadeurs",
    description: "Réservation, annulation, responsabilité et assurance des prestations.",
    url: "/conditions-generales",
  }),
};

export default function ConditionsGenerales() {
  return (
    <PageTexte
      titre="Conditions générales de prestation"
      href="/conditions-generales"
      chapo="Le cadre des prestations de garde d'animaux et de conseil à l'adoption. Ces conditions sont rappelées et signées avec chaque contrat de prestation."
      maj="août 2026"
    >
      <div className="mt-10 rounded-[22px] border border-dashed border-sable/60 bg-creme/50 p-6">
        <p className="text-[14.5px] leading-relaxed text-encre/75">
          <strong className="font-medium text-brun">À faire relire avant la mise en ligne.</strong>{" "}
          Ce document est une trame complète et cohérente avec les prestations décrites sur le site.
          Il doit être validé, et ajusté à vos pratiques réelles, avant d&apos;engager la
          responsabilité de l&apos;entreprise.
        </p>
      </div>

      <BlocTexte titre="1. Objet">
        <p>
          Les présentes conditions régissent les prestations proposées par{" "}
          {entreprise.raisonSociale} : garde d&apos;animaux de compagnie à domicile (visites,
          promenades, séjours, transport) et conseil à l&apos;adoption. Toute réservation implique
          leur acceptation sans réserve.
        </p>
      </BlocTexte>

      <BlocTexte titre="2. Réservation et devis">
        <p>
          Toute prestation débute par un échange téléphonique gratuit, suivi d&apos;une rencontre au
          domicile du client. Un devis détaillé est établi avant toute intervention. La réservation
          devient ferme à réception du devis signé et, le cas échéant, de l&apos;acompte.
        </p>
        <p>
          Le client s&apos;engage à fournir des informations exactes et complètes sur son animal :
          état de santé, traitements en cours, antécédents de morsure ou de fugue, habitudes
          alimentaires, coordonnées du vétérinaire traitant.
        </p>
      </BlocTexte>

      <BlocTexte titre="3. Tarifs et frais de déplacement">
        <p>
          Les tarifs applicables sont ceux communiqués sur le devis. Une indemnité kilométrique de{" "}
          {site.zone.indemniteKm} supplémentaire est facturée au-delà de {site.zone.rayonGardeKm} km
          au départ de {site.zone.ville} pour la garde d&apos;animaux, et au-delà de{" "}
          {site.zone.rayonKm} km pour le conseil à l&apos;adoption.
        </p>
        <p>
          {entreprise.tva.trim()
            ? `Les prix s'entendent hors taxes, TVA en sus (n° ${entreprise.tva}).`
            : entreprise.mentionFranchiseTva}{" "}
          Les frais engagés pour le compte du client (nourriture, litière, consultation vétérinaire)
          lui sont refacturés à l&apos;euro près, sur présentation des justificatifs.
        </p>
      </BlocTexte>

      <BlocTexte titre="4. Paiement">
        <p>
          Le règlement s&apos;effectue à la fin de la prestation, ou selon l&apos;échéancier prévu au
          devis pour les séjours longs. Tout retard de paiement entraîne de plein droit des pénalités
          au taux légal ainsi qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement,
          conformément à l&apos;article L441-10 du code de commerce.
        </p>
      </BlocTexte>

      <BlocTexte titre="5. Annulation">
        <p>
          Toute annulation doit être signalée dès que possible, par téléphone ou par e-mail. Les
          conditions applicables (délai de franchise, retenue éventuelle sur l&apos;acompte) figurent
          sur le devis accepté.
        </p>
        <p>
          En cas d&apos;empêchement de ma part (maladie, accident, force majeure), le client est
          prévenu sans délai et les sommes déjà versées lui sont intégralement remboursées, sauf
          accord sur une solution de remplacement.
        </p>
      </BlocTexte>

      <BlocTexte titre="6. Droit de rétractation">
        <p>
          Pour les prestations conclues à distance ou hors établissement, le client particulier
          dispose d&apos;un délai de rétractation de quatorze jours à compter de la conclusion du
          contrat, conformément à l&apos;article L221-18 du code de la consommation. Lorsque la
          prestation débute avant la fin de ce délai à la demande expresse du client, celui-ci reste
          redevable du montant correspondant au service déjà fourni.
        </p>
      </BlocTexte>

      <BlocTexte titre="7. Accès au domicile et clés">
        <p>
          Les clés confiées sont conservées dans un lieu sécurisé, sans mention de l&apos;adresse à
          laquelle elles correspondent. Elles sont restituées en main propre à la fin de la
          prestation, ou conservées avec l&apos;accord écrit du client pour les prestations
          récurrentes.
        </p>
        <p>
          Le client garantit disposer du droit d&apos;autoriser l&apos;accès au logement et informe
          le cas échéant les personnes susceptibles de s&apos;y trouver.
        </p>
      </BlocTexte>

      <BlocTexte titre="8. Santé et urgences vétérinaires">
        <p>
          L&apos;animal doit être à jour de ses vaccinations, identifié conformément à la
          réglementation, et traité contre les parasites internes et externes.
        </p>
        <p>
          En cas d&apos;urgence, et si le client ne peut être joint, je suis autorisée à conduire
          l&apos;animal chez le vétérinaire désigné au contrat, ou à défaut chez le vétérinaire de
          garde le plus proche. Les frais engagés restent à la charge du client.
        </p>
      </BlocTexte>

      <BlocTexte titre="9. Responsabilité et assurance">
        <p>
          {entreprise.assurance.trim()
            ? `Les prestations sont couvertes par une assurance responsabilité civile professionnelle : ${entreprise.assurance}.`
            : `Les prestations sont couvertes par une assurance responsabilité civile professionnelle (compagnie et numéro de contrat ${ou(
                entreprise.assurance,
              )}).`}
        </p>
        <p>
          Le client demeure responsable, en qualité de gardien juridique de l&apos;animal, des
          dommages que celui-ci pourrait causer à des tiers ou à leurs biens, conformément à
          l&apos;article 1243 du code civil. Il déclare être assuré à ce titre.
        </p>
        <p>
          Ma responsabilité ne saurait être engagée en cas de dommage résultant d&apos;une
          information inexacte ou incomplète communiquée par le client, ni en cas de force majeure.
        </p>
      </BlocTexte>

      <BlocTexte titre="10. Nature du conseil à l'adoption">
        <p>
          Le conseil à l&apos;adoption est une prestation d&apos;accompagnement et d&apos;information.
          Il ne constitue ni un acte vétérinaire, ni un diagnostic, ni une garantie sur le
          comportement futur d&apos;un animal. Aucun animal n&apos;est vendu, cédé ni placé dans ce
          cadre, et aucune commission n&apos;est perçue auprès d&apos;éleveurs, de refuges ou
          d&apos;associations.
        </p>
        <p>
          La décision d&apos;adopter, ainsi que le choix final de l&apos;animal, appartiennent au
          seul client.
        </p>
      </BlocTexte>

      <BlocTexte titre="11. Réclamations et médiation">
        <p>
          Toute réclamation doit être adressée à{" "}
          <a href={`mailto:${site.contact.email}`} className="text-terre underline underline-offset-4">
            {site.contact.email}
          </a>
          . À défaut de solution amiable, le client particulier peut saisir gratuitement le médiateur
          de la consommation {ou(mediateur.nom, "(à compléter)")}, dans les conditions rappelées dans
          les{" "}
          <a href="/mentions-legales" className="text-terre underline underline-offset-4">
            mentions légales
          </a>
          .
        </p>
      </BlocTexte>

      <BlocTexte titre="12. Droit applicable">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de litige et après échec
          de la médiation, les tribunaux français sont seuls compétents.
        </p>
      </BlocTexte>
    </PageTexte>
  );
}
