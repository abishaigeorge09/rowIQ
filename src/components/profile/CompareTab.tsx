import { useState, useMemo } from 'react'
import type { Athlete } from '@/data/ergData'
import { athletes as allAthletes } from '@/data/ergData'
import { formatSplit, formatDate } from '@/utils/formatters'
import { getSessionsInCommon, teamAvgSplit } from '@/utils/calculations'
import CategoryBadge from '@/components/shared/CategoryBadge'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Legend,
} from 'recharts'

export default function CompareTab({ athlete }: { athlete: Athlete }) {
  const [compareId, setCompareId] = useState<string>('')
  const compareAthlete = allAthletes.find(a => a.id === compareId)

  const chartData = useMemo(() => {
    if (!compareAthlete) return []
    const dateSet = new Set<string>()
    athlete.sessions.forEach(s => dateSet.add(s.date))
    compareAthlete.sessions.forEach(s => dateSet.add(s.date))
    const dates = [...dateSet].sort()
    return dates.map(d => {
      const a = athlete.sessions.find(s => s.date === d)
      const b = compareAthlete.sessions.find(s => s.date === d)
      return {
        date: d,
        [athlete.name]: a?.split,
        [compareAthlete.name]: b?.split,
      }
    })
  }, [athlete, compareAthlete])

  const common = useMemo(
    () => compareAthlete ? getSessionsInCommon(athlete, compareAthlete) : [],
    [athlete, compareAthlete]
  )

  const diff = compareAthlete ? (athlete.avgSplit - compareAthlete.avgSplit) : 0
  const wins = common.filter(s => s.splitA < s.splitB).length

  return (
    <div className="flex flex-col gap-6">
      {/* Athlete picker */}
      <div>
        <label className="text-xs text-text-muted block mb-1.5">Compare with...</label>
        <select
          value={compareId}
          onChange={e => setCompareId(e.target.value)}
          className="w-full max-w-xs px-3 py-2 rounded-lg text-sm text-text"
          style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
        >
          <option value="" style={{ background: '#0A0F1E', color: '#CBD5E1' }}>Select an athlete</option>
          {allAthletes
            .filter(a => a.id !== athlete.id)
            .map(a => (
              <option key={a.id} value={a.id} style={{ background: '#0A0F1E', color: '#CBD5E1' }}>#{a.rank} {a.name} ({formatSplit(a.avgSplit)}s avg)</option>
            ))}
        </select>
      </div>

      {compareAthlete && (
        <>
          {/* Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}>
              <div className="text-xs text-text-muted mb-1">{athlete.name}</div>
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-mono)', color: '#2563EB' }}>
                {formatSplit(athlete.avgSplit)}
              </div>
              <div className="text-xs text-text-muted mt-1">#{athlete.rank} · {athlete.sessionCount} sessions</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <div className="text-xs text-text-muted mb-1">{compareAthlete.name}</div>
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-mono)', color: '#8B5CF6' }}>
                {formatSplit(compareAthlete.avgSplit)}
              </div>
              <div className="text-xs text-text-muted mt-1">#{compareAthlete.rank} · {compareAthlete.sessionCount} sessions</div>
            </div>
          </div>

          <div className="text-center text-sm">
            <span className={diff < 0 ? 'text-good' : 'text-bad'}>
              {athlete.name} is {Math.abs(diff).toFixed(1)}s {diff < 0 ? 'faster' : 'slower'}
            </span>
            {common.length > 0 && (
              <span className="text-text-muted"> · Won {wins}/{common.length} head-to-head sessions</span>
            )}
          </div>

          {/* Overlay chart */}
          <div className="h-64 rounded-xl p-3" style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
                <XAxis dataKey="date" tickFormatter={d => formatDate(d)} tick={{ fill: '#64748B', fontSize: 10 }} />
                <YAxis reversed domain={['dataMin - 2', 'dataMax + 2']} tick={{ fill: '#64748B', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ background: '#0A0F1E', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 8 }}
                  labelFormatter={d => formatDate(d as string)}
                />
                <Legend />
                <ReferenceLine y={teamAvgSplit} stroke="#64748B" strokeDasharray="5 5" />
                <Line type="monotone" dataKey={athlete.name} stroke="#2563EB" strokeWidth={2} dot={{ r: 3 }} connectNulls />
                <Line type="monotone" dataKey={compareAthlete.name} stroke="#8B5CF6" strokeWidth={2} dot={{ r: 3 }} connectNulls />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Head-to-head table */}
          {common.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">Head-to-Head ({common.length} common sessions)</h3>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(27,58,107,0.15)' }}>
                      <th className="text-left px-4 py-2 text-[10px] uppercase text-text-muted">Date</th>
                      <th className="text-left px-4 py-2 text-[10px] uppercase text-text-muted">Workout</th>
                      <th className="text-right px-4 py-2 text-[10px] uppercase" style={{ color: '#2563EB' }}>{athlete.name}</th>
                      <th className="text-right px-4 py-2 text-[10px] uppercase" style={{ color: '#8B5CF6' }}>{compareAthlete.name}</th>
                      <th className="text-right px-4 py-2 text-[10px] uppercase text-text-muted">Diff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {common.map((s, i) => {
                      const d = s.splitA - s.splitB
                      return (
                        <tr key={i} className="border-t" style={{ borderColor: 'rgba(37,99,235,0.1)' }}>
                          <td className="px-4 py-2 text-xs text-text-secondary">{formatDate(s.date)}</td>
                          <td className="px-4 py-2"><CategoryBadge category={s.workoutCategory} /></td>
                          <td className="px-4 py-2 text-right font-bold" style={{ fontFamily: 'var(--font-mono)', color: d <= 0 ? '#10B981' : '#CBD5E1' }}>
                            {formatSplit(s.splitA)}
                          </td>
                          <td className="px-4 py-2 text-right font-bold" style={{ fontFamily: 'var(--font-mono)', color: d >= 0 ? '#10B981' : '#CBD5E1' }}>
                            {formatSplit(s.splitB)}
                          </td>
                          <td className="px-4 py-2 text-right text-xs" style={{ color: d < 0 ? '#10B981' : d > 0 ? '#EF4444' : '#64748B' }}>
                            {d < 0 ? `${Math.abs(d).toFixed(1)}s faster` : d > 0 ? `${d.toFixed(1)}s slower` : 'tied'}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {!compareAthlete && (
        <div className="text-center py-12 text-text-muted">Select an athlete above to compare.</div>
      )}
    </div>
  )
}
