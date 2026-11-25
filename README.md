# Les Gambadeurs — site vitrine

Site vitrine de **Les Gambadeurs** — garde d'animaux & conseil à l'adoption en Ille-et-Vilaine.
Next.js 16 (App Router) + Tailwind CSS 4, entièrement statique, prêt pour Vercel.

---

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000 (ou `npm run dev -- -p 3017` pour choisir le port).

```bash
npm run build   # build de production (toutes les pages sont pré-rendues)
npm start       # servir le build
```

---

## Où modifier le contenu

Tout le texte du site est centralisé dans deux fichiers — aucun besoin de toucher aux pages :

| Fichier | Contenu |
| --- | --- |
| `src/lib/site.ts` | Coordonnées, URL du domaine, zones d'intervention (15 km garde, 30 km adoption), réseaux sociaux, vidéo de bannière, menus |
| `src/lib/content.ts` | Textes de toutes les pages : manifeste, prestations, tarifs, FAQ, communes, présentation, légendes des photos |
| `src/lib/legal.ts` | Identité de l'entreprise : SIRET, forme juridique, assurance, ACACED, médiateur. Alimente les trois pages légales |

Les blocs à valider par la cliente sont signalés par un commentaire **`⚠️ À COMPLÉTER`** dans ces fichiers.

---

## À compléter avant la mise en ligne

1. **Tarifs** : `src/lib/content.ts` → `formulesGarde` (visites et promenades),
   `prestationsGarde` (pension, transport, « Coup de frais ») et `prestationsAdoption*`.
   Tous les prix s'affichent suivis de « TTC ». Les brochures PDF téléchargeables sont dans
   `public/brochures/` : les remplacer en gardant le même nom de fichier à chaque nouvelle
   grille tarifaire.
2. **ACACED** : `src/lib/legal.ts` → `acaced` (numéro et date), et `declarationDdpp`
   une fois les CERFA validés par la DDPP.
3. **Passage en micro-entreprise** (prévu au printemps 2027) : l'activité est aujourd'hui
   portée par la CAE Élan Créateur. Au changement de statut, remplacer les champs de
   `entreprise` (SIRET, forme, adresse, TVA) et supprimer le bloc `cooperative` dans
   `src/lib/legal.ts`, ainsi que ses usages (mentions légales, CGV, confidentialité, pied de page).
4. **Communes desservies** : `src/lib/content.ts` → `communes` et `communesGarde`.
   Ces noms alimentent directement le référencement local.
5. **Offre de lancement** : `FIN_OFFRE` dans `src/lib/content.ts`. Les prix barrés et les
   badges disparaissent seuls après cette date (pages régénérées toutes les heures).
6. **Conditions générales** — `src/app/conditions-generales/page.tsx`. Trame complète et
   cohérente avec les prestations du site, **à faire relire** avant mise en ligne : elle
   engage la responsabilité de l'entreprise (délais d'annulation, urgences vétérinaires,
   garde des clés). Un encadré le rappelle en haut de la page, à supprimer une fois validée.
7. **Réseaux sociaux** — `src/lib/site.ts` → `social`. Les liens vides sont simplement masqués.

---

## Activer le formulaire de contact

