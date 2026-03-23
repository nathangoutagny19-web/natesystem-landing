'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import type { BlogPost } from '@/lib/blog'

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main>
      <Nav />

      {/* Article Header */}
      <section style={{ padding: '160px 24px 60px' }}>
        <div className="mx-auto" style={{ maxWidth: '760px' }}>
          <FadeUp>
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '32px',
                transition: 'color 0.2s ease',
              }}
              className="back-link"
            >
              &larr; Retour au blog
            </Link>
          </FadeUp>

          <FadeUp delay={0.05}>
            {/* Category badge */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '16px',
                display: 'inline-block',
              }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: '24px',
                color: 'var(--text)',
              }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'var(--text-secondary)',
                }}
              >
                {post.author}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontWeight: 300,
                }}
              >
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                &middot; {post.readTime}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '8px',
              }}
            >
              {post.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '16px',
              }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 400,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-elevated)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* Article Body */}
      <section style={{ padding: '60px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '760px' }}>
          <FadeUp delay={0.1}>
            <div
              className="blog-article"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* CTA Card */}
      <section style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '760px' }}>
          <FadeUp>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(230,57,70,0.15)',
                borderRadius: '12px',
                padding: '48px 40px',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  fontWeight: 400,
                  marginBottom: '16px',
                  color: 'var(--text)',
                }}
              >
                Prêt à automatiser vos opérations ?
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                  maxWidth: '500px',
                  margin: '0 auto 32px',
                }}
              >
                Réservez un appel stratégique gratuit de 30 minutes. On identifie ensemble
                vos 3 processus à plus fort potentiel d&apos;automatisation.
              </p>
              <Link href="/book" className="btn-primary" style={{ margin: '0 auto' }}>
                <span className="btn-primary-dot" />
                Réserver mon audit gratuit
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: '0 24px 80px' }}>
        <div className="mx-auto" style={{ maxWidth: '760px' }}>
          <Link
            href="/blog"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 400,
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s ease',
            }}
            className="back-link"
          >
            &larr; Retour au blog
          </Link>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

      <style jsx>{`
        .back-link:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </main>
  )
}
