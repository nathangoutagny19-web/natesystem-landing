'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Download, RotateCcw } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import { CAL_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import {
  computeDiagnostic,
  DEFAULT_ANSWERS,
  type DiagnosticAnswers,
} from './scoring'

type Stage = 'intro' | 'act1' | 'act2' | 'act3' | 'report'

/**
 * Le Diagnostic IA, par NateSystem.
 *
 * Outil unique qui consolide les 3 anciennes calculettes
 * (saas-calculator, calculateur-temps-perdu, ai-readiness) en
 * un diagnostic complet du gaspillage opérationnel d'une PME.
 *
 * Structure : intro → 3 actes (4 questions chacun) → rapport.
 * Rapport sans gate email, la conversion vient du CTA "Réserver un appel · offert"
 * en fin de rapport, pas d'un capture-form intrusif.
 */
export default function DiagnosticIaPage() {
  const { lang, t } = useLang()
  const [stage, setStage] = useState<Stage>('intro')
  const [answers, setAnswers] = useState<DiagnosticAnswers>(DEFAULT_ANSWERS)

  const result = useMemo(() => computeDiagnostic(answers, lang), [answers, lang])

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
  const { lang } = useLang()
  const d = makeD(lang)
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
        {d('ACTE', 'ACT', 'FELVONÁS')} {current} / 3
      </span>
    </div>
  )
}

function Intro({ onStart }: { onStart: () => void }) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <div style={{ textAlign: 'center' }}>
      <span className="section-label">{d('Outil interactif gratuit · 4 min', 'Free interactive tool · 4 min', 'Ingyenes interaktív eszköz · 4 perc')}</span>
      <h1
        className="section-title"
        style={{ maxWidth: 640, margin: '24px auto 20px' }}
      >
        {d('Le Diagnostic IA', 'The AI Diagnostic', 'Az MI-diagnosztika')}{' '}
        <span className="accent">{d('par NateSystem', 'by NateSystem', 'a NateSystemtől')}</span>
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
        {d(
          'En 4 minutes, mesurez ce que votre PME perd chaque mois en SaaS inutiles, temps répétitif et opportunités IA ratées. Vous repartez avec un rapport chiffré et trois leviers prioritaires. Sans email, sans gate, sans pitch commercial.',
          'In 4 minutes, measure what your company loses each month in unused SaaS, repetitive work and missed AI opportunities. You leave with a costed report and three priority levers. No email, no gate, no sales pitch.'
        , '4 perc alatt mérje meg, mennyit veszít a cége havonta kihasználatlan SaaS-eszközökön, ismétlődő munkán és elszalasztott MI-lehetőségeken. Egy számszerű riporttal és három kiemelt beavatkozási ponttal távozik. E-mail nélkül, kapu nélkül, értékesítési duma nélkül.')}
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
          { num: '01', label: d('Votre stack SaaS', 'Your SaaS stack', 'A SaaS-készlete') },
          { num: '02', label: d('Votre temps perdu', 'The time you lose', 'Az elvesztett ideje') },
          { num: '03', label: d('Votre maturité IA', 'Your AI readiness', 'Az MI-érettsége') },
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
        {d('Commencer le diagnostic', 'Start the diagnostic', 'Diagnosztika indítása')} <ArrowRight size={16} />
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
        {d('Aucune donnée n\u2019est sauvegardée · Tout reste dans votre navigateur', 'Nothing is saved · everything stays in your browser', 'Semmit nem mentünk el · Minden a böngészőjében marad')}
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
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <div className="diag-q-card">
      <ActHeader
        title={d('Votre stack SaaS', 'Your SaaS stack', 'A SaaS-készlete')}
        desc={d("Combien d'outils, combien réellement utilisés, à quel coût.", 'How many tools, how many actually used, and at what cost.')}
      />

      <SliderQuestion
        label={d("Combien d'outils SaaS payants utilisez-vous ?", 'How many paid SaaS tools do you use?')}
        hint={d('Notion, HubSpot, Sellsy, Slack, Microsoft 365, Pennylane, etc.', 'Notion, HubSpot, Slack, Microsoft 365, Xero, and the rest.', 'Notion, HubSpot, Slack, Microsoft 365, számlázóprogram és a többi.')}
        min={1}
        max={30}
        value={answers.saasCount}
        onChange={(v) => {
          setAnswer('saasCount', v)
          if (answers.saasUsedCount > v) setAnswer('saasUsedCount', v)
        }}
        suffix={d('outils', 'tools', 'eszköz')}
      />

      <SliderQuestion
        label={d('Combien sont réellement utilisés au quotidien ?', 'How many are genuinely used day to day?', 'Hányat használnak ténylegesen nap mint nap?')}
        hint={d('Ouvert au moins une fois par semaine par votre équipe.', 'Opened at least once a week by your team.', 'Amit a csapata legalább hetente egyszer megnyit.')}
        min={0}
        max={answers.saasCount}
        value={answers.saasUsedCount}
        onChange={(v) => setAnswer('saasUsedCount', v)}
        suffix={d('utilisés', 'in use', 'használatban')}
      />

      <SliderQuestion
        label={d('Coût mensuel total estimé ?', 'Estimated total monthly cost?', 'Becsült teljes havi költség?')}
        hint={d('Additionnez les abonnements mensuels de tous vos outils.', 'Add up the monthly subscriptions of all your tools.', 'Adja össze az összes eszköze havi előfizetését.')}
        min={100}
        max={8000}
        step={50}
        value={answers.saasMonthlyCost}
        onChange={(v) => setAnswer('saasMonthlyCost', v)}
        suffix="€/mois"
      />

      <SliderQuestion
        label={d('Doublons connus : 2 outils qui font la même chose ?', 'Known overlaps: two tools doing the same job?', 'Ismert átfedések: két eszköz ugyanarra?')}
        hint={d('Par exemple : Trello + Asana, ou Slack + Teams.', 'For instance Trello + Asana, or Slack + Teams.', 'Például Trello + Asana, vagy Slack + Teams.')}
        min={0}
        max={6}
        value={answers.duplicatesCount}
        onChange={(v) => setAnswer('duplicatesCount', v)}
        suffix={d('doublons', 'overlaps', 'átfedés')}
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel={d('Acte 2 →', 'Act 2 →', '2. felvonás →')} />
    </div>
  )
}

