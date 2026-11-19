'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

/* useLayoutEffect ne tourne pas côté serveur et React le signale : on prend
   useEffect là-bas, où il ne fait rien non plus. */
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * LE FONDU MONTANT DES BLOCS (refait le 19/11/2026).
 *
 * Avant : framer-motion rendait chaque bloc à opacité 0 côté serveur, et il ne
 * s'affichait qu'une fois le JavaScript chargé. Pour le haut de page, ça veut
 * dire un titre invisible pendant 4 à 6 s sur mobile, et c'est ce titre que
 * Google mesure (LCP).
 *
 * Maintenant, en deux temps :
 *   1. Rendu serveur : le bloc est visible et joue le fondu en CSS (`.ns-in`,
 *      globals.css) dès que la page s'affiche. Le haut de page apparaît tout
 *      de suite, avec le même mouvement.
 *   2. Au chargement du JavaScript, les blocs encore hors de l'écran repassent
 *      cachés (le visiteur ne les voit pas) et apparaissent au défilement,
 *      exactement comme avant.
 * Le même élément sert dans les deux temps : rien n'est remonté, aucun état
 * des enfants n'est perdu.
 */
export default function FadeUp({
  children,
  delay = 0,
  className = '',
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })
  const [onScroll, setOnScroll] = useState(false)

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    if (r.top >= window.innerHeight || r.bottom <= 0) setOnScroll(true)
  }, [])

  const visible = !onScroll || isInView

  return (
    <motion.div
      ref={ref}
      className={onScroll ? className : `ns-in ${className}`.trim()}
      style={onScroll ? undefined : { animationDelay: `${delay}s` }}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: onScroll ? 0.7 : 0,
        delay: onScroll && visible ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
