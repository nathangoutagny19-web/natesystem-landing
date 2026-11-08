'use client'

import EditorialAccordion, { CaseCard } from '@/components/home/EditorialAccordion'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

/**
 * SERVICES (accueil, 8 novembre 2026) : les quatre métiers de NateSystem en
 * accordéon, à côté de la photo d'un vrai client, sur le modèle de la section
 * « Solutions » de gourmetmarketing.net. Remplace la grille de quatre cartes à
 * icônes (Nathan : « ça fait IA »).
 *
 * L'ancre #prestations est celle du pied de page. Le hongrois n'est pas relu
 * par un natif.
 */
export default function ServicesGrid() {
  const { lang } = useLang()
  const d = makeD(lang)

  const items = [
    {
      title: d('Site web et développement', 'Website and development', 'Weboldal és fejlesztés'),
      head: d('Un site à la hauteur de votre service.', 'A website that matches your service.', 'Az Ön szolgáltatásához méltó weboldal.'),
      text: d(
        'Rapide, en plusieurs langues, relié à votre équipe et trouvé sur Google. Chaque demande arrive au bon endroit.',
        'Fast, multilingual, connected to your team and found on Google. Every enquiry lands in the right place.',
        'Gyors, többnyelvű, a csapatához kapcsolva, és megtalálható a Google-ön. Minden érdeklődés a megfelelő helyre érkezik.'
      ),
    },
    {
      title: d('Logiciel sur mesure', 'Custom software', 'Egyedi szoftver'),
      head: d('Tout ce qui tourne derrière, au même endroit.', 'Everything that runs behind it, in one place.', 'Minden, ami a háttérben fut, egy helyen.'),
      text: d(
        'Demandes, réservations, prestataires, finances et reporting, construits autour de votre façon de travailler. Le code vous appartient.',
        'Requests, bookings, suppliers, finances and reporting, built around the way you work. You own the code.',
        'Kérések, foglalások, beszállítók, pénzügyek és riportok, az Ön munkamódjára építve. A forráskód az Öné.'
      ),
    },
    {
      title: d('Contenu et réseaux sociaux', 'Content and social media', 'Tartalom és közösségi média'),
      head: d('Du contenu qui ressemble à votre marque.', 'Content that looks like your brand.', 'A márkájához illő tartalom.'),
      text: d(
        'Photos, vidéos et reels publiés régulièrement, sans que vous ayez à y penser.',
        'Photos, videos and reels published steadily, without you having to think about it.',
        'Fotók, videók és reelek rendszeresen közzétéve, anélkül hogy foglalkoznia kellene vele.'
      ),
    },
    {
      title: d('Publicité et acquisition', 'Ads and acquisition', 'Hirdetések és ügyfélszerzés'),
      head: d('Des campagnes qui finissent en réservations.', 'Campaigns that end in bookings.', 'Kampányok, amelyek foglalással végződnek.'),
      text: d(
        'Meta et Google vers des pages pensées pour convertir, chaque demande suivie jusqu’à la réservation.',
        'Meta and Google sent to pages built to convert, every enquiry tracked to the booking.',
        'Meta és Google konverzióra tervezett oldalakra, minden érdeklődés követve a foglalásig.'
      ),
    },
  ]

  return (
    <section id="prestations" style={{ padding: '110px 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14" style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div>
          <span className="section-label">{d('Services', 'Services', 'Szolgáltatások')}</span>
          <h2 className="font-serif italic font-normal" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, marginTop: 18, marginBottom: 32, color: 'var(--text)' }}>
            {d('Tout ce que vos clients voient, et tout ce qui tourne derrière.', 'Everything your clients see, and everything that runs behind it.', 'Minden, amit az ügyfelei látnak, és minden, ami mögötte működik.')}
          </h2>
          <EditorialAccordion items={items} />
        </div>
        <div className="lg:pt-24">
          <CaseCard
            src="/realisations/zoltan-budapest.webp"
            alt={d('Nathan avec Kis Zoltán, à Budapest', 'Nathan with Kis Zoltán, in Budapest', 'Nathan Kis Zoltánnal Budapesten')}
            chip={d('Cas client · Budapest', 'Case study · Budapest', 'Esettanulmány · Budapest')}
            href={localizedHref('/case-studies/conseil-b2b-budapest', lang)}
          />
        </div>
      </div>
    </section>
  )
}
