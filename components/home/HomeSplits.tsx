'use client'

import SplitList from '@/components/home/SplitList'
import { SECTORS } from '@/components/home/Sectors'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { SECTOR_LIST, sectorHash } from '@/lib/sectors'

/**
 * LES DEUX SECTIONS EN DEUX COLONNES DE L'ACCUEIL (refonte du 14 novembre
 * 2026) : les quatre secteurs de la cible, puis les quatre services. Les
 * textes sont ceux déjà publiés sur la page Services ; les chiffres posés sur
 * les photos sont sourcés (les 40 h rapportées par l'Institut des Chartreux)
 * ou des faits (le code appartient au client).
 */
export function SectorsSplit() {
  const { lang } = useLang()
  const d = makeD(lang)

  const items = SECTOR_LIST.map((s) => {
    const det = SECTORS.find((x) => x.slug === s.slug)
    const builds = det ? pick(lang, { fr: det.buildsFr, en: det.buildsEn, hu: det.buildsHu }) : []
    return {
      key: s.slug,
      title: s.name[lang],
      glyph: s.glyph,
      body: (
        <>
          <p style={{ margin: 0 }}>{s.line[lang]}</p>
          <ul>{builds.map((b) => <li key={b}>{b}</li>)}</ul>
        </>
      ),
      href: localizedHref('/services', lang) + sectorHash(s.slug),
      linkLabel: d('Le détail pour ce métier', 'The detail for this trade', 'Részletek ehhez a szakmához'),
    }
  })

  return (
    <SplitList
      id="secteurs-accueil"
      label={d('Secteurs', 'Industries', 'Ágazatok')}
      title={
        <>
          {d('Les maisons qui servent ', 'Businesses that serve ', 'Vállalkozások, amelyek ')}
          <span className="accent">{d('une clientèle exigeante.', 'demanding clients.', 'igényes ügyfeleket szolgálnak ki.')}</span>
        </>
      }
      items={items}
      media={{
        src: '/realisations/chartreux-terrasse.webp',
        alt: d('Poignée de main sur une terrasse de Lyon, Fourvière derrière', 'Handshake on a terrace in Lyon, Fourvière behind', 'Kézfogás egy lyoni teraszon, mögötte Fourvière'),
        pos: '62% 30%',
        kpi: '40 h',
        kpiText: d('par mois rendues à l’équipe, rapporté par le client', 'a month given back to the team, as reported by the client', 'havonta visszaadva a csapatnak, az ügyfél beszámolója szerint'),
        tag: d('Institut des Chartreux · Lyon', 'Institut des Chartreux · Lyon', 'Institut des Chartreux · Lyon'),
        href: localizedHref('/case-studies', lang),
      }}
    />
  )
}

export function ServicesSplit() {
  const { lang } = useLang()
  const d = makeD(lang)

  const services = [
    {
      key: 'diagnostic',
      title: d('Le diagnostic', 'The diagnostic', 'A diagnózis'),
      line: d('On cartographie votre organisation et on vous montre où se perdent le temps et les clients.', 'We map how your business runs and show you where time and clients slip away.', 'Feltérképezzük a működését, és megmutatjuk, hol vész el az idő és hol tűnnek el az ügyfelek.'),
      points: [
        d('Le chemin d’une demande, du premier message à la facture', 'The path of a request, from first message to invoice', 'Egy kérés útja, az első üzenettől a számláig'),
        d('Les tâches qui prennent le plus d’heures', 'The tasks that take the most hours', 'A legtöbb órát elvivő feladatok'),
        d('Ce qu’il faut construire en premier', 'What to build first', 'Amit elsőként érdemes megépíteni'),
      ],
      href: '/services/audit',
    },
    {
      key: 'outil',
      title: d('L’outil sur mesure', 'The bespoke tool', 'Az egyedi eszköz'),
      line: d('Bâti sur vos prestataires, vos saisons et votre façon de travailler.', 'Built on your suppliers, your seasons and the way you work.', 'Az Ön beszállítóira, szezonjaira és munkamódjára építve.'),
      points: [
        d('Demandes et devis', 'Requests and quotes', 'Kérések és árajánlatok'),
        d('Prestataires et équipe', 'Suppliers and team', 'Beszállítók és csapat'),
        d('Espaces clients et propriétaires', 'Client and owner spaces', 'Ügyfél- és tulajdonosi felületek'),
      ],
      href: '/services/logiciel-sur-mesure',
    },
    {
      key: 'taches',
      title: d('Les tâches qui se font seules', 'Tasks that run themselves', 'Magától elvégzett feladatok'),
      line: d('Là où elles rendent de vraies heures à votre équipe, jamais ailleurs.', 'Where they give your team real hours back, nowhere else.', 'Ott, ahol valódi órákat adnak vissza a csapatának, sehol máshol.'),
      points: [
        d('Les relances et les reconfirmations de la veille', 'Follow-ups and day-before reconfirmations', 'Emlékeztetők és előző napi visszaigazolások'),
        d('Les devis préparés depuis vos tarifs', 'Quotes prepared from your rates', 'Az árai alapján előkészített árajánlatok'),
        d('Les comptes rendus et les relevés', 'Reports and owner statements', 'Jelentések és tulajdonosi kimutatások'),
      ],
      href: '/services/ia',
    },
    {
      key: 'formation',
      title: d('Formation et suivi', 'Training and support', 'Képzés és támogatás'),
      line: d('De la direction au terrain, jusqu’à ce que ça tourne sans nous.', 'From management to the field, until it runs without us.', 'A vezetéstől a terepig, amíg nélkülünk is működik.'),
      points: [
        d('Toute l’équipe formée, jusqu’à l’autonomie', 'The whole team trained until autonomous', 'Az egész csapat betanítva, amíg önálló nem lesz'),
        d('Un seul interlocuteur, celui qui code', 'One point of contact, the person who codes', 'Egyetlen kapcsolattartó, aki a kódot írja'),
        d('L’outil qui évolue, saison après saison', 'The tool keeps evolving, season after season', 'Az eszköz szezonról szezonra fejlődik'),
      ],
      href: '/services/formation',
    },
  ]

  return (
    <SplitList
      id="services-accueil"
      night
      reverse
      label={d('Services', 'Services', 'Szolgáltatások')}
      title={
        <>
          {d('Ce que nous construisons ', 'What we build ', 'Amit építünk ')}
          <span className="accent">{d('pour vous.', 'for you.', 'Önnek.')}</span>
        </>
      }
      items={services.map((s) => ({
        key: s.key,
        title: s.title,
        body: (
          <>
            <p style={{ margin: 0 }}>{s.line}</p>
            <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </>
        ),
        href: localizedHref(s.href, lang),
        linkLabel: d('Le détail du service', 'The service in detail', 'A szolgáltatás részletei'),
      }))}
      media={{
        src: '/realisations/zoltan-budapest.webp',
        alt: d('Poignée de main avec un client à Budapest', 'Handshake with a client in Budapest', 'Kézfogás egy ügyféllel Budapesten'),
        pos: 'center 30%',
        kpi: '100 %',
        kpiText: d('du code et des données vous appartiennent', 'of the code and data belong to you', 'a kód és az adatok az Önéi'),
        tag: d('Vendéglátás Menedzsment · Budapest', 'Vendéglátás Menedzsment · Budapest', 'Vendéglátás Menedzsment · Budapest'),
        href: localizedHref('/case-studies/conseil-b2b-budapest', lang),
      }}
    />
  )
}
