import { useMemo } from 'react'
import type { Athlete } from '@/data/ergData'
import { teamAvgSplit } from '@/utils/calculations'
import { formatSplit, formatDate, getCategoryColor, getCategoryLabel } from '@/utils/formatters'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts'

function CategoryDot(props: any) {
  const { cx, cy, payload } = props
  const color = getCategoryColor(payload.workoutCategory)
  return <circle cx={cx} cy={cy} r={4} fill={color} stroke="#0A0F1E" strokeWidth={1.5} />
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-lg p-3 text-xs" style={{ background: '#0A0F1E', border: '1px solid rgba(37,99,235,0.3)' }}>
      <div className="font-medium text-text mb-1">{formatDate(d.date)}</div>
      <div className="text-text-secondary">{d.workoutName}</div>
      <div className="mt-1 flex gap-3">
        <span>Split: <span className="font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>{formatSplit(d.split)}</span></span>
        <span>SPM: <span className="font-bold text-text" style={{ fontFamily: 'var(--font-mono)' }}>{d.spm}</span></span>
        <span>Rank: <span className="font-bold text-text">#{d.rank}/{d.of}</span></span>
      </div>
    </div>
  )
}

export default function OverviewTab({ athlete }: { athlete: Athlete }) {
  const chartData = useMemo(() =>
    athlete.sessions.map(s => ({
      date: s.date,
      split: s.split,
      spm: s.spm,
      rank: s.rank,
      of: s.of,
      workoutName: s.workoutName,
      workoutCategory: s.workoutCategory,
    })),
    [athlete]
  )

  // Rolling 3-session average
  const rollingData = useMemo(() =>
    chartData.map((d, i) => {
      if (i < 2) return { ...d, rolling: null }
      const avg = (chartData[i].split + chartData[i - 1].split + chartData[i - 2].split) / 3
      return { ...d, rolling: Math.round(avg * 10) / 10 }
    }),
    [chartData]
  )

  // Personal records
  const bestSession = athlete.sessions.reduce((best, s) => s.split < best.split ? s : best)
  const cats = Object.entries(athlete.categoryBreakdown).filter(([, v]) => v.sessions > 0)

  return (
    <div className="flex flex-col gap-6">
      {/* Split progression chart */}
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3">Split Progression</h3>
        <div className="h-64 rounded-xl p-3" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rollingData} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
              <XAxis dataKey="date" tickFormatter={d => formatDate(d)} tick={{ fill: '#64748B', fontSize: 10 }} />
              <YAxis
                reversed
                domain={['dataMin - 2', 'dataMax + 2']}
                tick={{ fill: '#64748B', fontSize: 10 }}
                tickFormatter={v => `${v}s`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                y={teamAvgSplit}
                stroke="#64748B"
                strokeDasharray="5 5"
                label={{ value: `Team Avg ${teamAvgSplit}s`, fill: '#64748B', fontSize: 10, position: 'insideBottomRight' }}
              />
              <Line
                type="monotone"
                dataKey="split"
                stroke="#2563EB"
                strokeWidth={2}
                dot={<CategoryDot />}
                activeDot={{ r: 6, fill: '#2563EB' }}
              />
              <Line
                type="monotone"
                dataKey="rolling"
                stroke="#94A3B8"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Personal records + Category breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <h3 className="text-sm font-medium text-text-secondary mb-3">Personal Records</h3>
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-text-muted mb-0.5">Best Split Ever</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-good" style={{ fontFamily: 'var(--font-mono)' }}>
                  {formatSplit(bestSession.split)}
                </span>
                <span className="text-xs text-text-muted">
                  on {formatDate(bestSession.date)} — {bestSession.workoutName}
                </span>
              </div>
            </div>
            {cats.map(([cat, stats]) => (
              <div key={cat}>
                <div className="text-[10px] uppercase tracking-wider text-text-muted mb-0.5">
                  Best {getCategoryLabel(cat)}
                </div>
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-mono)', color: getCategoryColor(cat) }}>
                  {stats.avgSplit !== null ? formatSplit(stats.avgSplit) : '—'}
                </span>
                <span className="text-xs text-text-muted ml-1">avg ({stats.sessions} sessions)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-4" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
          <h3 className="text-sm font-medium text-text-secondary mb-3">Category Breakdown</h3>
          <div className="flex flex-col gap-2">
            {cats.map(([cat, stats]) => {
              const pct = stats.sessions / athlete.sessionCount * 100
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span style={{ color: getCategoryColor(cat) }}>{getCategoryLabel(cat)}</span>
                    <span className="text-text-muted">{stats.sessions} sessions</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: getCategoryColor(cat) }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
