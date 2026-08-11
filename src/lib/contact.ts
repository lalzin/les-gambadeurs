/**
 * Types et état initial du formulaire de contact.
 *
 * Volontairement séparé de `actions.ts` : un fichier marqué « use server »
 * ne peut exporter que des fonctions asynchrones. Y exporter un objet
 * (comme `etatInitial`) fait échouer la requête à l'exécution, sans que la
 * compilation ne signale quoi que ce soit.
 */

export type EtatFormulaire = {
  statut: "attente" | "succes" | "erreur";
  message?: string;
  erreurs?: Record<string, string>;
  /** valeurs ressaisies, pour ne pas vider le formulaire en cas d'erreur */
  valeurs?: Record<string, string>;
};

export const etatInitial: EtatFormulaire = { statut: "attente" };

export const SUJETS = [
  { valeur: "garde", label: "Garde d'animaux" },
  { valeur: "adoption", label: "Conseil à l'adoption" },
  { valeur: "autre", label: "Autre" },
] as const;
