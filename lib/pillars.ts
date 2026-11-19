/**
 * LES PAGES PILIERS PAR MÉTIER (stratégie SEO du 19 novembre 2026).
 *
 * Search Console au 19/11 : zéro apparition sur la niche. Ces pages donnent à
 * Google une page à classer par métier, sur l'angle que personne n'occupe :
 * « sur mesure + luxe » (recherches FR et EN du 19/11, rapport dans la
 * conversation). Une page française et une page anglaise par métier, avec
 * leur propre adresse, reliées par hreflang.
 *
 * ⚠︎ RÈGLES DE CONTENU (garde-fous-publication.md, CLAUDE.md) :
 *   - rien d'inventé : aucun chiffre, aucun témoignage, aucune référence ;
 *   - aucune promesse de résultat commercial, aucun prix, aucune durée ;
 *   - ce qu'on construit = des capacités réellement livrées dans le secteur
 *     (le yachting : ce qui a été construit en octobre et novembre 2026),
 *     décrites en général, jamais comme le système d'un client nommé ;
 *   - la comparaison avec les logiciels du marché reste honnête et ne nomme
 *     aucun éditeur.
 */

export type L = { fr: string; en: string }

export type Pillar = {
  key: string
  /** Le petit dessin du métier (SectorGlyph). */
  glyph: number
  path: { fr: string; en: string }
  meta: { title: L; description: L }
  /** Pour le schéma Service. */
  serviceType: L
  label: L
  h1: { fr: [string, string]; en: [string, string] }
  sub: L
  /** Titres de section : [début, fin en italique rouge]. */
  whoTitle: { fr: [string, string]; en: [string, string] }
  buildsTitle: { fr: [string, string]; en: [string, string] }
  forWho: { title: L; text: L }[]
  pain: L
  builds: { title: L; text: L }[]
  compare: { intro: L; rows: { criterion: L; market: L; custom: L }[] }
  faq: { q: L; a: L }[]
}

