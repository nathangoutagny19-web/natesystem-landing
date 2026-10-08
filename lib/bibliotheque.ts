/**
 * LE CONTENU DE LA BIBLIOTHÈQUE.
 *
 * Miroir des `value_assets` publiés du cockpit (natesystem-crm). Il est tenu à
 * la main, comme `lib/case-studies.ts` : le site est généré statiquement, et
 * ouvrir une connexion à Supabase depuis la landing pour trois lignes qui
 * bougent une fois par mois coûterait plus cher que ça ne rapporte.
 *
 * AJOUTER UN ASSET : une entrée ici, et il apparaît, avec sa page
 * `/bibliotheque/<slug>`, son entrée au sitemap et ses filtres. Vérifier que le
 * titre et le résultat correspondent à ce que dit le cockpit, sinon les deux
 * divergent.
 *
 * ⚠︎ CE QUI SE TROUVE DERRIÈRE LA PORTE, CE SONT LES LIVRABLES, PAS LA VIDÉO.
 * Les vidéos sont publiques sur YouTube, les cacher n'aurait aucun sens et se
 * contournerait en une recherche. Ce qu'on échange contre un email, c'est la
 * cartographie, les grilles, les modèles : ce qui n'existe nulle part ailleurs.
 *
 * ⚠︎ LA CIBLE, DEPUIS LE 8 OCTOBRE 2026 : L'HÔTELLERIE DE LUXE. Villas,
 * domaines, maisons de réception, petits hôtels, conciergeries, chalets,
 * yachts. Les restaurants n'en font PAS partie, même si un cas client vient de
 * la restauration : on ne les présente jamais comme une cible.
 *
 * ⚠︎ RIEN NE S'AFFICHE S'IL N'EXISTE PAS. `ASSETS_PUBLIES` écarte tout asset
 * sans vidéo ni fichier prêt. Les ressources prévues vivent dans `PLANNED`,
 * plus bas, en commentaire : elles n'apparaissent nulle part sur le site tant
 * que Nathan n'a pas validé un affichage « à venir ».
 */

import { RESSOURCES_HOTELLERIE } from './bibliotheque-hotellerie'

/* ——— Les trois axes de filtre ——— */

/** Le type d'établissement. `tous` = la ressource vaut pour chacun d'eux. */
export type Secteur =
  | 'villa'
  | 'domaine'
  | 'maison-de-reception'
  | 'hotel-boutique'
  | 'conciergerie'
  | 'chalet'
  | 'yacht'

export const SECTEURS: { id: Secteur; fr: string; en: string }[] = [
  { id: 'villa', fr: 'Villa', en: 'Villa' },
  { id: 'domaine', fr: 'Domaine', en: 'Estate' },
  { id: 'maison-de-reception', fr: 'Maison de réception', en: 'Event venue' },
  { id: 'hotel-boutique', fr: 'Petit hôtel', en: 'Boutique hotel' },
  { id: 'conciergerie', fr: 'Conciergerie', en: 'Concierge service' },
  { id: 'chalet', fr: 'Chalet', en: 'Chalet' },
  { id: 'yacht', fr: 'Yacht', en: 'Yacht' },
]

export const SECTEUR_IDS = SECTEURS.map((s) => s.id)

/** Les cinq thèmes de la bibliothèque. */
export type Categorie = 'operations' | 'ia' | 'marketing' | 'experience' | 'construire'

export const CATEGORIES: { id: Categorie; fr: string; en: string }[] = [
  { id: 'operations', fr: 'Opérations et outils', en: 'Operations and tools' },
  { id: 'ia', fr: 'L’IA en pratique', en: 'AI in practice' },
  { id: 'marketing', fr: 'Marketing et contenu', en: 'Marketing and content' },
  { id: 'experience', fr: 'Expérience client', en: 'Guest experience' },
  { id: 'construire', fr: 'Construire soi-même', en: 'Build it yourself' },
]

export type Format = 'guide' | 'modele' | 'checklist' | 'grille' | 'video' | 'outil'

export const FORMATS: Record<Format, { fr: string; en: string }> = {
  guide: { fr: 'Guide', en: 'Guide' },
  modele: { fr: 'Modèle', en: 'Template' },
  checklist: { fr: 'Checklist', en: 'Checklist' },
  grille: { fr: 'Grille', en: 'Grid' },
  video: { fr: 'Vidéo', en: 'Video' },
  outil: { fr: 'Outil', en: 'Tool' },
}

/* ——— Les assets ——— */

export type Livrable = {
  /** Ce que la personne obtient, en une ligne. */
  fr: string
  en: string
  /** Le fichier dans /public, ou null tant qu'il n'est pas produit. */
  fichier: string | null
}

/**
 * LE CONTENU LISIBLE SUR LA PAGE, bloc par bloc.
 *
 * Une ressource peut vivre directement dans la page, sans fichier à
 * télécharger : sur téléphone, un PDF s'ouvre mal et ne se relit jamais. Les
 * `apercu` premiers blocs sont visibles par tous (on montre avant de
 * demander), le reste s'ouvre avec la porte.
 */
