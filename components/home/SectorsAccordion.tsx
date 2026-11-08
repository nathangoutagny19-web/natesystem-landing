'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LES SECTEURS EN ACCORDÉON (accueil, 8 novembre 2026), sur le modèle de
 * gourmetmarketing.net : une colonne titre, une colonne de lignes qui
 * s'ouvrent une à une. Remplace l'ancien sélecteur de cartes.
 *
 * Ordre voulu par Nathan : le yacht, puis la conciergerie en deuxième, et la
 * sécurité privée de luxe dans la liste (segment en test, type HighWatch).
 * Le cadre : les métiers de service de l'hospitalité de luxe.
 *
 * ⚠︎ Aucun chiffre, aucun nom de client ici. Les douleurs viennent de la
 * recherche terrain (6:10prospection/03-recherche-marche/). Le hongrois n'est
 * pas relu par un natif.
 */
type Sector = { name: [string, string, string]; head: [string, string, string]; text: [string, string, string]; href?: string }

const SECTORS: Sector[] = [
  {
    name: ['Yacht : charter, gestion, agents', 'Yachts: charter, management, agents', 'Jachtok: bérlés, kezelés, ügynökök'],
    head: ['Chaque yacht suivi, chaque propriétaire informé.', 'Every yacht followed, every owner informed.', 'Minden jacht nyomon követve, minden tulajdonos tájékoztatva.'],
    text: [
      'Dépenses et factures par yacht, approbations du propriétaire, prestataires, équipage, relevé mensuel : on construit l’outil qui suit chaque bateau, et le site qui fait venir les clients.',
      'Expenses and invoices per yacht, owner approvals, suppliers, crew, the monthly statement: we build the tool that follows each boat, and the website that brings the clients.',
      'Jachtonkénti költségek és számlák, tulajdonosi jóváhagyások, beszállítók, legénység, havi kimutatás: megépítjük az eszközt, amely minden hajót követ, és a weboldalt, amely ügyfeleket hoz.',
    ],
    href: '/en/montenegro/tivat',
  },
  {
    name: ['Conciergeries de luxe', 'Luxury concierge services', 'Luxus concierge-szolgáltatások'],
    head: ['Toutes les demandes au même endroit, plus seulement dans votre téléphone.', 'Every request in one place, not just in your phone.', 'Minden kérés egy helyen, nem csak a telefonjában.'],
    text: [
      'WhatsApp, mail, Instagram : chaque demande est enregistrée, chaque prestataire relancé, la mémoire de chaque client gardée. Votre équipe prend le relais sans que le client sente la différence.',
      'WhatsApp, email, Instagram: every request is logged, every supplier chased, every client’s preferences remembered. Your team takes over without the client feeling the difference.',
      'WhatsApp, e-mail, Instagram: minden kérés rögzítve, minden beszállító nyomon követve, minden ügyfél preferenciái megőrizve. A csapata átveheti a munkát, az ügyfél nem érez különbséget.',
    ],
  },
  {
    name: ['Villas, chalets et gestion de propriétés', 'Villas, chalets and property management', 'Villák, faházak és ingatlankezelés'],
    head: ['Disponibilités, propriétaires et équipes, enfin synchronisés.', 'Availability, owners and teams, finally in sync.', 'Elérhetőség, tulajdonosok és csapatok, végre összehangolva.'],
    text: [
      'Les disponibilités vues d’un coup d’œil au lieu d’être vérifiées propriétaire par propriétaire, le ménage et la maintenance planifiés, les relevés propriétaires générés au lieu d’être refaits à la main.',
      'Availability at a glance instead of checked owner by owner, cleaning and maintenance scheduled, owner statements generated instead of rebuilt by hand.',
      'Az elérhetőség egy pillantással, nem tulajdonosonként ellenőrizve, a takarítás és a karbantartás ütemezve, a tulajdonosi kimutatások generálva, nem kézzel újraírva.',
    ],
  },
  {
    name: ['Sécurité privée de luxe', 'Luxury private security', 'Luxus magánbiztonság'],
    head: ['Missions, agents et rapports, sans un fil WhatsApp de plus.', 'Missions, agents and reports, without one more WhatsApp thread.', 'Megbízások, ügynökök és jelentések, egy újabb WhatsApp-szál nélkül.'],
    text: [
      'Protection rapprochée, sécurité d’événements, surveillance de villas et de yachts, audits de sûreté : le planning des agents, les comptes rendus et la facturation dans un outil discret, hébergé en Europe.',
      'Close protection, event security, villa and yacht surveillance, security audits: agent scheduling, mission reports and invoicing in one discreet tool, hosted in Europe.',
      'Személyvédelem, rendezvénybiztonság, villák és jachtok felügyelete, biztonsági auditok: az ügynökök beosztása, a jelentések és a számlázás egy diszkrét, Európában tárolt eszközben.',
    ],
  },
  {
    name: ['Hôtels indépendants et boutique hotels', 'Independent and boutique hotels', 'Független és boutique szállodák'],
    head: ['Plus de réservations directes, moins de ressaisie.', 'More direct bookings, less retyping.', 'Több közvetlen foglalás, kevesebb újragépelés.'],
    text: [
      'Un site et du contenu qui donnent envie de réserver chez vous plutôt que sur une plateforme, et un outil pour tout ce que votre logiciel hôtelier ne fait pas.',
      'A website and content that make guests book with you rather than on a platform, and a tool for everything your hotel software does not do.',
      'Weboldal és tartalom, amely miatt a vendégek Önnél foglalnak, nem egy platformon, és egy eszköz mindarra, amit a szállodai szoftvere nem tud.',
    ],
  },
  {
    name: ['Domaines et lieux de réception', 'Estates and event venues', 'Birtokok és rendezvényhelyszínek'],
    head: ['Un groupe change de nombre la veille : on remplit une fois, tout suit.', 'A group changes its numbers the day before: enter it once, everything follows.', 'Egy csoport előző nap módosít a létszámon: egyszer beírja, minden követi.'],
    text: [
      'Repas, planning du personnel, ménage et facture se mettent à jour d’une seule saisie. L’équipe garde la main sur ce qui compte : le plan de table, la chambre au calme.',
      'Meals, staff schedule, housekeeping and invoice update from a single entry. The team stays in charge of what matters: the seating plan, the quiet room.',
      'Az étkezések, a személyzeti beosztás, a takarítás és a számla egyetlen bevitellel frissül. A csapat kezében marad, ami számít: az ültetési rend, a csendes szoba.',
    ],
  },
]

