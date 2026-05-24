import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { playbooks, sectorLabelFor } from '@/lib/playbooks'
import PlaybookFooter from './_components/PlaybookFooter'

export const metadata: Metadata = {
  title: '11 playbooks IA sectoriels — NateSystem',
  description:
    'Onze playbooks IA gratuits, un par secteur français : hôtellerie, avocats, propreté, photovoltaïque, expertise-comptable, architectes, immobilier, formation, sécurité, traiteurs. 30 pages chacun, PDF.',
  alternates: { canonical: 'https://natesystem.com/playbook' },
  openGraph: {
    title: '11 playbooks IA sectoriels — NateSystem',
    description:
      'Onze playbooks gratuits, un par secteur français. 30 pages chacun, actionnables dès lundi matin.',
    url: 'https://natesystem.com/playbook',
    type: 'website',
  },
}

export default function PlaybookIndexPage() {
  return (
    <>
      <section className="pb-index-hero">
        <span className="pb-eyebrow">PLAYBOOKS · GRATUITS · PDF</span>
        <h1 className="pb-h1" style={{ margin: '20px auto 18px' }}>
          Onze playbooks IA, un par secteur.
        </h1>
        <p className="pb-lead" style={{ margin: '0 auto 12px' }}>
          Choisissez votre métier. Trente pages chiffrées, lisibles en vingt-cinq
          minutes, actionnables dès lundi matin. Sans franchise, sans cabinet de
          conseil, sans SaaS supplémentaire.
        </p>
      </section>

      <div className="pb-index-grid">
        {playbooks.map((p) => (
          <Link key={p.slug} href={`/playbook/${p.slug}`} className="pb-card">
            <span className="pb-card-sector">{sectorLabelFor(p.slug)}</span>
            <h2 className="pb-card-title">{p.hero.h1}</h2>
            <span className="pb-card-meta">30 pages · PDF · Gratuit</span>
            <span className="pb-card-cta">
              Lire le playbook <ArrowRight size={14} strokeWidth={2} />
            </span>
          </Link>
        ))}
      </div>

      <PlaybookFooter />
    </>
  )
}
