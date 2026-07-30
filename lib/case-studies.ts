// Études de cas écrites (SEO + preuve). Structure façon OpsKings :
// titre → sous-titre → métriques → Problème → Solution → Résultats + citation → CTA.
// Règle d'or : uniquement des faits/chiffres validés (ici, tirés du podcast avec
// Catherine Fazand, vice-présidente de Chromosome, voir project_case_study).

export type CaseMetric = { value: string; label: string }

export type CaseStudy = {
  slug: string
  sector: string
  location: string
  title: string
  subtitle: string
  videoId?: string
  metrics: CaseMetric[]
  problemTitle: string
  problem: string[]
  solutionTitle: string
  solution: string[]
  resultsTitle: string
  results: string[]
  quote?: string
  quoteAuthor?: string
  quoteRole?: string
  metaDescription: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'chromosome',
    sector: 'Restaurant inclusif & association',
    location: 'Saint-Étienne',
    title: 'Chromosome',
    subtitle:
      'Deux logiciels sur-mesure pour un restaurant tenu par des équipiers en situation de handicap, et une gestion enfin sereine.',
    videoId: 'aMIjJbzuhDc',
    metrics: [
      { value: '+50 %', label: 'des réservations passent désormais par le site' },
      { value: '−30 min/j', label: 'fini le copier-coller des résas, chaque soir' },
      { value: '~15 jours', label: 'pour que les 35 bénévoles prennent l’outil en main' },
      { value: 'Temps réel', label: 'réservations & planning, plus d’Excel ni de papier' },
    ],
    problemTitle: 'Là où Chromosome perdait du temps',
    problem: [
      'Chromosome, c’est un restaurant inclusif à Saint-Étienne : une association qui emploie des jeunes en situation de handicap comme équipiers, entourés d’une trentaine de bénévoles et d’un chef. Une belle mécanique humaine, mais derrière la salle, deux chantiers de gestion mangeaient un temps fou.',
      'Les réservations, d’abord. Chaque soir, la vice-présidente récupérait les demandes du site et les recopiait à la main dans un Excel partagé. Une demi-heure par jour, et un risque d’erreur à chaque copier-coller, une résa dans la mauvaise semaine, un client compté deux fois.',
      'Le planning des bénévoles, ensuite. Tout sur papier. Il fallait se déplacer au restaurant pour savoir qui venait, et quand. Résultat : des jours à 7 bénévoles, d’autres à 3, alors qu’il en faut 5 à chaque service. Un bénévole qui se décommande la veille, et personne n’était prévenu à temps.',
    ],
    solutionTitle: 'Ce qu’on a construit',
    solution: [
      'Deux logiciels sur-mesure, taillés pour leur fonctionnement réel, pas un SaaS générique où l’on rentre au chausse-pied.',
      'Une plateforme de réservation : les demandes du site et du téléphone tombent au même endroit, en temps réel. 30 couverts, et ça bloque tout seul quand c’est complet. Blocage des soirs, week-ends et vacances en deux clics. Confirmation automatique au client par mail. Et derrière, les statistiques, réservations par jour, tables, clients fidèles, allergies, de quoi croiser avec la caisse et décider juste. Un formulaire s’intègre même à un site existant ou à une fiche Google.',
      'Simple Team, pour le planning des bénévoles : chacun s’inscrit depuis son téléphone en un clic, et tout le monde voit le planning en temps réel. Un bénévole se désinscrit ? Une alerte part à toute l’équipe avec le lien pour reprendre le créneau, le service est sauvé. L’administrateur garde la main pour équilibrer les présences.',
      'Et surtout : deux semaines de formation sur place, avec l’équipe et les bénévoles. Parce qu’un outil, ça ne se livre pas, ça s’adopte.',
    ],
    resultsTitle: 'Ce qui a changé',
    results: [
      'La demi-heure de saisie du soir a disparu, et avec elle les erreurs de copier-coller. Tout est en temps réel, consultable depuis le téléphone.',
      'Aujourd’hui, plus de la moitié des clients réservent en ligne, l’outil tourne 24h/24, même le dimanche soir pour le lendemain midi. Fini les clients perdus faute d’avoir décroché entre 10h et 15h.',
      'Côté équipe, les 35 bénévoles ont pris l’outil en main en une quinzaine de jours. Le chef voit les réservations en direct et ajuste ses préparations, moins de gaspillage, donc moins de coûts.',
    ],
    quote:
      'Ça a changé notre façon de tout gérer, on ne peut plus s’en passer aujourd’hui. Le gain de temps et de clarté est énorme, et l’équipe est beaucoup plus sereine.',
    quoteAuthor: 'Catherine F.',
    quoteRole: 'Vice-présidente · Chromosome Saint-Étienne',
    metaDescription:
      'Étude de cas Chromosome (Saint-Étienne) : deux logiciels sur-mesure, réservations et planning des bénévoles, pour un restaurant inclusif. +50 % de réservations en ligne, 30 min/jour économisées, gestion en temps réel.',
  },
  {
    slug: 'conseil-b2b-budapest',
    sector: 'Cabinet de conseil B2B',
    location: 'Budapest',
    title: '25 ans d’expertise, mis dans une IA',
    subtitle:
      'Comment un cabinet de conseil B2B de Budapest a capitalisé le savoir de son fondateur dans un système sur-mesure, automatisé ses rapports clients sur 280 KPIs, et l’a rendu à ses clients.',
    metrics: [
      { value: '280 KPIs', label: 'transformés en rapports clients personnalisés, automatiquement' },
      { value: '25 ans', label: 'de savoir et de parcours capitalisés dans un système sur-mesure' },
      { value: 'Portail client', label: 'dédié, pour une expérience à la hauteur de son expertise' },
      { value: 'Zéro reporting', label: 'manuel : le fondateur recentré sur les rendez-vous et la relation' },
    ],
    problemTitle: 'Là où sa valeur restait bloquée',
    problem: [
      'Un cabinet de conseil B2B à Budapest, porté par un fondateur avec 25 ans d’expérience. Son vrai actif, ce n’est pas un outil : c’est son savoir, sa méthode, sa façon de lire un dossier. Mais ce savoir vivait entièrement dans sa tête.',
      'Chaque rapport client était produit à la main, à partir de son expertise, un par un. Un travail précieux mais chronophage, qui l’accaparait au détriment de ce qui compte le plus dans le conseil : le temps passé avec le client, la relation, les rendez-vous.',
      'Résultat : un plafond. Sa croissance était limitée non par la demande, mais par le nombre d’heures qu’il pouvait consacrer à produire lui-même chaque livrable.',
    ],
    solutionTitle: 'Ce qu’on a construit',
    solution: [
      'Un système sur-mesure qui capitalise ses 25 ans d’expertise : sa méthode, ses critères, sa façon d’analyser, encodés dans une IA qui travaille à sa manière.',
      'À partir des données de chaque client, l’IA produit des rapports personnalisés sur 280 KPIs, automatiquement. Le fondateur passe de « je rédige chaque rapport » à « je valide et j’affine ».',
      'Un portail client dédié, où chaque client retrouve ses rapports et son suivi. Une expérience à la hauteur de son niveau d’expertise, et l’image d’un cabinet qui a une longueur d’avance.',
    ],
    resultsTitle: 'Ce qui a changé',
    results: [
      'Son savoir ne dort plus dans sa tête : il est capitalisé, réutilisable, et il travaille même quand lui ne travaille pas.',
      'Les rapports clients, sur 280 KPIs, se génèrent automatiquement. Le temps repris est réinvesti là où il crée le plus de valeur : les rendez-vous et la relation client.',
      'Le portail client renforce l’expérience et positionne le cabinet comme une référence, un vrai avantage concurrentiel dans un métier où tout le monde vend « de l’expertise ».',
    ],
    metaDescription:
      'Étude de cas (anonymisée) : un cabinet de conseil B2B à Budapest a capitalisé 25 ans d’expertise dans une IA sur-mesure, automatisé ses rapports clients sur 280 KPIs et déployé un portail client. Témoignage nominatif à venir.',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function allCaseSlugs(): string[] {
  return caseStudies.map((c) => c.slug)
}
