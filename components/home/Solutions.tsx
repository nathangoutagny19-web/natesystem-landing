'use client'

import Link from 'next/link'
import { ArrowRight, Check, ClipboardCheck, Boxes, Brain, GraduationCap, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

type Solution = {
  icon: LucideIcon
  title: string
  target: string
  promise: string
  bullets: string[]
  ideal: string
  cta: string
  ctaSub: string
}

export default function Solutions() {
  const { t } = useLang()

  const infraSteps = [
    'sols.infra.step1', 'sols.infra.step2', 'sols.infra.step3',
    'sols.infra.step4', 'sols.infra.step5', 'sols.infra.step6',
  ] as const

  const solutions: Solution[] = [
    {
      icon: ClipboardCheck,
      title: t('sols.s1.title'),
      target: t('sols.s1.target'),
      promise: t('sols.s1.promise'),
      bullets: [
        t('sols.s1.bullet1'),
        t('sols.s1.bullet2'),
        t('sols.s1.bullet3'),
        t('sols.s1.bullet4'),
        t('sols.s1.bullet5'),
        t('sols.s1.bullet6'),
      ],
      ideal: t('sols.s1.ideal'),
      cta: t('sols.s1.cta'),
      ctaSub: t('sols.s1.ctaSub'),
    },
    {
      icon: Boxes,
      title: t('sols.s2.title'),
      target: t('sols.s2.target'),
      promise: t('sols.s2.promise'),
      bullets: [
        t('sols.s2.bullet1'),
        t('sols.s2.bullet2'),
        t('sols.s2.bullet3'),
        t('sols.s2.bullet4'),
        t('sols.s2.bullet5'),
        t('sols.s2.bullet6'),
      ],
      ideal: t('sols.s2.ideal'),
      cta: t('sols.s2.cta'),
      ctaSub: t('sols.s2.ctaSub'),
    },
    {
      icon: Brain,
      title: t('sols.s3.title'),
      target: t('sols.s3.target'),
      promise: t('sols.s3.promise'),
      bullets: [
        t('sols.s3.bullet1'),
        t('sols.s3.bullet2'),
        t('sols.s3.bullet3'),
        t('sols.s3.bullet4'),
        t('sols.s3.bullet5'),
        t('sols.s3.bullet6'),
      ],
      ideal: t('sols.s3.ideal'),
      cta: t('sols.s3.cta'),
      ctaSub: t('sols.s3.ctaSub'),
    },
  ]

  return (
    <section id="solutions" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('sols.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            {t('sols.title')}{' '}
            <span className="accent">{t('sols.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('sols.sub')}
          </p>
        </FadeUp>

        {/* Offre phare — Infrastructure digitale (le tout complet, ~offre premium) */}
        <FadeUp>
          <div className="infra-band">
            <span className="infra-eyebrow font-mono">{t('sols.infra.label')}</span>
            <h3 className="infra-title font-serif italic">{t('sols.infra.title')}</h3>
            <p className="infra-desc font-sans">{t('sols.infra.desc')}</p>
            <ol className="infra-steps">
              {infraSteps.map((k, i) => (
                <li key={k} className="infra-step">
                  <span className="infra-step-num font-mono">{i + 1}</span>
                  <span className="infra-step-txt font-sans">{t(k)}</span>
                </li>
              ))}
            </ol>
            <Link href={CAL_LINK} className="infra-cta">
              {t('sols.infra.cta')} <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </FadeUp>

        <div className="sols-grid">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
            <FadeUp key={s.title} delay={i * 0.1}>
              <article
                className="sols-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '36px 32px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  gap: 18,
                }}
              >
                {/* Icon-in-rounded-square (Impulse-style) — consistent across the 3 cards */}
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'var(--accent-subtle)',
                    border: '1px solid rgba(230,57,70,0.18)',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    lineHeight: 1.15,
                    color: 'var(--text)',
                    margin: 0,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {s.promise}
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18 }}>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      margin: '0 0 12px',
                    }}
                  >
                    {t('sols.includesLabel')}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2"
                        style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}
                      >
                        <Check size={14} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: 'var(--bg-elevated)',
                    borderRadius: 8,
                    padding: '12px 14px',
                    marginTop: 'auto',
                  }}
                >
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      margin: '0 0 4px',
                    }}
                  >
                    {t('sols.idealLabel')}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 12.5,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {s.ideal}
                  </p>
                </div>

                <Link
                  href={CAL_LINK}
                  className="sols-cta"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: 'var(--text)',
                    border: '1px solid var(--border-hover)',
                    padding: '14px 22px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition:
                    'background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.25s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  {s.cta} <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    margin: 0,
                    letterSpacing: 0.5,
                  }}
                >
                  {s.ctaSub}
                </p>
              </article>
            </FadeUp>
            )
          })}
        </div>

        {/* Offre séparée — Formation IA opérationnelle (wedge DIY, plus léger) */}
        <FadeUp delay={0.1}>
          <div className="form-band">
            <span className="form-icon" aria-hidden="true"><GraduationCap size={22} strokeWidth={1.8} /></span>
            <div className="form-body">
              <div className="form-top">
                <h3 className="form-title font-serif italic">{t('sols.form.title')}</h3>
                <span className="form-badge font-mono">{t('sols.form.badge')}</span>
              </div>
              <p className="form-desc font-sans">{t('sols.form.desc')}</p>
            </div>
            <div className="form-cta-wrap">
              <Link href={CAL_LINK} className="form-cta">
                {t('sols.form.cta')} <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <span className="form-ctasub font-mono">{t('sols.form.ctaSub')}</span>
            </div>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .sols-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        /* Card hover : lift léger + accent border + glow subtil */
        .sols-card {
          /* App-style resting shadow so white cards lift off the cold-grey surface */
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px -8px rgba(15, 23, 42, 0.08);
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 280ms ease,
                      box-shadow 280ms ease;
          will-change: transform;
        }
        .sols-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
          box-shadow: 0 18px 40px -22px var(--accent-glow),
                      0 1px 2px rgba(0, 0, 0, 0.04);
        }

        /* CTA hover : remplissage rouge + flèche qui glisse */
        .sols-cta :global(svg) {
          transition: transform 220ms ease;
        }
        .sols-cta:hover {
          background: var(--accent) !important;
          color: #fff !important;
          border-color: var(--accent) !important;
        }
        .sols-cta:hover :global(svg) {
          transform: translateX(3px);
        }
        .sols-cta:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sols-card,
          .sols-cta,
          .sols-cta :global(svg) {
            transition: none;
          }
          .sols-card:hover {
            transform: none;
          }
        }

        @media (max-width: 980px) {
          .sols-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        /* ── Offre phare : Infrastructure digitale ── */
        .infra-band {
          border: 1px solid rgba(230, 57, 70, 0.28);
          background: linear-gradient(180deg, var(--accent-subtle), var(--bg-card) 62%);
          border-radius: 16px;
          padding: 32px 32px 28px;
          margin-bottom: 22px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 20px 48px -32px var(--accent-glow);
        }
        .infra-eyebrow {
          display: block; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); font-weight: 600; margin-bottom: 10px;
        }
        .infra-title { font-size: 30px; font-weight: 400; line-height: 1.1; color: var(--text); margin: 0 0 10px; }
        .infra-desc {
          font-size: 14.5px; line-height: 1.6; color: var(--text-secondary);
          font-weight: 300; max-width: 720px; margin: 0 0 24px;
        }
        .infra-steps {
          list-style: none; margin: 0 0 24px; padding: 0;
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px 22px;
        }
        .infra-step { display: flex; align-items: flex-start; gap: 10px; }
        .infra-step-num {
          flex: none; width: 22px; height: 22px; border-radius: 7px;
          background: var(--accent-subtle); border: 1px solid rgba(230, 57, 70, 0.22);
          color: var(--accent); font-size: 11px; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
        }
        .infra-step-txt { font-size: 13px; line-height: 1.45; color: var(--text-secondary); font-weight: 300; }
        .infra-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff; border: 1px solid var(--accent);
          padding: 13px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none;
          transition: filter .2s ease, transform .2s cubic-bezier(0.34,1.56,0.64,1), box-shadow .25s ease;
        }
        .infra-cta :global(svg) { transition: transform .2s ease; }
        .infra-cta:hover { filter: brightness(1.06); }
        .infra-cta:hover :global(svg) { transform: translateX(3px); }

        /* ── Offre séparée : Formation IA opérationnelle ── */
        .form-band {
          margin-top: 22px; display: flex; align-items: center; gap: 22px;
          border: 1px solid var(--border); border-radius: 14px; background: var(--bg-card);
          padding: 22px 26px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .form-band:hover { border-color: var(--border-hover); box-shadow: 0 14px 32px -22px var(--accent-glow); }
        .form-icon {
          flex: none; width: 48px; height: 48px; border-radius: 12px;
          background: var(--accent-subtle); border: 1px solid rgba(230, 57, 70, 0.18);
          color: var(--accent); display: flex; align-items: center; justify-content: center;
        }
        .form-body { flex: 1; min-width: 0; }
        .form-top { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
        .form-title { font-size: 22px; font-weight: 400; line-height: 1.15; color: var(--text); margin: 0; }
        .form-badge {
          font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600;
          color: var(--accent); background: var(--accent-subtle); border: 1px solid rgba(230, 57, 70, 0.22);
          padding: 2px 8px; border-radius: 999px;
        }
        .form-desc { font-size: 13.5px; line-height: 1.55; color: var(--text-secondary); font-weight: 300; margin: 0; max-width: 640px; }
        .form-cta-wrap { flex: none; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .form-cta {
          display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;
          background: transparent; color: var(--text); border: 1px solid var(--border-hover);
          padding: 12px 20px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none;
          transition: background .2s ease, border-color .2s ease, color .2s ease, box-shadow .25s ease, transform .2s cubic-bezier(0.34,1.56,0.64,1);
        }
        .form-cta :global(svg) { transition: transform .2s ease; }
        .form-cta:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
        .form-cta:hover :global(svg) { transform: translateX(3px); }
        .form-ctasub { font-size: 10px; color: var(--text-muted); letter-spacing: 0.5px; }

        @media (max-width: 880px) {
          .infra-steps { grid-template-columns: 1fr; }
          .infra-title { font-size: 26px; }
          .form-band { flex-direction: column; align-items: flex-start; gap: 16px; }
          .form-cta-wrap { flex-direction: row; align-items: center; align-self: stretch; justify-content: space-between; }
        }
      `}</style>
    </section>
  )
}
