'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import Divider from '@/components/ui/Divider'
import FadeUp from '@/components/ui/FadeUp'
import RelatedLinks from '@/components/ui/RelatedLinks'
import ServiceFit from '@/components/services/ServiceFit'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import { makeD, pick } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

// What we actually build inside a custom platform.
type Module = { titleFr: string; titleEn: string; titleHu: string; descFr: string; descEn: string; descHu: string; metricFr: string; metricEn: string; metricHu: string }

const modules: Module[] = [
  {
    titleFr: 'Une seule base pour toute l’organisation',
    titleEn: 'One base for the whole organisation', titleHu: 'Egyetlen adatbázis az egész szervezetnek',
    descFr: 'Clients, séjours, événements, fournisseurs, équipes : tout vit au même endroit. Une demande saisie une fois alimente le planning, le devis et la facture, sans rien recopier.',
    descEn: 'Clients, stays, events, suppliers, teams: everything lives in one place. A request entered once feeds the schedule, the quote and the invoice, with nothing retyped.', descHu: 'Ügyfelek, tartózkodások, rendezvények, beszállítók, csapatok: minden egy helyen van. Az egyszer rögzített kérés táplálja a beosztást, az árajánlatot és a számlát, átgépelés nélkül.',
    metricFr: 'Fin des ressaisies',
    metricEn: 'No more re-entering the same request', metricHu: 'Vége az újrarögzítésnek',
  },
  {
    titleFr: 'Les changements de dernière minute',
    titleEn: 'Last-minute changes', titleHu: 'Utolsó pillanatos változások',
    descFr: 'Un groupe passe de 40 à 20 personnes la veille : repas, planning des équipes, ménage et facture se recalculent. Vous validez, au lieu de tout refaire à la main.',
    descEn: 'A group drops from 40 to 20 guests the day before: meals, team rota, housekeeping and invoice are recalculated. You approve, instead of redoing it all by hand.', descHu: 'Egy csoport létszáma az előző napon 40-ről 20 főre csökken: az étkezések, a csapatbeosztás, a takarítás és a számla újraszámolódik. Ön jóváhagyja, ahelyett hogy mindent kézzel újracsinálna.',
    metricFr: 'L’outil propose, vous décidez',
    metricEn: 'The tool suggests, you decide', metricHu: 'Az eszköz javasol, Ön dönt',
  },
  {
    titleFr: 'Chaque équipe a son écran',
    titleEn: 'Every team gets its own screen', titleHu: 'Minden csapatnak saját képernyő',
    descFr: 'Réception, conciergerie, équipes terrain, direction : chacun voit ce qu’il doit faire, au bon moment. Le chauffeur est reconfirmé, la villa est prête, le chef est briefé avant l’arrivée du client.',
    descEn: 'Front desk, concierges, field teams, management: everyone sees what they need to do, at the right time. The driver is reconfirmed, the villa is ready, the chef is briefed before the client arrives.', descHu: 'Recepció, concierge, terepen dolgozó csapatok, vezetés: mindenki a megfelelő időben látja, mi a teendője. A sofőr megerősítve, a villa kész, a séf eligazítva, mielőtt az ügyfél megérkezik.',
    metricFr: 'Des séjours sans accroc',
    metricEn: 'Smoother stays', metricHu: 'Zökkenőmentes tartózkodások',
  },
  {
    titleFr: 'Vos chiffres, enfin clairs',
    titleEn: 'Your numbers, clear at last', titleHu: 'Végre világos számok',
    descFr: 'D’où vient chaque demande, ce que dépense chaque client, et sur quoi, en euros comme en dollars. Vous décidez sur des chiffres, plus sur ce que vous avez en tête. Les données restent chez vous, hébergées en UE.',
    descEn: 'Where each request comes from, what each client spends and on what, in euros or in dollars. You decide on numbers, not on what is in your head. The data stays with you, hosted in the EU.', descHu: 'Honnan érkezik az egyes kérés, mennyit költ az egyes ügyfél és mire, euróban vagy dollárban. Számok alapján dönt, nem az alapján, ami a fejében van. Az adatok Önnél maradnak, EU-s tárhelyen.',
    metricFr: 'Des décisions sur des chiffres',
    metricEn: 'Decisions based on numbers', metricHu: 'Számokon alapuló döntések',
  },
]

