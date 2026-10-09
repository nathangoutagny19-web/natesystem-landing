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
    descFr: 'On forme sur VOTRE logiciel, avec vos vrais séjours, vos vrais clients, vos vrais fournisseurs. Pas une démo générique : chacun apprend ce qu’il utilisera dès le lendemain.',
    descEn: 'We train on YOUR software, with your real stays, your real clients, your real suppliers. No generic demo: everyone learns what they will use the very next day.', descHu: 'AZ ÖN szoftverén tanítunk, a valódi tartózkodásaival, ügyfeleivel és beszállítóival. Nem általános demón: mindenki azt tanulja meg, amit már másnap használni fog.',
    metricFr: 'Une adoption réelle, pas théorique',
    metricEn: 'Real adoption, not theoretical', metricHu: 'Valódi használatbavétel, nem elméleti',
  },
  {
    titleFr: 'De la réception à la direction',
    titleEn: 'From front desk to management', titleHu: 'A recepciótól a vezetésig',
    descFr: 'Réception, conciergerie, équipes terrain, direction : chaque rôle est formé sur ce qui le concerne. La direction lit ses chiffres, la réception gère les demandes, le terrain sait quoi faire et quand.',
    descEn: 'Front desk, concierges, field teams, management: every role is trained on what concerns it. Management reads its numbers, the front desk handles requests, the field teams know what to do and when.', descHu: 'Recepció, concierge, terepen dolgozó csapatok, vezetés: minden szerepkör arra kap képzést, ami rá tartozik. A vezetés a számait olvassa, a recepció a kéréseket kezeli, a terepen dolgozók tudják, mit és mikor kell tenniük.',
    metricFr: 'Toute l’équipe autonome',
    metricEn: 'The whole team, autonomous', metricHu: 'Az egész csapat önállóan',
  },
  {
    titleFr: 'Les outils et l’IA au quotidien',
    titleEn: 'Tools and AI in daily work', titleHu: 'Eszközök és MI a mindennapokban',
    descFr: 'Rédiger une réponse soignée dans la langue du client, résumer un fil WhatsApp, préparer le brief du chef. On montre à vos équipes comment s’en servir concrètement, et où garder la main.',
    descEn: 'Drafting a careful reply in the client’s language, summarising a WhatsApp thread, preparing the chef’s brief. We show your teams how to use it in practice, and where to keep control.', descHu: 'Gondos válasz megfogalmazása az ügyfél nyelvén, egy WhatsApp-beszélgetés összefoglalása, a séf eligazításának előkészítése. Megmutatjuk a csapatainak, hogyan használják mindezt a gyakorlatban, és hol tartsák meg az irányítást.',
    metricFr: 'Des réponses plus rapides, le même soin',
    metricEn: 'Faster replies, the same care', metricHu: 'Gyorsabb válaszok, ugyanazzal a gondossággal',
  },
  {
    titleFr: 'Documentation et suivi',
    titleEn: 'Documentation and follow-up', titleHu: 'Dokumentáció és utánkövetés',
    descFr: 'Guides, vidéos, procédures, écrits et à vous : chaque saisonnier se forme sans nous. On reste à vos côtés, saison après saison, à mesure que le système évolue.',
    descEn: 'Guides, videos, procedures, written down and yours: every seasonal hire can be trained without us. We stay alongside you, season after season, as the system evolves.', descHu: 'Útmutatók, videók, eljárások, leírva és az Öné: minden szezonális munkatárs nélkülünk is betanulhat. Szezonról szezonra Ön mellett maradunk, ahogy a rendszer fejlődik.',
    metricFr: 'Chaque saison, sans repartir de zéro',
    metricEn: 'Every season, without starting from scratch', metricHu: 'Minden szezon, nulláról kezdés nélkül',
  },
]

const painsFr = [
  'Vous avez déjà payé des outils que, au final, personne n’utilise',
  'Tout passe par vous, parce que vous êtes le seul à savoir comment faire',
  'Les saisonniers arrivent et il faut tout réexpliquer, chaque saison',
  'L’équipe ne sait pas quoi faire de l’IA, ou n’ose pas s’en servir',
]
const painsEn = [
  'You have already paid for tools that, in the end, nobody uses',
  'Everything goes through you, because you are the only one who knows how',
  'Seasonal staff arrive and everything has to be explained again, every season',
  'The team does not know what to do with AI, or does not dare use it',
]
const painsHu = [
  'Fizetett már olyan eszközökért, amelyeket végül senki nem használ',
  'Minden Önön megy át, mert csak Ön tudja, hogyan kell csinálni',
  'Megérkeznek a szezonális munkatársak, és minden szezonban mindent újra el kell magyarázni',
  'A csapat nem tudja, mit kezdjen az MI-vel, vagy nem meri használni',
]

