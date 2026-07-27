'use client'

import Link from 'next/link'
import { Map, MousePointerClick, FileText } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import Process from '@/components/home/Process'
import Radiographie from '@/components/methode/Radiographie'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function MethodeContent() {
  const { t } = useLang()

  const deliverables = [
    { icon: Map, name: t('v2.sprint.d1.name'), desc: t('v2.sprint.d1.desc') },
    { icon: MousePointerClick, name: t('v2.sprint.d2.name'), desc: t('v2.sprint.d2.desc') },
    { icon: FileText, name: t('v2.sprint.d3.name'), desc: t('v2.sprint.d3.desc') },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 860 }}>
          <FadeUp>
            <span className="section-label">{t('methode.hero.eyebrow')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 800, margin: '14px auto 24px' }}>
              {t('methode.hero.title')}{' '}
              <span className="accent" style={{ color: 'var(--accent)' }}>{t('methode.hero.titleAccent')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {t('methode.hero.sub')}
            </p>
            <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{t('methode.hero.cta')} →
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* La Radiographie interactive */}
      <Radiographie />

      <Divider />

      {/* Les 3 livrables (repris du Sprint Diagnostic) */}
      <section style={{ padding: '100px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1080 }}>
          <FadeUp className="text-center mb-11">
            <span className="section-label">{t('methode.deliv.label')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto 14px' }}>
              {t('methode.deliv.title')}
            </h2>
            <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 460, margin: '0 auto' }}>
              {t('methode.deliv.sub')}
            </p>
          </FadeUp>

          <div className="methode-deliv-grid">
            {deliverables.map((d, i) => {
              const Icon = d.icon
              return (
                <FadeUp key={d.name} delay={i * 0.1}>
                  <div className="methode-deliv-card">
                    <span className="methode-deliv-ico" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <p className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, color: 'var(--text)', margin: '2px 0 8px' }}>
                      {d.name}
                    </p>
                    <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 300, color: 'var(--text-secondary)', margin: 0 }}>
                      {d.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* La méthode en 4 temps (composant Process réutilisé) */}
      <Process />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {t('methode.cta.title')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {t('methode.cta.sub')}
              </p>
              <Link href={CAL_LINK} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{t('methode.cta.button')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .methode-deliv-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .methode-deliv-card {
          display: flex; flex-direction: column; height: 100%;
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
          padding: 30px 26px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease;
        }
        .methode-deliv-card:hover {
          transform: translateY(-3px);
          border-color: rgba(230,57,70,0.28);
        }
        .methode-deliv-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 11px; margin-bottom: 16px;
          background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.18); color: var(--accent);
        }
        @media (max-width: 900px) { .methode-deliv-grid { grid-template-columns: 1fr; gap: 16px; } }
      `}</style>
    </main>
  )
}
