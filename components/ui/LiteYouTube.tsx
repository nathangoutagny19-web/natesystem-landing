'use client'

import { useState } from 'react'

/**
 * Privacy-friendly YouTube embed. Shows the thumbnail (no third-party cookies,
 * so Iubenda autoblocking never empties it); the real iframe only loads on click.
 * Also faster than a raw iframe. Reused across home / sector pages / resources.
 */
export default function LiteYouTube({
  id,
  title,
  vertical = false,
}: {
  id: string
  title: string
  /** Vertical (9:16) Shorts use the oar2 thumbnail; default is the 16:9 maxres. */
  vertical?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const thumb = vertical
    ? `https://i.ytimg.com/vi/${id}/oar2.jpg`
    : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: 12, border: 0 }}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={title}
      className="absolute inset-0 w-full h-full group"
      style={{ borderRadius: 12, border: 0, padding: 0, cursor: 'pointer', background: '#000' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease', opacity: 0.9 }}
        onError={(e) => {
          ;(e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
        }}
      />
      <span
        className="absolute left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          width: 68,
          height: 48,
          borderRadius: 12,
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  )
}
