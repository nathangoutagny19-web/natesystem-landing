# BRIEF MAÎTRE — Refonte natesystem.com

_Dossier complet. 26 juillet 2026._
_Consolide une session entière d'analyse : audit du site, captures Puppeteer des trois concurrents de référence, benchmarks marché, et les arbitrages pris avec Nathan._
_Objectif : passer d'une landing page à un vrai site, unique sur le marché français, qui tient sous du trafic outbound et organique._

> **Ce document est la source de vérité.** `PROMPT-REFONTE-V2.md` est l'instruction d'exécution qui en découle.

---

# PARTIE I — LE CONTEXTE

## 1.1 Qui

**NateSystem** — Nathan Goutagny, Lyon. Il vend du **logiciel métier sur-mesure intégrant l'IA** à des PME. Il vend, il code, il livre, il forme. Deux marchés : France (Loire, Lyon, Saint-Étienne) et Hongrie (Budapest).

**ICP** : PME de 20 à 100 personnes, process répétitifs lourds, données éparpillées, outils génériques inadaptés. Décideur = dirigeant/CEO, profil « conscient mais perdu » sur l'IA. **Transversal, jamais sectoriel** — ce qui qualifie c'est la douleur et le profil, pas l'industrie. Ne jamais pousser Nathan à choisir une verticale : c'est un arbitrage qu'il a déjà tranché.

**Douleur d'entrée** : « données éparpillées / c'est le bordel » + « temps perdu sur du répétitif ». Il la ressent mais **ne l'a jamais chiffrée** — c'est le coin d'entrée.

**Différenciateurs existants** : code source livré et propriété 100 % · hébergement UE, RGPD-natif · chaque résultat mesuré · l'interlocuteur est le constructeur.

**Interdit absolu** : ne jamais proposer la restauration comme niche. Refus catégorique de Nathan, malgré son meilleur cas client qui en vient.

## 1.2 Ce qu'il vend aujourd'hui

Trois portes sur le site actuel (Audit & plan d'action · Logiciel sur-mesure · Système IA) plus une quatrième récente (Formation IA opérationnelle). Modèle : forfait setup + récurrent. Prix publiés sur `/prix-logiciel-sur-mesure` : 15-50 k€ pour un premier logiciel métier puis 100-500 €/mois ; infrastructure complète à partir de 2 000 €/mois.

**Cinq systèmes IA reviennent chez tous les clients** — qualification instantanée de leads, back-office documentaire, relance commerciale automatique, réactivation de dormants, reporting automatique. Ce sont les seules briques réellement productisables : elles sont identiques quel que soit le secteur.

## 1.3 Clients réels

Chromosome (groupe de restaurants, Saint-Étienne — cas phare, seul pleinement autorisé), Institut Les Chartreux (trois logiciels : RH, stock, linge — le meilleur compte, pattern land-and-expand), Université Jean Monnet, TCRM.io (IUT Saint-Étienne), SCABB (basket NM1), Aloess (association), Vendéglátás Menedzsment (Budapest), SimpleTeam, Goutagny Élagage, Apple PS Hostess (Budapest).

---

# PARTIE II — LE PAYSAGE CONCURRENTIEL

Trois sites capturés intégralement au Puppeteer le 26/07/2026.

## 2.1 Le constat qui commande tout

**Tout le monde vend exactement la même méthode** : auditer → cartographier → développer sur-mesure → intégrer → faire évoluer → former.

Preuve : le hero d'ImpulseLab est *« We develop web & AI solutions that improve your productivity »*. Celui de NateSystem est *« On construit vos logiciels & plateformes sur-mesure qui vous font gagner en productivité »*. C'est la même phrase. Ils ont aussi la section « Demandez à l'IA de votre choix », que NateSystem croyait originale.

**Conséquence** : l'identité ne peut pas venir de la description du service. Elle doit venir d'ailleurs (Partie III).

## 2.2 OpsKings (US) — le modèle

*« We work with companies too big for freelancers, and too smart for Big 4. »* Ils ne décrivent pas ce qu'ils font, ils **nomment le trou où ils se tiennent**. Ils qualifient par le CA (5-100 M$) dans leur meta description.

Hero : *« Leverage your business with bespoke processes »* — le mot-clé est **processes**, pas software, pas AI. Le sous-titre expose le modèle en trois temps + la preuve (130+ missions).

Ce qu'ils font de fort, par ordre d'impact :

1. **Un livrable nommé ET montré** — « The Company Brain », plus une section « Real Company Brains » avec cinq cartographies clients réelles (secteur, stack technique, trouvailles chiffrées : « 22 handoff gaps identifiés », « 40+ Zaps déconnectés remplacés »). Et une carte **interactive et manipulable** sur le site.
2. **⚠️ La carte interactive est la LEUR, pas celle d'un client** : *« This is a real Company Brain, the one that maps our own client onboarding. »* → Zéro autorisation nécessaire pour faire pareil.
3. **L'offre d'entrée nommée** — « System Design Sprint », qui promet un montant : *« In 3-5 calls we typically surface $100k-$5M of unlocked operational growth. »*
4. **Un prototype cliquable avant tout engagement** — *« You see it. You click through it. You show it to your team. This is where you decide. »*
5. **L'objection de l'effort tuée net** — *« 3-5 calls over two weeks. Nothing to prep. Show up and talk. »*
6. **Le principe directeur** — *« You never leap into the dark. You see the map. You click through the prototype. You approve the roadmap. Only then does anything get built. »*
7. **Les secteurs en paragraphes de douleur à la 2ᵉ personne** — *« Same problems. Different language. We speak all of them. »* Le multi-secteur devient une preuve de compréhension au lieu d'un signe de flou.
8. **Construction en parallèle** — *« We don't touch what you have, until you've seen what's next. No disruption. No downtime. »*
9. L'urgence par le coût de l'inaction — *« The biggest risk isn't the money you spend on getting this right. It's the six months you waste trying to solve it the wrong way. »*

**Ce qu'on NE copie PAS** : les 130+ missions et 40+ témoignages (Nathan n'a pas le volume, on ne ment jamais) · la section « la team qui livre » (7 ingénieurs, pods de 2 devs — seul terrain où Nathan perd) · le ton américain.

