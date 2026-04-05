import { useState, useMemo } from 'react'
import { Search, GitCompare } from 'lucide-react'
import { athletes } from '@/data/ergData'
import { filterAthletes, sortAthletes, teamAvgSplit } from '@/utils/calculations'
import type { FilterMode, SortMode } from '@/utils/calculations'
import AthleteCard from './AthleteCard'
import QuickCompare from './QuickCompare'
import { ChevronDown } from 'lucide-react'

const FILTERS: { key: FilterMode; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'top10', label: 'Top 10' },
  { key: 'most_improved', label: 'Improved' },
  { key: 'declining', label: 'Declining' },
]

const SORTS: { key: SortMode; label: string }[] = [
  { key: 'rank', label: 'Rank' },
  { key: 'name', label: 'Name' },
  { key: 'sessions', label: 'Sessions' },
  { key: 'improvement', label: 'Improvement' },
]

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
      {/* Toolbar: search + filters + sort + compare */}
      <div
        className="flex items-center gap-2 sm:gap-4 flex-wrap shrink-0"
        style={{
          padding: '0.75rem 0.75rem',
          borderBottom: '1px solid rgba(37,99,235,0.08)',
        }}
      >
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute top-1/2 -translate-y-1/2 text-text-muted" style={{ left: '0.75rem' }} />
          <input
            type="text"
            placeholder="Search athletes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-lg text-sm text-text placeholder:text-text-muted outline-none transition"
            style={{
              paddingLeft: '2.25rem',
              paddingRight: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              background: 'rgba(37,99,235,0.06)',
              border: '1px solid rgba(37,99,235,0.15)',
            }}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-6 hidden sm:block" style={{ background: 'rgba(37,99,235,0.2)' }} />

        {/* Filter pills */}
        <div className="flex gap-1.5">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: filter === f.key ? 'rgba(37,99,235,0.2)' : 'transparent',
                color: filter === f.key ? '#fff' : '#64748B',
                border: filter === f.key ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-w-4" />

        {/* Sort dropdown */}
        <div className="relative">
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortMode)}
            className="appearance-none pl-3 pr-8 py-2 rounded-lg text-xs font-medium text-text-secondary cursor-pointer"
            style={{
              background: 'rgba(37,99,235,0.06)',
              border: '1px solid rgba(37,99,235,0.15)',
            }}
          >
            {SORTS.map(s => (
              <option key={s.key} value={s.key} style={{ background: '#0A0F1E', color: '#CBD5E1' }}>
                {s.label}
              </option>
            ))}
          </select>
          <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>

        {/* Compare toggle */}
        <button
          onClick={() => { setCompareMode(!compareMode); if (compareMode) setCompareIds([]) }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all"
          style={{
            background: compareMode ? '#2563EB' : 'rgba(37,99,235,0.06)',
            color: compareMode ? '#fff' : '#94A3B8',
            border: `1px solid ${compareMode ? '#2563EB' : 'rgba(37,99,235,0.15)'}`,
          }}
        >
          <GitCompare size={14} />
          {compareMode ? `Compare (${compareIds.length})` : 'Compare'}
        </button>
      </div>

      {/* Card grid */}
      <div className="flex-1 overflow-y-auto py-4 px-3 sm:px-6 lg:px-10">
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

      {/* Bottom bar */}
      <div
        className="py-2 text-center text-xs text-text-muted shrink-0"
        style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem', background: 'rgba(10,15,30,0.9)', borderTop: '1px solid rgba(37,99,235,0.1)' }}
      >
        <span className="font-medium text-text-secondary">{displayed.length}</span>
        {displayed.length !== athletes.length && ` of ${athletes.length}`} Athletes ·{' '}
        <span className="font-medium text-text-secondary">28</span> Sessions ·{' '}
        Team Avg:{' '}
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
