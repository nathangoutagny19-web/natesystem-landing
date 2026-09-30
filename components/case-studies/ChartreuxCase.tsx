'use client'

import FadeUp from '@/components/ui/FadeUp'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE CAS LES CHARTREUX, EN TÊTE DES RÉALISATIONS.
 *
 * C'est le cas le plus lourd du portefeuille, et il n'était nulle part : la
 * page s'ouvrait sur Chromosome, un restaurant, alors que Nathan se niche sur
 * les écoles. Il passe donc en premier.
 *
 * Il porte la vidéo, pas un texte qui la résume : elle démonte le comptage
 * d'heures niveau par niveau et se termine sur la démo du logiciel. Elle
 * démarre à 34 s, là où le cas commence, pour ne pas imposer l'intro.
 *
 * ⚠︎ CHIFFRES. Tout ce qui est écrit ici sort de la vidéo publique de Nathan :
 * neuf établissements, 4 700 élèves, neuf tableurs, 63 jours de développement
 * et de mise en production. Le nombre
 * d'heures rendues chaque mois n'y est PAS, volontairement : la vidéo dit 40,
 * le cerveau dit 30, et tant que ce n'est pas tranché le site n'en avance
 * aucun. Voir brain/accounts/institut-chartreux.md.
 *
 * ⚠︎ LOGO. `chartreux-light.png` est un artwork blanc à fond transparent, pas
 * une image claire : le filtre le rend noir sur thème clair et blanc sur thème
 * sombre, comme dans ClientsBar. `chartreux-dark.png` a un fond blanc opaque
 * et deviendrait un rectangle noir sous ce même filtre.
 */

const YOUTUBE_ID = 'pfkWU9IDeGE'
const START_AT = 34

export default function ChartreuxCase() {
  const { lang } = useLang()
  const d = makeD(lang)

  const metrics = [
    {
      value: '9',
      label: d(
        'établissements, de la maternelle au supérieur',
        'schools, from nursery to higher education',
        'intézmény, az óvodától a felsőoktatásig'
      ),
    },
    {
      value: '4 700',
      label: d(
        'élèves, 300 enseignants, 300 salariés',
        'students, 300 teachers, 300 staff',
        'diák, 300 tanár, 300 alkalmazott'
      ),
    },
    {
      value: d('9 tableurs', '9 spreadsheets', '9 táblázat'),
      label: d(
        'remplacés par un seul écran',
        'replaced by a single screen',
        'helyett egyetlen képernyő'
      ),
    },
    {
      value: d('63 jours', '63 days', '63 nap'),
      label: d(
        'de développement et de mise en production, sur neuf établissements. Le dixième n’y est pas encore.',
        'of development and go-live, across nine schools. The tenth is not there yet.',
        'fejlesztés és éles indulás kilenc intézményen. A tizedik még nincs meg.'
      ),
    },
  ]

  return (
    <section style={{ padding: '48px 24px 8px' }}>
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        <FadeUp>
          <div className="chx-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/chartreux-light.png"
              alt="Les Chartreux"
              className="chx-logo"
              loading="lazy"
            />
            <p className="font-mono chx-eyebrow">
              {d('Groupe scolaire · Lyon', 'School group · Lyon', 'Iskolacsoport · Lyon')}
            </p>
            <h2 className="font-serif italic chx-title">
              {d(
                'Neuf établissements, une seule pointeuse.',
                'Nine schools, one time clock.',
                'Kilenc intézmény, egyetlen beléptetőrendszer.'
              )}
            </h2>
            <p className="font-sans chx-sub">
              {d(
                'Les heures vivaient dans neuf tableurs, un par établissement, et personne ne savait lequel disait vrai. Nathan raconte le chantier en entier, puis montre le logiciel.',
                'The hours lived in nine spreadsheets, one per school, and nobody knew which one told the truth. Nathan walks through the whole build, then shows the software.',
                'Az órák kilenc táblázatban éltek, intézményenként egyben, és senki sem tudta, melyik mond igazat. Nathan végigveszi az egész munkát, majd megmutatja a szoftvert.'
              )}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="chx-video">
            <LiteYouTube
              id={YOUTUBE_ID}
              start={START_AT}
              title={d(
                'Le comptage des heures des Chartreux, de neuf tableurs à un logiciel sur-mesure',
                'Time tracking at Les Chartreux, from nine spreadsheets to custom software',
                'A Chartreux óranyilvántartása, kilenc táblázattól az egyedi szoftverig'
              )}
            />
          </div>
        </FadeUp>

        <div className="chx-grid">
          <FadeUp delay={0.14}>
            <figure className="chx-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/realisations/chartreux-terrasse.webp"
                alt={d(
                  'Nathan Goutagny sur la terrasse des Chartreux, à Lyon, avec Fourvière en arrière-plan',
                  'Nathan Goutagny on the Les Chartreux terrace in Lyon, with Fourvière behind',
                  'Nathan Goutagny a lyoni Chartreux teraszán, háttérben a Fourvière-rel'
                )}
                loading="lazy"
                width={1200}
                height={1200}
              />
              <figcaption className="font-mono chx-caption">
                {d(
                  'Sur la terrasse des Chartreux, à Lyon.',
                  'On the Les Chartreux terrace, in Lyon.',
                  'A Chartreux teraszán, Lyonban.'
                )}
              </figcaption>
            </figure>
          </FadeUp>

          <FadeUp delay={0.2}>
            <ul className="chx-metrics">
              {metrics.map((m) => (
                <li key={m.value} className="chx-metric">
                  <span className="font-serif italic chx-metric-value">{m.value}</span>
                  <span className="font-sans chx-metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>

      <style jsx>{`
        .chx-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 30px;
        }
        /* Artwork blanc à fond transparent : noirci sur thème clair, blanchi sur
           thème sombre, exactement comme la barre clients le fait. */
        .chx-logo {
          height: 84px;
          width: auto;
          margin: 0 auto 14px;
          display: block;
          filter: brightness(0) opacity(0.82);
        }
        :global([data-theme='dark']) .chx-logo {
          filter: brightness(0) invert(1) opacity(0.9);
        }
        @media (prefers-color-scheme: dark) {
          :global(:root:not([data-theme='light'])) .chx-logo {
            filter: brightness(0) invert(1) opacity(0.9);
          }
        }
        .chx-eyebrow {
          font-size: 11px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 12px;
        }
        .chx-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 400;
          color: var(--text);
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .chx-sub {
          font-size: 15.5px;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }
        .chx-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          box-shadow: 0 18px 48px -28px rgba(15, 23, 42, 0.3);
        }
        .chx-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 32px;
          align-items: center;
          margin-top: 32px;
        }
        .chx-figure {
          margin: 0;
        }
        .chx-figure img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .chx-caption {
          font-size: 10.5px;
          letter-spacing: 0.6px;
          color: var(--text-secondary);
          opacity: 0.8;
          margin-top: 10px;
          text-align: center;
        }
        .chx-metrics {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 18px;
        }
        .chx-metric {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border);
        }
        .chx-metric:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
        .chx-metric-value {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
        }
        .chx-metric-label {
          font-size: 14px;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        @media (max-width: 820px) {
          .chx-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
        }
      `}</style>
    </section>
  )
}