## 2.3 ImpulseLab (FR) — le plus dangereux

Occupe exactement la même case. Équipe française, SEO local Paris/Lyon/Marseille/Toulouse — la stratégie de Nathan. Trois offres identiques aux siennes (AI Audit / Web & AI Platform / AI Adoption Support). **Ils affichent leurs prix** : 1 900 € l'audit, 5 000 € le build, « premiers résultats en 2 semaines ». Programme de parrainage 10 %. Espace client avec suivi hebdomadaire.

## 2.4 BlackFig — le modèle économique intéressant

Vend un **abonnement à 1 500 €/mois** au lieu d'un projet. Ça supprime le gros ticket initial et effondre le risque perçu. Consommation IA refacturée à prix coûtant, sans marge (signal de confiance). Livrable nommé « Living Map ». CTA *« Understand and scope your budget »* au lieu de « réserver un appel ».

---

# PARTIE III — L'IDENTITÉ DE MARQUE

C'est le cœur du dossier. Trois couches.

## 3.1 La thèse : la vérifiabilité

Nathan écrit déjà, sans l'avoir nommé : *« Du concret, pas des promesses. »* · *« La comparaison honnête. »* · *« Ne nous croyez pas sur parole. »* · *« Chaque chiffre est mesuré, documenté et vérifié. »*

Dans un marché saturé d'autoproclamés experts IA, son parti pris est **la redevabilité**. Formulation retenue :

> **Chaque promesse est mesurée — parce que celui qui promet est celui qui construit.**

Ce n'est pas un slogan à afficher, c'est une **règle de fabrication du site**, avec trois conséquences :

1. Aucune affirmation sans son chiffre ou sa source. Là où il n'y a pas de chiffre, on n'affirme pas.
2. On montre le travail, on ne le décrit pas.
3. On dit ce qu'on ne fait pas.

## 3.2 Le différenciateur non copiable

