/**
 * Illustrations UI abstraites (hand-rolled SVG, sauce NateSystem) pour Le Diagnostic —
 * façon OpsKings mais rouge/mono/serif : cartographie, prototype dashboard, feuille de route.
 * Chaque viz remplit un cadre 16:9 dans le mockup navigateur.
 */

const C = {
  line: 'rgba(140,140,150,0.35)',
  soft: 'rgba(140,140,150,0.18)',
  fill: 'rgba(140,140,150,0.10)',
  accent: 'var(--accent)',
  accentSoft: 'rgba(230,57,70,0.14)',
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 180" className="dg-viz-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {children}
    </svg>
  )
}

/* 1 — La Carte : cartographie / flowchart (nœuds reliés) */
export function VizCarte() {
  const node = (x: number, y: number, w: number, accent = false) => (
    <g>
      <rect x={x} y={y} width={w} height="26" rx="6" fill={accent ? C.accentSoft : C.fill} stroke={accent ? C.accent : C.line} strokeWidth="1.4" />
      <rect x={x + 8} y={y + 8} width={w - 26} height="3" rx="1.5" fill={accent ? C.accent : C.soft} />
      <rect x={x + 8} y={y + 15} width={w - 40} height="3" rx="1.5" fill={C.soft} />
    </g>
  )
  return (
    <Frame>
      {/* connexions */}
      <path d="M70 43 C 110 55, 120 70, 150 80" fill="none" stroke={C.line} strokeWidth="1.4" />
      <path d="M250 40 C 215 55, 200 68, 178 80" fill="none" stroke={C.line} strokeWidth="1.4" />
      <path d="M150 106 C 120 118, 100 122, 80 128" fill="none" stroke={C.line} strokeWidth="1.4" />
      <path d="M182 106 C 215 118, 235 124, 252 130" fill="none" stroke={C.line} strokeWidth="1.4" />
      {/* nœuds */}
      {node(26, 30, 62, true)}
      {node(212, 27, 78)}
      {node(126, 80, 78, true)}
      {node(30, 122, 66)}
      {node(216, 124, 76)}
      {/* petits points de jonction */}
      <circle cx="150" cy="80" r="2.6" fill={C.accent} />
      <circle cx="80" cy="43" r="2.2" fill={C.line} />
      <circle cx="250" cy="40" r="2.2" fill={C.line} />
    </Frame>
  )
}

/* 2 — Le Prototype : dashboard cliquable (sidebar + KPIs + courbe + donut) */
export function VizProto() {
  return (
    <Frame>
      {/* sidebar */}
      <rect x="0" y="0" width="46" height="180" fill={C.fill} />
      <rect x="12" y="16" width="22" height="4" rx="2" fill={C.accent} />
      {[36, 50, 64, 78, 92].map((y) => (
        <rect key={y} x="12" y={y} width="24" height="3" rx="1.5" fill={C.soft} />
      ))}
      {/* top bar */}
      <rect x="60" y="14" width="70" height="6" rx="3" fill={C.line} />
      <rect x="270" y="12" width="40" height="12" rx="6" fill={C.accentSoft} stroke={C.accent} strokeWidth="1" />
      {/* KPI row */}
      {[0, 1, 2, 3].map((i) => {
        const x = 60 + i * 65
        const acc = i === 0
        return (
          <g key={i}>
            <rect x={x} y="34" width="56" height="30" rx="5" fill={acc ? C.accentSoft : C.fill} stroke={acc ? C.accent : C.line} strokeWidth="1.2" />
            <rect x={x + 8} y="42" width="26" height="6" rx="2" fill={acc ? C.accent : C.line} />
            <rect x={x + 8} y="53" width="34" height="3" rx="1.5" fill={C.soft} />
          </g>
        )
      })}
      {/* chart box */}
      <rect x="60" y="76" width="150" height="90" rx="6" fill={C.fill} stroke={C.line} strokeWidth="1.2" />
      <path d="M72 150 L100 132 L124 140 L150 112 L176 96 L198 88" fill="none" stroke={C.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="198" cy="88" r="3" fill={C.accent} />
      {/* donut box */}
      <rect x="222" y="76" width="88" height="90" rx="6" fill={C.fill} stroke={C.line} strokeWidth="1.2" />
      <circle cx="252" cy="118" r="20" fill="none" stroke={C.soft} strokeWidth="6" />
      <path d="M252 98 A20 20 0 0 1 270 128" fill="none" stroke={C.accent} strokeWidth="6" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="284" cy={104 + i * 14} r="2.4" fill={i === 0 ? C.accent : C.line} />
          <rect x="290" y={102 + i * 14} width="14" height="3" rx="1.5" fill={C.soft} />
        </g>
      ))}
    </Frame>
  )
}

