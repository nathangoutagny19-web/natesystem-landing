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


/* ——— Briques communes aux pages piliers (mêmes faits, mêmes mots) ——— */
const ROW_WAY = {
  criterion: { fr: 'Votre façon de travailler', en: 'The way you work' },
  market: { fr: 'Vous vous adaptez au logiciel', en: 'You adapt to the software' },
  custom: { fr: 'Le logiciel suit votre façon de faire', en: 'The software follows the way you work' },
}
const ROW_OWN = {
  criterion: { fr: 'Propriété', en: 'Ownership' },
  market: { fr: 'Un abonnement, sur leurs serveurs', en: 'A subscription, on their servers' },
  custom: { fr: 'Le code et les données sont à vous', en: 'The code and the data are yours' },
}
const ROW_CHANGE = {
  criterion: { fr: 'Une évolution dont vous avez besoin', en: 'A change you need' },
  market: { fr: 'Elle attend leur feuille de route', en: 'It waits for their roadmap' },
  custom: { fr: 'Elle se construit quand vous en avez besoin', en: 'It gets built when you need it' },
}
const FAQ_OWN = {
  q: { fr: 'À qui appartient le logiciel ?', en: 'Who owns the software?' },
  a: {
    fr: 'À vous. Le code et les données vous appartiennent à 100 %, hébergés en Europe ou aux États-Unis selon où vous êtes.',
    en: 'You do. The code and the data are 100% yours, hosted in Europe or in the United States depending on where you are.',
  },
}
const FAQ_WHERE = {
  q: { fr: 'Travaillez-vous seulement au Monténégro ?', en: 'Do you only work in Montenegro?' },
  a: {
    fr: 'Non. Nous sommes basés à Tivat et rencontrons nos clients sur place autour de la baie de Kotor. Le reste du travail se fait à distance, avec des clients en France, en Suisse, en Espagne, en Hongrie, aux États-Unis et aux Émirats.',
    en: 'No. We are based in Tivat and meet clients in person around the Bay of Kotor. The rest of the work is remote, with clients in France, Switzerland, Spain, Hungary, the United States and the UAE.',
  },
}
const FAQ_WHO = {
  q: { fr: 'Qui construit l’outil ?', en: 'Who builds the tool?' },
  a: {
    fr: 'Nathan Goutagny, le fondateur. Celui qui vous écoute est celui qui code : pas de commercial, pas de développeur junior entre vous.',
    en: 'Nathan Goutagny, the founder. The person who listens to you is the person who writes the code: no sales rep, no junior developer in between.',
  },
}
const FAQ_START = {
  q: { fr: 'Comment on commence ?', en: 'How do we start?' },
  a: {
    fr: 'Par un audit gratuit : on regarde ensemble comment vous travaillez aujourd’hui, et vous repartez avec votre audit.',
    en: 'With a free audit: we look together at how you work today, and you leave with your audit.',
  },
}

/* ——— Conciergerie de luxe et travel designers ———
   Capacités réellement livrées : demandes suivies, fiche client et préférences
   (publiées), devis et itinéraires depuis une grille de prix, prestataires qui
   voient leur mission sans le numéro du client (publiées) ; forfaits et extras,
   facturation, tâches récurrentes prouvées, compte rendu mensuel (livrés en
   novembre 2026 pour une conciergerie de propriétés, client non nommé). */
