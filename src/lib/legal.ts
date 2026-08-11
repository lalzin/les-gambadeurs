/**
 * Informations légales — Les Gambadeurs
 * ------------------------------------------------------------------
 * ⚠️ À COMPLÉTER avant la mise en ligne. Les mentions légales sont
 * obligatoires (art. 6 III de la LCEN) et l'absence de médiateur de la
 * consommation est sanctionnable pour un professionnel qui vend à des
 * particuliers (art. L616-1 du code de la consommation).
 *
 * Renseignez les champs ci-dessous : les trois pages légales
 * (mentions légales, confidentialité, conditions générales) se
 * remplissent automatiquement, et les valeurs manquantes s'affichent
 * en « à compléter » plutôt que de disparaître silencieusement.
 */

export const entreprise = {
  /** ⚠️ Ex. « Les Gambadeurs », « EI Prénom Nom », « Les Gambadeurs SASU »… */
  raisonSociale: "Les Gambadeurs",
  /** ⚠️ Ex. « Entreprise individuelle », « SASU au capital de 1 000 € » */
  formeJuridique: "",
  /** ⚠️ 14 chiffres */
  siret: "",
  /** ⚠️ 9 chiffres */
  siren: "",
  /** ⚠️ Ex. « RCS Rennes 000 000 000 » ou « Répertoire des métiers 35 » */
  immatriculation: "",
  /** ⚠️ Numéro de TVA intracommunautaire, ou laisser vide si franchise en base */
  tva: "",
  /** Affiché si `tva` est vide (cas de la micro-entreprise) */
  mentionFranchiseTva: "TVA non applicable, article 293 B du Code général des impôts.",
  /** ⚠️ Adresse complète du siège */
  adresse: "",
  /** ⚠️ Nom du responsable de la publication */
  responsablePublication: "",
  /** ⚠️ Compagnie et numéro de contrat de RC professionnelle */
  assurance: "",
  /** ⚠️ Numéro et date de l'ACACED, délivrée par la DDPP */
  acaced: "",
  /** ⚠️ Numéro de déclaration d'activité auprès de la DDPP (art. L214-6-1 code rural) */
  declarationDdpp: "",
};

export const mediateur = {
  /** ⚠️ Ex. « Médiation Solutions » — obligatoire pour les prestations aux particuliers */
  nom: "",
  adresse: "",
  site: "",
};

export const hebergeur = {
  nom: "Vercel Inc.",
  adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  site: "vercel.com",
};

/** Valeur affichée tant qu'un champ n'a pas été renseigné. */
export const aCompleter = "à compléter";

export function ou(valeur: string, remplacement = aCompleter) {
  return valeur.trim() || remplacement;
}
