'use client'

import FadeUp from '@/components/ui/FadeUp'

/* ——— Stack layers data ——— */
const layers = [
  {
    number: '01',
    title: 'Base de données',
    subtitle: 'Centraliser',
    desc: 'On audite vos outils existants. Si vos données sont éparpillées entre 10 fichiers Excel et 5 SaaS, on crée une base de données unique et sécurisée qui centralise tout.',
    details: ['Audit de vos sources de données', 'Migration et nettoyage', 'Base centralisée et sécurisée', 'Accès structuré pour chaque équipe'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Plateformes internes',
    subtitle: 'Construire',
    desc: "On développe vos outils sur-mesure — dashboards, CRM interne, portails clients, formulaires intelligents — tout connecté à votre base, tout pensé pour votre équipe.",
    details: ['Interfaces personnalisées', 'Dashboards temps réel', 'Outils métier sur-mesure', 'Connecté à toutes vos sources'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 8h4M6 11h8" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Agents IA',
    subtitle: 'Déployer',
    desc: "On crée une équipe d'agents IA spécialisés — chacun expert dans une tâche précise, comme des employés virtuels qui bossent 24/7 sur vos opérations.",
    details: ['Agents spécialisés par métier', 'Connectés à vos données', 'Travaillent 24/7 sans erreur', "S'améliorent avec le temps"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="19" cy="8" r="2" /><circle cx="5" cy="8" r="2" />
        <path d="M19 10v2a2 2 0 0 1-2 2" /><path d="M5 10v2a2 2 0 0 0 2 2" />
      </svg>
    ),
  },
]

/* ——— Agent examples ——— */
const agents = [
  {
    role: 'Agent Prospection',
    dept: 'Commercial',
    tasks: 'Trouve des leads, personnalise les messages, relance automatiquement.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    role: 'Agent Copywriter',
    dept: 'Marketing',
    tasks: 'Rédige posts LinkedIn, emails, pages web dans votre voix.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    role: 'Agent Comptable',
    dept: 'Finance',
    tasks: 'Catégorise les dépenses, prépare les rapports, alerte sur les anomalies.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" /><line x1="2" y1="9" x2="22" y2="9" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    role: 'Agent RH',
    dept: 'Ressources Humaines',
    tasks: 'Trie les CVs, planifie les entretiens, rédige les fiches de poste.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    role: 'Agent Support',
    dept: 'Relation Client',
    tasks: 'Répond aux questions, escalade les urgences, fait le suivi.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    role: 'Agent Chef de Projet',
    dept: 'Opérations',
    tasks: 'Assigne les tâches, suit les deadlines, génère les comptes-rendus.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    role: 'Agent Veille',
    dept: 'Stratégie',
    tasks: 'Surveille les concurrents, analyse les tendances, rapport hebdo.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    role: 'Agent Designer',
    dept: 'Création',
    tasks: 'Génère des visuels, décline les templates, adapte les formats.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" /><path d="M17.5 14.5a2.5 2.5 0 0 0-5 0" />
        <rect x="2" y="2" width="20" height="20" rx="3" /><path d="M2 17l5-5 4 4 4-4 7 7" />
      </svg>
    ),
  },
]

export default function InfraSystem() {
  return (
    <section id="infrastructure" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>

        {/* ——— Header ——— */}
        <FadeUp className="text-center mb-20">
          <span className="section-label">NOTRE INFRASTRUCTURE</span>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 16px' }}>
            Ce qu&apos;on construit{' '}
            <span className="accent">dans chaque entreprise.</span>
          </h2>
          <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Chaque infrastructure est unique. Mais le principe reste le même : 3 briques qui s&apos;empilent pour rendre vos opérations autonomes.
          </p>
        </FadeUp>

        {/* ——— 3 Stack Layers ——— */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 80 }}>
          {layers.map((layer, i) => (
            <FadeUp key={layer.number} delay={i * 0.12}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderBottom: i < layers.length - 1 ? 'none' : '1px solid var(--border)',
                  borderRadius: i === 0 ? '12px 12px 0 0' : i === layers.length - 1 ? '0 0 12px 12px' : '0',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                }}
                className="hover-layer infra-step-grid"
              >
                {/* Number column */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '32px 0', borderRight: '1px solid var(--border)',
                  background: i === 2 ? 'var(--accent-subtle)' : 'transparent',
                }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 8 }}>{layer.icon}</div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2 }}>{layer.number}</span>
                </div>

                {/* Content */}
                <div className="infra-step-content">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 600, color: 'var(--text)' }}>
                      {layer.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--accent)' }}>
                      {layer.subtitle}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, maxWidth: 600 }}>
                    {layer.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {layer.details.map(d => (
                      <span key={d} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)',
                        padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 6,
                        letterSpacing: 0.5,
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ——— Bottom note ——— */}
        <FadeUp className="text-center mb-16">
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text)', lineHeight: 1.4, maxWidth: 600, margin: '0 auto 8px' }}>
            Chaque agent est spécialisé. Comme un employé — mais 24/7.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>
            Voici des exemples. Chaque entreprise a ses propres agents, adaptés à ses besoins.
          </p>
        </FadeUp>

        {/* ——— Agent Grid ——— */}
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {agents.map((agent, i) => (
            <FadeUp key={agent.role} delay={0.05 * i}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
                padding: '20px', transition: 'all 0.3s ease', height: '100%',
              }} className="agent-card-hover">
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--accent-subtle)', border: '1px solid rgba(230,57,70,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0,
                  }}>
                    {agent.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>
                      {agent.role}
                    </p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 1, textTransform: 'uppercase' }}>
                      {agent.dept}
                    </p>
                  </div>
                </div>
                {/* Description */}
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {agent.tasks}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>

      <style>{`
        .hover-layer:hover {
          border-color: var(--border-hover) !important;
        }
        .agent-card-hover:hover {
          border-color: var(--border-hover);
          background: var(--bg-elevated);
          box-shadow: 0 0 20px var(--accent-subtle);
        }
      `}</style>
    </section>
  )
}
