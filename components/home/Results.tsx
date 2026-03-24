'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function Results() {
  const { t } = useLang()

  const cs = {
    tag: 'Restaurant Group · Saint-Étienne',
    company: 'Chromosome',
    metricBefore: '10h / week',
    metricAfter: '20 min',
    metricLabel: { en: 'Team scheduling time', fr: 'Temps de planification équipe' },
    before: {
      en: '10 hours per week lost on team management, schedule rebuilt multiple times, frequent communication errors.',
      fr: '10 heures par semaine perdues en gestion d\'équipe, planning refait plusieurs fois, erreurs de communication fréquentes.',
    },
    after: {
      en: 'Schedule generated in 20 minutes. €1,000/month saved. Zero communication errors since deployment.',
      fr: 'Planning généré en 20 minutes. 1 000€/mois économisés. Zéro erreur de communication depuis le déploiement.',
    },
    quote: { en: '"It changed the way we run everything."', fr: '"Ça a changé notre façon de tout gérer."' },
    author: 'Catherine P.',
    role: 'General Manager, Chromosome Saint-Étienne',
  }

  return (
    <section id="resultats" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('results.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            {t('results.title')}{' '}
            <span className="accent">{t('results.titleAccent')}</span>{' '}
            {t('results.title2')}
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            {t('results.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <CaseStudyCard cs={cs} t={t} />
        </FadeUp>
      </div>
    </section>
  )
}

function CaseStudyCard({ cs, t }: { cs: any; t: any }) {
  const { lang } = useLang()

  return (
    <motion.div
      className="overflow-hidden max-w-[800px] mx-auto"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(230,57,70,0.15)',
        padding: '48px 40px',
        position: 'relative',
      }}
      whileHover={{ boxShadow: '0 12px 48px rgba(0,0,0,0.15)', y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--accent)', transform: 'scaleX(0)', transition: 'transform 0.4s ease' }} />

      <p className="font-mono mb-3" style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
        {cs.tag}
      </p>
      <h3 className="font-serif italic mb-6" style={{ fontSize: '28px', fontWeight: 400, color: 'var(--accent)', lineHeight: 1.2 }}>
        {cs.company}
      </h3>

      {/* Metrics */}
      <div className="flex items-center gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <p className="font-serif italic" style={{ fontSize: '32px', color: 'var(--text-muted)', textDecoration: 'line-through', opacity: 0.5 }}>
          {cs.metricBefore}
        </p>
        <span style={{ color: 'var(--accent)', fontSize: '20px', fontWeight: 300 }}>→</span>
        <p className="font-serif italic" style={{ fontSize: '32px', color: 'var(--accent)' }}>
          {cs.metricAfter}
        </p>
        <p className="font-sans font-light text-left ml-auto" style={{ fontSize: '12px', color: 'var(--text-secondary)', maxWidth: '120px', lineHeight: 1.4 }}>
          {cs.metricLabel[lang]}
        </p>
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <p className="font-mono mb-2" style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', opacity: 0.7 }}>
            {t('results.before')}
          </p>
          <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
            {cs.before[lang]}
          </p>
        </div>
        <div>
          <p className="font-mono mb-2" style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#5cb85c', opacity: 0.8 }}>
            {t('results.after')}
          </p>
          <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.6, fontWeight: 300 }}>
            {cs.after[lang]}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="font-serif italic mb-3" style={{ fontSize: '17px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.5 }}>
          {cs.quote[lang]}
        </p>
        <p className="font-sans" style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{cs.author}</p>
        <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300 }}>{cs.role}</p>
      </div>
    </motion.div>
  )
}
