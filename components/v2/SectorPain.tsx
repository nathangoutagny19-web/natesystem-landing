'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * SectorPain, « Pour votre métier » (REFONTE §10 / OpsKings 1.7).
 * « Mêmes problèmes, langages différents. » Un paragraphe de douleur à la 2ᵉ
 * personne par secteur, pas une liste de références. En-tête aligné à gauche
 * (casse le gabarit "titre centré") + grille de blocs métier.
 */
export default function SectorPain() {
  const { t } = useLang()

  // Ordre volontaire : jamais la restauration en tête (règle Nathan, pas de
  // restauration en niche vitrine). Elle reste une carte parmi d'autres, en fin.
  const sectors = [
    { title: t('v2.sector.conseil.title'), body: t('v2.sector.conseil.body') },
    { title: t('v2.sector.edu.title'), body: t('v2.sector.edu.body') },
    { title: t('v2.sector.event.title'), body: t('v2.sector.event.body') },
    { title: t('v2.sector.clubs.title'), body: t('v2.sector.clubs.body') },
    { title: t('v2.sector.resto.title'), body: t('v2.sector.resto.body') },
  ]

  return (
    <section id="pour-votre-metier" style={{ padding: '110px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1080 }}>
        <FadeUp>
          <span
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}
          >
            {t('v2.sector.eyebrow')}
          </span>
          <h2
            className="font-serif italic"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text)', margin: '14px 0 8px', maxWidth: 620 }}
          >
            {t('v2.sector.title')}{' '}
            <span style={{ color: 'var(--accent)' }}>{t('v2.sector.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: 44 }}>
            {t('v2.sector.sub')}
          </p>
        </FadeUp>

        <div className="sector-grid">
          {sectors.map((s, i) => (
            <FadeUp key={s.title} delay={0.06 * i}>
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: 22,
                  height: '100%',
                }}
              >
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, color: 'var(--text)', margin: '0 0 10px' }}>
                  {s.title}
                </h3>
                <p className="font-sans" style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 300, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sector-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 36px 40px;
        }
        @media (max-width: 900px) {
          .sector-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 32px; }
        }
        @media (max-width: 560px) {
          .sector-grid { grid-template-columns: 1fr; gap: 26px; }
        }
      `}</style>
    </section>
  )
}
