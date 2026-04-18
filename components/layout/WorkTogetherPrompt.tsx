'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

const DELAY_MS = 30_000
const SNOOZE_KEY = 'ns_work_prompt_snoozed_until'
const SNOOZE_DAYS = 7

export default function WorkTogetherPrompt() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const snoozedUntil = Number(localStorage.getItem(SNOOZE_KEY) || 0)
    if (snoozedUntil > Date.now()) return

    const timer = window.setTimeout(() => setVisible(true), DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      const until = Date.now() + SNOOZE_DAYS * 24 * 60 * 60 * 1000
      localStorage.setItem(SNOOZE_KEY, String(until))
    } catch {
      // localStorage can throw in private mode — safe to ignore
    }
  }

  const copy = lang === 'en'
    ? {
        label: 'Ready when you are',
        title: 'Let\'s work together.',
        sub: 'Tell us what you\'re building — we\'ll tell you how to run it.',
        cta: 'Open the form',
        close: 'Close',
      }
    : {
        label: 'Quand vous voulez',
        title: 'Travaillons ensemble.',
        sub: 'Racontez-nous ce que vous construisez — on vous dira comment le faire tourner.',
        cta: 'Ouvrir le formulaire',
        close: 'Fermer',
      }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label={copy.title}
          style={{
            position: 'fixed',
            right: 'clamp(12px, 3vw, 28px)',
            bottom: 'clamp(12px, 3vw, 28px)',
            zIndex: 70,
            maxWidth: 'calc(100vw - 24px)',
            width: 380,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '22px 22px 20px',
            boxShadow: '0 18px 48px rgba(0,0,0,0.22)',
          }}
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label={copy.close}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 30,
              height: 30,
              borderRadius: 999,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              fontSize: 14,
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-muted)'
            }}
          >
            ×
          </button>

          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 10,
            }}
          >
            {copy.label}
          </p>

          <h3
            className="font-serif italic"
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.2,
              marginBottom: 8,
              paddingRight: 24,
            }}
          >
            {copy.title}
          </h3>

          <p
            className="font-sans"
            style={{
              fontSize: 13.5,
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              marginBottom: 18,
            }}
          >
            {copy.sub}
          </p>

          <Link
            href={CAL_LINK}
            onClick={dismiss}
            className="btn-primary inline-flex"
            style={{ fontSize: 13, padding: '12px 24px', width: '100%', justifyContent: 'center' }}
          >
            <span className="btn-primary-dot" />
            {copy.cta} →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
