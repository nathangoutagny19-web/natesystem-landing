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
    titleFr: 'Base de données unifiée',
    titleEn: 'One unified database', titleHu: 'Egyetlen egységes adatbázis',
    descFr: 'Une seule source de vérité. On cartographie votre vrai workflow et on remplace le patchwork d\u2019outils par un système unique où toute votre équipe se connecte.',
    descEn: 'A single source of truth. We map how you really work and replace the patchwork of tools with one system your whole team logs into.', descHu: 'Egyetlen igazságforrás. Feltérképezzük, hogyan dolgoznak valójában, és az eszközök foltvarrását egyetlen rendszerre cseréljük, amelybe az egész csapata belép.',
    metricFr: 'Fin des doubles saisies et des données dispersées',
    metricEn: 'No more double entry, no more scattered data', metricHu: 'Vége a kettős adatbevitelnek és a szétszórt adatoknak',
  },
  {
    titleFr: 'Dashboards & pilotage',
    titleEn: 'Dashboards & steering', titleHu: 'Irányítópultok és vezetői rálátás',
    descFr: 'Vos chiffres en temps réel, au même endroit. Vous voyez où vous en êtes d\u2019un coup d\u2019œil et vous décidez sur du concret, pas au feeling.',
    descEn: 'Your figures in real time, in one place. You see where you stand at a glance and decide on facts, not on gut feel.', descHu: 'A számai valós időben, egy helyen. Egy pillantással látja, hol tart, és tényekre alapozva dönt, nem megérzésből.',
    metricFr: 'Décisions data en minutes, pas en heures',
    metricEn: 'Decisions on data in minutes, not hours', metricHu: 'Adatalapú döntések percek, nem órák alatt',
  },
  {
    titleFr: 'Portails & outils internes',
    titleEn: 'Portals & internal tools', titleHu: 'Portálok és belső eszközök',
    descFr: 'Portails clients, espaces fournisseurs, outils métier, chaque écran pensé pour la tâche qu\u2019il sert. Pas de feature bloat, pas de menus qu\u2019on n\u2019ouvre jamais.',
    descEn: 'Client portals, supplier areas, trade tools, every screen designed for the job it serves. No feature bloat, no menus nobody ever opens.', descHu: 'Ügyfélportálok, beszállítói felületek, szakmai eszközök: minden képernyő arra a feladatra készül, amit kiszolgál. Semmi funkcióhalmozás, semmi menü, amit soha senki nem nyit meg.',
    metricFr: 'Chaque rôle a exactement ce qu\u2019il lui faut',
    metricEn: 'Every role gets exactly what it needs', metricHu: 'Minden szerepkör pontosan azt kapja, amire szüksége van',
  },
  {
    titleFr: 'Automatisations & IA intégrée',
    titleEn: 'Automation & AI built in', titleHu: 'Automatizálás és beépített MI',
    descFr: 'Workflows automatisés, lecture de documents, relances, alertes, l\u2019IA intégrée uniquement là où elle remplace de vraies heures de travail.',
    descEn: 'Automated workflows, document reading, follow-ups, alerts, with AI built in only where it replaces real hours of work.', descHu: 'Automatizált munkafolyamatok, dokumentumolvasás, utánkövetés, riasztások, beépített MI-vel, kizárólag ott, ahol valódi munkaórákat vált ki.',
    metricFr: 'Des heures regagnées chaque semaine',
    metricEn: 'Hours won back every week', metricHu: 'Hetente visszanyert órák',
  },
]

const painsFr = [
  'Excel, mails et dix outils qui ne se parlent pas',
  'Des heures perdues chaque semaine à tout recopier d\u2019un outil à l\u2019autre',
  'Aucune vue claire sur votre activité, vous pilotez à l\u2019aveugle',
  'Quand quelqu\u2019un part, son savoir part avec lui',
]
const painsEn = [
  'Spreadsheets, email and ten tools that do not talk to each other',
  'Hours lost every week retyping everything from one tool into the next',
  'No clear view of your business, so you steer blind',
  'When someone leaves, what they knew leaves with them',
]
const painsHu = [
  'Táblázatok, e-mailek és tíz eszköz, amelyek nem beszélnek egymással',
  'Hetente elvesztett órák azzal, hogy mindent átgépelnek egyik eszközből a másikba',
  'Semmi tiszta rálátás a cégére, így vakon irányít',
  'Ha valaki távozik, a tudása vele megy',
]

