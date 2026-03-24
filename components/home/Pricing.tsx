'use client'

import FadeUp from '@/components/ui/FadeUp'
import Button from '@/components/ui/Button'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M3 8.5L6.5 12L13 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

interface PricingCardProps {
  title: string
  price: string
  subtitle: string
  features: string[]
  cta: string
  ctaVariant: 'primary' | 'ghost'
  badge?: string
  highlighted?: boolean
}

function PricingCard({ title, price, subtitle, features, cta, ctaVariant, badge, highlighted }: PricingCardProps) {
  return (
    <div
      style={{
        background: highlighted ? 'var(--bg-elevated)' : 'var(--bg-card)',
        border: highlighted ? '1px solid var(--accent)' : '1px solid var(--border)',
        borderRadius: 12,
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }}
    >
      {badge && (
        <span
          className="font-mono"
          style={{
            position: 'absolute',
            top: -12,
            left: 32,
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: 'var(--bg)',
            border: '1px solid var(--accent)',
            borderRadius: 20,
            padding: '4px 14px',
          }}
        >
          {badge}
        </span>
      )}

      <h3
        className="font-serif italic"
        style={{
          fontSize: 28,
          fontWeight: 400,
          color: 'var(--text)',
          lineHeight: 1.2,
          marginBottom: 12,
        }}
      >
        {title}
      </h3>

      <p
        className="font-serif italic"
        style={{
          fontSize: 24,
          color: 'var(--accent)',
          lineHeight: 1.3,
          marginBottom: 8,
        }}
      >
        {price}
      </p>

      <p
        className="font-sans"
        style={{
          fontSize: 14,
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: 28,
        }}
      >
        {subtitle}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32, flex: 1 }}>
        {features.map((feature) => (
          <li
            key={feature}
            className="font-sans flex items-start gap-3"
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: 'var(--text)',
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <Button href="https://cal.com/natesystem/session-strategique" variant={ctaVariant} external>
        {cta}
      </Button>
    </div>
  )
}

const plans: PricingCardProps[] = [
  {
    title: 'Starter',
    price: 'À partir de 5 000€',
    subtitle: 'Pour les équipes qui démarrent',
    features: [
      '1 base de données centralisée',
      '1 plateforme interne',
      '2 agents IA spécialisés',
      'Formation équipe (2h)',
      'Support 30 jours',
      'Code source livré',
    ],
    cta: 'En savoir plus \u2192',
    ctaVariant: 'ghost',
  },
  {
    title: 'Standard',
    price: 'À partir de 12 000€',
    subtitle: 'Pour les PME qui veulent scaler',
    badge: 'POPULAIRE',
    highlighted: true,
    features: [
      'Tout Starter, plus :',
      'Base de données avancée',
      '3 plateformes internes',
      '5 agents IA spécialisés',
      'Intégrations illimitées',
      'Formation équipe (5h)',
      'Support 60 jours',
      'Dashboard de suivi',
    ],
    cta: 'Réserver un audit \u2192',
    ctaVariant: 'primary',
  },
  {
    title: 'Premium',
    price: 'Sur devis',
    subtitle: 'Infrastructure complète sur-mesure',
    features: [
      'Tout Standard, plus :',
      'Architecture data complète',
      'Plateformes illimitées',
      'Agents IA illimités',
      'IA fine-tunée sur vos données',
      'Formation complète (10h+)',
      'Support 12 mois',
      'Account manager dédié',
    ],
    cta: 'Nous contacter \u2192',
    ctaVariant: 'ghost',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-20">
          <span className="section-label">NOS OFFRES</span>
          <h2
            className="section-title"
            style={{ maxWidth: 700, margin: '0 auto 24px' }}
          >
            {"L'infrastructure "}
            <span className="accent">adaptée à vos besoins.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <FadeUp key={plan.title} delay={i * 0.12}>
              <PricingCard {...plan} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
