// Études de cas écrites (SEO + preuve). Structure façon OpsKings :
// titre → sous-titre → métriques → Problème → Solution → Résultats + citation → CTA.
// Règle d'or : uniquement des faits/chiffres validés (ici, tirés du podcast avec
// Catherine Fazand, vice-présidente de Chromosome, voir project_case_study).

import type { Lang } from './i18n'

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

const caseStudiesFr: CaseStudy[] = [
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


/**
 * LA VERSION ANGLAISE.
 *
 * Traduction, pas réécriture : chaque chiffre est celui du cas français, et
 * `project_case_study` fixe ce qui est publiable. Catherine F. est le témoin
 * confirmé de Chromosome ; le cabinet de Budapest reste anonyme, sans
 * témoignage nominatif tant qu'il n'est pas accordé.
 */
const caseStudiesEn: CaseStudy[] = [
  {
    slug: 'chromosome',
    sector: 'Inclusive restaurant & charity',
    location: 'Saint-Étienne',
    title: 'Chromosome',
    subtitle:
      'Two pieces of custom software for a restaurant run by team members with disabilities, and management that finally runs calmly.',
    videoId: 'aMIjJbzuhDc',
    metrics: [
      { value: '+50 %', label: 'of bookings now come through the website' },
      { value: '−30 min/day', label: 'no more copying bookings across, every evening' },
      { value: '~15 days', label: 'for the 35 volunteers to take the tool in hand' },
      { value: 'Real time', label: 'bookings & rota, no more spreadsheets or paper' },
    ],
    problemTitle: 'Where Chromosome was losing time',
    problem: [
      'Chromosome is an inclusive restaurant in Saint-Étienne: a charity that employs young people with disabilities as team members, supported by around thirty volunteers and a head chef. A fine piece of human machinery, but behind the dining room two administrative jobs were eating an enormous amount of time.',
      'Bookings first. Every evening the vice-president collected the requests from the website and retyped them by hand into a shared spreadsheet. Half an hour a day, and a chance of error at every copy and paste: a booking in the wrong week, a guest counted twice.',
      'Then the volunteer rota. All on paper. You had to go to the restaurant to find out who was coming, and when. The result: days with 7 volunteers and days with 3, when every service needs 5. A volunteer cancelling the night before, and nobody told in time.',
    ],
    solutionTitle: 'What we built',
    solution: [
      'Two pieces of custom software, cut to how they actually work, not a generic SaaS they would have had to squeeze themselves into.',
      'A booking platform: requests from the website and the phone land in the same place, in real time. 30 covers, and it closes itself when the room is full. Evenings, weekends and holidays blocked in two clicks. Automatic confirmation by email to the guest. And behind it, the statistics: bookings by day, tables, regulars, allergies, enough to cross with the till and decide well. A form can even be embedded in an existing site or a Google listing.',
      'Simple Team, for the volunteer rota: everyone signs up from their phone in one tap, and the whole team sees the rota in real time. A volunteer drops out? An alert goes to the whole team with the link to take the slot, and the service is saved. The administrator keeps control to balance who is on.',
      'And above all: two weeks of training on site, with the team and the volunteers. Because a tool is not delivered, it is adopted.',
    ],
    resultsTitle: 'What changed',
    results: [
      'The half hour of evening data entry is gone, and with it the copy-and-paste errors. Everything is live, and readable from a phone.',
      'Today more than half of guests book online. The tool runs around the clock, including Sunday evening for Monday lunch. No more guests lost because nobody could pick up the phone between 10am and 3pm.',
      'On the team side, the 35 volunteers took the tool in hand in about a fortnight. The chef sees bookings live and adjusts his preparation, so less waste and lower costs.',
    ],
    quote:
      'It changed the way we manage everything, we could not do without it now. The gain in time and clarity is enormous, and the team is far more relaxed.',
    quoteAuthor: 'Catherine F.',
    quoteRole: 'Vice-president · Chromosome Saint-Étienne',
    metaDescription:
      'Chromosome case study (Saint-Étienne): two pieces of custom software, bookings and volunteer rota, for an inclusive restaurant. +50 % of bookings online, 30 minutes a day saved, everything managed in real time.',
  },
  {
    slug: 'conseil-b2b-budapest',
    sector: 'B2B consulting firm',
    location: 'Budapest',
    title: '25 years of expertise, put into an AI',
    subtitle:
      'How a B2B consulting firm in Budapest captured its founder’s know-how in a custom system, automated its client reports across 280 KPIs, and handed it back to its clients.',
    metrics: [
      { value: '280 KPIs', label: 'turned into personalised client reports, automatically' },
      { value: '25 years', label: 'of know-how and experience captured in a custom system' },
      { value: 'Client portal', label: 'of its own, for an experience that matches the expertise' },
      { value: 'Zero manual', label: 'reporting: the founder back on meetings and relationships' },
    ],
    problemTitle: 'Where his value stayed stuck',
    problem: [
      'A B2B consulting firm in Budapest, carried by a founder with 25 years of experience. His real asset is not a tool: it is what he knows, his method, the way he reads a file. But all of that lived entirely in his head.',
      'Every client report was produced by hand, from his expertise, one at a time. Precious work, and enormously time-consuming, which took him away from what matters most in consulting: time spent with the client, the relationship, the meetings.',
      'The result was a ceiling. His growth was limited not by demand, but by the number of hours he could spend producing each deliverable himself.',
    ],
    solutionTitle: 'What we built',
    solution: [
      'A custom system that captures his 25 years of expertise: his method, his criteria, the way he analyses, encoded into an AI that works the way he does.',
      'From each client’s data, the AI produces personalised reports across 280 KPIs, automatically. The founder moves from “I write every report” to “I review and refine”.',
      'A client portal of its own, where each client finds their reports and their follow-up. An experience that matches his level of expertise, and the image of a firm that is a step ahead.',
    ],
    resultsTitle: 'What changed',
    results: [
      'What he knows no longer sleeps in his head: it is captured, reusable, and it works even when he is not working.',
      'Client reports, across 280 KPIs, generate themselves. The time won back goes where it creates the most value: meetings and the client relationship.',
      'The client portal strengthens the experience and positions the firm as a reference, a real edge in a trade where everyone sells “expertise”.',
    ],
    metaDescription:
      'Case study (anonymised): a B2B consulting firm in Budapest captured 25 years of expertise in a custom AI, automated its client reports across 280 KPIs and deployed a client portal. Named testimonial to come.',
  },
]

export const caseStudies: Record<Lang, CaseStudy[]> = { fr: caseStudiesFr, en: caseStudiesEn }

export function getCaseStudy(slug: string, lang: Lang = 'fr'): CaseStudy | undefined {
  return caseStudies[lang].find((c) => c.slug === slug)
}

/** Les slugs sont communs aux deux langues : une seule adresse par cas. */
export function allCaseSlugs(): string[] {
  return caseStudiesFr.map((c) => c.slug)
}
