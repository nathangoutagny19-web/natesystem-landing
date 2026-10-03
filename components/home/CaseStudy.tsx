'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { AnimatePresence, motion } from 'framer-motion'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'
import { pick, makeD } from '@/lib/lang'
import type { Lang } from '@/lib/i18n'

/**
 * LE CARROUSEL DES CAS CLIENTS.
 *
 * Avant le 30 septembre 2026, ce bloc ne montrait que Chromosome, un groupe de
 * restauration, en dur dans le composant. Sur une home qui s'adresse aux
 * écoles, la seule preuve visible parlait d'un autre métier.
 *
 * Les Chartreux passent donc en premier et Chromosome reste, comme preuve que
 * la méthode tient dans d'autres organisations à forte contrainte. C'est la
 * règle posée par Nathan : le passé ne s'efface pas, il se renomme.
 *
 * ⚠︎ LA CITATION EST FACULTATIVE, ET C'EST VOULU. Aucun témoignage des
 * Chartreux n'a été recueilli : la demande n'a jamais été envoyée
 * (brain/accounts, note du 29 août 2026). Un cas sans citation affiche sa
 * vidéo sur toute la largeur plutôt qu'une citation inventée, ce qui est le
 * premier éliminateur de knowledge/voix/garde-fous-publication.md.
 */

type CaseEntry = {
  id: string
  /** Le nom affiché en gros. */
  name: string
  sector: Record<Lang, string>
  headline: Record<Lang, string>
  videoId: string
  /** Seconde de départ, pour sauter l'intro. */
  videoStart?: number
  videoTitle: Record<Lang, string>
  metrics: { value: string; label: Record<Lang, string> }[]
  /** Une photo prise sur place, quand il n'y a pas encore de témoignage. */
  photo?: { src: string; alt: Record<Lang, string>; caption: Record<Lang, string> }
  /** Absente tant que le client n'a pas donné de témoignage. */
  quote?: Record<Lang, string>
  author?: string
  role?: string
}

