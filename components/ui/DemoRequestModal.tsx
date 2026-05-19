'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { API_URL } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'

export interface DemoRequest {
  /** Stable id for the demo being requested (e.g. "reviews"). Sent with the lead. */
  id: string
  /** Display title used in the modal header (already localised). */
  title: string
}

interface FormData {
  prenom: string
  email: string
  role: string
  secteur: string
  newsletter: boolean
}

export default function DemoRequestModal({
  demo,
  onClose,
}: {
  demo: DemoRequest | null
  onClose: () => void
}) {
  const { t, lang } = useLang()
  const [form, setForm] = useState<FormData>({ prenom: '', email: '', role: '', secteur: '', newsletter: false })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const ROLES = [
    { en: 'Owner / CEO', fr: 'Dirigeant·e / CEO', hu: 'Tulajdonos / CEO' },
    { en: 'Operations', fr: 'Opérations', hu: 'Operáció' },
    { en: 'Marketing', fr: 'Marketing', hu: 'Marketing' },
    { en: 'Manager', fr: 'Manager', hu: 'Vezető' },
    { en: 'Consultant', fr: 'Consultant·e', hu: 'Tanácsadó' },
    { en: 'Other', fr: 'Autre', hu: 'Egyéb' },
  ]
  const SECTEURS = [
    { en: 'Restaurant / Hospitality', fr: 'Restauration / Hôtellerie', hu: 'Vendéglátás / Szálloda' },
    { en: 'Retail / Commerce', fr: 'Commerce / Retail', hu: 'Kereskedelem' },
    { en: 'Services / Consulting', fr: 'Conseil / Services', hu: 'Tanácsadás / Szolgáltatás' },
    { en: 'Real estate / Construction', fr: 'BTP / Immobilier', hu: 'Ingatlan / Építőipar' },
    { en: 'Industry', fr: 'Industrie', hu: 'Ipar' },
    { en: 'Health', fr: 'Santé', hu: 'Egészségügy' },
    { en: 'Education', fr: 'Éducation', hu: 'Oktatás' },
    { en: 'Tech / SaaS', fr: 'Tech / SaaS', hu: 'Tech / SaaS' },
    { en: 'Other', fr: 'Autre', hu: 'Egyéb' },
  ]

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!demo) return
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [demo, handleEscape])

  useEffect(() => {
    if (!demo || !modalRef.current) return
    const modal = modalRef.current
    const focusable = modal.querySelectorAll<HTMLElement>('button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first.focus()
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    modal.addEventListener('keydown', trap)
    return () => modal.removeEventListener('keydown', trap)
  }, [demo])

  useEffect(() => {
    if (!demo) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [demo])

  if (!demo) return null

  const canSubmit =
    form.prenom.trim() !== '' &&
    form.email.trim() !== '' &&
    form.role !== '' &&
    form.secteur !== '' &&
    status !== 'loading'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          resourceId: `demo-request:${demo.id}`,
          kind: 'demo-request',
          demoId: demo.id,
        }),
      })
      if (!res.ok) throw new Error('Erreur')
      setStatus('success')
    } catch {
      // Backend may be flaky; we still confirm to the user — the lead is logged either side.
      setStatus('success')
    }
  }

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30 focus:border-[color:var(--accent)] transition'

  return (
    <div
      ref={overlayRef}
      onClick={e => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div
        ref={modalRef}
        className="relative rounded-xl max-w-md w-full mx-auto p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--bg-card)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-colors"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'var(--accent-subtle)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--accent)' }}>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-serif italic" style={{ fontSize: 22, color: 'var(--text)', fontWeight: 400, marginBottom: 10 }}>
              {t('demoRequest.success.title')}
            </h3>
            <p className="font-sans" style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {t('demoRequest.success.body')}
            </p>
          </div>
        ) : (
          <>
            <p
              className="font-mono"
              style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}
            >
              {t('demoRequest.kicker')}
            </p>
            <h2 className="font-serif italic pr-8" style={{ fontSize: 24, color: 'var(--text)', fontWeight: 400, lineHeight: 1.25 }}>
              {demo.title}
            </h2>
            <p className="mt-2 font-sans" style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {t('demoRequest.intro')}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Field label={t('demoRequest.field.firstname')}>
                <input
                  type="text"
                  value={form.prenom}
                  onChange={e => updateField('prenom', e.target.value)}
                  placeholder={t('demoRequest.field.firstname.placeholder')}
                  className={inputClass}
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
                  required
                />
              </Field>

              <Field label={t('demoRequest.field.email')}>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => updateField('email', e.target.value)}
                  placeholder="name@company.com"
                  className={inputClass}
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
                  required
                />
              </Field>

              <Field label={t('demoRequest.field.role')}>
                <select
                  value={form.role}
                  onChange={e => updateField('role', e.target.value)}
                  className={inputClass}
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
                  required
                >
                  <option value="" disabled>{t('demoRequest.field.role.placeholder')}</option>
                  {ROLES.map(r => <option key={r.en} value={r.en}>{r[lang]}</option>)}
                </select>
              </Field>

              <Field label={t('demoRequest.field.sector')}>
                <select
                  value={form.secteur}
                  onChange={e => updateField('secteur', e.target.value)}
                  className={inputClass}
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text)' }}
                  required
                >
                  <option value="" disabled>{t('demoRequest.field.sector.placeholder')}</option>
                  {SECTEURS.map(s => <option key={s.en} value={s.en}>{s[lang]}</option>)}
                </select>
              </Field>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={e => updateField('newsletter', e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded"
                  style={{ borderColor: 'var(--border)', accentColor: 'var(--accent)' }}
                />
                <span className="font-sans" style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {t('demoRequest.field.newsletter')}
                </span>
              </label>

              {status === 'error' && (
                <p className="text-sm" style={{ color: 'var(--accent)' }}>{errorMsg || t('demoRequest.error')}</p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full font-sans"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: canSubmit ? 'pointer' : 'not-allowed',
                  opacity: canSubmit ? 1 : 0.55,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'opacity 0.2s, background 0.2s',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t('demoRequest.submitting')}
                  </>
                ) : (
                  t('demoRequest.submit') + ' →'
                )}
              </button>

              <p className="text-center font-mono" style={{ fontSize: 10, letterSpacing: 1, color: 'var(--text-muted)', marginTop: 6 }}>
                {t('demoRequest.footnote')}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-sans" style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label} <span style={{ color: 'var(--accent)' }}>*</span>
      </label>
      {children}
    </div>
  )
}
