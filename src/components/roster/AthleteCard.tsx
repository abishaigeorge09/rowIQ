import { useMemo } from 'react'
import type { Athlete } from '@/data/ergData'
import { formatSplit, formatDate } from '@/utils/formatters'
import TrendArrow from '@/components/shared/TrendArrow'
import Sparkline from './Sparkline'

function getRankStripe(rank: number): string {
  if (rank === 1) return 'bg-gradient-to-r from-amber-400 to-yellow-500'
  if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400'
  if (rank === 3) return 'bg-gradient-to-r from-amber-600 to-amber-700'
  if (rank <= 10) return 'bg-gradient-to-r from-[#2563EB] to-[#1E40AF]'
  return 'bg-gradient-to-r from-[#1B3A6B] to-[#0F172A]'
}

function getRankBg(rank: number): string {
  if (rank === 1) return 'rgba(251,191,36,0.15)'
  if (rank === 2) return 'rgba(209,213,219,0.1)'
  if (rank === 3) return 'rgba(217,119,6,0.1)'
  return 'transparent'
}

interface Props {
  athlete: Athlete
  onClick: () => void
  compareMode?: boolean
  selected?: boolean
  onToggle?: () => void
}

export default function AthleteCard({ athlete, onClick, compareMode, selected, onToggle }: Props) {
  const lastSession = athlete.sessions[athlete.sessions.length - 1]

  const recentForm = useMemo(() => {
    const s = athlete.sessions
    const last3 = s.slice(-3)
    return last3.map((sess, i) => {
      const prev = i > 0 ? last3[i - 1] : (s.length > last3.length ? s[s.length - last3.length - 1] : null)
      return {
        split: sess.split,
        date: sess.date,
        improved: prev ? sess.split < prev.split : false,
      }
    })
  }, [athlete])

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,99,235,0.2)]"
      style={{
        background: 'rgba(27,58,107,0.12)',
        backdropFilter: 'blur(20px)',
        border: selected ? '1.5px solid #2563EB' : '1px solid rgba(37,99,235,0.25)',
      }}
      onClick={compareMode ? onToggle : onClick}
    >
      {/* Rank stripe */}
      <div className={`h-1.5 ${getRankStripe(athlete.rank)}`} />

      <div className="p-4 flex flex-col gap-3">
        {/* Header: Rank badge + Name + Group + Trend */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0"
            style={{
              fontFamily: 'var(--font-display)',
              background: getRankBg(athlete.rank),
              color: athlete.rank <= 3 ? '#FCD34D' : 'rgba(203,213,225,0.5)',
            }}
          >
            {athlete.rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3
                className="text-lg font-bold text-text truncate"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {athlete.name}
              </h3>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                {athlete.group}
              </span>
            </div>
            <TrendArrow trend={athlete.trend} delta={athlete.trendDelta} />
          </div>
          {compareMode && (
            <div className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center ${selected ? 'border-primary bg-primary' : 'border-text-muted'}`}>
              {selected && <span className="text-white text-xs">✓</span>}
            </div>
          )}
        </div>

        {/* Three stat columns */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-xl font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>
              {formatSplit(athlete.avgSplit)}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-muted">AVG</div>
          </div>
          <div>
            <div className="text-xl font-bold text-good" style={{ fontFamily: 'var(--font-mono)' }}>
              {formatSplit(athlete.bestSplit)}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-muted">BEST</div>
          </div>
          <div>
            <div className="text-xl font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>
              {athlete.sessionCount}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-muted">SESSIONS</div>
          </div>
        </div>

        {/* Sparkline */}
        <Sparkline data={athlete.sparklineData} />

        {/* Recent form pills */}
        <div className="flex gap-1.5">
          {recentForm.map((f, i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-[11px]"
              style={{
                fontFamily: 'var(--font-mono)',
                background: f.improved ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                border: `1px solid ${f.improved ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
              }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${f.improved ? 'bg-good' : 'bg-bad'}`} />
              <span className="text-text-secondary">{formatSplit(f.split)}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-border-card">
          <span className="text-xs text-primary font-medium">View Profile →</span>
          <span className="text-[10px] text-text-muted">
            Last: {lastSession ? formatDate(lastSession.date) : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  )
}
