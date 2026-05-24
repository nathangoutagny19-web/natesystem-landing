import { Briefcase, GraduationCap, School, Utensils } from 'lucide-react'

const STATS = [
  { num: '54 050', label: 'Entreprises FR analysées' },
  { num: '8 649', label: 'Décideurs ICP qualifiés' },
  { num: '11', label: 'Secteurs cartographiés' },
]

const CLIENTS = [
  { icon: Utensils, name: 'Groupe de restaurants' },
  { icon: School, name: 'École publique' },
  { icon: GraduationCap, name: 'École privée' },
  { icon: Briefcase, name: 'Cabinet conseil restauration' },
]

export default function PlaybookSocialProof() {
  return (
    <section className="pb-section">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow-soft">À propos</span>
          <h2 className="pb-h2" style={{ marginTop: 10 }}>
            Construit sur des chiffres, pas sur du buzzword.
          </h2>
        </div>

        <div className="pb-stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="pb-stat-num">{s.num}</div>
              <div className="pb-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <p
          className="pb-toc-meta"
          style={{ marginBottom: 18, textAlign: 'center' }}
        >
          NateSystem construit déjà des systèmes propriétaires pour
        </p>
        <div className="pb-clients">
          {CLIENTS.map(({ icon: Icon, name }) => (
            <div key={name} className="pb-client">
              <Icon className="pb-client-icon" size={26} strokeWidth={1.6} />
              <div className="pb-client-name">{name}</div>
            </div>
          ))}
        </div>

        <div className="pb-bio">
          <div className="pb-bio-avatar">N</div>
          <div>
            <div className="pb-bio-name">Nathan Goutagny</div>
            <div className="pb-bio-role">
              Fondateur · Logiciel sur-mesure · IA appliquée
            </div>
            <div className="pb-bio-loc">
              Lyon
              <a
                className="pb-bio-link"
                href="https://www.linkedin.com/in/nathan-goutagny"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
