'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/* ------------------------------------------------------------------ */
/*  Inline SVG icons (monoline, 20x20 viewBox)                       */
/* ------------------------------------------------------------------ */

const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="10" cy="5" rx="7" ry="2.5" />
    <path d="M3 5v10c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
    <path d="M3 10c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5" />
  </svg>
)

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="16" height="12" rx="2" />
    <path d="M2 6l8 5 8-5" />
  </svg>
)

const IconTable = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="16" height="14" rx="2" />
    <line x1="2" y1="7" x2="18" y2="7" />
    <line x1="2" y1="11" x2="18" y2="11" />
    <line x1="7" y1="7" x2="7" y2="17" />
    <line x1="13" y1="7" x2="13" y2="17" />
  </svg>
)

const IconGear = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="3" />
    <path d="M10 1.5v2M10 16.5v2M3.4 3.4l1.4 1.4M15.2 15.2l1.4 1.4M1.5 10h2M16.5 10h2M3.4 16.6l1.4-1.4M15.2 4.8l1.4-1.4" />
  </svg>
)

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 17a2 2 0 004 0" />
    <path d="M4 11V8a6 6 0 1112 0v3c0 1.5.5 3 2 4H2c1.5-1 2-2.5 2-4z" />
  </svg>
)

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="16" x2="4" y2="10" />
    <line x1="8" y1="16" x2="8" y2="6" />
    <line x1="12" y1="16" x2="12" y2="8" />
    <line x1="16" y1="16" x2="16" y2="4" />
  </svg>
)

/* ------------------------------------------------------------------ */
/*  CSS keyframes injected via style tag                              */
/* ------------------------------------------------------------------ */

const keyframes = `
@keyframes archDash {
  to { stroke-dashoffset: -20; }
}
@keyframes archDot {
  0% { offset-distance: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}
`

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function PipelineNode({
  icon,
  label,
  x,
  y,
}: {
  icon: React.ReactNode
  label: string
  x: number
  y: number
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="-24"
        y="-24"
        width="48"
        height="48"
        rx="10"
        fill="var(--bg-card)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <foreignObject x="-10" y="-10" width="20" height="20">
        <div style={{ color: 'var(--text-secondary)' }}>{icon}</div>
      </foreignObject>
      <text
        y="40"
        textAnchor="middle"
        fill="var(--text-secondary)"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 300 }}
      >
        {label}
      </text>
    </g>
  )
}

function AnimatedPath({ pathId, d, delay }: { pathId: string; d: string; delay: number }) {
  return (
    <>
      <path
        id={pathId}
        d={d}
        stroke="var(--border-hover)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="6 4"
        style={{ animation: 'archDash 1.5s linear infinite' }}
      />
      <circle
        r="3"
        fill="var(--accent)"
        style={{
          offsetPath: `path("${d}")`,
          animation: `archDot 2.5s ease-in-out ${delay}s infinite`,
          filter: 'drop-shadow(0 0 4px var(--accent))',
        }}
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Code block with syntax highlighting                               */
/* ------------------------------------------------------------------ */

function CodeBlock() {
  const lines: { text: string; type: 'key' | 'string' | 'comment' | 'punct' | 'mixed' }[] = [
    { text: 'infrastructure:', type: 'key' },
    { text: '  data_sources:', type: 'key' },
    { text: '    - hubspot_crm', type: 'string' },
    { text: '    - google_workspace', type: 'string' },
    { text: '    - slack_channels', type: 'string' },
    { text: '', type: 'punct' },
    { text: '  agents:', type: 'key' },
    { text: '    prospection:', type: 'key' },
    { text: '      trigger: new_lead', type: 'mixed' },
    { text: '      model: claude-sonnet', type: 'mixed' },
    { text: '      actions: [qualify, enrich, notify]', type: 'mixed' },
    { text: '', type: 'punct' },
    { text: '    reporting:', type: 'key' },
    { text: '      schedule: "0 9 * * MON"', type: 'mixed' },
    { text: '      model: claude-haiku', type: 'mixed' },
    { text: '      actions: [aggregate, visualize, send]', type: 'mixed' },
    { text: '', type: 'punct' },
    { text: "  ownership: client  # 100% propriétaire", type: 'mixed' },
  ]

  function renderLine(line: { text: string; type: string }) {
    if (!line.text) return '\u00A0'
    if (line.type === 'key') {
      return <span style={{ color: 'var(--accent)' }}>{line.text}</span>
    }
    if (line.type === 'string') {
      const dashMatch = line.text.match(/^(\s*- )(.+)$/)
      if (dashMatch) {
        return (
          <>
            <span style={{ color: 'var(--text-muted)' }}>{dashMatch[1]}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{dashMatch[2]}</span>
          </>
        )
      }
      return <span style={{ color: 'var(--text-secondary)' }}>{line.text}</span>
    }
    if (line.type === 'comment') {
      return <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>{line.text}</span>
    }
    // mixed: key: value  # comment
    const commentIdx = line.text.indexOf('#')
    const beforeComment = commentIdx >= 0 ? line.text.slice(0, commentIdx) : line.text
    const commentPart = commentIdx >= 0 ? line.text.slice(commentIdx) : null

    const colonIdx = beforeComment.indexOf(':')
    if (colonIdx >= 0) {
      const key = beforeComment.slice(0, colonIdx + 1)
      const value = beforeComment.slice(colonIdx + 1)
      // Check for brackets in value
      const bracketParts = value.split(/(\[.*?\])/)
      return (
        <>
          <span style={{ color: 'var(--accent)' }}>{key}</span>
          {bracketParts.map((part, i) =>
            part.startsWith('[') ? (
              <span key={i} style={{ color: 'var(--text-muted)' }}>{part}</span>
            ) : part.includes('"') ? (
              <span key={i} style={{ color: 'var(--text-secondary)' }}>{part}</span>
            ) : (
              <span key={i} style={{ color: 'var(--text-secondary)' }}>{part}</span>
            )
          )}
          {commentPart && (
            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>{commentPart}</span>
          )}
        </>
      )
    }
    return <span style={{ color: 'var(--text-muted)' }}>{line.text}</span>
  }

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--bg-card)',
      }}
    >
      {/* Terminal top bar */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#E63946', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EAB308', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            marginLeft: '8px',
          }}
        >
          natesystem.config.yaml
        </span>
      </div>
      {/* Code content */}
      <pre
        style={{
          padding: '20px 24px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12.5px',
          lineHeight: 1.7,
          overflowX: 'auto',
          margin: 0,
        }}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i}>{renderLine(line)}</div>
          ))}
        </code>
      </pre>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile pipeline (vertical stack)                                  */
