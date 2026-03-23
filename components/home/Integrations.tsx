'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

interface LogoItem {
  name: string
  abbr: string
  color: string
}

const row1: LogoItem[] = [
  { name: 'Google', abbr: 'G', color: '#4285F4' },
  { name: 'Slack', abbr: 'S', color: '#4A154B' },
  { name: 'HubSpot', abbr: 'HS', color: '#FF7A59' },
  { name: 'Salesforce', abbr: 'SF', color: '#00A1E0' },
  { name: 'Notion', abbr: 'N', color: 'currentColor' },
  { name: 'Asana', abbr: 'As', color: '#F06A6A' },
  { name: 'Trello', abbr: 'Tr', color: '#0079BF' },
  { name: 'Airtable', abbr: 'At', color: '#18BFFF' },
  { name: 'Zapier', abbr: 'Z', color: '#FF4F00' },
  { name: 'Make', abbr: 'Mk', color: '#6D00CC' },
]

const row2: LogoItem[] = [
  { name: 'LinkedIn', abbr: 'in', color: '#0A66C2' },
  { name: 'Gmail', abbr: 'Gm', color: '#EA4335' },
  { name: 'Google Calendar', abbr: 'Cal', color: '#4285F4' },
  { name: 'Google Sheets', abbr: 'Sh', color: '#0F9D58' },
  { name: 'Google Drive', abbr: 'Dr', color: '#4285F4' },
  { name: 'Discord', abbr: 'Dc', color: '#5865F2' },
  { name: 'WhatsApp', abbr: 'WA', color: '#25D366' },
  { name: 'Stripe', abbr: 'St', color: '#635BFF' },
  { name: 'Zoom', abbr: 'Zm', color: '#2D8CFF' },
  { name: 'Microsoft Teams', abbr: 'T', color: '#6264A7' },
]

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div
      title={item.name}
      style={{
        width: 80,
        height: 80,
        minWidth: 80,
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: item.color,
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: item.abbr.length > 2 ? 14 : item.abbr.length === 2 ? 16 : 20,
        userSelect: 'none',
      }}
    >
      {item.abbr}
    </div>
  )
}

function ScrollRow({
  items,
  direction,
}: {
  items: LogoItem[]
  direction: 'left' | 'right'
}) {
  const animationName = direction === 'left' ? 'scroll-left' : 'scroll-right'
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className="integrations-scroll-track"
        style={{
          display: 'flex',
          gap: 16,
          width: 'max-content',
          animation: `${animationName} 40s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Integrations() {
  const { t } = useLang()

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .integrations-carousel:hover .integrations-scroll-track {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .integrations-carousel .integrations-scroll-track > div {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      <section id="integrations" style={{ padding: '120px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-16">
            <span className="section-label">
              {t('integrations.label')}
            </span>
            <h2
              className="section-title"
              style={{ maxWidth: 680, margin: '0 auto 20px' }}
            >
              {t('integrations.title')}{' '}
              <span className="accent">
                {t('integrations.titleAccent')}
              </span>
            </h2>
            <p
              className="font-sans"
              style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                maxWidth: 560,
                margin: '0 auto',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {t('integrations.sub')}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div
              className="integrations-carousel"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <ScrollRow items={row1} direction="left" />
              <ScrollRow items={row2} direction="right" />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
