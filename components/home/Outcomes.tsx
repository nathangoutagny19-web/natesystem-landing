'use client'

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA PREUVE EN UNE PHRASE (accueil, 8 novembre 2026), sur le modèle du hero de
 * gourmetmarketing.net (« …helped our partners generate $462M in 2025 ») :
 * une seule grande phrase sur fond sombre, le chiffre en rouge. Remplace la
 * rangée de trois stats (40 h / ×2 / Unique), jugée « IA » par Nathan.
 *
 * ⚠︎ Les 40 h sont RAPPORTÉES par les clients, la phrase le dit. « Réactivité
 * qui double » est un choix assumé de Nathan, non mesuré. Aucun chiffre de
 * ventes promis.
 */
export default function Outcomes() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section
      id="resultats"
      style={{
        padding: 'clamp(96px, 13vw, 170px) 24px',
        background: 'radial-gradient(70% 60% at 85% 0%, rgba(230,57,70,0.10), transparent 60%), #0e0e12',
      }}
    >
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <p className="font-serif" style={{ fontSize: 'clamp(36px, 5.4vw, 72px)', lineHeight: 1.06, color: '#f0f0f2' }}>
          {d('Nos clients nous rapportent ', 'Our clients report ', 'Ügyfeleink beszámolója szerint ')}
          <span className="italic" style={{ color: '#E63946' }}>{d('40 heures', '40 hours', 'havi 40 órát')}</span>
          {d(' rendues chaque mois à leur équipe.', ' given back to their team every month.', ' kapnak vissza a csapatuk számára.')}
        </p>
        <p className="font-sans" style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', fontWeight: 300, lineHeight: 1.6, color: 'rgba(240,240,242,0.66)', marginTop: 32, maxWidth: 680 }}>
          {d(
            'Une réactivité qui double, et une expérience que leurs propres clients ne trouvent nulle part ailleurs. C’est comme ça qu’on devient la référence de son marché.',
            'Responsiveness that doubles, and an experience their own clients find nowhere else. That is how you become the reference in your market.',
            'Kétszer gyorsabb reagálás, és olyan élmény, amelyet a saját ügyfeleik sehol máshol nem találnak. Így válik valaki a piaca viszonyítási pontjává.'
          )}
        </p>
        <a href="#case-study" className="font-sans inline-flex items-center gap-3" style={{ marginTop: 40, fontSize: 15, color: '#f0f0f2' }}>
          <span aria-hidden>→</span>
          {d('Voir les réalisations', 'See the work', 'Nézze meg a munkáinkat')}
        </a>
      </div>
    </section>
  )
}