function Act2({ answers, setAnswer, onNext, onPrev }: ActProps) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <div className="diag-q-card">
      <ActHeader
        title={d('Votre temps perdu', 'The time you lose', 'Az elvesztett ideje')}
        desc={d('Ce que coûtent vraiment les tâches répétitives.', 'What repetitive tasks really cost.', 'Mennyibe kerülnek valójában az ismétlődő feladatok.')}
      />

      <SliderQuestion
        label={d('Combien de personnes dans votre équipe ?', 'How many people are in your team?', 'Hányan vannak a csapatában?')}
        hint={d('Y compris vous, hors stagiaires.', 'Including you, not counting interns.', 'Önt is beleértve, gyakornokok nélkül.')}
        min={1}
        max={50}
        value={answers.employees}
        onChange={(v) => setAnswer('employees', v)}
        suffix={d('personnes', 'people', 'fő')}
      />

      <SliderQuestion
        label={d('Heures/semaine/personne sur tâches répétitives ?', 'Hours per week per person on repetitive tasks?', 'Heti hány óra fejenként ismétlődő feladatokon?')}
        hint={d('Saisie, reporting, relances, copier-coller, validations manuelles.', 'Data entry, reporting, follow-ups, copy and paste, manual approvals.', 'Adatbevitel, riportálás, utánkövetés, másolás-beillesztés, kézi jóváhagyások.')}
        min={0}
        max={25}
        value={answers.hoursPerWeekPerPerson}
        onChange={(v) => setAnswer('hoursPerWeekPerPerson', v)}
        suffix={d('h/sem', 'h/week', 'óra/hét')}
      />

      <SliderQuestion
        label={d('Coût mensuel chargé moyen par employé ?', 'Average fully loaded monthly cost per employee?', 'Átlagos havi teljes munkaerőköltség fejenként?')}
        hint={d('Salaire brut × 1.45 environ. Pour un cadre PME : ~4500 €.', 'Gross salary × roughly 1.45. For a manager, around 4,500 €.', 'Bruttó bér × nagyjából 1,45. Egy vezetőnél körülbelül 4 500 €.')}
        min={2500}
        max={12000}
        step={100}
        value={answers.monthlySalaryCost}
        onChange={(v) => setAnswer('monthlySalaryCost', v)}
        suffix="€/mois"
      />

      <RadioQuestion
        label={d("Avez-vous déjà tenté d'automatiser quelque chose ?", 'Have you ever tried automating anything?')}
        value={answers.automationLevel}
        onChange={(v) => setAnswer('automationLevel', v)}
        options={[
          { value: 'none', label: d('Jamais, tout est manuel', 'Never, everything is manual', 'Soha, minden kézzel megy') },
          { value: 'some', label: d('Un peu (Zapier, Make, ChatGPT)', 'A little (Zapier, Make, ChatGPT)', 'Egy kicsit (Zapier, Make, ChatGPT)') },
          { value: 'lots', label: d("Beaucoup, c'est en place et ça tourne", 'A lot, it is in place and running') },
        ]}
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel={d('Acte 3 →', 'Act 3 →', '3. felvonás →')} />
    </div>
  )
}

