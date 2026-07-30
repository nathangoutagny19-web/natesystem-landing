'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * La garantie « funny ». Version typographique, sans imagerie sectorielle
 * (plus de photo resto), pour parler à tous les métiers, Tier 1 compris.
 */
export default function FunnyGuarantee() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section id="garantie-funny" style={{ padding: '96px 24px' }}>
      <FadeUp className="mx-auto">
        <div className="funguar mx-auto">
          <span className="font-mono funguar-label">{d('Notre pari (à moitié sérieux)', 'Our bet (half-serious)')}</span>
          <h2 className="font-serif italic funguar-title">
            {d('La Garantie ', 'The ')}<span className="accent">{d('Concurrent', 'Competitor')}</span>{d('', ' Guarantee')}
          </h2>
          <p className="font-sans funguar-text">
            {d('Dans les 90 jours suivant la livraison, si vous n’êtes pas assez satisfait pour nous supplier de ne pas bosser avec votre concurrent direct… on vous offre le dîner.',
               'Within 90 days of delivery, if you’re not satisfied enough to beg us not to work with your direct competitor… dinner’s on us.')}
          </p>
          <p className="font-mono funguar-fineprint">
            {d('* dîner offert pour de vrai. Et si le projet le mérite vraiment, on vise plus haut.',
               '* dinner genuinely on us. And if the project really earns it, we aim higher.')}
          </p>
        </div>
      </FadeUp>

      <style jsx>{`
        .funguar {
          max-width: 640px;
          text-align: center;
          background: var(--bg-card);
          border: 1px solid rgba(230, 57, 70, 0.15);
          border-radius: 16px;
          padding: clamp(36px, 5vw, 56px) clamp(28px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -20px rgba(15, 23, 42, 0.2);
        }
        .funguar-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }
        .funguar-title {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 400;
          color: var(--text);
          line-height: 1.15;
          margin: 0;
        }
        .funguar-text {
          font-size: clamp(15px, 2.4vw, 17px);
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0 auto;
          max-width: 520px;
        }
        .funguar-fineprint {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 400;
          margin: 4px 0 0;
        }
      `}</style>
    </section>
  )
}
