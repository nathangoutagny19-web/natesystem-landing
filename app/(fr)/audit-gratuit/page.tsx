'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ClientsBar from '@/components/home/ClientsBar'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { API_URL } from '@/lib/constants'

/**
 * /audit-gratuit : la destination du bouton principal du hero (8 novembre 2026).
 *
 * Nathan : « pas un appel ». Le visiteur laisse son site et un moyen de le
 * joindre, Nathan regarde et revient vers lui personnellement. Cinq champs,
 * trois obligatoires : le moins de friction possible.
 *
 * ⚠︎ Jamais le mot « prototype » ici, et rien qui promette une construction
 * gratuite : la règle de la prospection (coach Mario, 24/10/2026). Pas de
 * délai de réponse promis non plus tant que Nathan n'en a pas fixé un.
 *
 * Même double envoi que /book, au mieux : la base de leads de l'ancien
 * backend et l'e-mail de notification (Resend, `source: 'audit'`). Une panne
 * de l'un ne bloque jamais le message de confirmation.
 */
export default function AuditGratuitPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  const [form, setForm] = useState({ prenom: '', email: '', site: '', telephone: '', details: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    const payload = {
      prenom: form.prenom.trim(),
      email: form.email.trim(),
      site: form.site.trim(),
      entreprise: form.site.trim().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0],
      telephone: form.telephone.trim(),
      details: form.details.trim(),
      resourceId: 'audit-gratuit',
      source: 'audit',
      newsletter: false,
      lang,
    }
    await Promise.allSettled([
      fetch(`${API_URL}/api/leads/capture`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
      fetch('/api/book/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
    ])
    setSent(true)
    setSending(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946]'
  const inputStyle = { background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }
  const labelClass = 'block font-sans text-xs mb-2'

  return (
    <>
      <Nav />
      <main className="relative flex flex-col items-center text-center" style={{ padding: '140px 20px 40px' }}>
        <span className="section-label" style={{ letterSpacing: 3 }}>
          {d('Audit gratuit', 'Free audit', 'Ingyenes audit')}
        </span>

        {sent ? (
          <div style={{ maxWidth: 620, marginTop: 28 }}>
            <h1 className="font-serif italic font-normal" style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', lineHeight: 1.1, color: 'var(--text)' }}>
              {d('C’est bien reçu.', 'Got it.', 'Megkaptuk.')}
            </h1>
            <p className="font-sans" style={{ fontSize: 17, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 20 }}>
              {d(
                'Je regarde votre site et la façon dont votre organisation reçoit ses clients, puis je reviens vers vous personnellement.',
                'I’ll look at your website and how your organisation looks after its clients, then I’ll get back to you personally.',
                'Megnézem a weboldalát és azt, ahogyan a szervezete a vendégeivel foglalkozik, majd személyesen jelentkezem.'
              )}
            </p>
            <p className="font-sans" style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 16 }}>Nathan Goutagny, NateSystem</p>
          </div>
        ) : (
          <>
            <h1
              className="font-serif italic font-normal"
              style={{ fontSize: 'clamp(34px, 4.8vw, 56px)', lineHeight: 1.08, maxWidth: 780, marginTop: 28, color: 'var(--text)' }}
            >
              {d(
                'Où votre organisation perd du temps, et des clients.',
                'Where your organisation loses time, and clients.',
                'Hol veszít a szervezete időt, és vendégeket.'
              )}
            </h1>
            <p
              className="font-sans"
              style={{ fontSize: 'clamp(15px, 2.6vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 640, lineHeight: 1.6, marginTop: 22 }}
            >
              {d(
                'Laissez-moi votre site. Je regarde comment vos demandes arrivent, ce qui repose sur une seule personne et ce qui pourrait tourner sans vous, puis je vous envoie mon audit, personnellement. Gratuit, sans engagement, sans appel à réserver.',
                'Leave me your website. I look at how your requests come in, what depends on a single person and what could run without you, then I send you my audit, personally. Free, no commitment, no call to book.',
                'Adja meg a weboldalát. Megnézem, hogyan érkeznek a kérések, mi múlik egyetlen emberen, és mi működhetne Ön nélkül, majd személyesen elküldöm az auditomat. Ingyenes, kötelezettség nélkül, hívásfoglalás nélkül.'
              )}
            </p>

            <form
              onSubmit={submit}
              className="w-full text-left"
              style={{ maxWidth: 560, marginTop: 36, padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg-card)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label>
                  <span className={labelClass} style={{ color: 'var(--text-secondary)' }}>{d('Prénom', 'First name', 'Keresztnév')} *</span>
                  <input type="text" required autoComplete="given-name" value={form.prenom} onChange={set('prenom')} className={inputClass} style={inputStyle} />
                </label>
                <label>
                  <span className={labelClass} style={{ color: 'var(--text-secondary)' }}>E-mail *</span>
                  <input type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={inputClass} style={inputStyle} />
                </label>
              </div>
              <label className="block mt-4">
                <span className={labelClass} style={{ color: 'var(--text-secondary)' }}>
                  {d('Le site de votre organisation', 'Your organisation’s website', 'A szervezete weboldala')} *
                </span>
                <input type="text" required inputMode="url" placeholder="www.…" value={form.site} onChange={set('site')} className={inputClass} style={inputStyle} />
              </label>
              <label className="block mt-4">
                <span className={labelClass} style={{ color: 'var(--text-secondary)' }}>
                  {d('Téléphone ou WhatsApp (facultatif)', 'Phone or WhatsApp (optional)', 'Telefon vagy WhatsApp (nem kötelező)')}
                </span>
                <input type="tel" autoComplete="tel" value={form.telephone} onChange={set('telephone')} className={inputClass} style={inputStyle} />
              </label>
              <label className="block mt-4">
                <span className={labelClass} style={{ color: 'var(--text-secondary)' }}>
                  {d(
                    'Ce qui vous prend le plus de temps aujourd’hui (facultatif)',
                    'What takes up most of your time today (optional)',
                    'Mi viszi el ma a legtöbb idejét (nem kötelező)'
                  )}
                </span>
                <textarea rows={3} value={form.details} onChange={set('details')} className={inputClass} style={{ ...inputStyle, resize: 'vertical' }} />
              </label>
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center" style={{ marginTop: 24, fontSize: 14, opacity: sending ? 0.7 : 1 }}>
                <span className="btn-primary-dot" />
                {sending
                  ? d('Envoi…', 'Sending…', 'Küldés…')
                  : d('Recevoir mon audit gratuit', 'Get my free audit', 'Kérem az ingyenes auditot')}{' '}
                →
              </button>
              <p className="font-sans text-center" style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 14 }}>
                {d(
                  'Vos informations servent uniquement à préparer votre audit.',
                  'Your details are only used to prepare your audit.',
                  'Adatait kizárólag az audit elkészítéséhez használjuk.'
                )}
              </p>
            </form>
          </>
        )}
      </main>
      <ClientsBar />
      <Footer />
    </>
  )
}