const guaranteesFr = [
  'Le code et les données vous appartiennent à 100 %',
  'Documentation complète · vous formez vos saisonniers sans nous',
  'On forme jusqu’à l’autonomie de vos équipes, jamais moins',
  'Un partenaire qui reste, saison après saison, sans dépendance',
]
const guaranteesEn = [
  'The code and the data are 100 % yours',
  'Full documentation · you train your seasonal staff without us',
  'We train until your teams are autonomous, never less',
  'A partner who stays, season after season, with no dependency',
]
const guaranteesHu = [
  'A kód és az adatok 100%-ban az Önéi',
  'Teljes dokumentáció · nélkülünk tanítja be a szezonális munkatársait',
  'A csapatai önállóságáig tanítunk, soha nem kevesebbig',
  'Partner, aki marad, szezonról szezonra, függőség nélkül',
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
              {d('Vos équipes formées, jusqu’à ', 'Your teams trained, all the way to ', 'Csapatai betanítva, egészen ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('l’autonomie complète.', 'full autonomy.', 'a teljes önállóságig.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d('Construire l’outil, c’est la partie facile. Le faire ', 'Building the tool is the easy part. Getting it ', 'Az eszközt megépíteni a könnyebbik rész. Elérni, hogy ')}
              <strong style={{ fontWeight: 500, color: 'var(--text)' }}>{d('adopter par la réception, la conciergerie et le terrain', 'adopted by the front desk, the concierges and the field teams', 'a recepció, a concierge és a terepen dolgozók használatba vegyék')}</strong>
              {d(
                ', c’est le vrai travail. On forme chaque équipe sur ce qu’elle fait chaque jour, et on montre à chacun comment utiliser les outils et l’IA dans son travail quotidien. Jusqu’à ce que l’équipe tourne sans que tout passe par vous.',
                ' is the real work. We train each team on what it does every day, and show everyone how to use the tools and AI in their daily work. Until the team runs without everything going through you.'
              , ', az az igazi munka. Minden csapatot arra tanítunk, amit nap mint nap csinál, és mindenkinek megmutatjuk, hogyan használja az eszközöket és az MI-t a mindennapi munkájában. Egészen addig, amíg a csapat úgy működik, hogy nem minden Önön megy át.')}
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
            <span className="section-label">{d('Ce qui bloque l’adoption', 'What blocks adoption', 'Ami megakasztja a használatbavételt')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Un outil, ça ne sert à rien ', 'A tool is worth nothing ', 'Egy eszköz semmit nem ér, ')}<span className="accent">{d('si personne ne l’utilise.', 'if nobody uses it.', 'ha senki nem használja.')}</span>
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
              {d('Ce qui est inclus, ', 'What is included, ', 'Mit tartalmaz, ')}<span className="accent">{d('jusqu’à l’autonomie.', 'all the way to autonomy.', 'egészen az önállóságig.')}</span>
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
                { href: '/methode', label: 'Notre méthode', desc: 'La formation, dernière étape avant l’autonomie.' },
                { href: '/services/logiciel-sur-mesure', label: 'Le logiciel sur-mesure', desc: 'L’outil qu’on apprend à vos équipes.' },
                { href: '/services/audit', label: 'Le Diagnostic', desc: 'On repère d’abord où vous gagnez le plus.' },
                { href: '/case-studies', label: 'Nos réalisations', desc: 'Des équipes qui pilotent leur outil seules.' },
            ],
            en: [
                { href: '/methode', label: 'Our method', desc: 'Training, the last step before autonomy.' },
                { href: '/services/logiciel-sur-mesure', label: 'Custom software', desc: 'The tool we teach your teams to run.' },
                { href: '/services/audit', label: 'The Diagnostic', desc: 'We find first where you gain the most.' },
                { href: '/case-studies', label: 'Case studies', desc: 'Teams running their own tool, on their own.' },
            ],
            hu: [
                { href: '/methode', label: 'Módszerünk', desc: 'A képzés az utolsó lépés az önállóság előtt.' },
                { href: '/services/logiciel-sur-mesure', label: 'Egyedi szoftver', desc: 'Az eszköz, amelynek használatára a csapatait betanítjuk.' },
                { href: '/services/audit', label: 'A diagnosztika', desc: 'Előbb megkeressük, hol nyer a legtöbbet.' },
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
                'Vous voulez que vos équipes avancent sans que tout passe par vous',
                'Vous accueillez des saisonniers et voulez les rendre opérationnels vite',
                'Vous voulez que l’équipe utilise l’IA avec bon sens, pas en cachette',
                'Vous voulez pouvoir former vos futures recrues vous-même',
            ],
            en: [
                'You want your teams to move forward without everything going through you',
                'You bring in seasonal staff and want them up to speed quickly',
                'You want the team to use AI with good sense, not in secret',
                'You want to be able to train your future hires yourself',
            ],
            hu: [
                'Azt szeretné, hogy a csapatai haladjanak anélkül, hogy minden Önön menne át',
                'Szezonális munkatársakat fogad, és gyorsan munkaképessé szeretné tenni őket',
                'Azt szeretné, hogy a csapat józanul használja az MI-t, nem titokban',
                'Maga szeretné betanítani a jövőbeli munkatársait',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Vous préférez tout déléguer sans jamais mettre les mains dedans',
                'Vous voulez une formation générique, sans lien avec votre quotidien',
                'Vous ne pouvez pas mobiliser un peu vos équipes',
                'L’autonomie de vos équipes ne vous intéresse pas vraiment',
            ],
            en: [
                'You would rather delegate everything and never get your hands in it',
                'You want generic training, unrelated to your daily work',
                'You cannot free up your teams even a little',
                'Your teams’ autonomy does not really interest you',
            ],
            hu: [
                'Inkább mindent delegálna, és soha nem nyúlna bele',
                'Általános képzést szeretne, amely nem kapcsolódik a mindennapjaihoz',
                'Egy kicsit sem tudja felszabadítani a csapatait',
                'A csapatai önállósága igazából nem érdekli',
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
                  'Un appel offert. On regarde comment vos équipes travaillent aujourd’hui et ce qu’il faudrait pour qu’elles tournent sans que tout passe par vous. Même si on ne travaille pas ensemble.',
                  'A free call. We look at how your teams work today and what it would take for them to run without everything going through you. Even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük, hogyan dolgoznak ma a csapatai, és mi kellene ahhoz, hogy úgy működjenek, hogy nem minden Önön megy át. Akkor is, ha soha nem dolgozunk együtt.')}
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
