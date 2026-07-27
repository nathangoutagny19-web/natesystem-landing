'use client'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import CaseStudy from '@/components/home/CaseStudy'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function CaseStudiesPage() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <main>
      <Nav />

      {/* Header */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
          <FadeUp>
            <span className="section-label">{d('Réalisations', 'Case studies')}</span>
            <h1 className="section-title" style={{ margin: '0 auto 20px' }}>
              {d('Des résultats réels, pas des promesses.', 'Real results, not promises.')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {d('Chaque chiffre est mesuré avec le client et documenté. Voici ce que le sur-mesure change concrètement.',
                 'Every figure is measured with the client and documented. Here’s what custom software concretely changes.')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Cas client — Chromosome (structure OpsKings : citation + vidéo + chiffres) */}
      <CaseStudy />

      {/* Lien vers l'étude de cas écrite (Problème → Solution → Résultats) */}
      <section style={{ padding: '8px 24px 8px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '620px' }}>
          <FadeUp>
            <Link href="/case-studies/chromosome" className="btn-ghost">
              {d('Lire l’étude de cas complète', 'Read the full case study')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* CTA de clôture */}
      <section style={{ padding: '72px 24px 96px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '620px' }}>
          <FadeUp>
            <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 3.4vw, 34px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.25, marginBottom: 24 }}>
              {d('Envie du même résultat chez vous ?', 'Want the same result at your company?')}
            </h2>
            <Link href={CAL_LINK} className="btn-primary">
              <span className="btn-primary-dot" />
              {d('Réserver un appel', 'Book a call')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}
