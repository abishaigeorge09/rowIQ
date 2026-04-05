import { useEffect } from 'react'
import { X, TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { sessions } from '../data/ergData'

const CATEGORY_COLORS = {
  steady_state: '#2563EB',
  intervals: '#8B5CF6',
  threshold: '#F59E0B',
  triathlon: '#10B981',
}

const CATEGORY_LABELS = {
  steady_state: 'SS',
  intervals: 'INT',
  threshold: 'THR',
  triathlon: 'TRI',
}

function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

function SidebarTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null
  const d = payload[0].payload
  return (
    <div className="glass-card p-2.5 text-xs">
      <div className="font-mono text-white">{d.dateLabel}</div>
      <div className="text-[#94A3B8] mb-1">{d.workout}</div>
      <div className="font-mono text-white">{d.split}s <span className="text-[#64748B]">@ {d.spm} spm</span></div>
      <div className="text-[#94A3B8]">{ordinal(d.rank)} of {d.of}</div>
    </div>
  )
}

export default function AthleteSidebar({ athlete, onClose }) {
  useEffect(() => {
    if (athlete) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [athlete])

  if (!athlete) return null

  const validHistory = athlete.history.filter(h => !h.dnf && h.split !== null)

  // Chart data
  const chartData = validHistory.map(h => ({
    date: h.date,
    dateLabel: new Date(h.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    split: h.split,
    spm: h.spm,
    rank: h.rank,
    of: h.of,
    workout: h.workout,
    category: h.category,
  }))

  // Team avg for reference line
  const teamAvgForAthleteSessionDates = sessions
    .filter(s => s.teamAvg !== null && validHistory.some(h => h.date === s.date))
  const overallTeamAvg = teamAvgForAthleteSessionDates.length
    ? (teamAvgForAthleteSessionDates.reduce((sum, s) => sum + s.teamAvg, 0) / teamAvgForAthleteSessionDates.length)
    : null

  const splits = validHistory.map(h => h.split)
  const yMin = splits.length ? Math.floor(Math.min(...splits) - 2) : 30
  const yMax = splits.length ? Math.ceil(Math.max(...splits) + 2) : 55

  const trendConfig = {
    improving: { icon: TrendingDown, color: '#10B981', label: 'Improving' },
    declining: { icon: TrendingUp, color: '#EF4444', label: 'Declining' },
    stable: { icon: Minus, color: '#F59E0B', label: 'Stable' },
  }
  const tc = trendConfig[athlete.trend] || trendConfig.stable
  const TrendIcon = tc.icon

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '450px', zIndex: 50,
        background: '#0A0F1E', borderLeft: '1px solid rgba(37,99,235,0.2)', overflowY: 'auto',
      }}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">{athlete.name}</h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-mono text-sm bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 rounded-full px-2.5 py-0.5">
                  #{athlete.rank}
                </span>
                <span className="text-sm text-[#94A3B8]">{athlete.primaryGroup}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#64748B] hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Avg Split', value: athlete.avgSplit + 's' },
              { label: 'Best Split', value: athlete.bestSplit + 's', color: '#10B981' },
              { label: 'Sessions', value: athlete.totalSessions },
              { label: 'Trend', value: (athlete.trendDelta > 0 ? '+' : '') + athlete.trendDelta + 's', color: tc.color },
            ].map(s => (
              <div key={s.label} className="glass-card p-3 text-center">
                <div className="text-[9px] uppercase tracking-wider text-[#64748B] mb-1">{s.label}</div>
                <div className="font-mono text-sm font-semibold" style={{ color: s.color || 'white' }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Trend indicator */}
          {athlete.totalSessions >= 6 && (
            <div className="flex items-center gap-2 mb-6 glass-card p-3">
              <TrendIcon size={16} style={{ color: tc.color }} />
              <span className="text-sm" style={{ color: tc.color }}>
                {tc.label}: {Math.abs(athlete.trendDelta)}s {athlete.trend === 'improving' ? 'faster' : athlete.trend === 'declining' ? 'slower' : 'change'} (first 3 vs last 3 sessions)
              </span>
            </div>
          )}

          {/* Split Progression Chart */}
          <div className="mb-6">
            <h3 className="font-serif text-sm font-bold text-white mb-3">Split Progression</h3>
            <div className="glass-card p-3">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                  <XAxis
                    dataKey="dateLabel"
                    tick={{ fill: '#64748B', fontSize: 9, fontFamily: "'JetBrains Mono', monospace" }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(37,99,235,0.2)' }}
                    interval={Math.max(0, Math.floor(chartData.length / 6) - 1)}
                  />
                  <YAxis
                    reversed
                    domain={[yMin, yMax]}
                    tick={{ fill: '#64748B', fontSize: 9, fontFamily: "'JetBrains Mono', monospace" }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(37,99,235,0.2)' }}
                    tickFormatter={v => v + 's'}
                    width={40}
                  />
                  <Tooltip content={<SidebarTooltip />} />
                  {overallTeamAvg && (
                    <ReferenceLine
                      y={overallTeamAvg}
                      stroke="#64748B"
                      strokeDasharray="4 4"
                      label={{ value: 'Team Avg', fill: '#64748B', fontSize: 9, position: 'right' }}
                    />
                  )}
                  <Line
                    type="monotone"
                    dataKey="split"
                    stroke="#2563EB"
                    strokeWidth={2}
                    dot={(props) => {
                      const { cx, cy, payload } = props
                      return (
                        <circle
                          key={payload.date}
                          cx={cx}
                          cy={cy}
                          r={4}
                          fill={CATEGORY_COLORS[payload.category] || '#2563EB'}
                          stroke="#0A0F1E"
                          strokeWidth={2}
                        />
                      )
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Session History */}
          <h3 className="font-serif text-sm font-bold text-white mb-3">Session History</h3>
          <div className="space-y-2">
            {[...athlete.history].reverse().map((h, i) => (
              <div key={h.date + i} className="glass-card p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: CATEGORY_COLORS[h.category],
                      background: (CATEGORY_COLORS[h.category] || '#2563EB') + '20',
                    }}
                  >
                    {CATEGORY_LABELS[h.category] || 'SS'}
                  </div>
                  <div>
                    <div className="text-xs text-white">
                      {new Date(h.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-[10px] text-[#64748B] truncate max-w-[140px]">{h.workout}</div>
                  </div>
                </div>
                <div className="text-right">
                  {h.dnf ? (
                    <div className="text-xs text-[#EF4444] font-mono">DNF</div>
                  ) : (
                    <>
                      <div className="font-mono text-sm text-white">{h.split}s</div>
                      <div className="text-[10px] text-[#64748B] font-mono">
                        {h.spm} spm &middot; {ordinal(h.rank)} of {h.of}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
