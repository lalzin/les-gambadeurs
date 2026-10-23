/**
 * Contenus éditoriaux — Les Gambadeurs
 * ------------------------------------------------------------------
 * Sources : Brandboard, « Positionnement & manifeste », brochure
 * « Prestations et tarifs — Conseil à l'adoption ».
 * Les blocs marqués « ⚠️ À COMPLÉTER » sont des propositions à valider.
 */

/* ------------------------------------------------------------------ */
/* ACCUEIL                                                             */
/* ------------------------------------------------------------------ */

export const introAccueil = `Les Gambadeurs, c'est une société fondée avec l'ambition d'améliorer le confort de vie de nos animaux, mais aussi de leurs maîtres. Au-delà des prestations de garde proposées en votre absence, pendant lesquelles nous nous assurons que vos compagnons ne manquent de rien, nous avons à cœur de vous accompagner en vous délivrant les astuces bien-être qui peuvent améliorer le quotidien de votre petit.e protégé.e.
De leur adoption jusqu'à leur vieillissement, de la nutrition au comportementalisme, pour leur offrir l'épanouissement qu'ils méritent et vous offrir une relation harmonieuse, il ne s'agit pas juste de les aimer, mais de les comprendre profondément.`;

/** Le manifeste de marque, découpé en strophes pour la mise en page. */
export const manifeste: string[][] = [
  ["Nous aimons profondément nos animaux.", "Pourtant, aimer ne signifie pas toujours comprendre."],
  [
    "Chez Les Gambadeurs, nous sommes convaincus d'une chose :",
    "les propriétaires ne manquent pas d'amour.",
    "Ils manquent surtout de repères.",
  ],
  [
    "Alors certaines situations dysfonctionnelles s'installent, désagréables pour l'animal comme pour l'humain.",
    "Parce qu'un besoin qui n'est pas compris finit toujours par s'exprimer.",
    "Et avec lui apparaissent tensions et difficultés qui fragilisent l'équilibre du foyer,",
    "alors qu'elles pourraient être évitées.",
  ],
  ["C'est pourquoi notre rôle ne se limite pas à prendre soin de votre animal pendant votre absence."],
  [
    "Nous aidons les propriétaires à mieux comprendre leur animal,",
    "pour qu'ils prennent les décisions les plus adaptées à ses besoins tout au long de sa vie,",
    "de son adoption jusqu'à son vieillissement.",
  ],
  [
    "Notre ambition n'est pas simplement que les animaux soient bien aujourd'hui.",
    "C'est que leurs humains deviennent les meilleurs alliés de leur bien-être, durablement.",
  ],
];

export const manifesteChute =
  "Une relation harmonieuse ne naît pas seulement de l'amour. Elle naît aussi de la compréhension !";

/** Plateforme de marque — utilisée sur « Qui suis-je ». */
export const plateforme = {
  vision:
    "Les besoins biologiques des animaux restent encore souvent méconnus, engendrant des situations dysfonctionnelles — désagréables pour l'Homme comme pour l'animal — qui pourraient être évitées.",
  mission:
    "Aider les propriétaires à mieux comprendre leurs animaux pour prendre les décisions les plus adaptées à leurs besoins tout au long de leur vie.",
  posture: "Le guide : celui qui en sait plus, mais qui marche à côté de vous, pas devant vous.",
  promesse:
    "Des solutions sur mesure qui priorisent et répondent aux besoins biologiques de chaque animal.",
  personnalite: ["Force tranquille", "Pédagogue & accessible", "Franche", "Enthousiaste", "Solidaire"],
  valeurs: ["Transmission", "Empathie", "Honnêteté", "Éthique"],
};

