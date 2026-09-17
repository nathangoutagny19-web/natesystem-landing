'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import ScreenMock from '@/components/ui/ScreenMock'
import { useLang } from '@/components/providers/LangProvider'
import { localizedHref } from '@/lib/routes'
import type { TranslationKey } from '@/lib/i18n'
import { CAL_LINK } from '@/lib/constants'

/**
 * Cette page est servie telle quelle sous `/outils` et sous `/en/outils`
 * (voir `app/en/outils/page.tsx`, qui ré-exporte ce composant). Donc aucune
 * chaîne visible n'est écrite ici en dur : tout passe par `t()`, sinon la
 * version anglaise sert du français.
 */

type Tool = {
  nameKey: TranslationKey
  tagKey: TranslationKey
  problemKey: TranslationKey
  altKey: TranslationKey
  ctaKey: TranslationKey
  /** Externe : URL absolue. Interne : chemin français, préfixé /en en anglais. */
  href: string | null
  img: string | null
  soon?: boolean
}

// Le Prévisionnel : URL de démo qui marche aujourd'hui. À basculer sur
// https://previsionnel.natesystem.com une fois le domaine déployé.
const TOOLS: Tool[] = [
  {
    nameKey: 'outils.stock.name',
    tagKey: 'outils.stock.tag',
    problemKey: 'outils.stock.problem',
    altKey: 'outils.stock.alt',
    ctaKey: 'outils.cta.demo',
    href: 'https://stack-stock.natesystem.com',
    img: 'demos/stock',
  },
  {
    nameKey: 'outils.treso.name',
    tagKey: 'outils.treso.tag',
    problemKey: 'outils.treso.problem',
    altKey: 'outils.treso.alt',
    ctaKey: 'outils.cta.demo',
    href: 'https://natesystem-treso.vercel.app',
    img: 'demos/treso',
  },
  {
    nameKey: 'outils.diag.name',
    tagKey: 'outils.diag.tag',
    problemKey: 'outils.diag.problem',
    altKey: 'outils.diag.alt',
    ctaKey: 'outils.cta.test',
    href: '/outils/pret-pour-lia',
    img: 'demos/diagnostic-ia',
  },
  {
    nameKey: 'outils.actifs.name',
    tagKey: 'outils.actifs.tag',
    problemKey: 'outils.actifs.problem',
    altKey: 'outils.actifs.alt',
    ctaKey: 'outils.cta.demo',
    href: 'https://actifs.natesystem.com',
    img: 'demos/actifs',
  },
]

