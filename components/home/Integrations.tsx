'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { type ReactNode } from 'react'

interface LogoItem {
  name: string
  icon: ReactNode
}

/* ------------------------------------------------------------------ */
/*  Row 1 logos                                                       */
/* ------------------------------------------------------------------ */

const row1: LogoItem[] = [
  {
    name: 'Google',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.163 0a2.528 2.528 0 012.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.163 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 01-2.52-2.523 2.527 2.527 0 012.52-2.52h6.315A2.528 2.528 0 0124 15.163a2.528 2.528 0 01-2.522 2.523h-6.315z" fill="#E01E5A" />
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF7A59">
        <path d="M17.5 8.2V5.8a2 2 0 001.2-1.8 2 2 0 00-4 0c0 .8.5 1.5 1.2 1.8v2.4a5.5 5.5 0 00-3.1 1.6L5.6 4.9a2.2 2.2 0 00.1-.6 2.1 2.1 0 10-2.1 2.1c.4 0 .8-.1 1.1-.3l7 4.8a5.5 5.5 0 00-.2 1.4 5.5 5.5 0 00.3 1.8l-2.1 1.2a2.5 2.5 0 00-2.3-1.5 2.5 2.5 0 000 5 2.5 2.5 0 002.5-2.5v-.2l2-1.1a5.5 5.5 0 103.6-7z" />
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#00A1E0">
        <path d="M10 5.5a4.5 4.5 0 013.7 2 3.8 3.8 0 015.8 3.2 3.8 3.8 0 01-3.2 3.8 4.2 4.2 0 01-4.1 3.5c-1.3 0-2.5-.6-3.2-1.6a4 4 0 01-4.8-1.1A3.5 3.5 0 011.5 12 3.5 3.5 0 015 8.8 4.5 4.5 0 0110 5.5z" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M4.5 3.5h9.2l5.8 5v12a1 1 0 01-1 1H4.5a1 1 0 01-1-1v-16a1 1 0 011-1z" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" />
        <text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="'Georgia', serif" fill="currentColor">N</text>
      </svg>
    ),
  },
  {
    name: 'Asana',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#F06A6A">
        <circle cx="12" cy="6" r="3.5" />
        <circle cx="6" cy="16" r="3.5" />
        <circle cx="18" cy="16" r="3.5" />
      </svg>
    ),
  },
  {
    name: 'Trello',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#0079BF">
        <rect x="2" y="2" width="20" height="20" rx="3" fillOpacity="0.15" />
        <rect x="4.5" y="4.5" width="6" height="12" rx="1.5" />
        <rect x="13.5" y="4.5" width="6" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    name: 'Airtable',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M11.5 2.5L2 7l9.5 4.5L21 7z" fill="#FCB400" />
        <path d="M12.5 13l9-4.5V17l-9 4.5z" fill="#18BFFF" />
        <path d="M11 13l-9-4.5V17l9 4.5z" fill="#F82B60" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF4F00">
        <path d="M13 2l1.5 7.5L22 11l-7.5 1.5L13 20l-1.5-7.5L4 11l7.5-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#6D00CC" strokeWidth="2.2">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
]

/* ------------------------------------------------------------------ */
/*  Row 2 logos                                                       */
/* ------------------------------------------------------------------ */

