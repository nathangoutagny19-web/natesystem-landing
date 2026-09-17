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

type Included = { titleFr: string; titleEn: string; titleHu: string; descFr: string; descEn: string; descHu: string; metricFr: string; metricEn: string; metricHu: string }

const included: Included[] = [
  {
    titleFr: 'Formation sur votre propre outil',
    titleEn: 'Training on your own tool', titleHu: 'Képzés a saját eszközén',
    descFr: 'On forme sur VOTRE logiciel, avec vos vraies données, pas une démo générique. Chacun apprend exactement ce qu\u2019il utilisera au quotidien.',
    descEn: 'We train on YOUR software, with your real data, not a generic demo. Everyone learns exactly what they will use day to day.', descHu: 'AZ ÖN szoftverén tanítunk, a valódi adataival, nem egy általános demón. Mindenki pontosan azt tanulja meg, amit nap mint nap használni fog.',
    metricFr: 'Une adoption réelle, pas théorique',
    metricEn: 'Real adoption, not theoretical', metricHu: 'Valódi használatbavétel, nem elméleti',
  },
  {
    titleFr: 'Du dirigeant au terrain',
    titleEn: 'From leadership to the field', titleHu: 'A vezetőtől a terepen dolgozóig',
    descFr: 'Chaque rôle est formé sur ce qui le concerne : le dirigeant lit ses tableaux de bord, l\u2019équipe pilote son quotidien, personne n\u2019est perdu.',
    descEn: 'Every role is trained on what concerns it: leadership reads the dashboards, the team runs its day, nobody is left behind.', descHu: 'Minden szerepkör arra kap képzést, ami rá tartozik: a vezetés az irányítópultokat olvassa, a csapat a napi munkáját viszi, senki nem marad le.',
    metricFr: 'Toute l\u2019équipe autonome',
    metricEn: 'The whole team, autonomous', metricHu: 'Az egész csapat önállóan',
  },
  {
    titleFr: 'Documentation complète',
    titleEn: 'Full documentation', titleHu: 'Teljes dokumentáció',
    descFr: 'Guides, vidéos, procédures : tout est écrit et à vous. De quoi former vos prochaines recrues sans nous, quand vous voulez.',
    descEn: 'Guides, videos, procedures: all written down and yours. Enough to train your next hires without us, whenever you want.', descHu: 'Útmutatók, videók, eljárások: minden leírva, és az Öné. Elég ahhoz, hogy a következő munkatársait nélkülünk tanítsa be, amikor csak akarja.',
    metricFr: 'Onboarding des nouveaux, sans nous',
    metricEn: 'Onboarding new hires, without us', metricHu: 'Új munkatársak bevezetése, nélkülünk',
  },
  {
    titleFr: 'Accompagnement puis autonomie',
    titleEn: 'Support, then autonomy', titleHu: 'Támogatás, aztán önállóság',
    descFr: 'On reste à vos côtés le temps qu\u2019il faut, puis on vous laisse la main. Toujours dispo si besoin, mais jamais indispensable.',
    descEn: 'We stay alongside you as long as it takes, then we hand over. Always around if you need us, never indispensable.', descHu: 'Addig maradunk Ön mellett, ameddig kell, aztán átadjuk. Mindig elérhetők, ha szüksége van ránk, de sosem nélkülözhetetlenek.',
    metricFr: 'On part quand vous êtes prêts',
    metricEn: 'We leave when you are ready', metricHu: 'Akkor megyünk, amikor készen áll',
  },
]