const painsFr = [
  'Les demandes arrivent sur WhatsApp, sur trois téléphones, et tout passe par vous',
  'Le logiciel générique ne colle pas, alors Excel reste ouvert à côté',
  'La même demande ressaisie trois à cinq fois, du devis à la facture',
  'Le chauffeur pas reconfirmé, la villa pas prête : le client l’apprend avant vous',
]
const painsEn = [
  'Requests come in on WhatsApp, across three phones, and everything goes through you',
  'Generic software does not fit, so Excel stays open next to it',
  'The same request re-entered three to five times, from quote to invoice',
  'The driver not reconfirmed, the villa not ready: your client finds out before you do',
]
const painsHu = [
  'A kérések WhatsAppon érkeznek, három telefonra, és minden Önön megy át',
  'Az általános szoftver nem illik Önökhöz, ezért az Excel ott marad mellette nyitva',
  'Ugyanazt a kérést háromszor-ötször rögzítik újra, az árajánlattól a számláig',
  'A sofőrt nem erősítették meg, a villa nincs kész: az ügyfél előbb tudja meg, mint Ön',
]

const guaranteesFr = [
  'Code source livré · vous êtes propriétaire à 100 %',
  'Données hébergées en UE · RGPD, en toute discrétion',
  'Un partenariat dans la durée · le système évolue avec vous, saison après saison',
  'Codé par le fondateur · pas de commercial, pas de junior',
]
const guaranteesEn = [
  'Source code delivered · you own 100 % of it',
  'Data hosted in the EU · GDPR, in complete discretion',
  'A long-term partnership · the system evolves with you, season after season',
  'Coded by the founder · no sales rep, no junior',
]
const guaranteesHu = [
  'Forráskód átadva · 100%-ban az Öné',
  'Adatok az EU-ban tárolva · GDPR, teljes diszkrécióval',
  'Hosszú távú partnerség · a rendszer szezonról szezonra Önnel együtt fejlődik',
  'Az alapító maga kódol · nincs értékesítő, nincs junior',
]

