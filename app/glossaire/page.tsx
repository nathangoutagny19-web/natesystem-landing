import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import { CAL_LINK } from '@/lib/constants'

type Term = {
  term: string
  def: string
  href?: string // internal link to deepen
  linkLabel?: string
}

// Curated to NateSystem's domain (custom software + AI + automation for PME).
// Short, AI-citable definitions + internal mesh. Quality over PeakLab-style volume.
const terms: Term[] = [
  { term: 'Agent IA', def: 'Programme d\'intelligence artificielle conçu pour accomplir une tâche de bout en bout (prospection, support, reporting) avec une supervision humaine minimale. Contrairement à un chatbot qui répond, un agent agit.', href: '/blog/agents-ia-vs-chatgpt-quelle-difference', linkLabel: 'Agents IA vs ChatGPT' },
  { term: 'IA agentique', def: 'Approche de l\'IA où le système ne se contente pas de répondre mais exécute des actions multi-étapes dans vos outils (lire, décider, agir) pour atteindre un objectif défini.' },
  { term: 'IA générative', def: 'Intelligence artificielle qui produit du contenu (texte, image, code) à partir d\'une consigne. Elle répond et génère à la demande, là où un agent exécute une tâche complète.', href: '/blog/ia-generative-vs-agents-ia-autonomes-guide-dirigeants', linkLabel: 'IA générative vs agents IA' },
  { term: 'LLM (Large Language Model)', def: 'Grand modèle de langage entraîné sur d\'énormes volumes de texte (GPT, Claude, Mistral…). C\'est le moteur derrière la plupart des outils d\'IA générative et des agents.' },
  { term: 'RAG (Retrieval-Augmented Generation)', def: 'Technique qui connecte un LLM à votre base de connaissances : l\'IA va chercher l\'information dans vos documents avant de répondre, ce qui la rend fiable sur VOS données.' },
  { term: 'Prompt engineering', def: 'Art de formuler les consignes données à une IA pour obtenir un résultat juste. C\'est souvent 60 à 70 % de la réussite d\'un projet IA — plus que le choix du modèle.' },
  { term: 'Automatisation', def: 'Exécution automatique de tâches répétitives (facturation, relances, reporting) sans intervention humaine. Selon McKinsey, ~30 % du temps de travail est automatisable.', href: '/blog/automatisation-pme-guide-2026', linkLabel: 'Guide de l\'automatisation PME' },
  { term: 'No-code', def: 'Outils permettant de créer des automatisations ou des applications sans programmer (Make, Zapier, Airtable). Parfait pour prototyper, mais plafonné quand le besoin devient critique.', href: '/blog/make-vs-zapier-vs-n8n-comparatif', linkLabel: 'Make vs Zapier vs n8n' },
  { term: 'API', def: 'Interface qui permet à deux logiciels d\'échanger des données automatiquement. En 2026, la capacité d\'intégration via API est devenue le premier critère de choix d\'un logiciel de gestion.' },
  { term: 'ERP / PGI', def: 'Progiciel de gestion intégré qui centralise les fonctions de l\'entreprise (finance, stocks, RH, ventes) dans une base unique. Puissant mais standardisé et long à déployer.', href: '/blog/cest-quoi-un-erp-pme', linkLabel: 'C\'est quoi un ERP' },
  { term: 'CRM', def: 'Customer Relationship Management : logiciel de gestion de la relation client (contacts, opportunités, suivi commercial). Souvent au cœur des opérations d\'une PME.' },
  { term: 'Logiciel sur-mesure', def: 'Logiciel métier conçu spécifiquement pour une entreprise, par opposition à un produit standard. Il épouse vos process et, bien fait, vous appartient (code livré).', href: '/logiciel-sur-mesure-vs-saas', linkLabel: 'Sur-mesure vs SaaS' },
  { term: 'SaaS', def: 'Software as a Service : logiciel loué par abonnement, hébergé par l\'éditeur. Rapide à démarrer, mais vous ne possédez rien et le coût court à vie.', href: '/blog/alternative-saas-sur-mesure-remplacer-logiciel', linkLabel: 'Alternative au SaaS' },
  { term: 'SaaS-spaghetti', def: 'Empilement d\'outils SaaS qui ne communiquent pas entre eux, où l\'on passe plus de temps à faire le lien qu\'à travailler. Le problème n°1 d\'efficacité des PME.', href: '/blog/cout-reel-outils-non-connectes-pme', linkLabel: 'Le coût des outils non connectés' },
  { term: 'Propriété du code', def: 'Le fait que le code source d\'un logiciel vous soit livré et vous appartienne à 100 %. C\'est ce qui distingue un actif (sur-mesure) d\'une location (SaaS).' },
  { term: 'Réversibilité', def: 'Capacité à récupérer votre logiciel, vos données et la documentation pour les confier à un autre prestataire. Sans elle, vous êtes captif. Critère clé du choix d\'un prestataire.', href: '/blog/comment-choisir-prestataire-logiciel-ia', linkLabel: 'Choisir son prestataire' },
  { term: 'RGPD', def: 'Règlement général sur la protection des données : cadre européen qui encadre le traitement des données personnelles. Avec l\'IA, RGPD et règlement IA s\'appliquent simultanément.', href: '/blog/rgpd-ia-ou-vont-les-donnees-entreprise', linkLabel: 'RGPD et IA' },
  { term: 'Cloud Act', def: 'Loi américaine de 2018 permettant aux autorités US d\'accéder aux données détenues par une entreprise américaine, même si les serveurs sont en Europe. D\'où l\'enjeu de la souveraineté.' },
  { term: 'Souveraineté des données', def: 'Garder ses données sous contrôle juridictionnel européen, hors de portée du Cloud Act. Suppose un hébergement UE et un fournisseur sans lien capitalistique US.' },
  { term: 'Hébergement UE', def: 'Stockage des données sur des serveurs situés en Union européenne, soumis au RGPD. Un argument de conformité de plus en plus décisif, notamment pour le secteur public.' },
  { term: 'Base de données', def: 'Système qui stocke et organise les données de l\'entreprise de façon structurée. Une base centralisée est le socle indispensable à toute IA opérationnelle.', href: '/blog/construire-base-donnees-centralisee-pme-guide', linkLabel: 'Construire une base centralisée' },
  { term: 'PostgreSQL', def: 'Base de données relationnelle open-source réputée pour sa robustesse. C\'est le socle technique recommandé pour bâtir un logiciel métier évolutif.' },
  { term: 'Supabase', def: 'Plateforme open-source bâtie sur PostgreSQL (base, authentification, API, temps réel). Auto-hébergeable en UE — un bon socle pour une application sur-mesure.', href: '/blog/supabase-vs-airtable-pme', linkLabel: 'Supabase vs Airtable' },
  { term: 'Webhook', def: 'Mécanisme qui notifie un logiciel en temps réel quand un événement se produit dans un autre. Brique de base des automatisations entre outils.' },
  { term: 'Dashboard', def: 'Tableau de bord qui affiche les indicateurs clés (KPI) de l\'activité en temps réel, pour décider vite sans aller chercher l\'information dans plusieurs outils.' },
  { term: 'KPI', def: 'Key Performance Indicator : indicateur de performance qui mesure l\'avancée vers un objectif (chiffre d\'affaires, temps de traitement, taux de conversion).' },
  { term: 'ROI', def: 'Retour sur investissement : ce que rapporte un projet rapporté à son coût. En automatisation/IA, le bon ROI se mesure en heures réellement remplacées.' },
  { term: 'POC (Proof of Concept)', def: 'Prototype fonctionnel construit rapidement (souvent 3 à 6 semaines) pour valider qu\'une idée marche et chiffrer son ROI avant d\'investir pleinement.' },
  { term: 'MVP', def: 'Minimum Viable Product : première version d\'un logiciel réduite à l\'essentiel, mise en service vite pour être testée et améliorée avec de vrais utilisateurs.' },
  { term: 'OCR', def: 'Reconnaissance optique de caractères : lecture automatique du texte dans un document (facture, contrat). Couplée à l\'IA, elle automatise la saisie des données.' },
  { term: 'Lock-in (dépendance fournisseur)', def: 'Situation où il devient très coûteux ou impossible de quitter un logiciel/éditeur. Le sur-mesure avec code livré et réversibilité élimine ce risque.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.natesystem.com/glossaire#glossary',
  name: 'Glossaire NateSystem — logiciel sur-mesure, IA & automatisation',
  url: 'https://www.natesystem.com/glossaire',
  inLanguage: 'fr-FR',
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://www.natesystem.com/glossaire#glossary',
  })),
}

