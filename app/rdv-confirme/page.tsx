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
        'Et comment, concrètement. À la fin, on se dit franchement si on continue ou non.',
        'And how, in practice. At the end, we tell each other plainly whether we go on or not.',
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
                'Vous repartez de cet appel avec les deux ou trois endroits où votre organisation vous coûte le plus de temps, que l’on travaille ensemble ou non.',
                'You leave this call knowing the two or three places where your organisation costs you the most time, whether we work together or not.',
              )}
            </p>
            <p className="font-sans" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, maxWidth: 560, margin: '14px auto 0' }}>
              {VIDEO_EMBED_URL
                ? d(
                    'L’invitation est dans votre boîte mail : acceptez-la pour l’avoir dans votre agenda. En attendant, la vidéo ci-dessous vous montre comment se passe l’appel.',
                    'The invitation is in your inbox: accept it to have it in your calendar. Meanwhile, the video below shows how the call goes.',
                  )
                : d(
                    'L’invitation est dans votre boîte mail : acceptez-la, elle s’ajoute à votre agenda avec le lien Google Meet.',
                    'The invitation is in your inbox: accept it, and it goes into your calendar with the Google Meet link.',
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
                  'La tâche qui vous prend le plus de temps chaque semaine, et combien d’heures elle vous prend. Si vous décidez à deux, invitez votre associé.',
                  'The task that takes you the most time every week, and how many hours it takes. If you decide with a partner, bring them along.',
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
        @media (max-width: 760px) {
          .rdv-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
