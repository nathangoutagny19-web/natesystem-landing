'use client'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import { useLang } from '@/components/providers/LangProvider'
import { motion } from 'framer-motion'

export default function ResourcesPage() {
  const { lang, t } = useLang()

  return (
    <main>
      <Nav />

      {/* Header */}
      <section style={{ padding: '160px 24px 80px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
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

      {/* Case Studies */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <span className="section-label">{t('resources.caseStudies')}</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <motion.div
              className="mt-6"
              style={{
                background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)',
                padding: '40px', borderRadius: '12px', position: 'relative', overflow: 'hidden',
              }}
              whileHover={{ borderColor: 'var(--border-hover)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            >
              <p className="font-mono mb-2" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Restaurant Group · Saint-Étienne
              </p>
              <h3 className="font-serif italic mb-4" style={{ fontSize: '28px', color: 'var(--accent)', lineHeight: 1.2 }}>
                Chromosome
              </h3>
              <p className="font-sans mb-6" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
                {lang === 'en'
                  ? 'How a restaurant group in Saint-Étienne went from 10h/week on team scheduling to 20 minutes — saving €1,000/month and eliminating communication errors completely.'
                  : 'Comment un groupe de restaurants à Saint-Étienne est passé de 10h/semaine de planification d\'équipe à 20 minutes — économisant 1 000€/mois et éliminant complètement les erreurs de communication.'}
              </p>
              <div className="flex items-center gap-6">
                <Stat value="10h → 20min" label={lang === 'en' ? 'Scheduling time' : 'Temps de planification'} />
                <Stat value="1 000€" label={lang === 'en' ? 'Monthly savings' : 'Économies mensuelles'} />
                <Stat value="0" label={lang === 'en' ? 'Errors since deploy' : 'Erreurs depuis le déploiement'} />
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Blog */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <span className="section-label">{t('resources.blog')}</span>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { en: 'Why SMEs Are Overpaying for SaaS', fr: 'Pourquoi les PME surpayent leurs SaaS' },
              { en: 'The 3-Step Framework to AI-Ready Operations', fr: 'Le framework en 3 étapes pour des opérations prêtes pour l\'IA' },
              { en: 'Build vs Buy: When Custom Tools Win', fr: 'Construire vs Acheter : Quand les outils sur-mesure gagnent' },
            ].map((title, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  className="tool-card flex flex-col h-full"
                  whileHover={{ borderColor: 'var(--border-hover)' }}
                >
                  <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {t('resources.blog')}
                  </p>
                  <h3 className="font-serif italic mb-4 flex-1" style={{ fontSize: '20px', color: 'var(--text)', lineHeight: 1.3 }}>
                    {title[lang]}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500 }}>
                    {t('resources.comingSoon')}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Video Testimonials */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <span className="section-label">{t('resources.video')}</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="mt-6 relative overflow-hidden"
              style={{
                aspectRatio: '16/9', borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--accent-subtle) 0%, var(--bg-card) 100%)',
                border: '1px solid rgba(230,57,70,0.15)',
                maxWidth: '640px',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ border: '1px solid var(--accent)', background: 'var(--accent-subtle)' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1" style={{ color: 'var(--accent)' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-sans" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Catherine P. — Chromosome
                </p>
                <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 300 }}>
                  {t('resources.comingSoon')}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif italic" style={{ fontSize: '20px', color: 'var(--accent)' }}>{value}</p>
      <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>{label}</p>
    </div>
  )
}