const CASES: CaseEntry[] = [
  {
    id: 'chartreux',
    name: 'Les Chartreux',
    sector: {
      fr: 'Groupe scolaire · Lyon',
      en: 'School group · Lyon',
      hu: 'Iskolacsoport · Lyon',
    },
    headline: {
      fr: 'Comment un groupe scolaire de neuf établissements est passé de neuf tableurs à une seule pointeuse, bâtie sur sa convention, et a rendu des heures à ses équipes chaque mois.',
      en: 'How a nine-site school group went from nine spreadsheets to a single time clock, built on its own agreement, and gave hours back to its teams every month.',
      hu: 'Hogyan jutott el egy kilenc telephelyes iskolacsoport kilenc táblázattól egyetlen beléptetőrendszerig, a saját megállapodására építve, és hogyan ad vissza havonta órákat a csapatainak.',
    },
    videoId: 'pfkWU9IDeGE',
    videoStart: 34,
    videoTitle: {
      fr: 'Le comptage des heures des Chartreux, de neuf tableurs à un logiciel sur-mesure',
      en: 'Time tracking at Les Chartreux, from nine spreadsheets to custom software',
      hu: 'A Chartreux óranyilvántartása, kilenc táblázattól az egyedi szoftverig',
    },
    photo: {
      src: '/realisations/chartreux-terrasse.webp',
      alt: {
        fr: 'Nathan Goutagny sur la terrasse des Chartreux, à Lyon, avec Fourvière en arrière-plan',
        en: 'Nathan Goutagny on the Les Chartreux terrace in Lyon, with Fourvière behind',
        hu: 'Nathan Goutagny a lyoni Chartreux teraszán, háttérben a Fourvière-rel',
      },
      caption: {
        fr: 'Sur la terrasse des Chartreux, à Lyon.',
        en: 'On the Les Chartreux terrace, in Lyon.',
        hu: 'A Chartreux teraszán, Lyonban.',
      },
    },
    metrics: [
      {
        value: '9',
        label: {
          fr: 'établissements, de la maternelle au supérieur',
          en: 'sites, from nursery to higher education',
          hu: 'telephely, az óvodától a felsőoktatásig',
        },
      },
      {
        value: '4 700',
        label: {
          fr: 'élèves, 300 enseignants, 300 salariés',
          en: 'students, 300 teachers, 300 staff',
          hu: 'diák, 300 tanár, 300 alkalmazott',
        },
      },
      {
        value: '63',
        label: {
          fr: 'jours de développement et de mise en production, sur neuf sites',
          en: 'days of development and go-live, across nine sites',
          hu: 'nap fejlesztés és éles indulás, kilenc telephelyen',
        },
      },
    ],
  },
  {
    /* ⚠︎ CE CAS A ÉTÉ ANONYME JUSQU'AU 3 OCTOBRE 2026. Il s'appelait
       « cabinet de conseil B2B à Budapest », sans nom ni visage, faute
       d'accord. Nathan a vu Kis Zoltán ce jour-là et l'accord est donné.

       ⚠︎ CE QUI EST SOURCÉ, ET D'OÙ. « Formateur et directeur
       d'établissement » vient de sa propre page publique, qui le présente
       comme « vendéglátóipari szakember, oktató, intézményvezető ». Nathan
       dit qu'il dirige une école de cuisine réputée de Budapest : le nom de
       l'école n'est écrit NULLE PART de sourçable, donc il n'apparaît pas
       ici. Voir vendeglatasmenedzsment.hu/kis-zoltan-vendeglatoipari-audit.

       ⚠︎ LE SECTEUR N'EST PAS LE SUJET, comme pour les autres cas d'avant la
       niche : on dit « cabinet de conseil », pas le métier de ses clients.
       Règle de ~/.claude/CLAUDE.md, jamais la restauration en spécialité. */
    id: 'vendeglatas',
    name: 'Kis Zoltán',
    sector: {
      fr: 'Cabinet de conseil · Budapest',
      en: 'Consulting firm · Budapest',
      hu: 'Tanácsadó cég · Budapest',
    },
    headline: {
      fr: 'Comment un formateur et directeur d’établissement a capitalisé son savoir dans un système sur-mesure, automatisé ses rapports sur 280 indicateurs, et l’a rendu à ses clients. La vidéo montre le sien, puis comment un consultant construit le sien.',
      en: 'How a trainer and head of institution turned his own expertise into a custom system, automated his reports across 280 indicators, and handed it back to his clients. The video shows his, then how a consultant builds their own.',
      hu: 'Hogyan tette át egy oktató és intézményvezető a saját tudását egyedi rendszerbe, automatizálta a riportjait 280 mutatón, és adta vissza mindezt az ügyfeleinek. A videó megmutatja az övét, majd azt, hogyan építi meg a sajátját egy tanácsadó.',
    },
    videoId: 'VCqXWRz68_4',
    videoStart: 27,
    videoTitle: {
      fr: 'Le système de Kis Zoltán, et comment un consultant construit le sien',
      en: 'Kis Zoltán’s system, and how a consultant builds their own',
      hu: 'Kis Zoltán rendszere, és hogyan építi meg a sajátját egy tanácsadó',
    },
    photo: {
      src: '/realisations/zoltan-budapest.webp',
      alt: {
        fr: 'Nathan Goutagny serre la main de Kis Zoltán, à Budapest',
        en: 'Nathan Goutagny shaking hands with Kis Zoltán, in Budapest',
        hu: 'Nathan Goutagny kezet fog Kis Zoltánnal, Budapesten',
      },
      caption: {
        fr: 'Avec Kis Zoltán, à Budapest.',
        en: 'With Kis Zoltán, in Budapest.',
        hu: 'Kis Zoltánnal, Budapesten.',
      },
    },
    metrics: [
      {
        value: '280',
        label: {
          fr: 'indicateurs transformés en rapports personnalisés, automatiquement',
          en: 'indicators turned into personalised reports, automatically',
          hu: 'mutató automatikusan személyre szabott riporttá alakítva',
        },
      },
      {
        value: '25 ans',
        label: {
          fr: 'de savoir et de méthode capitalisés dans un système sur-mesure',
          en: 'of knowledge and method built into a custom system',
          hu: 'tudás és módszer egyedi rendszerbe öntve',
        },
      },
      {
        /* Le champ `value` n'est pas traduisible dans ce composant : un
           chiffre l'est dans les trois langues, un mot non. */
        value: '0',
        label: {
          fr: 'rapport écrit à la main : il valide et il affine, il ne rédige plus',
          en: 'reports written by hand: he reviews and refines, he no longer drafts',
          hu: 'kézzel írt riport: ellenőriz és finomít, már nem fogalmaz',
        },
      },
    ],
  },
  {
    id: 'chromosome',
    name: 'Chromosome',
    sector: {
      fr: 'Organisation · Saint-Étienne',
      en: 'Organisation · Saint-Étienne',
      hu: 'Szervezet · Saint-Étienne',
    },
    headline: {
      fr: 'Comment une organisation de Saint-Étienne pilote tout son fonctionnement sur un logiciel qui lui appartient, et rend chaque semaine 14 heures à ses équipes.',
      en: 'How an organisation in Saint-Étienne runs everything on software it owns, and gives its teams back 14 hours a week.',
      hu: 'Hogyan visz egy saint-étienne-i szervezet mindent egy szoftveren, amely az övé, és ad vissza hetente 14 órát a csapatainak.',
    },
    videoId: 'aMIjJbzuhDc',
    videoTitle: {
      fr: 'Témoignage Chromosome, NateSystem',
      en: 'Chromosome testimonial, NateSystem',
      hu: 'Chromosome-ajánlás, NateSystem',
    },
    metrics: [
      {
        value: '11h → 1h',
        label: { fr: 'Par semaine, par responsable', en: 'Per week, per manager', hu: 'Hetente, vezetőnként' },
      },
      {
        value: '~55',
        label: {
          fr: 'personnes intégrées sans friction',
          en: 'people onboarded with zero friction',
          hu: 'ember zökkenőmentesen bevonva',
        },
      },
      {
        value: '99%',
        label: {
          fr: 'du fonctionnement sur un logiciel qui leur appartient',
          en: 'of operations on software they own',
          hu: 'a működés saját tulajdonú szoftveren',
        },
      },
    ],
    quote: {
      fr: 'Ça a changé notre façon de tout gérer, on ne peut plus s’en passer aujourd’hui. Le gain de temps et de clarté est énorme, et l’équipe est beaucoup plus sereine.',
      en: 'It changed the way we run everything, we couldn’t do without it now. The time and clarity we’ve gained are huge, and the team is far more at ease.',
      hu: 'Megváltoztatta, ahogyan mindent kezelünk, ma már nem tudnánk nélküle meglenni. Az időben és az átláthatóságban nyert előny óriási, a csapat pedig sokkal nyugodtabb.',
    },
    author: 'Catherine F.',
    role: 'General Manager · Chromosome Saint-Étienne',
  },
]

