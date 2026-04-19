'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FilterBar from './components/FilterBar'
import ResourceCard from './components/ResourceCard'
import DownloadModal from './components/DownloadModal'
import { resources, CATEGORIES, Resource } from '@/lib/resources'
import { useLang } from '@/components/providers/LangProvider'

export default function ToolsPage() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState('Tous')
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const auditBanner = {
    label: lang === 'hu' ? 'ÚJ · ÉTTERMEKNEK' : lang === 'en' ? 'NEW · FOR RESTAURANTS' : 'NOUVEAU · POUR RESTAURANTS',
    title: lang === 'hu' ? 'Éttermi digitális érettségi audit' : lang === 'en' ? 'Restaurant digital maturity audit' : 'Audit digital pour restaurants',
    desc:
      lang === 'hu'
        ? 'Ingyenes audit 24 kérdésben. Értékeli az étterem digitális érettségét, megbecsüli a veszteségeket és 90 napos tervet ad.'
        : lang === 'en'
          ? 'Free 24-question audit. Scores your digital maturity, estimates losses, delivers a 90-day action plan.'
          : 'Audit gratuit en 24 questions. Évalue votre maturité digitale, estime les pertes et livre un plan d\'action 90 jours.',
    cta: lang === 'hu' ? 'Audit indítása →' : lang === 'en' ? 'Start the audit →' : 'Démarrer l\'audit →',
  }

  const filtered = filter === 'Tous' ? resources : resources.filter(r => r.category === filter)

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

        {/* Restaurant-audit product banner */}
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/tools/restaurant-audit"
              className="group block"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 'clamp(22px, 3vw, 34px)',
                textDecoration: 'none',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
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
                    style={{
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: 10,
                    }}
                  >
                    {auditBanner.label}
                  </p>
                  <h2
                    className="font-serif italic"
                    style={{
                      fontSize: 'clamp(22px, 2.4vw, 28px)',
                      lineHeight: 1.25,
                      color: 'var(--text)',
                      fontWeight: 400,
                      marginBottom: 8,
                    }}
                  >
                    {auditBanner.title}
                  </h2>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      maxWidth: 620,
                    }}
                  >
                    {auditBanner.desc}
                  </p>
                </div>
                <span
                  className="font-sans"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 22px',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 10,
                    whiteSpace: 'nowrap',
                    alignSelf: 'flex-start',
                  }}
                >
                  {auditBanner.cta}
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Filter bar */}
        <section className="px-6 pb-8">
          <div className="max-w-5xl mx-auto">
            <FilterBar categories={CATEGORIES} active={filter} onChange={setFilter} />
          </div>
        </section>

        {/* Resource grid */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filtered.map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDownload={setSelectedResource}
                />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center py-16 text-lg" style={{ color: 'var(--text-muted)' }}>
                Aucune ressource dans cette catégorie.
              </p>
            )}
          </div>
        </section>

        <Footer />
      </div>

      <DownloadModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
    </main>
  )
}
