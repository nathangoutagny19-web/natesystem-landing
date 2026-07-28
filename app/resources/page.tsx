'use client'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import LiteYouTube from '@/components/ui/LiteYouTube'
import Link from 'next/link'
import ScreenMock from '@/components/ui/ScreenMock'
import { useLang } from '@/components/providers/LangProvider'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog'
import { playbooks, sectorLabelFor, cardTaglineFor } from '@/lib/playbooks'

// Vidéo témoignage (paysage 16:9). Plus tard : vidéos éducation + vlogs internes.
const TESTIMONIAL_VIDEO_ID = 'aMIjJbzuhDc'

// Démos live + outil interactif.
type Demo = { title: string; descFr: string; descEn: string; badge: 'new' | 'gated'; href: string; external?: boolean; img: string }
const DEMOS: Demo[] = [
  {
    title: 'Gestion d’actifs',
    descFr: 'Parc IT, véhicules, mobilier, machines — centralisés avec amortissements automatiques et alertes de remplacement.',
    descEn: 'IT assets, vehicles, furniture, machines — centralised with automatic depreciation and replacement alerts.',
    badge: 'new',
    href: 'https://actifs.natesystem.com',
    external: true,
    img: 'actifs',
  },
  {
    title: 'Plateforme d’inventaire',
    descFr: 'Stock temps réel, réapprovisionnements intelligents, fournisseurs, lecture de codes-barres. Le moteur qu’on déploie en production.',
    descEn: 'Real-time stock, smart re-ordering, suppliers, barcode scanning. The same engine we deploy in production.',
    badge: 'new',
    href: 'https://stack-stock.natesystem.com',
    external: true,
    img: 'stock',
  },
  {
    title: 'Intelligence avis',
    descFr: 'Avis notés par IA sur six dimensions, brouillons de réponses dans votre ton, plan d’action 90 jours. Accès démo sur demande.',
    descEn: 'Reviews scored by AI on six dimensions, reply drafts in your tone, 90-day action plan. Demo access on request.',
    badge: 'gated',
    href: '/reviews',
    img: 'reviews',
  },
]

