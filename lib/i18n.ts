/** Les langues servies par le site. Ici plutôt que dans le provider :
 *  `lib/routes.ts` en a besoin et ne peut pas importer un composant client.
 *
 *  Le hongrois est arrivé le 17 septembre 2026 : Budapest est le second marché,
 *  et la règle posée est simple, tout ce qui est traduit en français et en
 *  anglais doit l'être en hongrois. */
export type Lang = 'en' | 'fr' | 'hu'

/** Les langues préfixées dans l'URL. Le français reste à la racine. */
export const PREFIXED_LANGS = ['en', 'hu'] as const

export const translations = {
  // Nav
  'nav.agency': { en: 'Agency', fr: 'Agence', hu: 'Ügynökség' },
  'nav.tools': { en: 'Tools', fr: 'Outils', hu: 'Eszközök' },
  'nav.resources': { en: 'Resources', fr: 'Ressources', hu: 'Források' },
  'nav.freeTools': { en: 'Free tools', fr: 'Outils gratuits', hu: 'Ingyenes eszközök' },
  'nav.cta': { en: 'Let\'s work together', fr: 'Travaillons ensemble', hu: 'Dolgozzunk együtt' },
  'nav.contact': { en: 'Contact', fr: 'Contact', hu: 'Kapcsolat' },

  // Menu cible (Lot 1 du BRIEF-SITE-V2), un menu resserré + un CTA unique.
  'nav.methode': { en: 'Our method', fr: 'Notre méthode', hu: 'Módszerünk' },
  'nav.realisations': { en: 'Case studies', fr: 'Réalisations', hu: 'Esettanulmányok' },
  'nav.services': { en: 'Services', fr: 'Services', hu: 'Szolgáltatások' },
  'nav.about': { en: 'About', fr: 'À propos', hu: 'Rólunk' },
  'nav.ctaSprint': { en: 'Book a call', fr: 'Réserver un appel', hu: 'Hívás foglalása' },
  // CTA du bouton nav : action simple et comprise par l'ICP (pas le nom de l'offre).
  'nav.ctaCall': { en: 'Book a call', fr: 'Réserver un appel', hu: 'Hívás foglalása' },
  'mega.services': { en: 'Our services', fr: 'Nos services', hu: 'Szolgáltatásaink' },
  'mega.sectors': {
    en: 'By role',
    fr: 'Par métier',
    hu: 'Munkakör szerint',
  },
  'mega.cases': {
    en: 'Case studies',
    fr: 'Réalisations',
    hu: 'Esettanulmányok',
  },
  'nav.svc.sprint': {
    en: 'The diagnosis',
    fr: 'Le diagnostic',
    hu: 'A felmérés',
  },
  'nav.svc.sprintDesc': {
    en: 'We map your school and show where the hours go',
    fr: 'On cartographie votre établissement et on montre où partent les heures',
    hu: 'Feltérképezzük az intézményét, és megmutatjuk, hová mennek az órák',
  },
  'nav.svc.logiciel': {
    en: 'The custom platform',
    fr: 'La plateforme sur-mesure',
    hu: 'Az egyedi platform',
  },
  'nav.svc.logicielDesc': {
    en: 'Built on your agreement and your school calendar',
    fr: 'Bâtie sur votre convention et votre calendrier scolaire',
    hu: 'Az Ön megállapodására és tanévi naptárára építve',
  },
  'nav.svc.ia': {
    en: 'Automation',
    fr: 'L\'automatisation',
    hu: 'Automatizálás',
  },
  'nav.svc.iaDesc': {
    en: 'Where it gives real hours back to your teams, nowhere else',
    fr: 'Là où elle rend de vraies heures à vos équipes, jamais ailleurs',
    hu: 'Ahol valódi órákat ad vissza a csapatainak, máshol soha',
  },
  'nav.svc.audit': {
    en: 'Training and support',
    fr: 'Formation et suivi',
    hu: 'Képzés és támogatás',
  },
  'nav.svc.auditDesc': {
    en: 'From leadership to the front desk, until it runs without us',
    fr: 'De la direction à l\'accueil, jusqu\'à ce que ça tourne sans nous',
    hu: 'A vezetőségtől a portáig, amíg nélkülünk is megy',
  },
  'nav.res.glossary': { en: 'Glossary', fr: 'Glossaire', hu: 'Szójegyzék' },
  'nav.res.glossaryDesc': { en: 'Plain-word definitions', fr: 'Les définitions en clair', hu: 'A fogalmak érthetően' },
  'nav.res.pricing': { en: 'Pricing', fr: 'Prix', hu: 'Árak' },
  'nav.res.pricingDesc': {
    en: 'How a project is priced, with no hidden cost',
    fr: 'Comment un projet se chiffre, sans coût caché',
    hu: 'Hogyan árazunk egy projektet, rejtett költség nélkül',
  },
  'nav.res.diag': { en: 'AI Diagnostic', fr: 'Diagnostic IA', hu: 'MI-diagnosztika' },
  'nav.res.diagDesc': {
    en: 'Measure the hours your teams lose every month',
    fr: 'Mesurez les heures que vos équipes perdent chaque mois',
    hu: 'Mérje meg, hány órát veszítenek a csapatai havonta',
  },

  // Hero
  /* ⚠︎ LA CIBLE N'EST PLUS « LES ÉCOLES », ET LA LIGNE LE DIT.
     Les trois intitulés précédents disaient trois fois la même famille.
     La cible réelle, arrêtée le 3 octobre 2026, ce sont les
     établissements qui accueillent du monde physiquement tous les jours,
     en trois familles : écoles et supérieur, maisons d'accueil de
     groupes, hôtels qui reçoivent des groupes.
     Source : Desktop/theecosystem.io/transpositions/
     offre-etablissements-accueil--natesystem.md, S1.
     ⚠︎ LA RESTAURATION N'EST QU'UN SERVICE INTERNE de ces
     établissements, jamais une famille : cantine et restaurant de maison
     ou d'hôtel oui, restaurants et groupes de restauration commerciale
     non. C'est aussi la règle absolue de ~/.claude/CLAUDE.md. */
  /* Decision de Nathan, 4 octobre 2026 : l'eyebrow gris porte la cible, la
     headline porte la promesse. L'ancienne headline, « Le partenaire digital
     qui developpe vos... », remonte donc ici en petit, et la headline reprend
     la ligne deja posee sur les couvertures Facebook. */
  'hero.label': {
    en: 'Bespoke software for luxury and prestige hospitality',
    fr: 'Logiciel sur mesure pour l’hospitalité de luxe et de prestige',
    hu: 'Egyedi szoftver a luxus- és presztízsvendéglátásnak',
  },
  'hero.titlePrefix': {
    en: 'The way you',
    fr: 'Votre',
    hu: 'Az Ön',
  },
  /* LA HEADLINE DU 9 OCTOBRE 2026 : « Votre façon de recevoir vos clients est
     unique. Votre logiciel devrait l'être aussi. » Un seul segment ici, donc
     le mot ne tourne plus (Hero l'affiche fixe). Pour réactiver la rotation,
     remettre plusieurs mots séparés par des barres, en respectant la règle
     ci-dessous.
     ⚠︎ TOUS LES MOTS SONT AU SINGULIER, ET C'EST UNE CONTRAINTE, PAS UN GOUT.
     « Votre X est unique » ne tient qu'au singulier : un pluriel casse l'accord
     du verbe, « vos process sont uniques », et la phrase se disloque au moment
     meme ou le mot tourne. Donc aucun pluriel ici, jamais.
     ⚠︎ Et les trois langues ne sont pas interchangeables : en hongrois le mot
     porte lui-meme son suffixe possessif, szervezet devient szervezete. */
  'hero.titleWords': {
    en: 'serve your clients',
    fr: 'façon de recevoir vos clients',
    hu: 'vendégfogadása',
  },
  'hero.titleSuffix': {
    en: 'is unique. Your software should be too.',
    fr: 'est unique. Votre logiciel devrait l’être aussi.',
    hu: 'egyedi. A szoftvere is legyen az.',
  },
  /* ⚠︎ DEUX CORRECTIONS ICI, ET LA SECONDE EST UNE RÈGLE.
     1. « des élèves et des étudiants mieux suivis » ne parlait qu'à une
        des trois familles. La ligne dit maintenant le désir commun de
        S2 : saisir une fois, que tout suive, et du temps pour la
        personne accueillie.
     2. « En moins d'un trimestre » ANNONÇAIT UN DÉLAI DE LIVRAISON.
        ~/.claude/CLAUDE.md l'interdit tant que le package n'est pas
        écrit, et le document d'offre laisse la case vide : S6, « Délai
        de livraison à fixer ». La mention est donc retirée, pas
        remplacée. Elle revient le jour où Nathan le fixe. */
  'hero.sub': {
    en: 'Enter it once and your whole organisation follows. An online presence as unique as your service. Numbers tracked everywhere, so decisions rest on data, not on what’s in the owner’s head. And a long-term partnership that grows with you: you own the code.',
    fr: 'Une seule saisie, et toute votre organisation suit. Une image en ligne aussi unique que votre service. Des chiffres suivis partout, pour décider sur des données, plus sur ce que le dirigeant a en tête. Et un partenariat dans la durée, qui évolue avec vous : le code vous appartient.',
    hu: 'Egyszer viszi be, és az egész szervezet követi. Online megjelenés, amely olyan egyedi, mint a szolgáltatása. Mindenhol követett számok, hogy a döntések adatokon alapuljanak, ne azon, ami a vezető fejében van. És hosszú távú partnerség, amely Önnel együtt fejlődik: a forráskód az Öné.',
  },
  'hero.aiNote': {
    en: '40 hours a month given back to the team of a group of nine sites, as reported by the client.',
    fr: '40 h par mois rendues à l’équipe d’un groupe de neuf établissements, chiffre rapporté par le client.',
    hu: 'Havi 40 óra visszanyerve egy kilenc intézményből álló csoport csapatának, az ügyfél beszámolója szerint.',
  },
  'hero.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  'hero.secondary': {
    en: 'See what we build',
    fr: 'Voir ce qu\'on construit',
    hu: 'Nézze meg, mit építünk',
  },
  'hero.trusted': {
    en: 'Already building with',
    fr: 'Déjà à l\'œuvre avec',
    hu: 'Már velük dolgozunk',
  },

  // Product Showcase (mockup juste après le hero)
  'showcase.label': {
    en: 'A system we built',
    fr: 'Un système qu\'on a construit',
    hu: 'Egy rendszer, amit megépítettünk',
  },
  'showcase.caption': {
    en: 'School group · Daily pilot for hours, headcount and sites.',
    fr: 'Groupe scolaire · Pilotage quotidien des heures, des effectifs et des sites.',
    hu: 'Iskolacsoport · Az órák, a létszám és a telephelyek napi irányítása.',
  },
  'showcase.altText': {
    en: 'NateSystem mockup of a school group dashboard',
    fr: 'Mockup NateSystem du tableau de bord d\'un groupe scolaire',
    hu: 'NateSystem makett egy iskolacsoport irányítópultjáról',
  },

  // Problem
  'problem.label': { en: 'The Real Problem', fr: 'Le vrai problème', hu: 'A valódi probléma' },
  'problem.title1': { en: 'Your business runs on', fr: 'Votre activité tourne sur', hu: 'A működése olyan eszközökön fut,' },
  'problem.titleAccent': { en: 'tools that don\'t talk.', fr: 'des outils qui ne se parlent pas.', hu: 'amelyek nem beszélnek egymással.' },
  'problem.title2': { en: '', fr: '', hu: '' },
  'problem.sub': {
    en: 'A patchwork of SaaS, spreadsheets and manual handovers. Nothing unified. No single view. No real command center.',
    fr: 'Un patchwork de SaaS, de tableurs et de saisies manuelles. Rien d\'unifié. Aucune vue d\'ensemble. Pas de vrai poste de commandement.',
    hu:
      'SaaS-eszközök, táblázatok és kézi adatbevitel foltvarrása. Semmi sem egységes. Nincs összkép. Nincs valódi irányítóközpont.',
  },
  'problem.p1': {
    en: '8 active SaaS. 3 actually used. Data scattered everywhere.',
    fr: '8 SaaS actifs. 3 vraiment utilisés. Données dispersées partout.',
    hu:
      '8 aktív SaaS. 3, amit tényleg használnak. Az adatok mindenütt szétszórva.',
  },
  'problem.p2': {
    en: '2h/day making tools talk that don\'t speak to each other.',
    fr: '2h/jour à faire communiquer des outils qui ne se parlent pas.',
    hu:
      'Napi 2 óra azzal, hogy egymással nem beszélő eszközöket kössenek össze.',
  },
  'problem.p3': {
    en: 'When a key employee leaves, the process leaves with them.',
    fr: 'Quand un employé clé part, le process part avec lui.',
    hu:
      'Ha egy kulcsember távozik, a folyamat vele együtt megy.',
  },
  'problem.p4': {
    en: 'Every time you scale, the chaos scales with you.',
    fr: 'Chaque fois que vous scalez, le chaos scale avec vous.',
    hu:
      'Ahányszor növekednek, a káosz velük együtt nő.',
  },
  'problem.stat': {
    en: '~15h/week lost per manager to manual coordination. Roughly €25,000/year per person.',
    fr: '~15h/semaine perdues par manager en coordination manuelle. Soit environ 25 000 €/an par personne.',
    hu:
      'Vezetőnként heti ~15 óra vész el kézi koordinációra. Ez fejenként nagyjából 25 000 € évente.',
  },

  // Solution
  'solution.label': { en: 'What we build', fr: 'Ce qu\'on construit', hu: 'Amit építünk' },
  'solution.title': { en: 'One custom software.', fr: 'Un logiciel sur-mesure.', hu: 'Egyetlen egyedi szoftver.' },
  'solution.titleAccent': { en: 'Built around your business.', fr: 'Bâti autour de votre métier.', hu: 'Az Ön szakmája köré építve.' },
  'solution.sub': {
    en: 'Not a template. Not a SaaS subscription. A command center designed around how you actually operate. AI is built in only where it replaces real hours of work.',
    fr: 'Pas un template. Pas un abonnement SaaS. Un poste de commandement pensé autour de votre façon réelle d\'opérer. L\'IA n\'est intégrée que là où elle remplace de vraies heures de travail.',
    hu:
      'Nem sablon. Nem SaaS-előfizetés. Irányítóközpont, amit a valódi működése köré terveztünk. MI csak ott kerül bele, ahol valódi munkaórákat vált ki.',
  },
  'solution.connect': { en: 'Your unified backend', fr: 'Votre backend unifié', hu: 'Az Ön egységes háttérrendszere' },
  'solution.connectDesc': {
    en: 'One database, one truth. We map your real workflow and replace the patchwork of tools with a single system your whole team logs into.',
    fr: 'Une base, une vérité. On cartographie votre vrai workflow et on remplace le patchwork d\'outils par un système unique où toute votre équipe se connecte.',
    hu:
      'Egy adatbázis, egy igazság. Feltérképezzük a valódi munkafolyamatát, és az eszközök foltvarrását egyetlen rendszerre cseréljük, amelybe az egész csapata belép.',
  },
  'solution.connectTags': { en: 'Unified database · Custom workflows · Role-based access', fr: 'Base unifiée · Workflows sur-mesure · Accès par rôle', hu: 'Egységes adatbázis · Egyedi munkafolyamatok · Szerepkör szerinti hozzáférés' },
  'solution.automate': { en: 'Custom interfaces', fr: 'Interfaces sur-mesure', hu: 'Egyedi felületek' },
  'solution.automateDesc': {
    en: 'Dashboards, order views, client portals, internal tools. Each screen is built for the job it serves. No feature bloat, no menus you\'ll never open.',
    fr: 'Dashboards, vues commandes, portails clients, outils internes. Chaque écran est pensé pour la tâche qu\'il sert. Pas de feature bloat, pas de menus qu\'on n\'ouvre jamais.',
    hu:
      'Irányítópultok, rendelési nézetek, ügyfélportálok, belső eszközök. Minden képernyő arra a feladatra készül, amit kiszolgál. Semmi funkcióhalmozás, semmi menü, amit soha nem nyit meg.',
  },
  'solution.automateTags': { en: 'Dashboards · Internal tools · Client portals', fr: 'Dashboards · Outils internes · Portails clients', hu: 'Irányítópultok · Belső eszközök · Ügyfélportálok' },
  'solution.decide': { en: 'AI integrated where it matters', fr: 'L\'IA intégrée là où ça compte', hu: 'MI ott, ahol számít' },
  'solution.decideDesc': {
    en: 'Agentic AI, automation, data analytics: embedded in the software where they actually save hours. Inbox triage, document parsing, market watch, stock forecasting, lead qualification, review summaries, targeted alerts. Configured for your business, deployed on your infrastructure.',
    fr: 'IA agentique, automatisation, data analytics : intégrées au logiciel là où elles font vraiment gagner des heures. Tri d\'emails, lecture de documents, veille marché, prévision de stock, qualification des leads, synthèse des avis, alertes ciblées. Configurées sur votre métier, déployées sur votre infrastructure.',
    hu:
      'Ágens MI, automatizálás, adatelemzés: beépítve a szoftverbe, ott, ahol tényleg órákat spórolnak. Levélszűrés, dokumentumolvasás, piacfigyelés, készlet-előrejelzés, leadminősítés, vélemények összefoglalása, célzott riasztások. Az Ön szakmájára konfigurálva, az Ön infrastruktúráján üzemeltetve.',
  },
  'solution.decideTags': { en: 'Agentic AI · Automation · Data analytics', fr: 'IA agentique · Automatisation · Data analytics', hu: 'Ágens MI · Automatizálás · Adatelemzés' },

  // Case study (unifies results + testimonial), reframed to "what those who built it with us say"
  'results.label': { en: 'What they say', fr: 'Ce qu\'ils en disent', hu: 'Amit ők mondanak' },
  'results.title': { en: 'What our clients say,', fr: 'Ce que disent ceux qui l\'ont', hu: 'Amit azok mondanak, akik' },
  'results.titleAccent': { en: 'who built it with us.', fr: 'construit avec nous.', hu: 'velünk építették meg.' },
  'results.title2': { en: '', fr: '', hu: '' },
  'results.sub': {
    en: 'Every number below is measured, documented, and verified with the client.',
    fr: 'Chaque chiffre ci-dessous est mesuré, documenté et vérifié avec le client.',
    hu:
      'Az alábbi számok mind mértek, dokumentáltak és az ügyféllel közösen ellenőrzöttek.',
  },
  'results.before': { en: 'Before', fr: 'Avant', hu: 'Előtte' },
  'results.after': { en: 'After', fr: 'Après', hu: 'Utána' },

  // Testimonial
  'testimonial.watch': { en: 'Watch the 2-minute testimonial', fr: 'Voir le témoignage (2 min)', hu: 'Videós ajánlás megtekintése (2 perc)' },
  'testimonial.caption': {
    en: 'Catherine F., General Manager, walks through the real operational change after deployment.',
    fr: 'Catherine F., General Manager, détaille le changement opérationnel concret après déploiement.',
    hu:
      'Catherine F., General Manager, végigveszi a bevezetés utáni valódi működési változást.',
  },

  // Process
  'process.label': {
    en: 'Our method',
    fr: 'Notre méthode',
    hu: 'A módszerünk',
  },
  'process.title': {
    en: 'A clear method,',
    fr: 'Une méthode claire,',
    hu: 'Világos módszer,',
  },
  'process.titleAccent': {
    en: 'no surprises.',
    fr: 'sans surprise.',
    hu: 'meglepetések nélkül.',
  },
  'process.sub': {
    en: 'You always know where things stand. Four steps, one deliverable each. The job is done only when your teams manage without us.',
    fr: 'Vous savez toujours où on en est. Quatre étapes, un livrable à chacune. La mission n\'est finie que quand vos équipes se débrouillent sans nous.',
    hu: 'Mindig tudja, hol tartunk. Négy lépés, mindegyikhez egy eredmény. A munka csak akkor kész, ha a csapatai nélkülünk is boldogulnak.',
  },
  'process.step1': {
    en: 'The diagnosis: we map how your school runs',
    fr: 'Le diagnostic : on cartographie votre établissement',
    hu: 'A felmérés: feltérképezzük az intézményét',
  },
  'process.step1Duration': {
    en: 'Free discovery call',
    fr: 'Appel découverte offert',
    hu: 'Ingyenes bemutatkozó hívás',
  },
  'process.step1Desc': {
    en: 'A few calls with the people who do the work. Who does what, in what order, with which file. From a family\'s enrolment to payroll sign-off. You prepare nothing.',
    fr: 'Quelques appels avec les personnes qui font le travail. Qui fait quoi, dans quel ordre, avec quel fichier. De l\'inscription d\'une famille à la validation de la paie. Vous ne préparez rien.',
    hu: 'Néhány beszélgetés azokkal, akik a munkát végzik. Ki mit csinál, milyen sorrendben, melyik fájllal. A család beiratkozásától a bérszámfejtés jóváhagyásáig. Önnek nem kell készülnie.',
  },
  'process.step2': {
    en: 'Then: we build on your rules',
    fr: 'Ensuite : on construit sur vos règles',
    hu: 'Utána: az Ön szabályaira építünk',
  },
  /* ⚠︎ PLUS DE DURÉE CHIFFRÉE ICI. Les trois autres étapes portent une
     mention qualitative ; celle-ci était la seule à annoncer un délai
     public, interdit tant que le package n'est pas écrit
     (~/.claude/CLAUDE.md), et laissé vide par le document d'offre
     (S6, « délai de livraison à fixer »). Décision de Nathan,
     3 octobre 2026 : on l'enlève partout. Le délai existe toujours, il
     se fixe avec le client au lieu de s'afficher. */
  'process.step2Duration': {
    en: 'Scope and date set before any code',
    fr: 'Périmètre et date fixés avant de coder',
    hu: 'A terjedelem és a dátum a kódolás előtt rögzítve',
  },
  'process.step2Desc': {
    en: 'Your agreement, your school calendar, your sites. Your data ends up in one base, up to date. You click through a prototype before anything is committed.',
    fr: 'Votre convention, votre calendrier scolaire, vos établissements. Vos données se retrouvent dans une seule base, à jour. Vous cliquez dans une maquette avant qu\'on engage quoi que ce soit.',
    hu: 'Az Ön megállapodása, tanévi naptára, telephelyei. Az adatai egyetlen, naprakész adatbázisba kerülnek. Egy kattintható prototípust próbál ki, mielőtt bármit elköteleznénk.',
  },
  'process.step3': {
    en: 'Then: we train until you are autonomous',
    fr: 'Ensuite : on forme jusqu\'à l\'autonomie',
    hu: 'Utána: képzünk, amíg önállóak nem lesznek',
  },
  'process.step3Duration': {
    en: 'Until you are fully autonomous',
    fr: 'Jusqu\'à l\'autonomie complète',
    hu: 'A teljes önállóságig',
  },
  'process.step3Desc': {
    en: 'We test everything before going live. Then we train everyone, from leadership to the front desk, until they use it on their own. Nobody is left in front of a screen they don\'t understand.',
    fr: 'On teste tout avant de lancer. Puis on forme chacun, de la direction à l\'accueil, jusqu\'à ce qu\'ils s\'en servent seuls. Personne n\'est laissé devant un écran qu\'il ne comprend pas.',
    hu: 'Indulás előtt mindent tesztelünk. Aztán mindenkit betanítunk, a vezetőségtől a portáig, amíg egyedül is használják. Senkit nem hagyunk egy képernyő előtt, amit nem ért.',
  },
  'process.step4': {
    en: 'Finally: we adjust as the year goes',
    fr: 'Enfin : on ajuste au fil de l\'année',
    hu: 'Végül: a tanév során finomítunk',
  },
  'process.step4Duration': {
    en: 'Ongoing · optional',
    fr: 'En continu · optionnel',
    hu: 'Folyamatos · opcionális',
  },
  'process.step4Desc': {
    en: 'After a few weeks of use, we look at what helps and what doesn\'t, and adjust. A school does not run in January the way it runs in September.',
    fr: 'Après quelques semaines d\'usage, on regarde ce qui sert et ce qui ne sert pas, et on ajuste. Une école ne fonctionne pas en janvier comme en septembre.',
    hu: 'Néhány hét használat után megnézzük, mi segít és mi nem, és igazítunk. Egy iskola januárban nem úgy működik, mint szeptemberben.',
  },
  'process.step1Highlight': {
    en: '1 to 15 days',
    fr: '1 à 15 jours',
    hu: '1-15 nap',
  },
  'process.step2Highlight': {
    en: '30 to 60 days',
    fr: '30 à 60 jours',
    hu: '30-60 nap',
  },
  'process.step3Highlight': {
    en: 'Until you are fully autonomous',
    fr: 'Jusqu\'à l\'autonomie complète',
    hu: 'A teljes önállóságig',
  },
  'process.step4Highlight': {
    en: 'Fixed fee',
    fr: 'Forfait',
    hu: 'Átalánydíj',
  },
  'process.guarantee1': {
    en: 'Deadlines guaranteed, or -10%/week late',
    fr: 'Délais garantis ou -10 %/semaine de retard',
    hu: 'Garantált határidő, vagy -10% hetente',
  },
  'process.guarantee2': {
    en: 'Hours given back, guaranteed over 12 months',
    fr: 'Heures rendues garanties sur 12 mois',
    hu: 'Garantáltan visszakapott órák 12 hónap alatt',
  },
  'process.guarantee3': {
    en: 'Full source code delivered · yours for good',
    fr: 'Code source complet livré · propriété définitive',
    hu: 'Teljes forráskód átadva · véglegesen az Öné',
  },

  // CTA Final
  'cta.label': {
    en: 'Let\'s work together',
    fr: 'Travaillons ensemble',
    hu: 'Dolgozzunk együtt',
  },
  'cta.title': {
    en: 'Tell us what still goes through you.',
    fr: 'Dites-nous ce qui passe encore par vous.',
    hu: 'Mondja el, mi megy még mindig Önön keresztül.',
  },
  'cta.titleAccent': {
    en: 'We’ll tell you what we can take off your plate.',
    fr: 'On vous dira ce qu’on peut en sortir.',
    hu: 'Megmondjuk, mit tudunk levenni a válláról.',
  },
  'cta.sub': {
    en: 'One call. We look at how your organisation really runs, where your clients come from and where information gets lost. You leave with a clear plan, even if we never work together.',
    fr: 'Un appel. On regarde comment votre organisation fonctionne vraiment, d’où viennent vos clients et où l’information se perd. Vous repartez avec un plan clair, même si on ne travaille jamais ensemble.',
    hu: 'Egy hívás. Megnézzük, hogyan működik valójában a szervezete, honnan jönnek az ügyfelei, és hol vész el az információ. Világos tervvel távozik, akkor is, ha soha nem dolgozunk együtt.',
  },
  'cta.button': {
    en: 'Book a call',
    fr: 'Réserver un appel',
    hu: 'Hívás foglalása',
  },
  'cta.r1': {
    en: 'Free call',
    fr: 'Appel offert',
    hu: 'Ingyenes hívás',
  },
  'cta.r2': {
    en: 'No pitch',
    fr: 'Sans pitch',
    hu: 'Nincs értékesítés',
  },
  'cta.r3': {
    en: 'Reply within 24h',
    fr: 'Réponse sous 24 h',
    hu: 'Válasz 24 órán belül',
  },

  // Ask-the-AI section
  'askai.label': { en: 'Don\'t take our word for it', fr: 'Ne nous croyez pas sur parole', hu: 'Ne a mi szavunkat higgye el' },
  'askai.title': { en: 'Ask the AI', fr: 'Demandez à l\'IA', hu: 'Kérdezze meg a saját' },
  'askai.titleAccent': { en: 'of your choice.', fr: 'de votre choix.', hu: 'MI-jét.' },
  'askai.sub': {
    en: 'Click your preferred AI and see what it says about NateSystem.',
    fr: 'Cliquez sur votre IA préférée et découvrez ce qu\'elle dit de NateSystem.',
    hu: 'Kattintson a kedvenc MI-jére, és nézze meg, mit mond a NateSystemről.',
  },
  // The pre-filled prompt sent to each AI (URL included so web-reading tools hit the right site)
  'askai.prompt': {
    en: 'Tell me whether natesystem.com is a good fit for a private school.',
    fr: 'Dis-moi si natesystem.com est un bon choix pour une école privée.',
    hu: 'Mondd el, jó választás-e a natesystem.com egy magániskolának.',
  },
  'askai.chatgpt': { en: 'Ask ChatGPT', fr: 'Demander à ChatGPT', hu: 'Kérdezd a ChatGPT-t' },
  'askai.claude': { en: 'Ask Claude', fr: 'Demander à Claude', hu: 'Kérdezd a Claude-ot' },
  'askai.perplexity': { en: 'Ask Perplexity', fr: 'Demander à Perplexity', hu: 'Kérdezd a Perplexityt' },

  // ───────────────────────────────────────────────────────────────
  // Credibility band (replaces the old "cas client hero" zone)
  // ───────────────────────────────────────────────────────────────
  'cred.engagement1': {
    en: 'One point of contact · the person who codes',
    fr: 'Un seul interlocuteur · celui qui code',
    hu: 'Egyetlen kapcsolattartó · aki a kódot írja',
  },
  /* ⚠︎ « HEURES RENDUES GARANTIES » PROMETTAIT UN RÉSULTAT CHIFFRÉ.
     C'est l'éliminateur n.2 de knowledge/voix/garde-fous-publication.md,
     et le S9 du document d'offre est net : « pas de promesse de gain
     chiffré, le risque est réduit autrement ». La ligne porte donc
     désormais la première garantie de ce S9, le prototype sur leurs
     vraies données, qui réduit le risque sans rien promettre.
     L'engagement 3 porte déjà la propriété du code, donc pas de doublon. */
  'cred.engagement2': {
    en: 'Prototype on your real data · before any commitment',
    fr: 'Prototype sur vos vraies données · avant tout engagement',
    hu: 'Prototípus a valódi adatain · minden elköteleződés előtt',
  },
  'cred.engagement3': {
    en: 'Source code delivered · you own 100%',
    fr: 'Code source livré · vous êtes propriétaire à 100 %',
    hu: 'Átadott forráskód · 100%-ban az Öné',
  },
  'cred.engagement4': {
    en: 'Data hosted in the EU · GDPR-compliant tracking',
    fr: 'Données hébergées en UE · suivi conforme au RGPD',
    hu: 'EU-ban tárolt adatok · GDPR-konform követés',
  },

  // ───────────────────────────────────────────────────────────────
  // Constat (narrative bridge before "5 systèmes")
  // ───────────────────────────────────────────────────────────────
  'constat.label': { en: 'The reality', fr: 'Le constat', hu: 'A helyzet' },
  'constat.title': { en: 'Autonomous agents look great online.', fr: 'Les agents autonomes font rêver.', hu: 'Az önálló ágensek jól mutatnak.' },
  'constat.titleAccent': { en: 'Companies don\'t actually want them.', fr: 'Les entreprises n\'en veulent pas.', hu: 'A cégek mégsem ezt kérik.' },
  'constat.body': {
    en: 'On social media, it\'s a race to multi-agent systems and impressive demos. On the ground, SME executives ask for something else: simple systems that solve a precise problem with a measurable ROI. Here are the five that actually work for our clients.',
    fr: 'Sur les réseaux, c\'est la course aux systèmes multi-agents et aux démos qui impressionnent. Sur le terrain, les dirigeants de PME nous demandent autre chose : des systèmes simples, qui résolvent un problème précis, avec un ROI mesurable. Voici les cinq qui marchent vraiment chez nos clients.',
    hu:
      'A közösségi médiában verseny folyik a többágenses rendszerekért és a látványos demókért. A terepen a kkv-vezetők mást kérnek: egyszerű rendszereket, amelyek egy konkrét problémát oldanak meg, mérhető megtérüléssel. Íme az az öt, amelyik az ügyfeleinknél tényleg működik.',
  },

  // ───────────────────────────────────────────────────────────────
  // Systems, recurring cases (5 AI systems + 3 custom software)
  // ───────────────────────────────────────────────────────────────
  'systems.label': {
    en: 'What we build',
    fr: 'Ce qu\'on construit',
    hu: 'Amit építünk',
  },
  'systems.deployed': {
    en: 'Deployed.',
    fr: 'Déployé.',
    hu: 'Telepítve.',
  },
  'systems.measured': {
    en: 'Used.',
    fr: 'Utilisé.',
    hu: 'Használatban.',
  },
  'systems.profitable': {
    en: 'Adopted.',
    fr: 'Adopté.',
    hu: 'Elfogadva.',
  },
  'systems.title': {
    en: 'Already running in schools,',
    fr: 'Déjà en service dans des établissements,',
    hu: 'Már működik intézményekben,',
  },
  'systems.titleAccent': {
    en: 'useful every single day.',
    fr: 'utile tous les jours.',
    hu: 'és minden nap hasznos.',
  },
  'systems.sub': {
    en: 'A look at what we build and keep running. Every piece exists because a team needed it.',
    fr: 'Un aperçu de ce qu\'on construit et fait tourner. Chaque brique existe parce qu\'une équipe en avait besoin.',
    hu: 'Ízelítő abból, amit építünk és működtetünk. Minden elem azért van, mert egy csapatnak szüksége volt rá.',
  },
  'systems.allCases': {
    en: 'See all our case studies',
    fr: 'Voir toutes nos réalisations',
    hu: 'Összes esettanulmány',
  },
  'systems.groupAI': {
    en: 'Automations',
    fr: 'Automatisations',
    hu: 'Automatizálások',
  },
  'systems.groupSoft': {
    en: 'Custom software',
    fr: 'Logiciels sur-mesure',
    hu: 'Egyedi szoftverek',
  },
  'systems.tagAI': {
    en: 'Automation',
    fr: 'Automatisation',
    hu: 'Automatizálás',
  },
  'systems.tagSoft': {
    en: 'Software',
    fr: 'Logiciel',
    hu: 'Szoftver',
  },
  // 6 real-client logiciel métier cases (anonymized, sector tag instead of client name)
  'systems.sw1.sector': {
    en: 'Leadership · School group',
    fr: 'Direction · Groupe scolaire',
    hu: 'Vezetőség · Iskolacsoport',
  },
  'systems.sw2.sector': {
    en: 'Higher education',
    fr: 'Enseignement supérieur',
    hu: 'Felsőoktatás',
  },
  'systems.sw3.sector': {
    en: 'School life · Supervision',
    fr: 'Vie scolaire · Encadrement',
    hu: 'Iskolai élet · Felügyelet',
  },
  'systems.sw4.sector': {
    en: 'Facilities & supplies',
    fr: 'Intendance',
    hu: 'Gazdasági hivatal',
  },
  'systems.sw5.sector': {
    en: 'HR · Multi-site',
    fr: 'RH · Multi-établissements',
    hu: 'HR · Több telephely',
  },
  'systems.sw6.sector': {
    en: 'Communications · Families',
    fr: 'Communication · Familles',
    hu: 'Kommunikáció · Családok',
  },
  'systems.sw1.title': {
    en: 'Leadership dashboard',
    fr: 'Tableau de bord de direction',
    hu: 'Vezetői irányítópult',
  },
  'systems.sw1.desc': {
    en: 'Headcount, hours and costs for every site on one screen, up to date. Leadership stops asking and just looks.',
    fr: 'Les effectifs, les heures et les coûts de chaque établissement sur un seul écran, à jour. La direction arrête de demander, elle regarde.',
    hu: 'Minden telephely létszáma, órái és költségei egy képernyőn, naprakészen. A vezetőség nem kérdez többé, hanem megnézi.',
  },
  'systems.sw1.metric': {
    en: 'The same information for the group and for the sites',
    fr: 'La même information pour le groupe et pour les sites',
    hu: 'Ugyanaz az információ a csoportnak és a telephelyeknek',
  },
  'systems.sw2.title': {
    en: 'Pedagogical CRM',
    fr: 'CRM pédagogique',
    hu: 'Pedagógiai CRM',
  },
  'systems.sw2.desc': {
    en: 'Student journeys, internship tracking, alumni follow-up, all in one place. No more parallel spreadsheets.',
    fr: 'Parcours étudiants, suivi de stages, relance des anciens : tout au même endroit. Fin des tableurs parallèles.',
    hu: 'Hallgatói pályák, szakmai gyakorlatok követése, öregdiákok megkeresése egy helyen. Vége a párhuzamos táblázatoknak.',
  },
  'systems.sw2.metric': {
    en: '200+ students tracked in a single tool · 90%+ adoption',
    fr: '200+ étudiants suivis dans un seul outil · adoption 90 %+',
    hu: '200+ hallgató egyetlen eszközben · 90%+ használat',
  },
  'systems.sw3.title': {
    en: 'Staff and volunteer scheduling',
    fr: 'Planning des équipes et des bénévoles',
    hu: 'Munkatársak és önkéntesek beosztása',
  },
  'systems.sw3.desc': {
    en: 'Rota, roles, live attendance, internal comms. Without the spreadsheet-plus-messages chain.',
    fr: 'Planning, rôles, présence en temps réel, communication interne. Sans la chaîne Excel plus messages.',
    hu: 'Beosztás, szerepek, valós idejű jelenlét, belső kommunikáció. Az Excel–üzenet lánc nélkül.',
  },
  'systems.sw3.metric': {
    en: 'Absences seen the same day, not the following month',
    fr: 'Les absences vues le jour même, plus le mois suivant',
    hu: 'A hiányzások aznap látszanak, nem a következő hónapban',
  },
  'systems.sw4.title': {
    en: 'Stock, textbooks and equipment',
    fr: 'Stocks, manuels et équipement',
    hu: 'Készlet, tankönyvek és eszközök',
  },
  'systems.sw4.desc': {
    en: 'Supplies, IT, linen, textbooks: what you hold, who has it, what needs reordering.',
    fr: 'Fournitures, informatique, linge, manuels : ce que vous avez, qui l\'a, ce qu\'il faut recommander.',
    hu: 'Eszközök, informatika, textília, tankönyvek: mi van, kinél, és mit kell újrarendelni.',
  },
  'systems.sw4.metric': {
    en: 'No more end-of-year inventory weekend',
    fr: 'Fini le week-end d\'inventaire de fin d\'année',
    hu: 'Vége az év végi leltározós hétvégének',
  },
  'systems.sw5.title': {
    en: 'Time clock and hour counts',
    fr: 'Pointeuse et comptage d\'heures',
    hu: 'Beléptetés és óranyilvántartás',
  },
  'systems.sw5.desc': {
    en: 'Tablet or phone clock-in, overtime and annualised hours calculated against your own agreement, not a generic template.',
    fr: 'Pointage sur tablette ou téléphone, heures supplémentaires et annualisation calculées sur votre convention, pas sur un modèle générique.',
    hu: 'Beléptetés táblagépen vagy telefonon, a túlóra és az éves munkaidő az Ön megállapodása szerint számolva, nem sablon alapján.',
  },
  'systems.sw5.metric': {
    en: '40 hours a month given back, reported by a group of nine schools',
    fr: '40 h par mois rendues, rapporté par un groupe de neuf établissements',
    hu: 'Havi 40 óra vissza, egy kilenc intézményes csoport beszámolója szerint',
  },
  'systems.sw6.title': {
    en: 'Family feedback and reputation',
    fr: 'Retours des familles et réputation',
    hu: 'Családi visszajelzés és hírnév',
  },
  'systems.sw6.desc': {
    en: 'Reviews and feedback in one place, replies drafted in your tone, a monthly summary per site.',
    fr: 'Les avis et les retours regroupés, des réponses préparées dans votre ton, une synthèse mensuelle par établissement.',
    hu: 'A vélemények és visszajelzések egy helyen, válaszok az Ön hangnemében, havi összefoglaló telephelyenként.',
  },
  'systems.sw6.metric': {
    en: 'A month of feedback read in ten minutes',
    fr: 'Un mois de retours lu en dix minutes',
    hu: 'Egy hónapnyi visszajelzés tíz perc alatt',
  },
  'systems.s1.title': {
    en: 'Answering admission enquiries',
    fr: 'Réponse aux demandes d\'inscription',
    hu: 'Felvételi megkeresések megválaszolása',
  },
  'systems.s1.desc': {
    en: 'Family enquiries get a first answer and reach the right person, even on a Sunday evening.',
    fr: 'Les demandes des familles reçoivent une première réponse et partent vers la bonne personne, même le dimanche soir.',
    hu: 'A családok megkeresései választ kapnak és a megfelelő emberhez jutnak, vasárnap este is.',
  },
  'systems.s1.metric': {
    en: 'No enquiry left waiting for Monday morning',
    fr: 'Plus une demande qui attend le lundi matin',
    hu: 'Egyetlen megkeresés sem vár hétfő reggelig',
  },
  'systems.s2.title': {
    en: 'Invisible back office',
    fr: 'Back-office invisible',
    hu: 'Láthatatlan háttériroda',
  },
  'systems.s2.desc': {
    en: 'Reading documents, re-typing, filing: half the repetitive admin absorbed.',
    fr: 'Lecture de documents, recopie, classement : la moitié du travail administratif répétitif absorbée.',
    hu: 'Dokumentumok olvasása, átgépelése, iktatása: az ismétlődő adminisztráció fele eltűnik.',
  },
  'systems.s2.metric': {
    en: 'The front office gives time back to welcoming families',
    fr: 'Le secrétariat rend du temps à l\'accueil des familles',
    hu: 'A titkárság időt ad vissza a családok fogadására',
  },
  'systems.s3.title': {
    en: 'Automatic follow-ups',
    fr: 'Relances automatiques',
    hu: 'Automatikus emlékeztetők',
  },
  'systems.s3.desc': {
    en: 'Incomplete files, missing documents, deadlines: reminders go out on their own and stop the moment the family replies.',
    fr: 'Dossiers incomplets, pièces manquantes, échéances : les relances partent seules et s\'arrêtent dès que la famille répond.',
    hu: 'Hiányos akták, hiányzó iratok, határidők: az emlékeztetők maguktól mennek ki, és leállnak, amint a család válaszol.',
  },
  'systems.s3.metric': {
    en: 'Files complete themselves without chasing',
    fr: 'Les dossiers se complètent sans qu\'on coure après',
    hu: 'Az akták utánajárás nélkül állnak össze',
  },
  'systems.s4.title': {
    en: 'Reconnecting with alumni',
    fr: 'Reprise du lien avec les anciens élèves',
    hu: 'Kapcsolatfelvétel az öregdiákokkal',
  },
  'systems.s4.desc': {
    en: 'Alumni, families who left, dormant contacts: the link is picked back up, with no ad budget.',
    fr: 'Anciens élèves, familles parties, contacts dormants : on reprend le lien, sans budget publicitaire.',
    hu: 'Öregdiákok, elköltözött családok, alvó kapcsolatok: a kapcsolat újraindul, hirdetési költség nélkül.',
  },
  'systems.s4.metric': {
    en: 'An alumni network you can reach again',
    fr: 'Un réseau d\'anciens qui redevient joignable',
    hu: 'Egy újra elérhető öregdiák-hálózat',
  },
  'systems.s5.title': {
    en: 'The monthly report, automatic',
    fr: 'Le point mensuel, automatique',
    hu: 'A havi jelentés, automatikusan',
  },
  'systems.s5.desc': {
    en: 'Figures collected, analysed, sent to your inbox. Not one more dashboard to remember to open.',
    fr: 'Collecte des chiffres, analyse, envoi dans votre messagerie. Pas un tableau de bord de plus à penser à ouvrir.',
    hu: 'Számok begyűjtve, elemezve, elküldve a postafiókjába. Nem egy újabb irányítópult, amit meg kell nyitni.',
  },
  'systems.s5.metric': {
    en: 'The monthly review arrives on its own',
    fr: 'Le point mensuel arrive tout seul',
    hu: 'A havi áttekintés magától megérkezik',
  },
  'systems.s6.title': {
    en: 'Files and letters drafted in minutes',
    fr: 'Dossiers et courriers préparés en minutes',
    hu: 'Akták és levelek percek alatt',
  },
  'systems.s6.desc': {
    en: 'Recurring documents are drafted from your own templates and history. Your teams validate instead of writing.',
    fr: 'Les documents récurrents sont préparés à partir de vos modèles et de votre historique. Vos équipes valident au lieu de rédiger.',
    hu: 'Az ismétlődő dokumentumok az Ön sablonjai és előzményei alapján készülnek. A csapatai jóváhagynak, nem írnak.',
  },
  'systems.s6.metric': {
    en: 'Your teams validate, they don\'t start from scratch',
    fr: 'Vos équipes valident, elles ne repartent pas de zéro',
    hu: 'A csapatai jóváhagynak, nem nulláról kezdenek',
  },
  'systems.s7.title': {
    en: 'The school\'s know-how, searchable',
    fr: 'Le savoir de l\'établissement, cherchable',
    hu: 'Az intézmény tudása, kereshetően',
  },
  'systems.s7.desc': {
    en: 'Procedures, decisions, custom: searchable in seconds. Know-how no longer leaves with the person who leaves.',
    fr: 'Procédures, décisions, usages : cherchables en secondes. Le savoir ne part plus avec la personne qui s\'en va.',
    hu: 'Eljárások, döntések, szokások: másodpercek alatt kereshetők. A tudás már nem távozik azzal, aki elmegy.',
  },
  'systems.s7.metric': {
    en: 'The process no longer lives in one person\'s head',
    fr: 'Le process ne dépend plus d\'une seule tête',
    hu: 'A folyamat már nem egyetlen ember fejében él',
  },

  // ───────────────────────────────────────────────────────────────
  // Twist, "On ne fait pas que du logiciel" (le cœur bénéfices, avant la Méthode)
  // ───────────────────────────────────────────────────────────────
  'twist.label': { en: 'What really changes', fr: 'Ce qu\'on change vraiment', hu: 'Ami valóban változik' },
  'twist.title': { en: 'We don\'t just build software.', fr: 'On ne fait pas que du logiciel.', hu: 'Nem csak szoftvert építünk.' },
  'twist.sub': {
    en: 'Software is the tool. What you gain from it: that\'s what counts.',
    fr: 'Le logiciel, c\'est l\'outil. Ce que vous y gagnez, c\'est ça qui compte.',
    hu:
      'A szoftver csak az eszköz. Ami számít, az, amit nyer vele.',
  },
  'twist.b1.title': { en: 'Time won back', fr: 'Du temps regagné', hu: 'Visszanyert idő' },
  'twist.b1.desc': { en: 'Hours reclaimed every week on admin, data entry and coordination: automated or removed.', fr: 'Des heures reprises chaque semaine sur l\'administratif, la saisie et la coordination : automatisées ou supprimées.', hu: 'Hetente visszaszerzett órák az adminisztrációból, az adatbevitelből és a koordinációból: automatizálva vagy megszüntetve.' },
  'twist.b2.title': { en: 'More profitability', fr: 'Plus de rentabilité', hu: 'Nagyobb jövedelmezőség' },
  'twist.b2.desc': { en: 'One tool instead of 34 to pay for. Costs under control, margins recovered, fewer costly mistakes.', fr: 'Un seul outil au lieu de 34 logiciels à payer. Coûts maîtrisés, marges récupérées, moins d\'erreurs qui coûtent cher.', hu: 'Egyetlen eszköz 34 fizetett szoftver helyett. Kontroll alatt tartott költségek, visszanyert árrés, kevesebb drága hiba.' },
  'twist.b3.title': { en: 'Clear decisions', fr: 'Des décisions claires', hu: 'Világos döntések' },
  'twist.b3.desc': { en: 'Your data organised in real time, in one place. You decide on facts, fast, not on gut feeling.', fr: 'Vos données organisées en temps réel, au même endroit. Vous décidez sur du concret, vite, pas au feeling.', hu: 'Az adatai valós időben rendszerezve, egy helyen. Tényekre alapozva dönt, gyorsan, nem megérzésből.' },
  'twist.b4.title': { en: 'A team in sync', fr: 'Une équipe alignée', hu: 'Összehangolt csapat' },
  'twist.b4.desc': { en: 'Everyone in one place, everyone knows what to do, and the know-how stays in the system, even when someone leaves. The software takes the routine tasks: your teams free up for what truly creates value, like customer relationships.', fr: 'Tout le monde au même endroit, chacun sait quoi faire, et le savoir reste dans le système, même quand quelqu\'un part. Le logiciel prend les tâches routinières : vos équipes se libèrent pour ce qui crée vraiment de la valeur, comme la relation client.', hu: 'Mindenki egy helyen, mindenki tudja a dolgát, és a tudás a rendszerben marad akkor is, ha valaki távozik. A rutinfeladatokat a szoftver viszi: a csapatai arra szabadulnak fel, ami valóban értéket teremt, például az ügyfélkapcsolatra.' },
  'twist.b5.title': { en: 'It runs, calmly', fr: 'Ça tourne, sereinement', hu: 'Nyugodtan fut' },
  'twist.b5.desc': { en: 'No more lost items, no more chaos. The system is reliable, you pilot with peace of mind.', fr: 'Plus de trucs qui se perdent, plus de chaos. Le système est fiable, vous pilotez tranquille.', hu: 'Semmi sem vész el többé, vége a káosznak. A rendszer megbízható, Ön nyugodtan irányít.' },
  'twist.b6.title': { en: 'AI that improves on its own', fr: 'Une IA qui s\'améliore seule', hu: 'MI, amely magától fejlődik' },
  'twist.b6.desc': { en: 'Agentic AI with persistent memory: it improves with every use and can take on high-value tasks.', fr: 'Une IA agentique avec mémoire persistante : elle progresse à chaque utilisation et peut gérer des tâches à haute valeur ajoutée.', hu: 'Ágens MI tartós memóriával: minden használattal jobb lesz, és magas értékű feladatokat is átvehet.' },

  // ───────────────────────────────────────────────────────────────
  // Transformation, Avant / Après (identification + projection)
  // ───────────────────────────────────────────────────────────────
  'trans.label': {
    en: 'Before, after',
    fr: 'Avant, après',
    hu: 'Előtte, utána',
  },
  'trans.title': {
    en: 'Today, everything goes through one person. The requests, the numbers, the decisions.',
    fr: 'Aujourd’hui, tout passe par une seule personne. Les demandes, les chiffres, les décisions.',
    hu: 'Ma minden egyetlen emberen megy át. A kérések, a számok, a döntések.',
  },
  'trans.titleAccent': {
    en: 'Not for much longer.',
    fr: 'Plus pour longtemps.',
    hu: 'Már nem sokáig.',
  },
  'trans.beforeLabel': {
    en: 'Before',
    fr: 'Avant',
    hu: 'Előtte',
  },
  'trans.afterLabel': {
    en: 'After',
    fr: 'Après',
    hu: 'Utána',
  },
  'trans.costTitle': {
    en: 'What it costs you today',
    fr: 'Ce que ça vous coûte aujourd’hui',
    hu: 'Amibe ez ma kerül',
  },
  'trans.gainTitle': {
    en: 'What your teams get back',
    fr: 'Ce que vos équipes récupèrent',
    hu: 'Amit a csapatai visszakapnak',
  },
  'trans.before1': {
    en: 'The same request copied from WhatsApp to a spreadsheet, then into the supplier’s email',
    fr: 'La même demande recopiée du WhatsApp au tableur, puis au mail du prestataire',
    hu: 'Ugyanaz a kérés WhatsAppról táblázatba, onnan a beszállító e-mailjébe másolva',
  },
  'trans.before2': {
    en: 'The driver, the chef, the villa: nothing reconfirmed the day before',
    fr: 'Le chauffeur, le chef, la villa : rien n’est reconfirmé la veille',
    hu: 'A sofőr, a séf, a villa: előző nap semmit nem erősítenek meg újra',
  },
  'trans.before3': {
    en: 'A website nobody can say what it brings in',
    fr: 'Un site dont personne ne sait ce qu’il rapporte',
    hu: 'Egy weboldal, amelyről senki nem tudja, mit hoz',
  },
  'trans.before4': {
    en: 'No way of saying where your best clients come from',
    fr: 'Impossible de dire d’où viennent vos meilleurs clients',
    hu: 'Nem lehet megmondani, honnan jönnek a legjobb ügyfelei',
  },
  'trans.before5': {
    en: 'The year’s numbers live in the owner’s head, and nowhere else',
    fr: 'Les chiffres de l’année sont dans la tête du dirigeant, et nulle part ailleurs',
    hu: 'Az év számai a vezető fejében vannak, és sehol máshol',
  },
  'trans.after1': {
    en: 'A request entered once, and the team, the supplier and the invoice follow',
    fr: 'Une demande saisie une fois, et l’équipe, le prestataire et la facture suivent',
    hu: 'Egyszer bevitt kérés, és a csapat, a beszállító és a számla követi',
  },
  'trans.after2': {
    en: 'Every service reconfirmed, with an alert when someone doesn’t answer',
    fr: 'Chaque prestation reconfirmée, avec une alerte quand quelqu’un ne répond pas',
    hu: 'Minden szolgáltatás újra megerősítve, riasztással, ha valaki nem válaszol',
  },
  'trans.after3': {
    en: 'A website, event pages and campaigns connected to the same system',
    fr: 'Un site, des pages d’événements et des campagnes reliés au même système',
    hu: 'Weboldal, eseményoldalak és kampányok ugyanahhoz a rendszerhez kötve',
  },
  'trans.after4': {
    en: 'Every request carries its source: website, Google, campaign, trade show, referral',
    fr: 'Chaque demande porte son origine : site, Google, campagne, salon, recommandation',
    hu: 'Minden kérés hordozza a forrását: weboldal, Google, kampány, kiállítás, ajánlás',
  },
  'trans.after5': {
    en: 'A dashboard the whole team can read, and decisions made on numbers',
    fr: 'Un tableau de bord que toute l’équipe peut lire, et des décisions prises sur des chiffres',
    hu: 'Az egész csapat számára olvasható irányítópult, és számokon alapuló döntések',
  },
  // APRÈS, les gains, en miroir 1:1 des coûts (même format : valeur serif rouge + description)
  'trans.gainVal1': {
    en: 'Enter it once',
    fr: 'Une seule saisie',
    hu: 'Egyetlen bevitel',
  },
  'trans.gainDesc1': {
    en: 'The request is entered once. Suppliers, the rota, the stay and the invoice all read the same data.',
    fr: 'La demande est saisie une fois. Les prestataires, le planning, le séjour et la facture lisent la même donnée.',
    hu: 'A kérést egyszer viszik be. A beszállítók, a beosztás, a tartózkodás és a számla ugyanazt az adatot olvassa.',
  },
  'trans.gainVal2': {
    en: 'You stay in control',
    fr: 'Vous gardez la main',
    hu: 'Ön dönt',
  },
  'trans.gainDesc2': {
    en: 'The tool suggests a rota or a table plan, a person decides. Exceptions stay possible everywhere, because personal service is your trade.',
    fr: 'L’outil propose un planning ou un plan de table, la personne décide. Les exceptions restent possibles partout, parce que la personnalisation, c’est votre métier.',
    hu: 'Az eszköz beosztást vagy ültetési rendet javasol, egy ember dönt. A kivételek mindenhol lehetségesek, mert a személyre szabás az Ön szakmája.',
  },
  'trans.gainVal3': {
    en: '100% yours',
    fr: '100 % à vous',
    hu: '100%-ban az Öné',
  },
  'trans.gainDesc3': {
    en: 'You own the code, the data stays in Europe and can be exported at any time. Nothing depends on a tool you don’t control.',
    fr: 'Le code vous appartient, les données restent en Europe et s’exportent à tout moment. Rien ne dépend d’un outil que vous ne contrôlez pas.',
    hu: 'A forráskód az Öné, az adatok Európában maradnak, és bármikor exportálhatók. Semmi nem függ olyan eszköztől, amelyet nem Ön irányít.',
  },
  'trans.gainVal4': {
    en: 'Tracked',
    fr: 'Tout est suivi',
    hu: 'Minden követve',
  },
  'trans.gainDesc4': {
    en: 'Where each request comes from, what each client spends, what each campaign produced. On one screen, up to date.',
    fr: 'D’où vient chaque demande, ce que dépense chaque client, ce qu’a produit chaque campagne. Sur un écran, à jour.',
    hu: 'Honnan jön minden kérés, mennyit költ minden ügyfél, mit hozott minden kampány. Egy képernyőn, naprakészen.',
  },
  'trans.gainVal5': {
    en: 'We plug in',
    fr: 'On branche',
    hu: 'Csatlakoztatunk',
  },
  'trans.gainDesc5': {
    en: 'Your booking or rental software stays in place. We prepare its work, we don’t replace it.',
    fr: 'Votre logiciel de réservation ou de location reste en place. On lui prépare le travail, on ne le remplace pas.',
    hu: 'A foglalási vagy bérlési szoftvere a helyén marad. Előkészítjük a munkáját, nem cseréljük le.',
  },
  'trans.punch': {
    en: 'A group of nine sites was exactly there. Today, it’s on the other side.',
    fr: 'Un groupe de neuf établissements était exactement là. Aujourd’hui, il est de l’autre côté.',
    hu: 'Egy kilenc intézményből álló csoport pontosan itt tartott. Ma már a túloldalon van.',
  },
  'trans.aiLabel': { en: 'AI', fr: 'IA', hu: 'MI' },
  'trans.aiTag': {
    en: 'Built on your documents',
    fr: 'Construit sur vos documents',
    hu: 'Az Ön dokumentumaira építve',
  },
  // Chaos artefacts (left panel), small friction notes scattered in the pile
  'trans.chaos.quote': {
    en: 'Requests_season_v4_FINAL(2).xlsx',
    fr: 'Demandes_saison_v4_FINAL(2).xlsx',
    hu: 'Keresek_szezon_v4_VEGLEGES(2).xlsx',
  },
  'trans.chaos.money': {
    en: 'edited by 3 people',
    fr: 'modifié par 3 personnes',
    hu: '3 ember szerkesztette',
  },
  'trans.chaos.sms': {
    en: '5 unread',
    fr: '5 non lus',
    hu: '5 olvasatlan',
  },
  'trans.chaos.forgot': {
    en: 'did the driver confirm…?',
    fr: 'le chauffeur a confirmé… ?',
    hu: 'megerősített a sofőr…?',
  },

  // ───────────────────────────────────────────────────────────────
  // Comparatif, NateSystem vs prestataire classique (lève l'objection
  // "pourquoi pas une agence / un dev classique ?")
  // ───────────────────────────────────────────────────────────────
  'cmp.label': { en: 'The honest comparison', fr: 'La comparaison honnête', hu: 'Az őszinte összehasonlítás' },
  'cmp.title': { en: 'Why not a traditional agency', fr: 'Pourquoi pas une agence', hu: 'Miért ne egy hagyományos ügynökség' },
  'cmp.titleAccent': { en: 'or developer?', fr: 'ou un dev classique ?', hu: 'vagy fejlesztő?' },
  'cmp.sub': {
    en: 'The question we hear most. Here\'s the difference, honestly.',
    fr: 'La question qu\'on nous pose le plus. Voici la différence, honnêtement.',
    hu:
      'Ezt kérdezik tőlünk a legtöbbet. Íme a különbség, őszintén.',
  },
  'cmp.colOther': { en: 'Traditional provider', fr: 'Prestataire classique', hu: 'Hagyományos szolgáltató' },
  'cmp.colUs': { en: 'NateSystem', fr: 'NateSystem', hu: 'NateSystem' },
  'cmp.r1.crit': { en: 'The code', fr: 'Le code', hu: 'A kód' },
  'cmp.r1.other': { en: 'They keep it, you stay dependent', fr: 'Ils le gardent, vous restez dépendant', hu: 'Náluk marad, Ön függő helyzetben marad' },
  'cmp.r1.us': { en: '100% yours, delivered', fr: '100% à vous, livré', hu: '100%-ban az Öné, átadva' },
  'cmp.r2.crit': { en: 'What gets built', fr: 'Ce qu\'on construit', hu: 'Amit megépítenek' },
  'cmp.r2.other': { en: 'Often a template adapted to you', fr: 'Souvent un template adapté', hu: 'Gyakran egy Önre igazított sablon' },
  'cmp.r2.us': { en: 'Tailored to your business', fr: 'Taillé sur votre métier', hu: 'Az Ön szakmájára szabva' },
  'cmp.r3.crit': { en: 'AI', fr: 'L\'IA', hu: 'Az MI' },
  'cmp.r3.other': { en: 'Absent or a gimmick', fr: 'Absente ou gadget', hu: 'Hiányzik, vagy csak dísz' },
  'cmp.r3.us': { en: 'Integrated where it saves real hours', fr: 'Intégrée là où elle fait gagner des heures', hu: 'Beépítve ott, ahol valódi órákat spórol' },
  'cmp.r4.crit': { en: 'During the project', fr: 'Pendant le projet', hu: 'A projekt alatt' },
  'cmp.r4.other': { en: 'A black box, you wait', fr: 'Boîte noire, vous attendez', hu: 'Fekete doboz, Ön csak vár' },
  'cmp.r4.us': { en: 'You follow progress in real time', fr: 'Vous suivez en direct', hu: 'Valós időben követi a haladást' },
  'cmp.r5.crit': { en: 'After delivery', fr: 'Après la livraison', hu: 'Az átadás után' },
  'cmp.r5.other': { en: 'They drop you', fr: 'On vous lâche', hu: 'Magára hagyják' },
  'cmp.r5.us': { en: 'Training to autonomy, then we stay', fr: 'Formation jusqu\'à l\'autonomie, puis on reste', hu: 'Képzés az önállóságig, aztán maradunk' },
  'cmp.r6.crit': { en: 'Your data', fr: 'Vos données', hu: 'Az adatai' },
  'cmp.r6.other': { en: 'Often outside the EU', fr: 'Souvent hors UE', hu: 'Gyakran az EU-n kívül' },
  'cmp.r6.us': { en: 'Hosted in the EU, GDPR-native', fr: 'Hébergées en UE, RGPD-natif', hu: 'Az EU-ban tárolva, GDPR-natív' },

  // ───────────────────────────────────────────────────────────────
  // 3 Solutions (cards à la Exploria)
  // ───────────────────────────────────────────────────────────────
  'sols.label': { en: 'Our approach', fr: 'Notre approche', hu: 'A megközelítésünk' },
  'sols.title': { en: 'We understand first.', fr: 'On comprend.', hu: 'Előbb megértjük.' },
  'sols.titleAccent': { en: 'Then we build custom.', fr: 'On construit sur-mesure.', hu: 'Aztán egyedire építjük.' },
  'sols.sub': {
    en: 'We start from your business and how you really work, then assemble what you need: software, a platform, AI where it makes you gain.',
    fr: 'On part de votre métier, on assemble ce qu\'il vous faut : logiciel, plateforme, IA là où elle vous fait gagner.',
    hu:
      'A szakmájából és a valódi működéséből indulunk ki, majd összerakjuk, amire szüksége van: szoftvert, platformot, MI-t ott, ahol hoz Önnek.',
  },
  // Solution 1, Audit (porte d'entrée)
  'sols.s1.badge': { en: '', fr: '', hu: '' },
  'sols.s1.title': { en: 'Audit & action plan', fr: 'Audit & plan d\'action', hu: 'Audit és cselekvési terv' },
  'sols.s1.target': { en: '', fr: '', hu: '' },
  'sols.s1.promise': {
    en: 'A deep audit of how you work, and a costed action plan you can run with us or on your own.',
    fr: 'Un audit approfondi de votre façon de travailler, et un plan d\'action chiffré que vous pouvez exécuter avec nous ou en interne.',
    hu:
      'Alapos audit arról, ahogyan dolgoznak, és egy beárazott cselekvési terv, amit velünk vagy házon belül is végre tud hajtani.',
  },
  'sols.s1.bullet1': { en: 'We map how your business actually runs', fr: 'On cartographie le fonctionnement réel de votre activité', hu: 'Feltérképezzük, hogyan működik valójában a cége' },
  'sols.s1.bullet2': { en: 'We pinpoint what blocks and slows you down', fr: 'On repère ce qui bloque et ralentit', hu: 'Megmutatjuk, mi akaszt meg és mi lassít' },
  'sols.s1.bullet3': { en: 'The priority levers, ranked by impact', fr: 'Les leviers prioritaires, classés par impact', hu: 'A legfontosabb beavatkozási pontok, hatás szerint rangsorolva' },
  'sols.s1.bullet4': { en: 'A costed plan: with us, in-house, or a mix', fr: 'Un plan chiffré : avec nous, en interne, ou un mix', hu: 'Beárazott terv: velünk, házon belül, vagy vegyesen' },
  'sols.s1.bullet5': { en: 'A clear document delivered within 7 days', fr: 'Un document clair livré sous 7 jours', hu: 'Világos dokumentum 7 napon belül átadva' },
  'sols.s1.bullet6': { en: 'You leave with the plan, even without us', fr: 'Vous repartez avec le plan, même sans nous', hu: 'A terv az Öné marad, akkor is, ha nélkülünk folytatja' },
  'sols.s1.ideal': {
    en: 'Executives who want to understand before committing: to see where to act and what it would cost.',
    fr: 'Les dirigeants qui veulent comprendre avant de s\'engager : savoir où agir et combien ça coûte.',
    hu:
      'Vezetőknek, akik érteni akarnak, mielőtt elköteleződnek: hol kell beavatkozni, és mibe kerül.',
  },
  'sols.s1.cta': { en: 'Start the audit', fr: 'Démarrer l\'audit', hu: 'Audit indítása' },
  'sols.s1.ctaSub': { en: 'Free', fr: 'Offert', hu: 'Ingyenes' },
  // Solution 2, Plateforme sur-mesure
  'sols.s2.title': { en: 'Custom software', fr: 'Logiciel sur-mesure', hu: 'Egyedi szoftver' },
  'sols.s2.target': { en: '', fr: '', hu: '' },
  'sols.s2.promise': {
    en: 'We bring all your tools and all your data into one platform built for your business. Yours, not one more subscription.',
    fr: 'On réunit tous vos outils et toutes vos données dans une seule plateforme conçue pour votre métier. La vôtre, pas un abonnement de plus.',
    hu:
      'Minden eszközét és minden adatát egyetlen, a szakmájára tervezett platformba vonjuk össze. Az Önébe, nem még egy előfizetésbe.',
  },
  'sols.s2.bullet1': { en: 'A digital backbone that structures how your business runs', fr: 'Une colonne vertébrale digitale qui structure votre activité', hu: 'Digitális gerinc, amely rendszert visz a működésébe' },
  'sols.s2.bullet2': { en: 'All your tools and data connected in one place', fr: 'Tous vos outils et données connectés au même endroit', hu: 'Minden eszköze és adata egy helyen, összekötve' },
  'sols.s2.bullet3': { en: 'Your processes structured, streamlined and automated', fr: 'Vos process structurés, fluidifiés et automatisés', hu: 'A folyamatai rendszerezve, gördülékenyebben, automatizálva' },
  'sols.s2.bullet4': { en: 'Clear roles and workflows, your team knows what to do', fr: 'Rôles et workflows clairs, l\'équipe sait quoi faire', hu: 'Világos szerepkörök és munkafolyamatok, a csapat tudja a dolgát' },
  'sols.s2.bullet5': { en: 'The code belongs to you, 100%', fr: 'Le code vous appartient à 100%', hu: 'A kód 100%-ban az Öné' },
  'sols.s2.bullet6': { en: 'In production in 4 to 8 weeks · hosted in the EU', fr: 'En production en 4 à 8 semaines · hébergé en UE', hu: 'Élesben 4-8 hét alatt · EU-s tárhelyen' },
  'sols.s2.ideal': {
    en: 'Executives tired of juggling spreadsheets, emails and ten tools that don\'t talk to each other.',
    fr: 'Les dirigeants qui en ont marre de jongler entre Excel, mails et dix logiciels qui ne se parlent pas.',
    hu:
      'Vezetőknek, akiknek elegük van abból, hogy táblázatok, e-mailek és tíz egymással nem beszélő szoftver között zsonglőrködjenek.',
  },
  'sols.s2.cta': { en: 'Start the audit', fr: 'Démarrer l\'audit', hu: 'Audit indítása' },
  'sols.s2.ctaSub': { en: 'Free', fr: 'Offert', hu: 'Ingyenes' },
  // Solution 3, IA agentique
  'sols.s3.title': { en: 'AI system', fr: 'Système IA', hu: 'MI-rendszer' },
  'sols.s3.target': { en: '', fr: '', hu: '' },
  'sols.s3.promise': {
    en: 'AI solutions tailored to your business: agentic AI with persistent memory, AI agents and automations, plugged in only where they truly save you time.',
    fr: 'Des solutions IA taillées pour votre métier : IA agentique à mémoire persistante, agents IA et automatisations, branchées uniquement là où elles vous font vraiment gagner.',
    hu:
      'A szakmájára szabott MI-megoldások: tartós memóriájú ágens MI, MI-ágensek és automatizmusok, kizárólag ott bekötve, ahol tényleg hoznak Önnek.',
  },
  'sols.s3.bullet1': { en: 'Agentic AI with persistent memory: it keeps your business context', fr: 'IA agentique à mémoire persistante : elle retient le contexte de votre activité', hu: 'Tartós memóriájú ágens MI: megőrzi a cége kontextusát' },
  'sols.s3.bullet2': { en: 'AI agents that run multi-step tasks inside your tools', fr: 'Des agents IA qui exécutent des tâches multi-étapes dans vos outils', hu: 'MI-ágensek, amelyek többlépcsős feladatokat futtatnak az eszközeiben' },
  'sols.s3.bullet3': { en: 'Automations on your repetitive, time-consuming tasks', fr: 'Des automatisations sur vos tâches répétitives et chronophages', hu: 'Automatizmusok az ismétlődő, időrabló feladatokra' },
  'sols.s3.bullet4': { en: 'It learns from every interaction and improves over time', fr: 'Elle apprend de chaque interaction et s\'améliore avec le temps', hu: 'Minden interakcióból tanul, és idővel jobb lesz' },
  'sols.s3.bullet5': { en: 'Integrated only where it replaces real hours', fr: 'Intégrée uniquement là où elle remplace de vraies heures', hu: 'Csak ott épül be, ahol valódi munkaórákat vált ki' },
  'sols.s3.bullet6': { en: 'Your data stays in the EU', fr: 'Vos données restent en UE', hu: 'Az adatai az EU-ban maradnak' },
  'sols.s3.ideal': {
    en: 'Executives who want to hand off repetitive work to a reliable AI, not just a chatbot.',
    fr: 'Les dirigeants qui veulent déléguer les tâches répétitives à une IA fiable, pas juste un chatbot.',
    hu:
      'Vezetőknek, akik megbízható MI-re akarják bízni az ismétlődő munkát, nem csak egy chatbotra.',
  },
  'sols.s3.cta': { en: 'Start the audit', fr: 'Démarrer l\'audit', hu: 'Audit indítása' },
  'sols.s3.ctaSub': { en: 'Free', fr: 'Offert', hu: 'Ingyenes' },
  // Common labels
  'sols.includesLabel': { en: 'What you get', fr: 'Ce que vous obtenez', hu: 'Amit kap' },
  'sols.idealLabel': { en: 'Ideal for', fr: 'Idéal pour', hu: 'Kinek való' },
  // Offre phare, Infrastructure digitale (le tout complet)
  'sols.infra.label': { en: 'The complete offer', fr: 'L\'offre complète', hu: 'A teljes ajánlat' },
  'sols.infra.title': { en: 'Digital infrastructure', fr: 'Infrastructure digitale', hu: 'Digitális infrastruktúra' },
  'sols.infra.desc': {
    en: 'Everything, end to end. We map your processes, build your custom software and AI, integrate, adjust and train your teams, and we only step back once you\'re fully autonomous.',
    fr: 'Le tout, de A à Z. On cartographie vos process, on développe vos logiciels sur-mesure et vos solutions IA, on intègre, on ajuste et on forme vos équipes, et on ne se retire que quand vous êtes autonome.',
    hu:
      'Minden, elejétől a végéig. Feltérképezzük a folyamatait, megépítjük az egyedi szoftvereit és MI-megoldásait, integrálunk, finomhangolunk, betanítjuk a csapatait, és csak akkor lépünk hátra, amikor már teljesen önállóak.',
  },
  'sols.infra.step1': { en: 'Audit, processes, workflows, talks with your teams', fr: 'Audit, process, workflows, échanges avec vos équipes', hu: 'Audit: folyamatok, munkafolyamatok, egyeztetés a csapataival' },
  'sols.infra.step2': { en: 'Build, custom software + AI & web solutions', fr: 'Développement, logiciels sur-mesure + solutions IA & web', hu: 'Fejlesztés: egyedi szoftverek + MI- és webmegoldások' },
  'sols.infra.step3': { en: 'Integration & tuning, setup, evaluation, iterations', fr: 'Intégration & ajustement, mise en place, évaluation, évolutions', hu: 'Integráció és finomhangolás: bevezetés, értékelés, továbbfejlesztés' },
  'sols.infra.step4': { en: 'Tracking, we measure what you actually gain', fr: 'Tracking, on mesure ce que vous gagnez vraiment', hu: 'Mérés: megnézzük, mit nyer valójában' },
  'sols.infra.step5': { en: 'Training, your teams brought to full autonomy', fr: 'Formation, vos équipes montées en autonomie', hu: 'Képzés: a csapatai eljutnak a teljes önállóságig' },
  'sols.infra.step6': { en: 'Autonomy, we step back, we stay reachable', fr: 'Autonomie, on se retire, on reste disponible', hu: 'Önállóság: hátralépünk, de elérhetők maradunk' },
  'sols.infra.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  // Offre séparée, Formation IA opérationnelle (wedge DIY)
  'sols.form.badge': { en: 'New', fr: 'Nouveau', hu: 'Új' },
  'sols.form.title': { en: 'Operational AI training', fr: 'Formation IA opérationnelle', hu: 'Gyakorlati MI-képzés' },
  'sols.form.desc': {
    en: 'Learn to use AI concretely in your job: save time, sharpen relevance, gain reliability. You leave with real use cases ready for your team.',
    fr: 'Apprenez à utiliser l\'IA concrètement dans votre métier : gagner du temps, de la pertinence, de la fiabilité. Vous repartez avec des cas d\'usage réels, prêts pour votre équipe.',
    hu:
      'Tanulja meg, hogyan használja az MI-t konkrétan a saját szakmájában: időt nyerni, pontosabbá válni, megbízhatóbbá lenni. Valódi, a csapatára kész felhasználási esetekkel távozik.',
  },
  'sols.form.cta': { en: 'Talk to us about it', fr: 'Nous en parler', hu: 'Beszéljünk róla' },
  'sols.form.ctaSub': { en: 'On request', fr: 'Sur devis', hu: 'Ajánlat alapján' },

  // ───────────────────────────────────────────────────────────────
  // FOMO, the cost of waiting (EU stats, sourced)
  // ───────────────────────────────────────────────────────────────
  'fomo.label': { en: 'The cost of waiting', fr: 'Le coût d\'attendre', hu: 'A várakozás ára' },
  'fomo.title': { en: 'Your competitors are adopting AI.', fr: 'Vos concurrents adoptent l\'IA.', hu: 'A versenytársai már használják az MI-t.' },
  'fomo.titleAccent': { en: 'You\'re still hesitating.', fr: 'Vous, vous hésitez encore.', hu: 'Ön még mindig habozik.' },
  'fomo.stat1.num': { en: '20%', fr: '20%', hu: '20%' },
  'fomo.stat1.desc': { en: 'of EU enterprises (10+ employees) use AI in 2025, up from 13.5% in 2024. A +48% jump in a single year.', fr: 'des entreprises européennes (10+ employés) utilisent l\'IA en 2025, contre 13,5% en 2024. Soit +48% en un an.', hu: 'az európai vállalatok (10+ alkalmazott) aránya, amely 2025-ben MI-t használ, szemben a 2024-es 13,5%-kal. Egy év alatt +48%.' },
  'fomo.stat1.source': { en: 'Eurostat, Use of AI in enterprises 2025', fr: 'Eurostat, Use of AI in enterprises 2025', hu: 'Eurostat, Use of AI in enterprises 2025' },
  'fomo.stat1.url': { en: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2', fr: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2', hu: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2' },
  'fomo.stat2.num': { en: '20-30%', fr: '20-30%', hu: '20-30%' },
  'fomo.stat2.desc': { en: 'of work time freed by AI for teams that integrate it into their core processes.', fr: 'du temps de travail libéré par l\'IA chez les équipes qui l\'intègrent dans leurs process clés.', hu: 'a munkaidőből szabadul fel az MI-vel azoknál a csapatoknál, amelyek beépítik a kulcsfolyamataikba.' },
  'fomo.stat2.source': { en: 'McKinsey, A new future of work 2024', fr: 'McKinsey, A new future of work 2024', hu: 'McKinsey, A new future of work 2024' },
  'fomo.stat2.url': { en: 'https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai', fr: 'https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai', hu: 'https://www.mckinsey.com/mgi/our-research/a-new-future-of-work-the-race-to-deploy-ai' },
  'fomo.stat3.num': { en: '2×', fr: '2×', hu: '2×' },
  'fomo.stat3.desc': { en: 'more likely to report annual growth for SMBs that have adopted AI vs those that haven\'t.', fr: 'plus de chances de croissance annuelle pour les PME qui ont adopté l\'IA vs celles qui ne l\'ont pas fait.', hu: 'akkora eséllyel számolnak be éves növekedésről azok a kkv-k, amelyek bevezették az MI-t, szemben azokkal, amelyek nem.' },
  'fomo.stat3.source': { en: 'Salesforce SMB Trends Report 2024', fr: 'Salesforce SMB Trends Report 2024', hu: 'Salesforce SMB Trends Report 2024' },
  'fomo.stat3.url': { en: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/', fr: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/', hu: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/' },
  'fomo.stat4.num': { en: '91%', fr: '91%', hu: '91%' },
  'fomo.stat4.desc': { en: 'of AI-using SMBs report that AI has directly boosted their revenue.', fr: 'des PME qui utilisent l\'IA déclarent qu\'elle a directement boosté leur chiffre d\'affaires.', hu: 'az MI-t használó kkv-k közül azt mondja, hogy az MI közvetlenül növelte az árbevételét.' },
  'fomo.stat4.source': { en: 'Salesforce SMB Trends Report 2024', fr: 'Salesforce SMB Trends Report 2024', hu: 'Salesforce SMB Trends Report 2024' },
  'fomo.stat4.url': { en: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/', fr: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/', hu: 'https://www.salesforce.com/news/stories/smb-trends-report-2024/' },
  'fomo.body': {
    en: 'While part of European SMBs start integrating AI into their operations, the other pays the hidden bill: up to 30% of work time consumed by tasks that a well-built infrastructure would replace. And one more month where your competitors widen the gap.',
    fr: 'Pendant qu\'une partie des PME européennes commence à intégrer l\'IA dans leur opérationnel, l\'autre paie la facture cachée : jusqu\'à 30% du temps de travail consommé par des tâches qu\'une infrastructure bien construite remplacerait. Et un mois de plus où vos concurrents creusent l\'écart.',
    hu:
      'Miközben az európai kkv-k egy része már beépíti az MI-t a működésébe, a másik fizeti a rejtett számlát: a munkaidő akár 30%-át olyan feladatok viszik el, amelyeket egy jól megépített infrastruktúra kiváltana. És egy újabb hónap, amíg a versenytársai növelik az előnyüket.',
  },
  'fomo.cta': { en: 'Book a call before they widen the gap', fr: 'Réserver un appel avant qu\'ils ne creusent l\'écart', hu: 'Foglaljon hívást, mielőtt tovább nő az előnyük' },

  // ───────────────────────────────────────────────────────────────
  // Results, mesurable client outcomes
  // ───────────────────────────────────────────────────────────────
  'results2.label': { en: 'Measurable results', fr: 'Résultats mesurables', hu: 'Mérhető eredmények' },
  'results2.title': { en: 'Real clients.', fr: 'Vrais clients.', hu: 'Valódi ügyfelek.' },
  'results2.titleAccent': { en: 'Verified numbers.', fr: 'Chiffres vérifiés.', hu: 'Ellenőrzött számok.' },
  'results2.sub': {
    en: 'Every figure below is measured, documented, and verified with the client. No demos. No estimations.',
    fr: 'Chaque chiffre ci-dessous est mesuré, documenté et vérifié avec le client. Pas de démo. Pas d\'estimation.',
    hu:
      'Az alábbi számok mind mértek, dokumentáltak és az ügyféllel közösen ellenőrzöttek. Semmi demó. Semmi becslés.',
  },
  'results2.r1.num': { en: '×11', fr: '×11', hu: '×11' },
  'results2.r1.desc': { en: 'less time spent per manager on weekly ops: from 11h to 1h.', fr: 'moins de temps passé par manager sur les opérations hebdo : de 11h à 1h.', hu: 'kevesebb idő vezetőnként a heti működésre: 11 óráról 1 órára.' },
  'results2.r1.client': { en: 'Chromosome · Restaurant group', fr: 'Chromosome · Groupe de restaurants', hu: 'Chromosome · Étteremcsoport' },
  'results2.r2.num': { en: '—', fr: '—', hu: '—' },
  'results2.r2.desc': { en: 'Your case here. Next client deployment in progress.', fr: 'Votre cas ici. Prochain déploiement client en cours.', hu: 'Itt az Ön esete. A következő ügyfélbevezetés folyamatban.' },
  'results2.r2.client': { en: 'Coming soon', fr: 'Bientôt', hu: 'Hamarosan' },
  'results2.r3.num': { en: '—', fr: '—', hu: '—' },
  'results2.r3.desc': { en: 'Your case here. We measure everything we ship.', fr: 'Votre cas ici. On mesure tout ce qu\'on déploie.', hu: 'Itt az Ön esete. Mindent megmérünk, amit bevezetünk.' },
  'results2.r3.client': { en: 'Coming soon', fr: 'Bientôt', hu: 'Hamarosan' },

  // ───────────────────────────────────────────────────────────────
  // Expertise & Values
  // ───────────────────────────────────────────────────────────────
  'expertise.label': { en: 'The NateSystem recipe', fr: 'La recette NateSystem', hu: 'A NateSystem receptje' },
  'expertise.title': { en: 'Reliable technologies.', fr: 'Des technologies fiables.', hu: 'Megbízható technológiák.' },
  'expertise.titleAccent': { en: 'No one left behind.', fr: 'Personne laissé de côté.', hu: 'Senki nem marad le.' },
  'expertise.sub': {
    en: 'Two convictions that shape how we build every system.',
    fr: 'Deux convictions qui guident la façon dont on construit chaque système.',
    hu:
      'Két meggyőződés, amely minden rendszerünk megépítését vezeti.',
  },
  'expertise.p1.title': { en: 'Best-in-class technologies, secured', fr: 'Les technologies les plus fiables du marché', hu: 'A piac legmegbízhatóbb technológiái' },
  'expertise.p1.desc': {
    en: 'We use the most reliable and secured technologies the market has (Next.js, Supabase, Claude API, Vercel), EU-hosted where possible, GDPR-native, audited. Your data and your code are protected by the same stack the most demanding teams in tech rely on.',
    fr: 'On utilise les technologies les plus fiables et sécurisées du marché (Next.js, Supabase, Claude API, Vercel), hébergées en UE quand c\'est possible, RGPD-natives, auditables. Vos données et votre code sont protégés par la même stack que les équipes tech les plus exigeantes.',
    hu:
      'A piac legmegbízhatóbb és legbiztonságosabb technológiáit használjuk (Next.js, Supabase, Claude API, Vercel), ahol lehet, EU-s tárhelyen, GDPR-natívan, auditálhatóan. Az adatait és a kódját ugyanaz a technológiai alap védi, amire a legigényesebb fejlesztőcsapatok is építenek.',
  },
  'expertise.p2.title': { en: 'No one left out of control', fr: 'Personne laissé hors de contrôle', hu: 'Senki nem marad kontroll nélkül' },
  'expertise.p2.desc': {
    en: 'We don\'t ship and disappear. We train your teams. We accompany them until everyone, from the executive to the last operator, uses the system daily, without doubt, without asking us. That\'s when we consider the mission done.',
    fr: 'On ne livre pas pour disparaître. On forme vos équipes. On les accompagne jusqu\'à ce que tout le monde, du dirigeant au dernier opérateur, utilise le système au quotidien, sans hésiter, sans avoir à nous demander. C\'est à ce moment-là qu\'on considère la mission terminée.',
    hu:
      'Nem adjuk át, hogy aztán eltűnjünk. Betanítjuk a csapatait. Addig kísérjük őket, amíg mindenki, a vezetőtől az utolsó operátorig, naponta és gondolkodás nélkül használja a rendszert, anélkül hogy minket kellene kérdeznie. A munkát ekkor tekintjük késznek.',
  },

  // ───────────────────────────────────────────────────────────────
  // About Nathan
  // ───────────────────────────────────────────────────────────────
  'about.label': { en: 'Who builds', fr: 'Qui construit', hu: 'Ki építi' },
  'about.title': { en: 'The founder codes.', fr: 'Le fondateur code.', hu: 'Az alapító írja a kódot.' },
  'about.titleAccent': { en: 'Real deployments behind.', fr: 'Des déploiements concrets derrière.', hu: 'Valódi bevezetésekkel a háta mögött.' },
  'about.name': { en: 'Nathan Goutagny', fr: 'Nathan Goutagny', hu: 'Nathan Goutagny' },
  'about.role': { en: 'Founder · Custom software · Applied AI · Lyon', fr: 'Fondateur · Logiciel sur-mesure · IA appliquée · Lyon', hu: 'Alapító · Egyedi szoftver · Alkalmazott MI · Lyon' },
  'about.bio': {
    en: 'Engineer trained at the intersection of software and applied AI. Years of building operational systems for French and Hungarian SMBs: restaurants, education, consulting. One conviction: software that belongs to the company is worth more than ten SaaS subscriptions for life.',
    fr: 'Ingénieur formé au croisement du software et de l\'IA appliquée. Années à construire des systèmes opérationnels pour des PME françaises et hongroises : restauration, éducation, conseil. Une conviction : le logiciel qui appartient à l\'entreprise vaut mieux que dix SaaS qu\'elle loue à vie.',
    hu:
      'Mérnök, a szoftverfejlesztés és az alkalmazott MI metszéspontján. Évek működő rendszerek építésével francia és magyar kkv-knak: vendéglátás, oktatás, tanácsadás. Egy meggyőződés: az a szoftver, amely a cégé, többet ér tíz élethosszig bérelt SaaS-előfizetésnél.',
  },
  'about.note': {
    en: 'If you talk to me, I\'m the one coding behind. Not a salesperson, not a junior.',
    fr: 'Si vous me parlez, c\'est moi qui code derrière. Pas un commercial, pas un junior.',
    hu:
      'Ha velem beszél, én írom mögötte a kódot. Nem egy értékesítő, nem egy junior.',
  },
  'about.linkedin': { en: 'LinkedIn', fr: 'LinkedIn', hu: 'LinkedIn' },

  // ───────────────────────────────────────────────────────────────
  // Testimonial reframed
  // ───────────────────────────────────────────────────────────────
  'testi.label': { en: 'What they say', fr: 'Ce qu\'ils en disent', hu: 'Amit ők mondanak' },
  'testi.title': { en: 'What our clients say,', fr: 'Ce que disent ceux qui l\'ont', hu: 'Amit azok mondanak, akik' },
  'testi.titleAccent': { en: 'who built it with us.', fr: 'construit avec nous.', hu: 'velünk építették meg.' },
  'testi.soon': {
    en: 'More client voices coming as we ship the next deployments.',
    fr: 'Bientôt : les retours de nos prochains clients.',
    hu:
      'Hamarosan: a következő ügyfeleink visszajelzései.',
  },

  // Footer
  'footer.tagline': {
    en: 'Private schools · Custom · Yours to keep',
    fr: 'Écoles privées · Sur-mesure · Vous appartient',
    hu: 'Magániskolák · Egyedi · Az Öné marad',
  },
  'footer.contactLabel': { en: 'Get in touch', fr: 'Nous contacter', hu: 'Lépjen kapcsolatba' },
  'footer.founderRole': { en: 'Founder · NateSystem', fr: 'Fondateur · NateSystem', hu: 'Alapító · NateSystem' },
  'footer.founder': {
    en: 'Founded and coded by Nathan Goutagny. The person you talk to is the person who builds, and you keep 100% of the code.',
    fr: 'Fondé et codé par Nathan Goutagny. Celui qui vous parle est celui qui construit, et vous gardez 100 % du code.',
    hu: 'Nathan Goutagny alapította és kódolja. Akivel beszél, az építi is, és a kód 100%-a az Öné marad.',
  },
  'footer.legal': { en: 'Legal notice', fr: 'Mentions légales', hu: 'Jogi nyilatkozat' },

  // Footer column headers (Dec 2026, added for SEO maillage)
  'footer.col.sections': { en: 'Sections', fr: 'Sections', hu: 'Oldalak' },
  'footer.col.solutions': { en: 'Solutions', fr: 'Solutions', hu: 'Megoldások' },
  'footer.col.toolsDemos': { en: 'Tools & demos', fr: 'Outils & démos', hu: 'Eszközök és demók' },
  'footer.col.resources': { en: 'Resources', fr: 'Ressources', hu: 'Források' },
  'footer.col.legal': { en: 'Legal', fr: 'Légal', hu: 'Jogi' },

  // Footer Solutions column, the new conversion + sector SEO pages
  'footer.link.pricing': { en: 'Custom software pricing', fr: 'Prix logiciel sur-mesure', hu: 'Egyedi szoftver ára' },
  'footer.link.vsSaas': { en: 'Custom vs SaaS', fr: 'Sur-mesure vs SaaS', hu: 'Egyedi vagy SaaS' },
  'footer.link.lyon': { en: 'Software & AI agency in Lyon', fr: 'Agence logiciel & IA à Lyon', hu: 'Szoftver- és MI-ügynökség Lyonban' },
  'footer.link.restaurant': { en: 'Software for restaurants', fr: 'Logiciel pour la restauration', hu: 'Szoftver vendéglátásra' },
  'footer.link.education': { en: 'Software for higher education', fr: 'Logiciel pour l\'enseignement supérieur', hu: 'Szoftver felsőoktatásra' },
  'footer.link.consulting': { en: 'Software for consulting firms', fr: 'Logiciel pour le conseil', hu: 'Szoftver tanácsadó cégeknek' },
  'footer.link.sportsclub': { en: 'Software for sports clubs', fr: 'Logiciel pour clubs sportifs', hu: 'Szoftver sportklubokra' },

  // Footer link labels, only those not already covered by nav/tools/resources keys
  'footer.link.home': { en: 'Home', fr: 'Accueil', hu: 'Főoldal' },
  'footer.link.services': { en: 'Services', fr: 'Prestations', hu: 'Szolgáltatások' },
  'footer.link.problem': { en: 'The problem', fr: 'Le problème', hu: 'A probléma' },
  'footer.link.process': { en: 'Process', fr: 'Process', hu: 'Folyamat' },
  'footer.link.results': { en: 'Results', fr: 'Résultats', hu: 'Eredmények' },
  'footer.link.contact': { en: 'Contact', fr: 'Contact', hu: 'Kapcsolat' },
  'footer.link.allTools': { en: 'All tools', fr: 'Tous les outils', hu: 'Összes eszköz' },
  'footer.link.reviewsDemo': { en: 'Reviews (demo)', fr: 'Reviews (démo)', hu: 'Reviews (demó)' },
  'footer.link.actifsDemo': { en: 'Actifs (demo)', fr: 'Actifs (démo)', hu: 'Actifs (demó)' },
  'footer.link.stockDemo': { en: 'Stock (demo)', fr: 'Stock (démo)', hu: 'Stock (demó)' },
  'footer.link.book': { en: 'Book a call', fr: 'Réserver un appel', hu: 'Hívás foglalása' },
  'footer.link.about': { en: 'About', fr: 'À propos', hu: 'Rólunk' },
  'footer.link.glossary': { en: 'Glossary', fr: 'Glossaire', hu: 'Szójegyzék' },

  // Tools page
  'tools.title': { en: 'Free Tools', fr: 'Outils Gratuits', hu: 'Ingyenes eszközök' },
  'tools.hero.title': { en: 'Try the product\nbefore you buy.', fr: 'Essayez le produit\navant de l\'acheter.', hu: 'Próbálja ki a terméket,\nmielőtt megveszi.' },
  'tools.hero.sub': { en: 'Live demos, free. Click around with fake data, then we talk if it fits.', fr: 'Démos live, gratuites. Cliquez avec des données fictives, on en parle si ça correspond.', hu: 'Élő demók, ingyen. Kattintson végig kitalált adatokon, és ha passzol, beszélünk róla.' },
  'tools.hero.tags': { en: 'Diagnostic IA · Live demos · No signup', fr: 'Diagnostic IA · Démos live · Sans inscription', hu: 'MI-diagnosztika · Élő demók · Regisztráció nélkül' },
  'tools.download': { en: 'Download for free →', fr: 'Télécharger gratuitement →', hu: 'Ingyenes letöltés →' },
  'tools.all': { en: 'All', fr: 'Tous', hu: 'Mind' },
  'tools.sub': {
    en: 'Calculators, quizzes, and templates to help you understand where AI can save you time and money.',
    fr: 'Calculateurs, quiz et templates pour comprendre où l\'IA peut vous faire gagner du temps et de l\'argent.',
    hu:
      'Kalkulátorok, tesztek és sablonok, hogy lássa, hol nyerhet az MI-vel időt és pénzt.',
  },
  'tools.diagnostic.title': { en: 'The AI Diagnostic', fr: 'Le Diagnostic IA', hu: 'Az MI-diagnosztika' },
  'tools.diagnostic.desc': {
    en: 'In 4 minutes, measure what your SMB loses each month in unused SaaS, repetitive time, and missed AI opportunities. Free report, no email.',
    fr: 'En 4 minutes, mesurez ce que votre PME perd chaque mois en SaaS inutiles, temps répétitif et opportunités IA ratées. Rapport gratuit, sans email.',
    hu:
      '4 perc alatt mérje meg, mennyit veszít a cége havonta kihasználatlan SaaS-eszközökön, ismétlődő munkán és elszalasztott MI-lehetőségeken. Ingyenes riport, e-mail nélkül.',
  },
  'tools.calculator.title': { en: 'SaaS Waste Calculator', fr: 'Calculateur de Gaspillage SaaS', hu: 'SaaS-pazarlás kalkulátor' },
  'tools.calculator.desc': {
    en: 'Find out how much you\'re wasting on unused SaaS subscriptions every month.',
    fr: 'Découvrez combien vous gaspillez en abonnements SaaS inutilisés chaque mois.',
    hu:
      'Derítse ki, mennyit pazarol havonta nem használt SaaS-előfizetésekre.',
  },
  'tools.quiz.title': { en: 'AI Readiness Quiz', fr: 'Quiz Maturité IA', hu: 'MI-érettségi teszt' },
  'tools.quiz.desc': {
    en: '5 questions to assess your organization\'s readiness for AI automation.',
    fr: '5 questions pour évaluer la maturité IA de votre organisation.',
    hu:
      '5 kérdés a szervezete MI-érettségének felméréséhez.',
  },
  'tools.timeCalc.title': { en: 'Lost Time Calculator', fr: 'Calculateur de Temps Perdu', hu: 'Elvesztett idő kalkulátor' },
  'tools.timeCalc.desc': {
    en: 'Calculate how many hours and euros your team wastes on repetitive tasks.',
    fr: 'Calculez combien d\'heures et d\'euros votre équipe perd en tâches répétitives.',
    hu:
      'Számolja ki, hány órát és eurót veszít a csapata ismétlődő feladatokon.',
  },
  'tools.downloadPdf': { en: 'Download PDF', fr: 'Télécharger le PDF', hu: 'PDF letöltése' },
  'tools.start': { en: 'Start', fr: 'Commencer', hu: 'Kezdés' },
  'tools.interactive': { en: 'Interactive', fr: 'Interactif', hu: 'Interaktív' },
  'tools.template': { en: 'Template', fr: 'Template', hu: 'Sablon' },

  // Resources page
  'resources.title': { en: 'Resources', fr: 'Ressources', hu: 'Források' },
  'resources.sub': {
    en: 'Case studies, articles, and insights on building intelligent operations.',
    fr: 'Études de cas, articles et insights sur la construction d\'opérations intelligentes.',
    hu:
      'Esettanulmányok, cikkek és meglátások az intelligens működés felépítéséről.',
  },
  'resources.caseStudies': { en: 'Case Studies', fr: 'Études de cas', hu: 'Esettanulmányok' },
  'resources.caseStudies.desc': { en: 'Real results from real clients, measured and documented.', fr: 'Des résultats réels chez de vrais clients, mesurés et documentés.', hu: 'Valódi eredmények valódi ügyfeleknél, mérve és dokumentálva.' },
  'resources.blog': { en: 'Blog', fr: 'Blog', hu: 'Blog' },
  'resources.blog.desc': { en: 'Insights on AI, automation, and scaling operations.', fr: 'Insights sur l\'IA, l\'automatisation et le scaling des opérations.', hu: 'Meglátások az MI-ről, az automatizálásról és a működés skálázásáról.' },
  'resources.video': { en: 'Video Testimonials', fr: 'Témoignages Vidéo', hu: 'Videós ajánlások' },
  'resources.comingSoon': { en: 'Coming soon', fr: 'Bientôt disponible', hu: 'Hamarosan' },
  'resources.readMore': { en: 'Read more', fr: 'Lire la suite', hu: 'Tovább olvasom' },

  // Mega dropdown
  'mega.interactive': { en: 'Interactive Tools', fr: 'Outils Interactifs', hu: 'Interaktív eszközök' },

  // Email gate
  'email.title': { en: 'Get your free template', fr: 'Obtenez votre template gratuit', hu: 'Kérje az ingyenes sablonját' },
  'email.sub': { en: 'Enter your email to download instantly.', fr: 'Entrez votre email pour télécharger instantanément.', hu: 'Adja meg az e-mail-címét az azonnali letöltéshez.' },
  'email.placeholder': { en: 'you@company.com', fr: 'vous@entreprise.com', hu: 'on@cegnev.hu' },
  'email.submit': { en: 'Download now', fr: 'Télécharger maintenant', hu: 'Letöltés most' },
  'email.privacy': { en: 'We don\'t spam. Unsubscribe anytime.', fr: 'Pas de spam. Désabonnement à tout moment.', hu: 'Nem küldünk spamet. Bármikor leiratkozhat.' },

  // Calculator
  'calc.title': { en: 'SaaS Waste Calculator', fr: 'Calculateur de Gaspillage SaaS', hu: 'SaaS-pazarlás kalkulátor' },
  'calc.sub': {
    en: 'Enter your numbers to find out how much you could save.',
    fr: 'Entrez vos chiffres pour découvrir combien vous pourriez économiser.',
    hu:
      'Adja meg a számait, és megtudja, mennyit spórolhatna.',
  },
  'calc.subscriptions': { en: 'Number of SaaS subscriptions', fr: 'Nombre d\'abonnements SaaS', hu: 'SaaS-előfizetések száma' },
  'calc.monthlyCost': { en: 'Total monthly cost (€)', fr: 'Coût mensuel total (€)', hu: 'Teljes havi költség (€)' },
  'calc.usage': { en: 'Average usage (%)', fr: 'Utilisation moyenne (%)', hu: 'Átlagos kihasználtság (%)' },
  'calc.calculate': { en: 'Calculate waste', fr: 'Calculer le gaspillage', hu: 'Pazarlás kiszámítása' },
  'calc.result.waste': { en: 'Monthly waste', fr: 'Gaspillage mensuel', hu: 'Havi pazarlás' },
  'calc.result.annual': { en: 'Annual waste', fr: 'Gaspillage annuel', hu: 'Éves pazarlás' },
  'calc.result.cta': { en: 'Let\'s fix this, book a free audit', fr: 'Corrigeons ça, réservez un audit gratuit', hu: 'Javítsuk ki, foglaljon ingyenes auditot' },

  // Quiz
  'quiz.title': { en: 'AI Readiness Quiz', fr: 'Quiz Maturité IA', hu: 'MI-érettségi teszt' },
  'quiz.sub': {
    en: '5 questions to assess where you stand.',
    fr: '5 questions pour évaluer où vous en êtes.',
    hu:
      '5 kérdés, hogy lássa, hol tart.',
  },
  'quiz.next': { en: 'Next', fr: 'Suivant', hu: 'Tovább' },
  'quiz.seeResults': { en: 'See results', fr: 'Voir les résultats', hu: 'Eredmények megtekintése' },
  'quiz.result.title': { en: 'Your AI Readiness Score', fr: 'Votre Score Maturité IA', hu: 'Az Ön MI-érettségi pontszáma' },
  'quiz.result.cta': { en: 'Get your personalized roadmap', fr: 'Obtenez votre feuille de route personnalisée', hu: 'Kérje a személyre szabott ütemtervét' },

  // Architecture section
  'architecture.title': { en: 'A complete AI infrastructure.', fr: 'Une infrastructure IA complète.', hu: 'Teljes MI-infrastruktúra.' },
  'architecture.titleAccent': { en: 'Not another SaaS.', fr: 'Pas un SaaS de plus.', hu: 'Nem még egy SaaS.' },
  'architecture.sub': { en: 'Every component is proprietary, connected to your data, and owned by you.', fr: 'Chaque brique est propriétaire, connectée à vos données, et vous appartient.', hu: 'Minden elem saját fejlesztés, az adataihoz kötve, és az Öné.' },
  'architecture.metric1': { en: 'Available connectors', fr: 'Connecteurs disponibles', hu: 'Elérhető csatlakozó' },
  'architecture.metric2': { en: 'AI integration', fr: 'Intégration IA', hu: 'MI-integráció' },
  'architecture.metric3': { en: 'Proprietary code', fr: 'Code propriétaire', hu: 'Saját kód' },

  // Integrations section
  'integrations.label': { en: 'INTEGRATIONS', fr: 'INTÉGRATIONS', hu: 'INTEGRÁCIÓK' },
  'integrations.title': { en: 'Connects to', fr: 'Se connecte à', hu: 'Csatlakozik' },
  'integrations.titleAccent': { en: 'all your tools.', fr: 'tous vos outils.', hu: 'minden eszközéhez.' },
  'integrations.sub': { en: 'Google Workspace, Slack, HubSpot, Notion, and 50+ integrations.', fr: 'Google Workspace, Slack, HubSpot, Notion, et 50+ intégrations.', hu: 'Google Workspace, Slack, HubSpot, Notion és 50+ további integráció.' },

  // CostPain section
  'costpain.label': { en: 'THE REAL PROBLEM', fr: 'LE VRAI PROBLÈME', hu: 'A VALÓDI PROBLÉMA' },
  'costpain.title': {
    en: 'What’s costing you',
    fr: 'Ce qui coûte cher',
    hu: 'Ami sokba kerül',
  },
  'costpain.titleAccent': {
    en: 'in your organisation.',
    fr: 'dans votre établissement.',
    hu: 'az intézményében.',
  },
  'costpain.stat1': {
    en: 'The evenings',
    fr: 'Les soirs',
    hu: 'Az esték',
  },
  'costpain.desc1': {
    en: 'Recounting covers, redoing the rota, preparing the order sheets. After the day is done.',
    fr: 'Recompter les couverts, refaire le planning, préparer les bons de commande. Après la journée.',
    hu: 'A terítékek újraszámolása, a beosztás újraírása, a rendelési ívek előkészítése. A nap végeztével.',
  },
  'costpain.stat2': {
    en: 'Two people',
    fr: 'Deux têtes',
    hu: 'Két ember',
  },
  'costpain.desc2': {
    en: 'The whole organisation rests on two people, and on files only they know how to keep.',
    fr: 'L’organisation repose sur deux personnes, et sur des fichiers qu’elles seules savent tenir.',
    hu: 'A szervezés két emberen áll, és olyan fájlokon, amelyeket csak ők tudnak karbantartani.',
  },
  'costpain.stat3': {
    en: 'Three to five times',
    fr: 'Trois à cinq fois',
    hu: 'Háromszór-ötször',
  },
  'costpain.desc3': {
    en: 'The same information keyed again: the software, the meal sheet, the rota, the group file, the invoice.',
    fr: 'La même information resaisie : le logiciel, le tableau des repas, le planning, la fiche du groupe, la facture.',
    hu: 'Ugyanaz az információ újra bevive: a szoftver, az étkezési táblázat, a beosztás, a csoport adatlapja, a számla.',
  },
  'costpain.stat4': {
    en: 'The corridor',
    fr: 'Le couloir',
    hu: 'A folyosó',
  },
  'costpain.desc4': {
    en: 'The kitchen, housekeeping, the front desk and management do not look at the same file, nor the same version.',
    fr: 'La cuisine, le ménage, l’accueil et la direction ne regardent pas le même fichier, ni la même version.',
    hu: 'A konyha, a takarítás, a recepció és a vezetőség nem ugyanazt a fájlt nézi, és nem is ugyanazt a verziót.',
  },
  'costpain.stat5': {
    en: '40 → 20',
    fr: '40 → 20',
    hu: '40 → 20',
  },
  'costpain.desc5': {
    en: 'A group changes the day before. Every document is corrected by hand, and the one you forget is paid for in meals ordered and agency hours.',
    fr: 'Un groupe change la veille. Chaque document se corrige à la main, et celui qu’on oublie se paie en repas commandés et en heures d’intérim.',
    hu: 'Egy csoport az előző napon változik. Minden dokumentumot kézzel javítanak, és amit elfelejtenek, megrendelt étkezésben és kölcsönzött órákban fizetődik meg.',
  },

  // Quantification section
  'quant.label': { en: 'QUANTIFICATION', fr: 'QUANTIFICATION', hu: 'SZÁMSZERŰSÍTÉS' },
  'quant.title': { en: 'The real cost', fr: 'Le vrai coût', hu: 'A tétlenség' },
  'quant.titleAccent': { en: 'of doing nothing.', fr: 'de ne rien faire.', hu: 'valódi ára.' },
  'quant.line1': { en: '3h/day × 5 employees = 15h lost/day', fr: '3h/jour × 5 collaborateurs = 15h perdues/jour', hu: 'Napi 3 óra × 5 munkatárs = napi 15 elvesztett óra' },
  'quant.line2': { en: '15h × 22 days = 330h/month', fr: '15h × 22 jours = 330h/mois', hu: '15 óra × 22 nap = havi 330 óra' },
  'quant.line3': { en: '330h × €35/h = €11,550/month', fr: '330h × 35€/h = 11 550 €/mois', hu: '330 óra × 35 €/óra = 11 550 €/hó' },
  'quant.total': { en: '€138,600/year in lost productivity.', fr: '138 600 €/an de productivité perdue.', hu: 'Évi 138 600 € elvesztett termelékenység.' },
  'quant.note': { en: 'Estimate based on an average loaded hourly cost of €35.', fr: 'Estimation basée sur un coût horaire moyen de 35€ chargé.', hu: 'A becslés 35 €-s átlagos, járulékokkal terhelt óradíjjal számol.' },
  'quant.cta': { en: 'Calculate my real cost →', fr: 'Calculer mon coût réel →', hu: 'A valódi költségem kiszámítása →' },

  // Guarantees section
  'guarantees.label': {
    en: 'GUARANTEES',
    fr: 'GARANTIES',
    hu: 'GARANCIÁK',
  },
  'guarantees.title': {
    en: 'Zero risk.',
    fr: 'Zéro risque.',
    hu: 'Nulla kockázat.',
  },
  'guarantees.titleAccent': {
    en: '5 guarantees.',
    fr: '5 garanties.',
    hu: '5 garancia.',
  },
  'guarantees.roi.title': {
    en: 'Hours-back guarantee',
    fr: 'Garantie Heures rendues',
    hu: 'Visszakapott órák garancia',
  },
  'guarantees.roi.desc': {
    en: 'Together we measure how long the targeted tasks take, before we start. The figure goes in the contract. If it is not reached at 12 months, we work for free until it is.',
    fr: 'On mesure ensemble le temps que prennent les tâches visées, avant de commencer. Le chiffre est écrit dans le contrat. Si à 12 mois il n\'est pas atteint, on travaille gratuitement jusqu\'à ce qu\'il le soit.',
    hu: 'Indulás előtt közösen megmérjük, mennyi időt visznek el a célzott feladatok. A szám bekerül a szerződésbe. Ha 12 hónap alatt nem teljesül, ingyen dolgozunk, amíg nem teljesül.',
  },
  'guarantees.delays.title': {
    en: 'Deadline guarantee',
    fr: 'Garantie Délais',
    hu: 'Határidő-garancia',
  },
  'guarantees.delays.desc': {
    en: 'Every unjustified week late on the signed scope: -10% off the remaining balance, capped at 50%. Not counted: additions outside scope, and feedback that is slow to come back from your side.',
    fr: 'Chaque semaine de retard injustifiée sur le périmètre signé : -10 % sur le solde restant, plafonné à 50 %. Ne comptent pas : les ajouts hors périmètre et les retours qui tardent de votre côté.',
    hu: 'Az aláírt terjedelemhez képest minden indokolatlan késés hete: -10% a fennmaradó összegből, legfeljebb 50%. Nem számít: a terjedelmen kívüli bővítés és az Önöktől késve érkező visszajelzés.',
  },
  'guarantees.ownership.title': {
    en: 'Ownership guarantee',
    fr: 'Garantie Propriété',
    hu: 'Tulajdonjogi garancia',
  },
  'guarantees.ownership.desc': {
    en: '100% of the code is yours on delivery. No subscription to keep access. If NateSystem disappeared tomorrow, your tool would keep running and your client data would stay with you.',
    fr: '100 % du code vous appartient à la livraison. Aucun abonnement pour garder l’accès. Si NateSystem disparaît demain, votre outil tourne toujours et vos données clients restent chez vous.',
    hu: 'A forráskód átadáskor 100%-ban az Öné. Nincs előfizetés a hozzáférés megtartásához. Ha a NateSystem holnap eltűnne, az eszköze tovább működik, és az ügyféladatai Önnél maradnak.',
  },
  'guarantees.productivity.title': {
    en: 'Time guarantee',
    fr: 'Garantie Temps',
    hu: 'Idő-garancia',
  },
  'guarantees.productivity.desc': {
    en: 'Together we measure the time lost on the targeted tasks before we start. If 90 days after delivery your teams have not got at least 30% of it back, we keep going at no charge.',
    fr: 'On mesure ensemble le temps perdu sur les tâches ciblées avant de commencer. Si 90 jours après la livraison vos équipes n\'en ont pas récupéré au moins 30 %, on continue sans facturer.',
    hu: 'Indulás előtt közösen megmérjük a célzott feladatokra elvesztegetett időt. Ha az átadás után 90 nappal a csapatai ennek legalább 30%-át nem kapták vissza, díjmentesen folytatjuk.',
  },
  'guarantees.efficiency.title': {
    en: 'Reliability guarantee',
    fr: 'Garantie Fiabilité',
    hu: 'Megbízhatósági garancia',
  },
  'guarantees.efficiency.desc': {
    en: 'Before we start, we list together the mistakes that come back every season: services not reconfirmed, double entry, lost requests. If they’re still there 90 days after delivery, we fix them free of charge.',
    fr: 'On liste ensemble, avant de démarrer, les erreurs qui reviennent chaque saison : prestations non reconfirmées, doubles saisies, demandes perdues. Si elles sont encore là 90 jours après la livraison, on corrige sans facturer.',
    hu: 'Indulás előtt közösen listázzuk a minden szezonban visszatérő hibákat: újra meg nem erősített szolgáltatások, dupla bevitel, elveszett kérések. Ha az átadás után 90 nappal még megvannak, díjmentesen javítjuk.',
  },
  'guarantees.family.title': {
    en: 'The Family Guarantee',
    fr: 'La Garantie Famille',
    hu: 'A Családi Garancia',
  },
  'guarantees.family.desc': {
    en: 'Within 90 days of delivery, if you are not happy enough to bring it up at every family dinner until everyone is sick of it, we refund you.',
    fr: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas assez content pour en parler à chaque repas de famille jusqu\'à ce que tout le monde en ait assez, on vous rembourse.',
    hu: 'Az átadástól számított 90 napon belül, ha nem elég elégedett ahhoz, hogy minden családi vacsorán szóba hozza, amíg mindenki meg nem unja, visszatérítjük.',
  },
  'guarantees.competitor.title': {
    en: 'The Next-Door Guarantee',
    fr: 'La Garantie Voisine',
    hu: 'A Szomszéd Garancia',
  },
  'guarantees.competitor.desc': {
    en: 'Within 90 days of delivery, if you’re not happy enough to beg us not to work with your neighbour, we refund you.',
    fr: 'Dans les 90 jours suivant la livraison, si vous n’êtes pas assez content pour nous supplier de ne pas travailler avec votre voisin, on vous rembourse.',
    hu: 'Az átadást követő 90 napon belül, ha nem elég elégedett ahhoz, hogy könyörögjön, ne dolgozzunk a szomszédjával, visszafizetjük.',
  },
  'guarantees.absurdLabel': {
    en: 'OUR BET',
    fr: 'NOTRE PARI',
    hu: 'A FOGADÁSUNK',
  },

  // ForWho section
  'forwho.label': { en: 'Who this is for', fr: 'Pour qui c\'est', hu: 'Kinek szól' },
  'forwho.title': { en: 'You\'re in', fr: 'Vous êtes', hu: 'Jó helyen jár,' },
  'forwho.titleAccent': { en: 'the right place if...', fr: 'au bon endroit si...', hu: 'ha…' },
  'forwho.yes.title': { en: 'It\'s for you if...', fr: 'C\'est pour vous si...', hu: 'Önnek szól, ha…' },
  'forwho.yes.1': { en: 'You run a real operation: 5 to 100 people, with recurring revenue', fr: 'Vous opérez une vraie activité : 5 à 100 personnes, avec du revenu récurrent', hu: 'Valódi működést visz: 5-100 fő, visszatérő bevétellel' },
  'forwho.yes.2': { en: 'Your tools don\'t talk to each other, and you pay for it every week', fr: 'Vos outils ne se parlent pas entre eux, et vous le payez chaque semaine', hu: 'Az eszközei nem beszélnek egymással, és ezt minden héten megfizeti' },
  'forwho.yes.3': { en: 'You want a real command center, not another SaaS subscription', fr: 'Vous voulez un vrai poste de commandement, pas un abonnement SaaS de plus', hu: 'Valódi irányítóközpontot akar, nem még egy SaaS-előfizetést' },
  'forwho.yes.4': { en: 'You want to own the software you run your business on', fr: 'Vous voulez posséder le logiciel qui fait tourner votre activité', hu: 'Birtokolni akarja azt a szoftvert, amin a cége fut' },
  'forwho.no.title': { en: 'It\'s NOT for you if...', fr: 'Ce n\'est pas pour vous si...', hu: 'NEM Önnek szól, ha…' },
  'forwho.no.1': { en: 'You\'re looking for a freelancer for a one-off mission', fr: 'Vous cherchez un freelance pour une mission ponctuelle', hu: 'Szabadúszót keres egyetlen, egyszeri feladatra' },
  'forwho.no.2': { en: 'You have no processes in place at all', fr: 'Vous n\'avez pas de process en place du tout', hu: 'Egyáltalán nincsenek kialakult folyamatai' },
  'forwho.no.3': { en: 'You expect results without your team\'s involvement', fr: 'Vous attendez des résultats sans implication de votre équipe', hu: 'Eredményt vár a csapata bevonása nélkül' },
  'forwho.no.4': { en: 'Your total budget is under €5,000', fr: 'Votre budget total est inférieur à 5 000€', hu: 'A teljes kerete 5 000 € alatt van' },
  // Promises strip (bottom of forwho)
  'forwho.promise.label': { en: 'What you get, either way', fr: 'Ce que vous obtenez, dans tous les cas', hu: 'Amit mindenképp megkap' },
  'forwho.promise1': { en: 'Full source code, owned by you forever', fr: 'Code source complet, à vous pour toujours', hu: 'Teljes forráskód, örökre az Öné' },
  'forwho.promise2': { en: 'No vendor lock-in. If we disappear, it keeps running.', fr: 'Aucun lock-in. Si on disparaît, ça continue de tourner.', hu: 'Semmilyen bezártság. Ha eltűnünk, attól még fut.' },
  'forwho.promise3': { en: 'Fixed scope, fixed price: no surprise invoices', fr: 'Périmètre fixe, prix fixe : zéro facture surprise', hu: 'Rögzített terjedelem, rögzített ár: semmi meglepetésszámla' },

  // FAQ section
  'faq.label': {
    en: 'FREQUENTLY ASKED',
    fr: 'QUESTIONS FRÉQUENTES',
    hu: 'GYAKORI KÉRDÉSEK',
  },
  'faq.title': {
    en: 'The honest',
    fr: 'Les réponses',
    hu: 'Az őszinte',
  },
  'faq.titleAccent': {
    en: 'answers.',
    fr: 'honnêtes.',
    hu: 'válaszok.',
  },
  // Q1, what we build
  'faq.q1': {
    en: 'What do you actually build?',
    fr: 'Qu’est-ce que vous construisez concrètement ?',
    hu: 'Pontosan mit építenek?',
  },
  'faq.a1': {
    en: 'Three connected things. The software that runs your organisation: stays and events, suppliers, client profiles, team rotas, quotes and invoicing. The online presence that goes with it: website, search visibility, event landing pages, campaign strategy. And the tracking that links the two, so you know where each request comes from and what it brings in.',
    fr: 'Trois choses reliées. Le logiciel qui fait tourner votre organisation : séjours et événements, prestataires, fiches clients, planning des équipes, devis et facturation. L’image en ligne qui va avec : site, référencement, pages pour vos événements, stratégie de campagnes. Et le suivi qui relie les deux, pour savoir d’où vient chaque demande et ce qu’elle rapporte.',
    hu: 'Három összekapcsolt dolgot. A szoftvert, amely a szervezetét működteti: tartózkodások és események, beszállítók, ügyféladatlapok, csapatbeosztás, árajánlatok és számlázás. A hozzá tartozó online megjelenést: weboldal, keresőoptimalizálás, eseményoldalak, kampánystratégia. És a követést, amely a kettőt összeköti, hogy tudja, honnan jön minden kérés, és mit hoz.',
  },

  // Q2, timeline (price removed, given on the call)
  'faq.q2': {
    en: 'Is it a development project?',
    fr: 'C’est une prestation de développement ?',
    hu: 'Ez egy fejlesztési megbízás?',
  },
  /* ⚠︎ LA QUESTION RESTE, LA RÉPONSE NE CHIFFRE PLUS. Retirer le délai
     sans rien mettre laisserait une question sans réponse, ce qui est
     pire qu'un chiffre. La réponse porte donc ce qui est réellement
     fixe : la méthode, et le prototype validé avant tout engagement
     (S9). Le chiffre revient le jour où Nathan fixe le délai. */
  'faq.a2': {
    en: 'No. It’s a long-term partnership. We build the first version on your real data, then the system evolves with you, season after season: new needs, new sites, new channels. You keep one point of contact who knows your organisation, trains your team and keeps improving the tool. And the code is yours from day one.',
    fr: 'Non. C’est un partenariat dans la durée. On construit la première version sur vos vraies données, puis le système évolue avec vous, saison après saison : nouveaux besoins, nouveaux lieux, nouveaux canaux. Vous gardez un seul interlocuteur qui connaît votre organisation, forme vos équipes et fait progresser l’outil. Et le code est à vous dès le premier jour.',
    hu: 'Nem. Ez hosszú távú partnerség. Az első változatot a valódi adatain építjük meg, aztán a rendszer Önnel együtt fejlődik, szezonról szezonra: új igények, új helyszínek, új csatornák. Egyetlen kapcsolattartója marad, aki ismeri a szervezetét, képzi a csapatát, és folyamatosan fejleszti az eszközt. A forráskód pedig az első naptól az Öné.',
  },

  // Q3, reliability + SLA
  'faq.q3': {
    en: 'Will it stay reliable once it’s live?',
    fr: 'Le système restera-t-il fiable une fois en production ?',
    hu: 'Megbízható marad éles üzemben is?',
  },
  'faq.a3': {
    en: 'Yes. Monitored constantly, backed up several times a day, and we step in fast if anything goes wrong. An arrival can’t happen without a rota or a confirmed driver: it’s built for that.',
    fr: 'Oui. Surveillé en permanence, sauvegardé plusieurs fois par jour, et on intervient vite en cas de souci. Une arrivée ne peut pas se passer sans planning ni chauffeur confirmé : c’est dimensionné pour ça.',
    hu: 'Igen. Folyamatosan felügyelve, naponta többször mentve, és gyorsan beavatkozunk, ha gond van. Egy érkezés nem történhet beosztás és megerősített sofőr nélkül: erre van méretezve.',
  },

  // Q4, automations + AI catalog (concrete, not buzzwords)
  'faq.q4': {
    en: 'Do we have to change how we work?',
    fr: 'Il faut changer notre organisation pour que ça marche ?',
    hu: 'Meg kell változtatnunk a működésünket?',
  },
  'faq.a4': {
    en: 'No, it’s the other way round. Off-the-shelf software asks you to fit its boxes because it’s sold to everyone. Here your rules are encoded once, as they are. Your suppliers, your rates, your seasons, your way of receiving clients: the tool adapts.',
    fr: 'Non, c’est l’inverse. Un logiciel du marché vous demande de rentrer dans ses cases parce qu’il est vendu à tout le monde. Ici, vos règles sont encodées une fois, telles qu’elles sont. Vos prestataires, vos tarifs, vos saisons, votre façon de recevoir : c’est l’outil qui s’aligne.',
    hu: 'Nem, éppen fordítva. A dobozos szoftver azt kéri, illeszkedjen a rubrikáiba, mert mindenkinek eladják. Itt a szabályait egyszer kódoljuk le, úgy, ahogy vannak. A beszállítói, az árai, a szezonjai, a vendégfogadása: az eszköz igazodik.',
  },

  // Q5, anti lock-in
  'faq.q5': {
    en: 'What if you disappear tomorrow?',
    fr: 'Et si vous disparaissez demain ?',
    hu: 'Mi van, ha holnap eltűnnek?',
  },
  'faq.a5': {
    en: 'You own 100% of the code and it runs on your infrastructure. Full documentation included. Any competent developer can take over. Your client data is never held hostage by a subscription.',
    fr: '100 % du code vous appartient et tourne sur votre infrastructure. Documentation complète incluse. N’importe quel développeur compétent reprend derrière. Vos données clients ne sont jamais otages d’un abonnement.',
    hu: 'A forráskód 100%-ban az Öné, és az Ön infrastruktúráján fut. Teljes dokumentációval. Bármely hozzáértő fejlesztő átveheti. Az ügyféladatai soha nem egy előfizetés túszai.',
  },

  // Q6, industries
  'faq.q6': {
    en: 'Do you only work in luxury hospitality?',
    fr: 'Vous ne travaillez qu’avec l’hospitalité de luxe ?',
    hu: 'Csak a luxusvendéglátással dolgoznak?',
  },
  'faq.a6': {
    en: 'That’s where we focus: villas, chalets and estates, concierge services, yachts, boutique and group hotels, event venues. We built for very demanding organisations before, schools and multi-site groups, and it shows in the method.',
    fr: 'C’est là qu’on se concentre : villas, chalets et domaines, conciergeries, yachts, petits hôtels et maisons de réception. On a construit avant pour des organisations très exigeantes, des écoles et des groupes multi-sites, et ça se voit dans la méthode.',
    hu: 'Erre koncentrálunk: villák, faházak és birtokok, concierge-szolgáltatások, jachtok, butik- és csoportszállodák, rendezvényhelyszínek. Korábban nagyon igényes szervezeteknek építettünk, iskoláknak és többtelephelyes csoportoknak, és ez látszik a módszeren.',
  },
  'faq.q7': {
    en: 'Do you promise more bookings?',
    fr: 'Vous promettez plus de réservations ?',
    hu: 'Több foglalást ígérnek?',
  },
  'faq.a7': {
    en: 'No, and be wary of anyone who does. We give you what you need to know what works: where your clients come from, what each source costs and what it brings in. The decisions stay yours. We don’t run your social media either: if someone does, we track what it brings in the same dashboard.',
    fr: 'Non, et méfiez-vous de qui le promet. On vous donne de quoi savoir ce qui marche : d’où viennent vos clients, ce que coûte chaque source et ce qu’elle rapporte. Les décisions restent les vôtres. On ne gère pas non plus vos réseaux sociaux : si quelqu’un s’en occupe, on suit ce qu’ils apportent dans le même tableau de bord.',
    hu: 'Nem, és óvakodjon attól, aki ígéri. Megadjuk, amire szüksége van ahhoz, hogy tudja, mi működik: honnan jönnek az ügyfelei, mennyibe kerül és mit hoz az egyes források. A döntések az Önéi maradnak. A közösségi médiát sem mi kezeljük: ha valaki foglalkozik vele, ugyanabban az irányítópultban követjük, mit hoz.',
  },
  'faq.q8': {
    en: 'Where is our client data hosted?',
    fr: 'Où sont hébergées les données de nos clients ?',
    hu: 'Hol tárolják az ügyfeleink adatait?',
  },
  'faq.a8': {
    en: 'In Europe, and nowhere else. Discretion is part of your service, so it’s part of ours: European hosting, GDPR built in from the start, tracking with consent, and access split by role. Management doesn’t see what a supplier sees.',
    fr: 'En Europe, et nulle part ailleurs. La discrétion fait partie de votre service, donc du nôtre : hébergement européen, RGPD pris en compte dès la conception, suivi avec consentement, et accès cloisonnés par rôle. La direction ne voit pas la même chose qu’un prestataire.',
    hu: 'Európában, és sehol máshol. A diszkréció az Ön szolgáltatásának része, így a miénknek is: európai tárhely, beépített GDPR, hozzájáruláson alapuló követés, és szerepkörök szerint elválasztott hozzáférés. A vezetőség nem ugyanazt látja, mint egy beszállító.',
  },

  // StrategyCall section
  'strategy.label': { en: 'BOOK A CALL · FREE', fr: 'RÉSERVER UN APPEL · OFFERT', hu: 'HÍVÁS FOGLALÁSA · INGYENES' },
  'strategy.title': { en: 'Book your', fr: 'Réservez votre', hu: 'Foglalja le a' },
  'strategy.titleAccent': { en: 'strategy call.', fr: 'appel stratégique.', hu: 'stratégiai hívását.' },
  'strategy.founder': { en: 'FOUNDER · NATESYSTEM', fr: 'FONDATEUR · NATESYSTEM', hu: 'ALAPÍTÓ · NATESYSTEM' },
  'strategy.sub': { en: 'For companies that want to make their operations autonomous with AI, without hiring and without depending on a SaaS.', fr: 'Pour les entreprises qui veulent rendre leurs opérations autonomes grâce à l\'IA, sans recruter et sans dépendre d\'un SaaS.', hu: 'Cégeknek, amelyek MI-vel akarják önállóvá tenni a működésüket, új munkaerő felvétele és SaaS-függőség nélkül.' },
  'strategy.cta': { en: 'Book my free call', fr: 'Réserver mon appel · offert', hu: 'Lefoglalom a hívást · ingyenes' },
  'strategy.item1': { en: 'Analysis of your current tools', fr: 'Analyse de vos outils actuels', hu: 'A jelenlegi eszközei elemzése' },
  'strategy.item2': { en: 'Quick win identification', fr: 'Identification des quick wins', hu: 'A gyors nyereségek azonosítása' },
  'strategy.item3': { en: 'Personalized action plan', fr: 'Plan d\'action personnalisé', hu: 'Személyre szabott cselekvési terv' },
  'strategy.item4': { en: 'Concrete recommendations', fr: 'Recommandations concrètes', hu: 'Konkrét javaslatok' },
  'strategy.footer': { en: 'Free · No commitment · Nathan responds within 24h', fr: 'Offert · Sans engagement · Nathan répond sous 24h', hu: 'Ingyenes · Kötelezettség nélkül · Nathan 24 órán belül válaszol' },

  // Blog page
  'blog.label': { en: 'BLOG', fr: 'BLOG', hu: 'BLOG' },
  'blog.title': { en: 'AI Insights', fr: 'Insights IA', hu: 'MI-meglátások' },
  'blog.titleAccent': { en: 'to scale.', fr: 'pour scaler.', hu: 'a növekedéshez.' },
  'blog.readArticle': { en: 'Read article →', fr: 'Lire l\'article →', hu: 'Cikk elolvasása →' },
  'blog.back': { en: '← Back to blog', fr: '← Retour au blog', hu: '← Vissza a bloghoz' },
  'blog.ctaTitle': { en: 'Ready to automate your operations?', fr: 'Prêt à automatiser vos opérations ?', hu: 'Készen áll a működése automatizálására?' },
  'blog.ctaDesc': { en: 'A call to identify how to automate your repetitive tasks.', fr: 'Un appel pour identifier comment automatiser vos tâches répétitives.', hu: 'Egy hívás, hogy kiderüljön, hogyan automatizálhatók az ismétlődő feladatai.' },
  'blog.ctaButton': { en: 'Book a call · free →', fr: 'Réserver un appel · offert →', hu: 'Hívás foglalása · ingyenes →' },

  // ═══════════════════════════════════════════════════════════════
  // NateSystem · Reviews, agency-positioned landing (v2)
  // ═══════════════════════════════════════════════════════════════
  'reviews.nav': { en: 'Reviews', fr: 'Reviews', hu: 'Reviews' },
  'reviews.kicker': { en: 'NATESYSTEM · REVIEWS', fr: 'NATESYSTEM · REVIEWS', hu: 'NATESYSTEM · REVIEWS' },

  // Hero
  'reviews.hero.title1': { en: 'We run your restaurant\'s reputation.', fr: 'Nous gérons la réputation de votre restaurant.', hu: 'Mi visszük az étterme hírnevét.' },
  'reviews.hero.titleAccent': { en: 'You run your restaurant.', fr: 'Vous gérez votre restaurant.', hu: 'Ön viszi az éttermét.' },
  'reviews.hero.sub': {
    en: 'A Budapest-based agency managing reviews, responses and reputation for ~30 mid-market restaurants. Every month we lift your score, answer your guests in their language, and report to you in a single PDF.',
    fr: 'Une agence basée à Budapest qui gère avis, réponses et réputation pour ~30 restaurants mid-market. Chaque mois, nous faisons monter votre note, répondons à vos clients dans leur langue, et vous livrons un PDF unique.',
    hu:
      'Budapesti székhelyű ügynökség, amely ~30 közép-kategóriás étterem véleményeit, válaszait és hírnevét kezeli. Havonta feljebb visszük az értékelését, az ügyfelei nyelvén válaszolunk nekik, és egyetlen PDF-ben számolunk be Önnek.',
  },
  'reviews.hero.ctaPrimary': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  'reviews.hero.ctaGhost': { en: 'See what we do', fr: 'Voir ce que l\'on fait', hu: 'Nézze meg, mit csinálunk' },
  'reviews.hero.socialProof': {
    en: '~30 restaurants in Budapest · +14 points average reputation lift in 90 days',
    fr: '~30 restaurants à Budapest · +14 points de progression moyenne en 90 jours',
    hu:
      '~30 étterem Budapesten · átlagosan +14 pont javulás 90 nap alatt',
  },
  'reviews.hero.imgAlt': { en: 'Behind the scenes, the real-time reputation dashboard we run for partner restaurants', fr: 'Les coulisses, le tableau de bord temps réel que nous opérons pour les restaurants partenaires', hu: 'A kulisszák mögött: a valós idejű hírnév-irányítópult, amelyet partnereink éttermeihez működtetünk' },

  // Problem
  'reviews.problem.kicker': { en: 'THE REAL COST OF IGNORING REVIEWS', fr: 'LE VRAI COÛT DE NÉGLIGER LES AVIS', hu: 'A VÉLEMÉNYEK FIGYELMEN KÍVÜL HAGYÁSÁNAK VALÓDI ÁRA' },
  'reviews.problem.a.value': { en: '47%', fr: '47 %', hu: '47%' },
  'reviews.problem.a.title': { en: 'Diners check Google first', fr: 'Des clients vérifient Google d\'abord', hu: 'A vendégek először a Google-t nézik' },
  'reviews.problem.a.desc': {
    en: 'Of Budapest diners check Google reviews before deciding to book, before they even read your menu.',
    fr: 'Des clients à Budapest vérifient les avis Google avant même de lire votre menu.',
    hu:
      'A budapesti vendégek ekkora hányada nézi meg a Google-véleményeket, mielőtt foglalna, még az étlap elolvasása előtt.',
  },
  'reviews.problem.b.value': { en: '1★ drop', fr: '−1 ★', hu: '−1 ★' },
  'reviews.problem.b.title': { en: 'Cuts revenue 5–9%', fr: 'Coupe le CA de 5 à 9 %', hu: '5-9%-kal csökkenti az árbevételt' },
  'reviews.problem.b.desc': {
    en: 'A single star lost on Google Maps can slice 5–9% of yearly revenue (Harvard Business Review).',
    fr: 'Une étoile perdue sur Google peut effacer 5 à 9 % du chiffre annuel (Harvard Business Review).',
    hu:
      'Egyetlen elvesztett csillag a Google Térképen az éves árbevétel 5-9%-át viheti el (Harvard Business Review).',
  },
  'reviews.problem.c.value': { en: '40 min', fr: '40 min', hu: '40 perc' },
  'reviews.problem.c.title': { en: 'Avg. wait on a 1★', fr: 'Attente moyenne après un 1 ★', hu: 'Átlagos várakozás egy 1 csillagosnál' },
  'reviews.problem.c.desc': {
    en: 'Between a 1-star review being posted and us surfacing it to the restaurant, with a response already drafted.',
    fr: 'Entre la publication d\'un avis 1 étoile et le moment où nous le remontons au restaurant avec une réponse prête.',
    hu:
      'Ennyi telik el egy 1 csillagos vélemény megjelenése és aközött, hogy jelezzük az étteremnek, már kész válasszal együtt.',
  },

  // 5.3, Deliverable: 90-day roadmap
  'reviews.roadmap.kicker': { en: 'THE DELIVERABLE', fr: 'LE LIVRABLE', hu: 'AMIT ÁTADUNK' },
  'reviews.roadmap.title1': { en: 'From 200 reviews to', fr: 'De 200 avis à', hu: '200 véleményből' },
  'reviews.roadmap.titleAccent': { en: '8 actions that matter.', fr: '8 actions qui comptent.', hu: '8 lépés, ami számít.' },
  'reviews.roadmap.body1': {
    en: 'We don\'t send you templates. Every 90 days we read every review you\'ve had, cross-reference them with your three closest competitors, and write an action plan prioritised by revenue impact.',
    fr: 'On ne vous envoie pas de templates. Tous les 90 jours, on lit chacun de vos avis, on les recoupe avec vos trois concurrents les plus proches, et on rédige un plan d\'action priorisé par impact sur le chiffre.',
    hu:
      'Nem sablonokat küldünk. 90 naponta elolvassuk az összes beérkezett véleményét, összevetjük a három legközelebbi versenytársáéval, és cselekvési tervet írunk, árbevételre gyakorolt hatás szerint rangsorolva.',
  },
  'reviews.roadmap.body2': {
    en: 'You tick actions off. We help with the ones that need our hands. The plan is the deliverable, the platform is the tracking surface.',
    fr: 'Vous cochez les actions. On prend en charge celles qui demandent nos mains. Le plan, c\'est le livrable, la plateforme, c\'est la surface de suivi.',
    hu:
      'Ön kipipálja a lépéseket. Azokban segítünk, amelyekhez a mi kezünk kell. A terv az, amit átadunk; a platform a követés felülete.',
  },
  'reviews.roadmap.imgCaption': { en: 'A real 90-day plan for a partner restaurant. 1 of 8 actions completed.', fr: 'Un vrai plan 90 jours pour un restaurant partenaire. 1 action sur 8 terminée.', hu: 'Egy valódi 90 napos terv egy partnerétteremnek. 8 lépésből 1 kész.' },

  // 5.4, AI analysis (aspect scoring)
  'reviews.aspect.kicker': { en: 'HOW WE READ YOUR REVIEWS', fr: 'COMMENT NOUS LISONS VOS AVIS', hu: 'HOGYAN OLVASSUK A VÉLEMÉNYEIT' },
  'reviews.aspect.title': { en: 'Every review, scored on six dimensions.', fr: 'Chaque avis, noté sur six dimensions.', hu: 'Minden vélemény hat szempont szerint pontozva.' },
  'reviews.aspect.body': {
    en: 'Food, service, ambiance, price, cleanliness, wait time. Each review is decomposed, not just positive or negative, but which part of the experience was weak. After 200 reviews, we know exactly where your reputation leaks.',
    fr: 'Cuisine, service, ambiance, prix, propreté, temps d\'attente. Chaque avis est décomposé, pas juste positif ou négatif, mais quelle partie de l\'expérience a flanché. Après 200 avis, on sait précisément où fuit votre réputation.',
    hu:
      'Étel, kiszolgálás, hangulat, ár, tisztaság, várakozási idő. Minden véleményt szétbontunk: nem csak pozitív vagy negatív, hanem az élmény melyik része gyengült. 200 vélemény után pontosan tudjuk, hol szivárog a hírneve.',
  },
  'reviews.aspect.imgCaption': { en: 'Real aspect breakdown for a partner restaurant, six dimensions, ranked by score.', fr: 'Décomposition réelle par aspect pour un restaurant partenaire, six dimensions, classées par score.', hu: 'Valódi szempontbontás egy partnerétteremnél: hat dimenzió, pontszám szerint rangsorolva.' },

  // 5.5, SmartReview agent (response drafting)
  'reviews.respond.kicker': { en: 'HOW WE RESPOND', fr: 'COMMENT NOUS RÉPONDONS', hu: 'HOGYAN VÁLASZOLUNK' },
  'reviews.respond.title1': { en: 'Every guest gets an answer,', fr: 'Chaque client reçoit une réponse,', hu: 'Minden vendég választ kap,' },
  'reviews.respond.titleAccent': { en: 'in their language, in your voice.', fr: 'dans leur langue, dans votre voix.', hu: 'a saját nyelvén, az Ön hangján.' },
  'reviews.respond.body': {
    en: 'Your brand voice, your dishes, your regular guests, we train the agent on your restaurant. Every response is drafted by AI, reviewed by us, approved by you, and shipped. Hungarian, English, German, French, Italian. Never robotic.',
    fr: 'Votre voix de marque, vos plats, vos habitués, on entraîne l\'agent sur votre restaurant. Chaque réponse est rédigée par l\'IA, relue par nous, validée par vous, puis publiée. Hongrois, anglais, allemand, français, italien. Jamais robotique.',
    hu:
      'A márkahangja, az ételei, a törzsvendégei: az ágenst az Ön éttermére tanítjuk. Minden választ az MI fogalmaz, mi átnézzük, Ön jóváhagyja, aztán kimegy. Magyarul, angolul, németül, franciául, olaszul. Sosem robotszerűen.',
  },
  'reviews.respond.imgCaption': { en: 'The response agent config, brand voice, system prompt, learned Hungarian examples.', fr: 'La configuration de l\'agent, voix de marque, prompt système, exemples hongrois appris.', hu: 'A válaszágens beállításai: márkahang, rendszerprompt, megtanult magyar példák.' },
  'reviews.respond.footnote': {
    en: 'Average time from review to approved response: under 4 hours.',
    fr: 'Temps moyen d\'un avis à une réponse validée : moins de 4 heures.',
    hu:
      'Átlagos idő a véleménytől a jóváhagyott válaszig: 4 óra alatt.',
  },

  // 5.6, Live evidence (full-width reviews feed)
  'reviews.live.kicker': { en: 'SEE IT WORK', fr: 'VOYEZ-LE EN ACTION', hu: 'NÉZZE MŰKÖDÉS KÖZBEN' },
  'reviews.live.title1': { en: 'One review. Six aspects scored.', fr: 'Un avis. Six aspects notés.', hu: 'Egy vélemény. Hat pontozott szempont.' },
  'reviews.live.titleAccent': { en: 'One response drafted.', fr: 'Une réponse rédigée.', hu: 'Egy megfogalmazott válasz.' },
  'reviews.live.imgCaption': {
    en: 'Live dashboard for a partner restaurant. All 200 reviews, every platform, scored and routed automatically, so our team can spend its hours on what only humans can do.',
    fr: 'Dashboard live d\'un restaurant partenaire. Les 200 avis, toutes plateformes, notés et routés automatiquement, pour que notre équipe passe ses heures sur ce que seuls les humains peuvent faire.',
    hu:
      'Élő irányítópult egy partnerétteremnél. Mind a 200 vélemény, minden platformról, automatikusan pontozva és továbbítva, hogy a csapatunk azzal tölthesse az óráit, amit csak ember tud megcsinálni.',
  },

  // 5.7, €997 audit ribbon (offered free only via Partner Welcome Pack)
  'reviews.audit.kicker': { en: 'PARTNER WELCOME PACK', fr: 'PARTNER WELCOME PACK', hu: 'PARTNER WELCOME PACK' },
  'reviews.audit.title1': { en: 'A', fr: 'Un', hu: 'Egy' },
  'reviews.audit.titleAccent': { en: '€997 audit, offered.', fr: 'audit à 997 €, offert.', hu: '997 €-s audit, ingyen.' },
  'reviews.audit.body': {
    en: 'A €997 reputation audit we normally invoice, offered to every restaurant referred through our partner Kis Zoltán, or to a handful of direct applicants we accept each month. AI-generated, grounded in your actual reviews, benchmarked against your three closest competitors, with a 90-day roadmap. Delivered as a branded PDF within 3 business days. No commitment.',
    fr: 'Un audit de réputation à 997 €, que nous facturons normalement, offert à chaque restaurant référé via notre partenaire Kis Zoltán, ou à quelques candidatures directes que nous acceptons chaque mois. Généré par IA, fondé sur vos vrais avis, benchmarké face à vos trois concurrents les plus proches, avec une feuille de route à 90 jours. Livré en PDF sous 3 jours ouvrés. Sans engagement.',
    hu:
      '997 €-s hírnév-audit, amelyet egyébként kiszámlázunk, ingyen minden étteremnek, amelyet partnerünk, Kis Zoltán ajánl, valamint néhány közvetlen jelentkezőnek, akiket havonta befogadunk. MI generálja, a valódi véleményei alapján, a három legközelebbi versenytársához mérve, 90 napos ütemtervvel. PDF-ben, 3 munkanapon belül. Kötelezettség nélkül.',
  },
  'reviews.audit.cta': { en: 'See if you qualify', fr: 'Vérifier mon éligibilité', hu: 'Megnézem, jogosult vagyok-e' },
  'reviews.audit.imgCaption': { en: 'The real first page of a partner restaurant\'s €997 audit PDF.', fr: 'La vraie première page du PDF d\'audit à 997 € d\'un restaurant partenaire.', hu: 'Egy partnerétterem 997 €-s audit-PDF-jének valódi első oldala.' },

  // 5.8, Proof numbers
  'reviews.proof.kicker': { en: 'BY THE NUMBERS', fr: 'LES CHIFFRES', hu: 'SZÁMOKBAN' },
  'reviews.proof.a.value': { en: '~30', fr: '~30', hu: '~30' },
  'reviews.proof.a.label': { en: 'Restaurants running', fr: 'Restaurants en activité', hu: 'Futó étterem' },
  'reviews.proof.b.value': { en: '+14 pts', fr: '+14 pts', hu: '+14 pont' },
  'reviews.proof.b.label': { en: 'Avg score lift, 90 days', fr: 'Progression moyenne, 90 jours', hu: 'Átlagos javulás 90 nap alatt' },
  'reviews.proof.c.value': { en: '5 languages', fr: '5 langues', hu: '5 nyelv' },
  'reviews.proof.c.label': { en: 'For guest responses', fr: 'Pour les réponses clients', hu: 'A vendégválaszokhoz' },
  'reviews.proof.d.value': { en: '3 days', fr: '3 jours', hu: '3 nap' },
  'reviews.proof.d.label': { en: 'Audit turnaround', fr: 'Délai de livraison audit', hu: 'Az audit átfutási ideje' },

  // 5.9, How it works
  'reviews.how.kicker': { en: 'HOW IT WORKS', fr: 'COMMENT ÇA MARCHE', hu: 'HOGYAN MŰKÖDIK' },
  'reviews.how.title1': { en: 'Four steps.', fr: 'Quatre étapes.', hu: 'Négy lépés.' },
  'reviews.how.titleAccent': { en: 'No software to learn.', fr: 'Aucun logiciel à apprendre.', hu: 'Semmilyen szoftvert nem kell megtanulni.' },
  'reviews.how.s1.title': { en: 'Discovery call', fr: 'Appel de découverte', hu: 'Felfedező hívás' },
  'reviews.how.s1.desc': {
    en: 'We understand your current reputation, pain points, goals. No sales deck, just questions.',
    fr: 'Nous comprenons votre réputation actuelle, vos douleurs, vos objectifs. Pas de slide commerciale, que des questions.',
    hu:
      'Megértjük a jelenlegi hírnevét, a fájó pontjait, a céljait. Semmi értékesítési prezentáció, csak kérdések.',
  },
  'reviews.how.s2.title': { en: 'Free audit', fr: 'Audit gratuit', hu: 'Ingyenes audit' },
  'reviews.how.s2.desc': {
    en: 'We import your reviews, run the AI analysis, and deliver a branded PDF within 3 business days.',
    fr: 'On importe vos avis, on lance l\'analyse IA, on livre un PDF personnalisé sous 3 jours ouvrés.',
    hu:
      'Beimportáljuk a véleményeit, lefuttatjuk az MI-elemzést, és 3 munkanapon belül átadunk egy arculatos PDF-et.',
  },
  'reviews.how.s3.title': { en: 'Setup (2 weeks)', fr: 'Mise en place (2 semaines)', hu: 'Beállítás (2 hét)' },
  'reviews.how.s3.desc': {
    en: 'We monitor every platform, train the response agent on your voice, benchmark your competitors, onboard you into your private portal.',
    fr: 'On supervise chaque plateforme, on entraîne l\'agent de réponses à votre voix, on benchmark vos concurrents, on vous onboard sur votre portail privé.',
    hu:
      'Minden platformot figyelünk, a válaszágenst az Ön hangjára tanítjuk, összemérjük a versenytársaival, és bevezetjük a saját portáljára.',
  },
  'reviews.how.s4.title': { en: 'Monthly execution', fr: 'Exécution mensuelle', hu: 'Havi végrehajtás' },
  'reviews.how.s4.desc': {
    en: 'We answer, we report, we refine the plan quarterly, you keep running your restaurant.',
    fr: 'On répond, on reporte, on affine le plan chaque trimestre, vous continuez à gérer votre restaurant.',
    hu:
      'Válaszolunk, riportálunk, negyedévente finomítjuk a tervet, Ön pedig viszi tovább az éttermét.',
  },

  // FAQ
  'reviews.faq.kicker': { en: 'FAQ', fr: 'FAQ', hu: 'GYIK' },
  'reviews.faq.title1': { en: 'Answers before you', fr: 'Les réponses avant que', hu: 'Válaszok, mielőtt' },
  'reviews.faq.titleAccent': { en: 'ask.', fr: 'vous ne demandiez.', hu: 'megkérdezné.' },
  'reviews.faq.q1': { en: 'Are we locked into a contract?', fr: 'Sommes-nous engagés dans un contrat ?', hu: 'Szerződés köt minket?' },
  'reviews.faq.a1': { en: 'Month-to-month. Cancel anytime with 30 days\' notice. No exit fees, ever.', fr: 'Mois par mois. Résiliation à tout moment avec 30 jours de préavis. Aucun frais de sortie.', hu: 'Havi alapon. Bármikor felmondható 30 napos felmondási idővel. Semmilyen kilépési díj, soha.' },
  'reviews.faq.q2': { en: 'Do you work in Hungarian?', fr: 'Travaillez-vous en hongrois ?', hu: 'Dolgoznak magyarul?' },
  'reviews.faq.a2': { en: 'Yes. We also respond in English, German, French and Italian. Our agent matches the reviewer\'s language automatically, and a human validates before publishing.', fr: 'Oui. Nous répondons aussi en anglais, allemand, français et italien. Notre agent s\'adapte automatiquement à la langue de l\'auteur, un humain valide avant publication.', hu: 'Igen. Emellett angolul, németül, franciául és olaszul is válaszolunk. Az ágensünk automatikusan a véleményíró nyelvéhez igazodik, és közzététel előtt ember ellenőrzi.' },
  'reviews.faq.q3': { en: 'Who owns the data?', fr: 'À qui appartiennent les données ?', hu: 'Kié az adat?' },
  'reviews.faq.a3': { en: 'You. Full export anytime, in CSV and PDF. If you leave, you leave with everything.', fr: 'À vous. Export complet à tout moment, en CSV et PDF. Si vous partez, vous partez avec tout.', hu: 'Az Öné. Bármikor teljes export, CSV-ben és PDF-ben. Ha távozik, mindennel együtt távozik.' },
  'reviews.faq.q4': { en: 'Who gets the audit for free?', fr: 'Pour qui l\'audit est-il offert ?', hu: 'Kinek ingyenes az audit?' },
  'reviews.faq.a4': { en: 'The €997 audit is offered in two cases: restaurants referred through our partner Kis Zoltán (Partner Welcome Pack), and a small number of direct applicants we accept each month when we have capacity. Everyone else can still commission it at €997. Either way it\'s the same deliverable.', fr: 'L\'audit à 997 € est offert dans deux cas : les restaurants référés par notre partenaire Kis Zoltán (Partner Welcome Pack), et quelques candidatures directes que nous acceptons chaque mois selon notre capacité. Les autres peuvent le commander à 997 €. Dans tous les cas, c\'est le même livrable.', hu: 'A 997 €-s audit két esetben ingyenes: a partnerünk, Kis Zoltán ajánlásával érkező éttermeknek (Partner Welcome Pack), és havonta néhány közvetlen jelentkezőnek, amennyiben van kapacitásunk. Mindenki más 997 €-ért megrendelheti. Az átadott anyag mindkét esetben ugyanaz.' },
  'reviews.faq.q5': { en: 'What does it cost after the audit?', fr: 'Combien ça coûte après l\'audit ?', hu: 'Mibe kerül az audit után?' },
  'reviews.faq.a5': { en: 'A flat monthly fee, shared on the discovery call so we can match it to your restaurant\'s volume and needs. No surprises.', fr: 'Un forfait mensuel fixe, communiqué pendant l\'appel de découverte en fonction de votre volume et de vos besoins. Zéro surprise.', hu: 'Fix havidíj, amelyet a felfedező híváson egyeztetünk, hogy illeszkedjen az étterme forgalmához és igényeihez. Semmi meglepetés.' },

  // Final CTA
  'reviews.finalCta.title1': { en: 'Your reputation is already being written.', fr: 'Votre réputation s\'écrit déjà.', hu: 'A hírneve már most íródik.' },
  'reviews.finalCta.titleAccent': { en: 'Let us run it.', fr: 'Laissez-nous la gérer.', hu: 'Bízza ránk.' },
  'reviews.finalCta.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },

  // Sticky mobile
  'reviews.stickyCta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },


  // ───────────────────────────────────────────────────────────────
  // Agents in action, new section between Solution and CaseStudy
  // ───────────────────────────────────────────────────────────────
  'agents.label': { en: 'Concretely', fr: 'Concrètement', hu: 'Konkrétan' },
  'agents.title': { en: 'The roles AI takes', fr: 'Les rôles que l\'IA prend', hu: 'A szerepek, amelyeket az MI átvesz' },
  'agents.titleAccent': { en: 'inside your software.', fr: 'dans votre logiciel.', hu: 'a szoftverén belül.' },
  'agents.sub': {
    en: 'Not a generic AI layer bolted on top. Agentic AI, automation and data analytics embedded inside the software, configured for your business, deployed on your infrastructure. Each one takes on a precise role.',
    fr: 'Pas une couche d\'IA générique posée par-dessus. IA agentique, automatisation et data analytics intégrées au logiciel, configurées sur votre métier, déployées sur votre infrastructure. Chacune avec un rôle précis.',
    hu:
      'Nem egy általános MI-réteg a tetejére csavarozva. Ágens MI, automatizálás és adatelemzés a szoftverbe építve, az Ön szakmájára konfigurálva, az Ön infrastruktúráján üzemeltetve. Mindegyik pontosan meghatározott szereppel.',
  },
  'agents.watch.title': { en: 'Market watch', fr: 'Veille marché', hu: 'Piacfigyelés' },
  'agents.watch.desc': {
    en: 'Monitors your business sources continuously. Qualifies opportunities against your criteria. Alerts you only on what deserves your attention.',
    fr: 'Surveille en continu vos sources métier. Qualifie les opportunités selon vos critères. Vous alerte uniquement sur ce qui mérite votre attention.',
    hu:
      'Folyamatosan figyeli a szakmai forrásait. Az Ön szempontjai szerint minősíti a lehetőségeket. Csak arról szól, ami megérdemli a figyelmét.',
  },
  'agents.watch.tags': { en: 'Public sources · Domain qualification · Targeted alerts', fr: 'Sources publiques · Qualification métier · Alertes ciblées', hu: 'Nyilvános források · Szakmai minősítés · Célzott riasztások' },
  'agents.qualify.title': { en: 'Lead qualification', fr: 'Qualification des leads', hu: 'Leadminősítés' },
  'agents.qualify.desc': {
    en: 'Reads every inbound. Scores against your criteria. Enriches the record. Routes to the right person. Drafts the first reply.',
    fr: 'Lit chaque entrant. Score selon vos critères. Enrichit la fiche. Route vers la bonne personne. Rédige la première réponse.',
    hu:
      'Minden beérkezőt elolvas. Az Ön szempontjai szerint pontoz. Kiegészíti az adatlapot. A megfelelő emberhez továbbítja. Megírja az első választ.',
  },
  'agents.qualify.tags': { en: 'Reading · Scoring · Enrichment · Routing', fr: 'Lecture · Scoring · Enrichissement · Routage', hu: 'Olvasás · Pontozás · Adatdúsítás · Továbbítás' },
  'agents.docs.title': { en: 'Document handling', fr: 'Traitement documentaire', hu: 'Dokumentumkezelés' },
  'agents.docs.desc': {
    en: 'Reads invoices, contracts, quotes, RFPs. Extracts, structures, classifies. Hands off to a human only the cases that warrant it.',
    fr: 'Lit factures, contrats, devis, appels d\'offres. Extrait, structure, classe. Passe à l\'humain uniquement les cas qui le méritent.',
    hu:
      'Számlákat, szerződéseket, árajánlatokat, pályázatokat olvas. Kinyer, struktúrába rendez, besorol. Csak azokat az eseteket adja emberi kézbe, amelyek megérdemlik.',
  },
  'agents.docs.tags': { en: 'Reading · Extraction · Classification · Routing', fr: 'Lecture · Extraction · Classification · Routage', hu: 'Olvasás · Kinyerés · Besorolás · Továbbítás' },

  // ───────────────────────────────────────────────────────────────
  // Schema (animated flow diagram), node labels
  // ───────────────────────────────────────────────────────────────
  'schema.label': { en: 'How it flows', fr: 'Comment ça circule', hu: 'Hogyan áramlik' },
  'schema.node1': { en: 'Business sources', fr: 'Sources métier', hu: 'Szakmai források' },
  'schema.node1Sub': { en: 'emails · invoices · reviews', fr: 'emails · factures · avis', hu: 'e-mailek · számlák · vélemények' },
  'schema.node2': { en: 'Integrated AI', fr: 'IA intégrée', hu: 'Beépített MI' },
  'schema.node2Sub': { en: 'reads · qualifies · enriches', fr: 'lit · qualifie · enrichit', hu: 'olvas · minősít · dúsít' },
  'schema.node3': { en: 'Custom software', fr: 'Logiciel sur-mesure', hu: 'Egyedi szoftver' },
  'schema.node3Sub': { en: 'dashboard · routes · stores', fr: 'dashboard · route · stocke', hu: 'irányítópult · továbbít · tárol' },
  'schema.node4': { en: 'Your team', fr: 'Votre équipe', hu: 'Az Ön csapata' },
  'schema.node4Sub': { en: 'validates · ignores · delegates', fr: 'valide · ignore · délègue', hu: 'jóváhagy · elvet · delegál' },
  'schema.node5': { en: 'Action executed', fr: 'Action exécutée', hu: 'Végrehajtott művelet' },
  'schema.node5Sub': { en: 'tracked · reported', fr: 'tracée · reportée', hu: 'nyomon követve · riportálva' },

  // ───────────────────────────────────────────────────────────────
  // Infrastructure, new section between Process and Integrations
  // ───────────────────────────────────────────────────────────────
  'infra.label': { en: 'INFRASTRUCTURE', fr: 'INFRASTRUCTURE', hu: 'INFRASTRUKTÚRA' },
  'infra.title': { en: 'Your infrastructure. Your data.', fr: 'Votre infrastructure. Vos données.', hu: 'Az Ön infrastruktúrája. Az Ön adatai.' },
  'infra.titleAccent': { en: 'Your AI.', fr: 'Votre IA.', hu: 'Az Ön MI-je.' },
  'infra.body': {
    en: 'Everything is deployed on your VPS or your cloud: AWS, OVH, Scaleway, Hetzner. Your data never leaves your perimeter. The integrated AI runs under your control. The model (Claude, GPT or self-hosted) is chosen according to your sovereignty needs.',
    fr: 'Tout est déployé sur votre VPS ou votre cloud : AWS, OVH, Scaleway, Hetzner. Vos données ne sortent jamais de votre périmètre. L\'IA intégrée tourne sous votre contrôle. Le modèle (Claude, GPT ou self-hosted) est choisi selon votre niveau de souveraineté.',
    hu:
      'Minden az Ön VPS-én vagy felhőjén fut: AWS, OVH, Scaleway, Hetzner. Az adatai sosem hagyják el a saját területét. A beépített MI az Ön felügyelete alatt működik. A modellt (Claude, GPT vagy saját üzemeltetésű) az Ön szuverenitási igényei szerint választjuk.',
  },
  'infra.tag1': { en: 'Total data sovereignty', fr: 'Souveraineté data totale', hu: 'Teljes adatszuverenitás' },
  'infra.tag2': { en: 'Code belongs to you', fr: 'Code vous appartient', hu: 'A kód az Öné' },
  'infra.tag3': { en: 'Models of your choice', fr: 'Modèles au choix', hu: 'Szabadon választott modellek' },
  'infra.tag4': { en: 'Exportable infrastructure', fr: 'Infra exportable', hu: 'Kivihető infrastruktúra' },

  // ───────────────────────────────────────────────────────────────
  // /tools, Live demos banner
  // Two interactive demo apps shipped at actifs.natesystem.com and
  // stack-stock.natesystem.com. Distinct treatment from the
  // download-able resources grid because they're live experiences,
  // not zip files behind an email gate.
  // ───────────────────────────────────────────────────────────────
  'demos.kicker': { en: 'LIVE DEMOS · INTERACTIVE', fr: 'DÉMOS LIVE · INTERACTIVES', hu: 'ÉLŐ DEMÓK · INTERAKTÍV' },
  'demos.title': { en: 'Try the actual product.', fr: 'Essayez le produit réel.', hu: 'Próbálja ki a valódi terméket.' },
  'demos.sub': {
    en: 'Two fully working demos, no signup, no credit card. Click through with mock data, then talk to me if it fits.',
    fr: 'Deux démos pleinement fonctionnelles, sans inscription, sans carte. Cliquez avec des données fictives, puis on en parle si ça correspond.',
    hu:
      'Két teljesen működő demó, regisztráció és bankkártya nélkül. Kattintson végig kitalált adatokon, aztán beszéljünk, ha passzol.',
  },

  // Actifs demo
  'demos.actifs.tag': { en: 'ASSET MANAGEMENT', fr: 'GESTION D\'ACTIFS', hu: 'ESZKÖZNYILVÁNTARTÁS' },
  'demos.actifs.title': { en: 'Your equipment. Always under control.', fr: 'Vos équipements. Toujours sous contrôle.', hu: 'Az eszközei. Mindig kézben.' },
  'demos.actifs.desc': {
    en: 'IT, vehicles, furniture, machinery. Centralised inventory, automatic depreciation, replacement alerts before things break expensively.',
    fr: 'Parc informatique, véhicules, mobilier, machines. Inventaire centralisé, amortissements automatiques, alertes de remplacement avant que ça coûte cher.',
    hu:
      'Informatika, járművek, bútorok, gépek. Központi nyilvántartás, automatikus értékcsökkenés, cserére figyelmeztetés, mielőtt drágán elromlana.',
  },
  'demos.actifs.metric1': { en: '−90% time on inventories', fr: '−90% de temps sur les inventaires', hu: '−90% idő a leltárakon' },
  'demos.actifs.metric2': { en: '100% automatic depreciation', fr: '100% d\'amortissements automatiques', hu: '100%-ban automatikus értékcsökkenés' },
  'demos.actifs.metric3': { en: '3× faster audits', fr: 'Audits 3× plus rapides', hu: '3× gyorsabb auditok' },
  'demos.actifs.cta': { en: 'Open the demo →', fr: 'Ouvrir la démo →', hu: 'Demó megnyitása →' },

  // Stock demo
  'demos.stock.tag': { en: 'INVENTORY PLATFORM', fr: 'PLATEFORME D\'INVENTAIRE', hu: 'KÉSZLETPLATFORM' },
  'demos.stock.title': { en: 'The inventory platform that scales your business.', fr: 'La plateforme d\'inventaire qui fait grandir votre entreprise.', hu: 'A készletplatform, amely növeli a cégét.' },
  'demos.stock.desc': {
    en: 'Real-time tracking, smart reordering, supplier management, barcode scanning, analytics. The same engine we deploy in production.',
    fr: 'Suivi temps réel, réapprovisionnements intelligents, gestion fournisseurs, lecture de codes-barres, analytique. Le même moteur que celui qu\'on déploie en production.',
    hu:
      'Valós idejű követés, okos utánrendelés, beszállítókezelés, vonalkódolvasás, elemzés. Ugyanaz a motor, amit élesben is bevezetünk.',
  },
  'demos.stock.metric1': { en: 'Real-time stock visibility', fr: 'Stock visible en temps réel', hu: 'Valós időben látható készlet' },
  'demos.stock.metric2': { en: 'Smart reorder points', fr: 'Points de réappro intelligents', hu: 'Okos utánrendelési pontok' },
  'demos.stock.metric3': { en: 'Barcode-ready', fr: 'Compatible codes-barres', hu: 'Vonalkóddal kompatibilis' },
  'demos.stock.cta': { en: 'Open the demo →', fr: 'Ouvrir la démo →', hu: 'Demó megnyitása →' },

  'demos.note': {
    en: 'Demos run on mock data. Talk to me if you want a real version on your data.',
    fr: 'Les démos tournent sur des données fictives. Parlez-moi si vous voulez une vraie version sur vos données.',
    hu:
      'A demók kitalált adatokon futnak. Szóljon, ha a saját adatain szeretne egy valódi verziót.',
  },

  // ───────────────────────────────────────────────────────────────
  // Nav mega-dropdown, Live Demos column
  // Short titles (one or two words) for the dropdown card; long
  // descriptions stay in the /tools banner.
  // ───────────────────────────────────────────────────────────────
  'mega.demos': { en: 'Live Demos', fr: 'Démos Live', hu: 'Élő demók' },
  'mega.new': { en: 'NEW', fr: 'NOUVEAU', hu: 'ÚJ' },
  'demos.actifs.navTitle': { en: 'Asset Management', fr: 'Gestion d\'actifs', hu: 'Eszköznyilvántartás' },
  'demos.actifs.navDesc': {
    en: 'IT, vehicles, furniture, machinery, centralised with auto depreciation.',
    fr: 'Parc IT, véhicules, mobilier, machines, centralisés avec amortissement auto.',
    hu:
      'Informatika, járművek, bútorok, gépek egy helyen, automatikus értékcsökkenéssel.',
  },
  'demos.stock.navTitle': { en: 'Inventory Platform', fr: 'Plateforme d\'inventaire', hu: 'Készletplatform' },
  'demos.stock.navDesc': {
    en: 'Real-time stock, smart reorders, suppliers, barcode-ready.',
    fr: 'Stock temps réel, réappros intelligents, fournisseurs, codes-barres.',
    hu:
      'Valós idejű készlet, okos utánrendelés, beszállítók, vonalkód.',
  },

  // Reviews demo, software in demo, request access via form
  'demos.reviews.tag': { en: 'REVIEW INTELLIGENCE', fr: 'INTELLIGENCE AVIS', hu: 'VÉLEMÉNYELEMZÉS' },
  'demos.reviews.title': {
    en: 'Turn every review into a decision.',
    fr: 'Transformez chaque avis en décision.',
    hu:
      'Alakítson minden véleményt döntéssé.',
  },
  'demos.reviews.desc': {
    en: 'AI-scored reviews on six aspects, response drafting in your brand voice, 90-day action plans. The product, in demo.',
    fr: 'Avis notés par IA sur six dimensions, brouillons de réponses dans votre ton, plans d\'action 90 jours. Le produit, en démo.',
    hu:
      'MI-vel hat szempont szerint pontozott vélemények, az Ön hangján megfogalmazott válaszok, 90 napos cselekvési tervek. A termék, demóban.',
  },
  'demos.reviews.metric1': {
    en: 'Six-aspect scoring per review',
    fr: 'Scoring sur six dimensions par avis',
    hu:
      'Hat szempont szerinti pontozás véleményenként',
  },
  'demos.reviews.metric2': {
    en: 'AI response drafts on brand voice',
    fr: 'Brouillons de réponses dans votre ton',
    hu:
      'Válaszjavaslatok az Ön hangján',
  },
  'demos.reviews.metric3': {
    en: '90-day action plan from the data',
    fr: 'Plan d\'action 90 jours depuis vos données',
    hu:
      '90 napos terv a saját adataiból',
  },
  'demos.reviews.cta': {
    en: 'Request demo access →',
    fr: 'Demander accès démo →',
    hu:
      'Demóhozzáférés kérése →',
  },
  'demos.reviews.navTitle': { en: 'Review Intelligence', fr: 'Intelligence avis', hu: 'Véleményelemzés' },
  'demos.reviews.navDesc': {
    en: 'AI scoring + response drafts. Demo access on request.',
    fr: 'Scoring IA + réponses générées. Accès démo sur demande.',
    hu:
      'MI-pontozás és válaszjavaslatok. Demóhozzáférés kérésre.',
  },
  'mega.gated': { en: 'ON REQUEST', fr: 'SUR DEMANDE', hu: 'KÉRÉSRE' },

  // /reviews, software-product demo landing
  'reviewsDemo.metaTitle': {
    en: 'NateSystem · Reviews, Review intelligence software (demo)',
    fr: 'NateSystem · Reviews, Logiciel d\'intelligence avis (démo)',
    hu:
      'NateSystem · Reviews, véleményelemző szoftver (demó)',
  },
  'reviewsDemo.metaDesc': {
    en: 'Review intelligence software in demo. AI scoring on six aspects, response drafting, action plans. Request demo access via the form.',
    fr: 'Logiciel d\'intelligence avis en démo. Scoring IA sur six dimensions, réponses générées, plans d\'action. Accès démo via le formulaire.',
    hu:
      'Véleményelemző szoftver demóban. MI-pontozás hat szempont szerint, válaszjavaslatok, cselekvési tervek. Demóhozzáférés az űrlapon keresztül.',
  },
  'reviewsDemo.kicker': {
    en: 'PRODUCT DEMO · BY REQUEST',
    fr: 'DÉMO PRODUIT · SUR DEMANDE',
    hu:
      'TERMÉKDEMÓ · KÉRÉSRE',
  },
  'reviewsDemo.hero.title1': {
    en: 'A software that reads',
    fr: 'Un logiciel qui lit',
    hu:
      'Szoftver, amely elolvassa',
  },
  'reviewsDemo.hero.titleAccent': {
    en: 'every review for you.',
    fr: 'chaque avis pour vous.',
    hu:
      'Ön helyett minden véleményt.',
  },
  'reviewsDemo.hero.sub': {
    en: 'NateSystem · Reviews is a review intelligence product. It scores each review on six aspects, drafts responses in your brand voice, and turns the data into a 90-day action plan. The platform is live with mock data, request access to try it.',
    fr: 'NateSystem · Reviews est un produit d\'intelligence avis. Il note chaque avis sur six dimensions, génère des réponses dans votre ton, et transforme les données en plan d\'action 90 jours. La plateforme tourne avec des données fictives, demandez l\'accès pour l\'essayer.',
    hu:
      'A NateSystem · Reviews egy véleményelemző termék. Minden véleményt hat szempont szerint pontoz, az Ön márkahangján fogalmaz választ, és az adatokból 90 napos cselekvési tervet készít. A platform kitalált adatokkal fut, kérjen hozzáférést, és próbálja ki.',
  },
  'reviewsDemo.hero.ctaPrimary': {
    en: 'Request demo access',
    fr: 'Demander accès démo',
    hu:
      'Demóhozzáférés kérése',
  },
  'reviewsDemo.hero.ctaGhost': {
    en: 'See what\'s inside',
    fr: 'Voir ce qu\'il y a dedans',
    hu:
      'Nézze meg, mi van benne',
  },
  'reviewsDemo.hero.note': {
    en: 'Demo runs on mock data · Access granted within 24h',
    fr: 'Démo sur données fictives · Accès sous 24h',
    hu:
      'A demó kitalált adatokon fut · Hozzáférés 24 órán belül',
  },
  'reviewsDemo.hero.imgAlt': {
    en: 'Reputation score dashboard, the home view of the Reviews product',
    fr: 'Tableau de bord, vue d\'accueil du produit Reviews',
    hu:
      'Hírnév-irányítópult, a Reviews termék nyitóképernyője',
  },

  // What's inside, 3 feature cards (replaces problem/cost framing)
  'reviewsDemo.inside.kicker': { en: 'INSIDE THE DEMO', fr: 'DANS LA DÉMO', hu: 'A DEMÓBAN' },
  'reviewsDemo.inside.title1': { en: 'Three modules you can', fr: 'Trois modules que vous pouvez', hu: 'Három modul, amelyen' },
  'reviewsDemo.inside.titleAccent': { en: 'click through.', fr: 'parcourir au clic.', hu: 'végigkattinthat.' },
  'reviewsDemo.inside.a.label': { en: '01 · Aspect analysis', fr: '01 · Analyse par aspects', hu: '01 · Szempontelemzés' },
  'reviewsDemo.inside.a.desc': {
    en: 'Every review broken down across food, service, ambiance, value, hygiene, speed. See exactly what customers praise and what they complain about.',
    fr: 'Chaque avis décomposé en cuisine, service, ambiance, rapport qualité-prix, hygiène, rapidité. Voyez précisément ce qui est loué et ce qui est critiqué.',
    hu:
      'Minden vélemény lebontva étel, kiszolgálás, hangulat, ár-érték, higiénia és gyorsaság szerint. Pontosan látja, mit dicsérnek és mit kifogásolnak.',
  },
  'reviewsDemo.inside.b.label': { en: '02 · Response agent', fr: '02 · Agent de réponse', hu: '02 · Válaszágens' },
  'reviewsDemo.inside.b.desc': {
    en: 'A SmartReview agent drafts a response per review in your configured brand voice. You approve, edit, or regenerate, never start from a blank box.',
    fr: 'Un agent SmartReview rédige une réponse par avis dans votre ton de marque. Vous validez, éditez ou régénérez, plus jamais de page blanche.',
    hu:
      'A SmartReview ágens véleményenként megfogalmaz egy választ az Ön beállított márkahangján. Ön jóváhagyja, szerkeszti vagy újragenerálja, soha többé üres mező.',
  },
  'reviewsDemo.inside.c.label': { en: '03 · 90-day plan', fr: '03 · Plan 90 jours', hu: '03 · 90 napos terv' },
  'reviewsDemo.inside.c.desc': {
    en: 'The platform turns the patterns it finds into a 90-day action plan: what to fix first, where the impact lives, how to track it.',
    fr: 'La plateforme transforme les patterns détectés en plan d\'action 90 jours : quoi corriger en premier, où est l\'impact, comment le suivre.',
    hu:
      'A platform a felismert mintázatokból 90 napos cselekvési tervet készít: mit javítson először, hol van a hatás, hogyan kövesse.',
  },

  // Aspect section (kept, repurposed, no more "we'll do it for you")
  'reviewsDemo.aspect.kicker': { en: 'AI ANALYSIS', fr: 'ANALYSE IA', hu: 'MI-ELEMZÉS' },
  'reviewsDemo.aspect.title': {
    en: 'Every review, scored on six dimensions.',
    fr: 'Chaque avis, noté sur six dimensions.',
    hu:
      'Minden vélemény hat szempont szerint pontozva.',
  },
  'reviewsDemo.aspect.body': {
    en: 'The platform reads the text of each review and rates food, service, ambiance, value, hygiene, and speed. Aggregate scores roll up to a reputation index you can track week over week.',
    fr: 'La plateforme lit chaque avis et note cuisine, service, ambiance, rapport qualité-prix, hygiène et rapidité. Les scores agrégés alimentent un indice de réputation suivi semaine après semaine.',
    hu:
      'A platform elolvassa minden vélemény szövegét, és pontozza az ételt, a kiszolgálást, a hangulatot, az ár-érték arányt, a higiéniát és a gyorsaságot. Az összesített pontszámokból hírnévindex áll össze, amelyet hétről hétre követhet.',
  },
  'reviewsDemo.aspect.imgCaption': {
    en: 'Aspect breakdown, live capture from the demo, real partner data anonymised.',
    fr: 'Décomposition par aspects, capture live de la démo, données réelles anonymisées.',
    hu:
      'Szempontbontás, élő képernyőkép a demóból, anonimizált valós partneradatokkal.',
  },

  // Response agent section
  'reviewsDemo.respond.kicker': { en: 'RESPONSE AGENT', fr: 'AGENT DE RÉPONSE', hu: 'VÁLASZÁGENS' },
  'reviewsDemo.respond.title1': { en: 'A response agent', fr: 'Un agent de réponse', hu: 'Válaszágens,' },
  'reviewsDemo.respond.titleAccent': { en: 'configured to your voice.', fr: 'configuré à votre ton.', hu: 'az Ön hangjára beállítva.' },
  'reviewsDemo.respond.body': {
    en: 'Plug in your brand voice, a system prompt, and a few example replies. The agent drafts a response per review and learns from your edits, so you spend seconds, not minutes, per review.',
    fr: 'Définissez votre ton de marque, un system prompt et quelques exemples de réponses. L\'agent rédige une réponse par avis et apprend de vos modifications, vous passez quelques secondes, pas quelques minutes, par avis.',
    hu:
      'Adja meg a márkahangját, egy rendszerpromptot és néhány példaválaszt. Az ágens véleményenként megfogalmaz egy választ, és tanul a javításaiból, így véleményenként másodperceket tölt vele, nem perceket.',
  },
  'reviewsDemo.respond.footnote': {
    en: 'OPENAI · ANTHROPIC · PRIVATE BY DEFAULT',
    fr: 'OPENAI · ANTHROPIC · PRIVÉ PAR DÉFAUT',
    hu:
      'OPENAI · ANTHROPIC · ALAPÉRTELMEZETTEN PRIVÁT',
  },
  'reviewsDemo.respond.imgCaption': {
    en: 'Response agent configuration, brand voice, system prompt, learned examples.',
    fr: 'Configuration de l\'agent, ton de marque, system prompt, exemples appris.',
    hu:
      'A válaszágens beállításai: márkahang, rendszerprompt, megtanult példák.',
  },

  // 90-day plan section (replaces "deliverable" / "we deliver")
  'reviewsDemo.roadmap.kicker': { en: 'ACTION PLAN', fr: 'PLAN D\'ACTION', hu: 'CSELEKVÉSI TERV' },
  'reviewsDemo.roadmap.title1': { en: 'From signal to', fr: 'Du signal à', hu: 'A jelzéstől' },
  'reviewsDemo.roadmap.titleAccent': { en: 'a 90-day plan.', fr: 'un plan 90 jours.', hu: 'a 90 napos tervig.' },
  'reviewsDemo.roadmap.body1': {
    en: 'The product clusters the recurring complaints and praises into themes, then proposes a 90-day plan: what to fix in the first 30 days, what to test next, what to measure.',
    fr: 'Le produit regroupe les critiques et compliments récurrents en thèmes, puis propose un plan 90 jours : quoi corriger les 30 premiers jours, quoi tester ensuite, quoi mesurer.',
    hu:
      'A termék témákba rendezi a visszatérő panaszokat és dicséreteket, majd 90 napos tervet javasol: mit javítson az első 30 napban, mit teszteljen utána, mit mérjen.',
  },
  'reviewsDemo.roadmap.body2': {
    en: 'You stay the owner. The software does the reading, the scoring, and the drafting, you keep the decisions.',
    fr: 'Vous restez propriétaire. Le logiciel lit, note et rédige, vous gardez les décisions.',
    hu:
      'A gazda Ön marad. A szoftver olvas, pontoz és fogalmaz, a döntések az Önéi.',
  },
  'reviewsDemo.roadmap.imgCaption': {
    en: '90-day action plan generated from real review data.',
    fr: 'Plan d\'action 90 jours généré depuis des avis réels.',
    hu:
      'Valós véleményadatokból generált 90 napos cselekvési terv.',
  },

  // Live evidence (full-width), kept, less salesy caption
  'reviewsDemo.live.kicker': { en: 'INSIDE A SINGLE REVIEW', fr: 'À L\'INTÉRIEUR D\'UN AVIS', hu: 'EGY VÉLEMÉNY BELSEJE' },
  'reviewsDemo.live.title1': { en: 'One review,', fr: 'Un avis,', hu: 'Egy vélemény,' },
  'reviewsDemo.live.titleAccent': { en: 'fully decomposed.', fr: 'entièrement décomposé.', hu: 'teljesen lebontva.' },
  'reviewsDemo.live.imgCaption': {
    en: 'Single review view, six-aspect scores, AI summary, response draft.',
    fr: 'Vue d\'un avis, scores six dimensions, résumé IA, brouillon de réponse.',
    hu:
      'Egyetlen vélemény nézete: hat szempont pontszáma, MI-összefoglaló, válaszjavaslat.',
  },

  // How the demo works, 4 steps (replaces agency onboarding)
  'reviewsDemo.how.kicker': { en: 'HOW THE DEMO WORKS', fr: 'COMMENT MARCHE LA DÉMO', hu: 'HOGYAN MŰKÖDIK A DEMÓ' },
  'reviewsDemo.how.title1': { en: 'From form to', fr: 'Du formulaire à', hu: 'Az űrlaptól' },
  'reviewsDemo.how.titleAccent': { en: 'a working session.', fr: 'une session live.', hu: 'az élő munkamenetig.' },
  'reviewsDemo.how.s1.title': { en: 'You request access', fr: 'Vous demandez l\'accès', hu: 'Ön hozzáférést kér' },
  'reviewsDemo.how.s1.desc': {
    en: 'Fill the short form below. Name, email, role, sector, nothing else.',
    fr: 'Remplissez le court formulaire ci-dessous. Prénom, email, rôle, secteur, rien d\'autre.',
    hu:
      'Töltse ki az alábbi rövid űrlapot. Név, e-mail, szerepkör, ágazat, semmi más.',
  },
  'reviewsDemo.how.s2.title': { en: 'I review the request', fr: 'Je relis la demande', hu: 'Én átnézem a kérést' },
  'reviewsDemo.how.s2.desc': {
    en: 'I read it myself the same day. No SDR, no automated drip, no shifting calendar holds.',
    fr: 'Je la lis moi-même dans la journée. Pas de SDR, pas de drip automatique, pas d\'agenda mouvant.',
    hu:
      'Még aznap magam olvasom el. Semmi értékesítő, semmi automata levélsorozat, semmi csúszó naptárbejegyzés.',
  },
  'reviewsDemo.how.s3.title': { en: 'You get the demo link', fr: 'Vous recevez le lien démo', hu: 'Megkapja a demólinket' },
  'reviewsDemo.how.s3.desc': {
    en: 'A signed link to the live demo (mock data from a partner restaurant) lands in your inbox, usually within 24h.',
    fr: 'Un lien signé vers la démo live (données fictives d\'un restaurant partenaire) arrive en boîte, généralement sous 24h.',
    hu:
      'Egy aláírt link az élő demóhoz (egy partnerétterem kitalált adataival) érkezik a postaládájába, jellemzően 24 órán belül.',
  },
  'reviewsDemo.how.s4.title': { en: 'We talk if it fits', fr: 'On en parle si ça colle', hu: 'Beszélünk, ha passzol' },
  'reviewsDemo.how.s4.desc': {
    en: 'After you\'ve clicked through, you decide if it\'s worth a conversation. No pressure either way.',
    fr: 'Après votre tour du produit, vous décidez si ça vaut une conversation. Aucune pression.',
    hu:
      'Miután végigkattintotta, Ön dönti el, megér-e egy beszélgetést. Semmi nyomás, így is, úgy is.',
  },

  // FAQ (kept, but reworked, no more pricing/agency questions)
  'reviewsDemo.faq.kicker': { en: 'FREQUENT QUESTIONS', fr: 'QUESTIONS FRÉQUENTES', hu: 'GYAKORI KÉRDÉSEK' },
  'reviewsDemo.faq.title1': { en: 'About the demo', fr: 'À propos de la démo', hu: 'A demóról' },
  'reviewsDemo.faq.titleAccent': { en: '& the product.', fr: '& du produit.', hu: 'és a termékről.' },
  'reviewsDemo.faq.q1': { en: 'Is the demo on real data?', fr: 'La démo est-elle sur des données réelles ?', hu: 'Valódi adatokon fut a demó?' },
  'reviewsDemo.faq.a1': {
    en: 'No. The demo runs on anonymised review data from a partner restaurant, about 200 imported reviews. Same engine, mock account, no risk to your own data.',
    fr: 'Non. La démo tourne sur des avis anonymisés d\'un restaurant partenaire, environ 200 avis importés. Même moteur, compte fictif, aucun risque pour vos propres données.',
    hu:
      'Nem. A demó egy partnerétterem anonimizált véleményein fut, nagyjából 200 beimportált véleményen. Ugyanaz a motor, kitalált fiók, semmilyen kockázat a saját adataira.',
  },
  'reviewsDemo.faq.q2': { en: 'How long does access last?', fr: 'Combien de temps dure l\'accès ?', hu: 'Meddig él a hozzáférés?' },
  'reviewsDemo.faq.a2': {
    en: 'Indefinitely for now. You get a signed link you can come back to. If we end up working together, you move to your own instance.',
    fr: 'Indéfiniment pour l\'instant. Vous recevez un lien signé sur lequel vous pouvez revenir. Si on travaille ensemble, vous passez sur votre propre instance.',
    hu:
      'Egyelőre határozatlan ideig. Kap egy aláírt linket, amelyhez bármikor visszatérhet. Ha együtt dolgozunk, átkerül a saját példányára.',
  },
  'reviewsDemo.faq.q3': { en: 'Is this a SaaS I can buy today?', fr: 'C\'est un SaaS achetable aujourd\'hui ?', hu: 'Ez egy SaaS, amit ma megvehetek?' },
  'reviewsDemo.faq.a3': {
    en: 'Not yet self-serve. The product is real and runs in production for partner restaurants. If you want a live instance on your data, talk to me after the demo.',
    fr: 'Pas encore en self-serve. Le produit est réel et tourne en production pour des restaurants partenaires. Si vous voulez une instance live sur vos données, parlons-en après la démo.',
    hu:
      'Önkiszolgálóan még nem. A termék valódi, és partnerétteremeknél élesben fut. Ha a saját adatain szeretne élő példányt, beszéljünk róla a demó után.',
  },
  'reviewsDemo.faq.q4': { en: 'Will you spam me?', fr: 'Allez-vous me spammer ?', hu: 'Fognak spamelni?' },
  'reviewsDemo.faq.a4': {
    en: 'No. I send the link, and one short follow-up after a week. Newsletter is opt-in, unsubscribe in one click.',
    fr: 'Non. J\'envoie le lien, puis une courte relance après une semaine. La newsletter est opt-in, désabonnement en un clic.',
    hu:
      'Nem. Elküldöm a linket, majd egy hét múlva egy rövid emlékeztetőt. A hírlevél feliratkozásos, egy kattintással leiratkozhat.',
  },
  'reviewsDemo.faq.q5': { en: 'Who built this?', fr: 'Qui a construit ça ?', hu: 'Ki építette ezt?' },
  'reviewsDemo.faq.a5': {
    en: 'NateSystem, an internal-software studio. Reviews is one of the products we build for our own catalog. If we work with you, your instance is built and operated by the same team.',
    fr: 'NateSystem, un studio de logiciel interne. Reviews est un des produits qu\'on construit pour notre propre catalogue. Si on travaille avec vous, votre instance est construite et exploitée par la même équipe.',
    hu:
      'A NateSystem, egy belső szoftvereket építő stúdió. A Reviews egyike a saját kínálatunkba épített termékeknek. Ha Önnel dolgozunk, a saját példányát ugyanez a csapat építi és üzemelteti.',
  },

  // Final CTA ribbon (replaces "let us run it")
  'reviewsDemo.finalCta.title1': { en: 'See the product.', fr: 'Voyez le produit.', hu: 'Nézze meg a terméket.' },
  'reviewsDemo.finalCta.titleAccent': {
    en: 'Make your own call.',
    fr: 'Faites votre propre choix.',
    hu:
      'Döntse el maga.',
  },
  'reviewsDemo.finalCta.cta': { en: 'Request demo access', fr: 'Demander accès démo', hu: 'Demóhozzáférés kérése' },
  'reviewsDemo.stickyCta': { en: 'Request demo access', fr: 'Demander accès démo', hu: 'Demóhozzáférés kérése' },

  // DemoRequestModal copy (reusable)
  'demoRequest.kicker': { en: 'DEMO REQUEST', fr: 'DEMANDE D\'ACCÈS', hu: 'HOZZÁFÉRÉS IGÉNYLÉSE' },
  'demoRequest.intro': {
    en: 'Four fields, no calendar. I\'ll send the access link within 24 hours.',
    fr: 'Quatre champs, pas d\'agenda. J\'envoie le lien d\'accès sous 24 heures.',
    hu:
      'Négy mező, semmi naptár. A hozzáférési linket 24 órán belül küldöm.',
  },
  'demoRequest.field.firstname': { en: 'First name', fr: 'Prénom', hu: 'Keresztnév' },
  'demoRequest.field.firstname.placeholder': { en: 'Your first name', fr: 'Ton prénom', hu: 'A keresztneve' },
  'demoRequest.field.email': { en: 'Work email', fr: 'Email professionnel', hu: 'Céges e-mail' },
  'demoRequest.field.role': { en: 'Your role', fr: 'Ton rôle', hu: 'Az Ön szerepköre' },
  'demoRequest.field.role.placeholder': { en: 'Select your role', fr: 'Sélectionne ton rôle', hu: 'Válasszon szerepkört' },
  'demoRequest.field.sector': { en: 'Your sector', fr: 'Ton secteur', hu: 'Az Ön ágazata' },
  'demoRequest.field.sector.placeholder': { en: 'Select your sector', fr: 'Sélectionne ton secteur', hu: 'Válasszon ágazatot' },
  'demoRequest.field.newsletter': {
    en: 'Send me the Scale Minute, NateSystem\'s weekly note',
    fr: 'Recevoir la Scale Minute, newsletter hebdo NateSystem',
    hu:
      'Kérem a Scale Minute-ot, a NateSystem heti levelét',
  },
  'demoRequest.submit': { en: 'Request access', fr: 'Demander l\'accès', hu: 'Hozzáférés kérése' },
  'demoRequest.submitting': { en: 'Sending…', fr: 'Envoi…', hu: 'Küldés…' },
  'demoRequest.error': { en: 'Something went wrong. Try again.', fr: 'Une erreur est survenue. Réessaie.', hu: 'Hiba történt. Próbálja újra.' },
  'demoRequest.footnote': {
    en: 'No spam · 1-click unsubscribe · Reply within 24h',
    fr: 'Pas de spam · Désabonnement 1 clic · Réponse sous 24h',
    hu:
      'Semmi spam · Leiratkozás 1 kattintással · Válasz 24 órán belül',
  },
  'demoRequest.success.title': {
    en: 'Got it. Check your inbox in the next 24h.',
    fr: 'C\'est noté. Surveille ta boîte dans les 24 prochaines heures.',
    hu:
      'Megvan. Nézze a postaládáját a következő 24 órában.',
  },
  'demoRequest.success.body': {
    en: 'I read every request myself and send the demo link from my own address. If you don\'t see anything in 24h, check spam.',
    fr: 'Je lis chaque demande moi-même et j\'envoie le lien démo depuis mon adresse perso. Si rien sous 24h, regarde dans les spams.',
    hu:
      'Minden kérést magam olvasok el, és a demólinket a saját címemről küldöm. Ha 24 órán belül nem érkezik meg, nézze meg a spam mappát.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // V2, alternative home (route /v2, noindex). New strings only, prefixed v2.
  // ─────────────────────────────────────────────────────────────────────────
  'v2.position': { en: 'For SMBs too structured for a freelancer, too small for a big consultancy.', fr: 'Pour les PME trop structurées pour un freelance, trop petites pour une ESN.', hu: 'Kkv-knak, amelyek túl szervezettek egy szabadúszóhoz, és túl kicsik egy nagy rendszerintegrátorhoz.' },

  'v2.hero.eyebrow': { en: 'Too structured for a freelancer · too small for a big firm', fr: 'Trop structuré pour un freelance · trop petit pour une ESN', hu: 'Túl szervezett egy szabadúszóhoz · túl kicsi egy nagy céghez' },
  'v2.hero.title': { en: 'Your data is scattered, your teams re-enter everything, and you\'re the one holding it all together.', fr: 'Vos données sont éparpillées, vos équipes ressaisissent, et c\'est vous qui recollez tout.', hu: 'Az adatai szétszórva, a csapatai újra meg újra begépelnek, és Ön tartja össze az egészet.' },
  'v2.hero.sub': { en: 'We map how your business actually runs, build the infrastructure to run it, and add AI where it replaces real hours.', fr: 'On cartographie comment votre activité tourne vraiment, on construit l\'infrastructure qui la fait tourner, et on y met de l\'IA là où elle remplace de vraies heures.', hu: 'Feltérképezzük, hogyan működik valójában a cége, megépítjük az infrastruktúrát, ami működteti, és MI-t teszünk bele ott, ahol valódi munkaórákat vált ki.' },
  'v2.hero.proof': { en: 'On average, 10+ hours a week recovered for our clients.', fr: 'En moyenne 10 h+ par semaine récupérées chez nos clients.', hu: 'Ügyfeleinknél átlagosan heti 10+ óra visszanyerve.' },
  'v2.hero.cta': { en: 'Book a call', fr: 'Réserver un appel', hu: 'Hívás foglalása' },

  'v2.sprint.eyebrow': { en: 'First step · no commitment', fr: 'Première étape · sans engagement', hu: 'Első lépés · kötelezettség nélkül' },
  'v2.sprint.title': { en: 'The Diagnostic', fr: 'Le Diagnostic', hu: 'A diagnosztika' },
  'v2.sprint.format': {
    en: '3 to 5 calls · nothing to prepare',
    fr: '3 à 5 appels · rien à préparer',
    hu: '3-5 hívás · semmit nem kell előkészítenie',
  },
  'v2.sprint.intro': {
    en: 'You prepare nothing, you fill in nothing. You talk, we do the work.',
    fr: 'Vous ne préparez rien, vous ne remplissez rien. Vous parlez, on fait le travail.',
    hu: 'Semmit nem kell előkészítenie vagy kitöltenie. Ön beszél, mi dolgozunk.',
  },
  'v2.sprint.d1.name': { en: 'The Map', fr: 'La Carte', hu: 'A térkép' },
  'v2.sprint.d1.desc': {
    en: 'How your organisation really runs, and where your clients come from. Everything in people’s heads, put on paper.',
    fr: 'Comment votre organisation tourne réellement, et d’où viennent vos clients. Tout ce qui est dans les têtes, mis sur papier.',
    hu: 'Hogyan működik valójában a szervezete, és honnan jönnek az ügyfelei. Minden, ami a fejekben van, papírra téve.',
  },
  'v2.sprint.d2.name': { en: 'The Prototype', fr: 'Le Prototype', hu: 'A prototípus' },
  'v2.sprint.d2.desc': {
    en: 'Clickable, built on your rules, before any commitment.',
    fr: 'Cliquable, construit sur vos règles, avant tout engagement.',
    hu: 'Kattintható, az Ön szabályaira építve, bármilyen elköteleződés előtt.',
  },
  'v2.sprint.d3.name': { en: 'The Costed Roadmap', fr: 'La Feuille de route chiffrée', hu: 'A beárazott ütemterv' },
  'v2.sprint.d3.desc': { en: 'What to build, in what order, for how much.', fr: 'Quoi construire, dans quel ordre, pour combien.', hu: 'Mit építsünk meg, milyen sorrendben, mennyiért.' },
  'v2.sprint.promise': {
    en: 'You know where time, mistakes and clients slip away, and you click through the software that fixes it.',
    fr: 'Vous savez où se perdent le temps, les erreurs et les clients, et vous cliquez dans le logiciel qui règle tout ça.',
    hu: 'Tudja, hol vész el az idő, hol csúsznak be a hibák és hol tűnnek el az ügyfelek, és belekattinthat a szoftverbe, amely mindezt rendezi.',
  },
  'v2.sprint.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  'v2.sprint.selfserve': { en: 'Or run the online diagnostic, 3 min, no email', fr: 'Ou lancez le diagnostic en ligne, 3 min, sans e-mail', hu: 'Vagy indítsa el az online diagnosztikát: 3 perc, e-mail nélkül' },
  'v2.sprint.afterA': {
    en: 'What then? Two options: a long-term partnership where the system keeps evolving with you, or we stop here. ',
    fr: 'Ensuite ? Deux options : un partenariat dans la durée, où le système continue d’évoluer avec vous, ou on s’arrête là. ',
    hu: 'Utána? Két lehetőség: hosszú távú partnerség, amelyben a rendszer Önnel együtt fejlődik tovább, vagy itt megállunk. ',
  },
  'v2.sprint.afterB': { en: 'Zero pressure, zero commitment.', fr: 'Zéro pression, zéro engagement.', hu: 'Semmi nyomás, semmi kötelezettség.' },
  'v2.sprint.afterC': { en: ' What you see is already yours.', fr: ' Ce que vous voyez est déjà à vous.', hu: ' Amit lát, az már az Öné.' },

  'v2.cmp.eyebrow': { en: 'THE HONEST COMPARISON', fr: 'LA COMPARAISON HONNÊTE', hu: 'AZ ŐSZINTE ÖSSZEHASONLÍTÁS' },
  'v2.cmp.title': { en: 'Your real alternatives,', fr: 'Vos vraies alternatives,', hu: 'A valódi alternatívái,' },
  'v2.cmp.titleAccent': { en: 'next to us.', fr: 'à côté de nous.', hu: 'mellettünk.' },
  'v2.cmp.colFreelance': { en: 'Freelancer', fr: 'Freelance', hu: 'Szabadúszó' },
  'v2.cmp.colEsn': { en: 'Traditional agency', fr: 'Agence traditionnelle', hu: 'Hagyományos ügynökség' },
  'v2.cmp.colSaas': {
    en: 'Off-the-shelf software',
    fr: 'Logiciel du marché',
    hu: 'Piaci szoftver',
  },
  'v2.cmp.colUs': { en: 'NateSystem', fr: 'NateSystem', hu: 'NateSystem' },
  'v2.cmp.r1.crit': {
    en: 'Understands how a school runs',
    fr: 'Comprend le fonctionnement d\'une école',
    hu: 'Érti, hogyan működik egy iskola',
  },
  'v2.cmp.r1.freelance': { en: 'Sometimes', fr: 'Parfois', hu: 'Néha' },
  'v2.cmp.r1.esn': { en: 'Rarely', fr: 'Rarement', hu: 'Ritkán' },
  'v2.cmp.r1.saas': { en: 'Never', fr: 'Jamais', hu: 'Soha' },
  'v2.cmp.r1.us': { en: 'It\'s the starting point', fr: 'C\'est le point de départ', hu: 'Ez a kiindulópont' },
  'v2.cmp.r2.crit': { en: 'Who codes', fr: 'Qui code', hu: 'Ki írja a kódot' },
  'v2.cmp.r2.freelance': { en: 'Them', fr: 'Lui', hu: 'Ő maga' },
  'v2.cmp.r2.esn': { en: 'A junior', fr: 'Un junior', hu: 'Egy junior' },
  'v2.cmp.r2.saas': { en: 'No one', fr: 'Personne', hu: 'Senki' },
  'v2.cmp.r2.us': { en: 'The founder', fr: 'Le fondateur', hu: 'Az alapító' },
  'v2.cmp.r3.crit': { en: 'You own the code', fr: 'Le code vous appartient', hu: 'A kód az Öné' },
  'v2.cmp.r3.freelance': { en: 'Often', fr: 'Souvent', hu: 'Gyakran' },
  'v2.cmp.r3.esn': { en: 'No', fr: 'Non', hu: 'Nem' },
  'v2.cmp.r3.saas': { en: 'No', fr: 'Non', hu: 'Nem' },
  'v2.cmp.r3.us': { en: '100%, delivered', fr: '100 %, livré', hu: '100%-ban, átadva' },
  'v2.cmp.r4.crit': { en: 'If things go wrong', fr: 'Si ça se passe mal', hu: 'Ha rosszul alakul' },
  'v2.cmp.r4.freelance': { en: 'You lose everything', fr: 'Vous perdez tout', hu: 'Mindent elveszít' },
  'v2.cmp.r4.esn': { en: 'A change request', fr: 'Un avenant', hu: 'Egy szerződésmódosítás' },
  'v2.cmp.r4.saas': { en: 'You churn', fr: 'Vous partez', hu: 'Ön távozik' },
  'v2.cmp.r4.us': { en: 'You keep the system', fr: 'Vous gardez le système', hu: 'A rendszer Önnél marad' },
  'v2.cmp.r5.crit': { en: 'Your data', fr: 'Vos données', hu: 'Az adatai' },
  'v2.cmp.r5.freelance': { en: 'Varies', fr: 'Variable', hu: 'Változó' },
  'v2.cmp.r5.esn': { en: 'Varies', fr: 'Variable', hu: 'Változó' },
  'v2.cmp.r5.saas': { en: 'Often outside the EU', fr: 'Souvent hors UE', hu: 'Gyakran az EU-n kívül' },
  'v2.cmp.r5.us': { en: 'EU, GDPR-native', fr: 'UE, RGPD-natif', hu: 'EU, GDPR-natív' },

  'v2.sector.eyebrow': { en: 'FOR YOUR INDUSTRY', fr: 'POUR VOTRE MÉTIER', hu: 'AZ ÖN ÁGAZATÁNAK' },
  'v2.sector.title': { en: 'Same problems.', fr: 'Mêmes problèmes.', hu: 'Ugyanazok a gondok.' },
  'v2.sector.titleAccent': { en: 'Different languages.', fr: 'Langages différents.', hu: 'Más-más nyelven.' },
  'v2.sector.sub': { en: 'We speak all of them.', fr: 'On les parle tous.', hu: 'Mi mindegyiket beszéljük.' },
  'v2.sector.resto.title': { en: 'Restaurants & hospitality', fr: 'Restauration & hôtellerie', hu: 'Vendéglátás és szálláshely' },
  'v2.sector.resto.body': { en: 'Bookings, staff schedules and stock live in three notebooks, a spreadsheet and the manager\'s head. Every night, someone re-keys it all by hand. We replace the notebook with a real system.', fr: 'Vos réservations, vos plannings d\'équipe et vos stocks vivent dans trois cahiers, un tableur et la tête du responsable. Le soir, quelqu\'un recopie tout à la main. On remplace le cahier par un vrai système.', hu: 'A foglalások, a beosztások és a készlet három füzetben, egy táblázatban és az üzletvezető fejében élnek. Esténként valaki kézzel átmásolja az egészet. A füzetet valódi rendszerre cseréljük.' },
  'v2.sector.edu.title': { en: 'Institutions & education', fr: 'Institutions & enseignement', hu: 'Intézmények és oktatás' },
  'v2.sector.edu.body': { en: 'HR, time tracking, stock, scheduling: every department has its own file, no one has the same version, and payroll is validated by hand half a day a month. We unify it all in one place.', fr: 'RH, pointage, stock, plannings : chaque service a son fichier, personne n\'a la même version, et la paie se valide à la main une demi-journée par mois. On unifie tout au même endroit.', hu: 'HR, jelenlét, készlet, beosztás: minden részlegnek saját fájlja van, senkinél nincs ugyanaz a verzió, a bérszámfejtés pedig havonta fél napon át kézzel készül. Mindent egy helyre vonunk össze.' },
  'v2.sector.conseil.title': { en: 'Consulting & firms', fr: 'Conseil & cabinets', hu: 'Tanácsadás és irodák' },
  'v2.sector.conseil.body': { en: 'Your expertise is locked in spreadsheets you patch together at night. You spend more time in your tables than with your clients. We turn your method into a tool that runs for you.', fr: 'Votre expertise est enfermée dans des Excel que vous bricolez le soir. Vous passez plus de temps dans vos tableaux qu\'avec vos clients. On transforme votre méthode en outil qui tourne pour vous.', hu: 'A szaktudása táblázatokba zárva, amelyeket esténként foltozgat. Több időt tölt a tábláiban, mint az ügyfeleivel. A módszeréből olyan eszközt csinálunk, amely Ön helyett dolgozik.' },
  'v2.sector.clubs.title': { en: 'Clubs & associations', fr: 'Clubs & associations', hu: 'Klubok és egyesületek' },
  'v2.sector.clubs.body': { en: 'Volunteers, members and events run on texts, emails and word of mouth. The knowledge leaves with the people. We put it into a system anyone can pick up.', fr: 'Vos bénévoles, vos adhérents et vos événements se gèrent par SMS, mails et bouche-à-oreille. Le savoir part avec les gens. On le met dans un système que tout le monde peut reprendre.', hu: 'Az önkéntesek, a tagok és a rendezvények SMS-ben, e-mailben és szóbeszéddel szerveződnek. A tudás az emberekkel távozik. Olyan rendszerbe tesszük, amelyet bárki átvehet.' },
  'v2.sector.event.title': { en: 'Events & staffing', fr: 'Événementiel & staffing', hu: 'Rendezvény és személyzet' },
  'v2.sector.event.body': { en: 'Your talent pool, missions and documents are coordinated by phone and WhatsApp. One missed mission, one expired document, and it\'s a mess. We structure the whole coordination.', fr: 'Votre vivier, vos missions et vos documents se coordonnent au téléphone et sur WhatsApp. Une mission oubliée, un document expiré, et c\'est la tuile. On structure toute la coordination.', hu: 'A munkatársbázis, a megbízások és a dokumentumok telefonon és WhatsAppon szerveződnek. Egy kimaradt megbízás, egy lejárt dokumentum, és kész a baj. Az egész koordinációt rendszerbe tesszük.' },

  'v2.cta.eyebrow': { en: 'THE NEXT STEP', fr: 'L\'ÉTAPE SUIVANTE', hu: 'A KÖVETKEZŐ LÉPÉS' },
  'v2.cta.title': { en: 'You never leap into the dark.', fr: 'Vous ne sautez jamais dans le vide.', hu: 'Soha nem ugrik a sötétbe.' },
  'v2.cta.sub': { en: 'You see the map, you click through the prototype, you approve the roadmap. Only then does anything get built.', fr: 'Vous voyez la carte, vous cliquez dans le prototype, vous approuvez la feuille de route. Ensuite seulement, on construit quelque chose.', hu: 'Látja a térképet, végigkattintja a prototípust, jóváhagyja az ütemtervet. Csak ezután épül meg bármi.' },
  'v2.cta.button': { en: 'Book a call', fr: 'Réserver un appel', hu: 'Hívás foglalása' },

  /* ─────────── Page /methode « Notre approche » (Lot 2) ─────────── */
  'methode.hero.eyebrow': {
    en: 'OUR METHOD',
    fr: 'NOTRE MÉTHODE',
    hu: 'A MÓDSZERÜNK',
  },
  'methode.hero.title': {
    en: 'We map, we build, we train.',
    fr: 'On cartographie, on construit, on forme.',
    hu: 'Feltérképezünk, építünk, betanítunk.',
  },
  'methode.hero.titleAccent': {
    en: 'Then we step back.',
    fr: 'Puis on s\'efface.',
    hu: 'Aztán háttérbe lépünk.',
  },
  'methode.hero.sub': {
    en: 'We start by understanding where your teams\' hours go. Then we build the platform that gives them back, on your own rules, and we train until it runs without us.',
    fr: 'On commence par comprendre où partent les heures de vos équipes. Puis on construit la plateforme qui vous les rend, sur vos règles, et on forme jusqu\'à ce que ça tourne sans nous.',
    hu: 'Azzal kezdjük, hogy megértjük, hová mennek a csapatai órái. Aztán megépítjük a platformot, amely visszaadja őket, az Ön szabályai szerint, és addig képzünk, amíg nélkülünk is megy.',
  },
  'methode.hero.cta': {
    en: 'Book a call · free',
    fr: 'Réserver un appel · offert',
    hu: 'Hívás foglalása · ingyenes',
  },

  'radio.eyebrow': {

    en: 'THE MAPPING',

    fr: 'LA CARTOGRAPHIE',

    hu: 'A FELTÉRKÉPEZÉS',

  },
  'radio.title': {
    en: 'How we read',
    fr: 'Comment on lit',
    hu: 'Hogyan olvassuk',
  },
  'radio.titleAccent': {
    en: 'your school.',
    fr: 'votre établissement.',
    hu: 'az intézményét.',
  },
  'radio.sub': {
    en: 'Four steps. From what lives in people\'s heads to a tool your teams use without us.',
    fr: 'Quatre temps. De ce qui vit dans les têtes à un outil que vos équipes utilisent sans nous.',
    hu: 'Négy lépés. Attól, ami a fejekben él, odáig, hogy a csapatai nélkülünk használják az eszközt.',
  },
  'radio.hint': {
    en: 'Click each step',
    fr: 'Cliquez sur chaque étape',
    hu: 'Kattintson az egyes lépésekre',
  },

  'radio.s1.name': {

    en: 'Map',

    fr: 'Cartographier',

    hu: 'Feltérképezés',

  },
  'radio.s1.tag': {
    en: 'We look',
    fr: 'On regarde',
    hu: 'Megnézzük',
  },
  'radio.s1.desc': {
    en: 'We lay out how your school actually runs: every task, every tool, every piece of information living in a notebook, a spreadsheet or one person\'s head. From a family\'s enrolment to payroll sign-off.',
    fr: 'On met à plat comment votre établissement tourne vraiment : chaque tâche, chaque outil, chaque information qui vit dans un cahier, un tableur ou une seule tête. De l\'inscription d\'une famille à la validation de la paie.',
    hu: 'Kiterítjük, hogyan működik valójában az intézménye: minden feladat, eszköz és információ, ami egy füzetben, táblázatban vagy egyetlen fejben él. A család beiratkozásától a bérszámfejtés jóváhagyásáig.',
  },
  'radio.s2.name': {
    en: 'Bring together',
    fr: 'Réunir',
    hu: 'Összefogás',
  },
  'radio.s2.tag': {
    en: 'We gather',
    fr: 'On rassemble',
    hu: 'Összegyűjtjük',
  },
  'radio.s2.desc': {
    en: 'Your data, scattered across sites, comes back into one base built on your own agreement and school calendar. One single record, the same for leadership and for the sites.',
    fr: 'Vos données éparpillées entre les sites reviennent dans une seule base, bâtie sur votre convention et votre calendrier scolaire. Une seule information, la même pour la direction et pour les établissements.',
    hu: 'A telephelyek között szétszórt adatai egyetlen adatbázisba kerülnek, amely az Ön megállapodására és tanévi naptárára épül. Egyetlen információ, ugyanaz a vezetőségnek és a telephelyeknek.',
  },
  'radio.s3.name': {
    en: 'Automate',
    fr: 'Automatiser',
    hu: 'Automatizálás',
  },
  'radio.s3.tag': {
    en: 'We lighten',
    fr: 'On allège',
    hu: 'Könnyítünk',
  },
  'radio.s3.desc': {
    en: 'Re-typing, chasing missing documents and hour calculations run on their own, but only where it gives real hours back to your teams. Never one more gadget to learn.',
    fr: 'Les ressaisies, les relances de pièces manquantes et les calculs d\'heures tournent seuls, mais seulement là où ça rend de vraies heures à vos équipes. Jamais un gadget de plus à apprendre.',
    hu: 'Az újbóli adatbevitel, a hiányzó iratok utánkövetése és az óraszámítás magától megy, de csak ott, ahol valódi órákat ad vissza a csapatainak. Sosem egy újabb megtanulandó kütyü.',
  },
  'radio.s4.name': {
    en: 'Train',
    fr: 'Former',
    hu: 'Betanítás',
  },
  'radio.s4.tag': {
    en: 'We hand over',
    fr: 'On passe la main',
    hu: 'Átadjuk',
  },
  'radio.s4.desc': {
    en: 'From leadership to the front desk, everyone knows how to use it. Documentation is complete, you own 100% of the code and the student records stay with you. We stay if you want, but you no longer need us.',
    fr: 'De la direction à l\'accueil, chacun sait s\'en servir. La documentation est complète, 100 % du code vous appartient et les données d\'élèves restent chez vous. On reste si vous voulez, mais vous n\'en avez plus besoin.',
    hu: 'A vezetőségtől a portáig mindenki tudja használni. A dokumentáció teljes, a kód 100%-a az Öné, a diákadatok pedig Önnél maradnak. Maradunk, ha szeretné, de már nincs ránk szüksége.',
  },

  'radio.scene.sources': {

    en: 'Spreadsheets · Notebooks · Messages · Emails · In people\'s heads',

    fr: 'Tableurs · Cahiers · Messages · Mails · Dans les têtes',

    hu: 'Táblázatok · Füzetek · Üzenetek · E-mailek · A fejekben',

  },
  'radio.scene.hub': {
    en: 'Your base',
    fr: 'Votre base',
    hu: 'Az Ön adatbázisa',
  },
  'radio.scene.auto': {
    en: 'Auto',
    fr: 'Auto',
    hu: 'Auto',
  },
  'radio.scene.ai': {
    en: 'AI',
    fr: 'IA',
    hu: 'MI',
  },
  'radio.scene.yours': {
    en: '100% yours',
    fr: '100 % à vous',
    hu: '100%-ban az Öné',
  },
  'radio.scene.doc': {
    en: 'Doc',
    fr: 'Doc',
    hu: 'Dok',
  },

  'methode.deliv.label': {

    en: 'THE DELIVERABLES',

    fr: 'LES LIVRABLES',

    hu: 'AZ EREDMÉNYEK',

  },
  'methode.deliv.title': {
    en: 'Everything is custom.',
    fr: 'Tout est sur-mesure.',
    hu: 'Minden egyedi.',
  },
  'methode.deliv.sub': {
    en: 'From mapping your school to a costed action plan, every deliverable is cut for you. You keep them, even if we stop there.',
    fr: 'De la cartographie de votre établissement au plan d\'action chiffré, chaque livrable est taillé pour vous. Vous les gardez, même si on s\'arrête là.',
    hu: 'Az intézmény feltérképezésétől a számszerűsített cselekvési tervig minden eredmény Önre szabott. Meg is tartja őket, akkor is, ha itt megállunk.',
  },

  'methode.cta.title': {

    en: 'We start by understanding. Not by selling.',

    fr: 'On commence par comprendre. Pas par vendre.',

    hu: 'A megértéssel kezdjük. Nem az eladással.',

  },
  'methode.cta.sub': {
    en: 'A free call. We look at how your school actually runs and tell you plainly what would change things, even if we are not the ones doing it.',
    fr: 'Un appel offert. On regarde comment votre établissement fonctionne vraiment et on vous dit franchement ce qui changerait les choses, même si ce n\'est pas nous qui le faisons.',
    hu: 'Egy ingyenes hívás. Megnézzük, hogyan működik valójában az intézménye, és őszintén megmondjuk, mi hozna változást, akkor is, ha nem mi csináljuk.',
  },
  'methode.cta.button': {
    en: 'Book a call · free',
    fr: 'Réserver un appel · offert',
    hu: 'Hívás foglalása · ingyenes',
  },

  /* ═══════════════════════════════════════════════════════════════════════
     /outils · /en/outils — LES OUTILS GRATUITS

     `app/en/outils/page.tsx` ré-exporte le composant français : une seule page
     à maintenir, deux URL indexables. Donc toute chaîne visible de cette page
     passe obligatoirement par ici, sinon /en/outils sert du français.

     Les noms de produits sont traduits : « Le Prévisionnel » et « Gestion
     d’actifs » ne veulent rien dire en anglais, et ce sont des démos publiques,
     pas des marques déposées. « NateSystem Stock » ne bouge pas.
     ═══════════════════════════════════════════════════════════════════════ */
  'outils.hero.label': { en: 'Free tools', fr: 'Outils gratuits', hu: 'Ingyenes eszközök' },
  'outils.hero.titlePrefix': { en: 'Free tools to ', fr: 'Des outils gratuits pour ', hu: 'Ingyenes eszközök, hogy ' },
  'outils.hero.titleAccent': { en: 'take back control of your business.', fr: 'reprendre le contrôle de votre entreprise.', hu: 'visszavegye az irányítást a cége felett.' },
  'outils.hero.sub': {
    en: 'We build custom software for small and mid-sized companies. Here are free versions of it, live right now, no signup.',
    fr: 'On construit des logiciels sur-mesure pour les PME. En voici des versions gratuites, à tester tout de suite, sans inscription.',
    hu:
      'Egyedi szoftvereket építünk kis- és középvállalkozásoknak. Itt van belőlük néhány ingyenes változat, azonnal kipróbálható, regisztráció nélkül.',
  },
  'outils.hero.link': { en: 'Need a tool built for you? Book a call', fr: 'Besoin d’un outil taillé pour vous ? Réserver un appel', hu: 'Önre szabott eszközre van szüksége? Foglaljon hívást' },

  'outils.cta.demo': { en: 'Try the demo', fr: 'Essayer la démo', hu: 'Demó kipróbálása' },
  'outils.cta.test': { en: 'Take the test', fr: 'Faire le test', hu: 'Teszt kitöltése' },
  'outils.badge.soon': { en: 'Coming soon', fr: 'Bientôt', hu: 'Hamarosan' },
  'outils.shot.soon': { en: 'In progress', fr: 'En préparation', hu: 'Készül' },

  /* Carte 1 · NateSystem Stock */
  'outils.stock.name': { en: 'NateSystem Stock', fr: 'NateSystem Stock', hu: 'NateSystem Stock' },
  'outils.stock.tag': { en: 'Inventory management', fr: 'Gestion de stock', hu: 'Készletkezelés' },
  'outils.stock.problem': {
    en: 'Still running your stock on a spreadsheet? See in real time what is short, what is out, and what runs out next.',
    fr: 'Vous gérez votre stock sur Excel ? Voyez en temps réel ce qui manque, ce qui est en rupture, ce qui va bientôt manquer.',
    hu:
      'Még mindig táblázatban vezeti a készletét? Lássa valós időben, miből fogyott ki, mi hiányzik, és mi fogy el legközelebb.',
  },
  'outils.stock.alt': {
    en: 'NateSystem Stock, free inventory management software: dashboard showing active items, low stock and stockouts',
    fr: 'Logiciel de gestion de stock gratuit NateSystem Stock : tableau de bord avec références actives, stock faible et ruptures',
    hu:
      'NateSystem Stock, ingyenes készletkezelő szoftver: irányítópult az aktív cikkekkel, az alacsony készlettel és a kifogyott tételekkel',
  },

  /* Carte 2 · Le Prévisionnel */
  'outils.treso.name': { en: 'The Forecast', fr: 'Le Prévisionnel', hu: 'The Forecast' },
  'outils.treso.tag': { en: 'Cash flow forecast', fr: 'Prévision de trésorerie', hu: 'Pénzforgalmi előrejelzés' },
  'outils.treso.problem': {
    en: 'Know exactly which month your cash goes into the red. VAT, salaries, payroll taxes and late payments included.',
    fr: 'Sachez exactement à quel mois votre trésorerie passe dans le rouge. TVA, salaires, cotisations et retards de paiement inclus.',
    hu:
      'Tudja meg pontosan, melyik hónapban csúszik mínuszba a pénzügyi egyenlege. Áfával, bérekkel, járulékokkal és késedelmes fizetésekkel együtt.',
  },
  'outils.treso.alt': {
    en: 'The Forecast, free cash flow forecasting tool: forecast table showing the month cash drops below zero',
    fr: 'Outil de prévision de trésorerie gratuit Le Prévisionnel : tableau prévisionnel indiquant le mois où la trésorerie passe sous zéro',
    hu:
      'The Forecast, ingyenes pénzforgalmi előrejelző eszköz: előrejelző táblázat, amely mutatja, melyik hónapban esik nulla alá az egyenleg',
  },

  /* Carte 3 · Diagnostic IA */
  'outils.diag.name': { en: 'AI Diagnostic', fr: 'Diagnostic IA', hu: 'MI-diagnosztika' },
  'outils.diag.tag': { en: 'AI readiness', fr: 'Maturité IA', hu: 'MI-érettség' },
  'outils.diag.problem': {
    en: 'Is your company ready for AI? A two-minute test, no jargon: process, data, adoption.',
    fr: 'Votre entreprise est-elle prête pour l’IA ? Le test en 2 minutes, sans jargon : processus, données, adoption.',
    hu:
      'Készen áll a cége az MI-re? Kétperces teszt, szakzsargon nélkül: folyamatok, adatok, elfogadás.',
  },
  'outils.diag.alt': {
    en: 'Free NateSystem AI Diagnostic: AI readiness test with one gauge per pillar (process, data, adoption)',
    fr: 'Diagnostic IA gratuit NateSystem : test de maturité IA avec 3 jauges par pilier (processus, données, adoption)',
    hu:
      'Ingyenes NateSystem MI-diagnosztika: MI-érettségi teszt pillérenként egy-egy mutatóval (folyamatok, adatok, elfogadás)',
  },

  /* Carte 4 · Gestion d’actifs */
  'outils.actifs.name': { en: 'Asset Management', fr: 'Gestion d’actifs', hu: 'Eszköznyilvántartás' },
  'outils.actifs.tag': { en: 'Equipment tracking', fr: 'Suivi de parc', hu: 'Eszközkövetés' },
  'outils.actifs.problem': {
    en: 'Lost track of who holds which equipment, or when to replace it? Track your equipment (IT, vehicles, machines) with depreciation and alerts.',
    fr: 'Vous ne savez plus qui a quel matériel, ni quand le remplacer ? Suivez votre parc (IT, véhicules, machines) avec amortissements et alertes.',
    hu:
      'Nem tudja már, kinél melyik eszköz van, és mikor kell cserélni? Kövesse az eszközparkját (informatika, járművek, gépek) értékcsökkenéssel és riasztásokkal.',
  },
  'outils.actifs.alt': {
    en: 'Free NateSystem asset and equipment management software: equipment tracking with automatic depreciation and replacement alerts',
    fr: 'Logiciel de gestion de parc et d’actifs gratuit NateSystem : suivi du matériel avec amortissements automatiques et alertes de remplacement',
    hu:
      'Ingyenes NateSystem eszköz- és vagyonnyilvántartó szoftver: eszközkövetés automatikus értékcsökkenéssel és cserefigyelmeztetésekkel',
  },

  /* Sections descriptives, le contenu que Google indexe. */
  'outils.desc.stock.title': {
    en: 'Free inventory management software, built for small companies.',
    fr: 'Un logiciel de gestion de stock gratuit, pour PME et TPE.',
    hu:
      'Ingyenes készletkezelő szoftver, kisvállalkozásokra szabva.',
  },
  'outils.desc.stock.p1': {
    en: 'Plenty of small companies still run their stock on a spreadsheet. It works, right up to the day a stockout costs you an order, or you order the same thing twice because nobody had the full picture. NateSystem Stock is free inventory software that stays simple: you see in real time what you hold, what is missing, and what runs out next.',
    fr: 'Beaucoup de PME et de TPE gèrent encore leur stock sur Excel. Ça marche… jusqu’au jour où une rupture vous fait perdre une commande, ou où vous commandez en double faute de visibilité. NateSystem Stock est un logiciel de gestion de stock gratuit et simple : vous voyez en temps réel ce que vous avez, ce qui manque, et ce qui va bientôt manquer.',
    hu:
      'Sok kisvállalkozás még mindig táblázatban vezeti a készletét. Működik is, egészen addig a napig, amíg egy kifogyás miatt elveszít egy rendelést, vagy kétszer rendeli meg ugyanazt, mert senki nem látta az egészet. A NateSystem Stock ingyenes készletkezelő szoftver, amely egyszerű marad: valós időben látja, mije van, mi hiányzik, és mi fogy el legközelebb.',
  },
  'outils.desc.stock.p2': {
    en: 'Active items, stock in and out, alert thresholds, suppliers, barcode scanning: everything sits in one place. No more overwritten file, no more “which version was the right one again?”. The demo runs on made-up data, so you can click through all of it without signing up and without an email wall.',
    fr: 'Références actives, entrées et sorties, seuils d’alerte, fournisseurs, lecture de codes-barres : tout est centralisé au même endroit. Fini le fichier qui s’écrase et le « c’était quelle version, déjà ? ». La démo tourne sur des données fictives, vous pouvez tout tester sans inscription et sans mur e-mail.',
    hu:
      'Aktív cikkek, bevételezés és kiadás, riasztási szintek, beszállítók, vonalkódolvasás: minden egy helyen. Nincs többé felülírt fájl, nincs többé „melyik verzió is volt a jó?”. A demó kitalált adatokon fut, így regisztráció és e-mail-fal nélkül kattinthat végig rajta.',
  },
  'outils.desc.stock.p3': {
    en: 'It is the same engine we run in production for our clients, in a version you can try straight away. If you want inventory software built for your trade, with your items, your suppliers and your rules, that is exactly what we build at NateSystem.',
    fr: 'C’est le même moteur qu’on déploie en production chez nos clients, dans une version que vous essayez tout de suite. Si vous voulez un logiciel de gestion de stock taillé pour votre métier, avec vos références, vos fournisseurs et vos règles, c’est exactement ce qu’on construit chez NateSystem.',
    hu:
      'Ugyanaz a motor, amelyet az ügyfeleinknél élesben üzemeltetünk, olyan változatban, amelyet azonnal kipróbálhat. Ha a szakmájára szabott készletkezelő szoftvert szeretne, a saját cikkeivel, beszállítóival és szabályaival, pontosan ezt építjük a NateSystemnél.',
  },

  'outils.desc.treso.title': {
    en: 'A free cash flow forecasting tool.',
    fr: 'Un outil de prévision de trésorerie gratuit.',
    hu:
      'Ingyenes pénzforgalmi előrejelző eszköz.',
  },
  'outils.desc.treso.p1': {
    en: 'Cash is what kills small companies that are otherwise profitable. Not because they stop earning, but because nobody sees the month the account goes into the red. The Forecast is a free cash flow tool that gives you that visibility: which month you drop below zero, and by how much.',
    fr: 'La trésorerie, c’est ce qui tue le plus de PME pourtant rentables. Pas parce qu’elles ne gagnent pas d’argent, mais parce qu’elles ne voient pas venir le mois où le compte passe dans le rouge. Le Prévisionnel est un outil de prévision de trésorerie gratuit qui vous donne cette visibilité : à quel mois vous passez sous zéro, et de combien.',
    hu:
      'A pénzforgalom az, ami az egyébként nyereséges kisvállalkozásokat megöli. Nem azért, mert nem keresnek pénzt, hanem mert senki nem látja előre azt a hónapot, amikor a számla mínuszba fordul. A The Forecast ingyenes pénzforgalmi eszköz, amely megadja ezt a rálátást: melyik hónapban esik nulla alá, és mennyivel.',
  },
  'outils.desc.treso.p2': {
    en: 'It takes in everything that really counts: VAT, salaries, payroll taxes, due dates, and above all the clients who pay you late. A clear forecast table on your own figures, with a simulator that prices the levers to close the gap: getting paid sooner, negotiating supplier terms, invoicing more.',
    fr: 'Il tient compte de tout ce qui compte vraiment : TVA, salaires, cotisations, échéances, et surtout les retards de paiement de vos clients. Un tableau prévisionnel de trésorerie clair, sur vos vrais chiffres, avec un simulateur qui chiffre les leviers pour combler le trou : se faire payer plus tôt, négocier des délais fournisseurs, facturer davantage.',
    hu:
      'Mindent beszámít, ami igazán számít: áfa, bérek, járulékok, esedékességek, és mindenekelőtt az ügyfelek, akik késve fizetnek. Világos előrejelző táblázat a saját számain, plusz egy szimulátor, amely beárazza a rés bezárásának eszközeit: korábbi fizettetés, beszállítói határidők újratárgyalása, több számlázás.',
  },
  'outils.desc.treso.p3': {
    en: 'Your figures never leave your browser. No signup, no export to a server: you test, you see, you decide. And if you want the forecast plugged into your real accounting, we build that for you.',
    fr: 'Vos chiffres ne quittent pas votre navigateur. Pas d’inscription, pas d’export vers un serveur : vous testez, vous voyez, vous décidez. Et si vous voulez brancher le prévisionnel sur votre comptabilité réelle, on le fait sur-mesure.',
    hu:
      'A számai nem hagyják el a böngészőjét. Semmi regisztráció, semmi kiküldés szerverre: tesztel, lát, dönt. És ha az előrejelzést a valódi könyvelésére szeretné kötni, megépítjük Önnek.',
  },

  'outils.desc.diag.title': {
    en: 'Is your company ready for AI?',
    fr: 'Votre entreprise est-elle prête pour l’IA ?',
    hu:
      'Készen áll a cége az MI-re?',
  },
  'outils.desc.diag.p1': {
    en: 'Everyone talks about AI, but few owners know where it would start inside their own company. Our AI Diagnostic answers one question: are you really ready? Twelve honest questions across three pillars (clear process, reliable data, team adoption) give you a score per pillar and a straight verdict.',
    fr: 'L’IA, tout le monde en parle, mais peu de dirigeants savent par où commencer chez eux. Notre Diagnostic IA répond à une question simple : votre entreprise est-elle vraiment prête ? En 12 questions honnêtes, réparties sur 3 piliers (processus clairs, données fiables, adoption par les équipes), vous obtenez un score par pilier et un verdict franc.',
    hu:
      'Az MI-ről mindenki beszél, de kevés vezető tudja, hol kezdődne a saját cégében. Az MI-diagnosztikánk egyetlen kérdésre válaszol: valóban készen állnak? Tizenkét őszinte kérdés három pillér mentén (világos folyamatok, megbízható adatok, a csapat elfogadása) pillérenkénti pontszámot és őszinte ítéletet ad.',
  },
  'outils.desc.diag.p2': {
    en: 'In two minutes, with no jargon and no signup, you see where AI would save you real hours and where it would just be a gadget, with one concrete first step aimed at your weakest pillar. An honest starting point, not a brochure.',
    fr: 'En 2 minutes, sans jargon et sans inscription, vous voyez où l’IA vous ferait gagner de vraies heures, et où ce serait juste un gadget, avec un premier pas concret adapté à votre point le plus faible. Un point de départ honnête, pas une brochure.',
    hu:
      'Két perc alatt, szakzsargon és regisztráció nélkül látja, hol spórolna Önnek az MI valódi órákat, és hol lenne csupán kütyü, egy konkrét első lépéssel a leggyengébb pillérére szabva. Őszinte kiindulópont, nem brosúra.',
  },
  'outils.desc.diag.link': { en: 'Take the test →', fr: 'Faire le test →', hu: 'Teszt kitöltése →' },

  'outils.desc.actifs.title': {
    en: 'Free asset and equipment management software.',
    fr: 'Un logiciel de gestion de parc et d’actifs gratuit.',
    hu:
      'Ingyenes eszköz- és vagyonnyilvántartó szoftver.',
  },
  'outils.desc.actifs.p1': {
    en: 'Computers, vehicles, machines, furniture: in a company that grows, you end up not knowing who has what, what is still under warranty, or when to replace it. NateSystem Asset Management is a free tracking tool that brings all your equipment into one place, with its condition, who holds it and what it is worth.',
    fr: 'Ordinateurs, véhicules, machines, mobilier : dans une PME qui grandit, on finit par ne plus savoir qui a quoi, ni ce qui est encore sous garantie, ni quand remplacer. NateSystem Gestion d’actifs est un logiciel de gestion de parc gratuit qui centralise tout votre matériel au même endroit, avec son état, son affectation et sa valeur.',
    hu:
      'Számítógépek, járművek, gépek, bútorok: egy növekvő cégnél előbb-utóbb senki nem tudja, kinél mi van, mi van még garanciában, és mikor kell cserélni. A NateSystem Eszköznyilvántartás ingyenes követőeszköz, amely minden eszközét egy helyre hozza, az állapotával, a felhasználójával és az értékével együtt.',
  },
  'outils.desc.actifs.p2': {
    en: 'Depreciation worked out automatically, end-of-life and replacement alerts, history per item: you stop steering your equipment from a spreadsheet nobody keeps up to date. The demo runs on made-up data, open access, no signup.',
    fr: 'Amortissements calculés automatiquement, alertes de fin de vie et de remplacement, historique par équipement : vous arrêtez de piloter votre parc dans un tableur qui n’est jamais à jour. La démo tourne sur des données fictives, en accès direct, sans inscription.',
    hu:
      'Automatikusan számolt értékcsökkenés, élettartam- és csereriasztások, eszközönkénti előzmények: nem kell tovább olyan táblázatból irányítania a parkját, amelyet senki nem tart naprakészen. A demó kitalált adatokon fut, szabad hozzáféréssel, regisztráció nélkül.',
  },
  'outils.desc.actifs.p3': {
    en: 'It is the same engine we adapt to our clients’ real equipment. If you want to track your own categories, your depreciation rules and your alerts, that is exactly what we build.',
    fr: 'C’est le même moteur qu’on adapte au parc réel de nos clients. Si vous voulez suivre vos propres catégories, vos règles d’amortissement et vos alertes, c’est exactement ce qu’on construit sur-mesure.',
    hu:
      'Ugyanaz a motor, amelyet az ügyfeleink valódi eszközparkjára szabunk. Ha a saját kategóriáit, értékcsökkenési szabályait és riasztásait szeretné követni, pontosan ezt építjük meg.',
  },

  /* Bloc conversion, bas de page. */
  'outils.conv.titlePrefix': { en: 'Need a tool built for ', fr: 'Besoin d’un outil taillé pour ', hu: 'Eszközre van szüksége, amely ' },
  'outils.conv.titleAccent': { en: 'your trade', fr: 'votre métier', hu: 'az Ön szakmájára készül' },
  'outils.conv.titleSuffix': { en: '?', fr: ' ?', hu: '?' },
  'outils.conv.sub': {
    en: 'These free tools are public versions of what we build. At NateSystem we develop the custom software that matches exactly how your business runs. A free call to talk it through, no commitment.',
    fr: 'Ces outils gratuits sont des versions publiques de ce qu’on construit. Chez NateSystem, on développe le logiciel sur-mesure qui colle exactement à votre activité. Un appel offert pour en parler, sans engagement.',
    hu:
      'Ezek az ingyenes eszközök nyilvános változatai annak, amit építünk. A NateSystemnél azt az egyedi szoftvert fejlesztjük, amely pontosan illeszkedik a működéséhez. Egy ingyenes hívás, hogy átbeszéljük, kötelezettség nélkül.',
  },
  'outils.conv.cta': { en: 'Book a free call', fr: 'Réserver un appel gratuit', hu: 'Ingyenes hívás foglalása' },

  /* ═══════════════════════════════════════════════════════════════════════
     /outils/pret-pour-lia · /en/outils/pret-pour-lia — LE DIAGNOSTIC IA

     Chrome du test (titres, boutons, verdicts affichés). Les 12 questions,
     les piliers et les recommandations vivent dans `scoring.ts`, qui les sert
     dans les deux langues : c’est de la donnée, pas de l’interface.
     ═══════════════════════════════════════════════════════════════════════ */
  'diag.intro.label': { en: 'AI Diagnostic · 2 min · free', fr: 'Diagnostic IA · 2 min · gratuit', hu: 'MI-diagnosztika · 2 perc · ingyenes' },
  'diag.intro.titlePrefix': { en: 'Is your company ', fr: 'Votre entreprise est-elle ', hu: 'Készen áll a cége ' },
  'diag.intro.titleAccent': { en: 'ready for AI?', fr: 'prête pour l’IA\u00A0?', hu: 'az MI-re?' },
  'diag.intro.sub': {
    en: 'Most companies are not held back by AI, but by what sits underneath it. Twelve honest questions show you where you really stand, and what to start with.',
    fr: 'La plupart des entreprises ne sont pas bloquées par l’IA, mais par ce qu’il y a en dessous. En 12 questions honnêtes, voyez où vous en êtes vraiment, et par quoi commencer.',
    hu:
      'A legtöbb céget nem az MI akasztja meg, hanem az, ami alatta van. Tizenkét őszinte kérdés megmutatja, hol tart valójában, és mivel érdemes kezdenie.',
  },
  'diag.intro.meta': { en: '12 questions · about 2 minutes · no signup', fr: '12 questions · ~2 minutes · sans inscription', hu: '12 kérdés · nagyjából 2 perc · regisztráció nélkül' },
  'diag.intro.cta': { en: 'Start the test', fr: 'Commencer le test', hu: 'Teszt indítása' },
  'diag.intro.note': {
    en: 'Answer straight: the test is worth nothing if you lie to yourself.',
    fr: 'Répondez franchement : le test ne sert à rien si vous vous mentez à vous-même.',
    hu:
      'Válaszoljon őszintén: a teszt semmit nem ér, ha magának hazudik.',
  },

  'diag.quiz.pillar': { en: 'Pillar', fr: 'Pilier', hu: 'Pillér' },
  'diag.quiz.back': { en: 'Back', fr: 'Précédent', hu: 'Vissza' },

  'diag.result.label': { en: 'Your result', fr: 'Votre résultat', hu: 'Az Ön eredménye' },
  'diag.result.total': { en: 'Overall score', fr: 'Score global', hu: 'Összpontszám' },
  'diag.result.badge.red': { en: 'Strengthen this first', fr: 'À consolider d’abord', hu: 'Ezt kell először megerősíteni' },
  'diag.result.badge.orange': { en: 'Solid base', fr: 'Bonne base', hu: 'Szilárd alap' },
  'diag.result.badge.green': { en: 'Ready', fr: 'Prêt', hu: 'Készen áll' },
  'diag.result.priority': { en: 'Your priority · Pillar', fr: 'Votre priorité · Pilier', hu: 'Az Ön prioritása · Pillér' },
  'diag.result.firstStep': { en: 'Your first step', fr: 'Votre premier pas', hu: 'Az első lépése' },
  'diag.result.ctaTitle': { en: 'Want to go through your result together?', fr: 'On regarde votre diagnostic ensemble ?', hu: 'Átnézzük együtt az eredményét?' },
  'diag.result.ctaSub': {
    en: 'Get your full diagnostic and 15 minutes with me to talk it over. We look concretely at where to start, no commitment. Even if we never work together.',
    fr: 'Recevez votre diagnostic complet et 15 min avec moi pour en parler. On voit concrètement par où commencer, sans engagement. Même si on ne travaille pas ensemble.',
    hu:
      'Megkapja a teljes diagnosztikáját, és 15 percet velem, hogy átbeszéljük. Konkrétan megnézzük, hol érdemes kezdeni, kötelezettség nélkül. Akkor is, ha soha nem dolgozunk együtt.',
  },
  'diag.result.ctaBtn': { en: 'Book my 15 minutes', fr: 'Réserver mes 15 min', hu: 'Lefoglalom a 15 percet' },
  'diag.result.reset': { en: 'Take the test again', fr: 'Refaire le test', hu: 'Teszt újrakezdése' },
  'diag.result.footText': { en: 'Want a tool built for your trade?', fr: 'Envie d’un outil taillé pour votre métier ?', hu: 'Szeretne egy, a szakmájára szabott eszközt?' },
  'diag.result.footLink': { en: 'See all our free tools', fr: 'Voir tous nos outils gratuits', hu: 'Összes ingyenes eszközünk' },

  'diag.gauge.red': { en: 'Needs work', fr: 'À renforcer', hu: 'Erősítendő' },
  'diag.gauge.orange': { en: 'Almost there', fr: 'À consolider', hu: 'Majdnem megvan' },
  'diag.gauge.green': { en: 'Solid', fr: 'Solide', hu: 'Szilárd' },

  'diag.email.placeholder': { en: 'Get the result by email (optional)', fr: 'Recevoir le résultat par mail (optionnel)', hu: 'Kérem az eredményt e-mailben (nem kötelező)' },
  'diag.email.aria': { en: 'Your email (optional)', fr: 'Votre e-mail (optionnel)', hu: 'Az Ön e-mail-címe (nem kötelező)' },
  'diag.email.send': { en: 'Send', fr: 'Envoyer', hu: 'Küldés' },
  'diag.email.sending': { en: 'Sending…', fr: 'Envoi…', hu: 'Küldés…' },
  'diag.email.sent': { en: 'Noted, your result is on its way by email.', fr: 'C’est noté, vous recevrez votre résultat par mail.', hu: 'Megvan, az eredményét e-mailben küldjük.' },

  /* ═══════════════════════════════════════════════════════════════════════
     /services · /en/services — LA PAGE QUI VEND
     ═══════════════════════════════════════════════════════════════════════ */
  'svc.hero.label': { en: 'Our services', fr: 'Nos services', hu: 'Szolgáltatásaink' },
  'svc.hero.titlePrefix': { en: 'Whatever your trade, ', fr: 'Quel que soit votre métier, ', hu: 'Bármi is a szakmája, ' },
  'svc.hero.titleAccent': { en: 'the same result.', fr: 'le même résultat.', hu: 'ugyanaz az eredmény.' },
  'svc.hero.sub': {
    en: 'We build the infrastructure that wins you time, signs more and bigger deals, keeps your clients and turns your expertise into growth. The technology and the modules bend to how you work, never the other way round.',
    fr: 'On monte l’infrastructure qui vous fait gagner du temps, signer plus et mieux, garder vos clients et transformer votre expertise en croissance. La techno et les modules s’adaptent à votre réalité, jamais l’inverse.',
    hu:
      'Azt az infrastruktúrát építjük, amely időt nyer Önnek, több és nagyobb üzletet hoz, megtartja az ügyfeleit, és a szaktudását növekedéssé alakítja. A technológia és a modulok igazodnak ahhoz, ahogyan Ön dolgozik, sosem fordítva.',
  },

  'svc.outcomes.label': { en: 'What it changes', fr: 'Ce que ça change', hu: 'Amit megváltoztat' },
  'svc.outcomes.titlePrefix': { en: 'The same base of results, ', fr: 'Le même socle de résultats, ', hu: 'Ugyanaz az eredményalap, ' },
  'svc.outcomes.titleAccent': { en: 'in any company.', fr: 'dans toute entreprise.', hu: 'bármelyik cégben.' },

  'svc.out.time.title': { en: 'Time back', fr: 'Du temps récupéré', hu: 'Visszanyert idő' },
  'svc.out.time.desc': {
    en: 'The repetitive work runs on its own. Your teams stop retyping, chasing and searching, and get back to what actually matters.',
    fr: 'Le répétitif tourne seul. Vos équipes arrêtent de recopier, relancer et chercher, et se concentrent sur ce qui compte vraiment.',
    hu:
      'Az ismétlődő munka magától fut. A csapatai abbahagyják az újragépelést, az utánajárást és a keresgélést, és visszatérnek ahhoz, ami tényleg számít.',
  },
  'svc.out.deals.title': { en: 'More deals, bigger ones', fr: 'Plus de deals, plus gros', hu: 'Több üzlet, nagyobbak' },
  'svc.out.deals.desc': {
    en: 'A clean pipeline, follow-ups that send themselves, nothing slipping through. You sign more, and you sign better.',
    fr: 'Un pipeline propre, des relances qui partent toutes seules, plus rien qui passe à la trappe. Vous signez plus, et mieux.',
    hu:
      'Tiszta pipeline, magától induló utánkövetés, semmi nem csúszik ki. Többet ír alá, és jobbat.',
  },
  'svc.out.retain.title': { en: 'Clients who stay', fr: 'Des clients qui restent', hu: 'Ügyfelek, akik maradnak' },
  'svc.out.retain.desc': {
    en: 'Follow-up that drops nothing. Your clients feel it, and they stay with you longer.',
    fr: 'Un suivi sans faille : rien ne se perd, vos clients le sentent, et ils continuent avec vous plus longtemps.',
    hu:
      'Utánkövetés, amely semmit nem ejt el. Az ügyfelei megérzik, és tovább maradnak Önnél.',
  },
  'svc.out.exp.title': { en: 'A better client experience', fr: 'Une meilleure expérience client', hu: 'Jobb ügyfélélmény' },
  'svc.out.exp.desc': {
    en: 'Faster answers, files in order, no more “let me get back to you”. You look like a company that has it together.',
    fr: 'Réponses plus rapides, dossiers au carré, fini le « je vous rappelle ». L’image d’une boîte qui gère.',
    hu:
      'Gyorsabb válaszok, rendben tartott dossziék, vége a „majd visszahívom”-nak. Úgy néz ki, mint egy cég, amelynél minden a helyén van.',
  },
  'svc.out.align.title': { en: 'A team on the same page', fr: 'Une équipe alignée', hu: 'Egy csapat, egy oldalon' },
  'svc.out.align.desc': {
    en: 'Everyone on the same data, in one place and up to date. No more versions overwriting each other, no more “where was that again?”.',
    fr: 'Tout le monde sur la même donnée, centralisée et à jour. Plus de versions qui s’écrasent ni de « c’était où, déjà ? ».',
    hu:
      'Mindenki ugyanazon az adaton, egy helyen és naprakészen. Nincs többé egymást felülíró verzió, nincs többé „hol is volt ez?”.',
  },
  'svc.out.know.title': { en: 'Your know-how, kept', fr: 'Votre savoir capitalisé', hu: 'A tudása megőrizve' },
  'svc.out.know.desc': {
    en: 'What your experts know stops sitting in their heads and in scattered documents. Captured, structured and searchable, it becomes an asset you can reuse.',
    fr: 'Le savoir de vos experts ne dort plus dans leurs têtes ni dans des docs éparpillés. Capté, structuré et cherchable, il devient un vrai actif réutilisable.',
    hu:
      'Amit a szakértői tudnak, többé nem a fejükben és szétszórt dokumentumokban ül. Összegyűjtve, rendszerezve és kereshetően újrahasznosítható vagyonná válik.',
  },
  'svc.outcomes.note': {
    en: 'That is the base, true for any company. The rest depends on how you actually work: an AI search engine over your documentation, an agent that chases your quotes, a portal for your clients. We start from your trade. We do not sell a fixed recipe.',
    fr: 'Ça, c’est le socle, vrai pour n’importe quelle entreprise. Le reste dépend de votre réalité : un moteur de recherche IA sur votre documentation, un agent qui relance vos devis, un portail pour vos clients… On part de votre métier. On ne vend pas une recette figée.',
    hu:
      'Ez az alap, és bármelyik cégre igaz. A többi attól függ, ahogyan Ön valójában dolgozik: MI-alapú kereső a dokumentációján, ágens, amely az ajánlatai után megy, portál az ügyfeleinek. A szakmájából indulunk ki. Nem árulunk kész receptet.',
  },

  'svc.how.label': { en: 'How we get there', fr: 'Comment on y arrive', hu: 'Hogyan jutunk el oda' },
  'svc.how.titlePrefix': { en: 'One infrastructure, ', fr: 'Une infrastructure, ', hu: 'Egyetlen infrastruktúra, ' },
  'svc.how.titleAccent': { en: 'built for you.', fr: 'montée pour vous.', hu: 'Önnek építve.' },

  'svc.cta.title': { en: 'We start from your trade.', fr: 'On part de votre métier.', hu: 'A szakmájából indulunk ki.' },
  'svc.cta.sub': {
    en: 'A free call. We look at how your business runs and tell you plainly what would gain you the most, and how we would build it. You leave with a clear plan, even if we never work together.',
    fr: 'Un appel offert. On regarde votre activité et on vous dit, concrètement, ce qui vous ferait gagner le plus, et comment on le construirait. Vous repartez avec un plan clair, même si on ne travaille pas ensemble.',
    hu:
      'Egy ingyenes hívás. Megnézzük, hogyan működik a cége, és kerek perec megmondjuk, mivel nyerne a legtöbbet, és hogyan építenénk meg. Világos tervvel távozik, akkor is, ha soha nem dolgozunk együtt.',
  },
} as const

export type TranslationKey = keyof typeof translations