export const piliers = [
  {
    titre: "Une garde qui comprend",
    texte:
      "Vos habitudes, ses rituels, ses signaux. Chaque visite suit le rythme de l'animal, pas l'inverse, et vous recevez des nouvelles à chaque passage.",
  },
  {
    titre: "Des besoins biologiques d'abord",
    texte:
      "Alimentation, sommeil, exploration, contacts sociaux : on part de ce dont l'espèce a biologiquement besoin avant de parler de dressage ou d'accessoires.",
  },
  {
    titre: "Un accompagnement qui dure",
    texte:
      "De l'adoption au grand âge, on vous transmet les repères pour décider sereinement, et être en mesure de solutionner les problématiques individuelles liées à votre animal ou votre situation.",
  },
];

/* ------------------------------------------------------------------ */
/* GARDE D'ANIMAUX                                                     */
/* ------------------------------------------------------------------ */

/**
 * ⚠️ À COMPLÉTER — La brochure tarifaire « Garde d'animaux » n'était pas
 * fournie dans les documents sources (seule celle du Conseil à l'adoption
 * l'était). La structure ci-dessous est une proposition : il suffit de
 * renseigner `prix` (et `prixPromo` si l'offre de lancement s'applique)
 * pour que les tarifs s'affichent. Tant que `prix` vaut `null`, la carte
 * affiche « Sur demande ».
 */
export type Prestation = {
  /** identifiant stable : deux prestations peuvent porter le même nom */
  id: string;
  nom: string;
  detail: string;
  duree?: string;
  prix: string | null;
  prixPromo?: string | null;
  inclus?: string[];
};

export const prestationsGarde: Prestation[] = [
  {
    id: "visite-30",
    nom: "Visite à domicile",
    detail:
      "Repas, eau fraîche, litière ou sortie hygiénique, jeu et câlins. Pour les chiens, les chats et les NACs.",
    duree: "30 min",
    prix: null,
    inclus: ["Compte rendu photo à chaque passage", "Relevé des quantités mangées et bues"],
  },
  {
    id: "visite-60",
    nom: "Visite à domicile",
    detail:
      "Le même soin, avec du temps en plus : enrichissement, brossage, séance de jeu structurée, surveillance d'un traitement. Pour les chiens, les chats et les NACs.",
    duree: "1 h",
    prix: null,
    inclus: [
      "Compte rendu photo à chaque passage",
      "Relevé des quantités mangées et bues",
      "Administration de traitements",
      "Enrichissement adapté à l'espèce",
    ],
  },
  {
    id: "promenade",
    nom: "Promenade",
    detail:
      "Une sortie pensée pour la dépense réelle du chien : reniflage, exploration, rythme choisi selon son âge et son état de forme.",
    duree: "30 min à 1 h",
    prix: null,
    inclus: ["Parcours adapté à l'âge et au gabarit", "Retour lavé et séché si besoin", "Compte rendu de balade"],
  },
  {
    id: "pension",
    nom: "Pension",
    detail:
      "Votre animal est accueilli à mon domicile, comme un membre à part entière de ma famille. Proposée à la demi-journée, journée complète, nuitée ou séjour de plusieurs jours. Pour les chiens et les NACs uniquement.",
    duree: "Journée ou séjour",
    prix: null,
    inclus: [
      "Nouvelles quotidiennes (photos et messages)",
      "Sorties, jeux et présence continue",
      "Espace individuel mis à sa disposition et adapté à ses besoins",
      "Lien social maintenu",
    ],
  },
  {
    id: "transport",
    nom: "Transport et accompagnement",
    detail:
      "Rendez-vous vétérinaire, toiletteur, gare : un trajet calme, avec le temps de rassurer avant et après.",
    duree: "Sur mesure",
    prix: null,
    inclus: ["Véhicule aménagé", "Restitution du compte rendu vétérinaire", "Transport en caisse sécurisée"],
  },
  {
    id: "coup-de-frais",
    nom: "« Coup de frais »",
    detail: "Votre logement veillé pendant votre absence.",
    duree: "Sur mesure",
    prix: null,
    inclus: [
      "Arrosage des plantes",
      "Relève du courrier",
      "Aération du logement",
      "Nourrissage des poissons",
    ],
  },
];