const guaranteesFr = [
  'Code source livré · vous êtes propriétaire à 100 %',
  'Données hébergées en UE · RGPD-natif',
  'En production en 4 à 8 semaines · vos équipes continuent de travailler',
  'Formation jusqu\u2019à l\u2019autonomie · on ne livre pas pour disparaître',
]
const guaranteesEn = [
  'Source code delivered · you own 100 % of it',
  'Data hosted in the EU · GDPR-native',
  'In production in 4 to 8 weeks · your teams keep working throughout',
  'Training until you are autonomous · we do not deliver and vanish',
]
const guaranteesHu = [
  'Forráskód átadva · 100%-ban az Öné',
  'Adatok az EU-ban tárolva · GDPR-natív',
  'Élesben 4-8 hét alatt · a csapatai közben dolgoznak tovább',
  'Képzés az önállóságig · nem adjuk át, hogy aztán eltűnjünk',
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
            <span className="section-label">{d('Logiciel & plateforme sur-mesure', 'Custom software & platform', 'Egyedi szoftver és platform')}</span>
            <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5.4vw, 54px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', maxWidth: 780, margin: '14px auto 24px' }}>
              {d('Un seul logiciel sur-mesure pour ', 'One piece of custom software to ', 'Egyetlen egyedi szoftver, hogy ')}<span className="accent" style={{ color: 'var(--accent)' }}>{d('faire grandir votre activité.', 'grow your business.', 'növelje a cégét.')}</span>
            </h1>
            <p className="font-sans" style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 660, margin: '0 auto 36px', lineHeight: 1.65 }}>
              {d(
                'On réunit vos outils et vos données dans une seule plateforme conçue pour votre métier, base unifiée, dashboards, portails, outils internes. La vôtre, pas un abonnement de plus. Vous êtes propriétaire du code, hébergé en UE, en production en 4 à 8 semaines.',
                'We bring your tools and your data into one platform designed for your trade: unified database, dashboards, portals, internal tools. Yours, not one more subscription. You own the code, it is hosted in the EU, and it goes live in 4 to 8 weeks.'
              , 'Egyetlen, a szakmájára tervezett platformba vonjuk az eszközeit és az adatait: egységes adatbázis, irányítópultok, portálok, belső eszközök. Az Önébe, nem még egy előfizetésbe. A kód az Öné, EU-s tárhelyen, élesben 4-8 hét alatt.')}
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
              {d('Qu\u2019est-ce qu\u2019un ', 'What is ', 'Mi az ')}<span className="accent">{d('logiciel sur-mesure', 'custom software', 'egyedi szoftver')}</span>{d(' ?', '?', '?')}
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="font-sans" style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              {d(
                'C\u2019est une application métier conçue spécifiquement pour votre façon de travailler, au lieu d\u2019un SaaS générique que vous louez. Elle réunit en un seul système ce que vous éparpillez aujourd\u2019hui entre tableurs, mails et outils déconnectés. Le code vous appartient, et il évolue avec votre activité.',
                'It is a business application designed specifically around how you work, instead of a generic SaaS you rent. It brings into one system what you scatter today across spreadsheets, email and disconnected tools. You own the code, and it grows with your business.'
              , 'Olyan üzleti alkalmazás, amelyet kifejezetten az Ön munkamódszerére terveznek, nem pedig egy bérelt, általános SaaS. Egyetlen rendszerbe hozza azt, amit ma táblázatok, e-mailek és összefüggéstelen eszközök között szór szét. A kód az Öné, és együtt fejlődik a cégével.')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Pain */}
      <section style={{ padding: '70px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: 760 }}>
          <FadeUp className="text-center mb-10">
            <span className="section-label">{d('Ce que vous vivez aujourd\u2019hui', 'What you live with today', 'Amit ma megél')}</span>
            <h2 className="section-title" style={{ maxWidth: 620, margin: '0 auto' }}>
              {d('Le ', 'The ', 'A ')}<span className="accent">{d('SaaS-spaghetti.', 'SaaS spaghetti.', 'SaaS-spagetti.')}</span>
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
            <span className="section-label">{d('Ce qu\u2019on construit', 'What we build', 'Amit megépítünk')}</span>
            <h2 className="section-title" style={{ maxWidth: 660, margin: '0 auto' }}>
              {d('Tout ce qu\u2019il vous faut, ', 'Everything you need, ', 'Minden, amire szüksége van, ')}<span className="accent">{d('au même endroit.', 'in one place.', 'egy helyen.')}</span>
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
                  'Un SaaS est un outil standard, loué par abonnement, que vous adaptez à votre métier. Un logiciel sur-mesure est construit autour de votre métier, vous en êtes propriétaire et il est hébergé chez vous. Le sur-mesure devient rentable dès que vous payez plusieurs SaaS qui ne se parlent pas.',
                  'A SaaS is a standard tool, rented by subscription, that you bend to your trade. Custom software is built around your trade, you own it, and it is hosted on your side. Custom pays for itself the moment you are paying for several tools that do not talk to each other.'
                , 'A SaaS szabványos eszköz, előfizetéssel bérelve, amit Ön hajlít a szakmájához. Az egyedi szoftver a szakmája köré épül, az Öné, és az Ön oldalán fut. Az egyedi abban a pillanatban megtérül, amint több olyan eszközért fizet, amelyek nem beszélnek egymással.')}
              </p>
              <p style={{ textAlign: 'center', margin: 0 }}>
                {/* Le comparatif détaillé n'existe qu'en français : on ne le
                    propose pas dans la version anglaise. */}
                {lang === 'fr' && (
                  <Link href="/logiciel-sur-mesure-vs-saas" className="font-mono" style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: 0.5, textDecoration: 'none' }}>
                    Le comparatif complet sur-mesure vs SaaS &rarr;
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
                { href: '/logiciel-sur-mesure-vs-saas', label: 'Sur-mesure ou SaaS ?', desc: 'Quand le sur-mesure devient rentable.' },
                { href: '/prix-logiciel-sur-mesure', label: 'Combien ça coûte ?', desc: 'Les fourchettes de prix réalistes.' },
                { href: '/logiciel-sur-mesure-conseil', label: 'Exemple : conseil & bureaux d\u2019études', desc: 'Un secteur concret, la même méthode.' },
                { href: '/glossaire', label: 'Glossaire', desc: 'Les termes du logiciel sur-mesure et de l\u2019IA.' },
            ],
            en: [
                { href: '/services/ia', label: 'AI & automation', desc: 'Where AI replaces real hours.' },
                { href: '/case-studies', label: 'Case studies', desc: 'What we built, and what it changed.' },
                { href: '/glossaire', label: 'Glossary', desc: 'The terms of custom software and AI, in plain words.' },
            ],
            hu: [
                { href: '/services/ia', label: 'MI és automatizálás', desc: 'Ahol az MI valódi munkaórákat vált ki.' },
                { href: '/case-studies', label: 'Esettanulmányok', desc: 'Amit megépítettünk, és amit megváltoztatott.' },
                { href: '/glossaire', label: 'Szójegyzék', desc: 'Az egyedi szoftver és az MI fogalmai, érthetően.' },
            ],
          })
        }
      />

      <Divider />

      <ServiceFit
        forYou={
          pick(lang, {
            fr: [
                'Vous voyez ça comme un investissement sur le long terme',
                'Vous voulez vraiment faire avancer votre activité',
                'Vous êtes prêt à mettre vos process à plat avec nous (même flous, on les clarifie ensemble)',
                'Vous voulez un outil qui vous appartient et grandit avec vous',
            ],
            en: [
                'You see this as a long-term investment',
                'You genuinely want to move your business forward',
                'You are ready to lay your processes flat with us (even vague ones, we clarify them together)',
                'You want a tool you own, that grows with you',
            ],
            hu: [
                'Hosszú távú befektetésként tekint rá',
                'Valóban előre akarja vinni a cégét',
                'Készen áll arra, hogy velünk együtt kiterítse a folyamatait (a homályosakat is, együtt tisztázzuk)',
                'Olyan eszközt akar, amely az Öné, és Önnel együtt nő',
            ],
          })
        }
        notForYou={
          pick(lang, {
            fr: [
                'Un SaaS standard couvre déjà tous vos besoins',
                'Vous cherchez avant tout le moins cher, peu importe le résultat',
                'Vous voulez du livré en 3 jours, sans aucun cadrage',
                'Vous ne voulez impliquer personne dans le projet',
            ],
            en: [
                'A standard SaaS already covers everything you need',
                'You are looking for the cheapest option above all, whatever the result',
                'You want it delivered in three days, with no scoping at all',
                'You do not want to involve anyone in the project',
            ],
            hu: [
                'Egy szabványos SaaS már mindent lefed, amire szüksége van',
                'Mindenekelőtt a legolcsóbbat keresi, bármi is az eredmény',
                'Három nap alatt kéri, mindenféle előkészítés nélkül',
                'Senkit nem akar bevonni a projektbe',
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
                {d('Et si tout était au même endroit ?', 'What if it were all in one place?', 'Mi lenne, ha minden egy helyen volna?')}
              </h2>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                {d(
                  'Un appel offert. On regarde vos outils actuels et on identifie ce qu\u2019un seul logiciel sur-mesure vous ferait gagner, en temps, en clients, en clarté. Même si on ne travaille pas ensemble.',
                  'A free call. We look at the tools you use today and work out what one piece of custom software would win you, in time, in clients, in clarity. Even if we never work together.'
                , 'Egy ingyenes hívás. Megnézzük a ma használt eszközeit, és kiszámoljuk, mit nyerne egyetlen egyedi szoftverrel időben, ügyfelekben, átláthatóságban. Akkor is, ha soha nem dolgozunk együtt.')}
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
