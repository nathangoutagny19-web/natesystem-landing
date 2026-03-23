import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales — NateSystem',
  description:
    'Mentions légales et politique de confidentialité de NateSystem — Nathan Goutagny, entrepreneur individuel, Lyon, France.',
  robots: { index: false, follow: true },
}

export default function MentionsLegales() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="mx-auto" style={{ maxWidth: '720px', padding: '80px 24px 60px', fontFamily: 'var(--font-sans)' }}>
        <Link
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '48px' }}
        >
          ← Retour au site
        </Link>

        <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 400, color: 'var(--text)', marginBottom: '40px', lineHeight: 1.15 }}>
          Mentions légales
        </h1>

        <Section title="Responsable du traitement">
          <p><strong>Nathan Goutagny — NateSystem</strong></p>
          <p>Entrepreneur Individuel<br />SIRET : 92949816000035<br />Lyon, France</p>
          <p>Contact : <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a></p>
        </Section>

        <Section title="Hébergement">
          <p>Ce site est hébergé via des services tiers conformes aux réglementations européennes en vigueur (RGPD).</p>
        </Section>

        <Section title="Données collectées">
          <p>NateSystem collecte uniquement les données nécessaires au fonctionnement des services proposés. Ces données peuvent inclure :</p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
            <li>Données de navigation anonymisées (cookies analytiques)</li>
            <li>Informations fournies volontairement lors des prises de contact</li>
            <li>Données de réservation via Cal.com (service tiers)</li>
          </ul>
        </Section>

        <Section title="Politique de confidentialité">
          <p>Les données personnelles collectées ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.</p>
          <p>Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez : <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a></p>
        </Section>

        <Section title="Cookies">
          <p>Ce site utilise des cookies fonctionnels nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n&apos;est déposé sans votre consentement explicite.</p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>L&apos;ensemble du contenu de ce site (textes, images, design, code) est la propriété exclusive de Nathan Goutagny — NateSystem. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
        </Section>

        <Section title="Limitation de responsabilité">
          <p>NateSystem s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, NateSystem ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.</p>
        </Section>
      </div>

      <footer className="mx-auto" style={{ maxWidth: '720px', padding: '40px 24px', marginTop: '60px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '12px' }}>
        <div className="flex items-center gap-1">
          <span className="font-serif italic" style={{ fontSize: '20px', color: 'var(--text)' }}>N</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block', marginLeft: '-2px', marginBottom: '2px' }} />
          <span style={{ marginLeft: '8px', fontFamily: 'var(--font-sans)' }}>NateSystem — Nathan Goutagny</span>
        </div>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-sans)', opacity: 0.7, fontSize: '12px' }}>
          ← Retour au site
        </Link>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '48px' }}>
      <h2 className="font-serif italic" style={{ fontSize: '22px', fontWeight: 400, color: 'var(--accent)', marginBottom: '16px' }}>
        {title}
      </h2>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {children}
      </div>
    </div>
  )
}