export default function OutilsPage() {
  const { lang, t } = useLang()

  /* Un lien interne écrit en français doit rester dans l'arbre anglais quand
     on est sous /en, sinon le premier clic renvoie le visiteur en français. */
  const loc = (path: string) => localizedHref(path, lang)
  const calHref = lang === 'en' ? `/en${CAL_LINK.slice(1)}` : CAL_LINK

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 860 }}>
          <FadeUp>
            <span className="section-label">{t('outils.hero.label')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 820, margin: '14px auto 22px' }}>
              {t('outils.hero.titlePrefix')}<span className="accent" style={{ color: 'var(--accent)' }}>{t('outils.hero.titleAccent')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 30px', lineHeight: 1.65 }}>
              {t('outils.hero.sub')}
            </p>
            <Link href={calHref} className="font-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, letterSpacing: 0.4, color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 3 }}>
              {t('outils.hero.link')} <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Grille des outils */}
      <section style={{ padding: '64px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <div className="outils-grid">
            {TOOLS.map((tool, i) => (
              <FadeUp key={tool.nameKey} delay={Math.min(i * 0.08, 0.3)}>
                <div className={`outil-card${tool.soon ? ' outil-card-soon' : ''}`}>
                  <div className="outil-head">
                    <span className="font-mono outil-tag">{t(tool.tagKey)}</span>
                    {tool.soon && <span className="font-mono outil-badge-soon">{t('outils.badge.soon')}</span>}
                  </div>
                  <h2 className="font-serif italic outil-name">{t(tool.nameKey)}</h2>
                  <p className="font-sans outil-problem">{t(tool.problemKey)}</p>

                  {tool.img ? (
                    <div className="outil-shot">
                      <ScreenMock src={`/realisations/${tool.img}.jpg`} alt={t(tool.altKey)} />
                    </div>
                  ) : (
                    <div className="outil-shot outil-shot-placeholder" aria-hidden="true">
                      <span className="font-mono">{t('outils.shot.soon')}</span>
                    </div>
                  )}

                  {tool.href ? (
                    tool.href.startsWith('/') ? (
                      <Link href={loc(tool.href)} className="btn-primary outil-cta">
                        <span className="btn-primary-dot" />{t(tool.ctaKey)} &rarr;
                      </Link>
                    ) : (
                      <a href={tool.href} target="_blank" rel="noopener noreferrer" className="btn-primary outil-cta">
                        <span className="btn-primary-dot" />{t(tool.ctaKey)} &rarr;
                      </a>
                    )
                  ) : (
                    <span className="outil-cta-soon font-mono">{t(tool.ctaKey)}</span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Sections descriptives (contenu indexé par Google) */}
      <section style={{ padding: '72px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <article style={{ marginBottom: 56 }}>
              <span className="section-label">{t('outils.stock.name')}</span>
              <h2 className="font-serif italic outil-desc-title">{t('outils.desc.stock.title')}</h2>
              <p className="outil-desc-p">{t('outils.desc.stock.p1')}</p>
              <p className="outil-desc-p">{t('outils.desc.stock.p2')}</p>
              <p className="outil-desc-p">{t('outils.desc.stock.p3')}</p>
            </article>

            <article style={{ marginBottom: 56 }}>
              <span className="section-label">{t('outils.treso.name')}</span>
              <h2 className="font-serif italic outil-desc-title">{t('outils.desc.treso.title')}</h2>
              <p className="outil-desc-p">{t('outils.desc.treso.p1')}</p>
              <p className="outil-desc-p">{t('outils.desc.treso.p2')}</p>
              <p className="outil-desc-p">{t('outils.desc.treso.p3')}</p>
            </article>

            <article>
              <span className="section-label">{t('outils.diag.name')}</span>
              <h2 className="font-serif italic outil-desc-title">{t('outils.desc.diag.title')}</h2>
              <p className="outil-desc-p">{t('outils.desc.diag.p1')}</p>
              <p className="outil-desc-p">
                {t('outils.desc.diag.p2')}{' '}
                <Link href={loc('/outils/pret-pour-lia')} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{t('outils.desc.diag.link')}</Link>
              </p>
            </article>

            <article style={{ marginTop: 56 }}>
              <span className="section-label">{t('outils.actifs.name')}</span>
              <h2 className="font-serif italic outil-desc-title">{t('outils.desc.actifs.title')}</h2>
              <p className="outil-desc-p">{t('outils.desc.actifs.p1')}</p>
              <p className="outil-desc-p">{t('outils.desc.actifs.p2')}</p>
              <p className="outil-desc-p">{t('outils.desc.actifs.p3')}</p>
            </article>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Bloc conversion */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {t('outils.conv.titlePrefix')}<span className="accent">{t('outils.conv.titleAccent')}</span>{t('outils.conv.titleSuffix')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {t('outils.conv.sub')}
              </p>
              <Link href={calHref} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{t('outils.conv.cta')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .outils-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        .outil-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px 20px 20px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12);
          transition: transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 280ms ease;
        }
        .outil-card:hover { transform: translateY(-3px); border-color: rgba(230,57,70,0.28); }
        .outil-card-soon { opacity: 0.92; }
        .outil-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 11px; }
        .outil-tag { font-size: 9.5px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--accent); font-weight: 600; }
        .outil-badge-soon {
          font-size: 9.5px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted);
          border: 1px solid var(--border); border-radius: 999px; padding: 3px 9px;
        }
        .outil-name { font-size: 21px; font-weight: 400; color: var(--text); line-height: 1.15; margin: 0 0 9px; }
        .outil-problem { font-size: 13px; font-weight: 300; color: var(--text-secondary); line-height: 1.55; margin: 0 0 18px; flex: 1; }
        .outil-shot { height: 132px; margin-bottom: 18px; }
        .outil-shot-placeholder {
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px; border: 1px dashed var(--border-hover); background: var(--bg-elevated);
        }
        .outil-shot-placeholder span { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); }
        .outil-cta { align-self: flex-start; font-size: 12.5px; padding-left: 16px; padding-right: 16px; }
        .outil-cta-soon {
          align-self: flex-start; font-size: 12px; letter-spacing: 0.5px; text-transform: uppercase;
          color: var(--text-muted); border: 1px solid var(--border); border-radius: 12px; padding: 12px 20px;
        }

        .outil-desc-title { font-size: clamp(22px, 3vw, 30px); font-weight: 400; color: var(--text); line-height: 1.2; margin: 4px 0 16px; }
        .outil-desc-p { font-size: 15.5px; font-weight: 300; color: var(--text-secondary); line-height: 1.75; margin: 0 0 16px; }

        @media (max-width: 1040px) {
          .outils-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        }
        @media (max-width: 560px) {
          .outils-grid { grid-template-columns: 1fr; }
          .outil-problem { flex: none; }
          .outil-name { font-size: 23px; }
          .outil-problem { font-size: 14px; }
          .outil-shot { height: 150px; }
        }
      `}</style>
    </main>
  )
}
