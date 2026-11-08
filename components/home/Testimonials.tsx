'use client'

import { useLang } from '@/components/providers/LangProvider'
import type { Lang } from '@/lib/i18n'

/**
 * LES CITATIONS DES CLIENTS, DANS LA BANDE NOIRE (accueil, 8 novembre 2026).
 * Rendues par StatementBand, sous la phrase et les photos. Elles remplacent le
 * carrousel de cas (CaseStudy), qui vit sur /case-studies avec ses vidéos.
 *
 * Nathan : « juste les citations », sans nom, sans entreprise, sans titre.
 * Les noms sont dans les légendes des photos juste au-dessus.
 *
 * ⚠︎ MOT POUR MOT, ET SOURCÉ. Aucune citation n'est reformulée ; une coupe
 * est marquée « […] ». Les citations de Zoltán sont traduites de son e-mail
 * en anglais ; la mention « traduit » a été retirée à la demande de Nathan
 * (8 novembre 2026).
 *
 * Elles DÉFILENT, sur une ligne, toutes dans la même police et la même
 * taille (Nathan) ; pause au survol.
 * Sources :
 *   - Vendéglátás Menedzsment (Zoltán) : e-mail écrit du 28/10/2026, en
 *     anglais, ~/Business/Clients/Vendeglatas-Management/temoignage-ecrit-zoltan-kis-2026-10-28.md
 *     (jamais une phrase avec son « AI-powered »).
 *   - IUT : transcription de la vidéo du 28/10/2026,
 *     ~/Business/Clients/IUT-Saint-Etienne/temoignage-video-crm-tc-transcript-2026-10-28.txt
 *   - Chromosome : verbatims notés du podcast YouTube aMIjJbzuhDc, à
 *     vérifier sur la vidéo par Nathan avant la mise en ligne.
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
}


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
  },
  {
    size: 'md',
    original: 'fr',
    quote: {
      fr: 'Au fur et à mesure de l’élaboration de l’outil et de son test, Nathan a pu rajouter pas mal d’applications qui sont très utiles.',
      en: 'As the tool was being built and tested, Nathan was able to add quite a few features that are very useful.',
      hu: 'Az eszköz kidolgozása és tesztelése során Nathan jó néhány nagyon hasznos funkcióval bővítette.',
    },
  },
  {
    size: 'sm',
    original: 'fr',
    quote: {
      fr: 'Vous parlez mieux de notre outil que nous-même.',
      en: 'You talk about our tool better than we do.',
      hu: 'Ön jobban beszél az eszközünkről, mint mi magunk.',
    },
  },
  {
    size: 'lg',
    original: 'fr',
    quote: {
      fr: 'On ne fait pas de l’outil numérique pour faire de l’outil numérique. On le met au service d’un problème de gestion.',
      en: 'We don’t build digital tools for the sake of digital tools. We put them to work on a management problem.',
      hu: 'Nem a digitális eszköz kedvéért csinálunk digitális eszközt. Egy működési probléma megoldására használjuk.',
    },
  },
  {
    size: 'sm',
    original: 'en',
    quote: {
      en: 'I no longer have to dig through endless Excel spreadsheets.',
      fr: 'Je n’ai plus à fouiller dans des fichiers Excel interminables.',
      hu: 'Már nem kell végtelen Excel-táblázatokban keresgélnem.',
    },
  },
  {
    size: 'md',
    original: 'en',
    quote: {
      en: 'Nathan listened very carefully, and I could tell he genuinely understood what I was describing.',
      fr: 'Nathan a écouté très attentivement, et j’ai senti qu’il comprenait vraiment ce que je décrivais.',
      hu: 'Nathan nagyon figyelmesen meghallgatott, és éreztem, hogy valóban érti, amit elmondok.',
    },
  },
  {
    size: 'lg',
    original: 'fr',
    quote: {
      fr: 'Il est hyper sérieux, hyper réactif et force de proposition, et vous pouvez faire appel à lui en toute confiance.',
      en: 'He is extremely serious, extremely responsive and full of ideas, and you can call on him with complete confidence.',
      hu: 'Rendkívül komoly, rendkívül gyorsan reagál és tele van javaslatokkal, teljes bizalommal fordulhat hozzá.',
    },
  },
  {
    size: 'md',
    original: 'fr',
    quote: {
      fr: 'Avoir l’information quasiment en temps réel, c’est précieux dans une entreprise. On peut anticiper et prendre les bonnes décisions.',
      en: 'Having the information almost in real time is precious in a business. You can anticipate and make the right decisions.',
      hu: 'Szinte valós időben látni az információt felbecsülhetetlen egy vállalkozásban. Előre lehet tervezni és jó döntéseket hozni.',
    },
  },
  {
    size: 'md',
    original: 'en',
    quote: {
      en: 'He is a highly skilled, creative, and reliable developer, and an absolute pleasure to work with.',
      fr: 'C’est un développeur très compétent, créatif et fiable, et c’est un vrai plaisir de travailler avec lui.',
      hu: 'Rendkívül képzett, kreatív és megbízható fejlesztő, és igazi öröm vele dolgozni.',
    },
  },

]

/* Les guillemets suivent la langue de la page. */
/* Espaces insécables en français, pour que « » » ne parte jamais seul à la ligne. */
const MARKS: Record<Lang, [string, string]> = { fr: ['«\u00A0', '\u00A0»'], en: ['“', '”'], hu: ['„', '”'] }

export default function BandQuotes() {
  const { lang } = useLang()
  const [open, close] = MARKS[lang]
  const N = TESTIMONIALS.length

  return (
    <div className="bq">
      <div className="bq-rule" />
      <div className="bq-marquee">
        {/* La piste est doublée pour une boucle sans couture ; la copie est
            masquée aux lecteurs d'écran. */}
        <ul className="bq-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((tm, i) => (
            <li key={i} className="bq-item" aria-hidden={i >= N ? true : undefined}>
              <blockquote className="bq-quote font-serif italic">
                {open}{tm.quote[lang]}{close}
              </blockquote>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .bq-rule {
          max-width: 1120px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bq-marquee {
          overflow: hidden;
          padding: clamp(64px, 8vw, 96px) 0 clamp(48px, 6vw, 72px);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
        }
        .bq-track {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          width: max-content;
          animation: bqScroll 110s linear infinite;
          will-change: transform;
        }
        .bq-marquee:hover .bq-track { animation-play-state: paused; }
        /* L'écart est un padding, pas un gap : -50 % retombe pile sur la copie. */
        /* Une seule police, une seule taille pour toutes (Nathan). */
        .bq-item { flex: 0 0 auto; width: 480px; padding-right: 80px; }
        .bq-quote {
          margin: 0;
          font-weight: 400;
          font-size: clamp(21px, 2vw, 25px);
          line-height: 1.3;
          color: #f0f0f2;
        }
        @keyframes bqScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 760px) {
          .bq-item { width: 78vw; padding-right: 44px; }
          .bq-track { animation-duration: 80s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bq-track { animation-duration: 260s; }
        }
      `}</style>
    </div>
  )
}
