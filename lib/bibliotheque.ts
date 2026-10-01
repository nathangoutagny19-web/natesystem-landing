/**
 * LE CONTENU DE LA BIBLIOTHÈQUE.
 *
 * Miroir des `value_assets` publiés du cockpit (natesystem-crm). Il est tenu à
 * la main, comme `lib/case-studies.ts` : le site est généré statiquement, et
 * ouvrir une connexion à Supabase depuis la landing pour trois lignes qui
 * bougent une fois par mois coûterait plus cher que ça ne rapporte.
 *
 * AJOUTER UN ASSET : une entrée ici, et il apparaît. Vérifier que le titre et
 * le résultat correspondent à ce que dit le cockpit, sinon les deux divergent.
 *
 * ⚠︎ CE QUI SE TROUVE DERRIÈRE LA PORTE, CE SONT LES LIVRABLES, PAS LA VIDÉO.
 * Les vidéos sont publiques sur YouTube, les cacher n'aurait aucun sens et se
 * contournerait en une recherche. Ce qu'on échange contre un email, c'est la
 * cartographie, les grilles, les modèles : ce qui n'existe nulle part ailleurs.
 */

export type Livrable = {
  /** Ce que la personne obtient, en une ligne. */
  fr: string
  en: string
  /** Le fichier dans /public, ou null tant qu'il n'est pas produit. */
  fichier: string | null
}

export type Asset = {
  slug: string
  /** L'identifiant YouTube, ou null si la vidéo n'est pas encore tournée. */
  videoId: string | null
  /** Seconde de départ, pour sauter une intro. */
  start?: number
  dureeMin: number
  dateFr: string
  dateEn: string
  titreFr: string
  titreEn: string
  /** Le problème que l'asset traite. Deux phrases maximum. */
  douleurFr: string
  douleurEn: string
  livrables: Livrable[]
}

export const ASSETS: Asset[] = [
  {
    slug: 'pointeuse-9-tableurs',
    videoId: 'pfkWU9IDeGE',
    start: 34,
    dureeMin: 18,
    dateFr: 'Septembre 2026',
    dateEn: 'September 2026',
    titreFr:
      'Cette pointeuse sur mesure a remplacé 9 tableurs et rendu 40 h par mois, en 63 jours',
    titreEn:
      'This custom time clock replaced 9 spreadsheets and gave back 40 hours a month, in 63 days',
    douleurFr:
      'Le comptage des heures vit dans un tableur par site, des mails d’oubli de badge, et la tête du responsable. Le tableur n’est jamais parti, même après l’achat d’un logiciel.',
    douleurEn:
      'Hours tracking lives in one spreadsheet per site, in emails about forgotten badges, and in one person’s head. The spreadsheet never went away, not even after buying software.',
    livrables: [
      {
        fr: 'La cartographie du comptage d’heures, avec son code couleur',
        en: 'The hours-tracking map, with its colour code',
        fichier: null,
      },
      {
        fr: 'Les 11 questions qui disent si un logiciel du marché peut suffire',
        en: 'The 11 questions that tell you whether off-the-shelf software will do',
        fichier: null,
      },
      {
        fr: '4 modèles de suivi, à adapter à votre convention',
        en: '4 tracking templates, to adapt to your own agreement',
        fichier: null,
      },
    ],
  },
  {
    slug: 'outils-pedagogiques-sans-coder',
    videoId: null,
    dureeMin: 20,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr:
      'Comment créer vos propres outils pédagogiques sans savoir coder, en une après-midi',
    titreEn: 'How to build your own teaching tools without coding, in one afternoon',
    douleurFr:
      'Les outils dont vos équipes ont besoin n’existent sur aucun catalogue. On répond au directeur qu’il faut un développeur, un budget et six mois.',
    douleurEn:
      'The tools your teams need are on no catalogue. The head of school is told it takes a developer, a budget and six months.',
    livrables: [
      {
        fr: 'Un générateur d’appréciations de bulletins, construit en direct',
        en: 'A report-comment generator, built live',
        fichier: null,
      },
      {
        fr: 'La méthode en trois temps : décrire, regarder, corriger',
        en: 'The three-step method: describe, look, fix',
        fichier: null,
      },
    ],
  },
]

/** Les assets réellement montrables : une vidéo OU au moins un livrable prêt. */
export const ASSETS_PUBLIES = ASSETS.filter(
  (a) => a.videoId !== null || a.livrables.some((l) => l.fichier !== null)
)
