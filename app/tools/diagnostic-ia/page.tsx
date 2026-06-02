'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Download, RotateCcw } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import {
  computeDiagnostic,
  DEFAULT_ANSWERS,
  type DiagnosticAnswers,
} from './scoring'

type Stage = 'intro' | 'act1' | 'act2' | 'act3' | 'report'

/**
 * Le Diagnostic IA — par NateSystem.
 *
 * Outil unique qui consolide les 3 anciennes calculettes
 * (saas-calculator, calculateur-temps-perdu, ai-readiness) en
 * un diagnostic complet du gaspillage opérationnel d'une PME.
 *
 * Structure : intro → 3 actes (4 questions chacun) → rapport.
 * Rapport sans gate email — la conversion vient du CTA "Réserver 20 min · offert"
 * en fin de rapport, pas d'un capture-form intrusif.
 */
export default function DiagnosticIaPage() {
  const { t } = useLang()
  const [stage, setStage] = useState<Stage>('intro')
  const [answers, setAnswers] = useState<DiagnosticAnswers>(DEFAULT_ANSWERS)

  const result = useMemo(() => computeDiagnostic(answers), [answers])

  const setAnswer = <K extends keyof DiagnosticAnswers>(
    key: K,
    value: DiagnosticAnswers[K]
  ) => setAnswers((prev) => ({ ...prev, [key]: value }))

  const reset = () => {
    setAnswers(DEFAULT_ANSWERS)
    setStage('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goNext = () => {
    const order: Stage[] = ['intro', 'act1', 'act2', 'act3', 'report']
    const idx = order.indexOf(stage)
    if (idx < order.length - 1) {
      setStage(order[idx + 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goPrev = () => {
    const order: Stage[] = ['intro', 'act1', 'act2', 'act3', 'report']
    const idx = order.indexOf(stage)
    if (idx > 0) {
      setStage(order[idx - 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <main>
      <Nav />

      <section style={{ padding: '120px 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          {/* Progress bar pour les actes (pas en intro / report) */}
          {(stage === 'act1' || stage === 'act2' || stage === 'act3') && (
            <ProgressBar stage={stage} />
          )}

          {stage === 'intro' && <Intro onStart={goNext} />}
          {stage === 'act1' && (
            <Act1
              answers={answers}
              setAnswer={setAnswer}
              onNext={goNext}
              onPrev={goPrev}
            />
          )}
          {stage === 'act2' && (
            <Act2
              answers={answers}
              setAnswer={setAnswer}
              onNext={goNext}
              onPrev={goPrev}
            />
          )}
          {stage === 'act3' && (
            <Act3
              answers={answers}
              setAnswer={setAnswer}
              onNext={goNext}
              onPrev={goPrev}
            />
          )}
          {stage === 'report' && <Report result={result} onReset={reset} />}
        </div>
      </section>

      <Footer />
      <MobileCta />

      <style jsx global>{`
        .diag-q-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
        }
        .diag-input {
          width: 100%;
          padding: 12px 14px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text);
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          transition: border-color 0.2s ease;
        }
        .diag-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .diag-input[type='range'] {
          padding: 0;
          background: transparent;
          border: none;
          accent-color: var(--accent);
        }
        .diag-radio-group {
          display: grid;
          gap: 8px;
        }
        .diag-radio {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .diag-radio:hover {
          border-color: var(--border-hover);
        }
        .diag-radio.active {
          border-color: var(--accent);
          background: var(--accent-subtle);
        }
        .diag-radio input {
          accent-color: var(--accent);
        }
        .diag-radio-label {
          flex: 1;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text);
          font-weight: 400;
        }

        @media print {
          nav,
          footer,
          .mobile-cta,
          .diag-no-print {
            display: none !important;
          }
          .diag-q-card {
            border: 1px solid #ddd;
            page-break-inside: avoid;
          }
          body,
          main {
            background: #fff !important;
            color: #000 !important;
          }
        }
      `}</style>
    </main>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Sous-composants
// ─────────────────────────────────────────────────────────────────────

function ProgressBar({ stage }: { stage: 'act1' | 'act2' | 'act3' }) {
  const map = { act1: 1, act2: 2, act3: 3 } as const
  const current = map[stage]
  return (
    <div
      className="diag-no-print"
      style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}
    >
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background: n <= current ? 'var(--accent)' : 'var(--border)',
            transition: 'background 0.3s ease',
          }}
        />
      ))}
      <span
        className="font-mono"
        style={{
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: 1.5,
          marginLeft: 8,
          fontWeight: 500,
        }}
      >
        ACTE {current} / 3
      </span>
    </div>
  )
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span className="section-label">Outil interactif gratuit · 4 min</span>
      <h1
        className="section-title"
        style={{ maxWidth: 640, margin: '24px auto 20px' }}
      >
        Le Diagnostic IA{' '}
        <span className="accent">par NateSystem</span>
      </h1>
      <p
        className="font-sans"
        style={{
          fontSize: 17,
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          maxWidth: 600,
          margin: '0 auto 40px',
        }}
      >
        En 4 minutes, mesurez ce que votre PME perd chaque mois en SaaS
        inutiles, temps répétitif et opportunités IA ratées. Vous repartez
        avec un rapport chiffré et trois leviers prioritaires. Sans email,
        sans gate, sans pitch commercial.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          maxWidth: 580,
          margin: '0 auto 40px',
        }}
      >
        {[
          { num: '01', label: 'Votre stack SaaS' },
          { num: '02', label: 'Votre temps perdu' },
          { num: '03', label: 'Votre maturité IA' },
        ].map((act) => (
          <div
            key={act.num}
            style={{
              padding: '20px 12px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 10,
            }}
          >
            <p
              className="font-serif italic"
              style={{ fontSize: 32, color: 'var(--accent)', lineHeight: 1 }}
            >
              {act.num}
            </p>
            <p
              className="font-sans"
              style={{
                fontSize: 13,
                color: 'var(--text-secondary)',
                marginTop: 8,
                fontWeight: 400,
              }}
            >
              {act.label}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onStart}
        className="btn-primary inline-flex"
        style={{ fontSize: 15 }}
      >
        <span className="btn-primary-dot" />
        Commencer le diagnostic <ArrowRight size={16} />
      </button>

      <p
        className="font-mono"
        style={{
          fontSize: 11,
          color: 'var(--text-muted)',
          marginTop: 20,
          letterSpacing: 0.5,
        }}
      >
        Aucune donnée n&apos;est sauvegardée · Tout reste dans votre navigateur
      </p>
    </div>
  )
}

type ActProps = {
  answers: DiagnosticAnswers
  setAnswer: <K extends keyof DiagnosticAnswers>(
    key: K,
    value: DiagnosticAnswers[K]
  ) => void
  onNext: () => void
  onPrev: () => void
}

function Act1({ answers, setAnswer, onNext, onPrev }: ActProps) {
  return (
    <div className="diag-q-card">
      <ActHeader title="Votre stack SaaS" desc="Combien d'outils, combien réellement utilisés, à quel coût." />

      <SliderQuestion
        label="Combien d'outils SaaS payants utilisez-vous ?"
        hint="Notion, HubSpot, Sellsy, Slack, Microsoft 365, Pennylane, etc."
        min={1}
        max={30}
        value={answers.saasCount}
        onChange={(v) => {
          setAnswer('saasCount', v)
          if (answers.saasUsedCount > v) setAnswer('saasUsedCount', v)
        }}
        suffix="outils"
      />

      <SliderQuestion
        label="Combien sont réellement utilisés au quotidien ?"
        hint="Ouvert au moins une fois par semaine par votre équipe."
        min={0}
        max={answers.saasCount}
        value={answers.saasUsedCount}
        onChange={(v) => setAnswer('saasUsedCount', v)}
        suffix="utilisés"
      />

      <SliderQuestion
        label="Coût mensuel total estimé ?"
        hint="Additionnez les abonnements mensuels de tous vos outils."
        min={100}
        max={8000}
        step={50}
        value={answers.saasMonthlyCost}
        onChange={(v) => setAnswer('saasMonthlyCost', v)}
        suffix="€/mois"
      />

      <SliderQuestion
        label="Doublons connus : 2 outils qui font la même chose ?"
        hint="Par exemple : Trello + Asana, ou Slack + Teams."
        min={0}
        max={6}
        value={answers.duplicatesCount}
        onChange={(v) => setAnswer('duplicatesCount', v)}
        suffix="doublons"
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel="Acte 2 →" />
    </div>
  )
}

function Act2({ answers, setAnswer, onNext, onPrev }: ActProps) {
  return (
    <div className="diag-q-card">
      <ActHeader title="Votre temps perdu" desc="Ce que coûtent vraiment les tâches répétitives." />

      <SliderQuestion
        label="Combien de personnes dans votre équipe ?"
        hint="Y compris vous, hors stagiaires."
        min={1}
        max={50}
        value={answers.employees}
        onChange={(v) => setAnswer('employees', v)}
        suffix="personnes"
      />

      <SliderQuestion
        label="Heures/semaine/personne sur tâches répétitives ?"
        hint="Saisie, reporting, relances, copier-coller, validations manuelles."
        min={0}
        max={25}
        value={answers.hoursPerWeekPerPerson}
        onChange={(v) => setAnswer('hoursPerWeekPerPerson', v)}
        suffix="h/sem"
      />

      <SliderQuestion
        label="Coût mensuel chargé moyen par employé ?"
        hint="Salaire brut × 1.45 environ. Pour un cadre PME : ~4500 €."
        min={2500}
        max={12000}
        step={100}
        value={answers.monthlySalaryCost}
        onChange={(v) => setAnswer('monthlySalaryCost', v)}
        suffix="€/mois"
      />

      <RadioQuestion
        label="Avez-vous déjà tenté d'automatiser quelque chose ?"
        value={answers.automationLevel}
        onChange={(v) => setAnswer('automationLevel', v)}
        options={[
          { value: 'none', label: 'Jamais — tout est manuel' },
          { value: 'some', label: 'Un peu (Zapier, Make, ChatGPT)' },
          { value: 'lots', label: 'Beaucoup — c\'est en place et ça tourne' },
        ]}
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel="Acte 3 →" />
    </div>
  )
}

function Act3({ answers, setAnswer, onNext, onPrev }: ActProps) {
  return (
    <div className="diag-q-card">
      <ActHeader title="Votre maturité IA" desc="Où vous en êtes vraiment sur l'adoption." />

      <RadioQuestion
        label="Utilisez-vous ChatGPT / Claude / Copilot au quotidien ?"
        value={answers.aiUsage}
        onChange={(v) => setAnswer('aiUsage', v)}
        options={[
          { value: 'no', label: 'Non, pas du tout' },
          { value: 'individual', label: 'Oui, individuellement (mes équipes ou moi)' },
          { value: 'team', label: 'Oui, en équipe avec process partagés' },
        ]}
      />

      <RadioQuestion
        label="Vos process sont-ils documentés ?"
        value={answers.processDocumented}
        onChange={(v) => setAnswer('processDocumented', v)}
        options={[
          { value: 'no', label: 'Non, c\'est dans la tête des gens' },
          { value: 'partial', label: 'Partiellement, sur certains sujets' },
          { value: 'yes', label: 'Oui, c\'est cartographié' },
        ]}
      />

      <RadioQuestion
        label="Vos données sont-elles centralisées (une source de vérité) ?"
        value={answers.dataCentralized}
        onChange={(v) => setAnswer('dataCentralized', v)}
        options={[
          { value: 'no', label: 'Non, c\'est éparpillé entre Excel, mails et outils' },
          { value: 'partial', label: 'Partiellement, ça dépend des sujets' },
          { value: 'yes', label: 'Oui, on a un système unifié' },
        ]}
      />

      <RadioQuestion
        label="Vous sentez-vous en retard sur vos concurrents IA ?"
        value={answers.aiLagFeeling}
        onChange={(v) => setAnswer('aiLagFeeling', v)}
        options={[
          { value: 'none', label: 'Pas du tout, on est en avance' },
          { value: 'a-bit', label: 'Un peu, mais ça va' },
          { value: 'yes', label: 'Oui, clairement' },
          { value: 'a-lot', label: 'Énormément, on est largués' },
        ]}
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel="Voir mon rapport →" />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Composants de questions
// ─────────────────────────────────────────────────────────────────────

function ActHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2
        className="font-serif italic"
        style={{
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.2,
          color: 'var(--text)',
          marginBottom: 8,
        }}
      >
        {title}
      </h2>
      <p
        className="font-sans"
        style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          fontWeight: 300,
          lineHeight: 1.55,
        }}
      >
        {desc}
      </p>
    </div>
  )
}

function SliderQuestion({
  label,
  hint,
  min,
  max,
  step = 1,
  value,
  onChange,
  suffix,
}: {
  label: string
  hint?: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (v: number) => void
  suffix: string
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label
        className="font-sans"
        style={{
          display: 'block',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--text)',
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {hint && (
        <p
          className="font-sans"
          style={{
            fontSize: 12,
            color: 'var(--text-muted)',
            marginBottom: 12,
            fontWeight: 300,
          }}
        >
          {hint}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="diag-input"
          style={{ flex: 1 }}
        />
        <span
          className="font-mono"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--accent)',
            minWidth: 120,
            textAlign: 'right',
          }}
        >
          {value.toLocaleString('fr-FR')} {suffix}
        </span>
      </div>
    </div>
  )
}

function RadioQuestion<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: T
  onChange: (v: T) => void
  options: Array<{ value: T; label: string }>
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label
        className="font-sans"
        style={{
          display: 'block',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--text)',
          marginBottom: 12,
        }}
      >
        {label}
      </label>
      <div className="diag-radio-group">
        {options.map((opt) => {
          const id = `radio-${label.replace(/\s+/g, '-').toLowerCase()}-${opt.value}`
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={`diag-radio ${value === opt.value ? 'active' : ''}`}
            >
              <input
                type="radio"
                id={id}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
              />
              <span className="diag-radio-label">{opt.label}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

function NavButtons({
  onPrev,
  onNext,
  nextLabel,
}: {
  onPrev: () => void
  onNext: () => void
  nextLabel: string
}) {
  return (
    <div
      className="diag-no-print"
      style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', gap: 12 }}
    >
      <button
        type="button"
        onClick={onPrev}
        className="font-sans"
        style={{
          padding: '12px 18px',
          background: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: 8,
          color: 'var(--text-secondary)',
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
      >
        <ArrowLeft size={14} />
        Retour
      </button>
      <button
        type="button"
        onClick={onNext}
        className="btn-primary inline-flex"
        style={{ fontSize: 14 }}
      >
        <span className="btn-primary-dot" />
        {nextLabel}
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Rapport final
// ─────────────────────────────────────────────────────────────────────

function Report({
  result,
  onReset,
}: {
  result: ReturnType<typeof computeDiagnostic>
  onReset: () => void
}) {
  const handlePrint = () => window.print()

  const tierLabel: Record<typeof result.maturityTier, string> = {
    critical: 'À mettre en route rapidement',
    lagging: 'Sous la moyenne du marché',
    average: 'Dans la moyenne',
    ahead: 'En avance sur le marché',
  }

  const tierColor: Record<typeof result.maturityTier, string> = {
    critical: 'var(--accent)',
    lagging: '#E89C3A',
    average: '#6B6B70',
    ahead: '#28A745',
  }

  return (
    <article>
      {/* Header du rapport */}
      <header style={{ textAlign: 'center', marginBottom: 36 }}>
        <span className="section-label">Votre rapport</span>
        <h1
          className="section-title"
          style={{ maxWidth: 640, margin: '20px auto 12px' }}
        >
          Le Diagnostic IA
        </h1>
        <p
          className="font-sans"
          style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            fontWeight: 300,
          }}
        >
          Généré le{' '}
          <ReportDate />
          {' · '}
          NateSystem
        </p>
      </header>

      {/* 3 KPI principaux */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 32,
        }}
      >
        <KpiCard
          label="€ gaspillés / mois"
          value={`${result.saasWasteMonthly.toLocaleString('fr-FR')} €`}
          sub={`soit ${result.saasWasteAnnual.toLocaleString('fr-FR')} € / an`}
          accent="var(--accent)"
        />
        <KpiCard
          label="Heures perdues / mois"
          value={`${result.hoursLostMonthly.toLocaleString('fr-FR')} h`}
          sub={`≈ ${result.hoursLostInETP} ETP perdu / an`}
          accent="var(--accent)"
        />
        <KpiCard
          label="Score Maturité IA"
          value={`${result.aiMaturityScore} / 100`}
          sub={tierLabel[result.maturityTier]}
          accent={tierColor[result.maturityTier]}
        />
      </section>

      {/* Ce que ça représente */}
      <section className="diag-q-card" style={{ marginBottom: 32 }}>
        <h3
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: 1.8,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Ce que ça représente en vrai
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: 12,
          }}
        >
          <BulletPoint>
            <strong>{result.saasWasteAnnual.toLocaleString('fr-FR')} €/an</strong>{' '}
            partent en abonnements SaaS qui n&apos;apportent rien ou en doublons.
          </BulletPoint>
          <BulletPoint>
            <strong>{result.hoursLostAnnual.toLocaleString('fr-FR')} h/an</strong>{' '}
            perdues en tâches répétitives — soit environ{' '}
            <strong>{result.timeWasteAnnualEuros.toLocaleString('fr-FR')} €</strong>{' '}
            de salaire chargé non productif.
          </BulletPoint>
          <BulletPoint>
            Votre maturité IA est de{' '}
            <strong>{result.aiMaturityScore}/100</strong> —{' '}
            {tierLabel[result.maturityTier].toLowerCase()}.
          </BulletPoint>
        </ul>
      </section>

      {/* 3 leviers prioritaires */}
      <section style={{ marginBottom: 36 }}>
        <h3
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: 1.8,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 600,
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Vos {result.topLevers.length} leviers prioritaires
        </h3>

        <div style={{ display: 'grid', gap: 16 }}>
          {result.topLevers.map((lever) => (
            <LeverCard key={lever.rank} lever={lever} />
          ))}
        </div>
      </section>

      {/* CTA final — pas du pitch */}
      <section
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--accent)',
          borderRadius: 14,
          padding: '32px 28px',
          textAlign: 'center',
          marginBottom: 32,
        }}
      >
        <h3
          className="font-serif italic"
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: 'var(--text)',
            marginBottom: 12,
          }}
        >
          Vous avez un rapport.{' '}
          <span style={{ color: 'var(--accent)' }}>
            Si vous voulez en discuter, je vous offre 20 min.
          </span>
        </h3>
        <p
          className="font-sans"
          style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: 540,
            margin: '0 auto 24px',
          }}
        >
          Pas de pitch, pas d&apos;envoi de devis automatique. Je réponds à vos
          questions, je vous montre ce qui se construit chez les autres
          clients NateSystem, et je vous laisse repartir.
        </p>
        <div
          className="diag-no-print"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}
        >
          <Link
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            style={{ fontSize: 14 }}
          >
            <span className="btn-primary-dot" />
            <Calendar size={14} />
            Réserver 20 min · offert
          </Link>
          <button
            type="button"
            onClick={handlePrint}
            className="font-sans"
            style={{
              padding: '14px 22px',
              background: 'transparent',
              border: '1px solid var(--border-hover)',
              borderRadius: 10,
              color: 'var(--text)',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Download size={14} />
            Télécharger en PDF
          </button>
        </div>
      </section>

      {/* Refaire */}
      <div
        className="diag-no-print"
        style={{ textAlign: 'center', marginBottom: 24 }}
      >
        <button
          type="button"
          onClick={onReset}
          className="font-sans"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: 13,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'underline',
            textDecorationColor: 'var(--border)',
          }}
        >
          <RotateCcw size={12} />
          Refaire le diagnostic
        </button>
      </div>

      {/* Note méthodologique */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 20,
          textAlign: 'center',
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: 0.5,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
          }}
        >
          Méthodologie : les chiffres sont calculés à partir de vos
          réponses, sur des bases sectorielles PME 2025-2026. Pour un
          diagnostic personnalisé approfondi, l&apos;audit gratuit NateSystem
          va beaucoup plus loin.
        </p>
      </footer>
    </article>
  )
}