| | Qui écoute le client | Qui écrit le code |
|---|---|---|
| OpsKings | un consultant | 7 ingénieurs, pods de 2 devs, 3 continents |
| ImpulseLab | le fondateur | une « équipe senior » |
| BlackFig | un agent IA + un consultant | leur plateforme |
| **NateSystem** | **Nathan** | **Nathan** |

Chez les autres, le problème du client est entendu, documenté, transmis, traduit en specs, puis codé par quelqu'un d'autre — **trois traductions**. Chez NateSystem, zéro. Aucun concurrent ne peut se mettre à le revendiquer sans licencier son équipe.

> **La personne qui comprend votre métier est celle qui écrit votre logiciel. Vous expliquez une fois.**

**⚠️ RÈGLE DE FORMULATION, non négociable.** Nathan a explicitement rejeté « un seul opérateur » et « je suis tout seul à coder » : *« ça fait plus cheap que bien »*. On n'écrit **jamais** la taille, on écrit **la conséquence** :

- ❌ « Un seul opérateur », « je travaille seul », « structure à taille humaine »
- ✅ « Vous parlez à celui qui construit », « pas de brief à rédiger », « pas de specs traduites trois fois », « vous expliquez une fois »

**Contrepoids obligatoire à chaque usage** : code livré, propriété 100 %, équipes formées jusqu'à l'autonomie → *« vous ne dépendez pas de moi »*. Sans ce contrepoids, l'argument devient un risque au lieu d'un avantage. La question « et si vous disparaissez demain ? » existe déjà dans la FAQ : elle doit remonter dans la section « Qui construit ».

## 3.3 La signature visuelle — déjà là, jamais assumée

Instrument Serif italique, grain, grille fine, un seul rouge `#E63946`, fond profond. **Aucun des trois concurrents n'a une identité graphique de ce niveau.** OpsKings est corporate or/noir, ImpulseLab est SaaS générique, BlackFig est minimal froid. NateSystem est **éditorial** — ça ressemble à une revue, pas à une agence.

C'est l'actif le plus sous-estimé du site. Mais :

> **Il a la typographie d'une revue et la mise en page d'un template.**

Chaque section : label mono centré → titre serif centré → sous-titre centré → rangée de cartes. Quinze fois de suite. Une identité éditoriale, c'est de l'asymétrie, des marges qui respirent, une vraie hiérarchie de tailles, du texte qui alterne avec de l'image pleine largeur.

**Le chantier visuel n'est pas de redesigner. C'est d'arrêter de centrer.**

**Et le lien que personne n'avait fait** : le fond de grille de NateSystem *est* déjà un langage cartographique. La section cartographie n'est donc pas un corps étranger — c'est la charte qui devient littérale. Le fond arrête d'être une texture décorative et devient le sujet.

## 3.4 La ligne qui nomme le trou

> **Pour les PME trop structurées pour un freelance, trop petites pour une ESN.**

Calquée sur le « too big for freelancers, too smart for Big 4 » d'OpsKings — qui est exactement l'observation que Nathan avait faite spontanément sur son marché.

## 3.5 Le positionnement

> **Le logiciel et l'IA sont les MOYENS. Le résultat opérationnel est la PROMESSE.**

Nathan continue de vendre du logiciel sur-mesure intégrant l'IA — c'est la présentation qui change, pas le métier. Le hero actuel (« On construit vos logiciels & plateformes sur-mesure ») le range dans la catégorie *agence de dev*, où le prix s'ancre sur des jours-homme. C'est structurellement lié au fait que ses deals se signent bas.

---

# PARTIE IV — L'AUDIT MESURÉ

Puppeteer, mêmes conditions sur les deux sites, 26/07/2026.

| | NateSystem | OpsKings |
|---|---|---|
| First Contentful Paint | **504 ms** ✅ | 608 ms |
| Poids transféré | **1 225 KB** ✅ | 2 592 KB |
| Requêtes | 148 ⚠️ | **61** |
| Longueur de page | **14,9 écrans** | 20,7 écrans |
| Mots | 2 731 | 1 811 |
| Images | 36 ⚠️ | **125** |
| Sections H2 | 10 | 18 |
| 1er CTA visible à | 1 075 px ⚠️ | **22 px** |
| 1ᵉʳ chiffre de preuve à | **2 035 px** ✅ | 5 543 px |
| Nombre de CTA | 9 ⚠️ | **5** |
| Débordement mobile | aucun ✅ | aucun |

