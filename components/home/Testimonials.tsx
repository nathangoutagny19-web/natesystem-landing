'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import type { Lang } from '@/lib/i18n'

/**
 * LES TÉMOIGNAGES DE L'ACCUEIL (8 novembre 2026). Remplacent le carrousel de
 * cas (CaseStudy), qui vit désormais sur /case-studies avec ses vidéos, ses
 * photos et ses chiffres.
 *
 * ⚠︎ MOT POUR MOT, ET SOURCÉ. Aucune citation n'est reformulée ; une coupe
 * est marquée « […] » ; une traduction le dit. Sources :
 *   - Zoltán : e-mail écrit du 28/10/2026, en anglais,
 *     ~/Business/Clients/Vendeglatas-Management/temoignage-ecrit-zoltan-kis-2026-10-28.md
 *     (jamais une phrase avec son « AI-powered »).
 *   - IUT : transcription de la vidéo du 28/10/2026,
 *     ~/Business/Clients/IUT-Saint-Etienne/temoignage-video-crm-tc-transcript-2026-10-28.txt
 *   - Chromosome : verbatims notés du podcast YouTube aMIjJbzuhDc, à
 *     vérifier sur la vidéo par Nathan avant la mise en ligne. Signée avec
 *     l'entreprise seule : son rôle diffère d'un fichier à l'autre
 *     (General Manager / Vice-présidente).
 * Chaque carte est signée par l'entreprise seule, sans prénom : les noms sont
 * dans les légendes des photos de la bande noire juste au-dessus (Nathan).
 * Pas de citation des Chartreux : aucune n'a été recueillie. Ne pas en créer.
 * La citation « réservations » de Chromosome est écartée : la restauration
 * n'est jamais présentée comme une spécialité.
 */

type Size = 'lg' | 'md' | 'sm'
type Original = 'fr' | 'en'

type Testimonial = {
  size: Size
  /** Langue dans laquelle la personne l'a dit ou écrit. */
  original: Original
  quote: Record<Lang, string>
  /** Signée avec l'entreprise seule (Nathan, 8 novembre 2026) : les prénoms
      sont déjà dans les légendes des photos de la bande noire juste au-dessus. */
  org: Record<Lang, string>
}

const VM = { fr: 'Vendéglátás Menedzsment · Budapest', en: 'Vendéglátás Menedzsment · Budapest', hu: 'Vendéglátás Menedzsment · Budapest' }
const IUT = { fr: 'IUT de Saint-Étienne · département TC', en: 'IUT de Saint-Étienne · Sales & Marketing dept.', hu: 'IUT de Saint-Étienne · kereskedelmi tanszék' }
const CHROMO = { fr: 'Chromosome · Saint-Étienne', en: 'Chromosome · Saint-Étienne', hu: 'Chromosome · Saint-Étienne' }

/* L'ordre est celui de la lecture en colonnes : il alterne les trois voix
   et les trois tailles, pour qu'aucune colonne ne parle d'un seul client. */
const TESTIMONIALS: Testimonial[] = [
  {
    size: 'lg',
    original: 'en',
    quote: {
      en: 'He didn’t just build what I had asked for — he actually went beyond my expectations.',
      fr: 'Il n’a pas seulement construit ce que je lui avais demandé, il est allé au-delà de mes attentes.',
      hu: 'Nem csak azt építette meg, amit kértem, hanem felül is múlta a várakozásaimat.',
    },
    org: VM,
  },
  {
    size: 'md',
    original: 'fr',
    quote: {
      fr: 'Au fur et à mesure de l’élaboration de l’outil et de son test, Nathan a pu rajouter pas mal d’applications qui sont très utiles.',
      en: 'As the tool was being built and tested, Nathan was able to add quite a few features that are very useful.',
      hu: 'Az eszköz kidolgozása és tesztelése során Nathan jó néhány nagyon hasznos funkcióval bővítette.',
    },
    org: IUT,
  },
  {
    size: 'sm',
    original: 'fr',
    quote: {
      fr: 'Vous parlez mieux de notre outil que nous-même.',
      en: 'You talk about our tool better than we do.',
      hu: 'Ön jobban beszél az eszközünkről, mint mi magunk.',
    },
    org: CHROMO,
  },
  {
    size: 'lg',
    original: 'fr',
    quote: {
      fr: 'On ne fait pas de l’outil numérique pour faire de l’outil numérique. On le met au service d’un problème de gestion.',
      en: 'We don’t build digital tools for the sake of digital tools. We put them to work on a management problem.',
      hu: 'Nem a digitális eszköz kedvéért csinálunk digitális eszközt. Egy működési probléma megoldására használjuk.',
    },
    org: CHROMO,
  },
  {
    size: 'sm',
    original: 'en',
    quote: {
      en: 'I no longer have to dig through endless Excel spreadsheets.',
      fr: 'Je n’ai plus à fouiller dans des fichiers Excel interminables.',
      hu: 'Már nem kell végtelen Excel-táblázatokban keresgélnem.',
    },
    org: VM,
  },
  {
    size: 'md',
    original: 'en',
    quote: {
      en: 'Nathan listened very carefully, and I could tell he genuinely understood what I was describing.',
      fr: 'Nathan a écouté très attentivement, et j’ai senti qu’il comprenait vraiment ce que je décrivais.',
      hu: 'Nathan nagyon figyelmesen meghallgatott, és éreztem, hogy valóban érti, amit elmondok.',
    },
    org: VM,
  },
  {
    size: 'lg',
    original: 'fr',
    quote: {
      fr: 'Il est hyper sérieux, hyper réactif et force de proposition, et vous pouvez faire appel à lui en toute confiance.',
      en: 'He is extremely serious, extremely responsive and full of ideas, and you can call on him with complete confidence.',
      hu: 'Rendkívül komoly, rendkívül gyorsan reagál és tele van javaslatokkal, teljes bizalommal fordulhat hozzá.',
    },
    org: IUT,
  },
  {
    size: 'md',
    original: 'fr',
    quote: {
      fr: 'Avoir l’information quasiment en temps réel, c’est précieux dans une entreprise. On peut anticiper et prendre les bonnes décisions.',
      en: 'Having the information almost in real time is precious in a business. You can anticipate and make the right decisions.',
      hu: 'Szinte valós időben látni az információt felbecsülhetetlen egy vállalkozásban. Előre lehet tervezni és jó döntéseket hozni.',
    },
    org: CHROMO,
  },
  {
    size: 'md',
    original: 'en',
    quote: {
      en: 'He is a highly skilled, creative, and reliable developer, and an absolute pleasure to work with.',
      fr: 'C’est un développeur très compétent, créatif et fiable, et c’est un vrai plaisir de travailler avec lui.',
      hu: 'Rendkívül képzett, kreatív és megbízható fejlesztő, és igazi öröm vele dolgozni.',
    },
    org: VM,
  },

]