La page Contact propose un formulaire en plus du téléphone, de l'e-mail et du SMS. Les
messages sont acheminés par [Resend](https://resend.com), dont le quota gratuit
(3 000 messages par mois) est très largement suffisant.

1. Créer un compte sur resend.com.
2. Y ajouter le domaine du site (**Domains → Add Domain**) et créer chez le
   registrar les enregistrements DNS proposés. Cette étape est indispensable :
   sans domaine vérifié, les messages partent en spam ou sont refusés.
3. Générer une clé d'API (**API Keys → Create**).
4. Sur Vercel, **Settings → Environment Variables**, ajouter :

| Variable | Valeur | Obligatoire |
| --- | --- | --- |
| `RESEND_API_KEY` | la clé générée à l'étape 3 | oui |
| `CONTACT_TO` | adresse qui reçoit les demandes (défaut : `contact@lesgambadeurs.fr`) | non |
| `CONTACT_FROM` | expéditeur, ex. `Les Gambadeurs <site@lesgambadeurs.fr>` | oui en production |

En local, copier `.env.example` en `.env.local`.

**Tant que la clé n'est pas renseignée**, le formulaire ne plante pas : il affiche
un message invitant à téléphoner ou à écrire, avec les coordonnées réelles.
Aucune demande n'est perdue silencieusement.

Le formulaire embarque un piège à robots invisible (champ `site_web`), une
validation côté serveur et une case de consentement RGPD. Les réponses partent
avec l'adresse du visiteur en `Reply-To` : il suffit de répondre à l'e-mail reçu.

---

## Ajouter la vidéo d'ambiance de la bannière

1. Déposer un fichier MP4 dans `public/media/` (idéalement 6 à 12 s, muet, en boucle,
   moins de 4 Mo, 1920 × 1080 — des chiens qui courent dans les champs, du blé, des tournesols).
2. Renseigner le chemin dans `src/lib/site.ts` :

```ts
heroVideo: "/media/champs.mp4",
```

La vidéo se superpose alors à l'illustration animée de la bannière (qui reste affichée en
poster et en repli). Tant que `heroVideo` vaut `null`, seule l'illustration s'affiche —
le site reste donc parfaitement fonctionnel sans vidéo.

## Ajouter ou remplacer des photos