**Le site est rapide et léger. Il n'y a pas de dette technique.** Le problème est ailleurs.

## 4.1 Le défaut central, en un ratio

> **2 731 mots pour 36 images chez NateSystem. 1 811 mots pour 125 images chez OpsKings.**
> 50 % de texte en plus, 70 % d'images en moins.

Le site **raconte**, le leur **montre**. Et 10 sections H2 contre 18 : les sections sont longues, donc peu scannables. Pour un visiteur froid venu d'un cold email, qui scanne et donne cinq secondes, c'est le mauvais ratio.

## 4.2 Trois fuites de conversion

1. **Premier CTA à 1 075 px** — sur un portable (900 px de haut), un prospect froid arrive et ne voit aucune action possible sans scroller. OpsKings a un CTA sticky à 22 px.
2. **9 CTA concurrents** — « Réserver un appel », « Voir comment ça marche », « Démarrer l'audit » ×3, « Nous en parler », « Travaillons ensemble ». Aucune action ne domine.
3. **L'outbound atterrit sur la home générique.** Un prospect qui reçoit un mail sur ses plannings bénévoles et qui arrive sur une home générique ne fait pas le lien. Les pages sectorielles sont les vraies cibles des séquences.

## 4.3 Risque SEO à vérifier EN PRIORITÉ

`LangProvider` (`components/providers/LangProvider.tsx`) rend la page en français par défaut côté serveur, puis, au chargement, détecte `navigator.language`. Si le navigateur n'est pas francophone, il bascule tout le contenu en anglais et réécrit `document.documentElement.lang = "en"`. L'attribut et le contenu restent donc cohérents après hydratation — **il n'y a pas de contradiction `lang`/contenu**, contrairement à ce qui était écrit ici avant.

Le vrai risque est plus simple : **Google peut indexer la version anglaise de pages dont tout le SEO vise des requêtes françaises.** Le rendu de Googlebot tourne souvent dans une locale non francophone, donc il peut recevoir et indexer l'anglais sur la home et les pages où l'investissement est entièrement français. C'est ce que la capture Puppeteer (navigator `en-US`) a rendu visible : H1 anglais.

**Bug hreflang associé, non repéré au premier audit** (`app/layout.tsx`) : `alternates.languages` déclare `fr-FR` ET `en-US` vers la **même URL**. Google exige une URL distincte par langue ; une déclaration invalide vaut moins que pas de déclaration. Retirer la ligne `en-US` tant qu'il n'existe pas d'URL anglaise séparée.

