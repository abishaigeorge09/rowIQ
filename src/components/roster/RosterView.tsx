import { useState, useMemo } from 'react'
import { Search, GitCompare } from 'lucide-react'
import { athletes } from '@/data/ergData'
import { filterAthletes, sortAthletes, teamAvgSplit } from '@/utils/calculations'
import type { FilterMode, SortMode } from '@/utils/calculations'
import FilterBar from './FilterBar'
import AthleteCard from './AthleteCard'
import QuickCompare from './QuickCompare'

interface Props {
  onSelectAthlete: (id: string) => void
}

export default function RosterView({ onSelectAthlete }: Props) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<FilterMode>('all')
  const [sort, setSort] = useState<SortMode>('rank')
  const [compareMode, setCompareMode] = useState(false)
  const [compareIds, setCompareIds] = useState<string[]>([])

  const displayed = useMemo(
    () => sortAthletes(filterAthletes(athletes, filter, search), sort),
    [filter, search, sort]
  )

  const toggleCompareId = (id: string) => {
    setCompareIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 5 ? [...prev, id] : prev
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Search + compare bar */}
      <div className="px-4 pt-4 pb-2 flex items-center gap-3 max-w-7xl mx-auto w-full">
        <div className="flex-1 max-w-md relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search athletes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg text-sm text-text placeholder:text-text-muted outline-none focus:border-primary transition"
            style={{
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)',
            }}
          />
        </div>
        <button
          onClick={() => { setCompareMode(!compareMode); if (compareMode) setCompareIds([]) }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
          style={{
            background: compareMode ? '#2563EB' : 'rgba(37,99,235,0.1)',
            color: compareMode ? '#fff' : '#94A3B8',
            border: `1px solid ${compareMode ? '#2563EB' : 'rgba(37,99,235,0.2)'}`,
          }}
        >
          <GitCompare size={14} />
          {compareMode ? `Compare (${compareIds.length})` : 'Compare'}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
          <FilterBar filter={filter} sort={sort} onFilterChange={setFilter} onSortChange={setSort} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayed.map(a => (
              <AthleteCard
                key={a.id}
                athlete={a}
                onClick={() => onSelectAthlete(a.id)}
                compareMode={compareMode}
                selected={compareIds.includes(a.id)}
                onToggle={() => toggleCompareId(a.id)}
              />
            ))}
          </div>

          {displayed.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              No athletes match your search.
            </div>
          )}
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div
        className="py-2.5 px-4 text-center text-xs text-text-muted shrink-0"
        style={{ background: 'rgba(10,15,30,0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(37,99,235,0.15)' }}
      >
        <span className="font-medium text-text-secondary">{athletes.length}</span> Athletes ·{' '}
        <span className="font-medium text-text-secondary">28</span> Sessions ·{' '}
        Aug–Dec 2023 · Team Avg:{' '}
        <span className="font-medium text-text-secondary" style={{ fontFamily: 'var(--font-mono)' }}>
          {teamAvgSplit}s
        </span>
      </div>

      {compareMode && compareIds.length >= 2 && (
        <QuickCompare
          athleteIds={compareIds}
          onClose={() => { setCompareMode(false); setCompareIds([]) }}
        />
      )}
    </div>
  )
}
