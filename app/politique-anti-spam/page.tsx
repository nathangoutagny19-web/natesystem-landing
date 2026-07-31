import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique anti-spam, NateSystem',
  description:
    'Politique de NateSystem contre la promotion par messages non sollicités. Engagements, pratiques d\'envoi, droit d\'opposition. Anti-spam policy in English below.',
  robots: { index: true, follow: true },
}

export default function PolitiqueAntiSpam() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="mx-auto" style={{ maxWidth: '720px', padding: '80px 24px 60px', fontFamily: 'var(--font-sans)' }}>
        <Link
          href="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '48px' }}
        >
          ← Retour au site
        </Link>

        <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 400, color: 'var(--text)', marginBottom: '20px', lineHeight: 1.15 }}>
          Politique anti-spam
        </h1>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
          Dernière mise à jour : 30 juillet 2026. <span style={{ opacity: 0.7 }}>English version below.</span>
        </p>

        <Section title="Notre engagement">
          <p>
            NateSystem n&apos;utilise jamais, et n&apos;autorise personne à utiliser, des messages électroniques non
            sollicités envoyés en masse pour promouvoir natesystem.com ou l&apos;un de ses domaines associés.
          </p>
          <p>
            Cette interdiction s&apos;applique à nous, à toute personne travaillant pour nous, et à tout tiers,
            partenaire ou affilié. Nous n&apos;avons ni affilié, ni revendeur, ni prestataire d&apos;envoi externe.
          </p>
        </Section>

        <Section title="Comment nous prenons contact">
          <p>
            Toute la correspondance commerciale sortante est écrite et envoyée par le fondateur lui-même,
            individuellement, vers des décideurs identifiés nommément, dans un contexte strictement professionnel
            et en lien direct avec leur activité.
          </p>
          <p>
            Chaque message identifie clairement l&apos;expéditeur, son entreprise et l&apos;objet de la prise de
            contact. Le volume est délibérément limité et plafonné.
          </p>
        </Section>

        <Section title="Ce que nous ne faisons pas">
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
            <li>Aucun achat, location ou échange de listes d&apos;adresses</li>
            <li>Aucun envoi en masse, aucune campagne à destination d&apos;adresses collectées automatiquement</li>
            <li>Aucun programme d&apos;affiliation, aucun sous-traitant d&apos;envoi</li>
            <li>Aucun message dissimulant l&apos;identité de l&apos;expéditeur ou l&apos;origine du message</li>
            <li>Aucune page de redirection masquée, aucun cloaking, aucun profilage de navigateur</li>
          </ul>
        </Section>

        <Section title="Droit d'opposition">
          <p>
            Toute personne qui demande à ne plus être contactée l&apos;est immédiatement et définitivement. La
            demande peut être formulée par simple réponse à un message, ou à
            {' '}
            <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a>.
            Aucune justification n&apos;est demandée et aucune relance n&apos;est envoyée.
          </p>
          <p>
            Le traitement repose sur l&apos;intérêt légitime au sens du RGPD, dans un cadre B2B. Vous disposez
            d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression, exerçable à la même
            adresse.
          </p>
        </Section>

        <Section title="Nos domaines d'envoi">
          <p>
            En plus de natesystem.com, nous utilisons deux domaines dédiés à la correspondance sortante :
            <strong> usenatesystem.com</strong> et <strong>getnatesystem.com</strong>.
          </p>
          <p>
            Ces domaines n&apos;hébergent aucun contenu. Ils redirigent de façon permanente vers natesystem.com et
            sont couverts par la présente politique au même titre que le domaine principal.
          </p>
        </Section>

        <Section title="Signaler un abus">
          <p>
            Si vous recevez un message qui semble violer cette politique, écrivez à
            {' '}
            <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a>.
            Chaque signalement est traité personnellement, sous 48 heures ouvrées.
          </p>
        </Section>

        <div style={{ marginTop: '72px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <h2 className="font-serif italic" style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 400, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.15 }}>
            Anti-spam policy
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
            English version. Last updated 30 July 2026.
          </p>
        </div>

        <Section title="Our commitment">
          <p>
            NateSystem does not use, and does not allow anyone to use, unsolicited bulk email to advertise
            natesystem.com or any of its associated domains.
          </p>
          <p>
            This prohibition applies to us, to anyone working for us, and to any third party, partner or
            affiliate. We have no affiliates, no resellers and no external sending providers.
          </p>
        </Section>

        <Section title="How we make contact">
          <p>
            All outbound business correspondence is written and sent by the founder himself, one message at a
            time, to named decision makers, in a strictly professional context directly relevant to their
            business.
          </p>
          <p>
            Every message clearly identifies the sender, his company and the reason for the contact. Volume is
            deliberately limited and capped.
          </p>
        </Section>

        <Section title="What we never do">
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
            <li>We never buy, rent or exchange address lists</li>
            <li>We never send bulk mail, and never mail addresses collected by automated harvesting</li>
            <li>We run no affiliate programme and use no third party senders</li>
            <li>We never conceal the identity of the sender or the origin of a message</li>
            <li>We never use hidden redirect pages, cloaking, or browser fingerprinting</li>
          </ul>
        </Section>

        <Section title="Opting out">
          <p>
            Anyone who asks not to be contacted again is removed immediately and permanently. A reply to any
            message is enough, or write to
            {' '}
            <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a>.
            No reason is required and no follow up is sent.
          </p>
          <p>
            Processing relies on legitimate interest under the GDPR, in a business to business context. You have
            the right to access, correct, object to and erase your data, at the same address.
          </p>
        </Section>

        <Section title="Our sending domains">
          <p>
            In addition to natesystem.com, we use two domains dedicated to outbound correspondence:
            <strong> usenatesystem.com</strong> and <strong>getnatesystem.com</strong>.
          </p>
          <p>
            These domains host no content. They permanently redirect to natesystem.com and are covered by this
            policy exactly as the main domain is.
          </p>
        </Section>

        <Section title="Reporting abuse">
          <p>
            If you receive a message that appears to breach this policy, write to
            {' '}
            <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a>.
            Every report is handled personally, within two business days.
          </p>
        </Section>

        <Section title="Publisher">
          <p>
            NateSystem, Nathan Goutagny, Entrepreneur Individuel.<br />
            SIRET 929 498 160 00035, RCS Saint-Étienne, France.
          </p>
          <p>
            Voir aussi les{' '}
            <Link href="/mentions-legales" style={{ color: 'var(--accent)', textDecoration: 'none' }}>mentions légales</Link>.
          </p>
        </Section>
      </div>

      <footer className="mx-auto" style={{ maxWidth: '720px', padding: '40px 24px', marginTop: '60px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '12px' }}>
        <div className="flex items-center gap-1">
          <span className="font-serif italic" style={{ fontSize: '20px', color: 'var(--text)' }}>N</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block', marginLeft: '-2px', marginBottom: '2px' }} />
          <span style={{ marginLeft: '8px', fontFamily: 'var(--font-sans)' }}>NateSystem, Nathan Goutagny</span>
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
