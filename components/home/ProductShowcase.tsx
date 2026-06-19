'use client'

import Image from 'next/image'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * ProductShowcase — single, large product mockup right after the hero.
 *
 * One mockup beats a gallery: it creates a focal point that proves
 * "real software was shipped" within 3 seconds of landing. Pattern used
 * by Linear, Vercel, Stripe, Notion.
 *
 * Mockup file lives at `public/showcase/dashboard-immo.jpeg`.
 * Caption stays generic — it's a demo/prototype, not a verifiable
 * production client.
 *
 * NOTE: a previous iteration embedded the HTML prototype in an iframe
 * with a mobile fallback. Reverted to static image until we ship a
 * Loom video walkthrough that will replace the static asset.
 */
export default function ProductShowcase() {
  const { t } = useLang()

  return (
    <section
      aria-label={t('showcase.label')}
      style={{ padding: '24px 24px 80px', overflow: 'hidden' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1140px' }}>
        <FadeUp>
          <div className="showcase-frame">
            <div className="showcase-shadow" aria-hidden="true" />

            {/* macOS-style chrome — signals "this is a real product" */}
            <div className="showcase-chrome">
              <span className="showcase-dot" style={{ background: '#FF5F57' }} />
              <span className="showcase-dot" style={{ background: '#FEBC2E' }} />
              <span className="showcase-dot" style={{ background: '#28C840' }} />
              <span className="showcase-chrome-url">
                natesystem.com/clients/maison-voltaire
              </span>
            </div>

            <Image
              src="/showcase/dashboard-immo.jpeg"
              alt={t('showcase.altText')}
              width={1842}
              height={934}
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
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
            {t('showcase.caption')}
          </p>
        </FadeUp>
      </div>

      <style jsx>{`
        .showcase-frame {
          position: relative;
          border-radius: 12px;
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
