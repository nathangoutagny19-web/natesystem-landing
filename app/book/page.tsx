'use client'

import { useState, useEffect, useRef } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { API_URL } from '@/lib/constants'

/* ——— Constants ——— */

const ROLES = [
  'Dirigeant / CEO', 'Directeur Marketing', 'Directeur Commercial',
  'Directeur Ops / COO', 'DRH / RH', 'DSI / CTO', 'Consultant', 'Autre',
]
const SECTEURS = [
  'Restauration / Hôtellerie', 'Conseil / Services', 'BTP / Immobilier',
  'Commerce / Retail', 'Industrie', 'Éducation', 'Santé', 'Tech / SaaS', 'Autre',
]
const TEAM_SIZES = ['1-5 personnes', '6-20 personnes', '21-50 personnes', '51-100 personnes', '100+ personnes']
const CHALLENGES = [
  'Trop d\'outils qui ne communiquent pas', 'Tâches répétitives qui prennent trop de temps',
  'Données éparpillées et non exploitées', 'Process non documentés',
  'Difficulté à scaler sans recruter', 'Autre',
]
const BUDGETS = ['< 5 000€/an', '5 000€ – 10 000€/an', '10 000€ – 25 000€/an', '25 000€ – 50 000€/an', '50 000€+/an']

/* Audit questions */
const TOOLS_LIST = [
  'Google Workspace', 'Microsoft 365', 'Slack', 'Notion', 'HubSpot', 'Salesforce',
  'Airtable', 'Excel / Sheets', 'Monday', 'Trello', 'Asana', 'Pipedrive',
  'Odoo', 'Sage / Cegid', 'Autre',
]
const SAAS_COUNTS = ['1-3', '4-7', '8-12', '13+', 'Aucune idée']
const TOOLS_CONNECTED = [
  'Oui, via intégrations ou Zapier/Make', 'Partiellement (copier-coller fréquent)',
  'Non, tout est en silo', 'Je ne sais pas',
]
const REPETITIVE_TASKS = [
  'Saisie / transfert de données', 'Plannings / scheduling', 'Reporting / tableaux de bord',
  'Relances clients / prospects', 'Facturation / devis', 'Onboarding collaborateurs / clients',
  'Communication interne', 'Gestion de stock / commandes', 'Autre',
]
const HOURS_WASTED = ['Moins de 5h/sem', '5-10h/sem', '10-20h/sem', '20-40h/sem', '40h+/sem']
const WHO_DOES_IT = [
  'Le dirigeant', 'Un manager', 'Plusieurs personnes', 'Tout le monde un peu', 'Un assistant / office manager',
]
const PROCESS_DOCS = [
  'Oui, entièrement', 'Partiellement', 'Non — tout est dans la tête des gens', 'On a essayé mais c\'est pas à jour',
]
const DATA_LOCATIONS = [
  'CRM', 'Fichiers Excel / Sheets', 'Emails', 'Dans la tête des gens',
  'ERP / logiciel métier', 'Papier', 'Base de données', 'Autre',
]
const ABSENCE_IMPACT = [
  'Rien ne bouge — on attend', 'On se débrouille mais c\'est le chaos',
  'Un collègue prend le relais facilement', 'On a des process de backup documentés',
]
const DESIRED_RESULTS = [
  'Gagner 10h+/semaine', 'Réduire les erreurs opérationnelles',
  'Ne plus dépendre d\'une personne clé', 'Avoir un tableau de bord en temps réel',
  'Automatiser la prospection / relances', 'Réduire les coûts SaaS', 'Scaler sans recruter',
]
const URGENCY = [
  'Critique — on perd de l\'argent chaque semaine', 'Important — dans les 3 prochains mois',
  'Nice to have — quand on aura le temps', 'Je veux juste explorer',
]
const TRIED_BEFORE = [
  'Non, jamais', 'Oui, avec un freelance / consultant',
  'Oui, avec un outil (Zapier, Make...)', 'Oui, en interne mais ça n\'a pas marché',
]

/* ——— Types ——— */

interface FormData {
  prenom: string; nom: string; email: string; entreprise: string; site: string
  role: string; secteur: string; taille: string; challenge: string; budget: string; details: string
}

interface AuditData {
  tools: string[]; saasCount: string; toolsConnected: string
  tasks: string[]; hoursWasted: string; whoDoesIt: string
  processDocs: string; dataLocations: string[]; absenceImpact: string
  desiredResults: string[]; urgency: string; triedBefore: string
}

type Step = 'form' | 'audit-1' | 'audit-2' | 'audit-3' | 'audit-4' | 'calendar'

/* ——— Component ——— */

