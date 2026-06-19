'use client'

import Image from 'next/image'
import { siGmail, siGooglesheets, siGoogledocs, siWhatsapp, siNotion, siTelegram, siHubspot, siAirtable } from 'simple-icons'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Before / After visual.
 * Left = the chaos: real brand logos (simple-icons, desaturated) floating in
 * disorder + a comic speech bubble of gibberish. Right = the order: a clean,
 * generic dashboard topped with the real NateSystem mark.
 * Hover: left logos get agitated, right dashboard "comes alive".
 * No center arrow. Charter-driven via CSS vars, dark-mode + responsive.
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

export default function Transformation() {
  const { t } = useLang()

  return (
    <section id="transformation" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('trans.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {t('trans.title')}{' '}
            <span className="accent">{t('trans.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="baf-grid">
            {/* ===== BEFORE — the overload ===== */}
            <div className="baf-left">
              <div className="baf-label baf-label-before">
                <span className="baf-dot baf-dot-before" />
                <span>{t('trans.beforeLabel')}</span>
              </div>

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

                {/* Friction artefacts — small note-cards that scream the mess */}
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

                {/* Speech bubble — gibberish, in the middle of the pile */}
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
              </div>
            </div>

            {/* ===== AFTER — the order ===== */}
            <div className="baf-right">
              <div className="baf-label baf-label-after">
                <span>{t('trans.afterLabel')}</span>
                <span className="baf-dot baf-dot-after" />
              </div>

              {/* real NateSystem mark */}
              <div className="baf-brand">
                <span className="baf-mark">
                  <Image src="/nate-mark.png" alt="NateSystem" width={36} height={36} />
                </span>
                <span className="font-serif baf-wordmark">NateSystem</span>
              </div>

              {/* generic dashboard */}
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

              {/* AI pill — small, minimal, "AI powered" */}
              <div className="baf-pill">
                <Spark />
                <span>{t('trans.aiTag')}</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="font-serif italic text-center"
            style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.4, maxWidth: '640px', margin: '48px auto 0' }}
          >
            {t('trans.punch')}
          </p>
        </FadeUp>
      </div>

      <style jsx>{`
        .baf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          align-items: stretch;
        }
        @media (min-width: 880px) { .baf-grid { grid-template-columns: 1fr 1fr; gap: 22px; } }

        .baf-left, .baf-right {
          position: relative; padding: 22px; min-height: 380px;
          border-radius: 12px; border: 1px solid var(--border);
        }
        .baf-left { background: var(--bg-elevated); }
        .baf-right {
          background: var(--bg-card); border-color: rgba(230, 57, 70, 0.18);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12);
          display: flex; flex-direction: column; gap: 14px;
        }

        .baf-label {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase; position: relative; z-index: 20;
        }
        .baf-label-before { color: var(--text-muted); }
        .baf-label-after { position: absolute; top: 22px; right: 22px; color: var(--accent); }
        .baf-dot { width: 7px; height: 7px; border-radius: 50%; }
        .baf-dot-before { background: var(--text-muted); opacity: 0.6; }
        .baf-dot-after { background: var(--accent); }

        .baf-stage { position: absolute; inset: 54px 12px 16px 12px; }

        /* floating real brand logos — desaturated/terne */
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
        .baf-left:hover .baf-logo-inner { animation-duration: 1s !important; --amp: 14px; --dx: 10px; --rot: 8deg; filter: grayscale(0.5) opacity(0.7); }

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
        .baf-right:hover .baf-dash {
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
        .baf-right:hover .baf-bar { transform: scaleY(1); }

        .baf-tasks { display: flex; flex-direction: column; gap: 9px; }
        .baf-task { display: flex; align-items: center; gap: 10px; }
        .baf-task-check { flex: none; width: 18px; height: 18px; border-radius: 6px; background: var(--accent-subtle); border: 1px solid rgba(230,57,70,0.22); display: flex; align-items: center; justify-content: center; color: var(--accent); }
        .baf-task-check :global(svg) { width: 11px; height: 11px; }
        .baf-task-line { height: 9px; border-radius: 5px; background: color-mix(in srgb, var(--text-secondary) 18%, transparent); }

        /* AI pill — small + minimal */
        .baf-pill {
          align-self: flex-start; display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--text-muted); background: transparent; border: 1px solid var(--border);
          border-radius: 999px; padding: 4px 10px 4px 8px;
        }
        .baf-pill :global(svg) { width: 11px; height: 11px; color: var(--accent); }

        @media (prefers-reduced-motion: reduce) {
          .baf-logo-inner, .baf-speech-inner, .baf-bar { animation: none !important; transition: none !important; }
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
