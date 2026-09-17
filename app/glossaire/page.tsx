'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import type { Lang } from '@/lib/i18n'
import { localizedHref, hasTranslation } from '@/lib/routes'

type Term = {
  term: string
  def: string
  href?: string // internal link to deepen
  linkLabel?: string
  /* La version anglaise. Les `href` pointent presque tous vers des articles de
     blog français, qui n'ont pas d'équivalent anglais : ils sont filtrés au
     rendu plutôt que traduits en lien mort. */
  termEn: string
  defEn: string
  linkLabelEn?: string
  termHu: string
  defHu: string
  linkLabelHu?: string
}

// Curated to NateSystem's domain (custom software + AI + automation for PME).
// Short, AI-citable definitions + internal mesh. Quality over PeakLab-style volume.
const terms: Term[] = [
  { term: 'Agent IA', def: 'Programme d\'intelligence artificielle conçu pour accomplir une tâche de bout en bout (prospection, support, reporting) avec une supervision humaine minimale. Contrairement à un chatbot qui répond, un agent agit.', href: '/blog/agents-ia-vs-chatgpt-quelle-difference', linkLabel: 'Agents IA vs ChatGPT', termEn: 'AI agent', defEn: 'An artificial-intelligence program built to carry a task from start to finish (prospecting, support, reporting) with minimal human supervision. Where a chatbot answers, an agent acts.', linkLabelEn: 'AI agents vs ChatGPT', termHu: 'MI-ágens', defHu: 'Mesterséges intelligenciára épülő program, amely egy feladatot elejétől a végéig elvégez (ügyfélszerzés, ügyfélszolgálat, riportálás), minimális emberi felügyelettel. Míg a chatbot válaszol, az ágens cselekszik.' },
  { term: 'IA agentique', def: 'Approche de l\'IA où le système ne se contente pas de répondre mais exécute des actions multi-étapes dans vos outils (lire, décider, agir) pour atteindre un objectif défini.', termEn: 'Agentic AI', defEn: 'An approach to AI where the system does more than answer: it runs multi-step actions inside your tools (read, decide, act) to reach a defined goal.', termHu: 'Ágens MI', defHu: 'Az MI olyan megközelítése, ahol a rendszer nem csak válaszol, hanem többlépcsős műveleteket hajt végre az eszközeiben (olvas, dönt, cselekszik) egy meghatározott cél érdekében.' },
  { term: 'IA générative', def: 'Intelligence artificielle qui produit du contenu (texte, image, code) à partir d\'une consigne. Elle répond et génère à la demande, là où un agent exécute une tâche complète.', href: '/blog/ia-generative-vs-agents-ia-autonomes-guide-dirigeants', linkLabel: 'IA générative vs agents IA', termEn: 'Generative AI', defEn: 'Artificial intelligence that produces content (text, image, code) from an instruction. It answers and generates on demand, where an agent carries out a whole task.', linkLabelEn: 'Generative AI vs AI agents', termHu: 'Generatív MI', defHu: 'Mesterséges intelligencia, amely utasításból tartalmat állít elő (szöveget, képet, kódot). Kérésre válaszol és generál, míg az ágens egy egész feladatot elvégez.' },
  { term: 'LLM (Large Language Model)', def: 'Grand modèle de langage entraîné sur d\'énormes volumes de texte (GPT, Claude, Mistral…). C\'est le moteur derrière la plupart des outils d\'IA générative et des agents.', termEn: 'LLM (Large Language Model)', defEn: 'A large language model trained on enormous volumes of text (GPT, Claude, Mistral and others). It is the engine behind most generative AI tools and agents.', termHu: 'LLM (nagy nyelvi modell)', defHu: 'Hatalmas szövegmennyiségen tanított nagy nyelvi modell (GPT, Claude, Mistral és társaik). Ez a motor a legtöbb generatív MI-eszköz és ágens mögött.' },
  { term: 'RAG (Retrieval-Augmented Generation)', def: 'Technique qui connecte un LLM à votre base de connaissances : l\'IA va chercher l\'information dans vos documents avant de répondre, ce qui la rend fiable sur VOS données.', termEn: 'RAG (Retrieval-Augmented Generation)', defEn: 'A technique that connects an LLM to your own knowledge base: the AI looks the information up in your documents before answering, which makes it reliable on YOUR data.', termHu: 'RAG (keresésselbővített generálás)', defHu: 'Technika, amely egy LLM-et a saját tudásbázisához köt: az MI a válasz előtt megkeresi az információt a dokumentumaiban, ettől lesz megbízható AZ ÖN adatain.' },
  { term: 'Prompt engineering', def: 'Art de formuler les consignes données à une IA pour obtenir un résultat juste. C\'est souvent 60 à 70 % de la réussite d\'un projet IA, plus que le choix du modèle.', termEn: 'Prompt engineering', defEn: 'The craft of writing the instructions you give an AI so it returns the right result. It is often 60 to 70 % of what makes an AI project work, more than the choice of model.', termHu: 'Promptmérnökség', defHu: 'Az a mesterség, ahogyan az MI-nek adott utasításokat megfogalmazzuk, hogy helyes eredményt adjon. Gyakran ez teszi ki egy MI-projekt sikerének 60-70%-át, többet, mint a modell megválasztása.' },
  { term: 'Automatisation', def: 'Exécution automatique de tâches répétitives (facturation, relances, reporting) sans intervention humaine. Selon McKinsey, ~30 % du temps de travail est automatisable.', href: '/blog/automatisation-pme-guide-2026', linkLabel: 'Guide de l\'automatisation PME', termEn: 'Automation', defEn: 'Running repetitive tasks (invoicing, follow-ups, reporting) without anyone touching them. According to McKinsey, around 30 % of working time can be automated.', linkLabelEn: 'Guide to automation for small companies', termHu: 'Automatizálás', defHu: 'Ismétlődő feladatok (számlázás, utánkövetés, riportálás) futtatása emberi beavatkozás nélkül. A McKinsey szerint a munkaidő nagyjából 30%-a automatizálható.' },
  { term: 'No-code', def: 'Outils permettant de créer des automatisations ou des applications sans programmer (Make, Zapier, Airtable). Parfait pour prototyper, mais plafonné quand le besoin devient critique.', href: '/blog/make-vs-zapier-vs-n8n-comparatif', linkLabel: 'Make vs Zapier vs n8n', termEn: 'No-code', defEn: 'Tools that let you build automations or applications without programming (Make, Zapier, Airtable). Ideal for prototyping, but they hit a ceiling once the need becomes critical.', linkLabelEn: 'Make vs Zapier vs n8n', termHu: 'No-code', defHu: 'Eszközök, amelyekkel programozás nélkül lehet automatizmusokat vagy alkalmazásokat építeni (Make, Zapier, Airtable). Prototípusra kiváló, de falba ütközik, amint az igény kritikussá válik.' },
  { term: 'API', def: 'Interface qui permet à deux logiciels d\'échanger des données automatiquement. En 2026, la capacité d\'intégration via API est devenue le premier critère de choix d\'un logiciel de gestion.', termEn: 'API', defEn: 'An interface that lets two pieces of software exchange data automatically. In 2026, how well a tool integrates by API has become the first criterion when choosing business software.', termHu: 'API', defHu: 'Felület, amely lehetővé teszi, hogy két szoftver automatikusan adatot cseréljen. 2026-ban az API-n keresztüli integrálhatóság lett az első szempont üzleti szoftver választásakor.' },
  { term: 'ERP / PGI', def: 'Progiciel de gestion intégré qui centralise les fonctions de l\'entreprise (finance, stocks, RH, ventes) dans une base unique. Puissant mais standardisé et long à déployer.', href: '/blog/cest-quoi-un-erp-pme', linkLabel: 'C\'est quoi un ERP', termEn: 'ERP', defEn: 'Enterprise resource planning: a suite that centralises the company’s functions (finance, stock, HR, sales) in one database. Powerful, but standardised and slow to deploy.', linkLabelEn: 'What an ERP actually is', termHu: 'ERP (vállalatirányítási rendszer)', defHu: 'Integrált rendszer, amely egy adatbázisban fogja össze a cég funkcióit (pénzügy, készlet, HR, értékesítés). Erős, de szabványosított és lassan bevezethető.' },
  { term: 'CRM', def: 'Customer Relationship Management : logiciel de gestion de la relation client (contacts, opportunités, suivi commercial). Souvent au cœur des opérations d\'une PME.', termEn: 'CRM', defEn: 'Customer Relationship Management: software for managing the client relationship (contacts, opportunities, sales follow-up). Often at the heart of a small company’s operations.', termHu: 'CRM', defHu: 'Customer Relationship Management: ügyfélkapcsolat-kezelő szoftver (kapcsolatok, lehetőségek, értékesítési utánkövetés). Gyakran egy kkv működésének a szíve.' },
  { term: 'Logiciel sur-mesure', def: 'Logiciel métier conçu spécifiquement pour une entreprise, par opposition à un produit standard. Il épouse vos process et, bien fait, vous appartient (code livré).', href: '/logiciel-sur-mesure-vs-saas', linkLabel: 'Sur-mesure vs SaaS', termEn: 'Custom software', defEn: 'Business software designed specifically for one company, as opposed to a standard product. It follows your processes and, done properly, belongs to you (code delivered).', linkLabelEn: 'Custom vs SaaS', termHu: 'Egyedi szoftver', defHu: 'Kifejezetten egy cégre tervezett üzleti szoftver, szemben a dobozos termékkel. Az Ön folyamatait követi, és jól megcsinálva az Öné (a kód átadásra kerül).' },
  { term: 'SaaS', def: 'Software as a Service : logiciel loué par abonnement, hébergé par l\'éditeur. Rapide à démarrer, mais vous ne possédez rien et le coût court à vie.', href: '/blog/alternative-saas-sur-mesure-remplacer-logiciel', linkLabel: 'Alternative au SaaS', termEn: 'SaaS', defEn: 'Software as a Service: software rented by subscription and hosted by its publisher. Quick to start with, but you own nothing and the cost runs for life.', linkLabelEn: 'An alternative to SaaS', termHu: 'SaaS', defHu: 'Software as a Service: előfizetéssel bérelt, a szolgáltató által üzemeltetett szoftver. Gyorsan indul, de semmit nem birtokol, és a költség élethosszig fut.' },
  { term: 'SaaS-spaghetti', def: 'Empilement d\'outils SaaS qui ne communiquent pas entre eux, où l\'on passe plus de temps à faire le lien qu\'à travailler. Le problème n°1 d\'efficacité des PME.', href: '/blog/cout-reel-outils-non-connectes-pme', linkLabel: 'Le coût des outils non connectés', termEn: 'SaaS spaghetti', defEn: 'A pile of SaaS tools that do not talk to each other, where you spend more time bridging them than working. The number one efficiency problem in small companies.', linkLabelEn: 'The cost of disconnected tools', termHu: 'SaaS-spagetti', defHu: 'Egymással nem beszélő SaaS-eszközök halma, ahol több időt tölt az összekötésükkel, mint a munkával. A kkv-k első számú hatékonysági problémája.' },
  { term: 'Propriété du code', def: 'Le fait que le code source d\'un logiciel vous soit livré et vous appartienne à 100 %. C\'est ce qui distingue un actif (sur-mesure) d\'une location (SaaS).', termEn: 'Code ownership', defEn: 'The fact that a piece of software’s source code is delivered to you and belongs to you, 100 %. It is what separates an asset (custom) from a rental (SaaS).', termHu: 'A kód tulajdonjoga', defHu: 'Az, hogy egy szoftver forráskódját átadják Önnek, és az 100%-ban az Öné. Ez választja el a vagyont (egyedi) a bérléstől (SaaS).' },
  { term: 'Réversibilité', def: 'Capacité à récupérer votre logiciel, vos données et la documentation pour les confier à un autre prestataire. Sans elle, vous êtes captif. Critère clé du choix d\'un prestataire.', href: '/blog/comment-choisir-prestataire-logiciel-ia', linkLabel: 'Choisir son prestataire', termEn: 'Reversibility', defEn: 'The ability to take back your software, your data and the documentation and hand them to another supplier. Without it you are captive. A key criterion when choosing who builds for you.', linkLabelEn: 'Choosing your supplier', termHu: 'Visszafordíthatóság', defHu: 'Az a képesség, hogy a szoftverét, az adatait és a dokumentációt visszavegye, és másik szolgáltatónak adja. Enélkül foglyul esik. Kulcsszempont a kivitelező kiválasztásakor.' },
  { term: 'RGPD', def: 'Règlement général sur la protection des données : cadre européen qui encadre le traitement des données personnelles. Avec l\'IA, RGPD et règlement IA s\'appliquent simultanément.', href: '/blog/rgpd-ia-ou-vont-les-donnees-entreprise', linkLabel: 'RGPD et IA', termEn: 'GDPR', defEn: 'General Data Protection Regulation: the European framework governing the processing of personal data. With AI, GDPR and the AI Act apply at the same time.', linkLabelEn: 'GDPR and AI', termHu: 'GDPR', defHu: 'Általános adatvédelmi rendelet: a személyes adatok kezelését szabályozó európai keret. MI esetén a GDPR és az MI-rendelet egyszerre alkalmazandó.' },
  { term: 'Cloud Act', def: 'Loi américaine de 2018 permettant aux autorités US d\'accéder aux données détenues par une entreprise américaine, même si les serveurs sont en Europe. D\'où l\'enjeu de la souveraineté.', termEn: 'Cloud Act', defEn: 'A 2018 US law allowing American authorities to reach data held by an American company, even when the servers sit in Europe. Hence the question of sovereignty.', termHu: 'Cloud Act', defHu: '2018-as amerikai törvény, amely lehetővé teszi az USA hatóságainak, hogy hozzáférjenek egy amerikai cég birtokában lévő adatokhoz, akkor is, ha a szerverek Európában állnak. Innen a szuverenitás kérdése.' },
  { term: 'Souveraineté des données', def: 'Garder ses données sous contrôle juridictionnel européen, hors de portée du Cloud Act. Suppose un hébergement UE et un fournisseur sans lien capitalistique US.', termEn: 'Data sovereignty', defEn: 'Keeping your data under European jurisdiction, out of reach of the Cloud Act. It assumes EU hosting and a supplier with no US ownership.', termHu: 'Adatszuverenitás', defHu: 'Az adatok európai joghatóság alatt tartása, a Cloud Act hatókörén kívül. EU-s tárhelyet és amerikai tulajdon nélküli szolgáltatót feltételez.' },
  { term: 'Hébergement UE', def: 'Stockage des données sur des serveurs situés en Union européenne, soumis au RGPD. Un argument de conformité de plus en plus décisif, notamment pour le secteur public.', termEn: 'EU hosting', defEn: 'Storing data on servers located in the European Union, under GDPR. A compliance argument that weighs more every year, particularly in the public sector.', termHu: 'EU-s tárhely', defHu: 'Az adatok tárolása az Európai Unióban található szervereken, a GDPR hatálya alatt. Évről évre nagyobb súlyú megfelelőségi érv, különösen a közszférában.' },
  { term: 'Base de données', def: 'Système qui stocke et organise les données de l\'entreprise de façon structurée. Une base centralisée est le socle indispensable à toute IA opérationnelle.', href: '/blog/construire-base-donnees-centralisee-pme-guide', linkLabel: 'Construire une base centralisée', termEn: 'Database', defEn: 'The system that stores and organises a company’s data in a structured way. One central database is the foundation any working AI needs.', linkLabelEn: 'Building a central database', termHu: 'Adatbázis', defHu: 'A rendszer, amely strukturáltan tárolja és rendezi a cég adatait. Egyetlen központi adatbázis az alap, amelyre minden működő MI épül.' },
  { term: 'PostgreSQL', def: 'Base de données relationnelle open-source réputée pour sa robustesse. C\'est le socle technique recommandé pour bâtir un logiciel métier évolutif.', termEn: 'PostgreSQL', defEn: 'An open-source relational database known for its robustness. It is the technical foundation we recommend for building business software that can grow.', termHu: 'PostgreSQL', defHu: 'Nyílt forráskódú relációs adatbázis, amelyet a robusztussága tett ismertté. Ezt ajánljuk technikai alapként növekedni képes üzleti szoftverhez.' },
  { term: 'Supabase', def: 'Plateforme open-source bâtie sur PostgreSQL (base, authentification, API, temps réel). Auto-hébergeable en UE, un bon socle pour une application sur-mesure.', href: '/blog/supabase-vs-airtable-pme', linkLabel: 'Supabase vs Airtable', termEn: 'Supabase', defEn: 'An open-source platform built on PostgreSQL (database, authentication, API, real time). Self-hostable in the EU, and a solid base for a custom application.', linkLabelEn: 'Supabase vs Airtable', termHu: 'Supabase', defHu: 'PostgreSQL-re épülő nyílt forráskódú platform (adatbázis, hitelesítés, API, valós idejű működés). Az EU-ban önállóan üzemeltethető, és szilárd alap egyedi alkalmazáshoz.' },
  { term: 'Webhook', def: 'Mécanisme qui notifie un logiciel en temps réel quand un événement se produit dans un autre. Brique de base des automatisations entre outils.', termEn: 'Webhook', defEn: 'A mechanism that notifies one piece of software in real time when something happens in another. The basic building block of automation between tools.', termHu: 'Webhook', defHu: 'Mechanizmus, amely valós időben értesíti az egyik szoftvert, ha a másikban történik valami. Az eszközök közötti automatizálás alapköve.' },
  { term: 'Dashboard', def: 'Tableau de bord qui affiche les indicateurs clés (KPI) de l\'activité en temps réel, pour décider vite sans aller chercher l\'information dans plusieurs outils.', termEn: 'Dashboard', defEn: 'A screen showing the key indicators of the business in real time, so you can decide fast without hunting for the information across several tools.', termHu: 'Irányítópult', defHu: 'Képernyő, amely valós időben mutatja a működés kulcsmutatóit, hogy gyorsan dönthessen anélkül, hogy több eszközben keresgélne.' },
  { term: 'KPI', def: 'Key Performance Indicator : indicateur de performance qui mesure l\'avancée vers un objectif (chiffre d\'affaires, temps de traitement, taux de conversion).', termEn: 'KPI', defEn: 'Key Performance Indicator: a measure of progress towards a goal (revenue, processing time, conversion rate).', termHu: 'KPI', defHu: 'Key Performance Indicator: mutató, amely a cél felé haladást méri (árbevétel, átfutási idő, konverziós arány).' },
  { term: 'ROI', def: 'Retour sur investissement : ce que rapporte un projet rapporté à son coût. En automatisation/IA, le bon ROI se mesure en heures réellement remplacées.', termEn: 'ROI', defEn: 'Return on investment: what a project brings in, measured against what it costs. In automation and AI, a real return is counted in hours actually replaced.', termHu: 'Megtérülés (ROI)', defHu: 'Return on investment: amit egy projekt hoz, a költségéhez mérve. Automatizálásban és MI-ben a valódi megtérülés a ténylegesen kiváltott órákban mérhető.' },
  { term: 'POC (Proof of Concept)', def: 'Prototype fonctionnel construit rapidement (souvent 3 à 6 semaines) pour valider qu\'une idée marche et chiffrer son ROI avant d\'investir pleinement.', termEn: 'POC (Proof of Concept)', defEn: 'A working prototype built quickly (often 3 to 6 weeks) to prove an idea works and to price its return before investing fully.', termHu: 'POC (koncepció igazolása)', defHu: 'Gyorsan megépített, működő prototípus (gyakran 3-6 hét), amely bizonyítja, hogy az ötlet működik, és beárazza a megtérülését, mielőtt teljesen befektetne.' },
  { term: 'MVP', def: 'Minimum Viable Product : première version d\'un logiciel réduite à l\'essentiel, mise en service vite pour être testée et améliorée avec de vrais utilisateurs.', termEn: 'MVP', defEn: 'Minimum Viable Product: the first version of a piece of software, cut back to the essentials and put in service fast so it can be tested and improved with real users.', termHu: 'MVP', defHu: 'Minimum Viable Product: egy szoftver első, a lényegre szűkített változata, amelyet gyorsan élesítenek, hogy valódi felhasználókkal tesztelhessék és fejleszthessék.' },
  { term: 'OCR', def: 'Reconnaissance optique de caractères : lecture automatique du texte dans un document (facture, contrat). Couplée à l\'IA, elle automatise la saisie des données.', termEn: 'OCR', defEn: 'Optical character recognition: reading text automatically out of a document (invoice, contract). Paired with AI, it removes the data entry.', termHu: 'OCR', defHu: 'Optikai karakterfelismerés: a szöveg automatikus kiolvasása egy dokumentumból (számla, szerződés). MI-vel párosítva megszünteti az adatbevitelt.' },
  { term: 'Lock-in (dépendance fournisseur)', def: 'Situation où il devient très coûteux ou impossible de quitter un logiciel/éditeur. Le sur-mesure avec code livré et réversibilité élimine ce risque.', termEn: 'Lock-in (supplier dependency)', defEn: 'A situation where leaving a piece of software or its publisher becomes very costly or impossible. Custom software with the code delivered and reversibility removes that risk.', termHu: 'Bezártság (szolgáltatófüggőség)', defHu: 'Olyan helyzet, amelyben egy szoftver vagy annak gyártója elhagyása nagyon költségessé vagy lehetetlenné válik. Az átadott kóddal és visszafordíthatósággal működő egyedi szoftver megszünteti ezt a kockázatot.' },
]