function ReportDate() {
  // SSR-safe : on attend le mount client pour afficher la date (évite hydration mismatch)
  const [dateStr, setDateStr] = useState<string>('—')
  useMemo(() => {
    if (typeof window === 'undefined') return
    const d = new Date()
    setDateStr(
      d.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    )
  }, [])
  return <span>{dateStr}</span>
}

function KpiCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub: string
  accent: string
}) {
  return (
    <div className="diag-q-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
      <p
        className="font-mono"
        style={{
          fontSize: 10,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <p
        className="font-serif italic"
        style={{
          fontSize: 'clamp(28px, 4vw, 38px)',
          fontWeight: 400,
          lineHeight: 1,
          color: accent,
          marginBottom: 8,
        }}
      >
        {value}
      </p>
      <p
        className="font-sans"
        style={{
          fontSize: 12,
          color: 'var(--text-secondary)',
          fontWeight: 300,
          lineHeight: 1.45,
        }}
      >
        {sub}
      </p>
    </div>
  )
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="font-sans"
      style={{
        display: 'flex',
        gap: 12,
        fontSize: 14,
        color: 'var(--text)',
        lineHeight: 1.6,
        fontWeight: 300,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          marginTop: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--accent)',
        }}
      />
      <span>{children}</span>
    </li>
  )
}

