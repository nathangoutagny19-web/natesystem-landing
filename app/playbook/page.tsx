import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cardTaglineFor, playbooks, sectorLabelFor } from '@/lib/playbooks'
import PlaybookBrandContext from './_components/PlaybookBrandContext'
import PlaybookFooter from './_components/PlaybookFooter'

export const metadata: Metadata = {
  title: 'Playbooks IA — un guide pratique par secteur | NateSystem',
  description:
    'Treize playbooks IA gratuits, un par secteur français : hôtellerie, avocats, propreté, photovoltaïque, expertise-comptable, architectes, immobilier, formation, sécurité, traiteurs, métiers du vin, cabinets de conseil. 30 pages chacun, PDF.',
  alternates: { canonical: 'https://natesystem.com/playbook' },
  openGraph: {
    title: 'Playbooks IA — un guide pratique par secteur | NateSystem',
    description:
      'Treize guides pratiques pour utiliser l’IA dans votre métier, sans buzzword. 30 pages chacun, écrits pour des PME françaises, prêts à lire.',
    url: 'https://natesystem.com/playbook',
    type: 'website',
  },
}

export default function PlaybookIndexPage() {
  return (
    <>
      <section className="pb-index-hero">
        <span
          className="pb-eyebrow-soft"
          style={{ display: 'block', marginBottom: 16 }}
        >
          Publiés par NateSystem · Logiciel sur-mesure
        </span>
        <h1 className="pb-h1" style={{ margin: '0 auto 18px' }}>
          Un playbook IA, par secteur.
        </h1>
        <p className="pb-lead" style={{ margin: '0 auto 12px' }}>
          Treize guides pratiques pour utiliser l’IA dans votre métier — sans
          buzzword, sans hype. Trente pages écrites pour des PME françaises,
          lisibles en vingt-cinq minutes. Choisissez votre secteur.
        </p>
      </section>

      <div className="pb-index-grid">
        {playbooks.map((p) => (
          <Link key={p.slug} href={`/playbook/${p.slug}`} className="pb-card">
            <span className="pb-card-sector">{sectorLabelFor(p.slug)}</span>
            <h2 className="pb-card-title">{cardTaglineFor(p.slug)}</h2>
            <span className="pb-card-meta">30 pages · PDF · Gratuit</span>
            <span className="pb-card-cta">
              Lire le playbook <ArrowRight size={14} strokeWidth={2} />
            </span>
          </Link>
        ))}
      </div>

      <PlaybookBrandContext />

      <PlaybookFooter />
    </>
  )
}
