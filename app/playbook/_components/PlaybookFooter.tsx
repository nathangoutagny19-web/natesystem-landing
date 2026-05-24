import Link from 'next/link'

export default function PlaybookFooter() {
  return (
    <footer className="pb-footer">
      <div className="pb-footer-links">
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/mentions-legales">Politique de confidentialité</Link>
        <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
        <Link href="/">natesystem.com</Link>
      </div>
      <p className="pb-footer-copy">© 2026 NateSystem · Nathan Goutagny</p>
    </footer>
  )
}