export default function ResourcesPage() {
  const { lang, t } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <main>
      <Nav />

      {/* Header */}
      <section style={{ padding: '160px 24px 72px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
          <FadeUp>
            <span className="section-label">{t('nav.resources')}</span>
            <h1 className="section-title" style={{ margin: '0 auto 20px' }}>
              {t('resources.title')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('resources.sub')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ═══ 1 — VIDÉOS : témoignage / podcast (paysage) ═══ */}
      <section id="videos" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '1120px' }}>
          <FadeUp>
            <span className="section-label">{d('Vidéos', 'Videos')}</span>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.15, margin: '4px 0 10px' }}>
              {d('Discussions sans filtres avec nos clients', 'Unfiltered conversations with our clients')}
            </h2>
            <p className="font-sans" style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '620px' }}>
              {d('Témoignages clients aujourd’hui — vidéos éducation & vlogs internes à venir.', 'Client testimonials today — education videos & internal vlogs coming soon.')}
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="res-video-row" style={{ marginTop: 36 }}>
              <div className="res-video-copy">
                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  {d('Témoignage · Chromosome', 'Testimonial · Chromosome')}
                </span>
                <h3 className="font-serif italic" style={{ fontSize: 'clamp(21px, 2.4vw, 27px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3, margin: '14px 0 14px' }}>
                  {d('« On a tellement gagné en temps et en fiabilité qu’on ne pourrait plus s’en passer. »', '“We’ve gained so much time and reliability that we couldn’t do without it now.”')}
                </h3>
                <p className="font-sans" style={{ fontSize: '14.5px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 6 }}>
                  {d('Catherine F., General Manager d’un groupe de restauration à Saint-Étienne, raconte comment deux plateformes sur-mesure ont remplacé leur stack et libéré 14 heures par semaine.',
                     'Catherine F., General Manager of a restaurant group in Saint-Étienne, on how two custom platforms replaced their stack and freed 14 hours a week.')}
                </p>
              </div>

              <div className="res-video">
                <LiteYouTube id={TESTIMONIAL_VIDEO_ID} title={d('Témoignage Chromosome — NateSystem', 'Chromosome testimonial — NateSystem')} />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ═══ 2 — OUTILS & DÉMOS LIVE ═══ */}
      <section id="outils" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '1120px' }}>
          <FadeUp>
            <span className="section-label">{d('Outils & démos', 'Tools & demos')}</span>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.15, margin: '4px 0 10px' }}>
              {d('Essayez le produit réel.', 'Try the real product.')}
            </h2>
            <p className="font-sans" style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '620px' }}>
              {d('Des démos pleinement fonctionnelles (données fictives) et un diagnostic interactif. Pas des captures — le vrai produit.', 'Fully working demos (dummy data) and an interactive diagnostic. Not screenshots — the real thing.')}
            </p>
          </FadeUp>

          {/* Diagnostic IA — carte mise en avant */}
          <FadeUp delay={0.1}>
            <Link href="/tools/diagnostic-ia" style={{ textDecoration: 'none' }}>
              <motion.div className="res-feature" whileHover={{ borderColor: 'var(--border-hover)' }} style={{ marginTop: 32 }}>
                <div>
                  <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {d('Outil interactif · 2 min', 'Interactive tool · 2 min')}
                  </span>
                  <h3 className="font-serif italic" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '12px 0 10px' }}>
                    {d('Le Diagnostic IA', 'The AI Diagnostic')}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '14.5px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '640px' }}>
                    {d('Combien votre stack SaaS gaspille, combien d’heures votre équipe perd, où vous en êtes sur la maturité IA. Chiffré, 3 leviers priorisés, PDF téléchargeable.',
                       'How much your SaaS stack wastes, how many hours your team loses, where you stand on AI maturity. Quantified, 3 prioritised levers, downloadable PDF.')}
                  </p>
                </div>
                <span className="res-feature-cta font-sans">{d('Lancer le diagnostic', 'Run the diagnostic')} &rarr;</span>
              </motion.div>
            </Link>
          </FadeUp>

          {/* 3 démos live */}
          <div className="res-grid-3" style={{ marginTop: 18 }}>
            {DEMOS.map((demo, i) => {
              const inner = (
                <motion.div className="res-card" whileHover={{ borderColor: 'var(--border-hover)' }}>
                  <div className="res-card-badge-row">
                    <span className="font-mono res-badge">{d('Démo live', 'Live demo')}</span>
                    <span className={`font-mono res-pill ${demo.badge === 'gated' ? 'res-pill-gated' : ''}`}>
                      {demo.badge === 'gated' ? d('Sur demande', 'On request') : d('Nouveau', 'New')}
                    </span>
                  </div>
                  <h3 className="font-serif italic" style={{ fontSize: '21px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.25, margin: '2px 0 10px' }}>
                    {demo.title}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '13.5px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
                    {d(demo.descFr, demo.descEn)}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: 12 }}>
                    <div style={{ height: 138 }}>
                      <ScreenMock src={`/realisations/demos/${demo.img}.jpg`} alt={demo.title} />
                    </div>
                  </div>
                  <span className="res-card-cta font-sans">
                    {demo.badge === 'gated' ? d('Demander l’accès', 'Request access') : d('Ouvrir la démo', 'Open the demo')} &rarr;
                  </span>
                </motion.div>
              )
              return (
                <FadeUp key={demo.title} delay={0.14 + i * 0.06}>
                  {demo.external ? (
                    <a href={demo.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{inner}</a>
                  ) : (
                    <Link href={demo.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{inner}</Link>
                  )}
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ 3 — PLAYBOOKS PAR MÉTIER (lead magnets, au-dessus du blog) ═══ */}
      <section id="playbooks" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '1120px' }}>
          <FadeUp>
            <span className="section-label">{d('Playbooks par métier', 'Playbooks by industry')}</span>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.15, margin: '4px 0 10px' }}>
              {d('L’IA appliquée à votre métier.', 'AI applied to your industry.')}
            </h2>
            <p className="font-sans" style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '640px' }}>
              {d('Des guides concrets, un par secteur : où l’IA fait vraiment gagner du temps, sans casser votre conformité. PDF gratuit.', 'Concrete guides, one per sector: where AI actually saves time without breaking your compliance. Free PDF.')}
            </p>
          </FadeUp>

          <div className="res-grid-3" style={{ marginTop: 32 }}>
            {playbooks.map((pb, i) => (
              <FadeUp key={pb.slug} delay={Math.min(i * 0.04, 0.4)}>
                <Link href={`/playbook/${pb.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <motion.div className="res-card" whileHover={{ borderColor: 'var(--border-hover)' }}>
                    <span className="font-mono res-badge" style={{ marginBottom: 10 }}>{d('Playbook', 'Playbook')}</span>
                    <h3 className="font-serif italic" style={{ fontSize: '19px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.25, margin: '0 0 8px' }}>
                      {sectorLabelFor(pb.slug)}
                    </h3>
                    <p className="font-sans" style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.55, flex: 1 }}>
                      {cardTaglineFor(pb.slug)}
                    </p>
                    <span className="res-card-cta font-sans">{d('Télécharger le PDF', 'Download the PDF')} &rarr;</span>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ 4 — BLOG ═══ */}
      <section id="blog" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '1120px' }}>
          <FadeUp>
            <div className="flex items-center justify-between mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="section-label mb-0">{t('resources.blog')}</span>
              <Link href="/blog" className="font-sans" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                {d('Voir tous les articles', 'View all articles')} &rarr;
              </Link>
            </div>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.15, margin: '4px 0 28px' }}>
              {d('À lire pour décider juste.', 'Reading to decide well.')}
            </h2>
          </FadeUp>

          <div className="res-grid-3">
            {blogPosts.slice(0, 6).map((post, i) => (
              <FadeUp key={post.slug} delay={Math.min(i * 0.06, 0.3)}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <motion.div className="res-card" whileHover={{ borderColor: 'var(--border-hover)' }}>
                    <span className="font-mono res-badge" style={{ marginBottom: 10 }}>{post.category}</span>
                    <h3 className="font-serif italic" style={{ fontSize: '19px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3, margin: '0 0 10px' }}>
                      {post.title}
                    </h3>
                    <p className="font-sans" style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
                      <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.date}</span>
                      <span style={{ color: 'var(--text-muted)' }}>·</span>
                      <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.readTime}</span>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}
