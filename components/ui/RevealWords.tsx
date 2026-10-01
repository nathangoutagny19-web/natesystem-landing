'use client'

import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Révélation mot à mot, derrière un masque.
 *
 * Chaque mot est posé dans une boîte à `overflow: hidden` et monte depuis le
 * bas. Le découpage se fait au mot et non à la ligne, exprès : les retours à
 * la ligne changent à chaque largeur d'écran, un masquage par ligne devrait
 * être recalculé en JavaScript et casserait au redimensionnement. Au mot, le
 * rendu est juste à toutes les tailles sans mesurer quoi que ce soit.
 *
 * ⚠︎ LE MASQUE DÉBORDE EXPRÈS. L'Instrument Serif italique descend sous la
 * ligne de base (p, g, q) et déborde à droite. Un masque collé au texte les
 * raboterait. D'où le rembourrage, annulé par une marge négative de même
 * valeur : la boîte qui coupe est plus grande que le mot, la mise en page ne
 * bouge pas d'un pixel.
 *
 * Accessibilité : les mots sont cachés aux lecteurs d'écran et la phrase
 * entière est portée par `aria-label`, sinon elle serait lue mot par mot. Et
 * si le visiteur a demandé moins d'animations, on rend le texte brut.
 */
export default function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: {
  text: string
  className?: string
  /** Secondes avant le premier mot. */
  delay?: number
  /** Décalage entre deux mots. */
  stagger?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) return <span className={className}>{text}</span>

  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((mot, i) => (
        <Fragment key={`${mot}-${i}`}>
          <span className="rw-mask" aria-hidden="true">
            <motion.span
              initial={{ y: '130%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'inline-block' }}
            >
              {mot}
            </motion.span>
          </span>
          {/* L'espace reste DEHORS : à l'intérieur d'un inline-block il ne
              crée pas de point de césure entre deux mots, et le titre entier
              devient une seule ligne insécable qui déborde de l'écran. */}
          {' '}
        </Fragment>
      ))}

      <style jsx>{`
        .rw-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          padding: 0.04em 0.08em 0.2em 0.02em;
          margin: -0.04em -0.08em -0.2em -0.02em;
        }
      `}</style>
    </span>
  )
}