export const gardeDeroule = [
  {
    titre: "On se parle",
    texte: "Un premier échange téléphonique gratuit pour comprendre votre besoin, vos dates et votre animal.",
  },
  {
    titre: "On se rencontre",
    texte:
      "Rencontre à votre domicile, avec votre animal : habitudes, alimentation, santé, signaux à connaître, remise des clés.",
  },
  {
    titre: "Vous partez tranquille",
    texte:
      "Chaque passage ou journée en pension donne lieu à un compte rendu avec photos. Vous savez comment il va, sans avoir à demander.",
  },
  {
    titre: "On débriefe",
    texte:
      "À votre retour, un point rapide : ce qui s'est bien passé, ce qui mérite un ajustement dans son quotidien.",
  },
];

export const faqGarde = [
  {
    q: "Quels animaux gardez-vous ?",
    r: "Chiens, chats et NAC (nouveaux animaux de compagnie d'espèces domestiques) : lapins, cochons d'Inde, rongeurs, furets, oiseaux, amphibiens et poissons. Chaque espèce a des besoins spécifiques, et c'est justement le point de départ de notre travail. Je ne prends pas en charge les NAC d'espèces non domestiques (serpent, oiseau exotique, mygale, etc.), qui nécessitent une formation spécifique et dont le cadre légal est très différent.",
  },
  {
    q: "Où intervenez-vous ?",
    r: "Pour la garde d'animaux à votre domicile, au départ de Vignoc, dans un rayon d'environ 15 km : c'est-à-dire toute la périphérie nord de Rennes (La Mézière, La Chapelle-des-Fougeretz, Hédé-Bazouges, Tinténiac, Melesse, Saint-Grégoire, Montgermont, et autres communes alentour). Au-delà de 15 km, une indemnité kilométrique de 0,665 €/km supplémentaire est appliquée.",
  },
  {
    q: "Mon animal suit un traitement, est-ce un problème ?",
    r: "Non. L'administration de traitements par voie orale ou cutanée (traitement des insuffisances rénales, hypertensions, dermatites, parasites...) est possible : nous en parlons lors de la rencontre à domicile et le protocole est noté noir sur blanc. L'administration de médicaments par voie parentérale (comme les injections) est un acte de médecine vétérinaire que je ne suis pas habilitée à pratiquer.",
  },
  {
    q: "Comment recevez-vous des nouvelles ?",
    r: "À chaque passage, vous recevez un message avec photos ou vidéos : ce qu'il a mangé, comment il s'est comporté, ce qui a été fait. Aucun besoin de relancer.",
  },
  {
    q: "Faut-il réserver longtemps à l'avance ?",
    r: "Pour les vacances scolaires et les ponts, mieux vaut réserver plusieurs semaines à l'avance. Pour le reste de l'année, quelques jours suffisent le plus souvent. N'hésitez pas à demander même à la dernière minute.",
  },
  {
    q: "Êtes-vous assurée et déclarée ?",
    r: "Oui. Les Gambadeurs est une société déclarée, titulaire de l'ACACED (Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques) et couverte par une assurance responsabilité civile professionnelle.",
  },
];

/* ------------------------------------------------------------------ */
/* CONSEIL À L'ADOPTION — source : brochure tarifaire officielle        */
/* ------------------------------------------------------------------ */

/**
 * Offre de lancement. Elle s'éteint d'elle-même après `finLe` : plus de prix
 * barrés ni de mention « -40 % ». Le site étant pré-rendu, la date est évaluée
 * à chaque déploiement — pour prolonger une offre, modifier `finLe` et redéployer.
 */
const FIN_OFFRE = "2026-08-31T23:59:59+02:00";
export const offreLancement = {
  actif: Date.now() <= new Date(FIN_OFFRE).getTime(),
  remise: "-40 %",
  jusquau: "31 août 2026",
  finLe: FIN_OFFRE,
};

