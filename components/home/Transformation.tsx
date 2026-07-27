'use client'

import Image from 'next/image'
import { siGmail, siGooglesheets, siGoogledocs, siWhatsapp, siNotion, siTelegram, siHubspot, siAirtable } from 'simple-icons'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Before / After — layout "diagonale".
 * Ligne 1 (AVANT) : le schéma du chaos à GAUCHE + ce qui coûte cher (tirets) à DROITE.
 * Ligne 2 (APRÈS) : les résultats (tirets) à GAUCHE + le dashboard propre à DROITE.
 * Une flèche rouge "dessin à la main" relie l'avant à l'après au centre.
 * Les deux visuels sont ceux validés par Nathan — on ne change que l'agencement.
 * Charte via CSS vars, dark-mode + responsive. Flèche masquée en mobile.
 */

type Bubble = {
  icon: { hex: string; path: string; title: string }
  top: string; left: string; size: number; rot: number; z: number
  dur: string; delay: string; amp: number; dx: number; rotAmp: number
}

const BUBBLES: Bubble[] = [
  { icon: siGooglesheets, top: '1%', left: '1%', size: 42, rot: -10, z: 2, dur: '7.5s', delay: '0s', amp: 6, dx: 3, rotAmp: 3 },
  { icon: siGmail, top: '-2%', left: '28%', size: 38, rot: 9, z: 3, dur: '8.4s', delay: '-1.4s', amp: 7, dx: -4, rotAmp: -3 },
  { icon: siHubspot, top: '3%', left: '52%', size: 40, rot: -6, z: 3, dur: '7s', delay: '-0.9s', amp: 7, dx: 4, rotAmp: -3 },
  { icon: siGoogledocs, top: '0%', left: '78%', size: 36, rot: 11, z: 2, dur: '9.1s', delay: '-2.1s', amp: 6, dx: 4, rotAmp: 4 },
  { icon: siWhatsapp, top: '32%', left: '2%', size: 46, rot: 6, z: 4, dur: '6.6s', delay: '-2.6s', amp: 8, dx: 4, rotAmp: 3 },
  { icon: siAirtable, top: '40%', left: '40%', size: 36, rot: -8, z: 3, dur: '8.6s', delay: '-3.8s', amp: 6, dx: -3, rotAmp: 4 },
  { icon: siTelegram, top: '20%', left: '82%', size: 38, rot: 13, z: 3, dur: '8.9s', delay: '-1.9s', amp: 6, dx: 4, rotAmp: 4 },
  { icon: siNotion, top: '62%', left: '8%', size: 34, rot: 17, z: 2, dur: '7.8s', delay: '-3.3s', amp: 7, dx: -3, rotAmp: -4 },
  { icon: siWhatsapp, top: '66%', left: '76%', size: 32, rot: 8, z: 2, dur: '8.2s', delay: '-2.8s', amp: 6, dx: -4, rotAmp: -3 },
]

// Friction artefacts — small note-cards that scream the mess. tone: 'alert' = red-ish.
const NOTES: { key: string; top: string; left: string; rot: number; z: number; dur: string; delay: string; tone?: 'alert' }[] = [
  { key: 'trans.chaos.quote', top: '16%', left: '8%', rot: -4, z: 7, dur: '9.2s', delay: '-1.1s', tone: 'alert' },
  { key: 'trans.chaos.money', top: '52%', left: '52%', rot: 5, z: 7, dur: '8.1s', delay: '-2.4s', tone: 'alert' },
  { key: 'trans.chaos.sms', top: '70%', left: '36%', rot: -6, z: 6, dur: '7.4s', delay: '-0.6s' },
  { key: 'trans.chaos.forgot', top: '24%', left: '58%', rot: 3, z: 6, dur: '9.7s', delay: '-3.1s' },
]

