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
    titleFr: 'On cartographie vos process',
    titleEn: 'We map your processes', titleHu: 'Feltérképezzük a folyamatait',
    descFr: 'Votre façon réelle de travailler, mise à plat : qui fait quoi, dans quel ordre, avec quelles infos. On repère ce qui bloque, ce qui ralentit, ce qui se perd.',
    descEn: 'How you actually work, laid flat: who does what, in what order, with what information. We spot what blocks, what slows down, what gets lost.', descHu: 'Ahogyan valójában dolgoznak, kiterítve: ki mit csinál, milyen sorrendben, milyen információval. Megmutatjuk, mi akaszt meg, mi lassít, mi vész el.',
    metricFr: 'Une vision claire de votre fonctionnement',
    metricEn: 'A clear view of how you run', metricHu: 'Világos kép arról, hogyan működnek',
  },
  {
    titleFr: 'On chiffre le coût de l\u2019inaction',
    titleEn: 'We put a number on doing nothing', titleHu: 'Számszerűsítjük a tétlenség árát',
    descFr: 'Les heures perdues, les marges qui fuient, le savoir qui dort dans les têtes. On met un chiffre sur la valeur que vous laissez sur la table, pas seulement sur vos coûts.',
    descEn: 'Hours lost, margin leaking away, know-how sitting in people\u2019s heads. We put a figure on the value you leave on the table, not only on what you spend.', descHu: 'Elvesztett órák, elszivárgó árrés, a fejekben ülő tudás. Számot teszünk arra az értékre, amit az asztalon hagy, nem csak arra, amit elkölt.',
    metricFr: 'Le coût réel, en euros',
    metricEn: 'The real cost, in euros', metricHu: 'A valódi költség, euróban',
  },
  {
    titleFr: 'On dessine la cible',
    titleEn: 'We draw the target', titleHu: 'Megrajzoljuk a célképet',
    descFr: 'Vos opérations telles qu\u2019elles tourneraient avec un logiciel sur-mesure et de l\u2019IA là où elle aide. Concret, pas théorique.',
    descEn: 'Your operations as they would run with custom software, and AI where it genuinely helps. Concrete, not theoretical.', descHu: 'A működése úgy, ahogyan egyedi szoftverrel futna, és MI-vel ott, ahol valóban segít. Konkrétan, nem elméletben.',
    metricFr: 'Le « après », à l\u2019échelle de votre métier',
    metricEn: 'The “after”, at the scale of your trade', metricHu: 'Az „utána”, az Ön szakmájának léptékében',
  },
  {
    titleFr: 'On vous remet le plan',
    titleEn: 'We hand you the plan', titleHu: 'Átadjuk a tervet',
    descFr: 'Un plan d\u2019action clair et chiffré, priorisé par impact. Exécutable avec nous, en interne, ou un mix. Vous repartez avec, même sans nous.',
    descEn: 'A clear, costed action plan, ordered by impact. You can run it with us, in house, or both. It is yours to keep, with or without us.', descHu: 'Világos, beárazott cselekvési terv, hatás szerint rangsorolva. Végrehajthatja velünk, házon belül, vagy vegyesen. Az Öné marad, velünk vagy nélkülünk.',
    metricFr: 'Un plan exécutable, livré',
    metricEn: 'A plan you can act on, delivered', metricHu: 'Terv, amivel lépni tud, átadva',
  },
]

const painsFr = [
  'Vous sentez que ça bloque, mais vous ne savez pas exactement où',
  'Vous voulez digitaliser, mais sans automatiser un process bancal',
  'On vous a déjà vendu des outils qui n\u2019ont rien changé',
  'Vous voulez savoir où agir en premier, et combien ça coûte',
]
const painsEn = [
  'You can feel something is blocked, but not exactly where',
  'You want to go digital, without automating a process that already limps',
  'You have been sold tools before that changed nothing',
  'You want to know where to act first, and what it costs',
]
const painsHu = [
  'Érzi, hogy valami megakadt, de nem tudja pontosan, hol',
  'Digitalizálni akar, de nem úgy, hogy egy már sántító folyamatot automatizál',
  'Adtak már el Önnek olyan eszközöket, amelyek semmit nem változtattak',
  'Tudni akarja, hol kell először lépni, és mibe kerül',
]