export default function SectorsAccordion() {
  const { lang } = useLang()
  const d = makeD(lang)
  const i = lang === 'en' ? 1 : lang === 'hu' ? 2 : 0
  const [open, setOpen] = useState(0)

  return (
    <section id="secteurs" style={{ padding: '96px 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12" style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div>
          <span className="section-label">{d('Secteurs', 'Industries', 'Ágazatok')}</span>
          <h2 className="font-serif italic font-normal" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, marginTop: 18, color: 'var(--text)' }}>
            {d(
              'Les métiers du service, dans l’hospitalité de luxe.',
              'Service businesses in luxury hospitality.',
              'Szolgáltató vállalkozások a luxusvendéglátásban.'
            )}
          </h2>
          <p className="font-sans" style={{ fontSize: 16, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: 18, maxWidth: 440 }}>
            {d(
              'Des équipes de 3 à 50 personnes, une clientèle exigeante, et une organisation qui tient encore sur WhatsApp, Excel et la tête de quelqu’un.',
              'Teams of 3 to 50 people, demanding clients, and operations that still run on WhatsApp, Excel and someone’s memory.',
              '3–50 fős csapatok, igényes ügyfélkör, és egy működés, amely még mindig a WhatsAppon, az Excelen és valakinek az emlékezetén múlik.'
            )}
          </p>
        </div>

        <div>
          {SECTORS.map((s, k) => {
            const isOpen = open === k
            return (
              <div key={s.name[0]} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : k)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left font-sans"
                  style={{ padding: '22px 0', fontSize: 18, fontWeight: isOpen ? 500 : 400, color: isOpen ? 'var(--text)' : 'var(--text-secondary)', background: 'none', border: 0, cursor: 'pointer' }}
                >
                  <span>{s.name[i]}</span>
                  {isOpen ? <Minus size={18} style={{ color: 'var(--accent)' }} /> : <Plus size={18} style={{ color: 'var(--text-muted)' }} />}
                </button>
                {/* Le texte reste dans le HTML même fermé : Google le lit. */}
                <div hidden={!isOpen} style={{ paddingBottom: 24 }}>
                  <p className="font-serif italic" style={{ fontSize: 22, lineHeight: 1.3, color: 'var(--text)' }}>{s.head[i]}</p>
                  <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: 10 }}>{s.text[i]}</p>
                  {s.href && (
                    <Link href={s.href} className="font-sans" style={{ display: 'inline-block', marginTop: 12, fontSize: 14, color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      {d('Yacht à Tivat et au Monténégro →', 'Yachting in Tivat and Montenegro →', 'Jachtozás Tivatban és Montenegróban →')}
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
