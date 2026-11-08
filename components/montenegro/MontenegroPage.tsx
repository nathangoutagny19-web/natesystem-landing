import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ClientsBar from '@/components/home/ClientsBar'
import { SITE_URL } from '@/lib/constants'
import type { MontenegroPageData } from '@/lib/montenegro'

/**
 * Les pages Monténégro (/en/montenegro, /tivat, /kotor), anglais seulement.
 *
 * Composant serveur : tout le texte est dans le HTML livré, ce que Google lit
 * en premier. La FAQ est en <details>, sans JavaScript, et son JSON-LD reprend
 * mot pour mot ce qui est affiché (Google pénalise un schema qui diverge).
 *
 * ⚠︎ Aucun prix, aucun délai, aucun chiffre qui ne soit pas dans la liste des
 * preuves autorisées, aucun nom de client sous NDA. Wandering Yacht apparaît
 * seulement par son logo, dans la barre (accord oral, voir ClientsBar).
 */
export default function MontenegroPage({ data }: { data: MontenegroPageData }) {
  const url = `${SITE_URL}/en${data.path}/`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'NateSystem',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: 'nathan@natesystem.com',
      founder: { '@type': 'Person', name: 'Nathan Goutagny' },
      areaServed: data.areaServed.map((name) => ({ '@type': 'Place', name })),
      knowsAbout: data.services.map((s) => s.title),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.href}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      url,
      mainEntity: data.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const h2 = { fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.15, color: 'var(--text)' } as const
  const body = { fontSize: 16, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65 } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="flex flex-col items-center text-center" style={{ padding: '140px 20px 56px' }}>
          <nav aria-label="Breadcrumb" className="font-sans" style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20 }}>
            {data.breadcrumb.map((b, i) => (
              <span key={b.href}>
                {i > 0 && <span aria-hidden> / </span>}
                {i < data.breadcrumb.length - 1 ? (
                  <Link href={b.href} style={{ color: 'inherit' }}>{b.name}</Link>
                ) : (
                  <span>{b.name}</span>
                )}
              </span>
            ))}
          </nav>
          <span className="section-label" style={{ letterSpacing: 3 }}>{data.eyebrow}</span>
          <h1
            className="font-serif italic font-normal"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.08, maxWidth: 860, marginTop: 24, color: 'var(--text)' }}
          >
            {data.h1}
          </h1>
          <p className="font-sans" style={{ ...body, fontSize: 'clamp(15px, 2.6vw, 18px)', maxWidth: 680, marginTop: 22 }}>
            {data.intro}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: 32 }}>
            <Link href="/en/audit-gratuit" className="btn-primary" style={{ fontSize: 14 }}>
              <span className="btn-primary-dot" />
              Get your free audit →
            </Link>
            <Link href="/en#rendez-vous" className="btn-ghost" style={{ fontSize: 14, fontWeight: 500 }}>
              Book a call →
            </Link>
          </div>
        </section>

        <ClientsBar />

        {/* What we build */}
        <section style={{ padding: '72px 20px', maxWidth: 1080, margin: '0 auto' }}>
          <h2 className="font-serif italic font-normal text-center" style={h2}>{data.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 40 }}>
            {data.services.map((s) => (
              <article key={s.title} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                <h3 className="font-sans" style={{ fontSize: 19, fontWeight: 600, color: 'var(--text)' }}>{s.title}</h3>
                <p className="font-sans" style={{ ...body, marginTop: 10 }}>{s.text}</p>
                <ul className="font-sans" style={{ marginTop: 14, paddingLeft: 18, listStyle: 'disc', color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* The problems */}
        <section style={{ padding: '24px 20px 72px', maxWidth: 820, margin: '0 auto' }}>
          <h2 className="font-serif italic font-normal text-center" style={h2}>{data.painsTitle}</h2>
          <ul className="font-sans" style={{ marginTop: 32, display: 'grid', gap: 14 }}>
            {data.pains.map((p) => (
              <li key={p} style={{ ...body, color: 'var(--text)', paddingLeft: 18, borderLeft: '2px solid var(--accent)' }}>{p}</li>
            ))}
          </ul>
          {data.painsOutro && (
            <p className="font-sans text-center" style={{ ...body, marginTop: 28 }}>{data.painsOutro}</p>
          )}
        </section>

        {/* Local */}
        <section style={{ padding: '24px 20px 72px', maxWidth: 820, margin: '0 auto' }}>
          <h2 className="font-serif italic font-normal" style={h2}>{data.localTitle}</h2>
          {data.local.map((para) => (
            <p key={para} className="font-sans" style={{ ...body, marginTop: 18 }}>{para}</p>
          ))}
          {data.related.length > 0 && (
            <p className="font-sans" style={{ ...body, marginTop: 18 }}>
              {data.related.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && ' · '}
                  <Link href={r.href} style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{r.label}</Link>
                </span>
              ))}
            </p>
          )}
        </section>

        {/* Why */}
        <section style={{ padding: '24px 20px 72px', maxWidth: 1080, margin: '0 auto' }}>
          <h2 className="font-serif italic font-normal text-center" style={h2}>Why NateSystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: 36 }}>
            {data.why.map((w) => (
              <div key={w.title} style={{ padding: 24, borderRadius: 16, border: '1px solid var(--border)' }}>
                <h3 className="font-sans" style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)' }}>{w.title}</h3>
                <p className="font-sans" style={{ ...body, fontSize: 15, marginTop: 8 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '24px 20px 72px', maxWidth: 820, margin: '0 auto' }}>
          <h2 className="font-serif italic font-normal text-center" style={h2}>Questions</h2>
          <div style={{ marginTop: 28 }}>
            {data.faq.map((f) => (
              <details key={f.q} style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
                <summary className="font-sans" style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', cursor: 'pointer' }}>{f.q}</summary>
                <p className="font-sans" style={{ ...body, marginTop: 10 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-center text-center" style={{ padding: '24px 20px 96px' }}>
          <h2 className="font-serif italic font-normal" style={{ ...h2, maxWidth: 720 }}>{data.ctaTitle}</h2>
          <p className="font-sans" style={{ ...body, maxWidth: 600, marginTop: 16 }}>{data.ctaText}</p>
          <Link href="/en/audit-gratuit" className="btn-primary" style={{ fontSize: 14, marginTop: 28 }}>
            <span className="btn-primary-dot" />
            Get your free audit →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
