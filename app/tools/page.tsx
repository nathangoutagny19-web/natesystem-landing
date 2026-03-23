'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import ToolCard from '@/components/tools/ToolCard'
import EmailGateModal from '@/components/tools/EmailGateModal'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function ToolsPage() {
  const { t } = useLang()
  const [modalTemplate, setModalTemplate] = useState<string | null>(null)

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <FadeUp className="text-center mb-16">
            <span className="section-label">{t('nav.tools')}</span>
            <h1 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 20px' }}>
              {t('tools.title')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('tools.sub')}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeUp delay={0}>
              <ToolCard
                icon="🔢"
                title={t('tools.calculator.title')}
                description={t('tools.calculator.desc')}
                badge={t('tools.interactive')}
                href="/tools/saas-calculator"
                actionLabel={t('tools.start')}
              />
            </FadeUp>
            <FadeUp delay={0.08}>
              <ToolCard
                icon="🧠"
                title={t('tools.quiz.title')}
                description={t('tools.quiz.desc')}
                badge={t('tools.interactive')}
                href="/tools/ai-readiness"
                actionLabel={t('tools.start')}
              />
            </FadeUp>
            <FadeUp delay={0.16} >
              <div id="audit">
                <ToolCard
                  icon="📋"
                  title={t('tools.audit.title')}
                  description={t('tools.audit.desc')}
                  badge={t('tools.template')}
                  onClick={() => setModalTemplate(t('tools.audit.title'))}
                  actionLabel={t('tools.download')}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div id="process-map">
                <ToolCard
                  icon="🗺️"
                  title={t('tools.processMap.title')}
                  description={t('tools.processMap.desc')}
                  badge={t('tools.template')}
                  onClick={() => setModalTemplate(t('tools.processMap.title'))}
                  actionLabel={t('tools.download')}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div id="checklist">
                <ToolCard
                  icon="✅"
                  title={t('tools.checklist.title')}
                  description={t('tools.checklist.desc')}
                  badge={t('tools.template')}
                  onClick={() => setModalTemplate(t('tools.checklist.title'))}
                  actionLabel={t('tools.download')}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCta />

      {modalTemplate && (
        <EmailGateModal templateName={modalTemplate} onClose={() => setModalTemplate(null)} />
      )}
    </main>
  )
}