function Act3({ answers, setAnswer, onNext, onPrev }: ActProps) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <div className="diag-q-card">
      <ActHeader
        title={d('Votre maturité IA', 'Your AI readiness', 'Az MI-érettsége')}
        desc={d("Où vous en êtes vraiment sur l'adoption.", 'Where you actually stand on adoption.')}
      />

      <RadioQuestion
        label={d('Utilisez-vous ChatGPT / Claude / Copilot au quotidien ?', 'Do you use ChatGPT / Claude / Copilot day to day?', 'Használ ChatGPT-t / Claude-ot / Copilotot nap mint nap?')}
        value={answers.aiUsage}
        onChange={(v) => setAnswer('aiUsage', v)}
        options={[
          { value: 'no', label: d('Non, pas du tout', 'No, not at all', 'Nem, egyáltalán nem') },
          { value: 'individual', label: d('Oui, individuellement (mes équipes ou moi)', 'Yes, individually (my teams or me)', 'Igen, egyénileg (a csapataim vagy én)') },
          { value: 'team', label: d('Oui, en équipe avec process partagés', 'Yes, as a team with shared processes', 'Igen, csapatban, közös folyamatokkal') },
        ]}
      />

      <RadioQuestion
        label={d('Vos process sont-ils documentés ?', 'Are your processes written down?', 'Le vannak írva a folyamatai?')}
        value={answers.processDocumented}
        onChange={(v) => setAnswer('processDocumented', v)}
        options={[
          { value: 'no', label: d("Non, c'est dans la tête des gens", 'No, it lives in people\u2019s heads') },
          { value: 'partial', label: d('Partiellement, sur certains sujets', 'Partly, on some subjects', 'Részben, bizonyos témákban') },
          { value: 'yes', label: d("Oui, c'est cartographié", 'Yes, it is mapped out') },
        ]}
      />

      <RadioQuestion
        label={d('Vos données sont-elles centralisées (une source de vérité) ?', 'Is your data centralised (one source of truth)?', 'Egy helyen vannak az adatai (egy igazságforrás)?')}
        value={answers.dataCentralized}
        onChange={(v) => setAnswer('dataCentralized', v)}
        options={[
          { value: 'no', label: d("Non, c'est éparpillé entre Excel, mails et outils", 'No, it is scattered across spreadsheets, email and tools') },
          { value: 'partial', label: d('Partiellement, ça dépend des sujets', 'Partly, it depends on the subject', 'Részben, témától függ') },
          { value: 'yes', label: d('Oui, on a un système unifié', 'Yes, we have one unified system', 'Igen, van egységes rendszerünk') },
        ]}
      />

      <RadioQuestion
        label={d('Vous sentez-vous en retard sur vos concurrents IA ?', 'Do you feel behind on AI?', 'Úgy érzi, le van maradva az MI terén?')}
        value={answers.aiLagFeeling}
        onChange={(v) => setAnswer('aiLagFeeling', v)}
        options={[
          { value: 'none', label: d('Pas du tout, on est en avance', 'Not at all, we are ahead', 'Egyáltalán nem, előrébb tartunk') },
          { value: 'a-bit', label: d('Un peu, mais ça va', 'A little, but it is fine', 'Egy kicsit, de rendben van') },
          { value: 'yes', label: d('Oui, clairement', 'Yes, clearly', 'Igen, egyértelműen') },
          { value: 'a-lot', label: d('Énormément, on est largués', 'Enormously, we are left behind', 'Nagyon, teljesen lemaradtunk') },
        ]}
      />

      <NavButtons onPrev={onPrev} onNext={onNext} nextLabel={d('Voir mon rapport →', 'See my report →', 'Kérem a riportomat →')} />
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
  const { lang } = useLang()
  const d = makeD(lang)
  /* Les montants et les heures suivent la convention locale d'écriture, le
     calcul lui-même est identique dans les deux langues. */
  const nf = lang === 'en' ? 'en-US' : 'fr-FR'
  const handlePrint = () => window.print()

  const tierLabel: Record<typeof result.maturityTier, string> = {
    critical: d('À mettre en route rapidement', 'Needs starting soon', 'Hamarosan el kell kezdeni'),
    lagging: d('Sous la moyenne du marché', 'Below the market average', 'A piaci átlag alatt'),
    average: d('Dans la moyenne', 'About average', 'Nagyjából átlagos'),
    ahead: d('En avance sur le marché', 'Ahead of the market', 'A piac előtt'),
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
        <span className="section-label">{d('Votre rapport', 'Your report', 'Az Ön riportja')}</span>
        <h1
          className="section-title"
          style={{ maxWidth: 640, margin: '20px auto 12px' }}
        >
          {d('Le Diagnostic IA', 'The AI Diagnostic', 'Az MI-diagnosztika')}
        </h1>
        <p
          className="font-sans"
          style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            fontWeight: 300,
          }}
        >
          {d('Généré le', 'Generated on', 'Készült')}{' '}
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
          label={d('€ gaspillés / mois', '€ wasted / month', 'elpazarolt € / hó')}
          value={`${result.saasWasteMonthly.toLocaleString(nf)} €`}
          sub={d(`soit ${result.saasWasteAnnual.toLocaleString(nf)} € / an`, `that is ${result.saasWasteAnnual.toLocaleString(nf)} € / year`)}
          accent="var(--accent)"
        />
        <KpiCard
          label={d('Heures perdues / mois', 'Hours lost / month', 'elvesztett óra / hó')}
          value={`${result.hoursLostMonthly.toLocaleString(nf)} h`}
          sub={d(`≈ ${result.hoursLostInETP} ETP perdu / an`, `≈ ${result.hoursLostInETP} full-time equivalent lost / year`)}
          accent="var(--accent)"
        />
        <KpiCard
          label={d('Score Maturité IA', 'AI readiness score', 'MI-érettségi pontszám')}
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
          {d('Ce que ça représente en vrai', 'What that actually means', 'Mit jelent ez valójában')}
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
            <strong>{result.saasWasteAnnual.toLocaleString(nf)} {d('€/an', '€/year', '€/év')}</strong>{' '}
            {d(
              'partent en abonnements SaaS qui n\u2019apportent rien ou en doublons.',
              'go on SaaS subscriptions that bring nothing, or that overlap.'
            , 'megy olyan SaaS-előfizetésekre, amelyek semmit nem hoznak, vagy átfedik egymást.')}
          </BulletPoint>
          <BulletPoint>
            <strong>{result.hoursLostAnnual.toLocaleString(nf)} {d('h/an', 'h/year', 'óra/év')}</strong>{' '}
            {d('perdues en tâches répétitives, soit environ', 'lost on repetitive tasks, which is roughly', 'vész el ismétlődő feladatokon, ami nagyjából')}{' '}
            <strong>{result.timeWasteAnnualEuros.toLocaleString(nf)} €</strong>{' '}
            {d('de salaire chargé non productif.', 'of loaded salary producing nothing.', 'terméketlen, járulékokkal terhelt bér.')}
          </BulletPoint>
          <BulletPoint>
            {d('Votre maturité IA est de', 'Your AI readiness is', 'Az MI-érettsége')}{' '}
            <strong>{result.aiMaturityScore}/100</strong>,{' '}
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
          {d('Vos', 'Your', 'Az Ön')} {result.topLevers.length} {d('leviers prioritaires', 'priority levers', 'kiemelt beavatkozási pontja')}
        </h3>

        <div style={{ display: 'grid', gap: 16 }}>
          {result.topLevers.map((lever) => (
            <LeverCard key={lever.rank} lever={lever} />
          ))}
        </div>
      </section>

      {/* CTA final, pas du pitch */}
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
          {d('Vous avez un rapport.', 'You have a report.', 'Megvan a riportja.')}{' '}
          <span style={{ color: 'var(--accent)' }}>
            {d('Si vous voulez en discuter, je vous offre un appel.', 'If you want to talk it through, the call is on me.', 'Ha át szeretné beszélni, a hívás az én számlámra megy.')}
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
          {d(
            'Pas de pitch, pas d\u2019envoi de devis automatique. Je réponds à vos questions, je vous montre ce qui se construit chez les autres clients NateSystem, et je vous laisse repartir.',
            'No pitch, no automatic quote landing in your inbox. I answer your questions, show you what is being built for other NateSystem clients, and let you go.'
          , 'Semmi értékesítési duma, semmi automatikusan kiküldött árajánlat. Válaszolok a kérdéseire, megmutatom, mi épül a többi NateSystem-ügyfélnél, aztán elengedem.')}
        </p>
        <div
          className="diag-no-print"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}
        >
          <Link
            href={localizedHref(CAL_LINK, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            style={{ fontSize: 14 }}
          >
            <span className="btn-primary-dot" />
            <Calendar size={14} />
            {d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')}
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
            {d('Télécharger en PDF', 'Download as PDF', 'Letöltés PDF-ben')}
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
          {d('Refaire le diagnostic', 'Run the diagnostic again', 'Diagnosztika újrakezdése')}
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
          {d(
            'Méthodologie : les chiffres sont calculés à partir de vos réponses, sur des bases sectorielles PME 2025-2026. Pour un diagnostic personnalisé approfondi, l\u2019audit gratuit NateSystem va beaucoup plus loin.',
            'Method: the figures are calculated from your answers, against sector baselines for small companies in 2025-2026. For a deeper, personalised diagnostic, the free NateSystem audit goes much further.'
          , 'Módszertan: a számokat az Ön válaszaiból számoljuk, a 2025-2026-os kkv-ágazati alapadatokkal összevetve. Mélyebb, személyre szabott diagnosztikáért a NateSystem ingyenes auditja sokkal messzebbre megy.')}
        </p>
      </footer>
    </article>
  )
}

function ReportDate() {
  // SSR-safe : on attend le mount client pour afficher la date (évite hydration mismatch)
  const { lang } = useLang()
  const [dateStr, setDateStr] = useState<string>('—')
  useMemo(() => {
    if (typeof window === 'undefined') return
    const d = new Date()
    setDateStr(
      d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', {
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
  const { lang } = useLang()
  const d = makeD(lang)
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
            {d('Gain estimé', 'Estimated gain', 'Becsült nyereség')}
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
            {d('Effort', 'Effort', 'Ráfordítás')}
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
