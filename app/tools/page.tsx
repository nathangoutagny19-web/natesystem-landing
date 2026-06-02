'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LiveDemosBanner from './components/LiveDemosBanner'
import { useLang } from '@/components/providers/LangProvider'

// Lead-magnets grid (FilterBar + ResourceCard + DownloadModal) intentionally
// hidden until the 12 ZIP packs are actually produced — the public/resources/
// archives are still placeholders. The component files stay on disk so they
// can be re-imported in one commit when content ships.

export default function ToolsPage() {
  const { t } = useLang()

  return (
    <main className="tools-page min-h-screen" style={{ background: 'var(--tools-bg)' }}>
      <Nav />

      {/* Background grid */}
      <div className="tools-grid-bg fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Hero section */}
        <section className="pt-32 pb-12 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight" style={{ color: 'var(--text)', whiteSpace: 'pre-line' }}>
              {t('tools.hero.title')}
            </h1>
            <p className="mt-4 text-lg md:text-xl italic font-light" style={{ color: 'var(--text-muted)' }}>
              {t('tools.hero.sub')}
            </p>
            <p className="mt-3 text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
              {t('tools.hero.tags')}
            </p>
          </div>
        </section>

        {/* Diagnostic IA — interactive tool that delivers a real PDF report */}
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/tools/diagnostic-ia"
              className="group block"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 'clamp(22px, 3vw, 34px)',
                textDecoration: 'none',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div style={{ flex: 1 }}>
                  <p
                    className="font-mono"
                    style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}
                  >
                    Outil interactif · 2 min
                  </p>
                  <h2
                    className="font-serif italic"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', lineHeight: 1.25, color: 'var(--text)', fontWeight: 400, marginBottom: 8 }}
                  >
                    Le Diagnostic IA
                  </h2>
                  <p
                    className="font-sans"
                    style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 620 }}
                  >
                    Combien votre stack SaaS gaspille, combien d&apos;heures votre équipe perd, où vous en êtes sur la maturité IA. Chiffré, 3 leviers priorisés, PDF téléchargeable.
                  </p>
                </div>
                <span
                  className="font-sans"
                  style={{
                    display: 'inline-flex', alignItems: 'center', padding: '12px 22px',
                    background: 'var(--accent)', color: '#fff', fontSize: 13, fontWeight: 600,
                    borderRadius: 10, whiteSpace: 'nowrap', alignSelf: 'flex-start',
                  }}
                >
                  Lancer le diagnostic →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Live demos — 2 interactive Lovable apps (actifs + stock) */}
        <LiveDemosBanner />

        {/* Lead-magnet grid + DownloadModal disabled until real packs exist.
            See RESOURCES_ENABLED flag at top of file. */}

        <Footer />
      </div>
    </main>
  )
}
