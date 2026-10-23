'use client'

import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA PAGE APRÈS LA RÉSERVATION.
 *
 * Méthode Matis Clouet (call du 20/10/2026) : une page de confirmation avec une
 * vidéo de moins de 5 minutes qui explique comment se passe l'appel et fait
 * tomber les objections, renvoyée aussi sur WhatsApp dans les 60 secondes.
 *
 * Le prénom vient de l'URL quand l'outil de réservation le transmet
 * (Calendly : `invitee_first_name`, ou `prenom` à la main). Sans prénom, la
 * page reste correcte.
 */

/* La vidéo : coller ici l'URL d'intégration YouTube (https://www.youtube.com/embed/…)
   ou Supercut. Tant qu'elle est vide, l'emplacement n'apparaît qu'en local. */
const VIDEO_EMBED_URL = ''

export default function RdvConfirmePage() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const name = p.get('invitee_first_name') || p.get('prenom') || p.get('first_name') || ''
    setFirstName(name.trim().slice(0, 40))
  }, [])

  const showVideoSlot = VIDEO_EMBED_URL !== '' || process.env.NODE_ENV !== 'production'

  const steps = [
    {
      n: '01',
      t: d('Je vous écoute', 'I listen', 'Meghallgatom'),
      s: d(
        'Comment arrivent vos demandes, qui fait quoi dans l’équipe, ce qui passe encore par vous.',
        'How your requests come in, who does what in your team, what still goes through you.',
      ),
    },
    {
      n: '02',
      t: d('On regarde ce que ça vous coûte', 'We look at what it costs you', 'Megnézzük, mibe kerül'),
      s: d(
        'Le temps, les demandes qui attendent, ce qui vous empêche de prendre plus de clients.',
        'The time, the requests left waiting, what stops you from taking on more clients.',
      ),
    },
    {
      n: '03',
      t: d('Je vous dis si je peux aider', 'I tell you if I can help', 'Megmondom, tudok-e segíteni'),
      s: d(
        'Et comment, concrètement. Si ce n’est pas le cas, je vous le dis aussi.',
        'And how, in practice. If I can’t, I’ll tell you that too.',
      ),
    },
  ]

  const faq = [
    {
      q: d('Nous avons déjà un outil.', 'We already have a tool.'),
      a: d(
        'Très bien. On part de ce qui marche chez vous, et on construit seulement ce que votre outil ne fait pas.',
        'Good. We start from what already works for you, and only build what your tool doesn’t do.',
      ),
    },
    {
      q: d(
        'Nous avons déjà essayé un logiciel sur mesure, et ça s’est mal passé.',
        'We already tried custom software, and it went badly.',
      ),
      a: d(
        'Le code et les données sont à vous dès le premier jour, dans des comptes à votre nom. Si je disparais demain, un autre développeur reprend le lendemain.',
        'The code and the data are yours from day one, in accounts in your name. If I disappeared tomorrow, another developer could take over the next day.',
      ),
    },
    {
      q: d('C’est la saison, je n’ai pas le temps.', 'It’s high season, I don’t have time.'),
      a: d(
        'On démarre petit, sur ce qui vous soulage tout de suite, et on avance au rythme de votre saison.',
        'We start small, with what takes weight off you right away, and move at the pace of your season.',
      ),
    },
    {
      q: d('Combien ça coûte ?', 'How much does it cost?'),
      a: d(
        'Ça dépend de ce qu’on construit. Si l’appel montre que je peux vous aider, on en parle à la fin, clairement.',
        'It depends on what we build. If the call shows I can help, we talk about it at the end, plainly.',
      ),
    },
    {
      q: d('Est-ce que ça remplace le contact humain ?', 'Does it replace the human touch?'),
      a: d(
        'Non. Vous et votre équipe restez les interlocuteurs de vos clients. L’outil enlève l’administratif, pour vous laisser plus de temps avec eux.',
        'No. You and your team stay the people your clients talk to. The tool takes the admin away, so you have more time with them.',
      ),
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 32px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 760 }}>
          <FadeUp>
            <span className="section-label">{d('Appel confirmé', 'Call confirmed', 'Hívás visszaigazolva')}</span>
            <h1
              className="font-serif italic"
              style={{ fontSize: 'clamp(32px, 5.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', margin: '14px auto 0', maxWidth: 680 }}
            >
              {firstName
                ? d(`Merci ${firstName}, c’est noté.`, `Thank you ${firstName}, you’re booked.`)
                : d('Merci, c’est noté.', 'Thank you, you’re booked.')}{' '}
              <span className="accent" style={{ color: 'var(--accent)' }}>
                {d('À très vite sur Google Meet.', 'Talk soon on Google Meet.')}
              </span>
            </h1>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, maxWidth: 560, margin: '20px auto 0' }}>
              {d(
                'Vous avez reçu l’invitation par email. Prenez quelques minutes pour regarder la vidéo : vous saurez exactement comment va se passer notre échange.',
                'The invitation is in your inbox. Take a few minutes to watch the video: you’ll know exactly how our conversation will go.',
              )}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* La vidéo */}
      {showVideoSlot && (
        <section style={{ padding: '24px 24px 64px' }}>
          <div className="mx-auto" style={{ maxWidth: 820 }}>
            <FadeUp delay={0.1}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                }}
              >
                {VIDEO_EMBED_URL ? (
                  <iframe
                    src={VIDEO_EMBED_URL}
                    title={d('Comment va se passer notre appel', 'How our call will go')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                      Vidéo à venir · emplacement visible en local seulement
                    </p>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      <Divider />

      {/* Comment se passe l'appel */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Pendant l’appel', 'During the call', 'A hívás során')}</span>
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Pas de démo. ', 'No demo. ')}
              <span className="accent">{d('Une vraie conversation.', 'A real conversation.')}</span>
            </h2>
          </FadeUp>
          <div className="rdv-grid">
            {steps.map((s) => (
              <div key={s.n} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 24px 26px' }}>
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, color: 'var(--accent)', fontWeight: 600, margin: '0 0 10px' }}>{s.n}</p>
                <p className="font-serif italic" style={{ fontSize: 22, color: 'var(--text)', margin: '0 0 8px', lineHeight: 1.2 }}>{s.t}</p>
                <p className="font-sans" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{s.s}</p>
              </div>
            ))}
          </div>

          {/* La seule chose à préparer */}
          <FadeUp delay={0.1}>
            <div style={{ marginTop: 28, background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.18)', borderRadius: 12, padding: '26px 28px' }}>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, margin: '0 0 10px' }}>
                {d('La seule chose à préparer', 'The one thing to prepare')}
              </p>
              <p className="font-sans" style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                {d(
                  'La tâche qui vous prend le plus de temps chaque semaine.',
                  'The task that takes you the most time every week.',
                )}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Preuve + pour qui */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce qu’en disent nos clients', 'What our clients report', 'Amit ügyfeleink mondanak')}</span>
          </FadeUp>
          <FadeUp>
            <p
              className="font-serif italic text-center"
              style={{ fontSize: 'clamp(20px, 3vw, 26px)', color: 'var(--text)', lineHeight: 1.45, maxWidth: 760, margin: '0 auto' }}
            >
              {d(
                'Une conciergerie de luxe que nous accompagnons (sous NDA) a récupéré 30 h par mois, avec une nette amélioration de l’expérience client. L’Institut des Chartreux, Hospitality Management, et d’autres structures que nous accompagnons, rapportent gagner 40 h par mois.',
                'A luxury concierge business we work with (under NDA) got 30 hours a month back, with a clear improvement in guest experience. Institut des Chartreux, Hospitality Management, and other organisations we support, report 40 hours a month given back to their teams.',
              )}
            </p>
          </FadeUp>

          <div className="rdv-fit">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px' }}>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, margin: '0 0 10px' }}>
                {d('C’est pour vous si', 'This is for you if')}
              </p>
              <p className="font-sans" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                {d(
                  'Votre structure grandit, la demande est là, mais tout passe encore par vous : WhatsApp, emails, Excel, prestataires à relancer.',
                  'Your business is growing, the demand is there, but everything still goes through you: WhatsApp, emails, spreadsheets, suppliers to chase.',
                )}
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px 26px' }}>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, margin: '0 0 10px' }}>
                {d('Ce n’est pas pour vous si', 'It’s not for you if')}
              </p>
              <p className="font-sans" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                {d(
                  'Un logiciel standard vous convient parfaitement. Dans ce cas, gardez-le, je vous le dirai pendant l’appel.',
                  'A standard software suits you perfectly. In that case, keep it, and I’ll tell you so on the call.',
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Les questions qu’on me pose', 'The questions I get asked', 'A gyakori kérdések')}</span>
          </FadeUp>
          <div style={{ display: 'grid', gap: 12 }}>
            {faq.map((f) => (
              <details key={f.q} className="rdv-faq" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 22px' }}>
                <summary className="font-sans" style={{ fontSize: 15.5, color: 'var(--text)', cursor: 'pointer', fontWeight: 500, listStyle: 'none' }}>{f.q}</summary>
                <p className="font-sans" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: '12px 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Un empêchement */}
      <section style={{ padding: '64px 24px 96px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 620 }}>
          <FadeUp>
            <p className="font-serif italic" style={{ fontSize: 'clamp(22px, 3.4vw, 28px)', color: 'var(--text)', margin: '0 0 12px' }}>
              {d('Un empêchement ?', 'Something came up?')}
            </p>
            <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: '0 0 24px' }}>
              {d(
                'Décalez le rendez-vous depuis l’email de confirmation, ou écrivez-moi directement. Je préfère un autre créneau à un appel manqué.',
                'Reschedule from the confirmation email, or write to me directly. I’d rather find another slot than miss each other.',
              )}
            </p>
            <a href="mailto:nathan@natesystem.com" className="btn-primary" style={{ margin: '0 auto', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              <Mail size={15} strokeWidth={1.8} />
              nathan@natesystem.com
            </a>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />

      <style jsx>{`
        .rdv-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .rdv-fit {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
        }
        .rdv-faq summary::-webkit-details-marker {
          display: none;
        }
        @media (max-width: 760px) {
          .rdv-grid,
          .rdv-fit {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
