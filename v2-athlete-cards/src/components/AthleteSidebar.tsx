import { X, Trophy, Hash, Calendar, TrendingUp } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { athletes, sessions } from '@/data/ergData'
import { formatSplit } from '@/utils/formatters'
import Sparkline from '@/components/roster/Sparkline'
import TrendArrow from '@/components/shared/TrendArrow'
import CategoryBadge from '@/components/shared/CategoryBadge'

export default function AthleteSidebar() {
  const { sidebarAthleteId, closeAthleteSidebar, selectSession, setActiveTab, selectedSessionId } = useAppStore()

  if (!sidebarAthleteId) return null

  const athlete = athletes.find(a => a.name === sidebarAthleteId)
  if (!athlete) return null

  const handleSessionClick = (sessionId: string) => {
    selectSession(sessionId)
    setActiveTab('timeline')
    closeAthleteSidebar()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={closeAthleteSidebar}
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] overflow-y-auto"
        style={{
          background: '#0F172A',
          borderLeft: '1px solid rgba(37,99,235,0.2)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-4 flex items-start justify-between" style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)' }}>
          <div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              {athlete.name}
            </h2>
            <div className="flex items-center gap-3 mt-1 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Hash size={12} /> Rank {athlete.rank}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px]" style={{
                background: athlete.group === 'S' ? 'rgba(59,130,246,0.15)' : 'rgba(139,92,246,0.15)',
                color: athlete.group === 'S' ? '#3B82F6' : '#8B5CF6',
              }}>
                {athlete.group === 'S' ? 'Starboard' : 'Port'}
              </span>
              <TrendArrow trend={athlete.trend} delta={athlete.trendDelta} />
            </div>
          </div>
          <button
            onClick={closeAthleteSidebar}
            className="p-1.5 rounded-lg text-text-muted hover:text-text transition-colors"
            style={{ background: 'rgba(37,99,235,0.08)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 px-4 pt-2 pb-4">
          {[
            { label: 'Avg Split', value: `${formatSplit(athlete.avgSplit)}s`, icon: TrendingUp },
            { label: 'Best Split', value: `${formatSplit(athlete.bestSplit)}s`, icon: Trophy },
            { label: 'Sessions', value: `${athlete.sessionCount}`, icon: Calendar },
          ].map(s => (
            <div
              key={s.label}
              className="rounded-xl p-3 text-center"
              style={{ background: 'rgba(27,58,107,0.12)', border: '1px solid rgba(37,99,235,0.1)' }}
            >
              <s.icon size={14} className="mx-auto text-text-muted mb-1" />
              <div className="font-mono text-lg font-bold text-text">{s.value}</div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Sparkline */}
        <div className="px-4 mb-4">
          <div
            className="rounded-xl p-3"
            style={{ background: 'rgba(27,58,107,0.12)', border: '1px solid rgba(37,99,235,0.1)' }}
          >
            <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2">Split Progression</div>
            <Sparkline data={athlete.sparklineData} />
          </div>
        </div>

        {/* Session List */}
        <div className="px-4 pb-6">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2">
            Session History ({athlete.sessionCount})
          </div>
          <div className="space-y-1">
            {[...athlete.sessions].reverse().map(s => {
              const isCurrent = s.sessionId === selectedSessionId
              return (
                <button
                  key={s.sessionId}
                  onClick={() => handleSessionClick(s.sessionId)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors"
                  style={{
                    background: isCurrent ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.04)',
                    border: isCurrent ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-text-secondary">
                      {new Date(s.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs text-text-muted truncate">{s.workoutName}</div>
                  </div>
                  <CategoryBadge category={s.workoutCategory} />
                  <div className="text-right shrink-0">
                    <div className="font-mono text-sm font-medium text-text">{formatSplit(s.split)}s</div>
                    <div className="text-[10px] text-text-muted">
                      #{s.rank}/{s.of}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
