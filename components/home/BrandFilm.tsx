'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE FILM DE MARQUE, 36 SECONDES.
 *
 * Posé juste après la section Transformation, dont il reprend volontairement
 * la phrase d'ouverture et de clôture. Choix de Nathan, 24 septembre 2026 :
 * le film complète la section, il ne la remplace pas, et il reste contenu à
 * 680 px plutôt que pleine largeur.
 *
 * Lecture : démarrage automatique et muet, en boucle, uniquement quand le
 * cadre entre dans l'écran. Trois conséquences voulues :
 *   · le fichier (4,6 Mo) n'est pas téléchargé au chargement de la page, il
 *     l'est quand le visiteur approche ;
 *   · la lecture s'arrête dès que le cadre sort de l'écran, pour ne pas faire
 *     tourner un décodeur vidéo dans le vide ;
 *   · le son existe mais ne part jamais seul, c'est le visiteur qui l'active.
 *
 * ⚠︎ L'ordre compte. `preload="none"` + une `src` posée au moment où le cadre
 * approche veut dire qu'au premier passage, `play()` s'exécutait sur un
 * élément qui n'avait pas encore reçu sa source : le navigateur lançait une
 * vidéo vide, sans erreur et sans rien afficher. D'où deux effets séparés :
 * l'observateur arme la source, et c'est le rendu suivant qui déclenche
 * `load()` puis `play()`.
 *
 * `prefers-reduced-motion` coupe le démarrage automatique : le poster reste
 * affiché, la lecture est à la main du visiteur.
 *
 * ⚠︎ Le film n'est rendu que sur la home française. Son texte est incrusté en
 * français dans l'image : l'afficher sous /en ou /hu remettrait du français
 * dans des arbres qu'on vient de traduire entièrement. Il y apparaîtra le jour
 * où un export anglais et un export hongrois existeront.
 */
export default function BrandFilm() {
  const { lang } = useLang()
  const d = makeD(lang)
  const ref = useRef<HTMLVideoElement>(null)
  const loadedOnce = useRef(false)
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [muted, setMuted] = useState(true)

  /* 1. L'observateur, qui ne fait que dire si le cadre est à l'écran. */
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '300px 0px', threshold: 0.2 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  /* 2. Le pilotage. Au premier passage il arme la source et s'arrête là : la
        lecture attend le rendu suivant, quand la `src` est réellement posée. */
  useEffect(() => {
    const v = ref.current
    if (!v) return

    if (!visible) {
      v.pause()
      return
    }
    if (!armed) {
      setArmed(true)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (!loadedOnce.current) {
      v.load()
      loadedOnce.current = true
    }
    v.play().catch(() => {})
  }, [visible, armed])

  if (lang !== 'fr') return null

  const toggleSound = () => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <section style={{ padding: '56px 24px 72px' }}>
      <div className="mx-auto" style={{ maxWidth: 680 }}>
        <FadeUp>
          <div className="film-frame">
            <video
              ref={ref}
              src={armed ? '/film.mp4' : undefined}
              poster="/film-poster.jpg"
              muted
              loop
              playsInline
              preload="none"
              aria-label={d(
                'Film NateSystem : de vos outils éparpillés à un seul écran qui dit la vérité',
                'NateSystem film: from scattered tools to one screen that tells the truth',
                'NateSystem-film: a szétszórt eszközöktől egyetlen képernyőig, amely igazat mond'
              )}
              className="film-media"
            />

            <button
              type="button"
              onClick={toggleSound}
              className="film-sound"
              aria-label={
                muted
                  ? d('Activer le son', 'Turn the sound on', 'Hang bekapcsolása')
                  : d('Couper le son', 'Turn the sound off', 'Hang kikapcsolása')
              }
            >
              {muted ? <VolumeX size={15} strokeWidth={2} /> : <Volume2 size={15} strokeWidth={2} />}
            </button>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .film-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 18px 48px -28px rgba(15, 23, 42, 0.3);
        }
        .film-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .film-sound {
          position: absolute;
          right: 12px;
          bottom: 12px;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(14, 14, 18, 0.55);
          backdrop-filter: blur(6px);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.22s ease, border-color 0.22s ease;
        }
        .film-frame:hover .film-sound,
        .film-sound:focus-visible {
          opacity: 1;
        }
        .film-sound:hover {
          border-color: var(--accent);
        }
        /* Sur tactile il n'y a pas de survol : le bouton reste visible. */
        @media (hover: none) {
          .film-sound {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