→ **Vérifier via l'inspection d'URL de la Search Console** (tester l'URL en direct, regarder le H1 et le `lang` réellement rendus). Correctif retenu : forcer le français au rendu pour tous (visiteurs + crawlers), l'anglais seulement sur choix explicite du sélecteur. C'est un **patch assumé** : il rend la version anglaise invisible en recherche, ce qui est accepté vu la priorité SEO française. Le correctif propre, plus tard, est des routes localisées `/fr` `/en` avec hreflang valide — il y a un vrai marché anglophone à Budapest (Apple PS Hostess, Vendéglátás, ScrapAvis).

## 4.4 Non mesuré

Les contrastes : le script n'a pas résolu les arrière-plans, les chiffres sont inexploitables. L'observation de contraste faible (gris moyen sur noir sur une majorité de blocs) reste **visuelle, pas mesurée**.

## 4.5 Piège trouvé dans le repo

Les composants dormants `CostPain` et `Quantification` contiennent des **statistiques illustratives non validées** (47 %, 138 600 €). À valider, marquer explicitement « estimation », ou couper. Voir la règle d'or en Partie VII.

---

# PARTIE V — L'ARCHITECTURE CIBLE

## 5.1 Le diagnostic

**~30 pages, 3 entrées de menu.** Le menu actuel est **Agence · Outils · Ressources** — aucune de ces étiquettes ne dit ce que fait NateSystem ni comment il travaille.

Ce qui est caché derrière :
- `/services` **avec trois sous-pages** (audit, ia, logiciel-sur-mesure) — **absent du menu**
- 4 pages secteur + 7 pages villes
- `/prix-logiciel-sur-mesure`, `/reviews`, `/playbook`, `/glossaire`, `/blog`, `/a-propos`
- **Le Diagnostic IA** (`/tools/diagnostic-ia`), l'offre d'entrée, rangée sous « Outils »
- **Trois démos produit cliquables** (Reviews, Actifs, Stock) rangées sous « Outils » — alors que le prototype cliquable est l'arme n°1 identifiée. Ce sont des **preuves**, pas des utilitaires.

## 5.2 Le menu cible

| Menu | Contenu | État |
|---|---|---|
| **Méthode** | comment ça se passe, avec la carte interactive | **à créer** |
| **Réalisations** | cas clients + Chromosome + **les 3 démos live** | à regrouper (éclaté entre `/resources` et `/tools`) |
| **Services** ⌄ | Sprint Diagnostic · Logiciel sur-mesure · Système IA · Formation | existe, jamais montré |
| **Secteurs** ⌄ | restauration, club sportif, enseignement sup, conseil + villes | existe, invisible |
| **À propos** | qui construit | existe |
| **Ressources** ⌄ | blog, playbooks, glossaire, prix, Diagnostic IA | existe |
| **[Démarrer le Sprint Diagnostic]** | `/book` | CTA unique, sticky |

**On ne crée presque rien. On arrête de cacher ce qui existe déjà.**

## 5.3 La page Méthode

| # | Section | Contenu |
|---|---|---|
| 1 | Le principe | **« Cartographier, prototyper, puis construire »** — vous voyez la carte, vous cliquez dans le prototype, vous validez la feuille de route. **Ensuite seulement** on écrit du code. |
| 2 | Trois promesses courtes | « 3 à 5 appels sur deux semaines, **rien à préparer** » · « un prototype cliquable, pas un slide » · « le code vous appartient » |
| 3 | Pour qui | la ligne du trou de marché (§3.4) + le portrait ICP |
| 4 | Les 4 piliers | Cartographier · Unifier · Automatiser · **Former** ← un 4ᵉ pilier qu'OpsKings n'a pas |
| 5 | Les 4 étapes | Sprint Diagnostic → Prototype → Build (4-8 sem.) → Évolution |
| 6 | **La carte interactive** | ⭐ voir §6.2 — le plus gros levier du site |
| 7 | Ce que vous repartez avec | La Carte · Le Prototype · La Feuille de route chiffrée |
| 8 | Ce qu'on ne fait pas | la comparaison honnête à 4 colonnes |
| — | ❌ | **PAS de section « notre équipe »** — seul terrain où NateSystem perd |

## 5.4 La home devient une porte

Elle arrête de tout contenir. Elle donne envie et elle oriente vers les pages profondes.

| # | Section | Rôle | Source |
|---|---|---|---|
| 1 | Hero | résultat + modèle en 3 temps + une preuve + **un seul CTA** | réécrire |
| 2 | Logos clients | crédibilité immédiate | `ClientsBar` |
| 3 | Le constat | son quotidien, 2ᵉ personne | `Constat` + `CostPain` (dormants) |
| 4 | Ce que ça vous coûte | le chiffre de la perte → Diagnostic | `Quantification` (dormant ⚠️ stats à valider) |
| 5 | La méthode, en résumé | 3 temps + lien vers /methode | `Process` |
| 6 | Le Sprint Diagnostic | l'offre nommée + 3 livrables | à créer |
| 7 | Cas concrets | les 12 cas chiffrés | `CaseStudy` |
| 8 | Chromosome | vidéo Catherine F. + 4 stats | existe |
| 9 | Les démos cliquables | 3 démos live, mises en avant | à remonter de `/tools` |
| 10 | Pour votre métier | paragraphes de douleur par secteur | `ForWho` + pages secteur |
| 11 | Comparaison 4 colonnes | lever l'objection | `Comparison` v2 |
| 12 | Qui construit | Nathan + bus factor traité ici | `AboutNathan` |
| 13 | La garantie | section pleine, plus un bandeau gris | `Guarantees` (dormant) |
| 14 | FAQ | objections restantes | `Faq` |
| 15 | CTA final | « Démarrer le Sprint Diagnostic » | `CtaFinal` |

**Fusionner ou supprimer** : `Transformation`, `Systems`, `Solutions`, `Twist`, `WhatWeBuild` — cinq sections qui disent la même chose deviennent deux au maximum.

**Composants dormants à réveiller** : `Constat`, `CostPain`, `Problem`, `Quantification`, `ForWho`, `Guarantees`, `AuditOffer`, `Results`, `ResultsMetrics`, `Testimonial`. Vérifier leur contenu — certains sont périmés.

---

# PARTIE VI — L'OFFRE ET SON LIVRABLE

## 6.1 Le Sprint Diagnostic

| Élément | Contenu |
|---|---|
| **Format** | 2 semaines · 3 à 5 appels · **rien à préparer** |
| **Livrable 1** | **La Carte** — comment l'activité tourne réellement |
| **Livrable 2** | **Le Prototype** — cliquable, sur son métier, **avant tout engagement** |
| **Livrable 3** | **La Feuille de route chiffrée** — quoi construire, dans quel ordre, pour combien |
| **Promesse** | *« En 2 semaines vous savez exactement où partent vos heures et votre argent — et vous cliquez dans le logiciel qui les récupère, avant d'avoir signé quoi que ce soit. »* |

**Le prototype cliquable est l'unlock.** `Prototypes-archive/`, EventiQ, EstateIQ, RestaurantIQ, NateClub, autoshop, brasserie : Nathan sort des prototypes plus vite que quiconque et il a un design system pour ça. Ce qu'il prenait pour de l'over-building est sa meilleure arme commerciale.

## 6.2 Rendre le process désirable — LE défi

Nathan valide l'angle process mais alerte : *« c'est un sujet boring et les gens ont l'impression de devoir faire des efforts alors que non »*. Trois raisons : c'est abstrait, ça sent le travail pour lui, c'est le moyen pas le résultat. Quatre leviers :

**1. Le nom fait 80 % du travail.** Personne ne dit « process map ». OpsKings dit *Company Brain*, BlackFig dit *Living Map*.
Pistes proposées : **La Radiographie** (recommandée — un patient ne fournit aucun effort pour une radio, le mot règle le problème d'effort à lui seul) · Le Plan de vol · La Carte.
🔲 **DÉCISION EN ATTENTE DE NATHAN.**

**2. Chiffrer l'effort comme on chiffre le gain.**
> *3 appels. 45 minutes chacun. Rien à préparer, rien à remplir, aucun document à nous envoyer. Vous parlez de votre métier, le travail c'est nous qui le faisons.*
Aujourd'hui le prospect **imagine** le coût — et il imagine toujours pire.

**3. Ne jamais montrer la carte seule — montrer le chaos qui devient la carte.** La section Avant/Après existante (« Devis #142 · en retard », « 12 non lus », « −2 400 € perdus ? ») est **le meilleur visuel du site** et le seul qui échappe au gabarit centré. L'animation : le chaos qui s'organise, les post-its qui se rangent, les flèches qui se dessinent.

**4. Mettre les chiffres SUR la carte.** *« ici : 4 h/semaine · ici : 3 ressaisies de la même donnée · ici : 12 jours d'attente »*. La carte cesse d'être un schéma et devient un diagnostic. Chaque point rouge est un endroit facturable. Ajouter survol / drag / zoom : le document devient un objet avec lequel on joue.

**⭐ Et le point le plus actionnable de tout ce dossier** : la carte interactive d'OpsKings est **la leur**, pas celle d'un client. Nathan peut cartographier **son propre déroulé de mission** — du premier appel à la formation finale — et la rendre manipulable. **Aucune autorisation client nécessaire, faisable immédiatement.** C'est sa preuve la plus forte et elle ne dépend que de lui.

## 6.3 Deux voies d'entrée, une seule offre

Le piège serait un menu de services. La bonne question n'est pas *« quelle solution voulez-vous »* (il ne sait pas, c'est son problème) mais *« où en êtes-vous »* (ça, tout le monde sait le dire) :

| Voie | Pour qui | Ce qui se passe |
|---|---|---|
| **« Je sais ce qu'il me faut »** | besoin déjà clair | cadrage court, prototype rapide, build direct |
| **« Ça coince, je ne sais pas où »** | douleur diffuse | Sprint Diagnostic complet |

Les deux arrivent au même endroit : **un prototype cliquable avant tout engagement**.

⚠️ Garde-fou : le client qui « dit son besoin » énonce souvent un **symptôme**. Prendre la commande = petit ticket et métier de freelance. Ne jamais vendre la voie rapide comme « dites-moi quoi coder ».

## 6.4 La comparaison à 4 colonnes

| | Freelance | ESN / agence | SaaS du marché | NateSystem |
|---|---|---|---|---|
| Comprend votre métier | parfois | rarement | jamais | c'est le point de départ |
| Qui code | lui | un junior | personne | celui à qui vous parlez |
| Le code vous appartient | souvent | non | non | 100 %, livré |
| Si ça se passe mal | vous perdez tout | avenant | vous partez | vous gardez le système |
| Vos données | variable | variable | souvent hors UE | UE, RGPD-natif |

## 6.5 Lead magnets

**Existants, sous-exploités** : le Diagnostic IA (`/tools/diagnostic-ia` — *« en 4 minutes, mesurez ce que votre PME perd chaque mois »*, sans email, sans gate) · 13 playbooks sectoriels · 3 démos produit cliquables.

**Le Diagnostic IA doit devenir la porte d'entrée principale**, pas un gadget de sous-menu. Il produit exactement le chiffre de la perte, qui est le coin d'entrée de l'ICP.

**Candidat à créer** : un exemple de Radiographie anonymisé, téléchargeable. C'est le lead magnet qui démontre le livrable.

⚠️ Nathan a demandé de **ne pas mettre les playbooks en avant pour l'instant** — priorité à l'audit gratuit de 45 min.

---

# PARTIE VII — RÈGLES DE COPIE ET GARDE-FOUS

## 7.1 La règle d'or

**Aucun chiffre, nom de client ou témoignage publié sans validation explicite de Nathan.** En cas de besoin, poser un placeholder visible `[[À VALIDER : ...]]` plutôt qu'inventer.

## 7.2 Chiffres autorisés — liste fermée

Déjà publics sur le site :
- Chromosome : **11 h → 1 h** par semaine par manager · **14 h** libérées/semaine · **~55** collaborateurs · **99 %** des opérations sur du logiciel leur appartenant
- *« Ça a changé notre façon de tout gérer. »* — **Catherine F.**, General Manager, Chromosome Saint-Étienne
- Conseil B2B : relance **4 % → 12 %**
- Réactivation dormants : **+45 K€/an** sur 500 contacts à 3 %
- Qualification leads : **+10 %** de conversion = **+20 K€/an**
- BTP 50 salariés : **500 h/an**
- Achats F&B : **~3-5 %** de marge
- Événementiel : no-shows **÷3**, coordination **÷2**
- Automatisation admin : **ROI en 2 mois**
- Moyenne clients : **10 h+** par semaine
- **Impact mesurable en moins de 30 jours · Garantie résultat**
- Mise en production : **4 à 8 semaines**

**En attente** : autorisation Chartreux / UJM (Nathan doit relancer Juliette). Le club sportif est un **prototype**, jamais à présenter comme cas client.

**Le payback Chromosome, non publié** : 25 480 €/an récupérés = 2 123 €/mois pour 2 000 € de setup → **remboursé en moins d'un mois**, contre un médian marché de 4,2 mois sur 50+ déploiements PME. Mais c'est **un** cas, et à 15 000 € le payback passe à 7 mois. Si Nathan monte en prix, il doit monter le gain prouvé en face. 🔲 À valider avant publication.

## 7.3 Ce qui sonne IA — à éviter absolument

Nathan repère et rejette :
- **les structures parallèles** (« Je cartographie… Je construis… J'y intègre… Puis je forme… ») — la symétrie est le marqueur n°1
- les tirets cadratins et les formules antithétiques empilées (« pas X, pas Y ») — une fois ça passe, trois fois c'est une machine
- les titres en gras avec listes, qui font document généré
- la petite chute élégante en fin de paragraphe
- **les aphorismes creux** — il a fait supprimer sa propre phrase *« le problème n'est presque jamais la technologie, c'est ce qu'on décide avant de la choisir »*

→ Correctif : phrases de longueurs irrégulières, registre parlé (« une dizaine d'heures » plutôt que « 10 h », « une boîte de 50 personnes » plutôt que « une entreprise »).

## 7.4 Ton et vocabulaire

Direct, concret, zéro jargon tech en façade (jamais LLM, RAG, API), zéro hype (jamais révolutionnaire, disruptif). Validé : *sur-mesure*, *propriétaire*, *IA intégrée*. On parle au dirigeant, pas au DSI. Vouvoiement sur le site.

## 7.5 Charte graphique

- Accent : `#E63946` (`var(--accent)`), **aucune autre couleur d'accent**
- Titres : Instrument Serif italique · Texte : DM Sans · Labels : JetBrains Mono uppercase
- Tokens dans `app/globals.css`, **jamais de hex en dur**
- Dark ET light (classe `html.light`) doivent fonctionner
- ⚠️ **Ne PAS utiliser la skill `natesystem-design`** (indigo `#5b5bd6`) — c'est le design system *produit*, pas la charte du site. Source de vérité : `app/globals.css`.

## 7.6 Stack

Next.js 14 App Router · TypeScript strict · Tailwind 3 · framer-motion · lucide-react · `CAL_LINK` dans `lib/constants.ts`.
**i18n** : `lib/i18n.ts`, dictionnaire plat `'clé': { en, fr }`, 1371 lignes, hook `useLang()` → `t()`. Toute nouvelle chaîne y passe, en FR **et** EN.

---

# PARTIE VIII — EXÉCUTION

| Lot | Contenu | Dépendance |
|---|---|---|
| **0** | Vérifier le bug de langue en Search Console (§4.3) | aucune — **à faire en premier** |
| **1** | Architecture : le menu, les regroupements, CTA sticky unique, passer de 9 à 2 CTA | aucune |
| **2** | La page Méthode + **la Radiographie de son propre process** | le nom (§6.2) |
| **3** | La home : remontage, réveil des composants dormants, fusion des 5 sections redondantes, inversion du ratio texte/image | §7.2 validé |
| **4** | Le Sprint Diagnostic comme offre nommée + refonte du Diagnostic IA en porte d'entrée | décisions Nathan |
| **5** | Cartographies clients réelles anonymisées | accords clients |

## Décisions qui appartiennent à Nathan

1. 🔲 **Le nom du livrable** — La Radiographie / Le Plan de vol / La Carte
2. 🔲 **Le prototype avant engagement** — il le fait ou pas (levier n°1, mais du temps non facturé)
3. 🔲 **La garantie** — ce qu'il affiche exactement, avec quelles conditions
4. 🔲 **Les chiffres publiables** — payback Chromosome, autorisation Chartreux, stats de `CostPain`/`Quantification`
5. 🔲 **L'ICP nommé** — recommandation : « PME de 20 à 100 personnes, 2 à 20 M€ », à la manière du « 5-100 M$ » d'OpsKings. Nommer un chiffre qualifie *et* disqualifie, et c'est ce qui fait sérieux.
6. 🔲 **La référence de mesure** — combien de visiteurs et d'appels bookés le mois dernier ? Sans ça, impossible de savoir si la v2 est meilleure. Google Analytics + Cal.com, dix minutes.

---

## Ce qui rend NateSystem unique sur le marché français

Pas la description du service — elle est identique partout. Quatre choses, dans cet ordre :

1. **L'interlocuteur est le constructeur** — structurellement impossible à copier pour une agence.
2. **La carte de son propre process, montrée et manipulable** — personne ne le fait en France.
3. **Le prototype cliquable avant paiement** — il sait déjà les produire vite.
4. **L'identité éditoriale** — la seule vraie direction artistique du marché, à condition d'arrêter de tout centrer.
