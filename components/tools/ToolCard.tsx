'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ToolCardProps {
  icon: string
  title: string
  description: string
  badge: string
  href?: string
  onClick?: () => void
  actionLabel: string
}

export default function ToolCard({ icon, title, description, badge, href, onClick, actionLabel }: ToolCardProps) {
  const inner = (
    <motion.div
      className="tool-card h-full flex flex-col"
      whileHover={{ borderColor: 'var(--border-hover)', backgroundColor: 'var(--bg-elevated)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span
          className="font-mono px-2 py-1 rounded-md"
          style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-subtle)', border: '1px solid rgba(230,57,70,0.2)' }}
        >
          {badge}
        </span>
      </div>
      <h3 className="font-serif italic mb-2" style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3 }}>
        {title}
      </h3>
      <p className="font-sans mb-6 flex-1" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
        {description}
      </p>
      <span className="font-sans text-sm font-medium" style={{ color: 'var(--accent)' }}>
        {actionLabel} →
      </span>
    </motion.div>
  )

  if (href) {
    return <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{inner}</Link>
  }

  return <div onClick={onClick} style={{ cursor: 'pointer' }}>{inner}</div>
}
