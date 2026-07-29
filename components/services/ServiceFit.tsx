'use client'

import { Check, X } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'

/**
 * Tableau de qualification 2 colonnes : « C'est pour vous si » / « Ce n'est pas pour vous si ».
 * En bas de chaque sous-page service, cadrage honnête du fit.
 */
export default function ServiceFit({ forYou, notForYou }: { forYou: string[]; notForYou: string[] }) {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 980 }}>
        <FadeUp className="text-center mb-12">
          <span className="section-label">Est-ce pour vous ?</span>
          <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
            On est <span className="accent">honnêtes dès le départ.</span>
          </h2>
        </FadeUp>

        <div className="fit-grid">
          <FadeUp>
            <div className="fit-col fit-yes">
              <div className="fit-head">
                <span className="fit-head-ico fit-head-yes" aria-hidden="true"><Check size={17} strokeWidth={2.4} /></span>
                <span className="font-mono fit-head-label">C&apos;est pour vous si</span>
              </div>
              <ul className="fit-list">
                {forYou.map((f) => (
                  <li key={f} className="fit-item">
                    <span className="fit-ico fit-ico-yes" aria-hidden="true"><Check size={15} strokeWidth={2.4} /></span>
                    <span className="font-sans">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="fit-col fit-no">
              <div className="fit-head">
                <span className="fit-head-ico fit-head-no" aria-hidden="true"><X size={17} strokeWidth={2.4} /></span>
                <span className="font-mono fit-head-label">Ce n&apos;est pas pour vous si</span>
              </div>
              <ul className="fit-list">
                {notForYou.map((f) => (
                  <li key={f} className="fit-item fit-item-muted">
                    <span className="fit-ico fit-ico-no" aria-hidden="true"><X size={15} strokeWidth={2.4} /></span>
                    <span className="font-sans">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>

      <style jsx>{`
        .fit-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
        .fit-col { height: 100%; padding: 30px 28px; border-radius: 16px; border: 1px solid var(--border); background: var(--bg-card); }
        .fit-yes { border-color: rgba(230,57,70,0.28); background: linear-gradient(160deg, var(--accent-subtle), transparent 60%); }
        .fit-head { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
        .fit-head-ico { width: 34px; height: 34px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center; }
        .fit-head-yes { background: var(--accent); color: #fff; }
        .fit-head-no { background: var(--bg-elevated); color: var(--text-muted); border: 1px solid var(--border); }
        .fit-head-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; color: var(--text); }
        .fit-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 15px; }
        .fit-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14.5px; line-height: 1.5; font-weight: 300; color: var(--text); }
        .fit-item-muted { color: var(--text-secondary); }
        .fit-ico { flex: none; width: 22px; height: 22px; border-radius: 7px; display: inline-flex; align-items: center; justify-content: center; margin-top: 1px; }
        .fit-ico-yes { background: var(--accent-subtle); color: var(--accent); }
        .fit-ico-no { background: var(--bg-elevated); color: var(--text-muted); }
        @media (max-width: 760px) {
          .fit-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  )
}
