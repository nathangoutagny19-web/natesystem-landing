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
 * Mockup file lives at `public/showcase/dashboard-immo.png`.
 * Caption stays generic (no client name) — it's a demo/prototype, not
 * a verifiable production client.
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
                borderRadius: 'inherit',
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
        }
      `}</style>
    </section>
  )
}