/* Les guillemets suivent la langue de la page. */
/* Espaces insécables en français, pour que « » » ne parte jamais seul à la ligne. */
const MARKS: Record<Lang, [string, string]> = { fr: ['«\u00A0', '\u00A0»'], en: ['“', '”'], hu: ['„', '”'] }

export default function Testimonials() {
  const { lang } = useLang()
  const d = makeD(lang)

  const translatedNote = (original: Original) => {
    if (original === lang) return null
    if (original === 'en') return d('Traduit de l’anglais', '', 'Angolból fordítva')
    return d('', 'Translated from French', 'Franciából fordítva')
  }

  return (
    <section id="temoignages" style={{ padding: '96px 24px 100px' }}>
      <div className="mx-auto" style={{ maxWidth: 1120 }}>
        <FadeUp className="text-center">
          <span className="section-label">{d('Témoignages', 'Testimonials', 'Ajánlások')}</span>
          <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto 56px' }}>
            {d('Ce qu’ils en disent, ', 'What they say, ', 'Amit mondanak, ')}
            <span className="accent">{d('une fois l’outil en place.', 'once the tool is in place.', 'miután az eszköz működik.')}</span>
          </h2>
        </FadeUp>

        <div className="tm-wall">
          {TESTIMONIALS.map((tm, i) => {
            const [open, close] = MARKS[lang]
            const note = translatedNote(tm.original)
            return (
              <FadeUp key={i} delay={Math.min(i * 0.05, 0.3)}>
                <figure className={`tm-card tm-${tm.size}`}>
                  <blockquote className={tm.size === 'sm' ? 'font-sans tm-quote' : 'font-serif italic tm-quote'}>
                    {open}{tm.quote[lang]}{close}
                  </blockquote>
                  <figcaption className="tm-sign">
                    <span className="font-sans tm-org">{tm.org[lang]}</span>
                    {note && <span className="font-sans tm-note">{note}</span>}
                  </figcaption>
                </figure>
              </FadeUp>
            )
          })}
        </div>

        <FadeUp className="text-center">
          <Link href={localizedHref('/case-studies', lang)} className="arrow-link" style={{ display: 'inline-block', marginTop: 40 }}>
            {d('Voir les réalisations en vidéo', 'See the case studies on video', 'Esettanulmányok videón')}
          </Link>
        </FadeUp>
      </div>

      <style jsx>{`
        /* Un mur de colonnes : chaque carte prend la hauteur de sa citation,
           et les trois tailles cassent la grille. Pas de carrousel. */
        .tm-wall {
          column-count: 3;
          column-gap: 20px;
        }
        .tm-wall > :global(div) {
          break-inside: avoid;
          margin-bottom: 20px;
        }
        .tm-card {
          margin: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .tm-lg { padding: 34px 30px 28px; }
        .tm-md { padding: 28px 26px 24px; }
        .tm-sm { padding: 22px 22px 20px; }
        .tm-quote {
          margin: 0;
          color: var(--text);
          font-weight: 400;
        }
        .tm-lg .tm-quote { font-size: clamp(22px, 2.2vw, 27px); line-height: 1.3; }
        .tm-md .tm-quote { font-size: clamp(18px, 1.7vw, 20px); line-height: 1.4; }
        .tm-sm .tm-quote { font-size: 15px; line-height: 1.6; color: var(--text-secondary); }
        .tm-sign {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .tm-org { font-size: 14px; font-weight: 500; color: var(--text); }
        .tm-note {
          font-size: 12px;
          font-style: italic;
          font-weight: 300;
          color: var(--text-muted);
          margin-top: 4px;
        }
        @media (max-width: 960px) {
          .tm-wall { column-count: 2; }
        }
        @media (max-width: 620px) {
          .tm-wall { column-count: 1; }
          .tm-lg { padding: 28px 24px 24px; }
        }
      `}</style>
    </section>
  )
}
