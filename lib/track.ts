/**
 * Send a GA4 key event (booking confirmed, WhatsApp click…).
 *
 * window.gtag only exists once the visitor clicked « Accepter » in the cookie
 * banner (components/site/CookieConsent.tsx). If it is not there yet because
 * the scripts are still loading, retry for a few seconds, then drop the event:
 * no consent, no event.
 */
export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  let tries = 0
  const send = () => {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
    if (typeof g === 'function') {
      g('event', name, params)
      return
    }
    if (++tries < 10) setTimeout(send, 500)
  }
  send()
}
