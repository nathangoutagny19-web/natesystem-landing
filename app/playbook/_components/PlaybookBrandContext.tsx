import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PlaybookBrandContext() {
  return (
    <section className="pb-section pb-brand-context">
      <div className="pb-container" style={{ maxWidth: 760 }}>
        <div className="pb-brand-card">
          <span className="pb-eyebrow-soft">À propos de ces playbooks</span>
          <h2
            className="pb-h2"
            style={{ marginTop: 12, fontSize: 'clamp(24px, 3.4vw, 34px)' }}
          >
            Publiés par NateSystem.
          </h2>
          <p
            className="pb-lead"
            style={{ maxWidth: 'none', marginBottom: 16 }}
          >
            NateSystem construit le logiciel sur-mesure qui pilote l&apos;activité
            des PME françaises — un poste de commandement unique pour vos
            opérations, votre donnée, votre équipe. L&apos;IA y est intégrée là où
            elle remplace de vraies heures de travail, jamais pour cocher une
            case marketing.
          </p>
          <p
            className="pb-lead"
            style={{ maxWidth: 'none', marginBottom: 28 }}
          >
            Ces playbooks détaillent gratuitement, secteur par secteur, où l&apos;IA
            tient sa promesse dans votre métier. Si après lecture vous voulez
            qu&apos;on l&apos;implémente dans votre boîte, on en parle.
          </p>
          <div className="pb-brand-ctas">
            <Link href="/" className="pb-btn-secondary">
              Découvrir NateSystem <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <a
              href="https://cal.com/natesystem/session-strategique"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-btn-secondary"
            >
              Réserver un audit 30 min
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
