'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, RotateCcw, Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import { CAL_DIRECT_URL } from '@/lib/constants'
import {
  PILLARS,
  CHOICES,
  FLAT_QUESTIONS,
  TOTAL_QUESTIONS,
  EMPTY_ANSWERS,
  computeResult,
  type Answers,
  type Choice,
  type Level,
} from './scoring'

type Stage = 'intro' | 'quiz' | 'result'

const LEVEL_COLOR: Record<Level, string> = {
  red: '#E63946',
  orange: '#E8933A',
  green: '#2FA96A',
}

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export default function PretPourLiaPage() {
  const [stage, setStage] = useState<Stage>('intro')
  const [step, setStep] = useState(0) // 0..11
  const [answers, setAnswers] = useState<Answers>([...EMPTY_ANSWERS])

  const result = useMemo(() => computeResult(answers), [answers])

  const start = () => {
    setStage('quiz')
    setStep(0)
    scrollTop()
  }

  const reset = () => {
    setAnswers([...EMPTY_ANSWERS])
    setStep(0)
    setStage('intro')
    scrollTop()
  }

  const answer = (value: Choice) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[step] = value
      return next
    })
    // Petit délai pour laisser voir la sélection, puis on avance.
    window.setTimeout(() => {
      if (step < TOTAL_QUESTIONS - 1) {
        setStep((s) => s + 1)
      } else {
        setStage('result')
        scrollTop()
      }
    }, 220)
  }

  const goPrev = () => {
    if (step > 0) setStep((s) => s - 1)
    else setStage('intro')
  }

  return (
    <main>
      <Nav />

      <section style={{ padding: '150px 24px 90px', minHeight: '70vh' }}>
        <div className="mx-auto" style={{ maxWidth: stage === 'result' ? 860 : 720 }}>
          {stage === 'intro' && <Intro onStart={start} />}
          {stage === 'quiz' && (
            <Quiz step={step} answers={answers} onAnswer={answer} onPrev={goPrev} />
          )}
          {stage === 'result' && <Result result={result} onReset={reset} />}
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />
    </main>
  )
}

