'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const columns = [
  {
    title: 'Connecter',
    description: 'On cartographie vos process et on connecte tous vos outils.',
    nodes: ['Audit des outils', 'Mapping des donnees', 'Connexion API', 'Centralisation'],
    nodesFr: ['Audit des outils', 'Mapping des données', 'Connexion API', 'Centralisation'],
  },
  {
    title: 'Automatiser',
    description: 'Des agents IA spécialisés déployés sur vos opérations.',
    nodes: ['Agent Prospection', 'Agent Reporting', 'Agent Onboarding', 'Agent Support'],
    nodesFr: ['Agent Prospection', 'Agent Reporting', 'Agent Onboarding', 'Agent Support'],
  },
  {
    title: 'Décider',
    description: 'Des dashboards et alertes pour piloter en temps réel.',
    nodes: ['KPIs temps réel', 'Alertes intelligentes', 'Recommandations IA', 'Décisions data-driven'],
    nodesFr: ['KPIs temps réel', 'Alertes intelligentes', 'Recommandations IA', 'Décisions data-driven'],
  },
]

/* Simple SVG icons per node (small, inline) */
const nodeIcons: Record<string, JSX.Element> = {
  'Audit des outils': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="5" /><path d="M11 11l3 3" />
    </svg>
  ),
  'Mapping des données': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="5" height="5" rx="1" /><rect x="10" y="10" width="5" height="5" rx="1" /><path d="M6 3.5h4.5a2 2 0 012 2V10" />
    </svg>
  ),
  'Connexion API': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4L2 8l4 4" /><path d="M10 4l4 4-4 4" />
    </svg>
  ),
  'Centralisation': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2" /><path d="M8 2v4M8 10v4M2 8h4M10 8h4" />
    </svg>
  ),
  'Agent Prospection': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1v6l4 2" /><circle cx="8" cy="8" r="7" />
    </svg>
  ),
  'Agent Reporting': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12V7M8 12V4M12 12V9" />
    </svg>
  ),
  'Agent Onboarding': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="5" r="3" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
  'Agent Support': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10V6a6 6 0 0112 0v4" /><path d="M2 10a2 2 0 01-1-1.73V8.27A2 2 0 012 6.5h0v3.5zM14 10a2 2 0 001-1.73V8.27A2 2 0 0014 6.5h0v3.5z" />
    </svg>
  ),
  'KPIs temps réel': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1,12 5,6 9,9 15,2" /><polyline points="11,2 15,2 15,6" />
    </svg>
  ),
  'Alertes intelligentes': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1l1.5 3.2L13 4.8l-2.5 2.4.6 3.6L8 9.2 4.9 10.8l.6-3.6L3 4.8l3.5-.6z" />
    </svg>
  ),
  'Recommandations IA': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="6" r="4" /><path d="M5.5 10v3l2.5-1.5L10.5 13v-3" />
    </svg>
  ),
  'Décisions data-driven': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1v14M1 8h14" /><path d="M3 3l10 10M13 3L3 13" />
    </svg>
  ),
}

/* ------------------------------------------------------------------ */
/*  Flywheel SVG                                                       */
/* ------------------------------------------------------------------ */

function FlywheelDiagram() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
      <div
        style={{
          maxWidth: 280,
          width: '100%',
          aspectRatio: '1',
          position: 'relative',
        }}
      >
        {/* Slowly rotating arrows */}
        <svg
          viewBox="0 0 280 280"
          width="100%"
          height="100%"
          style={{
            animation: 'flywheelSpin 60s linear infinite',
          }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="var(--accent)" />
            </marker>
          </defs>

          {/* Arc 1: top-right (Connect -> Automate) */}
          <path
            d="M 140 40 A 100 100 0 0 1 226.6 190"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            opacity="0.7"
          />
          {/* Arc 2: bottom (Automate -> Decide) */}
          <path
            d="M 226.6 190 A 100 100 0 0 1 53.4 190"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            opacity="0.7"
          />
          {/* Arc 3: top-left (Decide -> Connect) */}
          <path
            d="M 53.4 190 A 100 100 0 0 1 140 40"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            opacity="0.7"
          />
        </svg>

        {/* Static labels on top of rotating arrows */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            pointerEvents: 'none',
          }}
        >
          {/* Center text */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Système
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Autonome
          </span>
        </div>

        {/* Label: Connect (top) */}
        <span
          style={{
            position: 'absolute',
            top: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '0.5px',
          }}
        >
          Connect
        </span>

        {/* Label: Automate (bottom-right) */}
        <span
          style={{
            position: 'absolute',
            bottom: 24,
            right: 0,
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '0.5px',
          }}
        >
          Automate
        </span>

        {/* Label: Decide (bottom-left) */}
        <span
          style={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '0.5px',
          }}
        >
          Decide
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Code Snippet                                                       */
/* ------------------------------------------------------------------ */

