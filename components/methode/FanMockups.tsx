/**
 * Éventail de mockups (vrais dashboards) — façon OpsKings « single source of truth »,
 * sauce NateSystem. 3 cartes navigateur en éventail, contenues dans le bloc.
 * Utilisé pour illustrer la partie « Système sur-mesure » sur /methode.
 */
const CARDS = [
  { img: 'systems/sys1', cls: 'fan-back-l' },
  { img: 'systems/sys11', cls: 'fan-back-r' },
  { img: 'systems/sys9', cls: 'fan-front' },
]

export default function FanMockups() {
  return (
    <div className="fan" aria-hidden="true">
      {CARDS.map((c) => (
        <div key={c.cls} className={`fan-card ${c.cls}`}>
          <div className="fan-bar"><i /><i /><i /></div>
          <div className="fan-shot" style={{ backgroundImage: `url(/realisations/${c.img}.jpg)` }} />
        </div>
      ))}

      <style jsx>{`
        .fan { position: relative; width: 100%; aspect-ratio: 16 / 11; }
        .fan-card {
          position: absolute;
          width: 74%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-card);
          box-shadow: 0 26px 60px -28px rgba(0, 0, 0, 0.55);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fan-bar {
          height: 16px; display: flex; align-items: center; gap: 3px; padding: 0 7px;
          background: var(--bg-elevated); border-bottom: 1px solid var(--border);
        }
        .fan-bar i { width: 4.5px; height: 4.5px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; }
        .fan-shot {
          aspect-ratio: 16 / 9;
          background-color: #fff;
          background-size: cover;
          background-position: top center;
        }
        .fan-back-l { left: 0; top: 4%; z-index: 1; transform: rotate(-9deg); opacity: 0.92; }
        .fan-back-r { right: 0; top: 1%; z-index: 2; transform: rotate(7deg); }
        .fan-front { left: 50%; bottom: 0; z-index: 3; transform: translateX(-50%) rotate(-2deg); }
        .fan:hover .fan-back-l { transform: rotate(-12deg) translateX(-4px); }
        .fan:hover .fan-back-r { transform: rotate(10deg) translateX(4px); }
        .fan:hover .fan-front { transform: translateX(-50%) translateY(-4px) rotate(-2deg); }
      `}</style>
    </div>
  )
}
