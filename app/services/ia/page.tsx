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

type Capability = { titleFr: string; titleEn: string; titleHu: string; descFr: string; descEn: string; descHu: string; metricFr: string; metricEn: string; metricHu: string }

const capabilities: Capability[] = [
  {
    titleFr: 'Première réponse dans la langue du client',
    titleEn: 'A first reply in the client’s language', titleHu: 'Első válasz az ügyfél nyelvén',
    descFr: 'Chaque demande reçoit un accusé de réception soigné, dans la langue du client, même tard le soir. Une proposition de réponse est préparée pour votre équipe, qui relit et envoie.',
    descEn: 'Every request gets a careful acknowledgment, in the client’s language, even late at night. A draft reply is prepared for your team, who read it and send it.', descHu: 'Minden kérés gondos visszaigazolást kap, az ügyfél nyelvén, késő este is. A csapata számára elkészül egy válaszjavaslat, amelyet átolvasnak és elküldenek.',
    metricFr: 'Des réponses plus rapides',
    metricEn: 'Faster responses', metricHu: 'Gyorsabb válaszok',
  },
  {
    titleFr: 'WhatsApp transformé en demandes claires',
    titleEn: 'WhatsApp turned into clear requests', titleHu: 'WhatsAppból rendezett kérések',
    descFr: 'Dates, nombre de personnes, envies, contraintes : le fil de discussion devient une demande structurée, prête pour le devis. Plus rien ne dort dans un téléphone.',
    descEn: 'Dates, number of guests, wishes, constraints: the chat thread becomes a structured request, ready for the quote. Nothing sits forgotten in a phone any more.', descHu: 'Dátumok, létszám, kívánságok, feltételek: a beszélgetésből rendezett kérés lesz, árajánlatra készen. Semmi sem ragad többé egy telefonban.',
    metricFr: 'Plus une demande oubliée',
    metricEn: 'No request forgotten', metricHu: 'Egyetlen elfelejtett kérés sem',
  },
  {
    titleFr: 'Reconfirmations automatiques',
    titleEn: 'Automatic reconfirmations', titleHu: 'Automatikus megerősítések',
    descFr: 'Le chauffeur, le chef, l’équipe de ménage, le prestataire : chacun reçoit son rappel au bon moment et confirme. Si quelqu’un ne répond pas, vous le savez avant votre client.',
    descEn: 'The driver, the chef, the housekeeping team, the supplier: each gets a reminder at the right time and confirms. If someone does not answer, you know before your client does.', descHu: 'A sofőr, a séf, a takarítócsapat, a szolgáltató: mindenki a megfelelő időben kap emlékeztetőt, és visszaigazol. Ha valaki nem válaszol, Ön előbb tudja meg, mint az ügyfele.',
    metricFr: 'Des séjours sans mauvaise surprise',
    metricEn: 'Stays without bad surprises', metricHu: 'Tartózkodások kellemetlen meglepetések nélkül',
  },
  {
    titleFr: 'Relances d’acompte et suivi',
    titleEn: 'Deposit follow-ups', titleHu: 'Előleg-emlékeztetők és nyomon követés',
    descFr: 'Les acomptes et les soldes sont suivis, en euros comme en dollars. Les relances partent seules, avec le ton de votre organisation, et s’arrêtent dès que le client a payé.',
    descEn: 'Deposits and balances are tracked, in euros or in dollars. Follow-ups go out on their own, in your organisation’s tone, and stop as soon as the client has paid.', descHu: 'Az előlegek és a hátralékok nyomon követve, euróban és dollárban egyaránt. Az emlékeztetők maguktól mennek ki, a szervezete hangnemében, és leállnak, amint az ügyfél fizetett.',
    metricFr: 'Plus un acompte oublié',
    metricEn: 'No deposit forgotten', metricHu: 'Egyetlen elfelejtett előleg sem',
  },
]