export const prestationsAdoption: Prestation[] = [
  {
    id: "premier-echange",
    nom: "Premier échange",
    detail:
      "Par téléphone. On fait connaissance, vous racontez votre projet, je vous dis franchement ce qui est réaliste et ce qui ne l'est pas.",
    duree: "Téléphone",
    prix: "Offert",
    prixPromo: null,
    inclus: ["Sans engagement", "Vos envies, votre calendrier", "Premières orientations"],
  },
  {
    id: "entretien",
    nom: "Entretien découverte",
    detail:
      "À votre domicile. On analyse votre mode de vie, votre logement, votre entourage, votre budget et votre disponibilité réelle.",
    duree: "1 h 30 à 2 h",
    prix: "80 €",
    prixPromo: "48 €",
    inclus: ["Visite du lieu de vie", "Analyse du rythme quotidien", "Questions ouvertes, réponses honnêtes"],
  },
  {
    id: "compte-rendu",
    nom: "Compte rendu & suggestions sur mesure",
    detail:
      "Sous forme de livret : les espèces, races et profils qui correspondent vraiment à votre situation, et ceux à éviter.",
    duree: "Livret",
    prix: "30 €",
    prixPromo: "18 €",
    inclus: ["Livret personnalisé", "Profils compatibles argumentés", "Budget réel à prévoir"],
  },
  {
    id: "guide-accueil",
    nom: "Guide d'accueil personnalisé",
    detail:
      "Le mode d'emploi de vos premiers mois ensemble : matériel, alimentation, éducation, carnet d'adresses local et suivi.",
    duree: "Carnet d'adresses & suivi",
    prix: "30 €",
    prixPromo: "18 €",
    inclus: ["Checklist avant l'arrivée", "Carnet d'adresses (véto, éducateur, toiletteur)", "Suivi des premiers pas"],
  },
];

export const adoptionPourquoi = [
  {
    titre: "Parce qu'un coup de cœur n'est pas un projet",
    texte:
      "Un animal choisi sur une photo, c'est dix à quinze ans de quotidien décidés en trente secondes. On prend le temps de vérifier que l'histoire tient debout.",
  },
  {
    titre: "Parce que chaque espèce a ses règles",
    texte:
      "Un lapin n'est pas un rongeur, un chiot de berger n'est pas un chien d'appartement, un chat d'élevage n'a pas les besoins d'un chat de refuge. Ces détails changent tout.",
  },
  {
    titre: "Parce qu'un abandon commence souvent par un malentendu",
    texte:
      "La plupart des séparations naissent d'un besoin non compris, pas d'un manque d'amour. Anticiper coûte infiniment moins cher qu'un renoncement.",
  },
];

export const faqAdoption = [
  {
    q: "À quel moment faut-il vous appeler ?",
    r: "Le plus tôt possible : idéalement avant même d'avoir choisi une espèce ou une race, et en tout cas avant de contacter un éleveur ou un refuge. C'est là que l'accompagnement change vraiment quelque chose. Si l'adoption est déjà en cours mais qu'il subsiste des questions, des doutes, un besoin de se faire accompagner : c'est possible aussi.",
  },
  {
    q: "Vous vendez ou placez des animaux ?",
    r: "Non, jamais. Je n'ai aucun lien commercial avec des éleveurs, des refuges ou des animaleries : mon seul rôle est de vous aider à décider. C'est ce qui garantit la neutralité du conseil.",
  },
  {
    q: "Et si votre conseil est de ne pas adopter maintenant ?",
    r: "Je vous le dirai franchement, avec les raisons. Différer une adoption de six mois ou renoncer à une race trop exigeante évite bien plus de souffrance, pour l'animal comme pour vous, qu'un encouragement de complaisance.",
  },
  {
    q: "Je veux un NAC, vous vous y connaissez ?",
    r: "Oui : lapins, cochons d'Inde, rongeurs, furets, oiseaux, amphibiens. Ce sont souvent les espèces les plus mal accueillies, parce que leurs besoins réels (espace, congénères, température, alimentation) sont très éloignés de ce qu'on trouve en animalerie.",
  },
  {
    q: "Combien coûte l'accompagnement complet ?",
    r: `Le premier échange téléphonique est offert. Le parcours complet (entretien découverte, livret de suggestions et guide d'accueil) revient à 140 €${
      offreLancement.actif ? `, ramenés à 84 € pendant l'offre de lancement, jusqu'au ${offreLancement.jusquau}` : ""
    }. Chaque étape reste indépendante.`,
  },
  {
    q: "J'ai déjà un ou plusieurs animaux à la maison, ça change quoi ?",
    r: "Beaucoup. La compatibilité entre le/les résident(s) et le nouvel arrivant, leur espèce, leur âge, leur sexe, leur tempérament, leur territoire, fait partie intégrante de l'analyse, tout comme le protocole de présentation des premiers jours.",
  },
];

