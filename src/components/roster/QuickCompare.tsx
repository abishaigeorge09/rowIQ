import { useMemo } from 'react'
import { X } from 'lucide-react'
import { athletes as allAthletes } from '@/data/ergData'
import { teamAvgSplit } from '@/utils/calculations'
import { formatSplit, formatDate } from '@/utils/formatters'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts'

const COLORS = ['#2563EB', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444']

interface Props {
  athleteIds: string[]
  onClose: () => void
}

export default function QuickCompare({ athleteIds, onClose }: Props) {
  const selected = useMemo(
    () => athleteIds.map(id => allAthletes.find(a => a.id === id)!).filter(Boolean),
    [athleteIds]
  )

  const chartData = useMemo(() => {
    const dateSet = new Set<string>()
    selected.forEach(a => a.sessions.forEach(s => dateSet.add(s.date)))
    const dates = [...dateSet].sort()
    return dates.map(d => {
      const point: Record<string, string | number> = { date: d }
      selected.forEach(a => {
        const s = a.sessions.find(s => s.date === d)
        if (s) point[a.name] = s.split
      })
      return point
    })
  }, [selected])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-4xl max-h-[85vh] overflow-auto rounded-2xl p-6 flex flex-col gap-5"
        style={{ background: 'rgba(10,15,30,0.95)', border: '1px solid rgba(37,99,235,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Compare {selected.length} Athletes
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/5"><X size={20} /></button>
        </div>

        {/* Stat comparison cards */}
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${selected.length}, 1fr)` }}>
          {selected.map((a, i) => (
            <div
              key={a.id}
              className="rounded-lg p-3 text-center"
              style={{ background: `${COLORS[i]}15`, border: `1px solid ${COLORS[i]}30` }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: COLORS[i] }}>{a.name}</div>
              <div className="text-xs text-text-muted mb-1">AVG</div>
              <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                {formatSplit(a.avgSplit)}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1 text-[10px]">
                <div><span className="text-text-muted">BEST </span><span className="text-good">{formatSplit(a.bestSplit)}</span></div>
                <div><span className="text-text-muted">SESS </span><span>{a.sessionCount}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis dataKey="date" tickFormatter={d => formatDate(d)} tick={{ fill: '#64748B', fontSize: 10 }} />
              <YAxis reversed domain={['dataMin - 2', 'dataMax + 2']} tick={{ fill: '#64748B', fontSize: 10 }} />
              <Tooltip
                contentStyle={{ background: '#0A0F1E', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 8 }}
                labelFormatter={d => formatDate(d as string)}
              />
              <ReferenceLine y={teamAvgSplit} stroke="#64748B" strokeDasharray="5 5" label={{ value: 'Team Avg', fill: '#64748B', fontSize: 10 }} />
              <Legend />
              {selected.map((a, i) => (
                <Line
                  key={a.id}
                  type="monotone"
                  dataKey={a.name}
                  stroke={COLORS[i]}
                  strokeWidth={2}
                  dot={{ r: 3, fill: COLORS[i] }}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
