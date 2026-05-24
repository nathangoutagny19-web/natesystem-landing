import { Suspense } from 'react'
import PlaybookForm from './PlaybookForm'

export default function PlaybookCTA({ slug }: { slug: string }) {
  return (
    <section className="pb-cta-block">
      <div className="pb-container" style={{ maxWidth: 520 }}>
        <span className="pb-eyebrow-soft">Téléchargez maintenant</span>
        <h2 className="pb-h2" style={{ marginTop: 12 }}>
          30 pages, PDF, gratuit, en français.
        </h2>
        <p className="pb-lead">
          Lisible en 25 minutes. Actionnable dès lundi matin.
        </p>
        <Suspense fallback={<div className="pb-form" aria-hidden="true" />}>
          <PlaybookForm slug={slug} ctaLabel="Recevoir le playbook gratuit" />
        </Suspense>
      </div>
    </section>
  )
}
