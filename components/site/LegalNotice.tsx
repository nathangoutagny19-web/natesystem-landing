import Link from 'next/link'
import type { Lang } from '@/lib/i18n'
import { makeD } from '@/lib/lang'

/**
 * LES MENTIONS LÉGALES, DANS LES DEUX LANGUES.
 *
 * Composant serveur : pas de `useLang`, la langue est passée par la route, ce
 * qui laisse chaque page exporter ses propres `metadata`.
 *
 * La version française fait foi. L'anglaise est une traduction de courtoisie,
 * et le dit : le texte est une obligation légale française, il ne se réécrit
 * pas dans une autre langue sans que ça se sache.
 */
export default function LegalNotice({ lang }: { lang: Lang }) {
  const d = makeD(lang)
  const home = lang === 'fr' ? '/' : `/${lang}`
  const back = d('← Retour au site', '← Back to the site', '← Vissza az oldalra')

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="mx-auto" style={{ maxWidth: '720px', padding: '80px 24px 60px', fontFamily: 'var(--font-sans)' }}>
        <Link
          href={home}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '48px' }}
        >
          {back}
        </Link>

        <h1 className="font-serif italic" style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 400, color: 'var(--text)', marginBottom: lang === 'fr' ? '40px' : '16px', lineHeight: 1.15 }}>
          {d('Mentions légales', 'Legal notice', 'Jogi nyilatkozat')}
        </h1>

        {lang !== 'fr' && (
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '24px' }}>
            {d('', 'Courtesy translation.', 'Udvariassági fordítás.')}{' '}
            <Link href="/mentions-legales" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              {d('', 'The French version', 'A francia változat')}
            </Link>{' '}
            {d('', 'is the one that applies.', 'az irányadó.')}
          </p>
        )}

        <Section title={d('Responsable du traitement', 'Data controller', 'Adatkezelő')}>
          <p><strong>Nathan Goutagny, NateSystem</strong></p>
          <p>{d('Entrepreneur Individuel', 'Sole trader (entrepreneur individuel)', 'Egyéni vállalkozó (entrepreneur individuel)')}<br />SIRET : 92949816000035<br />{d('Lyon, France', 'Lyon, France', 'Lyon, Franciaország')}</p>
          <p>{d('Contact', 'Contact', 'Kapcsolat')} : <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a></p>
        </Section>

        <Section title={d('Hébergement', 'Hosting', 'Tárhely')}>
          <p>{d(
            'Ce site est hébergé via des services tiers conformes aux réglementations européennes en vigueur (RGPD).',
            'This site is hosted through third-party services that comply with the European regulations in force (GDPR).'
          , 'Az oldalt harmadik felek szolgáltatásai üzemeltetik, amelyek megfelelnek a hatályos európai szabályozásnak (GDPR).')}</p>
        </Section>

        <Section title={d('Données collectées', 'Data collected', 'Gyűjtött adatok')}>
          <p>{d(
            'NateSystem collecte uniquement les données nécessaires au fonctionnement des services proposés. Ces données peuvent inclure :',
            'NateSystem collects only the data needed to run the services it offers. That data may include:'
          , 'A NateSystem kizárólag a szolgáltatásai működéséhez szükséges adatokat gyűjti. Ezek közé tartozhat:')}</p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
            <li>{d('Données de navigation anonymisées (cookies analytiques)', 'Anonymised browsing data (analytics cookies)', 'Anonimizált böngészési adatok (analitikai sütik)')}</li>
            <li>{d('Informations fournies volontairement lors des prises de contact', 'Information you provide yourself when getting in touch', 'Az Ön által önként megadott adatok kapcsolatfelvételkor')}</li>
            <li>{d('Données de réservation via Cal.com (service tiers)', 'Booking data through Cal.com (a third-party service)', 'Foglalási adatok a Cal.comon keresztül (harmadik fél szolgáltatása)')}</li>
          </ul>
        </Section>

        <Section title={d('Politique de confidentialité', 'Privacy policy', 'Adatvédelmi tájékoztató')}>
          <p>{d(
            'Les données personnelles collectées ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.',
            'The personal data collected is never sold, rented or shared with third parties for commercial purposes.'
          , 'A gyűjtött személyes adatokat soha nem adjuk el, nem adjuk bérbe, és nem osztjuk meg harmadik felekkel kereskedelmi célból.')}</p>
          <p>
            {d(
              'Vous disposez d\u2019un droit d\u2019accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez :',
              'You have the right to access, correct and delete your personal data. To exercise those rights, write to:'
            , 'Önnek joga van hozzáférni a személyes adataihoz, helyesbíteni és töröltetni azokat. E jogok gyakorlásához írjon ide:')}{' '}
            <a href="mailto:nathan@natesystem.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>nathan@natesystem.com</a>
          </p>
        </Section>

        <Section title={d('Cookies', 'Cookies', 'Sütik')}>
          <p>{d(
            'Ce site utilise des cookies fonctionnels nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n\u2019est déposé sans votre consentement explicite.',
            'This site uses functional cookies needed for it to work. No third-party advertising cookie is set without your explicit consent.'
          , 'Ez az oldal a működéséhez szükséges funkcionális sütiket használ. Kifejezett hozzájárulása nélkül semmilyen harmadik féltől származó hirdetési süti nem kerül elhelyezésre.')}</p>
        </Section>

        <Section title={d('Propriété intellectuelle', 'Intellectual property', 'Szellemi tulajdon')}>
          <p>{d(
            'L\u2019ensemble du contenu de ce site (textes, images, design, code) est la propriété exclusive de Nathan Goutagny, NateSystem. Toute reproduction ou utilisation sans autorisation préalable est interdite.',
            'All the content of this site (text, images, design, code) is the exclusive property of Nathan Goutagny, NateSystem. Any reproduction or use without prior permission is prohibited.'
          , 'Az oldal teljes tartalma (szövegek, képek, arculat, kód) Nathan Goutagny, NateSystem kizárólagos tulajdona. Bármilyen többszörözés vagy felhasználás előzetes engedély nélkül tilos.')}</p>
        </Section>

        <Section title={d('Limitation de responsabilité', 'Limitation of liability', 'Felelősség korlátozása')}>
          <p>{d(
            'NateSystem s\u2019efforce d\u2019assurer l\u2019exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, NateSystem ne peut garantir l\u2019exactitude, la précision ou l\u2019exhaustivité des informations mises à disposition.',
            'NateSystem works to keep the information published on this site accurate and up to date. NateSystem cannot, however, guarantee that the information made available is accurate, precise or complete.'
          , 'A NateSystem törekszik arra, hogy az oldalon közzétett információk pontosak és naprakészek legyenek. A NateSystem ugyanakkor nem tudja garantálni a rendelkezésre bocsátott információk pontosságát vagy teljességét.')}</p>
        </Section>
      </div>

      <footer className="mx-auto" style={{ maxWidth: '720px', padding: '40px 24px', marginTop: '60px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '12px' }}>
        <div className="flex items-center gap-1">
          <span className="font-serif italic" style={{ fontSize: '20px', color: 'var(--text)' }}>N</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block', marginLeft: '-2px', marginBottom: '2px' }} />
          <span style={{ marginLeft: '8px', fontFamily: 'var(--font-sans)' }}>NateSystem, Nathan Goutagny</span>
        </div>
        <Link href={home} style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-sans)', opacity: 0.7, fontSize: '12px' }}>
          {back}
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
