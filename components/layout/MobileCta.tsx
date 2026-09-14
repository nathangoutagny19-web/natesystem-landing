'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'

export default function MobileCta() {
  const { lang, t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`mobile-cta ${visible ? 'visible' : ''}`}>
      <Link
        href={localizedHref(CAL_LINK, lang)}
        className="btn-primary justify-center"
        style={{ width: '100%', padding: '14px' }}
      >
        <span className="btn-primary-dot" />
        {t('nav.cta')}
      </Link>
    </div>
  )
}