const painsFr = [
  'Les demandes arrivent sur WhatsApp, par mail, par téléphone, et quelqu’un doit tout trier',
  'Un client écrit le soir, dans sa langue, et attend la réponse jusqu’au lendemain',
  'Les reconfirmations du chauffeur, du chef ou du ménage se font de tête',
  'Les acomptes à relancer se perdent entre deux urgences',
  'Vous craignez un robot froid qui parle à vos clients à votre place',
]
const painsEn = [
  'Requests come in on WhatsApp, by email and by phone, and someone has to sort it all',
  'A client writes in the evening, in their own language, and waits until the next day for a reply',
  'Reconfirming the driver, the chef or housekeeping is done from memory',
  'Deposits to chase get lost between two emergencies',
  'You fear a cold robot talking to your clients in your place',
]
const painsHu = [
  'A kérések WhatsAppon, e-mailben és telefonon érkeznek, és valakinek mindet szét kell válogatnia',
  'Egy ügyfél este, a saját nyelvén ír, és másnapig vár a válaszra',
  'A sofőr, a séf vagy a takarítás megerősítése fejből történik',
  'A behajtandó előlegek elvesznek két sürgős ügy között',
  'Tart attól, hogy egy rideg robot beszél majd az ügyfeleivel Ön helyett',
]

const guaranteesFr = [
  'L’outil propose, une personne de votre équipe décide',
  'Vos données restent en UE · RGPD, en toute discrétion',
  'Vos clients ne remplissent rien · ils écrivent comme d’habitude',
  'Automatisé uniquement là où ça rend de vraies heures',
]
const guaranteesEn = [
  'The tool suggests, someone on your team decides',
  'Your data stays in the EU · GDPR, in complete discretion',
  'Your clients fill in nothing · they write the way they always do',
  'Automated only where it gives real hours back',
]
const guaranteesHu = [
  'Az eszköz javasol, a csapata egy tagja dönt',
  'Az adatai az EU-ban maradnak · GDPR, teljes diszkrécióval',
  'Az ügyfelei semmit nem töltenek ki · úgy írnak, ahogy eddig',
  'Csak ott automatizálunk, ahol valódi órákat ad vissza',
]

