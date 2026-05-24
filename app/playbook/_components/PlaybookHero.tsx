import { Suspense } from 'react'
import type { Playbook } from '@/lib/playbooks'
import PlaybookForm from './PlaybookForm'

export default function PlaybookHero({ playbook }: { playbook: Playbook }) {
  return (
    <section className="pb-hero">
      <div>
        <span className="pb-eyebrow">{playbook.hero.eyebrow}</span>
        <h1 className="pb-h1">{playbook.hero.h1}</h1>
        <p className="pb-lead">{playbook.hero.subtitle}</p>
        <Suspense fallback={<div className="pb-form" aria-hidden="true" />}>
          <PlaybookForm slug={playbook.slug} />
        </Suspense>
      </div>
      <aside className="pb-hero-mockup" aria-hidden="true">
        <span className="pb-hero-mockup-mark">NateSystem</span>
        <h2 className="pb-hero-mockup-title">{playbook.title}</h2>
        <p className="pb-hero-mockup-sub">{playbook.hero.subtitle}</p>
        <p className="pb-hero-mockup-meta">
          <strong>30 pages</strong> · PDF · Français · Édition France 2026
        </p>
      </aside>
    </section>
  )
}
