'use client'

import { useCallback, useEffect, useState } from 'react'

/**
 * L'ACCÈS À LA BIBLIOTHÈQUE, PARTAGÉ PAR TOUTES SES PAGES.
 *
 * Il vit dans le navigateur (localStorage) : c'est volontairement faible. On
 * veut du volume en haut de tunnel, pas une forteresse. Quelqu'un qui tient à
 * contourner y arrivera, et ce n'est pas grave : il n'était pas un lead.
 *
 * Une seule clé pour toute la bibliothèque : ouvrir une ressource depuis un
 * lien partagé ouvre aussi les autres. Demander l'email deux fois à la même
 * personne serait la meilleure façon de ne plus le recevoir.
 *
 * La clé garde son nom d'origine (`ns-biblio-v1`) pour que les visiteurs déjà
 * entrés depuis le 1er octobre ne voient pas la porte se refermer.
 */
export const CLE_ACCES = 'ns-biblio-v1'
/** Le prénom, pour accueillir la personne par son nom dans l'espace membre. */
export const CLE_PRENOM = 'ns-biblio-prenom'

/** `null` = on ne sait pas encore (rendu serveur). Sans ce troisième état, la
 *  page clignote : elle s'affiche fermée puis s'ouvre à l'hydratation. */
export function useAcces() {
  const [ouvert, setOuvert] = useState<boolean | null>(null)
  const [prenom, setPrenom] = useState<string>('')

  useEffect(() => {
    try {
      setOuvert(Boolean(localStorage.getItem(CLE_ACCES)))
      setPrenom(localStorage.getItem(CLE_PRENOM) ?? '')
    } catch {
      setOuvert(false)
    }
    /* Une autre page de la bibliothèque ouverte dans un autre onglet. */
    const ecoute = (e: StorageEvent) => {
      if (e.key === CLE_ACCES) setOuvert(Boolean(e.newValue))
    }
    window.addEventListener('storage', ecoute)
    return () => window.removeEventListener('storage', ecoute)
  }, [])

  const ouvrir = useCallback((email: string, p: string) => {
    try {
      localStorage.setItem(CLE_ACCES, email)
      localStorage.setItem(CLE_PRENOM, p)
    } catch {}
    setPrenom(p)
    setOuvert(true)
  }, [])

  return { ouvert, ouvrir, prenom }
}
