'use client'

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Self-hosted VSL, plays INLINE on the landing (no modal, no popup).
 * Pro alternative to a YouTube embed: no third-party logo, no suggested
 * videos, our branding only.
 *
 * Perf: the <video> is only mounted once the poster is clicked, so the file
 * is NEVER fetched on page load, the hero stays as light as before. Until
 * then it's just a poster image + a play button, in the exact same frame.
 *
 * Sous-titres : les deux vidéos du site sont parlées en français, y compris
 * servies sous /en. Sans piste anglaise, un visiteur anglophone regarde une
 * vidéo qu'il ne comprend pas. La piste anglaise est donc affichée d'office
 * sous /en, pas seulement proposée dans le menu : `default` ne suffit pas,
 * les navigateurs le subordonnent à une préférence d'accessibilité, d'où le
 * passage en `showing` à la main. En français, les deux pistes restent
 * disponibles mais aucune n'est imposée.
 */
export default function VslPlayer({
  src,
  poster,
  label = 'Voir la démo',
  duration,
  title = 'Démo NateSystem',
  subtitles,
}: {
  /** Path to the self-hosted file, e.g. "/vsl.mp4" (put it in /public). */
  src: string
  /** Optional poster image, e.g. "/vsl-poster.jpg". Falls back to a dark card. */
  poster?: string
  label?: string
  /** Small caption, e.g. "5 min". */
  duration?: string
  title?: string
  /** Base des pistes, sans langue ni extension : 'vsl' → /subtitles/vsl.en.vtt */
  subtitles?: string
}) {
  const { lang } = useLang()
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!playing || !subtitles) return
    const v = videoRef.current
    if (!v) return

    /* Le navigateur refait sa propre sélection quand chaque piste finit de
       charger : sans ré-application, Chrome activait aussi la piste française
       (le <html lang> servi est `fr`) et les deux se superposaient à l'écran.
       On réaffirme donc l'état voulu, y compris après le chargement. */
    const apply = () => {
      for (const track of Array.from(v.textTracks)) {
        track.mode = lang === 'en' && track.language === 'en' ? 'showing' : 'disabled'
      }
    }
    apply()
    const timers = [50, 250, 800].map((ms) => window.setTimeout(apply, ms))
    v.addEventListener('loadeddata', apply)
    v.textTracks.addEventListener?.('addtrack', apply)

    return () => {
      timers.forEach(window.clearTimeout)
      v.removeEventListener('loadeddata', apply)
      v.textTracks.removeEventListener?.('addtrack', apply)
    }
  }, [playing, subtitles, lang])

  return (
    <div className="vsl-frame">
      {playing ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="vsl-media"
        >
          {subtitles && (
            <>
              <track kind="subtitles" srcLang="fr" label="Français" src={`/subtitles/${subtitles}.fr.vtt`} />
              <track
                kind="subtitles"
                srcLang="en"
                label="English"
                src={`/subtitles/${subtitles}.en.vtt`}
                default={lang === 'en'}
              />
            </>
          )}
        </video>
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
