'use client'

import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

/**
 * L'ÉCOSYSTÈME DIGITAL (accueil, 8 novembre 2026). Nathan : « on vend un
 * écosystème digital, donc vraiment tout, présenté en design dans une section,
 * sachant qu'ils ne sont pas obligés de tout prendre ».
 *
 * Un schéma dessiné à la main (SVG + HTML, aucune librairie, règle maison) :
 * au centre les données du client, qui lui appartiennent ; à gauche ce que
 * ses clients voient ; à droite ce qui tourne derrière. Chaque module est
 * relié au centre par un filet. Aucune animation. Sous 1024 px, le schéma
 * devient deux listes.
 *
 * L'ancre #prestations est celle du pied de page. Le hongrois n'est pas relu
 * par un natif.
 */
const W = 1120
const H = 660
const COL = 300 // largeur d'une colonne de modules
const CX = W / 2
const CY = H / 2
const CW = 230 // nœud central
const CH = 150

export default function Ecosystem() {
  const { lang } = useLang()
  const d = makeD(lang)

  const front = [
    d('Site web', 'Website', 'Weboldal'),
    d('Réservation et paiement en ligne', 'Online booking and payment', 'Online foglalás és fizetés'),
    d('Espace client et propriétaire', 'Client and owner portal', 'Ügyfél- és tulajdonosi portál'),
    d('Contenu et réseaux sociaux', 'Content and social media', 'Tartalom és közösségi média'),
    d('Publicité Meta et Google', 'Meta and Google ads', 'Meta- és Google-hirdetések'),
    d('Référencement Google', 'Google search (SEO)', 'Google-keresőoptimalizálás'),
  ]
  const back = [
    d('Demandes et mémoire client', 'Requests and client memory', 'Kérések és ügyfélmemória'),
    d('Opérations et prestataires', 'Operations and suppliers', 'Működés és beszállítók'),
    d('Planning des équipes', 'Team scheduling', 'Csapatbeosztás'),
    d('Devis, factures et paiements', 'Quotes, invoices and payments', 'Árajánlatok, számlák, fizetések'),
    d('Reporting et tableaux de bord', 'Reporting and dashboards', 'Riportok és irányítópultok'),
    d('Automatisations en coulisse', 'Automations behind the scenes', 'Automatizálás a háttérben'),
  ]

  const rowY = (i: number) => 60 + i * ((H - 120) / 5)

  return (
    <section id="prestations" style={{ padding: '120px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: W, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-end">
          <div>
            <span className="section-label">{d('Écosystème digital', 'Digital ecosystem', 'Digitális ökoszisztéma')}</span>
            <h2 className="font-serif font-normal" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.06, marginTop: 18, color: 'var(--text)' }}>
              {d('Tout ce que vos clients voient, et tout ce qui tourne derrière. ', 'Everything your clients see, and everything that runs behind it. ', 'Minden, amit az ügyfelei látnak, és minden, ami mögötte működik. ')}
              <span className="italic">{d('Vous prenez ce dont vous avez besoin.', 'You take what you need.', 'Azt választja, amire szüksége van.')}</span>
            </h2>
          </div>
          <p className="font-sans" style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {d(
              'Chaque module fonctionne seul. Ensemble, ils partagent les mêmes données : une demande venue d’Instagram arrive au même endroit qu’une demande venue du site, et finit sur la même facture.',
              'Each module works on its own. Together they share the same data: a request from Instagram lands in the same place as one from your website, and ends up on the same invoice.',
              'Minden modul önállóan is működik. Együtt ugyanazokat az adatokat használják: az Instagramról érkező kérés ugyanoda kerül, mint a weboldalról érkező, és ugyanazon a számlán végződik.'
            )}
          </p>
        </div>

        {/* Le schéma, ordinateur */}
        <div className="hidden lg:block relative" style={{ marginTop: 72, width: '100%', aspectRatio: `${W} / ${H}` }}>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" aria-hidden>
            {front.map((_, i) => {
              const y = rowY(i)
              return <path key={`f${i}`} d={`M ${COL} ${y} C ${COL + 90} ${y}, ${CX - CW / 2 - 90} ${CY}, ${CX - CW / 2} ${CY}`} fill="none" stroke="var(--border-hover)" strokeWidth="1" />
            })}
            {back.map((_, i) => {
              const y = rowY(i)
              return <path key={`b${i}`} d={`M ${W - COL} ${y} C ${W - COL - 90} ${y}, ${CX + CW / 2 + 90} ${CY}, ${CX + CW / 2} ${CY}`} fill="none" stroke="var(--border-hover)" strokeWidth="1" />
            })}
            {[...front.map((_, i) => [COL, rowY(i)]), ...back.map((_, i) => [W - COL, rowY(i)])].map(([x, y], k) => (
              <circle key={k} cx={x} cy={y} r="2.5" fill="var(--text)" />
            ))}
            <circle cx={CX - CW / 2} cy={CY} r="3.5" fill="#E63946" />
            <circle cx={CX + CW / 2} cy={CY} r="3.5" fill="#E63946" />
          </svg>

          <ColumnLabel x={0} text={d('Ce que vos clients voient', 'What your clients see', 'Amit az ügyfelei látnak')} />
          <ColumnLabel x={W - COL} text={d('Ce qui tourne derrière', 'What runs behind it', 'Ami a háttérben fut')} />

          {front.map((label, i) => (
            <Node key={label} index={i + 1} label={label} x={0} y={rowY(i)} align="left" />
          ))}
          {back.map((label, i) => (
            <Node key={label} index={i + 7} label={label} x={W - COL} y={rowY(i)} align="right" />
          ))}

          {/* Le centre : les données du client, qui lui appartiennent */}
          <div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{ left: `${((CX - CW / 2) / W) * 100}%`, top: `${((CY - CH / 2) / H) * 100}%`, width: `${(CW / W) * 100}%`, height: `${(CH / H) * 100}%`, background: '#0e0e12', borderRadius: 2 }}
          >
            <span className="font-serif" style={{ fontSize: 26, color: '#f0f0f2', lineHeight: 1.1 }}>{d('Vos données', 'Your data', 'Az Ön adatai')}</span>
            <span className="font-mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,240,242,0.55)', marginTop: 10 }}>
              {d('Un seul endroit · À vous', 'One place · Yours', 'Egy helyen · Az Öné')}
            </span>
          </div>
        </div>

        {/* Le schéma, mobile : deux listes */}
        <div className="lg:hidden grid grid-cols-1 gap-10" style={{ marginTop: 48 }}>
          {[
            { title: d('Ce que vos clients voient', 'What your clients see', 'Amit az ügyfelei látnak'), items: front, start: 1 },
            { title: d('Ce qui tourne derrière', 'What runs behind it', 'Ami a háttérben fut'), items: back, start: 7 },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{col.title}</p>
              <ul style={{ marginTop: 12, borderTop: '1px solid var(--border)' }}>
                {col.items.map((label, i) => (
                  <li key={label} className="flex items-baseline gap-4 font-sans" style={{ padding: '14px 0', borderBottom: '1px solid var(--border)', fontSize: 16, color: 'var(--text)' }}>
                    <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{String(col.start + i).padStart(2, '0')}</span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="font-serif" style={{ fontSize: 22, color: 'var(--text)' }}>
            {d('Au centre : vos données, au même endroit, et à vous.', 'At the centre: your data, in one place, and yours.', 'Középen: az Ön adatai, egy helyen, és az Öné.')}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6" style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
          <p className="font-serif" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--text)', maxWidth: 640 }}>
            {d(
              'Un module ou tout l’écosystème : on commence là où ça vous coûte le plus.',
              'One module or the whole ecosystem: we start where it costs you the most.',
              'Egy modul vagy a teljes ökoszisztéma: ott kezdjük, ahol a legtöbbe kerül Önnek.'
            )}
          </p>
          <Link href={localizedHref('/audit-gratuit', lang)} className="btn-primary">
            {d('Recevoir votre audit gratuit', 'Get your free audit', 'Kérje ingyenes auditját')} →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ColumnLabel({ x, text }: { x: number; text: string }) {
  return (
    <p
      className="absolute font-mono"
      style={{ left: `${(x / W) * 100}%`, top: 0, width: `${(COL / W) * 100}%`, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: x === 0 ? 'left' : 'right' }}
    >
      {text}
    </p>
  )
}

function Node({ index, label, x, y, align }: { index: number; label: string; x: number; y: number; align: 'left' | 'right' }) {
  return (
    <div
      className="absolute flex items-baseline gap-3 font-sans"
      style={{
        left: `${(x / W) * 100}%`,
        top: `${(y / H) * 100}%`,
        width: `${(COL / W) * 100}%`,
        transform: 'translateY(-50%)',
        justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
        flexDirection: align === 'left' ? 'row' : 'row-reverse',
        textAlign: align,
        paddingRight: align === 'left' ? 18 : 0,
        paddingLeft: align === 'right' ? 18 : 0,
      }}
    >
      <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>{String(index).padStart(2, '0')}</span>
      <span style={{ fontSize: 17, color: 'var(--text)', lineHeight: 1.25 }}>{label}</span>
    </div>
  )
}
