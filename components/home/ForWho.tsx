'use client'

import FadeUp from '@/components/ui/FadeUp'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M4 9.5L7.5 13L14 5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M5 5L13 13M13 5L5 13" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const forYou = [
  'Vous avez une équipe de 5 à 100 personnes',
  'Vos outils ne se parlent pas entre eux',
  'Vous perdez du temps sur des tâches répétitives',
  'Vous voulez scaler sans recruter proportionnellement',
]

const notForYou = [
  'Vous cherchez un freelance pour une mission ponctuelle',
  "Vous n'avez pas de process en place du tout",
  "Vous attendez des résultats sans implication de votre équipe",
  'Votre budget total est inférieur à 5 000€',
]

export default function ForWho() {
  return (
    <section id="for-who" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">POUR QUI</span>
          <h2
            className="section-title"
            style={{ maxWidth: 700, margin: '0 auto 24px' }}
          >
            {"Est-ce que c'est "}
            <span className="accent">pour vous ?</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Positive column */}
          <FadeUp delay={0}>
            <div
              className="p-6 md:py-10 md:px-8"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                height: '100%',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckIcon />
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {"C'est pour vous si..."}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {forYou.map((item) => (
                  <li
                    key={item}
                    className="font-sans flex items-start gap-3"
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--text)',
                      lineHeight: 1.7,
                      marginBottom: 14,
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Negative column */}
          <FadeUp delay={0.12}>
            <div
              className="p-6 md:py-10 md:px-8"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                height: '100%',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <XIcon />
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}
                >
                  {"Ce n'est pas pour vous si..."}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {notForYou.map((item) => (
                  <li
                    key={item}
                    className="font-sans flex items-start gap-3"
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--text)',
                      lineHeight: 1.7,
                      marginBottom: 14,
                    }}
                  >
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
