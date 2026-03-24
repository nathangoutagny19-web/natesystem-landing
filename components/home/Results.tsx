'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function Results() {
  const { t } = useLang()

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
          <CaseStudyCard />
        </FadeUp>
      </div>
    </section>
  )
}

function CaseStudyCard() {
  const { lang } = useLang()

  const headline = lang === 'en'
    ? 'How a restaurant in Saint-Étienne freed 14 hours per week and replaced 99% of their operational stack with two proprietary platforms they own outright.'
    : 'Comment un restaurant à Saint-Étienne a libéré 14 heures par semaine et remplacé 99% de son stack opérationnel par deux plateformes propriétaires qu\'il possède entièrement.'

  const metrics = [
    { value: '11h → 1h', label: lang === 'en' ? 'Per week, per manager' : 'Par semaine, par manager' },
    { value: '25 480€', label: lang === 'en' ? 'Productivity recovered per year' : 'Productivité récupérée par an' },
    { value: '~55', label: lang === 'en' ? 'Collaborators — zero friction at transition' : 'Collaborateurs — zéro friction à la transition' },
    { value: '99%', label: lang === 'en' ? 'Of operations run on platforms they own' : 'Des opérations sur des plateformes qu\'ils possèdent' },
  ]

  const footnote = lang === 'en'
    ? 'The kind of result their team still talks about at family dinners — and won\'t let us forget.'
    : 'Le genre de résultat dont leur équipe parle encore à chaque repas de famille — et qu\'ils ne nous laissent pas oublier.'

  return (
    <motion.div
      className="overflow-hidden max-w-[800px] mx-auto"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(230,57,70,0.15)',
        padding: '48px 40px',
        position: 'relative',
        borderRadius: '16px',
      }}
      whileHover={{ boxShadow: '0 12px 48px rgba(0,0,0,0.15)', y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tag */}
      <p className="font-mono mb-3" style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
        Restaurant Group · Saint-Étienne
      </p>

      {/* Company name */}
      <h3 className="font-serif italic mb-6" style={{ fontSize: '28px', fontWeight: 400, color: 'var(--accent)', lineHeight: 1.2 }}>
        Chromosome
      </h3>

      {/* Headline */}
      <p className="font-sans mb-8" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
        {headline}
      </p>

      {/* 4 Metrics */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {metrics.map(m => (
          <div key={m.value}>
            <p className="font-serif italic" style={{ fontSize: '24px', color: 'var(--accent)', lineHeight: 1.2, marginBottom: '4px' }}>
              {m.value}
            </p>
            <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.4 }}>
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mb-6">
        <p className="font-serif italic mb-3" style={{ fontSize: '17px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.5 }}>
          {lang === 'en' ? '"It changed the way we run everything."' : '"Ça a changé notre façon de tout gérer."'}
        </p>
        <p className="font-sans" style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>Catherine P.</p>
        <p className="font-sans" style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300 }}>General Manager, Chromosome Saint-Étienne</p>
      </div>

      {/* Footnote */}
      <p className="font-sans italic" style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-muted)' }}>
        {footnote}
      </p>
    </motion.div>
  )
}
