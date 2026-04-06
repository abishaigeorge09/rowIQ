import { useState, useMemo } from 'react'
import { athletes, sessions } from '@/data/ergData'
import { useAppStore, type RankFilter } from '@/store/useAppStore'
import { formatSplit } from '@/utils/formatters'
import TrendArrow from '@/components/shared/TrendArrow'

const FILTERS: { id: RankFilter; label: string }[] = [
  { id: 'all', label: 'All Sessions' },
  { id: 'last5', label: 'Last 5' },
  { id: 'steady_state', label: 'Steady State' },
  { id: 'intervals', label: 'Intervals' },
  { id: 'threshold', label: 'Threshold' },
]

export default function PowerRankings() {
  const openAthleteSidebar = useAppStore(s => s.openAthleteSidebar)
  const [filter, setFilter] = useState<RankFilter>('all')

  const ranked = useMemo(() => {
    if (filter === 'all') {
      return athletes.slice(0, 20)
    }

    if (filter === 'last5') {
      const last5Ids = new Set(sessions.filter(s => s.workoutCategory !== 'triathlon').slice(-5).map(s => s.id))
      return athletes
        .map(a => {
          const filtered = a.sessions.filter(s => last5Ids.has(s.sessionId))
          if (filtered.length === 0) return null
          const avg = filtered.reduce((sum, s) => sum + s.split, 0) / filtered.length
          return { ...a, avgSplit: Math.round(avg * 10) / 10, sessionCount: filtered.length }
        })
        .filter(Boolean)
        .sort((a, b) => a!.avgSplit - b!.avgSplit)
        .slice(0, 20) as typeof athletes
    }

    return athletes
      .map(a => {
        const filtered = a.sessions.filter(s => s.workoutCategory === filter)
        if (filtered.length === 0) return null
        const avg = filtered.reduce((sum, s) => sum + s.split, 0) / filtered.length
        return { ...a, avgSplit: Math.round(avg * 10) / 10, sessionCount: filtered.length }
      })
      .filter(Boolean)
      .sort((a, b) => a!.avgSplit - b!.avgSplit)
      .slice(0, 20) as typeof athletes
  }, [filter])

  const maxSplit = ranked.length > 0 ? ranked[ranked.length - 1].avgSplit : 50
  const minSplit = ranked.length > 0 ? ranked[0].avgSplit : 30

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(27,58,107,0.12)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
          Power Rankings — Top 20
        </h3>
        <div className="flex gap-1">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="px-2.5 py-1 rounded text-[10px] font-medium uppercase tracking-wider transition-colors"
              style={{
                background: filter === f.id ? '#2563EB' : 'rgba(37,99,235,0.08)',
                color: filter === f.id ? '#fff' : '#94A3B8',
                border: `1px solid ${filter === f.id ? '#2563EB' : 'rgba(37,99,235,0.15)'}`,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        {ranked.map((a, i) => {
          const range = maxSplit - minSplit || 1
          const barPct = ((maxSplit - a.avgSplit) / range) * 80 + 20

          return (
            <button
              key={a.name}
              onClick={() => openAthleteSidebar(a.name)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg group relative transition-colors"
              style={{ minHeight: 40 }}
            >
              {/* Bar */}
              <div
                className="absolute inset-0 rounded-lg transition-all"
                style={{
                  width: `${barPct}%`,
                  background: a.group === 'A' ? '#3B82F6' : '#8B5CF6',
                  opacity: 0.08,
                }}
              />

              <span className="text-xs text-text-muted w-6 text-right shrink-0 relative z-10">
                {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
              </span>

              <span className="text-sm font-medium text-text group-hover:text-primary flex-1 relative z-10">
                {a.name}
              </span>

              <span className="text-[10px] px-1.5 py-0.5 rounded relative z-10" style={{
                background: a.group === 'A' ? 'rgba(59,130,246,0.15)' : 'rgba(139,92,246,0.15)',
                color: a.group === 'A' ? '#3B82F6' : '#8B5CF6',
              }}>
                {a.group === 'A' ? 'Grp A' : 'Group B'}
              </span>

              <span className="font-mono text-sm font-medium text-text w-14 text-right shrink-0 relative z-10">
                {formatSplit(a.avgSplit)}s
              </span>

              <span className="text-xs text-text-muted w-8 text-right shrink-0 relative z-10">
                {a.sessionCount}s
              </span>

              <span className="relative z-10">
                <TrendArrow trend={a.trend} />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