export const CONCIERGE: Pillar = {
  key: 'conciergerie',
  glyph: 2,
  path: { fr: '/logiciel-conciergerie-de-luxe', en: '/en/luxury-concierge-software' },
  meta: {
    title: { fr: 'Logiciel sur mesure pour conciergerie de luxe | NateSystem', en: 'Custom Luxury Concierge Software | NateSystem' },
    description: {
      fr: 'Demandes, préférences clients, prestataires, devis et facturation au même endroit : un logiciel construit autour de votre conciergerie. Le code vous appartient.',
      en: 'Requests, client preferences, partners, quotes and invoicing in one place: software built around your concierge or travel design company. You own the code.',
    },
  },
  serviceType: { fr: 'Logiciel sur mesure pour conciergerie de luxe', en: 'Custom software for luxury concierge services' },
  label: { fr: 'Conciergerie privée · Lifestyle · Travel designers', en: 'Private concierge · Lifestyle management · Travel designers' },
  h1: {
    fr: ['Un logiciel pour votre conciergerie, ', 'qui se souvient de chaque client.'],
    en: ['Concierge software ', 'that remembers every client.'],
  },
  sub: {
    fr: 'Les demandes, les préférences, les prestataires, les devis et la facturation au même endroit, construits sur la façon dont votre maison travaille déjà. Le code et les données vous appartiennent.',
    en: 'Requests, preferences, partners, quotes and invoicing in one place, shaped on the way your house already works. You own the code and the data.',
  },
  whoTitle: { fr: ['Les maisons qui servent ', 'une clientèle exigeante.'], en: ['Houses that serve ', 'demanding clients.'] },
  buildsTitle: { fr: ['Chaque demande suivie, ', 'jusqu’à la facture.'], en: ['Every request followed ', 'through to the invoice.'] },
  forWho: [
    {
      title: { fr: 'Conciergeries privées', en: 'Private concierge services' },
      text: { fr: 'Les demandes de vos clients, à toute heure, attribuées et suivies jusqu’au bout.', en: 'Your clients’ requests, at any hour, assigned and followed through.' },
    },
    {
      title: { fr: 'Travel designers et DMC', en: 'Travel designers and DMCs' },
      text: { fr: 'Devis, itinéraires et partenaires confirmés, sans relance à la main.', en: 'Quotes, itineraries and confirmed partners, without chasing by hand.' },
    },
    {
      title: { fr: 'Conciergeries de destination', en: 'Destination concierges' },
      text: { fr: 'Villas, transferts, chefs et réservations pour vos clients de passage, au même endroit.', en: 'Villas, transfers, chefs and reservations for your visiting clients, in one place.' },
    },
  ],
  pain: {
    fr: 'Tout arrive sur WhatsApp, à toute heure, et tout passe par vous : chaque devis refait à la main, savoir quel partenaire a confirmé, ce que tel client préfère, ce qu’il reste à facturer. Et ce qu’il faut savoir sur chaque client tient dans la tête d’une ou deux personnes.',
    en: 'Everything comes in on WhatsApp, at all hours, and everything goes through you: every quote rebuilt by hand, which partner confirmed, what this client prefers, what is left to invoice. And what you need to know about each client sits in the heads of one or two people.',
  },
  builds: [
    { title: { fr: 'Toutes les demandes au même endroit', en: 'Every request in one place' }, text: { fr: 'Attribuées à quelqu’un, avec leur statut, d’où qu’elles viennent.', en: 'Assigned to someone, with their status, wherever they come from.' } },
    { title: { fr: 'La fiche de chaque client', en: 'Each client’s profile' }, text: { fr: 'Ses préférences, ses adresses, ses habitudes et tout ce qui a été fait pour lui, retrouvés en un instant.', en: 'Their preferences, addresses, habits and everything done for them, found in a second.' } },
    { title: { fr: 'Les devis et les itinéraires', en: 'Quotes and itineraries' }, text: { fr: 'Montés depuis votre grille de prix, à vos couleurs.', en: 'Built from your price grid, in your colours.' } },
    { title: { fr: 'Les prestataires et partenaires', en: 'Suppliers and partners' }, text: { fr: 'Qui a accepté, qui a refusé, qui relancer. Vos prestataires voient leur mission, jamais le numéro de vos clients.', en: 'Who accepted, who declined, who to chase. Your suppliers see their mission, never your clients’ numbers.' } },
    { title: { fr: 'Forfaits et extras', en: 'Packages and extras' }, text: { fr: 'Ce qui est compris dans le forfait, ce qui se facture en plus, et chaque extra retrouvé sur la facture.', en: 'What the package includes, what is billed on top, and every extra back on the invoice.' } },
    { title: { fr: 'La facturation', en: 'Invoicing' }, text: { fr: 'Les factures préparées depuis ce qui a été fait, numérotées et prêtes à partir.', en: 'Invoices prepared from what was done, numbered and ready to send.' } },
    { title: { fr: 'Les tâches récurrentes', en: 'Recurring tasks' }, text: { fr: 'Chaque jour, chaque semaine ou tel jour : elles se créent seules et se cochent sur place, preuve à l’appui.', en: 'Daily, weekly or on a set day: they create themselves and get ticked off on site, with proof.' } },
    { title: { fr: 'Le compte rendu du client', en: 'The client report' }, text: { fr: 'Ce qui a été fait pour lui dans le mois, prêt à envoyer.', en: 'What was done for them this month, ready to send.' } },
  ],
  compare: {
    intro: {
      fr: 'Il existe des logiciels de conciergerie prêts à l’emploi, souvent pensés pour la location saisonnière ou pour l’hôtellerie. Si l’un d’eux couvre ce que vous faites, prenez-le : l’audit vous le dira. Le sur mesure se justifie quand votre service ne rentre pas dans leurs cases.',
      en: 'There are ready-made concierge tools, often designed for short-term rentals or for hotels. If one of them covers what you do, take it: the audit will tell you so. Custom makes sense when your service does not fit their boxes.',
    },
    rows: [
      ROW_WAY,
      ROW_OWN,
      { criterion: { fr: 'Ce que voient vos clients', en: 'What your clients see' }, market: { fr: 'L’interface d’un éditeur', en: 'A vendor’s interface' }, custom: { fr: 'Votre maison, à vos couleurs', en: 'Your house, in your colours' } },
      ROW_CHANGE,
      { criterion: { fr: 'Le meilleur choix quand', en: 'The better choice when' }, market: { fr: 'Votre service suit un format standard', en: 'Your service follows a standard format' }, custom: { fr: 'Chaque client a ses habitudes et chaque demande est différente', en: 'Every client has their habits and every request is different' } },
    ],
  },
  faq: [
    {
      q: { fr: 'Mes clients écrivent sur WhatsApp. Que devient ce canal ?', en: 'My clients write on WhatsApp. What happens to that?' },
      a: {
        fr: 'Vos clients continuent de vous écrire où ils veulent. Chaque demande est notée dans l’outil, attribuée et suivie, pour que rien ne reste dans un téléphone.',
        en: 'Your clients keep writing wherever they like. Each request is logged in the tool, assigned and followed, so nothing stays stuck in a phone.',
      },
    },
    FAQ_OWN,
    {
      q: { fr: 'Est-ce adapté à un travel designer ?', en: 'Does it work for a travel designer?' },
      a: {
        fr: 'Oui. Les devis et les itinéraires se montent depuis votre grille de prix, et chaque partenaire voit sa mission sans voir vos clients.',
        en: 'Yes. Quotes and itineraries are built from your price grid, and each partner sees their mission without seeing your clients.',
      },
    },
    FAQ_WHERE,
    FAQ_WHO,
    FAQ_START,
  ],
}

