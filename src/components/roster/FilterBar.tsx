import type { FilterMode, SortMode } from '@/utils/calculations'
import { ChevronDown } from 'lucide-react'

const FILTERS: { key: FilterMode; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'top10', label: 'Top 10' },
  { key: 'most_improved', label: 'Most Improved' },
  { key: 'declining', label: 'Declining' },
]

const SORTS: { key: SortMode; label: string }[] = [
  { key: 'rank', label: 'By Rank' },
  { key: 'name', label: 'By Name' },
  { key: 'sessions', label: 'By Sessions' },
  { key: 'improvement', label: 'By Improvement' },
]

interface Props {
  filter: FilterMode
  sort: SortMode
  onFilterChange: (f: FilterMode) => void
  onSortChange: (s: SortMode) => void
}

export default function FilterBar({ filter, sort, onFilterChange, onSortChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex gap-1.5 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: filter === f.key ? '#2563EB' : 'rgba(37,99,235,0.1)',
              color: filter === f.key ? '#fff' : '#94A3B8',
              border: `1px solid ${filter === f.key ? '#2563EB' : 'rgba(37,99,235,0.2)'}`,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <select
          value={sort}
          onChange={e => onSortChange(e.target.value as SortMode)}
          className="appearance-none pl-3 pr-8 py-1.5 rounded-lg text-xs font-medium text-text-secondary cursor-pointer"
          style={{
            background: 'rgba(37,99,235,0.1)',
            border: '1px solid rgba(37,99,235,0.2)',
          }}
        >
          {SORTS.map(s => (
            <option key={s.key} value={s.key} style={{ background: '#0A0F1E', color: '#CBD5E1' }}>{s.label}</option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
      </div>
    </div>
  )
}