export default function LogicielSurMesurePage() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{d('Logiciel sur-mesure', 'Custom software', 'Egyedi szoftver')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('Vous saisissez une fois. ', 'Enter it once. ', 'Egyszer rögzíti. ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('Toute l’organisation suit.', 'The whole organisation follows.', 'Az egész szervezet követi.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'Un logiciel construit sur votre façon de recevoir vos clients : fournisseurs, équipes, séjours et événements, devis, facturation, au même endroit. L’outil propose, une personne décide : vous gardez la main sur chaque détail. Le code vous appartient à 100 %, et le système évolue avec vous, saison après saison.',
                'Software built around the way you serve your clients: suppliers, teams, stays and events, quotes, invoicing, all in one place. The tool suggests, a person decides: you keep control of every detail. You own 100 % of the code, and the system evolves with you, season after season.'
              , 'Az Ön vendégfogadási módjára épített szoftver: beszállítók, csapatok, tartózkodások és rendezvények, árajánlatok, számlázás, egy helyen. Az eszköz javasol, egy ember dönt: Ön minden részlet felett megtartja az irányítást. A forráskód 100%-ban az Öné, a rendszer pedig szezonról szezonra Önnel együtt fejlődik.')}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer, what is custom software (GEO-friendly) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Qu’est-ce qu’un ', 'What is ', 'Mi az ')}<span className="accent">{d('logiciel sur-mesure', 'custom software', 'egyedi szoftver')}</span>{d(' ?', '?', '?')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'C’est un logiciel construit pour votre organisation, au lieu d’un outil générique loué qui vous oblige à garder Excel ouvert à côté. Il réunit ce qui est aujourd’hui éparpillé entre WhatsApp, mails, tableurs et la tête d’une seule personne. Le code vous appartient, et le logiciel évolue avec votre activité, saison après saison.',
                'It is software built for your organisation, instead of a generic tool you rent that still leaves Excel open next to it. It brings together what is scattered today across WhatsApp, email, spreadsheets and one person’s head. You own the code, and the software evolves with your business, season after season.'
              , 'Az Ön szervezetére épített szoftver, nem pedig egy bérelt, általános eszköz, amely mellett az Excel továbbra is nyitva marad. Egy helyre hozza azt, ami ma szét van szórva a WhatsApp, az e-mailek, a táblázatok és egyetlen ember feje között. A forráskód az Öné, a szoftver pedig szezonról szezonra együtt fejlődik a tevékenységével.')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce que vous vivez aujourd’hui', 'What you live with today', 'Amit ma megél')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Tout passe par ', 'Everything goes through ', 'Minden ')}<span className="accent">{d('une seule personne.', 'one person.', 'egyetlen emberen megy át.')}</span>
            </h2>
          </FadeUp>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: 600, display: 'grid', gap: 13 }}>
            {pick(lang, { fr: painsFr, en: painsEn, hu: painsHu }).map((p) => (
              <li key={p} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1, fontWeight: 600 }}>·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* What we build */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Ce qu’on construit', 'What we build', 'Amit megépítünk')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Une saisie, ', 'One entry, ', 'Egy rögzítés, ')}<span className="accent">{d('tout le reste suit.', 'everything else follows.', 'minden más követi.')}</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {modules.map((s) => (
              <div key={s.titleEn} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 26px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12)' }}>
                <h3 className="font-serif italic" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0 }}>{d(s.titleFr, s.titleEn, s.titleHu)}</h3>
                <p className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>{d(s.descFr, s.descEn, s.descHu)}</p>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 12, marginTop: 4 }}>
                  <p className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', lineHeight: 1.4, margin: 0 }}>{d(s.metricFr, s.metricEn, s.metricHu)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Sur-mesure vs SaaS, mini, with internal link */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '36px 32px', boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.12)' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 14px', textAlign: 'center' }}>
                {d('Sur-mesure ou SaaS ?', 'Custom or SaaS?', 'Egyedi vagy SaaS?')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, maxWidth: 620, margin: '0 auto 18px', textAlign: 'center' }}>
                {d(
                  'Un SaaS est un outil standard, loué par abonnement, pensé pour la moyenne. Vos clients, eux, attendent un service qui ne ressemble à aucun autre. Un logiciel sur-mesure suit votre façon de recevoir, vous en êtes propriétaire, et il évolue avec vous. Il se justifie dès que vous gardez plusieurs outils et un tableur ouverts pour faire tenir l’ensemble.',
                  'A SaaS is a standard tool, rented by subscription, designed for the average. Your clients expect a service unlike any other. Custom software follows the way you serve them, you own it, and it evolves with you. It makes sense the moment you keep several tools and a spreadsheet open just to hold everything together.'
                , 'A SaaS szabványos, előfizetéssel bérelt eszköz, az átlagra tervezve. Az Ön ügyfelei viszont semmihez sem hasonlítható szolgáltatást várnak. Az egyedi szoftver az Ön vendégfogadási módját követi, az Öné, és Önnel együtt fejlődik. Akkor éri meg, amikor több eszközt és egy táblázatot kell nyitva tartania ahhoz, hogy minden összeálljon.')}
              </p>
              <p style={{ textAlign: 'center', margin: 0 }}>
                {/* Le comparatif détaillé n'existe qu'en français : on ne le
                    propose pas dans la version anglaise. */}
                {lang === 'fr' && (
                  <Link href="/logiciel-sur-mesure-vs-saas" className="arrow-link">
                    Le comparatif complet sur-mesure vs SaaS
                  </Link>
                )}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Guarantees */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
            {pick(lang, { fr: guaranteesFr, en: guaranteesEn, hu: guaranteesHu }).map((g) => (
              <li key={g} className="flex items-start gap-3" style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <RelatedLinks
        links={
          pick(lang, {
            fr: [
                { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Quand le sur-mesure se justifie.' },
                { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Ce qui fait varier le budget.' },
                { href: '/logiciel-sur-mesure-conseil', label: 'Exemple : conseil & bureaux d’études', desc: 'La même méthode, appliquée à un autre secteur.' },
                { href: '/glossaire', label: 'Glossaire', desc: 'Les termes du logiciel sur-mesure, en mots simples.' },
            ],
            en: [
                { href: '/services/ia', label: 'Automation', desc: 'First replies, reconfirmations, follow-ups, handled.' },
                { href: '/case-studies', label: 'Case studies', desc: 'What we built, and what it changed.' },
                { href: '/glossaire', label: 'Glossary', desc: 'The terms of custom software, in plain words.' },
            ],
            hu: [
                { href: '/services/ia', label: 'Automatizálás', desc: 'Első válaszok, megerősítések, emlékeztetők, elintézve.' },
                { href: '/case-studies', label: 'Esettanulmányok', desc: 'Amit megépítettünk, és amit megváltoztatott.' },
                { href: '/glossaire', label: 'Szójegyzék', desc: 'Az egyedi szoftver fogalmai, érthetően.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Votre façon de recevoir vos clients est ce qui vous distingue',
                'Vous voulez prendre du recul sur l’heure par heure sans perdre le contrôle',
                'Vous êtes prêt à nous montrer comment ça tourne vraiment (même flou, on clarifie ensemble)',
                'Vous cherchez un partenaire dans la durée, pas une prestation ponctuelle',
            ],
            en: [
                'The way you serve your clients is what sets you apart',
                'You want to step back from hour-by-hour work without losing control',
                'You are ready to show us how things really run (even if it is fuzzy, we clarify it together)',
                'You want a long-term partner, not a one-off job',
            ],
            hu: [
                'Az, ahogyan az ügyfeleit fogadja, az különbözteti meg Önt',
                'Ki szeretne lépni az óráról órára végzett munkából anélkül, hogy elveszítené az irányítást',
                'Készen áll megmutatni, hogyan működnek valójában a dolgok (ha homályos, együtt tisztázzuk)',
                'Hosszú távú partnert keres, nem egyszeri megbízást',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Un logiciel standard couvre déjà tous vos besoins',
                'Vous cherchez avant tout le moins cher, peu importe le résultat',
                'Vous voulez un outil livré une fois, puis plus jamais touché',
                'Vous voulez que vos clients remplissent des formulaires à votre place',
            ],
            en: [
                'A standard tool already covers everything you need',
                'You are looking for the cheapest option above all, whatever the result',
                'You want a tool delivered once and never touched again',
                'You want your clients to fill in forms so you do not have to',
            ],
            hu: [
                'Egy szabványos eszköz már mindent lefed, amire szüksége van',
                'Mindenekelőtt a legolcsóbbat keresi, bármi is az eredmény',
                'Egyszer átadott, aztán soha többé nem érintett eszközt szeretne',
                'Azt szeretné, hogy az ügyfelei töltsenek ki űrlapokat Ön helyett',
            ],
          })
        }
      />

      <Divider />

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp>
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)', borderRadius: 12, padding: '48px 40px', textAlign: 'center' }}>
              <h2 className="font-serif italic" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, marginBottom: 16, color: 'var(--text)' }}>
                {d('Saisissez une fois. Le reste suit.', 'Enter it once. The rest follows.', 'Rögzítse egyszer. A többi követi.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde comment les demandes circulent chez vous aujourd’hui, et où partent le temps, les erreurs et les clients. Vous repartez avec une vision claire, même si on ne travaille pas ensemble.',
                  'A free call. We look at how requests move through your organisation today, and where time, mistakes and clients slip away. You leave with a clear picture, even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük, hogyan haladnak ma a kérések a szervezetében, és hol vész el az idő, hol csúsznak be hibák, hol tűnnek el ügyfelek. Világos képpel távozik, akkor is, ha soha nem dolgozunk együtt.')}
              </p>
              <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 800px) {
          .svc-grid { grid-template-columns: 1fr; gap: 18px; }
        }
      `}</style>
    </main>
  )
}