const painsFr = [
  'Vous avez déjà payé des outils que, au final, personne n\u2019utilise',
  'L\u2019équipe résiste au changement, par peur ou par habitude',
  'Vous dépendez d\u2019un prestataire pour la moindre modification',
  'Le savoir reste dans la tête d\u2019une ou deux personnes clés',
]
const painsEn = [
  'You have already paid for tools that, in the end, nobody uses',
  'The team resists the change, out of fear or out of habit',
  'You depend on a supplier for the smallest change',
  'The know-how sits in the heads of one or two key people',
]
const painsHu = [
  'Fizetett már olyan eszközökért, amelyeket végül senki nem használ',
  'A csapat ellenáll a változásnak, félelemből vagy megszokásból',
  'A legapróbb módosításhoz is egy szolgáltatótól függ',
  'A tudás egy-két kulcsember fejében ül',
]

const guaranteesFr = [
  'Le code et l\u2019infrastructure vous appartiennent à 100 %',
  'Documentation complète · vous formez vos nouveaux sans nous',
  'On part quand vos équipes sont autonomes, jamais avant',
  'Toujours dispo si vous en avez besoin, sans dépendance',
]
const guaranteesEn = [
  'The code and the infrastructure are 100 % yours',
  'Full documentation · you train your new hires without us',
  'We leave when your teams are autonomous, never before',
  'Always around if you need us, without you depending on us',
]
const guaranteesHu = [
  'A kód és az infrastruktúra 100%-ban az Öné',
  'Teljes dokumentáció · nélkülünk tanítja be az új munkatársait',
  'Akkor megyünk, amikor a csapatai önállóak, előbb soha',
  'Mindig elérhetők, ha szüksége van ránk, anélkül hogy függne tőlünk',
]

