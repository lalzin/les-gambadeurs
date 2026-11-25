import {
  brochures,
  communesGarde,
  formulesGarde,
  prestationsAdoption,
  prestationsAdoptionApres,
  prestationsGarde,
} from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Résumé du site au format llms.txt (https://llmstxt.org), lu par les moteurs
 * de réponse (ChatGPT, Perplexity, Gemini…) pour décrire et citer l'entreprise.
 * Généré à partir des mêmes contenus que les pages : toujours à jour.
 */
export const dynamic = "force-static";

const nom = (n: string) => n.replace(/[«»]/g, "").trim();

export function GET() {
  const ttc = (prix: string | null, texte = "sur demande") =>
    prix === null ? texte : prix === "Offert" ? "offert" : `${prix} TTC`;
  const garde = [
    ...formulesGarde.map(
      (f) =>
        `- ${f.nom} (trajet inclus) : ${ttc(f.prix)}. Visite à domicile (${f.visite.pour}) : ${f.visite.detail} Promenade (${f.promenade.pour}) : ${f.promenade.detail}`,
    ),
    ...prestationsGarde.map(
      (p) =>
        `- ${nom(p.nom)}${p.duree ? ` (${p.duree})` : ""} : ${p.detail} Tarif : ${ttc(p.prix, p.prixTexte?.toLowerCase().replace(/^tarif /, ""))}.`,
    ),
  ];
  const adoption = [...prestationsAdoption, ...prestationsAdoptionApres].map(
    (p) => `- ${p.nom} : ${p.detail} Tarif : ${ttc(p.prix)}.`,
  );

  const texte = `# ${site.name}

> Garde d'animaux (visites à domicile, promenades, pension) et conseil à l'adoption pour chiens, chats et NAC d'espèces domestiques, au départ de ${site.zone.ville}, au nord de Rennes (${site.zone.departement}, ${site.zone.departementCode}). Fondatrice titulaire de l'ACACED.

## Garde d'animaux
Rayon d'environ ${site.zone.rayonGardeKm} km autour de ${site.zone.ville} ; au-delà, indemnité kilométrique de ${site.zone.indemniteKm}.
Communes : ${communesGarde.join(", ")}.
${garde.join("\n")}
Brochure tarifaire complète : ${site.url}${brochures.garde}

## Conseil à l'adoption
Avant, pendant et après l'adoption, sur toute l'${site.zone.departement}.
${adoption.join("\n")}
Brochure tarifaire complète : ${site.url}${brochures.adoption}

## Contact
- Téléphone : ${site.contact.phone}
- E-mail : ${site.contact.email}

## Pages
- [Garde d'animaux](${site.url}/garde-d-animaux)
- [Conseil à l'adoption](${site.url}/conseil-a-l-adoption)
- [Qui suis-je](${site.url}/qui-suis-je)
- [Questions fréquentes](${site.url}/faq)
- [Contact](${site.url}/contact)
`;

  return new Response(texte, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
