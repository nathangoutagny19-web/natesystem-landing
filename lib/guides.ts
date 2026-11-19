/**
 * LES GUIDES « PROBLÈMES » (stratégie SEO du 19 novembre 2026).
 *
 * Une page par question précise que se pose la cible, dans la langue où elle
 * la cherche. Ils répondent dès les premières lignes (c'est ce que reprennent
 * Google et les moteurs de réponse), puis renvoient vers la page pilier du
 * métier et l'audit.
 *
 * ⚠︎ Mêmes règles que les pages piliers : aucun chiffre, aucun client, aucune
 * capacité qui n'a pas été livrée ; les usages du métier sont décrits sans
 * pourcentage ni montant ; aucune promesse de résultat.
 */

export type GuideSection = { h2: string; paras: string[]; list?: string[] }

export type Guide = {
  key: string
  lang: 'fr' | 'en'
  /** Chemin complet, préfixe de langue compris. */
  path: string
  /** L'autre version, si elle existe. */
  alternate?: string
  title: string
  description: string
  label: string
  h1: [string, string]
  /** La réponse, d'emblée : deux ou trois phrases. */
  answer: string
  sections: GuideSection[]
  /** La page pilier du métier. */
  pillar: { href: string; label: string }
  faq: { q: string; a: string }[]
  date: string
}

