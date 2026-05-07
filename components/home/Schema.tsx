'use client'

/**
 * Schema — animated 5-node flow diagram.
 *
 * Visualises the operational loop:
 *   Sources → AI agent → Software → Team → Action
 *
 * A single red pulse travels left-to-right across the connecting
 * line in a 6s loop, with a soft glow on the currently-active node.
 *
 * Implementation: SVG inline (no deps), pure CSS animation. Fully
 * respects prefers-reduced-motion (the pulse is hidden, the diagram
 * stays static and readable).
 *
 * Mobile: the row collapses to a vertical stack with a top-down
 * pulse instead. Less spectacular but legible on phones.
 */

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

interface Node {
  label: string
  sub: string
}

export default function Schema() {
  const { t } = useLang()

  const nodes: Node[] = [
    { label: t('schema.node1'), sub: t('schema.node1Sub') },
    { label: t('schema.node2'), sub: t('schema.node2Sub') },
    { label: t('schema.node3'), sub: t('schema.node3Sub') },
    { label: t('schema.node4'), sub: t('schema.node4Sub') },
    { label: t('schema.node5'), sub: t('schema.node5Sub') },
  ]

  return (
    <section id="schema" style={{ padding: '60px 24px 100px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-12">
          <span className="section-label">{t('schema.label')}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="schema-row">
            {nodes.map((n, i) => (
              <div key={i} className="schema-node-wrapper">
                {/* Connecting line BEFORE node (skip first) */}
                {i > 0 && (
                  <div className="schema-connector" aria-hidden="true">
                    <span className="schema-pulse" style={{ animationDelay: `${(i - 1) * 0.8}s` }} />
                  </div>
                )}
                <div
                  className="schema-node"
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <span className="schema-node-num font-mono">0{i + 1}</span>
                  <p className="schema-node-label font-sans">{n.label}</p>
                  <p className="schema-node-sub font-mono">{n.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <style>{`
        .schema-row {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
          align-items: stretch;
        }
        .schema-node-wrapper {
          position: relative;
          display: flex;
          align-items: stretch;
        }
        .schema-node {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 18px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          justify-content: center;
          min-height: 130px;
          animation: schemaNodePulse 4s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }
        .schema-node-num {
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--text-muted);
          font-weight: 300;
        }
        .schema-node-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          line-height: 1.3;
        }
        .schema-node-sub {
          font-size: 10px;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          font-weight: 300;
          opacity: 0.8;
        }
        .schema-connector {
          position: absolute;
          left: -8%;
          right: 92%;
          top: 50%;
          height: 1px;
          background: var(--border);
          z-index: 1;
          overflow: hidden;
          width: 16%;
        }
        .schema-pulse {
          position: absolute;
          top: 50%;
          left: 0;
          width: 24px;
          height: 2px;
          margin-top: -1px;
          background: linear-gradient(to right, transparent, var(--accent), transparent);
          box-shadow: 0 0 8px var(--accent);
          animation: schemaPulseFlow 4s ease-in-out infinite;
        }
        @keyframes schemaPulseFlow {
          0%   { left: -10%;  opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
        @keyframes schemaNodePulse {
          0%, 100% { box-shadow: 0 0 0 1px var(--border); }
          /* The 'active' moment for each node staggers via animation-delay */
          50%      { box-shadow: 0 0 0 1px rgba(230,57,70,0.4), 0 0 24px rgba(230,57,70,0.15); }
        }
        @media (max-width: 768px) {
          .schema-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .schema-connector {
            display: none;
          }
          .schema-node {
            min-height: 100px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .schema-node, .schema-pulse {
            animation: none !important;
          }
          .schema-pulse { display: none; }
        }
      `}</style>
    </section>
  )
}
