'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import { blogPosts } from '@/lib/blog'

export default function BlogPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '160px 24px 80px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
          <FadeUp>
            <span className="section-label">BLOG</span>
            <h1 className="section-title" style={{ margin: '0 auto 20px' }}>
              Insights IA <span className="accent">pour scaler.</span>
            </h1>
            <p
              className="font-sans"
              style={{
                fontSize: '16px',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Analyses, cas pratiques et stratégies concrètes pour intégrer
              l&apos;IA dans vos opérations — sans jargon technique.
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Blog Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div
          className="mx-auto"
          style={{ maxWidth: '900px' }}
        >
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <article className="blog-card">
                    {/* Category badge */}
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 400,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '12px',
                        display: 'inline-block',
                      }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: 1.3,
                        marginBottom: '12px',
                        color: 'var(--text)',
                      }}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.description}
                    </p>

                    {/* Meta + Link */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
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
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--accent)',
                        }}
                      >
                        Lire l&apos;article &rarr;
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />
      <Footer />
      <MobileCta />

    </main>
  )
}
