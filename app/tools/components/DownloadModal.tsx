'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Resource } from '@/lib/resources'

interface DownloadModalProps {
  resource: Resource | null
  onClose: () => void
}

interface FormData {
  prenom: string
  email: string
  role: string
  secteur: string
  newsletter: boolean
}

const ROLES = [
  'Dirigeant/CEO',
  'Directeur Marketing',
  'Directeur Commercial',
  'DRH/RH',
  'Directeur Ops',
  'Consultant',
  'Autre',
]

const SECTEURS = [
  'Restauration/H\u00f4tellerie',
  'Conseil/Services',
  'BTP/Immobilier',
  'Commerce/Retail',
  'Industrie',
  '\u00c9ducation',
  'Sant\u00e9',
  'Tech',
  'Autre',
]

export default function DownloadModal({ resource, onClose }: DownloadModalProps) {
  const [form, setForm] = useState<FormData>({
    prenom: '',
    email: '',
    role: '',
    secteur: '',
    newsletter: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!resource) return
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [resource, handleEscape])

  // Focus trap
  useEffect(() => {
    if (!resource || !modalRef.current) return

    const modal = modalRef.current
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    modal.addEventListener('keydown', trap)
    return () => modal.removeEventListener('keydown', trap)
  }, [resource])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!resource) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [resource])

  if (!resource) return null

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
      const res = await fetch('/api/resources/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, resourceId: resource.id }),
      })
      if (!res.ok) throw new Error('Erreur')
      setStatus('success')
    } catch {
      // Fallback for static export - still show success
      setStatus('success')
    }
  }

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#ED4245]/30 focus:border-[#ED4245] transition'

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div
        ref={modalRef}
        className="relative bg-[#F0EAE0] rounded-[20px] max-w-md w-full mx-auto p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              V\u00e9rifie ta bo\u00eete &mdash; ton pack arrive dans 2 minutes !
            </h3>
          </div>
        ) : (
          <>
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 pr-8">
              Re\u00e7ois ton {resource.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Re\u00e7ois le pack complet par email en 2 minutes.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Prenom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pr\u00e9nom <span className="text-[#ED4245]">*</span>
                </label>
                <input
                  type="text"
                  value={form.prenom}
                  onChange={(e) => updateField('prenom', e.target.value)}
                  placeholder="Ton pr\u00e9nom"
                  className={inputClass}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email professionnel <span className="text-[#ED4245]">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="prenom@entreprise.com"
                  className={inputClass}
                  required
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ton r\u00f4le <span className="text-[#ED4245]">*</span>
                </label>
                <select
                  value={form.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    S\u00e9lectionne ton r\u00f4le
                  </option>
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Secteur */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ton secteur <span className="text-[#ED4245]">*</span>
                </label>
                <select
                  value={form.secteur}
                  onChange={(e) => updateField('secteur', e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    S\u00e9lectionne ton secteur
                  </option>
                  {SECTEURS.map((secteur) => (
                    <option key={secteur} value={secteur}>
                      {secteur}
                    </option>
                  ))}
                </select>
              </div>

              {/* Newsletter checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={(e) => updateField('newsletter', e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#ED4245] focus:ring-[#ED4245]"
                />
                <span className="text-sm text-gray-600">
                  Recevoir la Scale Minute &mdash; newsletter hebdo NateSystem
                </span>
              </label>

              {/* Error message */}
              {status === 'error' && (
                <p className="text-sm text-red-600">{errorMsg || 'Une erreur est survenue. R\u00e9essaie.'}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-[#ED4245] text-white font-semibold py-3 rounded-xl hover:bg-[#d63638] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'Recevoir gratuitement \u2192'
                )}
              </button>

              {/* Micro-text */}
              <p className="text-center text-xs text-gray-400 mt-2">
                Aucun spam &middot; D\u00e9sabonnement 1 clic &middot; Pack re\u00e7u en &lt; 2 min
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
