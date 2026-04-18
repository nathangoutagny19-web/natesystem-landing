'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

export default function CaseStudy() {
  const { t, lang } = useLang()

  const headline = lang === 'en'
    ? 'How a restaurant group in Saint-Étienne replaced 99% of their operational stack with two platforms they own outright — and freed 14 hours a week.'
    : 'Comment un groupe de restauration à Saint-Étienne a remplacé 99% de son stack opérationnel par deux plateformes qu\'il possède — et libéré 14 heures par semaine.'

  const metrics = [
    { value: '11h → 1h', label: lang === 'en' ? 'Per week, per manager' : 'Par semaine, par manager' },
    { value: '25 480€', label: lang === 'en' ? 'Productivity recovered per year' : 'Productivité récupérée par an' },
    { value: '~55', label: lang === 'en' ? 'Collaborators onboarded with zero friction' : 'Collaborateurs intégrés sans friction' },
    { value: '99%', label: lang === 'en' ? 'Operations on software they own' : 'Opérations sur du logiciel qui leur appartient' },
  ]

  const quote = lang === 'en'
    ? '"It changed the way we run everything."'
    : '"Ça a changé notre façon de tout gérer."'

  return (
    <section id="case-study" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('results.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {t('results.title')}{' '}
            <span className="accent">{t('results.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            {t('results.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <motion.div
            className="overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              maxWidth: '960px',
              margin: '0 auto',
              padding: 'clamp(32px, 5vw, 56px)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
              <p
                className="font-mono"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}
              >
                Restaurant Group · Saint-Étienne
              </p>
              <h3
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}
              >
                Chromosome
              </h3>
              <p
                className="font-sans"
                style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  maxWidth: '680px',
                  margin: '0 auto',
                }}
              >
                {headline}
              </p>
            </div>

            {/* Video */}
            <div
              className="relative overflow-hidden mb-10"
              style={{
                aspectRatio: '16/9',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                maxWidth: '800px',
                margin: '0 auto 40px',
              }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/aMIjJbzuhDc?rel=0"
                title={lang === 'en' ? 'Chromosome testimonial — NateSystem' : 'Témoignage Chromosome — NateSystem'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
                style={{ borderRadius: '12px' }}
              />
            </div>

            {/* Metrics */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 pb-10"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              {metrics.map((m) => (
                <div key={m.value} className="text-center md:text-left">
                  <p
                    className="font-serif italic"
                    style={{
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      color: 'var(--accent)',
                      lineHeight: 1.15,
                      marginBottom: '6px',
                      fontWeight: 400,
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      fontWeight: 300,
                      lineHeight: 1.45,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ textAlign: 'center' }}>
              <p
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.4,
                  maxWidth: '640px',
                  margin: '0 auto 16px',
                }}
              >
                {quote}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}
              >
                Catherine P.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300, letterSpacing: '0.5px' }}
              >
                General Manager · Chromosome Saint-Étienne
              </p>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
