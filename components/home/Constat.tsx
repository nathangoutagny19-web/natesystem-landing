'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Constat() {
  const { t } = useLang()

  return (
    <section style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '780px' }}>
        <FadeUp className="text-center">
          <span className="section-label">{t('constat.label')}</span>
          <h2 className="section-title" style={{ margin: '0 auto 28px', maxWidth: '700px' }}>
            {t('constat.title')}{' '}
            <span className="accent">{t('constat.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            {t('constat.body')}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