export default function CaseStudy() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [index, setIndex] = useState(0)
  const current = CASES[index]
  const hasQuote = Boolean(current.quote)
  const hasSide = hasQuote || Boolean(current.photo)

  const go = (step: number) => setIndex((i) => (i + step + CASES.length) % CASES.length)

  return (
    <section id="case-study" style={{ padding: '24px 24px 80px' }}>
      <div className="mx-auto" style={{ maxWidth: '1120px' }}>
        <FadeUp>
          <motion.div
            className="overflow-hidden cs-card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              margin: '0 auto',
              padding: 'clamp(28px, 4.5vw, 56px)',
              position: 'relative',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* En-tête */}
                <div style={{ marginBottom: 'clamp(28px, 4vw, 44px)', textAlign: 'center' }}>
                  <p
                    className="font-mono"
                    style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}
                  >
                    {pick(lang, current.sector)}
                  </p>
                  <h3
                    className="font-serif italic"
                    style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', fontWeight: 400, color: 'var(--accent)', lineHeight: 1.1, marginBottom: '18px' }}
                  >
                    {current.name}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, maxWidth: '720px', margin: '0 auto' }}
                  >
                    {pick(lang, current.headline)}
                  </p>
                </div>

                {/* Citation à gauche quand elle existe, sinon la vidéo prend tout. */}
                <div className={hasSide ? 'cs-row' : 'cs-row cs-row--solo'}>
                  {!hasQuote && current.photo && (
                    <figure className="cs-photo-col">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={current.photo.src}
                        alt={pick(lang, current.photo.alt)}
                        loading="lazy"
                        width={1200}
                        height={1200}
                      />
                      <figcaption className="font-mono cs-photo-caption">
                        {pick(lang, current.photo.caption)}
                      </figcaption>
                    </figure>
                  )}
                  {hasQuote && current.quote && (
                    <div className="cs-quote-col">
                      <span className="cs-qmark font-serif" aria-hidden="true">&ldquo;</span>
                      <blockquote className="cs-quote font-serif">{pick(lang, current.quote)}</blockquote>
                      <div className="cs-attr">
                        <span className="cs-attr-name font-sans">{current.author}</span>
                        <span className="cs-attr-role font-sans">{current.role}</span>
                      </div>
                    </div>
                  )}

                  <div className="cs-video-col">
                    <div className="cs-video">
                      <LiteYouTube
                        id={current.videoId}
                        start={current.videoStart}
                        title={pick(lang, current.videoTitle)}
                      />
                    </div>
                  </div>
                </div>

                {/* Chiffres */}
                <div className="cs-metrics">
                  {current.metrics.map((m) => (
                    <div key={m.value} className="cs-metric">
                      <p className="cs-metric-value font-serif italic">{m.value}</p>
                      <p className="cs-metric-label font-sans">{pick(lang, m.label)}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* La navigation du carrousel, sous les chiffres pour ne pas
                recouvrir la vidéo au pouce sur téléphone. */}
            <div className="cs-nav">
              <button
                type="button"
                className="cs-arrow"
                onClick={() => go(-1)}
                aria-label={d('Cas précédent', 'Previous case', 'Előző eset')}
              >
                <ChevronLeft size={17} strokeWidth={2} />
              </button>

              <div className="cs-dots" role="tablist" aria-label={d('Cas clients', 'Case studies', 'Esettanulmányok')}>
                {CASES.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={c.name}
                    className={i === index ? 'cs-dot cs-dot--on' : 'cs-dot'}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="cs-arrow"
                onClick={() => go(1)}
                aria-label={d('Cas suivant', 'Next case', 'Következő eset')}
              >
                <ChevronRight size={17} strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        </FadeUp>
      </div>

      <style jsx>{`
        .cs-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        @media (min-width: 860px) {
          .cs-row { grid-template-columns: 0.9fr 1.1fr; gap: 48px; }
          /* Un cas sans témoignage : la vidéo occupe la largeur, contenue. */
          .cs-row--solo { grid-template-columns: 1fr; max-width: 860px; margin-left: auto; margin-right: auto; }
        }

        /* Colonne citation */
        .cs-quote-col { display: flex; flex-direction: column; position: relative; }
        .cs-qmark {
          font-size: 72px; line-height: 0.7; color: var(--accent);
          opacity: 0.5; margin-bottom: 4px; height: 40px;
        }
        .cs-quote {
          font-style: italic; font-weight: 400; color: var(--text);
          font-size: clamp(19px, 2.2vw, 27px); line-height: 1.4;
          margin: 0 0 22px;
        }
        .cs-attr { display: flex; flex-direction: column; gap: 3px; }
        .cs-attr-name { font-size: 14px; font-weight: 600; color: var(--text); }
        .cs-attr-role { font-size: 12.5px; font-weight: 300; color: var(--text-secondary); letter-spacing: 0.3px; }

        /* Colonne photo : carrée, bridée en largeur pour ne pas écraser la
           vidéo 16:9 qui est à côté d'elle. */
        .cs-photo-col { margin: 0; display: flex; flex-direction: column; align-items: center; }
        .cs-photo-col img {
          width: 100%; max-width: 330px; height: auto; display: block;
          border-radius: 12px; border: 1px solid var(--border);
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 18px 44px -26px rgba(15,23,42,0.3);
        }
        .cs-photo-caption {
          font-size: 10.5px; letter-spacing: 0.6px; color: var(--text-secondary);
          opacity: 0.8; margin-top: 10px; text-align: center;
        }

        /* Colonne vidéo, paysage 16:9 */
        .cs-video {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
          border-radius: 12px; overflow: hidden; border: 1px solid var(--border);
          background: #000;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 18px 44px -22px rgba(15,23,42,0.32);
        }

        /* Chiffres, séparés par un filet en haut */
        .cs-metrics {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
          padding-top: clamp(28px, 3.5vw, 40px); border-top: 1px solid var(--border);
        }
        @media (min-width: 720px) { .cs-metrics { grid-template-columns: repeat(3, 1fr); } }
        .cs-metric-value {
          font-size: clamp(22px, 3vw, 28px); color: var(--accent);
          line-height: 1.15; margin: 0 0 6px; font-weight: 400;
        }
        .cs-metric-label { font-size: 12px; color: var(--text-muted); font-weight: 300; line-height: 1.45; }

        /* Navigation */
        .cs-nav {
          display: flex; align-items: center; justify-content: center; gap: 18px;
          margin-top: clamp(26px, 3vw, 36px);
        }
        .cs-arrow {
          width: 36px; height: 36px; border-radius: 999px;
          border: 1px solid var(--border); background: var(--bg-elevated);
          color: var(--text-secondary);
          display: inline-flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.2s ease, color 0.2s ease;
          flex-shrink: 0;
        }
        .cs-arrow:hover { border-color: var(--accent); color: var(--accent); }
        .cs-dots { display: flex; align-items: center; gap: 8px; }
        .cs-dot {
          width: 7px; height: 7px; border-radius: 999px; padding: 0;
          border: 0; background: var(--border-hover); cursor: pointer;
          transition: background 0.2s ease, width 0.2s ease;
        }
        .cs-dot--on { background: var(--accent); width: 20px; }
      `}</style>
    </section>
  )
}
