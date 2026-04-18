'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

const QUESTIONS = [
  {
    en: 'How many different software tools does your team use daily?',
    fr: 'Combien d\'outils logiciels différents votre équipe utilise-t-elle au quotidien ?',
    hu: 'Hány különböző szoftveres eszközt használ a csapata naponta?',
    options: [
      { en: '1-3 tools', fr: '1-3 outils', hu: '1–3 eszköz', score: 1 },
      { en: '4-6 tools', fr: '4-6 outils', hu: '4–6 eszköz', score: 2 },
      { en: '7-10 tools', fr: '7-10 outils', hu: '7–10 eszköz', score: 3 },
      { en: '10+ tools', fr: '10+ outils', hu: '10+ eszköz', score: 4 },
    ],
  },
  {
    en: 'How much time per week does your team spend on manual data entry or copy-paste between tools?',
    fr: 'Combien de temps par semaine votre équipe passe-t-elle à saisir manuellement ou copier-coller entre outils ?',
    hu: 'Hány órát tölt a csapata hetente kézi adatbevitellel vagy másolás-beillesztéssel az eszközök között?',
    options: [
      { en: 'Less than 1 hour', fr: 'Moins d\'1 heure', hu: 'Kevesebb mint 1 óra', score: 1 },
      { en: '1-5 hours', fr: '1-5 heures', hu: '1–5 óra', score: 2 },
      { en: '5-10 hours', fr: '5-10 heures', hu: '5–10 óra', score: 3 },
      { en: '10+ hours', fr: '10+ heures', hu: '10+ óra', score: 4 },
    ],
  },
  {
    en: 'Is your business knowledge documented or stored in people\'s heads?',
    fr: 'Vos connaissances métier sont-elles documentées ou stockées dans la tête des gens ?',
    hu: 'A szakmai tudása dokumentált vagy az emberek fejében él?',
    options: [
      { en: 'Fully documented', fr: 'Entièrement documentées', hu: 'Teljesen dokumentált', score: 1 },
      { en: 'Mostly documented', fr: 'Majoritairement documentées', hu: 'Nagyrészt dokumentált', score: 2 },
      { en: 'Partially documented', fr: 'Partiellement documentées', hu: 'Részben dokumentált', score: 3 },
      { en: 'Mostly in people\'s heads', fr: 'Surtout dans les têtes', hu: 'Főleg az emberek fejében', score: 4 },
    ],
  },
  {
    en: 'How do you currently handle reporting and dashboards?',
    fr: 'Comment gérez-vous actuellement le reporting et les tableaux de bord ?',
    hu: 'Hogyan kezeli jelenleg a riportokat és az irányítópultokat?',
    options: [
      { en: 'Automated real-time dashboards', fr: 'Dashboards automatisés en temps réel', hu: 'Automatizált valós idejű irányítópultok', score: 1 },
      { en: 'Regular reports (weekly/monthly)', fr: 'Rapports réguliers (hebdo/mensuels)', hu: 'Rendszeres riportok (heti/havi)', score: 2 },
      { en: 'Ad-hoc spreadsheets', fr: 'Tableurs ad-hoc', hu: 'Eseti táblázatok', score: 3 },
      { en: 'No formal reporting', fr: 'Pas de reporting formel', hu: 'Nincs formális riportálás', score: 4 },
    ],
  },
  {
    en: 'What happens when a key team member is absent?',
    fr: 'Que se passe-t-il quand un membre clé de l\'équipe est absent ?',
    hu: 'Mi történik, ha egy kulcsfontosságú csapattag távol van?',
    options: [
      { en: 'No impact — processes are documented', fr: 'Aucun impact — les processus sont documentés', hu: 'Nincs hatás — a folyamatok dokumentáltak', score: 1 },
      { en: 'Minor delays', fr: 'Retards mineurs', hu: 'Kisebb csúszások', score: 2 },
      { en: 'Significant slowdown', fr: 'Ralentissement significatif', hu: 'Jelentős lassulás', score: 3 },
      { en: 'Critical processes stop', fr: 'Les processus critiques s\'arrêtent', hu: 'A kritikus folyamatok leállnak', score: 4 },
    ],
  },
]

function getScoreTier(score: number): { en: string; fr: string; hu: string; color: string } {
  if (score <= 8) return { en: 'Early Stage — AI can help, but foundations come first', fr: 'Stade initial — L\'IA peut aider, mais les fondations d\'abord', hu: 'Kezdeti szakasz — Az MI segíthet, de előbb az alapok', color: '#5cb85c' }
  if (score <= 14) return { en: 'Ready to Automate — High potential for immediate ROI', fr: 'Prêt à automatiser — Potentiel élevé de ROI immédiat', hu: 'Automatizálásra kész — Nagy potenciál azonnali megtérülésre', color: 'var(--accent)' }
  return { en: 'Urgent — You\'re losing significant time and money', fr: 'Urgent — Vous perdez un temps et un argent considérables', hu: 'Sürgős — Jelentős időt és pénzt veszít', color: '#c0392b' }
}

export default function AiReadinessPage() {
  const { lang, t } = useLang()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
    }
  }

  const totalScore = answers.reduce((a, b) => a + b, 0)
  const tier = getScoreTier(totalScore)
  const q = QUESTIONS[current]

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">🧠 {t('tools.interactive')}</span>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              {t('quiz.title')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('quiz.sub')}
            </p>
          </FadeUp>

          {!showResult ? (
            <FadeUp>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    {current + 1} / {QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full" style={{ background: 'var(--border)' }}>
                  <div
                    className="h-1 rounded-full transition-all duration-500"
                    style={{ width: `${((current + 1) / QUESTIONS.length) * 100}%`, background: 'var(--accent)' }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="font-serif italic mb-8" style={{ fontSize: '24px', color: 'var(--text)', lineHeight: 1.3 }}>
                {q[lang]}
              </h2>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.score)}
                    className="text-left px-6 py-4 rounded-xl transition-all duration-300 font-sans"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontSize: '15px',
                      fontWeight: 400,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.background = 'var(--bg-elevated)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'var(--bg-card)'
                    }}
                  >
                    {opt[lang]}
                  </button>
                ))}
              </div>
            </FadeUp>
          ) : (
            <FadeUp>
              <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.2)', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
                <p className="font-mono mb-4" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {t('quiz.result.title')}
                </p>
                <p className="font-serif italic mb-4" style={{ fontSize: '72px', color: 'var(--accent)' }}>
                  {totalScore}/{QUESTIONS.length * 4}
                </p>
                <p className="font-sans mb-8" style={{ fontSize: '18px', color: tier.color, fontWeight: 500 }}>
                  {tier[lang]}
                </p>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                  <span className="btn-primary-dot" />
                  {t('quiz.result.cta')} →
                </a>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}
