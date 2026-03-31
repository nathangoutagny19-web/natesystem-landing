'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Link from 'next/link'
import { API_URL } from '@/lib/constants'

/* ——— Types ——— */

interface Task {
  name: string
  hoursPerWeek: number | ''
  people: number | ''
}

interface LeadForm {
  prenom: string
  email: string
  entreprise: string
}

type Step = 1 | 2 | 3

/* ——— Presets ——— */

const TASK_PRESETS = [
  'Saisie de données',
  'Planification d\'équipe',
  'Reporting',
  'Relances clients',
  'Facturation / devis',
  'Communication interne',
  'Gestion de stock / commandes',
  'Onboarding collaborateurs',
]

const DEFAULT_TASKS: Task[] = [
  { name: 'Saisie de données', hoursPerWeek: 3, people: 2 },
  { name: 'Reporting', hoursPerWeek: 4, people: 1 },
  { name: 'Relances clients', hoursPerWeek: 2, people: 2 },
]

/* ——— Calculations ——— */

const WORKING_WEEKS = 47

function calculate(tasks: Task[], hourlyCost: number) {
  const breakdown = tasks
    .filter(t => t.name && t.hoursPerWeek && t.people)
    .map(t => {
      const weekly = (Number(t.hoursPerWeek) || 0) * (Number(t.people) || 0)
      const yearly = weekly * WORKING_WEEKS
      const cost = yearly * hourlyCost
      return { name: t.name, weekly, yearly, cost }
    })
    .sort((a, b) => b.weekly - a.weekly)

  const totalWeekly = breakdown.reduce((s, t) => s + t.weekly, 0)
  const totalYearly = totalWeekly * WORKING_WEEKS
  const totalCost = totalYearly * hourlyCost

  const withPct = breakdown.map(t => ({
    ...t,
    pct: totalWeekly > 0 ? Math.round((t.weekly / totalWeekly) * 100) : 0,
  }))

  return { breakdown: withPct, totalWeekly, totalYearly, totalCost }
}

/* ——— Component ——— */

