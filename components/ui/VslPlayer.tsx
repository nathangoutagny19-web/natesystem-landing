'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

/**
 * Self-hosted VSL, plays INLINE on the landing (no modal, no popup).
 * Pro alternative to a YouTube embed: no third-party logo, no suggested
 * videos, our branding only.
 *
 * Perf: the <video> is only mounted once the poster is clicked, so the file
 * is NEVER fetched on page load — the hero stays as light as before. Until
 * then it's just a poster image + a play button, in the exact same frame.
 */
export default function VslPlayer({
  src,
  poster,
  label = 'Voir la démo',
  duration,
  title = 'Démo NateSystem',
}: {
  /** Path to the self-hosted file, e.g. "/vsl.mp4" (put it in /public). */
  src: string
  /** Optional poster image, e.g. "/vsl-poster.jpg". Falls back to a dark card. */
  poster?: string
  label?: string
  /** Small caption, e.g. "5 min". */
  duration?: string
  title?: string
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="vsl-frame">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="vsl-media"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={label} className="vsl-trigger group">
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt={title} loading="lazy" className="vsl-media vsl-poster" />
          ) : (
            <span className="vsl-media vsl-poster vsl-poster--fallback" aria-hidden />
          )}
          <span className="vsl-overlay" aria-hidden>
            <span className="vsl-play">
              <Play size={22} strokeWidth={2.5} fill="#fff" style={{ marginLeft: 3 }} />
            </span>
            <span className="vsl-caption">
              {label}
              {duration ? <span className="vsl-duration"> · {duration}</span> : null}
            </span>
          </span>
        </button>
      )}

      <style jsx>{`
        .vsl-frame {
          position: relative;
          width: 100%;
          max-width: 720px;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: #000;
          box-shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.55);
        }
        .vsl-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .vsl-trigger {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          cursor: pointer;
          background: #000;
        }
        .vsl-poster {
          opacity: 0.92;
          transition: transform 0.5s ease, opacity 0.35s ease;
        }
        .vsl-trigger:hover .vsl-poster {
          transform: scale(1.03);
          opacity: 1;
        }
        .vsl-poster--fallback {
          background: radial-gradient(120% 120% at 50% 0%, #1a1a1c 0%, #0a0a0b 70%);
        }
        .vsl-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.05));
        }
        .vsl-play {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px -6px rgba(230, 57, 70, 0.7);
          transition: transform 0.2s ease;
        }
        .vsl-trigger:hover .vsl-play {
          transform: scale(1.08);
        }
        .vsl-caption {
          font-family: var(--font-sans, sans-serif);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: #fff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        .vsl-duration {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  )
}
