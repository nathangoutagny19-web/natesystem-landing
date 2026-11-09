'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

/**
 * CE QU'ON CONSTRUIT (accueil, refonte du 9 novembre 2026) : trois points
 * numérotés, puis un lien vers la page Services, qui porte le détail.
 */
export default function BuildThree() {
  const { lang } = useLang()
  const d = makeD(lang)

  const items = [
    {
      title: d('Tout au même endroit', 'Everything in one place', 'Minden egy helyen'),
      text: d(
        'Demandes, clients, prestataires, devis et factures réunis, quel que soit le canal.',
        'Requests, clients, suppliers, quotes and invoices together, whatever the channel.',
        'Kérések, ügyfelek, beszállítók, árajánlatok és számlák együtt, bármelyik csatornán érkeznek.'
      ),
    },
    {
      title: d('Votre équipe prend le relais', 'Your team takes over', 'A csapata átveszi'),
      text: d(
        'Chacun sait ce qu’il a à faire, sans tout vous demander.',
        'Everyone knows what to do, without asking you everything.',
        'Mindenki tudja, mi a dolga, anélkül hogy mindent Öntől kérdezne.'
      ),
    },
    {
      title: d('Vos clients et vos propriétaires suivis', 'Your clients and owners looked after', 'Ügyfelei és tulajdonosai figyelemmel kísérve'),
      text: d(
        'Leur espace, leurs documents, leurs préférences, sans que vous ayez à répondre à chaque message.',
        'Their own space, their documents, their preferences, without you answering every message.',
        'Saját felületük, dokumentumaik, preferenciáik, anélkül hogy minden üzenetre Önnek kellene válaszolnia.'
      ),
    },
  ]

  return (
    <section id="ce-qu-on-construit" className="lx-section" style={{ paddingTop: 0 }}>
      <div className="lx-wrap">
        <FadeUp>
          <span className="lx-eyebrow">{d('Ce qu’on construit', 'What we build', 'Amit építünk')}</span>
          <h2 className="lx-title">
            {d('Un outil à votre image, ', 'A tool built around you, ', 'Az Önre szabott eszköz, ')}
            <span className="accent">{d('pas un logiciel de plus.', 'not one more piece of software.', 'nem még egy szoftver.')}</span>
          </h2>
        </FadeUp>

        <ol className="b3-list">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={0.08 * i}>
              <li className="b3-item">
                <span className="font-mono b3-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif italic b3-title">{it.title}</h3>
                <p className="font-sans b3-text">{it.text}</p>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp>
          <Link href={localizedHref('/services', lang)} className="lx-link">
            {d('Découvrir nos services', 'Discover our services', 'Szolgáltatásaink')} <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>

      <style jsx>{`
        .b3-list {
          list-style: none; margin: 64px 0 0; padding: 0;
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px;
        }
        .b3-item { display: flex; flex-direction: column; }
        .b3-num { font-size: 11px; letter-spacing: 2px; color: var(--accent); }
        .b3-title { font-size: clamp(22px, 2.2vw, 27px); font-weight: 400; line-height: 1.2; color: var(--text); margin: 18px 0 12px; }
        .b3-text { font-size: 15.5px; font-weight: 300; line-height: 1.7; color: var(--text-secondary); margin: 0; }
        @media (max-width: 860px) {
          .b3-list { grid-template-columns: 1fr; gap: 36px; margin-top: 44px; }
          .b3-title { font-size: 22px; margin: 10px 0 8px; }
          .b3-text { font-size: 15px; }
        }
      `}</style>
    </section>
  )
}
