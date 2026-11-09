'use client'

import Image from 'next/image'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE FONDATEUR (accueil, refonte du 9 novembre 2026). L'audit gratuit
 * (AuditFinal) se pose juste dessous : plus d'agenda ni d'appel à réserver.
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

      <style jsx>{`
        .fd-grid {
          display: grid; grid-template-columns: 380px 1fr; gap: 72px; align-items: center;
        }
        .fd-photo {
          position: relative; width: 100%; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 4px;
          background: var(--bg-elevated);
        }
        @media (max-width: 860px) {
          .fd-grid { grid-template-columns: 1fr; gap: 32px; }
          .fd-photo { width: 72%; max-width: 300px; }
        }
      `}</style>
    </section>
  )
}
