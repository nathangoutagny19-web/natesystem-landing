'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
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
 * est marquée « […] ». Une seule ligne, en bas, dit que certaines sont
 * traduites : sans signature, une mention par citation n'aurait pas de sens.
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
  const d = makeD(lang)
  const [open, close] = MARKS[lang]
  const anyTranslated = TESTIMONIALS.some((tm) => tm.original !== lang)

  return (
    <div className="bq">
      <div className="bq-wall">
        {TESTIMONIALS.map((tm, i) => (
          <FadeUp key={i} delay={Math.min(i * 0.05, 0.3)}>
            <blockquote className={`bq-quote bq-${tm.size} ${tm.size === 'sm' ? 'font-sans' : 'font-serif italic'}`}>
              {open}{tm.quote[lang]}{close}
            </blockquote>
          </FadeUp>
        ))}
      </div>

      {anyTranslated && (
        <p className="font-sans bq-note">
          {d('Certaines citations sont traduites de l’anglais.', 'Some quotes are translated from French.', 'Az idézeteket franciából és angolból fordítottuk.')}
        </p>
      )}

      <style jsx>{`
        .bq {
          max-width: 1120px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 104px) 24px clamp(88px, 10vw, 140px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        /* Des colonnes, pas de cartes : chaque citation prend la hauteur de
           son texte, et les trois tailles cassent la grille. */
        .bq-wall {
          column-count: 3;
          column-gap: 64px;
        }
        .bq-wall > :global(div) {
          break-inside: avoid;
          margin-bottom: 48px;
        }
        .bq-quote {
          margin: 0;
          font-weight: 400;
        }
        .bq-lg { font-size: clamp(24px, 2.4vw, 30px); line-height: 1.25; color: #f0f0f2; }
        .bq-md { font-size: clamp(19px, 1.8vw, 22px); line-height: 1.35; color: rgba(240, 240, 242, 0.82); }
        .bq-sm { font-size: 15.5px; line-height: 1.6; font-weight: 300; color: rgba(240, 240, 242, 0.6); }
        .bq-note {
          margin: 24px 0 0;
          text-align: center;
          font-size: 12px;
          font-weight: 300;
          color: rgba(240, 240, 242, 0.38);
        }
        @media (max-width: 960px) {
          .bq-wall { column-count: 2; column-gap: 40px; }
        }
        @media (max-width: 620px) {
          .bq-wall { column-count: 1; }
          .bq-wall > :global(div) { margin-bottom: 32px; }
        }
      `}</style>
    </div>
  )
}