const row2: LogoItem[] = [
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#0A66C2">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0z" />
      </svg>
    ),
  },
  {
    name: 'Gmail',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#EA4335" fillOpacity="0.15" />
        <path d="M2 6l10 7 10-7" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#EA4335" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Google Calendar',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <rect x="3" y="5" width="18" height="16" rx="2" fill="#4285F4" fillOpacity="0.15" stroke="#4285F4" strokeWidth="1.5" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="#4285F4" strokeWidth="1.5" />
        <line x1="8" y1="5" x2="8" y2="2" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="5" x2="16" y2="2" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
        <text x="12" y="18" textAnchor="middle" fontSize="7" fontWeight="700" fill="#4285F4">31</text>
      </svg>
    ),
  },
  {
    name: 'Google Sheets',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#0F9D58">
        <rect x="3" y="2" width="18" height="20" rx="2" fillOpacity="0.15" stroke="#0F9D58" strokeWidth="1.5" />
        <line x1="3" y1="8" x2="21" y2="8" stroke="#0F9D58" strokeWidth="1.2" />
        <line x1="3" y1="13" x2="21" y2="13" stroke="#0F9D58" strokeWidth="1.2" />
        <line x1="3" y1="18" x2="21" y2="18" stroke="#0F9D58" strokeWidth="1.2" />
        <line x1="10" y1="2" x2="10" y2="22" stroke="#0F9D58" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Google Drive',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M8 21l-6-10.5L8.5 2h7L9 12.5l5 8.5z" fill="#0F9D58" />
        <path d="M15.5 2L22 12.5 16 21H9l6-10.5z" fill="#FBBC05" />
        <path d="M2 12.5L8.5 2h7L9 12.5 2.5 21H8z" fill="#4285F4" fillOpacity="0.8" />
        <path d="M8 21h8l6-8.5H8z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#5865F2">
        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.32-.39.74-.53 1.07a16.09 16.09 0 00-4.8 0c-.14-.34-.36-.75-.54-1.07A.09.09 0 009 4c-1.5.26-2.93.71-4.27 1.33a.07.07 0 00-.03.03C.89 10.57-.07 15.67.44 20.7a.08.08 0 00.03.06 19.9 19.9 0 005.99 3.03.09.09 0 00.1-.03c.46-.63.87-1.3 1.22-2a.08.08 0 00-.04-.11 13.1 13.1 0 01-1.87-.9.08.08 0 01-.01-.14c.13-.1.25-.19.37-.29a.08.08 0 01.09-.01c3.93 1.8 8.18 1.8 12.07 0a.08.08 0 01.09 0c.12.1.25.2.37.3a.08.08 0 01-.01.13c-.6.35-1.22.65-1.87.9a.08.08 0 00-.05.11c.36.7.77 1.37 1.23 2a.09.09 0 00.1.03 19.83 19.83 0 006-3.03.08.08 0 00.03-.05c.6-6.06-.96-11.12-4.15-15.38a.07.07 0 00-.03-.03zM8.02 17.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#25D366">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35zM12.05 21.8a9.77 9.77 0 01-4.98-1.36L2 22l1.59-4.93A9.73 9.73 0 012.2 12c0-5.42 4.4-9.8 9.84-9.8 5.43 0 9.84 4.38 9.84 9.8 0 5.42-4.41 9.8-9.84 9.8zM12.05 0C5.44 0 .11 5.33.11 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65A11.87 11.87 0 0012.05 24C18.66 24 24 18.67 24 12.07S18.66 0 12.05 0z" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#635BFF">
        <path d="M13.97 8.28c-1.08-.42-1.73-.7-1.73-1.15 0-.38.33-.63.93-.63.98 0 2.2.42 3.18.93V4.36c-1.07-.42-2.13-.6-3.18-.6C10.65 3.76 9 5.1 9 7.26c0 3.24 4.47 2.72 4.47 4.11 0 .45-.39.6-.94.6-1.03 0-2.5-.52-3.5-1.14v3.14c1.13.5 2.27.74 3.5.74 2.65 0 4.47-1.31 4.47-3.51 0-3.5-4.5-2.88-4.5-4.2z" />
        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="#635BFF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Zoom',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#2D8CFF">
        <rect x="1" y="5" width="15" height="14" rx="3" fillOpacity="0.15" stroke="#2D8CFF" strokeWidth="1.5" />
        <path d="M16 10l5.5-3.5v11L16 14z" fill="#2D8CFF" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Teams',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="#6264A7">
        <rect x="2" y="4" width="14" height="14" rx="2" fillOpacity="0.9" />
        <text x="9" y="14.5" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="sans-serif">T</text>
        <circle cx="19" cy="7.5" r="3" fillOpacity="0.7" />
        <rect x="16" y="11" width="6.5" height="8" rx="1.5" fillOpacity="0.5" />
      </svg>
    ),
  },
]

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */

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
        userSelect: 'none',
      }}
    >
      {item.icon}
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
          }
          .integrations-carousel .integrations-scroll-track > div svg {
            width: 24px !important;
            height: 24px !important;
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