export default function BookPage() {
  const [form, setForm] = useState<FormData>({
    prenom: '', nom: '', email: '', entreprise: '', site: '',
    role: '', secteur: '', taille: '', challenge: '', budget: '', details: '',
  })
  const [audit, setAudit] = useState<AuditData>({
    tools: [], saasCount: '', toolsConnected: '',
    tasks: [], hoursWasted: '', whoDoesIt: '',
    processDocs: '', dataLocations: [], absenceImpact: '',
    desiredResults: [], urgency: '', triedBefore: '',
  })
  const [step, setStep] = useState<Step>('form')
  const [submitting, setSubmitting] = useState(false)
  const calInitialized = useRef(false)

  const canSubmitForm = form.prenom.trim() && form.email.trim() && form.entreprise.trim() && form.role && form.secteur && form.taille
  const canSubmitAudit1 = audit.tools.length > 0 && !!audit.saasCount && !!audit.toolsConnected
  const canSubmitAudit2 = audit.tasks.length > 0 && !!audit.hoursWasted && !!audit.whoDoesIt
  const canSubmitAudit3 = !!audit.processDocs && audit.dataLocations.length > 0 && !!audit.absenceImpact
  const canSubmitAudit4 = audit.desiredResults.length > 0 && !!audit.urgency && !!audit.triedBefore

  const updateField = (field: keyof FormData, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const toggleMulti = (field: 'tools' | 'tasks' | 'dataLocations' | 'desiredResults', value: string) => {
    setAudit(prev => {
      const arr = prev[field] as string[]
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }
  const setAuditField = (field: keyof AuditData, value: string) => setAudit(prev => ({ ...prev, [field]: value }))

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep('audit-1')
  }

  const goToCalendar = async () => {
    setSubmitting(true)
    // Send all data to backend
    try {
      await fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom, email: form.email, role: form.role,
          secteur: form.secteur, resourceId: 'strategy-call', newsletter: false,
          nom: form.nom, entreprise: form.entreprise, site: form.site,
          taille: form.taille, challenge: form.challenge, budget: form.budget,
          details: form.details, audit,
        }),
      })
    } catch { /* continue silently */ }
    setSubmitting(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep('calendar')
  }

  // Initialize Cal.com UI when calendar step is shown
  useEffect(() => {
    if (step !== 'calendar' || calInitialized.current) return
    calInitialized.current = true
    ;(async function () {
      const cal = await getCalApi({ namespace: 'session-strategique' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [step])

  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'

  /* Progress bar */
  const stepIndex = ['form', 'audit-1', 'audit-2', 'audit-3', 'audit-4', 'calendar'].indexOf(step)
  const progress = ((stepIndex + 1) / 6) * 100

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: 'var(--border)' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'var(--accent)', transition: 'width 0.5s ease' }} />
      </div>

      <section style={{ padding: '140px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 640 }}>

          {/* ——— STEP 1: Form ——— */}
          {step === 'form' && (
            <>
              <div className="text-center mb-10">
                <span className="section-label">ÉTAPE 1/3 · INFORMATIONS</span>
                <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
                  Réservez votre{' '}<span className="accent">session stratégique.</span>
                </h1>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
                  30 minutes pour analyser vos opérations, identifier les opportunités d&apos;automatisation, et définir un plan d&apos;action concret.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Prénom" required><input type="text" value={form.prenom} onChange={e => updateField('prenom', e.target.value)} placeholder="Votre prénom" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                  <Field label="Nom"><input type="text" value={form.nom} onChange={e => updateField('nom', e.target.value)} placeholder="Votre nom" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} /></Field>
                </div>
                <Field label="Email professionnel" required className="mt-4"><input type="email" value={form.email} onChange={e => updateField('email', e.target.value)} placeholder="prenom@entreprise.com" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Entreprise" required><input type="text" value={form.entreprise} onChange={e => updateField('entreprise', e.target.value)} placeholder="Nom de l'entreprise" className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} required /></Field>
                  <Field label="Site web"><input type="text" value={form.site} onChange={e => updateField('site', e.target.value)} placeholder="https://..." className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }} /></Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Votre rôle" required>
                    <select value={form.role} onChange={e => updateField('role', e.target.value)} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.role ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>Sélectionnez</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </Field>
                  <Field label="Secteur" required>
                    <select value={form.secteur} onChange={e => updateField('secteur', e.target.value)} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: form.secteur ? 'var(--text)' : 'var(--text-muted)' }} required>
                      <option value="" disabled>Sélectionnez</option>
                      {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <PillField label="Taille de l'équipe" required options={TEAM_SIZES} value={form.taille} onChange={v => updateField('taille', v)} />
                <PillField label="Défi principal" options={CHALLENGES} value={form.challenge} onChange={v => updateField('challenge', v)} />
                <PillField label="Budget annuel envisagé" required options={BUDGETS} value={form.budget} onChange={v => updateField('budget', v)} />
                <Field label="Précisions (optionnel)" className="mt-4">
                  <textarea value={form.details} onChange={e => updateField('details', e.target.value)} placeholder="Décrivez brièvement votre situation..." rows={3} className={inputClass} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'vertical' }} />
                </Field>
                <SubmitButton disabled={!canSubmitForm} label="Continuer → Audit express" />
                <p className="text-center mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                  Gratuit · Sans engagement · Vos données restent confidentielles
                </p>
              </form>
            </>
          )}

          {/* ——— AUDIT STEP 1: Stack outils ——— */}
          {step === 'audit-1' && (
            <AuditStep
              stepLabel="ÉTAPE 2/3 · AUDIT EXPRESS"
              title="Vos outils"
              titleAccent="actuels."
              subtitle="Pour comprendre votre écosystème technique et identifier les quick wins."
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-2') }}
              canNext={canSubmitAudit1}
              onBack={() => setStep('form')}
            >
              <MultiPillField label="Quels outils utilisez-vous au quotidien ?" required options={TOOLS_LIST} selected={audit.tools} onToggle={v => toggleMulti('tools', v)} />
              <PillField label="Combien d'abonnements SaaS payez-vous ?" required options={SAAS_COUNTS} value={audit.saasCount} onChange={v => setAuditField('saasCount', v)} />
              <PillField label="Vos outils communiquent-ils entre eux ?" required options={TOOLS_CONNECTED} value={audit.toolsConnected} onChange={v => setAuditField('toolsConnected', v)} />
            </AuditStep>
          )}

          {/* ——— AUDIT STEP 2: Tâches répétitives ——— */}
          {step === 'audit-2' && (
            <AuditStep
              stepLabel="ÉTAPE 2/3 · AUDIT EXPRESS"
              title="Vos tâches"
              titleAccent="répétitives."
              subtitle="Pour identifier ce qui peut être automatisé immédiatement."
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-3') }}
              canNext={canSubmitAudit2}
              onBack={() => setStep('audit-1')}
            >
              <MultiPillField label="Quelles tâches prennent le plus de temps chaque semaine ?" required options={REPETITIVE_TASKS} selected={audit.tasks} onToggle={v => toggleMulti('tasks', v)} />
              <PillField label="Combien d'heures/semaine votre équipe passe sur ces tâches ?" required options={HOURS_WASTED} value={audit.hoursWasted} onChange={v => setAuditField('hoursWasted', v)} />
              <PillField label="Qui les fait principalement ?" required options={WHO_DOES_IT} value={audit.whoDoesIt} onChange={v => setAuditField('whoDoesIt', v)} />
            </AuditStep>
          )}

          {/* ——— AUDIT STEP 3: Process & données ——— */}
          {step === 'audit-3' && (
            <AuditStep
              stepLabel="ÉTAPE 2/3 · AUDIT EXPRESS"
              title="Vos process"
              titleAccent="& données."
              subtitle="Pour évaluer la maturité de votre infrastructure actuelle."
              onNext={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep('audit-4') }}
              canNext={canSubmitAudit3}
              onBack={() => setStep('audit-2')}
            >
              <PillField label="Vos process internes sont-ils documentés ?" required options={PROCESS_DOCS} value={audit.processDocs} onChange={v => setAuditField('processDocs', v)} />
              <MultiPillField label="Où vivent vos données critiques ?" required options={DATA_LOCATIONS} selected={audit.dataLocations} onToggle={v => toggleMulti('dataLocations', v)} />
              <PillField label="Que se passe-t-il quand un collaborateur clé est absent ?" required options={ABSENCE_IMPACT} value={audit.absenceImpact} onChange={v => setAuditField('absenceImpact', v)} />
            </AuditStep>
          )}

          {/* ——— AUDIT STEP 4: Objectifs & urgence ——— */}
          {step === 'audit-4' && (
            <AuditStep
              stepLabel="ÉTAPE 2/3 · AUDIT EXPRESS"
              title="Vos objectifs"
              titleAccent="& urgence."
              subtitle="Pour prioriser les recommandations de votre session stratégique."
              onNext={goToCalendar}
              canNext={canSubmitAudit4}
              onBack={() => setStep('audit-3')}
              nextLabel={submitting ? 'Envoi...' : 'Voir les créneaux disponibles →'}
              disabled={submitting}
            >
              <MultiPillField label="Quel résultat vous ferait dire 'ça valait le coup' dans 90 jours ?" required options={DESIRED_RESULTS} selected={audit.desiredResults} onToggle={v => toggleMulti('desiredResults', v)} />
              <PillField label="Quel est votre niveau d'urgence ?" required options={URGENCY} value={audit.urgency} onChange={v => setAuditField('urgency', v)} />
              <PillField label="Avez-vous déjà essayé de résoudre ce problème ?" required options={TRIED_BEFORE} value={audit.triedBefore} onChange={v => setAuditField('triedBefore', v)} />
            </AuditStep>
          )}

          {/* ——— STEP 3: Calendar ——— */}
          {step === 'calendar' && (
            <>
              <div className="text-center mb-8">
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 16px', borderRadius: 100, marginBottom: 16,
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#22c55e', letterSpacing: 1 }}>AUDIT COMPLÉTÉ</span>
                </div>
                <h2 className="section-title" style={{ margin: '0 auto 8px', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                  Choisissez votre{' '}<span className="accent">créneau.</span>
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  Merci {form.prenom} ! Nathan préparera votre session à partir de vos réponses.
                </p>
              </div>

              <Cal
                namespace="session-strategique"
                calLink="natesystem/session-strategique"
                style={{ width: '100%', height: '100%', minHeight: 650, overflow: 'scroll' }}
                config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
              />
            </>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .book-label { display: block; font-family: var(--font-sans); font-size: 13px; font-weight: 500; color: var(--text-secondary); margin-bottom: 6px; }
        .book-pill {
          padding: 6px 14px; border-radius: 100px; font-family: var(--font-sans); font-size: 12px; font-weight: 400;
          color: var(--text-secondary); background: var(--bg-elevated); border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;
        }
        .book-pill:hover { border-color: var(--border-hover); color: var(--text); }
        .book-pill[data-active="true"] { background: var(--accent-subtle); border-color: var(--accent); color: var(--accent); font-weight: 500; }
      `}</style>
    </main>
  )
}

/* ——— Sub-components ——— */

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      {children}
    </div>
  )
}

function PillField({ label, required, options, value, onChange }: { label: string; required?: boolean; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-4">
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {options.map(o => (
          <button key={o} type="button" onClick={() => onChange(o)} className="book-pill" data-active={value === o ? 'true' : undefined}>{o}</button>
        ))}
      </div>
    </div>
  )
}

function MultiPillField({ label, required, options, selected, onToggle }: { label: string; required?: boolean; options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="mt-4">
      <label className="book-label">{label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {options.map(o => (
          <button key={o} type="button" onClick={() => onToggle(o)} className="book-pill" data-active={selected.includes(o) ? 'true' : undefined}>{o}</button>
        ))}
      </div>
    </div>
  )
}

function SubmitButton({ disabled, label }: { disabled: boolean; label: string }) {
  return (
    <button type="submit" disabled={disabled} className="w-full mt-6 flex items-center justify-center gap-2" style={{
      padding: '16px 32px', background: 'var(--accent)', color: '#fff',
      fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
      borderRadius: 12, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, transition: 'all 0.3s',
      boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
    }}>
      {label}
    </button>
  )
}

function AuditStep({ stepLabel, title, titleAccent, subtitle, children, onNext, canNext, onBack, nextLabel, disabled }: {
  stepLabel: string; title: string; titleAccent: string; subtitle: string
  children: React.ReactNode; onNext: () => void; canNext: boolean; onBack: () => void
  nextLabel?: string; disabled?: boolean
}) {
  return (
    <>
      <div className="text-center mb-10">
        <span className="section-label">{stepLabel}</span>
        <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
          {title}{' '}<span className="accent">{titleAccent}</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
          {subtitle}
        </p>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
        {children}

        <div className="flex gap-3 mt-6">
          <button type="button" onClick={onBack} style={{
            padding: '14px 24px', background: 'transparent', border: '1px solid var(--border)',
            borderRadius: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)',
            fontSize: 14, fontWeight: 400, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            ← Retour
          </button>
          <button type="button" onClick={onNext} disabled={!canNext || disabled} className="flex-1 flex items-center justify-center gap-2" style={{
            padding: '14px 32px', background: 'var(--accent)', color: '#fff',
            fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
            borderRadius: 12, border: 'none', cursor: canNext && !disabled ? 'pointer' : 'not-allowed',
            opacity: canNext && !disabled ? 1 : 0.5, transition: 'all 0.3s',
            boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
          }}>
            {nextLabel || 'Continuer →'}
          </button>
        </div>
      </div>
    </>
  )
}
