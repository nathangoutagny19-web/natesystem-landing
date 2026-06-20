'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * "Ask the AI of your choice" — social-proof via AI.
 * Each button opens ChatGPT / Claude / Perplexity with a pre-filled prompt
 * (URL included so web-reading tools land on the right site). Buttons use the
 * tactile press feel; brand glyphs are simple sketch marks in accent red.
 */

const PROMPT_KEY = 'askai.prompt'

const AIS = [
  { key: 'askai.chatgpt', href: (q: string) => `https://chatgpt.com/?q=${q}`, Glyph: GlyphChatGPT },
  { key: 'askai.claude', href: (q: string) => `https://claude.ai/new?q=${q}`, Glyph: GlyphClaude },
  { key: 'askai.perplexity', href: (q: string) => `https://www.perplexity.ai/search?q=${q}`, Glyph: GlyphPerplexity },
] as const

export default function AskAI() {
  const { t } = useLang()
  const q = encodeURIComponent(t(PROMPT_KEY))

  return (
    <section id="ask-ai" style={{ padding: '40px 24px 20px' }}>
      <div className="mx-auto text-center" style={{ maxWidth: '760px' }}>
        <FadeUp>
          <span className="section-label">{t('askai.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '640px', margin: '0 auto 18px' }}>
            {t('askai.title')}{' '}
            <span className="accent">{t('askai.titleAccent')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto 32px', lineHeight: 1.6, fontWeight: 300 }}>
            {t('askai.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="askai-row">
            {AIS.map(({ key, href, Glyph }) => (
              <a
                key={key}
                href={href(q)}
                target="_blank"
                rel="noopener noreferrer"
                className="askai-btn"
              >
                <span className="askai-glyph" aria-hidden="true"><Glyph /></span>
                {t(key)}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .askai-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        /* tactile press button — same physics as the site's primary buttons */
        .askai-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 22px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--text);
          font-family: var(--font-sans); font-size: 14px; font-weight: 500;
          text-decoration: none; white-space: nowrap; cursor: pointer;
          box-shadow: 0 1px 2px rgba(15,23,42,0.05), 0 8px 22px -16px rgba(15,23,42,0.18);
          transition: transform 0.16s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .askai-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.3);
          box-shadow: 0 12px 28px -14px rgba(230,57,70,0.3), 0 1px 2px rgba(15,23,42,0.05);
        }
        .askai-btn:active {
          transform: translateY(0) scale(0.97);
          box-shadow: 0 1px 3px rgba(15,23,42,0.12), inset 0 2px 6px rgba(15,23,42,0.1);
          transition-duration: 0.06s;
        }
        .askai-glyph {
          display: inline-flex; align-items: center; justify-content: center;
          width: 18px; height: 18px; color: var(--accent); flex: none;
        }
        .askai-glyph :global(svg) { width: 100%; height: 100%; display: block; overflow: visible; }

        @media (max-width: 560px) {
          .askai-row { flex-direction: column; }
          .askai-btn { width: 100%; max-width: 320px; justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .askai-btn { transition: box-shadow 0.2s ease, border-color 0.2s ease; }
          .askai-btn:hover, .askai-btn:active { transform: none; }
        }
      `}</style>
    </section>
  )
}

/* Sketch-style brand glyphs (organic stroke, accent red — not the official
   coloured logos, kept on-brand and minimal). */
const sk = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function GlyphChatGPT() {
  // a sketchy six-lobe knot, evoking the OpenAI mark
  return (
    <svg viewBox="0 0 24 24" {...sk}>
      <path d="M12 4.4c2.1-1 4.6-.2 5.7 1.8 1.9.4 3.1 2.3 2.6 4.2.9 1.7.3 3.9-1.4 4.9-.4 2-2.4 3.2-4.4 2.7-1.6 1.2-3.9.8-5.1-.9-2-.3-3.3-2.2-2.9-4.2-1-1.7-.5-3.9 1.2-5 .3-2 2.2-3.3 4.2-3 .7-.4 1.4-.7 2.1-.7Z" />
      <path d="M9.6 9.3 12 10.7l2.4-1.3M12 10.7v2.8" />
    </svg>
  )
}
function GlyphClaude() {
  // a sketchy starburst, evoking the Claude/Anthropic mark
  return (
    <svg viewBox="0 0 24 24" {...sk}>
      <path d="M12 3.5c.5 2.6 1 5 2.3 6.3 1.3 1.3 3.6 1.8 6.2 2.2-2.6.4-4.9.9-6.2 2.2-1.3 1.3-1.8 3.7-2.3 6.3-.5-2.6-1-5-2.3-6.3-1.3-1.3-3.6-1.8-6.2-2.2 2.6-.4 4.9-.9 6.2-2.2C11 8.5 11.5 6.1 12 3.5Z" />
    </svg>
  )
}
function GlyphPerplexity() {
  // a sketchy interlocking mark
  return (
    <svg viewBox="0 0 24 24" {...sk}>
      <path d="M12 4v16" />
      <path d="M12 7.5 6 4.5v7L12 14l6-2.5v-7L12 7.5Z" />
      <path d="M6 12.5v5l6 2.5 6-2.5v-5" />
    </svg>
  )
}
