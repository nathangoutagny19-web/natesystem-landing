'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
  className?: string
}

export default function Button({ href, children, variant = 'primary', external, className = '' }: ButtonProps) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.a
      href={href}
      className={`${cls} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      {...props}
    >
      {variant === 'primary' && <span className="btn-primary-dot" />}
      {children}
    </motion.a>
  )
}