/* ─────────────────────────── Intro ─────────────────────────── */

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center q-fade">
      <span className="section-label">Diagnostic IA · 2 min · gratuit</span>
      <h1
        className="font-serif italic"
        style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 640, margin: '14px auto 22px' }}
      >
        Votre entreprise est-elle <span className="accent" style={{ color: 'var(--accent)' }}>prête pour l’IA&nbsp;?</span>
      </h1>
      <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 580, margin: '0 auto 14px', lineHeight: 1.65 }}>
        La plupart des entreprises ne sont pas bloquées par l’IA, mais par ce qu’il y a en dessous. En 12 questions honnêtes,
        voyez où vous en êtes vraiment, et par quoi commencer.
      </p>
      <p className="font-mono" style={{ fontSize: 12, letterSpacing: 0.4, color: 'var(--text-muted)', marginBottom: 34 }}>
        12 questions · ~2 minutes · sans inscription
      </p>

      <div className="q-pillars">
        {PILLARS.map((p) => (
          <div key={p.id} className="q-pillar-chip">
            <span className="font-mono q-pillar-num">0{p.num}</span>
            <span className="font-sans">{p.name}</span>
          </div>
        ))}
      </div>

      <button type="button" className="btn-primary" style={{ margin: '32px auto 0', fontSize: 14 }} onClick={onStart}>
        <span className="btn-primary-dot" />Commencer le test &rarr;
      </button>
      <p className="font-sans" style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 16, fontWeight: 300 }}>
        Répondez franchement : le test ne sert à rien si vous vous mentez à vous-même.
      </p>

      <style jsx>{`
        .q-pillars { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 8px; }
        .q-pillar-chip {
          display: inline-flex; align-items: center; gap: 9px; padding: 10px 16px; border-radius: 999px;
          border: 1px solid var(--border); background: var(--bg-card); font-size: 13.5px; color: var(--text); font-weight: 400;
        }
        .q-pillar-num { font-size: 10.5px; letter-spacing: 1px; color: var(--accent); font-weight: 600; }
        @media (max-width: 520px) {
          .q-pillars { flex-direction: column; align-items: stretch; max-width: 300px; margin: 8px auto 0; }
          .q-pillar-chip { justify-content: center; }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────────────── Quiz ─────────────────────────── */

function Quiz({
  step,
  answers,
  onAnswer,
  onPrev,
}: {
  step: number
  answers: Answers
  onAnswer: (v: Choice) => void
  onPrev: () => void
}) {
  const q = FLAT_QUESTIONS[step]
  const current = answers[step]
  const progress = ((step + 1) / TOTAL_QUESTIONS) * 100

  return (
    <div key={step} className="q-fade">
      {/* Progress */}
      <div className="q-progress-head">
        <span className="font-mono q-pillar-label" style={{ color: 'var(--accent)' }}>
          Pilier 0{q.pillar.num} · {q.pillar.name}
        </span>
        <span className="font-mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          {step + 1} / {TOTAL_QUESTIONS}
        </span>
      </div>
      <div className="q-bar" aria-hidden="true">
        <div className="q-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="font-serif italic q-question">{q.text}</h2>

      <div className="q-choices">
        {CHOICES.map((c) => {
          const on = current === c.value
          return (
            <button
              key={c.value}
              type="button"
              className={`q-choice${on ? ' q-choice-on' : ''}`}
              onClick={() => onAnswer(c.value)}
            >
              <span className="q-choice-radio" aria-hidden="true">{on && <Check size={14} strokeWidth={3} />}</span>
              <span className="font-sans">{c.label}</span>
            </button>
          )
        })}
      </div>

      <button type="button" className="q-back font-mono" onClick={onPrev}>
        <ArrowLeft size={14} strokeWidth={2} /> Précédent
      </button>

      <style jsx>{`
        .q-progress-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .q-pillar-label { font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; font-weight: 600; }
        .q-bar { height: 4px; border-radius: 4px; background: var(--border); overflow: hidden; margin-bottom: 40px; }
        .q-bar-fill { height: 100%; background: var(--accent); border-radius: 4px; transition: width 0.35s cubic-bezier(0.22,1,0.36,1); }
        .q-question { font-size: clamp(23px, 3.6vw, 33px); font-weight: 400; color: var(--text); line-height: 1.25; margin: 0 0 34px; }
        .q-choices { display: flex; flex-direction: column; gap: 13px; }
        .q-choice {
          display: flex; align-items: center; gap: 15px; width: 100%; text-align: left;
          padding: 19px 22px; border-radius: 14px; border: 1px solid var(--border); background: var(--bg-card);
          font-size: 16px; color: var(--text); cursor: pointer;
          transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
        }
        .q-choice:hover { border-color: rgba(230,57,70,0.4); transform: translateX(3px); }
        .q-choice-on { border-color: var(--accent); background: var(--accent-subtle); }
        .q-choice-radio {
          flex: none; width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid var(--border-hover);
          display: inline-flex; align-items: center; justify-content: center; color: #fff;
          transition: background 0.18s ease, border-color 0.18s ease;
        }
        .q-choice-on .q-choice-radio { background: var(--accent); border-color: var(--accent); }
        .q-back {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 30px;
          font-size: 12.5px; letter-spacing: 0.4px; color: var(--text-muted); background: none; border: none;
          cursor: pointer; padding: 6px 0; transition: color 0.18s ease;
        }
        .q-back:hover { color: var(--text); }
      `}</style>
    </div>
  )
}

/* ─────────────────────────── Result ─────────────────────────── */

function Result({
  result,
  onReset,
}: {
  result: ReturnType<typeof computeResult>
  onReset: () => void
}) {
  const { pillars, total, verdict, weakest } = result
  const vColor = LEVEL_COLOR[verdict.level]

  return (
    <div className="q-fade">
      <div className="text-center">
        <span className="section-label">Votre résultat</span>
        <div className="q-total font-mono" style={{ color: 'var(--text-muted)' }}>
          Score global · <strong style={{ color: 'var(--text)' }}>{total}</strong> / 24
        </div>
      </div>

      {/* 3 jauges */}
      <div className="q-gauges">
        {pillars.map((p) => (
          <Gauge key={p.pillar.id} name={p.pillar.name} score={p.score} level={p.level} />
        ))}
      </div>

      {/* Verdict */}
      <div className="q-verdict" style={{ borderColor: hexA(vColor, 0.32), background: hexA(vColor, 0.06) }}>
        <span className="q-verdict-badge font-mono" style={{ background: vColor }}>
          {verdict.level === 'red' ? 'À consolider d’abord' : verdict.level === 'orange' ? 'Bonne base' : 'Prêt'}
        </span>
        <h2 className="font-serif italic q-verdict-headline">{verdict.headline}</h2>
      </div>

      {/* Reco personnalisée */}
      <div className="q-reco">
        <span className="font-mono q-reco-eyebrow">Votre priorité · Pilier 0{weakest.num}</span>
        <h3 className="font-serif italic q-reco-title">{weakest.recoTitle}</h3>
        <p className="font-sans q-reco-body">{weakest.recoBody}</p>
        <div className="q-firststep">
          <span className="font-mono q-firststep-label">Votre premier pas</span>
          <p className="font-sans q-firststep-body">{weakest.firstStep}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="q-cta">
        <h3 className="font-serif italic q-cta-title">
          On regarde votre diagnostic ensemble&nbsp;?
        </h3>
        <p className="font-sans q-cta-sub">
          Recevez votre diagnostic complet et 15 min avec moi pour en parler. On voit concrètement par où commencer, sans
          engagement. Même si on ne travaille pas ensemble.
        </p>
        <a href={CAL_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
          <span className="btn-primary-dot" />Réserver mes 15 min &rarr;
        </a>

        <EmailCapture result={result} />
      </div>

      <div className="text-center">
        <button type="button" className="q-reset font-mono" onClick={onReset}>
          <RotateCcw size={13} strokeWidth={2} /> Refaire le test
        </button>
      </div>

      <p className="text-center font-sans" style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 26, fontWeight: 300 }}>
        Envie d’un outil taillé pour votre métier ?{' '}
        <Link href="/outils" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Voir tous nos outils gratuits</Link>
      </p>

      <style jsx>{`
        .q-total { font-size: 13px; letter-spacing: 0.6px; margin-top: 8px; }
        .q-total strong { font-weight: 600; font-size: 15px; }
        .q-gauges { display: flex; justify-content: center; gap: 18px; flex-wrap: wrap; margin: 34px 0 40px; }
        .q-verdict { border: 1px solid; border-radius: 16px; padding: 30px 30px 32px; text-align: center; margin-bottom: 26px; }
        .q-verdict-badge {
          display: inline-block; font-size: 10px; letter-spacing: 1.6px; text-transform: uppercase; font-weight: 600;
          color: #fff; padding: 5px 12px; border-radius: 999px; margin-bottom: 14px;
        }
        .q-verdict-headline { font-size: clamp(22px, 3.4vw, 31px); font-weight: 400; color: var(--text); line-height: 1.25; margin: 0; max-width: 620px; margin: 0 auto; }
        .q-reco { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 32px 30px; margin-bottom: 26px; }
        .q-reco-eyebrow { display: block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 12px; }
        .q-reco-title { font-size: clamp(21px, 3vw, 27px); font-weight: 400; color: var(--text); line-height: 1.2; margin: 0 0 14px; }
        .q-reco-body { font-size: 15px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; margin: 0 0 22px; }
        .q-firststep { border-left: 2px solid var(--accent); padding: 2px 0 2px 18px; }
        .q-firststep-label { display: block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 8px; }
        .q-firststep-body { font-size: 14.5px; font-weight: 300; color: var(--text); line-height: 1.65; margin: 0; }
        .q-cta { background: var(--bg-card); border: 1px solid rgba(230,57,70,0.15); border-radius: 16px; padding: 40px 34px; text-align: center; margin-bottom: 30px; }
        .q-cta-title { font-size: clamp(22px, 3.4vw, 29px); font-weight: 400; color: var(--text); line-height: 1.2; margin: 0 0 14px; }
        .q-cta-sub { font-size: 14.5px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; max-width: 520px; margin: 0 auto 26px; }
        .q-reset {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 4px;
          font-size: 12px; letter-spacing: 0.4px; color: var(--text-muted); background: none; border: none;
          cursor: pointer; padding: 8px 0; transition: color 0.18s ease;
        }
        .q-reset:hover { color: var(--text); }
      `}</style>
    </div>
  )
}

/* Jauge circulaire hand-rolled SVG (charte : jamais de lib de charts). */
function Gauge({ name, score, level }: { name: string; score: number; level: Level }) {
  const color = LEVEL_COLOR[level]
  const r = 46
  const c = 2 * Math.PI * r
  const frac = score / 8
  const dash = c * frac

  return (
    <div className="g-wrap">
      <svg width="120" height="120" viewBox="0 0 120 120" className="g-svg">
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="9" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dasharray 0.7s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <text x="60" y="57" textAnchor="middle" className="g-score" style={{ fill: 'var(--text)' }}>{score}</text>
        <text x="60" y="76" textAnchor="middle" className="g-max" style={{ fill: 'var(--text-muted)' }}>/ 8</text>
      </svg>
      <span className="font-sans g-name">{name}</span>
      <span className="font-mono g-level" style={{ color }}>
        {level === 'red' ? 'À renforcer' : level === 'orange' ? 'À consolider' : 'Solide'}
      </span>

      <style jsx>{`
        .g-wrap { display: flex; flex-direction: column; align-items: center; width: 148px; }
        .g-svg { display: block; }
        .g-score { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 30px; }
        .g-max { font-family: 'JetBrains Mono', monospace; font-size: 11px; }
        .g-name { font-size: 13.5px; font-weight: 500; color: var(--text); text-align: center; margin-top: 8px; line-height: 1.25; }
        .g-level { font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 600; margin-top: 4px; }
      `}</style>
    </div>
  )
}

/* Champ email OPTIONNEL, pas un mur : le score s'affiche sans lui. */
function EmailCapture({ result }: { result: ReturnType<typeof computeResult> }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/.+@.+\..+/.test(email) || state === 'sending') return
    setState('sending')
    try {
      const res = await fetch('/api/quiz-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          total: result.total,
          verdict: result.verdict.level,
          pillars: result.pillars.map((p) => ({ name: p.pillar.name, score: p.score, level: p.level })),
          weakest: result.weakest.name,
        }),
      })
      setState(res.ok ? 'sent' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', marginTop: 22, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', fontWeight: 300 }}>
        <Check size={15} strokeWidth={2.4} style={{ color: LEVEL_COLOR.green }} /> C’est noté, vous recevrez votre résultat par mail.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="q-email">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Recevoir le résultat par mail (optionnel)"
        aria-label="Votre e-mail (optionnel)"
        className="font-sans q-email-input"
      />
      <button type="submit" className="q-email-btn font-mono" disabled={state === 'sending'}>
        {state === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>

      <style jsx>{`
        .q-email { display: flex; gap: 8px; max-width: 440px; margin: 22px auto 0; }
        .q-email-input {
          flex: 1; padding: 12px 16px; border-radius: 11px; border: 1px solid var(--border);
          background: var(--bg-elevated); color: var(--text); font-size: 13.5px; outline: none;
          transition: border-color 0.18s ease;
        }
        .q-email-input:focus { border-color: var(--accent); }
        .q-email-input::placeholder { color: var(--text-muted); }
        .q-email-btn {
          flex: none; padding: 12px 18px; border-radius: 11px; border: 1px solid var(--border);
          background: var(--bg-elevated); color: var(--text); font-size: 12px; letter-spacing: 0.4px;
          cursor: pointer; transition: border-color 0.18s ease, color 0.18s ease;
        }
        .q-email-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .q-email-btn:disabled { opacity: 0.6; cursor: default; }
        @media (max-width: 460px) { .q-email { flex-direction: column; } }
      `}</style>
    </form>
  )
}

/* util : hex + alpha → rgba() */
function hexA(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
