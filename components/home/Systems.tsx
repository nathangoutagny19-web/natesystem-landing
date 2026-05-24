'use client'

import {
  Zap,
  FileSearch,
  Send,
  RefreshCcw,
  BarChart3,
  Utensils,
  GraduationCap,
  Users,
  Package,
  Clock,
  Star,
  type LucideIcon,
} from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Card = {
  icon: LucideIcon
  title: string
  desc: string
  metric: string
  tag: 'ai' | 'software'
  sector?: string
}

export default function Systems() {
  const { t } = useLang()

  const tagAI = t('systems.tagAI')
  const tagSoft = t('systems.tagSoft')

  // Alternate AI ↔ Software so the marquee never shows two same-tag cards in a row.
  const cards: Card[] = [
    { icon: Zap, title: t('systems.s1.title'), desc: t('systems.s1.desc'), metric: t('systems.s1.metric'), tag: 'ai' },
    { icon: Utensils, title: t('systems.sw1.title'), desc: t('systems.sw1.desc'), metric: t('systems.sw1.metric'), tag: 'software', sector: t('systems.sw1.sector') },
    { icon: FileSearch, title: t('systems.s2.title'), desc: t('systems.s2.desc'), metric: t('systems.s2.metric'), tag: 'ai' },
    { icon: GraduationCap, title: t('systems.sw2.title'), desc: t('systems.sw2.desc'), metric: t('systems.sw2.metric'), tag: 'software', sector: t('systems.sw2.sector') },
    { icon: Send, title: t('systems.s3.title'), desc: t('systems.s3.desc'), metric: t('systems.s3.metric'), tag: 'ai' },
    { icon: Users, title: t('systems.sw3.title'), desc: t('systems.sw3.desc'), metric: t('systems.sw3.metric'), tag: 'software', sector: t('systems.sw3.sector') },
    { icon: RefreshCcw, title: t('systems.s4.title'), desc: t('systems.s4.desc'), metric: t('systems.s4.metric'), tag: 'ai' },
    { icon: Package, title: t('systems.sw4.title'), desc: t('systems.sw4.desc'), metric: t('systems.sw4.metric'), tag: 'software', sector: t('systems.sw4.sector') },
    { icon: BarChart3, title: t('systems.s5.title'), desc: t('systems.s5.desc'), metric: t('systems.s5.metric'), tag: 'ai' },
    { icon: Clock, title: t('systems.sw5.title'), desc: t('systems.sw5.desc'), metric: t('systems.sw5.metric'), tag: 'software', sector: t('systems.sw5.sector') },
    { icon: Star, title: t('systems.sw6.title'), desc: t('systems.sw6.desc'), metric: t('systems.sw6.metric'), tag: 'software', sector: t('systems.sw6.sector') },
  ]

  // Duplicate the list for seamless infinite scroll
  const doubled = [...cards, ...cards]

  return (
    <section id="systemes" style={{ padding: '120px 0' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px', padding: '0 24px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('systems.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '680px', margin: '0 auto 20px' }}>
            {t('systems.title')}{' '}
            <span className="accent">{t('systems.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('systems.sub')}
          </p>
        </FadeUp>
      </div>

      {/* Marquee row 1 */}
      <FadeUp>
        <div className="systems-marquee-wrap" aria-hidden="false">
          <div className="systems-marquee">
            {doubled.map((card, i) => (
              <SystemCard key={`r1-${i}`} card={card} tagLabel={card.tag === 'ai' ? tagAI : tagSoft} />
            ))}
          </div>
        </div>
      </FadeUp>

      <style jsx>{`
        .systems-marquee-wrap {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          padding: 8px 0;
        }
        .systems-marquee {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: systemsScroll 75s linear infinite;
          will-change: transform;
        }
        .systems-marquee :global(.systems-card) {
          flex: 0 0 320px;
        }
        .systems-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes systemsScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (max-width: 540px) {
          .systems-marquee {
            gap: 12px;
            animation-duration: 55s;
          }
          .systems-marquee :global(.systems-card) {
            flex: 0 0 270px;
            padding: 20px 18px;
            min-height: 250px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .systems-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

function SystemCard({ card, tagLabel }: { card: Card; tagLabel: string }) {
  const Icon = card.icon
  const isAI = card.tag === 'ai'

  return (
    <article
      className="systems-card"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '24px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minHeight: 280,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: 1.4,
            color: isAI ? 'var(--accent)' : 'var(--text-secondary)',
            background: isAI ? 'var(--accent-subtle)' : 'var(--bg-elevated)',
            padding: '4px 8px',
            borderRadius: 4,
            fontWeight: 600,
            textTransform: 'uppercase',
            border: isAI ? '1px solid var(--accent-glow)' : '1px solid var(--border)',
          }}
        >
          {tagLabel}
        </span>
        <Icon size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
      </div>

      <div>
        <h4
          className="font-serif italic"
          style={{
            fontSize: 19,
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          {card.title}
        </h4>
        {card.sector && (
          <p
            className="font-mono"
            style={{
              fontSize: 9.5,
              letterSpacing: 1.4,
              color: 'var(--text-muted)',
              fontWeight: 500,
              textTransform: 'uppercase',
              margin: '6px 0 0',
            }}
          >
            {card.sector}
          </p>
        )}
      </div>

      <p
        className="font-sans"
        style={{
          fontSize: 12.5,
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
          fontWeight: 300,
          flex: 1,
          margin: 0,
        }}
      >
        {card.desc}
      </p>

      <div
        style={{
          borderLeft: '2px solid var(--accent)',
          paddingLeft: 10,
          marginTop: 4,
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: 10.5,
            fontWeight: 500,
            color: 'var(--accent)',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {card.metric}
        </p>
      </div>
    </article>
  )
}
