import { useMemo } from 'react'
import { athletes, sessions } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { getCategoryColor, formatDateShort, formatSplit } from '@/utils/formatters'

export default function AttendanceGrid() {
  const openAthleteSidebar = useAppStore(s => s.openAthleteSidebar)

  // Sort athletes by session count descending, then by rank
  const sortedAthletes = useMemo(() =>
    [...athletes].sort((a, b) => b.sessionCount - a.sessionCount || a.rank - b.rank).slice(0, 30),
    []
  )

  // Non-triathlon sessions only
  const nonTriSessions = useMemo(() => sessions.filter(s => s.workoutCategory !== 'triathlon'), [])

  // Build lookup: athlete name → session id → split
  const lookup = useMemo(() => {
    const map = new Map<string, Map<string, number>>()
    for (const a of athletes) {
      const sessionMap = new Map<string, number>()
      for (const s of a.sessions) {
        sessionMap.set(s.sessionId, s.split)
      }
      map.set(a.name, sessionMap)
    }
    return map
  }, [])

  return (
    <div
      className="rounded-2xl p-6 overflow-x-auto"
      style={{
        background: 'rgba(27,58,107,0.12)',
        border: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
        Attendance Grid
      </h3>

      <div className="min-w-[800px]">
        {/* Header row */}
        <div className="flex items-end gap-0 mb-2">
          <div className="w-32 shrink-0" />
          <div className="w-10 shrink-0 text-[9px] text-text-muted text-center">#</div>
          {nonTriSessions.map(s => (
            <div
              key={s.id}
              className="flex-1 min-w-[20px] max-w-[28px] text-center"
              title={`${s.date} — ${s.workoutName}`}
            >
              <div
                className="w-2 h-2 rounded-full mx-auto mb-1"
                style={{ background: getCategoryColor(s.workoutCategory) }}
              />
              <span className="text-[7px] text-text-muted leading-none">
                {formatDateShort(s.date).replace('/', '\n')}
              </span>
            </div>
          ))}
        </div>

        {/* Athlete rows */}
        {sortedAthletes.map(a => {
          const sessionMap = lookup.get(a.name)
          return (
            <div key={a.name} className="flex items-center gap-0 py-0.5 group">
              <button
                onClick={() => openAthleteSidebar(a.name)}
                className="w-32 shrink-0 text-xs text-text truncate text-left group-hover:text-primary transition-colors"
              >
                {a.name}
              </button>
              <div className="w-10 shrink-0 text-[9px] text-text-muted text-center">
                {a.sessionCount}
              </div>
              {nonTriSessions.map(s => {
                const split = sessionMap?.get(s.id)
                const present = split !== undefined
                return (
                  <div
                    key={s.id}
                    className="flex-1 min-w-[20px] max-w-[28px] flex items-center justify-center"
                    title={present ? `${formatSplit(split)}s` : 'Absent'}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full transition-opacity"
                      style={{
                        background: present ? getCategoryColor(s.workoutCategory) : 'transparent',
                        border: present ? 'none' : '1px solid rgba(100,116,139,0.3)',
                        opacity: present ? 0.7 : 0.3,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
