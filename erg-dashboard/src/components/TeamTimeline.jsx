import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { sessions } from '../data/ergData'

const CATEGORY_COLORS = {
  steady_state: '#2563EB',
  intervals: '#8B5CF6',
  threshold: '#F59E0B',
  triathlon: '#10B981',
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null
  const d = payload[0].payload
  return (
    <div className="glass-card p-3 text-xs min-w-[200px]">
      <div className="font-mono text-white font-semibold mb-1">{d.dateLabel}</div>
      <div className="text-[#94A3B8] mb-2">{d.workout}</div>
      <div className="flex justify-between mb-1">
        <span className="text-[#64748B]">Team Avg</span>
        <span className="font-mono text-white">{d.teamAvg}s</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-[#64748B]">Best</span>
        <span className="font-mono text-[#10B981]">{d.bestSplit}s ({d.bestAthlete})</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#64748B]">Athletes</span>
        <span className="font-mono text-white">{d.participantCount}</span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full" style={{ background: CATEGORY_COLORS[d.category] }} />
        <span className="text-[#94A3B8] capitalize">{d.category?.replace('_', ' ')}</span>
      </div>
    </div>
  )
}

export default function TeamTimeline() {
  const data = sessions
    .filter(s => s.teamAvg !== null)
    .map(s => ({
      date: s.date,
      dateLabel: new Date(s.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      teamAvg: s.teamAvg,
      bestSplit: s.bestSplit,
      bestAthlete: s.bestAthlete,
      participantCount: s.participantCount,
      workout: s.workout,
      category: s.category,
    }))

  const allAvgs = data.map(d => d.teamAvg)
  const yMin = Math.floor(Math.min(...allAvgs) - 2)
  const yMax = Math.ceil(Math.max(...allAvgs) + 2)

  return (
    <div className="glass-card p-5 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-lg font-bold text-white">Team Performance Timeline</h2>
        <div className="flex items-center gap-4 text-xs text-[#64748B]">
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="capitalize">{cat.replace('_', ' ')}</span>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="avgGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(37,99,235,0.1)" />
          <XAxis
            dataKey="dateLabel"
            tick={{ fill: '#64748B', fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(37,99,235,0.2)' }}
            interval={2}
          />
          <YAxis
            reversed
            domain={[yMin, yMax]}
            tick={{ fill: '#64748B', fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(37,99,235,0.2)' }}
            tickFormatter={v => v + 's'}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="teamAvg"
            stroke="#2563EB"
            strokeWidth={2}
            fill="url(#avgGradient)"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
