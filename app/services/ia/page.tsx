'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import ServiceFit from '@/components/services/ServiceFit'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import { localizedHref } from '@/lib/routes'

type Capability = { titleFr: string; titleEn: string; descFr: string; descEn: string; metricFr: string; metricEn: string }

const capabilities: Capability[] = [
  {
    titleFr: 'Agents autonomes',
    titleEn: 'Autonomous agents',
    descFr: 'Une IA agentique avec mémoire persistante qui exécute des tâches multi-étapes dans vos outils, apprend votre métier et s\u2019améliore à chaque utilisation.',
    descEn: 'Agentic AI with a lasting memory that runs multi-step tasks inside your tools, learns your trade and gets better with every use.',
    metricFr: 'Des tâches prises en charge de bout en bout',
    metricEn: 'Tasks handled end to end',
  },
  {
    titleFr: 'Lecture de documents & recherche dans votre savoir',
    titleEn: 'Document reading & search across your know-how',
    descFr: 'Devis, contrats, cahiers des charges, documentation technique : l\u2019IA lit, extrait, structure et rend tout cherchable en secondes. Le savoir de vos experts ne dort plus, il répond.',
    descEn: 'Quotes, contracts, specifications, technical documentation: the AI reads, extracts, structures and makes all of it searchable in seconds. What your experts know stops sleeping and starts answering.',
    metricFr: 'Le savoir enfoui rendu cherchable en secondes',
    metricEn: 'Buried know-how, searchable in seconds',
  },
  {
    titleFr: 'Qualification & relances',
    titleEn: 'Lead qualification & follow-ups',
    descFr: 'Chaque entrant lu, scoré, enrichi, routé vers la bonne personne. Relances personnalisées qui s\u2019arrêtent dès que le prospect répond.',
    descEn: 'Every inbound read, scored, enriched and routed to the right person. Personal follow-ups that stop the moment the prospect replies.',
    metricFr: 'Plus de leads convertis, sans budget pub',
    metricEn: 'More leads converted, with no ad budget',
  },
  {
    titleFr: 'Data analytics',
    titleEn: 'Data analytics',
    descFr: 'Vos données réunies en temps réel, au même endroit. Tableaux de bord clairs, anticipation des tendances. Vous décidez sur du concret, vite.',
    descEn: 'Your data brought together in real time, in one place. Clear dashboards, trends you see coming. You decide on facts, and fast.',
    metricFr: 'Décisions data en minutes',
    metricEn: 'Decisions on data in minutes',
  },
]

const painsFr = [
  'Vos experts passent des heures sur du répétitif au lieu de créer de la valeur',
  'Le savoir de vos experts reste coincé dans leurs têtes et leurs docs',
  'Vous croulez sous les documents à lire, trier, recopier',
  'Vous décidez « au feeling », faute de chiffres clairs',
  'Vous avez peur que l\u2019IA soit un gadget de plus',
]
const painsEn = [
  'Your experts spend hours on repetitive work instead of creating value',
  'What your experts know stays stuck in their heads and their documents',
  'You are buried under documents to read, sort and retype',
  'You decide on gut feel, for want of clear figures',
  'You are afraid AI turns out to be one more gadget',
]

const guaranteesFr = [
  'IA intégrée uniquement là où elle remplace de vraies heures',
  'Vos données restent en UE · RGPD-natif',
  'Modèle au choix · Claude, GPT ou auto-hébergé selon votre souveraineté',
  'ROI mesuré · on ne déploie rien sans impact chiffrable',
]
const guaranteesEn = [
  'AI built in only where it replaces real hours',
  'Your data stays in the EU · GDPR-native',
  'Your choice of model · Claude, GPT or self-hosted, depending on how much sovereignty you need',
  'ROI measured · we deploy nothing without a countable impact',
]

