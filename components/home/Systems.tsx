'use client'

import {
  CalendarCheck,
  Contact,
  Users,
  Receipt,
  Globe,
  Search,
  Ticket,
  Megaphone,
  Route,
  Gem,
  BarChart3,
  BookOpen,
  Clock,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { CAL_LINK } from '@/lib/constants'
import { localizedHref } from '@/lib/routes'

type Card = {
  icon: LucideIcon
  title: string
  desc: string
  metric: string
  tag: 'org' | 'image' | 'data'
  sector?: string
  mockup: string
}

export default function Systems() {
  const { t, lang } = useLang()
  const d = makeD(lang)

  /* LES TROIS ÉTAGES (9 octobre 2026) : l'organisation, l'image en ligne, les
     données. Les cartes alternent les trois, pour que le carrousel ne montre
     jamais deux cartes du même étage côte à côte.
     ⚠︎ AUCUN CHIFFRE SUR LES NOUVELLES CARTES : aucun client de l'hospitalité
     n'est citable à ce jour. Le seul chiffre conservé est celui de la pointeuse,
     rapporté par le client. */
  const tagLabel = {
    org: d('Organisation', 'Organisation', 'Szervezet'),
    image: d('Image en ligne', 'Online presence', 'Online megjelenés'),
    data: d('Données', 'Data', 'Adatok'),
  }

  const cards: Card[] = [
    { icon: CalendarCheck, tag: 'org', mockup: 'systems/sys2',
      title: d('Le tableau des séjours et des événements', 'The stays and events board', 'A tartózkodások és események táblája'),
      desc: d('Chaque prestation de chaque séjour, son statut et sa reconfirmation. En rouge si personne n’a répondu.', 'Every service of every stay, its status and its reconfirmation. Red if nobody has answered.', 'Minden tartózkodás minden szolgáltatása, az állapota és az újbóli megerősítése. Piros, ha senki nem válaszolt.'),
      metric: d('Vous voyez la veille ce qui peut casser demain', 'You see the day before what could break tomorrow', 'Előző nap látja, mi romolhat el holnap'),
      sector: d('Conciergerie · Villas · Événements', 'Concierge · Villas · Events', 'Concierge · Villák · Események') },
    { icon: Globe, tag: 'image', mockup: 'systems/sys9',
      title: d('Un site à la hauteur de votre service', 'A website that lives up to your service', 'A szolgáltatásához méltó weboldal'),
      desc: d('Pensé pour votre clientèle, en plusieurs langues. Chaque demande faite sur le site arrive directement dans votre logiciel.', 'Designed for your clientele, in several languages. Every request made on the site lands straight in your software.', 'Az ügyfélköréhez tervezve, több nyelven. Minden, az oldalon érkező kérés egyenesen a szoftverébe kerül.'),
      metric: d('Plus une demande perdue dans une boîte mail', 'No more requests lost in an inbox', 'Nincs több postafiókban elveszett kérés'),
      sector: d('Image · Site', 'Brand · Website', 'Arculat · Weboldal') },
    { icon: Route, tag: 'data', mockup: 'systems/sys1',
      title: d('D’où vient chaque demande', 'Where each request comes from', 'Honnan jön minden kérés'),
      desc: d('Site, Google, campagne, salon, recommandation : chaque demande porte son origine, de la première visite jusqu’au séjour. Dans le respect du RGPD.', 'Website, Google, campaign, trade show, referral: each request carries its source, from the first visit to the stay. GDPR-compliant.', 'Weboldal, Google, kampány, kiállítás, ajánlás: minden kérés hordozza a forrását, az első látogatástól a tartózkodásig. GDPR-konform módon.'),
      metric: d('Vous savez enfin ce que rapporte chaque canal', 'You finally know what each channel brings in', 'Végre tudja, mit hoz az egyes csatornák'),
      sector: d('Données · Suivi', 'Data · Tracking', 'Adatok · Követés') },
    { icon: Contact, tag: 'org', mockup: 'systems/sys4',
      title: d('La fiche client partagée', 'The shared client profile', 'A közös ügyféladatlap'),
      desc: d('Préférences, allergies, promesses, historique des séjours, alimentés depuis WhatsApp et l’email, lisibles par toute l’équipe.', 'Preferences, allergies, promises, stay history, fed from WhatsApp and email, readable by the whole team.', 'Preferenciák, allergiák, ígéretek, korábbi tartózkodások, WhatsAppról és e-mailből táplálva, az egész csapat számára olvashatóan.'),
      metric: d('La mémoire du client ne part plus avec un collaborateur', 'Client memory no longer leaves with a team member', 'Az ügyfél emléke nem távozik egy munkatárssal'),
      sector: d('Accueil · Relation client', 'Front desk · Client relations', 'Recepció · Ügyfélkapcsolat') },
    { icon: Search, tag: 'image', mockup: 'systems/sys3',
      title: d('Le référencement', 'Search visibility', 'Keresőoptimalizálás'),
      desc: d('Être trouvé sur les recherches qui comptent pour votre lieu et votre clientèle, en français comme en anglais.', 'Being found on the searches that matter for your place and your clientele, in English as in French.', 'Megtalálhatóság azokon a kereséseken, amelyek a helyszíne és az ügyfélköre számára fontosak, magyarul és angolul is.'),
      metric: d('Chaque visite suivie jusqu’à la demande', 'Every visit tracked through to the request', 'Minden látogatás a kérésig követve'),
      sector: d('Image · SEO', 'Brand · SEO', 'Arculat · SEO') },
    { icon: Gem, tag: 'data', mockup: 'systems/sys10',
      title: d('Ce que rapporte chaque client', 'What each client brings in', 'Mit hoz az egyes ügyfelek'),
      desc: d('Ce qu’il a dépensé, sur quoi, combien de fois il est revenu. De quoi lui proposer ce qu’il aime, au bon moment.', 'What they spent, on what, how many times they came back. Enough to offer them what they like, at the right time.', 'Mennyit költött, mire, hányszor tért vissza. Elég ahhoz, hogy a megfelelő pillanatban azt ajánlja neki, amit szeret.'),
      metric: d('Vos meilleurs clients, enfin visibles', 'Your best clients, finally visible', 'A legjobb ügyfelei végre láthatóak'),
      sector: d('Données · Clients', 'Data · Clients', 'Adatok · Ügyfelek') },
    { icon: Users, tag: 'org', mockup: 'systems/sys6',
      title: d('Planning des équipes et des prestataires', 'Team and supplier rota', 'Csapat- és beszállítói beosztás'),
      desc: d('Ménage, accueil, chauffeurs, extras : qui fait quoi, quand, et qui manque. Un changement d’effectif se répercute partout.', 'Housekeeping, front desk, drivers, extra staff: who does what, when, and who is missing. A change in numbers ripples everywhere.', 'Takarítás, recepció, sofőrök, kisegítők: ki mit csinál, mikor, és ki hiányzik. A létszámváltozás mindenhol megjelenik.'),
      metric: d('Les absences vues le jour même', 'Absences seen the same day', 'A hiányzások aznap láthatók'),
      sector: d('Opérations', 'Operations', 'Üzemeltetés') },
    { icon: Ticket, tag: 'image', mockup: 'systems/sys5',
      title: d('Une page pour chaque événement', 'A page for every event', 'Oldal minden eseményhez'),
      desc: d('Un séminaire, un mariage, une saison : une page dédiée, à votre image, suivie de la première visite jusqu’à la demande.', 'A seminar, a wedding, a season: a dedicated page in your style, tracked from the first visit to the request.', 'Egy szeminárium, egy esküvő, egy szezon: saját oldal az Ön stílusában, az első látogatástól a kérésig követve.'),
      metric: d('Chaque événement a sa vitrine', 'Every event has its own showcase', 'Minden eseménynek saját kirakata van'),
      sector: d('Image · Événements', 'Brand · Events', 'Arculat · Események') },
    { icon: BarChart3, tag: 'data', mockup: 'systems/sys7',
      title: d('Le tableau de bord du dirigeant', 'The owner’s dashboard', 'A vezető irányítópultja'),
      desc: d('Réservations, chiffre, marges, sources, sur un seul écran, à jour. On arrête de demander, on regarde.', 'Bookings, revenue, margins, sources, on one screen, up to date. You stop asking, you look.', 'Foglalások, forgalom, árrések, források egyetlen képernyőn, naprakészen. Nem kell kérdezni, elég ránézni.'),
      metric: d('Des décisions prises sur des chiffres', 'Decisions made on numbers', 'Számokon alapuló döntések'),
      sector: d('Direction', 'Management', 'Vezetés') },
    { icon: Receipt, tag: 'org', mockup: 'systems/sys8',
      title: d('Devis, facturation et suivi de l’argent', 'Quotes, invoicing and money tracking', 'Árajánlatok, számlázás és pénzkövetés'),
      desc: d('Acomptes, soldes, cautions, commissions, en euros ou en dollars. Ce qui est dû, encaissé, à réclamer.', 'Deposits, balances, security deposits, commissions, in euros or dollars. What is owed, received, still to claim.', 'Előlegek, egyenlegek, kauciók, jutalékok, euróban vagy dollárban. Mi jár, mi folyt be, mit kell még behajtani.'),
      metric: d('L’argent du séjour au même endroit', 'All the money of a stay in one place', 'Egy tartózkodás minden pénze egy helyen'),
      sector: d('Finance', 'Finance', 'Pénzügy') },
    { icon: Megaphone, tag: 'image', mockup: 'systems/sys11',
      title: d('La stratégie de vos campagnes', 'Your campaign strategy', 'A kampányai stratégiája'),
      desc: d('Où diffuser, à qui, avec quel message. Et surtout ce que chaque campagne a vraiment produit, mesuré dans le même tableau de bord.', 'Where to run, to whom, with which message. And above all what each campaign really produced, measured in the same dashboard.', 'Hol, kinek, milyen üzenettel. És főleg: mit hozott valójában az egyes kampányok, ugyanabban az irányítópultban mérve.'),
      metric: d('Vous gardez ce qui marche, vous coupez le reste', 'You keep what works and cut the rest', 'Megtartja, ami működik, a többit leállítja'),
      sector: d('Image · Campagnes', 'Brand · Campaigns', 'Arculat · Kampányok') },
    { icon: BookOpen, tag: 'data', mockup: 'systems/sys3',
      title: d('Le savoir sort de la tête du dirigeant', 'Knowledge leaves the owner’s head', 'A tudás kikerül a vezető fejéből'),
      desc: d('Procédures, contacts des prestataires, usages de chaque lieu : cherchables en quelques secondes par toute l’équipe.', 'Procedures, supplier contacts, the habits of each place: searchable in seconds by the whole team.', 'Eljárások, beszállítói elérhetőségek, minden helyszín szokásai: az egész csapat számára másodpercek alatt kereshetők.'),
      metric: d('L’organisation ne dépend plus d’une seule personne', 'The organisation no longer depends on one person', 'A szervezet már nem egyetlen emberen múlik'),
      sector: d('Données · Savoir', 'Data · Knowledge', 'Adatok · Tudás') },
    { icon: Clock, tag: 'org', mockup: 'systems/sys10',
      title: d('Pointeuse et comptage d’heures', 'Time clock and hours tracking', 'Munkaidő-nyilvántartás'),
      desc: d('Pointage sur tablette ou téléphone, heures supplémentaires calculées sur vos règles, pas sur un modèle générique.', 'Clock-in on a tablet or phone, overtime calculated on your rules, not on a generic template.', 'Bejelentkezés tableten vagy telefonon, a túlórák az Ön szabályai szerint számolva, nem általános sablon alapján.'),
      metric: d('40 h par mois rendues, rapporté par l’Institut des Chartreux', '40 hours a month given back, as reported by Institut des Chartreux', 'Havi 40 óra visszanyerve, az Institut des Chartreux beszámolója szerint'),
      sector: d('RH · Multi-sites', 'HR · Multi-site', 'HR · Többtelephelyes') },
  ]

  // Duplicate the list for seamless infinite scroll
  const doubled = [...cards, ...cards]

  return (
    <section
      id="systemes"
      style={{ padding: '40px 0 56px', overflowX: 'hidden', maxWidth: '100vw' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px', padding: '0 24px' }}>
        <FadeUp className="text-center mb-12">
          <h2
            className="font-serif italic"
            style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, margin: '0 0 14px' }}
          >
            {t('systems.deployed')} {t('systems.measured')} <span className="accent">{t('systems.profitable')}</span>
          </h2>
          <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {d('Moins de ressaisie, moins de mauvaises surprises devant le client, et enfin des chiffres pour décider.', 'Less re-entering, fewer bad surprises in front of the client, and numbers to decide on at last.', 'Kevesebb újbóli bevitel, kevesebb kellemetlen meglepetés az ügyfél előtt, és végre számok a döntéshez.')}
          </p>
        </FadeUp>
      </div>

      {/* Marquee, overflow contained at two levels to survive iOS Safari */}
      <div className="systems-marquee-outer">
        <div className="systems-marquee-wrap" aria-hidden="false">
          <div className="systems-marquee">
            {doubled.map((card, i) => (
              <SystemCard
                key={`r1-${i}`}
                card={card}
                tagLabel={tagLabel[card.tag]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA principal « Je veux le mien » + lien secondaire vers les cas clients */}
      <div className="mx-auto text-center" style={{ maxWidth: '1100px', padding: '40px 24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <FadeUp>
          <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary">
            <span className="btn-primary-dot" />{d('Je veux le mien', 'I want mine', 'Kérem a sajátomat')} &rarr;
          </Link>
        </FadeUp>
        <FadeUp delay={0.05}>
          <Link href={localizedHref('/case-studies', lang)} className="arrow-link">
            {t('systems.allCases')}
          </Link>
        </FadeUp>
      </div>

      <style jsx>{`
        /* Outer wrapper: clamps to viewport so the inner max-content marquee
           never forces horizontal page scroll (iOS Safari has bugs with
           overflow-x: hidden on body when a descendant is wider) */
        .systems-marquee-outer {
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
          position: relative;
        }
        .systems-marquee-wrap {
          overflow: hidden;
          padding: 8px 0;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
        }
        .systems-marquee {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: systemsScroll 60s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .systems-marquee :global(.systems-card) {
          flex: 0 0 320px;
        }
        .systems-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes systemsScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (max-width: 540px) {
          .systems-marquee {
            gap: 12px;
            animation-duration: 40s;
          }
          .systems-marquee :global(.systems-card) {
            flex: 0 0 260px;
            padding: 20px 18px;
            min-height: 240px;
          }
        }
        /* IMPORTANT: we keep the loop running even when prefers-reduced-motion
           is set, because the marquee carries content (use cases) the user
           needs to discover, disabling animation would mean only the first
           cards are ever visible on mobile. */
      `}</style>
    </section>
  )
}

function SystemCard({ card, tagLabel }: { card: Card; tagLabel: string }) {
  const Icon = card.icon
  /* Les étages image et données portent l'accent, l'organisation reste neutre. */
  const isAI = card.tag !== 'org'

  return (
    <article
      className="systems-card"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '24px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        height: 470,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: 1.4,
            color: isAI ? 'var(--accent)' : 'var(--text-secondary)',
            background: isAI ? 'var(--accent-subtle)' : 'var(--bg-elevated)',
            padding: '4px 8px',
            borderRadius: 4,
            fontWeight: 600,
            textTransform: 'uppercase',
            border: isAI ? '1px solid var(--accent-glow)' : '1px solid var(--border)',
          }}
        >
          {tagLabel}
        </span>
        <Icon size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
      </div>

      <div style={{ height: 62, overflow: 'hidden' }}>
        <h4
          className="font-serif italic"
          style={{
            fontSize: 19,
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--text)',
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {card.title}
        </h4>
        {card.sector && (
          <p
            className="font-mono"
            style={{
              fontSize: 9.5,
              letterSpacing: 1.4,
              color: 'var(--text-muted)',
              fontWeight: 500,
              textTransform: 'uppercase',
              margin: '6px 0 0',
            }}
          >
            {card.sector}
          </p>
        )}
      </div>

      {/* Aperçu produit, mockup navigateur ENTIER (contain), légèrement flouté (déco, RGPD-safe) */}
      <div
        aria-hidden="true"
        style={{
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: 'var(--bg-elevated)',
        }}
      >
        <div style={{ height: 18, display: 'flex', alignItems: 'center', gap: 4, padding: '0 9px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.5 }} />
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.5 }} />
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.5 }} />
        </div>
        <div style={{ height: 136, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/realisations/${card.mockup}.jpg`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center', filter: 'blur(1.3px)' }}
          />
        </div>
      </div>

      <p
        className="font-sans"
        style={{
          fontSize: 12.5,
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
          fontWeight: 300,
          flex: 1,
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {card.desc}
      </p>

      <div
        style={{
          borderLeft: '2px solid var(--accent)',
          paddingLeft: 10,
          marginTop: 4,
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: 10.5,
            fontWeight: 500,
            color: 'var(--accent)',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {card.metric}
        </p>
      </div>
    </article>
  )
}
