'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

// Vidéo témoignage podcast (paysage 16:9), l'épisode complet Chromosome.
const YOUTUBE_ID = 'aMIjJbzuhDc'

// Lecteur YouTube "facade" : on ne charge l'iframe (ni les cookies tiers)
// qu'au clic. Remplit son parent (aspect-ratio géré par le conteneur).
function LiteYouTube({ title }: { title: string }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: '12px', border: 0 }}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={title}
      className="absolute inset-0 w-full h-full group"
      style={{
        borderRadius: '12px',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
        onError={(e) => {
          // maxresdefault peut manquer → fallback hqdefault
          ;(e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`
        }}
      />
      {/* Voile sombre pour la lisibilité du bouton */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.42))' }}
      />
      {/* Bouton play */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 cs-play"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 76,
          height: 76,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.96)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.28)',
          transition: 'transform 0.25s ease',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#E63946" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  )
}

export default function CaseStudy() {
  const { lang } = useLang()

  const headline = lang === 'en'
    ? 'How a restaurant group in Saint-Étienne runs all its operations on software it owns, and gives its teams back 14 hours a week for what truly matters: their guests.'
    : 'Comment un groupe de restauration à Saint-Étienne pilote toutes ses opérations sur un logiciel qui lui appartient, et rend chaque semaine 14 heures à ses équipes pour ce qui compte vraiment : leurs clients.'

  const metrics = [
    { value: '11h → 1h', label: lang === 'en' ? 'Per week, per manager' : 'Par semaine, par manager' },
    { value: '~55', label: lang === 'en' ? 'Collaborators (volunteers, staff, partners) onboarded with zero friction' : 'Collaborateurs (bénévoles, employés, partenaires) intégrés sans friction' },
    { value: '99%', label: lang === 'en' ? 'Operations on software they own' : 'Opérations sur du logiciel qui leur appartient' },
  ]

  const quote = lang === 'en'
    ? 'It changed the way we run everything, we couldn\'t do without it now. The time and clarity we\'ve gained are huge, and the team is far more at ease.'
    : 'Ça a changé notre façon de tout gérer, on ne peut plus s\'en passer aujourd\'hui. Le gain de temps et de clarté est énorme, et l\'équipe est beaucoup plus sereine.'

  const role = lang === 'en'
    ? 'General Manager · Chromosome Saint-Étienne'
    : 'General Manager · Chromosome Saint-Étienne'

  return (
    <section id="case-study" style={{ padding: '24px 24px 80px' }}>
      <div className="mx-auto" style={{ maxWidth: '1120px' }}>
        <FadeUp>
          <motion.div
            className="overflow-hidden cs-card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              margin: '0 auto',
              padding: 'clamp(28px, 4.5vw, 56px)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 'clamp(28px, 4vw, 44px)', textAlign: 'center' }}>
              <p
                className="font-mono"
                style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}
              >
                Restaurant Group · Saint-Étienne
              </p>
              <h3
                className="font-serif italic"
                style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', fontWeight: 400, color: 'var(--accent)', lineHeight: 1.1, marginBottom: '18px' }}
              >
                Chromosome
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, maxWidth: '720px', margin: '0 auto' }}
              >
                {headline}
              </p>
            </div>

            {/* Citation (gauche) + vidéo témoignage (droite), structure OpsKings */}
            <div className="cs-row">
              <div className="cs-quote-col">
                <span className="cs-qmark font-serif" aria-hidden="true">“</span>
                <blockquote className="cs-quote font-serif">{quote}</blockquote>
                <div className="cs-attr">
                  <span className="cs-attr-name font-sans">Catherine F.</span>
                  <span className="cs-attr-role font-sans">{role}</span>
                </div>
              </div>

              <div className="cs-video-col">
                <div className="cs-video">
                  <LiteYouTube title={lang === 'en' ? 'Chromosome testimonial, NateSystem' : 'Témoignage Chromosome, NateSystem'} />
                </div>
              </div>
            </div>

            {/* Chiffres */}
            <div className="cs-metrics">
              {metrics.map((m) => (
                <div key={m.value} className="cs-metric">
                  <p className="cs-metric-value font-serif italic">{m.value}</p>
                  <p className="cs-metric-label font-sans">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </FadeUp>
      </div>

      <style jsx>{`
        .cs-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        @media (min-width: 860px) {
          .cs-row { grid-template-columns: 0.9fr 1.1fr; gap: 48px; }
        }

        /* Colonne citation */
        .cs-quote-col { display: flex; flex-direction: column; position: relative; }
        .cs-qmark {
          font-size: 72px; line-height: 0.7; color: var(--accent);
          opacity: 0.5; margin-bottom: 4px; height: 40px;
        }
        .cs-quote {
          font-style: italic; font-weight: 400; color: var(--text);
          font-size: clamp(19px, 2.2vw, 27px); line-height: 1.4;
          margin: 0 0 22px;
        }
        .cs-attr { display: flex; flex-direction: column; gap: 3px; }
        .cs-attr-name { font-size: 14px; font-weight: 600; color: var(--text); }
        .cs-attr-role { font-size: 12.5px; font-weight: 300; color: var(--text-secondary); letter-spacing: 0.3px; }

        /* Colonne vidéo, paysage 16:9 */
        .cs-video {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
          border-radius: 12px; overflow: hidden; border: 1px solid var(--border);
          background: #000;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 18px 44px -22px rgba(15,23,42,0.32);
        }

        /* Chiffres, 4 colonnes, séparés par un filet en haut */
        .cs-metrics {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
          padding-top: clamp(28px, 3.5vw, 40px); border-top: 1px solid var(--border);
        }
        @media (min-width: 720px) { .cs-metrics { grid-template-columns: repeat(3, 1fr); } }
        .cs-metric-value {
          font-size: clamp(22px, 3vw, 28px); color: var(--accent);
          line-height: 1.15; margin: 0 0 6px; font-weight: 400;
        }
        .cs-metric-label { font-size: 12px; color: var(--text-muted); font-weight: 300; line-height: 1.45; }
      `}</style>
    </section>
  )
}
