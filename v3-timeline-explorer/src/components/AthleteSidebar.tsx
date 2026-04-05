import { useMemo } from 'react'
import { X } from 'lucide-react'
import { athletes } from '@/data/ergData'
import { useAppStore } from '@/store/useAppStore'
import { formatSplit, formatDate } from '@/utils/formatters'
import CategoryBadge from '@/components/shared/CategoryBadge'
import TrendArrow from '@/components/shared/TrendArrow'
import Sparkline from '@/components/shared/Sparkline'

export default function AthleteSidebar() {
  const sidebarAthleteId = useAppStore((s) => s.sidebarAthleteId)
  const closeAthleteSidebar = useAppStore((s) => s.closeAthleteSidebar)
  const selectSession = useAppStore((s) => s.selectSession)
  const setActiveTab = useAppStore((s) => s.setActiveTab)
  const selectedSessionId = useAppStore((s) => s.selectedSessionId)

  const athlete = useMemo(() => {
    if (!sidebarAthleteId) return null
    return athletes.find((a) => a.name === sidebarAthleteId) ?? null
  }, [sidebarAthleteId])

  if (!athlete) return null

  const reversedSessions = [...athlete.sessions].reverse()

  const handleSessionClick = (sessionId: string) => {
    selectSession(sessionId)
    setActiveTab('timeline')
    closeAthleteSidebar()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={closeAthleteSidebar}
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] overflow-y-auto"
        style={{
          backgroundColor: '#0F172A',
          borderLeft: '1px solid rgba(37,99,235,0.25)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Sticky Header */}
        <div
          className="sticky top-0 z-10 p-5 pb-4"
          style={{
            backgroundColor: '#0F172A',
            borderBottom: '1px solid rgba(37,99,235,0.15)',
          }}
        >
          <button
            onClick={closeAthleteSidebar}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors text-text-muted hover:text-text"
          >
            <X size={18} />
          </button>

          <h2
            className="text-2xl font-bold text-text pr-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {athlete.name}
          </h2>

          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold">
              #{athlete.rank}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                athlete.group === 'S'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {athlete.group === 'S' ? 'Starboard' : 'Port'}
            </span>
            <TrendArrow trend={athlete.trend} delta={athlete.trendDelta} />
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Avg Split', value: formatSplit(athlete.avgSplit) + 's' },
              { label: 'Best Split', value: formatSplit(athlete.bestSplit) + 's' },
              { label: 'Sessions', value: String(athlete.sessionCount) },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3 text-center"
                style={{
                  background: 'rgba(27,58,107,0.22)',
                  border: '1px solid rgba(37,99,235,0.25)',
                }}
              >
                <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div
                  className="text-lg font-bold text-text"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Sparkline */}
          {athlete.sparklineData.length >= 2 && (
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(27,58,107,0.22)',
                border: '1px solid rgba(37,99,235,0.25)',
              }}
            >
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-2">
                Split Trend
              </div>
              <Sparkline data={athlete.sparklineData} />
            </div>
          )}

          {/* Session List */}
          <div>
            <div className="text-[10px] text-text-muted uppercase tracking-wider mb-3">
              Session History ({athlete.sessionCount})
            </div>
            <div className="space-y-1.5">
              {reversedSessions.map((s) => {
                const isCurrent = s.sessionId === selectedSessionId
                return (
                  <button
                    key={s.sessionId}
                    onClick={() => handleSessionClick(s.sessionId)}
                    className={`w-full text-left rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white/5 ${
                      isCurrent ? 'ring-1 ring-primary bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs text-text-secondary">
                        {formatDate(s.date)}
                      </span>
                      <CategoryBadge category={s.workoutCategory} />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-text font-medium truncate">
                        {s.workoutName}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className="text-sm text-text"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {formatSplit(s.split)}s
                        </span>
                        <span className="text-[10px] text-text-muted">
                          {s.rank}/{s.of}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
