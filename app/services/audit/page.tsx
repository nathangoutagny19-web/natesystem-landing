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

/* Même motif que components/services/ServicesFeatures : la copie des deux
   langues reste côte à côte, la page est servie sous /services et sous
   /en/services/audit par le même composant. */
type Step = { titleFr: string; titleEn: string; titleHu: string; descFr: string; descEn: string; descHu: string; metricFr: string; metricEn: string; metricHu: string }

const steps: Step[] = [
  {
    titleFr: 'On écoute, vous ne préparez rien',
    titleEn: 'We listen, you prepare nothing', titleHu: 'Mi figyelünk, Ön semmit nem készít elő',
    descFr: 'Quelques appels avec vous et les personnes clés. Pas de questionnaire, pas de document à remplir : vous racontez comment ça se passe, on prend les notes.',
    descEn: 'A few calls with you and your key people. No questionnaire, no document to fill in: you tell us how things happen, we take the notes.', descHu: 'Néhány hívás Önnel és a kulcsembereivel. Nincs kérdőív, nincs kitöltendő dokumentum: Ön elmondja, hogyan mennek a dolgok, mi jegyzetelünk.',
    metricFr: 'Zéro préparation de votre côté',
    metricEn: 'Zero preparation on your side', metricHu: 'Semmi előkészület az Ön részéről',
  },
  {
    titleFr: 'La carte de votre organisation',
    titleEn: 'The map of your organisation', titleHu: 'A szervezete térképe',
    descFr: 'Qui fait quoi, d’où viennent les demandes, où elles se perdent, où les erreurs arrivent, d’où viennent vos clients. Tout ce qui est dans les têtes, mis sur papier.',
    descEn: 'Who does what, where requests come from, where they get lost, where mistakes happen, where your clients come from. Everything in people’s heads, put on paper.', descHu: 'Ki mit csinál, honnan érkeznek a kérések, hol vesznek el, hol csúsznak be a hibák, honnan jönnek az ügyfelei. Minden, ami a fejekben van, papírra téve.',
    metricFr: 'Où partent le temps, les erreurs et les clients',
    metricEn: 'Where time, mistakes and clients slip away', metricHu: 'Látható, hol vész el idő és ügyfél',
  },
  {
    titleFr: 'Un prototype sur vos vraies données',
    titleEn: 'A prototype on your real data', titleHu: 'Prototípus a valódi adatain',
    descFr: 'Un prototype cliquable, construit sur vos règles et vos vraies données. Vous et votre équipe cliquez dedans, et vous voyez à quoi ressemblerait votre quotidien.',
    descEn: 'A clickable prototype, built on your rules and your real data. You and your team click through it and see what your day would look like.', descHu: 'Kattintható prototípus, az Ön szabályaira és valódi adataira építve. Ön és a csapata belekattint, és látják, hogyan nézne ki a mindennapjuk.',
    metricFr: 'Le « après », avant tout engagement',
    metricEn: 'The “after”, before any commitment', metricHu: 'Az „utána”, bármilyen elköteleződés előtt',
  },
  {
    titleFr: 'La feuille de route',
    titleEn: 'The roadmap', titleHu: 'Az ütemterv',
    descFr: 'Quoi construire, dans quel ordre, chiffré et priorisé par impact. Ensuite, deux options : un partenariat dans la durée, ou on s’arrête là. Ce que vous avez vu reste à vous.',
    descEn: 'What to build, in what order, costed and ranked by impact. Then two options: a long-term partnership, or we stop there. What you have seen stays yours.', descHu: 'Mit építsünk meg, milyen sorrendben, beárazva és hatás szerint rangsorolva. Utána két lehetőség: hosszú távú partnerség, vagy itt megállunk. Amit látott, az Öné marad.',
    metricFr: 'Une décision claire, sans pression',
    metricEn: 'A clear decision, no pressure', metricHu: 'Világos döntés, nyomás nélkül',
  },
]

