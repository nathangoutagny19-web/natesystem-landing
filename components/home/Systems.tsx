'use client'

import {
  Zap,
  FileSearch,
  Send,
  RefreshCcw,
  BarChart3,
  LayoutDashboard,
  UserSquare2,
  Users,
  type LucideIcon,
} from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Card = {
  icon: LucideIcon
  num: string
  title: string
  desc: string
  metric: string
}

export default function Systems() {
  const { t } = useLang()

  const aiSystems: Card[] = [
    { icon: Zap, num: '01', title: t('systems.s1.title'), desc: t('systems.s1.desc'), metric: t('systems.s1.metric') },
    { icon: FileSearch, num: '02', title: t('systems.s2.title'), desc: t('systems.s2.desc'), metric: t('systems.s2.metric') },
    { icon: Send, num: '03', title: t('systems.s3.title'), desc: t('systems.s3.desc'), metric: t('systems.s3.metric') },
    { icon: RefreshCcw, num: '04', title: t('systems.s4.title'), desc: t('systems.s4.desc'), metric: t('systems.s4.metric') },
    { icon: BarChart3, num: '05', title: t('systems.s5.title'), desc: t('systems.s5.desc'), metric: t('systems.s5.metric') },
  ]

  const softwareCases: Card[] = [
    { icon: LayoutDashboard, num: '06', title: t('systems.sw1.title'), desc: t('systems.sw1.desc'), metric: t('systems.sw1.metric') },
    { icon: UserSquare2, num: '07', title: t('systems.sw2.title'), desc: t('systems.sw2.desc'), metric: t('systems.sw2.metric') },
    { icon: Users, num: '08', title: t('systems.sw3.title'), desc: t('systems.sw3.desc'), metric: t('systems.sw3.metric') },
  ]

  return (
    <section id="systemes" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
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

        {/* Group 1 — AI systems */}
        <FadeUp delay={0.05}>
          <h3 className="systems-group-title">
            <span>{t('systems.groupAI')}</span>
          </h3>
        </FadeUp>

        <div className="systems-grid" style={{ marginBottom: 64 }}>
          {aiSystems.map((s, i) => (
            <SystemCard key={s.num} card={s} delay={i * 0.06} prefix={t('systems.label')} />
          ))}
        </div>

        {/* Group 2 — Custom software */}
        <FadeUp>
          <h3 className="systems-group-title">
            <span>{t('systems.groupSoft')}</span>
          </h3>
        </FadeUp>

        <div className="systems-grid">
          {softwareCases.map((s, i) => (
            <SystemCard key={s.num} card={s} delay={i * 0.06} prefix={t('systems.label')} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .systems-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .systems-group-title {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
          margin: 0 0 28px;
        }
        .systems-group-title::before,
        .systems-group-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        @media (max-width: 880px) {
          .systems-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 540px) {
          .systems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

function SystemCard({ card, delay, prefix }: { card: Card; delay: number; prefix: string }) {
  const Icon = card.icon
  return (
    <FadeUp delay={delay}>
      <article
        className="systems-card"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '32px 28px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          transition: 'border-color 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="flex items-center justify-between">
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: 'var(--text-muted)',
              fontWeight: 400,
            }}
          >
            CAS {card.num}
          </span>
          <Icon size={20} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
        </div>

        <h4
          className="font-serif italic"
          style={{
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          {card.title}
        </h4>

        <p
          className="font-sans"
          style={{
            fontSize: 13.5,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
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
            paddingLeft: 12,
            marginTop: 8,
          }}
        >
          <p
            className="font-mono"
            style={{
              fontSize: 11.5,
              fontWeight: 500,
              color: 'var(--accent)',
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            {card.metric}
          </p>
        </div>
      </article>
      <style jsx>{`
        .systems-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </FadeUp>
  )
}
