'use client'

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LES RÉSULTATS (accueil, 8 novembre 2026), la preuve telle que Nathan la
 * formule : 40 h par mois rapportées par les clients, une réactivité qui
 * double, une expérience client unique, et ce que ça entraîne.
 *
 * ⚠︎ Les 40 h sont RAPPORTÉES par les clients, jamais mesurées par nous : la
 * mention reste collée au chiffre. « ×2 » est un choix assumé de Nathan,
 * non mesuré. Aucun chiffre de ventes ni de LTV n'est promis : la dernière
 * phrase dit le mécanisme, pas un résultat chiffré.
 */
export default function Outcomes() {
  const { lang } = useLang()
  const d = makeD(lang)

  const items = [
    {
      big: '40 h',
      label: d('rendues à l’équipe chaque mois', 'given back to the team every month', 'havonta visszanyerve a csapatnak'),
      note: d('en moyenne, rapporté par nos clients', 'on average, as reported by our clients', 'átlagosan, az ügyfeleink beszámolója szerint'),
    },
    {
      big: '×2',
      label: d('de réactivité', 'responsiveness', 'gyorsabb reagálás'),
      note: d('chaque demande vue, attribuée, suivie', 'every request seen, assigned, followed', 'minden kérés látható, kiosztva, követve'),
    },
    {
      big: d('Unique', 'Unique', 'Egyedi'),
      label: d('une expérience client à votre image', 'a guest experience in your image', 'az Önhöz illő vendégélmény'),
      note: d('la mémoire de chaque client, gardée', 'every client’s preferences, remembered', 'minden ügyfél preferenciái megőrizve'),
    },
  ]

  return (
    <section id="resultats" style={{ padding: '88px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <span className="section-label">{d('Résultats', 'Results', 'Eredmények')}</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginTop: 36 }}>
          {items.map((it) => (
            <div key={it.big} style={{ borderTop: '1px solid var(--border)', paddingTop: 22 }}>
              <p className="font-serif italic" style={{ fontSize: 'clamp(52px, 6vw, 76px)', lineHeight: 1, color: 'var(--text)' }}>{it.big}</p>
              <p className="font-sans" style={{ fontSize: 17, color: 'var(--text)', marginTop: 14 }}>{it.label}</p>
              <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8 }}>{it.note}</p>
            </div>
          ))}
        </div>
        <p className="font-serif italic" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.35, color: 'var(--text)', marginTop: 56, maxWidth: 820 }}>
          {d('Une expérience que vos clients ne trouvent nulle part ailleurs, c’est ce qui les fait revenir et en amène d’autres. C’est comme ça qu’on devient ', 'An experience your clients find nowhere else is what brings them back and brings others with them. That is how you become ', 'Az az élmény, amelyet ügyfelei sehol máshol nem találnak, hozza vissza őket, és hoz újakat. Így lesz Ön ')}
          <span style={{ color: 'var(--accent)' }}>{d('la référence', 'the reference', 'a viszonyítási pont')}</span>
          {d(' de son marché.', ' in your market.', ' a piacán.')}
        </p>
      </div>
    </section>
  )
}