export type Bloc =
  | { t: 'titre'; fr: string; en?: string }
  | { t: 'texte'; fr: string; en?: string }
  | { t: 'note'; fr: string; en?: string }
  /** `coche` : une checklist qu'on coche à l'écran. `numero` : liste numérotée. */
  | {
      t: 'liste'
      coche?: boolean
      numero?: boolean
      items: { fr: string; en?: string; detailFr?: string; detailEn?: string }[]
    }
  /** Une consigne à copier dans un assistant, avec son bouton Copier. */
  | { t: 'prompt'; titreFr: string; titreEn?: string; fr: string; en?: string }

export type Asset = {
  slug: string
  /** L'identifiant YouTube, ou null si la vidéo n'est pas encore tournée.
   *  Une par langue : Nathan tourne deux versions, pas une version sous-titrée. */
  videoId: string | null
  videoIdEn?: string | null
  /** Seconde de départ, pour sauter une intro. */
  start?: number
  /** Temps de lecture, de visionnage ou d'usage, en minutes. */
  dureeMin: number
  dateFr: string
  dateEn: string
  titreFr: string
  titreEn: string
  /** Le problème que l'asset traite. Deux phrases maximum. */
  douleurFr: string
  douleurEn: string
  /** Une précision sur une source, affichée sous le problème. Sert à cadrer un
   *  chiffre client comme rapporté par le client, jamais comme mesuré. */
  sourceFr?: string
  sourceEn?: string
  /** Les métiers concernés. `['tous']` = valable pour chacun. Un tableau VIDE
   *  = hors de la bibliothèque hôtellerie : la page de l'asset existe encore
   *  (ses liens déjà partagés restent bons), mais il n'est pas listé. */
  secteurs: (Secteur | 'tous')[]
  categorie: Categorie
  format: Format
  livrables: Livrable[]
  /** Le contenu lu sur la page. Absent = la ressource est une vidéo et ses
   *  fichiers. */
  contenu?: Bloc[]
  /** Combien de blocs de `contenu` se lisent avant la porte. */
  apercu?: number
}

export const ASSETS: Asset[] = [
  ...RESSOURCES_HOTELLERIE,
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
    sourceFr: 'Les 40 heures par mois sont rapportées par l’Institut des Chartreux, elles ne sont pas mesurées par NateSystem.',
    sourceEn: 'The 40 hours a month are reported by Institut des Chartreux, not measured by NateSystem.',
    /* « tous » : le cas vient d'une école, mais ce qu'il enseigne vaut partout.
       Le comptage d'heures d'une équipe répartie sur plusieurs sites, et la
       grille des 11 questions « logiciel du marché ou sur mesure », ne sont pas
       propres à l'enseignement. */
    secteurs: ['tous'],
    categorie: 'operations',
    format: 'video',
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
    videoId: 'FjpwHd82GYI',
    videoIdEn: 'jRz_VDB-E9o',
    dureeMin: 17,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr:
      'Comment créer vos propres outils pédagogiques, sans savoir coder, en 17 minutes',
    titreEn: 'How to build your own teaching tools without knowing how to code, in 15 minutes',
    douleurFr:
      'Les outils dont vos équipes ont besoin n’existent sur aucun catalogue. On répond au directeur qu’il faut un développeur, un budget et six mois.',
    douleurEn:
      'The tools your teams need are on no catalogue. The head of school is told it takes a developer, a budget and six months.',
    /* Hors de la bibliothèque hôtellerie : bulletins, appréciations, élèves. Le
       présenter à une conciergerie serait faux. Sa page reste en ligne pour les
       liens déjà envoyés aux écoles. */
    secteurs: [],
    categorie: 'construire',
    format: 'video',
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

/** Les assets réellement montrables : une vidéo, un livrable prêt, ou un
 *  contenu écrit sur la page. */
export const ASSETS_PUBLIES = ASSETS.filter(
  (a) =>
    a.videoId !== null ||
    a.livrables.some((l) => l.fichier !== null) ||
    (a.contenu?.length ?? 0) > 0
)

/** Ceux que la bibliothèque hôtellerie liste. */
export const ASSETS_LISTES = ASSETS_PUBLIES.filter((a) => a.secteurs.length > 0)

export function assetParSlug(slug: string): Asset | undefined {
  return ASSETS_PUBLIES.find((a) => a.slug === slug)
}

/** Un asset concerne-t-il ce métier ? `tous` répond oui à chacun. */
export function concerne(a: Asset, secteur: Secteur): boolean {
  return a.secteurs.includes('tous') || a.secteurs.includes(secteur)
}

/* ——— PLANNED ———
 *
 * Les sept ressources tirées des appels et des recherches d'octobre 2026
 * (~/Business/Commercial/6:10prospection/douleurs-conciergeries-voyage-luxe-2026-10-06.md)
 * sont écrites, dans `lib/bibliotheque-hotellerie.ts`. Le français est fait,
 * l'anglais attend la relecture de Nathan. Une prochaine idée s'ajoute ici,
 * en titre seulement, jusqu'à ce qu'elle soit écrite.
 */

/**
 * Le lien vers une page de la bibliothèque, selon la langue affichée.
 *
 * La bibliothèque existe en français et en anglais, pas en hongrois, et elle
 * n'est pas dans TRANSLATED_ROUTES (qui produirait des /hu/bibliotheque en 404
 * au sitemap). D'où ce petit aiguillage à part : `/en` en anglais, le français
 * partout ailleurs.
 */
export function lienBiblio(path: string, lang: string): string {
  return lang === 'en' ? `/en${path}` : path
}
