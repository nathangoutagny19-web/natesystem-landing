'use client'

interface FilterBarProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
  const all = ['Tous', ...categories]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? 'bg-[#ED4245] text-white'
              : 'bg-white/50 text-gray-600 border border-black/[0.08] hover:bg-white/80'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