export default function IaPage() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{d('IA agentique & data analytics', 'Agentic AI & data analytics')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('Une IA qui ', 'AI that ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('travaille vraiment pour vous.', 'actually works for you.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'Une IA agentique avec mémoire persistante : elle exécute des tâches de bout en bout, apprend votre métier et s\u2019améliore avec le temps. Intégrée uniquement là où elle remplace de vraies heures, jamais en gadget. Vos données restent en UE.',
                'Agentic AI with a lasting memory: it runs tasks end to end, learns your trade and improves over time. Built in only where it replaces real hours, never as decoration. Your data stays in the EU.'
              )}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer (GEO) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Qu\u2019est-ce que ', 'What is ')}<span className="accent">{d('l\u2019IA agentique', 'agentic AI')}</span>{d(' ?', '?')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'C\u2019est une IA qui ne se contente pas de répondre : elle exécute des tâches de bout en bout dans vos outils, avec une mémoire persistante du contexte de votre activité. Elle apprend de chaque interaction et s\u2019améliore avec le temps, qualifier un lead, lire un document, router une demande, rédiger une première réponse.',
                'It is AI that does more than answer: it runs tasks end to end inside your tools, holding a lasting memory of how your business works. It learns from every interaction and improves over time, whether it is qualifying a lead, reading a document, routing a request or drafting a first reply.'
              )}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce qui vous coûte des heures', 'What costs you hours')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Là où l\u2019IA ', 'Where AI ')}<span className="accent">{d('change la donne.', 'changes things.')}</span>
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 600, display: 'grid', gap: 13 }}>
            {(lang === 'en' ? painsEn : painsFr).map((p) => (
              <li key={p} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1, fontWeight: 600 }}>·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* Capabilities */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Ce que l\u2019IA prend en charge', 'What the AI takes on')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('L\u2019IA, ', 'AI, ')}<span className="accent">{d('là où elle fait gagner des heures.', 'where it wins you hours.')}</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {capabilities.map((s) => (
              <div key={s.titleEn} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12)' }}>
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0 }}>{d(s.titleFr, s.titleEn)}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>{d(s.descFr, s.descEn)}</p>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12, marginTop: 4 }}>
                  <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', lineHeight: 1.4, margin: 0 }}>{d(s.metricFr, s.metricEn)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {(lang === 'en' ? guaranteesEn : guaranteesFr).map((g) => (
              <li key={g} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <RelatedLinks
        links={
          lang === 'en'
            ? [
                { href: '/services/logiciel-sur-mesure', label: 'Custom software', desc: 'The AI plugs into it, on your trade.' },
                { href: '/services/audit', label: 'Audit & consulting', desc: 'We find where AI actually pays off.' },
                { href: '/tools/diagnostic-ia', label: 'AI Diagnostic', desc: 'Measure in 4 minutes where AI can help you.' },
                { href: '/glossaire', label: 'Glossary', desc: 'Agentic AI, automation, data analytics.' },
              ]
            : [
                { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'L\u2019IA s\u2019intègre dedans, sur votre métier.' },
                { href: '/services/audit', label: 'L\u2019audit & consulting', desc: 'On identifie où l\u2019IA a du ROI.' },
                { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min où l\u2019IA peut vous aider.' },
                { href: '/glossaire', label: 'Glossaire', desc: 'IA agentique, automatisation, data analytics.' },
              ]
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          lang === 'en'
            ? [
                'Your teams are buried in repetitive tasks',
                'You have volume: documents, leads, requests to process',
                'You want AI that is useful, plugged into your real data',
                'You care about keeping your data in Europe',
              ]
            : [
                'Vos équipes croulent sous des tâches répétitives',
                'Vous avez du volume : documents, leads, demandes à traiter',
                'Vous voulez une IA utile, branchée sur vos vraies données',
                'Vous tenez à garder vos données en Europe',
              ]
        }
        notForYou={
          lang === 'en'
            ? [
                'You want AI just to be able to say you do AI',
                'Your data is not structured at all yet',
                'You are looking for a generic chatbot at 20 € a month',
                'ROI matters little to you, only the hype counts',
              ]
            : [
                'Vous voulez de l\u2019IA juste pour dire que vous en faites',
                'Vous n\u2019avez pas encore de données un minimum structurées',
                'Vous cherchez un chatbot générique à 20 €/mois',
                'Le ROI vous importe peu, seule la hype compte',
              ]
        }
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {d('Déléguez le répétitif à l\u2019IA.', 'Hand the repetitive work to AI.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde vos tâches répétitives et on identifie où l\u2019IA vous ferait gagner de vraies heures, avec un ROI mesurable. Même si on ne travaille pas ensemble.',
                  'A free call. We look at your repetitive tasks and find where AI would win you real hours, with a return you can measure. Even if we never work together.'
                )}
              </p>
              <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .svc-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
