'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_LINK } from '@/lib/constants'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import ClientsGlobe from '@/components/about/ClientsGlobe'

/**
 * À PROPOS (refonte du 9 novembre 2026) : l'histoire en trois phrases,
 * l'équipe, où l'on est basés, où l'on intervient, trois engagements.
 *
 * ⚠︎ CHOIX PAR DÉFAUT, À CONFIRMER PAR NATHAN (proposition du 09/11, §10) :
 *   - l'équipe : Nathan seul, personne d'autre n'est inventé ;
 *   - « basés au Monténégro (Tivat) et en France » : sa demande du 8 novembre
 *     (« dire qu'on est basé à Tivat ») et l'entreprise française (SIRET) ;
 *   - « nous intervenons en » : la liste des marchés prospectés de la
 *     proposition ;
 *   - l'hébergement en Europe ou aux États-Unis selon le client : décision
 *     de Nathan du 21/10/2026.
 */

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export default function AProposPage() {
  const { lang } = useLang()
  const d = makeD(lang)

  const regions = [
    { name: d('France', 'France', 'Franciaország'), detail: d('Côte d’Azur, Alpes, Paris, Lyon', 'Côte d’Azur, the Alps, Paris, Lyon', 'Côte d’Azur, Alpok, Párizs, Lyon') },
    { name: d('Monaco', 'Monaco', 'Monaco'), detail: null },
    { name: d('Suisse', 'Switzerland', 'Svájc'), detail: null },
    { name: d('Antilles françaises', 'French West Indies', 'Francia Antillák'), detail: d('Saint-Barth, Saint-Martin', 'St Barts, Saint-Martin', 'Saint-Barth, Saint-Martin') },
    { name: d('Adriatique et Méditerranée', 'Adriatic and Mediterranean', 'Adria és Földközi-tenger'), detail: d('Monténégro, Croatie, Italie, Grèce, Espagne, Portugal', 'Montenegro, Croatia, Italy, Greece, Spain, Portugal', 'Montenegró, Horvátország, Olaszország, Görögország, Spanyolország, Portugália') },
    { name: d('Hongrie', 'Hungary', 'Magyarország'), detail: null },
    { name: d('Golfe', 'The Gulf', 'Öböl-térség'), detail: d('Émirats, Qatar, Oman', 'UAE, Qatar, Oman', 'Emírségek, Katar, Omán') },
  ]

  const commitments = [
    {
      title: d('Le code et les données vous appartiennent', 'The code and the data are yours', 'A kód és az adatok az Önéi'),
      text: d('Tout ce qu’on construit est à vous, et vous pouvez le reprendre à tout moment.', 'Everything we build is yours, and you can take it back at any time.', 'Minden, amit építünk, az Öné, és bármikor átveheti.'),
    },
    {
      title: d('Celui qui vous écoute est celui qui code', 'The person who listens is the person who codes', 'Aki meghallgatja, az írja a kódot'),
      text: d('Pas de commercial, pas de développeur junior entre nous.', 'No sales rep, no junior developer between us.', 'Nincs köztünk értékesítő, sem junior fejlesztő.'),
    },
    {
      title: d('Vos données hébergées près de vous', 'Your data hosted close to you', 'Az adatai Önhöz közel tárolva'),
      text: d('En Europe ou aux États-Unis, selon où vous êtes.', 'In Europe or in the United States, depending on where you are.', 'Európában vagy az Egyesült Államokban, attól függően, hol működik.'),
    },
  ]

  return (
    <main>
      <Nav />

      {/* Le hero (Nathan, 9 novembre 2026) : « une agence human to human »,
          où l'on est basés et où sont nos clients, puis le globe des clients.
          Version 1 des trois proposées ; c'est Nathan qui tranche. */}
      <section className="lx-section" style={{ paddingTop: 'clamp(140px, 16vw, 190px)' }}>
        <div className="lx-wrap ap-hero">
          <FadeUp>
            <div>
              <span className="lx-eyebrow">{d('À propos', 'About', 'Rólunk')}</span>
              <h1 className="lx-title" style={{ fontSize: 'clamp(38px, 4.6vw, 60px)', maxWidth: '15ch' }}>
                {d('Une agence ', 'A ', 'Egy ')}
                <span className="accent">{d('human to human.', 'human-to-human agency.', 'human to human ügynökség.')}</span>
              </h1>
              <p className="lx-lead" style={{ color: 'var(--text)', fontWeight: 400 }}>
                {d(
                  'Basés au Monténégro et en France. Nos clients sont à Lyon, à Saint-Étienne et à Budapest, et nous intervenons de l’Europe aux Antilles et au Golfe.',
                  'Based in Montenegro and France. Our clients are in Lyon, Saint-Étienne and Budapest, and we work from Europe to the French West Indies and the Gulf.',
                  'Montenegróban és Franciaországban működünk. Ügyfeleink Lyonban, Saint-Étienne-ben és Budapesten vannak, és Európától a Francia Antillákig és az Öböl-térségig dolgozunk.'
                )}
              </p>
              <p className="lx-lead" style={{ maxWidth: 560, fontSize: 15.5, marginTop: 20 }}>
                {d(
                  'Les maisons qui servent une clientèle exigeante tournent sur WhatsApp, sur des tableurs et sur la mémoire d’une ou deux personnes, parce que les logiciels du marché ne collent pas à leur façon de travailler. NateSystem existe pour construire l’outil qui colle, à partir de la façon dont chaque maison travaille déjà. Et cet outil leur appartient : le code, les données, tout.',
                  'Businesses that serve demanding clients run on WhatsApp, on spreadsheets and on the memory of one or two people, because off-the-shelf software does not fit the way they work. NateSystem exists to build the tool that fits, starting from the way each business already works. And that tool belongs to them: the code, the data, everything.',
                  'Az igényes ügyfeleket kiszolgáló vállalkozások WhatsAppon, táblázatokon és egy-két ember emlékezetén futnak, mert a piaci szoftverek nem illeszkednek a munkamódjukhoz. A NateSystem azért létezik, hogy megépítse az illeszkedő eszközt, abból kiindulva, ahogyan az adott vállalkozás már dolgozik. És ez az eszköz az övék: a kód, az adatok, minden.'
                )}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ClientsGlobe />
          </FadeUp>
        </div>
      </section>

      {/* L'équipe */}
      <section id="equipe" className="lx-section" style={{ paddingTop: 0 }}>
        <div className="lx-wrap ap-team">
          <FadeUp>
            <div className="ap-photo">
              <Image src="/nathan.png" alt={d('Nathan Goutagny, fondateur de NateSystem', 'Nathan Goutagny, founder of NateSystem', 'Nathan Goutagny, a NateSystem alapítója')} fill sizes="(max-width: 860px) 70vw, 340px" style={{ objectFit: 'cover' }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div>
              <span className="lx-eyebrow">{d('L’équipe', 'The team', 'A csapat')}</span>
              <h2 className="lx-title" style={{ maxWidth: '16ch' }}>Nathan Goutagny</h2>
              <p className="font-mono ap-role">{d('Fondateur', 'Founder', 'Alapító')}</p>
              <p className="lx-lead">
                {d(
                  'Je construis moi-même chaque outil. Quand vous me parlez, c’est moi qui code derrière : pas de commercial, pas de développeur junior entre nous.',
                  'I build every tool myself. When you talk to me, I am the one writing the code: no sales rep, no junior developer between us.',
                  'Minden eszközt magam építek. Ha velem beszél, én írom a kódot: nincs köztünk értékesítő, sem junior fejlesztő.'
                )}
              </p>
              <div className="ap-links">
                <a href="https://www.linkedin.com/in/nathan-goutagny" target="_blank" rel="noopener noreferrer" className="ap-link">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="mailto:nathan@natesystem.com" className="ap-link">
                  <Mail size={15} strokeWidth={1.8} /> nathan@natesystem.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Où on est basés, où on intervient */}
      <section id="ou" className="lx-section" style={{ background: '#0e0e12' }}>
        <div className="lx-wrap ap-where">
          <FadeUp>
            <div>
              <span className="lx-eyebrow" style={{ color: 'rgba(240,240,242,0.5)' }}>{d('Où nous sommes', 'Where we are', 'Hol vagyunk')}</span>
              <h2 className="lx-title" style={{ color: '#f0f0f2', maxWidth: '16ch' }}>
                {d('Sur place quand il le faut, ', 'On site when it matters, ', 'Ha kell, a helyszínen, ')}
                <span className="accent">{d('à distance le reste du temps.', 'remotely the rest of the time.', 'egyébként távolról.')}</span>
              </h2>
              <p className="lx-lead" style={{ color: 'rgba(240,240,242,0.65)' }}>
                {d('Depuis Tivat, sur la baie de Kotor, et depuis la France.', 'From Tivat, on the Bay of Kotor, and from France.', 'Tivatból, a Kotori-öböl partjáról, és Franciaországból.')}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div>
              <span className="lx-eyebrow" style={{ color: 'rgba(240,240,242,0.5)' }}>{d('Nous intervenons en', 'We work in', 'Ahol dolgozunk')}</span>
              <ul className="ap-regions">
                {regions.map((r) => (
                  <li key={r.name}>
                    <span className="font-sans ap-region">{r.name}</span>
                    {r.detail && <span className="font-sans ap-region-detail">{r.detail}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Trois engagements */}
      <section id="engagements" className="lx-section">
        <div className="lx-wrap">
          <FadeUp>
            <span className="lx-eyebrow">{d('Nos engagements', 'Our commitments', 'Vállalásaink')}</span>
            <h2 className="lx-title">{d('Trois choses qui ', 'Three things that ', 'Három dolog, ami ')}<span className="accent">{d('ne changent pas.', 'never change.', 'nem változik.')}</span></h2>
          </FadeUp>
          <ol className="ap-commit">
            {commitments.map((c, i) => (
              <FadeUp key={c.title} delay={0.08 * i}>
                <li>
                  <span className="font-mono ap-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif italic ap-commit-title">{c.title}</h3>
                  <p className="font-sans ap-commit-text">{c.text}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* Appel final */}
      <section className="lx-section" style={{ paddingTop: 0 }}>
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
        .ap-hero { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 460px); gap: 72px; align-items: center; }
        .ap-team { display: grid; grid-template-columns: 340px 1fr; gap: 72px; align-items: center; }
        .ap-photo { position: relative; width: 100%; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 4px; background: var(--bg-elevated); }
        .ap-role { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin: 14px 0 0; }
        .ap-links { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 28px; }
        .ap-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: 14px; color: var(--text); text-decoration: none; border-bottom: 1px solid var(--border-hover); padding-bottom: 3px; }
        .ap-link:hover { color: var(--accent); border-color: var(--accent); }
        .ap-where { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .ap-regions { list-style: none; margin: 0; padding: 0; }
        .ap-regions li { display: flex; flex-direction: column; gap: 2px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .ap-regions li:first-child { padding-top: 0; }
        .ap-region { font-size: 16px; font-weight: 500; color: #f0f0f2; }
        .ap-region-detail { font-size: 14px; font-weight: 300; color: rgba(240,240,242,0.6); }
        .ap-commit { list-style: none; margin: 64px 0 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px; }
        .ap-num { font-size: 11px; letter-spacing: 2px; color: var(--accent); }
        .ap-commit-title { font-size: clamp(21px, 2vw, 25px); font-weight: 400; line-height: 1.25; color: var(--text); margin: 16px 0 10px; }
        .ap-commit-text { font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--text-secondary); margin: 0; }
        @media (max-width: 860px) {
          .ap-hero, .ap-team, .ap-where { grid-template-columns: 1fr; gap: 40px; }
          .ap-photo { width: 72%; max-width: 300px; }
          .ap-commit { grid-template-columns: 1fr; gap: 36px; margin-top: 44px; }
        }
      `}</style>
    </main>
  )
}
