'use client'

import { useReducedMotion } from 'framer-motion'

/**
 * UN PETIT DESSIN ANIMÉ PAR MÉTIER (accueil, section Secteurs, 8 novembre 2026).
 *
 * Nathan : « une petite animation ou un petit design, tout petit, pour chaque
 * secteur ». Dessins au trait faits main en SVG, couleur du texte, un seul
 * détail en rouge qui bouge. Pas d'image, pas de capture d'écran (refusées).
 * Index : 0 yacht, 1 villa, 2 conciergerie, 3 voyage, 4 sécurité,
 * 5 événementiel, 6 hôtel (14 novembre 2026). Les secteurs de la cible
 * choisissent le leur dans lib/sectors.ts. Figés si l'utilisateur réduit les
 * animations.
 */
const ROUTE = 'M12 46 C 22 20, 40 54, 51 22'

/** `size` : la taille affichée ; `stroke` : l'épaisseur du trait dans le dessin
 *  (plus fine quand on l'affiche en grand, pour garder un trait délicat). */
export default function SectorGlyph({ index, size = 56, stroke = 1.4 }: { index: number; size?: number; stroke?: number }) {
  const reduce = useReducedMotion()

  return (
    <span className={`glyph${reduce ? ' glyph-still' : ''}`} aria-hidden="true" style={{ ['--g-stroke' as string]: stroke }}>
      <svg viewBox="0 0 64 64" width={size} height={size} fill="none">
        {index === 0 && (
          /* Yacht : le bateau tangue, l'eau défile. */
          <>
            <g className="g-bob">
              <path d="M13 38 H51 L45.5 45 H18.5 Z" />
              <path d="M23 38 L25.5 31.5 H38.5 L42 38" />
              <path d="M32 31.5 V25.5" />
              <path className="g-accent-fill" d="M32 25.5 L37 27.3 L32 29.1 Z" />
            </g>
            <g className="g-waves">
              <path className="g-soft" d="M0 51 q4 -2.6 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" />
              <path className="g-soft" d="M4 56 q4 -2.6 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" />
            </g>
          </>
        )}

        {index === 1 && (
          /* Villa : une fenêtre s'allume, puis l'autre. */
          <>
            <path d="M12 31 L32 16 L52 31" />
            <path d="M17 28 V48 H47 V28" />
            <path d="M29 48 V39 H35 V48" />
            <rect className="g-light g-light-a" x="21" y="32" width="5.5" height="5.5" rx="0.6" />
            <rect className="g-light g-light-b" x="37.5" y="32" width="5.5" height="5.5" rx="0.6" />
            <path className="g-soft" d="M8 48 H56" />
          </>
        )}

        {index === 2 && (
          /* Conciergerie : la cloche sonne. */
          <>
            <g className="g-ring">
              <path d="M18 42 A14 14 0 0 1 46 42" />
              <circle cx="32" cy="26" r="2" />
            </g>
            <path d="M13 42 H51" />
            <path className="g-soft" d="M15 46.5 H49" />
            <g className="g-ding">
              <path className="g-accent" d="M41 20 L44 16.5" />
              <path className="g-accent" d="M45 25.5 L49.5 24.5" />
              <path className="g-accent" d="M23 20 L20 16.5" />
            </g>
          </>
        )}

        {index === 3 && (
          /* Voyage, DMC, transport : un point suit l'itinéraire jusqu'au repère. */
          <>
            <path className="g-soft g-dash" d={ROUTE} />
            <circle cx="12" cy="46" r="2.4" />
            <path className="g-accent" d="M51 13.5 a4.2 4.2 0 0 1 4.2 4.2 c0 3.2 -4.2 7.3 -4.2 7.3 s-4.2 -4.1 -4.2 -7.3 a4.2 4.2 0 0 1 4.2 -4.2 z" />
            {!reduce && (
              <circle className="g-accent-fill" r="2.2">
                <animateMotion dur="3.4s" repeatCount="indefinite" path={ROUTE} keyPoints="0;1;1" keyTimes="0;0.8;1" calcMode="linear" />
              </circle>
            )}
          </>
        )}

        {index === 4 && (
          /* Sécurité : la coche se trace dans l'écusson. */
          <>
            <path d="M32 11 L48 17 V30.5 C48 40.5 41 47.5 32 52 C23 47.5 16 40.5 16 30.5 V17 Z" />
            <path className="g-accent g-check" d="M25 31.5 L30 36.5 L40 25.5" />
          </>
        )}

        {index === 5 && (
          /* Événementiel, mariages : des bulles montent dans la flûte. */
          <>
            <path d="M27 11 H37 L36 29 C36 33.5 34.2 36 32 36 C29.8 36 28 33.5 28 29 Z" />
            <path d="M32 36 V50" />
            <path d="M26 50.5 H38" />
            <circle className="g-accent-fill g-bubble g-bubble-a" cx="31" cy="30" r="1" />
            <circle className="g-accent-fill g-bubble g-bubble-b" cx="33.2" cy="31" r="0.85" />
            <circle className="g-accent-fill g-bubble g-bubble-c" cx="31.8" cy="31.5" r="0.7" />
          </>
        )}
        {index === 6 && (
          /* Hôtel de luxe (14 novembre 2026) : les fenêtres s'allument, l'une après l'autre. */
          <>
            <path d="M17 50 V19 H47 V50" />
            <path d="M14 19 H50" />
            <path d="M32 19 V13" />
            <path className="g-accent-fill" d="M32 13 L37 14.8 L32 16.6 Z" />
            <rect x="21.5" y="24" width="5" height="5" rx="0.6" />
            <rect className="g-light g-light-a" x="29.5" y="24" width="5" height="5" rx="0.6" />
            <rect x="37.5" y="24" width="5" height="5" rx="0.6" />
            <rect className="g-light g-light-b" x="21.5" y="33" width="5" height="5" rx="0.6" />
            <rect x="29.5" y="33" width="5" height="5" rx="0.6" />
            <rect className="g-light g-light-c" x="37.5" y="33" width="5" height="5" rx="0.6" />
            <path d="M28.5 50 V44 Q32 40.5 35.5 44 V50" />
            <path className="g-soft" d="M8 50 H56" />
          </>
        )}
      </svg>

      <style jsx>{`
        .glyph {
          display: inline-flex;
          margin-bottom: 14px;
          color: var(--text);
        }
        .glyph :global(svg) {
          overflow: hidden;
        }
        .glyph :global(path),
        .glyph :global(circle:not(.g-accent-fill)),
        .glyph :global(rect) {
          stroke: currentColor;
          stroke-width: var(--g-stroke, 1.4);
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .glyph :global(.g-soft) { opacity: 0.4; }
        .glyph :global(.g-accent) { stroke: var(--accent); }
        .glyph :global(.g-accent-fill) { fill: var(--accent); stroke: none; }

        /* Yacht */
        .glyph :global(.g-bob) { animation: gBob 3.2s ease-in-out infinite; }
        .glyph :global(.g-waves) { animation: gWaves 3.2s linear infinite; }
        @keyframes gBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-1.4px) rotate(-1.2deg); } }
        @keyframes gWaves { from { transform: translateX(0); } to { transform: translateX(-16px); } }
        .glyph :global(.g-bob) { transform-box: fill-box; transform-origin: center; }

        /* Villa */
        .glyph :global(.g-light) { fill: var(--accent); fill-opacity: 0; animation: gLight 4s ease-in-out infinite; }
        .glyph :global(.g-light-b) { animation-delay: 1s; }
        .glyph :global(.g-light-c) { animation-delay: 2s; }
        @keyframes gLight { 0%, 15% { fill-opacity: 0; } 35%, 75% { fill-opacity: 0.85; } 100% { fill-opacity: 0; } }

        /* Conciergerie */
        .glyph :global(.g-ring) { transform-box: fill-box; transform-origin: 50% 100%; animation: gRing 2.6s ease-in-out infinite; }
        .glyph :global(.g-ding) { animation: gDing 2.6s ease-in-out infinite; }
        @keyframes gRing { 0%, 60%, 100% { transform: rotate(0deg); } 66% { transform: rotate(-5deg); } 72% { transform: rotate(4deg); } 78% { transform: rotate(-2deg); } }
        @keyframes gDing { 0%, 60% { opacity: 0; } 68%, 88% { opacity: 1; } 100% { opacity: 0; } }

        /* Voyage */
        .glyph :global(.g-dash) { stroke-dasharray: 1.5 4; }

        /* Sécurité */
        .glyph :global(.g-check) { stroke-dasharray: 24; stroke-dashoffset: 24; animation: gCheck 3s ease-in-out infinite; }
        @keyframes gCheck { 0%, 10% { stroke-dashoffset: 24; opacity: 1; } 40%, 80% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }

        /* Événementiel */
        .glyph :global(.g-bubble) { animation: gBubble 2.8s ease-in infinite; transform-box: fill-box; }
        .glyph :global(.g-bubble-b) { animation-delay: 0.9s; }
        .glyph :global(.g-bubble-c) { animation-delay: 1.8s; }
        @keyframes gBubble { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(-16px); opacity: 0; } }

        /* Animations réduites : tout est figé, et visible. */
        .glyph-still :global(*) { animation: none !important; }
        .glyph-still :global(.g-light-a) { fill-opacity: 0.85; }
        .glyph-still :global(.g-check) { stroke-dashoffset: 0; }
        .glyph-still :global(.g-ding) { opacity: 1; }
      `}</style>
    </span>
  )
}
