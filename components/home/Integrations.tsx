'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

interface LogoItem {
  name: string
  slug: string // simple-icons slug for CDN
  color: string // brand color for dark mode tinting
}

const row1: LogoItem[] = [
  { name: 'Google Forms', slug: 'googleforms', color: '#7248B9' },
  { name: 'Google Sheets', slug: 'googlesheets', color: '#0F9D58' },
  { name: 'Discord', slug: 'discord', color: '#5865F2' },
  { name: 'Bing', slug: 'microsoftbing', color: '#258FFA' },
  { name: 'GitHub', slug: 'github', color: '#181717' },
  { name: 'Zoom', slug: 'zoom', color: '#0B5CFF' },
  { name: 'Notion', slug: 'notion', color: '#000000' },
  { name: 'Google', slug: 'google', color: '#4285F4' },
  { name: 'Gmail', slug: 'gmail', color: '#EA4335' },
  { name: 'Google Calendar', slug: 'googlecalendar', color: '#4285F4' },
  { name: 'Google Drive', slug: 'googledrive', color: '#4285F4' },
  { name: 'App Store', slug: 'appstore', color: '#0D96F6' },
  { name: 'Figma', slug: 'figma', color: '#F24E1E' },
  { name: 'Slack', slug: 'slack', color: '#4A154B' },
]

const row2: LogoItem[] = [
  { name: 'Salesforce', slug: 'salesforce', color: '#00A1E0' },
  { name: 'Stripe', slug: 'stripe', color: '#635BFF' },
  { name: 'WhatsApp', slug: 'whatsapp', color: '#25D366' },
  { name: 'Snowflake', slug: 'snowflake', color: '#29B5E8' },
  { name: 'HubSpot', slug: 'hubspot', color: '#FF7A59' },
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'Anthropic', slug: 'anthropic', color: '#191919' },
  { name: 'Linear', slug: 'linear', color: '#5E6AD2' },
  { name: 'Amazon S3', slug: 'amazons3', color: '#569A31' },
  { name: 'Skype', slug: 'skype', color: '#00AFF0' },
  { name: 'Zendesk', slug: 'zendesk', color: '#03363D' },
  { name: 'OpenAI', slug: 'openai', color: '#412991' },
]

const row3: LogoItem[] = [
  { name: 'Microsoft Azure', slug: 'microsoftazure', color: '#0078D4' },
  { name: 'Microsoft Outlook', slug: 'microsoftoutlook', color: '#0078D4' },
  { name: 'Mailchimp', slug: 'mailchimp', color: '#FFE01B' },
  { name: 'SharePoint', slug: 'microsoftsharepoint', color: '#0078D4' },
  { name: 'Figma', slug: 'figma', color: '#F24E1E' },
  { name: 'Asana', slug: 'asana', color: '#F06A6A' },
  { name: 'Google Drive', slug: 'googledrive', color: '#4285F4' },
  { name: 'Microsoft Teams', slug: 'microsoftteams', color: '#6264A7' },
  { name: 'Meta', slug: 'meta', color: '#0081FB' },
  { name: 'Confluence', slug: 'confluence', color: '#172B4D' },
  { name: 'Jira', slug: 'jira', color: '#0052CC' },
  { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2' },
]

function LogoCard({ item }: { item: LogoItem }) {
  return (
    <div
      title={item.name}
      className="integration-logo-card"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace('#', '')}`}
        alt={item.name}
        width={28}
        height={28}
        loading="lazy"
        className="integration-logo-img"
        onError={(e) => {
          // Hide broken images
          (e.target as HTMLImageElement).style.display = 'none'
          const parent = (e.target as HTMLImageElement).parentElement
          if (parent) parent.style.display = 'none'
        }}
      />
    </div>
  )
}

function ScrollRow({ items, direction, speed = 35 }: { items: LogoItem[]; direction: 'left' | 'right'; speed?: number }) {
  const animName = direction === 'left' ? 'scroll-left' : 'scroll-right'
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="integrations-scroll-track"
        style={{
          display: 'flex',
          gap: 14,
          width: 'max-content',
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={`${item.slug}-${i}`} item={item} />
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
        .integration-logo-card {
          width: clamp(56px, 14vw, 72px);
          height: clamp(56px, 14vw, 72px);
          min-width: clamp(56px, 14vw, 72px);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .integration-logo-card:hover {
          border-color: var(--border-hover);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        html.light .integration-logo-card {
          background: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        html.light .integration-logo-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        /* Dark mode: make all logos white */
        html:not(.light) .integration-logo-img {
          filter: brightness(0) invert(1);
          opacity: 0.7 !important;
        }
        /* Light mode: show colored logos as-is */
        html.light .integration-logo-img {
          opacity: 0.9;
        }
        @media (max-width: 640px) {
          .integration-logo-card {
            border-radius: 12px !important;
          }
          .integration-logo-card img {
            width: 22px !important;
            height: 22px !important;
          }
        }
      `}</style>

      <section id="integrations" style={{ padding: '120px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-16">
            <span className="section-label">{t('integrations.label')}</span>
            <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto 20px' }}>
              {t('integrations.title')}{' '}
              <span className="accent">{t('integrations.titleAccent')}</span>
            </h2>
            <p
              className="font-sans"
              style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                maxWidth: 520,
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
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <ScrollRow items={row1} direction="left" speed={40} />
              <ScrollRow items={row2} direction="right" speed={45} />
              <ScrollRow items={row3} direction="left" speed={38} />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
