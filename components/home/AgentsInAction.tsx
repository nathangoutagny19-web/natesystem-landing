'use client'

/**
 * AgentsInAction — concrete examples of what the deployed agents do.
 *
 * Sits between Solution and CaseStudy. Visually mirrors Solution
 * (same numbered-card grid, same hover line, same tag treatment) so
 * the eye reads them as a continuation, not a separate concept.
 *
 * Three cards, each one a real agent archetype Nathan ships in
 * production: Watch / Qualification / Document.
 */

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function AgentsInAction() {
  const { t } = useLang()

  const agents = [
    { number: '01', title: t('agents.watch.title'),   desc: t('agents.watch.desc'),   tags: t('agents.watch.tags') },
    { number: '02', title: t('agents.qualify.title'), desc: t('agents.qualify.desc'), tags: t('agents.qualify.tags') },
    { number: '03', title: t('agents.docs.title'),    desc: t('agents.docs.desc'),    tags: t('agents.docs.tags') },
  ]

  return (
    <section id="agents" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">{t('agents.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '760px', margin: '0 auto 24px' }}>
            {t('agents.title')}{' '}
            <span className="accent">{t('agents.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            {t('agents.sub')}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {agents.map((a, i) => (
            <FadeUp key={a.number} delay={i * 0.12}>
              <div
                className="relative overflow-hidden h-full process-card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '48px 36px 44px', transition: 'border-color 0.3s, background 0.3s' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-ns-accent scale-x-0 hover:scale-x-100 transition-transform duration-400 origin-left" />

                <span className="font-serif italic block mb-6" style={{ fontSize: '48px', color: 'var(--accent)', opacity: 0.6, lineHeight: 1 }}>
                  {a.number}
                </span>
                <h3 className="font-serif italic mb-4" style={{ fontSize: '24px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p className="font-sans mb-6" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                  {a.desc}
                </p>
                <p className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase', opacity: 0.7 }}>
                  {a.tags}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
