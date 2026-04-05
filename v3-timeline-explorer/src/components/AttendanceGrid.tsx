import { useMemo, useState } from 'react'
import { sessions, athletes } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatDateShort, getCategoryColor, formatSplit } from '@/utils/formatters'

export default function AttendanceGrid() {
  const openAthleteSidebar = useAppStore((s) => s.openAthleteSidebar)
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    text: string
  } | null>(null)

  const nonTriSessions = useMemo(
    () => sessions.filter((s) => s.workoutCategory !== 'triathlon'),
    []
  )

  const topAthletes = useMemo(() => {
    return [...athletes].sort((a, b) => b.sessionCount - a.sessionCount).slice(0, 30)
  }, [])

  // Build attendance map: athleteName -> sessionId -> split
  const attendanceMap = useMemo(() => {
    const map: Record<string, Record<string, number>> = {}
    for (const a of topAthletes) {
      map[a.name] = {}
      for (const s of a.sessions) {
        map[a.name][s.sessionId] = s.split
      }
    }
    return map
  }, [topAthletes])

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
        Attendance Grid
      </h2>

      <div className="overflow-x-auto relative">
        {/* Tooltip */}
        {tooltip && (
          <div
            className="fixed z-50 px-2.5 py-1.5 rounded-lg text-xs pointer-events-none"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 28,
              backgroundColor: '#0F172A',
              border: '1px solid rgba(37,99,235,0.3)',
              color: '#CBD5E1',
            }}
          >
            {tooltip.text}
          </div>
        )}

        <table className="border-collapse">
          {/* Column headers */}
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-surface px-3 py-2 text-left text-xs text-text-muted font-medium min-w-[130px]">
                Athlete
              </th>
              {nonTriSessions.map((s) => (
                <th
                  key={s.id}
                  className="px-1 py-2 text-center min-w-[32px]"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="block w-2 h-2 rounded-full"
                      style={{ backgroundColor: getCategoryColor(s.workoutCategory) }}
                    />
                    <span className="text-[9px] text-text-muted leading-none whitespace-nowrap">
                      {formatDateShort(s.date)}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {topAthletes.map((a) => (
              <tr key={a.id} className="hover:bg-white/5">
                <td className="sticky left-0 z-10 bg-surface px-3 py-1.5">
                  <button
                    onClick={() => openAthleteSidebar(a.name)}
                    className="text-xs font-medium text-text hover:text-primary transition-colors text-left truncate max-w-[120px]"
                  >
                    {a.name}
                  </button>
                </td>
                {nonTriSessions.map((s) => {
                  const split = attendanceMap[a.name]?.[s.id]
                  const present = split !== undefined

                  return (
                    <td
                      key={s.id}
                      className="px-1 py-1.5 text-center"
                      onMouseEnter={(e) => {
                        if (present) {
                          setTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            text: `${a.name}: ${formatSplit(split)}s`,
                          })
                        }
                      }}
                      onMouseMove={(e) => {
                        if (present && tooltip) {
                          setTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            text: `${a.name}: ${formatSplit(split)}s`,
                          })
                        }
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {present ? (
                        <span
                          className="inline-block w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: getCategoryColor(s.workoutCategory),
                            opacity: 0.8,
                          }}
                        />
                      ) : (
                        <span className="inline-block w-3 h-3 rounded-full border border-white/10" />
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
