'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import AuditFinal from '@/components/home/AuditFinal'
import CountrySlides from '@/components/about/CountrySlides'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * À PROPOS (9 novembre 2026). Nathan, sur le globe : « trop tech, faut plus
 * clair, court et humain, donc photo ». La page tient en quatre temps : qui on
 * est, en photos et en une phrase ; Nathan ; trois engagements ; l'audit.
 *
 * ⚠︎ LES PHOTOS : uniquement des vraies, prises sur place.
 *   - Lyon : la poignée de main sur la terrasse de Fourvière, déjà publiée
 *     sur la tuile Institut des Chartreux de l'accueil.
 *   - Budapest : la poignée de main déjà publiée sur la tuile Vendéglátás
 *     Menedzsment.
 *   - Baie de Kotor : une image du tournage du 8 novembre 2026
 *     (Business/Media/Videos/0-RUSHES/2026-11-08-kotor, IMG_7460).
 *   Nommés : seulement les clients déjà publics sur le site. Jamais la
 *   conciergerie sous NDA, Wandering Yacht ni Services Exclusifs.
 *
 * Choix par défaut, à confirmer par Nathan : l'équipe = Nathan seul ; « basés
 * au Monténégro et en France » ; les pays « nous intervenons en » (liste de
 * Nathan du 09/11 : France, Suisse, Hongrie, Monténégro, Espagne, USA, UAE) ; l'hébergement en Europe ou aux États-Unis selon le client
 * (décision du 21/10/2026).
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

  const photos = [
    {
      src: '/realisations/chartreux-terrasse.webp',
      pos: '65% center',
      place: d('Lyon · France', 'Lyon · France', 'Lyon · Franciaország'),
      who: d('Avec l’Institut des Chartreux', 'With the Institut des Chartreux', 'Az Institut des Chartreux-val'),
      alt: d('Nathan serre la main d’une cliente sur une terrasse de Lyon, Fourvière derrière eux', 'Nathan shaking hands with a client on a terrace in Lyon, Fourvière behind them', 'Nathan kezet fog egy ügyféllel egy lyoni teraszon, mögöttük Fourvière'),
    },
    {
      src: '/realisations/zoltan-budapest.webp',
      pos: 'center',
      place: d('Budapest · Hongrie', 'Budapest · Hungary', 'Budapest · Magyarország'),
      who: d('Avec Vendéglátás Menedzsment', 'With Vendéglátás Menedzsment', 'A Vendéglátás Menedzsmenttel'),
      alt: d('Nathan serre la main d’un client à Budapest', 'Nathan shaking hands with a client in Budapest', 'Nathan kezet fog egy ügyféllel Budapesten'),
    },
    {
      src: '/a-propos/baie-de-kotor.jpg',
      pos: 'center',
      place: d('Baie de Kotor · Monténégro', 'Bay of Kotor · Montenegro', 'Kotori-öböl · Montenegró'),
      who: d('Là où nous sommes basés', 'Where we are based', 'Ahol a bázisunk van'),
      alt: d('Nathan devant la baie de Kotor, au Monténégro', 'Nathan in front of the Bay of Kotor, Montenegro', 'Nathan a Kotori-öböl előtt, Montenegróban'),
    },
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

      {/* Qui on est : une phrase, puis trois vraies photos, chacune avec son lieu */}
      <section className="lx-section" style={{ paddingTop: 'clamp(140px, 16vw, 190px)' }}>
        <div className="lx-wrap">
          <FadeUp>
            <span className="lx-eyebrow">{d('À propos', 'About', 'Rólunk')}</span>
            <h1 className="lx-title" style={{ fontSize: 'clamp(40px, 5.4vw, 72px)', maxWidth: 'none' }}>
              {d('Une agence ', 'A ', 'Egy ')}
              <span className="accent">{d('human to human.', 'human-to-human agency.', 'human to human ügynökség.')}</span>
            </h1>
            <p className="lx-lead" style={{ maxWidth: 600 }}>
              {d(
                'Basés au Monténégro et en France, sur place quand il le faut. On construit votre outil avec vous, et il vous appartient.',
                'Based in Montenegro and France, on site when it matters. We build your tool with you, and it belongs to you.',
                'Montenegróban és Franciaországban működünk, és ha kell, a helyszínen vagyunk. Az eszközét Önnel együtt építjük, és az Öné.'
              )}
            </p>
          </FadeUp>

          <div className="ap-photos">
            {photos.map((p, i) => (
              <FadeUp key={p.src} delay={0.08 * i}>
                <figure className="ap-fig">
                  <div className="ap-img">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 80vw, 400px" style={{ objectFit: 'cover', objectPosition: p.pos }} />
                  </div>
                  <figcaption>
                    <span className="font-mono ap-place">{p.place}</span>
                    <span className="font-sans ap-who">{p.who}</span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>

          {/* Les pays, en slides qui tournent : un dessin au trait par pays (Nathan, 9 novembre 2026) */}
          <span className="font-mono ap-regions-label">{d('Nous intervenons en', 'We work in', 'Ahol dolgozunk')}</span>
          <CountrySlides />
        </div>
      </section>

      {/* Nathan */}
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

      {/* Trois engagements */}
      <section id="engagements" className="lx-section" style={{ paddingTop: 0 }}>
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

      {/* Fin de page : l'audit gratuit, jamais un appel à réserver */}
      <AuditFinal paddingTop={0} />

      <Footer />
      <MobileCta />

      <style jsx>{`
        .ap-photos {
          margin-top: clamp(48px, 6vw, 80px);
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: start;
        }
        /* La photo du milieu descend un peu : une rangée posée à la main, pas une grille. */
        .ap-photos > :global(*:nth-child(2)) { margin-top: 56px; }
        .ap-fig { margin: 0; }
        .ap-img { position: relative; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 4px; background: var(--bg-elevated); }
        .ap-fig figcaption { display: flex; flex-direction: column; gap: 4px; margin-top: 16px; }
        .ap-place { font-size: 10.5px; letter-spacing: 1.8px; text-transform: uppercase; color: var(--text-muted); }
        .ap-who { font-size: 15px; color: var(--text); }
        .ap-regions-label {
          display: block; margin: clamp(72px, 9vw, 120px) 0 0;
          font-size: 10.5px; letter-spacing: 1.8px; text-transform: uppercase; color: var(--accent);
        }
        .ap-team { display: grid; grid-template-columns: 340px 1fr; gap: 72px; align-items: center; }
        .ap-photo { position: relative; width: 100%; aspect-ratio: 4 / 5; overflow: hidden; border-radius: 4px; background: var(--bg-elevated); }
        .ap-role { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin: 14px 0 0; }
        .ap-links { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 28px; }
        .ap-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: 14px; color: var(--text); text-decoration: none; border-bottom: 1px solid var(--border-hover); padding-bottom: 3px; }
        .ap-link:hover { color: var(--accent); border-color: var(--accent); }
        .ap-commit { list-style: none; margin: 64px 0 0; padding: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px; }
        .ap-num { font-size: 11px; letter-spacing: 2px; color: var(--accent); }
        .ap-commit-title { font-size: clamp(21px, 2vw, 25px); font-weight: 400; line-height: 1.25; color: var(--text); margin: 16px 0 10px; }
        .ap-commit-text { font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--text-secondary); margin: 0; }
        @media (max-width: 860px) {
          .ap-team { grid-template-columns: 1fr; gap: 40px; }
          .ap-photo { width: 72%; max-width: 300px; }
          .ap-commit { grid-template-columns: 1fr; gap: 36px; margin-top: 44px; }
        }
        /* Sur téléphone : les photos défilent au doigt, une et un peu de la suivante. */
        @media (max-width: 760px) {
          .ap-photos {
            display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding: 0 20px;
            margin-left: -20px; margin-right: -20px; padding: 0 20px 4px;
            scrollbar-width: none;
          }
          .ap-photos::-webkit-scrollbar { display: none; }
          .ap-photos > :global(*) { flex: 0 0 78%; scroll-snap-align: start; }
          .ap-photos > :global(*:nth-child(2)) { margin-top: 0; }
        }
      `}</style>
    </main>
  )
}
