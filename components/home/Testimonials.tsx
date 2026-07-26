'use client'

/**
 * Testimonials — written proof cards, placed right under the Chromosome
 * case-study video. Reinforces the single video with real, attributable
 * quotes.
 *
 * HONESTY RULE: only real, verifiable testimonials go here. Today Nathan has
 * exactly two named sources — the UJM/IUT Saint-Étienne teacher and Chromosome.
 * Add more (with attribution) only when they're genuinely collected. No
 * invented reviews.
 */

import { Star } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Testimonial = { quote: { fr: string; en: string }; name: string; role: { fr: string; en: string } }

const testimonials: Testimonial[] = [
  {
    quote: {
      fr: 'Face à des logiciels du marché souvent trop complexes, trop chers et mal adaptés aux petites structures, ils ont développé en quelques semaines une plateforme parfaitement adaptée à nos besoins. Si vous recherchez des talents capables de concevoir des solutions digitales sur-mesure, vous pouvez leur faire confiance.',
      en: "Faced with off-the-shelf software that's often too complex, too expensive and poorly suited to small structures, they built a platform perfectly adapted to our needs in just a few weeks. If you're looking for people who can design custom digital solutions, you can trust them.",
    },
    name: 'Université Jean Monnet',
    role: {
      fr: 'Enseignante · Ressources & Cultures Numériques — Saint-Étienne',
      en: 'Teacher · Digital Resources & Culture — Saint-Étienne',
    },
  },
  {
    quote: {
      fr: 'Deux plateformes sur-mesure pour mieux gérer notre restaurant. Tout a été personnalisé selon nos besoins, avec une réactivité optimale.',
      en: 'Two custom platforms to run our restaurant better. Everything was tailored to our needs, with outstanding responsiveness.',
    },
    name: 'Chromosome',
    role: { fr: 'Restaurant · Saint-Étienne', en: 'Restaurant · Saint-Étienne' },
  },
]

export default function Testimonials() {
  const { lang } = useLang()
  const eyebrow = lang === 'fr' ? 'ILS EN PARLENT' : 'IN THEIR WORDS'
  const title = lang === 'fr' ? 'La preuve, dans leurs mots.' : 'Proof, in their words.'

  return (
    <section aria-label={eyebrow} style={{ padding: '8px 24px 88px' }}>
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        <FadeUp className="text-center" >
          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 12,
            }}
          >
            {eyebrow}
          </p>
          <h3
            className="font-serif italic"
            style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 400, color: 'var(--text)', marginBottom: 36 }}
          >
            {title}
          </h3>
        </FadeUp>

        <div className="tst-grid">
          {testimonials.map((tm, i) => (
            <FadeUp key={tm.name} delay={i * 0.1}>
              <figure
                className="tst-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '28px 26px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  margin: 0,
                }}
              >
                <div aria-hidden="true" style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="#F59E0B" strokeWidth={0} />
                  ))}
                </div>
                <blockquote
                  className="font-serif italic"
                  style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--text)', margin: 0, flex: 1 }}
                >
                  “{lang === 'fr' ? tm.quote.fr : tm.quote.en}”
                </blockquote>
                <figcaption style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                  <p className="font-sans" style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                    {tm.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-secondary)', margin: '3px 0 0' }}
                  >
                    {lang === 'fr' ? tm.role.fr : tm.role.en}
                  </p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        .tst-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .tst-card {
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 4px 12px -8px rgba(15,23,42,0.08);
          transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease;
        }
        .tst-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-hover);
          box-shadow: 0 14px 34px -22px var(--accent-glow), 0 1px 2px rgba(0,0,0,0.04);
        }
        @media (max-width: 780px) {
          .tst-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tst-card { transition: none; }
          .tst-card:hover { transform: none; }
        }
      `}</style>
    </section>
  )
}