export const GUIDES: Guide[] = [
  {
    key: 'apa',
    lang: 'en',
    path: '/en/guides/yacht-charter-apa-tracking',
    title: 'Yacht Charter APA: How to Track It Without Spreadsheets | NateSystem',
    description: 'What the APA is on a yacht charter, why tracking it gets messy, and what a good APA tracking system does, from receipts on board to the final statement.',
    label: 'Guide · Yacht charter',
    h1: ['Yacht charter APA: ', 'how to track it without spreadsheets.'],
    answer:
      'The APA (Advance Provisioning Allowance) is money the charter client pays in advance, on top of the charter fee, to cover the running costs of the trip: fuel, food and drinks, port fees and the like. The captain spends it during the charter and accounts for it at the end. Tracking it well means every expense recorded with its receipt as it happens, a running balance everyone can see, and a final statement ready the day the guests leave.',
    sections: [
      {
        h2: 'What the APA covers',
        paras: [
          'The charter fee pays for the yacht and its crew. The APA pays for what the trip consumes. The amount is agreed in the charter contract and paid before boarding, with the balance of the charter fee.',
          'During the charter, the captain draws on it for the costs of the trip. At the end, the client receives an account of every expense. Money left over goes back to the client; if the APA runs short, the client tops it up.',
        ],
        list: ['Fuel', 'Food and drinks ordered for the guests', 'Port and marina fees', 'Other costs agreed with the client during the trip'],
      },
      {
        h2: 'Why it gets messy',
        paras: [
          'Expenses happen fast, in several places, paid by card or cash, sometimes by different crew members. Receipts end up in pockets, photos in phones, totals in a spreadsheet updated at night.',
          'On the last day, the captain has to reconcile everything, show the guests a clear account and send the figures to the office, which then has to match them against the bank and, for a managed yacht, carry them into the owner’s books.',
        ],
      },
      {
        h2: 'What a good APA tracking system does',
        paras: ['Whether you build it, buy it or keep a spreadsheet, the same points matter:'],
        list: [
          'Each expense recorded on the spot, from a phone, with a photo of the receipt',
          'A category per expense, so the final account reads clearly',
          'A running balance against the APA received, visible to the captain and the office',
          'A top-up request ready to send when the balance gets low',
          'The final statement for the guests, generated from the expenses already recorded',
          'The link with the booking: deposit, balance and APA, what is paid and what is due',
        ],
      },
      {
        h2: 'Spreadsheet, ready-made software or custom',
        paras: [
          'A spreadsheet works for a single boat and a careful captain. Ready-made yacht software covers the APA if your process matches theirs. A custom tool makes sense when the APA is one part of a wider way of working: charter, management and owner statements that have to fit together.',
          'If a ready-made tool covers what you do, take it. That is the first thing a free audit checks.',
        ],
      },
    ],
    pillar: { href: '/en/yacht-management-software', label: 'Custom yacht management software' },
    faq: [
      { q: 'Who manages the APA during a charter?', a: 'The captain, who spends it on the costs of the trip and accounts for it to the client at the end.' },
      { q: 'What happens if the APA runs out?', a: 'The client tops it up during the charter, so the trip can go on as planned.' },
      { q: 'What happens to unspent APA?', a: 'It goes back to the client, with the final account of every expense.' },
      { q: 'Can the crew record expenses from a phone?', a: 'In the tools we build, yes: each expense is recorded on the spot with a photo of the receipt.' },
    ],
    date: '2026-11-19',
  },
  {
    key: 'owner-statement-fr',
    lang: 'fr',
    path: '/guides/releve-proprietaire',
    alternate: '/en/guides/owner-statement',
    title: 'Relevé propriétaire : ce qu’il doit contenir et comment le préparer | NateSystem',
    description: 'Pour une villa, un chalet ou un yacht en gestion : ce que le relevé mensuel du propriétaire doit contenir, et comment le préparer sans tout ressaisir.',
    label: 'Guide · Gestion de villas et de yachts',
    h1: ['Le relevé propriétaire : ', 'ce qu’il doit contenir, et comment le préparer.'],
    answer:
      'Le relevé propriétaire dit au propriétaire, chaque mois, ce qui a été fait pour son bien et ce que ça a coûté : les interventions, les dépenses avec leurs factures, votre commission, et le solde. Il se prépare bien quand chaque dépense est rattachée au bien au moment où elle est faite, et pas reconstituée à la fin du mois.',
    sections: [
      {
        h2: 'Ce qu’un bon relevé contient',
        paras: ['Que le bien soit une villa, un chalet ou un yacht, le propriétaire attend les mêmes réponses :'],
        list: [
          'Ce qui a été fait ce mois-ci, intervention par intervention, avec des photos quand il y en a',
          'Chaque dépense, avec sa facture',
          'Ce qui est compris dans le forfait, et ce qui est facturé en plus',
          'Votre commission ou vos honoraires',
          'Les revenus du mois, s’il y en a (locations, charters)',
          'Le solde : ce que le propriétaire doit, ou ce qui lui revient',
        ],
      },
      {
        h2: 'Pourquoi il prend autant de temps',
        paras: [
          'Les dépenses arrivent de partout : des prestataires, de l’équipe, de cartes différentes. À la fin du mois, il faut retrouver chaque facture, la rattacher au bon bien, vérifier ce qui était compris et ce qui ne l’était pas, puis tout remettre en forme pour chaque propriétaire.',
          'Plus vous gérez de biens, plus ce travail grandit, et c’est souvent la même personne qui le fait, le soir.',
        ],
      },
      {
        h2: 'Le préparer sans tout ressaisir',
        paras: ['La règle tient en une phrase : chaque dépense et chaque intervention sont rattachées au bien au moment où elles ont lieu. Ensuite, le relevé se prépare presque seul :'],
        list: [
          'La dépense est notée sur place, avec la photo de la facture',
          'L’intervention est cochée depuis un téléphone, photos à l’appui',
          'Le relevé du mois se monte à partir de ce qui a déjà été saisi',
          'Vous le relisez et le validez avant qu’il parte',
          'Le propriétaire le retrouve dans son espace, avec ses documents',
        ],
      },
      {
        h2: 'Tableur, logiciel du marché ou sur mesure',
        paras: [
          'Un tableur suffit pour quelques biens et une personne rigoureuse. Les logiciels de location saisonnière font des relevés pensés pour les réservations à la nuitée. Le sur mesure se justifie quand le relevé raconte surtout de l’entretien, des prestataires et des extras, pour des propriétaires exigeants.',
        ],
      },
    ],
    pillar: { href: '/logiciel-gestion-villas-de-luxe', label: 'Logiciel de gestion de villas et domaines de luxe' },
    faq: [
      { q: 'À quelle fréquence envoyer le relevé ?', a: 'Le plus souvent chaque mois. L’important est la régularité : le propriétaire sait quand l’attendre.' },
      { q: 'Faut-il joindre les factures ?', a: 'Oui. Chaque dépense avec sa facture évite les questions et les allers-retours.' },
      { q: 'Le relevé d’un yacht est-il différent ?', a: 'Le principe est le même : chaque dépense rattachée au bateau, refacturée avec votre commission, puis validée avant l’envoi au propriétaire.' },
    ],
    date: '2026-11-19',
  },
  {
    key: 'owner-statement-en',
    lang: 'en',
    path: '/en/guides/owner-statement',
    alternate: '/guides/releve-proprietaire',
    title: 'Owner Statements for Villa and Yacht Management | NateSystem',
    description: 'For a managed villa, chalet or yacht: what the monthly owner statement should contain, and how to prepare it without retyping everything.',
    label: 'Guide · Villa and yacht management',
    h1: ['Owner statements: ', 'what they should contain, and how to prepare them.'],
    answer:
      'The owner statement tells the owner, every month, what was done for their property and what it cost: the jobs, the expenses with their invoices, your commission and the balance. It is easy to prepare when each expense is tied to the property when it happens, not rebuilt at the end of the month.',
    sections: [
      {
        h2: 'What a good statement contains',
        paras: ['Whether the property is a villa, a chalet or a yacht, the owner expects the same answers:'],
        list: [
          'What was done this month, job by job, with photos when there are some',
          'Every expense, with its invoice',
          'What the package includes, and what is billed on top',
          'Your commission or fees',
          'The month’s income, if any (rentals, charters)',
          'The balance: what the owner owes, or what comes back to them',
        ],
      },
      {
        h2: 'Why it takes so long',
        paras: [
          'Expenses come from everywhere: suppliers, the team, different cards. At month end, someone has to find each invoice, tie it to the right property, check what was included and what was not, then format everything for each owner.',
          'The more properties you manage, the bigger this job gets, and it is often the same person doing it, in the evening.',
        ],
      },
      {
        h2: 'Preparing it without retyping',
        paras: ['The rule fits in one sentence: every expense and every job is tied to the property when it happens. Then the statement almost prepares itself:'],
        list: [
          'The expense is logged on the spot, with a photo of the invoice',
          'The job is ticked off from a phone, with photos',
          'The monthly statement is built from what was already logged',
          'You review and approve it before it goes out',
          'The owner finds it in their own space, with their documents',
        ],
      },
      {
        h2: 'Spreadsheet, ready-made software or custom',
        paras: [
          'A spreadsheet is enough for a few properties and one careful person. Short-term rental software produces statements built around nightly bookings. Custom makes sense when the statement is mostly about upkeep, suppliers and extras, for demanding owners.',
        ],
      },
    ],
    pillar: { href: '/en/luxury-villa-management-software', label: 'Luxury villa and estate management software' },
    faq: [
      { q: 'How often should owners get a statement?', a: 'Most often every month. What matters is regularity: the owner knows when to expect it.' },
      { q: 'Should invoices be attached?', a: 'Yes. Every expense with its invoice avoids questions and back-and-forth.' },
      { q: 'Is a yacht owner statement different?', a: 'The principle is the same: every expense tied to the boat, recharged with your commission, then approved before it goes to the owner.' },
    ],
    date: '2026-11-19',
  },
  {
    key: 'whatsapp-concierge',
    lang: 'fr',
    path: '/guides/conciergerie-demandes-whatsapp',
    title: 'Conciergerie de luxe : gérer les demandes WhatsApp sans rien perdre | NateSystem',
    description: 'Vos clients écrivent sur WhatsApp, à toute heure. Comment garder ce canal et ne plus rien perdre : une liste unique, un responsable par demande, la fiche client, la facture.',
    label: 'Guide · Conciergerie de luxe',
    h1: ['Les demandes WhatsApp d’une conciergerie : ', 'comment ne plus rien perdre.'],
    answer:
      'Vos clients continueront d’écrire sur WhatsApp, et c’est très bien. Ce qui se perd, c’est ce qui vient après le message : qui s’en occupe, quel partenaire a confirmé, ce qu’il reste à facturer. La solution est de noter chaque demande à un seul endroit, avec un responsable et un statut, dès qu’elle arrive.',
    sections: [
      {
        h2: 'Ce qui se perd vraiment',
        paras: [
          'Une demande arrive à 23 h. Quelqu’un la lit, répond « c’est noté », puis la conversation descend sous dix autres. Le lendemain, personne ne sait si le chauffeur a confirmé, si le client voulait la même table que la dernière fois, ni si l’extra a été ajouté à la facture.',
          'Le problème n’est pas WhatsApp. C’est que la demande vit dans une conversation, et pas dans un dossier.',
        ],
      },
      {
        h2: 'Une méthode simple',
        paras: ['Que vous utilisiez un tableur, un logiciel du marché ou un outil sur mesure, la méthode est la même :'],
        list: [
          'Chaque demande est notée à un seul endroit dès qu’elle arrive, d’où qu’elle vienne',
          'Elle a un responsable et un statut : à faire, en cours, confirmée, facturée',
          'Les partenaires sollicités sont suivis : qui a accepté, qui a refusé, qui relancer',
          'La fiche du client garde ses préférences, pour la prochaine fois',
          'Chaque extra est retrouvé sur la facture',
        ],
      },
      {
        h2: 'Garder WhatsApp, sans dépendre d’un téléphone',
        paras: [
          'Vos clients choisissent leur canal, vous ne le changez pas. Ce qui change, c’est que la demande ne reste plus dans le téléphone de la personne qui l’a lue : elle est dans l’outil, visible de toute l’équipe, y compris quand cette personne est en congé.',
        ],
      },
      {
        h2: 'Tableur, logiciel du marché ou sur mesure',
        paras: [
          'Un tableur partagé tient tant que l’équipe est petite et disciplinée. Les logiciels de conciergerie du marché sont souvent pensés pour la location saisonnière ou l’hôtellerie. Le sur mesure se justifie quand chaque client a ses habitudes et que vos services changent d’une demande à l’autre.',
        ],
      },
    ],
    pillar: { href: '/logiciel-conciergerie-de-luxe', label: 'Logiciel sur mesure pour conciergerie de luxe' },
    faq: [
      { q: 'Faut-il demander aux clients de changer de canal ?', a: 'Non. Ils écrivent où ils veulent. C’est le suivi de la demande qui change, pas le canal.' },
      { q: 'Qui note la demande dans l’outil ?', a: 'La personne qui la reçoit, dès qu’elle arrive. C’est ce geste qui évite qu’elle se perde.' },
      { q: 'Comment ne plus oublier un extra ?', a: 'En le notant sur la demande dès qu’il est confirmé : il se retrouve ensuite sur la facture.' },
    ],
    date: '2026-11-19',
  },
]
