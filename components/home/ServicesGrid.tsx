'use client'

import { Globe, Boxes, Camera, Megaphone } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * CE QU'ON CONSTRUIT (accueil, 8 novembre 2026) : les quatre métiers de
 * NateSystem tels que Nathan les a listés, site web et développement,
 * logiciel, contenu et réseaux sociaux, publicité. Remplace l'ancien
 * « Ce qu'on fait » en quatre étapes, qui doublait « Comment ça marche ».
 *
 * L'ancre #prestations est celle du pied de page. Le hongrois n'est pas relu
 * par un natif.
 */
export default function ServicesGrid() {
  const { lang } = useLang()
  const d = makeD(lang)

  const items = [
    {
      icon: Globe,
      title: d('Site web et développement', 'Website and development', 'Weboldal és fejlesztés'),
      text: d(
        'Un site à la hauteur de votre service : rapide, en plusieurs langues, relié à votre équipe, et trouvé sur Google.',
        'A website that matches your level of service: fast, multilingual, connected to your team, and found on Google.',
        'Az Ön szolgáltatásához méltó weboldal: gyors, többnyelvű, a csapatához kapcsolva, és megtalálható a Google-ön.'
      ),
    },
    {
      icon: Boxes,
      title: d('Logiciel sur mesure', 'Custom software', 'Egyedi szoftver'),
      text: d(
        'Demandes, réservations, prestataires, finances et reporting au même endroit, construit autour de votre façon de travailler. Le code vous appartient.',
        'Requests, bookings, suppliers, finances and reporting in one place, built around the way you work. You own the code.',
        'Kérések, foglalások, beszállítók, pénzügyek és riportok egy helyen, az Ön munkamódjára építve. A forráskód az Öné.'
      ),
    },
    {
      icon: Camera,
      title: d('Contenu et réseaux sociaux', 'Content and social media', 'Tartalom és közösségi média'),
      text: d(
        'Photos, vidéos, reels : du contenu qui ressemble à votre marque, publié régulièrement sans que vous ayez à y penser.',
        'Photos, videos, reels: content that looks like your brand, published steadily without you having to think about it.',
        'Fotók, videók, reelek: a márkájához illő tartalom, rendszeresen közzétéve, anélkül hogy foglalkoznia kellene vele.'
      ),
    },
    {
      icon: Megaphone,
      title: d('Publicité et acquisition', 'Ads and acquisition', 'Hirdetések és ügyfélszerzés'),
      text: d(
        'Campagnes Meta et Google vers des pages pensées pour convertir, chaque demande suivie jusqu’à la réservation.',
        'Meta and Google campaigns sent to pages built to convert, every enquiry tracked to the booking.',
        'Meta- és Google-kampányok konverzióra tervezett oldalakra, minden érdeklődés követve a foglalásig.'
      ),
    },
  ]

  return (
    <section id="prestations" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <span className="section-label">{d('Services', 'Services', 'Szolgáltatások')}</span>
        <h2 className="font-serif italic font-normal" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, marginTop: 18, maxWidth: 760, color: 'var(--text)' }}>
          {d('Tout ce que vos clients voient, et tout ce qui tourne derrière.', 'Everything your clients see, and everything that runs behind it.', 'Minden, amit az ügyfelei látnak, és minden, ami mögötte működik.')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 44 }}>
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
              <Icon size={20} strokeWidth={1.75} style={{ color: 'var(--accent)' }} />
              <h3 className="font-sans" style={{ fontSize: 19, fontWeight: 600, color: 'var(--text)', marginTop: 14 }}>{title}</h3>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: 8 }}>{text}</p>
            </article>
          ))}
        </div>
        <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 24 }}>
          {d(
            'Tout est relié : une demande venue d’Instagram arrive au même endroit qu’une demande venue du site.',
            'Everything is connected: a request from Instagram lands in the same place as a request from your website.',
            'Minden összekapcsolva: egy Instagramról érkező kérés ugyanoda kerül, mint a weboldalról érkező.'
          )}
        </p>
      </div>
    </section>
  )
}
