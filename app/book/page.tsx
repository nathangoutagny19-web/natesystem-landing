'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { API_URL } from '@/lib/constants'
import Script from 'next/script'

const ROLES = [
  'Dirigeant / CEO',
  'Directeur Marketing',
  'Directeur Commercial',
  'Directeur Ops / COO',
  'DRH / RH',
  'DSI / CTO',
  'Consultant',
  'Autre',
]

const SECTEURS = [
  'Restauration / Hôtellerie',
  'Conseil / Services',
  'BTP / Immobilier',
  'Commerce / Retail',
  'Industrie',
  'Éducation',
  'Santé',
  'Tech / SaaS',
  'Autre',
]

const TEAM_SIZES = [
  '1-5 personnes',
  '6-20 personnes',
  '21-50 personnes',
  '51-100 personnes',
  '100+ personnes',
]

const CHALLENGES = [
  'Trop d\'outils qui ne communiquent pas',
  'Tâches répétitives qui prennent trop de temps',
  'Données éparpillées et non exploitées',
  'Process non documentés',
  'Difficulté à scaler sans recruter',
  'Autre',
]

const BUDGETS = [
  'Moins de 10 000€/an',
  '10 000€ – 30 000€/an',
  '30 000€ – 60 000€/an',
  '60 000€ – 100 000€/an',
  '100 000€+/an',
  'Je ne sais pas encore',
]

interface FormData {
  prenom: string
  nom: string
  email: string
  entreprise: string
  site: string
  role: string
  secteur: string
  taille: string
  challenge: string
  budget: string
  details: string
}

export default function BookPage() {
  const [form, setForm] = useState<FormData>({
    prenom: '', nom: '', email: '', entreprise: '', site: '',
    role: '', secteur: '', taille: '', challenge: '', budget: '', details: '',
  })
  const [step, setStep] = useState<'form' | 'calendar'>('form')
  const [submitting, setSubmitting] = useState(false)

  const canSubmit = form.prenom.trim() && form.email.trim() && form.entreprise.trim() && form.role && form.secteur && form.taille

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Try to save to Supabase (non-blocking — works if API is available)
    try {
      await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom,
          email: form.email,
          role: form.role,
          secteur: form.secteur,
          resourceId: 'strategy-call',
          newsletter: false,
          // Extra fields stored in metadata
          nom: form.nom,
          entreprise: form.entreprise,
          site: form.site,
          taille: form.taille,
          challenge: form.challenge,
          budget: form.budget,
          details: form.details,
        }),
      })
    } catch {
      // Silently continue — form data will be in Cal.com too
    }

    setStep('calendar')
    setSubmitting(false)
  }

  const updateField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <section style={{ padding: '140px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 640 }}>

          {step === 'form' ? (
            <>
              {/* Header */}
              <div className="text-center mb-10">
                <span className="section-label">APPEL STRATÉGIQUE</span>
                <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
                  Réservez votre{' '}
                  <span className="accent">session stratégique.</span>
                </h1>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300,
                  color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto',
                }}>
                  30 minutes pour analyser vos opérations, identifier les opportunités
                  d&apos;automatisation, et définir un plan d&apos;action concret.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '32px',
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Prénom */}
                  <div>
                    <label className="book-label">Prénom <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="text" value={form.prenom} onChange={e => updateField('prenom', e.target.value)}
                      placeholder="Votre prénom" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required />
                  </div>
                  {/* Nom */}
                  <div>
                    <label className="book-label">Nom</label>
                    <input type="text" value={form.nom} onChange={e => updateField('nom', e.target.value)}
                      placeholder="Votre nom" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="book-label">Email professionnel <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <input type="email" value={form.email} onChange={e => updateField('email', e.target.value)}
                    placeholder="prenom@entreprise.com" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="book-label">Entreprise <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="text" value={form.entreprise} onChange={e => updateField('entreprise', e.target.value)}
                      placeholder="Nom de l'entreprise" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required />
                  </div>
                  <div>
                    <label className="book-label">Site web</label>
                    <input type="text" value={form.site} onChange={e => updateField('site', e.target.value)}
                      placeholder="https://..." className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="book-label">Votre rôle <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <select value={form.role} onChange={e => updateField('role', e.target.value)}
                      className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.role ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>Sélectionnez</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="book-label">Secteur <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <select value={form.secteur} onChange={e => updateField('secteur', e.target.value)}
                      className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.secteur ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>Sélectionnez</option>
                      {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="book-label">Taille de l&apos;équipe <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {TEAM_SIZES.map(size => (
                      <button key={size} type="button" onClick={() => updateField('taille', size)}
                        className="book-pill" data-active={form.taille === size ? 'true' : undefined}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="book-label">Défi principal</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {CHALLENGES.map(c => (
                      <button key={c} type="button" onClick={() => updateField('challenge', c)}
                        className="book-pill" data-active={form.challenge === c ? 'true' : undefined}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="book-label">Budget annuel envisagé pour cette transformation <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {BUDGETS.map(b => (
                      <button key={b} type="button" onClick={() => updateField('budget', b)}
                        className="book-pill" data-active={form.budget === b ? 'true' : undefined}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="book-label">Précisions (optionnel)</label>
                  <textarea value={form.details} onChange={e => updateField('details', e.target.value)}
                    placeholder="Décrivez brièvement votre situation et ce que vous aimeriez résoudre..."
                    rows={3} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'vertical' }} />
                </div>

                <button type="submit" disabled={!canSubmit || submitting}
                  className="w-full mt-6 flex items-center justify-center gap-2"
                  style={{
                    padding: '16px 32px', background: 'var(--accent)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                    borderRadius: 12, border: 'none', cursor: canSubmit ? 'pointer' : 'not-allowed',
                    opacity: canSubmit && !submitting ? 1 : 0.5, transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
                  }}
                >
                  {submitting ? 'Envoi...' : 'Choisir un créneau →'}
                </button>

                <p className="text-center mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                  Gratuit · Sans engagement · Vos données restent confidentielles
                </p>
              </form>
            </>
          ) : (
            <>
              {/* Calendar step */}
              <div className="text-center mb-8">
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 16px', borderRadius: 100, marginBottom: 16,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#22c55e', letterSpacing: 1 }}>
                    INFORMATIONS REÇUES
                  </span>
                </div>
                <h2 className="section-title" style={{ margin: '0 auto 8px', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                  Choisissez votre{' '}<span className="accent">créneau.</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  Merci {form.prenom} ! Sélectionnez un créneau qui vous convient.
                </p>
              </div>

              {/* Cal.com inline embed */}
              <div
                id="my-cal-inline-session-strategique"
                style={{
                  width: '100%', minHeight: 600, overflow: 'auto',
                  borderRadius: 16, border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                }}
              />
              <Script
                src="https://app.cal.com/embed/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                  // @ts-expect-error Cal is loaded from external script
                  const Cal = window.Cal
                  if (!Cal) return
                  Cal('init', 'session-strategique', { origin: 'https://app.cal.com' })
                  Cal.ns['session-strategique']('inline', {
                    elementOrSelector: '#my-cal-inline-session-strategique',
                    config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
                    calLink: 'natesystem/session-strategique',
                  })
                  Cal.ns['session-strategique']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
                }}
              />
            </>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .book-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .book-pill {
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
        }
        .book-pill:hover {
          border-color: var(--border-hover);
          color: var(--text);
        }
        .book-pill[data-active="true"] {
          background: var(--accent-subtle);
          border-color: var(--accent);
          color: var(--accent);
          font-weight: 500;
        }
      `}</style>
    </main>
  )
}