/* ——— Gestion de villas, chalets et domaines de luxe ———
   Capacités réellement livrées : interventions prouvées en photo, compte
   rendu propriétaire, mise en route d'un bien (publiées) ; tâches récurrentes,
   forfaits et extras, refacturation (conciergerie de propriétés, nov. 2026) ;
   pointage avec photo, linge et stocks (un établissement lyonnais, depuis
   avril 2026) ; espaces propriétaires (yachting, nov. 2026). */
export const PROPERTIES: Pillar = {
  key: 'proprietes',
  glyph: 1,
  path: { fr: '/logiciel-gestion-villas-de-luxe', en: '/en/luxury-villa-management-software' },
  meta: {
    title: { fr: 'Logiciel de gestion de villas et domaines de luxe', en: 'Luxury Villa & Estate Management Software | NateSystem' },
    description: {
      fr: 'Interventions, prestataires, propriétaires, facturation : un logiciel sur mesure pour gérer villas, chalets et domaines de luxe. Le code vous appartient.',
      en: 'Jobs, suppliers, owners and invoicing in one place: custom software to manage luxury villas, chalets and estates. You own the code.',
    },
  },
  serviceType: { fr: 'Logiciel de gestion de villas et domaines de luxe', en: 'Luxury villa and estate management software' },
  label: { fr: 'Villas · Chalets · Domaines · Hôtels particuliers', en: 'Villas · Chalets · Estates · Private residences' },
  h1: {
    fr: ['Un logiciel pour gérer vos villas, ', 'maison par maison.'],
    en: ['Villa and estate management software, ', 'house by house.'],
  },
  sub: {
    fr: 'Les interventions, les prestataires, les propriétaires et la facturation au même endroit, construits sur la façon dont vous gérez déjà vos maisons. Le code et les données vous appartiennent.',
    en: 'Jobs, suppliers, owners and invoicing in one place, shaped on the way you already run your houses. You own the code and the data.',
  },
  whoTitle: { fr: ['Ceux qui gèrent ', 'les maisons des autres.'], en: ['The people who run ', 'other people’s homes.'] },
  buildsTitle: { fr: ['Chaque maison, ', 'son propriétaire, ses interventions.'], en: ['Every house, ', 'its owner, its jobs.'] },
  forWho: [
    {
      title: { fr: 'Gestion de villas et chalets', en: 'Villa and chalet management' },
      text: { fr: 'Chaque maison, ses interventions et son propriétaire, suivis.', en: 'Every house, its jobs and its owner, kept on track.' },
    },
    {
      title: { fr: 'Domaines et hôtels particuliers', en: 'Estates and private residences' },
      text: { fr: 'Le personnel, l’entretien et les prestataires d’une grande propriété, coordonnés au même endroit.', en: 'The staff, upkeep and suppliers of a large property, coordinated in one place.' },
    },
    {
      title: { fr: 'Conciergeries de propriétés', en: 'Property concierge services' },
      text: { fr: 'Les passages, les tâches récurrentes et les extras, prouvés et facturés.', en: 'Visits, recurring tasks and extras, proven and invoiced.' },
    },
  ],
  pain: {
    fr: 'Vous pourriez gérer plus de maisons, mais chaque nouveau bien met des semaines à être prêt, les prestataires se coordonnent un par un, et les propriétaires attendent des nouvelles. Pour prouver qu’un passage a été fait, il faut retrouver la bonne photo dans le bon téléphone.',
    en: 'You could manage more homes, but every new property takes weeks to get ready, suppliers are coordinated one by one, and owners are waiting for news. To prove a visit was made, someone has to find the right photo on the right phone.',
  },
  builds: [
    { title: { fr: 'Les interventions', en: 'Jobs' }, text: { fr: 'Planifiées, attribuées, suivies et prouvées en photo, maison par maison.', en: 'Scheduled, assigned, tracked and proven with photos, house by house.' } },
    { title: { fr: 'Les tâches récurrentes', en: 'Recurring tasks' }, text: { fr: 'Chaque jour, chaque semaine ou tel jour : elles se créent seules et se cochent sur place.', en: 'Daily, weekly or on a set day: they create themselves and get ticked off on site.' } },
    { title: { fr: 'Le compte rendu du propriétaire', en: 'The owner report' }, text: { fr: 'Préparé depuis le terrain, avec ce qui a été fait et ce qui a été dépensé, envoyé à temps.', en: 'Prepared from the field, with what was done and what was spent, sent on time.' } },
    { title: { fr: 'Forfaits, extras et refacturation', en: 'Packages, extras and recharges' }, text: { fr: 'Ce qui est compris, ce qui est en plus, et les dépenses refacturées au prix coûtant ou avec votre commission.', en: 'What is included, what is extra, and expenses recharged at cost or with your commission.' } },
    { title: { fr: 'La mise en route d’un nouveau bien', en: 'Onboarding a new property' }, text: { fr: 'Chaque étape suivie jusqu’à ce que la maison soit prête.', en: 'Every step followed until the house is ready.' } },
    { title: { fr: 'Les prestataires et le personnel', en: 'Suppliers and staff' }, text: { fr: 'Qui intervient où et quand, et le pointage du personnel, photo comprise.', en: 'Who works where and when, and staff clock-in, photo included.' } },
    { title: { fr: 'Le linge et les stocks', en: 'Linen and stock' }, text: { fr: 'Ce qui sort, ce qui revient et ce qu’il faut racheter, maison par maison.', en: 'What goes out, what comes back and what to reorder, house by house.' } },
    { title: { fr: 'Les espaces propriétaires', en: 'Owner spaces' }, text: { fr: 'Chaque propriétaire voit sa maison, ses comptes rendus et ses documents.', en: 'Each owner sees their house, their reports and their documents.' } },
  ],
  compare: {
    intro: {
      fr: 'Les logiciels de location saisonnière du marché sont faits pour les réservations et les annonces. Si votre activité, c’est surtout ça, prenez-en un : l’audit vous le dira. Le sur mesure se justifie quand le cœur du métier, c’est l’entretien, les prestataires et des propriétaires exigeants.',
      en: 'Short-term rental software is built for bookings and listings. If that is most of what you do, take one: the audit will tell you so. Custom makes sense when the heart of the job is upkeep, suppliers and demanding owners.',
    },
    rows: [
      ROW_WAY,
      ROW_OWN,
      { criterion: { fr: 'Ce que voient vos propriétaires', en: 'What your owners see' }, market: { fr: 'Le portail d’un éditeur', en: 'A vendor’s portal' }, custom: { fr: 'Votre portail, à vos couleurs', en: 'Your portal, in your colours' } },
      ROW_CHANGE,
      { criterion: { fr: 'Le meilleur choix quand', en: 'The better choice when' }, market: { fr: 'Vous louez surtout à la nuitée sur les plateformes', en: 'You mostly rent by the night on platforms' }, custom: { fr: 'Vous entretenez des maisons pour leurs propriétaires, toute l’année', en: 'You look after homes for their owners, all year round' } },
    ],
  },
  faq: [
    {
      q: { fr: 'Faut-il abandonner notre outil de réservation ?', en: 'Do we have to drop our booking tool?' },
      a: {
        fr: 'Non. Si vous louez aussi à la nuitée, votre outil de réservation peut rester. L’outil sur mesure prend l’entretien, les prestataires et la relation avec les propriétaires. L’audit décide de ce qu’on garde.',
        en: 'No. If you also rent by the night, your booking tool can stay. The custom tool takes care of upkeep, suppliers and owner relations. The audit decides what stays.',
      },
    },
    FAQ_OWN,
    {
      q: { fr: 'Les équipes peuvent-elles l’utiliser sur place ?', en: 'Can the team use it on site?' },
      a: {
        fr: 'Oui. Les interventions se cochent depuis un téléphone, photos comprises, dans chaque maison.',
        en: 'Yes. Jobs are ticked off from a phone, photos included, in every house.',
      },
    },
    FAQ_WHERE,
    FAQ_WHO,
    FAQ_START,
  ],
}

