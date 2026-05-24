import {
  Award,
  Brain,
  Building,
  Clock,
  Euro,
  FileText,
  Layers,
  Recycle,
  Scale,
  Shield,
  Utensils,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { PlaybookBullet } from '@/lib/playbooks'

const ICONS: Record<string, LucideIcon> = {
  Award,
  Brain,
  Building,
  Clock,
  Euro,
  FileText,
  Layers,
  Recycle,
  Scale,
  Shield,
  Utensils,
  Zap,
}

export default function PlaybookBullets({ bullets }: { bullets: PlaybookBullet[] }) {
  return (
    <section className="pb-section">
      <div className="pb-container">
        <div className="pb-section-head">
          <span className="pb-eyebrow-soft">Ce que vous allez apprendre</span>
          <h2 className="pb-h2" style={{ marginTop: 10 }}>
            Cinq pivots concrets, chiffrés.
          </h2>
        </div>
        <div className="pb-bullets">
          {bullets.map((b) => {
            const Icon = ICONS[b.icon] ?? Zap
            return (
              <div key={b.title} className="pb-bullet">
                <span className="pb-bullet-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div className="pb-bullet-body">
                  <h3 className="pb-h3">{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