function LeverCard({
  lever,
}: {
  lever: ReturnType<typeof computeDiagnostic>['topLevers'][number]
}) {
  return (
    <div
      className="diag-q-card"
      style={{
        borderLeft: '3px solid var(--accent)',
        padding: '24px 24px 22px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 14,
          marginBottom: 10,
        }}
      >
        <span
          className="font-serif italic"
          style={{
            fontSize: 28,
            color: 'var(--accent)',
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          0{lever.rank}
        </span>
        <h4
          className="font-sans"
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {lever.title}
        </h4>
      </div>
      <p
        className="font-sans"
        style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 16,
        }}
      >
        {lever.description}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          paddingTop: 14,
          borderTop: '1px solid var(--border)',
        }}
      >
        <div>
          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 4,
              fontWeight: 600,
            }}
          >
            Gain estimé
          </p>
          <p
            className="font-sans"
            style={{
              fontSize: 13,
              color: 'var(--accent)',
              fontWeight: 600,
            }}
          >
            {lever.estimatedGain}
          </p>
        </div>
        <div>
          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 4,
              fontWeight: 600,
            }}
          >
            Effort
          </p>
          <p
            className="font-sans"
            style={{
              fontSize: 13,
              color: 'var(--text)',
              fontWeight: 500,
            }}
          >
            {lever.effort}
          </p>
        </div>
      </div>
    </div>
  )
}