export default function CalculateurTempsPerdu() {
  const [step, setStep] = useState<Step>(1)
  const [company, setCompany] = useState('')
  const [employees, setEmployees] = useState<number | ''>('')
  const [hourlyCost, setHourlyCost] = useState<number | ''>(35)
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS)
  const [lead, setLead] = useState<LeadForm>({ prenom: '', email: '', entreprise: '' })
  const [submitting, setSubmitting] = useState(false)

  const canGoStep2 = company.trim() && employees && tasks.some(t => t.name && t.hoursPerWeek && t.people)
  const canSubmitLead = lead.prenom.trim() && lead.email.trim()

  const results = calculate(tasks, Number(hourlyCost) || 35)

  const addTask = () => setTasks(prev => [...prev, { name: '', hoursPerWeek: '', people: '' }])
  const removeTask = (i: number) => setTasks(prev => prev.filter((_, idx) => idx !== i))
  const updateTask = (i: number, field: keyof Task, value: string | number) => {
    setTasks(prev => prev.map((t, idx) => idx === i ? { ...t, [field]: value } : t))
  }

  const goToStep2 = () => {
    setLead(prev => ({ ...prev, entreprise: company }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep(2)
  }

  const submitLead = async () => {
    setSubmitting(true)
    await Promise.allSettled([
      fetch(`${API_URL}/api/leads/capture-lead-magnet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: lead.prenom,
          email: lead.email,
          source: 'calculateur_temps_perdu',
          metadata: {
            company,
            employees,
            hoursLostPerWeek: results.totalWeekly,
            hoursLostPerYear: results.totalYearly,
            costPerYear: results.totalCost,
            topTasks: results.breakdown.slice(0, 3).map(t => t.name),
            submittedAt: new Date().toISOString(),
          },
        }),
      }).catch(() => {}),
    ])
    setSubmitting(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep(3)
  }

  const fmt = (n: number) => n.toLocaleString('fr-FR')

  /* ——— Styles ——— */
  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  }
  const inputClass = 'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'
  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: '32px',
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: 'var(--border)' }}>
        <div style={{ height: '100%', width: `${(step / 3) * 100}%`, background: 'var(--accent)', transition: 'width 0.5s ease' }} />
      </div>

      <section style={{ padding: '140px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 700 }}>

          {/* Step indicator */}
          <StepProgress current={step} />

          {/* ——— STEP 1: Vos tâches ——— */}
          {step === 1 && (
            <>
              <FadeUp className="text-center mb-10">
                <span className="section-label">CALCULATEUR</span>
                <h1 className="section-title" style={{ margin: '12px auto 16px' }}>
                  Combien d&apos;heures{' '}<span className="accent">perdez-vous ?</span>
                </h1>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
                  Listez les tâches répétitives de votre équipe. On calcule le temps et le coût perdu chaque année.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div style={cardStyle}>
                  {/* Company info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label text="Entreprise" required />
                      <input type="text" value={company} onChange={e => setCompany(e.target.value)}
                        placeholder="Nom" className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <Label text="Employés" required />
                      <input type="number" value={employees} onChange={e => setEmployees(e.target.value ? Number(e.target.value) : '')}
                        placeholder="12" min={1} className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <Label text="Coût horaire (€)" />
                      <input type="number" value={hourlyCost} onChange={e => setHourlyCost(e.target.value ? Number(e.target.value) : '')}
                        placeholder="35" min={1} className={inputClass} style={inputStyle} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ borderTop: '1px solid var(--border)', margin: '24px 0' }} />

                  {/* Tasks header */}
                  <div className="flex items-center justify-between mb-4">
                    <Label text="Tâches répétitives" required />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
                      {tasks.length} tâche{tasks.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Task rows */}
                  <div className="flex flex-col gap-3">
                    {tasks.map((task, i) => (
                      <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_100px_100px_32px] gap-2 items-end">
                        <div>
                          {i === 0 && <span className="hidden sm:block" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>Tâche</span>}
                          <input
                            type="text" value={task.name}
                            onChange={e => updateTask(i, 'name', e.target.value)}
                            placeholder="Ex: Saisie de données"
                            className={inputClass} style={inputStyle}
                            list="task-presets"
                          />
                        </div>
                        <div>
                          {i === 0 && <span className="hidden sm:block" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>h/sem</span>}
                          <input
                            type="number" value={task.hoursPerWeek}
                            onChange={e => updateTask(i, 'hoursPerWeek', e.target.value ? Number(e.target.value) : '')}
                            placeholder="3" min={0} max={168}
                            className={inputClass} style={inputStyle}
                          />
                        </div>
                        <div>
                          {i === 0 && <span className="hidden sm:block" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>Pers.</span>}
                          <input
                            type="number" value={task.people}
                            onChange={e => updateTask(i, 'people', e.target.value ? Number(e.target.value) : '')}
                            placeholder="2" min={0}
                            className={inputClass} style={inputStyle}
                          />
                        </div>
                        <button
                          type="button" onClick={() => removeTask(i)}
                          style={{ width: 32, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: 8, transition: 'color 0.2s' }}
                          title="Supprimer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Datalist for presets */}
                  <datalist id="task-presets">
                    {TASK_PRESETS.map(p => <option key={p} value={p} />)}
                  </datalist>

                  {/* Add task button */}
                  <button
                    type="button" onClick={addTask}
                    className="mt-4 w-full flex items-center justify-center gap-2"
                    style={{
                      padding: '10px 20px', borderRadius: 12,
                      border: '1px dashed var(--border-hover)', background: 'transparent',
                      color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)',
                      fontSize: 13, fontWeight: 400, cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    Ajouter une tâche
                  </button>

                  {/* Live preview */}
                  {results.totalWeekly > 0 && (
                    <div className="mt-6 text-center" style={{
                      padding: '16px', borderRadius: 12,
                      background: 'var(--accent-subtle)', border: '1px solid rgba(230,57,70,0.15)',
                    }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)' }}>
                        Estimation en temps réel :{' '}
                      </span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--accent)' }}>
                        {fmt(results.totalWeekly)}h/semaine
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginLeft: 8 }}>
                        soit {fmt(results.totalCost)}€/an
                      </span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="button" onClick={goToStep2} disabled={!canGoStep2}
                    className="w-full mt-6 flex items-center justify-center gap-2"
                    style={{
                      padding: '16px 32px', background: 'var(--accent)', color: '#fff',
                      fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                      borderRadius: 12, border: 'none',
                      cursor: canGoStep2 ? 'pointer' : 'not-allowed',
                      opacity: canGoStep2 ? 1 : 0.5, transition: 'all 0.3s',
                      boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
                    }}
                  >
                    Voir mon rapport →
                  </button>
                </div>
              </FadeUp>
            </>
          )}

          {/* ——— STEP 2: Email modal ——— */}
          {step === 2 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
              <div style={{ ...cardStyle, maxWidth: 440, width: '100%' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--text)', marginBottom: 8 }}>
                  Votre rapport est prêt.
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: 24 }}>
                  Entrez vos coordonnées pour accéder à votre analyse complète.
                </p>

                <div className="flex flex-col gap-4">
                  <div>
                    <Label text="Prénom" required />
                    <input type="text" value={lead.prenom} onChange={e => setLead(p => ({ ...p, prenom: e.target.value }))}
                      placeholder="Votre prénom" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <Label text="Email professionnel" required />
                    <input type="email" value={lead.email} onChange={e => setLead(p => ({ ...p, email: e.target.value }))}
                      placeholder="prenom@entreprise.com" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <Label text="Entreprise" />
                    <input type="text" value={lead.entreprise} onChange={e => setLead(p => ({ ...p, entreprise: e.target.value }))}
                      placeholder={company} className={inputClass} style={inputStyle} />
                  </div>
                </div>

                <button
                  type="button" onClick={submitLead} disabled={!canSubmitLead || submitting}
                  className="w-full mt-6 flex items-center justify-center gap-2"
                  style={{
                    padding: '16px 32px', background: 'var(--accent)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600,
                    borderRadius: 12, border: 'none',
                    cursor: canSubmitLead && !submitting ? 'pointer' : 'not-allowed',
                    opacity: canSubmitLead && !submitting ? 1 : 0.5, transition: 'all 0.3s',
                    boxShadow: '0 4px 16px rgba(230,57,70,0.25)',
                  }}
                >
                  {submitting ? 'Envoi...' : 'Accéder à mon rapport →'}
                </button>

                <p className="text-center mt-3" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', fontWeight: 300 }}>
                  Aucun spam · Vos données restent confidentielles
                </p>

                {/* Skip link */}
                <button
                  type="button"
                  onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setStep(3) }}
                  className="w-full mt-2 text-center"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', opacity: 0.6 }}
                >
                  Passer cette étape
                </button>
              </div>
            </div>
          )}

          {/* ——— STEP 3: Results ——— */}
          {step === 3 && (
            <>
              {/* Hero metric */}
              <FadeUp className="text-center mb-8">
                <span className="section-label">RÉSULTAT</span>
                <h1 className="section-title" style={{ margin: '12px auto 8px' }}>
                  Votre équipe perd
                </h1>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                  fontSize: 'clamp(56px, 12vw, 80px)', color: 'var(--accent)',
                  lineHeight: 1.1, marginBottom: 8,
                }}>
                  {fmt(results.totalWeekly)}h<span style={{ fontSize: '0.5em', color: 'var(--text-muted)' }}>/semaine</span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)', fontWeight: 300 }}>
                  en tâches répétitives automatisables.
                </p>
              </FadeUp>

              {/* 3 metric cards */}
              <FadeUp delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <MetricCard label="HEURES / AN" value={`${fmt(results.totalYearly)}h`} />
                  <MetricCard label="COÛT / AN" value={`${fmt(results.totalCost)}€`} />
                  <MetricCard label="ÉQUIVALENT ETP" value={(results.totalYearly / 1645).toFixed(1)} />
                </div>
              </FadeUp>

              {/* Breakdown table */}
              <FadeUp delay={0.2}>
                <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
                  <div style={{ padding: '20px 24px 12px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      DÉTAIL PAR TÂCHE
                    </p>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: 13 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)' }}>
                          <th style={{ textAlign: 'left', padding: '10px 24px', color: 'var(--text-muted)', fontWeight: 400, fontSize: 11 }}>Tâche</th>
                          <th style={{ textAlign: 'right', padding: '10px 16px', color: 'var(--text-muted)', fontWeight: 400, fontSize: 11 }}>h/sem</th>
                          <th style={{ textAlign: 'right', padding: '10px 16px', color: 'var(--text-muted)', fontWeight: 400, fontSize: 11 }}>h/an</th>
                          <th style={{ textAlign: 'right', padding: '10px 16px', color: 'var(--text-muted)', fontWeight: 400, fontSize: 11 }}>Coût/an</th>
                          <th style={{ textAlign: 'right', padding: '10px 24px', color: 'var(--text-muted)', fontWeight: 400, fontSize: 11 }}>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.breakdown.map((t, i) => (
                          <tr key={i} style={{
                            borderBottom: '1px solid var(--border)',
                            background: i < 3 ? 'var(--accent-subtle)' : 'transparent',
                          }}>
                            <td style={{ padding: '12px 24px', color: 'var(--text)', fontWeight: i < 3 ? 500 : 300 }}>
                              {i < 3 && <span style={{ color: 'var(--accent)', marginRight: 6, fontSize: 11 }}>●</span>}
                              {t.name}
                            </td>
                            <td style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 300 }}>{fmt(t.weekly)}h</td>
                            <td style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 300 }}>{fmt(t.yearly)}h</td>
                            <td style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--text-secondary)', fontWeight: 300 }}>{fmt(t.cost)}€</td>
                            <td style={{ textAlign: 'right', padding: '12px 24px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: 12 }}>{t.pct}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeUp>

              {/* Benchmark */}
              <FadeUp delay={0.3}>
                <div className="mt-6" style={{
                  padding: '20px 24px', borderRadius: 12,
                  background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Benchmark :</strong> La moyenne des PME françaises perd entre{' '}
                    <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>15h et 25h/semaine</span>{' '}
                    en tâches répétitives automatisables.
                  </p>
                </div>
              </FadeUp>

              {/* CTA */}
              <FadeUp delay={0.4}>
                <div className="mt-8 text-center" style={{
                  ...cardStyle,
                  borderColor: 'rgba(230,57,70,0.2)',
                  background: 'var(--accent-subtle)',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--text)', marginBottom: 8 }}>
                    Prêt à récupérer ces heures ?
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: 20 }}>
                    30 minutes pour identifier comment automatiser vos top 3 tâches.
                  </p>
                  <Link href="/book" className="btn-primary inline-flex" style={{ fontSize: 15, padding: '18px 40px' }}>
                    <span className="btn-primary-dot" />
                    Réserver ma session stratégique →
                  </Link>
                </div>
              </FadeUp>
            </>
          )}
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}

/* ——— Sub-components ——— */

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 6 }}>
      {text} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
    </label>
  )
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center" style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '24px 16px',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 28, color: 'var(--accent)' }}>
        {value}
      </p>
    </div>
  )
}

function StepProgress({ current }: { current: Step }) {
  const steps = ['Vos tâches', 'Votre rapport', 'Résultat']
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => {
        const stepNum = (i + 1) as Step
        const isActive = stepNum === current
        const isCompleted = stepNum < current
        return (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <div style={{
                width: 40, height: 1,
                background: isCompleted || isActive ? 'var(--accent)' : 'var(--border)',
                transition: 'background 0.3s',
              }} />
            )}
            <div className="flex flex-col items-center" style={{ minWidth: 80 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 500,
                background: isActive ? 'var(--accent)' : isCompleted ? 'var(--accent)' : 'transparent',
                color: isActive || isCompleted ? '#fff' : 'var(--text-muted)',
                border: isActive || isCompleted ? '2px solid var(--accent)' : '2px solid var(--border)',
                transition: 'all 0.3s',
              }}>
                {isCompleted ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : stepNum}
              </div>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 400,
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                marginTop: 6, transition: 'color 0.3s',
              }}>
                {label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
