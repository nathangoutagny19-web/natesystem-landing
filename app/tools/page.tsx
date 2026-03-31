'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FilterBar from './components/FilterBar'
import ResourceCard from './components/ResourceCard'
import DownloadModal from './components/DownloadModal'
import { resources, CATEGORIES, Resource } from '@/lib/resources'
import { useLang } from '@/components/providers/LangProvider'

export default function ToolsPage() {
  const { t } = useLang()
  const [filter, setFilter] = useState('Tous')
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

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
