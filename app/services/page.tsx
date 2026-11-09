'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import WhatWeDo from '@/components/home/WhatWeDo'
import Sectors from '@/components/home/Sectors'
import Faq from '@/components/home/Faq'
import ComparisonV2 from '@/components/v2/ComparisonV2'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import type { Lang } from '@/lib/i18n'
import { localizedHref } from '@/lib/routes'

/**
 * LA PAGE SERVICES, UNE SEULE PAGE (refonte du 9 novembre 2026).
 *
 * Quatre services numérotés, chacun relié à sa page détaillée (gardée en
 * ligne pour le référencement, plus dans le menu), puis la méthode (l'ancienne
 * page /methode en une section : le 10-80-10), les quatre étapes, les métiers
 * en détail, le comparatif et la FAQ, partis de l'accueil, et l'appel final.
 *
 * Le JSON-LD suit la langue de la page : sous /en, les URL des sous-pages
 * pointent dans l'arbre anglais.
 */
function servicesJsonLd(lang: Lang) {
  const base = 'https://www.natesystem.com'
  const root = lang === 'en' ? `${base}/en` : lang === 'hu' ? `${base}/hu` : base
  const names =
    lang === 'en'
      ? ['The diagnostic', 'The bespoke tool', 'Tasks that run themselves', 'Training and support']
      : lang === 'hu'
        ? ['A diagnózis', 'Az egyedi eszköz', 'Magától elvégzett feladatok', 'Képzés és támogatás']
        : ['Le diagnostic', 'L’outil sur mesure', 'Les tâches qui se font seules', 'Formation et suivi']
  const paths = ['/services/audit', '/services/logiciel-sur-mesure', '/services/ia', '/services/formation']

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${root}/services#page`,
        name: lang === 'en' ? 'Our services' : lang === 'hu' ? 'Szolgáltatásaink' : 'Nos services',
        description:
          lang === 'en'
            ? 'NateSystem services for luxury hospitality: the diagnostic, the bespoke tool, tasks that run themselves, training and support. The code is yours.'
            : lang === 'hu'
              ? 'A NateSystem szolgáltatásai a luxusvendéglátásnak: diagnózis, egyedi eszköz, magától elvégzett feladatok, képzés és támogatás. A kód az Öné.'
              : 'Les services NateSystem pour l’hospitalité de luxe : le diagnostic, l’outil sur mesure, les tâches qui se font seules, la formation et le suivi. Le code vous appartient.',
        inLanguage: lang,
        isPartOf: { '@id': `${base}/#organization` },
      },
      {
        '@type': 'ItemList',
        itemListElement: names.map((name, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
          url: `${root}${paths[i]}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : lang === 'hu' ? 'Főoldal' : 'Accueil', item: root },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${root}/services` },
        ],
      },
    ],
  }
}

