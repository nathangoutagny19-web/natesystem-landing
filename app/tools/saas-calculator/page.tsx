'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import MobileCta from '@/components/layout/MobileCta'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

export default function SaasCalculatorPage() {
  const { t } = useLang()
  const [subscriptions, setSubscriptions] = useState('')
  const [monthlyCost, setMonthlyCost] = useState('')
  const [usage, setUsage] = useState('')
  const [result, setResult] = useState<{ waste: number; annual: number } | null>(null)

  const calculate = (e: React.FormEvent) => {
    e.preventDefault()
    const subs = parseInt(subscriptions) || 0
    const cost = parseFloat(monthlyCost) || 0
    const usagePct = parseInt(usage) || 50

    // Waste = cost * (1 - usage/100) + (subs - Math.ceil(subs * usagePct/100)) * cost/subs
    const wasteRatio = 1 - usagePct / 100
    const monthlyWaste = Math.round(cost * wasteRatio)
    setResult({ waste: monthlyWaste, annual: monthlyWaste * 12 })
  }

  return (
    <main>
      <Nav />

      <section style={{ padding: '160px 24px 120px' }}>
        <div className="mx-auto" style={{ maxWidth: '640px' }}>
          <FadeUp className="text-center mb-12">
            <span className="section-label">🔢 {t('tools.interactive')}</span>
            <h1 className="section-title" style={{ margin: '0 auto 16px' }}>
              {t('calc.title')}
            </h1>
            <p className="font-sans" style={{ fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('calc.sub')}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form onSubmit={calculate} className="flex flex-col gap-5">
              <InputField label={t('calc.subscriptions')} value={subscriptions} onChange={setSubscriptions} type="number" placeholder="8" />
              <InputField label={t('calc.monthlyCost')} value={monthlyCost} onChange={setMonthlyCost} type="number" placeholder="2500" />
              <InputField label={t('calc.usage')} value={usage} onChange={setUsage} type="number" placeholder="40" min="0" max="100" />
              <button type="submit" className="btn-primary justify-center mt-2">
                <span className="btn-primary-dot" />
                {t('calc.calculate')}
              </button>
            </form>
          </FadeUp>

          {result && (
            <FadeUp delay={0} className="mt-10">
              <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(230,57,70,0.2)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="font-mono mb-2" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {t('calc.result.waste')}
                    </p>
                    <p className="font-serif italic" style={{ fontSize: '48px', color: 'var(--accent)' }}>
                      {result.waste.toLocaleString()}€
                    </p>
                  </div>
                  <div>
                    <p className="font-mono mb-2" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {t('calc.result.annual')}
                    </p>
                    <p className="font-serif italic" style={{ fontSize: '48px', color: 'var(--accent)' }}>
                      {result.annual.toLocaleString()}€
                    </p>
                  </div>
                </div>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                  <span className="btn-primary-dot" />
                  {t('calc.result.cta')} →
                </a>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      <Footer />
      <MobileCta />
    </main>
  )
}

function InputField({ label, value, onChange, type, placeholder, min, max }: {
  label: string; value: string; onChange: (v: string) => void;
  type: string; placeholder: string; min?: string; max?: string;
}) {
  return (
    <div>
      <label className="font-sans block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
        {label}
      </label>
      <input
        type={type}
        className="modal-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        required
      />
    </div>
  )
}
