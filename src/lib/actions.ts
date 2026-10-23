"use server";

import { Resend } from "resend";
import type { EtatFormulaire } from "@/lib/contact";
import { site } from "@/lib/site";

/**
 * Envoi du formulaire de contact.
 * ------------------------------------------------------------------
 * Les messages partent par Resend (https://resend.com), qui offre un
 * quota gratuit largement suffisant pour un site vitrine.
 *
 * Variables d'environnement à définir sur Vercel (Settings → Environment
 * Variables), voir .env.example :
 *   RESEND_API_KEY   clé d'API Resend                    (obligatoire)
 *   CONTACT_TO       adresse qui reçoit les demandes     (défaut : contact du site)
 *   CONTACT_FROM     expéditeur, sur un domaine vérifié  (obligatoire en production)
 *
 * Tant que la clé n'est pas renseignée, le formulaire refuse l'envoi et
 * affiche les coordonnées directes plutôt que de perdre la demande.
 */

const LIBELLES: Record<string, string> = {
  garde: "Garde d'animaux",
  adoption: "Conseil à l'adoption",
  autre: "Autre demande",
};

const LIMITES = { nom: 80, email: 120, telephone: 25, commune: 80, animal: 120, message: 3000 };

function texte(donnees: FormData, champ: string) {
  const v = donnees.get(champ);
  return typeof v === "string" ? v.trim() : "";
}

/** Validation e-mail volontairement permissive : on refuse l'absurde, pas l'exotique. */
function emailValide(v: string) {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);
}

function echapper(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function envoyerDemande(
  _precedent: EtatFormulaire,
  donnees: FormData,
): Promise<EtatFormulaire> {
  // Piège à robots : champ invisible pour les humains. S'il est rempli, on
  // simule un succès sans rien envoyer, pour ne pas renseigner le spammeur.
  if (texte(donnees, "site_web")) {
    return { statut: "succes", message: "Merci, votre message a bien été envoyé." };
  }

  const nom = texte(donnees, "nom");
  const email = texte(donnees, "email");
  const telephone = texte(donnees, "telephone");
  const commune = texte(donnees, "commune");
  const animal = texte(donnees, "animal");
  const message = texte(donnees, "message");
  const sujet = texte(donnees, "sujet") || "autre";
  const consentement = donnees.get("consentement") === "on";

  const valeurs = { nom, email, telephone, commune, animal, message, sujet };
  const erreurs: Record<string, string> = {};

  if (nom.length < 2) erreurs.nom = "Merci d'indiquer votre nom.";
  if (nom.length > LIMITES.nom) erreurs.nom = "Ce nom est trop long.";
  if (!emailValide(email)) erreurs.email = "Cette adresse e-mail semble incorrecte.";
  if (email.length > LIMITES.email) erreurs.email = "Cette adresse est trop longue.";
  if (telephone.length > LIMITES.telephone) erreurs.telephone = "Ce numéro est trop long.";
  if (commune.length > LIMITES.commune) erreurs.commune = "Ce nom de commune est trop long.";
  if (animal.length > LIMITES.animal) erreurs.animal = "Cette description est trop longue.";
  if (message.length < 10) erreurs.message = "Quelques mots de plus m'aideraient à vous répondre.";
  if (message.length > LIMITES.message) erreurs.message = "Ce message est trop long.";
  if (!consentement) erreurs.consentement = "Merci d'accepter que vos coordonnées soient utilisées pour vous répondre.";

  if (Object.keys(erreurs).length > 0) {
    return {
      statut: "erreur",
      message: "Le formulaire n'a pas pu être envoyé.",
      erreurs,
      valeurs,
    };
  }

  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.error(
      "[contact] RESEND_API_KEY absente : le formulaire ne peut pas envoyer de message.",
    );
    return {
      statut: "erreur",
      message: `L'envoi est momentanément indisponible. Écrivez directement à ${site.contact.email} ou appelez le ${site.contact.phone}.`,
      valeurs,
    };
  }

  const destinataire = process.env.CONTACT_TO || site.contact.email;
  const expediteur = process.env.CONTACT_FROM || `Les Gambadeurs <onboarding@resend.dev>`;

  const lignes: [string, string][] = [
    ["Demande", LIBELLES[sujet] ?? LIBELLES.autre],
    ["Nom", nom],
    ["E-mail", email],
    ["Téléphone", telephone || "non communiqué"],
    ["Commune", commune || "non communiquée"],
    ["Animal", animal || "non précisé"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#3a2718;line-height:1.6">
      <h2 style="color:#5f4028;margin:0 0 16px">Nouvelle demande depuis le site</h2>
      <table style="border-collapse:collapse;margin-bottom:20px">
        ${lignes
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#b89772;font-size:13px">${k}</td><td style="padding:4px 0"><strong>${echapper(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <div style="background:#f5ece3;border-radius:12px;padding:16px;white-space:pre-wrap">${echapper(message)}</div>
      <p style="margin-top:20px;font-size:12px;color:#b89772">
        Répondre à cet e-mail écrit directement à ${echapper(email)}.
      </p>
    </div>`;

  const brut = [
    ...lignes.map(([k, v]) => `${k} : ${v}`),
    "",
    message,
  ].join("\n");

  try {
    const resend = new Resend(cle);
    const { error } = await resend.emails.send({
      from: expediteur,
      to: [destinataire],
      replyTo: email,
      subject: `[Site] ${LIBELLES[sujet] ?? LIBELLES.autre} : ${nom}`,
      html,
      text: brut,
    });

    if (error) {
      console.error("[contact] Resend a refusé l'envoi :", error);
      return {
        statut: "erreur",
        message: `L'envoi a échoué. Écrivez directement à ${site.contact.email} ou appelez le ${site.contact.phone}.`,
        valeurs,
      };
    }
  } catch (e) {
    console.error("[contact] Erreur inattendue :", e);
    return {
      statut: "erreur",
      message: `L'envoi a échoué. Écrivez directement à ${site.contact.email} ou appelez le ${site.contact.phone}.`,
      valeurs,
    };
  }

  return {
    statut: "succes",
    message: "Message bien reçu. Je vous réponds sous 24 à 48 h, en général plus vite.",
  };
}
