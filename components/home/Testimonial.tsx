'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Testimonial() {
  const { t } = useLang()

  return (
    <section style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '880px' }}>
        <FadeUp className="text-center mb-16">
          <div className="font-serif italic mb-6" style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: 'var(--accent)',
            lineHeight: 1.25, maxWidth: '760px', margin: '0 auto 24px',
          }}>
            &ldquo;It changed the way we run everything.&rdquo;
          </div>
          <p className="font-sans" style={{ fontSize: '14px', letterSpacing: '1.5px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 300 }}>
            Catherine P. — General Manager, Chromosome Saint-Étienne
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: '16/9',
              borderRadius: '12px',
              border: '1px solid var(--border)',
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/aMIjJbzuhDc?rel=0"
              title="Témoignage Chromosome — NateSystem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
              style={{ borderRadius: '12px' }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.35} className="text-center mt-6">
          <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.5px', fontWeight: 300 }}>
            {t('testimonial.caption')}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