/* IA & automatisation : courbes en hausse + déclencheurs */
export function VizGrowth() {
  return (
    <Frame>
      <line x1="30" y1="26" x2="30" y2="150" stroke={C.line} strokeWidth="1.5" />
      <line x1="30" y1="150" x2="292" y2="150" stroke={C.line} strokeWidth="1.5" />
      {/* aire + courbe */}
      <path d="M40 132 L92 112 L140 120 L192 82 L244 54 L282 38" fill="none" stroke={C.accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {[40, 92, 140, 192, 244, 282].map((x, i) => {
        const y = [132, 112, 120, 82, 54, 38][i]
        return <circle key={x} cx={x} cy={y} r={i === 5 ? 4 : 2.6} fill={i === 5 ? C.accent : C.fill} stroke={i === 5 ? C.accent : C.line} strokeWidth="1.4" />
      })}
      {/* flèche montée */}
      <path d="M282 38 L270 42 M282 38 L278 50" stroke={C.accent} strokeWidth="2.4" strokeLinecap="round" />
      {/* badge « déclencheur » */}
      <rect x="150" y="26" width="92" height="24" rx="7" fill={C.accentSoft} stroke={C.accent} strokeWidth="1.2" />
      <circle cx="166" cy="38" r="3.4" fill={C.accent} />
      <rect x="176" y="33" width="52" height="4" rx="2" fill={C.accent} />
      <rect x="176" y="41" width="38" height="3" rx="1.5" fill={C.soft} />
    </Frame>
  )
}

/* Formation & autonomie : tableau + personne */
export function VizTeach() {
  return (
    <Frame>
      <rect x="96" y="26" width="150" height="94" rx="8" fill={C.fill} stroke={C.line} strokeWidth="1.5" />
      <rect x="112" y="46" width="88" height="5" rx="2.5" fill={C.accent} />
      <rect x="112" y="62" width="112" height="4" rx="2" fill={C.soft} />
      <rect x="112" y="76" width="72" height="4" rx="2" fill={C.soft} />
      <rect x="112" y="90" width="98" height="4" rx="2" fill={C.soft} />
      {/* personne */}
      <circle cx="48" cy="74" r="15" fill={C.accentSoft} stroke={C.accent} strokeWidth="1.6" />
      <path d="M22 140 C 22 104, 74 104, 74 140" fill={C.fill} stroke={C.line} strokeWidth="1.6" />
      <path d="M64 84 L96 66" stroke={C.accent} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </Frame>
  )
}

/* 3 — La Feuille de route : timeline / phases + budget (€) */
export function VizFeuille() {
  const phases = [
    { x: 40, on: true },
    { x: 130, on: false },
    { x: 220, on: false },
  ]
  return (
    <Frame>
      {/* ligne de temps */}
      <path d="M40 96 L286 96" stroke={C.line} strokeWidth="1.6" />
      {/* jalons */}
      {[40, 130, 220, 286].map((x, i) => (
        <circle key={x} cx={x} cy="96" r={i === 0 ? 5 : 4} fill={i === 0 ? C.accent : C.fill} stroke={i === 0 ? C.accent : C.line} strokeWidth="1.4" />
      ))}
      {/* blocs de phase (cartes livrables au-dessus) */}
      {phases.map((p, i) => (
        <g key={i}>
          <rect x={p.x - 4} y="40" width="72" height="34" rx="6" fill={p.on ? C.accentSoft : C.fill} stroke={p.on ? C.accent : C.line} strokeWidth="1.3" />
          <rect x={p.x + 6} y="49" width="34" height="4" rx="2" fill={p.on ? C.accent : C.line} />
          <rect x={p.x + 6} y="58" width="50" height="3" rx="1.5" fill={C.soft} />
          <path d={`M${p.x + 30} 74 L${p.x + 30} 92`} stroke={p.on ? C.accent : C.line} strokeWidth="1.3" strokeDasharray="2 3" />
        </g>
      ))}
      {/* budget € — barres croissantes sous la timeline */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={44 + i * 20} y={150 - i * 8} width="12" height={12 + i * 8} rx="2" fill={i === 3 ? C.accentSoft : C.fill} stroke={i === 3 ? C.accent : C.line} strokeWidth="1.1" />
      ))}
      <text x="150" y="140" fill={C.accent} fontSize="12" fontFamily="var(--font-mono)" fontWeight="600">€</text>
      <rect x="164" y="132" width="90" height="4" rx="2" fill={C.soft} />
      <rect x="164" y="142" width="64" height="4" rx="2" fill={C.soft} />
      <rect x="164" y="152" width="78" height="4" rx="2" fill={C.soft} />
    </Frame>
  )
}
