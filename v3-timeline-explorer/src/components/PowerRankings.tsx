import { useState, useMemo } from 'react'
import { athletes, sessions } from '@/data/ergData'
import type { Athlete } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatSplit } from '@/utils/formatters'
import TrendArrow from '@/components/shared/TrendArrow'

type Filter = 'all' | 'last5' | 'steady_state' | 'intervals' | 'threshold'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Sessions' },
  { key: 'last5', label: 'Last 5' },
  { key: 'steady_state', label: 'Steady State' },
  { key: 'intervals', label: 'Intervals' },
  { key: 'threshold', label: 'Threshold' },
]

export default function PowerRankings() {
  const [filter, setFilter] = useState<Filter>('all')
  const openAthleteSidebar = useAppStore((s) => s.openAthleteSidebar)

  const ranked = useMemo(() => {
    // Get the last 5 non-triathlon session IDs
    const nonTriSessions = sessions.filter(
      (s) => s.workoutCategory !== 'triathlon'
    )
    const last5Ids = nonTriSessions.slice(-5).map((s) => s.id)

    const scored: { athlete: Athlete; avg: number; count: number }[] = []

    for (const a of athletes) {
      let relevantSessions = a.sessions.filter(
        (s) => s.workoutCategory !== 'triathlon'
      )

      if (filter === 'last5') {
        relevantSessions = relevantSessions.filter((s) =>
          last5Ids.includes(s.sessionId)
        )
      } else if (
        filter === 'steady_state' ||
        filter === 'intervals' ||
        filter === 'threshold'
      ) {
        relevantSessions = relevantSessions.filter(
          (s) => s.workoutCategory === filter
        )
      }

      if (relevantSessions.length === 0) continue

      const avg =
        relevantSessions.reduce((sum, s) => sum + s.split, 0) /
        relevantSessions.length

      scored.push({ athlete: a, avg, count: relevantSessions.length })
    }

    scored.sort((a, b) => a.avg - b.avg)
    return scored.slice(0, 20)
  }, [filter])

  const bestAvg = ranked[0]?.avg ?? 0
  const worstAvg = ranked[ranked.length - 1]?.avg ?? 0
  const range = worstAvg - bestAvg || 1

  const medal = (rank: number) => {
    if (rank === 1) return '\uD83E\uDD47'
    if (rank === 2) return '\uD83E\uDD48'
    if (rank === 3) return '\uD83E\uDD49'
    return `#${rank}`
  }

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(27,58,107,0.22)',
        border: '1px solid rgba(37,99,235,0.25)',
      }}
    >
      <h2
        className="text-lg font-semibold text-text mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Power Rankings — Top 20
      </h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === f.key
                ? 'bg-primary text-white'
                : 'bg-white/5 text-text-secondary hover:bg-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Rankings */}
      <div className="space-y-1.5">
        {ranked.map((entry, i) => {
          const rank = i + 1
          const barWidth = ((worstAvg - entry.avg) / range) * 100

          return (
            <div
              key={entry.athlete.id}
              className="relative flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              {/* Background bar */}
              <div
                className="absolute inset-y-0 left-0 rounded-xl opacity-10"
                style={{
                  width: `${Math.max(barWidth, 2)}%`,
                  backgroundColor:
                    rank <= 3 ? '#10B981' : rank <= 10 ? '#3B82F6' : '#64748B',
                }}
              />

              {/* Rank */}
              <span className="relative w-8 text-center text-sm font-bold text-text shrink-0">
                {medal(rank)}
              </span>

              {/* Name */}
              <button
                onClick={() => openAthleteSidebar(entry.athlete.name)}
                className="relative text-sm font-medium text-text hover:text-primary transition-colors text-left min-w-[120px]"
              >
                {entry.athlete.name}
              </button>

              {/* Group badge */}
              <span
                className={`relative shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                  entry.athlete.group === 'S'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {entry.athlete.group === 'S' ? 'Star' : 'Port'}
              </span>

              {/* Avg split */}
              <span
                className="relative text-sm text-text tabular-nums ml-auto"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {formatSplit(entry.avg)}s
              </span>

              {/* Session count */}
              <span className="relative text-xs text-text-muted w-12 text-right">
                {entry.count} sess
              </span>

              {/* Trend */}
              <span className="relative shrink-0">
                <TrendArrow
                  trend={entry.athlete.trend}
                  delta={entry.athlete.trendDelta}
                />
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