function CodeSnippet() {
  const comment = { color: 'var(--text-muted)' }
  const key = { color: 'var(--accent)' }
  const value = { color: 'var(--text-secondary)' }
  const bracket = { color: 'var(--text-muted)' }

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Terminal top bar */}
      <div
        style={{
          height: '8px',
          background: 'var(--bg-elevated)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 12px',
        }}
      >
        {/* The dots are vertically centered but bar is only 8px,
            so we use a taller bar visually */}
      </div>
      <div
        style={{
          background: 'var(--bg-elevated)',
          padding: '6px 12px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
      </div>

      {/* Code content */}
      <pre
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          lineHeight: 1.8,
          color: 'var(--text-muted)',
          padding: '20px',
          whiteSpace: 'pre',
          overflowX: 'auto',
          margin: 0,
        }}
      >
        <span style={comment}># natesystem.config.yaml</span>{'\n'}
        {'\n'}
        <span style={key}>agents</span><span style={bracket}>:</span>{'\n'}
        {'  '}<span style={bracket}>-</span> <span style={key}>name</span><span style={bracket}>:</span> <span style={value}>prospection-agent</span>{'\n'}
        {'    '}<span style={key}>trigger</span><span style={bracket}>:</span> <span style={value}>new_lead_created</span>{'\n'}
        {'    '}<span style={key}>actions</span><span style={bracket}>:</span> <span style={bracket}>[</span><span style={value}>qualify, enrich, assign_to_sales</span><span style={bracket}>]</span>{'\n'}
        {'\n'}
        {'  '}<span style={bracket}>-</span> <span style={key}>name</span><span style={bracket}>:</span> <span style={value}>reporting-agent</span>{'\n'}
        {'    '}<span style={key}>schedule</span><span style={bracket}>:</span> <span style={value}>every_monday_9am</span>{'\n'}
        {'    '}<span style={key}>actions</span><span style={bracket}>:</span> <span style={bracket}>[</span><span style={value}>aggregate_kpis, generate_report, send_to_slack</span><span style={bracket}>]</span>{'\n'}
        {'\n'}
        {'  '}<span style={bracket}>-</span> <span style={key}>name</span><span style={bracket}>:</span> <span style={value}>onboarding-agent</span>{'\n'}
        {'    '}<span style={key}>trigger</span><span style={bracket}>:</span> <span style={value}>deal_won</span>{'\n'}
        {'    '}<span style={key}>actions</span><span style={bracket}>:</span> <span style={bracket}>[</span><span style={value}>create_workspace, send_welcome, schedule_kickoff</span><span style={bracket}>]</span>
      </pre>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Process Node                                                       */
/* ------------------------------------------------------------------ */

function ProcessNode({ label, isLast }: { label: string; isLast: boolean }) {
  const icon = nodeIcons[label]

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent)',
            flexShrink: 0,
          }}
        >
          {icon || (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="3" />
            </svg>
          )}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.4,
          }}
        >
          {label}
        </span>
      </div>
      {!isLast && (
        <div
          style={{
            width: '2px',
            height: '20px',
            borderLeft: '2px dashed var(--border)',
            marginLeft: '15px',
          }}
        />
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function AgentShowcase() {
  const { t, lang } = useLang()

  return (
    <section id="agents" style={{ padding: '120px 24px' }}>
      <style>{`
        @keyframes flywheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="mx-auto" style={{ maxWidth: '1100px' }}>

        {/* ---- Part A: Section Header ---- */}
        <FadeUp className="text-center mb-16">
          <span className="section-label">AGENTS IA</span>
          <h2
            className="section-title"
            style={{ maxWidth: '700px', margin: '0 auto 16px' }}
          >
            Un système complet,{' '}
            <span className="accent">pas un outil de plus</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Nos agents IA travaillent ensemble pour connecter, automatiser et piloter vos opérations.
          </p>
        </FadeUp>

        {/* ---- Part D: Flywheel Diagram ---- */}
        <FadeUp delay={0.1}>
          <FlywheelDiagram />
        </FadeUp>

        {/* ---- Part B: 3 Columns ---- */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            marginBottom: '64px',
          }}
        >
          {columns.map((col, colIdx) => (
            <FadeUp key={col.title} delay={0.1 + colIdx * 0.12}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                }}
              >
                {/* Column title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {col.title}
                </h3>

                {/* Column description */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  {col.description}
                </p>

                {/* Process nodes */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {col.nodesFr.map((node, nodeIdx) => (
                    <ProcessNode
                      key={node}
                      label={node}
                      isLast={nodeIdx === col.nodesFr.length - 1}
                    />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ---- Part C: Code Snippet ---- */}
        <FadeUp delay={0.4}>
          <CodeSnippet />
        </FadeUp>

      </div>
    </section>
  )
}