function glossaryJsonLd(lang: Lang) {
  const url =
    lang === 'en' ? 'https://www.natesystem.com/en/glossaire' : 'https://www.natesystem.com/glossaire'
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${url}#glossary`,
    name:
      lang === 'en'
        ? 'NateSystem glossary: custom software, AI & automation'
        : 'Glossaire NateSystem, logiciel sur-mesure, IA & automatisation',
    url,
    inLanguage: lang === 'en' ? 'en' : 'fr-FR',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: lang === 'en' ? t.termEn : lang === 'hu' ? t.termHu : t.term,
      description: lang === 'en' ? t.defEn : lang === 'hu' ? t.defHu : t.def,
      inDefinedTermSet: `${url}#glossary`,
    })),
  }
}

export default function GlossairePage() {
  const { lang } = useLang()
  const d = makeD(lang)
  const sorted = [...terms].sort((a, b) =>
    lang === 'fr' ? a.term.localeCompare(b.term, 'fr') : lang === 'en' ? a.termEn.localeCompare(b.termEn, 'en') : a.termHu.localeCompare(b.termHu, 'hu')
  )

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd(lang)) }} />
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 760 }}>
          <span className="section-label">{d('Glossaire', 'Glossary', 'Szójegyzék')}</span>
          <h1
            className="font-serif italic"
            style={{ fontSize: 'clamp(32px, 5.4vw, 50px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 680, margin: '14px auto 20px' }}
          >
            {d('Le vocabulaire du logiciel sur-mesure et de l\u2019', 'The vocabulary of custom software and ', 'Az egyedi szoftver és az ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('IA, en clair.', 'AI, in plain words.', 'MI szókincse, érthetően.')}</span>
          </h1>
          <p className="font-sans" style={{ fontSize: 16, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.65 }}>
            {d(
              'Les termes du logiciel métier, de l\u2019intelligence artificielle et de l\u2019automatisation, définis simplement, pour des dirigeants de PME, sans jargon inutile.',
              'The terms of business software, artificial intelligence and automation, defined simply, for company owners, with no needless jargon.'
            , 'Az üzleti szoftver, a mesterséges intelligencia és az automatizálás fogalmai egyszerűen megfogalmazva, cégvezetőknek, felesleges szakzsargon nélkül.')}
          </p>
        </div>
      </section>

      <Divider />

      <section style={{ padding: '60px 24px 40px' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <dl style={{ display: 'grid', gap: 28, margin: 0 }}>
            {sorted.map((t) => (
              <div
                key={t.term}
                id={d(t.term, t.termEn, t.termHu).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                style={{ borderLeft: '2px solid var(--border)', paddingLeft: 20 }}
              >
                <dt
                  className="font-serif italic"
                  style={{ fontSize: 21, fontWeight: 400, color: 'var(--text)', marginBottom: 8 }}
                >
                  {d(t.term, t.termEn, t.termHu)}
                </dt>
                <dd className="font-sans" style={{ margin: 0, fontSize: 14.5, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {d(t.def, t.defEn, t.defHu)}
                  {t.href && (lang === 'fr' || hasTranslation(t.href)) && (
                    <>
                      {' '}
                      <Link href={localizedHref(t.href, lang)} style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 2, fontWeight: 400 }}>
                        {d(t.linkLabel ?? 'En savoir plus', t.linkLabelEn ?? 'Learn more', t.linkLabelHu ?? 'Tudjon meg többet')} &rarr;
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '70px 24px 90px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 640 }}>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(22px, 3.6vw, 30px)', fontWeight: 400, marginBottom: 14, color: 'var(--text)' }}>
            {d('Un terme à clarifier pour votre projet ?', 'A term you need cleared up for your project?', 'Van fogalom, amit tisztázni kell a projektjéhez?')}
          </h2>
          <p className="font-sans" style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
            {d(
              'On parle votre langue, pas le jargon. Un appel pour traduire votre besoin en un plan concret. Offert.',
              'We speak your language, not jargon. A call to turn what you need into a concrete plan. Free.'
            , 'Az Ön nyelvén beszélünk, nem szakzsargonban. Egy hívás, hogy az igényéből konkrét terv legyen. Ingyenes.')}
          </p>
          <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
            <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')}
          </Link>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />
    </main>
  )
}