export default function GlossairePage() {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, 'fr'))

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 760 }}>
          <span className="section-label">Glossaire</span>
          <h1
            className="font-serif italic"
            style={{ fontSize: 'clamp(32px, 5.4vw, 50px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 680, margin: '14px auto 20px' }}
          >
            Le vocabulaire du logiciel sur-mesure et de l&apos;<span className="accent" style={{ color: 'var(--accent)' }}>IA, en clair.</span>
          </h1>
          <p className="font-sans" style={{ fontSize: 16, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.65 }}>
            Les termes du logiciel métier, de l&apos;intelligence artificielle et de l&apos;automatisation, définis simplement —
            pour des dirigeants de PME, sans jargon inutile.
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
                id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                style={{ borderLeft: '2px solid var(--border)', paddingLeft: 20 }}
              >
                <dt
                  className="font-serif italic"
                  style={{ fontSize: 21, fontWeight: 400, color: 'var(--text)', marginBottom: 8 }}
                >
                  {t.term}
                </dt>
                <dd className="font-sans" style={{ margin: 0, fontSize: 14.5, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {t.def}
                  {t.href && (
                    <>
                      {' '}
                      <Link href={t.href} style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 2, fontWeight: 400 }}>
                        {t.linkLabel ?? 'En savoir plus'} →
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
            Un terme à clarifier pour votre projet ?
          </h2>
          <p className="font-sans" style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
            On parle votre langue, pas le jargon. 20 minutes pour traduire votre besoin en un plan concret. Offert.
          </p>
          <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
            <span className="btn-primary-dot" />Réserver 20 min · offert
          </Link>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />
    </main>
  )
}
