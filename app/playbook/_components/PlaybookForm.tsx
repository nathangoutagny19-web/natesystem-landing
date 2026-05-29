'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'

const schema = z.object({
  first_name: z
    .string()
    .min(1, 'Prénom requis')
    .max(60, 'Trop long'),
  email: z
    .string()
    .min(1, 'Email requis')
    .email('Email invalide'),
  rgpd_consent: z.literal(true, {
    message: 'Vous devez accepter pour recevoir le playbook',
  }),
})

type FormValues = z.infer<typeof schema>

export default function PlaybookForm({
  slug,
  ctaLabel = 'Recevoir le playbook gratuit',
}: {
  slug: string
  ctaLabel?: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { first_name: '', email: '', rgpd_consent: false as unknown as true },
  })

  async function onSubmit(values: FormValues) {
    setSubmitError(null)
    try {
      const utm = {
        utm_source: searchParams.get('utm_source') ?? undefined,
        utm_medium: searchParams.get('utm_medium') ?? undefined,
        utm_campaign: searchParams.get('utm_campaign') ?? undefined,
      }
      const res = await fetch('/api/playbook/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          first_name: values.first_name.trim(),
          email: values.email.trim().toLowerCase(),
          rgpd_consent: values.rgpd_consent,
          ...utm,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Une erreur est survenue')
      }
      const params = new URLSearchParams({ email: values.email.trim().toLowerCase() })
      router.push(`/playbook/${slug}/thank-you?${params.toString()}`)
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Une erreur est survenue, réessayez.'
      )
    }
  }

  return (
    <form className="pb-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="pb-field">
        <label className="pb-label" htmlFor="pb-first-name">
          Prénom
        </label>
        <input
          id="pb-first-name"
          type="text"
          className="pb-input"
          autoComplete="given-name"
          aria-required="true"
          aria-invalid={!!errors.first_name}
          aria-describedby={errors.first_name ? 'pb-first-name-err' : undefined}
          {...register('first_name')}
        />
        {errors.first_name && (
          <span id="pb-first-name-err" className="pb-field-error" role="alert">
            {errors.first_name.message}
          </span>
        )}
      </div>

      <div className="pb-field">
        <label className="pb-label" htmlFor="pb-email">
          Email professionnel
        </label>
        <input
          id="pb-email"
          type="email"
          inputMode="email"
          className="pb-input"
          autoComplete="email"
          placeholder="vous@entreprise.fr"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'pb-email-err' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <span id="pb-email-err" className="pb-field-error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <label className="pb-consent">
        <input
          type="checkbox"
          aria-required="true"
          aria-invalid={!!errors.rgpd_consent}
          {...register('rgpd_consent')}
        />
        <span>
          J&apos;accepte de recevoir ce playbook et la séquence de suivi NateSystem.
          Données hébergées en Europe.{' '}
          <a href="/mentions-legales" target="_blank" rel="noopener noreferrer">
            Politique de confidentialité
          </a>
          .
        </span>
      </label>
      {errors.rgpd_consent && (
        <span className="pb-field-error" role="alert">
          {errors.rgpd_consent.message as string}
        </span>
      )}

      {submitError && (
        <p className="pb-error-banner" role="alert" aria-live="polite">
          {submitError}
        </p>
      )}

      <button type="submit" className="pb-btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours…' : ctaLabel}
      </button>
      <p className="pb-microcopy">
        Téléchargement immédiat · Pas de spam · Désabonnement en 1 clic
      </p>
    </form>
  )
}
