'use client'

import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

/**
 * LES STYLES DES COMPOSANTS, ÉCRITS DANS LE HTML DU SERVEUR (19/11/2026).
 *
 * Le site met en page presque tout avec `<style jsx>`. Dans l'App Router,
 * sans ce registre, ces styles ne partent PAS dans le HTML : ils sont ajoutés
 * par le JavaScript, après coup. Mesuré sur mobile en 4G : chaque page
 * s'affichait d'abord sans ses marges ni ses tailles, puis tout sautait d'un
 * coup entre 1,5 et 4,7 s. Google le mesure (CLS de 0,21 à 0,43), et le
 * visiteur le voit.
 *
 * C'est le montage que la doc Next.js donne pour styled-jsx :
 * https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-jsx
 */
export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
  // Un seul registre par rendu, créé paresseusement.
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  })

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