1. Déposer le fichier dans `public/photos/` (JPEG, 1800 px de côté maximum suffisent).
2. Déclarer l'entrée dans `src/lib/content.ts` → `photos`, avec un texte alternatif
   descriptif (important pour l'accessibilité **et** le référencement).
3. L'utiliser dans la page voulue. Les cadres en arche fonctionnent mieux avec des
   **photos verticales** ; les cartes larges avec des photos horizontales.

---

## Identité visuelle

Extraite du brandboard officiel et disponible dans `public/brand/` :
`logo-lockup`, `logo-mark`, `logo-badge`, chacun décliné en version crème pour les fonds sombres.

| Couleur | Hex | Usage |
| --- | --- | --- |
| Brun | `#5F4028` | Titres, fond du pied de page |
| Terre | `#A35C3D` | Boutons, accents, liens |
| Sable | `#B89772` | Annotations manuscrites, filets |
| Lin | `#E3D9CA` | Cadres, séparateurs |
| Mousse | `#4D512E` | Sections vertes |
| Olive | `#AAB06E` | Puces, épis |
| Tendre | `#D7E1B1` | Surlignage, aplats clairs |
| Crème / Papier | `#F5ECE3` / `#FBF7F1` | Fonds |

**Typographie** (chargée via `next/font`, aucune requête externe) :
Fraunces pour les titres, Outfit pour les textes (substitut libre de Metropolis),
Caveat pour les annotations manuscrites.

Les épis de blé, graminées, tournesols et champs sont dessinés en SVG dans
`src/components/Botanique.tsx` — aucune image, tout est vectoriel, animé et recolorable.

---

## Référencement

Déjà en place :

- `title` sous 60 caractères et `description` sous 160 caractères sur chaque page,
  URL canoniques, un seul `h1` par page ;
- Open Graph + Twitter Card avec visuel de partage (`public/og.png`) sur **toutes** les
  pages, via le helper `src/lib/seo.ts` ;
- `sitemap.xml`, `robots.txt` et `manifest.webmanifest` générés automatiquement ;
- favicon multi-résolutions (`favicon.ico` 16 → 256 px, avec un dessin simplifié
  — la patte seule — pour les petites tailles), icône iOS et icônes PWA ;
- données structurées Schema.org : `ProfessionalService` (zone desservie, ACACED,
  coordonnées géographiques), `WebSite`, `BreadcrumbList` sur chaque page intérieure,
  `Service` sur les deux pages de prestations, un `FAQPage` unique sur `/faq`,
  `ContactPage`, et `Person` qui s'activera automatiquement dès que `fondatrice.prenom`
  sera renseigné ;
- fil d'Ariane, hiérarchie de titres, textes alternatifs sur toutes les images ;
- images optimisées et pré-dimensionnées par `next/image`, polices auto-hébergées,
  aucun service tiers chargé côté visiteur ;
- **contenu lisible sans JavaScript** : les apparitions au défilement ne masquent
  le contenu que si le navigateur sait effectivement le révéler (classe `anim`
  posée par un script en tête de page). Sans JS, script bloqué ou navigateur
  ancien, la page reste entièrement lisible — ce que voit aussi un robot
  d'indexation qui n'exécuterait pas les scripts.

**En-têtes de sécurité** (dans `next.config.ts`) : politique de sécurité du
contenu limitée au site lui-même, `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy`, `Permissions-Policy` et HSTS. La signature `X-Powered-By` est
retirée. ⚠️ Ajouter un outil tiers (mesure d'audience, chat) impose d'ajouter son
domaine à la CSP, sinon le navigateur le bloque silencieusement.

Mesures Lighthouse (mobile, 24/11/2026) : SEO 100, accessibilité 100 et bonnes
pratiques 100 sur toutes les pages principales ; performance 80 à 88.

---

## Lancement du domaine (jour J)

Aucune modification de code n'est nécessaire : tout passe par des variables
d'environnement Vercel (voir `.env.example`).

1. **Brancher le domaine** sur Vercel (Settings → Domains). Choisir une seule
   adresse principale (`www.lesgambadeurs.fr` conseillé) et rediriger les
   autres vers elle (le domaine nu et `les-gambadeurs.vercel.app`, option
   « Redirect to » de Vercel, en 308).
2. **Déclarer l'adresse** : variable `NEXT_PUBLIC_SITE_URL` (ex.
   `https://www.lesgambadeurs.fr`), puis **Redeploy**. URL canoniques, sitemap,
   robots.txt, Open Graph et données structurées suivent automatiquement.
3. **Google Search Console** : ajouter la propriété (idéalement « Domaine », par
   enregistrement DNS), sinon par balise HTML via
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Soumettre ensuite
   `https://<domaine>/sitemap.xml`.
4. **Bing Webmaster Tools** (alimente aussi ChatGPT et Copilot) : importer la
   propriété depuis Search Console, ou `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
5. **Fiche Google Business Profile** : le levier n° 1 en local. Catégorie
   « Service de garde d'animaux de compagnie », zone desservie (sans adresse
   publique si l'activité se fait chez les clients), mêmes nom, téléphone et
   site que sur le site, photos, puis **demander des avis** aux premiers clients.
6. **Mesure d'audience** : activer Web Analytics et Speed Insights dans Vercel,
   puis `NEXT_PUBLIC_MESURE_AUDIENCE=on` et redéployer. Sans cookie : aucune
   bannière de consentement nécessaire.
7. **Formulaire** : vérifier le domaine dans Resend et renseigner
   `CONTACT_FROM` avec une adresse du nouveau domaine (voir plus haut).
8. **Annuaires locaux** : PagesJaunes, mairies de la zone, associations de
   protection animale du 35. Toujours les mêmes nom, téléphone et adresse.

Les déploiements de prévisualisation Vercel sont automatiquement exclus de
l'indexation (en-tête `X-Robots-Tag` et robots.txt bloquant), pour éviter le
contenu dupliqué.

---

## Structure

```
src/
  app/
    page.tsx                    Accueil
    garde-d-animaux/            Prestations & tarifs de garde
    conseil-a-l-adoption/       Prestations & tarifs d'accompagnement
    qui-suis-je/                Présentation, compétences, plateforme de marque
    faq/                        Les deux FAQ réunies (garde + adoption)
    contact/                    Coordonnées, formulaire, zone d'intervention
    mentions-legales/           Éditeur, ACACED, DDPP, médiation
    politique-de-confidentialite/
    conditions-generales/
    layout.tsx                  En-tête, pied de page, métadonnées, Schema.org
    globals.css                 Palette, typographie, animations
  components/
    Botanique.tsx               Épis, graminées, tournesols, champs, empreinte de patte
    PageTexte.tsx               Gabarit des pages légales
    Annotation.tsx              Notes manuscrites + flèches dessinées à la main
    Header.tsx / Footer.tsx
    Ui.tsx                      Titres, boutons, cartes, photos en arche, bandeaux
    Reveal.tsx                  Apparition au défilement
  lib/
    site.ts                     Configuration
    content.ts                  Contenus éditoriaux
    legal.ts                    Identité légale de l'entreprise
    seo.ts                      Open Graph partagé entre les pages
public/
  brand/                        Logos extraits du brandboard + icônes PWA
  photos/                       Photographies optimisées
  og.png                        Visuel de partage sur les réseaux
```
