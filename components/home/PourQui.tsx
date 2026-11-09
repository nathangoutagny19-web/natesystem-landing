'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import SectorGlyph from '@/components/home/SectorGlyph'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

/**
 * POUR QUI (accueil, refonte du 9 novembre 2026) : six tuiles courtes, une
 * ligne chacune, avec le petit dessin animé du métier (SectorGlyph, dans le
 * même ordre). Le détail par métier vit sur la page Services (#secteurs).
 */
export default function PourQui() {
  const { lang } = useLang()
  const d = makeD(lang)

  const tiles = [
    {
      name: d('Yachting : charter, gestion et agents', 'Yachting: charter, management and agents', 'Jachtozás: bérlés, kezelés és ügynökök'),
      line: d('Devis, dépenses et relevés des propriétaires, bateau par bateau.', 'Quotes, expenses and owner statements, boat by boat.', 'Árajánlatok, kiadások és tulajdonosi kimutatások, hajóról hajóra.'),
    },
    {
      name: d('Villas, chalets et gestion de propriétés', 'Villas, chalets and property management', 'Villák, faházak és ingatlankezelés'),
      line: d('Chaque maison, ses interventions et son propriétaire, suivis.', 'Every house, its jobs and its owner, kept on track.', 'Minden ház, a munkái és a tulajdonosa, nyomon követve.'),
    },
    {
      name: d('Conciergerie privée', 'Private concierge', 'Magán concierge'),
      line: d('Toutes les demandes au même endroit, suivies jusqu’à la facture.', 'Every request in one place, followed through to the invoice.', 'Minden kérés egy helyen, a számláig követve.'),
    },
    {
      name: d('Voyage sur mesure et DMC', 'Bespoke travel and DMC', 'Egyedi utazás és DMC'),
      line: d('Devis, itinéraires et partenaires confirmés, sans relance à la main.', 'Quotes, itineraries and confirmed partners, without chasing by hand.', 'Árajánlatok, útitervek és visszaigazolt partnerek, kézi utánajárás nélkül.'),
    },
    {
      name: d('Sécurité privée haut de gamme', 'High-end private security', 'Prémium magánbiztonság'),
      line: d('Missions, agents et comptes rendus au même endroit.', 'Missions, agents and reports in one place.', 'Megbízások, ügynökök és jelentések egy helyen.'),
    },
    {
      name: d('Événements et mariages d’exception', 'Exceptional events and weddings', 'Kivételes rendezvények és esküvők'),
      line: d('Le déroulé, les prestataires et le budget, partagés en temps réel.', 'The run of show, the suppliers and the budget, shared in real time.', 'A forgatókönyv, a beszállítók és a költségvetés, valós időben megosztva.'),
    },
  ]

  return (
    <section id="pour-qui" className="lx-section" style={{ paddingTop: 0 }}>
      <div className="lx-wrap">
        <FadeUp>
          <span className="lx-eyebrow">{d('Pour qui', 'Who it’s for', 'Kiknek')}</span>
          <h2 className="lx-title" style={{ maxWidth: '20ch' }}>
            {d('Les maisons qui servent ', 'Businesses that serve ', 'Vállalkozások, amelyek ')}
            <span className="accent">{d('une clientèle exigeante.', 'demanding clients.', 'igényes ügyfeleket szolgálnak ki.')}</span>
          </h2>
        </FadeUp>

        <div className="pq-grid">
          {tiles.map((t, i) => (
            <FadeUp key={t.name} delay={0.05 * i}>
              <div className="pq-tile">
                <SectorGlyph index={i} />
                <h3 className="font-sans pq-name">{t.name}</h3>
                <p className="font-sans pq-line">{t.line}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <Link href={localizedHref('/services', lang) + '#secteurs'} className="lx-link">
            {d('Le détail par métier', 'The detail for each trade', 'Részletek szakmánként')} <span aria-hidden="true">→</span>
          </Link>
        </FadeUp>
      </div>

      <style jsx>{`
        .pq-grid {
          margin-top: 64px;
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--border); border-left: 1px solid var(--border);
        }
        .pq-tile {
          height: 100%;
          padding: 30px 28px 32px;
          border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);
          background: var(--bg-card);
        }
        .pq-name { font-size: 16px; font-weight: 500; color: var(--text); margin: 0 0 8px; line-height: 1.35; }
        .pq-line { font-size: 14.5px; font-weight: 300; color: var(--text-secondary); margin: 0; line-height: 1.6; }
        @media (max-width: 900px) { .pq-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) {
          .pq-grid { grid-template-columns: 1fr; margin-top: 40px; }
          .pq-tile { padding: 22px 20px 24px; }
        }
      `}</style>
    </section>
  )
}
