import type { Asset } from './bibliotheque'

/**
 * LES RESSOURCES DE LA BIBLIOTHÈQUE HÔTELLERIE, écrites sur la page.
 *
 * Tirées des appels et des recherches d'octobre 2026 : ce qui casse au moment
 * de vérité du séjour (le chauffeur absent, la maison pas prête, le chef pas
 * briefé), la mémoire client qui tient dans un téléphone, et ce que les
 * logiciels de location laissent à la conciergerie.
 * Source : ~/Business/Commercial/6:10prospection/douleurs-conciergeries-voyage-luxe-2026-10-06.md
 *
 * ⚠︎ RÈGLES DU CONTENU. Du faire-soi-même qui sert même à qui n'achètera
 * jamais rien. Aucun chiffre, aucun client, aucun logo inventé. Aucune
 * affirmation précise sur les fonctions d'un logiciel nommé : elles changent,
 * le texte renvoie à la démonstration. Pas de restauration. Vouvoiement.
 *
 * Le français d'abord. L'anglais (`en`, `detailEn`…) s'ajoute après relecture
 * de Nathan ; d'ici là, la page anglaise sert le français avec une mention.
 */

export const RESSOURCES_HOTELLERIE: Asset[] = [
  /* ═══ 1 · LA CHECKLIST DE LA VEILLE ═══ */
  {
    slug: 'checklist-veille-arrivee',
    videoId: null,
    dureeMin: 10,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'La checklist de la veille : reconfirmer chaque prestataire avant une arrivée',
    titreEn: 'The day-before checklist: reconfirming every provider before an arrival',
    douleurFr:
      'Le chauffeur qui n’est pas là, la maison pas prête, le chef que personne n’a briefé. Le client le découvre avant vous, parce que rien n’a été reconfirmé la veille.',
    douleurEn:
      'The driver who isn’t there, the house that isn’t ready, the chef nobody briefed. The guest finds out before you do, because nothing was reconfirmed the day before.',
    secteurs: ['conciergerie', 'villa', 'chalet', 'yacht', 'domaine'],
    categorie: 'operations',
    format: 'checklist',
    livrables: [
      { fr: 'Les 8 vérifications de J-1, en fin de matinée', en: 'The 8 checks for the day before, late morning', fichier: null },
      { fr: 'Les 5 vérifications de H-3, le jour de l’arrivée', en: 'The 5 checks three hours before arrival', fichier: null },
      { fr: 'Le tableau de suivi qui montre ce qui peut casser demain', en: 'The tracking table that shows what could break tomorrow', fichier: null },
    ],
    apercu: 3,
    contenu: [
      { t: 'titre', fr: 'Le principe' },
      {
        t: 'texte',
        fr: 'Une réservation faite il y a trois semaines n’est pas une réservation confirmée. Entre-temps, le chauffeur a accepté une autre course, le chef a mélangé deux dates, la personne du ménage est malade. La seule façon de le savoir avant le client, c’est de redemander à chacun la veille, et de noter la réponse.',
      },
      {
        t: 'texte',
        fr: 'La checklist se fait en deux passages : à J-1 en fin de matinée, puis trois heures avant l’arrivée. Le premier laisse le temps de remplacer quelqu’un. Le second attrape ce qui a bougé pendant la nuit.',
      },
      { t: 'titre', fr: 'À J-1, en fin de matinée' },
      {
        t: 'liste',
        coche: true,
        items: [
          {
            fr: 'Lister toutes les prestations du séjour, heure par heure',
            detailFr: 'Transfert, accueil, ménage, courses, chef, bateau, activités. Une prestation absente de la liste, personne ne la vérifiera.',
          },
          {
            fr: 'Envoyer à chaque prestataire un message de reconfirmation écrit',
            detailFr: 'Un message plutôt qu’un appel, pour garder la trace. Il reprend la date, l’heure exacte, le lieu, le nom du client et le nombre de personnes.',
          },
          {
            fr: 'Demander une réponse claire',
            detailFr: '« Je confirme 14 h 30 à l’aéroport, 4 personnes, 6 bagages. » Un pouce levé ou un émoji ne confirme rien.',
          },
          {
            fr: 'Noter chaque réponse et son heure',
            detailFr: 'Une ligne par prestation : envoyé à quelle heure, réponse reçue à quelle heure, confirmé ou non.',
          },
          {
            fr: 'Relancer par téléphone tout ce qui n’a pas répondu à 16 h',
            detailFr: 'À 18 h, ce qui n’est toujours pas confirmé se remplace.',
          },
          {
            fr: 'Faire vérifier la maison par quelqu’un sur place, avec des photos',
            detailFr: 'Ménage, linge, eau chaude, électricité, Wi-Fi, clés ou codes. « Normalement c’est bon » n’est pas une vérification.',
          },
          {
            fr: 'Relire la fiche préférences du client et transmettre ce qui compte',
            detailFr: 'Allergies au chef, lit bébé à la personne du ménage, heure d’arrivée réelle au chauffeur. Par écrit, à chacun.',
          },
          {
            fr: 'Envoyer au client un message de veille',
            detailFr: 'Le nom et le numéro du chauffeur, l’adresse, la personne qui l’accueille. Le client sait qui l’attend.',
          },
        ],
      },
      { t: 'titre', fr: 'Trois heures avant l’arrivée' },
      {
        t: 'liste',
        coche: true,
        items: [
          {
            fr: 'Vérifier le vol ou le train du client',
            detailFr: 'Un retard d’une heure décale le transfert, l’accueil et le dîner.',
          },
          { fr: 'Envoyer au chauffeur l’heure d’arrivée à jour', detailFr: 'Et attendre sa réponse.' },
          { fr: 'Obtenir la confirmation de la personne qui accueille sur place' },
          { fr: 'Faire un dernier tour de la maison : température, lumières, fleurs, mot d’accueil' },
          {
            fr: 'Avoir un plan B pour chaque prestation qui ne peut pas rater',
            detailFr: 'Un second chauffeur joignable, un dépanneur, un numéro de secours. On le note avant d’en avoir besoin.',
          },
        ],
      },
      { t: 'titre', fr: 'Le tableau qui va avec' },
      {
        t: 'texte',
        fr: 'Une ligne par prestation, six colonnes : prestation, prestataire, heure prévue, message envoyé à, réponse reçue à, statut. Toute ligne sans réponse à 16 h passe en rouge. Un tableur suffit pour commencer. En une page, vous voyez ce qui peut casser demain.',
      },
      {
        t: 'note',
        fr: 'Si vous ne gardez qu’une règle : ce qui n’est pas confirmé par écrit la veille n’est pas confirmé.',
      },
    ],
  },

  /* ═══ 2 · LA FICHE PRÉFÉRENCES CLIENT ═══ */
  {
    slug: 'fiche-preferences-client',
    videoId: null,
    dureeMin: 8,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'La fiche préférences client, à reprendre telle quelle',
    titreEn: 'The guest preference sheet, ready to reuse',
    douleurFr:
      'Les préférences d’un client vivent dans un appel, un fil WhatsApp et la tête de la personne qui l’a eu au téléphone. Le jour où un collègue prend le relais, ou où le client revient l’année suivante, tout est à redemander.',
    douleurEn:
      'A guest’s preferences live in a phone call, a WhatsApp thread and the head of whoever took the call. The day a colleague takes over, or the guest comes back the next year, everything has to be asked again.',
    secteurs: ['tous'],
    categorie: 'experience',
    format: 'modele',
    livrables: [
      { fr: 'Les 5 rubriques de la fiche, champ par champ', en: 'The 5 sections of the sheet, field by field', fichier: null },
      { fr: 'Quand la remplir, et quand la compléter', en: 'When to fill it in, and when to update it', fichier: null },
      { fr: 'La rubrique que tout le monde oublie : ce qui a été promis', en: 'The section everyone forgets: what was promised', fichier: null },
    ],
    apercu: 3,
    contenu: [
      { t: 'titre', fr: 'Pourquoi une fiche plutôt que la mémoire' },
      {
        t: 'texte',
        fr: 'Un client qui revient et doit répéter qu’il est allergique aux fruits à coque comprend qu’on ne se souvient pas de lui. La fiche sert à une chose : que n’importe qui dans l’équipe puisse le recevoir aussi bien que la personne qui le connaît le mieux.',
      },
      {
        t: 'texte',
        fr: 'Remplissez-la pendant le premier échange, et complétez-la après chaque séjour. Cinq minutes à chaque fois, dans un document partagé par toute l’équipe.',
      },
      { t: 'titre', fr: '1. Qui il est' },
      {
        t: 'liste',
        items: [
          { fr: 'Nom, prénom, et comment il souhaite être appelé' },
          { fr: 'Langue parlée, et langue écrite si elle diffère' },
          { fr: 'Canal préféré (WhatsApp, email, appel) et les heures où on peut le joindre' },
          { fr: 'Assistant ou personne de contact, s’il y en a un' },
          { fr: 'Qui voyage avec lui : conjoint, enfants et leur âge, personnel, animaux' },
        ],
      },
      { t: 'titre', fr: '2. L’arrivée et la maison' },
      {
        t: 'liste',
        items: [
          { fr: 'Heure d’arrivée habituelle, et s’il prévient quand il est en retard' },
          { fr: 'Transfert préféré et type de véhicule' },
          { fr: 'Température de la maison, oreillers, linge, lit bébé' },
          { fr: 'Ce qui doit être dans le réfrigérateur à son arrivée' },
          { fr: 'Ce qu’il ne veut pas trouver : certaines fleurs, des parfums d’ambiance, un animal' },
        ],
      },
      { t: 'titre', fr: '3. La table' },
      {
        t: 'liste',
        items: [
          { fr: 'Allergies et intolérances, avec leur gravité', detailFr: '« Gêne » et « choc anaphylactique » ne se traitent pas pareil. Écrivez-le.' },
          { fr: 'Régimes : sans gluten, végétarien, casher, halal…' },
          { fr: 'Boissons, avec les marques précises' },
          { fr: 'Horaires des repas, et s’il aime un chef présent ou discret' },
        ],
      },
      { t: 'titre', fr: '4. Ce qu’il aime faire' },
      {
        t: 'liste',
        items: [
          { fr: 'Les activités déjà faites, et ce qu’il en a dit' },
          { fr: 'Les prestataires qu’il a aimés, et ceux à ne plus lui proposer' },
          { fr: 'Les dates qui comptent pour lui : anniversaires, fêtes, occasions à venir' },
        ],
      },
      { t: 'titre', fr: '5. Ce qui a été promis' },
      {
        t: 'liste',
        items: [
          { fr: 'Chaque promesse faite au client, avec la date et le nom de la personne qui l’a faite' },
          { fr: 'Les incidents du dernier séjour, et ce qui a été fait pour les réparer' },
        ],
      },
      {
        t: 'note',
        fr: 'La règle qui fait marcher la fiche : une information entendue au téléphone s’écrit avant de raccrocher. Sinon elle part avec la personne.',
      },
    ],
  },

  /* ═══ 3 · CE QUE LES LOGICIELS DE LOCATION LAISSENT ═══ */
  {
    slug: 'pms-ce-quils-vous-laissent',
    videoId: null,
    dureeMin: 9,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'Lodgify, Guesty, Hostaway : ce qu’ils font, et ce qu’ils vous laissent',
    titreEn: 'Lodgify, Guesty, Hostaway: what they do, and what they leave to you',
    douleurFr:
      'Un logiciel de location gère les réservations, le ménage et les relevés des propriétaires. Le travail de conciergerie autour du séjour reste à votre charge, et c’est souvent là que ça casse.',
    douleurEn:
      'A rental software handles bookings, cleaning and owner statements. The concierge work around the stay stays with you, and that is often where things break.',
    secteurs: ['villa', 'chalet', 'conciergerie'],
    categorie: 'operations',
    format: 'guide',
    livrables: [
      { fr: 'Le socle que ces logiciels couvrent', en: 'The core these tools cover', fichier: null },
      { fr: 'Les 5 tâches qu’ils vous laissent', en: 'The 5 jobs they leave to you', fichier: null },
      { fr: 'Les 5 questions à poser avant de choisir', en: 'The 5 questions to ask before choosing', fichier: null },
    ],
    apercu: 3,
    contenu: [
      { t: 'titre', fr: 'Ce qu’un logiciel de location fait bien' },
      {
        t: 'texte',
        fr: 'Lodgify, Guesty, Hostaway et leurs équivalents sont des PMS, des logiciels de gestion de locations. Chacun a ses points forts et ses tarifs, et leurs fonctions changent vite : vérifiez toujours le détail en démonstration. Mais tous couvrent à peu près le même socle.',
      },
      {
        t: 'liste',
        items: [
          { fr: 'Le calendrier et les réservations, synchronisés avec les plateformes comme Airbnb ou Booking.com' },
          { fr: 'Les tâches de ménage et de maintenance, attribuées et suivies' },
          { fr: 'Les relevés envoyés aux propriétaires' },
          { fr: 'Un livret d’accueil ou une application pour le client' },
          { fr: 'Les messages automatiques avant et après le séjour' },
        ],
      },
      { t: 'titre', fr: 'Ce qu’il vous laisse' },
      {
        t: 'texte',
        fr: 'Tout ce qui se passe entre la réservation et le départ et qui ne rentre pas dans une case.',
      },
      {
        t: 'liste',
        items: [
          {
            fr: 'Coordonner les prestataires : chef, chauffeur, bateau, garde d’enfants',
            detailFr: 'Le logiciel sait qu’un client arrive. Il ne sait pas que le chef doit être prévenu de ses allergies.',
          },
          {
            fr: 'Les reconfirmer la veille',
            detailFr: 'Personne ne relance le chauffeur à J-1 ni ne vous prévient quand il ne répond pas.',
          },
          {
            fr: 'Garder la mémoire du client d’un séjour à l’autre',
            detailFr: 'Ses préférences, ce qui lui a été promis, ce qui s’est mal passé la dernière fois.',
          },
          {
            fr: 'Traiter les demandes au fil de l’eau',
            detailFr: 'Une table ce soir, un bateau demain, un cadeau à faire livrer. Elles arrivent sur WhatsApp et y restent.',
          },
          {
            fr: 'Suivre vos commissions auprès des partenaires',
            detailFr: 'Ce qui vous est dû, par qui, et ce qui a déjà été encaissé.',
          },
        ],
      },
      { t: 'titre', fr: 'Les questions à poser avant de choisir' },
      {
        t: 'liste',
        numero: true,
        items: [
          { fr: 'Se connecte-t-il aux plateformes que j’utilise vraiment ?' },
          { fr: 'Mes prestataires peuvent-ils y avoir un accès limité à ce qui les concerne ?' },
          { fr: 'Comment je récupère toutes mes données si j’arrête ?' },
          { fr: 'Combien je paie quand j’ajoute dix maisons ?' },
          { fr: 'Qu’est-ce qui continuera de passer par WhatsApp une fois qu’il sera installé ?' },
        ],
      },
      {
        t: 'note',
        fr: 'Après l’installation, notez tout ce qui passe encore par WhatsApp, un tableur ou votre mémoire. Cette liste vous dit si vous avez besoin d’autre chose, et de quoi.',
      },
    ],
  },

  /* ═══ 4 · LE RAPPORT MENSUEL AU PROPRIÉTAIRE ═══ */
  {
    slug: 'rapport-mensuel-proprietaire',
    videoId: null,
    dureeMin: 8,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'Le rapport mensuel au propriétaire, rubrique par rubrique',
    titreEn: 'The monthly owner report, section by section',
    douleurFr:
      'Le propriétaire veut savoir ce que sa maison a rapporté, ce qui a été dépensé et dans quel état elle est. S’il doit vous le demander, il se demande déjà ce qu’il ne voit pas.',
    douleurEn:
      'The owner wants to know what the house earned, what was spent and what state it is in. If they have to ask you, they are already wondering what they are not seeing.',
    secteurs: ['villa', 'chalet', 'conciergerie'],
    categorie: 'operations',
    format: 'modele',
    livrables: [
      { fr: 'Le résumé que le propriétaire lit en premier', en: 'The summary the owner reads first', fichier: null },
      { fr: 'Les 5 rubriques du rapport, dans l’ordre', en: 'The 5 sections of the report, in order', fichier: null },
      { fr: 'La règle d’envoi qui rend le rapport crédible', en: 'The sending rule that makes the report credible', fichier: null },
    ],
    apercu: 2,
    contenu: [
      { t: 'titre', fr: 'Ce que le propriétaire lit en premier' },
      {
        t: 'texte',
        fr: 'Le propriétaire lit d’abord trois chiffres et une phrase. Le reste, il le consulte quand il a un doute. Construisez le rapport dans cet ordre, du plus court au plus détaillé.',
      },
      { t: 'titre', fr: '1. Le résumé du mois' },
      {
        t: 'liste',
        items: [
          { fr: 'Nuits louées sur nuits disponibles' },
          { fr: 'Revenus du mois, comparés au même mois l’an dernier' },
          { fr: 'Montant reversé au propriétaire' },
          { fr: 'Une phrase sur le mois : ce qui s’est bien passé, ce qui demande son attention' },
        ],
      },
      { t: 'titre', fr: '2. Les séjours' },
      {
        t: 'liste',
        items: [
          { fr: 'Une ligne par séjour : dates, nombre de personnes, plateforme de réservation, montant' },
          { fr: 'Les avis laissés par les clients, bons et mauvais', detailFr: 'Ne montrer que les bons se voit très vite.' },
        ],
      },
      { t: 'titre', fr: '3. Les dépenses' },
      {
        t: 'liste',
        items: [
          { fr: 'Ménage, linge, consommables' },
          { fr: 'Réparations et interventions, avec la facture et une photo avant et après' },
          { fr: 'Ce que vous avez avancé et qui sera déduit' },
        ],
      },
      { t: 'titre', fr: '4. L’état de la maison' },
      {
        t: 'liste',
        items: [
          { fr: 'Ce qui a été réparé ce mois-ci' },
          { fr: 'Ce qui s’use et devra être remplacé, avec une estimation du coût' },
          { fr: 'Les incidents, et ce qui a été fait' },
        ],
      },
      { t: 'titre', fr: '5. Le mois prochain' },
      {
        t: 'liste',
        items: [
          { fr: 'Les réservations déjà confirmées' },
          { fr: 'Les interventions prévues' },
          { fr: 'Les décisions qu’il doit prendre, et avant quelle date' },
        ],
      },
      {
        t: 'note',
        fr: 'Envoyez-le à date fixe, chaque mois, même quand le mois a été calme. Un rapport qui arrive quand tout va bien rend crédible celui qui arrive quand quelque chose a cassé.',
      },
    ],
  },

  /* ═══ 5 · 10 MESSAGES EN 4 LANGUES ═══ */
  {
    slug: 'messages-clients-4-langues',
    videoId: null,
    dureeMin: 12,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: '10 messages clients à traiter en 4 langues sans les retaper',
    titreEn: '10 guest messages to answer in 4 languages without retyping them',
    douleurFr:
      'Les mêmes questions reviennent chaque semaine : le code du portail, l’heure du départ, une adresse pour dîner ce soir. Les retaper à chaque fois, en quatre langues, use toute une saison.',
    douleurEn:
      'The same questions come back every week: the gate code, check-out time, somewhere to eat tonight. Retyping them every time, in four languages, wears out a whole season.',
    secteurs: ['tous'],
    categorie: 'ia',
    format: 'guide',
    livrables: [
      { fr: 'La méthode en trois temps', en: 'The three-step method', fichier: null },
      { fr: 'Les 10 messages à préparer une fois pour toutes', en: 'The 10 messages to prepare once and for all', fichier: null },
      { fr: '2 consignes à copier dans ChatGPT ou Claude', en: '2 prompts to paste into ChatGPT or Claude', fichier: null },
    ],
    apercu: 3,
    contenu: [
      { t: 'titre', fr: 'La méthode en trois temps' },
      {
        t: 'liste',
        numero: true,
        items: [
          { fr: 'Écrivez une seule fois, en français, votre meilleure réponse à chaque question qui revient.' },
          { fr: 'Faites-la traduire par un assistant comme ChatGPT ou Claude, avec la consigne plus bas.' },
          {
            fr: 'Faites relire chaque langue une fois par quelqu’un qui la parle, puis rangez les réponses là où vous les retrouvez en deux secondes.',
            detailFr: 'Les réponses rapides de WhatsApp Business, les notes de votre téléphone, ou votre logiciel de location.',
          },
        ],
      },
      {
        t: 'texte',
        fr: 'Le travail se fait une fois : des réponses relues, prêtes à l’emploi, que vous ajustez ensuite en quelques secondes pour chaque client.',
      },
      { t: 'titre', fr: 'Les 10 messages à préparer' },
      {
        t: 'liste',
        numero: true,
        items: [
          { fr: 'L’arrivée et l’accès à la maison : codes, clés, parking' },
          { fr: 'Le Wi-Fi' },
          { fr: 'L’heure de départ, et ce qu’il faut faire avant de partir' },
          { fr: 'Une demande d’arrivée plus tôt ou de départ plus tard' },
          { fr: 'Une adresse pour dîner ce soir' },
          { fr: 'La réservation d’un transfert ou d’un chauffeur' },
          { fr: 'Un problème dans la maison : eau chaude, climatisation, panne' },
          { fr: 'Une demande de ménage en plus' },
          { fr: 'La caution, et quand elle est rendue' },
          { fr: 'Le remerciement après le départ, avec la demande d’avis' },
        ],
      },
      { t: 'titre', fr: 'La consigne pour traduire dans votre ton' },
      {
        t: 'prompt',
        titreFr: 'Traduire une réponse type',
        fr: 'Tu aides une conciergerie de luxe à répondre à ses clients. Voici une réponse que j’envoie souvent, écrite en français :\n\n[collez votre réponse]\n\nTraduis-la en anglais, en italien et en allemand. Règles :\n- garde le même ton : chaleureux, court, jamais obséquieux ;\n- utilise la forme polie de chaque langue ;\n- ne change aucune information pratique (heures, codes, adresses, montants) ;\n- évite les formules toutes faites comme « n’hésitez pas » ;\n- si une expression ne se traduit pas naturellement, garde le sens plutôt que les mots.\n\nDonne les trois versions l’une sous l’autre, avec le nom de la langue en titre.',
      },
      { t: 'titre', fr: 'La consigne pour adapter une réponse à un message précis' },
      {
        t: 'prompt',
        titreFr: 'Adapter une réponse type',
        fr: 'Voici le message d’un client :\n[collez son message]\n\nEt voici ma réponse type sur ce sujet :\n[collez la réponse]\n\nAdapte ma réponse à son message, dans sa langue, en gardant mon ton. Ne promets rien qui ne figure pas dans ma réponse type. Trois phrases maximum.',
      },
      {
        t: 'note',
        fr: 'Ne collez jamais dans un assistant le nom complet d’un client, son passeport ou ses coordonnées bancaires. Remplacez-les par [CLIENT] avant de coller.',
      },
    ],
  },

  /* ═══ 6 · D'UN FIL WHATSAPP À UNE DEMANDE STRUCTURÉE ═══ */
  {
    slug: 'whatsapp-demande-structuree',
    videoId: null,
    dureeMin: 10,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'D’un fil WhatsApp à une demande structurée : la méthode',
    titreEn: 'From a WhatsApp thread to a structured request: the method',
    douleurFr:
      'Une demande client arrive en douze messages WhatsApp, entre deux photos et un vocal. Le jour où il faut la transmettre à un prestataire ou à un collègue, il faut tout relire.',
    douleurEn:
      'A guest request comes in as twelve WhatsApp messages, between two photos and a voice note. The day it has to go to a provider or a colleague, someone has to read it all again.',
    secteurs: ['conciergerie', 'villa', 'yacht', 'chalet'],
    categorie: 'ia',
    format: 'guide',
    livrables: [
      { fr: 'Les 5 étapes, de l’export à la fiche rangée', en: 'The 5 steps, from export to filed request', fichier: null },
      { fr: 'La consigne à copier dans un assistant', en: 'The prompt to paste into an assistant', fichier: null },
      { fr: 'La rubrique qui vous dit quoi redemander au client', en: 'The section that tells you what to ask the guest again', fichier: null },
    ],
    apercu: 2,
    contenu: [
      { t: 'titre', fr: 'Le principe' },
      {
        t: 'texte',
        fr: 'Chaque demande arrivée sur WhatsApp doit finir en une fiche courte : qui, quoi, quand, combien, et ce qui reste à confirmer. À la main, la fiche prend plusieurs minutes. Avec un assistant, elle prend quelques secondes, et c’est vous qui relisez.',
      },
      { t: 'titre', fr: 'Étape par étape' },
      {
        t: 'liste',
        numero: true,
        items: [
          {
            fr: 'Exporter la conversation',
            detailFr: 'Dans WhatsApp, ouvrez la discussion, touchez le nom du contact, puis « Exporter la discussion », sans les médias. Vous obtenez un fichier texte.',
          },
          {
            fr: 'Retirer ce qui ne doit pas sortir',
            detailFr: 'Remplacez le nom du client, son numéro et toute donnée bancaire par [CLIENT], [TEL], [CB].',
          },
          { fr: 'Coller le texte dans un assistant, avec la consigne ci-dessous' },
          {
            fr: 'Relire la fiche et la corriger',
            detailFr: 'L’assistant résume, et il peut se tromper. C’est vous qui validez.',
          },
          {
            fr: 'Ranger la fiche là où l’équipe la retrouve',
            detailFr: 'Le dossier du client, votre tableau de séjour, votre logiciel. Pas au fond de WhatsApp.',
          },
        ],
      },
      { t: 'titre', fr: 'La consigne à copier' },
      {
        t: 'prompt',
        titreFr: 'Transformer un fil WhatsApp en demande',
        fr: 'Voici une conversation WhatsApp entre ma conciergerie et un client :\n\n[collez la conversation]\n\nTransforme-la en fiche de demande, avec exactement ces rubriques :\n- Client et nombre de personnes\n- Ce qui est demandé (une ligne par prestation)\n- Date, heure et lieu de chaque prestation\n- Budget ou prix évoqué\n- Préférences et contraintes mentionnées (allergies, horaires, enfants…)\n- Ce qui a été promis au client, mot pour mot\n- Ce qui reste flou ou à confirmer\n\nN’invente rien. Si une information manque, écris « non précisé ». Cite les messages du client quand il s’agit d’une promesse ou d’une contrainte.',
      },
      {
        t: 'note',
        fr: 'La rubrique « ce qui reste flou » est la plus utile des sept. Elle vous dit quoi redemander au client avant de réserver quoi que ce soit.',
      },
    ],
  },

  /* ═══ 7 · LA GRILLE DES ONZE QUESTIONS ═══
     Adaptée de la grille de la pointeuse (natesystem-va-pointeuse,
     src/lib/deck.ts), écrite pour le comptage d'heures. Même règle : chaque
     question se vérifie à l'écran, en démonstration. */
  {
    slug: 'grille-logiciel-marche-ou-sur-mesure',
    videoId: null,
    dureeMin: 12,
    dateFr: 'Octobre 2026',
    dateEn: 'October 2026',
    titreFr: 'Logiciel du marché ou sur mesure ? Les 11 questions à poser avant de signer',
    titreEn: 'Off-the-shelf or bespoke? The 11 questions to ask before you sign',
    douleurFr:
      'Avant d’acheter un logiciel, on regarde la démonstration. On oublie de vérifier qu’il tient votre façon de travailler, et trois mois plus tard un tableur est resté ouvert à côté.',
    douleurEn:
      'Before buying software, you watch the demo. You forget to check it fits the way you work, and three months later a spreadsheet is still open next to it.',
    secteurs: ['tous'],
    categorie: 'operations',
    format: 'grille',
    livrables: [
      { fr: 'Les 11 questions, avec ce que chacune révèle', en: 'The 11 questions, and what each one reveals', fichier: null },
      { fr: 'La façon de compter les réponses', en: 'How to score the answers', fichier: null },
      { fr: 'Le seuil où le logiciel du marché suffit', en: 'The point where off-the-shelf is enough', fichier: null },
    ],
    apercu: 2,
    contenu: [
      {
        t: 'texte',
        fr: 'Ces onze questions se posent en démonstration, à n’importe quel éditeur, y compris celui que vous avez déjà. Elles sont écrites pour que la réponse se vérifie devant vous, à l’écran.',
      },
      {
        t: 'texte',
        fr: 'Elles viennent d’une grille que j’utilise pour les logiciels de comptage d’heures, adaptée ici aux villas, aux conciergeries et à l’accueil haut de gamme.',
      },
      { t: 'titre', fr: 'Les onze questions' },
      {
        t: 'liste',
        numero: true,
        items: [
          {
            fr: 'Montrez-moi un séjour complet, de la demande au départ, avec mes vrais prestataires.',
            detailFr: 'Pas un séjour de démonstration. Si l’outil ne sait pas mettre un chef, un bateau et un chauffeur sur le même séjour, vous le gérerez à côté.',
          },
          {
            fr: 'Où arrive une demande faite sur WhatsApp, et qui la voit ?',
            detailFr: 'Si la réponse est « vous la recopiez », elle restera sur WhatsApp.',
          },
          {
            fr: 'Comment l’outil me prévient-il qu’un prestataire n’a pas confirmé la veille ?',
            detailFr: 'Demandez à voir l’alerte, pas la case à cocher.',
          },
          {
            fr: 'Où sont les préférences d’un client, et les retrouve-t-on à son séjour suivant ?',
            detailFr: 'La mémoire du client doit rester quand un collaborateur s’en va.',
          },
          {
            fr: 'Mon prestataire peut-il confirmer lui-même, sans créer de compte ?',
            detailFr: 'Un chauffeur n’installera pas une application de plus.',
          },
          {
            fr: 'Comment sont suivies mes commissions auprès des partenaires ?',
            detailFr: 'Ce qui vous est dû, par qui, encaissé ou non. Si c’est un champ de texte libre, c’est un tableur.',
          },
          {
            fr: 'Qui peut modifier un séjour, et la modification laisse-t-elle une trace ?',
            detailFr: 'Le jour où un client conteste, vous voulez savoir qui a changé l’heure du transfert.',
          },
          {
            fr: 'Que reçoit le propriétaire, et à quel moment ?',
            detailFr: 'Demandez à voir un vrai relevé, pas une maquette.',
          },
          {
            fr: 'Les messages envoyés aux clients partent-ils dans leur langue ?',
            detailFr: 'Une confirmation automatique en anglais pour un client italien, ça se remarque.',
          },
          {
            fr: 'Comment je récupère toutes mes données si j’arrête, et dans quel format ?',
            detailFr: 'Demandez le fichier. Si la réponse est « on vous le fera », c’est non.',
          },
          {
            fr: 'Combien je paie quand j’ajoute dix maisons ou trois collaborateurs ? Et à qui appartient le paramétrage qu’on aura construit ensemble ?',
            detailFr: 'Le prix suit votre croissance. Votre paramétrage, c’est votre travail.',
          },
        ],
      },
      { t: 'titre', fr: 'Comment lire les réponses' },
      {
        t: 'texte',
        fr: 'Comptez les réponses que vous avez vues fonctionner à l’écran, pas celles qu’on vous a promises. À neuf ou plus, le logiciel du marché vous suffit : prenez-le. Entre cinq et huit, il couvrira l’essentiel ; notez ce qui restera à côté et le temps que ça vous prendra chaque semaine. En dessous de cinq, vous allez payer un logiciel et garder vos tableurs.',
      },
      {
        t: 'note',
        fr: 'Si un éditeur répond « c’est prévu » à plus de deux de ces questions, le tableur restera ouvert. Ces questions valent aussi pour un outil fait sur mesure, y compris le mien.',
      },
    ],
  },
]
