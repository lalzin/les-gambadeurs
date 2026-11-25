/**
 * Informations légales — Les Gambadeurs
 * ------------------------------------------------------------------
 * Les mentions légales sont
 * obligatoires (art. 6 III de la LCEN) et l'absence de médiateur de la
 * consommation est sanctionnable pour un professionnel qui vend à des
 * particuliers (art. L616-1 du code de la consommation).
 *
 * Renseignez les champs ci-dessous : les trois pages légales
 * (mentions légales, confidentialité, conditions générales) se
 * remplissent automatiquement, et les valeurs manquantes s'affichent
 * en « à compléter » plutôt que de disparaître silencieusement.
 */

/**
 * Daphné Privet exerce pour l'instant en entrepreneure-salariée au sein de la
 * coopérative Élan Créateur, qui porte juridiquement l'activité. Passage en
 * micro-entreprise prévu au printemps 2027 : il faudra alors remplacer ces
 * informations (et retirer le bloc `cooperative`).
 */
export const entreprise = {
  raisonSociale: "Élan Créateur",
  formeJuridique: "SCOP SA à capital variable",
  siret: "437 827 959 00010",
  siren: "437 827 959",
  immatriculation: "Rennes 437 827 959",
  codeNaf: "7022Z",
  tva: "FR02 437 827 959",
  /** Affiché si `tva` est vide (cas de la micro-entreprise) */
  mentionFranchiseTva: "TVA non applicable, article 293 B du Code général des impôts.",
  adresse: "7 rue Armand Herpin Lacroix, CS 73902, 35039 Rennes Cedex",
  responsablePublication: "Daphné Privet",
  assurance: "Generali, 38 boulevard Saint-Didier, BP 70004, 07200 Aubenas (04 75 35 54 04)",
  /** ⚠️ Numéro et date de l'ACACED, délivrée par la DDPP */
  acaced: "",
  /** Déclaration d'activité auprès de la DDPP (art. L214-6-1 code rural) */
  declarationDdpp: "En cours de validation",
};

/** Coopérative d'activité et d'emploi qui porte l'activité. */
export const cooperative = {
  entrepreneure: "Daphné Privet",
  enseigne: "Les Gambadeurs",
  statut: "entrepreneure-salariée",
  nom: "Élan Créateur",
  type: "Coopérative d'Activité et d'Emploi (CAE)",
  email: "contact@elancreateur.coop",
  telephone: "02 99 35 21 59",
};

export const mediateur = {
  nom: "Médiation Consommation Développement",
  adresse:
    "Centre d'Affaires Stéphanois, Immeuble l'Horizon, Esplanade de France, 3 rue J. Constant Milleret, 42000 Saint-Étienne",
  site: "medconsodev.eu",
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
