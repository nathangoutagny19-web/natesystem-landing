const CHAPTERS = [
  'Le problème opérationnel aujourd\'hui',
  'Ce que l\'IA fait vraiment (et ne fait pas)',
  'Le cadre PILOTE : trois couches',
  'Sept automatisations qui marchent',
  'Votre infrastructure : ce qui doit être vrai',
  'Les vrais coûts',
  'Vos sept premiers jours',
]

export default function PlaybookTOC() {
  return (
    <section className="pb-section">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow-soft">Au sommaire</span>
          <h2 className="pb-h2" style={{ marginTop: 10 }}>
            Sept chapitres, zéro remplissage.
          </h2>
        </div>
        <div className="pb-toc">
          <ol className="pb-toc-list">
            {CHAPTERS.map((chapter) => (
              <li key={chapter}>
                <span>{chapter}</span>
              </li>
            ))}
          </ol>
          <p className="pb-toc-meta">30 pages · PDF · Français · Édition France 2026</p>
        </div>
      </div>
    </section>
  )
}