/* ——— Hôtels de luxe ———
   Capacités : la douleur et les trois réponses publiées en octobre 2026
   (groupes, planning unique, détails) ; planning des équipes avec coupures et
   absences, pointage sur tablette avec photo et hors ligne, linge et stocks
   (un établissement lyonnais, depuis avril 2026) ; plusieurs établissements
   (démo de groupe, octobre 2026). Le PMS n'est jamais remplacé. */
export const HOTELS: Pillar = {
  key: 'hotels',
  glyph: 6,
  path: { fr: '/logiciel-hotel-de-luxe-sur-mesure', en: '/en/luxury-hotel-software' },
  meta: {
    title: { fr: 'Logiciel sur mesure pour hôtels de luxe | NateSystem', en: 'Custom Software for Luxury Hotels | NateSystem' },
    description: {
      fr: 'Groupes, séminaires, planning des équipes, ménage, linge et stocks : un logiciel construit autour de votre hôtel, à côté de votre PMS. Le code vous appartient.',
      en: 'Groups, events, staff rota, housekeeping, linen and stock: software built around your hotel, alongside your PMS. You own the code.',
    },
  },
  serviceType: { fr: 'Logiciel sur mesure pour hôtels de luxe', en: 'Custom software for luxury hotels' },
  label: { fr: 'Hôtels de luxe · Boutique hôtels · Maisons de réception', en: 'Luxury hotels · Boutique hotels · Event venues' },
  h1: {
    fr: ['Ce que votre PMS ne fait pas, ', 'construit pour votre hôtel.'],
    en: ['What your PMS doesn’t do, ', 'built for your hotel.'],
  },
  sub: {
    fr: 'Le logiciel hôtelier garde les réservations. Les groupes, le planning des équipes, le ménage, le linge et les stocks vivent souvent dans des Word et des Excel : on les réunit dans un outil construit pour votre maison. Le code et les données vous appartiennent.',
    en: 'Your PMS keeps the bookings. Groups, the staff rota, housekeeping, linen and stock often live in Word and Excel files: we bring them together in a tool built for your house. You own the code and the data.',
  },
  whoTitle: { fr: ['Pour les hôtels ', 'et les maisons de réception.'], en: ['For hotels ', 'and event venues.'] },
  buildsTitle: { fr: ['Un seul planning, ', 'qui suit chaque changement.'], en: ['One planner ', 'that follows every change.'] },
  forWho: [
    {
      title: { fr: 'Hôtels de luxe et boutique hôtels', en: 'Luxury and boutique hotels' },
      text: { fr: 'Les demandes des clients, le ménage et les équipes sur un seul planning.', en: 'Guest requests, housekeeping and staff on one planner.' },
    },
    {
      title: { fr: 'Maisons de réception', en: 'Event venues' },
      text: { fr: 'Les groupes, les salles, les repas et le personnel, ajustés ensemble.', en: 'Groups, rooms, meals and staff, adjusted together.' },
    },
    {
      title: { fr: 'Groupes hôteliers', en: 'Hotel groups' },
      text: { fr: 'Plusieurs établissements, une même façon de travailler.', en: 'Several properties, one way of working.' },
    },
  ],
  pain: {
    fr: 'Un groupe passe de 40 à 20 la veille, et il faut tout refaire à la main : les repas, le planning des équipes, le ménage, la facture. Le logiciel hôtelier garde les réservations, le reste vit dans des Word et des Excel.',
    en: 'A group drops from 40 to 20 the day before, and everything has to be redone by hand: meals, staff rota, housekeeping, invoice. The hotel software keeps the bookings, the rest lives in Word and Excel files.',
  },
  builds: [
    { title: { fr: 'Les groupes et les séminaires', en: 'Groups and events' }, text: { fr: 'Un changement d’effectif qui se répercute partout, tout seul : repas, chambres, salles, facture.', en: 'A change in numbers that ripples everywhere on its own: meals, rooms, function rooms, invoice.' } },
    { title: { fr: 'Chambres, salles et ménage', en: 'Rooms, function rooms and housekeeping' }, text: { fr: 'Sur un seul planning.', en: 'On one planner.' } },
    { title: { fr: 'Le planning des équipes', en: 'The staff rota' }, text: { fr: 'Les horaires, les coupures et les absences, partagés avec chaque équipe.', en: 'Hours, split shifts and absences, shared with each team.' } },
    { title: { fr: 'Le pointage', en: 'Clock-in' }, text: { fr: 'Sur tablette, avec photo, même sans réseau.', en: 'On a tablet, with a photo, even offline.' } },
    { title: { fr: 'Le linge et les stocks', en: 'Linen and stock' }, text: { fr: 'Ce qui sort, ce qui revient et ce qu’il faut commander.', en: 'What goes out, what comes back and what to order.' } },
    { title: { fr: 'Les demandes des clients', en: 'Guest requests' }, text: { fr: 'Notées, attribuées et suivies jusqu’au bout, avec les préférences de chaque client.', en: 'Logged, assigned and followed through, with each guest’s preferences.' } },
    { title: { fr: 'Les détails de chaque séjour', en: 'The details of each stay' }, text: { fr: 'Plan de table, chambre calme, exception : vous gardez la main sur chaque détail.', en: 'Table plan, quiet room, exception: you stay in control of every detail.' } },
    { title: { fr: 'À côté de votre PMS', en: 'Alongside your PMS' }, text: { fr: 'L’outil travaille à côté de votre logiciel hôtelier, sans le remplacer.', en: 'The tool works alongside your hotel software, without replacing it.' } },
  ],
  compare: {
    intro: {
      fr: 'Votre PMS fait bien les réservations, et vous n’avez pas à en changer. Si un module du marché couvre le reste, prenez-le : l’audit vous le dira. Le sur mesure se justifie pour ce qui vit encore dans des tableurs.',
      en: 'Your PMS handles bookings well, and you do not have to change it. If a module on the market covers the rest, take it: the audit will tell you so. Custom makes sense for what still lives in spreadsheets.',
    },
    rows: [
      ROW_WAY,
      ROW_OWN,
      { criterion: { fr: 'Ce que voient vos équipes', en: 'What your teams see' }, market: { fr: 'Un écran de plus, pensé pour tous les hôtels', en: 'One more screen, designed for every hotel' }, custom: { fr: 'Leur planning et leurs tâches, rien de plus', en: 'Their rota and their tasks, nothing more' } },
      ROW_CHANGE,
      { criterion: { fr: 'Le meilleur choix quand', en: 'The better choice when' }, market: { fr: 'Un module de votre PMS couvre déjà le besoin', en: 'A module of your PMS already covers the need' }, custom: { fr: 'Groupes, équipes, linge et stocks vivent dans des tableurs', en: 'Groups, teams, linen and stock live in spreadsheets' } },
    ],
  },
  faq: [
    {
      q: { fr: 'Faut-il changer de PMS ?', en: 'Do we have to change our PMS?' },
      a: {
        fr: 'Non. Votre PMS garde les réservations. L’outil prend ce qui vit aujourd’hui dans des Word et des Excel.',
        en: 'No. Your PMS keeps the bookings. The tool takes over what lives in Word and Excel files today.',
      },
    },
    FAQ_OWN,
    {
      q: { fr: 'Et si le réseau tombe ?', en: 'What if the network goes down?' },
      a: {
        fr: 'Le pointage sur tablette continue sans réseau, et tout se synchronise quand il revient.',
        en: 'Clock-in on the tablet keeps working offline, and everything syncs when the network comes back.',
      },
    },
    FAQ_WHERE,
    FAQ_WHO,
    FAQ_START,
  ],
}

export const PILLARS: Pillar[] = [YACHTING, CONCIERGE, PROPERTIES, HOTELS]

/** Les paires français ↔ anglais, pour le drapeau de langue et le sitemap. */
export const PILLAR_PAIRS: { fr: string; en: string }[] = PILLARS.map((p) => p.path)
