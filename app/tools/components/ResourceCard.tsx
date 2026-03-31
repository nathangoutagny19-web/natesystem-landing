'use client'

import { Resource, ResourceCategory, ResourceType } from '@/lib/resources'
import { useLang } from '@/components/providers/LangProvider'

const categoryColors: Record<ResourceCategory, string> = {
  Marketing: 'bg-pink-50 text-pink-600',
  Commercial: 'bg-emerald-50 text-emerald-600',
  'RH & Ops': 'bg-blue-50 text-blue-600',
  Direction: 'bg-indigo-50 text-indigo-600',
  Copywriting: 'bg-purple-50 text-purple-600',
  SEO: 'bg-cyan-50 text-cyan-600',
}

const typeColors: Record<ResourceType, string> = {
  SKILL: 'bg-amber-50 text-amber-700',
  PROMPT: 'bg-violet-50 text-violet-700',
  GUIDE: 'bg-lime-50 text-lime-700',
}

export default function ResourceCard({ resource, onDownload }: { resource: Resource; onDownload: (r: Resource) => void }) {
  const { t } = useLang()
  return (
    <div className="tools-card group hover:scale-[1.01] hover:shadow-lg transition-all duration-200">
      {/* Top row: category + type badges */}
      <div className="flex items-center justify-between gap-2">
        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[resource.category]}`}>
          {resource.category}
        </span>
        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[resource.type]}`}>
          {resource.type}
        </span>
      </div>

      {/* Special badge */}
      {resource.badge && (
        <div className="mt-2">
          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide text-white ${resource.badgeColor}`}>
            {resource.badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-black mt-3 leading-tight" style={{ color: 'var(--text)' }}>
        {resource.title}
      </h3>

      {/* Description */}
      <p className="text-sm font-light mt-1 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
        {resource.desc}
      </p>

      {/* Bullets */}
      <ul className="mt-3 space-y-1.5">
        {resource.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED4245]" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {resource.tags.map((tag, i) => (
          <span key={i} className="tools-tag text-xs px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Download button */}
      <button
        onClick={() => onDownload(resource)}
        className="mt-4 w-full bg-[#ED4245] text-white font-semibold py-3 rounded-xl hover:bg-[#d63638] transition-colors"
      >
        {t('tools.download')}
      </button>
    </div>
  )
}
