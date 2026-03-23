'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

const YOUTUBE_VIDEO_ID = 'aMIjJbzuhDc'

export default function Testimonial() {
  const { t } = useLang()
  const [videoLoaded, setVideoLoaded] = useState(false)

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
          <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', borderRadius: '12px' }}>
            {YOUTUBE_VIDEO_ID && videoLoaded ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="NateSystem — Témoignage client"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            ) : (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-subtle) 0%, var(--bg-card) 100%)',
                  border: '1px solid rgba(230,57,70,0.15)',
                  borderRadius: '12px',
                }}
                onClick={() => setVideoLoaded(true)}
                whileHover={{ borderColor: 'rgba(230,57,70,0.35)' }}
              >
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
                <motion.div
                  className="relative flex items-center justify-center w-20 h-20 rounded-full mb-5"
                  style={{ border: '1px solid var(--accent)', background: 'var(--accent-subtle)' }}
                  whileHover={{ scale: 1.08 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1" style={{ color: 'var(--accent)' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <p className="font-sans relative z-10" style={{ fontSize: '13px', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 300 }}>
                  {t('testimonial.watch')}
                </p>

                {/* Corner accents */}
                {[['top-4 left-4', 'borderTop', 'borderLeft'], ['top-4 right-4', 'borderTop', 'borderRight'], ['bottom-4 left-4', 'borderBottom', 'borderLeft'], ['bottom-4 right-4', 'borderBottom', 'borderRight']].map(([pos, b1, b2]) => (
                  <div key={pos} className={`absolute ${pos} w-6 h-6`} style={{ [b1]: '1px solid rgba(230,57,70,0.3)', [b2]: '1px solid rgba(230,57,70,0.3)' }} />
                ))}
              </motion.div>
            )}
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
