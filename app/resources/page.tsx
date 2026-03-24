'use client'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import Divider from '@/components/ui/Divider'
import Link from 'next/link'
import { useLang } from '@/components/providers/LangProvider'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog'

export default function ResourcesPage() {
  const { lang, t } = useLang()

  return (
    <main>
      <Nav />

      {/* Header */}
      <section style={{ padding: '160px 24px 80px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
          <FadeUp>
            <span className="section-label">{t('nav.resources')}</span>
            <h1 className="section-title" style={{ margin: '0 auto 20px' }}>
              {t('resources.title')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('resources.sub')}
            </p>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Case Studies — Video first, then Chromosome card */}
      <section id="case-studies" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <span className="section-label">{t('resources.caseStudies')}</span>
          </FadeUp>

          {/* Video testimonial */}
          <FadeUp delay={0.1}>
            <div
              className="mt-6 relative overflow-hidden"
              style={{
                aspectRatio: '16/9', borderRadius: '12px',
                border: '1px solid var(--border)',
                maxWidth: '800px',
              }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/aMIjJbzuhDc?rel=0"
                title="Témoignage Chromosome — NateSystem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
                style={{ borderRadius: '12px' }}
              />
            </div>
            <p className="font-sans mt-3" style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 300 }}>
              Catherine P. — Gérante, Chromosome Saint-Étienne
            </p>
          </FadeUp>

          {/* Chromosome case study card */}
          <FadeUp delay={0.2}>
            <motion.div
              className="mt-8"
              style={{
                background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.15)',
                padding: '40px', borderRadius: '12px', position: 'relative', overflow: 'hidden',
              }}
              whileHover={{ borderColor: 'var(--border-hover)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
            >
              <p className="font-mono mb-2" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Restaurant Group · Saint-Étienne
              </p>
              <h3 className="font-serif italic mb-4" style={{ fontSize: '28px', color: 'var(--accent)', lineHeight: 1.2 }}>
                Chromosome
              </h3>
              <p className="font-sans mb-6" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
                {lang === 'en'
                  ? 'How a restaurant in Saint-Étienne freed 14 hours per week and replaced 99% of their operational stack with two proprietary platforms they own outright.'
                  : 'Comment un restaurant à Saint-Étienne a libéré 14 heures par semaine et remplacé 99% de son stack opérationnel par deux plateformes propriétaires qu\'il possède entièrement.'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Stat value="11h → 1h" label={lang === 'en' ? 'Per week, per manager' : 'Par semaine, par manager'} />
                <Stat value="25 480€" label={lang === 'en' ? 'Productivity recovered per year' : 'Productivité récupérée par an'} />
                <Stat value="~55" label={lang === 'en' ? 'Collaborators — zero friction' : 'Collaborateurs — zéro friction'} />
                <Stat value="99%" label={lang === 'en' ? 'Ops on owned platforms' : 'Opérations sur plateformes propriétaires'} />
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* Blog — real posts from lib/blog.ts */}
      <section id="blog" style={{ padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <FadeUp>
            <div className="flex items-center justify-between mb-6">
              <span className="section-label mb-0">{t('resources.blog')}</span>
              <Link
                href="/blog"
                className="font-sans transition-colors"
                style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}
              >
                {lang === 'en' ? 'View all articles →' : 'Voir tous les articles →'}
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.slice(0, 3).map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <motion.div
                    className="tool-card flex flex-col h-full"
                    whileHover={{ borderColor: 'var(--border-hover)' }}
                  >
                    <p className="font-mono mb-2" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      {post.category}
                    </p>
                    <h3 className="font-serif italic mb-3 flex-1" style={{ fontSize: '20px', color: 'var(--text)', lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p className="font-sans mb-4" style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.date}</span>
                      <span style={{ color: 'var(--text-muted)' }}>·</span>
                      <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.readTime}</span>
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif italic" style={{ fontSize: '20px', color: 'var(--accent)' }}>{value}</p>
      <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 300 }}>{label}</p>
    </div>
  )
}