// AVANT = les chiffres qui piquent (repris de CostPain, jugés plus pertinents par Nathan).
// Chiffres illustratifs — voir règle d'or BRIEF §7.2 (à confirmer/marquer estimation le jour venu).
const COST_STATS = [1, 2, 3, 4, 5] as const
// APRÈS = 3 points forts (valeur serif rouge + description) qui répondent aux
// coûts de l'AVANT. Choix Nathan : condenser à 3.
const GAIN_STATS = [1, 2, 3] as const

export default function Transformation() {
  const { t } = useLang()

  return (
    <section id="transformation" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1120px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('trans.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {t('trans.title')}{' '}
            <span className="accent">{t('trans.titleAccent')}</span>
          </h2>
        </FadeUp>

        <div className="baf-flow">
          {/* ═══ LIGNE 1 — AVANT : schéma (gauche) + ce qui coûte cher (droite) ═══ */}
          <FadeUp delay={0.1}>
            <div className="baf-row">
              {/* Visuel : le chaos */}
              <div className="baf-visual baf-visual-before">
                <div className="baf-stage">
                  {BUBBLES.map((b, i) => (
                    <span
                      key={i}
                      className="baf-logo"
                      style={{
                        top: b.top, left: b.left, width: b.size, height: b.size,
                        transform: `rotate(${b.rot}deg)`, zIndex: b.z,
                        ['--dur' as string]: b.dur, ['--d' as string]: b.delay,
                        ['--amp' as string]: `${b.amp}px`, ['--dx' as string]: `${b.dx}px`, ['--rot' as string]: `${b.rotAmp}deg`,
                      }}
                      aria-hidden="true"
                    >
                      <span className="baf-logo-inner">
                        <svg role="img" viewBox="0 0 24 24" fill={`#${b.icon.hex}`} aria-label={b.icon.title}>
                          <path d={b.icon.path} />
                        </svg>
                      </span>
                    </span>
                  ))}

                  {NOTES.map((n) => (
                    <span
                      key={n.key}
                      className="baf-note-wrap"
                      style={{ top: n.top, left: n.left, transform: `rotate(${n.rot}deg)`, zIndex: n.z }}
                      aria-hidden="true"
                    >
                      <span
                        className="baf-note-inner"
                        style={{ ['--dur' as string]: n.dur, ['--d' as string]: n.delay, ['--amp' as string]: '5px', ['--dx' as string]: '-3px', ['--rot' as string]: '2deg' }}
                      >
                        <span className={`baf-note${n.tone === 'alert' ? ' baf-note-alert' : ''}`}>
                          <span className="baf-note-dot" />
                          {t(n.key as Parameters<typeof t>[0])}
                        </span>
                      </span>
                    </span>
                  ))}

                  {/* Speech bubble — gibberish */}
                  <span className="baf-logo baf-speech" style={{ top: '36%', left: '20%', width: 138, zIndex: 8 }} aria-hidden="true">
                    <span className="baf-speech-inner" style={{ ['--dur' as string]: '9.5s', ['--d' as string]: '-0.4s', ['--amp' as string]: '5px', ['--dx' as string]: '-3px', ['--rot' as string]: '2deg' }}>
                      <span className="baf-speech-card">
                        <span className="baf-speech-tail" />
                        <svg width="40" height="10" viewBox="0 0 46 13" fill="none" stroke="var(--text-secondary)" strokeWidth="1.6" strokeLinecap="round" style={{ opacity: 0.55, marginBottom: 6, display: 'block' }}><path d="M1 7c3-6 6 6 9 0s6 6 9 0 6 6 9 0 6 6 9 0 6 4 8 1" /></svg>
                        <span className="baf-gib">~ ∿ ✦ ? !</span>
                        <span className="baf-gib baf-gib-wavy">⚡ ✕ ≈ ?!</span>
                      </span>
                    </span>
                  </span>

                  {/* Excel table floating in the mess */}
                  <span className="baf-logo" style={{ top: '46%', left: '56%', width: 92, zIndex: 5 }} aria-hidden="true">
                    <span
                      className="baf-xls-inner"
                      style={{ ['--dur' as string]: '8.7s', ['--d' as string]: '-1.7s', ['--amp' as string]: '6px', ['--dx' as string]: '-3px', ['--rot' as string]: '-3deg' }}
                    >
                      <span className="baf-xls">
                        <span className="baf-xls-bar" />
                        <span className="baf-xls-grid">
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <span key={i} className={`baf-xls-cell${[0, 4, 7].includes(i) ? ' baf-xls-cell--fill' : ''}`} />
                          ))}
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              {/* Copie : ce qui coûte cher */}
              <div className="baf-copy">
                <span className="baf-eyebrow baf-eyebrow-before">
                  <span className="baf-dot baf-dot-before" />
                  {t('trans.beforeLabel')}
                </span>
                <h3 className="baf-copy-title font-serif">{t('trans.costTitle')}</h3>
                <ul className="baf-list baf-costlist">
                  {COST_STATS.map((i) => (
                    <li key={i} className="baf-cost-item">
                      <span className="baf-cost-stat font-serif">{t(`costpain.stat${i}` as Parameters<typeof t>[0])}</span>
                      <span className="baf-cost-desc">{t(`costpain.desc${i}` as Parameters<typeof t>[0])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* ═══ LIGNE 2 — APRÈS : résultats (gauche) + dashboard (droite) ═══ */}
          <FadeUp delay={0.18}>
            <div className="baf-row baf-row-rev">
              {/* Copie : ce qui vous propulse */}
              <div className="baf-copy">
                <span className="baf-eyebrow baf-eyebrow-after">
                  <span className="baf-dot baf-dot-after" />
                  {t('trans.afterLabel')}
                </span>
                <h3 className="baf-copy-title font-serif">{t('trans.gainTitle')}</h3>
                <ul className="baf-list baf-costlist">
                  {GAIN_STATS.map((i) => (
                    <li key={i} className="baf-cost-item">
                      <span className="baf-cost-stat font-serif">{t(`trans.gainVal${i}` as Parameters<typeof t>[0])}</span>
                      <span className="baf-cost-desc">{t(`trans.gainDesc${i}` as Parameters<typeof t>[0])}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visuel : le dashboard propre */}
              <div className="baf-visual baf-visual-after">
                <div className="baf-brand">
                  <span className="baf-mark">
                    <Image src="/nate-mark.png" alt="NateSystem" width={36} height={36} />
                  </span>
                  <span className="font-serif baf-wordmark">NateSystem</span>
                </div>

                <div className="baf-dash">
                  <div className="baf-kpis">
                    <div className="baf-kpi">
                      <div className="baf-kpi-top">
                        <span className="baf-kpi-ico baf-kpi-ico-accent" />
                        <span className="baf-kpi-trend"><ArrowUpRight /></span>
                      </div>
                      <div className="baf-kpi-line baf-kpi-line-strong" style={{ width: '62%' }} />
                      <div className="baf-kpi-line" style={{ width: '42%' }} />
                    </div>
                    <div className="baf-kpi">
                      <div className="baf-kpi-top">
                        <span className="baf-kpi-ico baf-kpi-ico-muted" />
                        <span className="baf-kpi-trend"><ArrowUpRight /></span>
                      </div>
                      <div className="baf-kpi-line baf-kpi-line-strong" style={{ width: '54%' }} />
                      <div className="baf-kpi-line" style={{ width: '38%' }} />
                    </div>
                  </div>

                  <div className="baf-chart">
                    <div className="baf-bars">
                      <span className="baf-bar" style={{ height: 24, ['--bd' as string]: '0s', background: 'color-mix(in srgb, var(--text-secondary) 28%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 34, ['--bd' as string]: '.05s', background: 'color-mix(in srgb, var(--text-secondary) 28%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 29, ['--bd' as string]: '.1s', background: 'color-mix(in srgb, var(--text-secondary) 28%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 43, ['--bd' as string]: '.15s', background: 'color-mix(in srgb, var(--text-secondary) 28%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 38, ['--bd' as string]: '.2s', background: 'color-mix(in srgb, var(--accent) 45%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 52, ['--bd' as string]: '.25s', background: 'color-mix(in srgb, var(--accent) 70%, transparent)' }} />
                      <span className="baf-bar" style={{ height: 60, ['--bd' as string]: '.3s', background: 'var(--accent)' }} />
                    </div>
                  </div>

                  <div className="baf-tasks">
                    <div className="baf-task">
                      <span className="baf-task-check"><CheckMini /></span>
                      <span className="baf-task-line" style={{ width: '68%' }} />
                    </div>
                    <div className="baf-task">
                      <span className="baf-task-check"><CheckMini /></span>
                      <span className="baf-task-line" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>

                <div className="baf-pill">
                  <Spark />
                  <span>{t('trans.aiTag')}</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Flèche rouge "dessin à la main" reliant l'avant à l'après (desktop).
              En dernier dans le DOM → peinte au-dessus des deux lignes. */}
          <div className="baf-arrow" aria-hidden="true">
            <svg viewBox="0 0 150 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="baf-arrow-path"
                d="M88 10 C 120 40, 96 80, 66 96 C 40 110, 58 146, 108 150"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="baf-arrow-head"
                d="M108 150 L 92 142 M108 150 L 96 164"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

      </div>

      <style jsx>{`
        .baf-flow { position: relative; display: flex; flex-direction: column; gap: 26px; }

        .baf-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .baf-row { grid-template-columns: 1.05fr 0.95fr; gap: 56px; }
        }

        /* Visuels (schéma) */
        .baf-visual {
          position: relative; padding: 22px; min-height: 340px;
          border-radius: 12px; border: 1px solid var(--border);
        }
        .baf-visual-before { background: var(--bg-elevated); }
        .baf-visual-after {
          background: var(--bg-card); border-color: rgba(230, 57, 70, 0.18);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12);
          display: flex; flex-direction: column; gap: 14px;
        }

        /* Colonnes texte */
        .baf-copy { display: flex; flex-direction: column; gap: 14px; padding: 4px 0; }
        .baf-eyebrow {
          display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .baf-eyebrow-before { color: var(--text-muted); }
        .baf-eyebrow-after { color: var(--accent); }
        .baf-copy-title {
          font-size: clamp(22px, 2.6vw, 30px); font-style: italic; font-weight: 400;
          color: var(--text); line-height: 1.25; margin: 0;
        }
        .baf-list { list-style: none; margin: 4px 0 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .baf-list-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-family: var(--font-sans); font-size: 15.5px; font-weight: 300;
          color: var(--text-secondary); line-height: 1.55;
        }
        .baf-tiret { flex: none; font-weight: 500; line-height: 1.4; }
        .baf-tiret-gain { color: var(--accent); }

        /* AVANT — liste chiffrée (chiffre serif rouge + description) */
        .baf-costlist { gap: 17px; }
        .baf-cost-item { display: flex; align-items: baseline; gap: 15px; }
        .baf-cost-stat {
          flex: none; width: 112px;
          font-style: italic; font-weight: 400; line-height: 1.15;
          font-size: clamp(18px, 1.9vw, 23px); color: var(--accent);
        }
        .baf-cost-desc {
          font-family: var(--font-sans); font-size: 14.5px; font-weight: 300;
          color: var(--text-secondary); line-height: 1.5;
        }
        @media (max-width: 480px) { .baf-cost-stat { width: 88px; } }
        .baf-dot { width: 7px; height: 7px; border-radius: 50%; }
        .baf-dot-before { background: var(--text-muted); opacity: 0.6; }
        .baf-dot-after { background: var(--accent); }

        /* Flèche dessinée main — centrée, cache-toi en mobile */
        .baf-arrow {
          display: none;
          position: absolute; left: 50%; top: 50%;
          width: 118px; height: 150px;
          transform: translate(-58%, -54%) rotate(2deg);
          z-index: 12; pointer-events: none;
        }
        .baf-arrow svg { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 2px 6px rgba(230,57,70,0.18)); }
        @media (min-width: 900px) { .baf-arrow { display: block; } }

        .baf-stage { position: absolute; inset: 20px 12px 16px 12px; }

        /* floating real brand logos — desaturated */
        .baf-logo { position: absolute; display: block; }
        .baf-logo-inner {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          will-change: transform; filter: grayscale(1) opacity(0.5);
          animation: baf-float var(--dur, 8s) ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        .baf-logo-inner :global(svg) { width: 100%; height: 100%; display: block; }

        @keyframes baf-float {
          0%   { transform: translate(0,0) rotate(0deg); }
          50%  { transform: translate(var(--dx, 3px), calc(var(--amp, 6px) * -1)) rotate(var(--rot, 2deg)); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
        .baf-visual-before:hover .baf-logo-inner { animation-duration: 1s !important; --amp: 14px; --dx: 10px; --rot: 8deg; filter: grayscale(0.5) opacity(0.7); }

        .baf-speech-inner { display: block; animation: baf-float var(--dur, 9.5s) ease-in-out infinite; animation-delay: var(--d, 0s); }
        .baf-speech-card {
          display: block; position: relative; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 16px; box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12); padding: 12px 14px;
        }
        .baf-speech-tail {
          position: absolute; left: 30px; bottom: -7px; width: 14px; height: 14px;
          background: var(--bg-card); border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);
          transform: rotate(45deg); z-index: -1;
        }
        .baf-gib { display: block; font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.12em; color: var(--text-secondary); opacity: 0.8; line-height: 1.5; }
        .baf-gib-wavy { opacity: 0.65; text-decoration: underline wavy; text-underline-offset: 4px; }

        /* friction note-cards */
        .baf-note-wrap { position: absolute; display: block; }
        .baf-note-inner { display: block; animation: baf-float var(--dur, 8.5s) ease-in-out infinite; animation-delay: var(--d, 0s); }
        .baf-note {
          display: inline-flex; align-items: center; gap: 7px; white-space: nowrap;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.02em;
          color: var(--text-secondary); background: var(--bg-card);
          border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 6px 18px -12px rgba(15,23,42,0.18);
        }
        .baf-note-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text-muted); opacity: 0.6; flex: none; }
        .baf-note-alert { color: var(--accent); border-color: rgba(230,57,70,0.22); }
        .baf-note-alert .baf-note-dot { background: var(--accent); opacity: 1; }

        /* brand */
        .baf-brand { display: flex; align-items: center; gap: 11px; }
        .baf-mark {
          width: 36px; height: 36px; border-radius: 10px; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px -6px rgba(0,0,0,0.4);
        }
        .baf-mark :global(img) { width: 100%; height: 100%; object-fit: cover; }
        .baf-wordmark { font-size: 24px; line-height: 1; color: var(--text); }

        /* dashboard */
        .baf-dash {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          padding: 16px; display: flex; flex-direction: column; gap: 13px;
          transition: box-shadow .5s ease, border-color .5s ease;
        }
        .baf-visual-after:hover .baf-dash {
          border-color: color-mix(in srgb, var(--accent) 32%, var(--border));
          box-shadow: 0 10px 34px -14px color-mix(in srgb, var(--accent) 42%, transparent);
        }
        .baf-kpis { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; }
        .baf-kpi { background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 12px; }
        .baf-kpi-top { display: flex; align-items: center; justify-content: space-between; }
        .baf-kpi-ico { width: 22px; height: 22px; border-radius: 7px; }
        .baf-kpi-ico-accent { background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.22); }
        .baf-kpi-ico-muted { background: color-mix(in srgb, var(--text-secondary) 14%, transparent); border: 1px solid color-mix(in srgb, var(--text-secondary) 22%, transparent); }
        .baf-kpi-trend { display: inline-flex; align-items: center; color: var(--accent); background: var(--accent-subtle); padding: 2px 5px; border-radius: 6px; }
        .baf-kpi-trend :global(svg) { width: 11px; height: 11px; }
        .baf-kpi-line { height: 7px; border-radius: 4px; background: color-mix(in srgb, var(--text-secondary) 16%, transparent); margin-top: 7px; }
        .baf-kpi-line-strong { height: 11px; border-radius: 5px; background: color-mix(in srgb, var(--text-secondary) 34%, transparent); margin-top: 12px; }

        .baf-chart { background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 13px 14px; }
        .baf-bars { display: flex; align-items: flex-end; justify-content: space-between; gap: 9px; height: 62px; }
        .baf-bar { flex: 1; border-radius: 5px 5px 2px 2px; transform: scaleY(0.6); transform-origin: bottom; transition: transform .6s cubic-bezier(.22,1,.36,1); transition-delay: var(--bd, 0s); }
        .baf-visual-after:hover .baf-bar { transform: scaleY(1); }

        .baf-tasks { display: flex; flex-direction: column; gap: 9px; }
        .baf-task { display: flex; align-items: center; gap: 10px; }
        .baf-task-check { flex: none; width: 18px; height: 18px; border-radius: 6px; background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.22); display: flex; align-items: center; justify-content: center; color: var(--accent); }
        .baf-task-check :global(svg) { width: 11px; height: 11px; }
        .baf-task-line { height: 9px; border-radius: 5px; background: color-mix(in srgb, var(--text-secondary) 18%, transparent); }

        /* AI pill */
        .baf-pill {
          align-self: flex-start; display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--text-muted); background: transparent; border: 1px solid var(--border);
          border-radius: 999px; padding: 4px 10px 4px 8px;
        }
        .baf-pill :global(svg) { width: 11px; height: 11px; color: var(--accent); }

        /* Excel table floating in the mess */
        .baf-xls-inner { display: block; animation: baf-float var(--dur, 8.7s) ease-in-out infinite; animation-delay: var(--d, 0s); }
        .baf-xls {
          display: block; width: 100%; border-radius: 6px; overflow: hidden;
          border: 1px solid var(--border); background: var(--bg-card);
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 6px 18px -12px rgba(15,23,42,0.2);
          filter: grayscale(1); opacity: 0.5; transition: filter .5s ease, opacity .5s ease;
        }
        .baf-visual-before:hover .baf-xls { filter: grayscale(0.4); opacity: 0.72; }
        .baf-visual-before:hover .baf-xls-inner { animation-duration: 1s !important; --amp: 14px; --dx: 10px; --rot: 8deg; }
        .baf-xls-bar { display: block; height: 11px; background: #1D6F42; }
        .baf-xls-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .baf-xls-cell { height: 13px; border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .baf-xls-cell:nth-child(3n+1) { border-left: none; }
        .baf-xls-cell:nth-child(-n+3) { border-top: none; }
        .baf-xls-cell--fill { background: color-mix(in srgb, var(--text-secondary) 16%, transparent); }

        @media (prefers-reduced-motion: reduce) {
          .baf-logo-inner, .baf-speech-inner, .baf-note-inner, .baf-xls-inner, .baf-bar { animation: none !important; transition: none !important; }
          .baf-arrow-path { stroke-dashoffset: 0; animation: none; }
          .baf-arrow-head { opacity: 1; animation: none; }
          .baf-bar { transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}

function ArrowUpRight() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
}
function CheckMini() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
}
function Spark() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /></svg>
}
