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
  'mega.sectors': { en: 'By industry', fr: 'Par secteur', hu: 'Ágazat szerint' },
  'mega.cases': { en: 'Client cases', fr: 'Cas clients', hu: 'Ügyfélesetek' },
  'nav.svc.sprint': { en: 'Operational consulting', fr: 'Consulting opérationnel', hu: 'Operatív tanácsadás' },
  'nav.svc.sprintDesc': { en: 'We map your processes and find where you gain the most', fr: 'On cartographie vos process et on repère où vous gagnez le plus', hu: 'Feltérképezzük a folyamatait, és megmutatjuk, hol nyer a legtöbbet' },
  'nav.svc.logiciel': { en: 'Custom system', fr: 'Système sur-mesure', hu: 'Egyedi rendszer' },
  'nav.svc.logicielDesc': { en: 'The software or cockpit built for your trade', fr: 'Le logiciel ou cockpit taillé pour votre métier', hu: 'A szoftver vagy vezérlőpult, amit az Ön szakmájára szabunk' },
  'nav.svc.ia': { en: 'AI & automation', fr: 'IA et automatisation', hu: 'MI és automatizálás' },
  'nav.svc.iaDesc': { en: 'AI and automation where they replace real hours', fr: 'L\'IA et l\'automatisation là où elles remplacent de vraies heures', hu: 'MI és automatizálás ott, ahol valódi munkaórákat vált ki' },
  'nav.svc.audit': { en: 'Training & support', fr: 'Formation & accompagnement', hu: 'Képzés és támogatás' },
  'nav.svc.auditDesc': { en: 'We train your teams all the way to autonomy', fr: 'On forme vos équipes jusqu\'à l\'autonomie complète', hu: 'Betanítjuk a csapatát a teljes önállóságig' },
  'nav.res.glossary': { en: 'Glossary', fr: 'Glossaire', hu: 'Szójegyzék' },
  'nav.res.glossaryDesc': { en: 'Plain-word definitions', fr: 'Les définitions en clair', hu: 'A fogalmak érthetően' },
  'nav.res.pricing': { en: 'Pricing', fr: 'Prix', hu: 'Árak' },
  'nav.res.pricingDesc': { en: 'How a project is priced', fr: 'Comment un projet se chiffre', hu: 'Hogyan alakul egy projekt ára' },
  'nav.res.diag': { en: 'AI Diagnostic', fr: 'Diagnostic IA', hu: 'MI-diagnosztika' },
  'nav.res.diagDesc': { en: 'Measure what you lose each month', fr: 'Mesurez ce que vous perdez chaque mois', hu: 'Mérje meg, mennyit veszít havonta' },

  // Hero
  'hero.label': { en: 'Digital structuring · Custom software · AI integration', fr: 'Structuration digitale · Logiciel sur-mesure · Intégration IA', hu: 'Digitális strukturálás · Egyedi szoftver · MI-integráció' },
  'hero.titlePrefix': { en: 'We build your custom software & AI systems that boost your', fr: 'On construit vos logiciels & systèmes IA sur-mesure qui vous font gagner en', hu: 'Egyedi szoftvereket és MI-rendszereket építünk, amelyek növelik az Ön' },
  // Rotating words (pipe-separated, cycled in the hero). Final benefits the ICP desires, not the mechanisms.
  'hero.titleWords': { en: 'profitability|productivity|responsiveness|reliability', fr: 'rentabilité|productivité|réactivité|fiabilité', hu: 'jövedelmezőségét|termelékenységét|reakcióképességét|megbízhatóságát' },
  'hero.sub': {
    en: 'We build the custom infrastructure that unlocks the value locked in your teams, your data and your know-how, and turns it into growth and a real competitive edge: more clients, a better experience, experts who create instead of repeat. Powered by AI, it evolves by your side, just like us.',
    fr: 'On construit l\'infrastructure sur-mesure qui libère la valeur enfermée dans vos équipes, vos données et votre savoir-faire, et la transforme en croissance et en vrai avantage concurrentiel : plus de clients, une meilleure expérience, des experts qui créent au lieu de répéter. Propulsée par l\'IA, elle évolue à vos côtés, comme nous.',
    hu:
      'Azt az egyedi infrastruktúrát építjük meg, amely felszabadítja a csapataiban, az adataiban és a szaktudásában rejlő értéket, és növekedéssé, valódi versenyelőnnyé alakítja: több ügyfél, jobb élmény, olyan szakértők, akik alkotnak ahelyett, hogy ismételnének. MI hajtja, és Önnel együtt fejlődik, ahogy mi is.',
  },
  'hero.aiNote': { en: 'AI built in where it replaces real hours, never as decoration.', fr: 'IA intégrée là où elle remplace de vraies heures, jamais en décoration.', hu: 'MI ott, ahol valódi munkaórákat vált ki, sosem dekorációként.' },
  'hero.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  'hero.secondary': { en: 'See how it works', fr: 'Voir comment ça marche', hu: 'Nézze meg, hogyan működik' },
  'hero.trusted': { en: 'Already building with', fr: 'Déjà à l\'œuvre avec', hu: 'Már velük dolgozunk' },

  // Product Showcase (mockup juste après le hero)
  'showcase.label': { en: 'A system we built', fr: 'Un système qu\'on a construit', hu: 'Egy rendszer, amit megépítettünk' },
  'showcase.caption': {
    en: 'Real estate agency · Daily pilot for leads, mandates and latent fees.',
    fr: 'Agence immobilière · Pilotage quotidien des leads, mandats et honoraires latents.',
    hu:
      'Ingatlaniroda · Leadek, megbízások és függő jutalékok napi szintű irányítása.',
  },
  'showcase.altText': { en: 'NateSystem dashboard mockup for a real estate agency', fr: 'Mockup NateSystem du tableau de bord pour une agence immobilière', hu: 'NateSystem irányítópult-makett egy ingatlanirodának' },

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
  'process.label': { en: 'Our method', fr: 'Notre méthode', hu: 'Módszerünk' },
  'process.title': { en: 'A clear path,', fr: 'Une méthode claire,', hu: 'Világos módszer,' },
  'process.titleAccent': { en: 'no surprises.', fr: 'sans surprise.', hu: 'meglepetések nélkül.' },
  'process.sub': {
    en: 'You always know where we stand and where we\'re going. Four steps, each with a concrete deliverable. And we don\'t consider the job done until your teams are autonomous.',
    fr: 'Vous savez toujours où on en est et où on va. Quatre étapes, un livrable concret à chacune. Et on ne considère la mission terminée que lorsque vos équipes sont autonomes.',
    hu:
      'Mindig tudja, hol tartunk és merre megyünk. Négy lépés, mindegyiknél kézzelfogható eredménnyel. És a munkát csak akkor tekintjük késznek, amikor a csapatai önállóak.',
  },
  'process.step1': { en: 'The Diagnostic: mapping & analysis', fr: 'Le Diagnostic : cartographie & analyse', hu: 'A diagnosztika: feltérképezés és elemzés' },
  'process.step1Duration': { en: 'Free discovery call', fr: 'Appel découverte offert', hu: 'Ingyenes felfedező hívás' },
  'process.step1Desc': {
    en: 'We map how your whole business runs, from a prospect’s arrival to a client who refers you: acquisition, delivery, internal management. We examine every step in detail and as a whole, to pinpoint where you lose time and money. You leave with a clear map of your workflows, and a first clickable prototype of your future tool, even if we don’t work together.',
    fr: 'On cartographie tout le fonctionnement de votre entreprise, de l’arrivée d’un prospect au client qui recommande : acquisition, delivery, gestion interne. On examine chaque étape en détail et en vue d’ensemble, pour repérer où vous perdez du temps et de l’argent. Vous repartez avec une carte claire de vos workflows, et un premier prototype cliquable de votre futur outil, même si on ne travaille pas ensemble.',
    hu:
      'Feltérképezzük a cége teljes működését, az érdeklődő beérkezésétől az ajánló ügyfélig: ügyfélszerzés, szállítás, belső irányítás. Minden lépést megvizsgálunk részleteiben és egészében is, hogy pontosan lássuk, hol veszít időt és pénzt. Egy világos folyamattérképpel távozik, és a jövőbeli eszközének első kattintható prototípusával, akkor is, ha nem dolgozunk együtt.',
  },
  'process.step2': { en: 'Then: custom build', fr: 'Ensuite : développement sur-mesure', hu: 'Utána: egyedi fejlesztés' },
  'process.step2Duration': { en: '4 to 8 weeks', fr: '4 à 8 semaines', hu: '4-8 hét' },
  'process.step2Desc': {
    en: 'We build the software, portal or cockpit tailored to your processes, and unify your data into a single source, live in real time. We add AI and automation only where they save you real hours. A usable MVP is ready in under 30 days, the full build in 30 to 60. Price and timeline fixed up front, a check-in every week.',
    fr: 'On construit le(s) logiciel(s), portail ou cockpit taillés pour vos process, et on unifie vos données dans une seule source, à jour en temps réel. On y ajoute l’IA et l’automatisation uniquement là où elles vous font gagner de vraies heures. Un MVP utilisable est prêt en moins de 30 jours, le développement complet en 30 à 60. Prix et délai fixés d’avance, point chaque semaine.',
    hu:
      'Megépítjük a folyamataira szabott szoftvert, portált vagy vezérlőpultot, és az adatait egyetlen, valós időben frissülő forrásba vonjuk össze. MI-t és automatizálást csak ott teszünk bele, ahol valódi órákat nyer vele. Használható MVP 30 napon belül, a teljes fejlesztés 30-60 nap. Ár és határidő előre rögzítve, heti egyeztetéssel.',
  },
  'process.step3': { en: 'Then: training & support', fr: 'Ensuite : formation & accompagnement', hu: 'Utána: képzés és támogatás' },
  'process.step3Duration': { en: 'Until full autonomy', fr: 'Jusqu\'à l\'autonomie complète', hu: 'A teljes önállóságig' },
  'process.step3Desc': {
    en: 'We test everything before launch. Then we train every person on your teams, from the executive to the field, until they use it on their own, without us. Nobody is left behind.',
    fr: 'On teste tout avant de lancer. Puis on forme chaque personne de vos équipes, du dirigeant au terrain, jusqu\'à ce qu\'ils s\'en servent seuls, sans nous. Personne n\'est laissé de côté.',
    hu:
      'Indulás előtt mindent letesztelünk. Aztán betanítjuk a csapatai minden tagját, a vezetőtől a terepen dolgozóig, amíg nélkülünk is használják. Senki nem marad le.',
  },
  'process.step4': { en: 'Finally: optimise & improve', fr: 'Enfin : optimisation & amélioration continue', hu: 'Végül: optimalizálás és folyamatos fejlesztés' },
  'process.step4Duration': { en: 'Ongoing · optional', fr: 'En continu · optionnel', hu: 'Folyamatos · választható' },
  'process.step4Desc': {
    en: 'After a few weeks of real use, we look at what works and adjust. And if you want, we stay by your side to grow your software at your pace.',
    fr: 'Après quelques semaines d\'usage, on regarde ce qui marche et on ajuste. Et si vous voulez, on reste à vos côtés pour faire évoluer votre logiciel à votre rythme.',
    hu:
      'Néhány hét valódi használat után megnézzük, mi működik, és igazítunk rajta. Ha kéri, mellette maradunk, és a saját tempójában fejlesztjük tovább a szoftverét.',
  },
  'process.step1Highlight': { en: '1 to 15 days', fr: '1 à 15 jours', hu: '1-15 nap' },
  'process.step2Highlight': { en: '30 to 60 days', fr: '30 à 60 jours', hu: '30-60 nap' },
  'process.step3Highlight': { en: 'Until full autonomy', fr: 'Jusqu\'à l\'autonomie complète', hu: 'A teljes önállóságig' },
  'process.step4Highlight': { en: 'Retainer', fr: 'Forfait', hu: 'Átalánydíj' },
  'process.guarantee1': { en: 'Guaranteed deadlines or -10%/week late', fr: 'Délais garantis ou -10%/semaine de retard', hu: 'Garantált határidő, vagy -10% minden késett hétért' },
  'process.guarantee2': { en: 'ROI guarantee over 12 months', fr: 'Garantie ROI sur 12 mois', hu: 'Megtérülési garancia 12 hónapra' },
  'process.guarantee3': { en: 'Full source code delivered · Permanent ownership', fr: 'Code source complet livré · Propriété définitive', hu: 'Teljes forráskód átadva · Végleges tulajdonjog' },

  // CTA Final
  'cta.label': { en: 'Let\'s work together', fr: 'Travaillons ensemble', hu: 'Dolgozzunk együtt' },
  'cta.title': { en: 'Tell us what you\'re building.', fr: 'Racontez-nous ce que vous construisez.', hu: 'Mesélje el, mit épít.' },
  'cta.titleAccent': { en: 'We\'ll tell you how to run it.', fr: 'On vous dira comment le faire tourner.', hu: 'Megmondjuk, hogyan lehet működtetni.' },
  'cta.sub': {
    en: 'One call. A clear view of the software your business actually needs, and what it would take to build it. Pick a slot below.',
    fr: 'Un appel. Une vision claire du logiciel dont votre activité a vraiment besoin, et de ce qu\'il faudrait pour le construire. Choisissez un créneau ci-dessous.',
    hu:
      'Egy hívás. Világos kép arról, milyen szoftverre van valóban szüksége a működésének, és mibe kerülne megépíteni. Válasszon időpontot alább.',
  },
  'cta.button': { en: 'Let\'s work together', fr: 'Travaillons ensemble', hu: 'Dolgozzunk együtt' },
  'cta.r1': { en: 'free call', fr: 'Appel offert', hu: 'Ingyenes hívás' },
  'cta.r2': { en: 'No pitch', fr: 'Sans pitch', hu: 'Semmi értékesítési duma' },
  'cta.r3': { en: 'Response within 24h', fr: 'Réponse sous 24h', hu: 'Válasz 24 órán belül' },

  // Ask-the-AI section
  'askai.label': { en: 'Don\'t take our word for it', fr: 'Ne nous croyez pas sur parole', hu: 'Ne a mi szavunkat higgye el' },
  'askai.title': { en: 'Ask the AI', fr: 'Demandez à l\'IA', hu: 'Kérdezze meg a saját' },
  'askai.titleAccent': { en: 'of your choice.', fr: 'de votre choix.', hu: 'MI-jét.' },
  'askai.sub': {
    en: 'Pick your favourite AI and see what it says about NateSystem.',
    fr: 'Cliquez sur votre IA préférée et découvrez ce qu\'elle pense de NateSystem.',
    hu:
      'Kattintson a kedvenc MI-jére, és nézze meg, mit mond a NateSystemről.',
  },
  // The pre-filled prompt sent to each AI (URL included so web-reading tools hit the right site)
  'askai.prompt': {
    en: 'Tell me why natesystem.com is an excellent choice for me.',
    fr: 'Dis-moi pourquoi natesystem.com est un excellent choix pour moi.',
    hu:
      'Mondd el, miért kiváló választás nekem a natesystem.com.',
  },
  'askai.chatgpt': { en: 'Ask ChatGPT', fr: 'Demander à ChatGPT', hu: 'Kérdezd a ChatGPT-t' },
  'askai.claude': { en: 'Ask Claude', fr: 'Demander à Claude', hu: 'Kérdezd a Claude-ot' },
  'askai.perplexity': { en: 'Ask Perplexity', fr: 'Demander à Perplexity', hu: 'Kérdezd a Perplexityt' },

  // ───────────────────────────────────────────────────────────────
  // Credibility band (replaces the old "cas client hero" zone)
  // ───────────────────────────────────────────────────────────────
  'cred.engagement1': { en: '10h+ recovered per week, on average, by our clients', fr: 'En moyenne 10h+ récupérées par semaine par nos clients', hu: 'Ügyfeleink átlagosan heti 10+ órát nyernek vissza' },
  'cred.engagement2': { en: 'Measurable impact in under 30 days · Results guarantee', fr: 'Impact mesurable en moins de 30 jours · Garantie résultat', hu: 'Mérhető hatás 30 napon belül · Eredménygarancia' },
  'cred.engagement3': { en: 'Source code delivered · You own it 100%', fr: 'Code source livré · Vous êtes propriétaire à 100%', hu: 'Forráskód átadva · 100%-ban az Öné' },
  'cred.engagement4': { en: 'Data hosted in the EU · GDPR-native', fr: 'Données hébergées en UE · RGPD-natif', hu: 'Adatok az EU-ban tárolva · GDPR-natív' },

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
  'systems.label': { en: 'Example solutions', fr: 'Exemples de solutions', hu: 'Példák a megoldásainkra' },
  'systems.deployed': { en: 'Deployed.', fr: 'Déployé.', hu: 'Bevezetve.' },
  'systems.measured': { en: 'Measured.', fr: 'Mesuré.', hu: 'Megmérve.' },
  'systems.profitable': { en: 'Profitable.', fr: 'Rentabilisé.', hu: 'Megtérült.' },
  'systems.title': { en: 'Deployed in these sectors,', fr: 'Déjà déployé dans ces secteurs,', hu: 'Már ezekben az ágazatokban fut,' },
  'systems.titleAccent': { en: 'winning every day.', fr: 'rentable tous les jours.', hu: 'és minden nap hoz.' },
  'systems.sub': {
    en: 'A glimpse of what we build and run, systems that save our clients time and money, every single day.',
    fr: 'Un aperçu de ce qu\'on construit et fait tourner, des systèmes qui font gagner du temps et de l\'argent à nos clients, tous les jours.',
    hu:
      'Ízelítő abból, amit építünk és üzemeltetünk: rendszerek, amelyek minden nap időt és pénzt spórolnak az ügyfeleinknek.',
  },
  'systems.allCases': { en: 'See all our case studies', fr: 'Voir tous nos cas clients', hu: 'Összes esettanulmány megtekintése' },
  'systems.groupAI': { en: 'AI systems', fr: 'Systèmes IA', hu: 'MI-rendszerek' },
  'systems.groupSoft': { en: 'Custom software', fr: 'Logiciels métier sur-mesure', hu: 'Egyedi üzleti szoftverek' },
  'systems.tagAI': { en: 'AI integration', fr: 'Intégration IA', hu: 'MI-integráció' },
  'systems.tagSoft': { en: 'Custom software', fr: 'Logiciel métier', hu: 'Üzleti szoftver' },
  // 6 real-client logiciel métier cases (anonymized, sector tag instead of client name)
  'systems.sw1.sector': { en: 'Hospitality', fr: 'Restauration', hu: 'Vendéglátás' },
  'systems.sw2.sector': { en: 'Public university', fr: 'Université publique', hu: 'Állami egyetem' },
  'systems.sw3.sector': { en: 'Events & non-profit', fr: 'Événementiel & associatif', hu: 'Rendezvény és civil szféra' },
  'systems.sw4.sector': { en: 'Hospitality · F&B procurement', fr: 'Restauration · Achats F&B', hu: 'Vendéglátás · Beszerzés' },
  'systems.sw5.sector': { en: 'Hospitality · HR', fr: 'Restauration · RH', hu: 'Vendéglátás · HR' },
  'systems.sw6.sector': { en: 'Hospitality groups', fr: 'Groupes restauration', hu: 'Vendéglátó-csoportok' },
  'systems.sw1.title': { en: 'Restaurant ops & KPI cockpit', fr: 'Cockpit ops & KPI restauration', hu: 'Vendéglátó műveleti és KPI-vezérlőpult' },
  'systems.sw1.desc': { en: 'Live dashboard for an independent restaurant: covers, labor cost, daily KPIs, action plan suggestions powered by AI.', fr: 'Dashboard live pour un restaurant indépendant : couverts, masse salariale, KPI quotidiens, plan d\'action suggéré par l\'IA.', hu: 'Élő irányítópult egy független étteremnek: vendégszám, bérköltség, napi KPI-k, MI által javasolt cselekvési terv.' },
  'systems.sw1.metric': { en: 'Decisions made in 2 min instead of ~2h on Excel', fr: 'Décisions data en 2 min vs ~2h sur Excel', hu: 'Adatalapú döntés 2 perc alatt a táblázatos ~2 óra helyett' },
  'systems.sw2.title': { en: 'Pedagogical CRM', fr: 'CRM pédagogique', hu: 'Oktatási CRM' },
  'systems.sw2.desc': { en: 'A CRM built for higher education: student journey, internship tracking, alumni follow-up, all centralized. No more multi-spreadsheet.', fr: 'Un CRM bâti pour l\'enseignement supérieur : parcours étudiants, suivi de stages, relance alumni, tout centralisé. Fin des multi-tableurs.', hu: 'Felsőoktatásra épített CRM: hallgatói életút, gyakorlatok követése, öregdiákok utánkövetése, mind egy helyen. Vége a sok táblázatnak.' },
  'systems.sw2.metric': { en: '200+ students tracked in one tool · Adoption 90%+', fr: '200+ étudiants suivis dans un seul outil · Adoption 90%+', hu: '200+ hallgató egyetlen eszközben · 90%+ használat' },
  'systems.sw3.title': { en: 'Team & volunteer ops for events', fr: 'Gestion équipe & bénévoles événementiel', hu: 'Csapat- és önkéntes-kezelés rendezvényekhez' },
  'systems.sw3.desc': { en: 'Planning, role assignments, real-time check-ins, internal comms for 50+ volunteers, without Excel + WhatsApp chaos.', fr: 'Planning, attribution des rôles, check-in temps réel, comm interne pour 50+ bénévoles, sans Excel + WhatsApp en chaos.', hu: 'Beosztás, szerepkiosztás, valós idejű bejelentkezés, belső kommunikáció 50+ önkéntesnek, Excel- és WhatsApp-káosz nélkül.' },
  'systems.sw3.metric': { en: 'No-shows divided by 3 · Coordination time ÷ 2', fr: 'No-shows divisés par 3 · Temps de coordination ÷ 2', hu: 'Harmadára csökkent lemorzsolódás · Feleannyi koordinációs idő' },
  'systems.sw4.title': { en: 'Stock & invoice control', fr: 'Stock & contrôle de factures', hu: 'Készlet és számlaellenőrzés' },
  'systems.sw4.desc': { en: 'Real-time stock, supplier prices tracked over time, automatic detection of overcharges and double invoicing on incoming bills.', fr: 'Stock temps réel, prix fournisseurs suivis dans le temps, détection auto des surfacturations et double facturation sur les factures entrantes.', hu: 'Valós idejű készlet, beszállítói árak idősoros követése, túlszámlázás és kettős számlázás automatikus felismerése a beérkező számlákon.' },
  'systems.sw4.metric': { en: 'Estimated ~3-5% margin recovered on F&B procurement', fr: '~3-5% de marge récupérée sur les achats F&B (estimation)', hu: 'Becslés szerint 3-5% árrés visszanyerve a beszerzésen' },
  'systems.sw5.title': { en: 'HR & real-time time clock', fr: 'RH & pointeuse temps réel', hu: 'HR és valós idejű jelenlét' },
  'systems.sw5.desc': { en: 'Mobile clock-in, weekly planning, overtime tracking, payroll-ready exports. Replaces paper sheets and Excel chains.', fr: 'Pointage mobile, planning hebdo, suivi heures sup, exports prêts pour la paie. Remplace les fiches papier et les chaînes Excel.', hu: 'Mobilos beléptetés, heti beosztás, túlóra követése, bérszámfejtésre kész exportok. Kiváltja a papíralapú íveket és a táblázatláncokat.' },
  'systems.sw5.metric': { en: 'Payroll validated in 30 min instead of half a day', fr: 'Paie validée en 30 min vs une demi-journée', hu: 'Bérszámfejtés 30 perc alatt jóváhagyva, fél nap helyett' },
  'systems.sw6.title': { en: 'Reputation & reviews with agentic AI', fr: 'Réputation & avis avec IA agentique', hu: 'Hírnév és vélemények ágens MI-vel' },
  'systems.sw6.desc': { en: 'Aggregates Google, TripAdvisor, Facebook reviews. AI drafts on-brand replies. Monthly sentiment report auto-generated for each location.', fr: 'Agrège les avis Google, TripAdvisor, Facebook. L\'IA rédige des réponses dans votre ton. Synthèse mensuelle générée automatiquement par établissement.', hu: 'Összegyűjti a Google-, TripAdvisor- és Facebook-véleményeket. Az MI a márkája hangján fogalmaz választ. Havi összefoglaló automatikusan, egységenként.' },
  'systems.sw6.metric': { en: 'Review reply time ÷10 · Monthly synthesis fully auto', fr: 'Temps de réponse aux avis ÷10 · Synthèse mensuelle 100% auto', hu: 'Tizedére csökkent válaszidő · Teljesen automatikus havi összefoglaló' },
  'systems.s1.title': { en: 'Instant qualification', fr: 'Qualification instantanée', hu: 'Azonnali minősítés' },
  'systems.s1.desc': { en: 'An agent that answers, qualifies and dispatches a lead in under 5 minutes, 24/7.', fr: 'Un agent qui répond, qualifie et dispatche un lead en moins de 5 min, 24/7.', hu: 'Ágens, amely 5 percen belül válaszol, minősíti és továbbítja az érdeklődőt, a nap 24 órájában.' },
  'systems.s1.metric': { en: '+10% conversion = +€20K/year on 100 leads at €2K basket', fr: '+10% conversion = +20 K€/an sur 100 leads à 2 K€', hu: '+10% konverzió = +20 E€/év 100 érdeklődőn, 2 E€-s kosárral' },
  'systems.s2.title': { en: 'Invisible back-office', fr: 'Back-office invisible', hu: 'Láthatatlan háttériroda' },
  'systems.s2.desc': { en: 'Document reading, recopying, classifying: half of an admin role absorbed.', fr: 'Lecture de documents, recopie, classement : la moitié d\'un poste admin absorbée.', hu: 'Dokumentumolvasás, átmásolás, iktatás: egy adminisztratív állás fele felszívva.' },
  'systems.s2.metric': { en: 'ROI in 2 months on a €40K/year admin role', fr: 'ROI en 2 mois sur un poste à 40 K€/an', hu: 'Megtérülés 2 hónap alatt egy 40 E€/év-es admin poszton' },
  'systems.s3.title': { en: 'Automatic follow-up', fr: 'Relance commerciale automatique', hu: 'Automatikus értékesítési utánkövetés' },
  'systems.s3.desc': { en: '3 to 5 personalised messages over 2-3 weeks, that stop the moment the prospect replies.', fr: '3 à 5 messages personnalisés sur 2-3 semaines, qui s\'arrêtent dès que le prospect répond.', hu: '3-5 személyre szabott üzenet 2-3 hét alatt, amely leáll abban a pillanatban, amikor az érdeklődő válaszol.' },
  'systems.s3.metric': { en: '4% → 12% conversion at our B2B consulting clients', fr: '4% → 12% conversion chez nos clients consultants B2B', hu: '4% → 12% konverzió a B2B tanácsadó ügyfeleinknél' },
  'systems.s4.title': { en: 'Dormant contact reactivation', fr: 'Réactivation des contacts dormants', hu: 'Alvó kapcsolatok újraaktiválása' },
  'systems.s4.desc': { en: 'Former clients, ghost prospects, inactive subscribers: we wake them up without ad budget.', fr: 'Anciens clients, prospects fantômes, abonnés inactifs : on les réveille sans budget pub.', hu: 'Régi ügyfelek, eltűnt érdeklődők, inaktív feliratkozók: felébresztjük őket hirdetési költés nélkül.' },
  'systems.s4.metric': { en: '+€45K/year on 500 contacts at 3% reconversion', fr: '+45 K€/an sur 500 contacts à 3% de reconversion', hu: '+45 E€/év 500 kapcsolaton, 3%-os visszatéréssel' },
  'systems.s5.title': { en: 'Automatic internal reporting', fr: 'Reporting interne automatique', hu: 'Automatikus belső riportálás' },
  'systems.s5.desc': { en: 'CRM + accounting + project collection, analysis, push to Slack or Teams. No new dashboard.', fr: 'Collecte CRM + compta + projet, analyse, push dans Slack ou Teams. Pas de nouveau dashboard.', hu: 'CRM, könyvelés és projektadatok gyűjtése, elemzése, kiküldése Slackre vagy Teamsre. Nincs új irányítópult.' },
  'systems.s5.metric': { en: '500 hours/year recovered at a 50-call/day construction SMB', fr: '500h/an récupérées sur une PME BTP de 50 SAV/jour', hu: '500 óra/év megspórolva egy napi 50 hívást kezelő építőipari kkv-nál' },
  'systems.s6.title': { en: 'Personalised quotes and proposals in minutes', fr: 'Devis et propositions personnalisés en minutes', hu: 'Személyre szabott árajánlatok percek alatt' },
  'systems.s6.desc': { en: 'AI drafts tailored quotes and proposals from your reference data and past projects. Your experts validate instead of writing everything from scratch.', fr: 'L\'IA prépare des devis et propositions sur-mesure à partir de vos référentiels et de l\'historique de vos affaires. Vos experts valident au lieu de tout rédiger.', hu: 'Az MI a törzsadataiból és a korábbi munkáiból készít testreszabott árajánlatokat és javaslatokat. A szakértői jóváhagynak ahelyett, hogy mindent megírnának.' },
  'systems.s6.metric': { en: 'Faster, more personalised proposals, without tying up your experts', fr: 'Des propositions plus rapides et plus personnalisées, sans mobiliser vos experts', hu: 'Gyorsabb, személyesebb ajánlatok anélkül, hogy lekötné a szakértőit' },
  'systems.s7.title': { en: 'Your experts\' knowledge, captured and searchable', fr: 'Le savoir de vos experts, capitalisé et cherchable', hu: 'A szakértői tudása, megőrizve és kereshetően' },
  'systems.s7.desc': { en: 'A knowledge base that captures the know-how from your projects and makes it searchable in seconds. The knowledge no longer leaves with the person.', fr: 'Une base de connaissance qui capte le savoir de vos affaires et le rend cherchable en secondes. Le savoir ne part plus avec la personne.', hu: 'Tudásbázis, amely összegyűjti a munkáiban felhalmozott tudást, és másodpercek alatt kereshetővé teszi. A tudás többé nem távozik az emberrel.' },
  'systems.s7.metric': { en: 'The knowledge asleep in people\'s heads, turned into a reusable asset', fr: 'Le savoir qui dort dans les têtes, transformé en actif réutilisable', hu: 'A fejekben alvó tudásból újrahasznosítható vagyon lesz' },

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
  'trans.label': { en: 'The digital transformation', fr: 'La transformation digitale', hu: 'A digitális átállás' },
  'trans.title': { en: 'Your tools hold your growth back.', fr: 'Vos outils freinent votre croissance.', hu: 'Ma az eszközei fékezik a növekedését.' },
  'trans.titleAccent': { en: 'Soon, they propel it.', fr: 'Bientôt, ils la propulsent.', hu: 'Hamarosan hajtani fogják.' },
  'trans.beforeLabel': { en: 'Before', fr: 'Avant', hu: 'Előtte' },
  'trans.afterLabel': { en: 'After', fr: 'Après', hu: 'Utána' },
  'trans.costTitle': { en: 'What\'s blocking your growth today', fr: 'Ce qui bloque votre croissance aujourd\'hui', hu: 'Ami ma blokkolja a növekedését' },
  'trans.gainTitle': { en: 'What you get back', fr: 'Ce que vous récupérez', hu: 'Amit visszakap' },
  'trans.before1': { en: 'Excel, WhatsApp and ten tools that don\'t talk to each other', fr: 'Excel, WhatsApp et dix outils qui ne se parlent pas', hu: 'Excel, WhatsApp és tíz eszköz, amelyek nem beszélnek egymással' },
  'trans.before2': { en: 'Patched-up tools, never really fit for you', fr: 'Des outils bricolés, jamais vraiment adaptés', hu: 'Összetákolt eszközök, amelyek sosem illeszkedtek igazán' },
  'trans.before3': { en: 'It drags on, it costs a lot, unmanaged costs', fr: 'Ça traîne, ça coûte cher, des coûts non maîtrisés', hu: 'Elhúzódik, sokba kerül, a költségek kicsúsznak' },
  'trans.before4': { en: 'No clear view of your business', fr: 'Aucune vue claire sur votre activité', hu: 'Semmi tiszta rálátás a működésére' },
  'trans.before5': { en: 'Poor organisation, time lost every day', fr: 'Mauvaise organisation, du temps perdu chaque jour', hu: 'Rossz szervezés, naponta elvesztegetett idő' },
  'trans.after1': { en: 'One platform, everything in one place', fr: 'Une seule plateforme, tout au même endroit', hu: 'Egyetlen platform, minden egy helyen' },
  'trans.after2': { en: 'Custom-built, tailored to your business', fr: 'Du sur-mesure, taillé pour votre métier', hu: 'Egyedi fejlesztés, az Ön szakmájára szabva' },
  'trans.after3': { en: 'Managed costs, a measured ROI', fr: 'Des coûts maîtrisés, un ROI chiffré', hu: 'Kézben tartott költségek, számszerű megtérülés' },
  'trans.after4': { en: 'Clear dashboards, in real time', fr: 'Des tableaux de bord clairs, en temps réel', hu: 'Világos irányítópultok, valós időben' },
  'trans.after5': { en: 'Organised teams, time won back', fr: 'Des équipes organisées, du temps regagné', hu: 'Szervezett csapatok, visszanyert idő' },
  // APRÈS, les gains, en miroir 1:1 des coûts (même format : valeur serif rouge + description)
  'trans.gainVal1': { en: 'Built for you', fr: 'Taillé pour vous', hu: 'Önre szabva' },
  'trans.gainDesc1': { en: 'Software built around your operations, not a generic SaaS you use half of. Every view, every number, every automation exists because your business needs it. You decide right, at the right moment.', fr: 'Un logiciel construit autour de vos opérations, pas un SaaS générique utilisé à moitié. Chaque vue, chaque chiffre, chaque automatisation existe parce que votre activité en a besoin. Vous décidez juste, au bon moment.', hu: 'A működése köré épített szoftver, nem egy általános SaaS, amit félig használ. Minden nézet, minden szám, minden automatizmus azért van benne, mert a cégének szüksége van rá. Jól dönt, a megfelelő pillanatban.' },
  'trans.gainVal2': { en: 'One cockpit', fr: 'Un cockpit', hu: 'Egy vezérlőpult' },
  'trans.gainDesc2': { en: 'One screen that centralises your data in real time. The right info at the right moment, no checking 4 tools, no calling the expert who’s on holiday. It updates itself, and it tells the truth.', fr: 'Un seul écran qui centralise votre data en temps réel. La bonne info au bon moment, sans checker 4 outils ni rappeler l’expert parti en vacances. Ça se met à jour tout seul, et ça dit la vérité.', hu: 'Egyetlen képernyő, amely valós időben fogja össze az adatait. A jó információ a jó pillanatban, 4 eszköz átnézése nélkül, anélkül hogy a szabadságon lévő szakértőt kellene hívni. Magától frissül, és igazat mond.' },
  'trans.gainVal3': { en: '100 % yours', fr: '100 % à vous', hu: '100%-ban az Öné' },
  'trans.gainDesc3': { en: 'The code belongs to you, you depend on no one. And we train your teams to run it, all the way to autonomy.', fr: 'Le code vous appartient, vous ne dépendez de personne. Et on forme vos équipes pour le prendre en main, jusqu’à l’autonomie.', hu: 'A kód az Öné, senkitől nem függ. A csapatait pedig betanítjuk a használatára, egészen az önállóságig.' },
  'trans.gainVal4': { en: 'In days', fr: 'En jours', hu: 'Napok alatt' },
  'trans.gainDesc4': { en: 'A new hire gets up to speed in a few days, not months.', fr: 'Un nouveau prend l\'outil en main en quelques jours, plus en mois.', hu: 'Egy új munkatárs napok alatt beletanul, nem hónapok alatt.' },
  'trans.gainVal5': { en: 'Automated', fr: 'Automatisé', hu: 'Automatizálva' },
  'trans.gainDesc5': { en: 'The repetitive runs itself; your teams win back hours every week.', fr: 'Le répétitif tourne tout seul ; vos équipes regagnent des heures chaque semaine.', hu: 'Az ismétlődő munka magától fut; a csapatai hetente órákat nyernek vissza.' },
  'trans.punch': {
    en: 'Our clients were exactly there. Today, they\'re on the other side.',
    fr: 'Nos clients étaient exactement là. Aujourd\'hui, ils sont de l\'autre côté.',
    hu:
      'Az ügyfeleink pontosan itt tartottak. Ma a másik oldalon vannak.',
  },
  'trans.aiLabel': { en: 'AI', fr: 'IA', hu: 'MI' },
  'trans.aiTag': { en: 'AI powered', fr: 'AI powered', hu: 'MI-vel hajtva' },
  // Chaos artefacts (left panel), small friction notes scattered in the pile
  'trans.chaos.quote': { en: 'Quote #142 · overdue', fr: 'Devis #142 · en retard', hu: '#142-es ajánlat · késésben' },
  'trans.chaos.money': { en: '−2 400 € lost?', fr: '−2 400 € perdus ?', hu: '−2 400 € elveszett?' },
  'trans.chaos.sms': { en: '12 unread', fr: '12 non lus', hu: '12 olvasatlan' },
  'trans.chaos.forgot': { en: 'call back the client…', fr: 'rappeler le client…', hu: 'visszahívni az ügyfelet…' },

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
  'footer.tagline': { en: 'Custom software · Integrated AI · Owned by you', fr: 'Logiciel sur-mesure · IA intégrée · Vous appartient', hu: 'Egyedi szoftver · Beépített MI · Az Öné' },
  'footer.contactLabel': { en: 'Get in touch', fr: 'Nous contacter', hu: 'Lépjen kapcsolatba' },
  'footer.founderRole': { en: 'Founder · NateSystem', fr: 'Fondateur · NateSystem', hu: 'Alapító · NateSystem' },
  'footer.founder': {
    en: 'Founded and coded by Nathan Goutagny. The person you talk to is the one who builds, and you keep 100 % of the code.',
    fr: 'Fondé et codé par Nathan Goutagny. Celui qui vous parle est celui qui construit, et vous gardez 100 % du code.',
    hu:
      'Alapította és kódolja Nathan Goutagny. Akivel beszél, az építi is, és a kód 100%-a az Öné marad.',
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
  'footer.link.playbooks': { en: 'Sector playbooks', fr: 'Playbooks sectoriels', hu: 'Ágazati playbookok' },
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
  'playbooks.hotels.title': { en: 'For independent hotels', fr: 'Pour hôteliers indépendants', hu: 'Független szállodáknak' },
  'playbooks.hotels.desc': {
    en: 'Bookings, reviews, revenue management, the AI playbook for boutique hotels.',
    fr: 'Réservations, avis, revenue management, le playbook IA pour hôtels de charme.',
    hu:
      'Foglalások, vélemények, bevételkezelés: az MI-playbook butikhoteleknek.',
  },
  'playbooks.lawyers.title': { en: 'For business law firms', fr: 'Pour cabinets d\'avocats d\'affaires', hu: 'Üzleti ügyvédi irodáknak' },
  'playbooks.lawyers.desc': {
    en: 'Drafting, due diligence, knowledge base, AI built for serious legal work.',
    fr: 'Rédaction, due diligence, base de connaissances, l\'IA pour le travail juridique sérieux.',
    hu:
      'Szövegezés, átvilágítás, tudásbázis: MI a komoly jogi munkához.',
  },
  'playbooks.accountants.title': { en: 'For accounting firms', fr: 'Pour cabinets d\'expertise-comptable', hu: 'Könyvelőirodáknak' },
  'playbooks.accountants.desc': {
    en: 'Bookkeeping, advisory, deliverables, the AI stack for modern CPAs.',
    fr: 'Saisie, conseil, livrables, la stack IA pour experts-comptables modernes.',
    hu:
      'Könyvelés, tanácsadás, kimenetek: az MI-eszköztár mai könyvelőknek.',
  },
  'playbooks.all.title': { en: 'See all 13 playbooks →', fr: 'Voir les 13 playbooks →', hu: 'Mind a 13 playbook →' },
  'playbooks.all.desc': {
    en: 'One sector-specific AI playbook per industry, free, ready to read.',
    fr: 'Un playbook IA par secteur, gratuit, prêt à lire.',
    hu:
      'Ágazatonként egy MI-playbook, ingyen, azonnal olvasható.',
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
  'mega.playbooks': { en: 'Playbooks', fr: 'Playbooks', hu: 'Playbookok' },

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
  'costpain.title': { en: 'What\'s costing you', fr: 'Ce qui coûte cher', hu: 'Ami sokba kerül' },
  'costpain.titleAccent': { en: 'in your business.', fr: 'dans votre entreprise.', hu: 'a cégében.' },
  'costpain.stat1': { en: '3h/day', fr: '3h/jour', hu: 'napi 3 óra' },
  'costpain.desc1': { en: 'Time wasted making tools that don\'t talk to each other communicate.', fr: 'Temps perdu à faire communiquer des outils qui ne se parlent pas.', hu: 'Elvesztegetett idő azzal, hogy egymással nem beszélő eszközöket kössenek össze.' },
  'costpain.stat2': { en: '8 SaaS', fr: '8 SaaS', hu: '8 SaaS' },
  'costpain.desc2': { en: 'On average, 5 of which you only use at 20% of their potential.', fr: 'En moyenne, dont 5 que vous n\'utilisez qu\'à 20% de leur potentiel.', hu: 'Átlagosan, és ebből 5-öt a lehetőségeik mindössze 20%-án használnak.' },
  'costpain.stat3': { en: '47%', fr: '47%', hu: '47%' },
  'costpain.desc3': { en: 'Of your know-how lives in one person\'s head, never shared or leveraged.', fr: 'De votre savoir-faire vit dans la tête d\'une seule personne, jamais transmis ni exploité.', hu: 'A szaktudásából ennyi él egyetlen ember fejében, sosem átadva, sosem kihasználva.' },
  'costpain.stat4': { en: '2 months', fr: '2 mois', hu: '2 hónap' },
  'costpain.desc4': { en: 'To train a new employee on your undocumented processes.', fr: 'Pour former un nouveau collaborateur à vos process non documentés.', hu: 'Ennyi egy új munkatársat betanítani a leíratlan folyamataira.' },
  'costpain.stat5': { en: '15h/week', fr: '15h/sem', hu: 'heti 15 óra' },
  'costpain.desc5': { en: 'Of repetitive tasks that eat your teams\' time, instead of the high-value work that would grow you.', fr: 'De tâches répétitives qui accaparent vos équipes, au lieu du travail à forte valeur qui vous ferait grandir.', hu: 'Ennyi ismétlődő feladat viszi el a csapatai idejét a magas értékű munka helyett, amely növekedést hozna.' },

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
  'guarantees.label': { en: 'GUARANTEES', fr: 'GARANTIES', hu: 'GARANCIÁK' },
  'guarantees.title': { en: 'Zero risk.', fr: 'Zéro risque.', hu: 'Nulla kockázat.' },
  'guarantees.titleAccent': { en: '5 guarantees.', fr: '5 garanties.', hu: '5 garancia.' },
  'guarantees.roi.title': { en: 'ROI Guarantee', fr: 'Garantie ROI', hu: 'Megtérülési garancia' },
  'guarantees.roi.desc': { en: 'We define a number together before starting. It\'s written in the contract. If at 12 months it\'s not reached, we work for free until it is.', fr: 'On définit ensemble un chiffre avant de commencer. Il est écrit dans le contrat. Si à 12 mois il n\'est pas atteint, on travaille gratuitement jusqu\'à ce qu\'il le soit.', hu: 'Indulás előtt közösen meghatározunk egy számot. Bekerül a szerződésbe. Ha 12 hónap alatt nem érjük el, ingyen dolgozunk tovább, amíg meglesz.' },
  'guarantees.delays.title': { en: 'Deadline Guarantee', fr: 'Garantie Délais', hu: 'Határidőgarancia' },
  'guarantees.delays.desc': { en: 'Each unjustified week of delay on the signed initial scope = -10% on the remaining balance, capped at 50%.', fr: 'Chaque semaine de retard injustifiée sur le périmètre initial signé = -10% sur le solde restant, plafonné à 50%. Ne compte pas : évolutions hors périmètre, retours clients non fournis sous 48h, RDV non honorés.', hu: 'A szerződött kiindulási terjedelemhez képest minden indokolatlanul késett hét = -10% a fennmaradó összegből, legfeljebb 50%-ig. Nem számít bele: a terjedelmen kívüli módosítás, a 48 órán belül meg nem adott ügyfél-visszajelzés, az elmaradt egyeztetés.' },
  'guarantees.ownership.title': { en: 'Ownership Guarantee', fr: 'Garantie Propriété', hu: 'Tulajdonjogi garancia' },
  'guarantees.ownership.desc': { en: '100% of the code belongs to you at delivery. No subscription to keep access. If NateSystem disappears tomorrow, your tool keeps running.', fr: '100% du code vous appartient à la livraison. Aucun abonnement pour garder l\'accès. Si NateSystem disparaît demain, votre outil tourne toujours.', hu: 'Átadáskor a kód 100%-a az Öné. Semmilyen előfizetés nem kell a hozzáféréshez. Ha a NateSystem holnap eltűnik, az eszköze akkor is fut.' },
  'guarantees.productivity.title': { en: 'Productivity Guarantee', fr: 'Garantie Productivité', hu: 'Termelékenységi garancia' },
  'guarantees.productivity.desc': { en: 'We measure together the time lost on targeted tasks before starting. If 90 days after delivery your team hasn\'t recovered at least 30% of that time, we continue for free.', fr: 'On mesure ensemble le temps perdu sur les tâches ciblées avant de commencer. Si 90 jours après livraison votre équipe n\'a pas récupéré au moins 30% de ce temps, on continue gratuitement jusqu\'à ce que ce soit le cas.', hu: 'Indulás előtt közösen megmérjük, mennyi idő megy el a kiválasztott feladatokra. Ha az átadás után 90 nappal a csapata nem nyerte vissza ennek legalább 30%-át, ingyen dolgozunk tovább, amíg így lesz.' },
  'guarantees.efficiency.title': { en: 'Efficiency Guarantee', fr: 'Garantie Efficacité', hu: 'Hatékonysági garancia' },
  'guarantees.efficiency.desc': { en: 'We identify together before launch the recurring operational errors the infrastructure must eliminate. If 90 days after delivery these errors still exist, we fix them for free until zero.', fr: 'On identifie ensemble avant démarrage les erreurs opérationnelles récurrentes que l\'infrastructure doit éliminer. Si 90 jours après livraison ces erreurs existent encore, on corrige gratuitement jusqu\'à zéro.', hu: 'Indulás előtt közösen azonosítjuk azokat a visszatérő működési hibákat, amelyeket az infrastruktúrának meg kell szüntetnie. Ha az átadás után 90 nappal ezek még mindig megvannak, ingyen javítjuk őket nulláig.' },
  'guarantees.family.title': { en: 'The Family Guarantee', fr: 'La Garantie Famille', hu: 'A családi garancia' },
  'guarantees.family.desc': { en: 'Within 90 days of delivery, if you\'re not satisfied enough to talk about it at every family dinner until everyone is tired of hearing about it, dinner is on us.', fr: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour en parler à chaque repas de famille jusqu\'à ce que tout le monde en soit lassé, on vous offre le restau.', hu: 'Az átadástól számított 90 napon belül, ha nem elégedett annyira, hogy minden családi vacsorán erről beszéljen, amíg mindenki meg nem unja, mi álljuk a vacsorát.' },
  'guarantees.competitor.title': { en: 'The Competitor Guarantee', fr: 'La Garantie Concurrent', hu: 'A versenytárs-garancia' },
  'guarantees.competitor.desc': { en: 'Within 90 days of delivery, if you\'re not satisfied enough to beg us not to work with your direct competitor, dinner is on us.', fr: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour nous supplier de ne pas travailler avec votre concurrent direct, on vous offre le restau.', hu: 'Az átadástól számított 90 napon belül, ha nem elégedett annyira, hogy könyörögjön nekünk, ne dolgozzunk a közvetlen versenytársával, mi álljuk a vacsorát.' },
  'guarantees.absurdLabel': { en: 'OUR BET', fr: 'NOTRE PARI', hu: 'A FOGADÁSUNK' },

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
  'faq.label': { en: 'FAQ', fr: 'QUESTIONS FRÉQUENTES', hu: 'GYAKORI KÉRDÉSEK' },
  'faq.title': { en: 'The honest', fr: 'Les réponses', hu: 'Az őszinte' },
  'faq.titleAccent': { en: 'answers.', fr: 'honnêtes.', hu: 'válaszok.' },
  // Q1, what we build
  'faq.q1': { en: 'What do you actually build?', fr: 'Qu\'est-ce que vous construisez concrètement ?', hu: 'Mit építenek pontosan?' },
  'faq.a1': {
    en: 'Custom business software: the internal platform that runs your operations. Unified database, dashboards, client portals, internal tools. AI and automation are integrated only where they replace real hours of work, not as decoration.',
    fr: 'Du logiciel métier sur-mesure : la plateforme interne qui fait tourner vos opérations. Base unifiée, dashboards, portails clients, outils internes. L\'IA et l\'automatisation sont intégrées uniquement là où elles remplacent de vraies heures de travail, pas en décoration.',
    hu:
      'Egyedi üzleti szoftvert: azt a belső platformot, amin a működése fut. Egységes adatbázis, irányítópultok, ügyfélportálok, belső eszközök. MI és automatizálás csak ott épül bele, ahol valódi munkaórákat vált ki, nem dekorációként.',
  },

  // Q2, timeline (price removed, given on the call)
  'faq.q2': { en: 'How long does it take?', fr: 'Combien de temps ça prend ?', hu: 'Mennyi ideig tart?' },
  'faq.a2': {
    en: '4 to 8 weeks for the initial build, depending on scope. We agree on a fixed scope and a fixed delivery date before writing a line of code. Weekly check-ins, monthly demos, no scope creep, no surprise invoices. Pricing is shared on the discovery call so it matches your real needs.',
    fr: '4 à 8 semaines pour la première version, selon le périmètre. On s\'accorde sur un périmètre fixe et une date de livraison fixe avant la première ligne de code. Points hebdo, démos mensuelles, zéro dérive, zéro facture surprise. Le pricing est partagé pendant l\'appel de découverte pour coller à vos vrais besoins.',
    hu:
      'Az első verzió 4-8 hét, a terjedelemtől függően. Az első kódsor előtt megállapodunk a rögzített terjedelemben és a rögzített átadási dátumban. Heti egyeztetés, havi bemutató, semmi elcsúszás, semmi meglepetésszámla. Az árat a felfedező hívás során beszéljük meg, hogy az valós igényeihez igazodjon.',
  },

  // Q3, reliability + SLA
  'faq.q3': { en: 'Will the system stay reliable once it\'s live?', fr: 'Le système restera-t-il fiable une fois en production ?', hu: 'Megbízható marad a rendszer éles üzemben?' },
  'faq.a3': {
    en: 'Yes. It\'s monitored around the clock, backed up automatically several times a day, and we step in fast if anything goes wrong. In plain terms: it runs, and if there\'s a glitch it\'s fixed before it gets in your way. After the first 3 months, you choose: we keep handling maintenance, or we hand everything over to your team with the documentation.',
    fr: 'Oui. Il est surveillé en permanence, sauvegardé automatiquement plusieurs fois par jour, et on intervient vite en cas de souci. Concrètement : il tourne, et s\'il y a un pépin, c\'est réglé avant que ça vous gêne. Après les 3 premiers mois, vous choisissez : on continue d\'assurer la maintenance, ou on passe tout à votre équipe avec la documentation.',
    hu:
      'Igen. Folyamatosan felügyeljük, naponta többször automatikusan mentjük, és gond esetén gyorsan lépünk. Magyarán: fut, és ha akad valami, még azelőtt megoldjuk, hogy zavarná Önt. Az első 3 hónap után Ön dönt: mi visszük tovább az üzemeltetést, vagy mindent átadunk a csapatának a dokumentációval együtt.',
  },

  // Q4, automations + AI catalog (concrete, not buzzwords)
  'faq.q4': { en: 'What automations and AI features can be integrated?', fr: 'Quelles automatisations et fonctionnalités IA peuvent être intégrées ?', hu: 'Milyen automatizálás és MI-funkció építhető be?' },
  'faq.a4': {
    en: 'Wherever it saves real hours. The common ones: automated workflows (orders, invoices, follow-ups, internal handovers), predictive analytics (anticipate stock, no-shows, sales trends), document parsing (read invoices, contracts, forms), intelligent triage (sort, route, draft replies), autonomous agents that execute multi-step tasks across your tools, and conversational interfaces for your team or customers. We pick what\'s worth building for you, not everything because it\'s trendy.',
    fr: 'Là où ça fait gagner de vraies heures. Les classiques : workflows automatisés (commandes, factures, relances, passations internes), analytics prédictif (anticiper stock, no-shows, tendances de ventes), lecture de documents (factures, contrats, formulaires), tri intelligent (classer, router, rédiger des réponses), agents autonomes qui exécutent des tâches multi-étapes dans vos outils, et interfaces conversationnelles pour vos équipes ou vos clients. On choisit ce qui vaut le coup pour vous, pas tout parce que c\'est à la mode.',
    hu:
      'Az, amelyik valódi órákat spórol. A klasszikusok: automatizált munkafolyamatok (rendelések, számlák, utánkövetés, belső átadások), előrejelző elemzés (készlet, lemondások, értékesítési trendek), dokumentumolvasás (számlák, szerződések, űrlapok), intelligens rendezés (besorolás, továbbítás, válaszfogalmazás), önálló ágensek, amelyek többlépcsős feladatokat futtatnak az eszközeiben, és beszélgetőfelületek a csapatának vagy az ügyfeleinek. Azt választjuk, ami Önnek megéri, nem mindent azért, mert divatos.',
  },

  // Q5, anti lock-in
  'faq.q5': { en: 'What if you disappear tomorrow?', fr: 'Et si vous disparaissez demain ?', hu: 'Mi van, ha holnap eltűnnek?' },
  'faq.a5': {
    en: '100% of the code is yours and hosted on your infrastructure. Full documentation included. Any competent developer can pick it up. No subscription, no lock-in, no hostage situation.',
    fr: '100 % du code vous appartient et est hébergé sur votre infrastructure. Documentation complète incluse. N\'importe quel développeur compétent peut reprendre derrière. Zéro abonnement, zéro lock-in, zéro otage.',
    hu:
      'A kód 100%-a az Öné, és az Ön infrastruktúráján fut. Teljes dokumentációval. Bármelyik hozzáértő fejlesztő folytatni tudja. Semmi előfizetés, semmi bezártság, semmi túszdráma.',
  },

  // Q6, industries
  'faq.q6': { en: 'Does this work for my industry?', fr: 'Est-ce que ça marche pour mon secteur ?', hu: 'Működik ez az én ágazatomban?' },
  'faq.a6': {
    en: 'Restaurants, consulting, construction, healthcare, retail: wherever there are recurring operations and real data flowing through them. The stack adapts. The method doesn\'t change.',
    fr: 'Restauration, conseil, BTP, santé, retail : partout où il y a des opérations récurrentes et de la vraie donnée qui y circule. La stack s\'adapte. La méthode ne change pas.',
    hu:
      'Vendéglátás, tanácsadás, építőipar, egészségügy, kiskereskedelem: mindenütt, ahol visszatérő működés van, és valódi adat áramlik benne. A technológia alkalmazkodik. A módszer nem változik.',
  },
  'faq.q7': { en: 'Why now? Can\'t it wait?', fr: 'Pourquoi maintenant ? Ça ne peut pas attendre ?', hu: 'Miért most? Nem várhat?' },
  'faq.a7': {
    en: 'It can, but waiting has a cost. 20% of European companies (10+ employees) already use AI in 2025, up from 13.5% a year earlier. Teams that integrate it into their core processes free up 20–30% of their working time (McKinsey), and SMBs that adopt it are 2× more likely to grow year over year (Salesforce). Every month of waiting is a month your competitors use to widen the gap, and time your teams keep spending on tasks a well-built system would absorb.',
    fr: 'Ça peut, mais attendre a un coût. 20% des entreprises européennes (10+ employés) utilisent déjà l\'IA en 2025, contre 13,5% un an plus tôt. Les équipes qui l\'intègrent à leurs process clés libèrent 20 à 30% de leur temps de travail (McKinsey), et les PME qui l\'adoptent ont 2× plus de chances de croître d\'une année sur l\'autre (Salesforce). Chaque mois d\'attente est un mois où vos concurrents creusent l\'écart, et où vos équipes continuent de payer des tâches qu\'une infrastructure bien construite absorberait.',
    hu:
      'Várhat, de a várakozásnak ára van. Az európai cégek (10+ alkalmazott) 20%-a már 2025-ben MI-t használ, szemben az egy évvel korábbi 13,5%-kal. Azok a csapatok, amelyek beépítik a kulcsfolyamataikba, a munkaidejük 20-30%-át szabadítják fel (McKinsey), és az MI-t bevezető kkv-k 2× akkora eséllyel nőnek évről évre (Salesforce). Minden várakozással töltött hónap egy hónap, amíg a versenytársai növelik az előnyüket, és amíg a csapatai olyan feladatokat fizetnek meg, amelyeket egy jól megépített rendszer elnyelne.',
  },
  'faq.q8': { en: 'What technologies do you use? Is my data safe?', fr: 'Quelles technologies utilisez-vous ? Mes données sont-elles en sécurité ?', hu: 'Milyen technológiákat használnak? Biztonságban vannak az adataim?' },
  'faq.a8': {
    en: 'We use the most reliable, recognised technologies on the market: the same ones big tech companies rely on. Your data is hosted in Europe, protected and GDPR-compliant. And everything is yours: the code belongs to you, you\'re no one\'s prisoner. (For the curious: Next.js, Supabase, Claude API, Vercel, solid standards.)',
    fr: 'On utilise les technologies les plus fiables et reconnues du marché : les mêmes que les grandes entreprises tech. Vos données sont hébergées en Europe, protégées et conformes RGPD. Et tout vous appartient : le code est à vous, vous n\'êtes prisonnier de personne. (Pour les curieux : Next.js, Supabase, Claude API, Vercel, du standard solide.)',
    hu:
      'A piac legmegbízhatóbb, legelismertebb technológiáit használjuk: ugyanazokat, amelyekre a nagy tech-cégek is építenek. Az adatai Európában tárolódnak, védetten és GDPR-konforman. És minden az Öné: a kód a sajátja, senkinek nem a foglya. (A kíváncsiaknak: Next.js, Supabase, Claude API, Vercel, szilárd szabványok.)',
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

  // Work-together widget ("Nate" agent)
  'nate.status': { en: 'Online', fr: 'En ligne', hu: 'Elérhető' },
  'nate.teaser': { en: 'Need custom software?', fr: 'Besoin d\'un logiciel sur-mesure ?', hu: 'Egyedi szoftverre van szüksége?' },
  'nate.name': { en: 'Nate · Assistant', fr: 'Nate · Assistant', hu: 'Nate · Asszisztens' },
  'nate.message': {
    en: 'Tell me what you\'re building, I\'ll tell you how to run it.',
    fr: 'Dites-moi ce que vous construisez, je vous dirai comment le faire tourner.',
    hu:
      'Mondja el, mit épít, és megmondom, hogyan lehet működtetni.',
  },
  'nate.cta': { en: 'Open the form', fr: 'Ouvrir le formulaire', hu: 'Űrlap megnyitása' },
  'nate.later': { en: 'Later', fr: 'Plus tard', hu: 'Később' },
  'nate.close': { en: 'Close', fr: 'Fermer', hu: 'Bezárás' },

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
  'v2.sprint.format': { en: '2 weeks · 3 to 5 calls · nothing to prepare', fr: '2 semaines · 3 à 5 appels · rien à préparer', hu: '2 hét · 3-5 hívás · semmit nem kell előkészítenie' },
  'v2.sprint.intro': { en: 'You prepare nothing, you fill in nothing. You talk, we do the work.', fr: 'Vous ne préparez rien, vous ne remplissez rien. Vous parlez, on fait le travail.', hu: 'Nem készül elő semmivel, nem tölt ki semmit. Ön beszél, a munkát mi végezzük.' },
  'v2.sprint.d1.name': { en: 'The Map', fr: 'La Carte', hu: 'A térkép' },
  'v2.sprint.d1.desc': { en: 'How your business really runs, everything living in people\'s heads, put on paper.', fr: 'Comment votre activité tourne réellement, tout ce qui est dans les têtes, mis sur papier.', hu: 'Ahogyan a cége valójában működik: minden, ami a fejekben él, papírra téve.' },
  'v2.sprint.d2.name': { en: 'The Prototype', fr: 'Le Prototype', hu: 'A prototípus' },
  'v2.sprint.d2.desc': { en: 'Clickable, built around your business, before any commitment.', fr: 'Cliquable, construit autour de votre métier, avant tout engagement.', hu: 'Kattintható, az Ön szakmája köré építve, még mindenféle elköteleződés előtt.' },
  'v2.sprint.d3.name': { en: 'The Costed Roadmap', fr: 'La Feuille de route chiffrée', hu: 'A beárazott ütemterv' },
  'v2.sprint.d3.desc': { en: 'What to build, in what order, for how much.', fr: 'Quoi construire, dans quel ordre, pour combien.', hu: 'Mit építsünk meg, milyen sorrendben, mennyiért.' },
  'v2.sprint.promise': { en: 'In 2 weeks you know exactly where your hours and your value are stuck, and you click through the software that frees them and turns them into growth, before you\'ve signed anything.', fr: 'En 2 semaines, vous savez exactement où vos heures et votre valeur sont bloquées, et vous cliquez dans le logiciel qui les libère et les transforme en croissance, avant d\'avoir signé quoi que ce soit.', hu: '2 hét alatt pontosan tudni fogja, hol ragadnak meg az órái és az értéke, és végig tud kattintani azon a szoftveren, amely felszabadítja és növekedéssé alakítja őket, még mielőtt bármit aláírt volna.' },
  'v2.sprint.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },
  'v2.sprint.selfserve': { en: 'Or run the online diagnostic, 3 min, no email', fr: 'Ou lancez le diagnostic en ligne, 3 min, sans e-mail', hu: 'Vagy indítsa el az online diagnosztikát: 3 perc, e-mail nélkül' },
  'v2.sprint.afterA': { en: 'What then? Two options: we keep going together, or we stop here. ', fr: 'Ensuite ? Deux options : on continue ensemble, ou on s\'arrête là. ', hu: 'Utána? Két lehetőség: folytatjuk együtt, vagy itt megállunk. ' },
  'v2.sprint.afterB': { en: 'Zero pressure, zero commitment.', fr: 'Zéro pression, zéro engagement.', hu: 'Semmi nyomás, semmi kötelezettség.' },
  'v2.sprint.afterC': { en: ' What you see is already yours.', fr: ' Ce que vous voyez est déjà à vous.', hu: ' Amit lát, az már az Öné.' },

  'v2.cmp.eyebrow': { en: 'THE HONEST COMPARISON', fr: 'LA COMPARAISON HONNÊTE', hu: 'AZ ŐSZINTE ÖSSZEHASONLÍTÁS' },
  'v2.cmp.title': { en: 'Your real alternatives,', fr: 'Vos vraies alternatives,', hu: 'A valódi alternatívái,' },
  'v2.cmp.titleAccent': { en: 'next to us.', fr: 'à côté de nous.', hu: 'mellettünk.' },
  'v2.cmp.colFreelance': { en: 'Freelancer', fr: 'Freelance', hu: 'Szabadúszó' },
  'v2.cmp.colEsn': { en: 'Traditional agency', fr: 'Agence traditionnelle', hu: 'Hagyományos ügynökség' },
  'v2.cmp.colSaas': { en: 'Off-the-shelf SaaS', fr: 'SaaS du marché', hu: 'Dobozos SaaS' },
  'v2.cmp.colUs': { en: 'NateSystem', fr: 'NateSystem', hu: 'NateSystem' },
  'v2.cmp.r1.crit': { en: 'Understands your business', fr: 'Comprend votre métier', hu: 'Érti a szakmáját' },
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
  'methode.hero.eyebrow': { en: 'HOW WE WORK', fr: 'NOTRE APPROCHE', hu: 'AHOGYAN DOLGOZUNK' },
  'methode.hero.title': { en: 'We audit, map, build, integrate.', fr: 'On audite, cartographie, construit, intègre.', hu: 'Auditálunk, feltérképezünk, építünk, integrálunk.' },
  'methode.hero.titleAccent': { en: 'And keep it evolving.', fr: 'Et on fait évoluer.', hu: 'És folyamatosan fejlesztjük.' },
  'methode.hero.sub': { en: 'We start by understanding where your value is stuck, your hours, your know-how, your margin, then we build the software that frees it and turns it into growth. Fast, and without jargon.', fr: 'On commence par comprendre où votre valeur reste bloquée, vos heures, votre savoir, votre marge, puis on construit le logiciel qui la libère et la transforme en croissance. Vite, et sans jargon.', hu: 'Azzal kezdjük, hogy megértjük, hol ragad meg az értéke: az órái, a tudása, az árrése. Aztán megépítjük a szoftvert, amely felszabadítja és növekedéssé alakítja. Gyorsan, szakzsargon nélkül.' },
  'methode.hero.cta': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },

  'radio.eyebrow': { en: 'THE X-RAY', fr: 'LA RADIOGRAPHIE', hu: 'A RÖNTGEN' },
  'radio.title': { en: 'How we read', fr: 'Comment on lit', hu: 'Hogyan olvassuk' },
  'radio.titleAccent': { en: 'your business.', fr: 'votre activité.', hu: 'a cége működését.' },
  'radio.sub': { en: 'Four moves. From what lives in people\'s heads to a system your team actually runs.', fr: 'Quatre temps. De ce qui vit dans les têtes à un système que votre équipe pilote vraiment.', hu: 'Négy lépés. Attól, ami a fejekben él, addig a rendszerig, amelyet a csapata tényleg használ.' },
  'radio.hint': { en: 'Click each step', fr: 'Cliquez sur chaque étape', hu: 'Kattintson az egyes lépésekre' },

  'radio.s1.name': { en: 'Map', fr: 'Cartographier', hu: 'Feltérképezés' },
  'radio.s1.tag': { en: 'We look', fr: 'On regarde', hu: 'Megnézzük' },
  'radio.s1.desc': { en: 'We lay out how your business really runs, every task, every tool, every piece of data living in a notebook, a spreadsheet or someone\'s head.', fr: 'On met à plat comment votre activité tourne vraiment, chaque tâche, chaque outil, chaque donnée qui vit dans un cahier, un tableur ou la tête de quelqu\'un.', hu: 'Kiterítjük, hogyan működik valójában a cége: minden feladatot, minden eszközt, minden adatot, ami füzetben, táblázatban vagy valakinek a fejében él.' },
  'radio.s2.name': { en: 'Unify', fr: 'Unifier', hu: 'Egységesítés' },
  'radio.s2.tag': { en: 'We gather', fr: 'On rassemble', hu: 'Összegyűjtjük' },
  'radio.s2.desc': { en: 'Your data, scattered across five tools, comes back into a single base built for your trade. One source of truth, no more double entry.', fr: 'Vos données éparpillées dans cinq outils reviennent dans une seule base, conçue pour votre métier. Une source de vérité, fini la double-saisie.', hu: 'Az öt eszközben szétszórt adatai egyetlen, a szakmájára tervezett adatbázisba kerülnek vissza. Egy igazságforrás, vége a kettős adatbevitelnek.' },
  'radio.s3.name': { en: 'Automate', fr: 'Automatiser', hu: 'Automatizálás' },
  'radio.s3.tag': { en: 'We lighten', fr: 'On allège', hu: 'Könnyítünk' },
  'radio.s3.desc': { en: 'AI and automation take on the repetitive work, but only where they replace real working hours. Never a gadget bolted on to look modern.', fr: 'L\'IA et l\'automatisation prennent le répétitif, mais seulement là où elles remplacent de vraies heures de travail. Jamais un gadget posé pour faire moderne.', hu: 'Az MI és az automatizálás átveszi az ismétlődő munkát, de csak ott, ahol valódi munkaórákat vált ki. Sosem dísznek felcsavarozott kütyüként.' },
  'radio.s4.name': { en: 'Hand over', fr: 'Former', hu: 'Átadás' },
  'radio.s4.tag': { en: 'We step back', fr: 'On passe la main', hu: 'Hátralépünk' },
  'radio.s4.desc': { en: 'Your team runs the tool, the documentation is complete, 100% of the code is yours. We stay if you want us to, but you\'re never a hostage.', fr: 'Votre équipe pilote l\'outil, la documentation est complète, 100 % du code vous appartient. On reste si vous voulez, mais vous n\'êtes jamais prisonnier.', hu: 'A csapata viszi az eszközt, a dokumentáció teljes, a kód 100%-a az Öné. Maradunk, ha kéri, de sosem tartjuk fogva.' },

  'radio.scene.sources': { en: 'Spreadsheets · Notebooks · WhatsApp · Emails · In people\'s heads', fr: 'Tableurs · Cahiers · WhatsApp · Mails · Dans les têtes', hu: 'Táblázatok · Füzetek · WhatsApp · E-mailek · A fejekben' },
  'radio.scene.hub': { en: 'Your base', fr: 'Votre base', hu: 'Az Ön adatbázisa' },
  'radio.scene.auto': { en: 'Auto', fr: 'Auto', hu: 'Auto' },
  'radio.scene.ai': { en: 'AI', fr: 'IA', hu: 'MI' },
  'radio.scene.yours': { en: '100% yours', fr: '100 % à vous', hu: '100%-ban az Öné' },
  'radio.scene.doc': { en: 'Docs', fr: 'Doc', hu: 'Doku' },

  'methode.deliv.label': { en: 'THE DELIVERABLES', fr: 'LES LIVRABLES', hu: 'AMIT ÁTADUNK' },
  'methode.deliv.title': { en: 'Everything, built for you.', fr: 'Tout est sur-mesure.', hu: 'Minden egyedire készül.' },
  'methode.deliv.sub': { en: 'From the X-ray of your business to the costed action plan, every deliverable is tailored to you.', fr: 'De la radiographie de votre activité au plan d’action chiffré, chaque livrable est taillé pour vous.', hu: 'A cége röntgenképétől a beárazott cselekvési tervig minden átadott anyag Önre szabott.' },

  'methode.cta.title': { en: 'We start by understanding. Not by selling.', fr: 'On commence par comprendre. Pas par vendre.', hu: 'Azzal kezdjük, hogy megértjük. Nem azzal, hogy eladunk.' },
  'methode.cta.sub': { en: 'A free call. We look at how your business runs and tell you straight what would actually move the needle, even if it\'s not us who builds it.', fr: 'Un appel offert. On regarde comment votre activité tourne et on vous dit franchement ce qui bougerait vraiment les choses, même si ce n\'est pas nous qui le construisons.', hu: 'Egy ingyenes hívás. Megnézzük, hogyan működik a cége, és őszintén megmondjuk, mi mozdítana valóban a helyzeten, akkor is, ha nem mi építjük meg.' },
  'methode.cta.button': { en: 'Book a call · free', fr: 'Réserver un appel · offert', hu: 'Hívás foglalása · ingyenes' },

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
