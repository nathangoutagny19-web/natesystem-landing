'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

// Replace with actual YouTube video ID when available
const YOUTUBE_VIDEO_ID = ''

export default function Testimonial() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--color-black)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '880px' }}>
        {/* Pull quote */}
        <FadeUp className="text-center mb-16">
          <div
            className="font-display italic mb-6"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400,
              color: 'var(--color-gold)',
              lineHeight: 1.25,
              maxWidth: '760px',
              margin: '0 auto 24px',
            }}
          >
            &ldquo;It changed the way we run everything.&rdquo;
          </div>
          <p
            className="font-body font-light"
            style={{
              fontSize: '14px',
              letterSpacing: '1.5px',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
            }}
          >
            Catherine P. — General Manager, Chromosome Saint-Étienne
          </p>
        </FadeUp>

        {/* Video container */}
        <FadeUp delay={0.2}>
          <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
            {YOUTUBE_VIDEO_ID ? (
              // Real YouTube embed
              <>
                {!videoLoaded && (
                  <VideoPlaceholder onPlay={() => setVideoLoaded(true)} />
                )}
                {videoLoaded && (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="NateSystem — Témoignage client Chromosome"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                )}
              </>
            ) : (
              // Elegant placeholder
              <VideoPlaceholder onPlay={() => {}} />
            )}
          </div>
        </FadeUp>

        {/* Caption */}
        <FadeUp delay={0.35} className="text-center mt-6">
          <p
            className="font-body font-light"
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              letterSpacing: '0.5px',
            }}
          >
            Catherine P. présente les résultats obtenus avec NateSystem après 3 mois de déploiement.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function VideoPlaceholder({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
      style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(10,10,10,0.95) 100%)',
        border: '1px solid rgba(201,168,76,0.15)',
      }}
      onClick={onPlay}
      whileHover={{ borderColor: 'rgba(201,168,76,0.35)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle grid inside */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Play button */}
      <motion.div
        className="relative flex items-center justify-center w-20 h-20 rounded-full mb-5"
        style={{
          border: '1px solid var(--color-gold)',
          background: 'rgba(201,168,76,0.08)',
        }}
        whileHover={{ scale: 1.08, background: 'rgba(201,168,76,0.15)' }}
        transition={{ duration: 0.25 }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 ml-1"
          style={{ color: 'var(--color-gold)' }}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </motion.div>

      {/* Label */}
      <p
        className="font-body font-light relative z-10"
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        Voir le témoignage
      </p>

      {/* Corner accents */}
      <div
        className="absolute top-4 left-4 w-6 h-6"
        style={{
          borderTop: '1px solid rgba(201,168,76,0.3)',
          borderLeft: '1px solid rgba(201,168,76,0.3)',
        }}
      />
      <div
        className="absolute top-4 right-4 w-6 h-6"
        style={{
          borderTop: '1px solid rgba(201,168,76,0.3)',
          borderRight: '1px solid rgba(201,168,76,0.3)',
        }}
      />
      <div
        className="absolute bottom-4 left-4 w-6 h-6"
        style={{
          borderBottom: '1px solid rgba(201,168,76,0.3)',
          borderLeft: '1px solid rgba(201,168,76,0.3)',
        }}
      />
      <div
        className="absolute bottom-4 right-4 w-6 h-6"
        style={{
          borderBottom: '1px solid rgba(201,168,76,0.3)',
          borderRight: '1px solid rgba(201,168,76,0.3)',
        }}
      />
    </motion.div>
  )
}