const guaranteesFr = [
  'Appel découverte · offert',
  'Un plan d\u2019action clair et chiffré · vous repartez avec',
  'Exécutable avec nous, en interne, ou un mix',
  'Sans engagement · même si on ne travaille pas ensemble',
]
const guaranteesEn = [
  'Discovery call · free',
  'A clear, costed action plan · yours to keep',
  'Run it with us, in house, or both',
  'No commitment · even if we never work together',
]
const guaranteesHu = [
  'Felfedező hívás · ingyenes',
  'Világos, beárazott cselekvési terv · az Öné marad',
  'Végrehajthatja velünk, házon belül, vagy vegyesen',
  'Kötelezettség nélkül · akkor is, ha soha nem dolgozunk együtt',
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
            <span className="section-label">{d('Audit & consulting', 'Audit & consulting', 'Audit és tanácsadás')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('On comprend votre activité ', 'We understand your business ', 'Megértjük a cégét, ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('avant de construire quoi que ce soit.', 'before we build anything at all.', 'mielőtt bármit is építenénk.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'On cartographie vos process, on repère ce qui vous fait perdre du temps et de l\u2019argent, et on vous remet un plan d\u2019action clair et chiffré. Vous repartez avec le plan, même si on ne travaille pas ensemble.',
                'We map your processes, find what costs you time and money, and hand you a clear, costed action plan. The plan is yours to keep, even if we never work together.'
              , 'Feltérképezzük a folyamatait, megkeressük, mi kerül időbe és pénzbe, és világos, beárazott cselekvési tervet adunk a kezébe. A terv az Öné marad, akkor is, ha soha nem dolgozunk együtt.')}
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
              {d('En quoi consiste ', 'What does ', 'Miből áll ')}<span className="accent">{d('un audit de process', 'a process audit', 'egy folyamatauditok')}</span>{d(' ?', ' involve?', '?')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'Tout commence par un appel découverte, offert, pour comprendre votre situation. Puis on cartographie votre façon réelle de travailler, on repère ce qui bloque, et on chiffre ce que vous coûte l\u2019inaction. On dessine la cible et on vous remet un plan d\u2019action clair et chiffré.',
                'It starts with a free discovery call, to understand where you stand. Then we map how you actually work, find what blocks, and put a number on what doing nothing costs you. We draw the target and hand you a clear, costed action plan.'
              , 'Egy ingyenes felfedező hívással kezdődik, hogy megértsük, hol tart. Aztán feltérképezzük, hogyan dolgoznak valójában, megkeressük, mi akaszt meg, és számszerűsítjük, mibe kerül Önnek a tétlenség. Megrajzoljuk a célképet, és átadunk egy világos, beárazott cselekvési tervet.')}
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
              {d('L\u2019audit est ', 'The audit is ', 'Az audit ')}<span className="accent">{d('pour vous.', 'for you.', 'Önnek szól.')}</span>
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
            <span className="section-label">{d('Comment se passe l\u2019audit', 'How the audit runs', 'Hogyan zajlik az audit')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Quatre temps, ', 'Four stages, ', 'Négy szakasz, ')}<span className="accent">{d('un plan clair.', 'one clear plan.', 'egy világos terv.')}</span>
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
                { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'Ce qu\u2019on construit après l\u2019audit.' },
                { href: '/services/ia', label: 'L\u2019IA agentique', desc: 'Là où l\u2019IA fait gagner de vraies heures.' },
                { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
                { href: '/tools/diagnostic-ia', label: 'Diagnostic IA', desc: 'Mesurez en 4 min où l\u2019IA peut vous aider.' },
            ],
            en: [
                { href: '/services/logiciel-sur-mesure', label: 'Custom software', desc: 'What we build after the audit.' },
                { href: '/services/ia', label: 'Agentic AI', desc: 'Where AI wins you real hours.' },
                { href: '/tools/diagnostic-ia', label: 'AI Diagnostic', desc: 'Measure in 4 minutes where AI can help you.' },
            ],
            hu: [
                { href: '/services/logiciel-sur-mesure', label: 'Egyedi szoftver', desc: 'Amit az audit után megépítünk.' },
                { href: '/services/ia', label: 'Ágens MI', desc: 'Ahol az MI valódi órákat nyer Önnek.' },
                { href: '/tools/diagnostic-ia', label: 'MI-diagnosztika', desc: 'Mérje meg 4 perc alatt, hol segíthet Önnek az MI.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Vous sentez que vous perdez du temps, sans savoir vraiment où',
                'Vos données sont éparpillées sur une pile d\u2019outils',
                'Vous voulez un plan clair avant d\u2019investir un euro',
                'Vous êtes prêt à regarder votre activité en face',
            ],
            en: [
                'You can feel you are losing time, without knowing quite where',
                'Your data is scattered across a pile of tools',
                'You want a clear plan before spending a euro',
                'You are ready to look at your business honestly',
            ],
            hu: [
                'Érzi, hogy időt veszít, csak azt nem tudja, pontosan hol',
                'Az adatai eszközök tucatján szóródnak szét',
                'Világos tervet akar, mielőtt egyetlen eurót is elköltene',
                'Készen áll arra, hogy őszintén ránézzen a cégére',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Vous cherchez juste un devis, sans prendre le temps d\u2019échanger',
                'Tout tourne déjà parfaitement chez vous',
                'Vous voulez un outil sur étagère, pas du sur-mesure',
                'Vous ne pouvez pas consacrer deux semaines au diagnostic',
            ],
            en: [
                'You just want a quote, without taking the time to talk',
                'Everything already runs perfectly at your place',
                'You want something off the shelf, not custom',
                'You cannot give two weeks to the diagnostic',
            ],
            hu: [
                'Csak egy árajánlatot szeretne, anélkül hogy időt szánna a beszélgetésre',
                'Önöknél már minden tökéletesen működik',
                'Dobozos megoldást szeretne, nem egyedit',
                'Nem tud két hetet szánni a diagnosztikára',
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
                  'Un appel offert. On regarde votre activité et on identifie où vous faire gagner du temps et de l\u2019argent. Vous repartez avec un plan clair, même si on ne travaille pas ensemble.',
                  'A free call. We look at your business and find where to win you time and money. You leave with a clear plan, even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük a cégét, és megtaláljuk, hol nyerhet időt és pénzt. Világos tervvel távozik, akkor is, ha soha nem dolgozunk együtt.')}
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