export default function ServicesPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  const services = [
    {
      title: d('Le diagnostic', 'The diagnostic', 'A diagnózis'),
      line: d(
        'On cartographie votre organisation et on vous montre où se perdent le temps et les clients.',
        'We map how your business runs and show you where time and clients slip away.',
        'Feltérképezzük a működését, és megmutatjuk, hol vész el az idő és hol tűnnek el az ügyfelek.'
      ),
      points: [
        d('Chaque rôle passé en revue, de la direction aux prestataires', 'Every role reviewed, from management to suppliers', 'Minden szerepkör átnézve, a vezetéstől a beszállítókig'),
        d('Le chemin d’une demande, du premier message à la facture', 'The path of a request, from first message to invoice', 'Egy kérés útja, az első üzenettől a számláig'),
        d('Les tâches qui prennent le plus d’heures', 'The tasks that take the most hours', 'A legtöbb órát elvivő feladatok'),
        d('Ce qu’il faut construire en premier', 'What to build first', 'Amit elsőként érdemes megépíteni'),
      ],
      example: null as string | null,
      href: '/services/audit',
    },
    {
      title: d('L’outil sur mesure', 'The bespoke tool', 'Az egyedi eszköz'),
      line: d(
        'Bâti sur vos prestataires, vos saisons et votre façon de travailler.',
        'Built on your suppliers, your seasons and the way you work.',
        'Az Ön beszállítóira, szezonjaira és munkamódjára építve.'
      ),
      points: [
        d('Demandes et devis', 'Requests and quotes', 'Kérések és árajánlatok'),
        d('Clients et préférences', 'Clients and preferences', 'Ügyfelek és preferenciák'),
        d('Prestataires et équipe', 'Suppliers and team', 'Beszállítók és csapat'),
        d('Facturation et extras', 'Invoicing and extras', 'Számlázás és extrák'),
        d('Espaces clients et propriétaires', 'Client and owner spaces', 'Ügyfél- és tulajdonosi felületek'),
        d('Une vue d’ensemble pour le dirigeant', 'The big picture for the person in charge', 'Áttekintés a vezetőnek'),
      ],
      example: d('Exemple : Institut des Chartreux, neuf tableurs remplacés par un seul outil.', 'Example: Institut des Chartreux, nine spreadsheets replaced by one tool.', 'Példa: Institut des Chartreux, kilenc táblázat helyett egyetlen eszköz.'),
      href: '/services/logiciel-sur-mesure',
    },
    {
      title: d('Les tâches qui se font seules', 'Tasks that run themselves', 'Magától elvégzett feladatok'),
      line: d(
        'Là où elles rendent de vraies heures à votre équipe, jamais ailleurs.',
        'Where they give your team real hours back, nowhere else.',
        'Ott, ahol valódi órákat adnak vissza a csapatának, sehol máshol.'
      ),
      points: [
        d('Les relances et les reconfirmations de la veille', 'Follow-ups and day-before reconfirmations', 'Emlékeztetők és előző napi visszaigazolások'),
        d('Les devis préparés depuis vos tarifs', 'Quotes prepared from your rates', 'Az árai alapján előkészített árajánlatok'),
        d('Les comptes rendus et les relevés', 'Reports and owner statements', 'Jelentések és tulajdonosi kimutatások'),
        d('Les rappels d’acompte et de solde', 'Deposit and balance reminders', 'Előleg- és egyenlegemlékeztetők'),
      ],
      example: d('Exemple : Vendéglátás Menedzsment, un système qui rédige ses rapports.', 'Example: Vendéglátás Menedzsment, a system that writes his reports.', 'Példa: Vendéglátás Menedzsment, egy rendszer, amely megírja a riportjait.'),
      href: '/services/ia',
    },
    {
      title: d('Formation et suivi', 'Training and support', 'Képzés és támogatás'),
      line: d(
        'De la direction au terrain, jusqu’à ce que ça tourne sans nous.',
        'From management to the field, until it runs without us.',
        'A vezetéstől a terepig, amíg nélkülünk is működik.'
      ),
      points: [
        d('Toute l’équipe formée, jusqu’à l’autonomie', 'The whole team trained until autonomous', 'Az egész csapat betanítva, amíg önálló nem lesz'),
        d('Le code et la documentation à vous', 'The code and documentation are yours', 'A kód és a dokumentáció az Öné'),
        d('Un seul interlocuteur, celui qui code', 'One point of contact, the person who codes', 'Egyetlen kapcsolattartó, aki a kódot írja'),
        d('L’outil qui évolue, saison après saison', 'The tool keeps evolving, season after season', 'Az eszköz szezonról szezonra fejlődik'),
      ],
      example: d('Exemple : Chromosome, « L’accompagnement a été super. »', 'Example: Chromosome, “The support was great.” (translated from French)', 'Példa: Chromosome, „A támogatás nagyszerű volt.” (franciából fordítva)'),
      href: '/services/formation',
    },
  ]

  const method = [
    {
      pct: '10 %',
      title: d('Vous choisissez', 'You choose', 'Ön választ'),
      text: d('Qui servir, comment, à quel prix : le jugement reste le vôtre.', 'Who to serve, how, at what price: the judgment stays yours.', 'Kit szolgál ki, hogyan, milyen áron: az ítélet az Öné marad.'),
    },
    {
      pct: '80 %',
      title: d('L’outil prend les heures', 'The tool takes the hours', 'Az eszköz átveszi az órákat'),
      text: d('La ressaisie, les relances, les documents, les reconfirmations.', 'Re-entry, follow-ups, documents, reconfirmations.', 'Újbóli bevitel, emlékeztetők, dokumentumok, visszaigazolások.'),
    },
    {
      pct: '10 %',
      title: d('Vous validez', 'You approve', 'Ön jóváhagy'),
      text: d('Rien ne part chez un client ou un prestataire sans votre accord.', 'Nothing goes out to a client or a supplier without your OK.', 'Semmi sem megy ki ügyfélhez vagy beszállítóhoz az Ön jóváhagyása nélkül.'),
    },
  ]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd(lang)) }} />
      <Nav />

      {/* Hero */}
      <section className="lx-section" style={{ paddingTop: 'clamp(150px, 18vw, 200px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}>
        <div className="lx-wrap">
          <FadeUp>
            <span className="lx-eyebrow">Services</span>
            <h1 className="lx-title" style={{ fontSize: 'clamp(38px, 5.6vw, 68px)', maxWidth: '16ch' }}>
              {d('Ce que nous construisons ', 'What we build ', 'Amit ')}
              <span className="accent">{d('pour vous.', 'for you.', 'Önnek építünk.')}</span>
            </h1>
            <p className="lx-lead">
              {d(
                'De la première demande à la dernière facture, un seul outil, construit autour de votre façon de travailler.',
                'From the first request to the last invoice, one tool, built around the way you work.',
                'Az első kéréstől az utolsó számláig egyetlen eszköz, az Ön munkamódjára építve.'
              )}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Quatre services numérotés */}
      <section id="nos-services" style={{ padding: '0 24px clamp(96px, 12vw, 150px)' }}>
        <div className="lx-wrap">
          {services.map((s, i) => (
            <FadeUp key={s.href}>
              <article className="sv-row">
                <span className="font-mono sv-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-serif italic sv-title">{s.title}</h2>
                  <p className="font-sans sv-line">{s.line}</p>
                  {s.example && <p className="font-sans sv-example">{s.example}</p>}
                  <Link href={localizedHref(s.href, lang)} className="sv-more">
                    {d('En savoir plus', 'Learn more', 'Részletek')} <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <ul className="sv-points">
                  {s.points.map((p) => (
                    <li key={p} className="font-sans">{p}</li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* La méthode, l'ancienne page /methode en une section : le 10-80-10 */}
      <section id="methode" className="lx-section" style={{ background: '#0e0e12' }}>
        <div className="lx-wrap">
          <FadeUp>
            <span className="lx-eyebrow" style={{ color: 'rgba(240,240,242,0.5)' }}>{d('La méthode', 'The method', 'A módszer')}</span>
            <h2 className="lx-title" style={{ color: '#f0f0f2' }}>
              {d('Vous décidez, ', 'You decide, ', 'Ön dönt, ')}
              <span className="accent">{d('l’outil fait le reste.', 'the tool does the rest.', 'az eszköz elvégzi a többit.')}</span>
            </h2>
          </FadeUp>
          <div className="mt-grid">
            {method.map((m, i) => (
              <FadeUp key={m.title} delay={0.08 * i}>
                <div className="mt-col">
                  <span className="font-serif italic mt-pct">{m.pct}</span>
                  <h3 className="font-sans mt-title">{m.title}</h3>
                  <p className="font-sans mt-text">{m.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comment on travaille : les quatre étapes */}
      <WhatWeDo />

      {/* Les métiers en détail */}
      <Sectors />

      {/* Le comparatif, parti de l'accueil */}
      <ComparisonV2 />

      {/* FAQ */}
      <Faq />

      {/* Appel final */}
      <section className="lx-section">
        <div className="lx-narrow" style={{ textAlign: 'center' }}>
          <FadeUp>
            <h2 className="lx-title" style={{ margin: '0 auto', maxWidth: 'none' }}>
              {d('Parlons de ', 'Let’s talk about ', 'Beszéljünk ')}
              <span className="accent">{d('votre maison.', 'your business.', 'a vállalkozásáról.')}</span>
            </h2>
            <p className="lx-lead" style={{ margin: '22px auto 36px' }}>
              {d(
                '20 minutes sur Google Meet. Vous m’expliquez comment vous travaillez aujourd’hui, je vous dis ce qu’on peut vous rendre.',
                '20 minutes on Google Meet. You tell me how you work today, I tell you what we can give back to you.',
                '20 perc Google Meeten. Ön elmondja, hogyan dolgozik ma, én megmondom, mit tudunk visszaadni Önnek.'
              )}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
              <span className="btn-primary-dot" />{d('Réserver un appel', 'Book a call', 'Hívás foglalása')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Footer />
      <MobileCta />

      <style jsx>{`
        .sv-row {
          display: grid; grid-template-columns: 72px minmax(0, 1.2fr) minmax(0, 1fr); gap: 32px;
          padding: 56px 0; border-top: 1px solid var(--border);
        }
        .sv-num { font-size: 12px; letter-spacing: 2px; color: var(--accent); padding-top: 12px; }
        .sv-title { font-size: clamp(28px, 3vw, 38px); font-weight: 400; line-height: 1.12; color: var(--text); margin: 0; }
        .sv-line { font-size: 16.5px; font-weight: 300; line-height: 1.7; color: var(--text-secondary); margin: 16px 0 0; max-width: 460px; }
        .sv-example { font-size: 14px; font-weight: 400; color: var(--text); margin: 18px 0 0; max-width: 460px; }
        :global(.sv-more) {
          display: inline-flex; gap: 8px; margin-top: 22px; font-family: var(--font-sans); font-size: 14px; font-weight: 500;
          color: var(--text); text-decoration: none; border-bottom: 1px solid var(--border-hover); padding-bottom: 3px;
        }
        :global(.sv-more:hover) { color: var(--accent); border-color: var(--accent); }
        .sv-points { list-style: none; margin: 0; padding: 8px 0 0; }
        .sv-points li {
          font-size: 15px; font-weight: 400; color: var(--text); line-height: 1.45;
          padding: 12px 0; border-bottom: 1px solid var(--border);
        }
        .sv-points li:first-child { padding-top: 0; }
        .mt-grid { margin-top: 64px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px; }
        .mt-pct { font-size: clamp(44px, 5vw, 64px); line-height: 1; color: #f0f0f2; }
        .mt-col:nth-child(2) .mt-pct, :global(.mt-grid > div:nth-child(2)) .mt-pct { color: var(--accent); }
        .mt-title { font-size: 16px; font-weight: 500; color: #f0f0f2; margin: 20px 0 8px; }
        .mt-text { font-size: 15px; font-weight: 300; line-height: 1.65; color: rgba(240, 240, 242, 0.65); margin: 0; }
        @media (max-width: 860px) {
          .sv-row { grid-template-columns: 1fr; gap: 14px; padding: 40px 0; }
          .sv-num { padding-top: 0; }
          .sv-title { font-size: 28px; }
          .sv-line { font-size: 15.5px; }
          .mt-grid { grid-template-columns: 1fr; gap: 36px; margin-top: 44px; }
        }
      `}</style>
    </main>
  )
}