/* ------------------------------------------------------------------ */

function MobileNode({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

function MobileConnector() {
  return (
    <div
      style={{
        width: '1px',
        height: '24px',
        margin: '0 0 0 23px',
        background: 'var(--border-hover)',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--accent)',
          position: 'absolute',
          left: '-2.5px',
          top: '50%',
          transform: 'translateY(-50%)',
          boxShadow: '0 0 6px var(--accent)',
        }}
      />
    </div>
  )
}

function MobilePipeline() {
  const sources = [
    { icon: <IconDatabase />, label: 'CRM' },
    { icon: <IconMail />, label: 'Email' },
    { icon: <IconTable />, label: 'Sheets' },
  ]
  const outputs = [
    { icon: <IconGear />, label: 'Automatiser' },
    { icon: <IconBell />, label: 'Notifier' },
    { icon: <IconChart />, label: 'Analyser' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, padding: '0 20px' }}>
      {/* Sources */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase' as const,
          color: 'var(--text-muted)',
          marginBottom: '12px',
        }}
      >
        SOURCES
      </div>
      {sources.map((s, i) => (
        <div key={s.label}>
          <MobileNode icon={s.icon} label={s.label} />
          {i < sources.length - 1 && <MobileConnector />}
        </div>
      ))}

      <MobileConnector />

      {/* Hub */}
      <div
        style={{
          padding: '20px 28px',
          borderRadius: 14,
          border: '1.5px solid var(--accent)',
          background: 'var(--bg-card)',
          boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
          {[0, 1, 2, 3].map((d) => (
            <div
              key={d}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                opacity: 0.7 + d * 0.1,
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text)',
          }}
        >
          NateSystem Agent Hub
        </span>
      </div>

      <MobileConnector />

      {/* Outputs */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase' as const,
          color: 'var(--text-muted)',
          marginBottom: '12px',
        }}
      >
        OUTPUTS
      </div>
      {outputs.map((o, i) => (
        <div key={o.label}>
          <MobileNode icon={o.icon} label={o.label} />
          {i < outputs.length - 1 && <MobileConnector />}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop Pipeline SVG                                              */
/* ------------------------------------------------------------------ */

function DesktopPipeline() {
  // Layout: sources at x=60, hub at x=370, outputs at x=680. Total width ~740, viewBox 0 0 740 180
  const sourceX = 60
  const hubX = 370
  const outputX = 680
  const sourceYs = [40, 90, 140]
  const outputYs = [40, 90, 140]
  const hubY = 90

  const sources = [
    { icon: <IconDatabase />, label: 'CRM', y: sourceYs[0] },
    { icon: <IconMail />, label: 'Email', y: sourceYs[1] },
    { icon: <IconTable />, label: 'Sheets', y: sourceYs[2] },
  ]

  const outputs = [
    { icon: <IconGear />, label: 'Automatiser', y: outputYs[0] },
    { icon: <IconBell />, label: 'Notifier', y: outputYs[1] },
    { icon: <IconChart />, label: 'Analyser', y: outputYs[2] },
  ]

  return (
    <svg viewBox="0 0 740 180" width="100%" style={{ maxWidth: '740px', margin: '0 auto', display: 'block' }}>
      {/* Animated connection lines: sources -> hub */}
      {sourceYs.map((sy, i) => {
        const d = `M ${sourceX + 30} ${sy} C ${sourceX + 120} ${sy}, ${hubX - 120} ${hubY}, ${hubX - 80} ${hubY}`
        return <AnimatedPath key={`s${i}`} pathId={`src-${i}`} d={d} delay={i * 0.4} />
      })}

      {/* Animated connection lines: hub -> outputs */}
      {outputYs.map((oy, i) => {
        const d = `M ${hubX + 80} ${hubY} C ${hubX + 180} ${hubY}, ${outputX - 120} ${oy}, ${outputX - 30} ${oy}`
        return <AnimatedPath key={`o${i}`} pathId={`out-${i}`} d={d} delay={i * 0.4 + 0.6} />
      })}

      {/* Source nodes */}
      {sources.map((s) => (
        <PipelineNode key={s.label} icon={s.icon} label={s.label} x={sourceX} y={s.y} />
      ))}

      {/* Hub */}
      <g transform={`translate(${hubX}, ${hubY})`}>
        <rect
          x="-80"
          y="-44"
          width="160"
          height="88"
          rx="14"
          fill="var(--bg-card)"
          stroke="var(--accent)"
          strokeWidth="1.5"
          filter="url(#hubGlow)"
        />
        {/* 4-dot grid */}
        {[
          [-12, -8],
          [4, -8],
          [-12, 8],
          [4, 8],
        ].map(([dx, dy], i) => (
          <circle key={i} cx={dx} cy={dy} r="3" fill="var(--accent)" opacity={0.6 + i * 0.1} />
        ))}
        <text
          y="32"
          textAnchor="middle"
          fill="var(--text)"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600 }}
        >
          NateSystem Agent Hub
        </text>
      </g>

      {/* Output nodes */}
      {outputs.map((o) => (
        <PipelineNode key={o.label} icon={o.icon} label={o.label} x={outputX} y={o.y} />
      ))}

      {/* Glow filter for hub */}
      <defs>
        <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="var(--accent)" floodOpacity="0.2" />
        </filter>
      </defs>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Section Component                                            */
/* ------------------------------------------------------------------ */

export default function Architecture() {
  const { t } = useLang()

  const metrics = [
    { value: '50+', desc: t('architecture.metric1') || 'Connecteurs disponibles' },
    { value: '< 48h', desc: t('architecture.metric2') || 'Deploiement agents' },
    { value: '100%', desc: t('architecture.metric3') || 'Code proprietaire' },
  ]

  return (
    <section id="infrastructure" style={{ padding: '120px 24px' }}>
      <style>{keyframes}</style>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        {/* Part A: Header */}
        <FadeUp className="text-center mb-20">
          <span className="section-label">INFRASTRUCTURE IA</span>
          <h2
            className="section-title"
            style={{ maxWidth: '700px', margin: '0 auto 24px' }}
          >
            {t('architecture.title') || 'Une infrastructure IA compl\u00e8te.'}{' '}
            <span className="accent">
              {t('architecture.titleAccent') || 'Pas un SaaS de plus.'}
            </span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('architecture.sub') ||
              'Chaque brique est propri\u00e9taire, connect\u00e9e \u00e0 vos donn\u00e9es, et vous appartient.'}
          </p>
        </FadeUp>

        {/* Part B: Pipeline Diagram */}
        <FadeUp delay={0.15} className="mb-20">
          {/* Desktop */}
          <div className="hidden md:block">
            <DesktopPipeline />
          </div>
          {/* Mobile */}
          <div className="block md:hidden">
            <MobilePipeline />
          </div>
        </FadeUp>

        {/* Part C: Code Block */}
        <FadeUp delay={0.25} className="mb-20">
          <CodeBlock />
        </FadeUp>

        {/* Part D: Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <FadeUp key={m.value} delay={0.3 + i * 0.1}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <span
                  className="font-serif italic"
                  style={{
                    fontSize: '30px',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    fontWeight: 300,
                  }}
                >
                  {m.desc}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
