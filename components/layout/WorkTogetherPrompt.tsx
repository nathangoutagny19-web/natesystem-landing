'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

const APPEAR_DELAY_MS = 12_000
const TEASER_TYPEWRITER_MS = 35
const AUTO_EXPAND_MS = 5_000
const AUTO_COLLAPSE_MS = 20_000
const SNOOZE_KEY = 'ns_work_prompt_snoozed_until'
const SNOOZE_DAYS = 7

type Mode = 'hidden' | 'pastille' | 'teaser' | 'expanded'

function useTypewriter(target: string, enabled: boolean) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!enabled) {
      setText('')
      return
    }
    let i = 0
    setText('')
    const id = window.setInterval(() => {
      i += 1
      setText(target.slice(0, i))
      if (i >= target.length) window.clearInterval(id)
    }, TEASER_TYPEWRITER_MS)
    return () => window.clearInterval(id)
  }, [target, enabled])
  return text
}

export default function WorkTogetherPrompt() {
  const { t, lang } = useLang()
  const [mode, setMode] = useState<Mode>('hidden')
  const autoExpandTimer = useRef<number | null>(null)
  const autoCollapseTimer = useRef<number | null>(null)

  // Initial appearance after delay, unless snoozed.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const snoozedUntil = Number(window.localStorage.getItem(SNOOZE_KEY) || 0)
    if (snoozedUntil > Date.now()) return
    const id = window.setTimeout(() => setMode('teaser'), APPEAR_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])

  // Teaser → auto-expand after a few seconds if user doesn't click.
  useEffect(() => {
    if (mode !== 'teaser') return
    autoExpandTimer.current = window.setTimeout(() => setMode('expanded'), AUTO_EXPAND_MS)
    return () => {
      if (autoExpandTimer.current) window.clearTimeout(autoExpandTimer.current)
    }
  }, [mode])

  // Expanded → auto-collapse to pastille if ignored.
  useEffect(() => {
    if (mode !== 'expanded') return
    autoCollapseTimer.current = window.setTimeout(() => setMode('pastille'), AUTO_COLLAPSE_MS)
    return () => {
      if (autoCollapseTimer.current) window.clearTimeout(autoCollapseTimer.current)
    }
  }, [mode])

  const snooze = () => {
    try {
      const until = Date.now() + SNOOZE_DAYS * 24 * 60 * 60 * 1000
      window.localStorage.setItem(SNOOZE_KEY, String(until))
    } catch {
      // private mode — safe to ignore
    }
    setMode('hidden')
  }

  const teaserText = t('nate.teaser')
  const typed = useTypewriter(teaserText, mode === 'teaser')

  if (mode === 'hidden') return null

  return (
    <>
      {/* CSS animations */}
      <style>{`
        @keyframes nateStatusPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(230,57,70,0.55); }
          70%      { box-shadow: 0 0 0 8px rgba(230,57,70,0); }
        }
        @keyframes nateRingRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes nateDotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%           { transform: translateY(-4px); opacity: 1; }
        }
        .nate-status-dot {
          animation: nateStatusPulse 2s ease-in-out infinite;
        }
        .nate-avatar-ring {
          position: absolute; inset: -3px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, var(--accent), rgba(230,57,70,0.1), var(--accent));
          animation: nateRingRotate 6s linear infinite;
          z-index: 0;
        }
        .nate-thinking-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent);
          animation: nateDotBounce 1.2s ease-in-out infinite;
        }
        .nate-thinking-dot:nth-child(2) { animation-delay: 0.15s; }
        .nate-thinking-dot:nth-child(3) { animation-delay: 0.30s; }
      `}</style>

      <div
        style={{
          position: 'fixed',
          right: 'clamp(24px, 5vw, 64px)',
          bottom: 'clamp(24px, 5vh, 72px)',
          zIndex: 70,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 12,
          pointerEvents: 'none',
        }}
      >
        {/* Teaser bubble (only in teaser mode) */}
        <AnimatePresence>
          {mode === 'teaser' && (
            <motion.button
              type="button"
              onClick={() => setMode('expanded')}
              aria-label={teaserText}
              initial={{ opacity: 0, x: 12, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                pointerEvents: 'auto',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                maxWidth: 280,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
                position: 'relative',
              }}
            >
              {/* Thinking dots (before text fully typed) */}
              {typed.length < teaserText.length && (
                <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center', marginRight: 2 }}>
                  <span className="nate-thinking-dot" />
                  <span className="nate-thinking-dot" />
                  <span className="nate-thinking-dot" />
                </span>
              )}
              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.4,
                }}
              >
                {typed}
                {typed.length < teaserText.length && (
                  <span style={{ opacity: 0.5 }}>|</span>
                )}
              </span>
              {/* Small arrow pointing to pastille */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: -6,
                  bottom: 16,
                  width: 12,
                  height: 12,
                  background: 'var(--bg-card)',
                  borderRight: '1px solid var(--border)',
                  borderTop: '1px solid var(--border)',
                  transform: 'rotate(45deg)',
                }}
              />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expanded card (only in expanded mode) */}
        <AnimatePresence>
          {mode === 'expanded' && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label={t('nate.name')}
              onMouseEnter={() => {
                // pause auto-collapse while hovering
                if (autoCollapseTimer.current) {
                  window.clearTimeout(autoCollapseTimer.current)
                  autoCollapseTimer.current = null
                }
              }}
              style={{
                pointerEvents: 'auto',
                position: 'absolute',
                right: 0,
                bottom: 72,
                width: 340,
                maxWidth: 'calc(100vw - 28px)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: '20px 20px 18px',
                boxShadow: '0 20px 48px rgba(0,0,0,0.24)',
              }}
            >
              {/* Close */}
              <button
                type="button"
                onClick={snooze}
                aria-label={t('nate.close')}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              {/* Avatar + identity row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ position: 'relative', width: 44, height: 44 }}>
                  <span className="nate-avatar-ring" aria-hidden="true" />
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: 22,
                      color: 'var(--accent)',
                      fontWeight: 400,
                    }}
                  >
                    N
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    className="font-sans"
                    style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}
                  >
                    {t('nate.name')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                    <span
                      className="nate-status-dot"
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        display: 'inline-block',
                      }}
                    />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: 1.2,
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {t('nate.status')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <p
                className="font-serif italic"
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.45,
                  marginBottom: 18,
                  paddingRight: 4,
                }}
              >
                {t('nate.message')}
              </p>

              {/* CTA + later */}
              <Link
                href={CAL_LINK}
                onClick={() => setMode('hidden')}
                className="btn-primary inline-flex"
                style={{
                  fontSize: 13,
                  padding: '12px 20px',
                  width: '100%',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
              >
                <span className="btn-primary-dot" />
                {t('nate.cta')} →
              </Link>
              <button
                type="button"
                onClick={snooze}
                className="font-sans"
                style={{
                  width: '100%',
                  padding: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: 12,
                  cursor: 'pointer',
                }}
              >
                {t('nate.later')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pastille (always visible once widget is shown) */}
        <motion.button
          type="button"
          onClick={() => setMode(mode === 'expanded' ? 'pastille' : 'expanded')}
          aria-label={t('nate.name')}
          aria-expanded={mode === 'expanded'}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          lang={lang}
          style={{
            pointerEvents: 'auto',
            position: 'relative',
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          <span className="nate-avatar-ring" aria-hidden="true" />
          <span
            style={{
              position: 'relative',
              zIndex: 1,
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 24,
              color: 'var(--accent)',
              fontWeight: 400,
            }}
          >
            N
          </span>
          {/* Pulsing status dot */}
          <span
            className="nate-status-dot"
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 3,
              right: 3,
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--accent)',
              border: '2px solid var(--bg-card)',
              zIndex: 2,
            }}
          />
        </motion.button>
      </div>
    </>
  )
}
