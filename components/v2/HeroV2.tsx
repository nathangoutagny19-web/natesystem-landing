'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * HeroV2 — outcome/pain first (Piste A du REFONTE-2026-07.md §4.2).
 * Structure : positionnement (le "trou") → titre = la douleur vécue →
 * sous-titre = le modèle en 3 temps → une preuve chiffrée → UN SEUL CTA.
 *
 * Piste B (alternative, résultat d'abord) si on préfère un titre plus court :
 *   « On construit l'infrastructure qui fait tourner votre activité. »
 *   (garder le même sous-titre + la même preuve.) — à trancher avec Nathan.
 */
export default function HeroV2() {
  const { t } = useLang()

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: '90vh', padding: '150px 24px 90px' }}
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="section-label"
        style={{ marginBottom: 24 }}
      >
        {t('v2.hero.eyebrow')}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="font-serif italic font-normal"
        style={{ fontSize: 'clamp(34px, 5vw, 60px)', lineHeight: 1.1, marginBottom: 28, maxWidth: 900, color: 'var(--text)' }}
      >
        {t('v2.hero.title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease }}
        className="font-sans"
        style={{ fontSize: 'clamp(15px, 2.4vw, 19px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 680, lineHeight: 1.6, marginBottom: 26 }}
      >
        {t('v2.hero.sub')}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.38, ease }}
        className="font-mono"
        style={{ fontSize: 13, letterSpacing: 0.4, color: 'var(--accent)', marginBottom: 40 }}
      >
        {t('v2.hero.proof')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.48, ease }}
      >
        <Link href="#rendez-vous" className="btn-primary" style={{ fontSize: 15 }}>
          <span className="btn-primary-dot" />
          {t('v2.hero.cta')} →
        </Link>
      </motion.div>
    </section>
  )
}