const painsFr = [
  'Tout passe par vous, et vous ne pouvez plus vous absenter une journée',
  'Vous ne savez pas d’où viennent vos clients, ni ce que votre site vous rapporte',
  'On vous a déjà vendu des outils qui n’ont rien changé',
  'Vous voulez voir le résultat avant de vous engager',
]
const painsEn = [
  'Everything goes through you, and you cannot take a single day off any more',
  'You do not know where your clients come from, or what your website brings in',
  'You have been sold tools before that changed nothing',
  'You want to see the result before you commit',
]
const painsHu = [
  'Minden Önön megy át, és már egyetlen napra sem tud kiesni',
  'Nem tudja, honnan jönnek az ügyfelei, és mit hoz a weboldala',
  'Adtak már el Önnek olyan eszközöket, amelyek semmit nem változtattak',
  'Látni szeretné az eredményt, mielőtt elköteleződik',
]

const guaranteesFr = [
  'Premier appel · offert',
  'Un prototype cliquable sur vos vraies données · avant tout engagement',
  'Vous ne préparez rien, vous ne remplissez rien',
  'Sans engagement · ce que vous avez vu reste à vous',
]
const guaranteesEn = [
  'First call · free',
  'A clickable prototype on your real data · before any commitment',
  'You prepare nothing, you fill in nothing',
  'No commitment · what you have seen stays yours',
]
const guaranteesHu = [
  'Első hívás · ingyenes',
  'Kattintható prototípus a valódi adatain · bármilyen elköteleződés előtt',
  'Semmit nem kell előkészítenie, semmit nem kell kitöltenie',
  'Kötelezettség nélkül · amit látott, az Öné marad',
]

