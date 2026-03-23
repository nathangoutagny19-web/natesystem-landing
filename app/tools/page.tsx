'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FilterBar from './components/FilterBar'
import ResourceCard from './components/ResourceCard'
import DownloadModal from './components/DownloadModal'
import { resources, CATEGORIES, Resource } from '@/lib/resources'

export default function ToolsPage() {
  const [filter, setFilter] = useState('Tous')
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const filtered = filter === 'Tous' ? resources : resources.filter(r => r.category === filter)

  return (
    <main className="min-h-screen" style={{ background: '#F0EAE0' }}>
      <Nav />

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.055) 1px,transparent 1px), linear-gradient(90deg,rgba(0,0,0,0.055) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10">
        {/* Hero section */}
        <section className="pt-32 pb-12 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Les meilleures ressources IA
              <br />
              pour ton \u00e9quipe.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400 italic font-light">
              Ce que les agences facturent des milliers d&apos;euros. Gratuit ici.
            </p>
            <p className="mt-3 text-sm text-gray-500 font-light">
              Skills Claude &middot; Prompts GPT &middot; Guides d&apos;impl\u00e9mentation &middot; 0\u20ac
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
              <p className="text-center text-gray-400 py-16 text-lg">
                Aucune ressource dans cette cat\u00e9gorie.
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