export default function IaPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{d('Automatisation', 'Automation', 'Automatizálás')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('Plus une demande ', 'No request left ', 'Egyetlen kérés sem ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('qui attend sa réponse.', 'waiting for a reply.', 'marad válasz nélkül.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'Première réponse dans la langue du client, reconfirmations, relances d’acompte, fils WhatsApp transformés en demandes claires : l’automatisation prend le répétitif. L’outil propose, une personne de votre équipe décide. Vos données restent en UE.',
                'A first reply in the client’s language, reconfirmations, deposit follow-ups, WhatsApp threads turned into clear requests: automation takes the repetitive work. The tool suggests, someone on your team decides. Your data stays in the EU.'
              , 'Első válasz az ügyfél nyelvén, megerősítések, előleg-emlékeztetők, WhatsApp-beszélgetésekből rendezett kérések: az automatizálás átveszi az ismétlődő munkát. Az eszköz javasol, a csapata egy tagja dönt. Az adatai az EU-ban maradnak.')}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Direct answer (GEO) */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-8">
            <h2 className="section-title" style={{ maxWidth: 640, margin: '0 auto' }}>
              {d('Ce que fait ', 'What ', 'Mit csinál ')}<span className="accent">{d('l’automatisation', 'automation', 'az automatizálás')}</span>{d(' chez vous', ' does for you', ' Önnél')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'Elle s’occupe des tâches qui reviennent chaque jour et ne demandent pas de jugement : accuser réception d’une demande, la structurer, reconfirmer un chauffeur, relancer un acompte. Tout ce qui demande du jugement reste à votre équipe : l’outil prépare, une personne valide. Vos clients ne remplissent rien, ils écrivent comme d’habitude.',
                'It handles the tasks that come back every day and need no judgment: acknowledging a request, structuring it, reconfirming a driver, chasing a deposit. Anything that needs judgment stays with your team: the tool prepares, a person approves. Your clients fill in nothing, they write the way they always do.'
              , 'Átveszi azokat a naponta visszatérő feladatokat, amelyekhez nem kell mérlegelés: egy kérés visszaigazolását és rendszerezését, a sofőr megerősítését, az előleg utánkövetését. Ami mérlegelést igényel, az a csapatánál marad: az eszköz előkészít, egy ember jóváhagy. Az ügyfelei semmit nem töltenek ki, úgy írnak, ahogy eddig.')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce qui vous coûte des heures', 'What costs you hours', 'Ami órákba kerül Önnek')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Là où l’automatisation ', 'Where automation ', 'Ahol az automatizálás ')}<span className="accent">{d('vous rend du temps.', 'gives you time back.', 'időt ad vissza.')}</span>
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

      {/* Capabilities */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Ce que l’automatisation prend en charge', 'What automation takes on', 'Amit az automatizálás átvesz')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Le répétitif, ', 'The repetitive work, ', 'Az ismétlődő munkát, ')}<span className="accent">{d('jamais le jugement.', 'never the judgment.', 'soha nem a mérlegelést.')}</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {capabilities.map((s) => (
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
                { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'L’automatisation s’y branche, sur votre organisation.' },
                { href: '/services/audit', label: 'Le Diagnostic', desc: 'On repère où partent le temps et les clients.' },
                { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min ce qui peut être automatisé.' },
                { href: '/glossaire', label: 'Glossaire', desc: 'Automatisation, données, logiciel, en mots simples.' },
            ],
            en: [
                { href: '/services/logiciel-sur-mesure', label: 'Custom software', desc: 'Automation plugs into it, on your organisation.' },
                { href: '/services/audit', label: 'The Diagnostic', desc: 'We find where time and clients slip away.' },
                { href: '/tools/diagnostic-ia', label: 'AI Diagnostic', desc: 'Measure in 4 minutes what can be automated.' },
                { href: '/glossaire', label: 'Glossary', desc: 'Automation, data, software, in plain words.' },
            ],
            hu: [
                { href: '/services/logiciel-sur-mesure', label: 'Egyedi szoftver', desc: 'Az automatizálás erre épül, az Ön szervezetére.' },
                { href: '/services/audit', label: 'A diagnosztika', desc: 'Megkeressük, hol vész el az idő és az ügyfél.' },
                { href: '/tools/diagnostic-ia', label: 'MI-diagnosztika', desc: 'Mérje meg 4 perc alatt, mi automatizálható.' },
                { href: '/glossaire', label: 'Szójegyzék', desc: 'Automatizálás, adatok, szoftver, érthetően.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Vos équipes passent leurs journées à répondre, reconfirmer, relancer',
                'Vos clients écrivent à toute heure, dans plusieurs langues',
                'Vous voulez répondre plus vite sans perdre le ton de votre organisation',
                'Vous tenez à garder vos données en Europe',
            ],
            en: [
                'Your teams spend their days replying, reconfirming, chasing',
                'Your clients write at any hour, in several languages',
                'You want to reply faster without losing your organisation’s tone',
                'You care about keeping your data in Europe',
            ],
            hu: [
                'A csapatai egész nap válaszolnak, megerősítenek, utánkövetnek',
                'Az ügyfelei a nap bármely órájában, több nyelven írnak',
                'Gyorsabban szeretne válaszolni anélkül, hogy elveszítené a szervezete hangnemét',
                'Fontos Önnek, hogy az adatai Európában maradjanak',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Vous voulez un robot qui décide à la place de votre équipe',
                'Vous voulez faire remplir des formulaires à vos clients',
                'Vous cherchez un chatbot générique, prêt à l’emploi',
                'Vous voulez de l’automatisation juste pour dire que vous en faites',
            ],
            en: [
                'You want a robot that decides in place of your team',
                'You want your clients to fill in forms',
                'You are looking for a generic, off-the-shelf chatbot',
                'You want automation just to be able to say you have it',
            ],
            hu: [
                'Olyan robotot szeretne, amely a csapata helyett dönt',
                'Űrlapokat szeretne kitöltetni az ügyfeleivel',
                'Egy általános, dobozos chatbotot keres',
                'Csak azért akar automatizálást, hogy elmondhassa, van',
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
                {d('Rendez du temps à votre équipe.', 'Give your team its time back.', 'Adjon vissza időt a csapatának.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde ce que votre équipe refait chaque jour à la main, et ce qui peut tourner seul sans rien enlever à l’attention que vous portez à vos clients. Même si on ne travaille pas ensemble.',
                  'A free call. We look at what your team redoes by hand every day, and what can run on its own without taking anything away from the care you give your clients. Even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük, mit végez el újra és újra kézzel a csapata nap mint nap, és mi futhat magától úgy, hogy semmit ne vegyen el az ügyfeleinek szentelt figyelemből. Akkor is, ha soha nem dolgozunk együtt.')}
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
