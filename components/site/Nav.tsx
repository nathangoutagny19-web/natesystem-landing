'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CAL_LINK = 'https://cal.com/natesystem/session-strategique'

const NAV_LINKS = [
  { label: 'Prestations', href: '#prestations' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMenuOpen(false)
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="mx-auto px-6 py-4 flex items-center justify-between transition-all duration-500"
          style={{
            maxWidth: '1200px',
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 no-underline group"
            aria-label="NateSystem — Accueil"
          >
            <span
              className="font-display italic text-[22px] leading-none"
              style={{ color: 'var(--text-primary)', fontWeight: 400 }}
            >
              N
            </span>
            <span
              className="w-[5px] h-[5px] rounded-full -ml-[3px] mt-[10px] transition-all duration-300 group-hover:scale-125"
              style={{
                backgroundColor: 'var(--color-gold)',
                boxShadow: '0 0 8px var(--color-gold-glow)',
                animation: 'navPulse 2.5s ease-in-out infinite',
              }}
            />
            <span
              className="text-[11px] font-medium tracking-[2px] uppercase ml-1 transition-all duration-500"
              style={{
                fontFamily: 'var(--font-body)',
                color: scrolled ? 'transparent' : 'var(--text-muted)',
                width: scrolled ? '0' : 'auto',
                overflow: 'hidden',
                opacity: scrolled ? 0 : 1,
              }}
            >
              NATESYSTEM
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-500"
            style={{
              backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
              WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
              background: scrolled
                ? 'rgba(10,10,10,0.85)'
                : 'rgba(10,10,10,0.4)',
              border: scrolled
                ? '1px solid rgba(201,168,76,0.15)'
                : '1px solid rgba(255,255,255,0.06)',
              boxShadow: scrolled
                ? '0 8px 40px rgba(0,0,0,0.4)'
                : 'none',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-[12px] font-normal tracking-[0.5px] transition-colors duration-300 rounded-full hover:text-white"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[12px] py-[10px] px-6"
            >
              <span
                className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  animation: 'navPulse 2.5s ease-in-out infinite',
                }}
              />
              Book a free audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block h-[1px] w-6 transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              className="block h-[1px] w-6 transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[1px] w-6 transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            background: 'rgba(10,10,10,0.95)',
            borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 text-[14px] font-light border-b"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-subtle)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 justify-center"
            >
              Book a free audit
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}
