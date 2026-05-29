'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * ProductShowcase — interactive prototype embedded right after the hero.
 *
 * Desktop : iframe of the actual HTML prototype (visitor can click/scroll
 * through real pages). Loaded lazily via IntersectionObserver so it never
 * counts against LCP — the screenshot is shown until the visitor scrolls
 * into view.
 *
 * Mobile (<768px) : iframe is a dead-zone (scroll gets trapped, no zoom).
 * We fall back to the static screenshot + a button that opens the
 * prototype in a new tab full-screen.
 *
 * Source HTML lives at public/showcase/dashboard-immo.html (single file,
 * Tailwind CDN + Google Fonts inline, no local assets to wire).
 */
export default function ProductShowcase() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (isMobile) return // on mobile we never load the iframe
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadIframe(true)
          obs.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      aria-label={t('showcase.label')}
      style={{ padding: '24px 24px 80px', overflow: 'hidden' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1140px' }}>
        <FadeUp>
          <div className="showcase-frame">
            <div className="showcase-shadow" aria-hidden="true" />

            {/* Topbar fenêtre style macOS — donne un cadre "vraie app" */}
            <div className="showcase-chrome">
              <span className="showcase-dot" style={{ background: '#FF5F57' }} />
              <span className="showcase-dot" style={{ background: '#FEBC2E' }} />
              <span className="showcase-dot" style={{ background: '#28C840' }} />
              <span className="showcase-chrome-url">
                natesystem.com/clients/maison-voltaire
              </span>
            </div>

            {/* Desktop : iframe lazy. Mobile : screenshot + CTA */}
            {!isMobile && shouldLoadIframe ? (
              <iframe
                src="/showcase/dashboard-immo.html"
                title={t('showcase.altText')}
                className="showcase-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="showcase-static">
                <Image
                  src="/showcase/dashboard-immo.jpeg"
                  alt={t('showcase.altText')}
                  width={1842}
                  height={934}
                  priority={isMobile}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                {isMobile && (
                  <a
                    href="/showcase/dashboard-immo.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-mobile-cta"
                  >
                    {t('showcase.openFullscreen')}
                  </a>
                )}
              </div>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className="font-mono"
            style={{
              marginTop: 28,
              textAlign: 'center',
              fontSize: 11,
              letterSpacing: 1.8,
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontWeight: 500,
            }}
          >
            {t('showcase.label')}
          </p>
          <p
            className="font-sans"
            style={{
              marginTop: 8,
              textAlign: 'center',
              fontSize: 14,
              color: 'var(--text-secondary)',
              fontWeight: 300,
              lineHeight: 1.55,
              maxWidth: 620,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {t('showcase.caption')}{' '}
            {!isMobile && (
              <a
                href="/showcase/dashboard-immo.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'underline',
                  textDecorationThickness: 1,
                  textUnderlineOffset: 3,
                  fontWeight: 500,
                }}
              >
                {t('showcase.openFullscreen')} ↗
              </a>
            )}
          </p>
        </FadeUp>
      </div>

      <style jsx>{`
        .showcase-frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-card);
          transform: perspective(1800px) rotateX(0.5deg) rotateY(-0.5deg);
          transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .showcase-frame:hover {
          transform: perspective(1800px) rotateX(0deg) rotateY(0deg) translateY(-4px);
        }
        .showcase-shadow {
          position: absolute;
          inset: -8% 4% -16% 4%;
          background: radial-gradient(
            ellipse at center bottom,
            var(--accent-glow, rgba(230, 57, 70, 0.18)) 0%,
            transparent 60%
          );
          filter: blur(40px);
          z-index: -1;
          pointer-events: none;
          opacity: 0.7;
        }

        /* macOS-style topbar */
        .showcase-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(26, 26, 29, 0.04);
          border-bottom: 1px solid var(--border);
        }
        :global(html.light) .showcase-chrome {
          background: #f0f0ea;
        }
        .showcase-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .showcase-chrome-url {
          margin-left: 16px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* The iframe itself — fills its container, fixed aspect ratio */
        .showcase-iframe {
          width: 100%;
          height: clamp(560px, 62vw, 760px);
          border: 0;
          display: block;
          background: var(--bg-card);
        }

        .showcase-static {
          position: relative;
        }
        .showcase-mobile-cta {
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%);
          background: var(--accent);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .showcase-frame {
            transform: none;
            transition: none;
          }
          .showcase-frame:hover {
            transform: none;
          }
        }
        @media (max-width: 540px) {
          .showcase-frame {
            transform: none;
            border-radius: 10px;
          }
          .showcase-chrome {
            padding: 8px 12px;
          }
          .showcase-chrome-url {
            font-size: 10px;
            margin-left: 10px;
          }
        }
      `}</style>
    </section>
  )
}
