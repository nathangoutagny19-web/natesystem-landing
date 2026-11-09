'use client'

import Image from 'next/image'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE FONDATEUR, PUIS L'APPEL FINAL (accueil, refonte du 9 novembre 2026).
 * L'agenda Calendly (CtaFinal, #rendez-vous) se pose juste dessous : c'est
 * là que mène le bouton « Réserver un appel » du menu.
 *
 * L'hébergement « en Europe ou aux États-Unis, selon où vous êtes » est une
 * décision de Nathan du 21/10/2026 (mémoire project-hosting-follows-client) :
 * l'Europe reste la règle pour les clients européens.
 */
export default function Fondateur() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="fondateur" className="lx-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="lx-wrap fd-grid">
        <FadeUp>
          <div className="fd-photo">
            <Image src="/nathan.png" alt={d('Nathan Goutagny, fondateur de NateSystem', 'Nathan Goutagny, founder of NateSystem', 'Nathan Goutagny, a NateSystem alapítója')} fill sizes="(max-width: 860px) 70vw, 380px" style={{ objectFit: 'cover' }} />
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div>
            <span className="lx-eyebrow">{d('Le fondateur', 'The founder', 'Az alapító')}</span>
            <h2 className="lx-title">
              {d('Celui qui vous écoute ', 'The person who listens to you ', 'Aki meghallgatja Önt, ')}
              <span className="accent">{d('est celui qui code.', 'is the person who codes.', 'az írja a kódot.')}</span>
            </h2>
            <p className="lx-lead">
              {d(
                'Je m’appelle Nathan Goutagny. Je construis moi-même chaque outil : pas de commercial, pas de développeur junior entre nous. Le code et les données vous appartiennent à 100 %, hébergés en Europe ou aux États-Unis selon où vous êtes.',
                'My name is Nathan Goutagny. I build every tool myself: no sales rep, no junior developer between us. The code and the data are 100% yours, hosted in Europe or in the United States depending on where you are.',
                'Nathan Goutagny vagyok. Minden eszközt magam építek: nincs köztünk értékesítő, sem junior fejlesztő. A kód és az adatok 100%-ban az Önéi, Európában vagy az Egyesült Államokban tárolva, attól függően, hol működik.'
              )}
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="lx-narrow fd-cta">
        <FadeUp>
          <h2 className="lx-title" style={{ margin: '0 auto', textAlign: 'center' }}>
            {d('Parlons de ', 'Let’s talk about ', 'Beszéljünk ')}
            <span className="accent">{d('votre maison.', 'your business.', 'a vállalkozásáról.')}</span>
          </h2>
          <p className="lx-lead" style={{ margin: '22px auto 0', textAlign: 'center' }}>
            {d(
              '20 minutes sur Google Meet. Vous m’expliquez comment vous travaillez aujourd’hui, je vous dis ce qu’on peut vous rendre.',
              '20 minutes on Google Meet. You tell me how you work today, I tell you what we can give back to you.',
              '20 perc Google Meeten. Ön elmondja, hogyan dolgozik ma, én megmondom, mit tudunk visszaadni Önnek.'
            )}
          </p>
        </FadeUp>
      </div>

      <style jsx>{`
        .fd-grid {
          display: grid; grid-template-columns: 380px 1fr; gap: 72px; align-items: center;
        }
        .fd-photo {
          position: relative; width: 100%; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 4px;
          background: var(--bg-elevated);
        }
        .fd-cta { padding: clamp(112px, 14vw, 176px) 24px 0; }
        .fd-cta :global(.lx-title) { max-width: none; }
        @media (max-width: 860px) {
          .fd-grid { grid-template-columns: 1fr; gap: 32px; }
          .fd-photo { width: 72%; max-width: 300px; }
          .fd-cta { padding: 96px 4px 0; }
        }
      `}</style>
    </section>
  )
}
