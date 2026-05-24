'use client'

import { Shield, FileCheck2, Zap, Lock } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function CredibilityBand() {
  const { t } = useLang()

  const engagements = [
    { icon: Shield, text: t('cred.engagement1') },
    { icon: FileCheck2, text: t('cred.engagement2') },
    { icon: Zap, text: t('cred.engagement3') },
    { icon: Lock, text: t('cred.engagement4') },
  ]

  return (
    <section style={{ padding: '40px 24px' }}>
      <FadeUp>
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <div
            className="cred-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 12,
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 20,
              background: 'var(--bg-card)',
            }}
          >
            {engagements.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
                style={{ padding: '6px 8px' }}
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}
                />
                <p
                  className="font-sans"
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.45,
                    color: 'var(--text-secondary)',
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
      <style jsx>{`
        @media (max-width: 880px) {
          .cred-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          .cred-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