export default function AuditPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{d('Le Diagnostic', 'The Diagnostic', 'A diagnosztika')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('On comprend votre organisation ', 'We understand your organisation ', 'Megértjük a szervezetét, ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('avant de construire quoi que ce soit.', 'before we build anything at all.', 'mielőtt bármit is építenénk.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'On cartographie comment votre organisation tourne vraiment, et où se perdent le temps, les erreurs et les clients. Puis vous cliquez dans un prototype construit sur vos vraies données, avant tout engagement. Vous ne préparez rien : vous parlez, on fait le travail.',
                'We map how your organisation really runs, and where time, mistakes and clients slip away. Then you click through a prototype built on your real data, before any commitment. You prepare nothing: you talk, we do the work.'
              , 'Feltérképezzük, hogyan működik valójában a szervezete, és hol vész el az idő, hol csúsznak be hibák, hol tűnnek el ügyfelek. Ezután belekattinthat egy prototípusba, amely a valódi adataira épül, bármilyen elköteleződés előtt. Semmit nem kell előkészítenie: Ön beszél, mi dolgozunk.')}
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
              {d('En quoi consiste ', 'What does ', 'Miből áll ')}<span className="accent">{d('le Diagnostic', 'the Diagnostic', 'a diagnosztika')}</span>{d(' ?', ' involve?', '?')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'Tout commence par un appel offert, pour comprendre votre situation. Puis on met à plat ce qui est aujourd’hui dans les têtes : qui fait quoi, d’où viennent vos clients, où les demandes se perdent. On construit un prototype cliquable sur vos vraies données, et on vous remet une feuille de route chiffrée : quoi construire, dans quel ordre.',
                'It starts with a free call, to understand where you stand. Then we put on paper what lives in people’s heads today: who does what, where your clients come from, where requests get lost. We build a clickable prototype on your real data, and hand you a costed roadmap: what to build, in what order.'
              , 'Egy ingyenes hívással kezdődik, hogy megértsük, hol tart. Aztán papírra tesszük, ami ma a fejekben van: ki mit csinál, honnan jönnek az ügyfelei, hol vesznek el a kérések. A valódi adataira építve kattintható prototípust készítünk, és átadunk egy beárazott ütemtervet: mit építsünk meg, milyen sorrendben.')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Si vous vous reconnaissez', 'If this sounds like you', 'Ha magára ismer')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Le Diagnostic est ', 'The Diagnostic is ', 'A diagnosztika ')}<span className="accent">{d('pour vous.', 'for you.', 'Önnek szól.')}</span>
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

      {/* Steps */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Comment se passe le Diagnostic', 'How the Diagnostic runs', 'Hogyan zajlik a diagnosztika')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Quatre temps, ', 'Four stages, ', 'Négy szakasz, ')}<span className="accent">{d('avant tout engagement.', 'before any commitment.', 'bármilyen elköteleződés előtt.')}</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {steps.map((s) => (
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
                { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu’on construit après le Diagnostic.' },
                { href: '/services/ia', label: 'L’automatisation', desc: 'Premières réponses, reconfirmations, relances.' },
                { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Ce qui fait varier le budget.' },
                { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min ce qui peut être automatisé.' },
            ],
            en: [
                { href: '/services/logiciel-sur-mesure', label: 'Custom software', desc: 'What we build after the Diagnostic.' },
                { href: '/services/ia', label: 'Automation', desc: 'First replies, reconfirmations, follow-ups.' },
                { href: '/tools/diagnostic-ia', label: 'AI Diagnostic', desc: 'Measure in 4 minutes what can be automated.' },
            ],
            hu: [
                { href: '/services/logiciel-sur-mesure', label: 'Egyedi szoftver', desc: 'Amit a diagnosztika után megépítünk.' },
                { href: '/services/ia', label: 'Automatizálás', desc: 'Első válaszok, megerősítések, emlékeztetők.' },
                { href: '/tools/diagnostic-ia', label: 'MI-diagnosztika', desc: 'Mérje meg 4 perc alatt, mi automatizálható.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Vous sentez que vous perdez du temps et des clients, sans savoir où',
                'Vos informations sont éparpillées entre WhatsApp, mails et tableurs',
                'Vous voulez voir et cliquer avant d’investir',
                'Vous êtes prêt à regarder votre organisation en face',
            ],
            en: [
                'You can feel you are losing time and clients, without knowing where',
                'Your information is scattered across WhatsApp, email and spreadsheets',
                'You want to see and click before you invest',
                'You are ready to look at your organisation honestly',
            ],
            hu: [
                'Érzi, hogy időt és ügyfeleket veszít, csak azt nem tudja, hol',
                'Az információi szét vannak szórva a WhatsApp, az e-mailek és a táblázatok között',
                'Látni és kattintani szeretne, mielőtt befektet',
                'Készen áll arra, hogy őszintén ránézzen a szervezetére',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Vous cherchez juste un devis, sans prendre le temps d’échanger',
                'Tout tourne déjà parfaitement chez vous',
                'Vous voulez un outil sur étagère, pas du sur-mesure',
                'Vous ne pouvez libérer personne pour quelques échanges',
            ],
            en: [
                'You just want a quote, without taking the time to talk',
                'Everything already runs perfectly in your organisation',
                'You want something off the shelf, not custom',
                'You cannot free anyone up for a few conversations',
            ],
            hu: [
                'Csak egy árajánlatot szeretne, anélkül hogy időt szánna a beszélgetésre',
                'Önöknél már minden tökéletesen működik',
                'Dobozos megoldást szeretne, nem egyedit',
                'Senkit nem tud felszabadítani néhány beszélgetésre',
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
                {d('Sachez où agir en premier.', 'Know where to act first.', 'Tudja meg, hol kell először lépni.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde votre organisation et on repère où se perdent le temps, les erreurs et les clients. Vous repartez avec une vision claire, même si on ne travaille pas ensemble.',
                  'A free call. We look at your organisation and find where time, mistakes and clients slip away. You leave with a clear picture, even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük a szervezetét, és megkeressük, hol vész el az idő, hol csúsznak be hibák és hol tűnnek el ügyfelek. Világos képpel távozik, akkor is, ha soha nem dolgozunk együtt.')}
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