export default function FormationPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 40px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 820 }}>
          <FadeUp>
            <span className="section-label">{d('Formation & accompagnement', 'Training & support', 'Képzés és támogatás')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('On vous forme, jusqu\u2019à ', 'We train you, all the way to ', 'Betanítjuk Önöket, egészen ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('l\u2019autonomie complète.', 'full autonomy.', 'a teljes önállóságig.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d('Construire l\u2019outil, c\u2019est la partie facile. Le faire ', 'Building the tool is the easy part. Getting it ', 'Az eszközt megépíteni a könnyebbik rész. Elérni, hogy ')}
              <strong style={{ fontWeight: 500, color: 'var(--text)' }}>{d('adopter par toute votre équipe', 'adopted by your whole team', 'az egész csapata használatba vegye')}</strong>
              {d(
                ', c\u2019est le vrai job, et il compte autant pour nous que la construction. On forme tout le monde, du dirigeant au terrain, jusqu\u2019à ce que l\u2019outil tourne sans nous. Le code et l\u2019infrastructure vous appartiennent : vous ne dépendez de personne.',
                ' is the real job, and it matters to us as much as the building. We train everyone, from leadership to the field, until the tool runs without us. The code and the infrastructure belong to you, so you depend on nobody.'
              , ', az az igazi munka, és nekünk annyira számít, mint maga az építés. Mindenkit betanítunk, a vezetőtől a terepen dolgozóig, amíg az eszköz nélkülünk is fut. A kód és az infrastruktúra az Öné: senkitől nem függ.')}
            </p>
            <Link href={localizedHref(CAL_LINK, lang)} className="btn-primary" style={{ margin: '0 auto', fontSize: 14 }}>
              <span className="btn-primary-dot" />{d('Réserver un appel · offert', 'Book a call · free', 'Hívás foglalása · ingyenes')} &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce qui bloque l\u2019adoption', 'What blocks adoption', 'Ami megakasztja a használatbavételt')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Un outil, ça ne sert à rien ', 'A tool is worth nothing ', 'Egy eszköz semmit nem ér, ')}<span className="accent">{d('si personne ne l\u2019utilise.', 'if nobody uses it.', 'ha senki nem használja.')}</span>
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

      {/* Ce qui est inclus */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">{d('Comment on forme', 'How we train', 'Hogyan tanítunk')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Ce qui est inclus, ', 'What is included, ', 'Mit tartalmaz, ')}<span className="accent">{d('jusqu\u2019à l\u2019autonomie.', 'all the way to autonomy.', 'egészen az önállóságig.')}</span>
            </h2>
          </FadeUp>
          <div className="svc-grid">
            {included.map((s) => (
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

      {/* Engagements */}
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
                { href: '/methode', label: 'Notre méthode', desc: 'La formation, dernière étape avant l\u2019autonomie.' },
                { href: '/services/logiciel-sur-mesure', label: 'Le système sur-mesure', desc: 'L\u2019outil qu\u2019on vous apprend à piloter.' },
                { href: '/services/audit', label: 'Le consulting', desc: 'On repère d\u2019abord où vous gagnez le plus.' },
                { href: '/case-studies', label: 'Nos réalisations', desc: 'Des équipes qui pilotent leur outil seules.' },
            ],
            en: [
                { href: '/methode', label: 'Our method', desc: 'Training, the last step before autonomy.' },
                { href: '/services/logiciel-sur-mesure', label: 'The custom system', desc: 'The tool we teach you to run.' },
                { href: '/services/audit', label: 'Consulting', desc: 'We find first where you gain the most.' },
                { href: '/case-studies', label: 'Case studies', desc: 'Teams running their own tool, on their own.' },
            ],
            hu: [
                { href: '/methode', label: 'Módszerünk', desc: 'A képzés az utolsó lépés az önállóság előtt.' },
                { href: '/services/logiciel-sur-mesure', label: 'Az egyedi rendszer', desc: 'Az eszköz, amelynek használatára betanítjuk.' },
                { href: '/services/audit', label: 'Tanácsadás', desc: 'Előbb megkeressük, hol nyer a legtöbbet.' },
                { href: '/case-studies', label: 'Esettanulmányok', desc: 'Csapatok, amelyek maguk viszik a saját eszközüket.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Vous voulez que vos équipes soient vraiment autonomes',
                'Vous en avez assez de dépendre d\u2019un prestataire pour tout',
                'Vous tenez à posséder votre outil et le savoir qui va avec',
                'Vous voulez pouvoir former vos futures recrues vous-même',
            ],
            en: [
                'You want your teams to be genuinely autonomous',
                'You have had enough of depending on a supplier for everything',
                'You care about owning your tool and the know-how that goes with it',
                'You want to be able to train your future hires yourself',
            ],
            hu: [
                'Azt akarja, hogy a csapatai valóban önállóak legyenek',
                'Elege van abból, hogy mindenben egy szolgáltatótól függ',
                'Fontos Önnek, hogy az eszköz és a hozzá tartozó tudás az Öné legyen',
                'Maga szeretné betanítani a jövőbeli munkatársait',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Vous préférez tout déléguer sans jamais mettre les mains dedans',
                'Vous voulez garder un prestataire à vie, quoi qu\u2019il arrive',
                'Vous ne pouvez pas mobiliser un peu vos équipes',
                'L\u2019autonomie ne vous intéresse pas vraiment',
            ],
            en: [
                'You would rather delegate everything and never get your hands in it',
                'You want to keep a supplier for life, whatever happens',
                'You cannot free up your teams even a little',
                'Autonomy does not really interest you',
            ],
            hu: [
                'Inkább mindent delegálna, és soha nem nyúlna bele',
                'Élete végéig szolgáltatót akar tartani, bármi történjék',
                'Egy kicsit sem tudja felszabadítani a csapatait',
                'Az önállóság igazából nem érdekli',
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
                {d('Rendez vos équipes autonomes.', 'Make your teams autonomous.', 'Tegye önállóvá a csapatait.')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde votre situation et on vous dit comment on rendrait votre équipe autonome sur son outil, sans dépendance. Même si on ne travaille pas ensemble.',
                  'A free call. We look at where you stand and tell you how we would make your team autonomous on its tool, with no dependency. Even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük, hol tart, és megmondjuk, hogyan tennénk önállóvá a csapatát a saját eszközén, függőség nélkül. Akkor is, ha soha nem dolgozunk együtt.')}
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