export const YACHTING: Pillar = {
  key: 'yachting',
  glyph: 0,
  path: { fr: '/logiciel-gestion-yacht-sur-mesure', en: '/en/yacht-management-software' },
  meta: {
    title: {
      fr: 'Logiciel de gestion de yachts sur mesure | NateSystem',
      en: 'Custom Yacht Management Software | NateSystem',
    },
    description: {
      fr: 'Demandes, devis, APA, relevés propriétaires, équipage et documents : un logiciel construit autour de votre société de yachting. Le code vous appartient.',
      en: 'Enquiries, quotes, APA, owner statements, crew and documents: software built around your yacht charter or management company. You own the code.',
    },
  },
  serviceType: { fr: 'Logiciel de gestion de yachts sur mesure', en: 'Custom yacht management software' },
  label: { fr: 'Yachting · Charter · Gestion · Agents', en: 'Yachting · Charter · Management · Agents' },
  h1: {
    fr: ['Un logiciel de gestion de yachts, ', 'construit autour de votre flotte.'],
    en: ['Yacht management software, ', 'built around your fleet.'],
  },
  sub: {
    fr: 'Demandes, devis, APA, relevés propriétaires, équipage et documents au même endroit, sur la façon dont votre société travaille déjà. Conçu et codé à Tivat, au bord de Porto Montenegro. Le code et les données vous appartiennent.',
    en: 'Enquiries, quotes, APA, owner statements, crew and documents in one place, shaped on the way your company already works. Designed and coded in Tivat, by Porto Montenegro. You own the code and the data.',
  },
  whoTitle: {
    fr: ['Les sociétés qui font ', 'tourner les yachts.'],
    en: ['The companies that run ', 'the yachts.'],
  },
  buildsTitle: {
    fr: ['Tout au même endroit, ', 'bateau par bateau.'],
    en: ['Everything in one place, ', 'boat by boat.'],
  },
  forWho: [
    {
      title: { fr: 'Sociétés de charter', en: 'Charter companies' },
      text: {
        fr: 'Disponibilités, devis et réservations sur toute la flotte, sans refaire chaque devis à la main.',
        en: 'Availability, quotes and bookings across the fleet, without rebuilding every quote by hand.',
      },
    },
    {
      title: { fr: 'Sociétés de gestion de yachts', en: 'Yacht management companies' },
      text: {
        fr: 'Chaque dépense rattachée à son yacht, chaque relevé propriétaire prêt en fin de mois.',
        en: 'Every expense tied to its yacht, every owner statement ready at month end.',
      },
    },
    {
      title: { fr: 'Agents et brokers', en: 'Superyacht agents and brokers' },
      text: {
        fr: 'Chaque client, ses demandes et vos partenaires suivis au même endroit, bateau par bateau.',
        en: 'Each client, their requests and your partners followed in one place, boat by boat.',
      },
    },
  ],
  pain: {
    fr: 'Arrivées, avitaillement, disponibilités : chaque demande de charter repart de zéro, bateau par bateau. Chaque dépense avancée pour un yacht en gestion doit finir sur le relevé de son propriétaire, ligne par ligne. Et l’essentiel vit dans WhatsApp, dans des tableurs et dans la mémoire d’une ou deux personnes.',
    en: 'Arrivals, provisioning, availability: every charter enquiry starts from scratch, boat by boat. Every expense advanced for a managed yacht has to end up on its owner’s statement, line by line. And most of it lives in WhatsApp, in spreadsheets and in the memory of one or two people.',
  },
  builds: [
    {
      title: { fr: 'Les demandes et les devis', en: 'Enquiries and quotes' },
      text: {
        fr: 'Toutes les demandes dans une seule liste, d’où qu’elles viennent. Le devis se monte depuis votre flotte et vos tarifs, à vos couleurs.',
        en: 'Every enquiry in one list, wherever it comes from. The quote is built from your fleet and your rates, in your colours.',
      },
    },
    {
      title: { fr: 'Acomptes, soldes et APA', en: 'Deposits, balances and APA' },
      text: {
        fr: 'Pour chaque réservation : ce qui est payé, ce qui reste dû, et pour quand.',
        en: 'For each booking: what is paid, what is still due, and by when.',
      },
    },
    {
      title: { fr: 'Les relevés propriétaires', en: 'Owner statements' },
      text: {
        fr: 'Chaque dépense rattachée à son yacht avec sa facture, refacturée avec votre commission. Le relevé du mois part au propriétaire après votre validation.',
        en: 'Every expense tied to its yacht with its invoice, recharged with your commission. The monthly statement goes to the owner once you approve it.',
      },
    },
    {
      title: { fr: 'La mise en gestion d’un yacht', en: 'Taking on a new yacht' },
      text: {
        fr: 'De la première évaluation à l’accord du propriétaire, puis l’accès de l’équipage et les documents de douane, étape par étape.',
        en: 'From the first assessment to the owner’s approval, then crew access and customs documents, step by step.',
      },
    },
    {
      title: { fr: 'Check-in, check-out et maintenance', en: 'Check-in, check-out and maintenance' },
      text: {
        fr: 'Chaque bateau contrôlé à l’arrivée et au départ, photos à l’appui. Les tâches de maintenance sont attribuées à un responsable.',
        en: 'Each boat checked in and out, with photos. Maintenance tasks are assigned to a manager.',
      },
    },
    {
      title: { fr: 'Équipage, fournisseurs et documents', en: 'Crew, suppliers and documents' },
      text: {
        fr: 'Rangés par bateau, avec le statut de chaque document.',
        en: 'Filed per boat, with the status of every document.',
      },
    },
    {
      title: { fr: 'Les espaces propriétaires et clients', en: 'Owner and client spaces' },
      text: {
        fr: 'Le propriétaire voit ses relevés et ses documents. Le client de charter voit ce qu’il a payé et ce qu’il lui reste à payer.',
        en: 'Owners see their statements and documents. Charter clients see what they have paid and what is left to pay.',
      },
    },
    {
      title: { fr: 'La journée de l’équipe', en: 'The team’s day' },
      text: {
        fr: 'Les tâches du jour, le calendrier partagé et ce qui demande une action, pour tout le bureau.',
        en: 'Today’s tasks, the shared calendar and what needs attention, for the whole office.',
      },
    },
  ],
  compare: {
    intro: {
      fr: 'Il existe de bons logiciels de yachting prêts à l’emploi. Si l’un d’eux couvre ce que vous faites, prenez-le : l’audit vous le dira. Le sur mesure se justifie quand votre façon de travailler ne rentre pas dans leurs cases.',
      en: 'There are good ready-made yacht software packages. If one of them covers what you do, take it: the audit will tell you so. Custom makes sense when the way you work does not fit their boxes.',
    },
    rows: [
      {
        criterion: { fr: 'Votre façon de travailler', en: 'The way you work' },
        market: { fr: 'Vous vous adaptez au logiciel', en: 'You adapt to the software' },
        custom: { fr: 'Le logiciel suit votre façon de faire', en: 'The software follows the way you work' },
      },
      {
        criterion: { fr: 'Propriété', en: 'Ownership' },
        market: { fr: 'Un abonnement, sur leurs serveurs', en: 'A subscription, on their servers' },
        custom: { fr: 'Le code et les données sont à vous', en: 'The code and the data are yours' },
      },
      {
        criterion: { fr: 'Ce que voient vos propriétaires et clients', en: 'What your owners and clients see' },
        market: { fr: 'Leur portail', en: 'Their portal' },
        custom: { fr: 'Votre portail, à vos couleurs', en: 'Your portal, in your colours' },
      },
      {
        criterion: { fr: 'Une évolution dont vous avez besoin', en: 'A change you need' },
        market: { fr: 'Elle attend leur feuille de route', en: 'It waits for their roadmap' },
        custom: { fr: 'Elle se construit quand vous en avez besoin', en: 'It gets built when you need it' },
      },
      {
        criterion: { fr: 'Le meilleur choix quand', en: 'The better choice when' },
        market: { fr: 'Votre activité suit le modèle standard', en: 'Your activity follows the standard model' },
        custom: { fr: 'Vous mêlez charter, gestion et services, avec des propriétaires exigeants', en: 'You mix charter, management and services, with demanding owners' },
      },
    ],
  },
  faq: [
    {
      q: { fr: 'Faut-il abandonner le logiciel que nous utilisons déjà ?', en: 'Do we have to drop the software we already use?' },
      a: {
        fr: 'Non. On part de ce que vous avez : certaines sociétés gardent leur outil de comptabilité ou de réservation, d’autres remplacent des tableurs et des fils WhatsApp. L’audit décide de ce qu’on garde.',
        en: 'No. We start from what you have. Some companies keep their accounting or booking tool, others replace spreadsheets and WhatsApp threads. The audit decides what stays.',
      },
    },
    {
      q: { fr: 'À qui appartient le logiciel ?', en: 'Who owns the software?' },
      a: {
        fr: 'À vous. Le code et les données vous appartiennent à 100 %, hébergés en Europe ou aux États-Unis selon où vous êtes.',
        en: 'You do. The code and the data are 100% yours, hosted in Europe or in the United States depending on where you are.',
      },
    },
    {
      q: { fr: 'Ça marche sur téléphone, à bord ?', en: 'Does it work on a phone, on board?' },
      a: {
        fr: 'Oui. L’équipe fait les check-in et les check-out depuis son téléphone, photos comprises.',
        en: 'Yes. Your team checks boats in and out from a phone, photos included.',
      },
    },
    {
      q: { fr: 'Travaillez-vous seulement au Monténégro ?', en: 'Do you only work in Montenegro?' },
      a: {
        fr: 'Non. Nous sommes basés à Tivat et rencontrons nos clients sur place autour de la baie de Kotor. Le reste du travail se fait à distance, avec des clients en France, en Suisse, en Espagne, en Hongrie, aux États-Unis et aux Émirats.',
        en: 'No. We are based in Tivat and meet clients in person around the Bay of Kotor. The rest of the work is remote, with clients in France, Switzerland, Spain, Hungary, the United States and the UAE.',
      },
    },
    {
      q: { fr: 'Qui construit l’outil ?', en: 'Who builds the tool?' },
      a: {
        fr: 'Nathan Goutagny, le fondateur. Celui qui vous écoute est celui qui code : pas de commercial, pas de développeur junior entre vous.',
        en: 'Nathan Goutagny, the founder. The person who listens to you is the person who writes the code: no sales rep, no junior developer in between.',
      },
    },
    {
      q: { fr: 'Comment on commence ?', en: 'How do we start?' },
      a: {
        fr: 'Par un audit gratuit : on regarde ensemble comment votre société travaille aujourd’hui, et vous repartez avec votre audit.',
        en: 'With a free audit: we look together at how your company works today, and you leave with your audit.',
      },
    },
  ],
}

export const PILLARS: Pillar[] = [YACHTING]

/** Les paires français ↔ anglais, pour le drapeau de langue et le sitemap. */
export const PILLAR_PAIRS: { fr: string; en: string }[] = PILLARS.map((p) => p.path)
