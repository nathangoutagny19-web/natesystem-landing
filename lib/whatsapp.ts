/**
 * WhatsApp-first conversion: every CTA on the site funnels to a chat
 * with Nathan, pre-filled with a contextual message in the user's
 * language. The /book qualification form is preserved upstream — it
 * still POSTs the full payload to the backend, then drops the user
 * into WhatsApp with their first name injected into the message.
 *
 * Why a helper instead of a constant:
 *   - Direct CTAs (hero, footer, Nate widget) don't know the visitor's
 *     name → fall back to a generic intro.
 *   - /book CTAs do know the name → personalised intro.
 *   - Adding HU later is a one-line change in the switch.
 */

import type { Lang } from '@/components/providers/LangProvider'

/** International number, no leading + or spaces (wa.me format). */
const WA_NUMBER = '33652975883'

interface BuildOptions {
  /** Visitor's first name if captured by an upstream form. */
  firstName?: string
}

export function whatsappLink(lang: Lang, opts: BuildOptions = {}): string {
  const message = buildMessage(lang, opts)
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

function buildMessage(lang: Lang, { firstName }: BuildOptions): string {
  const trimmed = firstName?.trim()

  if (lang === 'en') {
    return trimmed
      ? `Hi Nathan, ${trimmed} here — I just saw your site and your approach speaks to me. I have a project in mind, can we talk?`
      : `Hi Nathan — I just saw your site and your approach speaks to me. I have a project in mind, can we talk?`
  }

  if (lang === 'hu') {
    return trimmed
      ? `Üdvözlöm Nathan, ${trimmed} vagyok — most láttam a weboldalát, és tetszik a megközelítése. Van egy projektem, beszélhetnénk róla?`
      : `Üdvözlöm Nathan — most láttam a weboldalát, és tetszik a megközelítése. Van egy projektem, beszélhetnénk róla?`
  }

  // 'fr' default
  return trimmed
    ? `Salut Nathan, ${trimmed} ici — je viens de voir ton site et ton approche me parle. J'ai un projet en tête, on en parle ?`
    : `Salut Nathan — je viens de voir ton site et ton approche me parle. J'ai un projet en tête, on en parle ?`
}