/* ------------------------------------------------------------------ */
/* ZONE D'INTERVENTION                                                 */
/* ------------------------------------------------------------------ */

/**
 * ⚠️ À VALIDER — Liste des communes citées en exemple pour le référencement
 * local. Elles se situent dans un rayon d'environ 30 km autour de Vignoc.
 * Ajoutez ou retirez librement : ces noms alimentent directement le SEO local.
 */
/**
 * Communes citées pour la garde d'animaux à domicile : rayon d'environ 15 km
 * autour de Vignoc, liste donnée par la cliente (correctifs FAQ du 24/08/26).
 */
export const communesGarde = [
  "Vignoc",
  "La Mézière",
  "La Chapelle-des-Fougeretz",
  "Hédé-Bazouges",
  "Tinténiac",
  "Melesse",
  "Saint-Grégoire",
  "Montgermont",
];

export const communes = [
  "Vignoc",
  "Hédé-Bazouges",
  "Guipel",
  "Langouët",
  "La Mézière",
  "Melesse",
  "Montreuil-le-Gast",
  "Saint-Symphorien",
  "Bécherel",
  "Romillé",
  "Cardroc",
  "Les Iffs",
  "Tinténiac",
  "Québriac",
  "Saint-Gondran",
  "Saint-Brieuc-des-Iffs",
  "Gévezé",
  "Betton",
  "Chevaigné",
  "Saint-Grégoire",
  "Pacé",
  "Rennes",
];

/* ------------------------------------------------------------------ */
/* QUI SUIS-JE                                                         */
/* ------------------------------------------------------------------ */

/**
 * ⚠️ À COMPLÉTER — Texte de présentation rédigé en brouillon, à réécrire
 * ou ajuster par la fondatrice (prénom, parcours, dates, expériences).
 * Remplacez `prenom` et relisez chaque paragraphe avant mise en ligne.
 */
