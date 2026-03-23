'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'

interface EmailGateModalProps {
  templateName: string
  onClose: () => void
}

export default function EmailGateModal({ templateName, onClose }: EmailGateModalProps) {
  const { t } = useLang()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: Send to Supabase or email service
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {submitted ? (
          <div className="text-center">
            <span className="text-4xl mb-4 block">✓</span>
            <h3 className="font-serif italic mb-2" style={{ fontSize: '24px', color: 'var(--text)' }}>
              {t('email.title')}
            </h3>
            <p className="font-sans" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>
              Check your inbox for {templateName}.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-serif italic mb-2" style={{ fontSize: '24px', color: 'var(--text)' }}>
              {t('email.title')}
            </h3>
            <p className="font-sans mb-6" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>
              {t('email.sub')}
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="modal-input mb-4"
                placeholder={t('email.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full justify-center">
                <span className="btn-primary-dot" />
                {t('email.submit')}
              </button>
            </form>
            <p className="font-sans mt-4 text-center" style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 300 }}>
              {t('email.privacy')}
            </p>
          </>
        )}
      </motion.div>
    </div>
  )
}
