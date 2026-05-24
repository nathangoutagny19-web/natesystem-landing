import type { Metadata } from 'next'
import Link from 'next/link'
import './playbook.css'

export const metadata: Metadata = {
  robots: { index: true, follow: true },
}

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="playbook-root">
      <header className="playbook-header">
        <Link href="/" className="playbook-brand" aria-label="Retour NateSystem">
          <span className="playbook-brand-mark">N</span>
          <span className="playbook-brand-dot" aria-hidden="true" />
          <span className="playbook-brand-name">NateSystem</span>
        </Link>
        <Link href="/playbook" className="playbook-brand-aside">
          Tous les playbooks
        </Link>
      </header>
      {children}
    </div>
  )
}