export const fondatrice = {
  prenom: "", // ⚠️ ex. "Daphné" — laissé vide, le site s'adapte
  role: "Fondatrice des Gambadeurs",
  paragraphes: [
    "J'ai grandi entourée d'animaux, et longtemps j'ai cru que les aimer suffisait. C'est en observant, en me formant, puis en accompagnant d'autres foyers que j'ai compris à quel point nos évidences d'humains passent souvent à côté de ce dont ils ont réellement besoin.",
    "Les Gambadeurs est née de ce constat : la plupart des difficultés du quotidien, qu'il s'agisse de malpropreté, de destruction, d'agitation ou d'un refus de s'alimenter, ne sont pas des caprices. Ce sont des besoins biologiques qui cherchent une sortie. Les comprendre, c'est régler le problème à la racine plutôt que d'empiler les astuces.",
    "Aujourd'hui, je garde vos animaux quand vous vous absentez, je les observe et vous indique quelques ajustements personnalisés si besoin, et j'accompagne celles et ceux qui souhaitent adopter, pour que le choix soit juste dès le départ. Sans jugement, sans jargon.",
  ],
  competences: [
    {
      titre: "ACACED",
      detail:
        "Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques, la certification officielle exigée pour exercer une activité professionnelle auprès des chiens, chats et autres animaux de compagnie.",
    },
    {
      titre: "Besoins biologiques & éthologie",
      detail:
        "Lecture des signaux, budget-temps d'activité, enrichissement du milieu, gestion du stress : la base de toute intervention.",
    },
    {
      titre: "Nutrition",
      detail:
        "Rations ménagères, croquettes, alimentation crue, spécificités des NAC : comprendre les étiquettes et adapter selon l'âge et l'état de santé.",
    },
    {
      titre: "Comportement du quotidien",
      detail:
        "Propreté, solitude, cohabitation, arrivée d'un second animal, vieillissement : anticiper plutôt que corriger.",
    },
    {
      titre: "Soins & traitements",
      detail:
        "Administration de traitements, surveillance des animaux âgés ou convalescents, repérage des signaux d'alerte.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PHOTOS                                                              */
/* ------------------------------------------------------------------ */

export const photos = {
  // La fondatrice et ses gambadeurs, en extérieur
  balade: { src: "/photos/balade-chemin.jpg", alt: "Balade en sous-bois avec Joya, petite chienne spitz, sur un chemin de campagne" },
  riviere: { src: "/photos/bord-de-riviere.jpg", alt: "Pause au bord de la rivière avec une chienne noire, assises côte à côte" },
  jeuPelouse: { src: "/photos/jeu-pelouse.jpg", alt: "Séance de jeu sur la pelouse avec une chienne noire" },
  chatPelouse: { src: "/photos/chat-pelouse.jpg", alt: "Approche tout en douceur d'un chat tigré dans l'herbe" },
  chatJardin: { src: "/photos/chat-jardin.jpg", alt: "Un chat tigré observé au jardin, à distance respectueuse" },
  fondatriceJoya: { src: "/photos/fondatrice-joya.jpg", alt: "La fondatrice des Gambadeurs, assise avec Joya sur ses genoux" },
  fondatriceChat: { src: "/photos/fondatrice-chat.jpg", alt: "La fondatrice des Gambadeurs, joue contre joue avec un chat persan" },
  fondatriceTerrasse: { src: "/photos/fondatrice-terrasse.jpg", alt: "Moment calme sous la tonnelle avec Joya" },
  fondatriceCalin: { src: "/photos/fondatrice-calin.jpg", alt: "Câlin avec Joya sous la tonnelle du jardin" },
  // Les pensionnaires
  suzette: { src: "/photos/suzette-1.jpg", alt: "Suzette, chienne noire, le regard levé et attentif" },
  suzettePorte: { src: "/photos/suzette-2.jpg", alt: "Suzette assise au seuil de la porte du jardin" },
  joya: { src: "/photos/joya-1.jpg", alt: "Joya, petite chienne spitz, bien installée dans son sac de transport" },
  zen: { src: "/photos/zen-1.jpg", alt: "Zen, chat tigré, qui se lèche les babines" },
  naya: { src: "/photos/naya-1.jpg", alt: "Naya, chatte tigrée, se roulant dans l'herbe au soleil" },
  udonRepos: { src: "/photos/udon-1.jpg", alt: "Udon, chat persan au long pelage, étendu de tout son long sur le parquet" },
  udonArbre: { src: "/photos/udon-2.jpg", alt: "Udon au pied de son arbre à chat" },
  bountyPortrait: { src: "/photos/bounty-1.jpg", alt: "Bounty, chat noir et blanc, assis à l'angle du couloir" },
  bountyMarche: { src: "/photos/bounty-2.jpg", alt: "Bounty en pleine exploration de la cuisine" },
} as const;
